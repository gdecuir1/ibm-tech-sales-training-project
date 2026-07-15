/**
 * Mock Data for Dashboard Analytics
 * This will be replaced with real API calls
 */

export const mockUserStats = {
  totalScenarios: 47,
  averageScore: 82,
  highestScore: 96,
  currentDifficulty: 'Intermediate',
  masteryPercentage: 68,
  currentRank: 12,
  hoursPracticed: 23.5,
  industriesMastered: 3,
  completionRate: 89,
  currentLevel: 8,
  xp: 4750,
  xpToNextLevel: 5000,
  currentStreak: 7,
  longestStreak: 14,
  weeklyProgress: 85
};

export const mockScoreHistory = [
  { date: '2026-07-01', score: 65, difficulty: 'Beginner' },
  { date: '2026-07-03', score: 72, difficulty: 'Beginner' },
  { date: '2026-07-05', score: 78, difficulty: 'Intermediate' },
  { date: '2026-07-07', score: 75, difficulty: 'Intermediate' },
  { date: '2026-07-09', score: 82, difficulty: 'Intermediate' },
  { date: '2026-07-11', score: 88, difficulty: 'Intermediate' },
  { date: '2026-07-13', score: 85, difficulty: 'Advanced' },
  { date: '2026-07-15', score: 91, difficulty: 'Advanced' }
];

export const mockSkillRadar = {
  businessPriorities: 85,
  technologySelection: 78,
  architecture: 92,
  solutionJustification: 75,
  objectionHandling: 68,
  crossSelling: 82,
  businessOutcomes: 88,
  consultativeSelling: 80,
  relationshipBuilding: 73,
  valueMessaging: 86
};

export const mockIndustryData = [
  { name: 'Retail', attempts: 12, avgScore: 85, bestScore: 94, mastery: 78, difficulty: 'Intermediate', lastPracticed: '2026-07-14' },
  { name: 'Healthcare', attempts: 8, avgScore: 78, bestScore: 88, mastery: 65, difficulty: 'Advanced', lastPracticed: '2026-07-12' },
  { name: 'Finance', attempts: 15, avgScore: 88, bestScore: 96, mastery: 85, difficulty: 'Advanced', lastPracticed: '2026-07-15' },
  { name: 'Manufacturing', attempts: 5, avgScore: 72, bestScore: 82, mastery: 52, difficulty: 'Intermediate', lastPracticed: '2026-07-10' },
  { name: 'Government', attempts: 3, avgScore: 68, bestScore: 75, mastery: 45, difficulty: 'Beginner', lastPracticed: '2026-07-08' },
  { name: 'Education', attempts: 4, avgScore: 75, bestScore: 85, mastery: 58, difficulty: 'Intermediate', lastPracticed: '2026-07-11' },
  { name: 'Energy', attempts: 2, avgScore: 65, bestScore: 70, mastery: 38, difficulty: 'Beginner', lastPracticed: '2026-07-06' },
  { name: 'Transportation', attempts: 6, avgScore: 80, bestScore: 90, mastery: 70, difficulty: 'Intermediate', lastPracticed: '2026-07-13' },
  { name: 'Media', attempts: 1, avgScore: 62, bestScore: 62, mastery: 25, difficulty: 'Beginner', lastPracticed: '2026-07-05' },
  { name: 'Telecom', attempts: 7, avgScore: 82, bestScore: 92, mastery: 72, difficulty: 'Advanced', lastPracticed: '2026-07-14' }
];

