const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../logic/productMatcher');

/**
 * GET /products
 * Returns all available IBM products
 */
router.get('/', (req, res) => {
  try {
    const products = getAllProducts();
    res.json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    res.status(500).json({ error: 'Failed to load products' });
  }
});

module.exports = router;

// Made with Bob
