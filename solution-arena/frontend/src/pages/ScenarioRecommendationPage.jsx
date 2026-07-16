import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getScenarioById } from '../data/scenarios/index';
import { getProductById } from '../data/ibm-products/index';
import { submitRecommendation } from '../services/scenarioEngine';
import PageHeader from '../components/Primitives/PageHeader';

/**
 * ScenarioRecommendationPage - Product recommendation and presentation phase
 * 
 * Users select IBM products and craft their recommendation pitch
 */
export default function ScenarioRecommendationPage() {
  const { scenarioId } = useParams();
  const navigate = useNavigate();
  
  // State management
  const [scenario, setScenario] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [recommendation, setRecommendation] = useState('');
  const [businessValue, setBusinessValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(null);

  // Load scenario
  useEffect(() => {
    try {
      const scenarioData = getScenarioById(scenarioId);
      
      if (!scenarioData) {
        setError('Scenario not found');
        setLoading(false);
        return;
      }

      setScenario(scenarioData);
      setLoading(false);
    } catch (err) {
      console.error('Error loading scenario:', err);
      setError('Failed to load scenario');
      setLoading(false);
    }
  }, [scenarioId]);

  // Toggle product selection
  const toggleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      if (selectedProducts.length >= 3) {
        alert('You can select up to 3 products maximum.');
        return;
      }
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // Handle submission
  const handleSubmit = () => {
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to recommend.');
      return;
    }

    if (!recommendation.trim()) {
      alert('Please provide your recommendation pitch.');
      return;
    }

    if (!businessValue.trim()) {
      alert('Please articulate the business value.');
      return;
    }

    // Get session from localStorage
    const sessionKey = `scenario_session_${scenarioId}`;
    const sessionData = localStorage.getItem(sessionKey);
    
    if (!sessionData) {
      alert('Session not found. Please restart the scenario.');
      navigate(`/scenarios/${scenarioId}`);
      return;
    }

    const session = JSON.parse(sessionData);

    // Submit recommendation
    const result = submitRecommendation(
      session.sessionId,
      selectedProducts,
      recommendation,
      businessValue
    );

    // Navigate to results
    navigate(`/scenarios/${scenarioId}/results`, {
      state: { result, session }
    });
  };

  // Handle exit
  const handleExit = () => {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigate('/scenarios');
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading scenario...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error || !scenario) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Scenario Not Found</h2>
          <p className="text-slate-600 mb-6">{error || 'The requested scenario could not be loaded.'}</p>
          <button
            onClick={() => navigate('/scenarios')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Scenarios
          </button>
        </div>
      </div>
    );
  }

  // Get available products
  const availableProducts = scenario.recommendationPhase.suggestedProducts.map(productId => {
    const product = getProductById(productId);
    return product;
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Product Recommendation"
        subtitle={scenario.title}
        breadcrumbs={[
          { label: 'Scenarios', path: '/scenarios' },
          { label: scenario.title, path: `/scenarios/${scenarioId}` },
          { label: 'Recommendation' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎯</span>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Your Mission</h3>
              <p className="text-blue-800 mb-2">
                Based on your discovery and objection handling, select the best IBM products 
                and craft a compelling recommendation that addresses the customer's needs.
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Select 1-3 products that best fit the customer's requirements</li>
                <li>• Explain why these products are the right choice</li>
                <li>• Articulate clear business value and ROI</li>
                <li>• Address the customer's pain points directly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Select Products ({selectedProducts.length}/3)
              </h3>
              
              <div className="space-y-4">
                {availableProducts.map(product => (
                  <div
                    key={product.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedProducts.includes(product.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => toggleProductSelection(product.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => {}}
                          className="w-5 h-5 text-blue-600 rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">{product.name}</h4>
                        <p className="text-sm text-slate-600 mb-2">{product.tagline}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {product.categories.slice(0, 3).map(cat => (
                            <span
                              key={cat}
                              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowProductDetails(product.id);
                          }}
                          className="text-sm text-blue-600 hover:text-blue-700"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation Pitch */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Your Recommendation Pitch
              </h3>
              <textarea
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
                placeholder="Explain why you're recommending these products. How do they address the customer's specific needs and challenges? What makes this the right solution?"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
                rows={8}
              />
              <p className="text-sm text-slate-500">
                Tip: Reference specific pain points from discovery and how your solution addresses them.
              </p>
            </div>

            {/* Business Value */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Business Value & ROI
              </h3>
              <textarea
                value={businessValue}
                onChange={(e) => setBusinessValue(e.target.value)}
                placeholder="Articulate the business value. What are the expected outcomes? How will this impact their bottom line? What's the ROI?"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
                rows={6}
              />
              <p className="text-sm text-slate-500">
                Tip: Use specific metrics, timeframes, and quantifiable benefits.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Customer Context */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Customer Context</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Industry</h4>
                  <p className="text-sm text-slate-600">{scenario.industry}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Company Size</h4>
                  <p className="text-sm text-slate-600">{scenario.companySize}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Key Challenges</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {scenario.discovery.questions.slice(0, 3).map((q, idx) => (
                      <li key={idx}>• {q.category}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Success Criteria</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {scenario.recommendationPhase.successCriteria.slice(0, 3).map((criteria, idx) => (
                      <li key={idx}>• {criteria}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSubmit}
                disabled={selectedProducts.length === 0 || !recommendation.trim() || !businessValue.trim()}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Submit Recommendation
              </button>
              <button
                onClick={handleExit}
                className="w-full px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Exit Scenario
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {showProductDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {(() => {
              const product = getProductById(showProductDetails);
              if (!product) return null;
              
              return (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
                    <button
                      onClick={() => setShowProductDetails(null)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <span className="text-2xl">×</span>
                    </button>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{product.tagline}</p>
                  <p className="text-slate-700 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-slate-900 mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {product.keyFeatures.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-slate-900 mb-2">Use Cases</h3>
                    <div className="space-y-2">
                      {product.useCases.slice(0, 3).map((useCase, idx) => (
                        <div key={idx} className="bg-slate-50 rounded p-3">
                          <p className="text-sm font-medium text-slate-900">{useCase.title}</p>
                          <p className="text-xs text-slate-600 mt-1">{useCase.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowProductDetails(null)}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

// Made with Bob
