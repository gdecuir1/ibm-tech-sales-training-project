import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { mockSkillRadar } from '../../../utils/mockData';

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
        <div className="bg-white border border-ibm-gray-20 shadow-overlay p-3">
          <p className="text-sm font-semibold text-ibm-gray-100 mb-1">{payload[0].payload.skill}</p>
          <p className="text-lg font-semibold text-ibm-blue-60 font-mono">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Radar Chart */}
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#E0E0E0" />
            <PolarAngleAxis 
              dataKey="skill" 
              stroke="#8D8D8D"
              style={{ fontSize: '11px' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              stroke="#8D8D8D"
              style={{ fontSize: '10px' }}
            />
            <Radar 
              name="Skills" 
              dataKey="value" 
              stroke="#0F62FE" 
              fill="#0F62FE" 
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Skill Breakdown */}
      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-ibm-gray-20">
        {/* Strongest Skills */}
        <div>
          <div className="metric-label mb-3">Top strengths</div>
          <div className="space-y-3">
            {strongest.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-ibm-gray-100">{skill.skill}</span>
                  <span className="text-sm font-semibold text-ibm-gray-100 font-mono">{skill.value}%</span>
                </div>
                <div className="h-1.5 bg-ibm-gray-10 overflow-hidden">
                  <div
                    className="h-full bg-ibm-green transition-all duration-300"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div>
          <div className="metric-label mb-3">Focus areas</div>
          <div className="space-y-3">
            {weakest.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-ibm-gray-100">{skill.skill}</span>
                  <span className="text-sm font-semibold text-ibm-gray-100 font-mono">{skill.value}%</span>
                </div>
                <div className="h-1.5 bg-ibm-gray-10 overflow-hidden">
                  <div
                    className="h-full bg-ibm-yellow transition-all duration-300"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillRadarChart;

// Made with Bob
