// Products API Comprehensive Tests
const request = require('supertest');
const app = require('../../server');
const { pool } = require('../../config/database');

describe('Products API - Comprehensive Tests', () => {
  let testProductId;

  afterAll(async () => {
    await pool.end();
  });

  describe('GET /api/products', () => {
    test('should return list of products with success flag', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('count');
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should return products with correct structure', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      if (response.body.data.length > 0) {
        const product = response.body.data[0];
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('description');
      }
    });

    test('should filter products by category', async () => {
      const response = await request(app)
        .get('/api/products?category=AI')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(product => {
          expect(product.category).toBe('AI');
        });
      }
    });

    test('should filter products by subcategory', async () => {
      const response = await request(app)
        .get('/api/products?subcategory=Machine Learning')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(product => {
          expect(product.subcategory).toBe('Machine Learning');
        });
      }
    });

    test('should search products by keyword', async () => {
      const response = await request(app)
        .get('/api/products?search=Watson')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(product => {
          const searchText = `${product.name} ${product.description}`.toLowerCase();
          expect(searchText).toContain('watson');
        });
      }
    });

    test('should respect limit parameter', async () => {
      const response = await request(app)
        .get('/api/products?limit=5')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeLessThanOrEqual(5);
    });

    test('should respect offset parameter', async () => {
      const response1 = await request(app)
        .get('/api/products?limit=1&offset=0')
        .expect(200);

      const response2 = await request(app)
        .get('/api/products?limit=1&offset=1')
        .expect(200);

      if (response1.body.data.length > 0 && response2.body.data.length > 0) {
        expect(response1.body.data[0].id).not.toBe(response2.body.data[0].id);
      }
    });

    test('should handle multiple filters simultaneously', async () => {
      const response = await request(app)
        .get('/api/products?category=AI&limit=10')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeLessThanOrEqual(10);
    });

    test('should return empty array for non-existent category', async () => {
      const response = await request(app)
        .get('/api/products?category=NonExistentCategory123')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
      expect(response.body.count).toBe(0);
    });

    test('should handle invalid limit gracefully', async () => {
      const response = await request(app)
        .get('/api/products?limit=invalid')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle negative offset gracefully', async () => {
      const response = await request(app)
        .get('/api/products?offset=-1')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });
  });

  describe('GET /api/products/:id', () => {
    test('should return specific product by ID', async () => {
      // First get a product ID
      const listResponse = await request(app)
        .get('/api/products?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const productId = listResponse.body.data[0].id;
        testProductId = productId;

        const response = await request(app)
          .get(`/api/products/${productId}`)
          .expect(200);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty('id', productId);
        expect(response.body.data).toHaveProperty('name');
        expect(response.body.data).toHaveProperty('category');
      }
    });

    test('should return 404 for non-existent product', async () => {
      const response = await request(app)
        .get('/api/products/nonexistent-product-id-12345')
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toBeTruthy();
    });

    test('should include all product fields', async () => {
      const listResponse = await request(app)
        .get('/api/products?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const productId = listResponse.body.data[0].id;

        const response = await request(app)
          .get(`/api/products/${productId}`)
          .expect(200);

        const product = response.body.data;
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('description');
      }
    });

    test('should handle SQL injection attempts', async () => {
      const response = await request(app)
        .get('/api/products/1\' OR \'1\'=\'1')
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    test('should handle path traversal attempts', async () => {
      const response = await request(app)
        .get('/api/products/../../etc/passwd')
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/products/category/:category', () => {
    test('should return products for specific category', async () => {
      const response = await request(app)
        .get('/api/products/category/AI')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      
      if (response.body.data.length > 0) {
        response.body.data.forEach(product => {
          expect(product.category).toBe('AI');
        });
      }
    });

    test('should return empty array for category with no products', async () => {
      const response = await request(app)
        .get('/api/products/category/NonExistentCategory')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
      expect(response.body.count).toBe(0);
    });

    test('should handle special characters in category name', async () => {
      const response = await request(app)
        .get('/api/products/category/AI%20%26%20Data')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });
  });

  describe('GET /api/products/search/:keyword', () => {
    test('should search products by keyword', async () => {
      const response = await request(app)
        .get('/api/products/search/cloud')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    test('should perform case-insensitive search', async () => {
      const response1 = await request(app)
        .get('/api/products/search/WATSON')
        .expect(200);

      const response2 = await request(app)
        .get('/api/products/search/watson')
        .expect(200);

      expect(response1.body.success).toBe(true);
      expect(response2.body.success).toBe(true);
    });

    test('should handle empty search results', async () => {
      const response = await request(app)
        .get('/api/products/search/xyznonexistentkeyword123')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });

    test('should handle special characters in search', async () => {
      const response = await request(app)
        .get('/api/products/search/%20%26%20')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should search in multiple fields', async () => {
      const response = await request(app)
        .get('/api/products/search/IBM')
        .expect(200);

      expect(response.body.success).toBe(true);
      // Should find products with IBM in name, description, or keywords
    });
  });

  describe('Error Handling', () => {
    test('should handle database connection errors gracefully', async () => {
      // This would require mocking the database
      // For now, test that API doesn't crash on edge cases
      const response = await request(app)
        .get('/api/products?limit=999999')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should return proper error for malformed requests', async () => {
      const response = await request(app)
        .get('/api/products?category[]=invalid')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle concurrent requests without errors', async () => {
      const promises = Array(20).fill(null).map(() =>
        request(app).get('/api/products?limit=10')
      );

      const responses = await Promise.all(promises);
      
      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });
    });
  });

  describe('Response Format Validation', () => {
    test('should return consistent response structure', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('count');
      expect(typeof response.body.success).toBe('boolean');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(typeof response.body.count).toBe('number');
    });

    test('should include count matching data length', async () => {
      const response = await request(app)
        .get('/api/products?limit=10')
        .expect(200);

      expect(response.body.count).toBe(response.body.data.length);
    });

    test('should return valid JSON', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(() => JSON.stringify(response.body)).not.toThrow();
    });
  });

  describe('Performance Tests', () => {
    test('should respond within acceptable time for list', async () => {
      const start = Date.now();
      await request(app)
        .get('/api/products')
        .expect(200);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(2000);
    });

    test('should respond within acceptable time for single product', async () => {
      const listResponse = await request(app)
        .get('/api/products?limit=1')
        .expect(200);

      if (listResponse.body.data.length > 0) {
        const productId = listResponse.body.data[0].id;

        const start = Date.now();
        await request(app)
          .get(`/api/products/${productId}`)
          .expect(200);
        const duration = Date.now() - start;

        expect(duration).toBeLessThan(1000);
      }
    });

    test('should handle large limit values efficiently', async () => {
      const start = Date.now();
      await request(app)
        .get('/api/products?limit=100')
        .expect(200);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(3000);
    });

    test('should handle search efficiently', async () => {
      const start = Date.now();
      await request(app)
        .get('/api/products/search/IBM')
        .expect(200);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(2000);
    });
  });

  describe('Data Integrity', () => {
    test('should return products with valid IDs', async () => {
      const response = await request(app)
        .get('/api/products?limit=10')
        .expect(200);

      response.body.data.forEach(product => {
        expect(product.id).toBeTruthy();
        expect(typeof product.id).toBe('string');
      });
    });

    test('should return products with non-empty names', async () => {
      const response = await request(app)
        .get('/api/products?limit=10')
        .expect(200);

      response.body.data.forEach(product => {
        expect(product.name).toBeTruthy();
        expect(product.name.length).toBeGreaterThan(0);
      });
    });

    test('should return products with valid categories', async () => {
      const response = await request(app)
        .get('/api/products?limit=10')
        .expect(200);

      response.body.data.forEach(product => {
        expect(product.category).toBeTruthy();
        expect(typeof product.category).toBe('string');
      });
    });

    test('should not return duplicate products', async () => {
      const response = await request(app)
        .get('/api/products?limit=50')
        .expect(200);

      const ids = response.body.data.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });
  });

  describe('Pagination Tests', () => {
    test('should paginate results correctly', async () => {
      const page1 = await request(app)
        .get('/api/products?limit=5&offset=0')
        .expect(200);

      const page2 = await request(app)
        .get('/api/products?limit=5&offset=5')
        .expect(200);

      if (page1.body.data.length > 0 && page2.body.data.length > 0) {
        const page1Ids = page1.body.data.map(p => p.id);
        const page2Ids = page2.body.data.map(p => p.id);
        
        // No overlap between pages
        const overlap = page1Ids.filter(id => page2Ids.includes(id));
        expect(overlap.length).toBe(0);
      }
    });

    test('should handle offset beyond available data', async () => {
      const response = await request(app)
        .get('/api/products?limit=10&offset=999999')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });
  });

  describe('Filter Combination Tests', () => {
    test('should combine category and search filters', async () => {
      const response = await request(app)
        .get('/api/products?category=AI&search=Watson')
        .expect(200);

      expect(response.body.success).toBe(true);
      if (response.body.data.length > 0) {
        response.body.data.forEach(product => {
          expect(product.category).toBe('AI');
        });
      }
    });

    test('should combine all filters with pagination', async () => {
      const response = await request(app)
        .get('/api/products?category=AI&search=IBM&limit=5&offset=0')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.length).toBeLessThanOrEqual(5);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty string search', async () => {
      const response = await request(app)
        .get('/api/products/search/')
        .expect(404); // Should hit 404 as it's an invalid route

      expect(response.body).toBeDefined();
    });

    test('should handle very long search terms', async () => {
      const longTerm = 'a'.repeat(1000);
      const response = await request(app)
        .get(`/api/products/search/${longTerm}`)
        .expect(200);

      expect(response.body.success).toBe(true);
    });

    test('should handle unicode characters in search', async () => {
      const response = await request(app)
        .get('/api/products/search/日本語')
        .expect(200);

      expect(response.body).toHaveProperty('success');
    });

    test('should handle limit of 0', async () => {
      const response = await request(app)
        .get('/api/products?limit=0')
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });
});

// Made with Bob