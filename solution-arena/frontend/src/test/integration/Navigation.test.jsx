import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NewHomePage from '../../components/Landing/NewHomePage';
import DashboardPage from '../../pages/DashboardPage';

// Mock react-router-dom's useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation Integration Tests', () => {
  describe('Component Rendering', () => {
    it('should render home page', () => {
      renderWithRouter(<NewHomePage />);
      const titles = screen.getAllByText(/IBM DealSprint/i);
      expect(titles.length).toBeGreaterThan(0);
    });

    it('should render dashboard page', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Performance overview')).toBeInTheDocument();
    });

    it('should have navigation buttons on home page', () => {
      renderWithRouter(<NewHomePage />);
      const buttons = screen.getAllByRole('button', { name: /view dashboard/i });
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should have back button on dashboard', () => {
      renderWithRouter(<DashboardPage />);
      const backButton = screen.getByRole('button', { name: /go back/i });
      expect(backButton).toBeInTheDocument();
    });

    it('should have start practice button on dashboard', () => {
      renderWithRouter(<DashboardPage />);
      const practiceButton = screen.getByRole('button', { name: /start practice/i });
      expect(practiceButton).toBeInTheDocument();
    });
  });

  describe('Button Interactions', () => {
    it('should have clickable start training button', async () => {
      const user = userEvent.setup();
      renderWithRouter(<NewHomePage />);
      
      const startButton = screen.getByRole('button', { name: /start training/i });
      await user.click(startButton);
      
      expect(startButton).toBeInTheDocument();
    });

    it('should have clickable dashboard button', async () => {
      const user = userEvent.setup();
      renderWithRouter(<NewHomePage />);
      
      const dashboardButtons = screen.getAllByRole('button', { name: /view dashboard/i });
      await user.click(dashboardButtons[0]);
      
      expect(dashboardButtons[0]).toBeInTheDocument();
    });

    it('should have clickable AI coach recommendation button', async () => {
      const user = userEvent.setup();
      renderWithRouter(<DashboardPage />);
      
      const recommendButton = screen.getByRole('button', { name: /start recommended scenario/i });
      await user.click(recommendButton);
      
      expect(recommendButton).toBeInTheDocument();
    });

    it('should have clickable back button', async () => {
      const user = userEvent.setup();
      renderWithRouter(<DashboardPage />);
      
      const backButton = screen.getByRole('button', { name: /go back/i });
      await user.click(backButton);
      
      expect(backButton).toBeInTheDocument();
    });
  });
});

// Made with Bob
