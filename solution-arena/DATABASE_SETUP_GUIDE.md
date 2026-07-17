# Database Setup Guide

## Quick Start

This guide will help you set up the PostgreSQL database backend for the IBM Tech Sales Training Platform.

## Prerequisites

- **PostgreSQL 14+** installed and running
- **Node.js 18+** and npm
- Terminal/Command line access

## Step-by-Step Setup

### 1. Install PostgreSQL

#### macOS (Homebrew)
```bash
brew install postgresql@14
brew services start postgresql@14
```

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

#### Windows
Download from [postgresql.org](https://www.postgresql.org/download/windows/) and follow installer instructions.

### 2. Create Database

```bash
# Connect to PostgreSQL as superuser
psql -U postgres

# Create the database
CREATE DATABASE dealsprint;

# Verify creation
\l

# Exit
\q
```

### 3. Run Database Schema

```bash
# From project root directory
cd solution-arena

# Run schema file
psql -U postgres -d dealsprint -f database/schema.sql
```

You should see output confirming table creation:
```
CREATE TABLE
CREATE TABLE
CREATE TABLE
...
CREATE INDEX
```

### 4. Install Backend Dependencies

```bash
# Navigate to backend directory
cd backend

# Install Node.js dependencies
npm install
```

This installs:
- express (web framework)
- pg (PostgreSQL client)
- cors (CORS middleware)
- helmet (security headers)
- morgan (logging)
- dotenv (environment variables)

### 5. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit with your settings
nano .env  # or use your preferred editor
```

Update these values in `.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dealsprint
DB_USER=postgres
DB_PASSWORD=YOUR_SECURE_PASSWORD_HERE
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
DEMO_PASSWORD=YOUR_DEMO_PASSWORD_HERE
```

**Security Note:** Never commit actual passwords to version control. Use strong, unique passwords for production.

### 6. Seed Database with Data

```bash
# Still in backend directory
npm run db:seed
```

Or run directly:
```bash
node ../database/seed.js
```

Expected output:
```
Seeding products...
✓ Seeded 30 products
Seeding objections...
✓ Seeded 12 objections
Seeding scenarios...
✓ Seeded 2 scenarios
✓ Seeded demo user (email: demo@ibm.com, password: demo123)

✓ Database seeding completed successfully!
```

### 7. Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

You should see:
```
╔════════════════════════════════════════════════════════════╗
║  IBM Tech Sales Training Platform - Backend Server        ║
╠════════════════════════════════════════════════════════════╣
║  Status: Running                                           ║
║  Port: 3001                                                ║
║  Environment: development                                  ║
║  Database: PostgreSQL                                      ║
╚════════════════════════════════════════════════════════════╝
✓ Connected to PostgreSQL database
```

### 8. Test API Endpoints

Open a new terminal and test:

```bash
# Health check
curl http://localhost:3001/health

# Get all scenarios
curl http://localhost:3001/api/scenarios

# Get all products
curl http://localhost:3001/api/products

# Get specific scenario
curl http://localhost:3001/api/scenarios/scenario-power-001
```

## Verification Checklist

- [ ] PostgreSQL is installed and running
- [ ] Database `dealsprint` exists
- [ ] All tables created successfully (8 tables)
- [ ] Data seeded (products, scenarios, objections, demo user)
- [ ] Backend server starts without errors
- [ ] API endpoints respond correctly
- [ ] Frontend can connect to backend (if running)

## Common Issues & Solutions

### Issue: "psql: command not found"

**Solution:** PostgreSQL is not in your PATH.

**macOS:**
```bash
echo 'export PATH="/usr/local/opt/postgresql@14/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Linux:**
```bash
sudo apt install postgresql-client
```

### Issue: "FATAL: role 'postgres' does not exist"

**Solution:** Create the postgres user.

```bash
# macOS
createuser -s postgres

# Linux
sudo -u postgres createuser -s $USER
```

### Issue: "password authentication failed"

**Solution:** Reset PostgreSQL password.

```bash
# macOS
psql -U postgres
ALTER USER postgres PASSWORD 'YOUR_NEW_SECURE_PASSWORD';

# Linux
sudo -u postgres psql
ALTER USER postgres PASSWORD 'YOUR_NEW_SECURE_PASSWORD';
```

Update your `.env` file with the new password. **Never use simple passwords in production.**

### Issue: "database 'dealsprint' does not exist"

**Solution:** Create the database.

```bash
psql -U postgres -c "CREATE DATABASE dealsprint;"
```

### Issue: "Cannot find module 'pg'"

**Solution:** Install dependencies.

```bash
cd solution-arena/backend
npm install
```

### Issue: "Port 3001 already in use"

**Solution:** Change port in `.env` or kill the process.

```bash
# Find process using port 3001
lsof -ti:3001

# Kill the process
kill -9 $(lsof -ti:3001)

# Or change PORT in .env
PORT=3002
```

### Issue: "Connection refused to localhost:5432"

**Solution:** PostgreSQL is not running.

```bash
# macOS
brew services start postgresql@14

# Linux
sudo systemctl start postgresql
```

## Database Management Commands

### View Database Contents

```bash
# Connect to database
psql -U postgres -d dealsprint

# List all tables
\dt

# Count records
SELECT 'products' as table, COUNT(*) FROM products
UNION ALL
SELECT 'scenarios', COUNT(*) FROM scenarios
UNION ALL
SELECT 'users', COUNT(*) FROM users;

# View specific table
SELECT * FROM products LIMIT 5;

# Exit
\q
```

### Reset Database

To start fresh:

```bash
cd solution-arena/backend

# This will drop and recreate everything
npm run db:reset
```

Or manually:
```bash
# Drop database
psql -U postgres -c "DROP DATABASE IF EXISTS dealsprint;"

# Recreate
psql -U postgres -c "CREATE DATABASE dealsprint;"

# Run schema
psql -U postgres -d dealsprint -f ../database/schema.sql

# Seed data
node ../database/seed.js
```

### Backup Database

```bash
# Full backup
pg_dump -U postgres dealsprint > backup_$(date +%Y%m%d).sql

# Restore from backup
psql -U postgres dealsprint < backup_20260717.sql
```

## Next Steps

1. **Start Frontend**: Navigate to `solution-arena/frontend` and run `npm run dev`
2. **Test Integration**: Verify frontend can fetch data from backend
3. **Review API Documentation**: Check `backend/routes/` for available endpoints
4. **Explore Database**: Use psql or a GUI tool like pgAdmin to explore the data

## API Endpoints Reference

### Scenarios
- `GET /api/scenarios` - List all scenarios
- `GET /api/scenarios/:id` - Get specific scenario
- `GET /api/scenarios/industry/:industry` - Filter by industry
- `POST /api/scenarios` - Create scenario (admin)
- `PUT /api/scenarios/:id` - Update scenario (admin)
- `DELETE /api/scenarios/:id` - Delete scenario (admin)

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get specific product
- `GET /api/products/category/:category` - Filter by category
- `GET /api/products/search/:keyword` - Search products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Progress
- `GET /api/progress/user/:userId` - Get user progress
- `GET /api/progress/user/:userId/scenario/:scenarioId` - Get specific progress
- `POST /api/progress` - Save progress
- `POST /api/progress/attempt` - Record attempt
- `GET /api/progress/user/:userId/attempts` - Get attempt history
- `GET /api/progress/user/:userId/stats` - Get user statistics

### Health
- `GET /health` - Server and database health check

## Additional Resources

- **Database Schema**: See `database/schema.sql` for complete schema
- **Database Documentation**: See `database/README.md` for detailed info
- **Backend Code**: Explore `backend/routes/` for API implementation
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

## Support

If you encounter issues:
1. Check PostgreSQL logs: `/usr/local/var/log/postgresql@14/`
2. Check backend logs in terminal
3. Verify all environment variables in `.env`
4. Ensure PostgreSQL is running: `pg_isready`
5. Test database connection: `psql -U postgres -d dealsprint`

## Demo User

A demo user is created during seeding:
- **Email**: demo@ibm.com
- **Password**: Set via `DEMO_PASSWORD` environment variable
- **Role**: learner

**Security Note:** Set a secure password in your `.env` file before seeding. Never use default passwords in production environments.

Use this account for testing authentication features (when implemented).