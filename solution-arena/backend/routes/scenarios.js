// Scenarios API Routes
const express = require('express');
const router = express.Router();
const { query } = require('../config/database');

// GET /api/scenarios - Get all scenarios
router.get('/', async (req, res) => {
  try {
    const { industry, difficulty, limit = 50, offset = 0 } = req.query;
    
    let queryText = 'SELECT * FROM scenarios WHERE is_active = true';
    const params = [];
    let paramCount = 1;
    
    if (industry) {
      queryText += ` AND industry = $${paramCount}`;
      params.push(industry);
      paramCount++;
    }
    
    if (difficulty) {
      queryText += ` AND difficulty = $${paramCount}`;
      params.push(difficulty);
      paramCount++;
    }
    
    queryText += ` ORDER BY created_at DESC LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
    params.push(limit, offset);
    
    const result = await query(queryText, params);
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching scenarios:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch scenarios' });
  }
});

// GET /api/scenarios/:id - Get scenario by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get scenario
    const scenarioResult = await query(
      'SELECT * FROM scenarios WHERE id = $1 AND is_active = true',
      [id]
    );
    
    if (scenarioResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Scenario not found' });
    }
    
    const scenario = scenarioResult.rows[0];
    
    // Get questions for this scenario
    const questionsResult = await query(
      'SELECT * FROM scenario_questions WHERE scenario_id = $1 ORDER BY question_order',
      [id]
    );
    
    scenario.questions = questionsResult.rows;
    
    res.json({
      success: true,
      data: scenario
    });
  } catch (error) {
    console.error('Error fetching scenario:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch scenario' });
  }
});

// GET /api/scenarios/industry/:industry - Get scenarios by industry
router.get('/industry/:industry', async (req, res) => {
  try {
    const { industry } = req.params;
    
    const result = await query(
      'SELECT * FROM scenarios WHERE industry = $1 AND is_active = true ORDER BY difficulty, title',
      [industry]
    );
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching scenarios by industry:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch scenarios' });
  }
});

// POST /api/scenarios - Create new scenario (admin only)
router.post('/', async (req, res) => {
  try {
    const {
      id, title, description, difficulty, estimated_time, company, industry,
      size, revenue, employees, brief, current_environment, business_goals,
      constraints, ideal_solution, scoring_breakdown, tags
    } = req.body;
    
    const result = await query(
      `INSERT INTO scenarios (
        id, title, description, difficulty, estimated_time, company, industry,
        size, revenue, employees, brief, current_environment, business_goals,
        constraints, ideal_solution, scoring_breakdown, tags
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      RETURNING *`,
      [
        id, title, description, difficulty, estimated_time, company, industry,
        size, revenue, employees, brief, JSON.stringify(current_environment),
        business_goals, JSON.stringify(constraints), JSON.stringify(ideal_solution),
        JSON.stringify(scoring_breakdown), tags
      ]
    );
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating scenario:', error);
    res.status(500).json({ success: false, error: 'Failed to create scenario' });
  }
});

// PUT /api/scenarios/:id - Update scenario (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    // Build dynamic update query
    const fields = Object.keys(updates).filter(key => key !== 'id');
    const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(', ');
    const values = [id, ...fields.map(field => {
      const value = updates[field];
      return typeof value === 'object' ? JSON.stringify(value) : value;
    })];
    
    const result = await query(
      `UPDATE scenarios SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      values
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Scenario not found' });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating scenario:', error);
    res.status(500).json({ success: false, error: 'Failed to update scenario' });
  }
});

// DELETE /api/scenarios/:id - Soft delete scenario (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(
      'UPDATE scenarios SET is_active = false WHERE id = $1 RETURNING id',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Scenario not found' });
    }
    
    res.json({
      success: true,
      message: 'Scenario deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting scenario:', error);
    res.status(500).json({ success: false, error: 'Failed to delete scenario' });
  }
});

module.exports = router;

// Made with Bob
