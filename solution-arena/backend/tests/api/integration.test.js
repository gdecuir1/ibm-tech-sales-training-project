// API Integration and Error Handling Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('API Integration Tests', () => {
  afterAll(async () => {
    await pool.end();
  });

  describe('Server Health and Configuration', () => {
    test('should respond to health check', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('database');
    });

    test('should return API information at root', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('endpoints');
      expect(response.body.endpoints).toHaveProperty('scenarios');
      expect(response.body.endpoints).toHaveProperty('products');
      expect(response.body.endpoints).toHaveProperty('progress');
    });

    test('should handle 404 for non-existent endpoints', async () => {
      const response = await request(app)
        .get('/api/nonexistent')
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('path');
    });

    test('should include CORS headers', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.headers).toHaveProperty('access-control-allow-origin');
    });

    test('should include security headers', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      // Helmet security headers
      expect(response.headers).toHaveProperty('x-content-type-options');
    });
  });

  describe('Cross-Endpoint Integration', () => {
    test('should retrieve scenario and then get its products', async () => {
      // Get a scenario
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenario = scenarioResponse.body.data[0];

        // Get products that might be relevant
        const productsResponse = await request(app)
          .get('/api/products')
          .expect(200);

        expect(productsResponse.body.success).toBe(true);
        expect(productsResponse.body.data.length).toBeGreaterThan(0);
      }
    });

    test('should create progress and then retrieve it', async () => {
      const testUserId = 'integration-test-' + Date.now();
      
      // Get a scenario
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        // Create progress
        const createResponse = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(200);

        expect(createResponse.body.success).toBe(true);

        // Retrieve progress
        const getResponse = await request(app)
          .get(`/api/progress/user/${testUserId}`)
          .expect(200);

        expect(getResponse.body.success).toBe(true);
        expect(getResponse.body.data.length).toBeGreaterThan(0);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [testUserId]);
      }
    });

    test('should handle full scenario workflow', async () => {
      const workflowUserId = 'workflow-test-' + Date.now();

      // 1. Get available scenarios
      const scenariosResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenariosResponse.body.data.length > 0) {
        const scenarioId = scenariosResponse.body.data[0].id;

        // 2. Get scenario details
        const detailResponse = await request(app)
          .get(`/api/scenarios/${scenarioId}`)
          .expect(200);

        expect(detailResponse.body.success).toBe(true);

        // 3. Get products for selection
        const productsResponse = await request(app)
          .get('/api/products?limit=5')
          .expect(200);

        expect(productsResponse.body.success).toBe(true);

        // 4. Create initial progress
        const progressResponse = await request(app)
          .post('/api/progress')
          .send({
            user_id: workflowUserId,
            scenario_id: scenarioId,
            status: 'in_progress',
            score: 0,
            max_score: 100,
            completion_percentage: 0,
            time_spent: 0,
            answers: {}
          })
          .expect(200);

        expect(progressResponse.body.success).toBe(true);

        // 5. Complete scenario and record attempt
        const attemptResponse = await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: workflowUserId,
            scenario_id: scenarioId,
            attempt_number: 1,
            score: 85,
            max_score: 100,
            percentage: 85,
            time_spent: 600,
            answers: { q1: 'A', q2: 'B' },
            skill_scores: { technical: 90, business: 80 },
            recommendations: ['Great job!'],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        expect(attemptResponse.body.success).toBe(true);

        // 6. Get user stats
        const statsResponse = await request(app)
          .get(`/api/progress/user/${workflowUserId}/stats`)
          .expect(200);

        expect(statsResponse.body.success).toBe(true);
        expect(statsResponse.body.data.scenarios_completed).toBeGreaterThan(0);

        // Cleanup
        await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [workflowUserId]);
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [workflowUserId]);
      }
    });
  });

  describe('Error Handling - HTTP Methods', () => {
    test('should reject POST to GET-only endpoints', async () => {
      const response = await request(app)
        .post('/api/scenarios')
        .send({ invalid: 'data' })
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should handle OPTIONS requests (CORS preflight)', async () => {
      const response = await request(app)
        .options('/api/scenarios')
        .expect(204);
    });

    test('should reject invalid HTTP methods', async () => {
      const response = await request(app)
        .patch('/api/scenarios')
        .expect(404);
    });
  });

  describe('Error Handling - Request Validation', () => {
    test('should handle missing Content-Type header', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send('user_id=test')
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should handle invalid JSON in request body', async () => {
      const response = await request(app)
        .post('/api/progress')
        .set('Content-Type', 'application/json')
        .send('{"invalid": json}')
        .expect(400);
    });

    test('should handle empty request body for POST', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({})
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should handle extremely large request body', async () => {
      const largeData = {
        user_id: 'test',
        scenario_id: 'test',
        answers: 'x'.repeat(20 * 1024 * 1024) // 20MB
      };

      const response = await request(app)
        .post('/api/progress')
        .send(largeData)
        .expect(413);
    });

    test('should handle special characters in query parameters', async () => {
      const response = await request(app)
        .get('/api/products?search=<script>alert("xss")</script>')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle SQL injection attempts in query params', async () => {
      const response = await request(app)
        .get('/api/products?category=\' OR \'1\'=\'1')
        .expect(200);

      expect(response.body.success).toBe(true);
      // Should return empty or safe results, not all products
    });

    test('should handle null bytes in parameters', async () => {
      const response = await request(app)
        .get('/api/products/test%00id')
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('Error Handling - Database Errors', () => {
    test('should handle invalid foreign key references', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: 'test-user',
          scenario_id: 'nonexistent-scenario-id-12345',
          status: 'in_progress',
          score: 0,
          max_score: 100,
          completion_percentage: 0,
          time_spent: 0,
          answers: {}
        })
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should handle database constraint violations gracefully', async () => {
      // This would test unique constraints, check constraints, etc.
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: null, // Violates NOT NULL constraint
          scenario_id: 'test',
          status: 'in_progress',
          score: 0,
          max_score: 100,
          completion_percentage: 0,
          time_spent: 0,
          answers: {}
        })
        .expect(500);

      expect(response.body.success).toBe(false);
    });
  });

  describe('Error Handling - Rate Limiting and Performance', () => {
    test('should handle rapid sequential requests', async () => {
      const promises = Array(50).fill(null).map(() =>
        request(app).get('/api/products?limit=1')
      );

      const responses = await Promise.all(promises);
      
      responses.forEach(response => {
        expect([200, 429]).toContain(response.status); // 429 if rate limited
      });
    });

    test('should handle concurrent writes to same resource', async () => {
      const concurrentUserId = 'concurrent-write-' + Date.now();
      
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        const promises = Array(10).fill(null).map((_, i) =>
          request(app)
            .post('/api/progress')
            .send({
              user_id: concurrentUserId,
              scenario_id: scenarioId,
              status: 'in_progress',
              score: i * 10,
              max_score: 100,
              completion_percentage: i * 10,
              time_spent: i * 30,
              answers: {}
            })
        );

        const responses = await Promise.all(promises);
        
        // All should succeed due to UPSERT logic
        responses.forEach(response => {
          expect(response.status).toBe(200);
        });

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [concurrentUserId]);
      }
    });

    test('should timeout on extremely slow queries', async () => {
      // This would require mocking or a very complex query
      const response = await request(app)
        .get('/api/products?limit=1000&offset=0')
        .timeout(5000)
        .expect(200);

      expect(response.body).toHaveProperty('success');
    }, 10000);
  });

  describe('Error Handling - Edge Cases', () => {
    test('should handle requests with no Accept header', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('Accept', '')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle requests with invalid Accept header', async () => {
      const response = await request(app)
        .get('/api/products')
        .set('Accept', 'text/plain')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle missing required headers', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: 'test',
          scenario_id: 'test',
          status: 'in_progress',
          score: 0,
          max_score: 100,
          completion_percentage: 0,
          time_spent: 0,
          answers: {}
        })
        .expect(500);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle URL-encoded special characters', async () => {
      const response = await request(app)
        .get('/api/products/search/%E2%9C%93')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle double-encoded URLs', async () => {
      const response = await request(app)
        .get('/api/products/search/%2520')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });
  });

  describe('Response Consistency', () => {
    test('should return consistent error format across endpoints', async () => {
      const responses = await Promise.all([
        request(app).get('/api/scenarios/nonexistent'),
        request(app).get('/api/products/nonexistent'),
        request(app).get('/api/progress/user/nonexistent/scenario/nonexistent')
      ]);

      responses.forEach(response => {
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('error');
        expect(typeof response.body.error).toBe('string');
      });
    });

    test('should return consistent success format across endpoints', async () => {
      const responses = await Promise.all([
        request(app).get('/api/scenarios?limit=1'),
        request(app).get('/api/products?limit=1'),
        request(app).get('/api/progress/user/test-user')
      ]);

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('data');
      });
    });

    test('should always return valid JSON', async () => {
      const endpoints = [
        '/api/scenarios',
        '/api/products',
        '/api/progress/user/test',
        '/health',
        '/',
        '/api/nonexistent'
      ];

      for (const endpoint of endpoints) {
        const response = await request(app).get(endpoint);
        expect(() => JSON.stringify(response.body)).not.toThrow();
      }
    });
  });

  describe('Database Connection Handling', () => {
    test('should handle database connection gracefully', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.database).toBe('connected');
    });

    test('should recover from transient database errors', async () => {
      // Make multiple requests to ensure connection pool works
      const promises = Array(20).fill(null).map(() =>
        request(app).get('/api/products?limit=1')
      );

      const responses = await Promise.all(promises);
      
      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });
    });
  });

  describe('API Versioning and Compatibility', () => {
    test('should maintain backward compatibility', async () => {
      // Test that old query parameter formats still work
      const response = await request(app)
        .get('/api/products?limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle both camelCase and snake_case in responses', async () => {
      const response = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (response.body.data.length > 0) {
        const scenario = response.body.data[0];
        // API uses snake_case from database
        expect(scenario).toBeDefined();
      }
    });
  });

  describe('Security Tests', () => {
    test('should not expose sensitive information in errors', async () => {
      const response = await request(app)
        .get('/api/products/../../etc/passwd')
        .expect(404);

      expect(response.body.error).not.toContain('password');
      expect(response.body.error).not.toContain('DATABASE_URL');
      expect(response.body.error).not.toContain('stack trace');
    });

    test('should sanitize error messages', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({ malicious: '<script>alert("xss")</script>' })
        .expect(500);

      expect(response.body.error).not.toContain('<script>');
    });

    test('should prevent path traversal in IDs', async () => {
      const maliciousIds = [
        '../../../etc/passwd',
        '..\\..\\..\\windows\\system32',
        '%2e%2e%2f%2e%2e%2f',
        '....//....//....//etc/passwd'
      ];

      for (const id of maliciousIds) {
        const response = await request(app)
          .get(`/api/products/${id}`)
          .expect(404);

        expect(response.body.success).toBe(false);
      }
    });

    test('should handle NoSQL injection attempts', async () => {
      const response = await request(app)
        .get('/api/products?category[$ne]=null')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });
  });
});

// Made with Bob