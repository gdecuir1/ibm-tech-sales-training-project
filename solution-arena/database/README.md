# Database Documentation

## Overview

The IBM Tech Sales Training Platform uses PostgreSQL as its primary database. This document provides comprehensive information about the database schema, setup, and maintenance.

## Database Schema

### Tables

#### 1. **users**
Stores user account information and profiles.

**Columns:**
- `id` (UUID, PK): Unique user identifier
- `email` (VARCHAR): User email (unique)
- `username` (VARCHAR): Username (unique)
- `password_hash` (VARCHAR): Hashed password
- `first_name`, `last_name` (VARCHAR): User name
- `role` (VARCHAR): User role (learner, admin)
- `created_at`, `last_login` (TIMESTAMP): Timestamps
- `is_active` (BOOLEAN): Account status
- `profile_data` (JSONB): Additional profile information

#### 2. **products**
IBM products catalog with detailed information.

**Columns:**
- `id` (VARCHAR, PK): Product identifier
- `name` (VARCHAR): Product name
- `category`, `subcategory` (VARCHAR): Product categorization
- `description`, `overview` (TEXT): Product descriptions
- `use_cases`, `strengths`, `keywords` (TEXT[]): Arrays of strings
- `ideal_customers`, `pain_points`, `technical_specs`, `pricing_info`, `competitive_info` (JSONB): Structured data
- `created_at`, `updated_at` (TIMESTAMP): Timestamps

#### 3. **scenarios**
Training scenarios for sales practice.

**Columns:**
- `id` (VARCHAR, PK): Scenario identifier
- `title` (VARCHAR): Scenario title
- `description` (TEXT): Scenario description
- `difficulty` (VARCHAR): beginner, intermediate, advanced
- `estimated_time` (VARCHAR): Estimated completion time
- `company`, `industry`, `size`, `revenue` (VARCHAR): Customer details
- `employees` (INTEGER): Number of employees
- `brief` (TEXT): Scenario brief
- `current_environment`, `constraints`, `ideal_solution`, `scoring_breakdown` (JSONB): Structured data
- `business_goals`, `tags` (TEXT[]): Arrays
- `is_active` (BOOLEAN): Active status
- `created_at`, `updated_at` (TIMESTAMP): Timestamps

#### 4. **scenario_questions**
Questions within each scenario.

**Columns:**
- `id` (VARCHAR, PK): Question identifier
- `scenario_id` (VARCHAR, FK): References scenarios
- `question_order` (INTEGER): Display order
- `type` (VARCHAR): Question type (priorities, technology-selection, etc.)
- `step` (INTEGER): Step number in scenario
- `title`, `question` (VARCHAR/TEXT): Question content
- `objection` (TEXT): Customer objection (if applicable)
- `multiple_choice` (BOOLEAN): Multiple choice flag
- `options`, `feedback`, `scoring_criteria` (JSONB): Question data
- `created_at` (TIMESTAMP): Creation timestamp

#### 5. **objections**
Common customer objections and responses.

**Columns:**
- `id` (SERIAL, PK): Auto-incrementing ID
- `trigger` (VARCHAR): Trigger keyword
- `objection` (TEXT): Objection text
- `type` (VARCHAR): Objection type
- `best_response` (TEXT): Recommended response
- `talking_points` (TEXT[]): Key talking points
- `supporting_data` (JSONB): Supporting information
- `created_at` (TIMESTAMP): Creation timestamp

#### 6. **user_progress**
Tracks user progress through scenarios.

**Columns:**
- `id` (UUID, PK): Progress record ID
- `user_id` (UUID, FK): References users
- `scenario_id` (VARCHAR, FK): References scenarios
- `status` (VARCHAR): not_started, in_progress, completed
- `score`, `max_score` (INTEGER): Scoring information
- `completion_percentage` (INTEGER): Progress percentage
- `time_spent` (INTEGER): Time in seconds
- `started_at`, `completed_at`, `last_accessed` (TIMESTAMP): Timestamps
- `answers` (JSONB): User answers
- **Unique constraint:** (user_id, scenario_id)

#### 7. **scenario_attempts**
Detailed history of scenario attempts.

**Columns:**
- `id` (UUID, PK): Attempt ID
- `user_id` (UUID, FK): References users
- `scenario_id` (VARCHAR, FK): References scenarios
- `attempt_number` (INTEGER): Attempt sequence number
- `score`, `max_score` (INTEGER): Scoring
- `percentage` (DECIMAL): Score percentage
- `time_spent` (INTEGER): Time in seconds
- `answers`, `skill_scores`, `recommendations` (JSONB): Attempt data
- `started_at`, `completed_at`, `created_at` (TIMESTAMP): Timestamps

#### 8. **user_achievements**
User achievements and badges.

**Columns:**
- `id` (UUID, PK): Achievement ID
- `user_id` (UUID, FK): References users
- `achievement_type` (VARCHAR): Type of achievement
- `achievement_name` (VARCHAR): Achievement name
- `description` (TEXT): Achievement description
- `earned_at` (TIMESTAMP): When earned
- `metadata` (JSONB): Additional data

## Setup Instructions

### Prerequisites

- PostgreSQL 14 or higher
- Node.js 18 or higher
- npm or yarn

