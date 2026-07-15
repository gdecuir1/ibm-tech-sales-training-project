import { useState } from 'react';
import { motion } from 'framer-motion';
import { History, Search, Filter, ChevronDown, Eye } from 'lucide-react';
import { mockScenarioHistory } from '../../../utils/mockData';
import { formatDate, formatDuration, getScoreColor, getDifficultyColor, getIndustryIcon } from '../../../utils/helpers';

function ScenarioHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Get unique industries and difficulties
  const industries = ['all', ...new Set(mockScenarioHistory.map(s => s.industry))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  // Filter and sort data
  let filteredData = mockScenarioHistory.filter(scenario => {
    const matchesSearch = scenario.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === 'all' || scenario.industry === filterIndustry;
    const matchesDifficulty = filterDifficulty === 'all' || scenario.difficulty === filterDifficulty;
    return matchesSearch && matchesIndustry && matchesDifficulty;
  });

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Scenario History</h2>
          <p className="text-sm text-gray-400">Your recent practice sessions</p>
        </div>
        <History className="w-8 h-8 text-blue-400" />
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search industry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        {/* Industry Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer"
          >
            {industries.map(industry => (
              <option key={industry} value={industry} className="bg-gray-900">
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Difficulty Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty} className="bg-gray-900">
                {difficulty === 'all' ? 'All Difficulties' : difficulty}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Industry</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Difficulty</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Score</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Time</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">XP</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Accuracy</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((scenario, index) => (
              <motion.tr
                key={scenario.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-gray-300">
                  {formatDate(scenario.date)}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getIndustryIcon(scenario.industry)}</span>
                    <span className="text-sm font-medium">{scenario.industry}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${getDifficultyColor(scenario.difficulty)} bg-opacity-10`}>
                    {scenario.difficulty}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-lg font-bold ${getScoreColor(scenario.score)}`}>
                    {scenario.score}%
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-300">
                  {formatDuration(scenario.time)}
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-semibold text-purple-400">
                    +{scenario.xp}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden max-w-[60px]">
                      <div 
                        className={`h-full ${getScoreColor(scenario.accuracy).replace('text-', 'bg-')} rounded-full`}
                        style={{ width: `${scenario.accuracy}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{scenario.accuracy}%</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group">
                    <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
        <span>Showing {filteredData.length} of {mockScenarioHistory.length} scenarios</span>
        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}

export default ScenarioHistory;

// Made with Bob
