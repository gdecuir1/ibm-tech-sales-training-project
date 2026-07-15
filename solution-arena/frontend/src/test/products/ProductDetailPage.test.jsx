import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from '../../pages/ProductDetailPage';

// Mock product data
const mockProduct = {
  id: 'test-product-1',
  name: 'IBM Power E1080',
  category: 'Hardware',
  subcategory: 'Server',
  description: 'Enterprise-class server for mission-critical workloads',
  overview: 'The IBM Power E1080 is the most powerful and scalable server in the IBM Power Systems portfolio.',
  keyFeatures: [
    'Up to 240 cores per system',
    'Up to 64TB memory',
    'PCIe Gen5 support',
  ],
  technicalSpecs: {
    processor: 'IBM POWER10',
    maxCores: 240,
    maxMemory: '64TB',
    storage: 'Up to 1PB',
  },
  competitiveDifferentiators: [
    'Superior performance per core',
    'Built-in security features',
    'Unmatched reliability',
  ],
  useCases: [
    {
      useCase: 'Mission-critical applications',
      description: 'Run SAP HANA, Oracle, and other critical workloads',
      benefits: ['99.999% uptime', 'Zero downtime maintenance'],
    },
    {
      useCase: 'AI and analytics',
      description: 'Accelerate AI workloads with built-in acceleration',
      benefits: ['10x faster inference', 'Reduced latency'],
    },
  ],
  commonPainPoints: [
    {
      painPoint: 'Slow database performance',
      solution: 'Power E1080 delivers 2-3x faster database queries',
      impact: 'Reduced query times from minutes to seconds',
    },
    {
      painPoint: 'High infrastructure costs',
      solution: 'Consolidate workloads on fewer servers',
      impact: 'Up to 40% reduction in TCO',
    },
  ],
  industryFit: [
    { industry: 'Healthcare', fit: 'excellent', reason: 'HIPAA compliance built-in' },
    { industry: 'Banking', fit: 'excellent', reason: 'PCI-DSS certified' },
    { industry: 'Manufacturing', fit: 'good', reason: 'Real-time analytics' },
  ],
  customerExamples: [
    {
      company: 'Major Hospital System',
      industry: 'Healthcare',
      challenge: 'Slow Epic EHR response times',
      solution: 'Migrated to Power E1080',
      results: ['50% faster response times', '99.99% uptime'],
    },
  ],
  commonObjections: [
    {
      objection: 'Too expensive',
      response: 'Lower TCO over 5 years due to consolidation',
      evidence: 'IDC study shows 40% cost savings',
    },
  ],
  discoveryQuestions: [
    'What are your current database response times?',
    'How many servers are you running today?',
    'What is your uptime requirement?',
  ],
  competitorComparisons: [
    {
      competitor: 'HPE Superdome Flex',
      ourAdvantage: 'Superior performance per core',
      evidence: 'SPEC benchmarks show 30% better performance',
    },
  ],
  pricing: {
    startingPrice: '$250,000',
    typicalDeal: '$500,000 - $2M',
    pricingModel: 'Perpetual license or subscription',
  },
  resources: {
    datasheets: ['https://ibm.com/power-e1080-datasheet'],
    whitepapers: ['https://ibm.com/power-e1080-whitepaper'],
    videos: ['https://ibm.com/power-e1080-video'],
  },
  tags: ['enterprise', 'mission-critical', 'high-performance'],
  relatedProducts: ['power-e1050', 'flashsystem-9500'],
};

// Mock the product data module
vi.mock('../../data/ibm-products', () => ({
  getProductById: vi.fn((id) => {
    if (id === 'test-product-1') return mockProduct;
    return null;
  }),
  getRelatedProducts: vi.fn(() => [
    {
      id: 'power-e1050',
      name: 'IBM Power E1050',
      category: 'Hardware',
      description: 'Mid-range enterprise server',
    },
    {
      id: 'flashsystem-9500',
      name: 'IBM FlashSystem 9500',
      category: 'Storage',
      description: 'All-flash storage array',
    },
  ]),
}));

