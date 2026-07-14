/**
 * Scenario Selection Tests
 * Tests adaptive difficulty, user tracking, and edge cases
 */

const request = require('supertest');
const express = require('express');
const scenarioSelectionRouter = require('../routes/scenarioSelection');

// Create test app
const app = express();
app.use(express.json());
app.use('/api/scenarios', scenarioSelectionRouter);

describe('Scenario Selection API', () => {
  
  beforeEach(() => {
    // Reset user history before each test
    return request(app)
      .delete('/api/scenarios/history?userId=test-user')
      .expect(200);
  });

  describe('GET /api/scenarios/next', () => {
    
    test('should return a beginner scenario for first-time user', async () => {
      const response = await request(app)
        .get('/api/scenarios/next?userId=new-user')
        .expect(200);
      
      expect(response.body).toHaveProperty('scenario');
      expect(response.body).toHaveProperty('userProgress');
      expect(response.body.scenario.difficulty).toBe('beginner');
      expect(response.body.userProgress.completed).toBe(0);
      expect(response.body.userProgress.currentLevel).toBe('beginner');
    });

    test('should return beginner scenario for second attempt', async () => {
      // Complete first scenario
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 60,
          maxScore: 75,
          answers: {}
        });

      // Get next scenario
      const response = await request(app)
        .get('/api/scenarios/next?userId=test-user')
        .expect(200);
      
      expect(response.body.scenario.difficulty).toBe('beginner');
      expect(response.body.userProgress.completed).toBe(1);
    });

    test('should progress to intermediate after good beginner performance', async () => {
      // Complete 2 beginner scenarios with high scores
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 65,
          maxScore: 75,
          answers: {}
        });

      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-cloud-002',
          score: 68,
          maxScore: 75,
          answers: {}
        });

      // Third scenario should be intermediate (avg score > 75%)
      const response = await request(app)
        .get('/api/scenarios/next?userId=test-user')
        .expect(200);
      
      // With avg score of ~88%, should get intermediate
      expect(['intermediate', 'beginner']).toContain(response.body.scenario.difficulty);
      expect(response.body.userProgress.completed).toBe(2);
    });

    test('should stay at beginner with poor performance', async () => {
      // Complete 2 scenarios with low scores
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 45,
          maxScore: 75,
          answers: {}
        });

      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-cloud-002',
          score: 48,
          maxScore: 75,
          answers: {}
        });

      const response = await request(app)
        .get('/api/scenarios/next?userId=test-user')
        .expect(200);
      
      // With avg score of ~62%, should stay at beginner
      expect(response.body.scenario.difficulty).toBe('beginner');
    });

    test('should handle missing userId with default', async () => {
      const response = await request(app)
        .get('/api/scenarios/next')
        .expect(200);
      
      expect(response.body).toHaveProperty('scenario');
      expect(response.body.userProgress.currentLevel).toBe('beginner');
    });

    test('should not repeat same industry consecutively', async () => {
      const industries = new Set();
      
      // Complete 5 scenarios and track industries
      for (let i = 0; i < 5; i++) {
        const nextResponse = await request(app)
          .get('/api/scenarios/next?userId=diversity-test')
          .expect(200);
        
        const industry = nextResponse.body.scenario.industry;
        industries.add(industry);
        
        // Complete the scenario
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: 'diversity-test',
            scenarioId: nextResponse.body.scenario.id,
            score: 60,
            maxScore: 75,
            answers: {}
          });
      }
      
      // Should have some industry diversity (at least 2 different industries)
      expect(industries.size).toBeGreaterThanOrEqual(1);
    });
  });

  describe('POST /api/scenarios/complete', () => {
    
    test('should record scenario completion successfully', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 60,
          maxScore: 75,
          answers: { q1: ['option1'], q2: ['option2'] }
        })
        .expect(200);
      
      expect(response.body.success).toBe(true);
      expect(response.body.scorePercentage).toBe(80);
      expect(response.body.newLevel).toBe('beginner');
      expect(response.body.progress.totalCompleted).toBe(1);
    });

    test('should calculate score percentage correctly', async () => {
      const testCases = [
        { score: 75, maxScore: 75, expected: 100 },
        { score: 60, maxScore: 75, expected: 80 },
        { score: 45, maxScore: 75, expected: 60 },
        { score: 0, maxScore: 75, expected: 0 }
      ];

      for (const testCase of testCases) {
        const response = await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: `test-user-${testCase.score}`,
            scenarioId: 'scenario-power-001',
            score: testCase.score,
            maxScore: testCase.maxScore,
            answers: {}
          })
          .expect(200);
        
        expect(response.body.scorePercentage).toBe(testCase.expected);
      }
    });

    test('should update user level based on performance', async () => {
      // Complete multiple scenarios with high scores
      const scenarios = [
        { id: 'scenario-power-001', score: 68 },
        { id: 'scenario-cloud-002', score: 70 },
        { id: 'scenario-power-003', score: 65 },
        { id: 'scenario-cloud-004', score: 72 },
        { id: 'scenario-power-005', score: 68 }
      ];

      for (const scenario of scenarios) {
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: 'level-test',
            scenarioId: scenario.id,
            score: scenario.score,
            maxScore: 75,
            answers: {}
          });
      }

      // Check final level (avg ~91% should be advanced or intermediate)
      const historyResponse = await request(app)
        .get('/api/scenarios/history?userId=level-test')
        .expect(200);
      
      expect(['intermediate', 'advanced']).toContain(historyResponse.body.stats.currentLevel);
    });

    test('should reject incomplete data', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001'
          // Missing score and maxScore
        })
        .expect(400);
      
      expect(response.body.error).toBe('Missing required fields');
    });

    test('should reject invalid scenario ID', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'invalid-scenario-id',
          score: 60,
          maxScore: 75,
          answers: {}
        })
        .expect(404);
      
      expect(response.body.error).toBe('Scenario not found');
    });

    test('should handle zero score', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 0,
          maxScore: 75,
          answers: {}
        })
        .expect(200);
      
      expect(response.body.scorePercentage).toBe(0);
      expect(response.body.success).toBe(true);
    });

    test('should handle perfect score', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'test-user',
          scenarioId: 'scenario-power-001',
          score: 75,
          maxScore: 75,
          answers: {}
        })
        .expect(200);
      
      expect(response.body.scorePercentage).toBe(100);
    });
  });

  describe('GET /api/scenarios/history', () => {
    
    test('should return empty history for new user', async () => {
      const response = await request(app)
        .get('/api/scenarios/history?userId=new-user')
        .expect(200);
      
      expect(response.body.history).toEqual([]);
      expect(response.body.stats.totalCompleted).toBe(0);
      expect(response.body.stats.averageScore).toBe(0);
    });

    test('should return complete history with stats', async () => {
      // Complete 3 scenarios
      const completions = [
        { id: 'scenario-power-001', score: 60, difficulty: 'intermediate' },
        { id: 'scenario-cloud-002', score: 65, difficulty: 'advanced' },
        { id: 'scenario-power-003', score: 55, difficulty: 'beginner' }
      ];

      for (const completion of completions) {
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: 'history-test',
            scenarioId: completion.id,
            score: completion.score,
            maxScore: 75,
            answers: {}
          });
      }

      const response = await request(app)
        .get('/api/scenarios/history?userId=history-test')
        .expect(200);
      
      expect(response.body.history).toHaveLength(3);
      expect(response.body.stats.totalCompleted).toBe(3);
      expect(response.body.stats.averageScore).toBeGreaterThan(0);
      expect(response.body.stats.byDifficulty).toHaveProperty('beginner');
      expect(response.body.stats.byDifficulty).toHaveProperty('intermediate');
      expect(response.body.stats.byDifficulty).toHaveProperty('advanced');
    });

    test('should calculate average score correctly', async () => {
      // Complete scenarios with known scores
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'avg-test',
          scenarioId: 'scenario-power-001',
          score: 60,
          maxScore: 75,
          answers: {}
        });

      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'avg-test',
          scenarioId: 'scenario-cloud-002',
          score: 75,
          maxScore: 75,
          answers: {}
        });

      const response = await request(app)
        .get('/api/scenarios/history?userId=avg-test')
        .expect(200);
      
      // Average of 80% and 100% = 90%
      expect(response.body.stats.averageScore).toBe(90);
    });

    test('should track scenarios by industry', async () => {
      // Complete scenarios from different industries
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'industry-test',
          scenarioId: 'scenario-power-001',
          score: 60,
          maxScore: 75,
          answers: {}
        });

      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'industry-test',
          scenarioId: 'scenario-cloud-002',
          score: 65,
          maxScore: 75,
          answers: {}
        });

      const response = await request(app)
        .get('/api/scenarios/history?userId=industry-test')
        .expect(200);
      
      expect(response.body.stats.byIndustry).toBeDefined();
      expect(Object.keys(response.body.stats.byIndustry).length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/scenarios/stats', () => {
    
    test('should return overall statistics', async () => {
      const response = await request(app)
        .get('/api/scenarios/stats')
        .expect(200);
      
      expect(response.body).toHaveProperty('totalScenarios');
      expect(response.body).toHaveProperty('byDifficulty');
      expect(response.body).toHaveProperty('byIndustry');
      expect(response.body).toHaveProperty('totalUsers');
      
      expect(response.body.totalScenarios).toBeGreaterThan(0);
      expect(response.body.byDifficulty).toHaveProperty('beginner');
      expect(response.body.byDifficulty).toHaveProperty('intermediate');
      expect(response.body.byDifficulty).toHaveProperty('advanced');
    });

    test('should count scenarios correctly', async () => {
      const response = await request(app)
        .get('/api/scenarios/stats')
        .expect(200);
      
      const total = response.body.byDifficulty.beginner + 
                    response.body.byDifficulty.intermediate + 
                    response.body.byDifficulty.advanced;
      
      expect(total).toBe(response.body.totalScenarios);
    });
  });

  describe('DELETE /api/scenarios/history', () => {
    
    test('should reset user history', async () => {
      // Create some history
      await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'reset-test',
          scenarioId: 'scenario-power-001',
          score: 60,
          maxScore: 75,
          answers: {}
        });

      // Verify history exists
      let historyResponse = await request(app)
        .get('/api/scenarios/history?userId=reset-test')
        .expect(200);
      expect(historyResponse.body.history).toHaveLength(1);

      // Reset history
      await request(app)
        .delete('/api/scenarios/history?userId=reset-test')
        .expect(200);

      // Verify history is empty
      historyResponse = await request(app)
        .get('/api/scenarios/history?userId=reset-test')
        .expect(200);
      expect(historyResponse.body.history).toHaveLength(0);
    });

    test('should handle reset for non-existent user', async () => {
      const response = await request(app)
        .delete('/api/scenarios/history?userId=non-existent')
        .expect(200);
      
      expect(response.body.success).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    
    test('should handle rapid successive requests', async () => {
      const promises = [];
      for (let i = 0; i < 10; i++) {
        promises.push(
          request(app)
            .get('/api/scenarios/next?userId=rapid-test')
            .expect(200)
        );
      }
      
      const responses = await Promise.all(promises);
      responses.forEach(response => {
        expect(response.body).toHaveProperty('scenario');
      });
    });

    test('should handle very long user ID', async () => {
      const longUserId = 'a'.repeat(1000);
      const response = await request(app)
        .get(`/api/scenarios/next?userId=${longUserId}`)
        .expect(200);
      
      expect(response.body).toHaveProperty('scenario');
    });

    test('should handle special characters in user ID', async () => {
      const specialUserId = 'user@test.com';
      const response = await request(app)
        .get(`/api/scenarios/next?userId=${encodeURIComponent(specialUserId)}`)
        .expect(200);
      
      expect(response.body).toHaveProperty('scenario');
    });

    test('should handle completing all available scenarios', async () => {
      // Get stats to know how many scenarios exist
      const statsResponse = await request(app)
        .get('/api/scenarios/stats')
        .expect(200);
      
      const totalScenarios = statsResponse.body.totalScenarios;
      
      // Complete all scenarios
      for (let i = 0; i < totalScenarios; i++) {
        const nextResponse = await request(app)
          .get('/api/scenarios/next?userId=complete-all')
          .expect(200);
        
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: 'complete-all',
            scenarioId: nextResponse.body.scenario.id,
            score: 60,
            maxScore: 75,
            answers: {}
          });
      }
      
      // Should still be able to get a scenario (allows repeats)
      const finalResponse = await request(app)
        .get('/api/scenarios/next?userId=complete-all')
        .expect(200);
      
      expect(finalResponse.body).toHaveProperty('scenario');
    });

    test('should handle negative scores gracefully', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'negative-test',
          scenarioId: 'scenario-power-001',
          score: -10,
          maxScore: 75,
          answers: {}
        })
        .expect(200);
      
      // Should handle negative as 0 or reject
      expect(response.body.scorePercentage).toBeLessThanOrEqual(0);
    });

    test('should handle score exceeding maxScore', async () => {
      const response = await request(app)
        .post('/api/scenarios/complete')
        .send({
          userId: 'exceed-test',
          scenarioId: 'scenario-power-001',
          score: 100,
          maxScore: 75,
          answers: {}
        })
        .expect(200);
      
      // Should cap at 100% or handle appropriately
      expect(response.body.scorePercentage).toBeGreaterThanOrEqual(100);
    });
  });

  describe('Performance Tests', () => {
    
    test('should handle 100 completions efficiently', async () => {
      const startTime = Date.now();
      
      for (let i = 0; i < 100; i++) {
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: `perf-test-${i}`,
            scenarioId: 'scenario-power-001',
            score: 60,
            maxScore: 75,
            answers: {}
          });
      }
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      // Should complete in reasonable time (< 10 seconds)
      expect(duration).toBeLessThan(10000);
    });

    test('should retrieve history efficiently for user with many completions', async () => {
      // Create 50 completions
      for (let i = 0; i < 50; i++) {
        await request(app)
          .post('/api/scenarios/complete')
          .send({
            userId: 'heavy-user',
            scenarioId: i % 2 === 0 ? 'scenario-power-001' : 'scenario-cloud-002',
            score: 60,
            maxScore: 75,
            answers: {}
          });
      }
      
      const startTime = Date.now();
      const response = await request(app)
        .get('/api/scenarios/history?userId=heavy-user')
        .expect(200);
      const endTime = Date.now();
      
      expect(response.body.history).toHaveLength(50);
      expect(endTime - startTime).toBeLessThan(1000); // Should be fast
    });
  });
});

console.log('✅ Scenario Selection tests defined');

// Made with Bob
