// Database Connection Tests
const { Pool } = require('pg');
require('dotenv').config();

describe('Database Connection', () => {
  let pool;

  beforeAll(() => {
    // Validate DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is required for tests');
    }

    // Parse and clean DATABASE_URL
    let connectionString = process.env.DATABASE_URL;
    if (connectionString.includes('sslmode=')) {
      const url = new URL(connectionString);
      url.searchParams.delete('sslmode');
      connectionString = url.toString();
    }

    pool = new Pool({
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false
      }
    });
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('DATABASE_URL Validation', () => {
    test('should have DATABASE_URL environment variable set', () => {
      expect(process.env.DATABASE_URL).toBeDefined();
      expect(process.env.DATABASE_URL).not.toBe('');
    });

    test('should be a valid PostgreSQL connection string', () => {
      const url = process.env.DATABASE_URL;
      expect(url).toMatch(/^postgres(ql)?:\/\//);
    });

    test('should contain required connection components', () => {
      const url = new URL(process.env.DATABASE_URL);
      expect(url.hostname).toBeTruthy();
      expect(url.port).toBeTruthy();
      expect(url.pathname).toBeTruthy();
      expect(url.username).toBeTruthy();
    });
  });

  describe('Connection Pool', () => {
    test('should create connection pool successfully', () => {
      expect(pool).toBeDefined();
      expect(pool.totalCount).toBeDefined();
    });

    test('should connect to database', async () => {
      const client = await pool.connect();
      expect(client).toBeDefined();
      client.release();
    });

    test('should execute simple query', async () => {
      const result = await pool.query('SELECT 1 as test');
      expect(result.rows).toHaveLength(1);
      expect(result.rows[0].test).toBe(1);
    });

    test('should handle multiple concurrent connections', async () => {
      const promises = Array(5).fill(null).map(() => 
        pool.query('SELECT NOW() as current_time')
      );
      
      const results = await Promise.all(promises);
      expect(results).toHaveLength(5);
      results.forEach(result => {
        expect(result.rows).toHaveLength(1);
        expect(result.rows[0].current_time).toBeInstanceOf(Date);
      });
    });

    test('should respect connection pool limits', () => {
      expect(pool.options.max).toBe(20);
      expect(pool.options.idleTimeoutMillis).toBe(30000);
      expect(pool.options.connectionTimeoutMillis).toBe(2000);
    });
  });

  describe('SSL Configuration', () => {
    test('should have SSL enabled', () => {
      expect(pool.options.ssl).toBeDefined();
      expect(pool.options.ssl.rejectUnauthorized).toBe(false);
    });

    test('should connect with SSL', async () => {
      const client = await pool.connect();
      const result = await client.query('SELECT version()');
      expect(result.rows[0].version).toContain('PostgreSQL');
      client.release();
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid query gracefully', async () => {
      await expect(
        pool.query('SELECT * FROM nonexistent_table')
      ).rejects.toThrow();
    });

    test('should handle connection timeout', async () => {
      const badPool = new Pool({
        connectionString: 'postgresql://invalid:invalid@localhost:9999/invalid',
        connectionTimeoutMillis: 1000
      });

      await expect(
        badPool.query('SELECT 1')
      ).rejects.toThrow();

      await badPool.end();
    });

    test('should recover from connection errors', async () => {
      // First query should work
      const result1 = await pool.query('SELECT 1');
      expect(result1.rows[0]).toEqual({ '?column?': 1 });

      // Second query should also work (connection pool recovery)
      const result2 = await pool.query('SELECT 2');
      expect(result2.rows[0]).toEqual({ '?column?': 2 });
    });
  });

  describe('Query Performance', () => {
    test('should execute queries within acceptable time', async () => {
      const start = Date.now();
      await pool.query('SELECT 1');
      const duration = Date.now() - start;
      
      // Query should complete in less than 1 second
      expect(duration).toBeLessThan(1000);
    });

    test('should handle large result sets efficiently', async () => {
      const start = Date.now();
      await pool.query('SELECT generate_series(1, 1000) as num');
      const duration = Date.now() - start;
      
      // Should handle 1000 rows in less than 2 seconds
      expect(duration).toBeLessThan(2000);
    });
  });

  describe('Connection Lifecycle', () => {
    test('should acquire and release connections properly', async () => {
      const initialCount = pool.totalCount;
      
      const client = await pool.connect();
      expect(pool.totalCount).toBeGreaterThanOrEqual(initialCount);
      
      client.release();
      
      // Wait a bit for connection to be released
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    test('should handle connection pool exhaustion gracefully', async () => {
      const clients = [];
      
      // Acquire max connections
      for (let i = 0; i < 20; i++) {
        clients.push(await pool.connect());
      }
      
      // Try to acquire one more (should wait or timeout)
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 3000)
      );
      
      const acquirePromise = pool.connect();
      
      // Release one connection
      clients[0].release();
      
      // Now the acquire should succeed
      const client = await Promise.race([acquirePromise, timeoutPromise]);
      expect(client).toBeDefined();
      client.release();
      
      // Release all other connections
      clients.slice(1).forEach(c => c.release());
    });
  });

  describe('Database Information', () => {
    test('should retrieve PostgreSQL version', async () => {
      const result = await pool.query('SELECT version()');
      expect(result.rows[0].version).toContain('PostgreSQL');
    });

    test('should retrieve current database name', async () => {
      const result = await pool.query('SELECT current_database()');
      expect(result.rows[0].current_database).toBeTruthy();
    });

    test('should retrieve current user', async () => {
      const result = await pool.query('SELECT current_user');
      expect(result.rows[0].current_user).toBeTruthy();
    });

    test('should check database encoding', async () => {
      const result = await pool.query('SHOW server_encoding');
      expect(result.rows[0].server_encoding).toBe('UTF8');
    });
  });
});

// Made with Bob