import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ResultsPage({ scores, currentScenario }) {
  const navigate = useNavigate()
  const [animatedScores, setAnimatedScores] = useState({
    overall: 0,
    product: 0,
    business: 0,
    objection: 0
  })

  useEffect(() => {
    if (!scores) {
      navigate('/scenario')
    }
  }, [scores, navigate])

  // Animate scores counting up
  useEffect(() => {
    if (scores) {
      const overallScore = Math.round((scores.productScore + scores.totalResponseScore) / 2)
      
      const animateScore = (key, target, delay = 0) => {
        setTimeout(() => {
          let current = 0
          const increment = Math.ceil(target / 30)
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setAnimatedScores(prev => ({ ...prev, [key]: current }))
          }, 30)
        }, delay)
      }

      animateScore('overall', overallScore, 200)
      animateScore('product', scores.productScore, 400)
      animateScore('business', scores.businessScore, 600)
      animateScore('objection', scores.objectionScore, 800)
    }
  }, [scores])

  if (!scores) {
    return null
  }

  const overallScore = Math.round((scores.productScore + scores.totalResponseScore) / 2)

  const getPerformanceTier = (score) => {
    if (score >= 80) return { tier: 'excellent', label: 'Excellent', color: 'text-ibm-green' }
    if (score >= 60) return { tier: 'good', label: 'Good', color: 'text-ibm-blue' }
    if (score >= 40) return { tier: 'satisfactory', label: 'Satisfactory', color: 'text-yellow-400' }
    return { tier: 'needs-improvement', label: 'Needs Improvement', color: 'text-red-400' }
  }

  const performance = getPerformanceTier(overallScore)

  return (
    <div className="min-h-screen bg-console-bg">
      {/* Header Bar */}
      <header className="bg-console-surface border-b border-console-text-dim/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ibm-green rounded-full" />
              <h1 className="text-lg font-semibold tracking-console text-console-text">
                CLASSIC MODE RESULTS
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 text-sm font-medium text-console-text-dim hover:text-console-text hover:bg-console-surface-light rounded transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-console-text-dim hover:text-console-text hover:bg-console-surface-light rounded transition-colors"
              >
                Exit to Home
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        {/* Overall Score Hero */}
        <motion.div 
          className="console-card mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className={`text-7xl font-bold font-mono ${performance.color} mb-2`}>
              {animatedScores.overall}
            </div>
            <div className="text-xl text-console-text-dim font-mono mb-4">
              Overall Performance Score
            </div>
            <div className={`status-badge ${performance.tier} text-base`}>
              {performance.label}
            </div>
          </motion.div>
        </motion.div>

        {/* Score Breakdown */}
        <motion.div 
          className="console-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold tracking-console text-console-text mb-6 border-l-4 border-ibm-purple pl-4">
            Score Breakdown
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <motion.div 
              className="p-4 bg-ibm-blue/10 border border-ibm-blue/30 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-sm font-mono text-console-text-dim mb-2">Product Selection</div>
              <div className="text-3xl font-bold font-mono text-ibm-blue mb-1">
                {animatedScores.product}
              </div>
              <div className="text-xs text-console-text-dim">out of 100</div>
            </motion.div>

            <motion.div 
              className="p-4 bg-console-surface-light border border-console-text-dim/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-sm font-mono text-console-text-dim mb-2">Business Value</div>
              <div className="text-3xl font-bold font-mono text-console-text mb-1">
                {animatedScores.business}
              </div>
              <div className="text-xs text-console-text-dim">out of 50</div>
            </motion.div>

            <motion.div 
              className="p-4 bg-console-surface-light border border-console-text-dim/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-sm font-mono text-console-text-dim mb-2">Objection Handling</div>
              <div className="text-3xl font-bold font-mono text-console-text mb-1">
                {animatedScores.objection}
              </div>
              <div className="text-xs text-console-text-dim">out of 50</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Analysis */}
        <motion.div 
          className="console-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-xl font-semibold tracking-console text-console-text mb-6 border-l-4 border-ibm-green pl-4">
            Product Selection Analysis
          </h2>

          {scores.correctProducts.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-ibm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-ibm-green">
                  Correct Products ({scores.correctProducts.length})
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {scores.correctProducts.map((product, index) => (
                  <motion.div
                    key={product}
                    className="p-3 bg-ibm-green/10 border border-ibm-green/30 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                  >
                    <div className="font-semibold text-console-text">{product}</div>
                    <div className="text-sm text-ibm-green mt-1">Strong match for requirements</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {scores.missingProducts.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-lg font-semibold text-yellow-400">
                  Missing Products ({scores.missingProducts.length})
                </h3>
              </div>
              <p className="text-console-text-dim text-sm mb-3">
                These would have strengthened your solution:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {scores.missingProducts.map((product, index) => (
                  <motion.div
                    key={product}
                    className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                  >
                    <div className="font-semibold text-console-text">{product}</div>
                    <div className="text-sm text-yellow-400 mt-1">Consider for similar scenarios</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {scores.incorrectProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-red-400">
                  Incorrect Products ({scores.incorrectProducts.length})
                </h3>
              </div>
              <p className="text-console-text-dim text-sm mb-3">
                These don't align with the scenario's pain points:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {scores.incorrectProducts.map((product, index) => (
                  <motion.div
                    key={product}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.05 }}
                  >
                    <div className="font-semibold text-console-text">{product}</div>
                    <div className="text-sm text-red-400 mt-1">Not the best fit here</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Response Feedback */}
        <motion.div 
          className="console-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <h2 className="text-xl font-semibold tracking-console text-console-text mb-6 border-l-4 border-ibm-blue pl-4">
            Response Feedback
          </h2>

          <div className="space-y-3">
            {scores.feedback.map((item, index) => {
              const isPositive = item.toLowerCase().includes('strong') || 
                                item.toLowerCase().includes('good') || 
                                item.toLowerCase().includes('clear')
              const isWarning = item.toLowerCase().includes('could') || 
                               item.toLowerCase().includes('consider') ||
                               item.toLowerCase().includes('add more')
              
              const feedbackType = isPositive ? 'success' : isWarning ? 'warning' : 'error'
              
              return (
                <motion.div
                  key={index}
                  className={`feedback-item ${feedbackType}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                >
                  {item}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="console-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="p-4 bg-ibm-blue/10 border border-ibm-blue/30 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-ibm-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <p className="text-sm text-ibm-blue font-medium mb-1">Want to see the ideal answer?</p>
                <p className="text-sm text-ibm-blue/90">
                  Review recommended products and a sample response to learn from this scenario.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              className="btn-primary flex-1" 
              onClick={() => navigate('/ideal-answer')}
            >
              View Ideal Answer
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/')}
            >
              Try Another Scenario
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResultsPage

// Made with Bob