export const mockScenarioHistory = [
  { id: 1, date: '2026-07-15', industry: 'Finance', difficulty: 'Advanced', score: 91, time: 285, xp: 150, accuracy: 92 },
  { id: 2, date: '2026-07-14', industry: 'Retail', difficulty: 'Intermediate', score: 88, time: 245, xp: 120, accuracy: 90 },
  { id: 3, date: '2026-07-14', industry: 'Telecom', difficulty: 'Advanced', score: 85, time: 310, xp: 140, accuracy: 87 },
  { id: 4, date: '2026-07-13', industry: 'Transportation', difficulty: 'Intermediate', score: 82, time: 220, xp: 110, accuracy: 85 },
  { id: 5, date: '2026-07-12', industry: 'Healthcare', difficulty: 'Advanced', score: 78, time: 340, xp: 130, accuracy: 80 },
  { id: 6, date: '2026-07-11', industry: 'Education', difficulty: 'Intermediate', score: 85, time: 230, xp: 115, accuracy: 88 },
  { id: 7, date: '2026-07-10', industry: 'Manufacturing', difficulty: 'Intermediate', score: 75, time: 265, xp: 105, accuracy: 78 },
  { id: 8, date: '2026-07-09', industry: 'Finance', difficulty: 'Intermediate', score: 88, time: 240, xp: 120, accuracy: 90 }
];

export const mockAchievements = [
  { id: 'retail-expert', name: 'Retail Expert', description: 'Master 10 retail scenarios', unlocked: true, progress: 100, icon: '🏪' },
  { id: 'finance-champion', name: 'Finance Champion', description: 'Master 10 finance scenarios', unlocked: true, progress: 100, icon: '💰' },
  { id: 'healthcare-hero', name: 'Healthcare Hero', description: 'Master 10 healthcare scenarios', unlocked: false, progress: 80, icon: '🏥' },
  { id: 'architecture-master', name: 'Architecture Master', description: 'Score 90+ on 5 architecture questions', unlocked: true, progress: 100, icon: '🏗️' },
  { id: 'objection-slayer', name: 'Objection Slayer', description: 'Handle 20 objections successfully', unlocked: false, progress: 65, icon: '⚔️' },
  { id: 'cross-sell-king', name: 'Cross-Sell King', description: 'Identify 15 cross-sell opportunities', unlocked: false, progress: 73, icon: '👑' },
  { id: 'streak-7', name: '7 Day Streak', description: 'Practice for 7 consecutive days', unlocked: true, progress: 100, icon: '🔥' },
  { id: 'streak-14', name: '14 Day Streak', description: 'Practice for 14 consecutive days', unlocked: false, progress: 50, icon: '🔥🔥' },
  { id: 'perfect-score', name: 'Perfect Score', description: 'Achieve 100% on any scenario', unlocked: false, progress: 96, icon: '💯' },
  { id: 'scenarios-50', name: '50 Scenarios', description: 'Complete 50 scenarios', unlocked: false, progress: 94, icon: '📚' },
  { id: 'cloud-expert', name: 'IBM Cloud Expert', description: 'Master cloud positioning', unlocked: true, progress: 100, icon: '☁️' },
  { id: 'power-specialist', name: 'Power Specialist', description: 'Master Power Systems scenarios', unlocked: false, progress: 60, icon: '⚡' }
];

export const mockGoals = {
  daily: [
    { id: 1, title: 'Complete 3 scenarios', current: 2, target: 3, progress: 67 },
    { id: 2, title: 'Maintain streak', current: 7, target: 7, progress: 100 },
    { id: 3, title: 'Earn 300 XP', current: 270, target: 300, progress: 90 }
  ],
  weekly: [
    { id: 4, title: 'Complete 15 scenarios', current: 11, target: 15, progress: 73 },
    { id: 5, title: 'Reach 85% average', current: 82, target: 85, progress: 96 },
    { id: 6, title: 'Master Healthcare', current: 65, target: 80, progress: 81 }
  ],
  monthly: [
    { id: 7, title: 'Complete 50 scenarios', current: 47, target: 50, progress: 94 },
    { id: 8, title: 'Unlock 3 achievements', current: 2, target: 3, progress: 67 },
    { id: 9, title: 'Reach Level 10', current: 8, target: 10, progress: 80 }
  ]
};

