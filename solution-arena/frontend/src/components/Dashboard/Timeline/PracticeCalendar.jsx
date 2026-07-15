import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { mockPracticeCalendar } from '../../../utils/mockData';
import { getCalendarHeatColor, groupByWeek } from '../../../utils/helpers';

function PracticeCalendar() {
  const weeks = groupByWeek(mockPracticeCalendar);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Practice Activity</h2>
          <p className="text-sm text-gray-400">Your consistency over the last 90 days</p>
        </div>
        <Calendar className="w-8 h-8 text-blue-400" />
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Day labels */}
          <div className="flex gap-1 mb-2 ml-8">
            {days.map((day, index) => (
              <div key={index} className="w-3 text-[10px] text-gray-500 text-center">
                {day[0]}
              </div>
            ))}
          </div>

          {/* Calendar weeks */}
          <div className="space-y-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex gap-1 items-center">
                {weekIndex % 4 === 0 && (
                  <div className="w-6 text-[10px] text-gray-500 text-right mr-1">
                    {new Date(week[0].date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                )}
                {weekIndex % 4 !== 0 && <div className="w-6 mr-1" />}
                
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (weekIndex * 0.01) + (dayIndex * 0.005) }}
                    className={`w-3 h-3 rounded-sm ${getCalendarHeatColor(day.level)} cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all group relative`}
                    title={`${day.date}: ${day.scenarios} scenarios, ${day.score}% avg`}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-gray-900 border border-white/20 rounded-lg p-2 shadow-xl whitespace-nowrap text-xs">
                        <div className="font-semibold mb-1">{day.date}</div>
                        <div className="text-gray-400">
                          {day.scenarios > 0 ? (
                            <>
                              <div>{day.scenarios} scenarios</div>
                              <div>{day.score}% avg score</div>
                              <div>{day.minutes} minutes</div>
                            </>
                          ) : (
                            <div>No practice</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 rounded-sm ${getCalendarHeatColor(level)}`} />
            ))}
          </div>
          <span>More</span>
        </div>

        <div className="text-xs text-gray-400">
          <span className="font-semibold text-white">
            {mockPracticeCalendar.filter(d => d.scenarios > 0).length}
          </span> days active
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-green-400">
            {Math.round((mockPracticeCalendar.filter(d => d.scenarios > 0).length / 90) * 100)}%
          </div>
          <div className="text-xs text-gray-400">Consistency</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-blue-400">
            {mockPracticeCalendar.reduce((sum, d) => sum + d.scenarios, 0)}
          </div>
          <div className="text-xs text-gray-400">Total Scenarios</div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 text-center">
          <div className="text-2xl font-bold text-purple-400">
            {Math.round(mockPracticeCalendar.reduce((sum, d) => sum + d.minutes, 0) / 60)}h
          </div>
          <div className="text-xs text-gray-400">Total Time</div>
        </div>
      </div>
    </div>
  );
}

export default PracticeCalendar;

// Made with Bob
