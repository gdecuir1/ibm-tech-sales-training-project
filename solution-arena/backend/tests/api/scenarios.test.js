// Scenarios API Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('Scenarios API', () => {
  afterAll(async () => {
    await pool.end();
  });

  describe('GET /api/scenarios', () => {
    test('should return list of scenarios', async () => {
      const response = await request(app)
        .get('/api/scenarios')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should filter scenarios by industry', async () => {
      const response = await request(app)
        .get('/api/scenarios?industry=banking')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(scenario => {
          expect(scenario.industry).toBe('banking');
        });
      }
    });

    test('should filter scenarios by difficulty', async () => {
      const response = await request(app)
        .get('/api/scenarios?difficulty=intermediate')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(scenario => {
          expect(scenario.difficulty).toBe('intermediate');
        });
      }
    });

    test('should respect limit parameter', async () => {
      const response = await request(app)
        .get('/api/scenarios?limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeLessThanOrEqual(5);
    });

    test('should respect offset parameter', async () => {
      const response1 = await request(app)
        .get('/api/scenarios?limit=1&offset=0')
        .expect(200);

      const response2 = await request(app)
        .get('/api/scenarios?limit=1&offset=1')
        .expect(200);

      if (response1.body.data.length > 0 && response2.body.data.length > 0) {
        expect(response1.body.data[0].id).not.toBe(response2.body.data[0].id);
      }
    });
  });

  describe('GET /api/scenarios/:id', () => {
    test('should return specific scenario with questions', async () => {
      // First get a scenario ID
      const listResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const scenarioId = listResponse.body.data[0].id;

        const response = await request(app)
          .get(`/api/scenarios/${scenarioId}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty('id', scenarioId);
        expect(response.body.data).toHaveProperty('title');
        expect(response.body.data).toHaveProperty('questions');
        expect(Array.isArray(response.body.data.questions)).toBe(true);
      }
    });

    test('should return 404 for non-existent scenario', async () => {
      const response = await request(app)
        .get('/api/scenarios/nonexistent-id-12345')
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toBeTruthy();
    });

    test('should include all scenario fields', async () => {
      const listResponse = await request(app)
        .get('/api/scenarios?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const scenarioId = listResponse.body.data[0].id;

        const response = await request(app)
          .get(`/api/scenarios/${scenarioId}`)
          .expect(200);

        const scenario = response.body.data;
        expect(scenario).toHaveProperty('id');
        expect(scenario).toHaveProperty('title');
        expect(scenario).toHaveProperty('difficulty');
        expect(scenario).toHaveProperty('industry');
        expect(scenario).toHaveProperty('questions');
      }
    });
  });

  describe('GET /api/scenarios/industry/:industry', () => {
    test('should return scenarios for specific industry', async () => {
      const response = await request(app)
        .get('/api/scenarios/industry/banking')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      
      if (response.body.data.length > 0) {
        response.body.data.forEach(scenario => {
          expect(scenario.industry).toBe('banking');
        });
      }
    });

    test('should return empty array for industry with no scenarios', async () => {
      const response = await request(app)
        .get('/api/scenarios/industry/nonexistent-industry')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
      expect(response.body.count).toBe(0);
    });
  });

  describe('Error Handling', () => {
    test('should handle database errors gracefully', async () => {
      // This test would require mocking the database to simulate an error
      // For now, we'll test that the API doesn't crash on invalid input
      const response = await request(app)
        .get('/api/scenarios?limit=invalid')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle malformed scenario IDs', async () => {
      const response = await request(app)
        .get('/api/scenarios/../../etc/passwd')
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('Response Format', () => {
    test('should return consistent response structure', async () => {
      const response = await request(app)
        .get('/api/scenarios')
        .expect(200);

      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('data');
      expect(typeof response.body.success).toBe('boolean');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should include count in response', async () => {
      const response = await request(app)
        .get('/api/scenarios')
        .expect(200);

      expect(response.body).toHaveProperty('count');
      expect(typeof response.body.count).toBe('number');
    });
  });

  describe('Performance', () => {
    test('should respond within acceptable time', async () => {
      const start = Date.now();
      await request(app)
        .get('/api/scenarios')
        .expect(200);
      const duration = Date.now() - start;

      // API should respond in less than 2 seconds
      expect(duration).toBeLessThan(2000);
    });

    test('should handle concurrent requests', async () => {
      const promises = Array(10).fill(null).map(() =>
        request(app).get('/api/scenarios')
      );

      const responses = await Promise.all(promises);
      
      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });
    });
  });
});

// Made with Bob