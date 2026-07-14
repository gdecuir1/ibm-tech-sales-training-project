/**
 * Scenario Selection Route - Implements adaptive difficulty and tracking
 */

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load scenarios
const scenariosPath = path.join(__dirname, '../../shared-data/scenarios.json');
let scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));

// In-memory user history (in production, use database)
const userHistory = new Map();

/**
 * Calculate user's current difficulty level based on performance
 */
function calculateUserLevel(history) {
  if (history.length < 2) return 'beginner';
  if (history.length < 5) {
    const avgScore = history.reduce((sum, h) => sum + h.scorePercentage, 0) / history.length;
    return avgScore >= 70 ? 'intermediate' : 'beginner';
  }
  
  // After 5 scenarios, use recent performance
  const recentHistory = history.slice(-5);
  const avgScore = recentHistory.reduce((sum, h) => sum + h.scorePercentage, 0) / recentHistory.length;
  
  if (avgScore >= 75) return 'advanced';
  if (avgScore >= 65) return 'intermediate';
  return 'beginner';
}

/**
 * Get scenarios user hasn't completed
 */
function getUncompletedScenarios(userId, history) {
  const completedIds = new Set(history.map(h => h.scenarioId));
  return scenarios.filter(s => !completedIds.has(s.id));
}

/**
 * Select next scenario based on user history and performance
 */
function selectNextScenario(userId) {
  const history = userHistory.get(userId) || [];
  
  // Get available scenarios
  let availableScenarios = getUncompletedScenarios(userId, history);
  
  // If user completed all scenarios, reset and allow repeats
  if (availableScenarios.length === 0) {
    availableScenarios = scenarios;
  }
  
  // Determine appropriate difficulty
  let candidateScenarios;
  
  if (history.length === 0) {
    // First scenario: always beginner
    candidateScenarios = availableScenarios.filter(s => s.difficulty === 'beginner');
  } else if (history.length === 1) {
    // Second scenario: beginner
    candidateScenarios = availableScenarios.filter(s => s.difficulty === 'beginner');
  } else if (history.length < 4) {
    // Scenarios 3-4: beginner or intermediate based on performance
    const avgScore = history.reduce((sum, h) => sum + h.scorePercentage, 0) / history.length;
    if (avgScore >= 75) {
      candidateScenarios = availableScenarios.filter(s => s.difficulty === 'intermediate');
    } else {
      candidateScenarios = availableScenarios.filter(s => s.difficulty === 'beginner');
    }
  } else {
    // After 4 scenarios: adaptive difficulty
    const currentLevel = calculateUserLevel(history);
    candidateScenarios = availableScenarios.filter(s => s.difficulty === currentLevel);
    
    // If no scenarios at current level, broaden search
    if (candidateScenarios.length === 0) {
      if (currentLevel === 'advanced') {
        candidateScenarios = availableScenarios.filter(s => 
          s.difficulty === 'intermediate' || s.difficulty === 'advanced'
        );
      } else if (currentLevel === 'beginner') {
        candidateScenarios = availableScenarios.filter(s => 
          s.difficulty === 'beginner' || s.difficulty === 'intermediate'
        );
      } else {
        candidateScenarios = availableScenarios;
      }
    }
  }
  
  // Diversify by industry (avoid repeating same industry consecutively)
  if (history.length > 0 && candidateScenarios.length > 3) {
    const recentIndustries = history.slice(-2).map(h => h.industry);
    const diverseScenarios = candidateScenarios.filter(s => 
      !recentIndustries.includes(s.industry)
    );
    
    if (diverseScenarios.length > 0) {
      candidateScenarios = diverseScenarios;
    }
  }
  
  // Random selection from candidates
  if (candidateScenarios.length === 0) {
    candidateScenarios = availableScenarios;
  }
  
  const selectedScenario = candidateScenarios[
    Math.floor(Math.random() * candidateScenarios.length)
  ];
  
  return selectedScenario;
}

/**
 * GET /api/scenarios/next
 * Get next scenario for user based on their history
 */
