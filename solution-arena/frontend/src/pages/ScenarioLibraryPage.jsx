import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  allScenarios,
  getScenariosByIndustry,
  getScenariosByDifficulty,
  getScenariosByProduct,
  searchScenarios,
  getScenarioStats
} from '../data/scenarios/index';
import PageHeader from '../components/Primitives/PageHeader';
import SectionHeader from '../components/Primitives/SectionHeader';

/**
 * Scenario Library Page
 * Browse and select training scenarios with filtering and search
 */
export default function ScenarioLibraryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [sortBy, setSortBy] = useState('title'); // title, difficulty, time

  // Get scenario statistics
  const stats = useMemo(() => getScenarioStats(), []);

  // Filter and search scenarios
  const filteredScenarios = useMemo(() => {
    let scenarios = allScenarios;

    // Apply search
    if (searchQuery.trim()) {
      scenarios = searchScenarios(searchQuery);
    }

    // Apply industry filter
    if (selectedIndustry !== 'all') {
      scenarios = scenarios.filter(s => 
        s.customerProfile.industry.toLowerCase() === selectedIndustry.toLowerCase()
      );
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      scenarios = scenarios.filter(s => 
        s.metadata.difficulty === selectedDifficulty
      );
    }

    // Apply product filter
    if (selectedProduct !== 'all') {
      scenarios = scenarios.filter(s => 
        s.metadata.products.includes(selectedProduct)
      );
    }

    // Apply sorting
    scenarios = [...scenarios].sort((a, b) => {
      switch (sortBy) {
        case 'difficulty':
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.metadata.difficulty] - difficultyOrder[b.metadata.difficulty];
        case 'time':
          return a.metadata.estimatedTime - b.metadata.estimatedTime;
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return scenarios;
  }, [searchQuery, selectedIndustry, selectedDifficulty, selectedProduct, sortBy]);

  // Get difficulty badge color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Handle scenario selection
  const handleScenarioClick = (scenarioId) => {
    navigate(`/scenarios/${scenarioId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        title="Training scenarios"
        description="Practice realistic sales scenarios to master IBM solutions"
        showBack={true}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 mb-1 font-mono">
              {stats.totalScenarios}
            </div>
            <div className="text-sm text-ibm-gray-70">Total scenarios</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 mb-1 font-mono">
              {stats.industries.length}
            </div>
            <div className="text-sm text-ibm-gray-70">Industries</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 mb-1 font-mono">
              {stats.products.length}
            </div>
            <div className="text-sm text-ibm-gray-70">Products covered</div>
          </div>
          <div className="panel p-6">
            <div className="text-3xl font-semibold text-ibm-blue-60 mb-1 font-mono">
              {stats.averageEstimatedTime}m
            </div>
            <div className="text-sm text-ibm-gray-70">Avg. time</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="panel p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label htmlFor="search" className="label">
                Search scenarios
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by title, industry, or product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Industry Filter */}
            <div>
              <label htmlFor="industry" className="label">
                Industry
              </label>
              <select
                id="industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="select-field"
              >
                <option value="all">All industries</option>
                {stats.industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label htmlFor="difficulty" className="label">
                Difficulty
              </label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="select-field"
              >
                <option value="all">All levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label htmlFor="sort" className="label">
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select-field"
              >
                <option value="title">Title (A-Z)</option>
                <option value="difficulty">Difficulty</option>
                <option value="time">Time (shortest)</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedIndustry !== 'all' || selectedDifficulty !== 'all' || selectedProduct !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-ibm-gray-70">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 bg-ibm-blue-10 text-ibm-blue-60 text-sm font-mono">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-ibm-blue-60 hover:text-ibm-blue-70 font-bold"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedIndustry !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 bg-ibm-blue-10 text-ibm-blue-60 text-sm">
                  {selectedIndustry}
                  <button
                    onClick={() => setSelectedIndustry('all')}
                    className="ml-2 text-ibm-blue-60 hover:text-ibm-blue-70 font-bold"
                    aria-label="Clear industry filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedDifficulty !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 bg-ibm-blue-10 text-ibm-blue-60 text-sm">
                  {selectedDifficulty}
                  <button
                    onClick={() => setSelectedDifficulty('all')}
                    className="ml-2 text-ibm-blue-60 hover:text-ibm-blue-70 font-bold"
                    aria-label="Clear difficulty filter"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedDifficulty('all');
                  setSelectedProduct('all');
                }}
                className="text-sm text-ibm-blue-60 hover:text-ibm-blue-70 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <SectionHeader
            title={`${filteredScenarios.length} scenario${filteredScenarios.length !== 1 ? 's' : ''} found`}
            subtitle={filteredScenarios.length === 0 ? 'Try adjusting your filters' : 'Click a scenario to begin training'}
          />
        </div>

        {/* Scenario Grid */}
        {filteredScenarios.length === 0 ? (
          <div className="panel p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-ibm-gray-100 mb-2">
              No scenarios found
            </h3>
            <p className="text-ibm-gray-70 mb-6">
              Try adjusting your search or filters to find scenarios
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedIndustry('all');
                setSelectedDifficulty('all');
                setSelectedProduct('all');
              }}
              className="btn-primary"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => (
              <div
                key={scenario.id}
                onClick={() => handleScenarioClick(scenario.id)}
                className="panel hover:border-ibm-blue-60 transition-all cursor-pointer group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-ibm-gray-20">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`status-badge ${
                      scenario.metadata.difficulty === 'beginner' ? 'success' :
                      scenario.metadata.difficulty === 'intermediate' ? 'info' :
                      'warning'
                    }`}>
                      {scenario.metadata.difficulty}
                    </span>
                    <span className="text-sm text-ibm-gray-70 font-mono">
                      {scenario.metadata.estimatedTime}m
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ibm-gray-100 mb-2 group-hover:text-ibm-blue-60 transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-ibm-gray-70 line-clamp-2">
                    {scenario.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Customer Info */}
                  <div>
                    <div className="text-xs font-medium text-ibm-gray-50 uppercase tracking-wide mb-1">
                      Customer
                    </div>
                    <div className="text-sm text-ibm-gray-100 font-medium">
                      {scenario.customerProfile.company}
                    </div>
                    <div className="text-xs text-ibm-gray-70">
                      {scenario.customerProfile.industry} • {scenario.customerProfile.size}
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <div className="text-xs font-medium text-ibm-gray-50 uppercase tracking-wide mb-2">
                      Products
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {scenario.metadata.products.slice(0, 3).map((product, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-ibm-blue-10 text-ibm-blue-60 text-xs font-mono"
                        >
                          {product}
                        </span>
                      ))}
                      {scenario.metadata.products.length > 3 && (
                        <span className="px-2 py-1 bg-ibm-gray-10 text-ibm-gray-70 text-xs font-mono">
                          +{scenario.metadata.products.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="text-xs font-medium text-ibm-gray-50 uppercase tracking-wide mb-2">
                      Skills practiced
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {scenario.metadata.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-ibm-gray-10 text-ibm-gray-70 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-ibm-gray-10 border-t border-ibm-gray-20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ibm-gray-70 font-mono">
                      {scenario.discoveryPhase.questions.length} questions • {scenario.objectionPhase.objections.length} objections
                    </span>
                    <span className="text-ibm-blue-60 font-medium group-hover:text-ibm-blue-70">
                      Start →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 panel p-8 bg-ibm-blue-10">
          <h3 className="text-xl font-semibold text-ibm-gray-100 mb-6">
            How training scenarios work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-ibm-gray-100 mb-2">Discovery phase</h4>
              <p className="text-sm text-ibm-gray-70 leading-relaxed">
                Ask questions to understand the customer's business challenges, technical environment, and strategic goals.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-ibm-gray-100 mb-2">Objection handling</h4>
              <p className="text-sm text-ibm-gray-70 leading-relaxed">
                Address stakeholder concerns with data-driven responses that acknowledge their perspective and build confidence.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎁</div>
              <h4 className="font-semibold text-ibm-gray-100 mb-2">Recommendation</h4>
              <p className="text-sm text-ibm-gray-70 leading-relaxed">
                Propose the right IBM solutions with clear business value, ROI, and a compelling business case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob