/**
 * Database Models/Repositories
 * Data access layer for IBM DealSprint
 */

const db = require('./connection');

/**
 * User Model
 */
const User = {
  /**
   * Create a new user
   */
  async create(userData) {
    const { email, username, full_name, role, organization, department } = userData;
    const query = `
      INSERT INTO users (email, username, full_name, role, organization, department)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const result = await db.query(query, [email, username, full_name, role, organization, department]);
    return result.rows[0];
  },

  /**
   * Find user by ID
   */
  async findById(userId) {
    const query = 'SELECT * FROM users WHERE id = $1 AND is_active = true';
    const result = await db.query(query, [userId]);
    return result.rows[0];
  },

  /**
   * Find user by email
   */
  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1 AND is_active = true';
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  /**
   * Update user
   */
  async update(userId, updates) {
    const fields = Object.keys(updates);
    const values = Object.values(updates);
    const setClause = fields.map((field, i) => `${field} = $${i + 2}`).join(', ');
    
    const query = `
      UPDATE users 
      SET ${setClause}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `;
    const result = await db.query(query, [userId, ...values]);
    return result.rows[0];
  },

  /**
   * Update last login
   */
  async updateLastLogin(userId) {
    const query = `
      UPDATE users 
      SET last_login = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `;
    const result = await db.query(query, [userId]);
    return result.rows[0];
  }
};

/**
 * Scenario Model
 */
const Scenario = {
  /**
   * Create a new scenario
   */
  async create(scenarioData) {
    const query = `
      INSERT INTO scenarios (
        id, title, difficulty, estimated_time, company, industry, size, revenue, employees,
        brief, current_environment, business_goals, constraints, questions, 
        scoring_breakdown, ideal_solution, tags
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      RETURNING *
    `;
    const values = [
      scenarioData.id,
      scenarioData.title,
      scenarioData.difficulty,
      scenarioData.estimatedTime,
      scenarioData.company,
      scenarioData.industry,
      scenarioData.size,
      scenarioData.revenue,
      scenarioData.employees,
      scenarioData.brief,
      JSON.stringify(scenarioData.currentEnvironment),
      JSON.stringify(scenarioData.businessGoals),
      JSON.stringify(scenarioData.constraints),
      JSON.stringify(scenarioData.questions),
      JSON.stringify(scenarioData.scoringBreakdown),
      JSON.stringify(scenarioData.idealSolution),
      scenarioData.tags || []
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  /**
   * Find scenario by ID
   */
  async findById(scenarioId) {
    const query = 'SELECT * FROM scenarios WHERE id = $1 AND is_active = true';
    const result = await db.query(query, [scenarioId]);
    return result.rows[0];
  },

  /**
   * Find scenarios by difficulty
   */
  async findByDifficulty(difficulty, limit = 10) {
    const query = `
      SELECT * FROM scenarios 
      WHERE difficulty = $1 AND is_active = true
      ORDER BY RANDOM()
      LIMIT $2
    `;
    const result = await db.query(query, [difficulty, limit]);
    return result.rows;
  },

  /**
   * Find scenarios by industry
   */
  async findByIndustry(industry, limit = 10) {
    const query = `
      SELECT * FROM scenarios 
      WHERE industry = $1 AND is_active = true
      ORDER BY RANDOM()
      LIMIT $2
    `;
    const result = await db.query(query, [industry, limit]);
    return result.rows;
  },

  /**
   * Get all active scenarios
   */
  async findAll(filters = {}) {
    let query = 'SELECT * FROM scenarios WHERE is_active = true';
    const params = [];
    let paramCount = 1;

    if (filters.difficulty) {
      query += ` AND difficulty = $${paramCount}`;
      params.push(filters.difficulty);
      paramCount++;
    }

    if (filters.industry) {
      query += ` AND industry = $${paramCount}`;
      params.push(filters.industry);
      paramCount++;
    }

    query += ' ORDER BY created_at DESC';

    if (filters.limit) {
      query += ` LIMIT $${paramCount}`;
      params.push(filters.limit);
    }

    const result = await db.query(query, params);
    return result.rows;
  },

  /**
   * Get random scenario excluding completed ones
   */
  async getRandomExcluding(userId, excludeIds = [], difficulty = null, industry = null) {
    let query = `
      SELECT s.* FROM scenarios s
      WHERE s.is_active = true
      AND s.id NOT IN (
        SELECT scenario_id FROM user_scenario_history 
        WHERE user_id = $1
      )
    `;
    const params = [userId];
    let paramCount = 2;

    if (excludeIds.length > 0) {
      query += ` AND s.id != ALL($${paramCount})`;
      params.push(excludeIds);
      paramCount++;
    }

    if (difficulty) {
      query += ` AND s.difficulty = $${paramCount}`;
      params.push(difficulty);
      paramCount++;
    }

    if (industry) {
      query += ` AND s.industry != $${paramCount}`;
      params.push(industry);
      paramCount++;
    }

    query += ' ORDER BY RANDOM() LIMIT 1';

    const result = await db.query(query, params);
    return result.rows[0];
  },

  /**
   * Get scenario statistics
   */
  async getStatistics(scenarioId) {
    const query = 'SELECT * FROM scenario_statistics WHERE id = $1';
    const result = await db.query(query, [scenarioId]);
    return result.rows[0];
  }
};

/**
 * Product Model
 */
const Product = {
  /**
   * Create a new product
   */
  async create(productData) {
    const query = `
      INSERT INTO products (
        id, name, category, subcategory, description, 
        use_cases, strengths, keywords
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    const values = [
      productData.id,
      productData.name,
      productData.category,
      productData.subcategory,
      productData.description,
      productData.use_cases || [],
      productData.strengths || [],
      productData.keywords || []
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  /**
   * Find all active products
   */
  async findAll() {
    const query = 'SELECT * FROM products WHERE is_active = true ORDER BY name';
    const result = await db.query(query);
    return result.rows;
  },

  /**
   * Find product by ID
   */
  async findById(productId) {
    const query = 'SELECT * FROM products WHERE id = $1 AND is_active = true';
    const result = await db.query(query, [productId]);
    return result.rows[0];
  },

  /**
   * Find products by category
   */
  async findByCategory(category) {
    const query = 'SELECT * FROM products WHERE category = $1 AND is_active = true ORDER BY name';
    const result = await db.query(query, [category]);
    return result.rows;
  },

  /**
   * Search products by keyword
   */
  async search(keyword) {
    const query = `
      SELECT * FROM products 
      WHERE is_active = true 
      AND (
        name ILIKE $1 
        OR description ILIKE $1 
        OR $2 = ANY(keywords)
      )
      ORDER BY name
    `;
    const result = await db.query(query, [`%${keyword}%`, keyword.toLowerCase()]);
    return result.rows;
  }
};

/**
 * User Scenario Attempt Model
 */
const UserScenarioAttempt = {
  /**
   * Create a new attempt
   */
  async create(attemptData) {
    const query = `
      INSERT INTO user_scenario_attempts (
        user_id, scenario_id, answers, attempt_number
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [
      attemptData.user_id,
      attemptData.scenario_id,
      JSON.stringify(attemptData.answers),
      attemptData.attempt_number || 1
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  /**
   * Complete an attempt
   */
  async complete(attemptId, completionData) {
    const query = `
      UPDATE user_scenario_attempts
      SET 
        completed_at = CURRENT_TIMESTAMP,
        score = $2,
        max_score = $3,
        percentage = $4,
        time_spent_seconds = $5,
        is_completed = true
      WHERE id = $1
      RETURNING *
    `;
    const values = [
      attemptId,
      completionData.score,
      completionData.max_score || 75,
      completionData.percentage,
      completionData.time_spent_seconds
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  /**
   * Get user's attempts for a scenario
   */
  async findByUserAndScenario(userId, scenarioId) {
    const query = `
      SELECT * FROM user_scenario_attempts
      WHERE user_id = $1 AND scenario_id = $2
      ORDER BY started_at DESC
    `;
    const result = await db.query(query, [userId, scenarioId]);
    return result.rows;
  },

  /**
   * Get user's recent attempts
   */
  async findRecentByUser(userId, limit = 10) {
    const query = `
      SELECT usa.*, s.title, s.difficulty, s.industry
      FROM user_scenario_attempts usa
      JOIN scenarios s ON usa.scenario_id = s.id
      WHERE usa.user_id = $1 AND usa.is_completed = true
      ORDER BY usa.completed_at DESC
      LIMIT $2
    `;
    const result = await db.query(query, [userId, limit]);
    return result.rows;
  }
};

/**
 * User Progress Model
 */
const UserProgress = {
  /**
   * Get user progress
   */
  async findByUserId(userId) {
    const query = 'SELECT * FROM user_progress WHERE user_id = $1';
    const result = await db.query(query, [userId]);
    return result.rows[0];
  },

  /**
   * Initialize user progress
   */
  async initialize(userId) {
    const query = `
      INSERT INTO user_progress (user_id)
      VALUES ($1)
      ON CONFLICT (user_id) DO NOTHING
      RETURNING *
    `;
    const result = await db.query(query, [userId]);
    return result.rows[0];
  },

  /**
   * Update current level
   */
  async updateLevel(userId, level) {
    const query = `
      UPDATE user_progress
      SET current_level = $2, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $1
      RETURNING *
    `;
    const result = await db.query(query, [userId, level]);
    return result.rows[0];
  },

  /**
   * Add achievement
   */
  async addAchievement(userId, achievement) {
    const query = `
      UPDATE user_progress
      SET achievements = array_append(achievements, $2),
          updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $1
      RETURNING *
    `;
    const result = await db.query(query, [userId, achievement]);
    return result.rows[0];
  }
};

/**
 * User Scenario History Model
 */
const UserScenarioHistory = {
  /**
   * Get user's scenario history
   */
  async findByUserId(userId, limit = 50) {
    const query = `
      SELECT * FROM user_scenario_history
      WHERE user_id = $1
      ORDER BY completed_at DESC
      LIMIT $2
    `;
    const result = await db.query(query, [userId, limit]);
    return result.rows;
  },

  /**
   * Get recent history for adaptive selection
   */
  async getRecentForAdaptive(userId, limit = 5) {
    const query = `
      SELECT * FROM user_scenario_history
      WHERE user_id = $1
      ORDER BY completed_at DESC
      LIMIT $2
    `;
    const result = await db.query(query, [userId, limit]);
    return result.rows;
  },

  /**
   * Get completed scenario IDs
   */
  async getCompletedScenarioIds(userId) {
    const query = `
      SELECT DISTINCT scenario_id FROM user_scenario_history
      WHERE user_id = $1
    `;
    const result = await db.query(query, [userId]);
    return result.rows.map(row => row.scenario_id);
  },

  /**
   * Get industry coverage
   */
  async getIndustryCoverage(userId) {
    const query = `
      SELECT DISTINCT industry, COUNT(*) as count
      FROM user_scenario_history
      WHERE user_id = $1
      GROUP BY industry
      ORDER BY count DESC
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }
};

/**
 * Analytics Model
 */
const Analytics = {
  /**
   * Log an event
   */
  async logEvent(eventData) {
    const query = `
      INSERT INTO analytics_events (
        user_id, event_type, event_data, session_id, ip_address, user_agent
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [
      eventData.user_id || null,
      eventData.event_type,
      JSON.stringify(eventData.event_data),
      eventData.session_id || null,
      eventData.ip_address || null,
      eventData.user_agent || null
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  /**
   * Get leaderboard
   */
  async getLeaderboard(limit = 100) {
    const query = 'SELECT * FROM leaderboard LIMIT $1';
    const result = await db.query(query, [limit]);
    return result.rows;
  },

  /**
   * Get organization leaderboard
   */
  async getOrganizationLeaderboard(organization, limit = 50) {
    const query = `
      SELECT * FROM leaderboard 
      WHERE organization = $1 
      LIMIT $2
    `;
    const result = await db.query(query, [organization, limit]);
    return result.rows;
  }
};

module.exports = {
  User,
  Scenario,
  Product,
  UserScenarioAttempt,
  UserProgress,
  UserScenarioHistory,
  Analytics
};

// Made with Bob
