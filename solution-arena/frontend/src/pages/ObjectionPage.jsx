import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = '/api'

function ObjectionPage({ 
  objections,
  userResponse,
  setUserResponse,
  currentScenario,
  selectedProducts,
  justification,
  setScores
}) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!objections || objections.length === 0) {
      navigate('/scenario')
    }
  }, [objections, navigate])

  const handleSubmit = async () => {
    if (!userResponse.trim()) {
      alert('Please provide a response to the objections')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const [productEvalRes, responseEvalRes] = await Promise.all([
        fetch(`${API_BASE}/evaluate/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            scenarioId: currentScenario.id,
            selectedProducts: selectedProducts
          })
        }),
        fetch(`${API_BASE}/evaluate/response`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            responseText: userResponse
          })
        })
      ])

      if (!productEvalRes.ok || !responseEvalRes.ok) {
        throw new Error('Failed to evaluate responses')
      }

      const productEval = await productEvalRes.json()
      const responseEval = await responseEvalRes.json()

      setScores({
        productScore: productEval.score,
        correctProducts: productEval.correctProducts,
        missingProducts: productEval.missingProducts,
        incorrectProducts: productEval.incorrectProducts,
        idealProducts: productEval.idealProducts,
        businessScore: responseEval.businessScore,
        objectionScore: responseEval.objectionScore,
        totalResponseScore: responseEval.totalScore,
        feedback: responseEval.feedback
      })

      navigate('/results')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!objections || objections.length === 0) {
    return null
  }

  return (
    <div className="container">
      {/* Navigation Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
        marginBottom: '1.5rem',
        paddingTop: '1rem'
      }}>
        <button
          className="btn btn-outline"
          onClick={() => navigate('/dashboard')}
          style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
        >
          Dashboard
        </button>
        <button
          className="btn btn-outline"
          onClick={() => navigate('/')}
          style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
        >
          Exit to Home
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Handle Customer Objections</h1>
          <p className="card-subtitle">
            The customer has raised some concerns. Address them professionally and persuasively.
          </p>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {objections.map((objection, index) => (
              <div key={index} className="chat-message system">
                <div className="chat-bubble system">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Customer Objection {index + 1}:
                  </strong>
                  {objection.objection}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            padding: '1rem',
            background: '#d0e2ff',
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            <strong style={{ color: '#0043ce' }}>💡 Tips for handling objections:</strong>
            <ul style={{ 
              marginTop: '0.5rem',
              marginBottom: 0,
              color: '#0043ce',
              fontSize: '0.95rem'
            }}>
              <li>Acknowledge the concern first</li>
              <li>Differentiate IBM from competitors</li>
              <li>Focus on business value and ROI</li>
              <li>Provide specific examples or use cases</li>
            </ul>
          </div>

          <div className="input-group">
            <label className="input-label">Your Response</label>
            <textarea
              className="input-textarea"
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Address the customer's concerns. Acknowledge their points, explain IBM's unique value proposition, and focus on business outcomes..."
              rows="8"
            />
            <div style={{ 
              fontSize: '0.875rem', 
              color: '#525252',
              marginTop: '0.5rem'
            }}>
              Word count: {userResponse.trim().split(/\s+/).filter(w => w).length}
            </div>
          </div>

          {error && (
            <div className="error-message">
              <strong>Error:</strong> {error}
            </div>
          )}

          <div className="button-group">
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit}
              disabled={loading || !userResponse.trim()}
            >
              {loading ? 'Evaluating...' : 'Submit Response'}
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => navigate('/scenario')}
              disabled={loading}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">Your Selected Products</h3>
        <div>
          {selectedProducts.map((product) => (
            <span key={product} className="tag tag-blue">{product}</span>
          ))}
        </div>

        <h3 className="section-title" style={{ marginTop: '1.5rem' }}>
          Your Justification
        </h3>
        <div style={{ 
          padding: '1rem',
          background: '#f4f4f4',
          borderRadius: '8px',
          lineHeight: '1.6'
        }}>
          {justification}
        </div>
      </div>
    </div>
  )
}

export default ObjectionPage

// Made with Bob
