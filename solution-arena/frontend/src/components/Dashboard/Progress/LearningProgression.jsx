import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';
import { mockScoreHistory } from '../../../utils/mockData';
import { formatDate } from '../../../utils/helpers';

function LearningProgression() {
  // Transform data for charts
  const chartData = mockScoreHistory.map(item => ({
    date: formatDate(item.date),
    score: item.score,
    difficulty: item.difficulty
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-white/20 rounded-lg p-3 shadow-xl">
          <p className="text-sm text-gray-400 mb-1">{payload[0].payload.date}</p>
          <p className="text-lg font-bold text-blue-400">{payload[0].value}%</p>
          <p className="text-xs text-gray-500">{payload[0].payload.difficulty}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Learning Progression</h2>
          <p className="text-sm text-gray-400">Your score improvement over time</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-semibold">+26% growth</span>
        </div>
      </div>

      {/* Main Chart */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis 
              dataKey="date" 
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fill="url(#scoreGradient)"
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 rounded-xl p-4"
        >
          <div className="text-sm text-gray-400 mb-1">Starting Score</div>
          <div className="text-2xl font-bold text-red-400">65%</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 rounded-xl p-4"
        >
          <div className="text-sm text-gray-400 mb-1">Current Score</div>
          <div className="text-2xl font-bold text-green-400">91%</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 rounded-xl p-4"
        >
          <div className="text-sm text-gray-400 mb-1">Improvement</div>
          <div className="text-2xl font-bold text-blue-400">+26%</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 rounded-xl p-4"
        >
          <div className="text-sm text-gray-400 mb-1">Trend</div>
          <div className="text-2xl font-bold text-purple-400">↗ Rising</div>
        </motion.div>
      </div>

      {/* Difficulty Progression */}
      <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-blue-400">Difficulty Progression</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full" style={{ width: '75%' }} />
          </div>
          <span className="text-sm font-semibold text-purple-400">Advanced</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          You've progressed from Beginner to Advanced difficulty
        </p>
      </div>
    </div>
  );
}

export default LearningProgression;

// Made with Bob