describe('ProductDetailPage', () => {
  const renderWithRouter = (productId = 'test-product-1') => {
    return render(
      <MemoryRouter initialEntries={[`/products/${productId}`]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render product name', () => {
      renderWithRouter();
      expect(screen.getByText('IBM Power E1080')).toBeInTheDocument();
    });

    it('should render product category', () => {
      renderWithRouter();
      expect(screen.getByText('Hardware')).toBeInTheDocument();
    });

    it('should render product description', () => {
      renderWithRouter();
      expect(screen.getByText(/Enterprise-class server/i)).toBeInTheDocument();
    });

    it('should render back button', () => {
      renderWithRouter();
      expect(screen.getByText(/back to products/i)).toBeInTheDocument();
    });

    it('should render tab navigation', () => {
      renderWithRouter();
      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByText('Use Cases')).toBeInTheDocument();
      expect(screen.getByText('Pain Points')).toBeInTheDocument();
      expect(screen.getByText('Discovery')).toBeInTheDocument();
    });
  });

  describe('Overview Tab', () => {
    it('should show overview content by default', () => {
      renderWithRouter();
      expect(screen.getByText(/most powerful and scalable server/i)).toBeInTheDocument();
    });

    it('should display key features', () => {
      renderWithRouter();
      expect(screen.getByText(/Up to 240 cores per system/i)).toBeInTheDocument();
      expect(screen.getByText(/Up to 64TB memory/i)).toBeInTheDocument();
      expect(screen.getByText(/PCIe Gen5 support/i)).toBeInTheDocument();
    });

    it('should display technical specs', () => {
      renderWithRouter();
      expect(screen.getByText(/IBM POWER10/i)).toBeInTheDocument();
      expect(screen.getByText(/240/i)).toBeInTheDocument();
      expect(screen.getByText(/64TB/i)).toBeInTheDocument();
    });

    it('should display competitive differentiators', () => {
      renderWithRouter();
      expect(screen.getByText(/Superior performance per core/i)).toBeInTheDocument();
      expect(screen.getByText(/Built-in security features/i)).toBeInTheDocument();
      expect(screen.getByText(/Unmatched reliability/i)).toBeInTheDocument();
    });
  });

  describe('Use Cases Tab', () => {
    it('should switch to use cases tab', async () => {
      renderWithRouter();
      const useCasesTab = screen.getByText('Use Cases');
      
      fireEvent.click(useCasesTab);
      
      await waitFor(() => {
        expect(screen.getByText('Mission-critical applications')).toBeInTheDocument();
      });
    });

    it('should display use case descriptions', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Use Cases'));
      
      await waitFor(() => {
        expect(screen.getByText(/Run SAP HANA, Oracle/i)).toBeInTheDocument();
      });
    });

    it('should display use case benefits', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Use Cases'));
      
      await waitFor(() => {
        expect(screen.getByText(/99.999% uptime/i)).toBeInTheDocument();
        expect(screen.getByText(/Zero downtime maintenance/i)).toBeInTheDocument();
      });
    });

    it('should display multiple use cases', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Use Cases'));
      
      await waitFor(() => {
        expect(screen.getByText('Mission-critical applications')).toBeInTheDocument();
        expect(screen.getByText('AI and analytics')).toBeInTheDocument();
      });
    });
  });

  describe('Pain Points Tab', () => {
    it('should switch to pain points tab', async () => {
      renderWithRouter();
      const painPointsTab = screen.getByText('Pain Points');
      
      fireEvent.click(painPointsTab);
      
      await waitFor(() => {
        expect(screen.getByText('Slow database performance')).toBeInTheDocument();
      });
    });

    it('should display solutions', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Pain Points'));
      
      await waitFor(() => {
        expect(screen.getByText(/2-3x faster database queries/i)).toBeInTheDocument();
      });
    });

    it('should display impact', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Pain Points'));
      
      await waitFor(() => {
        expect(screen.getByText(/Reduced query times from minutes to seconds/i)).toBeInTheDocument();
      });
    });

    it('should display multiple pain points', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Pain Points'));
      
      await waitFor(() => {
        expect(screen.getByText('Slow database performance')).toBeInTheDocument();
        expect(screen.getByText('High infrastructure costs')).toBeInTheDocument();
      });
    });
  });

  describe('Discovery Tab', () => {
    it('should switch to discovery tab', async () => {
      renderWithRouter();
      const discoveryTab = screen.getByText('Discovery');
      
      fireEvent.click(discoveryTab);
      
      await waitFor(() => {
        expect(screen.getByText(/What are your current database response times/i)).toBeInTheDocument();
      });
    });

    it('should display all discovery questions', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Discovery'));
      
      await waitFor(() => {
        expect(screen.getByText(/What are your current database response times/i)).toBeInTheDocument();
        expect(screen.getByText(/How many servers are you running today/i)).toBeInTheDocument();
        expect(screen.getByText(/What is your uptime requirement/i)).toBeInTheDocument();
      });
    });
  });

  describe('Industry Fit Tab', () => {
    it('should switch to industry fit tab', async () => {
      renderWithRouter();
      const industryTab = screen.getByText('Industry Fit');
      
      fireEvent.click(industryTab);
      
      await waitFor(() => {
        expect(screen.getByText('Healthcare')).toBeInTheDocument();
      });
    });

    it('should display fit levels', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Industry Fit'));
      
      await waitFor(() => {
        expect(screen.getByText(/excellent/i)).toBeInTheDocument();
        expect(screen.getByText(/good/i)).toBeInTheDocument();
      });
    });

    it('should display reasons', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Industry Fit'));
      
      await waitFor(() => {
        expect(screen.getByText(/HIPAA compliance built-in/i)).toBeInTheDocument();
        expect(screen.getByText(/PCI-DSS certified/i)).toBeInTheDocument();
      });
    });
  });

  describe('Customer Examples Tab', () => {
    it('should switch to customer examples tab', async () => {
      renderWithRouter();
      const customerTab = screen.getByText('Customer Examples');
      
      fireEvent.click(customerTab);
      
      await waitFor(() => {
        expect(screen.getByText('Major Hospital System')).toBeInTheDocument();
      });
    });

    it('should display challenge', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Customer Examples'));
      
      await waitFor(() => {
        expect(screen.getByText(/Slow Epic EHR response times/i)).toBeInTheDocument();
      });
    });

    it('should display solution', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Customer Examples'));
      
      await waitFor(() => {
        expect(screen.getByText(/Migrated to Power E1080/i)).toBeInTheDocument();
      });
    });

    it('should display results', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Customer Examples'));
      
      await waitFor(() => {
        expect(screen.getByText(/50% faster response times/i)).toBeInTheDocument();
        expect(screen.getByText(/99.99% uptime/i)).toBeInTheDocument();
      });
    });
  });

  describe('Objections Tab', () => {
    it('should switch to objections tab', async () => {
      renderWithRouter();
      const objectionsTab = screen.getByText('Objections');
      
      fireEvent.click(objectionsTab);
      
      await waitFor(() => {
        expect(screen.getByText('Too expensive')).toBeInTheDocument();
      });
    });

    it('should display responses', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Objections'));
      
      await waitFor(() => {
        expect(screen.getByText(/Lower TCO over 5 years/i)).toBeInTheDocument();
      });
    });

    it('should display evidence', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Objections'));
      
      await waitFor(() => {
        expect(screen.getByText(/IDC study shows 40% cost savings/i)).toBeInTheDocument();
      });
    });
  });

  describe('Competitors Tab', () => {
    it('should switch to competitors tab', async () => {
      renderWithRouter();
      const competitorsTab = screen.getByText('Competitors');
      
      fireEvent.click(competitorsTab);
      
      await waitFor(() => {
        expect(screen.getByText('HPE Superdome Flex')).toBeInTheDocument();
      });
    });

    it('should display our advantage', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Competitors'));
      
      await waitFor(() => {
        expect(screen.getByText(/Superior performance per core/i)).toBeInTheDocument();
      });
    });

    it('should display evidence', async () => {
      renderWithRouter();
      fireEvent.click(screen.getByText('Competitors'));
      
      await waitFor(() => {
        expect(screen.getByText(/SPEC benchmarks show 30% better performance/i)).toBeInTheDocument();
      });
    });
  });

  describe('Related Products', () => {
    it('should display related products section', () => {
      renderWithRouter();
      expect(screen.getByText(/related products/i)).toBeInTheDocument();
    });

    it('should display related product names', () => {
      renderWithRouter();
      expect(screen.getByText('IBM Power E1050')).toBeInTheDocument();
      expect(screen.getByText('IBM FlashSystem 9500')).toBeInTheDocument();
    });

    it('should display related product descriptions', () => {
      renderWithRouter();
      expect(screen.getByText('Mid-range enterprise server')).toBeInTheDocument();
      expect(screen.getByText('All-flash storage array')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('should show error when product not found', () => {
      const { getProductById } = require('../../data/ibm-products');
      getProductById.mockReturnValue(null);
      
      renderWithRouter('nonexistent-product');
      
      expect(screen.getByText(/product not found/i)).toBeInTheDocument();
    });

    it('should show back to products link on error', () => {
      const { getProductById } = require('../../data/ibm-products');
      getProductById.mockReturnValue(null);
      
      renderWithRouter('nonexistent-product');
      
      expect(screen.getByText(/back to products/i)).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should navigate back to products', () => {
      renderWithRouter();
      const backButton = screen.getByText(/back to products/i);
      expect(backButton).toHaveAttribute('href', expect.stringContaining('/products'));
    });

    it('should navigate to related products', () => {
      renderWithRouter();
      const relatedLinks = screen.getAllByText(/view details/i);
      expect(relatedLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('should have accessible tab navigation', () => {
      renderWithRouter();
      const tabs = screen.getAllByRole('button');
      expect(tabs.length).toBeGreaterThan(0);
    });

    it('should have accessible links', () => {
      renderWithRouter();
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should have proper heading hierarchy', () => {
      renderWithRouter();
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Responsive Design', () => {
    it('should render on mobile viewport', () => {
      global.innerWidth = 375;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter();
      expect(screen.getByText('IBM Power E1080')).toBeInTheDocument();
    });

    it('should render on tablet viewport', () => {
      global.innerWidth = 768;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter();
      expect(screen.getByText('IBM Power E1080')).toBeInTheDocument();
    });

    it('should render on desktop viewport', () => {
      global.innerWidth = 1920;
      global.dispatchEvent(new Event('resize'));
      
      renderWithRouter();
      expect(screen.getByText('IBM Power E1080')).toBeInTheDocument();
    });
  });
});

// Made with Bob
