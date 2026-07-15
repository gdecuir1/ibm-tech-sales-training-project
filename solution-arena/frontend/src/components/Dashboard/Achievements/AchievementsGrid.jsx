import { Lock } from 'lucide-react';
import { mockAchievements } from '../../../utils/mockData';

function AchievementsGrid() {
  const unlockedCount = mockAchievements.filter(a => a.unlocked).length;

  return (
    <div>
      <div className="text-xs text-ibm-gray-70 mb-4">
        {unlockedCount} of {mockAchievements.length} unlocked
      </div>

      <div className="grid grid-cols-3 gap-3">
        {mockAchievements.slice(0, 6).map((achievement) => (
          <div
            key={achievement.id}
            className={`relative border p-3 text-center ${
              achievement.unlocked
                ? 'border-ibm-blue-60 bg-ibm-blue-60/5'
                : 'border-ibm-gray-20 bg-ibm-gray-10'
            }`}
          >
            {!achievement.unlocked && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                <Lock className="w-4 h-4 text-ibm-gray-50" />
              </div>
            )}
            <div className="text-xs font-medium mb-1 truncate text-ibm-gray-100">
              {achievement.name}
            </div>
            {achievement.unlocked ? (
              <div className="text-xs text-ibm-green">Unlocked</div>
            ) : (
              <div className="text-xs text-ibm-gray-70">{achievement.progress}%</div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 btn-secondary text-sm py-2">
        View All
      </button>
    </div>
  );
}

export default AchievementsGrid;

// Made with Bob
