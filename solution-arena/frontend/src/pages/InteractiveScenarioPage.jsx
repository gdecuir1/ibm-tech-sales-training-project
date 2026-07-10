import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = '/api'

function InteractiveScenarioPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [scenario, setScenario] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [results, setResults] = useState(null)
  const [startTime, setStartTime] = useState(null)

  useEffect(() => {
    loadScenario()
  }, [])

  const loadScenario = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/scenario/random`)
      if (!response.ok) throw new Error('Failed to load scenario')
      
      const data = await response.json()
      setScenario(data)
      setStartTime(Date.now())
    } catch (error) {
      console.error('Error loading scenario:', error)
      alert('Failed to load scenario. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleMultiSelectToggle = (questionId, optionId) => {
    setAnswers(prev => {
      const current = prev[questionId] || []
      const newValue = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId]
      return {
        ...prev,
        [questionId]: newValue
      }
    })
  }

  const handleNext = () => {
    const currentQuestion = scenario.questions[currentStep]
    const userAnswer = answers[currentQuestion.id]

    // Validate answer
    if (!userAnswer || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      alert('Please select at least one answer before continuing.')
      return
    }

    if (currentStep < scenario.questions.length - 1) {
      setCurrentStep(prev => prev + 1)
      setShowFeedback(false)
    } else {
      submitScenario()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      setShowFeedback(false)
    }
  }

  const submitScenario = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/scoring/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: scenario.id,
          answers: answers
        })
      })

      if (!response.ok) throw new Error('Failed to evaluate scenario')
      
      const data = await response.json()
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      setResults({ ...data, timeSpent })
    } catch (error) {
      console.error('Error submitting scenario:', error)
      alert('Failed to submit scenario. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderQuestion = () => {
    if (!scenario || !scenario.questions) return null

    const question = scenario.questions[currentStep]
    const userAnswer = answers[question.id]

    switch (question.type) {
      case 'priorities':
      case 'technology-selection':
      case 'justification':
        return renderMultiSelect(question, userAnswer)
      
      case 'architecture':
      case 'objection':
      case 'cross-sell':
        return renderSingleSelect(question, userAnswer)
      
      default:
        return <div>Unknown question type</div>
    }
  }

  const renderMultiSelect = (question, userAnswer) => {
    const selectedOptions = userAnswer || []

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#525252', marginBottom: '0.5rem' }}>
            Select ALL that apply
          </p>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            {question.question}
          </h2>
        </div>

        <div className="multi-select">
          {question.options.map((option) => (
            <div
              key={option.id}
              className={`multi-select-option ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
              onClick={() => handleMultiSelectToggle(question.id, option.id)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleMultiSelectToggle(question.id, option.id)}
                onClick={(e) => e.stopPropagation()}
              />
              <span>{option.text}</span>
            </div>
          ))}
        </div>

        {selectedOptions.length > 0 && (
          <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
            <strong>Selected ({selectedOptions.length}):</strong>
            <div style={{ marginTop: '0.5rem' }}>
              {selectedOptions.map(optionId => {
                const option = question.options.find(opt => opt.id === optionId)
                return option ? (
                  <span key={optionId} className="tag tag-blue" style={{ marginRight: '0.5rem' }}>
                    {option.text}
                  </span>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderSingleSelect = (question, userAnswer) => {
    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          {question.objection && (
            <div style={{ 
              padding: '1rem', 
              backgroundColor: '#fff3cd', 
              borderLeft: '4px solid #ffc107',
              marginBottom: '1rem',
              borderRadius: '4px'
            }}>
              <strong style={{ color: '#856404' }}>Customer Objection:</strong>
              <p style={{ marginTop: '0.5rem', color: '#856404' }}>"{question.objection}"</p>
            </div>
          )}
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            {question.question}
          </h2>
        </div>

        <div className="radio-group">
          {question.options.map((option) => (
            <div
              key={option.id}
              className={`radio-option ${userAnswer === option.id ? 'selected' : ''}`}
              onClick={() => handleAnswer(question.id, option.id)}
            >
              <input
                type="radio"
                name={question.id}
                checked={userAnswer === option.id}
                onChange={() => handleAnswer(question.id, option.id)}
                onClick={(e) => e.stopPropagation()}
              />
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderResults = () => {
    if (!results) return null

    const { overallScore, categoryScores, questionScores, idealSolution, timeSpent } = results

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Scenario Complete! 🎉</h1>
            <p className="card-subtitle">{scenario.title}</p>
          </div>

          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f4f4f4', borderRadius: '8px', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: overallScore.percentage >= 75 ? '#24a148' : overallScore.percentage >= 60 ? '#f1c21b' : '#da1e28' }}>
              {overallScore.percentage}%
            </div>
            <div style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#161616' }}>
              {overallScore.score} / {overallScore.maxScore} points
            </div>
            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '4px', display: 'inline-block' }}>
              <strong>Time:</strong> {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: '#e8f5e9', borderRadius: '8px', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Performance Assessment</h3>
            <p style={{ fontSize: '1.125rem' }}>{overallScore.message}</p>
          </div>

          <h3 className="section-title">Category Breakdown</h3>
          <div className="info-grid" style={{ marginBottom: '2rem' }}>
            {Object.entries(categoryScores).map(([category, data]) => (
              <div key={category} className="info-item">
                <div className="info-label">{category.replace(/([A-Z])/g, ' $1').trim()}</div>
                <div className="info-value">
                  {data.score} / {data.maxScore}
                  <span style={{ marginLeft: '0.5rem', color: '#525252' }}>({data.percentage}%)</span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '8px', 
                  backgroundColor: '#e0e0e0', 
                  borderRadius: '4px',
                  marginTop: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${data.percentage}%`, 
                    height: '100%', 
                    backgroundColor: data.percentage >= 75 ? '#24a148' : data.percentage >= 60 ? '#f1c21b' : '#da1e28',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-title">Ideal Solution</h3>
          <div style={{ padding: '1.5rem', backgroundColor: '#f4f4f4', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>{idealSolution.summary}</p>
            <div>
              <strong>Primary Solutions:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                {idealSolution.primary.map(product => (
                  <span key={product} className="tag tag-green">{product}</span>
                ))}
              </div>
            </div>
            {idealSolution.supporting && idealSolution.supporting.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <strong>Supporting Solutions:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {idealSolution.supporting.map(product => (
                    <span key={product} className="tag tag-blue">{product}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="button-group">
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Try Another Scenario
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (loading && !scenario) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p style={{ marginTop: '1rem' }}>Loading scenario...</p>
        </div>
      </div>
    )
  }

  if (results) {
    return renderResults()
  }

  if (!scenario) return null

  const currentQuestion = scenario.questions[currentStep]
  const progress = ((currentStep + 1) / scenario.questions.length) * 100

  return (
    <div className="container">
      <div className="card">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h1 className="card-title">{scenario.title}</h1>
              <p className="card-subtitle">{scenario.company} - {scenario.industry}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.875rem', color: '#525252' }}>
                Question {currentStep + 1} of {scenario.questions.length}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#525252' }}>
                Step {currentQuestion.step}: {currentQuestion.title}
              </div>
            </div>
          </div>

          <div style={{ 
            width: '100%', 
            height: '8px', 
            backgroundColor: '#e0e0e0', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '100%', 
              backgroundColor: '#0f62fe',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {currentStep === 0 && (
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#f4f4f4', 
            borderRadius: '8px', 
            marginBottom: '2rem' 
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Client Brief</h3>
            <p style={{ marginBottom: '1rem' }}>{scenario.brief}</p>
            
            <div className="info-grid" style={{ marginTop: '1.5rem' }}>
              <div className="info-item">
                <div className="info-label">Revenue</div>
                <div className="info-value">{scenario.revenue}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Employees</div>
                <div className="info-value">{scenario.employees.toLocaleString()}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Timeline</div>
                <div className="info-value">{scenario.constraints.timeline}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Budget</div>
                <div className="info-value">{scenario.constraints.budget}</div>
              </div>
            </div>
          </div>
        )}

        {renderQuestion()}

        <div className="button-group" style={{ marginTop: '2rem' }}>
          <button 
            className="btn btn-outline" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={loading}
          >
            {loading ? 'Processing...' : currentStep === scenario.questions.length - 1 ? 'Submit & Get Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InteractiveScenarioPage

// Made with Bob