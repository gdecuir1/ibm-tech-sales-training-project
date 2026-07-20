// API Performance and Stress Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('API Performance and Stress Tests', () => {
  afterAll(async () => {
    await pool.end();
  });

  describe('Response Time Tests', () => {
    test('GET /api/scenarios should respond within 1 second', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/scenarios')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(1000);
    });

    test('GET /api/products should respond within 1 second', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(1000);
    });

    test('GET /api/scenarios/:id should respond within 500ms', async () => {
      const listResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const scenarioId = listResponse.body.data[0].id;

        const start = Date.now();
        const response = await request(app)
          .get(`/api/scenarios/${scenarioId}`)
          .expect(200);
        const duration = Date.now() - start;

        expect(response.body.success).toBe(true);
        expect(duration).toBeLessThan(500);
      }
    });

    test('GET /api/products/:id should respond within 500ms', async () => {
      const listResponse = await request(app)
        .get('/api/products?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const productId = listResponse.body.data[0].id;

        const start = Date.now();
        const response = await request(app)
          .get(`/api/products/${productId}`)
          .expect(200);
        const duration = Date.now() - start;

        expect(response.body.success).toBe(true);
        expect(duration).toBeLessThan(500);
      }
    });

    test('POST /api/progress should respond within 1 second', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;
        const testUserId = 'perf-test-' + Date.now();

        const start = Date.now();
        const response = await request(app)
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
        const duration = Date.now() - start;

        expect(response.body.success).toBe(true);
        expect(duration).toBeLessThan(1000);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [testUserId]);
      }
    });

    test('GET /health should respond within 200ms', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/health')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.status).toBe('healthy');
      expect(duration).toBeLessThan(200);
    });
  });

  describe('Concurrent Request Tests', () => {
    test('should handle 50 concurrent GET requests to /api/scenarios', async () => {
      const promises = Array(50).fill(null).map(() =>
        request(app).get('/api/scenarios?limit=10')
      );

      const start = Date.now();
      const responses = await Promise.all(promises);
      const duration = Date.now() - start;

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });

      // All 50 requests should complete within 5 seconds
      expect(duration).toBeLessThan(5000);
    }, 10000);

    test('should handle 50 concurrent GET requests to /api/products', async () => {
      const promises = Array(50).fill(null).map(() =>
        request(app).get('/api/products?limit=10')
      );

      const start = Date.now();
      const responses = await Promise.all(promises);
      const duration = Date.now() - start;

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });

      expect(duration).toBeLessThan(5000);
    }, 10000);

    test('should handle 20 concurrent POST requests', async () => {
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;
        const baseUserId = 'concurrent-post-' + Date.now();

        const promises = Array(20).fill(null).map((_, i) =>
          request(app)
            .post('/api/progress')
            .send({
              user_id: `${baseUserId}-${i}`,
              scenario_id: scenarioId,
              status: 'in_progress',
              score: i * 5,
              max_score: 100,
              completion_percentage: i * 5,
              time_spent: i * 30,
              answers: {}
            })
        );

        const start = Date.now();
        const responses = await Promise.all(promises);
        const duration = Date.now() - start;

        responses.forEach(response => {
          expect(response.status).toBe(200);
          expect(response.body.success).toBe(true);
        });

        expect(duration).toBeLessThan(5000);

        // Cleanup
        for (let i = 0; i < 20; i++) {
          await pool.query('DELETE FROM user_progress WHERE user_id = $1', [`${baseUserId}-${i}`]);
        }
      }
    }, 15000);

    test('should handle mixed concurrent requests', async () => {
      const promises = [
        ...Array(20).fill(null).map(() => request(app).get('/api/scenarios?limit=5')),
        ...Array(20).fill(null).map(() => request(app).get('/api/products?limit=5')),
        ...Array(10).fill(null).map(() => request(app).get('/health'))
      ];

      const start = Date.now();
      const responses = await Promise.all(promises);
      const duration = Date.now() - start;

      responses.forEach(response => {
        expect(response.status).toBe(200);
      });

      expect(duration).toBeLessThan(5000);
    }, 10000);
  });

  describe('Load Tests', () => {
    test('should handle 100 sequential requests without degradation', async () => {
      const durations = [];

      for (let i = 0; i < 100; i++) {
        const start = Date.now();
        const response = await request(app)
          .get('/api/products?limit=5')
          .expect(200);
        const duration = Date.now() - start;

        durations.push(duration);
        expect(response.body.success).toBe(true);
      }

      // Calculate average response time
      const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
      
      // Average should be under 500ms
      expect(avgDuration).toBeLessThan(500);

      // Last 10 requests should not be significantly slower than first 10
      const firstTenAvg = durations.slice(0, 10).reduce((a, b) => a + b, 0) / 10;
      const lastTenAvg = durations.slice(-10).reduce((a, b) => a + b, 0) / 10;
      
      // Last ten should not be more than 2x slower than first ten
      expect(lastTenAvg).toBeLessThan(firstTenAvg * 2);
    }, 60000);

    test('should maintain performance under sustained load', async () => {
      const testDuration = 10000; // 10 seconds
      const startTime = Date.now();
      let requestCount = 0;
      const errors = [];

      while (Date.now() - startTime < testDuration) {
        try {
          const response = await request(app)
            .get('/api/scenarios?limit=5')
            .timeout(2000);
          
          if (response.status === 200) {
            requestCount++;
          } else {
            errors.push(response.status);
          }
        } catch (error) {
          errors.push(error.message);
        }
      }

      // Should handle at least 50 requests in 10 seconds
      expect(requestCount).toBeGreaterThan(50);
      
      // Error rate should be less than 5%
      const errorRate = errors.length / (requestCount + errors.length);
      expect(errorRate).toBeLessThan(0.05);
    }, 15000);
  });

  describe('Large Dataset Tests', () => {
    test('should handle large limit values efficiently', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products?limit=100')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(2000);
    });

    test('should handle pagination with large offsets', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products?limit=10&offset=50')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(1000);
    });

    test('should handle complex search queries efficiently', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products/search/IBM')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(1500);
    });

    test('should handle multiple filter combinations', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products?category=AI&search=Watson&limit=20')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(1500);
    });
  });

  describe('Database Connection Pool Tests', () => {
    test('should efficiently use connection pool', async () => {
      // Make many concurrent requests to test pool management
      const promises = Array(30).fill(null).map((_, i) =>
        request(app).get(`/api/products?limit=5&offset=${i * 5}`)
      );

      const start = Date.now();
      const responses = await Promise.all(promises);
      const duration = Date.now() - start;

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });

      // Should complete within reasonable time despite pool limits
      expect(duration).toBeLessThan(5000);
    }, 10000);

    test('should handle connection pool exhaustion gracefully', async () => {
      // Create more concurrent requests than pool size (20)
      const promises = Array(40).fill(null).map(() =>
        request(app).get('/api/scenarios?limit=10')
      );

      const responses = await Promise.all(promises);

      responses.forEach(response => {
        expect([200, 503]).toContain(response.status);
        if (response.status === 200) {
          expect(response.body.success).toBe(true);
        }
      });
    }, 15000);

    test('should recover from connection pool saturation', async () => {
      // Saturate pool
      const saturationPromises = Array(25).fill(null).map(() =>
        request(app).get('/api/products?limit=10')
      );
      await Promise.all(saturationPromises);

      // Wait a bit for connections to be released
      await new Promise(resolve => setTimeout(resolve, 100));

      // Should work normally after saturation
      const response = await request(app)
        .get('/api/scenarios?limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
    }, 10000);
  });

  describe('Memory and Resource Tests', () => {
    test('should not leak memory on repeated requests', async () => {
      const initialMemory = process.memoryUsage().heapUsed;

      // Make many requests
      for (let i = 0; i < 100; i++) {
        await request(app)
          .get('/api/products?limit=10')
          .expect(200);
      }

      // Force garbage collection if available
      if (global.gc) {
        global.gc();
      }

      const finalMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = finalMemory - initialMemory;

      // Memory increase should be reasonable (less than 50MB)
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    }, 30000);

    test('should handle large response payloads', async () => {
      const start = Date.now();
      const response = await request(app)
        .get('/api/products?limit=100')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeGreaterThan(0);
      expect(duration).toBeLessThan(3000);

      // Check response size is reasonable
      const responseSize = JSON.stringify(response.body).length;
      expect(responseSize).toBeGreaterThan(0);
    });
  });

  describe('Query Optimization Tests', () => {
    test('should use indexes for filtered queries', async () => {
      // Test that filtered queries are fast (indicating index usage)
      const start = Date.now();
      const response = await request(app)
        .get('/api/products?category=AI')
        .expect(200);
      const duration = Date.now() - start;

      expect(response.body.success).toBe(true);
      expect(duration).toBeLessThan(500);
    });

    test('should efficiently handle JOIN operations', async () => {
      const testUserId = 'join-test-' + Date.now();
      
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        // Create progress
        await request(app)
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

        // Test JOIN query performance
        const start = Date.now();
        const response = await request(app)
          .get(`/api/progress/user/${testUserId}`)
          .expect(200);
        const duration = Date.now() - start;

        expect(response.body.success).toBe(true);
        expect(duration).toBeLessThan(500);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [testUserId]);
      }
    });

    test('should efficiently aggregate statistics', async () => {
      const statsUserId = 'stats-perf-' + Date.now();
      
      const scenarioResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (scenarioResponse.body.data.length > 0) {
        const scenarioId = scenarioResponse.body.data[0].id;

        // Create some progress data
        await request(app)
          .post('/api/progress')
          .send({
            user_id: statsUserId,
            scenario_id: scenarioId,
            status: 'completed',
            score: 85,
            max_score: 100,
            completion_percentage: 100,
            time_spent: 500,
            answers: {}
          })
          .expect(200);

        // Test stats query performance
        const start = Date.now();
        const response = await request(app)
          .get(`/api/progress/user/${statsUserId}/stats`)
          .expect(200);
        const duration = Date.now() - start;

        expect(response.body.success).toBe(true);
        expect(duration).toBeLessThan(500);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [statsUserId]);
      }
    });
  });

  describe('Stress Tests', () => {
    test('should survive rapid fire requests', async () => {
      const promises = [];
      
      // Fire 100 requests as fast as possible
      for (let i = 0; i < 100; i++) {
        promises.push(
          request(app)
            .get('/api/products?limit=5')
            .timeout(5000)
        );
      }

      const responses = await Promise.all(promises);
      
      const successCount = responses.filter(r => r.status === 200).length;
      const successRate = successCount / responses.length;

      // At least 90% should succeed
      expect(successRate).toBeGreaterThan(0.9);
    }, 20000);

    test('should handle burst traffic patterns', async () => {
      // Simulate burst: quiet -> spike -> quiet
      
      // Quiet period
      await request(app).get('/api/scenarios?limit=5').expect(200);
      
      // Burst
      const burstPromises = Array(50).fill(null).map(() =>
        request(app).get('/api/products?limit=10')
      );
      const burstResponses = await Promise.all(burstPromises);
      
      // Quiet period again
      const afterBurstResponse = await request(app)
        .get('/api/scenarios?limit=5')
        .expect(200);

      // All burst requests should succeed
      burstResponses.forEach(response => {
        expect(response.status).toBe(200);
      });

      // System should still be responsive after burst
      expect(afterBurstResponse.body.success).toBe(true);
    }, 15000);
  });

  describe('Throughput Tests', () => {
    test('should maintain minimum throughput', async () => {
      const testDuration = 5000; // 5 seconds
      const startTime = Date.now();
      let requestCount = 0;

      const promises = [];
      while (Date.now() - startTime < testDuration) {
        promises.push(
          request(app)
            .get('/api/products?limit=5')
            .then(() => requestCount++)
        );
        
        // Small delay to prevent overwhelming
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      await Promise.all(promises);

      // Should handle at least 50 requests in 5 seconds (10 req/sec)
      expect(requestCount).toBeGreaterThan(50);
    }, 10000);
  });
});

// Made with Bob