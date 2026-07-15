import { motion } from 'framer-motion';
import { Sparkles, Calendar, Heart, AlertCircle, Clock, Zap, TrendingUp, Target } from 'lucide-react';
import { mockFunMetrics } from '../../../utils/mockData';

function FunMetrics() {
  const metrics = [
    { icon: Calendar, label: 'Most Practiced Day', value: mockFunMetrics.mostPracticedDay, color: 'blue' },
    { icon: TrendingUp, label: 'Best Day of Week', value: mockFunMetrics.bestDayOfWeek, color: 'green' },
    { icon: Heart, label: 'Favorite Industry', value: mockFunMetrics.favoriteIndustry, color: 'pink' },
    { icon: AlertCircle, label: 'Most Difficult', value: mockFunMetrics.mostDifficultIndustry, color: 'red' },
    { icon: Clock, label: 'Longest Session', value: `${mockFunMetrics.longestSession} min`, color: 'purple' },
    { icon: Zap, label: 'Avg Response Speed', value: `${mockFunMetrics.avgResponseSpeed}s`, color: 'yellow' },
    { icon: Target, label: 'Consistency Score', value: `${mockFunMetrics.consistencyScore}%`, color: 'cyan' },
    { icon: Sparkles, label: 'Momentum Score', value: `${mockFunMetrics.momentumScore}%`, color: 'indigo' },
    { icon: TrendingUp, label: 'Learning Velocity', value: mockFunMetrics.learningVelocity, color: 'emerald' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Fun Metrics</h2>
          <p className="text-sm text-gray-400">Interesting insights about your learning journey</p>
        </div>
        <Sparkles className="w-8 h-8 text-purple-400" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div className={`inline-flex p-2 bg-${metric.color}-500/10 rounded-lg mb-3`}>
                <Icon className={`w-5 h-5 text-${metric.color}-400`} />
              </div>
              <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
              <div className="text-lg font-bold">{metric.value}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-purple-400 mb-2">Did You Know?</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              You're most productive on {mockFunMetrics.bestDayOfWeek}s and tend to practice {mockFunMetrics.favoriteIndustry} 
              scenarios the most. Your learning velocity has increased by {mockFunMetrics.learningVelocity} over the past month!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunMetrics;

// Made with Bob
