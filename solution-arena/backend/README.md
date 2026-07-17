# Backend API Documentation

## Overview

Express.js backend server for the IBM Tech Sales Training Platform with PostgreSQL database.

## Architecture

```
backend/
├── config/
│   └── database.js          # Database connection pool
├── routes/
│   ├── scenarios.js         # Scenario endpoints
│   ├── products.js          # Product endpoints
│   └── progress.js          # User progress endpoints
├── middleware/              # Custom middleware (future)
├── server.js                # Main server file
├── package.json             # Dependencies
└── .env.example             # Environment template
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your database credentials
```

### 3. Setup Database

```bash
# Create database and run schema
npm run db:setup

# Or manually:
psql -U postgres -c "CREATE DATABASE dealsprint;"
psql -U postgres -d dealsprint -f ../database/schema.sql
npm run db:seed
```

### 4. Start Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:3001` by default.

## API Endpoints

### Health Check

#### GET /health
Check server and database status.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-07-17T17:00:00.000Z",
  "database": "connected"
}
```

### Scenarios

#### GET /api/scenarios
Get all scenarios with optional filtering.

**Query Parameters:**
- `industry` (string): Filter by industry
- `difficulty` (string): Filter by difficulty
- `limit` (number): Results per page (default: 50)
- `offset` (number): Pagination offset (default: 0)

**Example:**
```bash
curl "http://localhost:3001/api/scenarios?industry=Healthcare&difficulty=intermediate"
```

**Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 5
}
```

#### GET /api/scenarios/:id
Get specific scenario with questions.

**Example:**
```bash
curl http://localhost:3001/api/scenarios/scenario-power-001
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "scenario-power-001",
    "title": "SAP Migration to Cloud",
    "questions": [...]
  }
}
```

#### GET /api/scenarios/industry/:industry
Get all scenarios for a specific industry.

**Example:**
```bash
curl http://localhost:3001/api/scenarios/industry/Banking
```

#### POST /api/scenarios
Create new scenario (admin only).

**Request Body:**
```json
{
  "id": "scenario-new-001",
  "title": "New Scenario",
  "difficulty": "intermediate",
  "industry": "Retail",
  ...
}
```

#### PUT /api/scenarios/:id
Update existing scenario (admin only).

#### DELETE /api/scenarios/:id
Soft delete scenario (admin only).

### Products

#### GET /api/products
Get all products with optional filtering.

**Query Parameters:**
- `category` (string): Filter by category
- `subcategory` (string): Filter by subcategory
- `search` (string): Search in name, description, keywords
- `limit` (number): Results per page (default: 100)
- `offset` (number): Pagination offset (default: 0)

**Example:**
```bash
curl "http://localhost:3001/api/products?category=Hardware&search=power"
```

#### GET /api/products/:id
Get specific product.

**Example:**
```bash
curl http://localhost:3001/api/products/ibm-power
```

#### GET /api/products/category/:category
Get all products in a category.

**Example:**
```bash
curl http://localhost:3001/api/products/category/Cloud
```

#### GET /api/products/search/:keyword
Search products by keyword.

**Example:**
```bash
curl http://localhost:3001/api/products/search/kubernetes
```

#### POST /api/products
Create new product (admin only).

#### PUT /api/products/:id
Update existing product (admin only).

#### DELETE /api/products/:id
Delete product (admin only).

### User Progress

#### GET /api/progress/user/:userId
Get all progress for a user.

**Example:**
```bash
curl http://localhost:3001/api/progress/user/123e4567-e89b-12d3-a456-426614174000
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "...",
      "scenario_id": "scenario-power-001",
      "status": "completed",
      "score": 85,
      "max_score": 100,
      "completion_percentage": 100,
      "title": "SAP Migration to Cloud",
      "industry": "Manufacturing"
    }
  ]
}
```

#### GET /api/progress/user/:userId/scenario/:scenarioId
Get progress for specific scenario.

#### POST /api/progress
Create or update progress.

**Request Body:**
```json
{
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "scenario_id": "scenario-power-001",
  "status": "in_progress",
  "score": 45,
  "max_score": 100,
  "completion_percentage": 60,
  "time_spent": 1200,
  "answers": [...]
}
```

#### POST /api/progress/attempt
Record a completed scenario attempt.

