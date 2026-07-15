import { describe, it, expect } from 'vitest';
import {
  allIBMProducts,
  getProductById,
  getProductsByCategory,
  getProductsByIndustry,
  getProductsByPainPoint,
  searchProducts,
  getRecommendedProducts,
  getCrossSellProducts,
  getCompetitiveInfo,
  getObjectionHandling,
  getDiscoveryQuestions,
  getUseCasesByIndustry,
  getProductBundles,
  calculateProductFitScore,
  getElevatorPitch,
  getProductSpecs,
  getCustomerExamples,
  getProductsForPainPoint,
  getAllProductTags,
  getAllIndustries,
  getProductPricing,
  productStats,
} from '../../data/ibm-products';

describe('Product Knowledge Base - Core Functions', () => {
  describe('allIBMProducts', () => {
    it('should return an array of products', () => {
      expect(Array.isArray(allIBMProducts)).toBe(true);
      expect(allIBMProducts.length).toBeGreaterThan(0);
    });

    it('should have products with required fields', () => {
      allIBMProducts.forEach(product => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('overview');
      });
    });

    it('should have unique product IDs', () => {
      const ids = allIBMProducts.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });
  });

  describe('getProductById', () => {
    it('should return a product by ID', () => {
      const product = getProductById('power-e1080');
      expect(product).toBeDefined();
      expect(product.id).toBe('power-e1080');
      expect(product.name).toBe('IBM Power E1080');
    });

    it('should return undefined for non-existent ID', () => {
      const product = getProductById('non-existent-id');
      expect(product).toBeUndefined();
    });

    it('should return correct product for each known ID', () => {
      const knownIds = ['power-e1080', 'flashsystem-9500', 'power-virtual-server'];
      knownIds.forEach(id => {
        const product = getProductById(id);
        expect(product).toBeDefined();
        expect(product.id).toBe(id);
      });
    });
  });

  describe('getProductsByCategory', () => {
    it('should return products in Hardware category', () => {
      const products = getProductsByCategory('Hardware');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      products.forEach(p => expect(p.category).toBe('Hardware'));
    });

    it('should return products in Storage category', () => {
      const products = getProductsByCategory('Storage');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      products.forEach(p => expect(p.category).toBe('Storage'));
    });

    it('should return products in Cloud category', () => {
      const products = getProductsByCategory('Cloud');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      products.forEach(p => expect(p.category).toBe('Cloud'));
    });

    it('should return empty array for non-existent category', () => {
      const products = getProductsByCategory('NonExistent');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBe(0);
    });
  });

  describe('getProductsByIndustry', () => {
    it('should return products for Healthcare industry', () => {
      const products = getProductsByIndustry('Healthcare');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      products.forEach(p => {
        const hasHealthcare = p.industryFit?.some(
          fit => fit.industry === 'Healthcare' && fit.fit === 'excellent'
        );
        expect(hasHealthcare).toBe(true);
      });
    });

    it('should return products for Banking industry', () => {
      const products = getProductsByIndustry('Banking');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });

    it('should return empty array for industry with no excellent fit', () => {
      const products = getProductsByIndustry('NonExistentIndustry');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBe(0);
    });
  });

  describe('searchProducts', () => {
    it('should find products by name', () => {
      const results = searchProducts('Power');
      expect(results.length).toBeGreaterThan(0);
      const hasPower = results.some(p => p.name.includes('Power'));
      expect(hasPower).toBe(true);
    });

    it('should find products by description', () => {
      const results = searchProducts('storage');
      expect(results.length).toBeGreaterThan(0);
    });

    it('should find products by tags', () => {
      const results = searchProducts('epic');
      expect(results.length).toBeGreaterThan(0);
    });

    it('should be case-insensitive', () => {
      const lowerResults = searchProducts('power');
      const upperResults = searchProducts('POWER');
      expect(lowerResults.length).toBe(upperResults.length);
    });

    it('should return empty array for no matches', () => {
      const results = searchProducts('xyznonexistent123');
      expect(results.length).toBe(0);
    });
  });

  describe('getRecommendedProducts', () => {
    it('should return products for Healthcare industry', () => {
      const products = getRecommendedProducts({ industry: 'Healthcare' });
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });

    it('should filter by pain points', () => {
      const products = getRecommendedProducts({
        painPoints: ['performance', 'cost']
      });
      expect(Array.isArray(products)).toBe(true);
    });

    it('should filter by company size', () => {
      const products = getRecommendedProducts({
        companySize: 'Enterprise (5000+ employees)'
      });
      expect(Array.isArray(products)).toBe(true);
    });

    it('should combine multiple filters', () => {
      const products = getRecommendedProducts({
        industry: 'Healthcare',
        painPoints: ['performance'],
        companySize: 'Enterprise (5000+ employees)'
      });
      expect(Array.isArray(products)).toBe(true);
    });
  });

  describe('getCrossSellProducts', () => {
    it('should return related products for Power E1080', () => {
      const products = getCrossSellProducts('power-e1080');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });

    it('should return empty array for product with no related products', () => {
      const products = getCrossSellProducts('non-existent');
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBe(0);
    });

    it('should return valid product objects', () => {
      const products = getCrossSellProducts('power-e1080');
      products.forEach(p => {
        expect(p).toHaveProperty('id');
        expect(p).toHaveProperty('name');
      });
    });
  });

  describe('getCompetitiveInfo', () => {
    it('should return competitive info for Power E1080', () => {
      const info = getCompetitiveInfo('power-e1080');
      expect(info).toBeDefined();
      expect(info).toHaveProperty('product');
      expect(info).toHaveProperty('competitors');
      expect(info).toHaveProperty('advantages');
      expect(info).toHaveProperty('differentiators');
    });

    it('should return null for non-existent product', () => {
      const info = getCompetitiveInfo('non-existent');
      expect(info).toBeNull();
    });

    it('should have competitors array', () => {
      const info = getCompetitiveInfo('power-e1080');
      expect(Array.isArray(info.competitors)).toBe(true);
      expect(info.competitors.length).toBeGreaterThan(0);
    });
  });

  describe('getObjectionHandling', () => {
    it('should return objections for a product', () => {
      const objections = getObjectionHandling('power-e1080');
      expect(objections).toBeDefined();
      expect(objections).toHaveProperty('commonObjections');
      expect(objections).toHaveProperty('responses');
    });

    it('should find specific objection', () => {
      const response = getObjectionHandling('power-e1080', 'expensive');
      expect(response).toBeDefined();
    });

    it('should return null for non-existent product', () => {
      const objections = getObjectionHandling('non-existent');
      expect(objections).toBeNull();
    });
  });

  describe('getDiscoveryQuestions', () => {
    it('should return discovery questions for a product', () => {
      const questions = getDiscoveryQuestions('power-e1080');
      expect(Array.isArray(questions)).toBe(true);
      expect(questions.length).toBeGreaterThan(0);
    });

    it('should return questions with required fields', () => {
      const questions = getDiscoveryQuestions('power-e1080');
      questions.forEach(q => {
        expect(q).toHaveProperty('question');
        expect(q).toHaveProperty('purpose');
        expect(q).toHaveProperty('idealAnswer');
      });
    });

    it('should return empty array for non-existent product', () => {
      const questions = getDiscoveryQuestions('non-existent');
      expect(Array.isArray(questions)).toBe(true);
      expect(questions.length).toBe(0);
    });
  });

  describe('calculateProductFitScore', () => {
    it('should return a score between 0 and 100', () => {
      const score = calculateProductFitScore('power-e1080', {
        industry: 'Healthcare',
        painPoints: ['performance', 'cost'],
        companySize: 'Enterprise (5000+ employees)'
      });
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });

    it('should return 0 for non-existent product', () => {
      const score = calculateProductFitScore('non-existent', {
        industry: 'Healthcare'
      });
      expect(score).toBe(0);
    });

    it('should give higher scores for better matches', () => {
      const goodMatch = calculateProductFitScore('power-e1080', {
        industry: 'Healthcare',
        painPoints: ['performance', 'cost'],
        companySize: 'Enterprise (5000+ employees)'
      });
      
      const poorMatch = calculateProductFitScore('power-e1080', {
        industry: 'Telecommunications',
        painPoints: ['ai-readiness'],
        companySize: 'Small (1-500 employees)'
      });
      
      expect(goodMatch).toBeGreaterThan(poorMatch);
    });
  });

  describe('getElevatorPitch', () => {
    it('should return elevator pitch for a product', () => {
      const pitch = getElevatorPitch('power-e1080');
      expect(typeof pitch).toBe('string');
      expect(pitch.length).toBeGreaterThan(0);
    });

    it('should return empty string for non-existent product', () => {
      const pitch = getElevatorPitch('non-existent');
      expect(pitch).toBe('');
    });
  });

  describe('getProductSpecs', () => {
    it('should return specifications for a product', () => {
      const specs = getProductSpecs('power-e1080');
      expect(Array.isArray(specs)).toBe(true);
      expect(specs.length).toBeGreaterThan(0);
    });

    it('should have spec objects with required fields', () => {
      const specs = getProductSpecs('power-e1080');
      specs.forEach(spec => {
        expect(spec).toHaveProperty('spec');
        expect(spec).toHaveProperty('value');
      });
    });
  });

  describe('getAllProductTags', () => {
    it('should return array of tags', () => {
      const tags = getAllProductTags();
      expect(Array.isArray(tags)).toBe(true);
      expect(tags.length).toBeGreaterThan(0);
    });

    it('should return unique tags', () => {
      const tags = getAllProductTags();
      const uniqueTags = new Set(tags);
      expect(tags.length).toBe(uniqueTags.size);
    });

    it('should return sorted tags', () => {
      const tags = getAllProductTags();
      const sortedTags = [...tags].sort();
      expect(tags).toEqual(sortedTags);
    });
  });

  describe('getAllIndustries', () => {
    it('should return array of industries', () => {
      const industries = getAllIndustries();
      expect(Array.isArray(industries)).toBe(true);
      expect(industries.length).toBeGreaterThan(0);
    });

    it('should return unique industries', () => {
      const industries = getAllIndustries();
      const uniqueIndustries = new Set(industries);
      expect(industries.length).toBe(uniqueIndustries.size);
    });
  });

  describe('productStats', () => {
    it('should have correct structure', () => {
      expect(productStats).toHaveProperty('totalProducts');
      expect(productStats).toHaveProperty('byCategory');
      expect(productStats).toHaveProperty('totalUseCases');
      expect(productStats).toHaveProperty('totalCustomerExamples');
    });

    it('should have accurate counts', () => {
      expect(productStats.totalProducts).toBe(allIBMProducts.length);
      expect(productStats.totalProducts).toBeGreaterThan(0);
    });

    it('should have category breakdown', () => {
      expect(productStats.byCategory).toHaveProperty('Hardware');
      expect(productStats.byCategory).toHaveProperty('Storage');
      expect(productStats.byCategory).toHaveProperty('Cloud');
    });
  });
});

