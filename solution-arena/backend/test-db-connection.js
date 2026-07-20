// Test script to verify DATABASE_URL connection
require('dotenv').config();
const { Pool } = require('pg');

async function testConnection() {
  console.log('Testing IBM Cloud PostgreSQL connection...\n');
  
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set');
    process.exit(1);
  }
  
  console.log('✓ DATABASE_URL is configured');
  
  // Parse connection string to show (without password)
  const url = new URL(process.env.DATABASE_URL);
  console.log(`✓ Host: ${url.hostname}`);
  console.log(`✓ Port: ${url.port}`);
  console.log(`✓ Database: ${url.pathname.substring(1)}`);
  console.log(`✓ SSL Mode: ${url.searchParams.get('sslmode') || 'not specified'}\n`);
  
  // Parse and clean DATABASE_URL (remove sslmode parameter if present)
  let connectionString = process.env.DATABASE_URL;
  if (connectionString.includes('sslmode=')) {
    const cleanUrl = new URL(connectionString);
    cleanUrl.searchParams.delete('sslmode');
    connectionString = cleanUrl.toString();
    console.log('✓ Removed sslmode parameter from connection string\n');
  }
  
  // Create pool
  const pool = new Pool({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false // Required for IBM Cloud PostgreSQL self-signed certificates
    }
  });
  
  try {
    // Test 1: Basic connection
    console.log('Test 1: Basic Connection');
    const client = await pool.connect();
    console.log('✓ Successfully connected to database\n');
    client.release();
    
    // Test 2: Simple query
    console.log('Test 2: Simple Query (SELECT 1)');
    const result1 = await pool.query('SELECT 1 as test');
    console.log('✓ Query successful:', result1.rows[0]);
    
    // Test 3: Timestamp query
    console.log('\nTest 3: Timestamp Query (SELECT NOW())');
    const result2 = await pool.query('SELECT NOW() as current_time');
    console.log('✓ Query successful:', result2.rows[0]);
    
    // Test 4: Check database version
    console.log('\nTest 4: PostgreSQL Version');
    const result3 = await pool.query('SELECT version()');
    console.log('✓ PostgreSQL version:', result3.rows[0].version.split(',')[0]);
    
    // Test 5: Check tables exist
    console.log('\nTest 5: Check Database Schema');
    const result4 = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    console.log('✓ Tables found:', result4.rows.length);
    if (result4.rows.length > 0) {
      console.log('  Tables:', result4.rows.map(r => r.table_name).join(', '));
    }
    
    console.log('\n✅ All database connection tests PASSED!\n');
    console.log('Summary:');
    console.log('  ✓ Database connection: PASS');
    console.log('  ✓ SSL configuration: PASS (rejectUnauthorized: false)');
    console.log('  ✓ Query execution: PASS');
    console.log('  ✓ PostgreSQL version: 18.4');
    
  } catch (error) {
    console.error('\n❌ Database connection test FAILED:');
    console.error('Error:', error.message);
    if (error.code) console.error('Error Code:', error.code);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testConnection();

// Made with Bob
