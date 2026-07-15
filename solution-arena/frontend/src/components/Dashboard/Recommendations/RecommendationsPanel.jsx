import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockRecommendations } from '../../../utils/mockData';
import { getRecommendationPriorityColor, getRecommendationPriorityBadge } from '../../../utils/helpers';

function RecommendationsPanel() {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">What to Practice Next</h2>
          <p className="text-xs text-gray-400">AI-powered suggestions</p>
        </div>
        <Lightbulb className="w-6 h-6 text-yellow-400" />
      </div>

      <div className="space-y-3">
        {mockRecommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all ${getRecommendationPriorityColor(rec.priority)}`}
            onClick={() => navigate('/interactive')}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-semibold flex-1">{rec.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-lg ${getRecommendationPriorityBadge(rec.priority)}`}>
                {rec.priority}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">{rec.reason}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-400 font-semibold">{rec.estimatedImprovement}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPanel;

// Made with Bob
