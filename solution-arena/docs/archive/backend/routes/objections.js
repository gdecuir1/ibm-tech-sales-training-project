const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { generateObjections } = require('../logic/objectionGenerator');

// Load scenarios data
const scenariosPath = path.join(__dirname, '../../shared-data/scenarios.json');

/**
 * POST /objections/generate
 * Generates objections based on scenario and selected products
 * Body: { scenarioId, selectedProducts }
 */
router.post('/generate', (req, res) => {
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
    
    // Generate objections
    const objections = generateObjections(scenario, selectedProducts);
    
    res.json({
      objections: objections
    });
  } catch (error) {
    console.error('Error generating objections:', error);
    res.status(500).json({ error: 'Failed to generate objections' });
  }
});

module.exports = router;

// Made with Bob
