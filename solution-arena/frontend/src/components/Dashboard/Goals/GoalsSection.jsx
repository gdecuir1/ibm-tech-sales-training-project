import { mockGoals } from '../../../utils/mockData';

function GoalsSection() {
  const allGoals = [
    ...mockGoals.daily.map(g => ({ ...g, period: 'Daily' })),
    ...mockGoals.weekly.map(g => ({ ...g, period: 'Weekly' })),
    ...mockGoals.monthly.map(g => ({ ...g, period: 'Monthly' }))
  ];

  return (
    <div className="space-y-4">
      {allGoals.map((goal) => (
        <div key={goal.id}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-ibm-gray-100">{goal.title}</div>
              <div className="text-xs text-ibm-gray-70">{goal.period}</div>
            </div>
            <div className="text-xs text-ibm-gray-70 font-mono">
              {goal.current}/{goal.target}
            </div>
          </div>
          <div className="h-2 bg-ibm-gray-10 overflow-hidden">
            <div
              className="h-full bg-ibm-blue-60 transition-all duration-300"
              style={{ width: `${goal.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GoalsSection;

// Made with Bob
