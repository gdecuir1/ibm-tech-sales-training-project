-- IBM Tech Sales Training Platform - PostgreSQL Database Schema
-- Version: 2.0
-- Updated: 2026-07-17

-- Drop existing tables if they exist
DROP TABLE IF EXISTS scenario_attempts CASCADE;
DROP TABLE IF EXISTS user_achievements CASCADE;
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS scenario_questions CASCADE;
DROP TABLE IF EXISTS scenario_objections CASCADE;
DROP TABLE IF EXISTS scenarios CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS objections CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'learner',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    profile_data JSONB DEFAULT '{}'::jsonb
);

-- Products table
CREATE TABLE products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    overview TEXT,
    use_cases TEXT[],
    strengths TEXT[],
    keywords TEXT[],
    ideal_customers JSONB,
    pain_points JSONB,
    technical_specs JSONB,
    pricing_info JSONB,
    competitive_info JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scenarios table
CREATE TABLE scenarios (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    difficulty VARCHAR(50) NOT NULL,
    estimated_time VARCHAR(50),
    company VARCHAR(255),
    industry VARCHAR(100) NOT NULL,
    size VARCHAR(100),
    revenue VARCHAR(100),
    employees INTEGER,
    brief TEXT,
    current_environment JSONB,
    business_goals TEXT[],
    constraints JSONB,
    customer_profile JSONB,
    business_context JSONB,
    ideal_solution JSONB,
    scoring_breakdown JSONB,
    tags TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scenario Questions table
CREATE TABLE scenario_questions (
    id VARCHAR(100) PRIMARY KEY,
    scenario_id VARCHAR(100) REFERENCES scenarios(id) ON DELETE CASCADE,
    question_order INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    step INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    question TEXT NOT NULL,
    objection TEXT,
    multiple_choice BOOLEAN DEFAULT true,
    options JSONB NOT NULL,
    feedback JSONB,
    scoring_criteria JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Objections table
CREATE TABLE objections (
    id SERIAL PRIMARY KEY,
    trigger VARCHAR(100) NOT NULL,
    objection TEXT NOT NULL,
    type VARCHAR(100) NOT NULL,
    best_response TEXT,
    talking_points TEXT[],
    supporting_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scenario Objections (many-to-many relationship)
CREATE TABLE scenario_objections (
    scenario_id VARCHAR(100) REFERENCES scenarios(id) ON DELETE CASCADE,
    objection_id INTEGER REFERENCES objections(id) ON DELETE CASCADE,
    PRIMARY KEY (scenario_id, objection_id)
);

-- User Progress table
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    scenario_id VARCHAR(100) REFERENCES scenarios(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'not_started',
    score INTEGER DEFAULT 0,
    max_score INTEGER,
    completion_percentage INTEGER DEFAULT 0,
    time_spent INTEGER DEFAULT 0,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    answers JSONB DEFAULT '[]'::jsonb,
    UNIQUE(user_id, scenario_id)
);

-- Scenario Attempts table (detailed attempt history)
CREATE TABLE scenario_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    scenario_id VARCHAR(100) REFERENCES scenarios(id) ON DELETE CASCADE,
    attempt_number INTEGER NOT NULL,
    score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    percentage DECIMAL(5,2),
    time_spent INTEGER,
    answers JSONB NOT NULL,
    skill_scores JSONB,
    recommendations JSONB,
    started_at TIMESTAMP NOT NULL,
    completed_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Achievements table
CREATE TABLE user_achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    achievement_type VARCHAR(100) NOT NULL,
    achievement_name VARCHAR(255) NOT NULL,
    description TEXT,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_keywords ON products USING GIN(keywords);
CREATE INDEX idx_scenarios_industry ON scenarios(industry);
CREATE INDEX idx_scenarios_difficulty ON scenarios(difficulty);
CREATE INDEX idx_scenarios_tags ON scenarios USING GIN(tags);
CREATE INDEX idx_scenario_questions_scenario ON scenario_questions(scenario_id);
CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_user_progress_scenario ON user_progress(scenario_id);
CREATE INDEX idx_scenario_attempts_user ON scenario_attempts(user_id);
CREATE INDEX idx_scenario_attempts_scenario ON scenario_attempts(scenario_id);
CREATE INDEX idx_user_achievements_user ON user_achievements(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_scenarios_updated_at BEFORE UPDATE ON scenarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE users IS 'User accounts and profiles';
COMMENT ON TABLE products IS 'IBM products catalog with detailed information';
COMMENT ON TABLE scenarios IS 'Training scenarios for sales practice';
COMMENT ON TABLE scenario_questions IS 'Questions within each scenario';
COMMENT ON TABLE objections IS 'Common customer objections and responses';
COMMENT ON TABLE user_progress IS 'User progress tracking for scenarios';
COMMENT ON TABLE scenario_attempts IS 'Detailed history of scenario attempts';
COMMENT ON TABLE user_achievements IS 'User achievements and badges';

-- Grant permissions (adjust as needed for your environment)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dealsprint_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO dealsprint_user;

-- Made with Bob
