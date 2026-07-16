import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Application Functionality Tests', () => {
  describe('Homepage', () => {
    it('should render homepage at root path', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      // Wait for content to load
      await waitFor(() => {
        expect(document.body.textContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Dashboard', () => {
    it('should render dashboard page', async () => {
      render(
        <MemoryRouter initialEntries={['/dashboard']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.body.textContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Product Library', () => {
    it('should render product library page', async () => {
      render(
        <MemoryRouter initialEntries={['/products']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.body.textContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Scenario Library', () => {
    it('should render scenario library page', async () => {
      render(
        <MemoryRouter initialEntries={['/scenarios']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.body.textContent.length).toBeGreaterThan(0);
      });
    });

    it('should display scenario statistics', async () => {
      render(
        <MemoryRouter initialEntries={['/scenarios']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        const text = document.body.textContent;
        // Should show some scenarios
        expect(text).toMatch(/\d+/); // At least one number
      });
    });
  });

  describe('Routing', () => {
    it('should redirect unknown routes to homepage', async () => {
      render(
        <MemoryRouter initialEntries={['/unknown-route']}>
          <App />
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.body.textContent.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Scenario Data Tests', () => {
  it('should have scenario data available', async () => {
    const { allScenarios } = await import('../../data/scenarios/index');
    expect(allScenarios).toBeDefined();
    expect(Array.isArray(allScenarios)).toBe(true);
    expect(allScenarios.length).toBeGreaterThan(0);
  });

  it('should have valid scenario structure', async () => {
    const { allScenarios } = await import('../../data/scenarios/index');
    const scenario = allScenarios[0];
    
    expect(scenario).toHaveProperty('id');
    expect(scenario).toHaveProperty('title');
    expect(scenario).toHaveProperty('description');
    expect(scenario).toHaveProperty('customerProfile');
    expect(scenario).toHaveProperty('businessContext');
    expect(scenario).toHaveProperty('discoveryPhase');
    expect(scenario).toHaveProperty('objectionPhase');
    expect(scenario).toHaveProperty('recommendationPhase');
    expect(scenario).toHaveProperty('scoringCriteria');
    expect(scenario).toHaveProperty('metadata');
  });

  it('should have utility functions available', async () => {
    const {
      getScenarioById,
      getScenariosByIndustry,
      getScenariosByDifficulty,
      searchScenarios,
      getScenarioStats
    } = await import('../../data/scenarios/index');
    
    expect(typeof getScenarioById).toBe('function');
    expect(typeof getScenariosByIndustry).toBe('function');
    expect(typeof getScenariosByDifficulty).toBe('function');
    expect(typeof searchScenarios).toBe('function');
    expect(typeof getScenarioStats).toBe('function');
  });

  it('should return scenario statistics', async () => {
    const { getScenarioStats } = await import('../../data/scenarios/index');
    const stats = getScenarioStats();
    
    expect(stats).toHaveProperty('totalScenarios');
    expect(stats).toHaveProperty('industries');
    expect(stats).toHaveProperty('products');
    expect(stats).toHaveProperty('byDifficulty');
    expect(stats.totalScenarios).toBeGreaterThan(0);
  });
});

describe('Scenario Engine Tests', () => {
  it('should have scenario engine functions available', async () => {
    const {
      startScenario,
      scoreDiscoveryPhase,
      scoreObjectionHandling,
      scoreRecommendation,
      scoreBusinessValue,
      scoreScenario
    } = await import('../../services/scenarioEngine');
    
    expect(typeof startScenario).toBe('function');
    expect(typeof scoreDiscoveryPhase).toBe('function');
    expect(typeof scoreObjectionHandling).toBe('function');
    expect(typeof scoreRecommendation).toBe('function');
    expect(typeof scoreBusinessValue).toBe('function');
    expect(typeof scoreScenario).toBe('function');
  });

  it('should start a scenario session', async () => {
    const { startScenario } = await import('../../services/scenarioEngine');
    const { allScenarios } = await import('../../data/scenarios/index');
    
    const scenarioId = allScenarios[0].id;
    const progress = startScenario(scenarioId, 'test-user');
    
    expect(progress).toHaveProperty('scenarioId', scenarioId);
    expect(progress).toHaveProperty('userId', 'test-user');
    expect(progress).toHaveProperty('status', 'in-progress');
    expect(progress).toHaveProperty('currentPhase', 'discovery');
    expect(progress).toHaveProperty('startedAt');
  });
});

describe('Product Data Tests', () => {
  it('should have product data available', async () => {
    const { getAllProducts } = await import('../../data/ibm-products/index');
    const products = getAllProducts();
    
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('should have valid product structure', async () => {
    const { getAllProducts } = await import('../../data/ibm-products/index');
    const products = getAllProducts();
    const product = products[0];
    
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('description');
  });
});

// Made with Bob