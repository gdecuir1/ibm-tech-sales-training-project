# IBM DealSprint - Tech Sales Training Platform

> **Live Demo:** [https://gdecuir1.github.io/ibm-tech-sales-training-project/](https://gdecuir1.github.io/ibm-tech-sales-training-project/)

A modern, interactive sales training platform for IBM technical sales professionals. Practice real-world scenarios, master product knowledge, and develop solution-selling skills through hands-on training.

![IBM DealSprint](https://img.shields.io/badge/IBM-DealSprint-0f62fe?style=for-the-badge&logo=ibm)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?style=for-the-badge&logo=postgresql)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Tests](https://img.shields.io/badge/Tests-410%2F513%20Passing-success?style=for-the-badge)

---

## 🎯 Overview

**IBM DealSprint** is a full-stack sales training platform designed to help IBM sales professionals:

- **Practice Sales Scenarios** - 13 realistic scenarios across Healthcare and Banking industries
- **Master Product Knowledge** - Comprehensive knowledge base for 3 IBM products (3,106 lines of content)
- **Track Progress** - Personal dashboard with performance analytics and skill progression
- **Learn Interactively** - Multiple choice questions, discovery phases, and objection handling
- **Get Instant Feedback** - Real-time scoring and detailed explanations

### Key Features

✅ **Full-Stack Architecture** - React frontend + Node.js/Express backend + PostgreSQL database
✅ **Dual Deployment** - Static GitHub Pages OR full backend with database
✅ **Persistent Data** - PostgreSQL database for user progress and analytics
✅ **RESTful API** - Complete API for scenarios, products, and progress tracking
✅ **Mobile Responsive** - Works on all devices
✅ **Accessible** - WCAG 2.1 compliant with ARIA labels
✅ **Fast & Modern** - Built with React 18, Vite, and Tailwind CSS

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm 9+
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/gdecuir1/ibm-tech-sales-training-project.git
cd ibm-tech-sales-training-project/solution-arena

# Install dependencies
cd frontend
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/ibm-tech-sales-training-project/` in your browser.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production build will be in `frontend/dist/` and is ready for deployment to GitHub Pages.

---

## 📁 Project Structure

```
solution-arena/
├── backend/                     # Node.js/Express API server
│   ├── config/                 # Configuration files
│   │   └── database.js         # PostgreSQL connection pool
│   ├── routes/                 # API endpoints
│   │   ├── scenarios.js        # Scenario CRUD operations
│   │   ├── products.js         # Product catalog API
│   │   └── progress.js         # User progress tracking
│   ├── middleware/             # Custom middleware (future)
│   ├── server.js               # Express server setup
│   ├── package.json            # Backend dependencies
│   ├── .env.example            # Environment template
│   └── README.md               # Backend documentation
│
├── database/                    # PostgreSQL database
│   ├── schema.sql              # Database schema (8 tables)
│   ├── seed.js                 # Data seeding script
│   └── README.md               # Database documentation
│
├── frontend/                    # React application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Dashboard/      # Dashboard widgets and analytics
│   │   │   ├── Landing/        # Homepage components
│   │   │   └── Primitives/     # Reusable UI components
│   │   ├── data/               # Static data
│   │   │   ├── ibm-products/   # Product knowledge base (3 products)
│   │   │   └── scenarios/      # Training scenarios (13 scenarios)
│   │   ├── pages/              # Page components
│   │   ├── services/           # Business logic and API calls
│   │   ├── styles/             # Global styles and Tailwind config
│   │   ├── test/               # Test suites (513 tests)
│   │   └── utils/              # Helper functions
│   ├── public/                 # Static assets
│   └── package.json            # Frontend dependencies
│
├── shared-data/                # Shared data files
│   ├── scenarios.json          # Scenario definitions
│   ├── products.json           # Product catalog
│   ├── objections.json         # Customer objections
│   └── generateScenarios.js    # Scenario generator
│
├── docs/                       # Documentation
│   ├── archive/                # Historical documentation
│   ├── GITHUB_PAGES_DEPLOYMENT.md
│   ├── GITHUB_SETUP.md
│   ├── PROJECT_SUMMARY.md
│   ├── REDESIGN_IMPLEMENTATION.md
│   └── RUNNING_INSTRUCTIONS.md
│
├── DATABASE_SETUP_GUIDE.md     # Database setup instructions
└── README.md                   # This file
```

---

## 🎓 Training Content

### Products (3 Total)

1. **IBM Power Systems** - Enterprise-grade servers for mission-critical workloads
2. **IBM Storage FlashSystem** - High-performance all-flash storage arrays
3. **IBM Cloud Pak for Data** - Unified data and AI platform

Each product includes:
- Detailed specifications and features
- Use cases and customer examples
- Competitive differentiators
- Discovery questions
- Objection handling responses
- Industry fit analysis

### Scenarios (13 Total)

#### Healthcare (1 Scenario)
- **healthcare-001**: Healthcare Data Platform Modernization
  - 8 discovery questions (multiple choice)
  - 6 objection handling questions (multiple choice)
  - 84 total answer choices with detailed scoring

#### Banking (12 Scenarios)
- **banking-fraud-detection-001**: Real-Time Fraud Detection System
- **banking-core-modernization-002**: Core Banking Modernization
- **banking-regulatory-compliance-003**: Regulatory Compliance & Reporting
- **banking-customer-360-004**: Customer 360 Platform
- **banking-payment-processing-005**: Payment Processing Modernization
- **banking-risk-management-006**: Enterprise Risk Management
- **banking-digital-banking-007**: Digital Banking Platform
- **banking-data-analytics-008**: Advanced Analytics & AI
- **banking-cybersecurity-009**: Cybersecurity Enhancement
- **banking-cloud-migration-010**: Cloud Migration for Banking Applications
- **banking-api-platform-011**: API Banking & Developer Platform
- **banking-trade-finance-012**: Trade Finance Digitization
- **banking-mortgage-automation-013**: Mortgage Origination Automation

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

- **Total Tests**: 513
- **Passing**: 410 (80%)
- **Test Suites**: 17 files
- **Coverage Areas**:
  - ✅ Multiple choice functionality (22/22 passing)
  - ✅ Navigation and buttons (34/35 passing)
  - ✅ Product knowledge base (68/68 passing)
  - ✅ Component rendering
  - ✅ User interactions
  - ✅ Accessibility (WCAG 2.1)
  - ✅ Responsive design

---

## 🎨 Design System

Built with **IBM Carbon Design System** principles:

- **Typography**: IBM Plex Sans font family
- **Colors**: IBM Design Language color palette
- **Spacing**: 8px grid system
- **Components**: Custom primitives following IBM patterns
- **Accessibility**: WCAG 2.1 AA compliant

### Key UI Components

- **PageHeader** - Consistent page headers with back navigation
- **MetricBand** - Dashboard metrics display
- **SectionHeader** - Section titles with descriptions
- **Cards** - Content containers with hover effects
- **Buttons** - Primary, secondary, and tertiary variants
- **Forms** - Accessible input fields and selects

---

## 💾 Data Storage

### Two Deployment Options

#### Option 1: Static Deployment (GitHub Pages)
All user data is stored locally using **localStorage**:

- **Scenario Progress** - Completed scenarios and scores
- **Answer History** - All submitted answers with timestamps
- **Dashboard Stats** - Performance metrics and analytics
- **User Preferences** - Settings and configurations

```javascript
'ibm-training-progress'      // Scenario completion data
'ibm-training-answers'       // Answer history
'ibm-training-stats'         // Performance statistics
```

**Note**: localStorage is device-specific and can be cleared by the user. Data is not synced across devices.

#### Option 2: Full Backend (PostgreSQL)
User data is stored in PostgreSQL database:

- **8 Database Tables** - users, products, scenarios, scenario_questions, objections, user_progress, scenario_attempts, user_achievements
- **Persistent Storage** - Data survives browser clears and syncs across devices
- **Advanced Analytics** - Detailed progress tracking and performance metrics
- **Multi-user Support** - User authentication and profiles

See [DATABASE_SETUP_GUIDE.md](DATABASE_SETUP_GUIDE.md) for setup instructions.

---

## 🚢 Deployment

### GitHub Pages (Current)

The app is automatically deployed to GitHub Pages via GitHub Actions:

```yaml
# .github/workflows/deploy.yml
- Build on push to main branch
- Deploy to gh-pages branch
- Live at: https://gdecuir1.github.io/ibm-tech-sales-training-project/
```

### Manual Deployment

```bash
# Build production bundle
npm run build

# Deploy dist/ folder to your hosting provider
# The app works on any static hosting service:
# - GitHub Pages
# - Netlify
# - Vercel
# - AWS S3
# - Azure Static Web Apps
```

### Configuration

Update `vite.config.js` for your deployment:

```javascript
export default defineConfig({
  base: '/your-repo-name/',  // Change this for your GitHub Pages URL
  plugins: [react()],
});
```

---

## 🛠️ Technology Stack

### Frontend

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **React Router 6.28** - Client-side routing (HashRouter for GitHub Pages)
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library

### Testing

- **Vitest 1.6** - Unit and integration testing
- **React Testing Library** - Component testing
- **jsdom** - DOM simulation

### Development

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📚 Documentation

### Setup & Deployment
- **[Database Setup Guide](../DATABASE_SETUP_GUIDE.md)** - PostgreSQL database setup (NEW!)
- **[Backend API Documentation](backend/README.md)** - Complete API reference (NEW!)
- **[Database Schema Documentation](database/README.md)** - Database details (NEW!)
- **[GitHub Pages Deployment Guide](docs/GITHUB_PAGES_DEPLOYMENT.md)** - Static deployment
- **[GitHub Setup Guide](docs/GITHUB_SETUP.md)** - Repository configuration
- **[Running Instructions](docs/RUNNING_INSTRUCTIONS.md)** - Development guide

### Technical Documentation
- **[Project Summary](docs/PROJECT_SUMMARY.md)** - Technical overview
- **[Redesign Implementation](docs/REDESIGN_IMPLEMENTATION.md)** - UI redesign details
- **[Archived Docs](docs/archive/)** - Historical documentation

---

## 🤝 Contributing

This is a training project for IBM sales professionals. Contributions are welcome!

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Write tests for new features
- Ensure accessibility compliance

---

## 📝 License

This project is for educational and training purposes.

---

## 🙏 Acknowledgments

- **IBM Design Language** - Design system and guidelines
- **IBM Carbon Design System** - Component patterns
- **React Community** - Excellent documentation and tools
- **Vite Team** - Fast and modern build tool

---

## 📞 Support

For questions or issues:

1. Check the [documentation](docs/)
2. Review [existing issues](https://github.com/gdecuir1/ibm-tech-sales-training-project/issues)
3. Open a new issue with detailed information

---

## 🗺️ Roadmap

### Completed ✅

- [x] Static refactor (no backend required)
- [x] Product knowledge base (3 products, 3,106 lines)
- [x] Training scenarios (13 scenarios)
- [x] Multiple choice system with scoring
- [x] Dashboard with analytics
- [x] Progress tracking with localStorage
- [x] GitHub Pages deployment
- [x] Comprehensive test suite (513 tests)
- [x] Accessibility compliance (WCAG 2.1)
- [x] Mobile responsive design

### In Progress 🚧

- [ ] Add multiple choice to remaining 8 banking scenarios
- [ ] Update tests to match redesigned UI (80% → 100%)

### Future Enhancements 🔮

- [ ] Additional banking scenarios (target: 14 total)
- [ ] Manufacturing/retail scenarios (10 scenarios)
- [ ] Cross-industry scenarios (10 scenarios)
- [ ] Advanced analytics and insights
- [ ] Gamification features (badges, leaderboards)
- [ ] Export progress reports
- [ ] Scenario difficulty levels
- [ ] Time-based challenges

---

## 📊 Project Stats

- **Lines of Code**: ~50,000+
- **Components**: 40+
- **Test Files**: 17
- **Test Cases**: 513
- **Product Knowledge**: 3,106 lines
- **Scenarios**: 13 (1 healthcare, 12 banking)
- **Multiple Choice Questions**: 84 (healthcare-001 only)
- **Development Time**: 6+ months
- **Last Updated**: July 2026

---

<div align="center">

**Built with ❤️ for IBM Sales Professionals**

[Live Demo](https://gdecuir1.github.io/ibm-tech-sales-training-project/) • [Documentation](docs/) • [Report Bug](https://github.com/gdecuir1/ibm-tech-sales-training-project/issues) • [Request Feature](https://github.com/gdecuir1/ibm-tech-sales-training-project/issues)

</div>