// Products API Routes
const express = require('express');
const router = express.Router();
const { query } = require('../config/database');

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const { category, subcategory, search, limit = 100, offset = 0 } = req.query;
    
    let queryText = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    let paramCount = 1;
    
    if (category) {
      queryText += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }
    
    if (subcategory) {
      queryText += ` AND subcategory = $${paramCount}`;
      params.push(subcategory);
      paramCount++;
    }
    
    if (search) {
      queryText += ` AND (
        name ILIKE $${paramCount} OR 
        description ILIKE $${paramCount} OR
        $${paramCount} = ANY(keywords)
      )`;
      params.push(`%${search}%`);
      paramCount++;
    }
    
    queryText += ` ORDER BY category, name LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
    params.push(limit, offset);
    
    const result = await query(queryText, params);
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id - Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch product' });
  }
});

// GET /api/products/category/:category - Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    
    const result = await query(
      'SELECT * FROM products WHERE category = $1 ORDER BY name',
      [category]
    );
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch products' });
  }
});

// GET /api/products/search/:keyword - Search products by keyword
router.get('/search/:keyword', async (req, res) => {
  try {
    const { keyword } = req.params;
    
    const result = await query(
      `SELECT * FROM products 
       WHERE name ILIKE $1 
       OR description ILIKE $1 
       OR $2 = ANY(keywords)
       ORDER BY name`,
      [`%${keyword}%`, keyword.toLowerCase()]
    );
    
    res.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ success: false, error: 'Failed to search products' });
  }
});

// POST /api/products - Create new product (admin only)
router.post('/', async (req, res) => {
  try {
    const {
      id, name, category, subcategory, description, overview,
      use_cases, strengths, keywords, ideal_customers, pain_points,
      technical_specs, pricing_info, competitive_info
    } = req.body;
    
    const result = await query(
      `INSERT INTO products (
        id, name, category, subcategory, description, overview,
        use_cases, strengths, keywords, ideal_customers, pain_points,
        technical_specs, pricing_info, competitive_info
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`,
      [
        id, name, category, subcategory, description, overview,
        use_cases, strengths, keywords,
        JSON.stringify(ideal_customers),
        JSON.stringify(pain_points),
        JSON.stringify(technical_specs),
        JSON.stringify(pricing_info),
        JSON.stringify(competitive_info)
      ]
    );
    
    res.status(201).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, error: 'Failed to create product' });
  }
});

// PUT /api/products/:id - Update product (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    // Build dynamic update query
    const fields = Object.keys(updates).filter(key => key !== 'id');
    const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(', ');
    const values = [id, ...fields.map(field => {
      const value = updates[field];
      return typeof value === 'object' && !Array.isArray(value) ? JSON.stringify(value) : value;
    })];
    
    const result = await query(
      `UPDATE products SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      values
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id - Delete product (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await query(
      'DELETE FROM products WHERE id = $1 RETURNING id',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    
    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, error: 'Failed to delete product' });
  }
});

module.exports = router;

// Made with Bob
