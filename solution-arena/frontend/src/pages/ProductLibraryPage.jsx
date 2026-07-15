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
    'Hardware': '💻',
    'Storage': '💾',
    'Cloud': '☁️',
    'Software': '📦',
    'Services': '🤝',
    'AI': '🤖',
    'Security': '🔒'
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader
        title="Product Knowledge Base"
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
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-600">{productStats.totalProducts}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-purple-600">{productStats.totalUseCases}</div>
            <div className="text-sm text-gray-600">Use Cases</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-green-600">{productStats.totalCustomerExamples}</div>
            <div className="text-sm text-gray-600">Customer Examples</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-orange-600">{industries.length - 1}</div>
            <div className="text-sm text-gray-600">Industries</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {allIBMProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[product.category] || 'bg-gray-500'}`}>
                      <span className="mr-1">{categoryIcons[product.category] || '📦'}</span>
                      {product.category}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Subcategory */}
                  <p className="text-sm text-gray-500 mb-3">
                    {product.subcategory}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Differentiators */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Key Differentiators:</p>
                    <ul className="space-y-1">
                      {product.competitiveDifferentiators.slice(0, 3).map((diff, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span className="line-clamp-1">{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                    <span>{product.useCases.length} use cases</span>
                    <span>{product.commonPainPoints.length} pain points</span>
                    <span>{product.industryFit?.length || 0} industries</span>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-4">
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedIndustry('all');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-6 text-center"
                >
                  <div className="text-4xl mb-2">{categoryIcons[category] || '📦'}</div>
                  <div className="font-semibold text-gray-900">{category}</div>
                  <div className="text-sm text-gray-500">{count} products</div>
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
