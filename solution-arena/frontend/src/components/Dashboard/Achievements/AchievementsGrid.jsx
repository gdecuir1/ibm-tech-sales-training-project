import { motion } from 'framer-motion';
import { Award, Lock } from 'lucide-react';
import { mockAchievements } from '../../../utils/mockData';

function AchievementsGrid() {
  const unlockedCount = mockAchievements.filter(a => a.unlocked).length;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Achievements</h2>
          <p className="text-xs text-gray-400">{unlockedCount}/{mockAchievements.length} unlocked</p>
        </div>
        <Award className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {mockAchievements.slice(0, 6).map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`relative rounded-xl p-3 border ${
              achievement.unlocked
                ? 'bg-yellow-500/10 border-yellow-500/20'
                : 'bg-white/5 border-white/10'
            }`}
          >
            {!achievement.unlocked && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
            )}
            <div className="text-2xl mb-1">{achievement.icon}</div>
            <div className="text-xs font-semibold mb-1 truncate">{achievement.name}</div>
            {achievement.unlocked ? (
              <div className="text-xs text-green-400">✓ Unlocked</div>
            ) : (
              <div className="text-xs text-gray-400">{achievement.progress}%</div>
            )}
          </motion.div>
        ))}
      </div>

      <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors">
        View All Achievements
      </button>
    </div>
  );
}

export default AchievementsGrid;

// Made with Bob
