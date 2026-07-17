# Backend Test Suite

Comprehensive test suite for the Tech Sales Training Project backend API.

## Overview

This test suite validates:
- ✅ Case study display (scenarios are loaded correctly)
- ✅ Input processing (products, responses, answers)
- ✅ Output generation (scores, feedback, results)
- ✅ Edge cases (empty inputs, invalid data, missing fields)
- ✅ Complete user flows (end-to-end scenarios)

## Test Files

### 1. `evaluate.test.js`
Tests the `/api/evaluate` endpoints:
- Product selection evaluation
- Response text evaluation
- Edge cases: empty inputs, missing fields, invalid data
- Business value and objection handling scoring

**Test Coverage:**
- 12 test cases
- Validates product matching logic
- Validates response evaluation logic
- Tests error handling

### 2. `scoring.test.js`
Tests the `/api/scoring` endpoints:
- Interactive scenario evaluation
- Multi-select and single-select question scoring
- Category score calculation
- Performance level determination
- Leaderboard functionality

**Test Coverage:**
- 15 test cases
- Validates scoring algorithms
- Tests percentage calculations
- Validates data structures

### 3. `integration.test.js`
Tests complete user flows:
- Full scenario completion flow
- Case study display verification
- Input processing verification
- Output display verification
- Edge cases across the entire flow

**Test Coverage:**
- 15 test cases
- End-to-end flow validation
- Cross-endpoint integration
- Real-world usage scenarios

## Running Tests

### Prerequisites
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   Server must be running on `http://localhost:3001`

### Run All Tests
```bash
cd backend
npm test
```

### Run Individual Test Suites
```bash
# Evaluate endpoints only
npm run test:evaluate

# Scoring endpoints only
npm run test:scoring

# Integration tests only
npm run test:integration
```

## Test Results

Tests output detailed results including:
- ✅ Pass/Fail status for each test
- 📊 Summary statistics
- 🔍 Error details for failed tests

Example output:
```
🧪 Running Backend Evaluate Route Tests

============================================================
✅ PASS: POST /api/evaluate/products - valid scenario and products
✅ PASS: POST /api/evaluate/products - missing scenarioId
✅ PASS: POST /api/evaluate/products - missing selectedProducts
...
============================================================

📊 Results: 12 passed, 0 failed, 12 total
```

## What's Being Tested

### Case Study Display
- ✅ Scenarios load with all required fields
- ✅ Company information is present
- ✅ Pain points are displayed
- ✅ Tech stack is shown
- ✅ Business objectives are listed

### Input Processing
- ✅ Product selections are processed correctly
- ✅ Response text is analyzed
- ✅ Multi-select answers are handled
- ✅ Single-select answers are handled
- ✅ Empty inputs are handled gracefully

### Output Display
- ✅ Scores are calculated correctly (0-100 range)
- ✅ Feedback is generated
- ✅ Correct/incorrect products are categorized
- ✅ Missing products are identified
- ✅ Performance levels are determined
- ✅ Category breakdowns are provided

### Edge Cases
- ✅ Empty product selection (score = 0)
- ✅ Invalid scenario IDs (404 error)
- ✅ Missing required fields (400 error)
- ✅ Null values (400 error)
- ✅ Very short responses (low score)
- ✅ Very long responses (handled)
- ✅ Special characters (handled)
- ✅ Empty answers object (score = 0)

## Test Architecture

### Test Utilities
- `makeRequest()`: HTTP request helper
- `assert()`: Basic assertion
- `assertEqual()`: Equality assertion
- `assertExists()`: Existence assertion

### Test Structure
Each test file follows this pattern:
1. Setup test configuration
2. Define test cases with `test(name, fn)`
3. Run tests sequentially
4. Report results with pass/fail counts

### Error Handling
Tests validate:
- HTTP status codes (200, 400, 404, 500)
- Error message presence
- Data structure integrity
- Value ranges and types

## Continuous Integration

These tests can be integrated into CI/CD pipelines:
```bash
# In CI environment
npm start &  # Start server in background
sleep 5      # Wait for server to start
npm test     # Run tests
```

## Troubleshooting

### "Cannot connect to backend server"
- Ensure backend server is running: `npm start` (from backend directory)
- Check port 3001 is not in use
- Verify no firewall blocking localhost

### Tests failing unexpectedly
- Check server logs for errors
- Verify data files exist in `shared-data/`
- Ensure all dependencies are installed: `npm install`

### Timeout errors
- Server may be slow to respond
- Check system resources
- Increase timeout in test files if needed

## Adding New Tests

To add new tests:

1. Create test function:
```javascript
test('Description of test', async () => {
  const response = await makeRequest('GET', '/api/endpoint');
  assertEqual(response.status, 200, 'Should succeed');
  assertExists(response.data.field, 'Should have field');
});
```

2. Add to appropriate test file or create new file

3. Update `run-all-tests.js` if creating new file

## Coverage Summary

| Area | Tests | Status |
|------|-------|--------|
| Product Evaluation | 12 | ✅ Complete |
| Scoring System | 15 | ✅ Complete |
| Integration Flows | 15 | ✅ Complete |
| Edge Cases | 10+ | ✅ Complete |
| **Total** | **42** | **✅ Complete** |

## Made with Bob