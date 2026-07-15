import { motion } from 'framer-motion';
import { 
  Target, TrendingUp, Trophy, Zap, Clock, Award, 
  BarChart3, CheckCircle2, ArrowUp, ArrowDown, Minus
} from 'lucide-react';
import { mockUserStats } from '../../../utils/mockData';
import { formatNumber } from '../../../utils/helpers';

function OverviewCards() {
  const cards = [
    {
      title: 'Total Scenarios',
      value: mockUserStats.totalScenarios,
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      trend: '+12%',
      trendDirection: 'up',
      subtitle: 'vs last week'
    },
    {
      title: 'Average Score',
      value: `${mockUserStats.averageScore}%`,
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      trend: '+5%',
      trendDirection: 'up',
      subtitle: 'vs last week'
    },
    {
      title: 'Highest Score',
      value: `${mockUserStats.highestScore}%`,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      trend: '+4%',
      trendDirection: 'up',
      subtitle: 'personal best'
    },
    {
      title: 'Current Difficulty',
      value: mockUserStats.currentDifficulty,
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      trend: 'Level up',
      trendDirection: 'up',
      subtitle: 'progressing well'
    },
    {
      title: 'Mastery',
      value: `${mockUserStats.masteryPercentage}%`,
      icon: Award,
      color: 'from-indigo-500 to-purple-500',
      trend: '+8%',
      trendDirection: 'up',
      subtitle: 'overall progress'
    },
    {
      title: 'Current Rank',
      value: `#${mockUserStats.currentRank}`,
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500',
      trend: '+3',
      trendDirection: 'up',
      subtitle: 'moved up'
    },
    {
      title: 'Hours Practiced',
      value: mockUserStats.hoursPracticed,
      icon: Clock,
      color: 'from-cyan-500 to-blue-500',
      trend: '+4.5h',
      trendDirection: 'up',
      subtitle: 'this week'
    },
    {
      title: 'Industries Mastered',
      value: mockUserStats.industriesMastered,
      icon: CheckCircle2,
      color: 'from-teal-500 to-green-500',
      trend: '+1',
      trendDirection: 'up',
      subtitle: 'new mastery'
    },
    {
      title: 'Completion Rate',
      value: `${mockUserStats.completionRate}%`,
      icon: Target,
      color: 'from-orange-500 to-red-500',
      trend: '+2%',
      trendDirection: 'up',
      subtitle: 'consistency'
    }
  ];

  const getTrendIcon = (direction) => {
    if (direction === 'up') return ArrowUp;
    if (direction === 'down') return ArrowDown;
    return Minus;
  };

  const getTrendColor = (direction) => {
    if (direction === 'up') return 'text-green-400';
    if (direction === 'down') return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Performance Overview</h2>
        <span className="text-sm text-gray-400">Last updated: just now</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const TrendIcon = getTrendIcon(card.trendDirection);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Trend Badge */}
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 ${getTrendColor(card.trendDirection)}`}>
                    <TrendIcon className="w-3 h-3" />
                    <span className="text-xs font-semibold">{card.trend}</span>
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <div className="text-3xl font-bold mb-1">
                    {typeof card.value === 'number' ? formatNumber(card.value) : card.value}
                  </div>
                  <div className="text-sm text-gray-400">{card.title}</div>
                </div>

                {/* Subtitle */}
                <div className="text-xs text-gray-500">{card.subtitle}</div>

                {/* Mini Sparkline (decorative) */}
                <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${card.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewCards;

// Made with Bob
