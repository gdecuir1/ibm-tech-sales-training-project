import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MissionConsole from '../components/MissionConsole'

const API_BASE = '/api'

function InteractiveScenarioPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [scenario, setScenario] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  useEffect(() => {
    loadScenario()
  }, [])

  // Timer
  useEffect(() => {
    if (startTime && !results) {
      const interval = setInterval(() => {
        setTimerSeconds(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [startTime, results])

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

    if (!userAnswer || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      alert('Pick at least one answer before moving forward.')
      return
    }

    if (currentStep < scenario.questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      submitScenario()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
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
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      setResults({ ...data, timeSpent })
      setCurrentScore(data.overallScore.score)
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
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.15 }}
        className="glow-zone-blue"
      >
        <div className="mb-12">
          <p className="text-xs text-console-text-dim uppercase tracking-wide mb-3">
            Select all that apply
          </p>
          <h2 className="text-3xl font-semibold tracking-console text-console-text">
            {question.question}
          </h2>
        </div>

        <div className="space-y-1">
          {question.options.map((option) => {
            const isSelected = selectedOptions.includes(option.id)
            return (
              <motion.div
                key={option.id}
                className={`option-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleMultiSelectToggle(question.id, option.id)}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className={`w-5 h-5 rounded border-2 transition-all ${
                      isSelected 
                        ? 'bg-ibm-blue border-ibm-blue' 
                        : 'border-console-text-dim/30'
                    }`}>
                      {isSelected && (
                        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="flex-1 text-lg text-console-text/80 leading-relaxed option-text">
                    {option.text}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {selectedOptions.length > 0 && (
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-sm text-ibm-blue">
              {selectedOptions.length} selected
            </span>
          </motion.div>
        )}
      </motion.div>
    )
  }

  const renderSingleSelect = (question, userAnswer) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.15 }}
        className="glow-zone-purple"
      >
        {question.objection && (
          <motion.div 
            className="mb-12 p-6 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(250, 204, 21, 0.05) 0%, transparent 70%)',
              borderBottom: '2px solid rgba(250, 204, 21, 0.3)'
            }}
          >
            <p className="text-xs text-yellow-400 uppercase tracking-wide mb-3">
              Customer Objection
            </p>
            <p className="text-xl text-console-text italic leading-relaxed">
              "{question.objection}"
            </p>
          </motion.div>
        )}

        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-console text-console-text">
            {question.question}
          </h2>
        </div>

        <div className="space-y-1">
          {question.options.map((option) => {
            const isSelected = userAnswer === option.id
            return (
              <motion.div
                key={option.id}
                className={`option-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleAnswer(question.id, option.id)}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                      isSelected 
                        ? 'bg-ibm-blue border-ibm-blue' 
                        : 'border-console-text-dim/30'
                    }`}>
                      {isSelected && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="flex-1 text-lg text-console-text/80 leading-relaxed option-text">
                    {option.text}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    )
  }

  const renderResults = () => {
    if (!results) return null

    const { overallScore, categoryScores, idealSolution, timeSpent } = results

    const getPerformanceTier = (percentage) => {
      if (percentage >= 85) return { tier: 'excellent', label: 'Excellent' }
      if (percentage >= 70) return { tier: 'good', label: 'Good' }
      if (percentage >= 55) return { tier: 'satisfactory', label: 'Satisfactory' }
      return { tier: 'needs-improvement', label: 'Needs Improvement' }
    }

    const performance = getPerformanceTier(overallScore.percentage)

    return (
      <MissionConsole currentStep={6} score={currentScore} timerSeconds={timeSpent}>
        <div className="max-w-5xl mx-auto p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Score - Large Typography */}
            <div className="text-center mb-24 glow-zone-blue">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="text-8xl md:text-9xl font-bold text-ibm-blue mb-4"
                     style={{ textShadow: '0 0 60px rgba(15, 98, 254, 0.4)' }}>
                  {overallScore.percentage}%
                </div>
                <div className="text-2xl text-console-text-dim mb-6">
                  {overallScore.score} / {overallScore.maxScore} points
                </div>
                <div className={`status-badge ${performance.tier} text-lg`}>
                  {performance.label}
                </div>
              </motion.div>
            </div>

            {/* Category Breakdown - Flowing Equalizer Style */}
            <div className="mb-24">
              <h3 className="text-heading text-console-text mb-12 text-center">
                Performance Breakdown
              </h3>
              
              <div className="space-y-8">
                {Object.entries(categoryScores).map(([category, data], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-xl text-console-text font-medium">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-lg text-console-text-dim">
                        {data.score}/{data.maxScore} <span className="text-ibm-blue">({data.percentage}%)</span>
                      </span>
                    </div>
                    
                    {/* Flowing bar - no container */}
                    <div className="relative h-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-console-text-dim/20 to-transparent" />
                      <motion.div
                        className="absolute inset-y-0 left-0"
                        style={{
                          background: data.percentage >= 75 
                            ? 'linear-gradient(90deg, transparent, rgba(36, 161, 72, 0.6), rgba(36, 161, 72, 0.3))' 
                            : data.percentage >= 60 
                            ? 'linear-gradient(90deg, transparent, rgba(15, 98, 254, 0.6), rgba(15, 98, 254, 0.3))'
                            : 'linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.6), rgba(250, 204, 21, 0.3))',
                          boxShadow: data.percentage >= 75 
                            ? '0 0 20px rgba(36, 161, 72, 0.3)' 
                            : data.percentage >= 60 
                            ? '0 0 20px rgba(15, 98, 254, 0.3)'
                            : '0 0 20px rgba(250, 204, 21, 0.3)'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${data.percentage}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hairline-separator" />

            {/* Ideal Solution - Flowing Layout */}
            <motion.div 
              className="mb-20 glow-zone-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-heading text-console-text mb-8 text-center">
                Ideal Solution
              </h3>
              <p className="text-xl text-console-text/70 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                {idealSolution.summary}
              </p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-console-text-dim uppercase tracking-wide mb-4 text-center">
                    Primary Solutions
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {idealSolution.primary.map(product => (
                      <span
                        key={product}
                        className="px-4 py-2 text-ibm-green text-sm"
                        style={{ 
                          borderBottom: '2px solid rgba(36, 161, 72, 0.5)',
                          textShadow: '0 0 10px rgba(36, 161, 72, 0.3)'
                        }}
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                {idealSolution.supporting && idealSolution.supporting.length > 0 && (
                  <div>
                    <p className="text-sm text-console-text-dim uppercase tracking-wide mb-4 text-center">
                      Supporting Solutions
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {idealSolution.supporting.map(product => (
                        <span
                          key={product}
                          className="px-4 py-2 text-ibm-blue text-sm"
                          style={{ 
                            borderBottom: '2px solid rgba(15, 98, 254, 0.5)',
                            textShadow: '0 0 10px rgba(15, 98, 254, 0.3)'
                          }}
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button 
                className="btn-primary" 
                onClick={() => window.location.reload()}
              >
                <span>Run Another Scenario</span>
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/')}
              >
                <span>Exit to Home</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </MissionConsole>
    )
  }

  if (loading && !scenario) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-console-text-dim/20 border-t-ibm-blue rounded-full animate-spin mb-6" 
               style={{ boxShadow: '0 0 30px rgba(15, 98, 254, 0.3)' }} />
          <p className="text-console-text-dim text-lg">Loading scenario...</p>
        </div>
      </div>
    )
  }

  if (results) {
    return renderResults()
  }

  if (!scenario) return null

  const currentQuestion = scenario.questions[currentStep]
  const userAnswer = answers[currentQuestion.id]
  const canProceed = userAnswer && (Array.isArray(userAnswer) ? userAnswer.length > 0 : true)

  return (
    <MissionConsole currentStep={currentStep} score={currentScore} timerSeconds={timerSeconds}>
      <div className="max-w-4xl mx-auto p-8">
        {/* Scenario Brief (Step 0 only) - No Card */}
        {currentStep === 0 && (
          <motion.div 
            className="mb-20 glow-zone-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold tracking-console text-console-text mb-3">
                  {scenario.title}
                </h1>
                <div className="flex items-center gap-4 text-base">
                  <span className="text-console-text-dim font-mono">{scenario.industry}</span>
                  <span className="text-console-text-dim">•</span>
                  <span className="text-console-text-dim">{scenario.company}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-console-text-dim uppercase tracking-wide mb-1">
                  Target Time
                </div>
                <div className="text-2xl font-mono text-ibm-blue">
                  3–6 min
                </div>
              </div>
            </div>

            <p className="text-xl text-console-text/70 leading-relaxed mb-12">
              {scenario.brief}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-xs text-console-text-dim mb-2 uppercase tracking-wide">Revenue</div>
                <div className="text-lg font-semibold text-console-text">{scenario.revenue}</div>
              </div>
              <div>
                <div className="text-xs text-console-text-dim mb-2 uppercase tracking-wide">Employees</div>
                <div className="text-lg font-semibold text-console-text">{scenario.employees.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-console-text-dim mb-2 uppercase tracking-wide">Timeline</div>
                <div className="text-lg font-semibold text-console-text">{scenario.constraints.timeline}</div>
              </div>
              <div>
                <div className="text-xs text-console-text-dim mb-2 uppercase tracking-wide">Budget</div>
                <div className="text-lg font-semibold text-console-text">{scenario.constraints.budget}</div>
              </div>
            </div>

            <div className="hairline-separator" />
          </motion.div>
        )}

        {/* Question Section - No Card */}
        <div className="mb-12">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-console-text-dim uppercase tracking-wide mb-2">
                  Step {currentQuestion.step}
                </div>
                <h2 className="text-2xl font-semibold text-console-text">
                  {currentQuestion.title}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-sm text-console-text-dim">
                  {currentStep + 1} / {scenario.questions.length}
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {renderQuestion()}
          </AnimatePresence>
        </div>

        {/* Navigation - Minimal */}
        <div className="flex gap-6 justify-center">
          <button 
            className="btn-secondary" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>
          <button 
            className="btn-primary" 
            onClick={handleNext}
            disabled={loading || !canProceed}
          >
            <span>{loading ? 'Processing...' : currentStep === scenario.questions.length - 1 ? 'Submit & Score' : 'Next Step'}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </MissionConsole>
  )
}

export default InteractiveScenarioPage

// Made with Bob
