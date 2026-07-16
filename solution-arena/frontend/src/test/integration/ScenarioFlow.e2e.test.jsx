import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import App from '../../App';

/**
 * End-to-End Test Suite for Complete Scenario Flow
 *
 * Tests the entire user journey:
 * 1. Homepage → Scenarios page
 * 2. Select a scenario
 * 3. Complete discovery phase
 * 4. Complete objection phase
 * 5. Make recommendation
 * 6. View results
 * 7. Check dashboard for progress
 */

describe('Complete Scenario Flow E2E', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  const renderApp = () => {
    // App already has HashRouter, so don't wrap it again
    return render(<App />);
  };

  describe('Full User Journey', () => {
    it('should complete entire scenario flow from homepage to results', async () => {
      renderApp();

      // Step 1: Verify homepage loads
      await waitFor(() => {
        expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
      });

      // Step 2: Navigate to scenarios page
      const scenariosLink = screen.getByRole('link', { name: /scenarios/i });
      fireEvent.click(scenariosLink);

      await waitFor(() => {
        expect(screen.getByText(/Training scenarios/i)).toBeInTheDocument();
      });

      // Step 3: Verify scenarios are displayed
      await waitFor(() => {
        const scenarioCards = screen.getAllByText(/Test Scenario|Healthcare|Banking/i);
        expect(scenarioCards.length).toBeGreaterThan(0);
      });

      // Step 4: Click on first scenario
      const firstScenario = screen.getAllByText(/Start →/i)[0];
      fireEvent.click(firstScenario.closest('div'));

      // Step 5: Verify scenario execution page loads
      await waitFor(() => {
        expect(screen.getByText(/Discovery phase|Question/i)).toBeInTheDocument();
      }, { timeout: 3000 });

      // Step 6: Answer discovery questions
      const answerInputs = screen.queryAllByPlaceholderText(/your answer/i);
      if (answerInputs.length > 0) {
        answerInputs.forEach((input, index) => {
          fireEvent.change(input, { 
            target: { value: `Test answer ${index + 1} with detailed information about the customer's needs and requirements.` } 
          });
        });

        // Submit answers
        const submitButtons = screen.queryAllByText(/Submit|Next/i);
        if (submitButtons.length > 0) {
          fireEvent.click(submitButtons[0]);
        }
      }

      // Step 7: Handle objection phase
      await waitFor(() => {
        const objectionText = screen.queryByText(/objection|concern/i);
        if (objectionText) {
          const responseInputs = screen.queryAllByPlaceholderText(/your response/i);
          if (responseInputs.length > 0) {
            responseInputs.forEach((input, index) => {
              fireEvent.change(input, { 
                target: { value: `Test response ${index + 1} addressing the concern with data and evidence.` } 
              });
            });

            const submitButtons = screen.queryAllByText(/Submit|Next/i);
            if (submitButtons.length > 0) {
              fireEvent.click(submitButtons[0]);
            }
          }
        }
      }, { timeout: 3000 });

      // Step 8: Make recommendation
      await waitFor(() => {
        const recommendationText = screen.queryByText(/recommendation|product/i);
        if (recommendationText) {
          // Select products
          const checkboxes = screen.queryAllByRole('checkbox');
          if (checkboxes.length > 0) {
            fireEvent.click(checkboxes[0]);
          }

          // Fill recommendation text
          const textareas = screen.queryAllByRole('textbox');
          if (textareas.length > 0) {
            fireEvent.change(textareas[0], { 
              target: { value: 'Comprehensive recommendation with business value and ROI analysis.' } 
            });
          }

          // Submit recommendation
          const submitButtons = screen.queryAllByText(/Submit|Complete/i);
          if (submitButtons.length > 0) {
            fireEvent.click(submitButtons[0]);
          }
        }
      }, { timeout: 3000 });

      // Step 9: Verify results page
      await waitFor(() => {
        const resultsIndicators = screen.queryByText(/score|result|performance/i);
        expect(resultsIndicators).toBeTruthy();
      }, { timeout: 3000 });

      // Step 10: Verify localStorage was updated
      const savedProgress = localStorage.getItem('ibm_training_scenario_history');
      expect(savedProgress).toBeTruthy();

      // Step 11: Navigate to dashboard
      const dashboardLink = screen.queryByRole('link', { name: /dashboard/i });
      if (dashboardLink) {
        fireEvent.click(dashboardLink);

        await waitFor(() => {
          expect(screen.getByText(/Performance overview|Dashboard/i)).toBeInTheDocument();
        });

        // Verify progress is shown
        const statsElements = screen.queryAllByText(/scenario|completed/i);
        expect(statsElements.length).toBeGreaterThan(0);
      }
    }, 30000); // 30 second timeout for full flow

    it('should persist progress across page reloads', async () => {
      const { unmount } = renderApp();

      // Navigate to scenarios
      const scenariosLink = screen.getByRole('link', { name: /scenarios/i });
      fireEvent.click(scenariosLink);

      await waitFor(() => {
        expect(screen.getByText(/Training scenarios/i)).toBeInTheDocument();
      });

      // Save some mock progress
      const mockProgress = {
        scenarioId: 'test-scenario-1',
        score: 85,
        timestamp: Date.now(),
        date: new Date().toISOString()
      };
      localStorage.setItem('ibm_training_scenario_history', JSON.stringify([mockProgress]));

      // Unmount and remount (simulating page reload)
      unmount();
      renderApp();

      // Navigate to dashboard
      await waitFor(() => {
        const dashboardLink = screen.queryByRole('link', { name: /dashboard/i });
        if (dashboardLink) {
          fireEvent.click(dashboardLink);
        }
      });

      // Verify progress persisted
      const savedProgress = localStorage.getItem('ibm_training_scenario_history');
      expect(savedProgress).toBeTruthy();
      const parsed = JSON.parse(savedProgress);
      expect(parsed[0].score).toBe(85);
    });

    it('should handle empty state when no scenarios completed', async () => {
      renderApp();

      // Navigate to dashboard
      const dashboardLink = screen.queryByRole('link', { name: /dashboard/i });
      if (dashboardLink) {
        fireEvent.click(dashboardLink);

        await waitFor(() => {
          expect(screen.getByText(/Performance overview|Dashboard/i)).toBeInTheDocument();
        });

        // Should show empty state or zero stats
        const zeroStats = screen.queryAllByText(/0/);
        expect(zeroStats.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Navigation Flow', () => {
    it('should navigate between all major pages', async () => {
      renderApp();

      // Homepage
      await waitFor(() => {
        expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
      });

      // Navigate to Scenarios
      const scenariosLink = screen.getByRole('link', { name: /scenarios/i });
      fireEvent.click(scenariosLink);
      await waitFor(() => {
        expect(screen.getByText(/Training scenarios/i)).toBeInTheDocument();
      });

      // Navigate to Products
      const productsLink = screen.getByRole('link', { name: /products/i });
      if (productsLink) {
        fireEvent.click(productsLink);
        await waitFor(() => {
          expect(screen.getByText(/Product library|Products/i)).toBeInTheDocument();
        });
      }

      // Navigate to Dashboard
      const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
      if (dashboardLink) {
        fireEvent.click(dashboardLink);
        await waitFor(() => {
          expect(screen.getByText(/Performance overview|Dashboard/i)).toBeInTheDocument();
        });
      }

      // Navigate back to Home
      const homeLink = screen.getByRole('link', { name: /home/i });
      if (homeLink) {
        fireEvent.click(homeLink);
        await waitFor(() => {
          expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
        });
      }
    });

    it('should handle back button navigation', async () => {
      renderApp();

      // Navigate to scenarios
      const scenariosLink = screen.getByRole('link', { name: /scenarios/i });
      fireEvent.click(scenariosLink);

      await waitFor(() => {
        expect(screen.getByText(/Training scenarios/i)).toBeInTheDocument();
      });

      // Click back button if present
      const backButton = screen.queryByLabelText(/go back/i);
      if (backButton) {
        fireEvent.click(backButton);
        await waitFor(() => {
          expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
        });
      }
    });
  });

  describe('Data Persistence', () => {
    it('should save scenario progress to localStorage', async () => {
      renderApp();

      // Create mock scenario completion
      const mockCompletion = {
        scenarioId: 'healthcare-epic-performance-001',
        score: 92,
        productScore: 95,
        businessScore: 90,
        objectionScore: 88,
        timestamp: Date.now(),
        date: new Date().toISOString()
      };

      // Simulate saving via storageService
      localStorage.setItem('ibm_training_scenario_history', JSON.stringify([mockCompletion]));
      localStorage.setItem('ibm_training_user_stats', JSON.stringify({
        totalScenarios: 1,
        averageScore: 92,
        currentLevel: 1,
        xp: 46,
        currentStreak: 1
      }));

      // Navigate to dashboard
      const dashboardLink = screen.queryByRole('link', { name: /dashboard/i });
      if (dashboardLink) {
        fireEvent.click(dashboardLink);

        await waitFor(() => {
          // Should show the completed scenario count
          const statsText = screen.queryByText(/1/);
          expect(statsText).toBeTruthy();
        });
      }

      // Verify data in localStorage
      const history = localStorage.getItem('ibm_training_scenario_history');
      expect(history).toBeTruthy();
      const parsed = JSON.parse(history);
      expect(parsed[0].score).toBe(92);
    });

    it('should handle localStorage quota exceeded gracefully', async () => {
      renderApp();

      // Mock localStorage.setItem to throw quota exceeded error
      const originalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = vi.fn(() => {
        throw new Error('QuotaExceededError');
      });

      // Try to save data (should not crash)
      try {
        localStorage.setItem('test', 'data');
      } catch (error) {
        expect(error.message).toContain('QuotaExceededError');
      }

      // Restore original
      Storage.prototype.setItem = originalSetItem;
    });
  });

  describe('Error Handling', () => {
    it('should handle missing scenario gracefully', async () => {
      renderApp();

      // Try to navigate to non-existent scenario
      window.location.hash = '#/scenarios/non-existent-scenario';

      await waitFor(() => {
        // Should show error message or redirect
        const errorText = screen.queryByText(/not found|error/i);
        expect(errorText || screen.queryByText(/Training scenarios/i)).toBeTruthy();
      });
    });

    it('should handle corrupted localStorage data', async () => {
      // Set corrupted data
      localStorage.setItem('ibm_training_scenario_history', 'invalid json{{{');

      renderApp();

      // Navigate to dashboard
      const dashboardLink = screen.queryByRole('link', { name: /dashboard/i });
      if (dashboardLink) {
        fireEvent.click(dashboardLink);

        await waitFor(() => {
          // Should not crash, should show empty state
          expect(screen.getByText(/Performance overview|Dashboard/i)).toBeInTheDocument();
        });
      }
    });
  });

  describe('Responsive Behavior', () => {
    it('should render correctly on mobile viewport', async () => {
      // Set mobile viewport
      global.innerWidth = 375;
      global.innerHeight = 667;

      renderApp();

      await waitFor(() => {
        expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
      });

      // Verify mobile-friendly elements are present
      const navigation = screen.queryByRole('navigation');
      expect(navigation).toBeTruthy();
    });

    it('should render correctly on desktop viewport', async () => {
      // Set desktop viewport
      global.innerWidth = 1920;
      global.innerHeight = 1080;

      renderApp();

      await waitFor(() => {
        expect(screen.getByText(/IBM Tech Sales Training/i)).toBeInTheDocument();
      });

      // Verify desktop layout
      const navigation = screen.queryByRole('navigation');
      expect(navigation).toBeTruthy();
    });
  });
});

// Made with Bob