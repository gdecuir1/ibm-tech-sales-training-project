import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NewHomePage from '../../components/Landing/NewHomePage';
import DashboardPage from '../../pages/DashboardPage';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Page Components', () => {
  describe('NewHomePage (Landing Page)', () => {
    it('should render page title', () => {
      renderWithRouter(<NewHomePage />);
      const titles = screen.getAllByText(/IBM DealSprint/i);
      expect(titles.length).toBeGreaterThan(0);
    });

    it('should render main headline', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/Build stronger IBM solution-selling judgment/i)).toBeInTheDocument();
    });

    it('should render value proposition', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/DealSprint delivers/i)).toBeInTheDocument();
    });

    it('should have Start Training button', () => {
      renderWithRouter(<NewHomePage />);
      const button = screen.getByRole('button', { name: /start training/i });
      expect(button).toBeInTheDocument();
    });

    it('should have View Dashboard button', () => {
      renderWithRouter(<NewHomePage />);
      const buttons = screen.getAllByRole('button', { name: /view dashboard/i });
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should render metrics section', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText('100+')).toBeInTheDocument();
      expect(screen.getByText('Scenarios')).toBeInTheDocument();
    });

    it('should render how it works section', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/how it works/i)).toBeInTheDocument();
    });

    it('should render platform capabilities', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/platform capabilities/i)).toBeInTheDocument();
    });

    it('should render industry coverage', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/industry coverage/i)).toBeInTheDocument();
      expect(screen.getByText('Retail')).toBeInTheDocument();
      expect(screen.getByText('Healthcare')).toBeInTheDocument();
    });

    it('should render final CTA section', () => {
      renderWithRouter(<NewHomePage />);
      expect(screen.getByText(/Ready to improve your sales skills/i)).toBeInTheDocument();
    });

    it('should not contain emojis', () => {
      const { container } = renderWithRouter(<NewHomePage />);
      const text = container.textContent;
      expect(text).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
    });

    it('should not have gradient backgrounds in main content', () => {
      const { container } = renderWithRouter(<NewHomePage />);
      const gradients = container.querySelectorAll('[class*="gradient-to"]');
      // Should have minimal gradients, not excessive
      expect(gradients.length).toBeLessThan(5);
    });

    it('should use white background', () => {
      const { container } = renderWithRouter(<NewHomePage />);
      const mainDiv = container.firstChild;
      expect(mainDiv).toHaveClass('bg-white');
    });

    it('should have proper navigation structure', () => {
      renderWithRouter(<NewHomePage />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should render footer', () => {
      renderWithRouter(<NewHomePage />);
      const titles = screen.getAllByText(/IBM DealSprint/i);
      expect(titles.length).toBeGreaterThan(0);
      expect(screen.getByText(/2024/i)).toBeInTheDocument();
    });
  });

  describe('DashboardPage', () => {
    it('should render page header', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Performance overview')).toBeInTheDocument();
    });

    it('should render page description', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText(/Track skill development/i)).toBeInTheDocument();
    });

    it('should render date range selector', () => {
      renderWithRouter(<DashboardPage />);
      const selects = screen.getAllByRole('combobox');
      expect(selects.length).toBeGreaterThan(0);
    });

    it('should have Start Practice button', () => {
      renderWithRouter(<DashboardPage />);
      const button = screen.getByRole('button', { name: /start practice/i });
      expect(button).toBeInTheDocument();
    });

    it('should render metric band with KPIs', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Scenarios completed')).toBeInTheDocument();
      expect(screen.getByText('Average score')).toBeInTheDocument();
      expect(screen.getByText('Current level')).toBeInTheDocument();
    });

    it('should render AI coaching insights', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText(/primary development area/i)).toBeInTheDocument();
    });

    it('should render performance trend section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Performance trend')).toBeInTheDocument();
    });

    it('should render skill performance section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Skill performance')).toBeInTheDocument();
    });

    it('should render industry performance section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Industry performance')).toBeInTheDocument();
    });

    it('should render practice consistency section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Practice consistency')).toBeInTheDocument();
    });

    it('should render scenario history section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Scenario history')).toBeInTheDocument();
    });

    it('should render goals section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Goals')).toBeInTheDocument();
    });

    it('should render achievements section', () => {
      renderWithRouter(<DashboardPage />);
      expect(screen.getByText('Achievements')).toBeInTheDocument();
    });

    it('should use white background', () => {
      const { container } = renderWithRouter(<DashboardPage />);
      const mainDiv = container.firstChild;
      expect(mainDiv).toHaveClass('bg-white');
    });

    it('should have proper grid layout', () => {
      const { container } = renderWithRouter(<DashboardPage />);
      const grids = container.querySelectorAll('.grid');
      expect(grids.length).toBeGreaterThan(0);
    });

    it('should not contain emojis', () => {
      const { container } = renderWithRouter(<DashboardPage />);
      const text = container.textContent;
      expect(text).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
    });

    it('should have back button', () => {
      renderWithRouter(<DashboardPage />);
      const backButton = screen.getByRole('button', { name: /go back/i });
      expect(backButton).toBeInTheDocument();
    });

    it('should allow date range selection', async () => {
      const user = userEvent.setup();
      renderWithRouter(<DashboardPage />);
      const selects = screen.getAllByRole('combobox');
      const dateSelect = selects[0]; // First select is date range
      await user.selectOptions(dateSelect, '7d');
      expect(dateSelect.value).toBe('7d');
    });
  });
});

// Made with Bob
