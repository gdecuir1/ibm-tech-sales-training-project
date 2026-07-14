# IBM DealSprint Database Documentation

## Overview

IBM DealSprint uses PostgreSQL 14+ as its primary database, designed for deployment on IBM Cloud Databases for PostgreSQL. The database schema supports user management, scenario tracking, progress analytics, and adaptive learning algorithms.

## Database Architecture

### Technology Stack
- **Database**: PostgreSQL 14+
- **Cloud Platform**: IBM Cloud Databases for PostgreSQL
- **Connection Pool**: node-postgres (pg)
- **ORM**: Custom models/repositories pattern

### Key Features
- ✅ UUID-based primary keys for distributed systems
- ✅ JSONB for flexible schema evolution
- ✅ Automatic timestamp management
- ✅ Triggers for data consistency
- ✅ Views for complex queries
- ✅ Full-text search capabilities
- ✅ Connection pooling for performance

## Schema Overview

### Core Tables

#### 1. **users**
Stores user accounts and profiles.

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50),
    organization VARCHAR(255),
    department VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN,
    metadata JSONB
);
```

**Indexes:**
- `idx_users_email` - Fast email lookups
- `idx_users_organization` - Organization filtering
- `idx_users_created_at` - Temporal queries

#### 2. **scenarios**
Training scenarios with questions and scoring.

```sql
CREATE TABLE scenarios (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    difficulty VARCHAR(20) NOT NULL,
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
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN,
    version INTEGER,
    tags TEXT[],
    metadata JSONB
);
```

**Indexes:**
- `idx_scenarios_difficulty` - Filter by difficulty
- `idx_scenarios_industry` - Filter by industry
- `idx_scenarios_tags` - GIN index for tag searches

#### 3. **products**
IBM product catalog.

```sql
CREATE TABLE products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    use_cases TEXT[],
    strengths TEXT[],
    keywords TEXT[],
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN,
    metadata JSONB
);
```

#### 4. **user_scenario_attempts**
Individual scenario attempts by users.

```sql
CREATE TABLE user_scenario_attempts (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    scenario_id VARCHAR(100) REFERENCES scenarios(id),
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    score INTEGER,
    max_score INTEGER,
    percentage DECIMAL(5,2),
    answers JSONB NOT NULL,
    time_spent_seconds INTEGER,
    is_completed BOOLEAN,
    attempt_number INTEGER,
    metadata JSONB
);
```

**Indexes:**
- `idx_attempts_user_id` - User's attempts
- `idx_attempts_scenario_id` - Scenario attempts
- `idx_attempts_user_scenario` - Composite for lookups

#### 5. **user_progress**
Aggregated user progress and statistics.

```sql
CREATE TABLE user_progress (
    id UUID PRIMARY KEY,
    user_id UUID UNIQUE REFERENCES users(id),
    total_scenarios_completed INTEGER,
    total_scenarios_attempted INTEGER,
    current_level VARCHAR(20),
    total_score INTEGER,
    average_score DECIMAL(5,2),
    total_time_spent_seconds INTEGER,
    industries_covered TEXT[],
    difficulty_stats JSONB,
    industry_stats JSONB,
    streak_days INTEGER,
    last_activity_date DATE,
    achievements TEXT[],
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE
);
```

#### 6. **user_scenario_history**
Historical record for adaptive scenario selection.

```sql
CREATE TABLE user_scenario_history (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    scenario_id VARCHAR(100) REFERENCES scenarios(id),
    completed_at TIMESTAMP WITH TIME ZONE,
    score INTEGER NOT NULL,
    max_score INTEGER,
    percentage DECIMAL(5,2),
    difficulty VARCHAR(20) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    time_spent_seconds INTEGER,
    passed BOOLEAN,
    metadata JSONB
);
```

#### 7. **analytics_events**
User interaction and analytics events.

```sql
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB NOT NULL,
    session_id UUID,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE
);
```

### Views

#### **leaderboard**
Ranked user performance view.

```sql
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
    RANK() OVER (ORDER BY up.average_score DESC, up.total_scenarios_completed DESC) as rank
FROM users u
JOIN user_progress up ON u.id = up.user_id
WHERE u.is_active = true;
```

#### **scenario_statistics**
Scenario performance metrics.

```sql
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
    -- Pass rate calculation
FROM scenarios s
LEFT JOIN user_scenario_attempts usa ON s.id = usa.scenario_id
GROUP BY s.id;
```

### Triggers

#### **update_user_progress()**
Automatically updates user progress when scenarios are completed.

```sql
CREATE TRIGGER trigger_update_user_progress
AFTER INSERT OR UPDATE ON user_scenario_attempts
FOR EACH ROW
EXECUTE FUNCTION update_user_progress();
```

#### **update_updated_at_column()**
Automatically updates `updated_at` timestamp on record changes.

## Setup Instructions

### 1. Local Development Setup

```bash
# Install PostgreSQL 14+
brew install postgresql@14  # macOS
# or
sudo apt-get install postgresql-14  # Ubuntu

# Start PostgreSQL
brew services start postgresql@14

# Create database
createdb dealsprint

# Run schema
psql dealsprint < database/schema.sql

# Seed data
cd database
node seed.js
```

### 2. Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dealsprint
DB_USER=postgres
DB_PASSWORD=your_password

# Connection Pool
DB_POOL_MAX=20
DB_POOL_MIN=2
DB_IDLE_TIMEOUT=30000
DB_CONNECTION_TIMEOUT=10000

# SSL (for IBM Cloud)
DB_SSL=false
DB_SSL_REJECT_UNAUTHORIZED=true

# Application
NODE_ENV=development
PORT=3001
```

