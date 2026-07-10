import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
      alert('Please select at least one IBM product')
      return
    }

    if (!justification.trim()) {
      alert('Please provide justification for your product selection')
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
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p style={{ marginTop: '1rem' }}>Loading scenario...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
        <button className="btn btn-primary" onClick={loadScenarioAndProducts}>
          Try Again
        </button>
      </div>
    )
  }

  if (!currentScenario) {
    return null
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Scenario Analysis</h1>
          <p className="card-subtitle">Review the company context and recommend IBM solutions</p>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Company</div>
            <div className="info-value">{currentScenario.company}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Industry</div>
            <div className="info-value">{currentScenario.industry}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Size</div>
            <div className="info-value">{currentScenario.size}</div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 className="section-title">Pain Points</h3>
          <ul>
            {currentScenario.pain_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 className="section-title">Current Tech Stack</h3>
          <div>
            {currentScenario.tech_stack.map((tech, index) => (
              <span key={index} className="tag tag-blue">{tech}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 className="section-title">Business Objectives</h3>
          <ul>
            {currentScenario.objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Select IBM Products to Recommend</h2>
        <p style={{ color: '#525252', marginBottom: '1.5rem' }}>
          Choose the IBM products that best address this company's pain points and objectives.
        </p>

        <div className="multi-select">
          {availableProducts.map((product) => (
            <div 
              key={product.name} 
              className="multi-select-option"
              onClick={() => handleProductToggle(product.name)}
            >
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.name)}
                onChange={() => handleProductToggle(product.name)}
                onClick={(e) => e.stopPropagation()}
              />
              <div>
                <strong>{product.name}</strong>
                <div style={{ fontSize: '0.875rem', color: '#525252' }}>
                  {product.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <strong>Selected ({selectedProducts.length}):</strong>
            <div style={{ marginTop: '0.5rem' }}>
              {selectedProducts.map((product) => (
                <span key={product} className="tag tag-green">{product}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <div className="input-group">
          <label className="input-label">
            Why did you choose these solutions? (Justify your selection)
          </label>
          <textarea
            className="input-textarea"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            placeholder="Explain how your selected IBM products address the company's pain points and objectives. Focus on business value and ROI..."
            rows="6"
          />
        </div>

        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={handleSubmit}
            disabled={loading || selectedProducts.length === 0 || !justification.trim()}
          >
            {loading ? 'Processing...' : 'Submit Solutions'}
          </button>
          <button 
            className="btn btn-outline" 
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScenarioPage

// Made with Bob
