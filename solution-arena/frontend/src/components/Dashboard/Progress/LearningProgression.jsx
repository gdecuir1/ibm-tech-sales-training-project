import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockScoreHistory } from '../../../utils/mockData';
import { formatDate } from '../../../utils/helpers';

function LearningProgression() {
  // Transform data for charts
  const chartData = mockScoreHistory.map(item => ({
    date: formatDate(item.date),
    score: item.score
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-ibm-gray-20 shadow-overlay p-3">
          <p className="text-xs text-ibm-gray-70 mb-1">{payload[0].payload.date}</p>
          <p className="text-lg font-semibold text-ibm-gray-100 font-mono">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Main Chart */}
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis 
              dataKey="date" 
              stroke="#8D8D8D"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#8D8D8D"
              style={{ fontSize: '12px' }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#0F62FE" 
              strokeWidth={2}
              dot={{ fill: '#0F62FE', r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 pt-4 border-t border-ibm-gray-20">
        <div>
          <div className="metric-label mb-1">Starting</div>
          <div className="text-xl font-semibold text-ibm-gray-100 font-mono">65%</div>
        </div>
        
        <div>
          <div className="metric-label mb-1">Current</div>
          <div className="text-xl font-semibold text-ibm-gray-100 font-mono">91%</div>
        </div>
        
        <div>
          <div className="metric-label mb-1">Improvement</div>
          <div className="text-xl font-semibold text-ibm-green font-mono">+26%</div>
        </div>
        
        <div>
          <div className="metric-label mb-1">Trend</div>
          <div className="text-xl font-semibold text-ibm-blue-60">Rising</div>
        </div>
      </div>
    </div>
  );
}

export default LearningProgression;

// Made with Bob
