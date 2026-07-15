# Milestone 2: Power & Cloud Track - Core Training Scenarios

**Status:** 🚧 In Progress  
**Previous Milestone:** Milestone 1 - Knowledge Engine Foundation ✅  
**Next Milestone:** Milestone 3 - Product Library UI

---

## Objective

Create 50+ realistic, industry-specific training scenarios that leverage the IBM product knowledge base to train sales professionals on Power and Cloud solutions. Each scenario will include customer context, pain points, discovery questions, objection handling, and product recommendations.

---

## Deliverables

### 1. Scenario Type Definitions
**File:** `src/types/scenarios.ts`

Define TypeScript interfaces for:
- `TrainingScenario` - Complete scenario structure
- `CustomerProfile` - Company details and context
- `ScenarioChallenge` - Business problem to solve
- `DiscoveryPhase` - Questions and customer responses
- `ObjectionPhase` - Objections and handling
- `RecommendationPhase` - Product suggestions
- `ScoringCriteria` - How responses are evaluated
- `ScenarioOutcome` - Success metrics and feedback

### 2. Scenario Generator
**File:** `src/data/scenarios/generator.ts`

Intelligent scenario generation using product knowledge:
- Generate scenarios from product pain points
- Map pain points to customer situations
- Create realistic customer profiles
- Generate discovery question flows
- Create objection sequences
- Build product recommendation logic
- Calculate scoring based on best practices

### 3. Industry-Specific Scenario Libraries

#### Healthcare Scenarios (15 scenarios)
**File:** `src/data/scenarios/healthcare.ts`

Focus areas:
- Epic EHR performance and cost optimization
- Ransomware protection for patient data
- HIPAA compliance and security
- Hospital system consolidation
- Disaster recovery for critical systems

Example scenarios:
1. "500-bed hospital with slow Epic response times"
2. "Healthcare system hit by ransomware attack"
3. "Multi-hospital Epic consolidation project"
4. "HIPAA compliance audit findings"
5. "Aging Power7 servers approaching EOL"

#### Banking & Financial Services (15 scenarios)
**File:** `src/data/scenarios/banking.ts`

Focus areas:
- Core banking modernization
- Real-time transaction processing
- Regulatory compliance (SOX, Basel III)
- Oracle cost optimization
- Disaster recovery and business continuity

Example scenarios:
1. "Regional bank with core banking performance issues"
2. "Oracle licensing costs consuming 25% of IT budget"
3. "Need for zero-downtime disaster recovery"
4. "SOX compliance requirements for data protection"
5. "Legacy AIX systems approaching end-of-life"

#### Manufacturing & Retail (10 scenarios)
**File:** `src/data/scenarios/manufacturing.ts`

Focus areas:
- SAP S/4HANA migration and performance
- Supply chain optimization
- IoT data management
- Seasonal scalability (retail)
- Global operations support

Example scenarios:
1. "Manufacturer planning SAP S/4HANA migration"
2. "Retailer with seasonal capacity challenges"
3. "Supply chain visibility and analytics needs"
4. "IoT data from factory floor overwhelming systems"
5. "Global manufacturer with multi-site SAP landscape"

#### Cross-Industry Scenarios (10 scenarios)
**File:** `src/data/scenarios/cross-industry.ts`

Focus areas:
- Hybrid cloud strategy
- Data center consolidation
- VMware storage optimization
- Backup and recovery modernization
- Cloud migration planning

Example scenarios:
1. "Enterprise exploring hybrid cloud strategy"
2. "Data center running out of space and power"
3. "VMware environment with storage bottlenecks"
4. "Backup windows exceeding available time"
5. "Cloud-first strategy but Power workloads remain"

### 4. Scenario Difficulty Levels

**Beginner (15 scenarios)**
- Clear pain points
- Obvious product fit
- Simple objections
- Straightforward recommendations

**Intermediate (20 scenarios)**
- Multiple pain points
- Several product options
- Common objections
- Bundle recommendations

**Advanced (15 scenarios)**
- Complex business situations
- Competitive scenarios
- Difficult objections
- Multi-product solutions
- Budget constraints
- Political challenges

### 5. Scenario Components

Each scenario includes:

**Customer Profile:**
- Company name and industry
- Size (employees, revenue)
- Current infrastructure
- Key stakeholders
- Budget range
- Timeline

**Business Context:**
- Current challenges
- Business impact
- Urgency level
- Strategic initiatives
- Competitive pressure

**Discovery Phase:**
- 5-8 strategic questions to ask
- Expected customer responses
- Red flags to identify
- Opportunities to uncover

**Objection Phase:**
- 3-5 realistic objections
- Stakeholder concerns
- Competitive threats
- Budget pushback

**Recommendation Phase:**
- Primary product recommendation
- Supporting products (cross-sell)
- Bundle configuration
- Pricing guidance
- ROI/TCO positioning

**Scoring Criteria:**
- Discovery quality (40 points)
- Objection handling (30 points)
- Product recommendation (20 points)
- Business value articulation (10 points)

**Learning Outcomes:**
- Key concepts mastered
- Skills practiced
- Common mistakes to avoid
- Best practices demonstrated

### 6. Scenario Metadata

**Tagging System:**
- Industry tags
- Product tags
- Skill tags (discovery, objection handling, etc.)
- Difficulty level
- Estimated time
- Prerequisites

**Search and Filter:**
- By industry
- By product
- By skill focus
- By difficulty
- By time available

### 7. Adaptive Scenario Engine

**File:** `src/services/scenarioEngine.ts`