router.get('/next', (req, res) => {
  try {
    const userId = req.query.userId || 'default-user';
    const scenario = selectNextScenario(userId);
    
    if (!scenario) {
      return res.status(404).json({ error: 'No scenarios available' });
    }
    
    res.json({
      scenario,
      userProgress: {
        completed: (userHistory.get(userId) || []).length,
        currentLevel: calculateUserLevel(userHistory.get(userId) || [])
      }
    });
  } catch (error) {
    console.error('Error selecting scenario:', error);
    res.status(500).json({ error: 'Failed to select scenario' });
  }
});

/**
 * POST /api/scenarios/complete
 * Record scenario completion
 */
router.post('/complete', (req, res) => {
  try {
    const { userId = 'default-user', scenarioId, score, maxScore, answers } = req.body;
    
    if (!scenarioId || score === undefined || maxScore === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (!scenario) {
      return res.status(404).json({ error: 'Scenario not found' });
    }
    
    const scorePercentage = Math.round((score / maxScore) * 100);
    
    // Get or create user history
    if (!userHistory.has(userId)) {
      userHistory.set(userId, []);
    }
    
    const history = userHistory.get(userId);
    
    // Add completion record
    history.push({
      scenarioId,
      industry: scenario.industry,
      difficulty: scenario.difficulty,
      score,
      maxScore,
      scorePercentage,
      completedAt: new Date().toISOString(),
      answers
    });
    
    // Calculate new level
    const newLevel = calculateUserLevel(history);
    
    res.json({
      success: true,
      scorePercentage,
      newLevel,
      progress: {
        totalCompleted: history.length,
        currentLevel: newLevel,
        averageScore: Math.round(
          history.reduce((sum, h) => sum + h.scorePercentage, 0) / history.length
        )
      }
    });
  } catch (error) {
    console.error('Error recording completion:', error);
    res.status(500).json({ error: 'Failed to record completion' });
  }
});

/**
 * GET /api/scenarios/history
 * Get user's scenario history
 */
router.get('/history', (req, res) => {
  try {
    const userId = req.query.userId || 'default-user';
    const history = userHistory.get(userId) || [];
    
    const stats = {
      totalCompleted: history.length,
      currentLevel: calculateUserLevel(history),
      averageScore: history.length > 0 
        ? Math.round(history.reduce((sum, h) => sum + h.scorePercentage, 0) / history.length)
        : 0,
      byDifficulty: {
        beginner: history.filter(h => h.difficulty === 'beginner').length,
        intermediate: history.filter(h => h.difficulty === 'intermediate').length,
        advanced: history.filter(h => h.difficulty === 'advanced').length
      },
      byIndustry: {}
    };
    
    // Count by industry
    history.forEach(h => {
      stats.byIndustry[h.industry] = (stats.byIndustry[h.industry] || 0) + 1;
    });
    
    res.json({
      history,
      stats
    });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

/**
 * GET /api/scenarios/stats
 * Get overall statistics
 */
router.get('/stats', (req, res) => {
  try {
    const totalScenarios = scenarios.length;
    const byDifficulty = {
      beginner: scenarios.filter(s => s.difficulty === 'beginner').length,
      intermediate: scenarios.filter(s => s.difficulty === 'intermediate').length,
      advanced: scenarios.filter(s => s.difficulty === 'advanced').length
    };
    
    const byIndustry = {};
    scenarios.forEach(s => {
      byIndustry[s.industry] = (byIndustry[s.industry] || 0) + 1;
    });
    
    res.json({
      totalScenarios,
      byDifficulty,
      byIndustry,
      totalUsers: userHistory.size
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

/**
 * DELETE /api/scenarios/history
 * Reset user history (for testing)
 */
router.delete('/history', (req, res) => {
  try {
    const userId = req.query.userId || 'default-user';
    userHistory.delete(userId);
    res.json({ success: true, message: 'History reset' });
  } catch (error) {
    console.error('Error resetting history:', error);
    res.status(500).json({ error: 'Failed to reset history' });
  }
});

module.exports = router;

// Made with Bob
