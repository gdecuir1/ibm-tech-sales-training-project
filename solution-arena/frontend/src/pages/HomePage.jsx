import { useNavigate } from 'react-router-dom'

function HomePage({ onStart }) {
  const navigate = useNavigate()

  const handleStart = () => {
    onStart()
    navigate('/scenario')
  }

  const handleInteractiveStart = () => {
    navigate('/interactive')
  }

  return (
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '800px', 
        margin: '0 auto',
        paddingTop: '4rem'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '700',
          color: '#161616',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Solution Arena
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#525252',
          marginBottom: '1rem',
          fontWeight: '400'
        }}>
          IBM BTS Scenario Simulator
        </p>
        <div style={{ marginBottom: '3rem' }}>
          <span className="tag tag-green" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
            ⚡ NEW: Fast Interactive Mode
          </span>
        </div>
        
        <div className="card" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#161616'
          }}>
            Choose Your Training Mode
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#393939',
            marginBottom: '1.5rem'
          }}>
            Practice real-world IBM technical sales scenarios with two training modes designed
            for Brand Technical Specialist interns.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: '#f4f4f4',
              borderRadius: '8px',
              border: '2px solid #0f62fe'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                color: '#161616'
              }}>
                ⚡ Interactive Mode (NEW)
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#525252',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                Fast-paced, multiple-choice format. Complete realistic scenarios in 3-6 minutes
                with instant feedback. Emphasizes IBM Power and Cloud solutions.
              </p>
              <ul style={{
                fontSize: '0.9rem',
                color: '#393939',
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                <li>7-step guided workflow</li>
                <li>Multiple-choice questions</li>
                <li>Instant scoring & feedback</li>
                <li>3-6 minute completion time</li>
              </ul>
              <button
                className="btn btn-primary"
                onClick={handleInteractiveStart}
                style={{ width: '100%' }}
              >
                Start Interactive Mode
              </button>
            </div>

            <div style={{
              padding: '1.5rem',
              background: '#f4f4f4',
              borderRadius: '8px',
              border: '2px solid #e0e0e0'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                color: '#161616'
              }}>
                📝 Classic Mode
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#525252',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                Traditional format with open-ended responses. Practice detailed justifications
                and objection handling with written answers.
              </p>
              <ul style={{
                fontSize: '0.9rem',
                color: '#393939',
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                <li>Detailed scenario analysis</li>
                <li>Written justifications</li>
                <li>Objection handling practice</li>
                <li>Comprehensive feedback</li>
              </ul>
              <button
                className="btn btn-outline"
                onClick={handleStart}
                style={{ width: '100%' }}
              >
                Start Classic Mode
              </button>
            </div>
          </div>
          
          <div style={{
            padding: '1rem',
            background: '#d0e2ff',
            borderRadius: '8px',
            borderLeft: '4px solid #0f62fe'
          }}>
            <strong style={{ color: '#0043ce' }}>💡 Recommendation:</strong>
            <span style={{ color: '#0043ce', marginLeft: '0.5rem' }}>
              Start with Interactive Mode for high-volume practice, then use Classic Mode
              to develop detailed technical sales narratives.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

// Made with Bob
