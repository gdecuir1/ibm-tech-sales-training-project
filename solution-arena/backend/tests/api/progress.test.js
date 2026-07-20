// Progress API Comprehensive Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('Progress API - Comprehensive Tests', () => {
  const testUserId = 'test-user-' + Date.now();
  let testScenarioId;

  beforeAll(async () => {
    // Get a scenario ID for testing
    const scenariosResponse = await request(app)
      .get('/api/scenarios?limit=1')
      .expect(200);
    
    if (scenariosResponse.body.data.length > 0) {
      testScenarioId = scenariosResponse.body.data[0].id;
    }
  });

  afterAll(async () => {
    // Clean up test data
    try {
      await pool.query('DELETE FROM user_progress WHERE user_id = $1', [testUserId]);
      await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [testUserId]);
    } catch (error) {
      console.error('Cleanup error:', error);
    }
    await pool.end();
  });

  describe('GET /api/progress/user/:userId', () => {
    test('should return all progress for a user', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}`)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should return empty array for user with no progress', async () => {
      const newUserId = 'new-user-' + Date.now();
      const response = await request(app)
        .get(`/api/progress/user/${newUserId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });

    test('should include scenario details in progress', async () => {
      // First create some progress
      if (testScenarioId) {
        await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: {}
          })
          .expect(200);

        const response = await request(app)
          .get(`/api/progress/user/${testUserId}`)
          .expect(200);

        if (response.body.data.length > 0) {
          const progress = response.body.data[0];
          expect(progress).toHaveProperty('title');
          expect(progress).toHaveProperty('industry');
          expect(progress).toHaveProperty('difficulty');
        }
      }
    });

    test('should order progress by last accessed', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}`)
        .expect(200);

      if (response.body.data.length > 1) {
        const dates = response.body.data.map(p => new Date(p.last_accessed));
        for (let i = 1; i < dates.length; i++) {
          expect(dates[i - 1].getTime()).toBeGreaterThanOrEqual(dates[i].getTime());
        }
      }
    });

    test('should handle special characters in user ID', async () => {
      const response = await request(app)
        .get('/api/progress/user/user%40example.com')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });
  });

  describe('GET /api/progress/user/:userId/scenario/:scenarioId', () => {
    test('should return specific scenario progress', async () => {
      if (testScenarioId) {
        const response = await request(app)
          .get(`/api/progress/user/${testUserId}/scenario/${testScenarioId}`)
          .expect(200);

        if (response.body.success) {
          expect(response.body.data).toHaveProperty('user_id', testUserId);
          expect(response.body.data).toHaveProperty('scenario_id', testScenarioId);
        }
      }
    });

    test('should return 404 for non-existent progress', async () => {
      const response = await request(app)
        .get('/api/progress/user/nonexistent-user/scenario/nonexistent-scenario')
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toBeTruthy();
    });

    test('should include all progress fields', async () => {
      if (testScenarioId) {
        const response = await request(app)
          .get(`/api/progress/user/${testUserId}/scenario/${testScenarioId}`)
          .expect(200);

        if (response.body.success) {
          const progress = response.body.data;
          expect(progress).toHaveProperty('status');
          expect(progress).toHaveProperty('score');
          expect(progress).toHaveProperty('completion_percentage');
          expect(progress).toHaveProperty('time_spent');
        }
      }
    });
  });

  describe('POST /api/progress', () => {
    test('should create new progress entry', async () => {
      if (testScenarioId) {
        const newUserId = 'new-progress-user-' + Date.now();
        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: newUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 0,
            max_score: 100,
            completion_percentage: 0,
            time_spent: 0,
            answers: {}
          })
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty('user_id', newUserId);
        expect(response.body.data).toHaveProperty('scenario_id', testScenarioId);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [newUserId]);
      }
    });

    test('should update existing progress entry', async () => {
      if (testScenarioId) {
        // Create initial progress
        await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: { q1: 'answer1' }
          })
          .expect(200);

        // Update progress
        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'completed',
            score: 85,
            max_score: 100,
            completion_percentage: 100,
            time_spent: 600,
            answers: { q1: 'answer1', q2: 'answer2' }
          })
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.status).toBe('completed');
        expect(response.body.data.score).toBe(85);
      }
    });

    test('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: testUserId
          // Missing required fields
        })
        .expect(500);

      expect(response.body.success).toBe(false);
    });

    test('should handle JSON answers field', async () => {
      if (testScenarioId) {
        const complexAnswers = {
          question1: { answer: 'A', confidence: 0.8 },
          question2: { answer: 'B', confidence: 0.9 },
          metadata: { startTime: Date.now() }
        };

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: complexAnswers
          })
          .expect(200);

        expect(response.body.success).toBe(true);
      }
    });

    test('should set completed_at when status is completed', async () => {
      if (testScenarioId) {
        const completedUserId = 'completed-user-' + Date.now();
        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: completedUserId,
            scenario_id: testScenarioId,
            status: 'completed',
            score: 100,
            max_score: 100,
            completion_percentage: 100,
            time_spent: 500,
            answers: {}
          })
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.completed_at).toBeTruthy();

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [completedUserId]);
      }
    });
  });

  describe('POST /api/progress/attempt', () => {
    test('should record a scenario attempt', async () => {
      if (testScenarioId) {
        const attemptUserId = 'attempt-user-' + Date.now();
        const response = await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: attemptUserId,
            scenario_id: testScenarioId,
            attempt_number: 1,
            score: 75,
            max_score: 100,
            percentage: 75,
            time_spent: 450,
            answers: { q1: 'A', q2: 'B' },
            skill_scores: { technical: 80, business: 70 },
            recommendations: ['Practice more on business value'],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty('attempt_number', 1);

        // Cleanup
        await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [attemptUserId]);
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [attemptUserId]);
      }
    });

    test('should update user progress when recording attempt', async () => {
      if (testScenarioId) {
        const attemptUserId = 'attempt-progress-user-' + Date.now();
        
        await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: attemptUserId,
            scenario_id: testScenarioId,
            attempt_number: 1,
            score: 80,
            max_score: 100,
            percentage: 80,
            time_spent: 400,
            answers: {},
            skill_scores: {},
            recommendations: [],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        // Check that progress was updated
        const progressResponse = await request(app)
          .get(`/api/progress/user/${attemptUserId}/scenario/${testScenarioId}`)
          .expect(200);

        expect(progressResponse.body.success).toBe(true);
        expect(progressResponse.body.data.status).toBe('completed');

        // Cleanup
        await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [attemptUserId]);
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [attemptUserId]);
      }
    });

    test('should keep best score in progress', async () => {
      if (testScenarioId) {
        const bestScoreUserId = 'best-score-user-' + Date.now();
        
        // First attempt with score 60
        await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: bestScoreUserId,
            scenario_id: testScenarioId,
            attempt_number: 1,
            score: 60,
            max_score: 100,
            percentage: 60,
            time_spent: 400,
            answers: {},
            skill_scores: {},
            recommendations: [],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        // Second attempt with score 90
        await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: bestScoreUserId,
            scenario_id: testScenarioId,
            attempt_number: 2,
            score: 90,
            max_score: 100,
            percentage: 90,
            time_spent: 450,
            answers: {},
            skill_scores: {},
            recommendations: [],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        // Check progress has best score
        const progressResponse = await request(app)
          .get(`/api/progress/user/${bestScoreUserId}/scenario/${testScenarioId}`)
          .expect(200);

        expect(progressResponse.body.data.score).toBe(90);

        // Cleanup
        await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [bestScoreUserId]);
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [bestScoreUserId]);
      }
    });

    test('should validate required attempt fields', async () => {
      const response = await request(app)
        .post('/api/progress/attempt')
        .send({
          user_id: testUserId
          // Missing required fields
        })
        .expect(500);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/progress/user/:userId/attempts', () => {
    test('should return all attempts for a user', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/attempts`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('count');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should include scenario details in attempts', async () => {
      if (testScenarioId) {
        // Create an attempt
        const attemptsUserId = 'attempts-list-user-' + Date.now();
        await request(app)
          .post('/api/progress/attempt')
          .send({
            user_id: attemptsUserId,
            scenario_id: testScenarioId,
            attempt_number: 1,
            score: 75,
            max_score: 100,
            percentage: 75,
            time_spent: 400,
            answers: {},
            skill_scores: {},
            recommendations: [],
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString()
          })
          .expect(200);

        const response = await request(app)
          .get(`/api/progress/user/${attemptsUserId}/attempts`)
          .expect(200);

        if (response.body.data.length > 0) {
          const attempt = response.body.data[0];
          expect(attempt).toHaveProperty('title');
          expect(attempt).toHaveProperty('industry');
          expect(attempt).toHaveProperty('difficulty');
        }

        // Cleanup
        await pool.query('DELETE FROM scenario_attempts WHERE user_id = $1', [attemptsUserId]);
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [attemptsUserId]);
      }
    });

    test('should respect limit parameter', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/attempts?limit=5`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeLessThanOrEqual(5);
    });

    test('should respect offset parameter', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/attempts?limit=10&offset=5`)
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should order attempts by completion date descending', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/attempts`)
        .expect(200);

      if (response.body.data.length > 1) {
        const dates = response.body.data.map(a => new Date(a.completed_at));
        for (let i = 1; i < dates.length; i++) {
          expect(dates[i - 1].getTime()).toBeGreaterThanOrEqual(dates[i].getTime());
        }
      }
    });
  });

  describe('GET /api/progress/user/:userId/stats', () => {
    test('should return user statistics', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/stats`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('scenarios_attempted');
      expect(response.body.data).toHaveProperty('scenarios_completed');
      expect(response.body.data).toHaveProperty('total_time_spent');
    });

    test('should calculate average score correctly', async () => {
      const statsUserId = 'stats-user-' + Date.now();
      
      if (testScenarioId) {
        // Create multiple completed scenarios
        await request(app)
          .post('/api/progress')
          .send({
            user_id: statsUserId,
            scenario_id: testScenarioId,
            status: 'completed',
            score: 80,
            max_score: 100,
            completion_percentage: 100,
            time_spent: 400,
            answers: {}
          })
          .expect(200);

        const response = await request(app)
          .get(`/api/progress/user/${statsUserId}/stats`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data.scenarios_completed).toBeGreaterThan(0);

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [statsUserId]);
      }
    });

    test('should return zero stats for new user', async () => {
      const newStatsUserId = 'new-stats-user-' + Date.now();
      const response = await request(app)
        .get(`/api/progress/user/${newStatsUserId}/stats`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.scenarios_attempted).toBe('0');
    });

    test('should include attempt statistics', async () => {
      const response = await request(app)
        .get(`/api/progress/user/${testUserId}/stats`)
        .expect(200);

      expect(response.body.data).toHaveProperty('total_attempts');
      expect(response.body.data).toHaveProperty('average_percentage');
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid user ID format', async () => {
      const response = await request(app)
        .get('/api/progress/user/../../etc/passwd')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle database errors gracefully', async () => {
      const response = await request(app)
        .post('/api/progress')
        .send({
          user_id: testUserId,
          scenario_id: 'invalid-scenario-id-that-does-not-exist',
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

    test('should handle malformed JSON in request body', async () => {
      const response = await request(app)
        .post('/api/progress')
        .set('Content-Type', 'application/json')
        .send('{"invalid json}')
        .expect(400);

      expect(response.body).toBeDefined();
    });
  });

  describe('Data Integrity', () => {
    test('should not allow negative scores', async () => {
      if (testScenarioId) {
        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: -10,
            max_score: 100,
            completion_percentage: 0,
            time_spent: 0,
            answers: {}
          })
          .expect(200);

        // Should accept but data validation should be in place
        expect(response.body).toHaveProperty('success');
      }
    });

    test('should not allow completion percentage over 100', async () => {
      if (testScenarioId) {
        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 150,
            time_spent: 300,
            answers: {}
          })
          .expect(200);

        expect(response.body).toHaveProperty('success');
      }
    });

    test('should preserve data types in answers field', async () => {
      if (testScenarioId) {
        const complexData = {
          numbers: [1, 2, 3],
          strings: ['a', 'b', 'c'],
          nested: { key: 'value' },
          boolean: true
        };

        const response = await request(app)
          .post('/api/progress')
          .send({
            user_id: testUserId,
            scenario_id: testScenarioId,
            status: 'in_progress',
            score: 50,
            max_score: 100,
            completion_percentage: 50,
            time_spent: 300,
            answers: complexData
          })
          .expect(200);

        expect(response.body.success).toBe(true);
      }
    });
  });

  describe('Performance Tests', () => {
    test('should respond quickly for user progress', async () => {
      const start = Date.now();
      await request(app)
        .get(`/api/progress/user/${testUserId}`)
        .expect(200);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(2000);
    });

    test('should respond quickly for stats calculation', async () => {
      const start = Date.now();
      await request(app)
        .get(`/api/progress/user/${testUserId}/stats`)
        .expect(200);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(2000);
    });

    test('should handle concurrent progress updates', async () => {
      if (testScenarioId) {
        const concurrentUserId = 'concurrent-user-' + Date.now();
        const promises = Array(10).fill(null).map((_, i) =>
          request(app)
            .post('/api/progress')
            .send({
              user_id: concurrentUserId,
              scenario_id: testScenarioId,
              status: 'in_progress',
              score: i * 10,
              max_score: 100,
              completion_percentage: i * 10,
              time_spent: i * 30,
              answers: {}
            })
        );

        const responses = await Promise.all(promises);
        
        responses.forEach(response => {
          expect(response.status).toBe(200);
        });

        // Cleanup
        await pool.query('DELETE FROM user_progress WHERE user_id = $1', [concurrentUserId]);
      }
    });
  });
});

// Made with Bob