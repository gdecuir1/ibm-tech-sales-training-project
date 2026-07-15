import { motion } from 'framer-motion';
import { Target, Calendar, TrendingUp } from 'lucide-react';
import { mockGoals } from '../../../utils/mockData';

function GoalsSection() {
  const goalCategories = [
    { title: 'Daily Goals', data: mockGoals.daily, icon: Target, color: 'blue' },
    { title: 'Weekly Goals', data: mockGoals.weekly, icon: Calendar, color: 'purple' },
    { title: 'Monthly Goals', data: mockGoals.monthly, icon: TrendingUp, color: 'green' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Goals</h2>
        <Target className="w-6 h-6 text-blue-400" />
      </div>

      <div className="space-y-6">
        {goalCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <div key={catIndex}>
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-4 h-4 text-${category.color}-400`} />
                <h3 className="text-sm font-semibold text-gray-400">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.data.map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    className="bg-white/5 border border-white/10 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{goal.title}</span>
                      <span className="text-xs text-gray-400">
                        {goal.current}/{goal.target}
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ delay: (catIndex * 0.1) + (index * 0.05) + 0.2, duration: 0.6 }}
                        className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoalsSection;

// Made with Bob
