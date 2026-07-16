import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function IdealAnswerPage({ currentScenario, scores }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!scores || !currentScenario) {
      navigate('/scenario')
    }
  }, [scores, currentScenario, navigate])

  if (!scores || !currentScenario) {
    return null
  }

  const generateIdealResponse = () => {
    const products = scores.idealProducts.join(', ')
    
    return `Thank you for raising these important concerns. I completely understand your perspective, and these are valid points that many of our clients initially consider.

Let me address your concerns directly:

Regarding your existing technology investments, IBM solutions are designed to complement and enhance your current infrastructure rather than replace it. Our products offer seamless integration capabilities and can work alongside your existing tools to provide additional value.

What differentiates IBM is our enterprise-grade reliability, proven track record across industries, and comprehensive support ecosystem. Unlike point solutions, IBM provides an integrated platform approach that reduces complexity while delivering measurable business outcomes.

Specifically for ${currentScenario.company}, the combination of ${products} addresses your core pain points:

${currentScenario.pain_points.map((point, i) => 
  `${i + 1}. ${point} - Our solutions provide immediate visibility and control, with clients typically seeing ROI within 6-12 months.`
).join('\n')}

From a business value perspective, our clients in ${currentScenario.industry} have achieved:
- 30-40% reduction in operational costs
- 50% faster time-to-insight for critical decisions
- Improved compliance and reduced risk exposure

IBM also provides comprehensive implementation support, training, and ongoing optimization services to ensure your success. We're not just a vendor - we're a strategic partner invested in your long-term outcomes.

I'd be happy to arrange a proof-of-concept or connect you with similar ${currentScenario.industry} companies who have successfully implemented these solutions. Would that be valuable?`
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
          <h1 className="card-title">Ideal Answer</h1>
          <p className="card-subtitle">
            Review the recommended approach for this scenario
          </p>
        </div>

        <div style={{ 
          padding: '1rem',
          background: '#d0e2ff',
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <strong style={{ color: '#0043ce' }}>Learning Opportunity</strong>
          <p style={{ color: '#0043ce', marginTop: '0.5rem', marginBottom: 0 }}>
            Study this ideal answer to understand how to effectively position IBM solutions 
            and handle objections in similar scenarios.
          </p>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Recommended IBM Products</h2>
        <p style={{ color: '#525252', marginBottom: '1rem' }}>
          Based on the pain points and objectives, these products are the ideal fit:
        </p>

        <div className="product-list">
          {scores.idealProducts.map((product) => (
            <div key={product} className="product-item correct">
              <strong>{product}</strong>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 className="section-title">Why These Products?</h3>
          <ul>
            {currentScenario.pain_points.map((point, index) => {
              const matchingProduct = scores.idealProducts.find(p => {
                if (point.includes('cost') && p.includes('Turbonomic')) return true
                if (point.includes('observability') && p.includes('Instana')) return true
                if (point.includes('security') && p.includes('QRadar')) return true
                if (point.includes('compliance') && p.includes('QRadar')) return true
                if (point.includes('data fragmentation') && p.includes('Cloud Pak')) return true
                if (point.includes('supply chain') && p.includes('Sterling')) return true
                if (point.includes('ai adoption') && p.includes('WatsonX')) return true
                if (point.includes('api management') && p.includes('API Connect')) return true
                return false
              })
              
              return (
                <li key={index}>
                  <strong>{point}</strong> → Addressed by {matchingProduct || 'IBM solutions'}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Sample Strong Response</h2>
        <p style={{ color: '#525252', marginBottom: '1rem' }}>
          Here's an example of how to effectively handle the objections while highlighting 
          business value:
        </p>

        <div style={{ 
          padding: '1.5rem',
          background: '#f4f4f4',
          borderRadius: '8px',
          lineHeight: '1.8',
          whiteSpace: 'pre-line'
        }}>
          {generateIdealResponse()}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 className="section-title">Key Elements of This Response</h3>
          <ul className="feedback-list">
            <li className="feedback-item success">
              <strong>Acknowledgement:</strong> Validates customer concerns upfront
            </li>
            <li className="feedback-item success">
              <strong>Differentiation:</strong> Clearly explains IBM's unique value proposition
            </li>
            <li className="feedback-item success">
              <strong>Business Value:</strong> Focuses on ROI, cost savings, and measurable outcomes
            </li>
            <li className="feedback-item success">
              <strong>Specificity:</strong> Addresses each pain point with concrete solutions
            </li>
            <li className="feedback-item success">
              <strong>Social Proof:</strong> References industry benchmarks and client success
            </li>
            <li className="feedback-item success">
              <strong>Next Steps:</strong> Proposes concrete actions to move forward
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Key Takeaways</h2>
        <div style={{ 
          padding: '1.5rem',
          background: '#defbe6',
          borderRadius: '8px',
          borderLeft: '4px solid #24a148'
        }}>
          <ul style={{ marginBottom: 0, color: '#0e6027' }}>
            <li>Always acknowledge customer concerns before presenting solutions</li>
            <li>Map each pain point to specific IBM product capabilities</li>
            <li>Lead with business value and ROI, not just features</li>
            <li>Use industry-specific examples and benchmarks</li>
            <li>Position IBM as a strategic partner, not just a vendor</li>
            <li>Provide concrete next steps to maintain momentum</li>
          </ul>
        </div>

        <div className="button-group" style={{ marginTop: '2rem' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/')}
          >
            Try Another Scenario
          </button>
          <button 
            className="btn btn-outline" 
            onClick={() => navigate('/results')}
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  )
}

export default IdealAnswerPage

// Made with Bob
