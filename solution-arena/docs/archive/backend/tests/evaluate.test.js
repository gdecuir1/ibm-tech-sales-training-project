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
  console.log('\n🧪 Running Backend Evaluate Route Tests\n');
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
// TEST CASES
// ============================================================================

// Test 1: Evaluate products with valid data
test('POST /api/evaluate/products - valid scenario and products', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'retail-digital-transformation',
    selectedProducts: ['IBM watsonx', 'IBM Cloud Pak for Data']
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertExists(response.data.score, 'Should return score');
  assertExists(response.data.correctProducts, 'Should return correctProducts');
  assertExists(response.data.missingProducts, 'Should return missingProducts');
  assertExists(response.data.incorrectProducts, 'Should return incorrectProducts');
  assert(Array.isArray(response.data.correctProducts), 'correctProducts should be array');
});

// Test 2: Evaluate products with missing scenarioId
test('POST /api/evaluate/products - missing scenarioId', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    selectedProducts: ['IBM watsonx']
  });

  assertEqual(response.status, 400, 'Should return 400 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 3: Evaluate products with missing selectedProducts
test('POST /api/evaluate/products - missing selectedProducts', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'retail-digital-transformation'
  });

  assertEqual(response.status, 400, 'Should return 400 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 4: Evaluate products with invalid scenarioId
test('POST /api/evaluate/products - invalid scenarioId', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'non-existent-scenario',
    selectedProducts: ['IBM watsonx']
  });

  assertEqual(response.status, 404, 'Should return 404 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 5: Evaluate products with empty selectedProducts array
test('POST /api/evaluate/products - empty selectedProducts', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'retail-digital-transformation',
    selectedProducts: []
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertEqual(response.data.score, 0, 'Score should be 0 for empty selection');
  assertEqual(response.data.correctProducts.length, 0, 'Should have no correct products');
});

// Test 6: Evaluate response with valid text
test('POST /api/evaluate/response - valid response text', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'IBM watsonx provides AI capabilities that can help reduce costs by 30% and improve customer satisfaction through personalized recommendations.'
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertExists(response.data.businessScore, 'Should return businessScore');
  assertExists(response.data.objectionScore, 'Should return objectionScore');
  assertExists(response.data.totalScore, 'Should return totalScore');
  assertExists(response.data.feedback, 'Should return feedback');
  assert(Array.isArray(response.data.feedback), 'feedback should be array');
});

// Test 7: Evaluate response with empty text
test('POST /api/evaluate/response - empty response text', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: ''
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.totalScore < 50, 'Score should be low for empty response');
});

// Test 8: Evaluate response with missing responseText
test('POST /api/evaluate/response - missing responseText', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {});

  assertEqual(response.status, 400, 'Should return 400 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 9: Evaluate response with business value keywords
test('POST /api/evaluate/response - response with business value', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'This solution will reduce costs, increase revenue, improve ROI, and deliver measurable business value with strong return on investment.'
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.businessScore > 20, 'Should have high business score');
});

// Test 10: Evaluate response with objection handling
test('POST /api/evaluate/response - response addressing objections', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/response`, {
    responseText: 'I understand your concern about implementation time. However, our proven methodology and dedicated support team ensure smooth deployment. We also address security concerns with enterprise-grade encryption.'
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.objectionScore > 20, 'Should have high objection score');
});

// Test 11: Evaluate products with all correct products
test('POST /api/evaluate/products - all correct products selected', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'retail-digital-transformation',
    selectedProducts: ['IBM watsonx', 'IBM Cloud Pak for Data', 'IBM Sterling Order Management']
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.score >= 80, 'Score should be high for correct products');
  assert(response.data.correctProducts.length > 0, 'Should have correct products');
});

// Test 12: Evaluate products with incorrect products only
test('POST /api/evaluate/products - only incorrect products', async () => {
  const response = await makeRequest('POST', `${API_BASE}/evaluate/products`, {
    scenarioId: 'retail-digital-transformation',
    selectedProducts: ['IBM Power Systems', 'IBM z/OS']
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.score < 50, 'Score should be low for incorrect products');
  assert(response.data.incorrectProducts.length > 0, 'Should have incorrect products');
});

// Run all tests
runTests().catch(console.error);

// Made with Bob