# IBM Tech Sales Training - Static Web Application

A fully client-side training platform for IBM tech sales scenarios, running entirely on GitHub Pages with zero backend dependencies.

## 🚀 Live Demo

**Production:** https://gdecuir1.github.io/ibm-tech-sales-training-project/

## ✨ Features

- **🎯 Interactive Scenarios** - Practice real-world IBM sales situations
- **📊 Progress Tracking** - Track your performance with localStorage
- **🏆 Achievements & Leveling** - Earn XP and unlock achievements
- **📈 Analytics Dashboard** - View detailed performance metrics
- **💾 Offline Support** - Works without internet after first load
- **💰 Zero Cost** - Completely free to host on GitHub Pages

## 🏗️ Architecture

### Pure Static Application
- **Frontend:** React + Vite + TailwindCSS
- **Data Storage:** Browser localStorage
- **Routing:** React Router (HashRouter for GitHub Pages)
- **Deployment:** GitHub Actions → GitHub Pages
- **Cost:** $0/month

### No Backend Required
- ❌ No Express server
- ❌ No PostgreSQL database
- ❌ No API endpoints
- ❌ No environment variables
- ✅ 100% client-side JavaScript

## 📁 Repository Structure

```
solution-arena/
├── .github/workflows/
│   └── static.yml                    # Automated deployment
├── frontend/                         # Main application
│   ├── src/
│   │   ├── data/
│   │   │   └── scenarios.js         # Static scenario data
│   │   ├── services/
│   │   │   └── storageService.js    # localStorage wrapper
│   │   ├── pages/                   # Application pages
│   │   ├── components/              # UI components
│   │   └── styles/                  # CSS
│   ├── public/                      # Static assets
│   ├── package.json                 # Dependencies
│   └── vite.config.js               # Build configuration
├── shared-data/
│   └── scenarios.json               # Comprehensive scenarios
└── Documentation/
    ├── README.md                    # This file
    ├── STATIC_REFACTOR_SUMMARY.md   # Technical details
    ├── GITHUB_PAGES_STATIC_DEPLOYMENT.md  # Deployment guide
    └── REPOSITORY_CLEANUP_GUIDE.md  # Optimization guide
```

## 🚀 Quick Start

### Local Development

```bash
# Navigate to frontend
cd solution-arena/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:5173
```

### Build for Production

```bash
cd solution-arena/frontend
npm run build

# Output in dist/ folder
ls -lh dist/
```

### Deploy to GitHub Pages

```bash
# Commit and push changes
git add .
git commit -m "Your changes"
git push origin main

# GitHub Actions automatically deploys
# Check: https://github.com/[username]/[repo]/actions
```

## 📚 How It Works

### Scenario Loading
```javascript
// No API calls - instant loading from memory
import { getRandomScenario } from '../data/scenarios';

const scenario = getRandomScenario();
// Returns scenario immediately, no network request
```

### Progress Tracking
```javascript
// Save to browser localStorage
import { storageService } from '../services/storageService';

storageService.saveCompletedScenario({
  scenarioId: 1,
  score: 85,
  timestamp: Date.now()
});

// Retrieve progress
const stats = storageService.getUserStats();
const history = storageService.getScenarioHistory();
```

### Evaluation
```javascript
// Client-side scoring
import { evaluateProducts, evaluateResponse } from '../data/scenarios';

const productScore = evaluateProducts(scenarioId, selectedProducts);
const responseScore = evaluateResponse(userResponse);
// All evaluation happens in the browser
```

## 🎮 Usage

### Classic Mode
1. Click "Start Practice"
2. Review company scenario
3. Select IBM products
4. Justify your selection
5. Handle customer objections
6. View results and feedback

### Interactive Mode
1. Click "Interactive Scenario"
2. Answer multi-step questions
3. Make architecture decisions
4. Handle objections
5. View comprehensive scoring

### Dashboard
- View overall statistics
- Track practice streak
- See scenario history
- Monitor skill progression
- Check achievements

## 📊 Data Storage

All data stored in browser localStorage:

