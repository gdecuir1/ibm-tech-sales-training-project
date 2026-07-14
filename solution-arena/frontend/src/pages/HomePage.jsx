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
    <div className="min-h-screen bg-console-bg flex items-center justify-center p-4">
      <motion.div 
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-3 h-3 bg-ibm-blue rounded-full animate-pulse" />
            <h1 className="text-5xl font-bold tracking-console text-console-text">
              SOLUTION ARENA
            </h1>
            <div className="w-3 h-3 bg-ibm-purple rounded-full animate-pulse" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-console-text-dim font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            IBM BTS Technical Sales Certification Simulator
          </motion.p>
          
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="status-badge excellent">
              ⚡ FAST INTERACTIVE MODE AVAILABLE
            </span>
          </motion.div>
        </div>

        {/* Mission Briefing */}
        <motion.div 
          className="console-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="border-l-4 border-ibm-blue pl-4 mb-6">
            <h2 className="text-2xl font-semibold tracking-console text-console-text mb-2">
              Mission Brief
            </h2>
            <p className="text-console-text/80 leading-relaxed">
              You're an IBM BTS intern racing the clock to prove technical sales fluency. 
              Pick your training mode and demonstrate mastery across solution architecture, 
              objection handling, and portfolio positioning.
            </p>
          </div>

          {/* Mode Selection Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Interactive Mode */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <div className="console-card border-2 border-ibm-blue bg-ibm-blue/5 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">⚡</span>
                      <h3 className="text-xl font-semibold tracking-console text-console-text">
                        Interactive Mode
                      </h3>
                    </div>
                    <div className="difficulty-tag intermediate">RECOMMENDED</div>
                  </div>
                </div>

                <p className="text-console-text/80 mb-4 leading-relaxed flex-grow">
                  High-velocity multiple-choice drill. 7 steps, 3–6 minutes, instant scoring. 
                  Built for speed and repetition—this is your flight-sim training console.
                </p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-ibm-blue rounded-full" />
                    <span className="font-mono">7-step guided workflow</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-ibm-blue rounded-full" />
                    <span className="font-mono">Multiple-choice selections</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-ibm-blue rounded-full" />
                    <span className="font-mono">Real-time score tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-ibm-blue rounded-full" />
                    <span className="font-mono">Target: 3–6 min completion</span>
                  </div>
                </div>

                <button
                  className="btn-primary w-full"
                  onClick={handleInteractiveStart}
                >
                  Launch Interactive Mode
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Classic Mode */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <div className="console-card border-2 border-console-text-dim/20 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">📝</span>
                      <h3 className="text-xl font-semibold tracking-console text-console-text">
                        Classic Mode
                      </h3>
                    </div>
                    <div className="difficulty-tag advanced">DEEP WORK</div>
                  </div>
                </div>

                <p className="text-console-text/80 mb-4 leading-relaxed flex-grow">
                  Traditional long-form practice. Write detailed justifications, handle objections 
                  with open responses. Slower pace, deeper analysis—10–15 minutes per scenario.
                </p>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
                    <span className="font-mono">Full scenario analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
                    <span className="font-mono">Written justifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
                    <span className="font-mono">Objection handling essays</span>
                  </div>
                  <div className="flex items-center gap-2 text-console-text/70">
                    <div className="w-1.5 h-1.5 bg-console-text-dim rounded-full" />
                    <span className="font-mono">Comprehensive feedback</span>
                  </div>
                </div>

                <button
                  className="btn-secondary w-full"
                  onClick={handleStart}
                >
                  Start Classic Mode
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Strategy Note */}
          <motion.div 
            className="mt-6 p-4 bg-ibm-blue/10 border border-ibm-blue/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-ibm-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-ibm-blue font-medium mb-1">Training Strategy</p>
                <p className="text-sm text-ibm-blue/90">
                  Start with Interactive Mode for high-volume reps and pattern recognition. 
                  Switch to Classic Mode when you need to build detailed technical narratives.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Stats */}
        <motion.div 
          className="flex items-center justify-center gap-8 text-console-text-dim text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-ibm-green rounded-full" />
            <span>7 STEPS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-ibm-purple rounded-full" />
            <span>5 CATEGORIES</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-ibm-blue rounded-full" />
            <span>REAL-TIME SCORING</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePage

// Made with Bob
