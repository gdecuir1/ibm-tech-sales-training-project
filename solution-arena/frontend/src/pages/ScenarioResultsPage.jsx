import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getScenarioById } from '../data/scenarios/index';
import { getProductById } from '../data/ibm-products/index';
import { saveScenarioProgress } from '../services/storageService';
import PageHeader from '../components/Primitives/PageHeader';

/**
 * ScenarioResultsPage - Comprehensive results and feedback
 * 
 * Shows:
 * - Overall score and breakdown
 * - Phase-by-phase performance
 * - Detailed feedback
 * - Recommendations for improvement
 * - Next steps
 */
export default function ScenarioResultsPage() {
  const { scenarioId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [scenario, setScenario] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetailedFeedback, setShowDetailedFeedback] = useState(false);

  useEffect(() => {
    try {
      const scenarioData = getScenarioById(scenarioId);
      
      if (!scenarioData) {
        navigate('/scenarios');
        return;
      }

      setScenario(scenarioData);

      // Get result from location state or localStorage
      let resultData = location.state?.result;
      
      if (!resultData) {
        // Try to load from localStorage
        const sessionKey = `scenario_result_${scenarioId}`;
        const savedResult = localStorage.getItem(sessionKey);
        if (savedResult) {
          resultData = JSON.parse(savedResult);
        } else {
          // No result found, redirect to scenario
          navigate(`/scenarios/${scenarioId}`);
          return;
        }
      }

      setResult(resultData);

      // Save progress to localStorage
      saveScenarioProgress(scenarioId, {
        completed: true,
        score: resultData.totalScore,
        timestamp: new Date().toISOString(),
        result: resultData
      });

      setLoading(false);
    } catch (err) {
      console.error('Error loading results:', err);
      navigate('/scenarios');
    }
  }, [scenarioId, location.state, navigate]);

  if (loading || !scenario || !result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading results...</p>
        </div>
      </div>
    );
  }

  // Calculate performance level
  const getPerformanceLevel = (score) => {
    if (score >= 90) return { label: 'Exceptional', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { label: 'Excellent', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 70) return { label: 'Good', color: 'text-indigo-600', bg: 'bg-indigo-100' };
    if (score >= 60) return { label: 'Satisfactory', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Needs Improvement', color: 'text-orange-600', bg: 'bg-orange-100' };
  };

  const performance = getPerformanceLevel(result.totalScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Scenario Results"
        subtitle={scenario.title}
        breadcrumbs={[
          { label: 'Scenarios', path: '/scenarios' },
          { label: scenario.title, path: `/scenarios/${scenarioId}` },
          { label: 'Results' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Overall Score Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-block">
              <div className="relative">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - result.totalScore / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-slate-900">
                      {Math.round(result.totalScore)}
                    </div>
                    <div className="text-sm text-slate-600">out of 100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <span className={`inline-block px-6 py-2 ${performance.bg} ${performance.color} text-lg font-bold rounded-full`}>
              {performance.label}
            </span>
          </div>

          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            {result.totalScore >= 80 
              ? "Outstanding performance! You demonstrated strong sales skills and product knowledge."
              : result.totalScore >= 60
              ? "Good effort! You showed solid understanding with room for improvement in some areas."
              : "Keep practicing! Focus on the feedback below to strengthen your skills."}
          </p>
        </div>

        {/* Phase Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-700">Discovery</h3>
              <span className="text-2xl font-mono font-bold text-blue-600">01</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {Math.round(result.phaseScores.discovery)}%
            </div>
            <div className="text-sm text-slate-600">Weight: 40%</div>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${result.phaseScores.discovery}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-700">Objections</h3>
              <span className="text-2xl font-mono font-bold text-orange-600">02</span>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {Math.round(result.phaseScores.objections)}%
            </div>
            <div className="text-sm text-slate-600">Weight: 30%</div>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-orange-600 h-2 rounded-full"
                style={{ width: `${result.phaseScores.objections}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-700">Recommendation</h3>
              <span className="text-2xl font-mono font-bold text-purple-600">03</span>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {Math.round(result.phaseScores.recommendation)}%
            </div>
            <div className="text-sm text-slate-600">Weight: 20%</div>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${result.phaseScores.recommendation}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-700">Business Value</h3>
              <span className="text-2xl font-mono font-bold text-green-600">04</span>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {Math.round(result.phaseScores.businessValue)}%
            </div>
            <div className="text-sm text-slate-600">Weight: 10%</div>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${result.phaseScores.businessValue}%` }}
              />
            </div>
          </div>
        </div>

        {/* Key Strengths & Areas for Improvement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Key Strengths
            </h3>
            <ul className="space-y-3">
              {result.feedback.strengths.map((strength, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 font-bold">•</span>
                  <span className="text-slate-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Areas for Improvement
            </h3>
            <ul className="space-y-3">
              {result.feedback.improvements.map((improvement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">→</span>
                  <span className="text-slate-700">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Feedback Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <button
            onClick={() => setShowDetailedFeedback(!showDetailedFeedback)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-xl font-bold text-slate-900">Detailed Feedback</h3>
            <span className="text-2xl">{showDetailedFeedback ? '−' : '+'}</span>
          </button>

          {showDetailedFeedback && (
            <div className="mt-6 space-y-6">
              {/* Discovery Feedback */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Discovery Phase</h4>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">{result.feedback.discoveryDetails}</p>
                </div>
              </div>

              {/* Objections Feedback */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Objection Handling</h4>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">{result.feedback.objectionsDetails}</p>
                </div>
              </div>

              {/* Recommendation Feedback */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Product Recommendation</h4>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700">{result.feedback.recommendationDetails}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Products Review */}
        {result.selectedProducts && result.selectedProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Your Product Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {result.selectedProducts.map(productId => {
                const product = getProductById(productId);
                if (!product) return null;
                
                return (
                  <div key={productId} className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-slate-600 mb-3">{product.tagline}</p>
                    <button
                      onClick={() => navigate(`/products/${productId}`)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      View Product Details →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3 font-mono font-bold text-blue-600">↻</div>
              <h4 className="font-bold text-slate-900 mb-2">Try Again</h4>
              <p className="text-sm text-slate-600 mb-4">
                Practice makes perfect. Retry this scenario to improve your score.
              </p>
              <button
                onClick={() => navigate(`/scenarios/${scenarioId}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Retry Scenario
              </button>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3 font-mono font-bold text-indigo-600">≡</div>
              <h4 className="font-bold text-slate-900 mb-2">More Scenarios</h4>
              <p className="text-sm text-slate-600 mb-4">
                Explore other scenarios to broaden your skills.
              </p>
              <button
                onClick={() => navigate('/scenarios')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
              >
                Browse Scenarios
              </button>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3 font-mono font-bold text-purple-600">▦</div>
              <h4 className="font-bold text-slate-900 mb-2">View Dashboard</h4>
              <p className="text-sm text-slate-600 mb-4">
                Track your progress and see your overall performance.
              </p>
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Share Results */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            Completed on {new Date(result.completedAt).toLocaleDateString()} at{' '}
            {new Date(result.completedAt).toLocaleTimeString()}
          </p>
          <button
            onClick={() => {
              const text = `I scored ${Math.round(result.totalScore)}% on "${scenario.title}" in IBM Tech Sales Training!`;
              if (navigator.share) {
                navigator.share({ text });
              } else {
                navigator.clipboard.writeText(text);
                alert('Score copied to clipboard!');
              }
            }}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Share Your Score
          </button>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