export const mockLeaderboard = [
  { rank: 1, name: 'Sarah Chen', score: 94, xp: 8500, streak: 21, avatar: '👩‍💼' },
  { rank: 2, name: 'Michael Rodriguez', score: 91, xp: 7800, streak: 14, avatar: '👨‍💼' },
  { rank: 3, name: 'Emily Johnson', score: 88, xp: 7200, streak: 18, avatar: '👩‍💻' },
  { rank: 4, name: 'David Kim', score: 85, xp: 6500, streak: 10, avatar: '👨‍💻' },
  { rank: 5, name: 'Jessica Martinez', score: 83, xp: 6100, streak: 14, avatar: '👩‍🔬' },
  { rank: 6, name: 'James Wilson', score: 82, xp: 5900, streak: 7, avatar: '👨‍🔬' },
  { rank: 7, name: 'Lisa Anderson', score: 81, xp: 5600, streak: 12, avatar: '👩‍🎓' },
  { rank: 8, name: 'Robert Taylor', score: 80, xp: 5400, streak: 9, avatar: '👨‍🎓' },
  { rank: 9, name: 'Maria Garcia', score: 79, xp: 5100, streak: 15, avatar: '👩‍🏫' },
  { rank: 10, name: 'Christopher Lee', score: 78, xp: 4900, streak: 6, avatar: '👨‍🏫' },
  { rank: 11, name: 'Amanda White', score: 77, xp: 4800, streak: 11, avatar: '👩‍⚕️' },
  { rank: 12, name: 'You', score: 82, xp: 4750, streak: 7, avatar: '🎯', isCurrentUser: true }
];

export const mockPracticeCalendar = generatePracticeCalendar();

function generatePracticeCalendar() {
  const calendar = [];
  const today = new Date('2026-07-15');
  
  for (let i = 89; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const scenarios = i < 7 ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 4);
    const score = scenarios > 0 ? Math.floor(Math.random() * 30) + 70 : 0;
    const minutes = scenarios * (Math.floor(Math.random() * 3) + 4);
    
    calendar.push({
      date: date.toISOString().split('T')[0],
      scenarios,
      score,
      minutes,
      level: scenarios === 0 ? 0 : scenarios <= 1 ? 1 : scenarios <= 2 ? 2 : scenarios <= 3 ? 3 : 4
    });
  }
  
  return calendar;
}

export const mockRecommendations = [
  {
    id: 1,
    title: 'Practice Healthcare Objection Handling',
    reason: 'Your objection handling in healthcare scenarios is 15% below your average',
    industry: 'Healthcare',
    difficulty: 'Intermediate',
    estimatedImprovement: '+8%',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Master Government Sector',
    reason: 'Only 3 attempts in Government - diversify your industry experience',
    industry: 'Government',
    difficulty: 'Intermediate',
    estimatedImprovement: '+12%',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Advanced Finance Scenarios',
    reason: 'You excel at Finance - ready for advanced challenges',
    industry: 'Finance',
    difficulty: 'Advanced',
    estimatedImprovement: '+5%',
    priority: 'low'
  }
];

export const mockPersonalBests = {
  highestScore: { value: 96, scenario: 'Finance - Cloud Migration', date: '2026-07-15' },
  fastestCompletion: { value: 220, scenario: 'Transportation - IoT Fleet', date: '2026-07-13' },
  bestStreak: { value: 14, startDate: '2026-06-15', endDate: '2026-06-28' },
  mostPracticedIndustry: { value: 'Finance', count: 15 },
  favoriteIndustry: { value: 'Finance', avgScore: 88 },
  mostImprovedSkill: { value: 'Architecture', improvement: '+24%' }
};

export const mockSessionInsights = {
  avgDecisionTime: 18,
  questionAccuracy: 87,
  mostMissedQuestion: 'Cross-sell opportunities',
  mostImprovedTopic: 'Solution architecture',
  focusScore: 92,
  confidence: 85
};

export const mockFunMetrics = {
  mostPracticedDay: 'Monday',
  bestDayOfWeek: 'Wednesday',
  favoriteIndustry: 'Finance',
  mostDifficultIndustry: 'Healthcare',
  longestSession: 45,
  avgResponseSpeed: 16,
  consistencyScore: 88,
  momentumScore: 92,
  learningVelocity: '+15%'
};

// Made with Bob
