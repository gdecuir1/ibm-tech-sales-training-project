import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MissionConsole from '../components/MissionConsole'
import { storageService } from '../services/storageService'

// Import comprehensive scenarios from shared-data
import scenariosData from '../../../shared-data/scenarios.json'

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
      // Simulate slight delay for UX consistency
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Get random scenario from comprehensive data
      const randomIndex = Math.floor(Math.random() * scenariosData.length)
      const selectedScenario = scenariosData[randomIndex]
      
      setScenario(selectedScenario)
      setStartTime(Date.now())
    } catch (error) {
      console.error('Error loading scenario:', error)
      // Fallback to simple mock scenario
      const fallbackScenario = {
        id: "fallback-001",
        title: "Enterprise Cloud Migration",
        industry: "Financial Services",
        company: "FinServe Global",
        brief: "A large financial services company needs to modernize their infrastructure.",
        revenue: "$2.5B",
        employees: 3500,
        constraints: { timeline: "6 months", budget: "$5M" },
        questions: [
          {
            id: "q1",
            step: 1,
            title: "Business Priorities",
            type: "priorities",
            question: "What are the top business priorities?",
            options: [
              { id: "p1", text: "Reduce costs", correct: true, weight: 10 },
              { id: "p2", text: "Improve security", correct: true, weight: 10 }
            ]
          }
        ],
        idealSolution: {
          primary: ["IBM Cloud", "IBM QRadar"],
          supporting: ["IBM Turbonomic"],
          summary: "Hybrid cloud solution with security and cost optimization."
        }
      }
      setScenario(fallbackScenario)
      setStartTime(Date.now())
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
      // Simulate slight delay for UX consistency
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Calculate scores based on answers
      const categoryScores = {}
      let totalScore = 0
      let maxScore = 0

      scenario.questions.forEach(question => {
        const userAnswer = answers[question.id]
        let questionScore = 0
        let questionMaxScore = 0

        if (question.type === 'priorities' || question.type === 'technology-selection' || question.type === 'justification') {
          // Multi-select questions
          const selectedOptions = Array.isArray(userAnswer) ? userAnswer : []
          question.options.forEach(option => {
            if (option.correct) {
              questionMaxScore += option.weight || 10
              if (selectedOptions.includes(option.id)) {
                questionScore += option.weight || 10
              }
            }
          })
        } else {
          // Single-select questions
          const selectedOption = question.options.find(opt => opt.id === userAnswer)
          questionMaxScore = Math.max(...question.options.map(opt => opt.score || opt.weight || 10))
          questionScore = selectedOption ? (selectedOption.score || selectedOption.weight || 0) : 0
        }

        // Group by category from scoringBreakdown
        const category = question.title.replace(/\s+/g, '')
        if (!categoryScores[category]) {
          categoryScores[category] = { score: 0, maxScore: 0, percentage: 0 }
        }
        categoryScores[category].score += questionScore
        categoryScores[category].maxScore += questionMaxScore

        totalScore += questionScore
        maxScore += questionMaxScore
      })

      // Calculate percentages
      Object.keys(categoryScores).forEach(category => {
        const cat = categoryScores[category]
        cat.percentage = cat.maxScore > 0 ? Math.round((cat.score / cat.maxScore) * 100) : 0
      })

      const overallPercentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0

      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      
      const evaluationResults = {
        overallScore: {
          score: totalScore,
          maxScore: maxScore,
          percentage: overallPercentage
        },
        categoryScores,
        idealSolution: scenario.idealSolution || {
          primary: [],
          supporting: [],
          summary: "Review the scenario details for the recommended solution."
        },
        timeSpent
      }

      setResults(evaluationResults)
      setCurrentScore(overallPercentage)

      // Save to localStorage
      storageService.saveCompletedScenario({
        scenarioId: scenario.id,
        score: overallPercentage,
        productScore: overallPercentage, // For consistency with classic mode
        businessScore: Math.round(overallPercentage / 2),
        objectionScore: Math.round(overallPercentage / 2),
        selectedProducts: [], // Interactive mode doesn't have explicit product selection
        correctProducts: scenario.idealSolution?.primary || [],
        missingProducts: [],
        incorrectProducts: [],
        justification: JSON.stringify(answers),
        userResponse: `Interactive scenario completed in ${timeSpent}s`,
        timestamp: Date.now()
      })
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
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleMultiSelectToggle(question.id, option.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1"
                  />
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
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => handleAnswer(question.id, option.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1"
                    name={question.id}
                  />
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
                {idealSolution.primary && idealSolution.primary.length > 0 && (
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
                )}
                
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
                  {scenario.estimatedTime || '3–6 min'}
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
        <div className="flex flex-col gap-4">
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
          
          {/* Exit Options */}
          <div className="flex gap-4 justify-center pt-4 border-t border-console-text-dim/20">
            <button
              className="text-sm text-console-text-dim hover:text-console-text transition-colors"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </button>
            <span className="text-console-text-dim">•</span>
            <button
              className="text-sm text-console-text-dim hover:text-console-text transition-colors"
              onClick={() => navigate('/')}
            >
              Exit to Home
            </button>
          </div>
        </div>
      </div>
    </MissionConsole>
  )
}

export default InteractiveScenarioPage

// Made with Bob
