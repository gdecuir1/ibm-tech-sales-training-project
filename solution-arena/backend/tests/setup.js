// Test Setup File
// This file runs before all tests

// Set test environment
process.env.NODE_ENV = 'test';

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL must be set for tests');
  console.error('Please create a .env file with DATABASE_URL');
  process.exit(1);
}

// Global test timeout
jest.setTimeout(10000);

// Suppress console logs during tests (optional)
// global.console = {
//   ...console,
//   log: jest.fn(),
//   debug: jest.fn(),
//   info: jest.fn(),
//   warn: jest.fn(),
// };

// Made with Bob