const { spawn } = require('child_process');
const path = require('path');

// Test files to run
const testFiles = [
  'evaluate.test.js',
  'scoring.test.js',
  'integration.test.js',
  'scenarioSelection.test.js',
  'scenarioGenerator.test.js'
];

let currentTest = 0;
let totalPassed = 0;
let totalFailed = 0;

console.log('\n' + '='.repeat(70));
console.log('🚀 RUNNING ALL BACKEND TESTS');
console.log('='.repeat(70));

function runNextTest() {
  if (currentTest >= testFiles.length) {
    // All tests complete
    console.log('\n' + '='.repeat(70));
    console.log('📊 FINAL RESULTS');
    console.log('='.repeat(70));
    console.log(`Total Passed: ${totalPassed}`);
    console.log(`Total Failed: ${totalFailed}`);
    console.log(`Total Tests: ${totalPassed + totalFailed}`);
    console.log('='.repeat(70) + '\n');
    
    process.exit(totalFailed > 0 ? 1 : 0);
    return;
  }

  const testFile = testFiles[currentTest];
  const testPath = path.join(__dirname, testFile);

  console.log(`\n📝 Running: ${testFile}`);
  console.log('-'.repeat(70));

  const testProcess = spawn('node', [testPath], {
    stdio: 'inherit'
  });

  testProcess.on('close', (code) => {
    if (code === 0) {
      console.log(`✅ ${testFile} completed successfully`);
    } else {
      console.log(`❌ ${testFile} had failures`);
      totalFailed++;
    }
    
    currentTest++;
    runNextTest();
  });

  testProcess.on('error', (err) => {
    console.error(`Error running ${testFile}:`, err);
    totalFailed++;
    currentTest++;
    runNextTest();
  });
}

// Check if server is running
const http = require('http');
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/health',
  method: 'GET'
};

console.log('\n🔍 Checking if backend server is running...');

const req = http.request(options, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Backend server is running on port 3001');
    console.log('🎯 Starting test suite...\n');
    runNextTest();
  } else {
    console.error('❌ Backend server responded with status:', res.statusCode);
    console.error('Please ensure the backend server is running on port 3001');
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.error('❌ Cannot connect to backend server');
  console.error('Please start the backend server first:');
  console.error('  cd backend && npm start');
  process.exit(1);
});

req.end();

// Made with Bob