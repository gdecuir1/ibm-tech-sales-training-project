const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load scenarios data
const scenariosPath = path.join(__dirname, '../../shared-data/scenarios.json');

/**
 * POST /scoring/evaluate
 * Evaluates user answers for a scenario and returns detailed scoring
 */
router.post('/evaluate', (req, res) => {
  try {
    const { scenarioId, answers } = req.body;
    
    if (!scenarioId || !answers) {
      return res.status(400).json({ error: 'Missing scenarioId or answers' });
    }

    const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
    const scenario = scenarios.find(s => s.id === scenarioId);
    
    if (!scenario) {
      return res.status(404).json({ error: 'Scenario not found' });
    }

    // Calculate scores for each question
    const questionScores = {};
    const categoryScores = {
      businessUnderstanding: { score: 0, maxScore: 0 },
      powerPositioning: { score: 0, maxScore: 0 },
      cloudPositioning: { score: 0, maxScore: 0 },
      portfolioKnowledge: { score: 0, maxScore: 0 },
      objectionHandling: { score: 0, maxScore: 0 }
    };

    scenario.questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (!userAnswer) return;

      let questionScore = 0;
      let maxQuestionScore = 0;
      let feedback = '';
      let correctAnswers = [];
      let incorrectAnswers = [];

      switch (question.type) {
        case 'priorities':
        case 'technology-selection':
        case 'justification':
          // Multi-select questions
          const selectedOptions = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
          const correctOptions = question.options.filter(opt => opt.correct);
          
          maxQuestionScore = correctOptions.reduce((sum, opt) => sum + opt.weight, 0);
          
          selectedOptions.forEach(selectedId => {
            const option = question.options.find(opt => opt.id === selectedId);
            if (option) {
              if (option.correct) {
                questionScore += option.weight;
                correctAnswers.push(option.text);
              } else {
                incorrectAnswers.push(option.text);
              }
            }
          });

          // Determine feedback level
          const percentCorrect = maxQuestionScore > 0 ? (questionScore / maxQuestionScore) * 100 : 0;
          if (percentCorrect >= 80) {
            feedback = question.feedback?.excellent || question.feedback?.correct || 'Excellent work!';
          } else if (percentCorrect >= 50) {
            feedback = question.feedback?.good || question.feedback?.partial || 'Good, but review the scenario for missed opportunities.';
          } else {
            feedback = question.feedback?.['needs-improvement'] || question.feedback?.incorrect || 'Review the scenario requirements carefully.';
          }
          break;

        case 'architecture':
        case 'objection':
        case 'cross-sell':
          // Single-select questions
          const selectedOption = question.options.find(opt => opt.id === userAnswer);
          if (selectedOption) {
            questionScore = selectedOption.correct ? (selectedOption.score || 10) : 0;
            maxQuestionScore = Math.max(...question.options.map(opt => opt.score || 10));
            
            if (selectedOption.correct) {
              correctAnswers.push(selectedOption.text);
              feedback = selectedOption.reasoning || 'Correct!';
            } else {
              incorrectAnswers.push(selectedOption.text);
              const correctOpt = question.options.find(opt => opt.correct);
              feedback = `Incorrect. ${selectedOption.reasoning || ''} The better answer is: ${correctOpt?.text}. ${correctOpt?.reasoning || ''}`;
            }
          }
          break;
      }

      questionScores[question.id] = {
        score: questionScore,
        maxScore: maxQuestionScore,
        percentage: maxQuestionScore > 0 ? Math.round((questionScore / maxQuestionScore) * 100) : 0,
        feedback,
        correctAnswers,
        incorrectAnswers
      };
    });

    // Calculate category scores based on scoring breakdown
    if (scenario.scoringBreakdown) {
      Object.keys(scenario.scoringBreakdown).forEach(category => {
        const categoryConfig = scenario.scoringBreakdown[category];
        let categoryScore = 0;
        let categoryMax = 0;

        categoryConfig.questions.forEach(questionId => {
          const qScore = questionScores[questionId];
          if (qScore) {
            categoryScore += qScore.score;
            categoryMax += qScore.maxScore;
          }
        });

        // Normalize to the category's maxScore
        const normalizedScore = categoryMax > 0 
          ? Math.round((categoryScore / categoryMax) * categoryConfig.maxScore)
          : 0;

        categoryScores[category] = {
          score: normalizedScore,
          maxScore: categoryConfig.maxScore,
          percentage: Math.round((normalizedScore / categoryConfig.maxScore) * 100)
        };
      });
    }

    // Calculate overall score
    const totalScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.score, 0);
    const totalMaxScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.maxScore, 0);
    const overallPercentage = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

    // Determine performance level
    let performanceLevel = 'needs-improvement';
    let performanceMessage = 'Keep practicing! Review the scenario requirements and IBM portfolio.';
    
    if (overallPercentage >= 90) {
      performanceLevel = 'excellent';
      performanceMessage = 'Outstanding! You demonstrated strong technical sales skills and IBM portfolio knowledge.';
    } else if (overallPercentage >= 75) {
      performanceLevel = 'good';
      performanceMessage = 'Good work! You understand the key concepts. Review feedback to refine your approach.';
    } else if (overallPercentage >= 60) {
      performanceLevel = 'satisfactory';
      performanceMessage = 'Satisfactory performance. Focus on aligning solutions with business priorities.';
    }

    res.json({
      scenarioId,
      overallScore: {
        score: totalScore,
        maxScore: totalMaxScore,
        percentage: overallPercentage,
        performanceLevel,
        message: performanceMessage
      },
      categoryScores,
      questionScores,
      idealSolution: scenario.idealSolution
    });

  } catch (error) {
    console.error('Error evaluating scenario:', error);
    res.status(500).json({ error: 'Failed to evaluate scenario' });
  }
});

/**
 * GET /scoring/leaderboard
 * Returns mock leaderboard data (can be enhanced with database)
 */
router.get('/leaderboard', (req, res) => {
  // Mock leaderboard - in production, this would come from a database
  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', score: 94, scenariosCompleted: 15, specialty: 'Power & Cloud' },
    { rank: 2, name: 'Michael Rodriguez', score: 91, scenariosCompleted: 12, specialty: 'Hybrid Cloud' },
    { rank: 3, name: 'Emily Johnson', score: 88, scenariosCompleted: 18, specialty: 'Security' },
    { rank: 4, name: 'David Kim', score: 85, scenariosCompleted: 10, specialty: 'AI & Data' },
    { rank: 5, name: 'Jessica Martinez', score: 83, scenariosCompleted: 14, specialty: 'Power Systems' }
  ];

  res.json(leaderboard);
});

module.exports = router;

// Made with Bob