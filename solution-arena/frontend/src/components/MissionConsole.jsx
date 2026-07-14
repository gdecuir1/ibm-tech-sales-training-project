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
    <div className="min-h-screen flex flex-col relative">
      {/* Etched Console Header - No Box, Just Hairline and Glow */}
      <header className="sticky top-0 z-50 backdrop-blur-sm">
        {/* Subtle top glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-console-bg via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-8">
            {/* Left: Minimal Logo */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-ibm-blue rounded-full animate-glow-pulse" />
              <h1 className="text-sm tracking-wide text-console-text-dim uppercase">
                IBM DealSprint
              </h1>
            </div>

            {/* Right: Timer & Score - No Boxes */}
            <div className="flex items-center gap-8">
              {/* Timer */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-console-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base text-console-text">
                  {formatTime(timerSeconds)}
                </span>
              </div>

              {/* Score Ticker - Glowing Text */}
              <motion.div
                className="flex items-center gap-2"
                animate={score !== displayScore ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 text-ibm-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span
                  className="text-lg font-semibold text-ibm-blue"
                  style={{ textShadow: '0 0 20px rgba(15, 98, 254, 0.5)' }}
                >
                  {displayScore}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Etched Progress Rail - Integrated into Background */}
          <div className="hidden md:block relative">
            {/* Base etched line */}
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-console-text-dim/30 to-transparent" />
              
              {/* Progress glow overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-ibm-blue/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (currentStep + 1) / STEP_NAMES.length }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {/* Step Nodes */}
            <div className="absolute inset-0 flex justify-between items-center -mt-1">
              {STEP_NAMES.map((name, index) => (
                <motion.div
                  key={name}
                  className="relative group cursor-default"
                  initial={false}
                >
                  {/* Node */}
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index < currentStep
                        ? 'bg-ibm-green'
                        : index === currentStep
                        ? 'bg-ibm-blue'
                        : 'bg-console-text-dim/40'
                    }`}
                    animate={
                      index === currentStep
                        ? {
                            scale: [1, 1.5, 1],
                            boxShadow: [
                              '0 0 0px rgba(15, 98, 254, 0)',
                              '0 0 20px rgba(15, 98, 254, 0.6)',
                              '0 0 0px rgba(15, 98, 254, 0)',
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Step Label (on hover) */}
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="px-3 py-1.5 text-xs font-mono whitespace-nowrap text-console-text backdrop-blur-sm">
                      <div className="text-ibm-blue mb-0.5">{index + 1}</div>
                      <div className="text-console-text-dim">{name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Progress - Minimal */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-console-text-dim">
                {currentStep + 1}/{STEP_NAMES.length}
              </span>
              <span className="text-xs text-console-text">
                {STEP_NAMES[currentStep]}
              </span>
            </div>
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-console-text-dim/30 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-ibm-blue/60 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (currentStep + 1) / STEP_NAMES.length }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom hairline separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-console-text-dim/20 to-transparent" />
      </header>

      {/* Main Content Area - Seamless */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  )
}

// Made with Bob

