// User Progress API Routes
const express = require('express');
const router = express.Router();
const { query, transaction } = require('../config/database');

// GET /api/progress/user/:userId - Get all progress for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const result = await query(
      `SELECT p.*, s.title, s.industry, s.difficulty 
       FROM user_progress p
       JOIN scenarios s ON p.scenario_id = s.id
       WHERE p.user_id = $1
       ORDER BY p.last_accessed DESC`,
      [userId]
    );
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Error fetching user progress:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch progress' });
  }
});

// GET /api/progress/user/:userId/scenario/:scenarioId - Get specific scenario progress
router.get('/user/:userId/scenario/:scenarioId', async (req, res) => {
  try {
    const { userId, scenarioId } = req.params;
    
    const result = await query(
      `SELECT * FROM user_progress 
       WHERE user_id = $1 AND scenario_id = $2`,
      [userId, scenarioId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Progress not found' });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching scenario progress:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch progress' });
  }
});

// POST /api/progress - Create or update progress
router.post('/', async (req, res) => {
  try {
    const {
      user_id, scenario_id, status, score, max_score,
      completion_percentage, time_spent, answers
    } = req.body;
    
    const result = await query(
      `INSERT INTO user_progress (
        user_id, scenario_id, status, score, max_score,
        completion_percentage, time_spent, answers, started_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id, scenario_id) DO UPDATE SET
        status = EXCLUDED.status,
        score = EXCLUDED.score,
        max_score = EXCLUDED.max_score,
        completion_percentage = EXCLUDED.completion_percentage,
        time_spent = EXCLUDED.time_spent,
        answers = EXCLUDED.answers,
        last_accessed = CURRENT_TIMESTAMP,
        completed_at = CASE WHEN EXCLUDED.status = 'completed' THEN CURRENT_TIMESTAMP ELSE user_progress.completed_at END
      RETURNING *`,
      [user_id, scenario_id, status, score, max_score, completion_percentage, time_spent, JSON.stringify(answers)]
    );
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ success: false, error: 'Failed to save progress' });
  }
});

// POST /api/progress/attempt - Record a scenario attempt
router.post('/attempt', async (req, res) => {
  try {
    const {
      user_id, scenario_id, attempt_number, score, max_score,
      percentage, time_spent, answers, skill_scores, recommendations,
      started_at, completed_at
    } = req.body;
    
    const result = await transaction(async (client) => {
      // Insert attempt
      const attemptResult = await client.query(
        `INSERT INTO scenario_attempts (
          user_id, scenario_id, attempt_number, score, max_score,
          percentage, time_spent, answers, skill_scores, recommendations,
          started_at, completed_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *`,
        [
          user_id, scenario_id, attempt_number, score, max_score,
          percentage, time_spent, JSON.stringify(answers),
          JSON.stringify(skill_scores), JSON.stringify(recommendations),
          started_at, completed_at
        ]
      );
      
      // Update user progress
      await client.query(
        `INSERT INTO user_progress (
          user_id, scenario_id, status, score, max_score,
          completion_percentage, time_spent, answers, completed_at
        ) VALUES ($1, $2, 'completed', $3, $4, 100, $5, $6, $7)
        ON CONFLICT (user_id, scenario_id) DO UPDATE SET
          status = 'completed',
          score = GREATEST(user_progress.score, EXCLUDED.score),
          completion_percentage = 100,
          time_spent = user_progress.time_spent + EXCLUDED.time_spent,
          completed_at = EXCLUDED.completed_at,
          last_accessed = CURRENT_TIMESTAMP`,
        [user_id, scenario_id, score, max_score, time_spent, JSON.stringify(answers), completed_at]
      );
      
      return attemptResult.rows[0];
    });
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error recording attempt:', error);
    res.status(500).json({ success: false, error: 'Failed to record attempt' });
  }
});

// GET /api/progress/user/:userId/attempts - Get all attempts for a user
router.get('/user/:userId/attempts', async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 20, offset = 0 } = req.query;
    
    const result = await query(
      `SELECT a.*, s.title, s.industry, s.difficulty
       FROM scenario_attempts a
       JOIN scenarios s ON a.scenario_id = s.id
       WHERE a.user_id = $1
       ORDER BY a.completed_at DESC
       LIMIT $2 OFFSET $3`,
      [userId, limit, offset]
    );
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching attempts:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch attempts' });
  }
});

// GET /api/progress/user/:userId/stats - Get user statistics
router.get('/user/:userId/stats', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const stats = await query(
      `SELECT 
        COUNT(DISTINCT scenario_id) as scenarios_attempted,
        COUNT(DISTINCT CASE WHEN status = 'completed' THEN scenario_id END) as scenarios_completed,
        AVG(CASE WHEN status = 'completed' THEN score END) as average_score,
        SUM(time_spent) as total_time_spent,
        MAX(completed_at) as last_completed
       FROM user_progress
       WHERE user_id = $1`,
      [userId]
    );
    
    const attempts = await query(
      `SELECT COUNT(*) as total_attempts,
              AVG(percentage) as average_percentage
       FROM scenario_attempts
       WHERE user_id = $1`,
      [userId]
    );
    
    res.json({
      success: true,
      data: {
        ...stats.rows[0],
        ...attempts.rows[0]
      }
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch stats' });
  }
});

module.exports = router;

// Made with Bob
