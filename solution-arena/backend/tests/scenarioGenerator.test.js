/**
 * Scenario Generator Tests
 * Tests scenario generation logic and validation
 */

const { generateScenario, generateAllScenarios } = require('../../shared-data/generateScenarios');

describe('Scenario Generator', () => {
  
  describe('generateScenario', () => {
    
    test('should generate a valid beginner scenario', () => {
      const template = {
        title: "Test Scenario",
        brief: "Test brief description",
        focus: ["IBM Cloud", "Red Hat OpenShift", "IBM Instana"],
        priorities: ["modernize-apps", "reduce-costs"],
        objection: "Test objection",
        crossSell: "Test cross-sell"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      // Validate structure
      expect(scenario).toHaveProperty('id');
      expect(scenario).toHaveProperty('title');
      expect(scenario).toHaveProperty('difficulty');
      expect(scenario).toHaveProperty('estimatedTime');
      expect(scenario).toHaveProperty('company');
      expect(scenario).toHaveProperty('industry');
      expect(scenario).toHaveProperty('size');
      expect(scenario).toHaveProperty('revenue');
      expect(scenario).toHaveProperty('employees');
      expect(scenario).toHaveProperty('brief');
      expect(scenario).toHaveProperty('currentEnvironment');
      expect(scenario).toHaveProperty('businessGoals');
      expect(scenario).toHaveProperty('constraints');
      expect(scenario).toHaveProperty('questions');
      expect(scenario).toHaveProperty('scoringBreakdown');
      expect(scenario).toHaveProperty('idealSolution');
      
      // Validate values
      expect(scenario.difficulty).toBe('beginner');
      expect(scenario.industry).toBe('Retail');
      expect(scenario.estimatedTime).toBe('3-4 minutes');
      expect(scenario.id).toMatch(/^scenario-beginner-retail-\d{3}$/);
    });

    test('should generate a valid intermediate scenario', () => {
      const template = {
        title: "Intermediate Test",
        brief: "Intermediate brief",
        focus: ["IBM Cloud", "Red Hat OpenShift"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'healthcare', 'intermediate', 5);
      
      expect(scenario.difficulty).toBe('intermediate');
      expect(scenario.estimatedTime).toBe('4-5 minutes');
      expect(scenario.industry).toBe('Healthcare');
      expect(['Mid-Market', 'Enterprise']).toContain(scenario.size);
    });

    test('should generate a valid advanced scenario', () => {
      const template = {
        title: "Advanced Test",
        brief: "Advanced brief",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'finance', 'advanced', 10);
      
      expect(scenario.difficulty).toBe('advanced');
      expect(scenario.estimatedTime).toBe('5-6 minutes');
      expect(scenario.industry).toBe('Financial Services');
      expect(['Enterprise', 'Large Enterprise']).toContain(scenario.size);
    });

    test('should generate unique IDs for different scenarios', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario1 = generateScenario(template, 'retail', 'beginner', 0);
      const scenario2 = generateScenario(template, 'retail', 'beginner', 1);
      const scenario3 = generateScenario(template, 'healthcare', 'beginner', 0);
      
      expect(scenario1.id).not.toBe(scenario2.id);
      expect(scenario1.id).not.toBe(scenario3.id);
      expect(scenario2.id).not.toBe(scenario3.id);
    });

    test('should assign appropriate company size based on difficulty', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const beginner = generateScenario(template, 'retail', 'beginner', 0);
      const advanced = generateScenario(template, 'retail', 'advanced', 0);
      
      expect(['Small Business', 'Mid-Market']).toContain(beginner.size);
      expect(['Enterprise', 'Large Enterprise']).toContain(advanced.size);
    });

    test('should assign appropriate revenue based on company size', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      if (scenario.size === 'Small Business') {
        expect(scenario.revenue).toMatch(/^\$\d+M$/);
      } else if (scenario.size === 'Enterprise') {
        expect(scenario.revenue).toMatch(/^\$\d+(\.\d+)?B$/);
      }
    });

    test('should generate appropriate employee count', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const smallBiz = generateScenario(template, 'retail', 'beginner', 0);
      const enterprise = generateScenario(template, 'retail', 'advanced', 0);
      
      expect(smallBiz.employees).toBeGreaterThan(0);
      expect(enterprise.employees).toBeGreaterThan(smallBiz.employees);
    });

    test('should include all required question properties', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps", "reduce-costs"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.questions).toHaveLength(1); // Currently only generates q1
      
      const question = scenario.questions[0];
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('type');
      expect(question).toHaveProperty('step');
      expect(question).toHaveProperty('title');
      expect(question).toHaveProperty('question');
      expect(question).toHaveProperty('options');
      
      expect(question.options).toBeInstanceOf(Array);
      expect(question.options.length).toBeGreaterThan(0);
    });

    test('should mark correct priorities in question options', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps", "reduce-costs"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      const question = scenario.questions[0];
      
      const correctOptions = question.options.filter(opt => opt.correct);
      const correctIds = correctOptions.map(opt => opt.id);
      
      expect(correctIds).toContain('modernize-apps');
      expect(correctIds).toContain('reduce-costs');
    });

    test('should include scoring breakdown', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.scoringBreakdown).toHaveProperty('businessUnderstanding');
      expect(scenario.scoringBreakdown).toHaveProperty('cloudPositioning');
      expect(scenario.scoringBreakdown).toHaveProperty('portfolioKnowledge');
      expect(scenario.scoringBreakdown).toHaveProperty('objectionHandling');
      
      expect(scenario.scoringBreakdown.businessUnderstanding.maxScore).toBe(10);
    });

    test('should include ideal solution', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud", "Red Hat OpenShift", "IBM Instana"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.idealSolution).toHaveProperty('primary');
      expect(scenario.idealSolution).toHaveProperty('supporting');
      expect(scenario.idealSolution).toHaveProperty('summary');
      
      expect(scenario.idealSolution.primary).toBeInstanceOf(Array);
      expect(scenario.idealSolution.primary.length).toBeGreaterThan(0);
    });
  });

  describe('generateAllScenarios', () => {
    
    test('should generate multiple scenarios', () => {
      const scenarios = generateAllScenarios();
      
      expect(scenarios).toBeInstanceOf(Array);
      expect(scenarios.length).toBeGreaterThan(0);
    });

    test('should generate scenarios with different difficulties', () => {
      const scenarios = generateAllScenarios();
      
      const difficulties = new Set(scenarios.map(s => s.difficulty));
      
      expect(difficulties.has('beginner')).toBe(true);
      // May have intermediate and advanced depending on templates
    });

    test('should generate scenarios from different industries', () => {
      const scenarios = generateAllScenarios();
      
      const industries = new Set(scenarios.map(s => s.industry));
      
      expect(industries.size).toBeGreaterThan(0);
      expect(industries.has('Retail')).toBe(true);
    });

    test('should generate scenarios with unique IDs', () => {
      const scenarios = generateAllScenarios();
      
      const ids = scenarios.map(s => s.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(ids.length);
    });

    test('all generated scenarios should be valid', () => {
      const scenarios = generateAllScenarios();
      
      scenarios.forEach(scenario => {
        // Required fields
        expect(scenario.id).toBeTruthy();
        expect(scenario.title).toBeTruthy();
        expect(scenario.difficulty).toMatch(/^(beginner|intermediate|advanced)$/);
        expect(scenario.industry).toBeTruthy();
        expect(scenario.company).toBeTruthy();
        expect(scenario.brief).toBeTruthy();
        
        // Numeric fields
        expect(typeof scenario.employees).toBe('number');
        expect(scenario.employees).toBeGreaterThan(0);
        
        // Arrays
        expect(Array.isArray(scenario.businessGoals)).toBe(true);
        expect(Array.isArray(scenario.questions)).toBe(true);
        
        // Objects
        expect(typeof scenario.currentEnvironment).toBe('object');
        expect(typeof scenario.constraints).toBe('object');
        expect(typeof scenario.scoringBreakdown).toBe('object');
        expect(typeof scenario.idealSolution).toBe('object');
      });
    });
  });

  describe('Scenario Validation', () => {
    
    test('should validate scenario has all required fields', () => {
      const requiredFields = [
        'id', 'title', 'difficulty', 'estimatedTime', 'company', 
        'industry', 'size', 'revenue', 'employees', 'brief',
        'currentEnvironment', 'businessGoals', 'constraints',
        'questions', 'scoringBreakdown', 'idealSolution'
      ];
      
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      requiredFields.forEach(field => {
        expect(scenario).toHaveProperty(field);
        expect(scenario[field]).toBeTruthy();
      });
    });

    test('should validate currentEnvironment structure', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.currentEnvironment).toHaveProperty('infrastructure');
      expect(scenario.currentEnvironment).toHaveProperty('applications');
      expect(scenario.currentEnvironment).toHaveProperty('challenges');
      
      expect(Array.isArray(scenario.currentEnvironment.infrastructure)).toBe(true);
      expect(Array.isArray(scenario.currentEnvironment.applications)).toBe(true);
      expect(Array.isArray(scenario.currentEnvironment.challenges)).toBe(true);
    });

    test('should validate constraints structure', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.constraints).toHaveProperty('budget');
      expect(scenario.constraints).toHaveProperty('timeline');
      expect(scenario.constraints).toHaveProperty('compliance');
      expect(scenario.constraints).toHaveProperty('technical');
      
      expect(typeof scenario.constraints.budget).toBe('string');
      expect(typeof scenario.constraints.timeline).toBe('string');
    });

    test('should validate question options have required fields', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      scenario.questions.forEach(question => {
        question.options.forEach(option => {
          expect(option).toHaveProperty('id');
          expect(option).toHaveProperty('text');
          expect(option).toHaveProperty('correct');
          expect(option).toHaveProperty('weight');
          
          expect(typeof option.correct).toBe('boolean');
          expect(typeof option.weight).toBe('number');
        });
      });
    });
  });

  describe('Edge Cases', () => {
    
    test('should handle empty focus array', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: [],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario).toBeDefined();
      expect(scenario.idealSolution.primary).toBeInstanceOf(Array);
    });

    test('should handle single priority', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      const correctOptions = scenario.questions[0].options.filter(opt => opt.correct);
      expect(correctOptions.length).toBeGreaterThanOrEqual(1);
    });

    test('should handle multiple priorities', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps", "reduce-costs", "cyber-resilience"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      const correctOptions = scenario.questions[0].options.filter(opt => opt.correct);
      expect(correctOptions.length).toBeGreaterThanOrEqual(3);
    });

    test('should handle very long titles', () => {
      const template = {
        title: "A".repeat(200),
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.title).toBe("A".repeat(200));
    });

    test('should handle special characters in title', () => {
      const template = {
        title: "Test & Special <Characters> \"Quotes\"",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 0);
      
      expect(scenario.title).toContain('&');
      expect(scenario.title).toContain('<');
      expect(scenario.title).toContain('>');
    });

    test('should handle large index numbers', () => {
      const template = {
        title: "Test",
        brief: "Test",
        focus: ["IBM Cloud"],
        priorities: ["modernize-apps"],
        objection: "Test",
        crossSell: "Test"
      };
      
      const scenario = generateScenario(template, 'retail', 'beginner', 999);
      
      expect(scenario.id).toMatch(/scenario-beginner-retail-999$/);
    });
  });

  describe('Industry-Specific Tests', () => {
    
    const industries = ['retail', 'healthcare', 'finance', 'manufacturing', 
                       'telecom', 'government', 'education', 'energy', 
                       'transport', 'media'];
    
    industries.forEach(industry => {
      test(`should generate valid scenario for ${industry}`, () => {
        const template = {
          title: `${industry} Test`,
          brief: "Test",
          focus: ["IBM Cloud"],
          priorities: ["modernize-apps"],
          objection: "Test",
          crossSell: "Test"
        };
        
        const scenario = generateScenario(template, industry, 'beginner', 0);
        
        expect(scenario).toBeDefined();
        expect(scenario.id).toContain(industry);
        expect(scenario.company).toBeTruthy();
      });
    });
  });

  describe('Difficulty-Specific Tests', () => {
    
    const difficulties = ['beginner', 'intermediate', 'advanced'];
    
    difficulties.forEach(difficulty => {
      test(`should generate valid ${difficulty} scenario`, () => {
        const template = {
          title: `${difficulty} Test`,
          brief: "Test",
          focus: ["IBM Cloud"],
          priorities: ["modernize-apps"],
          objection: "Test",
          crossSell: "Test"
        };
        
        const scenario = generateScenario(template, 'retail', difficulty, 0);
        
        expect(scenario.difficulty).toBe(difficulty);
        expect(scenario.id).toContain(difficulty);
        
        // Verify estimated time matches difficulty
        if (difficulty === 'beginner') {
          expect(scenario.estimatedTime).toBe('3-4 minutes');
        } else if (difficulty === 'intermediate') {
          expect(scenario.estimatedTime).toBe('4-5 minutes');
        } else {
          expect(scenario.estimatedTime).toBe('5-6 minutes');
        }
      });
    });
  });
});

console.log('✅ Scenario Generator tests defined');

// Made with Bob
