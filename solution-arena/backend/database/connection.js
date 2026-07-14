/**
 * Database Connection Module
 * PostgreSQL connection for IBM DealSprint
 * Compatible with IBM Cloud Databases for PostgreSQL
 */

const { Pool } = require('pg');

// Database configuration
const dbConfig = {
  // IBM Cloud Databases for PostgreSQL connection
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'dealsprint',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  
  // Connection pool settings
  max: parseInt(process.env.DB_POOL_MAX || '20'),
  min: parseInt(process.env.DB_POOL_MIN || '2'),
  idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT || '30000'),
  connectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT || '10000'),
  
  // SSL configuration for IBM Cloud
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
    ca: process.env.DB_SSL_CA || undefined,
    cert: process.env.DB_SSL_CERT || undefined,
    key: process.env.DB_SSL_KEY || undefined
  } : false,
  
  // Application name for monitoring
  application_name: 'ibm-dealsprint'
};

// Create connection pool
const pool = new Pool(dbConfig);

// Handle pool errors
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Handle pool connection
pool.on('connect', (client) => {
  console.log('New database connection established');
});

// Handle pool removal
pool.on('remove', (client) => {
  console.log('Database connection removed from pool');
});

/**
 * Execute a query with parameters
 * @param {string} text - SQL query
 * @param {Array} params - Query parameters
 * @returns {Promise<Object>} Query result
 */
async function query(text, params) {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Executed query', { text, duration, rows: result.rowCount });
    }
    
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

/**
 * Get a client from the pool for transactions
 * @returns {Promise<Object>} Database client
 */
async function getClient() {
  const client = await pool.connect();
  const originalQuery = client.query;
  const originalRelease = client.release;
  
  // Set a timeout for the client
  const timeout = setTimeout(() => {
    console.error('Client has been checked out for more than 5 seconds!');
  }, 5000);
  
  // Monkey patch the query method to log queries
  client.query = (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Client query:', args[0]);
    }
    return originalQuery.apply(client, args);
  };
  
  // Monkey patch the release method to clear timeout
  client.release = () => {
    clearTimeout(timeout);
    client.query = originalQuery;
    client.release = originalRelease;
    return originalRelease.apply(client);
  };
  
  return client;
}

/**
 * Execute a transaction
 * @param {Function} callback - Transaction callback function
 * @returns {Promise<any>} Transaction result
 */
async function transaction(callback) {
  const client = await getClient();
  
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Test database connection
 * @returns {Promise<boolean>} Connection status
 */
async function testConnection() {
  try {
    const result = await query('SELECT NOW() as now, version() as version');
    console.log('Database connection successful');
    console.log('Server time:', result.rows[0].now);
    console.log('PostgreSQL version:', result.rows[0].version);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    return false;
  }
}

/**
 * Close all database connections
 * @returns {Promise<void>}
 */
async function closePool() {
  try {
    await pool.end();
    console.log('Database pool closed');
  } catch (error) {
    console.error('Error closing database pool:', error);
    throw error;
  }
}

/**
 * Get pool statistics
 * @returns {Object} Pool statistics
 */
function getPoolStats() {
  return {
    total: pool.totalCount,
    idle: pool.idleCount,
    waiting: pool.waitingCount
  };
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT, closing database connections...');
  await closePool();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, closing database connections...');
  await closePool();
  process.exit(0);
});

module.exports = {
  query,
  getClient,
  transaction,
  testConnection,
  closePool,
  getPoolStats,
  pool
};

// Made with Bob
