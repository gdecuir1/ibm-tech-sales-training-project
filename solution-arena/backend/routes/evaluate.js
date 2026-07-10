const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { getIdealProducts, evaluateProductSelection } = require('../logic/productMatcher');
const { generateObjections } = require('../logic/objectionGenerator');
const { evaluateResponse } = require('../logic/responseEvaluator');

// Load scenarios data
const scenariosPath = path.join(__dirname, '../../shared-data/scenarios.json');

/**
 * POST /evaluate/products
 * Evaluates user's product selection
 * Body: { scenarioId, selectedProducts }
 */
router.post('/products', (req, res) => {
  try {
    const { scenarioId, selectedProducts } = req.body;
    
    if (!scenarioId || !selectedProducts) {
      return res.status(400).json({ error: 'Missing required fields: scenarioId, selectedProducts' });
    }
    
    // Load scenario
    const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
    const scenario = scenarios.find(s => s.id === scenarioId);
    
    if (!scenario) {
      return res.status(404).json({ error: 'Scenario not found' });
    }
    
    // Get ideal products based on pain points
    const idealProducts = getIdealProducts(scenario.pain_points);
    
    // Evaluate selection
    const evaluation = evaluateProductSelection(selectedProducts, idealProducts);
    
    res.json({
      score: evaluation.score,
      correctProducts: evaluation.correctProducts,
      missingProducts: evaluation.missingProducts,
      incorrectProducts: evaluation.incorrectProducts,
      idealProducts: evaluation.idealProducts
    });
  } catch (error) {
    console.error('Error evaluating products:', error);
    res.status(500).json({ error: 'Failed to evaluate products' });
  }
});

/**
 * POST /evaluate/response
 * Evaluates user's response to objections
 * Body: { responseText }
 */
router.post('/response', (req, res) => {
  try {
    const { responseText } = req.body;
    
    if (responseText === undefined || responseText === null) {
      return res.status(400).json({ error: 'Missing required field: responseText' });
    }
    
    // Evaluate response
    const evaluation = evaluateResponse(responseText);
    
    res.json({
      businessScore: evaluation.businessScore,
      objectionScore: evaluation.objectionScore,
      totalScore: evaluation.totalScore,
      feedback: evaluation.feedback
    });
  } catch (error) {
    console.error('Error evaluating response:', error);
    res.status(500).json({ error: 'Failed to evaluate response' });
  }
});

module.exports = router;

// Made with Bob
