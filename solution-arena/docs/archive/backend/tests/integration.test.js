const http = require('http');

// Test configuration
const BASE_URL = 'http://localhost:3001';
const API_BASE = BASE_URL;

// Test utilities
function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = data ? JSON.parse(data) : null;
          resolve({ status: res.statusCode, data: parsed, headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data, headers: res.headers });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

// Test suite
const tests = [];
let passed = 0;
let failed = 0;

function test(name, fn) {
  tests.push({ name, fn });
}

async function runTests() {
  console.log('\n🧪 Running Integration Tests - Complete User Flow\n');
  console.log('='.repeat(60));

  for (const { name, fn } of tests) {
    try {
      await fn();
      passed++;
      console.log(`✅ PASS: ${name}`);
    } catch (error) {
      failed++;
      console.log(`❌ FAIL: ${name}`);
      console.log(`   Error: ${error.message}`);
    }
  }

  console.log('='.repeat(60));
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed, ${tests.length} total\n`);
  process.exit(failed > 0 ? 1 : 0);
}

// Assertion helpers
function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

function assertExists(value, message) {
  if (value === null || value === undefined) {
    throw new Error(message || 'Value should exist');
  }
}

// ============================================================================
// INTEGRATION TEST CASES - Complete User Flow
// ============================================================================

// Test 1: Complete scenario flow - Load scenario
test('FLOW Step 1: Load random scenario', async () => {
  const response = await makeRequest('GET', `${API_BASE}/scenario/random`);

  assertEqual(response.status, 200, 'Should load scenario successfully');
  assertExists(response.data.id, 'Scenario should have id');
  assertExists(response.data.company, 'Scenario should have company');
  assertExists(response.data.industry, 'Scenario should have industry');
  assertExists(response.data.pain_points, 'Scenario should have pain_points');
  assert(Array.isArray(response.data.pain_points), 'pain_points should be array');
  assert(response.data.pain_points.length > 0, 'Should have at least one pain point');
});

// Test 2: Complete scenario flow - Load products
test('FLOW Step 2: Load available products', async () => {
  const response = await makeRequest('GET', `${API_BASE}/products`);

  assertEqual(response.status, 200, 'Should load products successfully');
  assert(Array.isArray(response.data), 'Products should be array');
  assert(response.data.length > 0, 'Should have at least one product');
  
  const firstProduct = response.data[0];
  assertExists(firstProduct.name, 'Product should have name');
  assertExists(firstProduct.category, 'Product should have category');
});

// Test 3: Complete scenario flow - Select products and generate objections
test('FLOW Step 3: Select products and generate objections', async () => {
  // First get a scenario
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  // Generate objections
  const response = await makeRequest('POST', `${API_BASE}/objections/generate`, {
    scenarioId: scenario.id,
    selectedProducts: ['IBM watsonx', 'IBM Cloud Pak for Data']
  });

  assertEqual(response.status, 200, 'Should generate objections successfully');
  assertExists(response.data.objections, 'Should return objections');
  assert(Array.isArray(response.data.objections), 'Objections should be array');
  assert(response.data.objections.length > 0, 'Should have at least one objection');
});

// Test 4: Complete scenario flow - Evaluate product selection
test('FLOW Step 4: Evaluate product selection', async () => {
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: scenario.id,
    selectedProducts: ['IBM watsonx', 'IBM Cloud Pak for Data']
  });

  assertEqual(response.status, 200, 'Should evaluate products successfully');
  assertExists(response.data.score, 'Should return score');
  assert(response.data.score >= 0 && response.data.score <= 100, 'Score should be 0-100');
  assertExists(response.data.correctProducts, 'Should return correct products');
  assertExists(response.data.missingProducts, 'Should return missing products');
  assertExists(response.data.incorrectProducts, 'Should return incorrect products');
});

// Test 5: Complete scenario flow - Evaluate response
test('FLOW Step 5: Evaluate user response to objections', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'IBM watsonx provides AI capabilities that reduce costs by 30% and improve customer satisfaction. Our proven implementation methodology addresses security concerns with enterprise-grade encryption.'
  });

  assertEqual(response.status, 200, 'Should evaluate response successfully');
  assertExists(response.data.businessScore, 'Should return business score');
  assertExists(response.data.objectionScore, 'Should return objection score');
  assertExists(response.data.totalScore, 'Should return total score');
  assertExists(response.data.feedback, 'Should return feedback');
  assert(Array.isArray(response.data.feedback), 'Feedback should be array');
});

// Test 6: Interactive scenario flow - Complete evaluation
test('FLOW Step 6: Complete interactive scenario evaluation', async () => {
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: scenario.id,
    answers: {
      'priorities': ['cost-reduction', 'scalability'],
      'tech-selection': ['hybrid-cloud', 'containers']
    }
  });

  assertEqual(response.status, 200, 'Should evaluate scenario successfully');
  assertExists(response.data.overallScore, 'Should return overall score');
  assertExists(response.data.categoryScores, 'Should return category scores');
  assertExists(response.data.questionScores, 'Should return question scores');
  assertExists(response.data.idealSolution, 'Should return ideal solution');
});

// Test 7: Edge case - Empty product selection
test('EDGE CASE: Submit with no products selected', async () => {
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: scenario.id,
    selectedProducts: []
  });

  assertEqual(response.status, 200, 'Should handle empty selection');
  assertEqual(response.data.score, 0, 'Score should be 0');
  assertEqual(response.data.correctProducts.length, 0, 'No correct products');
});

// Test 8: Edge case - Very short response
test('EDGE CASE: Submit very short response', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'Yes'
  });

  assertEqual(response.status, 200, 'Should handle short response');
  assert(response.data.totalScore < 30, 'Score should be low for short response');
});

// Test 9: Edge case - Very long response
test('EDGE CASE: Submit very long response', async () => {
  const longText = 'IBM watsonx provides comprehensive AI capabilities. '.repeat(50);
  
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: longText
  });

  assertEqual(response.status, 200, 'Should handle long response');
  assertExists(response.data.totalScore, 'Should return score');
});

// Test 10: Edge case - Special characters in response
test('EDGE CASE: Submit response with special characters', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'IBM watsonx™ provides AI & ML capabilities! Cost reduction: 30% 💰 ROI = $1M+'
  });

  assertEqual(response.status, 200, 'Should handle special characters');
  assertExists(response.data.totalScore, 'Should return score');
});

// Test 11: Edge case - Invalid scenario ID in flow
test('EDGE CASE: Use invalid scenario ID', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'invalid-scenario-12345',
    selectedProducts: ['IBM watsonx']
  });

  assertEqual(response.status, 404, 'Should return 404 for invalid scenario');
  assertExists(response.data.error, 'Should return error message');
});

// Test 12: Edge case - Null values
test('EDGE CASE: Submit null values', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: null,
    selectedProducts: null
  });

  assertEqual(response.status, 400, 'Should return 400 for null values');
  assertExists(response.data.error, 'Should return error message');
});

// Test 13: Verify case study display data
test('VERIFY: Case study displays all required fields', async () => {
  const response = await makeRequest('GET', `${API_BASE}/scenario/random`);

  assertEqual(response.status, 200, 'Should load scenario');
  
  // Verify all display fields exist
  assertExists(response.data.company, 'Should have company name');
  assertExists(response.data.industry, 'Should have industry');
  assertExists(response.data.size, 'Should have company size');
  assertExists(response.data.pain_points, 'Should have pain points');
  assertExists(response.data.tech_stack, 'Should have tech stack');
  assertExists(response.data.objectives, 'Should have objectives');
  
  // Verify arrays are not empty
  assert(response.data.pain_points.length > 0, 'Should have pain points');
  assert(response.data.tech_stack.length > 0, 'Should have tech stack items');
  assert(response.data.objectives.length > 0, 'Should have objectives');
});

// Test 14: Verify input processing
test('VERIFY: Inputs are processed correctly', async () => {
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  // Test product selection processing
  const products = ['IBM watsonx', 'IBM Cloud Pak for Data', 'IBM Sterling'];
  const evalRes = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: scenario.id,
    selectedProducts: products
  });

  assertEqual(evalRes.status, 200, 'Should process product selection');
  
  // Verify all selected products are accounted for
  const allProducts = [
    ...evalRes.data.correctProducts,
    ...evalRes.data.incorrectProducts
  ];
  assert(allProducts.length <= products.length, 'All products should be categorized');
});

// Test 15: Verify output display
test('VERIFY: Output is displayed with all required fields', async () => {
  const scenarioRes = await makeRequest('GET', `${API_BASE}/scenario/random`);
  const scenario = scenarioRes.data;

  const evalRes = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: scenario.id,
    selectedProducts: ['IBM watsonx']
  });

  const responseRes = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'IBM watsonx reduces costs and improves efficiency'
  });

  // Verify product evaluation output
  assertEqual(evalRes.status, 200, 'Product evaluation should succeed');
  assertExists(evalRes.data.score, 'Should display score');
  assertExists(evalRes.data.correctProducts, 'Should display correct products');
  assertExists(evalRes.data.missingProducts, 'Should display missing products');
  assertExists(evalRes.data.incorrectProducts, 'Should display incorrect products');

  // Verify response evaluation output
  assertEqual(responseRes.status, 200, 'Response evaluation should succeed');
  assertExists(responseRes.data.businessScore, 'Should display business score');
  assertExists(responseRes.data.objectionScore, 'Should display objection score');
  assertExists(responseRes.data.totalScore, 'Should display total score');
  assertExists(responseRes.data.feedback, 'Should display feedback');
  assert(responseRes.data.feedback.length > 0, 'Should have feedback items');
});

// Run all tests
runTests().catch(console.error);

// Made with Bob