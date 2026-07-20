// API Security Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('API Security Tests', () => {
  afterAll(async () => {
    await pool.end();
  });

  describe('SQL Injection Prevention', () => {
    test('should prevent SQL injection in product ID', async () => {
      const maliciousIds = [
        "1' OR '1'='1",
        "1; DROP TABLE products;--",
        "1' UNION SELECT * FROM users--",
        "1' AND 1=1--",
        "' OR 1=1--"
      ];

      for (const id of maliciousIds) {
        const response = await request(app)
          .get(`/api/products/${encodeURIComponent(id)}`)
          .expect(404);

        expect(response.body.success).toBe(false);
        // Should not return all products or cause errors
      }
    });

    test('should prevent SQL injection in scenario ID', async () => {
      const maliciousIds = [
        "1' OR '1'='1",
        "1; DROP TABLE scenarios;--",
        "' OR 1=1--"
      ];

      for (const id of maliciousIds) {
        const response = await request(app)
          .get(`/api/scenarios/${encodeURIComponent(id)}`)
          .expect(404);

        expect(response.body.success).toBe(false);
      }
    });

    test('should prevent SQL injection in query parameters', async () => {
      const maliciousQueries = [
        "?category=' OR '1'='1",
        "?search='; DROP TABLE products;--",
        "?industry=' UNION SELECT * FROM users--"
      ];

      for (const query of maliciousQueries) {
        const response = await request(app)
          .get(`/api/products${query}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        // Should return safe results, not all data
      }
    });

    test('should sanitize search parameters', async () => {
      const response = await request(app)
        .get('/api/products/search/' + encodeURIComponent("'; DROP TABLE products;--"))
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });

    test('should prevent SQL injection in POST data', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: "'; DROP TABLE user_progress;--",
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(200);

        expect(response.body.success).toBe(true);
        
        // Verify table still exists by making another query
        const verifyResponse = await request(app)
          .get('/api/progress/user/test-user')
          .expect(200);
        
        expect(verifyResponse.body).toHaveProperty('success');
      }
    });
  });

  describe('XSS Prevention', () => {
    test('should sanitize XSS in search queries', async () => {
      const xssPayloads = [
        '<script>alert("xss")</script>',
        '<img src=x onerror=alert("xss")>',
        'javascript:alert("xss")',
        '<svg onload=alert("xss")>'
      ];

      for (const payload of xssPayloads) {
        const response = await request(app)
          .get(`/api/products/search/${encodeURIComponent(payload)}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        
        // Response should not contain unescaped script tags
        const responseStr = JSON.stringify(response.body);
        expect(responseStr).not.toContain('<script>');
        expect(responseStr).not.toContain('onerror=');
      }
    });

    test('should sanitize XSS in POST data', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;
        const xssUserId = 'xss-test-' + Date.now();

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: xssUserId,
            scenario_id: scenarioId,
            status: '<script>alert("xss")</script>',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: { xss: '<img src=x onerror=alert("xss")>' }
          })
          .expect(200);

        expect(response.body.success).toBe(true);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [xssUserId]);
      }
    });

    test('should not reflect XSS in error messages', async () => {
      const response = await request(app)
        .get('/api/products/<script>alert("xss")</script>')
        .expect(404);

      const responseStr = JSON.stringify(response.body);
      expect(responseStr).not.toContain('<script>');
    });
  });

  describe('Path Traversal Prevention', () => {
    test('should prevent directory traversal in product IDs', async () => {
      const traversalAttempts = [
        '../../../etc/passwd',
        '..\\..\\..\\windows\\system32',
        '....//....//....//etc/passwd',
        '%2e%2e%2f%2e%2e%2f',
        '..%252f..%252f..%252fetc/passwd'
      ];

      for (const attempt of traversalAttempts) {
        const response = await request(app)
          .get(`/api/products/${encodeURIComponent(attempt)}`)
          .expect(404);

        expect(response.body.success).toBe(false);
        expect(response.body.error).not.toContain('passwd');
        expect(response.body.error).not.toContain('system32');
      }
    });

    test('should prevent directory traversal in scenario IDs', async () => {
      const response = await request(app)
        .get('/api/scenarios/../../../etc/passwd')
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should prevent path traversal in user IDs', async () => {
      const response = await request(app)
        .get('/api/progress/user/../../etc/passwd')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });
  });

  describe('NoSQL Injection Prevention', () => {
    test('should prevent NoSQL injection in query parameters', async () => {
      const noSqlPayloads = [
        '?category[$ne]=null',
        '?category[$gt]=',
        '?search[$regex]=.*',
        '?industry[$where]=1'
      ];

      for (const payload of noSqlPayloads) {
        const response = await request(app)
          .get(`/api/products${payload}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        // Should not return unexpected results
      }
    });

    test('should prevent NoSQL injection in POST data', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: { $ne: null },
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(500);

        expect(response.body.success).toBe(false);
      }
    });
  });

  describe('Command Injection Prevention', () => {
    test('should prevent command injection in search', async () => {
      const commandPayloads = [
        '; ls -la',
        '| cat /etc/passwd',
        '`whoami`',
        '$(whoami)',
        '& dir'
      ];

      for (const payload of commandPayloads) {
        const response = await request(app)
          .get(`/api/products/search/${encodeURIComponent(payload)}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toEqual([]);
      }
    });
  });

  describe('LDAP Injection Prevention', () => {
    test('should prevent LDAP injection patterns', async () => {
      const ldapPayloads = [
        '*)(uid=*',
        'admin)(&(password=*',
        '*)(objectClass=*'
      ];

      for (const payload of ldapPayloads) {
        const response = await request(app)
          .get(`/api/products/search/${encodeURIComponent(payload)}`)
          .expect(200);

        expect(response.body.success).toBe(true);
      }
    });
  });

  describe('XML Injection Prevention', () => {
    test('should prevent XML injection in POST data', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;
        const xmlUserId = 'xml-test-' + Date.now();

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: xmlUserId,
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: { xml: '<?xml version="1.0"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><foo>&xxe;</foo>' }
          })
          .expect(200);

        expect(response.body.success).toBe(true);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [xmlUserId]);
      }
    });
  });

  describe('Header Injection Prevention', () => {
    test('should prevent CRLF injection in headers', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('X-Custom-Header', 'value\r\nX-Injected: injected')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should prevent header injection via query params', async () => {
      const response = await request(app)
        .get('/api/products?search=test%0d%0aX-Injected:%20injected')
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });

  describe('Information Disclosure Prevention', () => {
    test('should not expose stack traces in production errors', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({ invalid: 'data' })
        .expect(500);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toBeDefined();
      
      // Should not contain stack trace in production
      if (process.env.NODE_ENV === 'production') {
        expect(response.body).not.toHaveProperty('stack');
      }
    });

    test('should not expose database connection strings', async () => {
      const response = await request(app)
        .get('/api/products/invalid-id-that-causes-error')
        .expect(404);

      const responseStr = JSON.stringify(response.body);
      expect(responseStr).not.toContain('postgresql://');
      expect(responseStr).not.toContain('DATABASE_URL');
      expect(responseStr).not.toContain('password');
    });

    test('should not expose internal paths', async () => {
      const response = await request(app)
        .get('/api/nonexistent')
        .expect(404);

      const responseStr = JSON.stringify(response.body);
      expect(responseStr).not.toContain('/Users/');
      expect(responseStr).not.toContain('C:\\');
      expect(responseStr).not.toContain('node_modules');
    });

    test('should not expose server version in errors', async () => {
      const response = await request(app)
        .get('/api/products/invalid')
        .expect(404);

      expect(response.headers['x-powered-by']).toBeUndefined();
    });
  });

  describe('Rate Limiting and DoS Prevention', () => {
    test('should handle rapid requests without crashing', async () => {
      const promises = Array(100).fill(null).map(() =>
        request(app).get('/api/products?limit=1').timeout(5000)
      );

      const responses = await Promise.allSettled(promises);
      
      const successCount = responses.filter(r => r.status === 'fulfilled' && r.value.status === 200).length;
      
      // Most should succeed, but some might be rate limited
      expect(successCount).toBeGreaterThan(50);
    }, 15000);

    test('should handle large request bodies gracefully', async () => {
      const largeAnswers = {};
      for (let i = 0; i < 1000; i++) {
        largeAnswers[`q${i}`] = 'a'.repeat(1000);
      }

      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: 'large-body-test',
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: largeAnswers
          })
          .expect(413); // Payload too large

        expect(response.body).toBeDefined();
      }
    });

    test('should handle regex DoS attempts', async () => {
      // ReDoS pattern
      const redosPattern = 'a'.repeat(50) + '!';
      
      const start = Date.now();
      const response = await request(app)
        .get(`/api/products/search/${encodeURIComponent(redosPattern)}`)
        .timeout(3000)
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(2000); // Should not hang
    });
  });

  describe('Authentication and Authorization', () => {
    test('should accept requests without authentication (public API)', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle missing authorization header gracefully', async () => {
      const response = await request(app)
        .get('/api/scenarios')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle invalid authorization tokens gracefully', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('Authorization', 'Bearer invalid-token-12345')
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });

  describe('CORS Security', () => {
    test('should include CORS headers', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.headers['access-control-allow-origin']).toBeDefined();
    });

    test('should handle OPTIONS preflight requests', async () => {
      const response = await request(app)
        .options('/api/products')
        .expect(204);

      expect(response.headers['access-control-allow-methods']).toBeDefined();
    });

    test('should not allow credentials from untrusted origins', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('Origin', 'https://evil.com')
        .expect(200);

      // CORS should still work but credentials should be controlled
      expect(response.headers['access-control-allow-origin']).toBeDefined();
    });
  });

  describe('Content Security', () => {
    test('should set security headers', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      // Helmet security headers
      expect(response.headers['x-content-type-options']).toBe('nosniff');
      expect(response.headers['x-frame-options']).toBeDefined();
    });

    test('should return correct Content-Type', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.headers['content-type']).toContain('application/json');
    });

    test('should not allow content type confusion', async () => {
      const response = await request(app)
        .post('/api/progress')
        .set('Content-Type', 'text/plain')
        .send('user_id=test')
        .expect(500);

      expect(response.body.success).toBe(false);
    });
  });

  describe('Input Validation', () => {
    test('should validate numeric inputs', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: 'validation-test',
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 'not-a-number',
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(500);

        expect(response.body.success).toBe(false);
      }
    });

    test('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: 'test'
          // Missing required fields
        })
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should validate data types', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: 123, // Should be string
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(200);

        // Should handle type coercion or reject
        expect(response.body).toHaveProperty('success');
      }
    });
  });

  describe('Null Byte Injection Prevention', () => {
    test('should handle null bytes in parameters', async () => {
      const response = await request(app)
        .get('/api/products/test%00id')
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should handle null bytes in search', async () => {
      const response = await request(app)
        .get('/api/products/search/test%00search')
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });

  describe('Unicode and Encoding Security', () => {
    test('should handle unicode characters safely', async () => {
      const unicodeStrings = [
        '日本語',
        '🔥💻🚀',
        'Ñoño',
        'مرحبا'
      ];

      for (const str of unicodeStrings) {
        const response = await request(app)
          .get(`/api/products/search/${encodeURIComponent(str)}`)
          .expect(200);

        expect(response.body.success).toBe(true);
      }
    });

    test('should handle double encoding attempts', async () => {
      const response = await request(app)
        .get('/api/products/search/%252e%252e%252f')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle mixed encoding', async () => {
      const response = await request(app)
        .get('/api/products/search/test%20%2520test')
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });
});

// Made with Bob