import { mockIndustryData } from '../../../utils/mockData';
import { getMasteryColor, getMasteryLabel } from '../../../utils/helpers';

function IndustryHeatmap() {
  // Sort industries by mastery
  const sortedIndustries = [...mockIndustryData].sort((a, b) => b.mastery - a.mastery);

  return (
    <div>
      {/* Heatmap Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {mockIndustryData.map((industry, index) => {
          const masteryColor = getMasteryColor(industry.mastery);
          
          return (
            <div
              key={index}
              className="border border-ibm-gray-20 p-3 hover:border-ibm-blue-60 transition-colors cursor-pointer"
            >
              <div className="font-medium text-sm mb-2 text-ibm-gray-100">{industry.name}</div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-ibm-gray-70">Mastery</span>
                <span className={`text-base font-semibold font-mono ${masteryColor.replace('bg-', 'text-')}`}>
                  {industry.mastery}%
                </span>
              </div>
              
              <div className="h-1.5 bg-ibm-gray-10 overflow-hidden mb-2">
                <div
                  className={`h-full ${masteryColor} transition-all duration-300`}
                  style={{ width: `${industry.mastery}%` }}
                />
              </div>
              
              <div className="text-xs text-ibm-gray-70 flex justify-between">
                <span>{industry.attempts} attempts</span>
                <span>{industry.avgScore}% avg</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ibm-gray-20">
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono mb-1">
            {mockIndustryData.filter(i => i.mastery >= 80).length}
          </div>
          <div className="text-xs text-ibm-gray-70">Expert</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono mb-1">
            {mockIndustryData.filter(i => i.mastery >= 60 && i.mastery < 80).length}
          </div>
          <div className="text-xs text-ibm-gray-70">Advanced</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono mb-1">
            {mockIndustryData.filter(i => i.mastery < 60).length}
          </div>
          <div className="text-xs text-ibm-gray-70">Developing</div>
        </div>
      </div>
    </div>
  );
}

export default IndustryHeatmap;

// Made with Bob
