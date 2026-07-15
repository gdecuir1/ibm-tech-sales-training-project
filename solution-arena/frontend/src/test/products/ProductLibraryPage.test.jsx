import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductLibraryPage from '../../pages/ProductLibraryPage';
import { allIBMProducts } from '../../data/ibm-products';

// Mock the product data
vi.mock('../../data/ibm-products', () => ({
  allIBMProducts: [
    {
      id: 'test-product-1',
      name: 'Test Product 1',
      category: 'Hardware',
      subcategory: 'Server',
      description: 'Test description 1',
      overview: 'Test overview 1',
      tags: ['test', 'hardware'],
      competitiveDifferentiators: ['Diff 1', 'Diff 2', 'Diff 3'],
      useCases: [{ useCase: 'Test use case' }],
      commonPainPoints: [{ painPoint: 'Test pain' }],
      industryFit: [{ industry: 'Healthcare', fit: 'excellent' }],
    },
    {
      id: 'test-product-2',
      name: 'Test Product 2',
      category: 'Storage',
      subcategory: 'All-Flash',
      description: 'Test description 2',
      overview: 'Test overview 2',
      tags: ['test', 'storage'],
      competitiveDifferentiators: ['Diff 1', 'Diff 2', 'Diff 3'],
      useCases: [{ useCase: 'Test use case' }],
      commonPainPoints: [{ painPoint: 'Test pain' }],
      industryFit: [{ industry: 'Banking', fit: 'excellent' }],
    },
    {
      id: 'test-product-3',
      name: 'Test Product 3',
      category: 'Cloud',
      subcategory: 'IaaS',
      description: 'Test description 3',
      overview: 'Test overview 3',
      tags: ['test', 'cloud'],
      competitiveDifferentiators: ['Diff 1', 'Diff 2', 'Diff 3'],
      useCases: [{ useCase: 'Test use case' }],
      commonPainPoints: [{ painPoint: 'Test pain' }],
      industryFit: [{ industry: 'Healthcare', fit: 'excellent' }],
    },
  ],
  getAllIndustries: () => ['Healthcare', 'Banking', 'Manufacturing'],
  productStats: {
    totalProducts: 3,
    byCategory: { Hardware: 1, Storage: 1, Cloud: 1 },
    totalUseCases: 3,
    totalCustomerExamples: 0,
  },
}));

