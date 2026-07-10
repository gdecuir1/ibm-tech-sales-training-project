# Solution Arena - IBM BTS Scenario Simulator

A complete training simulator for IBM Brand Technical Specialist (BTS) interns to practice enterprise sales scenarios with **two training modes**: fast-paced interactive scenarios and traditional case studies.

## 🎯 Overview

Solution Arena provides realistic enterprise sales training through:

### ⚡ Interactive Mode (NEW - Recommended)
- **3-6 minute** fast-paced scenarios
- Multiple-choice and "select all that apply" format
- 7-step guided workflow
- Instant scoring and feedback
- Emphasis on **IBM Power** and **IBM Cloud**
- Certification-style experience

### 📝 Classic Mode (Original)
- 10-15 minute detailed scenarios
- Open-ended text responses
- Traditional case study format
- Comprehensive feedback
- Ideal for presentation preparation

Both modes help interns:
1. Analyze company contexts and pain points
2. Select appropriate IBM products
3. Justify their recommendations
4. Handle customer objections
5. Receive detailed scoring and feedback

## 🏗️ Architecture

```
/solution-arena
  /frontend          # React + Vite application
  /backend           # Node.js + Express API
  /shared-data       # JSON data files
```

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## 🚀 Installation & Running

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend will run on: **http://localhost:5000**

### Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: **http://localhost:5173**

## 🎮 How to Use

1. **Start the Backend**: Navigate to the `backend` folder and run `node server.js`
2. **Start the Frontend**: In a separate terminal, navigate to the `frontend` folder and run `npm run dev`
3. **Open Browser**: Go to `http://localhost:5173`
4. **Begin Training**: Click "Start Scenario" and follow the workflow

## 📊 Features

### Interactive Mode Features
- **7-Step Workflow**: Priorities → Technology Selection → Architecture → Justification → Objections → Cross-Sell → Results
- **30 IBM Products**: Full portfolio including Power, Cloud, Red Hat, AI, Storage, Security, and more
- **Smart Scoring**: 5 category breakdown (Business Understanding, Power Positioning, Cloud Positioning, Portfolio Knowledge, Objection Handling)
- **Progress Tracking**: Visual progress bar and step indicators
- **Time Tracking**: Monitor completion time (target: 3-6 minutes)
- **Instant Feedback**: Immediate results with detailed explanations

### Classic Mode Features
- 15 realistic enterprise scenarios across 5 industries
- Detailed company contexts with pain points and objectives
- Open-ended product recommendations
- Written justifications
- Objection handling practice
- Comprehensive scoring and feedback

### Scenario Coverage
- **Industries**: Financial Services, Healthcare, Manufacturing, Retail, Technology
- **Focus Areas**: SAP migrations, hybrid cloud, security, AI workloads, modernization
- **Difficulty Levels**: Beginner, Intermediate, Advanced
- **Estimated Time**: 3-6 minutes (Interactive) or 10-15 minutes (Classic)

## 🔧 Technical Details

### Backend API Endpoints

**Scenarios:**
- `GET /scenario/random` - Get a random scenario
- `GET /scenario/:id` - Get specific scenario

**Products:**
- `GET /products` - Get all IBM products (30 solutions)

**Scoring (NEW):**
- `POST /scoring/evaluate` - Evaluate interactive scenario answers
- `GET /scoring/leaderboard` - Get top performers

**Classic Mode:**
- `POST /evaluate/products` - Evaluate product selection
- `POST /evaluate/response` - Evaluate objection response
- `POST /objections/generate` - Generate objections

### Data Files

- `scenarios.json` - Enhanced scenarios with 7-step interactive questions
- `products.json` - 30 IBM products across full portfolio
- `objections.json` - 12 objection templates

### Logic Engines

- **Product Matcher**: Maps pain points to ideal products
- **Objection Generator**: Creates scenario-specific objections
- **Response Evaluator**: Scores responses using keyword analysis

## 🎨 Design

- IBM-inspired color scheme (Blue #0f62fe)
- Card-based layout with rounded corners
- Responsive design
- Clean typography hierarchy

## 📝 Scoring Logic

### Interactive Mode Scoring
**5 Category Breakdown (Total: 55 points)**
- **Business Understanding** (10 points): Identifying customer priorities
- **Power Positioning** (15 points): Appropriate IBM Power recommendations
- **Cloud Positioning** (10 points): IBM Cloud strategy and architecture
- **Portfolio Knowledge** (15 points): Breadth of IBM solution awareness
- **Objection Handling** (10 points): Professional response to concerns

**Performance Levels:**
- Excellent: 90%+ (Outstanding technical sales skills)
- Good: 75-89% (Solid understanding, minor refinements)
- Satisfactory: 60-74% (Basic competency, needs practice)
- Needs Improvement: <60% (Review fundamentals)

### Classic Mode Scoring
- **Product Selection** (0-100): Correct vs incorrect products
- **Business Value** (0-50): ROI and efficiency articulation
- **Objection Handling** (0-50): Acknowledgement, differentiation, justification

## 🔒 No External Dependencies

- No database required
- No external APIs
- All data stored in JSON files
- Fully deterministic scoring

## 📚 Learning Objectives

### Interactive Mode
- **Speed**: Complete scenarios in 3-6 minutes
- **Volume**: Practice 10+ scenarios per week
- **Breadth**: Familiarity with 20+ IBM solutions
- **Focus**: IBM Power and IBM Cloud positioning
- **Pattern Recognition**: Quick identification of solution fit

### Classic Mode
- **Depth**: Detailed justification development
- **Narrative**: Presentation-ready responses
- **Articulation**: Business value communication
- **Professionalism**: Objection handling techniques

### Overall Competencies
- Understand full IBM product portfolio (30+ solutions)
- Map solutions to business problems
- Articulate business value and ROI
- Handle objections professionally
- Practice consultative selling
- Build technical sales confidence

## 🛠️ Troubleshooting

**Backend won't start:**
- Ensure port 5000 is available
- Check Node.js version (v16+)
- Run `npm install` in backend folder

**Frontend won't start:**
- Ensure port 5173 is available
- Check Node.js version (v16+)
- Run `npm install` in frontend folder

**API errors:**
- Ensure backend is running first
- Check console for error messages
- Verify backend is on port 5000

## 📖 Documentation

- **REDESIGN_GUIDE.md** - Comprehensive guide to the new interactive mode
- **RUNNING_INSTRUCTIONS.md** - Setup and deployment instructions
- **README.md** - This file (overview and quick start)

## 🎯 Quick Start Recommendation

1. **Start with Interactive Mode** - Complete 5-10 scenarios to build familiarity
2. **Review Feedback** - Understand scoring and ideal solutions
3. **Practice Weak Areas** - Focus on low-scoring categories
4. **Progress to Classic Mode** - Develop detailed narratives
5. **Iterate** - Continuous practice builds confidence

## 📄 License

MIT License - Free to use for training purposes

## 👥 Support

For detailed information about the redesign, see **REDESIGN_GUIDE.md**

For issues or questions, refer to the IBM BTS training documentation.

---

**Made with Bob** - Optimized for IBM Brand Technical Specialist intern training