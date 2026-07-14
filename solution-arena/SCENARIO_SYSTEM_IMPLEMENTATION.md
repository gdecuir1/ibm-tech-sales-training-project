# Scenario System Implementation - 100+ Scenarios with Adaptive Difficulty

## Overview
This document describes the implementation of an adaptive scenario system with 100+ training scenarios, progressive difficulty, and intelligent scenario selection.

## Current Status

### ✅ Completed
1. **Scenario Generation Plan** - Comprehensive plan for 100+ scenarios across 10 industries
2. **Scenario Selection Algorithm** - Adaptive difficulty progression based on user performance
3. **Backend API Routes** - Complete API for scenario selection, tracking, and history
4. **Server Integration** - New routes integrated into backend server

### 🔄 In Progress
1. **Scenario Content Generation** - Templates and generator script created, needs full content
2. **Frontend Integration** - Need to update frontend to use new API endpoints

### ⏳ Pending
1. **Complete 100+ Scenarios** - Generate full content for all scenarios
2. **Frontend Updates** - Integrate adaptive selection into UI
3. **Testing** - End-to-end testing of the system
4. **Database Integration** - Replace in-memory storage with persistent database

## Architecture

### Backend Components

#### 1. Scenario Selection Route (`/backend/routes/scenarioSelection.js`)
**Endpoints:**
- `GET /api/scenarios/next?userId=xxx` - Get next scenario with adaptive difficulty
- `POST /api/scenarios/complete` - Record scenario completion
- `GET /api/scenarios/history?userId=xxx` - Get user's scenario history
- `GET /api/scenarios/stats` - Get overall statistics
- `DELETE /api/scenarios/history?userId=xxx` - Reset user history (testing)

**Key Features:**
- Adaptive difficulty progression
- Industry diversification
- Performance-based level calculation
- User history tracking

#### 2. Difficulty Progression Logic

**Beginner Phase (Scenarios 1-2):**
- Always select beginner scenarios
- Build confidence and familiarity

**Intermediate Phase (Scenarios 3-4):**
- Progress to intermediate if average score ≥ 75%
- Stay at beginner if score < 75%

**Advanced Phase (Scenarios 5+):**
- Adaptive based on recent performance (last 5 scenarios)
- Advanced: avg score ≥ 75%
- Intermediate: avg score 65-74%
- Beginner: avg score < 65%

**Industry Diversification:**
- Avoids repeating same industry in consecutive scenarios
- Ensures broad exposure across industries

### Scenario Structure

Each scenario includes:
```json
{
  "id": "scenario-difficulty-industry-###",
  "title": "Scenario Title",
  "difficulty": "beginner|intermediate|advanced",
  "estimatedTime": "3-6 minutes",
  "company": "Company Name",
  "industry": "Industry Name",
  "size": "Small Business|Mid-Market|Enterprise",
  "revenue": "$XXM or $XXB",
  "employees": number,
  "brief": "Scenario description",
  "currentEnvironment": {...},
  "businessGoals": [...],
  "constraints": {...},
  "questions": [7 questions],
  "scoringBreakdown": {...},
  "idealSolution": {...}
}
```

### Question Types (7 per scenario)

1. **Q1: Business Priorities** - Multiple selection, identifies customer outcomes
2. **Q2: Technology Selection** - Multiple selection, tests portfolio knowledge
3. **Q3: Architecture Decision 1** - Single choice, primary architecture approach
4. **Q4: Architecture Decision 2** - Single choice, supporting architecture element
5. **Q5: Solution Justification** - Multiple selection, key benefits
6. **Q6: Objection Handling** - Single choice, customer concern response
7. **Q7: Cross-Sell Opportunity** - Single choice, next solution recommendation

**Total Score: 75 points per scenario**

## Scenario Distribution Plan

### By Difficulty (100 scenarios)
- **Beginner: 35 scenarios** (35%)
  - Pass threshold: 60/75 (80%)
  - Clear, single best solution
  - 3-5 products recommended
  
- **Intermediate: 35 scenarios** (35%)
  - Pass threshold: 52/75 (70%)
  - Multiple valid approaches
  - 5-8 products recommended
  
- **Advanced: 30 scenarios** (30%)
  - Pass threshold: 45/75 (60%)
  - Complex hybrid solutions
  - 8-12 products recommended

### By Industry (10 scenarios each)
1. **Retail** - E-commerce, inventory, omnichannel
2. **Healthcare** - EHR, telehealth, compliance
3. **Financial Services** - Banking, insurance, payments
4. **Manufacturing** - Smart factory, supply chain, IoT
5. **Telecommunications** - 5G, network optimization, customer experience
6. **Government** - Citizen services, smart city, security
7. **Education** - LMS, research computing, digital transformation
8. **Energy & Utilities** - Smart grid, renewable energy, asset management
9. **Transportation & Logistics** - Fleet management, optimization, autonomous
10. **Media & Entertainment** - Streaming, content delivery, personalization

