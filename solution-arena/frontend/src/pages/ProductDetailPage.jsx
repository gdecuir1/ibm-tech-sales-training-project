import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  getProductById, 
  getCrossSellProducts,
  getUseCasesByIndustry 
} from '../data/ibm-products';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const product = useMemo(() => getProductById(productId), [productId]);
  const relatedProducts = useMemo(() => getCrossSellProducts(productId), [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            ← Back to Product Library
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'OV' },
    { id: 'customers', label: 'Ideal Customers', icon: 'IC' },
    { id: 'painpoints', label: 'Pain Points', icon: 'PP' },
    { id: 'usecases', label: 'Use Cases', icon: 'UC' },
    { id: 'discovery', label: 'Discovery Questions', icon: 'DQ' },
    { id: 'objections', label: 'Objection Handling', icon: 'OH' },
    { id: 'competitive', label: 'Competitive Intel', icon: 'CI' },
    { id: 'specs', label: 'Technical Specs', icon: 'TS' },
  ];

  const categoryColors = {
    'Hardware': 'bg-blue-500',
    'Storage': 'bg-purple-500',
    'Cloud': 'bg-cyan-500',
    'Software': 'bg-green-500',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/products')}
            className="text-sm text-blue-600 hover:text-blue-800 mb-4 flex items-center"
          >
            ← Back to Product Library
          </button>

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[product.category] || 'bg-gray-500'}`}>
                  {product.category}
                </span>
                <span className="text-sm text-gray-500">{product.subcategory}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              
              {/* Elevator Pitch */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-gray-700 italic">"{product.elevatorPitch}"</p>
              </div>

              {/* Key Differentiators */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Differentiators:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.competitiveDifferentiators.slice(0, 6).map((diff, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5 font-bold">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="ml-6 flex flex-col gap-2">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Start Training Scenario
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Add to Comparison
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Download Quick Reference
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{product.useCases.length}</div>
              <div className="text-xs text-gray-600">Use Cases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{product.commonPainPoints.length}</div>
              <div className="text-xs text-gray-600">Pain Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{product.industryFit?.length || 0}</div>
              <div className="text-xs text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{product.customerExamples?.length || 0}</div>
              <div className="text-xs text-gray-600">Customer Examples</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2 font-mono font-bold text-ibm-blue-60">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h2>
              <p className="text-gray-700 mb-4">{product.overview}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">When to Recommend</h3>
              <ul className="space-y-2">
                {product.whenToRecommend.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-green-500 mr-2 mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">When NOT to Recommend</h3>
              <ul className="space-y-2">
                {product.whenNotToRecommend.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-red-500 mr-2 mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Benefits */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Business Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.businessBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 font-bold">•</span>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Benefits */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.technicalBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-0.5 font-bold">•</span>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ideal Customers Tab */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            {product.idealCustomers.map((customer, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{customer.profile}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="space-y-1">
                    {customer.characteristics.map((char, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {customer.industries && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {customer.industries.map((ind, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {customer.typicalBudget && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Typical Budget:</span> {customer.typicalBudget}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pain Points Tab */}
        {activeTab === 'painpoints' && (
          <div className="space-y-6">
            {product.commonPainPoints.map((pain, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{pain.painPoint}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      pain.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      pain.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pain.severity}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {pain.frequency}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Business Impact:</h4>
                    <p className="text-sm text-gray-600">{pain.businessImpact}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Technical Cause:</h4>
                    <p className="text-sm text-gray-600">{pain.technicalCause}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3">
                    <h4 className="text-sm font-semibold text-green-900 mb-1">How {product.name} Helps:</h4>
                    <p className="text-sm text-green-800">{pain.howProductHelps}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'usecases' && (
          <div className="space-y-6">
            {product.useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.useCase}</h3>
                    {useCase.industry && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {useCase.industry}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{useCase.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded p-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Typical Configuration:</h4>
                  <p className="text-sm text-gray-600">{useCase.typicalConfig}</p>
                </div>

                {useCase.customerExample && (
                  <div className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold">Customer Example:</span> {useCase.customerExample}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Discovery Questions Tab */}
        {activeTab === 'discovery' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-900">
                These strategic questions help uncover customer needs and position {product.name} effectively.
              </p>
            </div>

            {product.discoveryQuestions.map((q, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{q.question}</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Purpose:</h4>
                    <p className="text-sm text-gray-600">{q.purpose}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Ideal Response:</h4>
                    <p className="text-sm text-gray-600 italic">"{q.idealAnswer}"</p>
                  </div>

                  {q.followUp && q.followUp.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Follow-up Questions:</h4>
                      <ul className="space-y-1">
                        {q.followUp.map((follow, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">→</span>
                            <span>{follow}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Objections Tab */}
        {activeTab === 'objections' && (
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
              <p className="text-sm text-orange-900">
                Common objections and proven responses to help you win deals.
              </p>
            </div>

            {product.commonObjections.map((obj, idx) => {
              const response = product.objectionResponses?.find(r => r.objection === obj.objection);
              return (
                <div key={idx} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">{obj.objection}</h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {obj.stakeholder}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        obj.frequency === 'very common' ? 'bg-red-100 text-red-800' :
                        obj.frequency === 'common' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {obj.frequency}
                      </span>
                    </div>
                  </div>

                  {response && (
                    <>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 className="text-sm font-semibold text-green-900 mb-2">Recommended Response:</h4>
                        <p className="text-sm text-green-800">{response.response}</p>
                      </div>

                      {response.supportingData && response.supportingData.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Supporting Data:</h4>
                          <ul className="space-y-1">
                            {response.supportingData.map((data, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-blue-500 mr-2 font-bold">•</span>
                                <span>{data}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {response.nextSteps && response.nextSteps.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Next Steps:</h4>
                          <ul className="space-y-1">
                            {response.nextSteps.map((step, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="text-green-500 mr-2">→</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Competitive Tab */}
        {activeTab === 'competitive' && (
          <div className="space-y-6">
            {product.competitors && product.competitors.map((comp, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {comp.vendor} - {comp.product}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Their Strengths:</h4>
                    <ul className="space-y-1">
                      {comp.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Their Weaknesses:</h4>
                    <ul className="space-y-1">
                      {comp.weaknesses.map((weakness, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2 font-bold">•</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Win Strategy:</h4>
                  <p className="text-sm text-blue-800">{comp.winStrategy}</p>
                </div>
              </div>
            ))}

            {/* Competitive Advantages */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Competitive Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.competitiveAdvantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5 font-bold">•</span>
                    <span className="text-sm text-gray-700">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technical Specs Tab */}
        {activeTab === 'specs' && (
          <div className="space-y-6">
            {/* Specifications */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Technical Specifications</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="px-6 py-4 flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{spec.spec}</span>
                    <span className="text-sm text-gray-600">{spec.value} {spec.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            {product.integrations && product.integrations.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.integrations.map((integration, idx) => (
                    <div key={idx} className="border border-gray-200 rounded p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{integration.product}</span>
                        {integration.certified && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Certified
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>Type: {integration.type}</div>
                        <div>Protocol: {integration.protocol}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map(relProd => (
                <Link
                  key={relProd.id}
                  to={`/products/${relProd.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{relProd.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{relProd.description}</p>
                  <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

// Made with Bob
