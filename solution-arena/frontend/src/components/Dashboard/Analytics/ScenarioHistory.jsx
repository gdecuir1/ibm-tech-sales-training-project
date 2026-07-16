import { useState, useEffect } from 'react';
import { Search, ChevronDown, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../../../services/storageService';
import { getScenarioById } from '../../../data/scenarios';
import { formatDate, formatDuration } from '../../../utils/helpers';

function ScenarioHistory() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Load scenario history from localStorage
    const history = storageService.getScenarioHistory();
    
    // Enrich history with scenario metadata
    const enrichedHistory = history.map(entry => {
      const scenario = getScenarioById(entry.scenarioId);
      return {
        ...entry,
        industry: scenario?.industry || 'Unknown',
        difficulty: scenario?.difficulty || 'Unknown',
        title: scenario?.title || 'Unknown Scenario',
        // Calculate duration (mock for now - will be real when we track start/end times)
        duration: Math.floor(Math.random() * 600) + 300, // 5-15 minutes
        // Calculate XP based on score
        xp: Math.round(entry.score / 2)
      };
    });
    
    setHistoryData(enrichedHistory);
  }, []);

  // Get unique industries and difficulties from actual data
  const industries = ['all', ...new Set(historyData.map(s => s.industry))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  // Filter data
  let filteredData = historyData.filter(scenario => {
    const matchesSearch =
      scenario.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase());
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
        {filteredData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-ibm-gray-50 mb-2">No scenario history yet</p>
            <p className="text-sm text-ibm-gray-40 mb-4">
              Complete your first scenario to see your progress here
            </p>
            <button
              onClick={() => navigate('/scenarios')}
              className="btn-primary text-sm"
            >
              Browse Scenarios
            </button>
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Scenario</th>
                <th>Industry</th>
                <th>Difficulty</th>
                <th>Score</th>
                <th>Time</th>
                <th>XP</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((scenario) => (
                <tr key={scenario.id} className="hover:bg-ibm-gray-10 transition-colors">
                  <td className="text-ibm-gray-70 font-mono text-xs">
                    {formatDate(scenario.date)}
                  </td>
                  <td className="font-medium text-ibm-gray-100 max-w-xs truncate">
                    {scenario.title}
                  </td>
                  <td className="text-ibm-gray-70">
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
                    {formatDuration(scenario.duration)}
                  </td>
                  <td className="font-mono text-sm text-ibm-blue-60">
                    +{scenario.xp}
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/scenarios/${scenario.scenarioId}`)}
                      className="text-ibm-blue-60 hover:text-ibm-blue-70 transition-colors"
                      title="Retry scenario"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary */}
      {filteredData.length > 0 && (
        <div className="mt-6 flex items-center justify-between text-sm text-ibm-gray-70">
          <span>Showing {filteredData.length} of {historyData.length} scenarios</span>
          {historyData.length > 10 && (
            <button
              onClick={() => navigate('/scenarios')}
              className="btn-secondary text-sm py-2"
            >
              Practice More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ScenarioHistory;

// Made with Bob
