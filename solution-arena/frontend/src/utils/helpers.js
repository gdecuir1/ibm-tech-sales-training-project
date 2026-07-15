/**
 * Helper utility functions
 */

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatDuration = (seconds) => {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const formatDateLong = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const getScoreColor = (score) => {
  if (score >= 90) return 'text-green-500';
  if (score >= 70) return 'text-blue-500';
  if (score >= 50) return 'text-yellow-500';
  return 'text-red-500';
};

export const getScoreBgColor = (score) => {
  if (score >= 90) return 'bg-green-500/10';
  if (score >= 70) return 'bg-blue-500/10';
  if (score >= 50) return 'bg-yellow-500/10';
  return 'bg-red-500/10';
};

export const getScoreBorderColor = (score) => {
  if (score >= 90) return 'border-green-500/20';
  if (score >= 70) return 'border-blue-500/20';
  if (score >= 50) return 'border-yellow-500/20';
  return 'border-red-500/20';
};

export const getMasteryColor = (mastery) => {
  if (mastery >= 80) return 'bg-green-500';
  if (mastery >= 60) return 'bg-blue-500';
  if (mastery >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getMasteryLabel = (mastery) => {
  if (mastery >= 80) return 'Expert';
  if (mastery >= 60) return 'Advanced';
  if (mastery >= 40) return 'Intermediate';
  return 'Beginner';
};

export const getDifficultyColor = (difficulty) => {
  const colors = {
    'Beginner': 'text-green-500',
    'Intermediate': 'text-blue-500',
    'Advanced': 'text-yellow-500',
    'Expert': 'text-red-500'
  };
  return colors[difficulty] || 'text-gray-500';
};

export const getDifficultyBg = (difficulty) => {
  const colors = {
    'Beginner': 'bg-green-500/10',
    'Intermediate': 'bg-blue-500/10',
    'Advanced': 'bg-yellow-500/10',
    'Expert': 'bg-red-500/10'
  };
  return colors[difficulty] || 'bg-gray-500/10';
};

export const calculateTrend = (current, previous) => {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
};

export const formatTrend = (trend) => {
  const sign = trend >= 0 ? '+' : '';
  return `${sign}${trend.toFixed(1)}%`;
};

export const getPerformanceLevel = (score) => {
  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Good';
  if (score >= 60) return 'Satisfactory';
  return 'Needs Improvement';
};

export const calculateXPProgress = (currentXP, nextLevelXP) => {
  return (currentXP / nextLevelXP) * 100;
};

export const getStreakEmoji = (streak) => {
  if (streak >= 30) return '🔥🔥🔥';
  if (streak >= 14) return '🔥🔥';
  if (streak >= 7) return '🔥';
  return '⭐';
};

export const animateValue = (start, end, duration, callback) => {
  const startTime = performance.now();
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = start + (end - start) * easeOutQuad(progress);
    callback(Math.round(value));
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  requestAnimationFrame(animate);
};

const easeOutQuad = (t) => t * (2 - t);

export const getIndustryIcon = (industry) => {
  const icons = {
    'Retail': '🏪',
    'Healthcare': '🏥',
    'Finance': '💰',
    'Manufacturing': '🏭',
    'Government': '🏛️',
    'Education': '🎓',
    'Energy': '⚡',
    'Transportation': '🚚',
    'Media': '📺',
    'Telecom': '📡'
  };
  return icons[industry] || '🏢';
};

export const getSkillIcon = (skill) => {
  const icons = {
    'businessPriorities': '🎯',
    'technologySelection': '💻',
    'architecture': '🏗️',
    'solutionJustification': '📊',
    'objectionHandling': '⚔️',
    'crossSelling': '🔄',
    'businessOutcomes': '📈',
    'consultativeSelling': '🤝',
    'relationshipBuilding': '👥',
    'valueMessaging': '💬'
  };
  return icons[skill] || '⭐';
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};

export const getCalendarHeatColor = (level) => {
  const colors = [
    'bg-gray-800/30',
    'bg-green-500/20',
    'bg-green-500/40',
    'bg-green-500/60',
    'bg-green-500/80',
    'bg-green-500'
  ];
  return colors[level] || colors[0];
};

export const groupByWeek = (calendar) => {
  const weeks = [];
  let currentWeek = [];
  
  calendar.forEach((day, index) => {
    currentWeek.push(day);
    if ((index + 1) % 7 === 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  
  return weeks;
};

export const calculateAverageScore = (history) => {
  if (!history || history.length === 0) return 0;
  const sum = history.reduce((acc, item) => acc + item.score, 0);
  return Math.round(sum / history.length);
};

export const calculateCompletionRate = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

export const getRecommendationPriorityColor = (priority) => {
  const colors = {
    'high': 'border-red-500/30 bg-red-500/5',
    'medium': 'border-yellow-500/30 bg-yellow-500/5',
    'low': 'border-blue-500/30 bg-blue-500/5'
  };
  return colors[priority] || colors['low'];
};

export const getRecommendationPriorityBadge = (priority) => {
  const badges = {
    'high': 'bg-red-500/20 text-red-400',
    'medium': 'bg-yellow-500/20 text-yellow-400',
    'low': 'bg-blue-500/20 text-blue-400'
  };
  return badges[priority] || badges['low'];
};

// Made with Bob
