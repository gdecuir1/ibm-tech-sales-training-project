import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getRandomScenario, getProducts, generateObjections } from '../data/scenarios'

function ScenarioPage({ 
  currentScenario, 
  setCurrentScenario,
  selectedProducts,
  setSelectedProducts,
  justification,
  setJustification,
  setObjections
}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [availableProducts, setAvailableProducts] = useState([])

  useEffect(() => {
    loadScenarioAndProducts()
  }, [])

  const loadScenarioAndProducts = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate slight delay for UX consistency
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const scenarioData = getRandomScenario()
      const productsData = getProducts()
      
      setCurrentScenario(scenarioData)
      setAvailableProducts(productsData)
    } catch (err) {
      console.error('Error loading scenario:', err)
      setError('Failed to load scenario data')
    } finally {
      setLoading(false)
    }
  }

  const handleProductToggle = (productName) => {
    setSelectedProducts(prev => {
      if (prev.includes(productName)) {
        return prev.filter(p => p !== productName)
      } else {
        return [...prev, productName]
      }
    })
  }

  const handleSubmit = async () => {
    if (selectedProducts.length === 0) {
      setError('Please select at least one IBM product before continuing.')
      return
    }

    if (!justification.trim()) {
      setError('Please provide justification for your product selection.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Simulate slight delay for UX consistency
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const objections = generateObjections(currentScenario.id)
      setObjections(objections)
      navigate('/objections')
    } catch (err) {
      console.error('Error generating objections:', err)
      setError('Failed to generate objections. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading && !currentScenario) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-ibm-gray-20 border-t-ibm-blue-60 rounded-full animate-spin mb-4" />
          <p className="text-ibm-gray-70 font-mono">Loading scenario...</p>
        </div>
      </div>
    )
  }

  if (error && !currentScenario) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="p-6 border-2 border-ibm-red/30 bg-ibm-red/10 rounded">
            <p className="text-ibm-red mb-4"><strong>Error:</strong> {error}</p>
            <button className="btn-primary" onClick={loadScenarioAndProducts}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentScenario) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-ibm-gray-10 border-b border-ibm-gray-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ibm-blue-60 rounded-full" />
              <h1 className="text-lg font-semibold text-ibm-gray-100">
                CLASSIC MODE
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 text-sm font-medium text-ibm-gray-70 hover:text-ibm-gray-100 hover:bg-ibm-gray-20 rounded transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-ibm-gray-70 hover:text-ibm-gray-100 hover:bg-ibm-gray-20 rounded transition-colors"
              >
                Exit to Home
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scenario Overview */}
          <div className="panel p-6 mb-6">
            <div className="border-l-4 border-ibm-blue-60 pl-4 mb-6">
              <h2 className="text-2xl font-semibold text-ibm-gray-100 mb-2">
                Scenario Analysis
              </h2>
              <p className="text-ibm-gray-70">
                Review the company context and recommend IBM solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-ibm-gray-10 rounded">
                <div className="text-xs font-mono text-ibm-gray-70 mb-1">Company</div>
                <div className="text-sm font-semibold text-ibm-gray-100">{currentScenario.company}</div>
              </div>
              <div className="p-3 bg-ibm-gray-10 rounded">
                <div className="text-xs font-mono text-ibm-gray-70 mb-1">Industry</div>
                <div className="text-sm font-semibold text-ibm-gray-100">{currentScenario.industry}</div>
              </div>
              <div className="p-3 bg-ibm-gray-10 rounded">
                <div className="text-xs font-mono text-ibm-gray-70 mb-1">Size</div>
                <div className="text-sm font-semibold text-ibm-gray-100">{currentScenario.size}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-mono text-ibm-gray-70 uppercase tracking-wide mb-2">
                  Pain Points
                </h3>
                <ul className="space-y-2">
                  {currentScenario.pain_points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-ibm-gray-90">
                      <span className="text-ibm-blue-60 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono text-ibm-gray-70 uppercase tracking-wide mb-2">
                  Current Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentScenario.tech_stack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-ibm-gray-10 border border-ibm-gray-20 rounded-md text-sm text-ibm-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-ibm-gray-70 uppercase tracking-wide mb-2">
                  Business Objectives
                </h3>
                <ul className="space-y-2">
                  {currentScenario.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start gap-2 text-ibm-gray-90">
                      <span className="text-ibm-green mt-1">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Selection */}
          <div className="panel p-6 mb-6">
            <h2 className="text-xl font-semibold text-ibm-gray-100 mb-4 border-l-4 border-ibm-blue-60 pl-4">
              Select IBM Products
            </h2>
            <p className="text-ibm-gray-70 mb-6">
              Choose products that address the company's pain points and objectives.
            </p>

            <div className="space-y-3 mb-6">
              {availableProducts.map((product) => (
                <motion.div
                  key={product.name}
                  className={`p-4 border rounded cursor-pointer transition-all ${
                    selectedProducts.includes(product.name)
                      ? 'border-ibm-blue-60 bg-ibm-blue-60/5'
                      : 'border-ibm-gray-20 hover:border-ibm-gray-30 hover:bg-ibm-gray-10'
                  }`}
                  onClick={() => handleProductToggle(product.name)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.name)}
                      onChange={() => handleProductToggle(product.name)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-ibm-gray-100">{product.name}</div>
                      <div className="text-sm text-ibm-gray-70">{product.category}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {selectedProducts.length > 0 && (
              <motion.div
                className="p-3 bg-ibm-blue-60/10 border border-ibm-blue-60/30 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-ibm-blue-60 font-semibold text-sm">
                    {selectedProducts.length} selected
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProducts.map((product) => (
                    <span key={product} className="px-2 py-1 bg-ibm-green/20 text-ibm-green border border-ibm-green/30 rounded text-xs font-mono">
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Justification */}
          <div className="panel p-6 mb-6">
            <h2 className="text-xl font-semibold text-ibm-gray-100 mb-4 border-l-4 border-ibm-green pl-4">
              Justify Your Selection
            </h2>
            <p className="text-ibm-gray-70 mb-4">
              Explain how your selected products address the pain points and objectives.
            </p>

            <textarea
              className="input-field min-h-[200px] text-ibm-gray-100 placeholder-ibm-gray-50"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Explain how your selected IBM products address the company's pain points and objectives. Focus on business value and ROI..."
            />
            <div className="mt-2 text-xs font-mono text-ibm-gray-70">
              Word count: {justification.trim().split(/\s+/).filter(w => w).length}
            </div>
          </div>

          {/* Actions */}
          {error && (
            <div className="p-4 border-2 border-ibm-red/30 bg-ibm-red/10 rounded mb-6">
              <p className="text-ibm-red"><strong>Error:</strong> {error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button 
              className="btn-primary flex-1" 
              onClick={handleSubmit}
              disabled={loading || selectedProducts.length === 0 || !justification.trim()}
            >
              {loading ? 'Processing...' : 'Submit Solutions'}
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ScenarioPage

// Made with Bob