### 3. IBM Cloud Deployment

```bash
# Install IBM Cloud CLI
curl -fsSL https://clis.cloud.ibm.com/install/linux | sh

# Login to IBM Cloud
ibmcloud login

# Create PostgreSQL instance
ibmcloud resource service-instance-create dealsprint-db \
  databases-for-postgresql standard us-south \
  -p '{"members_memory_allocation_mb": "4096", "members_disk_allocation_mb": "20480"}'

# Get connection credentials
ibmcloud resource service-key-create dealsprint-db-key \
  Manager --instance-name dealsprint-db

# Update .env with IBM Cloud credentials
```

## Database Operations

### Connection Management

```javascript
const db = require('./backend/database/connection');

// Simple query
const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

// Transaction
await db.transaction(async (client) => {
  await client.query('INSERT INTO users ...');
  await client.query('INSERT INTO user_progress ...');
});

// Test connection
await db.testConnection();

// Get pool stats
const stats = db.getPoolStats();
```

### Using Models

```javascript
const { User, Scenario, UserProgress } = require('./backend/database/models');

// Create user
const user = await User.create({
  email: 'user@ibm.com',
  username: 'user',
  full_name: 'User Name',
  role: 'user',
  organization: 'IBM'
});

// Find scenario
const scenario = await Scenario.findById('scenario-beginner-retail-001');

// Get user progress
const progress = await UserProgress.findByUserId(userId);

// Get leaderboard
const leaderboard = await Analytics.getLeaderboard(100);
```

## Seeding Data

### Seed All Data

```bash
cd database
node seed.js
```

### Clear and Reseed

```bash
node seed.js --clear
```

### Seed Specific Data

```javascript
const { seedProducts, seedScenarios } = require('./database/seed');

await seedProducts(products);
await seedScenarios(scenarios);
```

## Migrations

### Creating Migrations

```bash
# Create new migration
cd database/migrations
touch 001_add_user_preferences.sql
```

### Migration Template

```sql
-- Migration: 001_add_user_preferences
-- Description: Add user preferences table
-- Date: 2026-07-14

BEGIN;

CREATE TABLE user_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    preferences JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_preferences_user_id ON user_preferences(user_id);

COMMIT;
```

## Performance Optimization

### Indexes

All critical query paths are indexed:
- User lookups by email/ID
- Scenario filtering by difficulty/industry
- User progress queries
- Analytics event queries

### Connection Pooling

Configured for optimal performance:
- Max connections: 20
- Min connections: 2
- Idle timeout: 30s
- Connection timeout: 10s

### Query Optimization

```sql
-- Use EXPLAIN ANALYZE for slow queries
EXPLAIN ANALYZE
SELECT * FROM scenarios WHERE difficulty = 'beginner';

-- Create indexes for frequent queries
CREATE INDEX idx_custom ON table_name(column_name);

-- Use materialized views for complex aggregations
CREATE MATERIALIZED VIEW user_stats AS
SELECT user_id, COUNT(*) as total
FROM user_scenario_attempts
GROUP BY user_id;
```

## Backup and Recovery

### Automated Backups (IBM Cloud)

IBM Cloud Databases for PostgreSQL provides:
- Automatic daily backups
- Point-in-time recovery
- 30-day backup retention
- Cross-region replication

### Manual Backup

```bash
# Backup database
pg_dump dealsprint > backup_$(date +%Y%m%d).sql

# Restore database
psql dealsprint < backup_20260714.sql
```

## Monitoring

### Database Metrics

Monitor these key metrics:
- Connection pool utilization
- Query performance
- Table sizes
- Index usage
- Lock contention

### IBM Cloud Monitoring

```bash
# View database metrics
ibmcloud resource service-instance dealsprint-db --output json

# View logs
ibmcloud logging log-show
```

## Security

### Best Practices

1. **Use SSL/TLS** for all connections
2. **Rotate credentials** regularly
3. **Limit user permissions** to minimum required
4. **Enable audit logging**
5. **Use prepared statements** to prevent SQL injection
6. **Encrypt sensitive data** at rest and in transit

### User Roles

```sql
-- Create application user
CREATE USER dealsprint_app WITH PASSWORD 'secure_password';

-- Grant permissions
GRANT CONNECT ON DATABASE dealsprint TO dealsprint_app;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO dealsprint_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO dealsprint_app;
```

## Troubleshooting

### Common Issues

#### Connection Refused
```bash
# Check PostgreSQL is running
pg_isready

# Check connection settings
psql -h localhost -U postgres -d dealsprint
```

#### Slow Queries
```sql
-- Find slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

#### Connection Pool Exhausted
```javascript
// Check pool stats
const stats = db.getPoolStats();
console.log('Pool stats:', stats);

// Increase pool size in .env
DB_POOL_MAX=50
```

## Support

For database issues:
1. Check logs: `tail -f /var/log/postgresql/postgresql-14-main.log`
2. Review IBM Cloud status: https://cloud.ibm.com/status
3. Contact IBM Cloud Support
4. Review documentation: https://cloud.ibm.com/docs/databases-for-postgresql

## Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/14/)
- [IBM Cloud Databases for PostgreSQL](https://cloud.ibm.com/docs/databases-for-postgresql)
- [node-postgres Documentation](https://node-postgres.com/)
- [Database Design Best Practices](https://www.postgresql.org/docs/14/ddl-best-practices.html)

---

**Last Updated**: 2026-07-14  
**Database Version**: PostgreSQL 14+  
**Schema Version**: 1.0.0