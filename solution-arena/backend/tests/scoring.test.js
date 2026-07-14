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
  console.log('\n🧪 Running Backend Scoring Route Tests\n');
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

// Test 1: Evaluate scenario with valid data
test('POST /api/scoring/evaluate - valid scenario and answers', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction', 'scalability'],
      'tech-selection': ['hybrid-cloud', 'containers']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertExists(response.data.overallScore, 'Should return overallScore');
  assertExists(response.data.categoryScores, 'Should return categoryScores');
  assertExists(response.data.questionScores, 'Should return questionScores');
  assertExists(response.data.idealSolution, 'Should return idealSolution');
});

// Test 2: Evaluate scenario with missing scenarioId
test('POST /api/scoring/evaluate - missing scenarioId', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    answers: { 'priorities': ['cost-reduction'] }
  });

  assertEqual(response.status, 400, 'Should return 400 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 3: Evaluate scenario with missing answers
test('POST /api/scoring/evaluate - missing answers', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration'
  });

  assertEqual(response.status, 400, 'Should return 400 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 4: Evaluate scenario with invalid scenarioId
test('POST /api/scoring/evaluate - invalid scenarioId', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'non-existent-scenario',
    answers: { 'priorities': ['cost-reduction'] }
  });

  assertEqual(response.status, 404, 'Should return 404 status');
  assertExists(response.data.error, 'Should return error message');
});

// Test 5: Evaluate scenario with empty answers object
test('POST /api/scoring/evaluate - empty answers object', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {}
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertEqual(response.data.overallScore.score, 0, 'Score should be 0 for empty answers');
});

// Test 6: Evaluate scenario with partial answers
test('POST /api/scoring/evaluate - partial answers', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.overallScore.score >= 0, 'Should have valid score');
  assertExists(response.data.overallScore.percentage, 'Should have percentage');
});

// Test 7: Verify overall score structure
test('POST /api/scoring/evaluate - verify overallScore structure', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction', 'scalability']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertExists(response.data.overallScore.score, 'Should have score');
  assertExists(response.data.overallScore.maxScore, 'Should have maxScore');
  assertExists(response.data.overallScore.percentage, 'Should have percentage');
  assertExists(response.data.overallScore.performanceLevel, 'Should have performanceLevel');
  assertExists(response.data.overallScore.message, 'Should have message');
});

// Test 8: Verify category scores structure
test('POST /api/scoring/evaluate - verify categoryScores structure', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(typeof response.data.categoryScores === 'object', 'categoryScores should be object');
  
  // Check if at least one category exists
  const categories = Object.keys(response.data.categoryScores);
  assert(categories.length > 0, 'Should have at least one category');
  
  // Verify category structure
  const firstCategory = response.data.categoryScores[categories[0]];
  assertExists(firstCategory.score, 'Category should have score');
  assertExists(firstCategory.maxScore, 'Category should have maxScore');
  assertExists(firstCategory.percentage, 'Category should have percentage');
});

// Test 9: Verify question scores structure
test('POST /api/scoring/evaluate - verify questionScores structure', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(typeof response.data.questionScores === 'object', 'questionScores should be object');
  
  const questions = Object.keys(response.data.questionScores);
  if (questions.length > 0) {
    const firstQuestion = response.data.questionScores[questions[0]];
    assertExists(firstQuestion.score, 'Question should have score');
    assertExists(firstQuestion.maxScore, 'Question should have maxScore');
    assertExists(firstQuestion.percentage, 'Question should have percentage');
    assertExists(firstQuestion.feedback, 'Question should have feedback');
  }
});

// Test 10: Verify ideal solution structure
test('POST /api/scoring/evaluate - verify idealSolution structure', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assertExists(response.data.idealSolution, 'Should have idealSolution');
});

// Test 11: Get leaderboard
test('GET /api/scoring/leaderboard - retrieve leaderboard', async () => {
  const response = await makeRequest('GET', `${API_BASE}/scoring/leaderboard`);

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(Array.isArray(response.data), 'Leaderboard should be array');
  
  if (response.data.length > 0) {
    const firstEntry = response.data[0];
    assertExists(firstEntry.rank, 'Entry should have rank');
    assertExists(firstEntry.name, 'Entry should have name');
    assertExists(firstEntry.score, 'Entry should have score');
  }
});

// Test 12: Evaluate with multi-select answers
test('POST /api/scoring/evaluate - multi-select answers', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction', 'scalability', 'security'],
      'tech-selection': ['hybrid-cloud', 'containers', 'kubernetes']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.overallScore.score >= 0, 'Should have valid score');
});

// Test 13: Evaluate with single-select answers
test('POST /api/scoring/evaluate - single-select answers', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'architecture': 'hybrid-cloud',
      'objection': 'address-security'
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(response.data.overallScore.score >= 0, 'Should have valid score');
});

// Test 14: Verify performance level calculation
test('POST /api/scoring/evaluate - performance level calculation', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  const validLevels = ['excellent', 'good', 'satisfactory', 'needs-improvement'];
  assert(
    validLevels.includes(response.data.overallScore.performanceLevel),
    'Performance level should be valid'
  );
});

// Test 15: Verify percentage calculation
test('POST /api/scoring/evaluate - percentage calculation', async () => {
  const response = await makeRequest('POST', `${API_BASE}/scoring/evaluate`, {
    scenarioId: 'enterprise-cloud-migration',
    answers: {
      'priorities': ['cost-reduction', 'scalability']
    }
  });

  assertEqual(response.status, 200, 'Should return 200 status');
  assert(
    response.data.overallScore.percentage >= 0 && response.data.overallScore.percentage <= 100,
    'Percentage should be between 0 and 100'
  );
});

// Run all tests
runTests().catch(console.error);

// Made with Bob