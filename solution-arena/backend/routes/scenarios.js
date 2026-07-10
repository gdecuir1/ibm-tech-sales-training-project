const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load scenarios data
const scenariosPath = path.join(__dirname, '../../shared-data/scenarios.json');

/**
 * GET /scenario/random
 * Returns a random scenario
 */
router.get('/random', (req, res) => {
  try {
    const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
    
    if (!scenarios || scenarios.length === 0) {
      return res.status(404).json({ error: 'No scenarios available' });
    }
    
    // Get random scenario
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    const scenario = scenarios[randomIndex];
    
    res.json(scenario);
  } catch (error) {
    console.error('Error loading scenario:', error);
    res.status(500).json({ error: 'Failed to load scenario' });
  }
});

/**
 * GET /scenario/:id
 * Returns a specific scenario by ID
 */
router.get('/:id', (req, res) => {
  try {
    const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
    const scenario = scenarios.find(s => s.id === req.params.id);
    
    if (!scenario) {
      return res.status(404).json({ error: 'Scenario not found' });
    }
    
    res.json(scenario);
  } catch (error) {
    console.error('Error loading scenario:', error);
    res.status(500).json({ error: 'Failed to load scenario' });
  }
});

module.exports = router;

// Made with Bob
