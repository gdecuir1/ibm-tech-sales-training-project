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
      >
        <div className="mb-6">
          <p className="text-xs font-mono text-console-text-dim uppercase tracking-wide mb-2">
            Select all that apply
          </p>
          <h2 className="text-2xl font-semibold tracking-console text-console-text">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptions.includes(option.id)
            return (
              <motion.div
                key={option.id}
                className={`option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => handleMultiSelectToggle(question.id, option.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleMultiSelectToggle(question.id, option.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 w-5 h-5 rounded border-2 border-console-text-dim/30 
                             checked:bg-ibm-blue checked:border-ibm-blue cursor-pointer
                             focus:ring-2 focus:ring-ibm-blue focus:ring-offset-2 focus:ring-offset-console-bg"
                  />
                  <span className="flex-1 text-console-text leading-relaxed">
                    {option.text}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {selectedOptions.length > 0 && (
          <motion.div 
            className="mt-4 p-3 bg-ibm-blue/10 border border-ibm-blue/30 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="font-mono text-ibm-blue font-semibold">
                {selectedOptions.length} selected
              </span>
              <span className="text-console-text-dim">•</span>
              <span className="text-console-text-dim text-xs">
                {selectedOptions.map(optionId => {
                  const option = question.options.find(opt => opt.id === optionId)
                  return option?.text
                }).join(', ')}
              </span>
            </div>
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
      >
        {question.objection && (
          <motion.div 
            className="mb-6 p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-mono text-yellow-400 uppercase tracking-wide mb-2">
              Customer Objection
            </p>
            <p className="text-console-text italic">
              "{question.objection}"
            </p>
          </motion.div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-console text-console-text">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = userAnswer === option.id
            return (
              <motion.div
                key={option.id}
                className={`option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => handleAnswer(question.id, option.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name={question.id}
                    checked={isSelected}
                    onChange={() => handleAnswer(question.id, option.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 w-5 h-5 cursor-pointer accent-ibm-blue
                             focus:ring-2 focus:ring-ibm-blue focus:ring-offset-2 focus:ring-offset-console-bg"
                  />
                  <span className="flex-1 text-console-text leading-relaxed">
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
        <div className="max-w-5xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="text-7xl font-bold font-mono text-ibm-blue mb-2">
                  {overallScore.percentage}%
                </div>
                <div className="text-xl text-console-text-dim font-mono mb-4">
                  {overallScore.score} / {overallScore.maxScore} points
                </div>
                <div className={`status-badge ${performance.tier} text-base`}>
                  {performance.label}
                </div>
              </motion.div>
            </div>

            {/* Category Breakdown */}
            <div className="console-card mb-6">
              <h3 className="text-xl font-semibold tracking-console text-console-text mb-6 border-l-4 border-ibm-purple pl-4">
                Performance Breakdown
              </h3>
              
              <div className="space-y-4">
                {Object.entries(categoryScores).map(([category, data], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-console-text font-medium">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-mono text-console-text-dim">
                        {data.score}/{data.maxScore} <span className="text-ibm-blue">({data.percentage}%)</span>
                      </span>
                    </div>
                    <div className="h-2 bg-console-surface-light rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          data.percentage >= 75 ? 'bg-ibm-green' :
                          data.percentage >= 60 ? 'bg-ibm-blue' :
                          'bg-yellow-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${data.percentage}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ideal Solution */}
            <motion.div 
              className="console-card mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold tracking-console text-console-text mb-4 border-l-4 border-ibm-green pl-4">
                Ideal Solution
              </h3>
              <p className="text-console-text/80 mb-4 leading-relaxed">
                {idealSolution.summary}
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-mono text-console-text-dim uppercase tracking-wide mb-2">
                    Primary Solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {idealSolution.primary.map(product => (
                      <span key={product} className="px-3 py-1.5 bg-ibm-green/20 text-ibm-green border border-ibm-green/30 rounded-md font-mono text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                {idealSolution.supporting && idealSolution.supporting.length > 0 && (
                  <div>
                    <p className="text-sm font-mono text-console-text-dim uppercase tracking-wide mb-2">
                      Supporting Solutions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {idealSolution.supporting.map(product => (
                        <span key={product} className="px-3 py-1.5 bg-ibm-blue/20 text-ibm-blue border border-ibm-blue/30 rounded-md font-mono text-sm">
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
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button 
                className="btn-primary flex-1" 
                onClick={() => window.location.reload()}
              >
                Run Another Scenario
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/')}
              >
                Exit to Home
              </button>
            </motion.div>
          </motion.div>
        </div>
      </MissionConsole>
    )
  }

  if (loading && !scenario) {
    return (
      <div className="min-h-screen bg-console-bg flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-console-text-dim/20 border-t-ibm-blue rounded-full animate-spin mb-4" />
          <p className="text-console-text-dim font-mono">Loading scenario...</p>
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
      <div className="max-w-4xl mx-auto p-6">
        {/* Scenario Brief (Step 0 only) */}
        {currentStep === 0 && (
          <motion.div 
            className="console-card mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold tracking-console text-console-text mb-1">
                  {scenario.title}
                </h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className="industry-badge">{scenario.industry}</span>
                  <span className="text-console-text-dim">•</span>
                  <span className="text-console-text-dim">{scenario.company}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-console-text-dim uppercase tracking-wide">
                  Target Time
                </div>
                <div className="text-lg font-mono text-ibm-blue">
                  3–6 min
                </div>
              </div>
            </div>

            <div className="p-4 bg-console-surface-light rounded-lg border border-console-text-dim/10 mb-4">
              <p className="text-console-text/90 leading-relaxed">
                {scenario.brief}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Revenue</div>
                <div className="text-sm font-semibold text-console-text">{scenario.revenue}</div>
              </div>
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Employees</div>
                <div className="text-sm font-semibold text-console-text">{scenario.employees.toLocaleString()}</div>
              </div>
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Timeline</div>
                <div className="text-sm font-semibold text-console-text">{scenario.constraints.timeline}</div>
              </div>
              <div className="p-3 bg-console-surface-light rounded-lg">
                <div className="text-xs font-mono text-console-text-dim mb-1">Budget</div>
                <div className="text-sm font-semibold text-console-text">{scenario.constraints.budget}</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Question Card */}
        <div className="console-card mb-6">
          <div className="mb-6 pb-4 border-b border-console-text-dim/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-console-text-dim uppercase tracking-wide mb-1">
                  Step {currentQuestion.step}
                </div>
                <h2 className="text-lg font-semibold text-console-text">
                  {currentQuestion.title}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono text-console-text-dim">
                  {currentStep + 1} / {scenario.questions.length}
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {renderQuestion()}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button 
            className="btn-secondary" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <button 
            className="btn-primary flex-1" 
            onClick={handleNext}
            disabled={loading || !canProceed}
          >
            {loading ? 'Processing...' : currentStep === scenario.questions.length - 1 ? 'Submit & Score' : 'Next Step'}
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