describe('ProductLibraryPage', () => {
  const renderWithRouter = (component) => {
    return render(
      <MemoryRouter>
        {component}
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the page header', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Product Knowledge Base')).toBeInTheDocument();
    });

    it('should render the search bar', () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('should render category filter', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    });

    it('should render industry filter', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByLabelText(/industry/i)).toBeInTheDocument();
    });

    it('should render quick stats', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('3')).toBeInTheDocument(); // Total products
      expect(screen.getByText('Products')).toBeInTheDocument();
    });

    it('should render all products initially', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      expect(screen.getByText('Test Product 3')).toBeInTheDocument();
    });

    it('should render results count', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText(/showing 3 of 3 products/i)).toBeInTheDocument();
    });
  });

  describe('Search Functionality', () => {
    it('should filter products by search query', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'Product 1' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });

    it('should be case-insensitive', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'PRODUCT 1' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      });
    });

    it('should show empty state when no results', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
      
      await waitFor(() => {
        expect(screen.getByText(/no products found/i)).toBeInTheDocument();
      });
    });

    it('should update results count', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'Product 1' } });
      
      await waitFor(() => {
        expect(screen.getByText(/showing 1 of 3 products/i)).toBeInTheDocument();
      });
    });
  });

  describe('Category Filter', () => {
    it('should filter by Hardware category', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const categorySelect = screen.getByLabelText(/category/i);
      
      fireEvent.change(categorySelect, { target: { value: 'Hardware' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });

    it('should filter by Storage category', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const categorySelect = screen.getByLabelText(/category/i);
      
      fireEvent.change(categorySelect, { target: { value: 'Storage' } });
      
      await waitFor(() => {
        expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });

    it('should filter by Cloud category', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const categorySelect = screen.getByLabelText(/category/i);
      
      fireEvent.change(categorySelect, { target: { value: 'Cloud' } });
      
      await waitFor(() => {
        expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.getByText('Test Product 3')).toBeInTheDocument();
      });
    });
  });

  describe('Industry Filter', () => {
    it('should filter by Healthcare industry', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const industrySelect = screen.getByLabelText(/industry/i);
      
      fireEvent.change(industrySelect, { target: { value: 'Healthcare' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.getByText('Test Product 3')).toBeInTheDocument();
      });
    });

    it('should filter by Banking industry', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const industrySelect = screen.getByLabelText(/industry/i);
      
      fireEvent.change(industrySelect, { target: { value: 'Banking' } });
      
      await waitFor(() => {
        expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });
  });

  describe('Combined Filters', () => {
    it('should combine search and category filter', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      const categorySelect = screen.getByLabelText(/category/i);
      
      fireEvent.change(searchInput, { target: { value: 'Product' } });
      fireEvent.change(categorySelect, { target: { value: 'Hardware' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });

    it('should combine all three filters', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      const categorySelect = screen.getByLabelText(/category/i);
      const industrySelect = screen.getByLabelText(/industry/i);
      
      fireEvent.change(searchInput, { target: { value: 'Product' } });
      fireEvent.change(categorySelect, { target: { value: 'Hardware' } });
      fireEvent.change(industrySelect, { target: { value: 'Healthcare' } });
      
      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Test Product 3')).not.toBeInTheDocument();
      });
    });
  });

  describe('Clear Filters', () => {
    it('should show clear filters button when filters are active', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'test' } });
      
      await waitFor(() => {
        expect(screen.getByText(/clear filters/i)).toBeInTheDocument();
      });
    });

    it('should clear all filters when clicked', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      const categorySelect = screen.getByLabelText(/category/i);
      
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.change(categorySelect, { target: { value: 'Hardware' } });
      
      const clearButton = await screen.findByText(/clear filters/i);
      fireEvent.click(clearButton);
      
      await waitFor(() => {
        expect(searchInput.value).toBe('');
        expect(categorySelect.value).toBe('all');
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
        expect(screen.getByText('Test Product 3')).toBeInTheDocument();
      });
    });
  });

  describe('Product Cards', () => {
    it('should display product name', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });

    it('should display product category', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Hardware')).toBeInTheDocument();
    });

    it('should display product description', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Test description 1')).toBeInTheDocument();
    });

    it('should display key differentiators', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Diff 1')).toBeInTheDocument();
    });

    it('should display stats', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText(/1 use cases/i)).toBeInTheDocument();
      expect(screen.getByText(/1 pain points/i)).toBeInTheDocument();
    });

    it('should have Learn More link', () => {
      renderWithRouter(<ProductLibraryPage />);
      const learnMoreLinks = screen.getAllByText(/learn more/i);
      expect(learnMoreLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Empty State', () => {
    it('should show empty state when no products match', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
      
      await waitFor(() => {
        expect(screen.getByText(/no products found/i)).toBeInTheDocument();
        expect(screen.getByText(/try adjusting your search/i)).toBeInTheDocument();
      });
    });

    it('should have clear all filters button in empty state', async () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
      
      await waitFor(() => {
        const clearButtons = screen.getAllByText(/clear all filters/i);
        expect(clearButtons.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Accessibility', () => {
    it('should have accessible search input', () => {
      renderWithRouter(<ProductLibraryPage />);
      const searchInput = screen.getByPlaceholderText(/search products/i);
      expect(searchInput).toHaveAttribute('type', 'text');
    });

    it('should have accessible filter labels', () => {
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/industry/i)).toBeInTheDocument();
    });

    it('should have accessible links', () => {
      renderWithRouter(<ProductLibraryPage />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('Responsive Design', () => {
    it('should render on mobile viewport', () => {
      global.innerWidth = 375;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Product Knowledge Base')).toBeInTheDocument();
    });

    it('should render on tablet viewport', () => {
      global.innerWidth = 768;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Product Knowledge Base')).toBeInTheDocument();
    });

    it('should render on desktop viewport', () => {
      global.innerWidth = 1920;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter(<ProductLibraryPage />);
      expect(screen.getByText('Product Knowledge Base')).toBeInTheDocument();
    });
  });
});

// Made with Bob