**Request Body:**
```json
{
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "scenario_id": "scenario-power-001",
  "attempt_number": 1,
  "score": 85,
  "max_score": 100,
  "percentage": 85.0,
  "time_spent": 1800,
  "answers": [...],
  "skill_scores": {...},
  "recommendations": [...],
  "started_at": "2026-07-17T16:00:00Z",
  "completed_at": "2026-07-17T16:30:00Z"
}
```

#### GET /api/progress/user/:userId/attempts
Get attempt history for a user.

**Query Parameters:**
- `limit` (number): Results per page (default: 20)
- `offset` (number): Pagination offset (default: 0)

#### GET /api/progress/user/:userId/stats
Get user statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "scenarios_attempted": 10,
    "scenarios_completed": 8,
    "average_score": 82.5,
    "total_time_spent": 18000,
    "last_completed": "2026-07-17T16:30:00Z",
    "total_attempts": 12,
    "average_percentage": 81.2
  }
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message here"
}
```

HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error
- `503` - Service Unavailable (database down)

## Database Connection

Connection pooling is configured in `config/database.js`:

```javascript
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'dealsprint',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

## Security

Current security measures:
- Helmet.js for security headers
- CORS configured for frontend origin
- Request size limits (10mb)
- SQL injection protection via parameterized queries

Future enhancements:
- JWT authentication
- Rate limiting
- Input validation middleware
- Role-based access control

## Development

### Running Tests

```bash
npm test
```

### Code Structure

- **Routes**: Handle HTTP requests and responses
- **Config**: Database and other configurations
- **Middleware**: Custom middleware functions (future)

### Adding New Endpoints

1. Create route file in `routes/`
2. Import in `server.js`
3. Mount with `app.use('/api/path', router)`
4. Document in this README

### Database Queries

Use the query helper from `config/database.js`:

```javascript
const { query } = require('../config/database');

const result = await query(
  'SELECT * FROM products WHERE category = $1',
  ['Hardware']
);
```

For transactions:

```javascript
const { transaction } = require('../config/database');

const result = await transaction(async (client) => {
  await client.query('INSERT INTO ...');
  await client.query('UPDATE ...');
  return result;
});
```

## Deployment

### Environment Variables

Required for production:
```env
DB_HOST=your-db-host
DB_PORT=5432
DB_NAME=dealsprint
DB_USER=your-db-user
DB_PASSWORD=GENERATE_SECURE_PASSWORD_HERE
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
DEMO_PASSWORD=GENERATE_SECURE_PASSWORD_HERE
JWT_SECRET=GENERATE_RANDOM_SECRET_KEY_HERE
```

**Security Best Practices:**
- Use strong, randomly generated passwords (minimum 16 characters)
- Never commit `.env` files to version control
- Rotate secrets regularly in production
- Use a secrets manager (e.g., IBM Secrets Manager, HashiCorp Vault) for production

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use secure database credentials
- [ ] Enable SSL for database connections
- [ ] Configure proper CORS origins
- [ ] Set up monitoring and logging
- [ ] Implement rate limiting
- [ ] Add authentication middleware
- [ ] Set up automated backups
- [ ] Configure load balancing (if needed)

## Monitoring

### Health Checks

Monitor `/health` endpoint for:
- Server availability
- Database connectivity
- Response time

### Logging

Morgan logs all HTTP requests in development mode.

For production, consider:
- Winston for structured logging
- Log aggregation service (e.g., Datadog, New Relic)
- Error tracking (e.g., Sentry)

## Performance

### Query Optimization

- Indexes are created for frequently queried columns
- Use pagination for large result sets
- Connection pooling reduces overhead
- JSONB fields for flexible schema

### Caching Strategy (Future)

Consider implementing:
- Redis for session storage
- Query result caching
- CDN for static assets

## Troubleshooting

### Server won't start

1. Check PostgreSQL is running: `pg_isready`
2. Verify database exists: `psql -U postgres -l`
3. Check `.env` configuration
4. Review error logs in terminal

### Database connection errors

1. Test connection: `psql -U postgres -d dealsprint`
2. Verify credentials in `.env`
3. Check PostgreSQL logs
4. Ensure database is accessible from server

### API returns 500 errors

1. Check server logs for stack traces
2. Verify database schema is up to date
3. Test queries directly in psql
4. Check for missing environment variables

## Contributing

When adding new features:
1. Create feature branch
2. Add tests for new endpoints
3. Update this documentation
4. Submit pull request

## License

MIT License - See LICENSE file for details