import { mockPracticeCalendar } from '../../../utils/mockData';
import { getCalendarHeatColor, groupByWeek } from '../../../utils/helpers';

function PracticeCalendar() {
  const weeks = groupByWeek(mockPracticeCalendar);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div>
      {/* Calendar Grid */}
      <div className="overflow-x-auto mb-6">
        <div className="inline-block min-w-full">
          {/* Day labels */}
          <div className="flex gap-1 mb-2 ml-8">
            {days.map((day, index) => (
              <div key={index} className="w-3 text-[10px] text-ibm-gray-70 text-center font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar weeks */}
          <div className="space-y-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex gap-1 items-center">
                {weekIndex % 4 === 0 && (
                  <div className="w-6 text-[10px] text-ibm-gray-70 text-right mr-1 font-medium">
                    {new Date(week[0].date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                )}
                {weekIndex % 4 !== 0 && <div className="w-6 mr-1" />}
                
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 ${getCalendarHeatColor(day.level)} cursor-pointer hover:ring-1 hover:ring-ibm-blue-60 transition-all`}
                    title={`${day.date}: ${day.scenarios} scenarios, ${day.score}% avg`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between pb-4 border-b border-ibm-gray-20">
        <div className="flex items-center gap-2 text-xs text-ibm-gray-70">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 ${getCalendarHeatColor(level)}`} />
            ))}
          </div>
          <span>More</span>
        </div>

        <div className="text-xs text-ibm-gray-70">
          <span className="font-semibold text-ibm-gray-100">
            {mockPracticeCalendar.filter(d => d.scenarios > 0).length}
          </span> days active
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono">
            {Math.round((mockPracticeCalendar.filter(d => d.scenarios > 0).length / 90) * 100)}%
          </div>
          <div className="text-xs text-ibm-gray-70">Consistency</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono">
            {mockPracticeCalendar.reduce((sum, d) => sum + d.scenarios, 0)}
          </div>
          <div className="text-xs text-ibm-gray-70">Total Scenarios</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-ibm-gray-100 font-mono">
            {Math.round(mockPracticeCalendar.reduce((sum, d) => sum + d.minutes, 0) / 60)}h
          </div>
          <div className="text-xs text-ibm-gray-70">Total Time</div>
        </div>
      </div>
    </div>
  );
}

export default PracticeCalendar;

// Made with Bob
