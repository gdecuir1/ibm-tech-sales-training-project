import { motion } from 'framer-motion';
import { Building2, TrendingUp, Clock } from 'lucide-react';
import { mockIndustryData } from '../../../utils/mockData';
import { getMasteryColor, getMasteryLabel, getIndustryIcon, formatDate } from '../../../utils/helpers';

function IndustryHeatmap() {
  // Sort industries by mastery
  const sortedIndustries = [...mockIndustryData].sort((a, b) => b.mastery - a.mastery);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Industry Mastery</h2>
          <p className="text-sm text-gray-400">Your performance across different industries</p>
        </div>
        <Building2 className="w-8 h-8 text-blue-400" />
      </div>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {mockIndustryData.map((industry, index) => {
          const masteryColor = getMasteryColor(industry.mastery);
          const masteryLabel = getMasteryLabel(industry.mastery);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer hover:border-blue-500/30 transition-all"
            >
              {/* Mastery Background */}
              <div 
                className={`absolute inset-0 ${masteryColor} opacity-10 rounded-xl transition-opacity group-hover:opacity-20`}
              />
              
              <div className="relative z-10">
                {/* Industry Icon */}
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(industry.name)}
                </div>
                
                {/* Industry Name */}
                <div className="font-semibold text-sm mb-2">{industry.name}</div>
                
                {/* Mastery Percentage */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Mastery</span>
                  <span className={`text-lg font-bold ${masteryColor.replace('bg-', 'text-')}`}>
                    {industry.mastery}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${industry.mastery}%` }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                    className={`h-full ${masteryColor} rounded-full`}
                  />
                </div>
                
                {/* Stats */}
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Attempts:</span>
                    <span className="text-gray-400">{industry.attempts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Score:</span>
                    <span className="text-gray-400">{industry.avgScore}%</span>
                  </div>
                </div>
              </div>

              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-gray-900 border border-white/20 rounded-lg p-3 shadow-xl whitespace-nowrap">
                  <div className="text-sm font-semibold mb-2">{industry.name}</div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-white">{masteryLabel}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Best Score:</span>
                      <span className="text-white">{industry.bestScore}%</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Difficulty:</span>
                      <span className="text-white">{industry.difficulty}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Last:</span>
                      <span className="text-white">{formatDate(industry.lastPracticed)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Industry Rankings */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Industries */}
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold text-green-400">Top Industries</h3>
          </div>
          <div className="space-y-3">
            {sortedIndustries.slice(0, 3).map((industry, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getIndustryIcon(industry.name)}</span>
                  <div>
                    <div className="font-medium text-sm">{industry.name}</div>
                    <div className="text-xs text-gray-400">{industry.attempts} attempts</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">{industry.mastery}%</div>
                  <div className="text-xs text-gray-400">{getMasteryLabel(industry.mastery)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries to Focus On */}
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-yellow-400" />
            <h3 className="font-semibold text-yellow-400">Practice Opportunities</h3>
          </div>
          <div className="space-y-3">
            {sortedIndustries.slice(-3).reverse().map((industry, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getIndustryIcon(industry.name)}</span>
                  <div>
                    <div className="font-medium text-sm">{industry.name}</div>
                    <div className="text-xs text-gray-400">{industry.attempts} attempts</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-400">{industry.mastery}%</div>
                  <div className="text-xs text-gray-400">{getMasteryLabel(industry.mastery)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {mockIndustryData.filter(i => i.mastery >= 80).length}
          </div>
          <div className="text-xs text-gray-400">Expert Level</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {mockIndustryData.filter(i => i.mastery >= 60 && i.mastery < 80).length}
          </div>
          <div className="text-xs text-gray-400">Advanced Level</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {mockIndustryData.filter(i => i.mastery < 60).length}
          </div>
          <div className="text-xs text-gray-400">Developing</div>
        </div>
      </div>
    </div>
  );
}

export default IndustryHeatmap;

// Made with Bob
