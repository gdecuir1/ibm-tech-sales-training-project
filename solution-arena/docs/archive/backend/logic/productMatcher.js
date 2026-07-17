const fs = require('fs');
const path = require('path');

// Load products data
const productsPath = path.join(__dirname, '../../shared-data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Explicit pain point to product mapping
const painPointToProduct = {
  "rising cloud costs": ["IBM Turbonomic"],
  "compliance risks with patient data": ["IBM QRadar", "IBM Cloud Pak for Data"],
  "compliance risks with financial regulations": ["IBM QRadar"],
  "data fragmentation": ["IBM Cloud Pak for Data"],
  "data fragmentation across multiple systems": ["IBM Cloud Pak for Data"],
  "data fragmentation across stores": ["IBM Cloud Pak for Data"],
  "lack of observability": ["IBM Instana"],
  "lack of observability in critical applications": ["IBM Instana"],
  "lack of observability in microservices": ["IBM Instana"],
  "lack of observability in IoT devices": ["IBM Instana"],
  "ai adoption challenges": ["IBM WatsonX"],
  "supply chain visibility issues": ["IBM Sterling Supply Chain"],
  "security threats and fraud detection": ["IBM QRadar"],
  "api management complexity": ["IBM API Connect"]
};

/**
 * Get ideal products for a scenario based on pain points
 * @param {Array} painPoints - Array of pain point strings
 * @returns {Array} - Array of ideal product names
 */
function getIdealProducts(painPoints) {
  // Handle null/undefined painPoints
  if (!painPoints || !Array.isArray(painPoints)) {
    return [];
  }
  
  const idealProductsSet = new Set();
  
  painPoints.forEach(painPoint => {
    const matchedProducts = painPointToProduct[painPoint];
    if (matchedProducts) {
      matchedProducts.forEach(product => idealProductsSet.add(product));
    }
  });
  
  return Array.from(idealProductsSet);
}

/**
 * Evaluate user's product selection against ideal products
 * @param {Array} selectedProducts - User's selected product names
 * @param {Array} idealProducts - Ideal product names for the scenario
 * @returns {Object} - Score and feedback
 */
function evaluateProductSelection(selectedProducts, idealProducts) {
  const selectedSet = new Set(selectedProducts);
  const idealSet = new Set(idealProducts);
  
  // Find correct, missing, and incorrect products
  const correctProducts = selectedProducts.filter(p => idealSet.has(p));
  const missingProducts = idealProducts.filter(p => !selectedSet.has(p));
  const incorrectProducts = selectedProducts.filter(p => !idealSet.has(p));
  
  // Calculate score
  // +20 points per correct product
  // -10 points per incorrect product
  let score = (correctProducts.length * 20) - (incorrectProducts.length * 10);
  
  // Cap between 0 and 100
  score = Math.max(0, Math.min(100, score));
  
  return {
    score,
    correctProducts,
    missingProducts,
    incorrectProducts,
    idealProducts
  };
}

/**
 * Get all available products
 * @returns {Array} - Array of all products
 */
function getAllProducts() {
  return products;
}

module.exports = {
  getIdealProducts,
  evaluateProductSelection,
  getAllProducts
};

// Made with Bob