```javascript
{
  "ibm_training_completed_scenarios": [...],  // Last 50 attempts
  "ibm_training_user_stats": {
    totalScenarios: 10,
    averageScore: 85,
    currentLevel: 3,
    xp: 450,
    currentStreak: 5
  },
  "ibm_training_scenario_history": [...],
  "ibm_training_achievements": [...]
}
```

**Note:** Data is device-specific and can be cleared by the user.

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/ibm-tech-sales-training-project/',  // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
```

### Router Configuration
```javascript
// App.jsx - Using HashRouter for GitHub Pages
import { HashRouter as Router } from 'react-router-dom';

// URLs will be: /#/dashboard, /#/scenario, etc.
```

## 📝 Adding New Scenarios

### Simple Scenarios (Classic Mode)
Edit `frontend/src/data/scenarios.js`:

```javascript
{
  id: 5,
  company: "New Company",
  industry: "Technology",
  pain_points: ["Pain 1", "Pain 2"],
  objectives: ["Objective 1", "Objective 2"],
  ideal_products: ["IBM Product 1", "IBM Product 2"],
  objections: [
    { objection: "Customer concern..." }
  ]
}
```

### Interactive Scenarios
Edit `shared-data/scenarios.json` with comprehensive question structure.

## 🧪 Testing

```bash
cd solution-arena/frontend

# Run tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- ScenarioPage
```

## 📦 Deployment

### Automatic (Recommended)
Push to main branch - GitHub Actions handles everything:

```yaml
# .github/workflows/static.yml
- Build frontend with Vite
- Deploy to GitHub Pages
- Live in ~60 seconds
```

### Manual
```bash
cd solution-arena/frontend
npm run build
# Deploy dist/ folder to GitHub Pages manually
```

## 🔍 Troubleshooting

### "Failed to load scenario"
- Check browser console for errors
- Verify `src/data/scenarios.js` exists
- Clear browser cache and reload

### Progress not saving
- Check if localStorage is enabled
- Check browser storage quota
- Try incognito mode to test

### Routing issues on GitHub Pages
- Verify using HashRouter (not BrowserRouter)
- Check base path in vite.config.js
- Ensure 404.html exists (if using BrowserRouter)

### Build fails
```bash
cd solution-arena/frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📈 Performance

- **Initial Load:** <1 second
- **Scenario Load:** <1ms (instant)
- **Evaluation:** <100ms
- **Bundle Size:** ~2 MB (minified)
- **Lighthouse Score:** 95+ (Performance)

## 🔒 Security

- ✅ No backend = no server vulnerabilities
- ✅ No database = no SQL injection
- ✅ No API keys to expose
- ✅ No authentication tokens
- ⚠️ localStorage is not encrypted (acceptable for training data)

## 💡 Limitations

1. **Device-Specific Progress** - localStorage doesn't sync across devices
2. **No User Accounts** - No authentication system
3. **Static Scenarios** - Need to redeploy to add scenarios
4. **Simple Evaluation** - Rule-based, not AI-powered
5. **No Real-Time Features** - No multiplayer or live collaboration

**All limitations are acceptable for a training tool.**

## 📚 Documentation

- **[STATIC_REFACTOR_SUMMARY.md](./STATIC_REFACTOR_SUMMARY.md)** - Complete refactor details
- **[GITHUB_PAGES_STATIC_DEPLOYMENT.md](./GITHUB_PAGES_STATIC_DEPLOYMENT.md)** - Deployment guide
- **[REPOSITORY_CLEANUP_GUIDE.md](./REPOSITORY_CLEANUP_GUIDE.md)** - Optimization guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🎯 Roadmap

- [ ] Add more scenarios (10+ total)
- [ ] Export/import progress feature
- [ ] Printable certificates
- [ ] Mobile app version
- [ ] Multiplayer leaderboards (optional backend)

## 💬 Support

- **Issues:** https://github.com/gdecuir1/ibm-tech-sales-training-project/issues
- **Discussions:** https://github.com/gdecuir1/ibm-tech-sales-training-project/discussions

## 🌟 Acknowledgments

Built with:
- React + Vite
- TailwindCSS
- Framer Motion
- React Router
- Lucide Icons

---

**Made with ❤️ for IBM Tech Sales Training**

**Status:** ✅ Production Ready | 💰 $0/month | 🚀 Deployed on GitHub Pages