// localStorage service for GitHub Pages deployment
// Handles all client-side data persistence

const STORAGE_KEYS = {
  COMPLETED_SCENARIOS: 'ibm_training_completed_scenarios',
  USER_PROGRESS: 'ibm_training_user_progress',
  SCENARIO_HISTORY: 'ibm_training_scenario_history',
  USER_STATS: 'ibm_training_user_stats',
  ACHIEVEMENTS: 'ibm_training_achievements',
  SETTINGS: 'ibm_training_settings'
};

// Safe JSON parse with fallback
function safeJSONParse(data, fallback = null) {
  try {
    return data ? JSON.parse(data) : fallback;
  } catch (error) {
    console.warn('Failed to parse JSON from localStorage:', error);
    return fallback;
  }
}

// Safe localStorage operations
function safeGetItem(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);
    return safeJSONParse(item, fallback);
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return fallback;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Failed to write to localStorage:', error);
    return false;
  }
}

// Initialize default user stats
function getDefaultUserStats() {
  return {
    totalScenarios: 0,
    completedScenarios: 0,
    averageScore: 0,
    totalScore: 0,
    currentLevel: 1,
    xp: 0,
    xpToNextLevel: 100,
    currentStreak: 0,
    longestStreak: 0,
    lastPracticeDate: null,
    skillScores: {
      productSelection: 0,
      businessValue: 0,
      objectionHandling: 0,
      technicalKnowledge: 0,
      solutionDesign: 0
    },
    industryScores: {
      Manufacturing: 0,
      'Financial Services': 0,
      Healthcare: 0,
      Retail: 0
    }
  };
}

