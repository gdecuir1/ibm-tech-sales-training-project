import { motion } from 'framer-motion';
import { Star, Zap, Flame, Heart, TrendingUp, Award } from 'lucide-react';
import { mockPersonalBests } from '../../../utils/mockData';
import { formatDuration, formatDate } from '../../../utils/helpers';

function PersonalBests() {
  const bests = [
    { icon: Star, label: 'Highest Score', value: `${mockPersonalBests.highestScore.value}%`, detail: mockPersonalBests.highestScore.scenario, color: 'yellow' },
    { icon: Zap, label: 'Fastest Time', value: formatDuration(mockPersonalBests.fastestCompletion.value), detail: mockPersonalBests.fastestCompletion.scenario, color: 'blue' },
    { icon: Flame, label: 'Best Streak', value: `${mockPersonalBests.bestStreak.value} days`, detail: formatDate(mockPersonalBests.bestStreak.startDate), color: 'orange' },
    { icon: Heart, label: 'Favorite Industry', value: mockPersonalBests.favoriteIndustry.value, detail: `${mockPersonalBests.favoriteIndustry.avgScore}% avg`, color: 'pink' },
    { icon: TrendingUp, label: 'Most Improved', value: mockPersonalBests.mostImprovedSkill.value, detail: mockPersonalBests.mostImprovedSkill.improvement, color: 'green' },
    { icon: Award, label: 'Most Practiced', value: mockPersonalBests.mostPracticedIndustry.value, detail: `${mockPersonalBests.mostPracticedIndustry.count} scenarios`, color: 'purple' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Personal Bests</h2>
          <p className="text-xs text-gray-400">Your top achievements</p>
        </div>
        <Star className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="space-y-3">
        {bests.map((best, index) => {
          const Icon = best.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-${best.color}-500/10 rounded-lg flex-shrink-0`}>
                  <Icon className={`w-4 h-4 text-${best.color}-400`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 mb-1">{best.label}</div>
                  <div className="text-sm font-bold mb-1">{best.value}</div>
                  <div className="text-xs text-gray-500 truncate">{best.detail}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalBests;

// Made with Bob
