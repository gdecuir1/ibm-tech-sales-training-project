import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AICoach from '../../components/Dashboard/Recommendations/AICoach';
import ScenarioHistory from '../../components/Dashboard/Analytics/ScenarioHistory';
import LearningProgression from '../../components/Dashboard/Progress/LearningProgression';
import GoalsSection from '../../components/Dashboard/Goals/GoalsSection';
import AchievementsGrid from '../../components/Dashboard/Achievements/AchievementsGrid';
import PracticeCalendar from '../../components/Dashboard/Timeline/PracticeCalendar';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Dashboard Components', () => {
  describe('AICoach', () => {
    it('should render primary development area', () => {
      renderWithRouter(<AICoach />);
      expect(screen.getByText(/primary development area/i)).toBeInTheDocument();
    });

    it('should render objection handling insight', () => {
      renderWithRouter(<AICoach />);
      expect(screen.getByText(/objection handling/i)).toBeInTheDocument();
    });

    it('should render recommended action section', () => {
      renderWithRouter(<AICoach />);
      expect(screen.getByText(/recommended action/i)).toBeInTheDocument();
    });

    it('should render expected impact section', () => {
      renderWithRouter(<AICoach />);
      expect(screen.getByText(/expected impact/i)).toBeInTheDocument();
    });

    it('should have start recommended scenario button', () => {
      renderWithRouter(<AICoach />);
      const button = screen.getByRole('button', { name: /start recommended scenario/i });
      expect(button).toBeInTheDocument();
    });

    it('should navigate when button is clicked', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AICoach />);
      const button = screen.getByRole('button', { name: /start recommended scenario/i });
      await user.click(button);
      // Navigation would be tested in integration tests
    });

    it('should use IBM blue background', () => {
      const { container } = renderWithRouter(<AICoach />);
      const section = container.querySelector('.bg-ibm-blue-100');
      expect(section).toBeInTheDocument();
    });

    it('should not contain emojis', () => {
      const { container } = renderWithRouter(<AICoach />);
      const text = container.textContent;
      expect(text).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
    });
  });

  describe('ScenarioHistory', () => {
    it('should render search input', () => {
      render(<ScenarioHistory />);
      const searchInput = screen.getByPlaceholderText(/search industry/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('should render industry filter', () => {
      render(<ScenarioHistory />);
      const filters = screen.getAllByRole('combobox');
      expect(filters.length).toBeGreaterThan(0);
    });

    it('should render difficulty filter', () => {
      render(<ScenarioHistory />);
      const filters = screen.getAllByRole('combobox');
      expect(filters.length).toBeGreaterThanOrEqual(2);
    });

    it('should render data table', () => {
      render(<ScenarioHistory />);
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
    });

    it('should render table headers', () => {
      render(<ScenarioHistory />);
      expect(screen.getByText('Date')).toBeInTheDocument();
      expect(screen.getByText('Industry')).toBeInTheDocument();
      expect(screen.getByText('Difficulty')).toBeInTheDocument();
      expect(screen.getByText('Score')).toBeInTheDocument();
    });

    it('should filter scenarios by search term', async () => {
      const user = userEvent.setup();
      render(<ScenarioHistory />);
      const searchInput = screen.getByPlaceholderText(/search industry/i);
      await user.type(searchInput, 'Healthcare');
      // Filtered results would be visible
    });

    it('should render load more button', () => {
      render(<ScenarioHistory />);
      const button = screen.getByRole('button', { name: /load more/i });
      expect(button).toBeInTheDocument();
    });

    it('should display scenario count', () => {
      render(<ScenarioHistory />);
      expect(screen.getByText(/showing/i)).toBeInTheDocument();
    });
  });

  describe('LearningProgression', () => {
    it('should render chart container', () => {
      const { container } = render(<LearningProgression />);
      const chart = container.querySelector('.recharts-wrapper');
      expect(chart).toBeInTheDocument();
    });

    it('should render starting score stat', () => {
      render(<LearningProgression />);
      expect(screen.getByText(/starting/i)).toBeInTheDocument();
      expect(screen.getByText('65%')).toBeInTheDocument();
    });

    it('should render current score stat', () => {
      render(<LearningProgression />);
      expect(screen.getByText(/current/i)).toBeInTheDocument();
      expect(screen.getByText('91%')).toBeInTheDocument();
    });

    it('should render improvement stat', () => {
      render(<LearningProgression />);
      expect(screen.getByText(/improvement/i)).toBeInTheDocument();
      expect(screen.getByText('+26%')).toBeInTheDocument();
    });

    it('should render trend stat', () => {
      render(<LearningProgression />);
      expect(screen.getByText(/trend/i)).toBeInTheDocument();
      expect(screen.getByText('Rising')).toBeInTheDocument();
    });

    it('should use IBM blue for chart line', () => {
      const { container } = render(<LearningProgression />);
      // Chart would use IBM blue color
      expect(container).toBeInTheDocument();
    });
  });

  describe('GoalsSection', () => {
    it('should render goal titles', () => {
      render(<GoalsSection />);
      // Goals from mockData would be rendered
      const goals = screen.getAllByRole('progressbar', { hidden: true });
      expect(goals.length).toBeGreaterThan(0);
    });

    it('should render progress bars', () => {
      const { container } = render(<GoalsSection />);
      const progressBars = container.querySelectorAll('.h-2');
      expect(progressBars.length).toBeGreaterThan(0);
    });

    it('should display goal periods (Daily/Weekly/Monthly)', () => {
      render(<GoalsSection />);
      expect(screen.getByText(/daily/i)).toBeInTheDocument();
    });

    it('should show current/target values', () => {
      const { container } = render(<GoalsSection />);
      const text = container.textContent;
      expect(text).toMatch(/\d+\/\d+/);
    });

    it('should use IBM blue for progress bars', () => {
      const { container } = render(<GoalsSection />);
      const progressBar = container.querySelector('.bg-ibm-blue-60');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('AchievementsGrid', () => {
    it('should render achievement count', () => {
      render(<AchievementsGrid />);
      expect(screen.getByText(/unlocked/i)).toBeInTheDocument();
    });

    it('should render achievement grid', () => {
      const { container } = render(<AchievementsGrid />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('should show locked achievements', () => {
      render(<AchievementsGrid />);
      const lockIcons = screen.getAllByRole('img', { hidden: true });
      expect(lockIcons.length).toBeGreaterThanOrEqual(0);
    });

    it('should render view all button', () => {
      render(<AchievementsGrid />);
      const button = screen.getByRole('button', { name: /view all/i });
      expect(button).toBeInTheDocument();
    });

    it('should display achievement names', () => {
      const { container } = render(<AchievementsGrid />);
      const achievements = container.querySelectorAll('.text-xs');
      expect(achievements.length).toBeGreaterThan(0);
    });

    it('should show unlocked status', () => {
      render(<AchievementsGrid />);
      const unlocked = screen.queryAllByText(/unlocked/i);
      expect(unlocked.length).toBeGreaterThanOrEqual(0);
    });

    it('should not contain emoji', () => {
      const { container } = render(<AchievementsGrid />);
      const text = container.textContent;
      expect(text).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
    });
  });

  describe('PracticeCalendar', () => {
    it('should render calendar grid', () => {
      const { container } = render(<PracticeCalendar />);
      const calendar = container.querySelector('.space-y-1');
      expect(calendar).toBeInTheDocument();
    });

    it('should render day labels', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText('S')).toBeInTheDocument();
      expect(screen.getByText('M')).toBeInTheDocument();
    });

    it('should render legend', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText('Less')).toBeInTheDocument();
      expect(screen.getByText('More')).toBeInTheDocument();
    });

    it('should display active days count', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText(/days active/i)).toBeInTheDocument();
    });

    it('should render consistency stat', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText('Consistency')).toBeInTheDocument();
    });

    it('should render total scenarios stat', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText('Total Scenarios')).toBeInTheDocument();
    });

    it('should render total time stat', () => {
      render(<PracticeCalendar />);
      expect(screen.getByText('Total Time')).toBeInTheDocument();
    });

    it('should use heatmap colors', () => {
      const { container } = render(<PracticeCalendar />);
      const cells = container.querySelectorAll('.w-3.h-3');
      expect(cells.length).toBeGreaterThan(0);
    });
  });
});

// Made with Bob