// Storage Service API
export const storageService = {
  // Get user statistics
  getUserStats() {
    return safeGetItem(STORAGE_KEYS.USER_STATS, getDefaultUserStats());
  },

  // Update user statistics
  updateUserStats(updates) {
    const currentStats = this.getUserStats();
    const newStats = { ...currentStats, ...updates };
    safeSetItem(STORAGE_KEYS.USER_STATS, newStats);
    return newStats;
  },

  // Save completed scenario
  saveCompletedScenario(scenarioData) {
    const {
      scenarioId,
      score,
      productScore,
      businessScore,
      objectionScore,
      selectedProducts,
      correctProducts,
      missingProducts,
      incorrectProducts,
      justification,
      userResponse,
      timestamp = Date.now()
    } = scenarioData;

    // Get current history
    const history = this.getScenarioHistory();
    
    // Add new entry
    const newEntry = {
      id: `scenario_${timestamp}`,
      scenarioId,
      score,
      productScore,
      businessScore,
      objectionScore,
      selectedProducts,
      correctProducts,
      missingProducts,
      incorrectProducts,
      justification,
      userResponse,
      timestamp,
      date: new Date(timestamp).toISOString()
    };
    
    history.unshift(newEntry);
    
    // Keep only last 50 entries
    const trimmedHistory = history.slice(0, 50);
    safeSetItem(STORAGE_KEYS.SCENARIO_HISTORY, trimmedHistory);
    
    // Update user stats
    const stats = this.getUserStats();
    const totalScenarios = stats.totalScenarios + 1;
    const totalScore = stats.totalScore + score;
    const averageScore = Math.round(totalScore / totalScenarios);
    
    // Calculate XP (score-based)
    const xpGained = Math.round(score / 2); // 50 XP for perfect score
    const newXP = stats.xp + xpGained;
    let newLevel = stats.currentLevel;
    let xpToNextLevel = stats.xpToNextLevel;
    
    // Level up logic
    if (newXP >= xpToNextLevel) {
      newLevel += 1;
      xpToNextLevel = newLevel * 100; // Each level requires more XP
    }
    
    // Update streak
    const today = new Date().toDateString();
    const lastPractice = stats.lastPracticeDate ? new Date(stats.lastPracticeDate).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    let currentStreak = stats.currentStreak;
    if (lastPractice === today) {
      // Same day, no change
    } else if (lastPractice === yesterday) {
      // Consecutive day
      currentStreak += 1;
    } else {
      // Streak broken
      currentStreak = 1;
    }
    
    const longestStreak = Math.max(stats.longestStreak, currentStreak);
    
    this.updateUserStats({
      totalScenarios,
      completedScenarios: totalScenarios,
      averageScore,
      totalScore,
      currentLevel: newLevel,
      xp: newXP >= xpToNextLevel ? newXP - xpToNextLevel : newXP,
      xpToNextLevel,
      currentStreak,
      longestStreak,
      lastPracticeDate: Date.now()
    });
    
    return newEntry;
  },

  // Get scenario history
  getScenarioHistory() {
    return safeGetItem(STORAGE_KEYS.SCENARIO_HISTORY, []);
  },

  // Get completed scenario IDs
  getCompletedScenarioIds() {
    const history = this.getScenarioHistory();
    return [...new Set(history.map(entry => entry.scenarioId))];
  },

  // Check if scenario is completed
  isScenarioCompleted(scenarioId) {
    const completedIds = this.getCompletedScenarioIds();
    return completedIds.includes(scenarioId);
  },

  // Get scenario attempts
  getScenarioAttempts(scenarioId) {
    const history = this.getScenarioHistory();
    return history.filter(entry => entry.scenarioId === scenarioId);
  },

  // Get best score for scenario
  getBestScoreForScenario(scenarioId) {
    const attempts = this.getScenarioAttempts(scenarioId);
    if (attempts.length === 0) return 0;
    return Math.max(...attempts.map(a => a.score));
  },

  // Save user progress (for in-progress scenarios)
  saveProgress(progressData) {
    const progress = safeGetItem(STORAGE_KEYS.USER_PROGRESS, {});
    progress[progressData.scenarioId] = {
      ...progressData,
      lastUpdated: Date.now()
    };
    safeSetItem(STORAGE_KEYS.USER_PROGRESS, progress);
  },

  // Get saved progress
  getProgress(scenarioId) {
    const progress = safeGetItem(STORAGE_KEYS.USER_PROGRESS, {});
    return progress[scenarioId] || null;
  },

  // Clear progress for scenario
  clearProgress(scenarioId) {
    const progress = safeGetItem(STORAGE_KEYS.USER_PROGRESS, {});
    delete progress[scenarioId];
    safeSetItem(STORAGE_KEYS.USER_PROGRESS, progress);
  },

  // Achievements
  getAchievements() {
    return safeGetItem(STORAGE_KEYS.ACHIEVEMENTS, []);
  },

  unlockAchievement(achievementId) {
    const achievements = this.getAchievements();
    if (!achievements.includes(achievementId)) {
      achievements.push(achievementId);
      safeSetItem(STORAGE_KEYS.ACHIEVEMENTS, achievements);
    }
    return achievements;
  },

  // Settings
  getSettings() {
    return safeGetItem(STORAGE_KEYS.SETTINGS, {
      theme: 'light',
      notifications: true,
      soundEffects: true
    });
  },

  updateSettings(settings) {
    const currentSettings = this.getSettings();
    const newSettings = { ...currentSettings, ...settings };
    safeSetItem(STORAGE_KEYS.SETTINGS, newSettings);
    return newSettings;
  },

  // Reset all data
  resetAllData() {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
      console.log('All training data has been reset');
      return true;
    } catch (error) {
      console.error('Failed to reset data:', error);
      return false;
    }
  },

  // Export data (for backup)
  exportData() {
    const data = {};
    Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
      data[name] = safeGetItem(key);
    });
    return data;
  },

  // Import data (from backup)
  importData(data) {
    try {
      Object.entries(data).forEach(([name, value]) => {
        const key = STORAGE_KEYS[name];
        if (key && value !== null) {
          safeSetItem(key, value);
        }
      });
      return true;
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  },

  // Get dashboard statistics
  getDashboardStats() {
    const stats = this.getUserStats();
    const history = this.getScenarioHistory();
    
    // Calculate recent performance (last 7 days)
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentHistory = history.filter(entry => entry.timestamp > sevenDaysAgo);
    
    const recentAverage = recentHistory.length > 0
      ? Math.round(recentHistory.reduce((sum, entry) => sum + entry.score, 0) / recentHistory.length)
      : 0;
    
    // Calculate skill breakdown from recent history
    const skillBreakdown = {
      productSelection: 0,
      businessValue: 0,
      objectionHandling: 0
    };
    
    if (recentHistory.length > 0) {
      skillBreakdown.productSelection = Math.round(
        recentHistory.reduce((sum, entry) => sum + (entry.productScore || 0), 0) / recentHistory.length
      );
      skillBreakdown.businessValue = Math.round(
        recentHistory.reduce((sum, entry) => sum + (entry.businessScore || 0), 0) / recentHistory.length
      );
      skillBreakdown.objectionHandling = Math.round(
        recentHistory.reduce((sum, entry) => sum + (entry.objectionScore || 0), 0) / recentHistory.length
      );
    }
    
    return {
      ...stats,
      recentAverage,
      recentAttempts: recentHistory.length,
      skillBreakdown,
      totalAttempts: history.length
    };
  }
};


// Named export for scenario progress (alias for saveCompletedScenario)
export const saveScenarioProgress = storageService.saveCompletedScenario.bind(storageService);
export default storageService;

// Made with Bob