Features:
- Select scenarios based on user skill level
- Track scenario completion and scores
- Recommend next scenarios
- Identify skill gaps
- Personalized learning paths

---

## Implementation Approach

### Phase 1: Foundation (Week 1)
1. Create scenario type definitions
2. Build scenario generator framework
3. Create 5 sample scenarios (1 per industry)
4. Test scenario structure and flow

### Phase 2: Content Creation (Week 2)
1. Generate 15 healthcare scenarios
2. Generate 15 banking scenarios
3. Generate 10 manufacturing/retail scenarios
4. Generate 10 cross-industry scenarios
5. Review and refine all scenarios

### Phase 3: Integration (Week 3)
1. Integrate with product knowledge base
2. Build adaptive scenario engine
3. Create scenario selection logic
4. Implement scoring algorithms
5. Add progress tracking

---

## Success Criteria

- [ ] 50+ realistic training scenarios created
- [ ] All scenarios leverage product knowledge base
- [ ] Scenarios cover 4+ industries
- [ ] 3 difficulty levels implemented
- [ ] Discovery, objection, and recommendation phases complete
- [ ] Scoring criteria defined and implemented
- [ ] Scenario metadata and tagging complete
- [ ] Adaptive scenario engine functional
- [ ] Integration with existing app complete
- [ ] User can complete scenarios and see results

---

## Sample Scenario Structure

```typescript
{
  id: 'healthcare-epic-performance-001',
  title: '500-Bed Hospital with Slow Epic Response Times',
  industry: 'Healthcare',
  difficulty: 'intermediate',
  estimatedTime: 20,
  tags: ['epic', 'performance', 'healthcare', 'power-e1080'],
  
  customerProfile: {
    company: 'Memorial Regional Medical Center',
    industry: 'Healthcare',
    size: 'Large (2,500 employees)',
    revenue: '$800M annually',
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '15 Dell PowerEdge servers',
      storage: 'EMC VNX',
      applications: ['Epic EHR', 'Oracle Database', 'VMware'],
      age: '5 years'
    },
    keyStakeholders: [
      { name: 'Dr. Sarah Chen', role: 'CIO', priorities: ['Epic performance', 'Cost control'] },
      { name: 'Mike Johnson', role: 'IT Director', priorities: ['Reliability', 'Easy management'] },
      { name: 'Lisa Martinez', role: 'CFO', priorities: ['ROI', 'Budget constraints'] }
    ],
    budget: '$2M-$4M',
    timeline: '6-9 months'
  },
  
  businessContext: {
    challenges: [
      'Epic response times degrading during peak hours (8am-5pm)',
      'User complaints from doctors and nurses',
      'Oracle licensing costs increasing 15% annually',
      'Concerned about ransomware after recent industry attacks',
      'Hardware approaching end-of-life'
    ],
    businessImpact: [
      'Patient care delays',
      'Staff productivity loss (estimated 30 minutes per day per user)',
      'Risk of regulatory issues',
      'Budget pressure from Oracle costs'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Improve patient experience',
      'Reduce IT costs',
      'Enhance cybersecurity'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What specific Epic modules are experiencing performance issues?',
        purpose: 'Identify scope and severity',
        idealResponse: 'Mainly Hyperspace and Cadence during peak hours',
        scoringWeight: 10
      },
      // ... more questions
    ],
    expectedFindings: [
      'Oracle database is bottleneck',
      'Storage IOPS insufficient',
      'Server CPU at 80%+ during peak',
      'No disaster recovery plan'
    ]
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Power is more expensive than staying with Dell',
        stakeholder: 'CFO',
        difficulty: 'common',
        bestResponse: 'objection-response-id-123'
      },
      // ... more objections
    ]
  },
  
  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['flashsystem-9500', 'power-virtual-server'],
    configuration: {
      power: '2x Power E1080, 32-core, 2TB RAM',
      storage: 'FlashSystem 9500, 500TB effective',
      dr: 'Power Virtual Server for DR'
    },
    pricing: {
      hardware: '$3.2M',
      software: '$400K',
      services: '$300K',
      total: '$3.9M',
      financing: 'Available'
    },
    businessCase: {
      oracleSavings: '$600K annually',
      consolidation: '15 servers to 2',
      performance: '3x faster Epic response',
      roi: '18 months'
    }
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Asked about Epic performance specifics',
        'Identified Oracle licensing pain',
        'Uncovered disaster recovery gap',
        'Quantified business impact',
        'Identified key stakeholders'
      ]
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed TCO vs acquisition cost',
        'Provided customer examples',
        'Quantified Oracle savings',
        'Offered proof of concept'
      ]
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended appropriate products',
        'Sized configuration correctly',
        'Included disaster recovery',
        'Addressed all pain points'
      ]
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified ROI',
        'Articulated business benefits',
        'Aligned to strategic initiatives'
      ]
    }
  },
  
  learningOutcomes: [
    'How to identify Epic performance bottlenecks',
    'How to position Power for Oracle cost reduction',
    'How to handle price objections with TCO',
    'How to build a complete solution (compute + storage + DR)'
  ]
}
```

---

## Next Steps

1. **Create scenario type definitions** - Start with TypeScript interfaces
2. **Build first 5 sample scenarios** - One per industry to validate structure
3. **Create scenario generator** - Automate scenario creation from product data
4. **Generate remaining 45 scenarios** - Use generator + manual refinement
5. **Integrate with app** - Connect scenarios to existing pages
6. **Test and refine** - User testing and iteration

---

**Estimated Timeline:** 2-3 weeks  
**Start Date:** Immediately  
**Target Completion:** End of Week 3