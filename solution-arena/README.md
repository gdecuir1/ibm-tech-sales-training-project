# IBM DealSprint - Accelerate Your Sales Mastery

> **AI-powered adaptive training platform with 100+ gamified scenarios that accelerates IBM sales mastery through intelligent, rapid-fire practice**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Tests](https://img.shields.io/badge/Tests-90%2B-brightgreen.svg)](./backend/tests/)

## 🎯 Overview

IBM DealSprint is an immersive training platform designed to help IBM sales professionals master the art of solution selling through realistic, scenario-based learning. The platform features adaptive difficulty progression, comprehensive portfolio coverage, and intelligent scenario selection to ensure optimal learning outcomes.

### Why IBM DealSprint?

Traditional IBM training methods like **watsonx workshops** and **Seismic customer interaction simulations** are comprehensive but often **too lengthy** for quick practice sessions. Sales professionals need a way to get **fast reps** and build intuitive decision-making skills without committing hours to each training session.

**IBM DealSprint solves this by:**
- ⚡ **Quick Practice** - Complete scenarios in 3-6 minutes vs. 30-60 minute workshops
- 🎯 **Focused Learning** - Each scenario targets specific skills and concepts
- 🔄 **High Volume Reps** - Complete 10+ scenarios in a typical session
- 📈 **Rapid Skill Building** - Build intuition through repetition and immediate feedback
- 🎮 **Engaging Format** - Game-like experience keeps you motivated
- 📊 **Measurable Progress** - Track improvement across scenarios and industries

**Perfect for:**
- New hires ramping up quickly
- Experienced reps refreshing knowledge
- Pre-call preparation
- Skill gap identification
- Continuous learning and practice

### Key Features

- **🎓 100+ Training Scenarios** - Diverse scenarios across 10 industries (Retail, Healthcare, Finance, Manufacturing, Telecom, Government, Education, Energy, Transportation, Media)
- **📈 Adaptive Difficulty** - Intelligent progression from beginner → intermediate → advanced based on performance
- **🎯 7-Step Sales Process** - Each scenario covers: priorities, technology selection, architecture, justification, objection handling, and cross-selling
- **📊 Performance Tracking** - Detailed analytics on user progress, scores, and skill development
- **🏆 Gamification** - Points, levels, and achievements to drive engagement
- **🔄 Industry Diversification** - Automatic variety to ensure broad exposure
- **⚡ Real-time Feedback** - Instant scoring and guidance on every decision

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+ (or IBM Cloud Databases for PostgreSQL)
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd solution-arena

# Install backend dependencies
cd backend
npm install
npm install pg  # PostgreSQL client

# Install frontend dependencies
cd ../frontend
npm install
```

### Database Setup

```bash
# Create local PostgreSQL database
createdb dealsprint

# Run database schema
psql dealsprint < database/schema.sql

# Seed database with scenarios and products
cd database
node seed.js
cd ..
```

### Environment Configuration

Create `backend/.env`:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dealsprint
DB_USER=postgres
DB_PASSWORD=your_password
DB_SSL=false

# Application
NODE_ENV=development
PORT=3001
```

### Running the Application

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
# Server runs on http://localhost:3001
```

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

**Access the application:**
Open your browser to `http://localhost:5173`

## 📁 Project Structure

```
solution-arena/
├── backend/                    # Node.js/Express API server
│   ├── database/              # Database layer
│   │   ├── connection.js      # PostgreSQL connection pool
│   │   └── models.js          # Data access models
│   ├── routes/                # API endpoints
│   │   ├── scenarios.js       # Scenario retrieval
│   │   ├── scenarioSelection.js  # Adaptive selection & tracking
│   │   ├── evaluate.js        # Answer evaluation
│   │   ├── scoring.js         # Score calculation
│   │   └── products.js        # IBM product catalog
│   ├── logic/                 # Business logic
│   │   ├── productMatcher.js  # Product recommendation engine
│   │   └── responseEvaluator.js  # Answer evaluation
│   ├── tests/                 # Test suite (90+ tests)
│   │   ├── scenarioSelection.test.js
│   │   ├── scenarioGenerator.test.js
│   │   ├── evaluate.test.js
│   │   ├── scoring.test.js
│   │   └── integration.test.js
│   └── server.js              # Express server setup
│
├── frontend/                   # React + Vite application
│   ├── src/
│   │   ├── pages/             # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── ScenarioPage.jsx
│   │   │   ├── InteractiveScenarioPage.jsx
│   │   │   └── ResultsPage.jsx
│   │   ├── components/        # Reusable components
│   │   │   └── MissionConsole.jsx
│   │   ├── styles/            # Tailwind CSS
│   │   └── App.jsx            # Main app component
│   └── index.html
│
├── shared-data/                # Shared data files
│   ├── scenarios.json         # Training scenarios
│   ├── products.json          # IBM product catalog
│   ├── objections.json        # Customer objections
│   ├── generateScenarios.js   # Scenario generator
│   └── SCENARIO_GENERATION_PLAN.md
│
└── docs/                       # Documentation
    ├── SCENARIO_SYSTEM_IMPLEMENTATION.md
    ├── RUNNING_INSTRUCTIONS.md
    ├── REDESIGN_GUIDE.md
    └── REDESIGN_SUMMARY.md
```

## 🎮 How It Works

### User Journey

1. **Start Training** - User begins with a beginner scenario
2. **Complete Scenario** - Answer 7 questions covering the sales process
3. **Receive Feedback** - Get instant scoring and detailed feedback
4. **Progress** - System adapts difficulty based on performance
5. **Track Growth** - View progress, stats, and achievements

### Adaptive Difficulty Algorithm

```
Scenarios 1-2:  Always Beginner (build confidence)
Scenarios 3-4:  Progress to Intermediate if avg score ≥ 75%
Scenarios 5+:   Adaptive based on recent performance
                - Advanced: avg ≥ 75%
                - Intermediate: avg 65-74%
                - Beginner: avg < 65%
```

### Scenario Structure

Each scenario includes:
- **Business Context** - Company, industry, size, revenue, challenges
- **7 Questions** - Covering the complete sales process
  1. Business Priorities (multiple choice)
  2. Technology Selection (multiple choice)
  3. Architecture Decision 1 (single choice)
  4. Architecture Decision 2 (single choice)
  5. Solution Justification (multiple choice)
  6. Objection Handling (single choice)
  7. Cross-Sell Opportunity (single choice)
- **Scoring** - Up to 75 points per scenario
- **Feedback** - Detailed explanations for each answer

## 🔌 API Endpoints

### Scenario Selection & Tracking

```javascript
// Get next scenario (adaptive)
GET /api/scenarios/next?userId=user123

// Record completion
POST /api/scenarios/complete
{
  "userId": "user123",
  "scenarioId": "scenario-beginner-retail-001",
  "score": 65,
  "maxScore": 75,
  "answers": {...}
}

// Get user history
GET /api/scenarios/history?userId=user123

// Get statistics
GET /api/scenarios/stats
```

### Legacy Endpoints

```javascript
// Get random scenario
GET /scenario/random

// Get specific scenario
GET /scenario/:id

// Get products
GET /products

// Evaluate answers
POST /evaluate/products
POST /evaluate/response

// Calculate scores
POST /scoring/evaluate
```

## 🧪 Testing

### Run All Tests

```bash
cd backend
npm test
```

### Test Coverage

- **90+ Tests** across 5 test files
- **Scenario Selection** - 40+ tests
- **Scenario Generator** - 50+ tests
- **Evaluation Logic** - 20+ tests
- **Integration** - 10+ tests

### Test Categories

- ✅ API endpoint testing
- ✅ Business logic validation
- ✅ Edge case handling
- ✅ Performance testing
- ✅ Data validation

See [TEST_DOCUMENTATION.md](./backend/tests/TEST_DOCUMENTATION.md) for details.

## 📊 Scenario Coverage

### By Industry (10 industries × 10 scenarios each)

| Industry | Beginner | Intermediate | Advanced | Total |
|----------|----------|--------------|----------|-------|
| Retail | 4 | 3 | 3 | 10 |
| Healthcare | 4 | 3 | 3 | 10 |
| Financial Services | 4 | 3 | 3 | 10 |
| Manufacturing | 4 | 3 | 3 | 10 |
| Telecommunications | 4 | 3 | 3 | 10 |
| Government | 4 | 3 | 3 | 10 |
| Education | 4 | 3 | 3 | 10 |
| Energy & Utilities | 4 | 3 | 3 | 10 |
| Transportation | 4 | 3 | 3 | 10 |
| Media & Entertainment | 4 | 3 | 3 | 10 |
| **Total** | **40** | **30** | **30** | **100** |

### By Difficulty

- **Beginner (40%)** - Clear solutions, 3-5 products, 3-4 min, 80% pass threshold
- **Intermediate (30%)** - Multiple approaches, 5-8 products, 4-5 min, 70% pass threshold
- **Advanced (30%)** - Complex hybrid, 8-12 products, 5-6 min, 60% pass threshold

## 🛠️ Technology Stack

### Backend
- **Node.js 18+** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL 14+** - Primary database
- **node-postgres (pg)** - Database client
- **Jest/Supertest** - Testing framework

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

### Database
- **PostgreSQL 14+** - Relational database
- **IBM Cloud Databases for PostgreSQL** - Production deployment
- **JSONB** - Flexible schema for complex data
- **Connection pooling** - Performance optimization

### Cloud Infrastructure
- **IBM Cloud Code Engine** - Container deployment
- **IBM Cloud Databases** - Managed PostgreSQL
- **IBM Cloud Object Storage** - Backups and assets
- **IBM Log Analysis** - Monitoring and logging

## 📈 Performance Metrics

### Target Metrics
- Users complete average of 10+ scenarios per session
- 80% pass rate on beginner scenarios
- 70% pass rate on intermediate scenarios
- 60% pass rate on advanced scenarios
- Users cover at least 5 different industries
- Average session time: 30-45 minutes

## 🔮 Future Enhancements

### Planned Features
- [x] Persistent PostgreSQL database
- [x] IBM Cloud deployment ready
- [ ] User authentication (IBM App ID)
- [ ] Team/organization leaderboards
- [ ] Custom scenario creation tools
- [ ] Integration with LMS platforms
- [ ] Mobile app support
- [ ] AI-powered personalized recommendations
- [ ] Video explanations for complex topics
- [ ] Collaborative scenarios (team exercises)
- [ ] Real-time multiplayer competitions

### Technical Improvements
- [ ] GraphQL API
- [ ] Redis caching
- [ ] Microservices architecture
- [ ] Kubernetes deployment
- [ ] CI/CD pipeline
- [ ] Automated content generation
- [ ] Machine learning for difficulty tuning

## 📝 Documentation

- [Database Documentation](./database/README.md) - Database schema and setup
- [IBM Cloud Deployment](./IBM_CLOUD_DEPLOYMENT.md) - Production deployment guide
- [Running Instructions](./RUNNING_INSTRUCTIONS.md) - Detailed setup guide
- [Scenario System Implementation](./SCENARIO_SYSTEM_IMPLEMENTATION.md) - Architecture details
- [Test Documentation](./backend/tests/TEST_DOCUMENTATION.md) - Testing guide
- [Scenario Generation Plan](./shared-data/SCENARIO_GENERATION_PLAN.md) - Content strategy
- [Redesign Guide](./REDESIGN_GUIDE.md) - UI/UX improvements

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Write tests for new features
- Follow existing code style
- Update documentation
- Ensure all tests pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Bob** - Initial development and architecture

## 🙏 Acknowledgments

- IBM for product information and sales methodology
- React and Node.js communities
- All contributors and testers

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check existing documentation
- Review test files for examples

## 🎓 Learning Resources

### IBM Products Covered
- IBM Power & Power Virtual Server
- IBM Cloud (VPC, Kubernetes, Object Storage)
- Red Hat (OpenShift, Ansible, RHEL)
- watsonx (AI, Data, Governance)
- IBM Security (QRadar, Guardium, Verify)
- IBM Observability (Turbonomic, Instana, Apptio)
- IBM Data (Db2, Cloud Pak for Data)
- IBM Integration (API Connect, Cloud Pak for Integration)
- IBM Automation (Business Automation, Sterling Supply Chain)
- IBM LinuxONE
- IBM Consulting & Technology Lifecycle Services

### Sales Skills Developed
- Business outcome identification
- Technology portfolio knowledge
- Solution architecture design
- Value proposition articulation
- Objection handling
- Cross-selling and upselling
- Industry-specific expertise

---

**Made with ❤️ by Bob**

*Sprint to success. Master IBM solutions faster.*