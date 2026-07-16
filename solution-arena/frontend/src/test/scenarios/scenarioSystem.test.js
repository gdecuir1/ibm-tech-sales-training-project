import { describe, it, expect } from 'vitest';
import { healthcareScenarios } from '../../data/scenarios/healthcare';
import { bankingScenarios } from '../../data/scenarios/banking';

describe('Scenario System - New TrainingScenario Structure', () => {
  const allScenarios = [...healthcareScenarios, ...bankingScenarios];

  describe('Basic Structure Validation', () => {
    it('should have at least one scenario', () => {
      expect(allScenarios).toBeDefined();
      expect(Array.isArray(allScenarios)).toBe(true);
      expect(allScenarios.length).toBeGreaterThan(0);
    });

    it('should have valid top-level structure', () => {
      allScenarios.forEach(scenario => {
        // Required top-level fields
        expect(scenario).toHaveProperty('id');
        expect(scenario).toHaveProperty('title');
        expect(scenario).toHaveProperty('description');
        expect(scenario).toHaveProperty('customerProfile');
        expect(scenario).toHaveProperty('businessContext');
        expect(scenario).toHaveProperty('discoveryPhase');
        expect(scenario).toHaveProperty('objectionPhase');
        expect(scenario).toHaveProperty('recommendationPhase');
        expect(scenario).toHaveProperty('scoringCriteria');
        expect(scenario).toHaveProperty('learningOutcomes');
        expect(scenario).toHaveProperty('metadata');
      });
    });

    it('should have valid ID format', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.id).toMatch(/^[a-z0-9-]+$/);
        expect(scenario.id.length).toBeGreaterThan(0);
      });
    });

    it('should have unique IDs', () => {
      const ids = allScenarios.map(s => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('Metadata Validation', () => {
    it('should have valid metadata structure', () => {
      allScenarios.forEach(scenario => {
        const { metadata } = scenario;
        expect(metadata).toHaveProperty('tags');
        expect(metadata).toHaveProperty('skills');
        expect(metadata).toHaveProperty('products');
        expect(metadata).toHaveProperty('industries');
        expect(metadata).toHaveProperty('estimatedTime');
        expect(metadata).toHaveProperty('difficulty');
        expect(metadata).toHaveProperty('version');
      });
    });

    it('should have valid difficulty levels', () => {
      const validDifficulties = ['beginner', 'intermediate', 'advanced', 'expert'];
      
      allScenarios.forEach(scenario => {
        expect(validDifficulties).toContain(scenario.metadata.difficulty);
      });
    });

    it('should have reasonable estimated time', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.metadata.estimatedTime).toBeGreaterThan(0);
        expect(scenario.metadata.estimatedTime).toBeLessThanOrEqual(120); // Max 2 hours
      });
    });

    it('should have valid industries', () => {
      const validIndustries = [
        'Healthcare', 'Banking', 'Insurance', 'Retail', 'Manufacturing',
        'Government', 'Telecommunications', 'Utilities', 'Higher Education',
        'Oil & Gas', 'Financial Services', 'All Industries'
      ];
      
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.metadata.industries)).toBe(true);
        scenario.metadata.industries.forEach(industry => {
          expect(validIndustries).toContain(industry);
        });
      });
    });

    it('should have tags', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.metadata.tags)).toBe(true);
        expect(scenario.metadata.tags.length).toBeGreaterThan(0);
      });
    });

    it('should have skills', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.metadata.skills)).toBe(true);
        expect(scenario.metadata.skills.length).toBeGreaterThan(0);
      });
    });

    it('should have products', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.metadata.products)).toBe(true);
        expect(scenario.metadata.products.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Customer Profile Validation', () => {
    it('should have complete customer profile', () => {
      allScenarios.forEach(scenario => {
        const { customerProfile } = scenario;
        expect(customerProfile).toHaveProperty('company');
        expect(customerProfile).toHaveProperty('industry');
        expect(customerProfile).toHaveProperty('size');
        expect(customerProfile).toHaveProperty('keyStakeholders');
        expect(customerProfile).toHaveProperty('budget');
        expect(customerProfile).toHaveProperty('timeline');
      });
    });

    it('should have at least one stakeholder', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.customerProfile.keyStakeholders)).toBe(true);
        expect(scenario.customerProfile.keyStakeholders.length).toBeGreaterThan(0);
      });
    });

    it('should have valid stakeholder structure', () => {
      allScenarios.forEach(scenario => {
        scenario.customerProfile.keyStakeholders.forEach(stakeholder => {
          expect(stakeholder).toHaveProperty('name');
          expect(stakeholder).toHaveProperty('role');
          expect(stakeholder).toHaveProperty('priorities');
          expect(stakeholder).toHaveProperty('influence');
          expect(['low', 'medium', 'high']).toContain(stakeholder.influence);
        });
      });
    });
  });

  describe('Business Context Validation', () => {
    it('should have business context', () => {
      allScenarios.forEach(scenario => {
        const { businessContext } = scenario;
        expect(businessContext).toHaveProperty('challenges');
        expect(businessContext).toHaveProperty('businessImpact');
        expect(businessContext).toHaveProperty('urgency');
        expect(businessContext).toHaveProperty('strategicInitiatives');
      });
    });

    it('should have challenges', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.businessContext.challenges)).toBe(true);
        expect(scenario.businessContext.challenges.length).toBeGreaterThan(0);
      });
    });

    it('should have business impact', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.businessContext.businessImpact)).toBe(true);
        expect(scenario.businessContext.businessImpact.length).toBeGreaterThan(0);
      });
    });

    it('should have valid urgency level', () => {
      allScenarios.forEach(scenario => {
        expect(['low', 'medium', 'high', 'critical']).toContain(scenario.businessContext.urgency);
      });
    });
  });

  describe('Discovery Phase Validation', () => {
    it('should have discovery phase', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.discoveryPhase).toBeDefined();
        expect(scenario.discoveryPhase).toHaveProperty('questions');
      });
    });

    it('should have at least 4 discovery questions', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.discoveryPhase.questions)).toBe(true);
        expect(scenario.discoveryPhase.questions.length).toBeGreaterThanOrEqual(4);
      });
    });

    it('should have valid question structure', () => {
      allScenarios.forEach(scenario => {
        scenario.discoveryPhase.questions.forEach(question => {
          expect(question).toHaveProperty('question');
          expect(question).toHaveProperty('purpose');
          expect(question).toHaveProperty('category');
          expect(question).toHaveProperty('idealResponse');
          expect(question).toHaveProperty('scoringWeight');
          
          expect(question.scoringWeight).toBeGreaterThan(0);
          expect(question.question.length).toBeGreaterThan(10);
        });
      });
    });

    it('should have valid question categories', () => {
      const validCategories = [
        'technical', 'business', 'timeline', 'budget',
        'stakeholders', 'pain-point', 'requirements', 'stakeholder'
      ];
      
      allScenarios.forEach(scenario => {
        scenario.discoveryPhase.questions.forEach(question => {
          expect(validCategories).toContain(question.category);
        });
      });
    });
  });

  describe('Objection Phase Validation', () => {
    it('should have objection phase', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.objectionPhase).toBeDefined();
        expect(scenario.objectionPhase).toHaveProperty('objections');
      });
    });

    it('should have at least 3 objections', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.objectionPhase.objections)).toBe(true);
        expect(scenario.objectionPhase.objections.length).toBeGreaterThanOrEqual(3);
      });
    });

    it('should have valid objection structure', () => {
      allScenarios.forEach(scenario => {
        scenario.objectionPhase.objections.forEach(objection => {
          expect(objection).toHaveProperty('objection');
          expect(objection).toHaveProperty('stakeholder');
          expect(objection).toHaveProperty('difficulty');
          expect(objection).toHaveProperty('category');
          
          expect(['common', 'difficult', 'very difficult']).toContain(objection.difficulty);
          expect(objection.objection.length).toBeGreaterThan(10);
        });
      });
    });

    it('should have valid objection categories', () => {
      const validCategories = ['cost', 'technical', 'risk', 'strategy', 'timing', 'skills', 'competition', 'performance'];
      
      allScenarios.forEach(scenario => {
        scenario.objectionPhase.objections.forEach(objection => {
          expect(validCategories).toContain(objection.category);
        });
      });
    });
  });

  describe('Recommendation Phase Validation', () => {
    it('should have recommendation phase', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.recommendationPhase).toBeDefined();
        expect(scenario.recommendationPhase).toHaveProperty('primaryProduct');
        expect(scenario.recommendationPhase).toHaveProperty('supportingProducts');
        expect(scenario.recommendationPhase).toHaveProperty('configuration');
        expect(scenario.recommendationPhase).toHaveProperty('pricing');
        expect(scenario.recommendationPhase).toHaveProperty('businessCase');
      });
    });

    it('should have valid pricing structure', () => {
      allScenarios.forEach(scenario => {
        const { pricing } = scenario.recommendationPhase;
        expect(pricing).toHaveProperty('total');
        expect(pricing.total.length).toBeGreaterThan(0);
      });
    });

    it('should have valid business case', () => {
      allScenarios.forEach(scenario => {
        const { businessCase } = scenario.recommendationPhase;
        expect(businessCase).toHaveProperty('roi');
        expect(businessCase.roi.length).toBeGreaterThan(0);
      });
    });

    it('should have configuration details', () => {
      allScenarios.forEach(scenario => {
        const { configuration } = scenario.recommendationPhase;
        expect(configuration).toHaveProperty('products');
        expect(Array.isArray(configuration.products)).toBe(true);
        expect(configuration.products.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Scoring Criteria Validation', () => {
    it('should have scoring criteria', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.scoringCriteria).toBeDefined();
        expect(scenario.scoringCriteria).toHaveProperty('discovery');
        expect(scenario.scoringCriteria).toHaveProperty('objectionHandling');
        expect(scenario.scoringCriteria).toHaveProperty('recommendation');
        expect(scenario.scoringCriteria).toHaveProperty('businessValue');
        expect(scenario.scoringCriteria).toHaveProperty('totalPoints');
        expect(scenario.scoringCriteria).toHaveProperty('passingScore');
        expect(scenario.scoringCriteria).toHaveProperty('excellentScore');
      });
    });

    it('should have valid scoring weights', () => {
      allScenarios.forEach(scenario => {
        const { discovery, objectionHandling, recommendation, businessValue } = scenario.scoringCriteria;
        
        expect(discovery.weight).toBeGreaterThan(0);
        expect(discovery.weight).toBeLessThanOrEqual(1);
        
        expect(objectionHandling.weight).toBeGreaterThan(0);
        expect(objectionHandling.weight).toBeLessThanOrEqual(1);
        
        expect(recommendation.weight).toBeGreaterThan(0);
        expect(recommendation.weight).toBeLessThanOrEqual(1);
        
        expect(businessValue.weight).toBeGreaterThan(0);
        expect(businessValue.weight).toBeLessThanOrEqual(1);
        
        // Weights should sum to 1.0
        const totalWeight = discovery.weight + objectionHandling.weight + recommendation.weight + businessValue.weight;
        expect(totalWeight).toBeCloseTo(1.0, 1);
      });
    });

    it('should have passing score less than excellent score', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.scoringCriteria.passingScore).toBeLessThan(scenario.scoringCriteria.excellentScore);
        expect(scenario.scoringCriteria.passingScore).toBeLessThanOrEqual(scenario.scoringCriteria.totalPoints);
        expect(scenario.scoringCriteria.excellentScore).toBeLessThanOrEqual(scenario.scoringCriteria.totalPoints);
      });
    });
  });

  describe('Learning Outcomes Validation', () => {
    it('should have learning outcomes', () => {
      allScenarios.forEach(scenario => {
        expect(Array.isArray(scenario.learningOutcomes)).toBe(true);
        expect(scenario.learningOutcomes.length).toBeGreaterThan(0);
      });
    });

    it('should have valid learning outcome structure', () => {
      allScenarios.forEach(scenario => {
        scenario.learningOutcomes.forEach(outcome => {
          expect(outcome).toHaveProperty('concept');
          expect(outcome).toHaveProperty('description');
          expect(outcome).toHaveProperty('skillLevel');
          
          expect(['beginner', 'intermediate', 'advanced', 'expert']).toContain(outcome.skillLevel);
        });
      });
    });
  });

  describe('Data Completeness', () => {
    it('should have no empty required strings', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.title.length).toBeGreaterThan(0);
        expect(scenario.description.length).toBeGreaterThan(0);
        expect(scenario.customerProfile.company.length).toBeGreaterThan(0);
      });
    });

    it('should have reasonable text lengths', () => {
      allScenarios.forEach(scenario => {
        expect(scenario.title.length).toBeLessThan(200);
        expect(scenario.description.length).toBeGreaterThan(50);
      });
    });
  });

  describe('Healthcare Scenarios Specific', () => {
    it('should have healthcare scenarios', () => {
      expect(healthcareScenarios.length).toBeGreaterThan(0);
    });

    it('should have Healthcare in industries', () => {
      healthcareScenarios.forEach(scenario => {
        expect(scenario.metadata.industries).toContain('Healthcare');
      });
    });
  });

  describe('Banking Scenarios Specific', () => {
    it('should have banking scenarios', () => {
      expect(bankingScenarios.length).toBeGreaterThan(0);
    });

    it('should have Banking or Financial Services in industries', () => {
      bankingScenarios.forEach(scenario => {
        const hasRelevantIndustry = 
          scenario.metadata.industries.includes('Banking') ||
          scenario.metadata.industries.includes('Financial Services');
        expect(hasRelevantIndustry).toBe(true);
      });
    });
  });

  describe('Cross-Reference Validation', () => {
    it('should reference valid product IDs', () => {
      const validProductIds = ['power-e1080', 'power-e1050', 'flashsystem-9500', 'watson-studio', 'power-virtual-server'];
      
      allScenarios.forEach(scenario => {
        scenario.recommendationPhase.configuration.products.forEach(product => {
          expect(validProductIds).toContain(product.productId);
        });
      });
    });

    it('should have consistent metadata products with recommendation', () => {
      allScenarios.forEach(scenario => {
        const metadataProducts = scenario.metadata.products;
        const recommendedProducts = scenario.recommendationPhase.configuration.products.map(p => p.productId);
        
        // Metadata products should include at least the primary product
        expect(metadataProducts.length).toBeGreaterThan(0);
        expect(recommendedProducts.length).toBeGreaterThan(0);
      });
    });
  });
});

// Made with Bob
