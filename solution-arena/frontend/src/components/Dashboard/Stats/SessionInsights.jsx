import { motion } from 'framer-motion';
import { Activity, Clock, Target, Brain, Zap, TrendingUp } from 'lucide-react';
import { mockSessionInsights } from '../../../utils/mockData';

function SessionInsights() {
  const insights = [
    { icon: Clock, label: 'Avg Decision Time', value: `${mockSessionInsights.avgDecisionTime}s`, color: 'blue', trend: '-2s' },
    { icon: Target, label: 'Question Accuracy', value: `${mockSessionInsights.questionAccuracy}%`, color: 'green', trend: '+5%' },
    { icon: Brain, label: 'Focus Score', value: `${mockSessionInsights.focusScore}%`, color: 'purple', trend: '+3%' },
    { icon: Zap, label: 'Confidence', value: `${mockSessionInsights.confidence}%`, color: 'yellow', trend: '+7%' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Session Insights</h2>
          <p className="text-sm text-gray-400">Your recent performance metrics</p>
        </div>
        <Activity className="w-8 h-8 text-blue-400" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <div className={`inline-flex p-2 bg-${insight.color}-500/10 rounded-lg mb-2`}>
                <Icon className={`w-5 h-5 text-${insight.color}-400`} />
              </div>
              <div className="text-2xl font-bold mb-1">{insight.value}</div>
              <div className="text-xs text-gray-400 mb-1">{insight.label}</div>
              <div className="text-xs text-green-400 font-semibold">{insight.trend}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-semibold text-red-400">Most Missed</h3>
          </div>
          <p className="text-sm text-gray-300">{mockSessionInsights.mostMissedQuestion}</p>
        </div>

        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <h3 className="text-sm font-semibold text-green-400">Most Improved</h3>
          </div>
          <p className="text-sm text-gray-300">{mockSessionInsights.mostImprovedTopic}</p>
        </div>
      </div>
    </div>
  );
}

export default SessionInsights;

// Made with Bob
