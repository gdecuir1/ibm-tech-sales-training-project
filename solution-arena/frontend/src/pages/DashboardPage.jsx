import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { mockUserStats } from '../utils/mockData';
import PageHeader from '../components/Primitives/PageHeader';
import MetricBand from '../components/Primitives/MetricBand';
import SectionHeader from '../components/Primitives/SectionHeader';
import LearningProgression from '../components/Dashboard/Progress/LearningProgression';
import SkillRadarChart from '../components/Dashboard/SkillRadar/SkillRadarChart';
import IndustryHeatmap from '../components/Dashboard/Heatmaps/IndustryHeatmap';
import ScenarioHistory from '../components/Dashboard/Analytics/ScenarioHistory';
import AICoach from '../components/Dashboard/Recommendations/AICoach';
import GoalsSection from '../components/Dashboard/Goals/GoalsSection';
import AchievementsGrid from '../components/Dashboard/Achievements/AchievementsGrid';
import PracticeCalendar from '../components/Dashboard/Timeline/PracticeCalendar';

function DashboardPage() {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('30d');

  // Calculate metrics from mockUserStats
  const metrics = [
    {
      label: 'Scenarios completed',
      value: mockUserStats.totalScenarios,
      subtitle: 'All time'
    },
    {
      label: 'Average score',
      value: `${mockUserStats.averageScore}%`,
      trend: 6
    },
    {
      label: 'Current level',
      value: mockUserStats.currentLevel,
      subtitle: `${mockUserStats.xp}/${mockUserStats.xpToNextLevel} XP`
    },
    {
      label: 'Practice streak',
      value: `${mockUserStats.currentStreak}d`,
      subtitle: 'Current'
    },
    {
      label: 'Mastery rate',
      value: '73%',
      trend: 4
    }
  ];

  const handleStartPractice = () => {
    navigate('/interactive');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <PageHeader
        title="Performance overview"
        description="Track skill development, scenario completion, and readiness."
        showBack={true}
        actions={
          <>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="select-field text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="all">All time</option>
            </select>
            <button onClick={handleStartPractice} className="btn-primary flex items-center gap-2">
              Start Practice
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        }
      />

      {/* KPI Summary Band */}
      <MetricBand metrics={metrics} />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* AI Coaching Insights */}
        <div className="mb-8">
          <AICoach />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Trend */}
            <div className="panel p-6">
              <SectionHeader title="Performance trend" />
              <LearningProgression />
            </div>

            {/* Skills and Industry Analysis */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="panel p-6">
                <SectionHeader title="Skill performance" />
                <SkillRadarChart />
              </div>
              <div className="panel p-6">
                <SectionHeader title="Industry performance" />
                <IndustryHeatmap />
              </div>
            </div>

            {/* Practice Consistency */}
            <div className="panel p-6">
              <SectionHeader title="Practice consistency" />
              <PracticeCalendar />
            </div>

            {/* Scenario History */}
            <div className="panel p-6">
              <SectionHeader 
                title="Scenario history" 
                subtitle="Recent practice sessions and results"
              />
              <ScenarioHistory />
            </div>
          </div>

          {/* Right Column - Secondary Info */}
          <div className="space-y-8">
            {/* Goals */}
            <div className="panel p-6">
              <SectionHeader title="Goals" />
              <GoalsSection />
            </div>

            {/* Achievements */}
            <div className="panel p-6">
              <SectionHeader title="Achievements" />
              <AchievementsGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

// Made with Bob
