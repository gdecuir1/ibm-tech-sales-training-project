import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  allIBMProducts, 
  getProductsByCategory, 
  getAllProductTags,
  getAllIndustries,
  productStats 
} from '../data/ibm-products';
import PageHeader from '../components/Primitives/PageHeader';
import SectionHeader from '../components/Primitives/SectionHeader';

const ProductLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allIBMProducts.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  // Get all industries
  const industries = useMemo(() => {
    return ['all', ...getAllIndustries()];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = allIBMProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }

    // Filter by industry
    if (selectedIndustry !== 'all') {
      products = products.filter(p => 
        p.industryFit?.some(fit => fit.industry === selectedIndustry)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.overview.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return products;
  }, [searchQuery, selectedCategory, selectedIndustry]);

  // Category icons
  const categoryIcons = {
    'Hardware': 'HW',
    'Storage': 'ST',
    'Cloud': 'CL',
    'Software': 'SW',
    'Services': 'SV',
    'AI': 'AI',
    'Security': 'SC'
  };

  // Category colors
  const categoryColors = {
    'Hardware': 'bg-blue-500',
    'Storage': 'bg-purple-500',
    'Cloud': 'bg-cyan-500',
    'Software': 'bg-green-500',
    'Services': 'bg-orange-500',
    'AI': 'bg-pink-500',
    'Security': 'bg-red-500'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <PageHeader
        title="Product knowledge base"
        subtitle="Comprehensive IBM product information, use cases, and competitive intelligence"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products, use cases, industries, pain points..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field w-full pl-12"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-ibm-gray-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category-filter" className="label">
              Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select-field"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Industry Filter */}
          <div>
            <label htmlFor="industry-filter" className="label">
              Industry
            </label>
            <select
              id="industry-filter"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="select-field"
            >
              {industries.map(ind => (
                <option key={ind} value={ind}>
                  {ind === 'all' ? 'All Industries' : ind}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory !== 'all' || selectedIndustry !== 'all') && (
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedIndustry('all');
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 font-mono">{productStats.totalProducts}</div>
            <div className="text-sm text-ibm-gray-70">Products</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 font-mono">{productStats.totalUseCases}</div>
            <div className="text-sm text-ibm-gray-70">Use cases</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 font-mono">{productStats.totalCustomerExamples}</div>
            <div className="text-sm text-ibm-gray-70">Customer examples</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 font-mono">{industries.length - 1}</div>
            <div className="text-sm text-ibm-gray-70">Industries</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-ibm-gray-70">
            Showing <span className="font-mono font-semibold">{filteredProducts.length}</span> of <span className="font-mono font-semibold">{allIBMProducts.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="panel hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[product.category] || 'bg-gray-500'}`}>
                      <span className="mr-1 font-mono font-bold">{categoryIcons[product.category] || 'SW'}</span>
                      {product.category}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-semibold text-ibm-gray-100 mb-2">
                    {product.name}
                  </h3>

                  {/* Subcategory */}
                  <p className="text-sm text-ibm-gray-70 mb-3">
                    {product.subcategory}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-ibm-gray-70 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Differentiators */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-ibm-gray-100 mb-2">Key differentiators:</p>
                    <ul className="space-y-1">
                      {product.competitiveDifferentiators.slice(0, 3).map((diff, idx) => (
                        <li key={idx} className="text-xs text-ibm-gray-70 flex items-start">
                          <span className="text-ibm-green mr-1 font-bold">•</span>
                          <span className="line-clamp-1">{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-ibm-gray-70 pt-4 border-t border-ibm-gray-20">
                    <span className="font-mono">{product.useCases.length}</span>
                    <span>use cases</span>
                    <span className="font-mono">{product.commonPainPoints.length}</span>
                    <span>pain points</span>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-4">
                    <span className="text-sm font-medium text-ibm-blue-60 hover:text-ibm-blue-70">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="panel p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-ibm-gray-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-ibm-gray-100">No products found</h3>
            <p className="mt-1 text-sm text-ibm-gray-70">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedIndustry('all');
                }}
                className="btn-primary"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Browse by Category Section */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mt-12">
            <SectionHeader
              title="Browse by Category"
              subtitle="Explore products organized by category"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {Object.entries(productStats.byCategory).map(([category, count]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="panel hover:shadow-lg transition-shadow duration-200 p-6 text-center"
                >
                  <div className="text-4xl font-mono font-bold text-ibm-blue-60 mb-2">{categoryIcons[category] || 'SW'}</div>
                  <div className="font-semibold text-ibm-gray-100">{category}</div>
                  <div className="text-sm text-ibm-gray-70"><span className="font-mono">{count}</span> products</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLibraryPage;

// Made with Bob
