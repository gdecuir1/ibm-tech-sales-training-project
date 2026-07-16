import { motion } from 'framer-motion';
import { Trophy, Crown, Medal } from 'lucide-react';
import { mockLeaderboard } from '../../../utils/mockData';

function LeaderboardWidget() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Leaderboard</h2>
          <p className="text-xs text-gray-400">Top performers</p>
        </div>
        <Trophy className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="space-y-2">
        {mockLeaderboard.slice(0, 10).map((user, index) => {
          const isCurrentUser = user.isCurrentUser;
          const getRankIcon = (rank) => {
            if (rank === 1) return <Crown className="w-4 h-4 text-yellow-400" />;
            if (rank === 2) return <Medal className="w-4 h-4 text-gray-300" />;
            if (rank === 3) return <Medal className="w-4 h-4 text-orange-400" />;
            return <span className="text-xs text-gray-500">#{rank}</span>;
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isCurrentUser
                  ? 'bg-blue-500/20 border border-blue-500/30'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="w-6 flex items-center justify-center">
                {getRankIcon(user.rank)}
              </div>
              <div className="text-2xl">{user.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {user.name}
                  {isCurrentUser && <span className="text-blue-400 ml-1">(You)</span>}
                </div>
                <div className="text-xs text-gray-400">{user.xp} XP</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">{user.score}%</div>
                <div className="text-xs text-gray-400">{user.streak} day streak</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors">
        View Full Leaderboard
      </button>
    </div>
  );
}

export default LeaderboardWidget;

// Made with Bob
