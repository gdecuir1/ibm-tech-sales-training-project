import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <div className="min-h-screen relative flex items-center justify-center p-8">
      <motion.div 
        className="max-w-6xl w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section - Large, Bold Typography */}
        <div className="text-center mb-24">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-2 h-2 bg-ibm-blue rounded-full animate-glow-pulse" />
              <h1 className="text-display text-console-text">
                IBM DEALSPRINT
              </h1>
              <div className="w-2 h-2 bg-ibm-purple rounded-full animate-glow-pulse" />
            </div>
            
            <p className="text-2xl text-console-text-dim tracking-wide">
              Master technical sales through rapid-fire scenario training
            </p>
          </motion.div>
          
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="status-badge excellent">
              FAST INTERACTIVE MODE AVAILABLE
            </span>
          </motion.div>
        </div>

        {/* Mission Brief - No Box, Just Typography and Glow */}
        <motion.div 
          className="mb-32 glow-zone-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading text-console-text mb-6 text-center">
              Mission Brief
            </h2>
            <p className="text-xl text-console-text/80 leading-relaxed text-center">
              You're an IBM BTS intern racing the clock to prove technical sales fluency. 
              Pick your training mode and demonstrate mastery across solution architecture, 
              objection handling, and portfolio positioning.
            </p>
          </div>
        </motion.div>

        {/* Mode Selection - Flowing List, Not Grid */}
        <div className="space-y-20 mb-32">
          {/* Interactive Mode */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-heading text-console-text">
                      Interactive Mode
                    </h3>
                    <div className="difficulty-tag intermediate">RECOMMENDED</div>
                  </div>
                  
                  <p className="text-xl text-console-text/70 leading-relaxed max-w-2xl">
                    High-velocity multiple-choice drill. 7 steps, 3–6 minutes, instant scoring. 
                    Built for speed and repetition—this is your flight-sim training console.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8 text-console-text-dim">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">7-step guided workflow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Multiple-choice selections</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Real-time score tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Target: 3–6 min completion</span>
                </div>
              </div>

              <button
                className="btn-primary group"
                onClick={handleInteractiveStart}
              >
                <span>Launch Interactive Mode</span>
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Subtle separator */}
            <div className="hairline-separator" />
          </motion.div>

          {/* Classic Mode */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-heading text-console-text">
                      Classic Mode
                    </h3>
                    <div className="difficulty-tag advanced">DEEP WORK</div>
                  </div>
                  
                  <p className="text-xl text-console-text/70 leading-relaxed max-w-2xl">
                    Traditional long-form practice. Write detailed justifications, handle objections 
                    with open responses. Slower pace, deeper analysis—10–15 minutes per scenario.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8 text-console-text-dim">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Full scenario analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Written justifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Objection handling essays</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-console-text-dim rounded-full" />
                  <span className="text-sm">Comprehensive feedback</span>
                </div>
              </div>

              <button
                className="btn-secondary group"
                onClick={handleStart}
              >
                <span>Start Classic Mode</span>
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Strategy Note - Glow Zone */}
        <motion.div 
          className="glow-zone-purple max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-ibm-blue flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-ibm-blue font-medium mb-2 uppercase tracking-wide">Training Strategy</p>
              <p className="text-base text-console-text/70 leading-relaxed">
                Start with Interactive Mode for high-volume reps and pattern recognition. 
                Switch to Classic Mode when you need to build detailed technical narratives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Stats - Minimal */}
        <motion.div
          className="flex items-center justify-center gap-12 text-console-text-dim text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
            <span>7 STEPS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
            <span>5 CATEGORIES</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
            <span>REAL-TIME SCORING</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePage

// Made with Bob
