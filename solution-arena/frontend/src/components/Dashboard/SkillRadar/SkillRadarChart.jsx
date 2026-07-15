import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { Target, TrendingUp, AlertCircle } from 'lucide-react';
import { mockSkillRadar } from '../../../utils/mockData';
import { getSkillIcon } from '../../../utils/helpers';

function SkillRadarChart() {
  // Transform data for radar chart
  const radarData = [
    { skill: 'Business Priorities', value: mockSkillRadar.businessPriorities, fullMark: 100 },
    { skill: 'Tech Selection', value: mockSkillRadar.technologySelection, fullMark: 100 },
    { skill: 'Architecture', value: mockSkillRadar.architecture, fullMark: 100 },
    { skill: 'Justification', value: mockSkillRadar.solutionJustification, fullMark: 100 },
    { skill: 'Objections', value: mockSkillRadar.objectionHandling, fullMark: 100 },
    { skill: 'Cross-Selling', value: mockSkillRadar.crossSelling, fullMark: 100 },
    { skill: 'Outcomes', value: mockSkillRadar.businessOutcomes, fullMark: 100 },
    { skill: 'Consultative', value: mockSkillRadar.consultativeSelling, fullMark: 100 },
    { skill: 'Relationships', value: mockSkillRadar.relationshipBuilding, fullMark: 100 },
    { skill: 'Messaging', value: mockSkillRadar.valueMessaging, fullMark: 100 }
  ];

  // Find strongest and weakest skills
  const sortedSkills = [...radarData].sort((a, b) => b.value - a.value);
  const strongest = sortedSkills.slice(0, 3);
  const weakest = sortedSkills.slice(-3).reverse();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-white/20 rounded-lg p-3 shadow-xl">
          <p className="text-sm font-semibold text-white mb-1">{payload[0].payload.skill}</p>
          <p className="text-lg font-bold text-blue-400">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Skill Analysis</h2>
          <p className="text-sm text-gray-400">Your performance across key sales competencies</p>
        </div>
        <Target className="w-8 h-8 text-blue-400" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#ffffff20" />
              <PolarAngleAxis 
                dataKey="skill" 
                stroke="#9ca3af"
                style={{ fontSize: '11px' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                stroke="#9ca3af"
                style={{ fontSize: '10px' }}
              />
              <Radar 
                name="Skills" 
                dataKey="value" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Breakdown */}
        <div className="space-y-6">
          {/* Strongest Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold text-green-400">Top Strengths</h3>
            </div>
            <div className="space-y-3">
              {strongest.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-500/5 border border-green-500/20 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{skill.skill}</span>
                    <span className="text-lg font-bold text-green-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-yellow-400">Focus Areas</h3>
            </div>
            <div className="space-y-3">
              {weakest.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{skill.skill}</span>
                    <span className="text-lg font-bold text-yellow-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Insight */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-blue-400">💡 Insight:</span> Your architecture skills are exceptional at 92%. 
              Focus on objection handling (68%) to become a well-rounded sales professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillRadarChart;

// Made with Bob
