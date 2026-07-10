const fs = require('fs');
const path = require('path');

// Load objections data
const objectionsPath = path.join(__dirname, '../../shared-data/objections.json');
const objections = JSON.parse(fs.readFileSync(objectionsPath, 'utf8'));

/**
 * Generate objections based on scenario and selected products
 * @param {Object} scenario - The scenario object
 * @param {Array} selectedProducts - User's selected product names
 * @returns {Array} - Array of exactly 2 objection objects
 */
function generateObjections(scenario, selectedProducts) {
  const triggeredObjections = [];
  
  // Rule 1: Check tech stack for vendor lock-in objections
  if (scenario.tech_stack) {
    scenario.tech_stack.forEach(tech => {
      const objection = objections.find(obj => obj.trigger === tech);
      if (objection && !triggeredObjections.includes(objection)) {
        triggeredObjections.push(objection);
      }
    });
  }
  
  // Rule 2: Check if user selected more than 2 products (complexity)
  if (selectedProducts.length > 2) {
    const complexityObjection = objections.find(obj => obj.trigger === 'complexity');
    if (complexityObjection && !triggeredObjections.includes(complexityObjection)) {
      triggeredObjections.push(complexityObjection);
    }
  }
  
  // Rule 3: Add multi-product objection if multiple products selected
  if (selectedProducts.length >= 2) {
    const multiProductObjection = objections.find(obj => obj.trigger === 'multi_product');
    if (multiProductObjection && !triggeredObjections.includes(multiProductObjection)) {
      triggeredObjections.push(multiProductObjection);
    }
  }
  
  // Rule 4: Add cost objection as fallback
  const costObjection = objections.find(obj => obj.trigger === 'cost');
  if (costObjection && !triggeredObjections.includes(costObjection)) {
    triggeredObjections.push(costObjection);
  }
  
  // Rule 5: Add implementation objection as fallback
  const implementationObjection = objections.find(obj => obj.trigger === 'implementation');
  if (implementationObjection && !triggeredObjections.includes(implementationObjection)) {
    triggeredObjections.push(implementationObjection);
  }
  
  // Always return exactly 2 objections
  return triggeredObjections.slice(0, 2);
}

module.exports = {
  generateObjections
};

// Made with Bob
