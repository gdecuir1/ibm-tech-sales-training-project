import { describe, it, expect, beforeEach } from 'vitest'
import { mockApi } from '../../services/mockApi'

describe('Mock API Integration Tests', () => {
  describe('getRandomScenario', () => {
    it('should return a valid scenario object', async () => {
      const scenario = await mockApi.getRandomScenario()
      
      expect(scenario).toBeDefined()
      expect(scenario).toHaveProperty('id')
      expect(scenario).toHaveProperty('company')
      expect(scenario).toHaveProperty('industry')
      expect(scenario).toHaveProperty('size')
      expect(scenario).toHaveProperty('pain_points')
      expect(scenario).toHaveProperty('tech_stack')
      expect(scenario).toHaveProperty('objectives')
    })

    it('should return scenario with valid data types', async () => {
      const scenario = await mockApi.getRandomScenario()
      
      expect(typeof scenario.id).toBe('number')
      expect(typeof scenario.company).toBe('string')
      expect(typeof scenario.industry).toBe('string')
      expect(Array.isArray(scenario.pain_points)).toBe(true)
      expect(Array.isArray(scenario.tech_stack)).toBe(true)
      expect(Array.isArray(scenario.objectives)).toBe(true)
    })

    it('should return scenario with non-empty arrays', async () => {
      const scenario = await mockApi.getRandomScenario()
      
      expect(scenario.pain_points.length).toBeGreaterThan(0)
      expect(scenario.tech_stack.length).toBeGreaterThan(0)
      expect(scenario.objectives.length).toBeGreaterThan(0)
    })

    it('should simulate API delay', async () => {
      const startTime = Date.now()
      await mockApi.getRandomScenario()
      const endTime = Date.now()
      
      expect(endTime - startTime).toBeGreaterThanOrEqual(400) // 500ms delay with some tolerance
    })
  })

  describe('getScenarioById', () => {
    it('should return specific scenario by ID', async () => {
      const scenario = await mockApi.getScenarioById(1)
      
      expect(scenario).toBeDefined()
      expect(scenario.id).toBe(1)
    })

    it('should return first scenario for invalid ID', async () => {
      const scenario = await mockApi.getScenarioById(999)
      
      expect(scenario).toBeDefined()
      expect(scenario.id).toBe(1)
    })
  })

  describe('getProducts', () => {
    it('should return array of products', async () => {
      const products = await mockApi.getProducts()
      
      expect(Array.isArray(products)).toBe(true)
      expect(products.length).toBeGreaterThan(0)
    })

    it('should return products with valid structure', async () => {
      const products = await mockApi.getProducts()
      
      products.forEach(product => {
        expect(product).toHaveProperty('name')
        expect(product).toHaveProperty('category')
        expect(typeof product.name).toBe('string')
        expect(typeof product.category).toBe('string')
      })
    })

    it('should include IBM products', async () => {
      const products = await mockApi.getProducts()
      
      const hasIBMProducts = products.some(p => p.name.includes('IBM'))
      expect(hasIBMProducts).toBe(true)
    })
  })

  describe('generateObjections', () => {
    it('should return objections object', async () => {
      const result = await mockApi.generateObjections(1, ['IBM WatsonX'])
      
      expect(result).toBeDefined()
      expect(result).toHaveProperty('objections')
      expect(Array.isArray(result.objections)).toBe(true)
    })

    it('should return objections with valid structure', async () => {
      const result = await mockApi.generateObjections(1, ['IBM WatsonX'])
      
      result.objections.forEach(obj => {
        expect(obj).toHaveProperty('objection')
        expect(typeof obj.objection).toBe('string')
        expect(obj.objection.length).toBeGreaterThan(0)
      })
    })
  })

  describe('evaluateProducts', () => {
    it('should return evaluation with all required fields', async () => {
      const result = await mockApi.evaluateProducts(1, ['IBM WatsonX', 'IBM Cloud'])
      
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('correctProducts')
      expect(result).toHaveProperty('incorrectProducts')
      expect(result).toHaveProperty('missingProducts')
      expect(result).toHaveProperty('idealProducts')
    })

    it('should return score between 0 and 100', async () => {
      const result = await mockApi.evaluateProducts(1, ['IBM WatsonX'])
      
      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(100)
    })

    it('should identify correct products', async () => {
      const result = await mockApi.evaluateProducts(1, ['IBM WatsonX', 'IBM Cloud Pak for Data'])
      
      expect(result.correctProducts.length).toBeGreaterThan(0)
    })

    it('should handle empty product selection', async () => {
      const result = await mockApi.evaluateProducts(1, [])
      
      expect(result.score).toBe(0)
      expect(result.correctProducts.length).toBe(0)
    })
  })

  describe('evaluateResponse', () => {
    it('should return evaluation with all required fields', async () => {
      const result = await mockApi.evaluateResponse('This is a test response about IBM solutions')
      
      expect(result).toHaveProperty('businessScore')
      expect(result).toHaveProperty('objectionScore')
      expect(result).toHaveProperty('totalScore')
      expect(result).toHaveProperty('feedback')
    })

    it('should return scores between 0 and 50', async () => {
      const result = await mockApi.evaluateResponse('Test response')
      
      expect(result.businessScore).toBeGreaterThanOrEqual(0)
      expect(result.businessScore).toBeLessThanOrEqual(50)
      expect(result.objectionScore).toBeGreaterThanOrEqual(0)
      expect(result.objectionScore).toBeLessThanOrEqual(50)
    })

    it('should return feedback array', async () => {
      const result = await mockApi.evaluateResponse('Test response')
      
      expect(Array.isArray(result.feedback)).toBe(true)
      expect(result.feedback.length).toBeGreaterThan(0)
    })

    it('should reward longer responses', async () => {
      const shortResponse = 'Short'
      const longResponse = 'This is a much longer response that discusses IBM solutions, business value, ROI, cost savings, and specific product benefits in detail.'
      
      const shortResult = await mockApi.evaluateResponse(shortResponse)
      const longResult = await mockApi.evaluateResponse(longResponse)
      
      expect(longResult.totalScore).toBeGreaterThan(shortResult.totalScore)
    })

    it('should reward business value keywords', async () => {
      const withKeywords = 'IBM solutions provide excellent ROI and business value through cost reduction and efficiency gains'
      const withoutKeywords = 'IBM has products that work well'
      
      const withResult = await mockApi.evaluateResponse(withKeywords)
      const withoutResult = await mockApi.evaluateResponse(withoutKeywords)
      
      expect(withResult.businessScore).toBeGreaterThan(withoutResult.businessScore)
    })
  })

  describe('Error Handling', () => {
    it('should handle null scenario ID gracefully', async () => {
      await expect(mockApi.getScenarioById(null)).resolves.toBeDefined()
    })

    it('should handle empty product array', async () => {
      await expect(mockApi.evaluateProducts(1, [])).resolves.toBeDefined()
    })

    it('should handle empty response text', async () => {
      const result = await mockApi.evaluateResponse('')
      expect(result).toBeDefined()
      expect(result.totalScore).toBe(0)
    })
  })

  describe('Performance', () => {
    it('should complete all operations within reasonable time', async () => {
      const startTime = Date.now()
      
      await Promise.all([
        mockApi.getRandomScenario(),
        mockApi.getProducts(),
        mockApi.generateObjections(1, ['IBM WatsonX']),
        mockApi.evaluateProducts(1, ['IBM WatsonX']),
        mockApi.evaluateResponse('Test response')
      ])
      
      const endTime = Date.now()
      const totalTime = endTime - startTime
      
      // All operations should complete within 3 seconds
      expect(totalTime).toBeLessThan(3000)
    })
  })
})

// Made with Bob