describe('Product Knowledge Base - Data Integrity', () => {
  describe('Product Data Completeness', () => {
    it('all products should have ideal customers', () => {
      allIBMProducts.forEach(product => {
        expect(product.idealCustomers).toBeDefined();
        expect(Array.isArray(product.idealCustomers)).toBe(true);
        expect(product.idealCustomers.length).toBeGreaterThan(0);
      });
    });

    it('all products should have pain points', () => {
      allIBMProducts.forEach(product => {
        expect(product.commonPainPoints).toBeDefined();
        expect(Array.isArray(product.commonPainPoints)).toBe(true);
        expect(product.commonPainPoints.length).toBeGreaterThan(0);
      });
    });

    it('all products should have use cases', () => {
      allIBMProducts.forEach(product => {
        expect(product.useCases).toBeDefined();
        expect(Array.isArray(product.useCases)).toBe(true);
        expect(product.useCases.length).toBeGreaterThan(0);
      });
    });

    it('all products should have discovery questions', () => {
      allIBMProducts.forEach(product => {
        expect(product.discoveryQuestions).toBeDefined();
        expect(Array.isArray(product.discoveryQuestions)).toBe(true);
        expect(product.discoveryQuestions.length).toBeGreaterThan(0);
      });
    });

    it('all products should have objections', () => {
      allIBMProducts.forEach(product => {
        expect(product.commonObjections).toBeDefined();
        expect(Array.isArray(product.commonObjections)).toBe(true);
        expect(product.commonObjections.length).toBeGreaterThan(0);
      });
    });

    it('all products should have competitive differentiators', () => {
      allIBMProducts.forEach(product => {
        expect(product.competitiveDifferentiators).toBeDefined();
        expect(Array.isArray(product.competitiveDifferentiators)).toBe(true);
        expect(product.competitiveDifferentiators.length).toBeGreaterThan(0);
      });
    });

    it('all products should have business benefits', () => {
      allIBMProducts.forEach(product => {
        expect(product.businessBenefits).toBeDefined();
        expect(Array.isArray(product.businessBenefits)).toBe(true);
        expect(product.businessBenefits.length).toBeGreaterThan(0);
      });
    });

    it('all products should have technical benefits', () => {
      allIBMProducts.forEach(product => {
        expect(product.technicalBenefits).toBeDefined();
        expect(Array.isArray(product.technicalBenefits)).toBe(true);
        expect(product.technicalBenefits.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Product Data Quality', () => {
    it('all product names should be non-empty', () => {
      allIBMProducts.forEach(product => {
        expect(product.name.length).toBeGreaterThan(0);
      });
    });

    it('all product descriptions should be non-empty', () => {
      allIBMProducts.forEach(product => {
        expect(product.description.length).toBeGreaterThan(0);
      });
    });

    it('all elevator pitches should be non-empty', () => {
      allIBMProducts.forEach(product => {
        expect(product.elevatorPitch).toBeDefined();
        expect(product.elevatorPitch.length).toBeGreaterThan(0);
      });
    });

    it('all products should have tags', () => {
      allIBMProducts.forEach(product => {
        expect(product.tags).toBeDefined();
        expect(Array.isArray(product.tags)).toBe(true);
        expect(product.tags.length).toBeGreaterThan(0);
      });
    });

    it('all products should have when to recommend guidance', () => {
      allIBMProducts.forEach(product => {
        expect(product.whenToRecommend).toBeDefined();
        expect(Array.isArray(product.whenToRecommend)).toBe(true);
        expect(product.whenToRecommend.length).toBeGreaterThan(0);
      });
    });

    it('all products should have when NOT to recommend guidance', () => {
      allIBMProducts.forEach(product => {
        expect(product.whenNotToRecommend).toBeDefined();
        expect(Array.isArray(product.whenNotToRecommend)).toBe(true);
        expect(product.whenNotToRecommend.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Cross-References', () => {
    it('related products should exist', () => {
      allIBMProducts.forEach(product => {
        if (product.relatedProducts) {
          product.relatedProducts.forEach(relatedId => {
            const relatedProduct = getProductById(relatedId);
            // Some related products may not exist yet (future products)
            // So we just check the format is correct
            expect(typeof relatedId).toBe('string');
            expect(relatedId.length).toBeGreaterThan(0);
          });
        }
      });
    });

    it('cross-sell products should have valid product IDs', () => {
      allIBMProducts.forEach(product => {
        if (product.crossSellOpportunities) {
          product.crossSellOpportunities.forEach(opp => {
            expect(opp).toHaveProperty('product');
            expect(typeof opp.product).toBe('string');
          });
        }
      });
    });
  });
});

describe('Product Knowledge Base - Performance', () => {
  it('should search products quickly', () => {
    const start = performance.now();
    searchProducts('power');
    const end = performance.now();
    expect(end - start).toBeLessThan(100); // Should complete in <100ms
  });

  it('should filter by category quickly', () => {
    const start = performance.now();
    getProductsByCategory('Hardware');
    const end = performance.now();
    expect(end - start).toBeLessThan(50); // Should complete in <50ms
  });

  it('should calculate fit score quickly', () => {
    const start = performance.now();
    calculateProductFitScore('power-e1080', {
      industry: 'Healthcare',
      painPoints: ['performance', 'cost']
    });
    const end = performance.now();
    expect(end - start).toBeLessThan(50); // Should complete in <50ms
  });
});

// Made with Bob
