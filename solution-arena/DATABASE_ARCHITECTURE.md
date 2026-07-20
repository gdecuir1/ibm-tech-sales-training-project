# IBM Cloud PostgreSQL Database Architecture

## Overview

The IBM Tech Sales Training Platform uses an IBM Cloud PostgreSQL database to store all application data. The database is accessed via the `DATABASE_URL` environment variable and connects through the backend API.

---

## Database Connection Flow

```
┌─────────────────┐
│   Frontend      │
│   (React App)   │
│   Port 5173     │
└────────┬────────┘
         │ HTTP Requests
         ▼
┌─────────────────┐
│   Backend API   │
│   (Express.js)  │
│   Port 3001     │
└────────┬────────┘
         │ DATABASE_URL
         ▼
┌─────────────────┐
│  IBM Cloud      │
│  PostgreSQL     │
│  (Managed DB)   │
└─────────────────┘
```

---

## Database Schema

### Core Tables

#### 1. **users** - User accounts and profiles
- Stores user authentication and profile information
- Fields: id, email, username, password_hash, first_name, last_name, role, profile_data
- Used by: Authentication, user management

#### 2. **products** - IBM products catalog
- Contains detailed information about IBM products
- Fields: id, name, category, subcategory, description, use_cases, strengths, keywords
- Used by: Product library, scenario recommendations
- **API Endpoint**: `/api/products`

#### 3. **scenarios** - Training scenarios
- Sales training scenarios for different industries
- Fields: id, title, difficulty, industry, company, brief, business_goals, ideal_solution
- Used by: Scenario library, training exercises
- **API Endpoint**: `/api/scenarios`

#### 4. **scenario_questions** - Questions within scenarios
- Multiple-choice and open-ended questions for each scenario
- Fields: id, scenario_id, question_order, type, question, options, feedback
- Used by: Scenario execution, answer validation
- **API Endpoint**: `/api/scenarios/:id` (includes questions)

#### 5. **objections** - Customer objections database
- Common customer objections and best responses
- Fields: id, trigger, objection, type, best_response, talking_points
- Used by: Objection handling training

#### 6. **user_progress** - User progress tracking
- Tracks user progress through scenarios
- Fields: user_id, scenario_id, status, score, completion_percentage, answers
- Used by: Dashboard, progress tracking
- **API Endpoint**: `/api/progress/user/:userId`

#### 7. **scenario_attempts** - Detailed attempt history
- Records each attempt at a scenario with full details
- Fields: user_id, scenario_id, attempt_number, score, answers, skill_scores
- Used by: Analytics, performance tracking
- **API Endpoint**: `/api/progress/user/:userId/attempts`

#### 8. **user_achievements** - User achievements and badges
- Tracks earned achievements and milestones
- Fields: user_id, achievement_type, achievement_name, earned_at
- Used by: Gamification, motivation

---

## Backend API Routes

### Products Routes (`/api/products`)
```javascript
GET    /api/products              - Get all products
GET    /api/products/:id          - Get product by ID
GET    /api/products/category/:category - Get products by category
GET    /api/products/search/:keyword    - Search products
POST   /api/products              - Create product (admin)
PUT    /api/products/:id          - Update product (admin)
DELETE /api/products/:id          - Delete product (admin)
```

### Scenarios Routes (`/api/scenarios`)
```javascript
GET    /api/scenarios             - Get all scenarios
GET    /api/scenarios/:id         - Get scenario with questions
GET    /api/scenarios/industry/:industry - Get scenarios by industry
POST   /api/scenarios             - Create scenario (admin)
PUT    /api/scenarios/:id         - Update scenario (admin)
DELETE /api/scenarios/:id         - Soft delete scenario (admin)
```

### Progress Routes (`/api/progress`)
```javascript
GET    /api/progress/user/:userId              - Get all user progress
GET    /api/progress/user/:userId/scenario/:scenarioId - Get specific progress
POST   /api/progress                           - Create/update progress
POST   /api/progress/attempt                   - Record scenario attempt
GET    /api/progress/user/:userId/attempts     - Get all attempts
GET    /api/progress/user/:userId/stats        - Get user statistics
```

---

## How the Web App Uses the Database

### 1. **Scenario Library Page**
- **Frontend**: Displays list of available scenarios
- **Backend**: `GET /api/scenarios`
- **Database**: Queries `scenarios` table
- **Flow**: 
  1. User visits scenario library
  2. Frontend calls `/api/scenarios?industry=banking`
  3. Backend queries database: `SELECT * FROM scenarios WHERE industry = 'banking'`
  4. Returns scenario list to frontend

### 2. **Scenario Execution**
- **Frontend**: Displays scenario questions and collects answers
- **Backend**: `GET /api/scenarios/:id`
- **Database**: Queries `scenarios` and `scenario_questions` tables
- **Flow**:
  1. User starts a scenario
  2. Frontend calls `/api/scenarios/banking-core-modernization`
  3. Backend queries:
     - `SELECT * FROM scenarios WHERE id = 'banking-core-modernization'`
     - `SELECT * FROM scenario_questions WHERE scenario_id = 'banking-core-modernization'`
  4. Returns complete scenario with all questions

