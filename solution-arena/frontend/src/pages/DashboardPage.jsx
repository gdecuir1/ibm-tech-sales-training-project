import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, Award, Target, Zap, ArrowLeft, 
  Calendar, Clock, Trophy, Flame
} from 'lucide-react';
import { mockUserStats } from '../utils/mockData';
import OverviewCards from '../components/Dashboard/Cards/OverviewCards';
import LearningProgression from '../components/Dashboard/Progress/LearningProgression';
import SkillRadarChart from '../components/Dashboard/SkillRadar/SkillRadarChart';
import IndustryHeatmap from '../components/Dashboard/Heatmaps/IndustryHeatmap';
import ScenarioHistory from '../components/Dashboard/Analytics/ScenarioHistory';
import AICoach from '../components/Dashboard/Recommendations/AICoach';
import GoalsSection from '../components/Dashboard/Goals/GoalsSection';
import AchievementsGrid from '../components/Dashboard/Achievements/AchievementsGrid';
import LeaderboardWidget from '../components/Dashboard/Leaderboard/LeaderboardWidget';
import PersonalBests from '../components/Dashboard/Stats/PersonalBests';
import RecommendationsPanel from '../components/Dashboard/Recommendations/RecommendationsPanel';
import PracticeCalendar from '../components/Dashboard/Timeline/PracticeCalendar';
import SessionInsights from '../components/Dashboard/Stats/SessionInsights';
import FunMetrics from '../components/Dashboard/Stats/FunMetrics';

function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                  <p className="text-sm text-gray-400">Track your progress and master IBM sales</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="font-bold">{mockUserStats.currentStreak}</span>
                  <span className="text-sm text-gray-400">day streak</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Trophy className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">Level {mockUserStats.currentLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-6 py-8"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
                <p className="text-gray-400">
                  You're on a {mockUserStats.currentStreak}-day streak. Keep it going!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                  <div className="text-sm text-gray-400 mb-1">Current Level</div>
                  <div className="text-2xl font-bold text-blue-400">Level {mockUserStats.currentLevel}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                  <div className="text-sm text-gray-400 mb-1">XP Progress</div>
                  <div className="text-2xl font-bold text-purple-400">
                    {mockUserStats.xp}/{mockUserStats.xpToNextLevel}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                  <div className="text-sm text-gray-400 mb-1">Rank</div>
                  <div className="text-2xl font-bold text-yellow-400">#{mockUserStats.currentRank}</div>
                </div>
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Progress to Level {mockUserStats.currentLevel + 1}</span>
                <span className="text-blue-400 font-semibold">
                  {Math.round((mockUserStats.xp / mockUserStats.xpToNextLevel) * 100)}%
                </span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(mockUserStats.xp / mockUserStats.xpToNextLevel) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Overview Cards */}
            <motion.div variants={fadeInUp}>
              <OverviewCards />
            </motion.div>

            {/* AI Coach - Priority Section */}
            <motion.div variants={fadeInUp}>
              <AICoach />
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Analytics */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div variants={fadeInUp}>
                  <LearningProgression />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <SkillRadarChart />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <IndustryHeatmap />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <ScenarioHistory />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <PracticeCalendar />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <SessionInsights />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <FunMetrics />
                </motion.div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <GoalsSection />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <RecommendationsPanel />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <PersonalBests />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <LeaderboardWidget />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <AchievementsGrid />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Action Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/interactive')}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all z-50 group"
        >
          <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}

export default DashboardPage;

// Made with Bob
