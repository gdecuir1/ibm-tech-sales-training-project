import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const STEP_NAMES = [
  'Priorities',
  'Technology',
  'Architecture',
  'Justification',
  'Objections',
  'Cross-Sell',
  'Results'
]

export default function MissionConsole({ currentStep = 0, score = 0, timerSeconds = 0, children }) {
  const [displayScore, setDisplayScore] = useState(0)

  // Animate score changes
  useEffect(() => {
    if (score !== displayScore) {
      const increment = score > displayScore ? 1 : -1
      const timer = setInterval(() => {
        setDisplayScore(prev => {
          if (prev === score) {
            clearInterval(timer)
            return prev
          }
          return prev + increment
        })
      }, 30)
      return () => clearInterval(timer)
    }
  }, [score, displayScore])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mission Console Top Bar */}
      <header className="bg-console-surface border-b border-console-text-dim/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo/Title */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ibm-blue rounded-full animate-pulse" />
              <h1 className="text-lg font-semibold tracking-console text-console-text">
                SOLUTION ARENA
              </h1>
            </div>

            {/* Center: Progress Rail */}
            <div className="hidden md:flex items-center gap-2">
              {STEP_NAMES.map((name, index) => (
                <div key={name} className="flex items-center">
                  <motion.div
                    className={`relative flex flex-col items-center group cursor-default`}
                    initial={false}
                  >
                    {/* Step Segment */}
                    <div className="flex items-center gap-1">
                      <motion.div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index < currentStep
                            ? 'bg-ibm-green w-12'
                            : index === currentStep
                            ? 'bg-ibm-blue w-12'
                            : 'bg-console-text-dim/30 w-12'
                        }`}
                        initial={false}
                        animate={{
                          scaleX: index === currentStep ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    
                    {/* Step Label (on hover) */}
                    <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-console-surface-light px-2 py-1 rounded text-xs font-mono whitespace-nowrap border border-console-text-dim/20">
                        {index + 1}. {name}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Connector */}
                  {index < STEP_NAMES.length - 1 && (
                    <div className={`h-0.5 w-2 ${
                      index < currentStep ? 'bg-ibm-green/50' : 'bg-console-text-dim/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Right: Timer & Score */}
            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-console-surface-light rounded-lg border border-console-text-dim/20">
                <svg className="w-4 h-4 text-console-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-mono text-sm text-console-text">
                  {formatTime(timerSeconds)}
                </span>
              </div>

              {/* Score Ticker */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-ibm-blue/10 rounded-lg border border-ibm-blue/30"
                animate={score !== displayScore ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 text-ibm-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="font-mono text-sm font-semibold text-ibm-blue">
                  {displayScore}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Mobile Progress Indicator */}
          <div className="md:hidden pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-console-text-dim">
                Step {currentStep + 1} of {STEP_NAMES.length}
              </span>
              <span className="text-xs font-mono text-console-text">
                {STEP_NAMES[currentStep]}
              </span>
            </div>
            <div className="h-1 bg-console-text-dim/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-ibm-blue"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / STEP_NAMES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

// Made with Bob
