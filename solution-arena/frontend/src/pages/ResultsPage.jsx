import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ResultsPage({ scores, currentScenario }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!scores) {
      navigate('/scenario')
    }
  }, [scores, navigate])

  if (!scores) {
    return null
  }

  const overallScore = Math.round((scores.productScore + scores.totalResponseScore) / 2)

  const getScoreColor = (score) => {
    if (score >= 80) return '#24a148'
    if (score >= 60) return '#f1c21b'
    return '#da1e28'
  }

  const getPerformanceLevel = (score) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Fair'
    return 'Needs Improvement'
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Performance Results</h1>
          <p className="card-subtitle">
            Here's how you performed on this scenario
          </p>
        </div>

        <div className="score-display">
          <div className="score-card" style={{ 
            background: `linear-gradient(135deg, ${getScoreColor(overallScore)} 0%, ${getScoreColor(overallScore)}dd 100%)`
          }}>
            <div className="score-label">Overall Score</div>
            <div className="score-value">{overallScore}</div>
            <div style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
              {getPerformanceLevel(overallScore)}
            </div>
          </div>

          <div className="score-card">
            <div className="score-label">Product Selection</div>
            <div className="score-value">{scores.productScore}</div>
            <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.9 }}>
              out of 100
            </div>
          </div>

          <div className="score-card secondary">
            <div className="score-label">Business Value</div>
            <div className="score-value">{scores.businessScore}</div>
            <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.9 }}>
              out of 50
            </div>
          </div>

          <div className="score-card secondary">
            <div className="score-label">Objection Handling</div>
            <div className="score-value">{scores.objectionScore}</div>
            <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.9 }}>
              out of 50
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Product Selection Analysis</h2>

        {scores.correctProducts.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{ color: '#24a148' }}>
              ✓ Correct Products ({scores.correctProducts.length})
            </h3>
            <div className="product-list">
              {scores.correctProducts.map((product) => (
                <div key={product} className="product-item correct">
                  <strong>{product}</strong>
                  <div style={{ fontSize: '0.875rem', color: '#0e6027', marginTop: '0.25rem' }}>
                    Well chosen!
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scores.missingProducts.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{ color: '#8e6a00' }}>
              ⚠ Missing Products ({scores.missingProducts.length})
            </h3>
            <p style={{ color: '#525252', marginBottom: '1rem' }}>
              These products would have been ideal for this scenario:
            </p>
            <div className="product-list">
              {scores.missingProducts.map((product) => (
                <div key={product} className="product-item missing">
                  <strong>{product}</strong>
                  <div style={{ fontSize: '0.875rem', color: '#8e6a00', marginTop: '0.25rem' }}>
                    Consider this next time
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scores.incorrectProducts.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="section-title" style={{ color: '#da1e28' }}>
              ✗ Incorrect Products ({scores.incorrectProducts.length})
            </h3>
            <p style={{ color: '#525252', marginBottom: '1rem' }}>
              These products don't align well with the scenario's pain points:
            </p>
            <div className="product-list">
              {scores.incorrectProducts.map((product) => (
                <div key={product} className="product-item incorrect">
                  <strong>{product}</strong>
                  <div style={{ fontSize: '0.875rem', color: '#750e13', marginTop: '0.25rem' }}>
                    Not the best fit
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title">Response Feedback</h2>
        <ul className="feedback-list">
          {scores.feedback.map((item, index) => {
            const isPositive = item.toLowerCase().includes('strong') || 
                              item.toLowerCase().includes('good') || 
                              item.toLowerCase().includes('clear')
            const isWarning = item.toLowerCase().includes('could') || 
                             item.toLowerCase().includes('consider') ||
                             item.toLowerCase().includes('add more')
            const className = isPositive ? 'success' : isWarning ? 'warning' : 'error'
            
            return (
              <li key={index} className={`feedback-item ${className}`}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="card">
        <div style={{ 
          padding: '1.5rem',
          background: '#d0e2ff',
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ color: '#0043ce', marginBottom: '0.5rem' }}>
            💡 Want to see the ideal answer?
          </h3>
          <p style={{ color: '#0043ce', marginBottom: 0 }}>
            Review the recommended products and a sample response to learn from this scenario.
          </p>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/ideal-answer')}
          >
            Reveal Ideal Answer
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/')}
          >
            Try Another Scenario
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage

// Made with Bob
