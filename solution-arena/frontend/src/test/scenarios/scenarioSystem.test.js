import { describe, it, expect, beforeEach } from 'vitest';
import { healthcareScenarios } from '../../data/scenarios/healthcare';

describe('Scenario System', () => {
  describe('Healthcare Scenarios', () => {
    describe('Data Structure Validation', () => {
      it('should have at least one scenario', () => {
        expect(healthcareScenarios).toBeDefined();
        expect(Array.isArray(healthcareScenarios)).toBe(true);
        expect(healthcareScenarios.length).toBeGreaterThan(0);
      });

      it('should have valid scenario structure', () => {
        const scenario = healthcareScenarios[0];
        
        // Required top-level fields
        expect(scenario).toHaveProperty('id');
        expect(scenario).toHaveProperty('title');
        expect(scenario).toHaveProperty('industry');
        expect(scenario).toHaveProperty('difficulty');
        expect(scenario).toHaveProperty('estimatedTime');
        expect(scenario).toHaveProperty('description');
        expect(scenario).toHaveProperty('learningObjectives');
        expect(scenario).toHaveProperty('context');
        expect(scenario).toHaveProperty('discovery');
        expect(scenario).toHaveProperty('objections');
        expect(scenario).toHaveProperty('recommendation');
        expect(scenario).toHaveProperty('scoring');
      });

      it('should have valid ID format', () => {
        healthcareScenarios.forEach(scenario => {
          expect(scenario.id).toMatch(/^[a-z0-9-]+$/);
          expect(scenario.id.length).toBeGreaterThan(0);
        });
      });

      it('should have valid difficulty levels', () => {
        const validDifficulties = ['beginner', 'intermediate', 'advanced', 'expert'];
        
        healthcareScenarios.forEach(scenario => {
          expect(validDifficulties).toContain(scenario.difficulty);
        });
      });

      it('should have valid industry', () => {
        healthcareScenarios.forEach(scenario => {
          expect(scenario.industry).toBe('Healthcare');
        });
      });

      it('should have reasonable estimated time', () => {
        healthcareScenarios.forEach(scenario => {
          expect(scenario.estimatedTime).toBeGreaterThan(0);
          expect(scenario.estimatedTime).toBeLessThanOrEqual(120); // Max 2 hours
        });
      });
    });

    describe('Context Validation', () => {
      it('should have complete context information', () => {
        const scenario = healthcareScenarios[0];
        const { context } = scenario;
        
        expect(context).toHaveProperty('company');
        expect(context).toHaveProperty('industry');
        expect(context).toHaveProperty('size');
        expect(context).toHaveProperty('currentSituation');
        expect(context).toHaveProperty('painPoints');
        expect(context).toHaveProperty('stakeholders');
        expect(context).toHaveProperty('budget');
        expect(context).toHaveProperty('timeline');
        expect(context).toHaveProperty('technicalEnvironment');
      });

      it('should have valid company information', () => {
        const scenario = healthcareScenarios[0];
        const { company } = scenario.context;
        
        expect(company.name).toBeTruthy();
        expect(company.type).toBeTruthy();
        expect(company.location).toBeTruthy();
      });

      it('should have at least one pain point', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.context.painPoints)).toBe(true);
        expect(scenario.context.painPoints.length).toBeGreaterThan(0);
      });

      it('should have valid pain point structure', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.context.painPoints.forEach(painPoint => {
          expect(painPoint).toHaveProperty('issue');
          expect(painPoint).toHaveProperty('impact');
          expect(painPoint).toHaveProperty('urgency');
          expect(['low', 'medium', 'high', 'critical']).toContain(painPoint.urgency);
        });
      });

      it('should have at least one stakeholder', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.context.stakeholders)).toBe(true);
        expect(scenario.context.stakeholders.length).toBeGreaterThan(0);
      });

      it('should have valid stakeholder structure', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.context.stakeholders.forEach(stakeholder => {
          expect(stakeholder).toHaveProperty('role');
          expect(stakeholder).toHaveProperty('name');
          expect(stakeholder).toHaveProperty('concerns');
          expect(stakeholder).toHaveProperty('influence');
          expect(['low', 'medium', 'high']).toContain(stakeholder.influence);
        });
      });

      it('should have valid budget information', () => {
        const scenario = healthcareScenarios[0];
        const { budget } = scenario.context;
        
        expect(budget).toHaveProperty('range');
        expect(budget).toHaveProperty('flexibility');
        expect(budget).toHaveProperty('approvalProcess');
      });

      it('should have valid technical environment', () => {
        const scenario = healthcareScenarios[0];
        const { technicalEnvironment } = scenario.context;
        
        expect(technicalEnvironment).toHaveProperty('currentInfrastructure');
        expect(technicalEnvironment).toHaveProperty('applications');
        expect(Array.isArray(technicalEnvironment.currentInfrastructure)).toBe(true);
        expect(Array.isArray(technicalEnvironment.applications)).toBe(true);
      });
    });

    describe('Discovery Phase Validation', () => {
      it('should have discovery phase', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.discovery).toBeDefined();
        expect(scenario.discovery).toHaveProperty('questions');
        expect(scenario.discovery).toHaveProperty('idealApproach');
        expect(scenario.discovery).toHaveProperty('scoringCriteria');
      });

      it('should have at least 5 discovery questions', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.discovery.questions)).toBe(true);
        expect(scenario.discovery.questions.length).toBeGreaterThanOrEqual(5);
      });

      it('should have valid question structure', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.discovery.questions.forEach(question => {
          expect(question).toHaveProperty('id');
          expect(question).toHaveProperty('question');
          expect(question).toHaveProperty('category');
          expect(question).toHaveProperty('importance');
          expect(question).toHaveProperty('idealAnswer');
          expect(question).toHaveProperty('points');
          
          expect(['low', 'medium', 'high', 'critical']).toContain(question.importance);
          expect(question.points).toBeGreaterThan(0);
        });
      });

      it('should have valid question categories', () => {
        const scenario = healthcareScenarios[0];
        const validCategories = [
          'technical',
          'business',
          'timeline',
          'budget',
          'stakeholders',
          'pain-points',
          'requirements',
        ];
        
        scenario.discovery.questions.forEach(question => {
          expect(validCategories).toContain(question.category);
        });
      });

      it('should have ideal approach steps', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.discovery.idealApproach)).toBe(true);
        expect(scenario.discovery.idealApproach.length).toBeGreaterThan(0);
      });

      it('should have scoring criteria', () => {
        const scenario = healthcareScenarios[0];
        const { scoringCriteria } = scenario.discovery;
        
        expect(scoringCriteria).toHaveProperty('maxPoints');
        expect(scoringCriteria).toHaveProperty('passingScore');
        expect(scoringCriteria).toHaveProperty('excellentScore');
        
        expect(scoringCriteria.maxPoints).toBeGreaterThan(0);
        expect(scoringCriteria.passingScore).toBeLessThanOrEqual(scoringCriteria.maxPoints);
        expect(scoringCriteria.excellentScore).toBeLessThanOrEqual(scoringCriteria.maxPoints);
        expect(scoringCriteria.excellentScore).toBeGreaterThan(scoringCriteria.passingScore);
      });
    });

    describe('Objections Phase Validation', () => {
      it('should have objections phase', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.objections).toBeDefined();
        expect(scenario.objections).toHaveProperty('objectionsList');
        expect(scenario.objections).toHaveProperty('scoringCriteria');
      });

      it('should have at least 3 objections', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.objections.objectionsList)).toBe(true);
        expect(scenario.objections.objectionsList.length).toBeGreaterThanOrEqual(3);
      });

      it('should have valid objection structure', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.objections.objectionsList.forEach(objection => {
          expect(objection).toHaveProperty('id');
          expect(objection).toHaveProperty('objection');
          expect(objection).toHaveProperty('type');
          expect(objection).toHaveProperty('difficulty');
          expect(objection).toHaveProperty('idealResponse');
          expect(objection).toHaveProperty('keyPoints');
          expect(objection).toHaveProperty('points');
          
          expect(['price', 'technical', 'competition', 'timing', 'risk']).toContain(objection.type);
          expect(['easy', 'medium', 'hard']).toContain(objection.difficulty);
          expect(objection.points).toBeGreaterThan(0);
        });
      });

      it('should have key points for each objection', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.objections.objectionsList.forEach(objection => {
          expect(Array.isArray(objection.keyPoints)).toBe(true);
          expect(objection.keyPoints.length).toBeGreaterThan(0);
        });
      });

      it('should have objections scoring criteria', () => {
        const scenario = healthcareScenarios[0];
        const { scoringCriteria } = scenario.objections;
        
        expect(scoringCriteria).toHaveProperty('maxPoints');
        expect(scoringCriteria).toHaveProperty('passingScore');
        expect(scoringCriteria).toHaveProperty('excellentScore');
      });
    });

    describe('Recommendation Phase Validation', () => {
      it('should have recommendation phase', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.recommendation).toBeDefined();
        expect(scenario.recommendation).toHaveProperty('idealSolution');
        expect(scenario.recommendation).toHaveProperty('alternativeSolutions');
        expect(scenario.recommendation).toHaveProperty('scoringCriteria');
      });

      it('should have ideal solution', () => {
        const scenario = healthcareScenarios[0];
        const { idealSolution } = scenario.recommendation;
        
        expect(idealSolution).toHaveProperty('products');
        expect(idealSolution).toHaveProperty('architecture');
        expect(idealSolution).toHaveProperty('implementation');
        expect(idealSolution).toHaveProperty('businessValue');
        expect(idealSolution).toHaveProperty('roi');
      });

      it('should have at least one product in ideal solution', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.recommendation.idealSolution.products)).toBe(true);
        expect(scenario.recommendation.idealSolution.products.length).toBeGreaterThan(0);
      });

      it('should have valid product structure', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.recommendation.idealSolution.products.forEach(product => {
          expect(product).toHaveProperty('productId');
          expect(product).toHaveProperty('productName');
          expect(product).toHaveProperty('role');
          expect(product).toHaveProperty('justification');
        });
      });

      it('should have business value metrics', () => {
        const scenario = healthcareScenarios[0];
        const { businessValue } = scenario.recommendation.idealSolution;
        
        expect(Array.isArray(businessValue)).toBe(true);
        expect(businessValue.length).toBeGreaterThan(0);
        
        businessValue.forEach(value => {
          expect(value).toHaveProperty('metric');
          expect(value).toHaveProperty('value');
          expect(value).toHaveProperty('timeframe');
        });
      });

      it('should have ROI information', () => {
        const scenario = healthcareScenarios[0];
        const { roi } = scenario.recommendation.idealSolution;
        
        expect(roi).toHaveProperty('investment');
        expect(roi).toHaveProperty('annualSavings');
        expect(roi).toHaveProperty('paybackPeriod');
        expect(roi).toHaveProperty('threeYearROI');
      });

      it('should have alternative solutions', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.recommendation.alternativeSolutions)).toBe(true);
        expect(scenario.recommendation.alternativeSolutions.length).toBeGreaterThan(0);
      });

      it('should have recommendation scoring criteria', () => {
        const scenario = healthcareScenarios[0];
        const { scoringCriteria } = scenario.recommendation;
        
        expect(scoringCriteria).toHaveProperty('maxPoints');
        expect(scoringCriteria).toHaveProperty('passingScore');
        expect(scoringCriteria).toHaveProperty('excellentScore');
      });
    });

    describe('Overall Scoring Validation', () => {
      it('should have overall scoring configuration', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.scoring).toBeDefined();
        expect(scenario.scoring).toHaveProperty('totalPoints');
        expect(scenario.scoring).toHaveProperty('passingScore');
        expect(scenario.scoring).toHaveProperty('excellentScore');
        expect(scenario.scoring).toHaveProperty('weights');
      });

      it('should have valid weights that sum to 100', () => {
        const scenario = healthcareScenarios[0];
        const { weights } = scenario.scoring;
        
        expect(weights).toHaveProperty('discovery');
        expect(weights).toHaveProperty('objections');
        expect(weights).toHaveProperty('recommendation');
        expect(weights).toHaveProperty('businessValue');
        
        const sum = weights.discovery + weights.objections + weights.recommendation + weights.businessValue;
        expect(sum).toBe(100);
      });

      it('should have reasonable weight distribution', () => {
        const scenario = healthcareScenarios[0];
        const { weights } = scenario.scoring;
        
        // Discovery should be significant (30-50%)
        expect(weights.discovery).toBeGreaterThanOrEqual(30);
        expect(weights.discovery).toBeLessThanOrEqual(50);
        
        // Objections should be significant (20-40%)
        expect(weights.objections).toBeGreaterThanOrEqual(20);
        expect(weights.objections).toBeLessThanOrEqual(40);
        
        // Recommendation should be significant (15-30%)
        expect(weights.recommendation).toBeGreaterThanOrEqual(15);
        expect(weights.recommendation).toBeLessThanOrEqual(30);
        
        // Business value should be present (5-20%)
        expect(weights.businessValue).toBeGreaterThanOrEqual(5);
        expect(weights.businessValue).toBeLessThanOrEqual(20);
      });

      it('should have passing score less than excellent score', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.scoring.passingScore).toBeLessThan(scenario.scoring.excellentScore);
        expect(scenario.scoring.passingScore).toBeLessThanOrEqual(scenario.scoring.totalPoints);
        expect(scenario.scoring.excellentScore).toBeLessThanOrEqual(scenario.scoring.totalPoints);
      });
    });

    describe('Learning Objectives Validation', () => {
      it('should have learning objectives', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.learningObjectives)).toBe(true);
        expect(scenario.learningObjectives.length).toBeGreaterThan(0);
      });

      it('should have meaningful learning objectives', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.learningObjectives.forEach(objective => {
          expect(objective.length).toBeGreaterThan(10);
        });
      });
    });

    describe('Tags Validation', () => {
      it('should have tags', () => {
        const scenario = healthcareScenarios[0];
        
        expect(Array.isArray(scenario.tags)).toBe(true);
        expect(scenario.tags.length).toBeGreaterThan(0);
      });

      it('should have relevant tags', () => {
        const scenario = healthcareScenarios[0];
        
        scenario.tags.forEach(tag => {
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).toMatch(/^[a-z0-9-]+$/);
        });
      });
    });

    describe('Data Completeness', () => {
      it('should have no empty required strings', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.title.length).toBeGreaterThan(0);
        expect(scenario.description.length).toBeGreaterThan(0);
        expect(scenario.context.company.name.length).toBeGreaterThan(0);
        expect(scenario.context.currentSituation.length).toBeGreaterThan(0);
      });

      it('should have reasonable text lengths', () => {
        const scenario = healthcareScenarios[0];
        
        expect(scenario.title.length).toBeLessThan(200);
        expect(scenario.description.length).toBeGreaterThan(50);
        expect(scenario.context.currentSituation.length).toBeGreaterThan(100);
      });
    });

    describe('Cross-Reference Validation', () => {
      it('should reference valid product IDs', () => {
        const scenario = healthcareScenarios[0];
        const validProductIds = ['power-e1080', 'power-e1050', 'flashsystem-9500', 'power-virtual-server'];
        
        scenario.recommendation.idealSolution.products.forEach(product => {
          expect(validProductIds).toContain(product.productId);
        });
      });

      it('should have consistent point totals', () => {
        const scenario = healthcareScenarios[0];
        
        // Calculate total points from all phases
        const discoveryPoints = scenario.discovery.questions.reduce((sum, q) => sum + q.points, 0);
        const objectionsPoints = scenario.objections.objectionsList.reduce((sum, o) => sum + o.points, 0);
        
        // Verify they match the declared max points
        expect(discoveryPoints).toBe(scenario.discovery.scoringCriteria.maxPoints);
        expect(objectionsPoints).toBe(scenario.objections.scoringCriteria.maxPoints);
      });
    });
  });

  describe('Scenario Utility Functions', () => {
    describe('Score Calculation', () => {
      it('should calculate discovery score correctly', () => {
        const scenario = healthcareScenarios[0];
        const userAnswers = scenario.discovery.questions.map(q => ({
          questionId: q.id,
          score: q.points,
        }));
        
        const totalScore = userAnswers.reduce((sum, answer) => sum + answer.score, 0);
        expect(totalScore).toBe(scenario.discovery.scoringCriteria.maxPoints);
      });

      it('should calculate weighted total score correctly', () => {
        const scenario = healthcareScenarios[0];
        const { weights } = scenario.scoring;
        
        const discoveryScore = scenario.discovery.scoringCriteria.maxPoints;
        const objectionsScore = scenario.objections.scoringCriteria.maxPoints;
        const recommendationScore = scenario.recommendation.scoringCriteria.maxPoints;
        
        const weightedTotal = 
          (discoveryScore * weights.discovery / 100) +
          (objectionsScore * weights.objections / 100) +
          (recommendationScore * weights.recommendation / 100);
        
        expect(weightedTotal).toBeGreaterThan(0);
      });
    });

    describe('Performance Grading', () => {
      it('should determine passing performance', () => {
        const scenario = healthcareScenarios[0];
        const passingScore = scenario.scoring.passingScore;
        
        expect(passingScore).toBeGreaterThan(0);
        expect(passingScore).toBeLessThan(scenario.scoring.totalPoints);
      });

      it('should determine excellent performance', () => {
        const scenario = healthcareScenarios[0];
        const excellentScore = scenario.scoring.excellentScore;
        
        expect(excellentScore).toBeGreaterThan(scenario.scoring.passingScore);
        expect(excellentScore).toBeLessThanOrEqual(scenario.scoring.totalPoints);
      });
    });
  });
});

// Made with Bob
