-- IBM DealSprint Database Schema
-- PostgreSQL 14+ compatible (IBM Cloud Databases for PostgreSQL)
-- Created: 2026-07-14

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- USERS TABLE
-- ============================================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'manager')),
    organization VARCHAR(255),
    department VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_organization ON users(organization);
CREATE INDEX idx_users_created_at ON users(created_at);

-- ============================================================================
-- SCENARIOS TABLE
-- ============================================================================
CREATE TABLE scenarios (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    estimated_time VARCHAR(50),
    company VARCHAR(255) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    size VARCHAR(50),
    revenue VARCHAR(50),
    employees INTEGER,
    brief TEXT NOT NULL,
    current_environment JSONB NOT NULL,
    business_goals JSONB NOT NULL,
    constraints JSONB NOT NULL,
    questions JSONB NOT NULL,
    scoring_breakdown JSONB NOT NULL,
    ideal_solution JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    version INTEGER DEFAULT 1,
    tags TEXT[],
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_scenarios_difficulty ON scenarios(difficulty);
CREATE INDEX idx_scenarios_industry ON scenarios(industry);
CREATE INDEX idx_scenarios_is_active ON scenarios(is_active);
CREATE INDEX idx_scenarios_tags ON scenarios USING GIN(tags);

-- ============================================================================
-- PRODUCTS TABLE
-- ============================================================================
CREATE TABLE products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    use_cases TEXT[],
    strengths TEXT[],
    keywords TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_keywords ON products USING GIN(keywords);
CREATE INDEX idx_products_is_active ON products(is_active);

-- ============================================================================
-- OBJECTIONS TABLE
-- ============================================================================
CREATE TABLE objections (
    id SERIAL PRIMARY KEY,
    trigger VARCHAR(100) NOT NULL,
    objection TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    best_response TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_objections_trigger ON objections(trigger);
CREATE INDEX idx_objections_type ON objections(type);

-- ============================================================================
-- USER SCENARIO ATTEMPTS TABLE
-- ============================================================================
CREATE TABLE user_scenario_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    scenario_id VARCHAR(100) NOT NULL REFERENCES scenarios(id) ON DELETE CASCADE,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE,
    score INTEGER,
    max_score INTEGER DEFAULT 75,
    percentage DECIMAL(5,2),
    answers JSONB NOT NULL,
    time_spent_seconds INTEGER,
    is_completed BOOLEAN DEFAULT false,
    attempt_number INTEGER DEFAULT 1,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_attempts_user_id ON user_scenario_attempts(user_id);
CREATE INDEX idx_attempts_scenario_id ON user_scenario_attempts(scenario_id);
CREATE INDEX idx_attempts_completed_at ON user_scenario_attempts(completed_at);
CREATE INDEX idx_attempts_is_completed ON user_scenario_attempts(is_completed);
CREATE INDEX idx_attempts_user_scenario ON user_scenario_attempts(user_id, scenario_id);

-- ============================================================================
-- USER PROGRESS TABLE
-- ============================================================================
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total_scenarios_completed INTEGER DEFAULT 0,
    total_scenarios_attempted INTEGER DEFAULT 0,
    current_level VARCHAR(20) DEFAULT 'beginner',
    total_score INTEGER DEFAULT 0,
    average_score DECIMAL(5,2),
    total_time_spent_seconds INTEGER DEFAULT 0,
    industries_covered TEXT[],
    difficulty_stats JSONB DEFAULT '{}'::jsonb,
    industry_stats JSONB DEFAULT '{}'::jsonb,
    streak_days INTEGER DEFAULT 0,
    last_activity_date DATE,
    achievements TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

CREATE INDEX idx_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_progress_current_level ON user_progress(current_level);
CREATE INDEX idx_progress_last_activity ON user_progress(last_activity_date);

-- ============================================================================
-- USER SCENARIO HISTORY TABLE (for adaptive selection)
-- ============================================================================
CREATE TABLE user_scenario_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    scenario_id VARCHAR(100) NOT NULL REFERENCES scenarios(id) ON DELETE CASCADE,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    score INTEGER NOT NULL,
    max_score INTEGER DEFAULT 75,
    percentage DECIMAL(5,2),
    difficulty VARCHAR(20) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    time_spent_seconds INTEGER,
    passed BOOLEAN,
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX idx_history_user_id ON user_scenario_history(user_id);
CREATE INDEX idx_history_completed_at ON user_scenario_history(completed_at);
CREATE INDEX idx_history_user_completed ON user_scenario_history(user_id, completed_at DESC);

-- ============================================================================
-- ANALYTICS EVENTS TABLE
-- ============================================================================
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB NOT NULL,
    session_id UUID,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_events_type ON analytics_events(event_type);
CREATE INDEX idx_events_created_at ON analytics_events(created_at);
CREATE INDEX idx_events_session_id ON analytics_events(session_id);

-- ============================================================================
-- LEADERBOARD VIEW
-- ============================================================================
CREATE VIEW leaderboard AS
SELECT 
    u.id,
    u.username,
    u.full_name,
    u.organization,
    up.total_scenarios_completed,
    up.average_score,
    up.current_level,
    up.streak_days,
    up.total_time_spent_seconds,
    RANK() OVER (ORDER BY up.average_score DESC, up.total_scenarios_completed DESC) as rank
FROM users u
JOIN user_progress up ON u.id = up.user_id
WHERE u.is_active = true
ORDER BY rank;

-- ============================================================================
-- SCENARIO STATISTICS VIEW
-- ============================================================================
CREATE VIEW scenario_statistics AS
SELECT 
    s.id,
    s.title,
    s.difficulty,
    s.industry,
    COUNT(DISTINCT usa.user_id) as total_attempts,
    COUNT(DISTINCT CASE WHEN usa.is_completed THEN usa.user_id END) as total_completions,
    AVG(CASE WHEN usa.is_completed THEN usa.score END) as average_score,
    AVG(CASE WHEN usa.is_completed THEN usa.time_spent_seconds END) as average_time_seconds,
    COUNT(DISTINCT CASE WHEN usa.is_completed AND usa.percentage >= 80 THEN usa.user_id END)::FLOAT / 
        NULLIF(COUNT(DISTINCT CASE WHEN usa.is_completed THEN usa.user_id END), 0) * 100 as pass_rate
FROM scenarios s
LEFT JOIN user_scenario_attempts usa ON s.id = usa.scenario_id
GROUP BY s.id, s.title, s.difficulty, s.industry;

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to update user progress after scenario completion
CREATE OR REPLACE FUNCTION update_user_progress()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_completed = true AND (OLD.is_completed IS NULL OR OLD.is_completed = false) THEN
        INSERT INTO user_progress (user_id, total_scenarios_completed, total_scenarios_attempted)
        VALUES (NEW.user_id, 1, 1)
        ON CONFLICT (user_id) DO UPDATE SET
            total_scenarios_completed = user_progress.total_scenarios_completed + 1,
            total_scenarios_attempted = user_progress.total_scenarios_attempted + 1,
            total_score = user_progress.total_score + NEW.score,
            average_score = (user_progress.total_score + NEW.score)::DECIMAL / (user_progress.total_scenarios_completed + 1),
            total_time_spent_seconds = user_progress.total_time_spent_seconds + COALESCE(NEW.time_spent_seconds, 0),
            last_activity_date = CURRENT_DATE,
            updated_at = CURRENT_TIMESTAMP;
        
        -- Insert into history
        INSERT INTO user_scenario_history (
            user_id, scenario_id, score, max_score, percentage, 
            difficulty, industry, time_spent_seconds, passed
        )
        SELECT 
            NEW.user_id, NEW.scenario_id, NEW.score, NEW.max_score, NEW.percentage,
            s.difficulty, s.industry, NEW.time_spent_seconds,
            NEW.percentage >= CASE 
                WHEN s.difficulty = 'beginner' THEN 80
                WHEN s.difficulty = 'intermediate' THEN 70
                ELSE 60
            END
        FROM scenarios s WHERE s.id = NEW.scenario_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update user progress
CREATE TRIGGER trigger_update_user_progress
AFTER INSERT OR UPDATE ON user_scenario_attempts
FOR EACH ROW
EXECUTE FUNCTION update_user_progress();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update timestamp trigger to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scenarios_updated_at BEFORE UPDATE ON scenarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_objections_updated_at BEFORE UPDATE ON objections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE users IS 'User accounts and profiles';
COMMENT ON TABLE scenarios IS 'Training scenarios with questions and scoring';
COMMENT ON TABLE products IS 'IBM product catalog';
COMMENT ON TABLE objections IS 'Customer objections library';
COMMENT ON TABLE user_scenario_attempts IS 'Individual scenario attempts by users';
COMMENT ON TABLE user_progress IS 'Aggregated user progress and statistics';
COMMENT ON TABLE user_scenario_history IS 'Historical record for adaptive scenario selection';
COMMENT ON TABLE analytics_events IS 'User interaction and analytics events';

-- ============================================================================
-- INITIAL DATA SETUP
-- ============================================================================

-- Create default admin user (password should be changed immediately)
INSERT INTO users (email, username, full_name, role, organization)
VALUES ('admin@ibm.com', 'admin', 'System Administrator', 'admin', 'IBM')
ON CONFLICT (email) DO NOTHING;

-- Grant appropriate permissions (adjust based on your security requirements)
-- GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO dealsprint_app;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO dealsprint_app;

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================

-- Made with Bob
