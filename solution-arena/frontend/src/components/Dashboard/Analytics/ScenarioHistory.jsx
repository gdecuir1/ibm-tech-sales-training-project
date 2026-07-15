import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { mockScenarioHistory } from '../../../utils/mockData';
import { formatDate, formatDuration, getScoreColor, getDifficultyColor } from '../../../utils/helpers';

function ScenarioHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  // Get unique industries and difficulties
  const industries = ['all', ...new Set(mockScenarioHistory.map(s => s.industry))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  // Filter data
  let filteredData = mockScenarioHistory.filter(scenario => {
    const matchesSearch = scenario.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === 'all' || scenario.industry === filterIndustry;
    const matchesDifficulty = filterDifficulty === 'all' || scenario.difficulty === filterDifficulty;
    return matchesSearch && matchesIndustry && matchesDifficulty;
  });

  return (
    <div>
      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ibm-gray-50" />
          <input
            type="text"
            placeholder="Search industry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10 text-sm"
          />
        </div>

        {/* Industry Filter */}
        <div className="relative">
          <select
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="select-field text-sm"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ibm-gray-50 pointer-events-none" />
        </div>

        {/* Difficulty Filter */}
        <div className="relative">
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="select-field text-sm"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'all' ? 'All Difficulties' : difficulty}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ibm-gray-50 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Industry</th>
              <th>Difficulty</th>
              <th>Score</th>
              <th>Time</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((scenario) => (
              <tr key={scenario.id}>
                <td className="text-ibm-gray-70 font-mono text-xs">
                  {formatDate(scenario.date)}
                </td>
                <td className="font-medium">
                  {scenario.industry}
                </td>
                <td>
                  <span className={`status-badge ${
                    scenario.difficulty === 'Beginner' ? 'success' :
                    scenario.difficulty === 'Intermediate' ? 'info' :
                    scenario.difficulty === 'Advanced' ? 'warning' : 'error'
                  }`}>
                    {scenario.difficulty}
                  </span>
                </td>
                <td>
                  <span className={`font-semibold font-mono ${
                    scenario.score >= 90 ? 'text-ibm-green' :
                    scenario.score >= 70 ? 'text-ibm-blue-60' :
                    'text-ibm-red'
                  }`}>
                    {scenario.score}%
                  </span>
                </td>
                <td className="text-ibm-gray-70 font-mono text-sm">
                  {formatDuration(scenario.time)}
                </td>
                <td className="font-mono text-sm text-ibm-blue-60">
                  +{scenario.xp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 flex items-center justify-between text-sm text-ibm-gray-70">
        <span>Showing {filteredData.length} of {mockScenarioHistory.length} scenarios</span>
        <button className="btn-secondary text-sm py-2">
          Load More
        </button>
      </div>
    </div>
  );
}

export default ScenarioHistory;

// Made with Bob