## API Usage Examples

### Get Next Scenario
```javascript
// Request
GET /api/scenarios/next?userId=user123

// Response
{
  "scenario": { /* full scenario object */ },
  "userProgress": {
    "completed": 5,
    "currentLevel": "intermediate"
  }
}
```

### Record Completion
```javascript
// Request
POST /api/scenarios/complete
{
  "userId": "user123",
  "scenarioId": "scenario-beginner-retail-001",
  "score": 65,
  "maxScore": 75,
  "answers": { /* user answers */ }
}

// Response
{
  "success": true,
  "scorePercentage": 87,
  "newLevel": "intermediate",
  "progress": {
    "totalCompleted": 6,
    "currentLevel": "intermediate",
    "averageScore": 82
  }
}
```

### Get User History
```javascript
// Request
GET /api/scenarios/history?userId=user123

// Response
{
  "history": [
    {
      "scenarioId": "scenario-beginner-retail-001",
      "industry": "Retail",
      "difficulty": "beginner",
      "score": 65,
      "maxScore": 75,
      "scorePercentage": 87,
      "completedAt": "2026-07-14T00:00:00.000Z"
    }
  ],
  "stats": {
    "totalCompleted": 6,
    "currentLevel": "intermediate",
    "averageScore": 82,
    "byDifficulty": {
      "beginner": 3,
      "intermediate": 3,
      "advanced": 0
    },
    "byIndustry": {
      "Retail": 2,
      "Healthcare": 2,
      "Financial Services": 2
    }
  }
}
```

## Implementation Roadmap

### Phase 1: Foundation (Current)
- ✅ Scenario generation plan
- ✅ Backend API routes
- ✅ Adaptive selection algorithm
- ✅ Server integration

### Phase 2: Content Generation (Next)
- ⏳ Complete scenario generator script
- ⏳ Generate 35 beginner scenarios
- ⏳ Generate 35 intermediate scenarios
- ⏳ Generate 30 advanced scenarios
- ⏳ Review and refine content

### Phase 3: Frontend Integration
- ⏳ Update HomePage to use `/api/scenarios/next`
- ⏳ Add progress tracking UI
- ⏳ Show difficulty level and stats
- ⏳ Display user history
- ⏳ Add achievement badges

### Phase 4: Testing & Refinement
- ⏳ End-to-end testing
- ⏳ User acceptance testing
- ⏳ Performance optimization
- ⏳ Content refinement based on feedback

### Phase 5: Production Deployment
- ⏳ Database integration (replace in-memory storage)
- ⏳ User authentication
- ⏳ Analytics and reporting
- ⏳ Continuous content updates

## Files Created/Modified

### New Files
1. `/shared-data/SCENARIO_GENERATION_PLAN.md` - Comprehensive scenario plan
2. `/shared-data/generateScenarios.js` - Scenario generator script
3. `/shared-data/generate_scenarios.py` - Python generator (alternative)
4. `/shared-data/scenarios_extended.json` - Sample extended scenario
5. `/backend/routes/scenarioSelection.js` - Scenario selection API
6. `/SCENARIO_SYSTEM_IMPLEMENTATION.md` - This document

### Modified Files
1. `/backend/server.js` - Added scenarioSelection route

## Next Steps

1. **Complete Scenario Content**
   - Finish generateScenarios.js with all templates
   - Generate full 100+ scenarios
   - Review and validate content

2. **Frontend Integration**
   - Update scenario selection flow
   - Add progress tracking
   - Implement user history view

3. **Testing**
   - Test adaptive difficulty progression
   - Verify industry diversification
   - End-to-end user flow testing

4. **Database Integration**
   - Design schema for user history
   - Implement persistent storage
   - Add user authentication

## Success Metrics

- Users complete average of 10+ scenarios per session
- 80% pass rate on beginner scenarios
- 70% pass rate on intermediate scenarios
- 60% pass rate on advanced scenarios
- Users cover at least 5 different industries
- Average session time: 30-45 minutes

## Technical Notes

### Current Limitations
- In-memory storage (resets on server restart)
- No user authentication
- Limited to 2 existing scenarios (need to generate 98+ more)
- No persistent user profiles

### Future Enhancements
- Machine learning for personalized difficulty
- Scenario recommendations based on job role
- Team/organization leaderboards
- Custom scenario creation tools
- Integration with LMS platforms
- Mobile app support

## Conclusion

The foundation for a comprehensive 100+ scenario system with adaptive difficulty is now in place. The backend API is ready, and the selection algorithm intelligently progresses users through scenarios based on their performance. The next critical step is generating the full content for all 100+ scenarios and integrating the system into the frontend.