### 1. Install PostgreSQL

**macOS (using Homebrew):**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download and install from [postgresql.org](https://www.postgresql.org/download/windows/)

### 2. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE dealsprint;

# Exit psql
\q
```

### 3. Run Schema

```bash
# From the project root
psql -U postgres -d dealsprint -f solution-arena/database/schema.sql
```

### 4. Seed Database

```bash
# Install dependencies
cd solution-arena/backend
npm install

# Run seed script
node ../database/seed.js
```

Or use the npm script:
```bash
cd solution-arena/backend
npm run db:seed
```

### 5. Configure Environment

```bash
# Copy example environment file
cp backend/.env.example backend/.env

# Edit .env with your database credentials
nano backend/.env
```

## Database Management

### Reset Database

To completely reset the database:

```bash
cd solution-arena/backend
npm run db:reset
```

This will:
1. Drop the existing database
2. Create a new database
3. Run the schema
4. Seed with initial data

### Backup Database

```bash
# Backup entire database
pg_dump -U postgres dealsprint > backup_$(date +%Y%m%d).sql

# Backup schema only
pg_dump -U postgres --schema-only dealsprint > schema_backup.sql

# Backup data only
pg_dump -U postgres --data-only dealsprint > data_backup.sql
```

### Restore Database

```bash
# Restore from backup
psql -U postgres dealsprint < backup_20260717.sql
```

### View Database Statistics

```sql
-- Connect to database
psql -U postgres -d dealsprint

-- Count records in each table
SELECT 'users' as table_name, COUNT(*) FROM users
UNION ALL
SELECT 'products', COUNT(*) FROM products
UNION ALL
SELECT 'scenarios', COUNT(*) FROM scenarios
UNION ALL
SELECT 'scenario_questions', COUNT(*) FROM scenario_questions
UNION ALL
SELECT 'user_progress', COUNT(*) FROM user_progress
UNION ALL
SELECT 'scenario_attempts', COUNT(*) FROM scenario_attempts;

-- View database size
SELECT pg_size_pretty(pg_database_size('dealsprint'));
```

## Indexes

The schema includes indexes for optimal query performance:

- `idx_users_email`: Fast user lookup by email
- `idx_users_username`: Fast user lookup by username
- `idx_products_category`: Filter products by category
- `idx_products_keywords`: GIN index for keyword search
- `idx_scenarios_industry`: Filter scenarios by industry
- `idx_scenarios_difficulty`: Filter scenarios by difficulty
- `idx_scenarios_tags`: GIN index for tag search
- `idx_scenario_questions_scenario`: Fast question lookup
- `idx_user_progress_user`: User progress queries
- `idx_user_progress_scenario`: Scenario progress queries
- `idx_scenario_attempts_user`: User attempt history
- `idx_scenario_attempts_scenario`: Scenario attempt history
- `idx_user_achievements_user`: User achievements lookup

## Maintenance

### Vacuum Database

Regular maintenance to reclaim storage and update statistics:

```sql
-- Analyze all tables
ANALYZE;

-- Vacuum all tables
VACUUM;

-- Full vacuum (requires exclusive lock)
VACUUM FULL;
```

### Update Statistics

```sql
-- Update query planner statistics
ANALYZE VERBOSE;
```

## Security

### User Permissions

Create a dedicated database user for the application:

```sql
-- Create user
CREATE USER dealsprint_user WITH PASSWORD 'secure_password';

-- Grant permissions
GRANT CONNECT ON DATABASE dealsprint TO dealsprint_user;
GRANT USAGE ON SCHEMA public TO dealsprint_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dealsprint_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO dealsprint_user;
```

### Connection Security

- Use SSL connections in production
- Store credentials in environment variables
- Use connection pooling (implemented in backend)
- Implement rate limiting on API endpoints

## Troubleshooting

### Connection Issues

```bash
# Check if PostgreSQL is running
pg_isready

# Check PostgreSQL status
brew services list  # macOS
sudo systemctl status postgresql  # Linux
```

### Permission Errors

```sql
-- Grant all permissions to user
GRANT ALL PRIVILEGES ON DATABASE dealsprint TO postgres;
```

### Reset Password

```bash
# macOS/Linux
psql -U postgres
ALTER USER postgres PASSWORD 'new_password';
```

## Migration Strategy

For future schema changes:

1. Create migration files in `database/migrations/`
2. Use sequential numbering: `001_add_user_roles.sql`
3. Include both UP and DOWN migrations
4. Test migrations on development database first
5. Backup production database before applying migrations

## Performance Tuning

### Connection Pool Settings

Configured in `backend/config/database.js`:
- Max connections: 20
- Idle timeout: 30 seconds
- Connection timeout: 2 seconds

### Query Optimization

- Use EXPLAIN ANALYZE to understand query performance
- Add indexes for frequently queried columns
- Use JSONB for flexible schema fields
- Implement pagination for large result sets

## Support

For database-related issues:
- Check PostgreSQL logs: `/usr/local/var/log/postgresql@14/`
- Review application logs for query errors
- Consult PostgreSQL documentation: https://www.postgresql.org/docs/

## Version History

- **v2.0** (2026-07-17): Complete database schema with all tables
- **v1.0** (2024): Initial schema (archived)