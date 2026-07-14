import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const API_BASE = '/api'

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
      const [scenarioRes, productsRes] = await Promise.all([
        fetch(`${API_BASE}/scenario/random`),
        fetch(`${API_BASE}/products`)
      ])

      if (!scenarioRes.ok || !productsRes.ok) {
        throw new Error('Failed to load data')
      }

      const scenarioData = await scenarioRes.json()
      const productsData = await productsRes.json()

      setCurrentScenario(scenarioData)
      setAvailableProducts(productsData)
    } catch (err) {
      setError(err.message)
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
      alert('Select at least one IBM product before continuing.')
      return
    }

    if (!justification.trim()) {
      alert('Provide justification for your product selection.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE}/objections/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: currentScenario.id,
          selectedProducts: selectedProducts
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate objections')
      }

      const data = await response.json()
      setObjections(data.objections)
      navigate('/objections')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading && !currentScenario) {
    return (
      <div className="min-h-screen bg-console-bg flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-console-text-dim/20 border-t-ibm-blue rounded-full animate-spin mb-4" />
          <p className="text-console-text-dim font-mono">Loading scenario...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-console-bg p-6">
        <div className="max-w-2xl mx-auto">
          <div className="console-card border-2 border-red-500/30 bg-red-500/10">
            <p className="text-red-400 mb-4"><strong>Error:</strong> {error}</p>
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
    <div className="min-h-screen bg-console-bg">
      <header className="bg-console-surface border-b border-console-text-dim/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-ibm-blue rounded-full" />
            <h1 className="text-lg font-semibold tracking-console text-console-text">
              CLASSIC MODE
            </h1>
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
          <div className="console-card mb-6">
            <div className="border-l-4 border-ibm-blue pl-4 mb-6">
              <h2 className="text-2xl font-semibold tracking-console text-console-text mb-2">
                Scenario Analysis
              </h2>
              <p className="text-console-text-dim">
                Review the company context and recommend IBM solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Company</div>
                <div className="text-sm font-semibold text-console-text">{currentScenario.company}</div>
              </div>
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Industry</div>
                <div className="text-sm font-semibold text-console-text">{currentScenario.industry}</div>
              </div>
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Size</div>
                <div className="text-sm font-semibold text-console-text">{currentScenario.size}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-mono text-console-text-dim uppercase tracking-wide mb-2">
                  Pain Points
                </h3>
                <ul className="space-y-2">
                  {currentScenario.pain_points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-console-text/90">
                      <span className="text-ibm-blue mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono text-console-text-dim uppercase tracking-wide mb-2">
                  Current Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentScenario.tech_stack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-console-surface-light border border-console-text-dim/20 rounded-md text-sm text-console-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-console-text-dim uppercase tracking-wide mb-2">
                  Business Objectives
                </h3>
                <ul className="space-y-2">
                  {currentScenario.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start gap-2 text-console-text/90">
                      <span className="text-ibm-green mt-1">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Selection */}
          <div className="console-card mb-6">
            <h2 className="text-xl font-semibold tracking-console text-console-text mb-4 border-l-4 border-ibm-purple pl-4">
              Select IBM Products
            </h2>
            <p className="text-console-text-dim mb-6">
              Choose products that address the company's pain points and objectives.
            </p>

            <div className="space-y-3 mb-6">
              {availableProducts.map((product) => (
                <motion.div
                  key={product.name}
                  className={`option-card ${selectedProducts.includes(product.name) ? 'selected' : ''}`}
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
                      className="mt-1 w-5 h-5 rounded border-2 border-console-text-dim/30 
                               checked:bg-ibm-blue checked:border-ibm-blue cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-console-text">{product.name}</div>
                      <div className="text-sm text-console-text-dim">{product.category}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {selectedProducts.length > 0 && (
              <motion.div
                className="p-3 bg-ibm-blue/10 border border-ibm-blue/30 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-ibm-blue font-semibold text-sm">
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
          <div className="console-card mb-6">
            <h2 className="text-xl font-semibold tracking-console text-console-text mb-4 border-l-4 border-ibm-green pl-4">
              Justify Your Selection
            </h2>
            <p className="text-console-text-dim mb-4">
              Explain how your selected products address the pain points and objectives.
            </p>

            <textarea
              className="w-full p-4 bg-console-surface-light border-2 border-console-text-dim/20 
                       rounded-lg text-console-text placeholder-console-text-dim/50
                       focus:border-ibm-blue focus:ring-2 focus:ring-ibm-blue focus:ring-offset-2 
                       focus:ring-offset-console-bg transition-all min-h-[200px]"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Explain how your selected IBM products address the company's pain points and objectives. Focus on business value and ROI..."
            />
            <div className="mt-2 text-xs font-mono text-console-text-dim">
              Word count: {justification.trim().split(/\s+/).filter(w => w).length}
            </div>
          </div>

          {/* Actions */}
          {error && (
            <div className="console-card border-2 border-red-500/30 bg-red-500/10 mb-6">
              <p className="text-red-400"><strong>Error:</strong> {error}</p>
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