### 3. **Progress Tracking**
- **Frontend**: Saves user answers and progress
- **Backend**: `POST /api/progress`
- **Database**: Inserts/updates `user_progress` table
- **Flow**:
  1. User completes a question
  2. Frontend calls `/api/progress` with answer data
  3. Backend executes:
     ```sql
     INSERT INTO user_progress (user_id, scenario_id, answers, score)
     VALUES (...)
     ON CONFLICT (user_id, scenario_id) DO UPDATE ...
     ```
  4. Progress saved to database

### 4. **Dashboard Analytics**
- **Frontend**: Displays user statistics and progress
- **Backend**: `GET /api/progress/user/:userId/stats`
- **Database**: Aggregates data from `user_progress` and `scenario_attempts`
- **Flow**:
  1. User views dashboard
  2. Frontend calls `/api/progress/user/123/stats`
  3. Backend queries:
     ```sql
     SELECT COUNT(*) as scenarios_completed,
            AVG(score) as average_score,
            SUM(time_spent) as total_time
     FROM user_progress
     WHERE user_id = '123'
     ```
  4. Returns statistics to frontend

### 5. **Product Library**
- **Frontend**: Displays IBM products catalog
- **Backend**: `GET /api/products`
- **Database**: Queries `products` table
- **Flow**:
  1. User searches for "cloud"
  2. Frontend calls `/api/products?search=cloud`
  3. Backend queries:
     ```sql
     SELECT * FROM products
     WHERE name ILIKE '%cloud%' OR 'cloud' = ANY(keywords)
     ```
  4. Returns matching products

---

## Database Configuration

### Connection Details
- **Environment Variable**: `DATABASE_URL`
- **Format**: `postgresql://username:password@host:port/database`
- **SSL**: Required (self-signed certificate, `rejectUnauthorized: false`)
- **Connection Pool**: Max 20 connections, 30s idle timeout

### Configuration Files
1. **backend/config/database.js** - Main database configuration
   - Creates connection pool
   - Validates DATABASE_URL
   - Handles SSL configuration
   - Exports query and transaction helpers

2. **database/seed.js** - Database seeding script
   - Populates initial data from JSON files
   - Creates products, scenarios, questions, objections
   - Uses same DATABASE_URL configuration

### Security Features
- ✅ No hardcoded credentials
- ✅ Environment variable based configuration
- ✅ SSL/TLS encryption
- ✅ Connection pooling
- ✅ Prepared statements (SQL injection protection)
- ✅ Transaction support for data integrity

---

## Current Database State

**Status**: Connected and operational
- **Host**: IBM Cloud PostgreSQL (managed service)
- **Version**: PostgreSQL 18.4
- **Tables**: 0 (database is empty - needs seeding)

### To Populate Database

Run the seed script to create tables and load initial data:

```bash
cd solution-arena/database
node seed.js
```

This will:
1. Create all tables from `schema.sql`
2. Load products from `shared-data/products.json`
3. Load scenarios from `shared-data/scenarios.json`
4. Load objections from `shared-data/objections.json`
5. Create demo user account

---

## Data Flow Example: Complete Scenario

```
1. User selects scenario
   Frontend → GET /api/scenarios/banking-core-modernization
   Backend → SELECT * FROM scenarios, scenario_questions
   Database → Returns scenario data
   
2. User answers questions
   Frontend → POST /api/progress (after each answer)
   Backend → INSERT/UPDATE user_progress
   Database → Saves progress
   
3. User completes scenario
   Frontend → POST /api/progress/attempt
   Backend → INSERT scenario_attempts, UPDATE user_progress
   Database → Records completion
   
4. User views results
   Frontend → GET /api/progress/user/:userId/scenario/:scenarioId
   Backend → SELECT * FROM user_progress, scenario_attempts
   Database → Returns attempt history and scores
```

---

## Monitoring and Maintenance

### Health Check
- **Endpoint**: `GET /health`
- **Response**: `{"status":"healthy","database":"connected"}`
- **Purpose**: Verifies database connectivity

### Database Queries
All database queries are logged with:
- Query text
- Execution duration
- Row count
- Errors (if any)

### Connection Pool Status
- Max connections: 20
- Idle timeout: 30 seconds
- Connection timeout: 2 seconds

---

## Summary

The IBM Cloud PostgreSQL database is the central data store for the Tech Sales Training Platform. It stores:
- **User data** (accounts, progress, achievements)
- **Training content** (scenarios, questions, products)
- **Analytics data** (attempts, scores, statistics)

All database access goes through the backend API, which uses the `DATABASE_URL` environment variable to connect securely to IBM Cloud PostgreSQL. The frontend never directly accesses the database - all data flows through REST API endpoints.