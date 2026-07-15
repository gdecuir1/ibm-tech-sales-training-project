import { motion } from 'framer-motion';
import { Brain, TrendingUp, AlertTriangle, Target, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AICoach() {
  const navigate = useNavigate();

  const insights = [
    {
      type: 'strength',
      icon: TrendingUp,
      title: 'Architecture Excellence',
      description: 'You consistently score 90%+ on solution architecture questions. This is your strongest skill.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400'
    },
    {
      type: 'weakness',
      icon: AlertTriangle,
      title: 'Objection Handling Gap',
      description: 'Your objection handling scores 15% below your average. Focus here for maximum improvement.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      textColor: 'text-yellow-400'
    },
    {
      type: 'opportunity',
      icon: Target,
      title: 'Healthcare Mastery Path',
      description: 'Complete 3 more healthcare scenarios to reach expert level and unlock the Healthcare Champion badge.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400'
    }
  ];

  const recommendations = [
    {
      title: 'Practice Healthcare Objection Handling',
      reason: 'Combines your weakest skill with an industry close to mastery',
      impact: '+8% estimated score improvement',
      priority: 'High',
      action: 'Start Practice'
    },
    {
      title: 'Master Government Sector',
      reason: 'Only 3 attempts - diversify your industry experience',
      impact: '+12% portfolio coverage',
      priority: 'Medium',
      action: 'Explore'
    },
    {
      title: 'Advanced Finance Scenarios',
      reason: 'You excel at Finance - ready for advanced challenges',
      impact: 'Unlock Expert tier',
      priority: 'Low',
      action: 'Challenge'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI Coach Insights</h2>
            <p className="text-sm text-gray-400">Personalized recommendations based on your performance</p>
          </div>
        </div>
        <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
      </div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${insight.bgColor} border ${insight.borderColor} rounded-xl p-4`}
            >
              <div className={`inline-flex p-2 bg-gradient-to-br ${insight.color} rounded-lg mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className={`font-semibold mb-2 ${insight.textColor}`}>{insight.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{insight.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* AI Analysis */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
            <Brain className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-blue-400 mb-2">Detailed Analysis</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Based on your last 47 scenarios, you demonstrate exceptional technical architecture skills (92%) 
              and strong business outcomes articulation (88%). However, objection handling (68%) and relationship 
              building (73%) present opportunities for growth.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Recommendation:</span> Completing three intermediate 
              healthcare scenarios focused on objection handling would likely increase your average score by 8% 
              and accelerate your path to Healthcare Expert status.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Actions */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-400" />
          <span>Recommended Next Steps</span>
        </h3>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/30 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold">{rec.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-lg ${
                      rec.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                      rec.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {rec.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{rec.reason}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span className="text-purple-400 font-semibold">{rec.impact}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/interactive')}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 group-hover:scale-105"
                >
                  {rec.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Readiness Score */}
      <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold mb-1">Customer Readiness Score</h3>
            <p className="text-sm text-gray-400">Based on comprehensive skill analysis</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-400">82%</div>
            <div className="text-xs text-gray-400">Ready for most scenarios</div>
          </div>
        </div>
        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '82%' }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AICoach;

// Made with Bob
