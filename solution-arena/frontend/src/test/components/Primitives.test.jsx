import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PageHeader from '../../components/Primitives/PageHeader';
import MetricBand from '../../components/Primitives/MetricBand';
import SectionHeader from '../../components/Primitives/SectionHeader';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Primitive Components', () => {
  describe('PageHeader', () => {
    it('should render title and description', () => {
      renderWithRouter(
        <PageHeader 
          title="Test Title" 
          description="Test Description" 
        />
      );
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should render back button when showBack is true', () => {
      renderWithRouter(
        <PageHeader 
          title="Test" 
          showBack={true} 
        />
      );
      const backButton = screen.getByRole('button', { name: /go back/i });
      expect(backButton).toBeInTheDocument();
    });

    it('should not render back button when showBack is false', () => {
      renderWithRouter(
        <PageHeader 
          title="Test" 
          showBack={false} 
        />
      );
      const backButton = screen.queryByRole('button', { name: /go back/i });
      expect(backButton).not.toBeInTheDocument();
    });

    it('should render actions when provided', () => {
      renderWithRouter(
        <PageHeader 
          title="Test" 
          actions={<button>Action Button</button>} 
        />
      );
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });

    it('should not render description when not provided', () => {
      renderWithRouter(
        <PageHeader title="Test" />
      );
      expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
    });

    it('should have proper accessibility attributes', () => {
      renderWithRouter(
        <PageHeader 
          title="Test Title" 
          description="Test Description" 
          showBack={true}
        />
      );
      const heading = screen.getByRole('heading', { name: 'Test Title' });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('MetricBand', () => {
    const mockMetrics = [
      { label: 'Metric 1', value: '100', trend: 5 },
      { label: 'Metric 2', value: '85%', trend: -2 },
      { label: 'Metric 3', value: '42', subtitle: 'All time' }
    ];

    it('should render all metrics', () => {
      render(<MetricBand metrics={mockMetrics} />);
      expect(screen.getByText('Metric 1')).toBeInTheDocument();
      expect(screen.getByText('Metric 2')).toBeInTheDocument();
      expect(screen.getByText('Metric 3')).toBeInTheDocument();
    });

    it('should display metric values', () => {
      render(<MetricBand metrics={mockMetrics} />);
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('85%')).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('should display positive trend correctly', () => {
      render(<MetricBand metrics={mockMetrics} />);
      expect(screen.getByText('+5%')).toBeInTheDocument();
    });

    it('should display negative trend correctly', () => {
      render(<MetricBand metrics={mockMetrics} />);
      expect(screen.getByText('-2%')).toBeInTheDocument();
    });

    it('should display subtitle when provided', () => {
      render(<MetricBand metrics={mockMetrics} />);
      expect(screen.getByText('All time')).toBeInTheDocument();
    });

    it('should handle empty metrics array', () => {
      render(<MetricBand metrics={[]} />);
      expect(screen.queryByText('Metric 1')).not.toBeInTheDocument();
    });

    it('should apply correct CSS classes for grid layout', () => {
      const { container } = render(<MetricBand metrics={mockMetrics} />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('SectionHeader', () => {
    it('should render title', () => {
      render(<SectionHeader title="Section Title" />);
      expect(screen.getByText('Section Title')).toBeInTheDocument();
    });

    it('should render subtitle when provided', () => {
      render(<SectionHeader title="Title" subtitle="Subtitle text" />);
      expect(screen.getByText('Subtitle text')).toBeInTheDocument();
    });

    it('should render action when provided', () => {
      render(
        <SectionHeader 
          title="Title" 
          action={<button>Action</button>} 
        />
      );
      expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('should not render subtitle when not provided', () => {
      render(<SectionHeader title="Title" />);
      expect(screen.queryByText('Subtitle')).not.toBeInTheDocument();
    });

    it('should have proper heading structure', () => {
      render(<SectionHeader title="Test Section" />);
      const heading = screen.getByRole('heading', { name: 'Test Section' });
      expect(heading).toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(<SectionHeader title="Title" />);
      const header = container.querySelector('.section-header');
      expect(header).toBeInTheDocument();
    });
  });
});

// Made with Bob
