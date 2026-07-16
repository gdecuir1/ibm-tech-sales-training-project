// Retail Industry Training Scenarios
// Comprehensive scenarios with multiple choice questions

import { TrainingScenario } from '../../types/scenarios';

/**
 * Retail Scenario 001: Omnichannel Commerce Platform
 * National retailer needs unified commerce platform for online, mobile, and in-store
 */
export const retailScenario001: TrainingScenario = {
  id: 'retail-omnichannel-001',
  title: 'National Retailer Needs Omnichannel Commerce Platform for Unified Customer Experience',
  description: 'A national retail chain with 500 stores and growing e-commerce business faces $60M annually in lost sales due to fragmented systems: separate online, mobile, and in-store platforms causing inventory inaccuracy, poor customer experience, and operational inefficiency. They need a unified omnichannel commerce platform with real-time inventory, personalized experiences, and seamless fulfillment.',
  
  customerProfile: {
    company: 'StyleMart Retail',
    industry: 'Retail',
    size: 'Enterprise (5000+ employees)',
    revenue: '$2.5B annually',
    employees: 12000,
    location: 'National (500 stores across 40 states, e-commerce, mobile app)',
    currentInfrastructure: {
      servers: 'Mix of on-premises servers and legacy mainframe',
      storage: 'Distributed storage, no unified product catalog',
      applications: ['Legacy POS', 'Separate e-commerce platform', 'Manual inventory', 'Disconnected mobile app'],
      operatingSystem: 'Windows Server, some mainframe',
      virtualization: 'Limited VMware',
      age: '12-15 years',
      endOfLife: 'Legacy POS approaching end-of-support',
      issues: [
        'Inventory inaccuracy costs $35M annually in lost sales',
        'Separate systems for online, mobile, in-store - no unified view',
        'Cannot fulfill online orders from stores (BOPIS)',
        'No real-time inventory visibility',
        'Poor customer experience - different prices, promotions across channels',
        'Manual processes for returns, exchanges across channels',
        'Cannot personalize experiences',
        'Losing market share to omnichannel competitors'
      ]
    },
    keyStakeholders: [
      {
        name: 'Maria Rodriguez',
        role: 'Chief Digital Officer',
        priorities: ['Omnichannel experience', 'Digital transformation', 'Customer personalization', 'Mobile commerce'],
        concerns: ['Implementation complexity', 'Customer disruption', 'Data migration', 'ROI timeline'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'James Chen',
        role: 'CIO',
        priorities: ['System integration', 'Real-time data', 'Scalability', 'Security'],
        concerns: ['Legacy system integration', 'Peak season performance', 'Data governance', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Patricia Williams',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost reduction', 'Working capital', 'ROI'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Business disruption'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$15M-$25M capital budget for omnichannel transformation',
    timeline: '18-month implementation across all channels and 500 stores',
    decisionProcess: 'Board approved omnichannel initiative. Chief Digital Officer is executive sponsor. CFO requires 30% revenue increase from online.'
  },
  
  businessContext: {
    challenges: [
      'Inventory inaccuracy costs $35M annually',
      'Cannot fulfill online orders from stores',
      'Separate systems create poor customer experience',
      'No real-time inventory visibility',
      'Different prices/promotions across channels',
      'Manual cross-channel returns',
      'Cannot personalize experiences',
      'Losing market share to Amazon, omnichannel competitors'
    ],
    businessImpact: [
      '$60M annual lost sales from inventory issues and poor experience',
      '$35M lost sales from inventory inaccuracy',
      '$25M lost sales from poor customer experience',
      '15% customer churn to competitors',
      'Cannot compete with Amazon Prime'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement unified omnichannel commerce platform',
      'Enable buy online pickup in store (BOPIS)',
      'Deploy real-time inventory across all channels',
      'Personalize customer experiences with AI',
      'Increase online revenue 30%',
      'Reduce inventory inaccuracy to <1%'
    ],
    competitivePressure: 'Amazon and omnichannel competitors winning market share. Customers expect seamless experience across all channels.',
    regulatoryRequirements: ['PCI DSS', 'GDPR', 'CCPA', 'ADA compliance'],
    recentEvents: [
      'Lost 15% of customers to Amazon and competitors',
      'Holiday season inventory issues cost $12M',
      'Customer satisfaction score dropped 20%',
      'Board mandated omnichannel transformation'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of your current fragmented systems? How much revenue are you losing?',
        purpose: 'Quantify omnichannel opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing $60M annually: $35M from inventory inaccuracy, $25M from poor customer experience', isCorrect: true, points: 4, feedback: 'Excellent - quantified total revenue opportunity.' },
          { id: 'q1-b', text: 'Inventory inaccuracy 8% vs. industry best 1% - customers find items out of stock after ordering online', isCorrect: true, points: 3, feedback: 'Good - identified inventory accuracy gap.' },
          { id: 'q1-c', text: 'Lost 15% of customers to Amazon and omnichannel competitors in past 2 years', isCorrect: true, points: 3, feedback: 'Good - quantified customer churn.' },
          { id: 'q1-d', text: 'Customer satisfaction dropped 20% due to inconsistent experience across channels', isCorrect: true, points: 3, feedback: 'Good - identified customer experience impact.' },
          { id: 'q1-e', text: 'No revenue impact', isCorrect: false, points: 0, feedback: 'Wrong - $60M annual revenue loss is significant.' },
          { id: 'q1-f', text: 'Systems working perfectly', isCorrect: false, points: 0, feedback: 'Wrong - fragmented systems causing major issues.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify revenue loss', 'Inventory accuracy gap', 'Customer churn']
      },
      {
        question: 'What omnichannel capabilities are you missing? What do customers expect?',
        purpose: 'Identify capability gaps',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Cannot do buy online pickup in store (BOPIS) - customers go to competitors who offer this', isCorrect: true, points: 4, feedback: 'Excellent - identified critical omnichannel capability.' },
          { id: 'q2-b', text: 'No real-time inventory visibility - online shows in stock but store is out', isCorrect: true, points: 3, feedback: 'Good - identified inventory visibility gap.' },
          { id: 'q2-c', text: 'Different prices and promotions across channels - confuses customers', isCorrect: true, points: 3, feedback: 'Good - identified pricing consistency issue.' },
          { id: 'q2-d', text: 'Cannot return online purchases in store - manual, time-consuming process', isCorrect: true, points: 3, feedback: 'Good - identified cross-channel returns gap.' },
          { id: 'q2-e', text: 'Have all omnichannel capabilities', isCorrect: false, points: 0, feedback: 'Wrong - missing critical capabilities.' },
          { id: 'q2-f', text: 'Customers do not want omnichannel', isCorrect: false, points: 0, feedback: 'Wrong - customers expect seamless omnichannel.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['BOPIS capability', 'Real-time inventory', 'Cross-channel returns']
      },
      {
        question: 'How many channels and stores do you have? What is your system architecture?',
        purpose: 'Understand scale and complexity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: '500 stores, e-commerce site, mobile app - all using separate systems with no integration', isCorrect: true, points: 4, feedback: 'Excellent - identified scale and fragmentation.' },
          { id: 'q3-b', text: 'Legacy POS in stores, separate e-commerce platform, disconnected mobile app - no unified product catalog', isCorrect: true, points: 3, feedback: 'Good - identified system fragmentation.' },
          { id: 'q3-c', text: 'Batch updates overnight - no real-time data sync across channels', isCorrect: true, points: 3, feedback: 'Good - identified real-time data gap.' },
          { id: 'q3-d', text: 'Need unified commerce platform with single product catalog, real-time inventory, consistent pricing', isCorrect: true, points: 3, feedback: 'Good - understood solution requirement.' },
          { id: 'q3-e', text: 'Only one store', isCorrect: false, points: 0, feedback: 'Wrong - 500 stores requires enterprise scale.' },
          { id: 'q3-f', text: 'Systems fully integrated', isCorrect: false, points: 0, feedback: 'Wrong - systems are fragmented.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['500 stores', 'Separate systems', 'No real-time sync']
      },
      {
        question: 'What is your peak season performance requirement? Any scalability concerns?',
        purpose: 'Understand performance requirements',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Holiday season 10x normal traffic - current systems crash, lost $12M last holiday season', isCorrect: true, points: 4, feedback: 'Excellent - quantified peak season impact.' },
          { id: 'q4-b', text: 'Black Friday/Cyber Monday critical - need 99.99% uptime, sub-second response times', isCorrect: true, points: 3, feedback: 'Good - identified uptime requirement.' },
          { id: 'q4-c', text: 'Mobile app crashes during peak - customers abandon carts, go to competitors', isCorrect: true, points: 3, feedback: 'Good - identified mobile performance issue.' },
          { id: 'q4-d', text: 'Need elastic scalability to handle 10x traffic spikes without performance degradation', isCorrect: true, points: 3, feedback: 'Good - understood scalability requirement.' },
          { id: 'q4-e', text: 'No peak season', isCorrect: false, points: 0, feedback: 'Wrong - retail has significant holiday peaks.' },
          { id: 'q4-f', text: 'Performance not important', isCorrect: false, points: 0, feedback: 'Wrong - peak performance is critical.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Holiday season 10x traffic', '99.99% uptime', 'Elastic scalability']
      },
      {
        question: 'What personalization capabilities do you need? How do competitors personalize?',
        purpose: 'Understand AI/personalization requirements',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Amazon personalizes everything - recommendations, pricing, promotions - we show same content to everyone', isCorrect: true, points: 4, feedback: 'Excellent - identified competitive personalization gap.' },
          { id: 'q5-b', text: 'Need AI-powered product recommendations, personalized promotions, dynamic pricing', isCorrect: true, points: 3, feedback: 'Good - understood AI personalization needs.' },
          { id: 'q5-c', text: 'Cannot track customer journey across channels - no unified customer profile', isCorrect: true, points: 3, feedback: 'Good - identified customer data gap.' },
          { id: 'q5-d', text: 'Personalization could increase conversion 30% and average order value 20% based on industry benchmarks', isCorrect: true, points: 3, feedback: 'Good - quantified personalization value.' },
          { id: 'q5-e', text: 'Personalization not needed', isCorrect: false, points: 0, feedback: 'Wrong - personalization is competitive requirement.' },
          { id: 'q5-f', text: 'Already have advanced personalization', isCorrect: false, points: 0, feedback: 'Wrong - showing same content to everyone.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Amazon personalization', 'AI recommendations', 'Unified customer profile']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Digital Officer is executive sponsor, focused on omnichannel experience and digital transformation', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about legacy integration and peak season performance', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated 30% online revenue increase', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'VP Stores concerned about store associate training and change management', isCorrect: true, points: 3, feedback: 'Good - identified operational stakeholder.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - Chief Digital Officer is sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Chief Digital Officer sponsor', 'CFO budget authority', 'CIO technical concerns']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any critical deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '18-month implementation, board-mandated omnichannel transformation', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Must be ready for next holiday season (12 months) - cannot afford another $12M loss', isCorrect: true, points: 3, feedback: 'Good - identified critical deadline.' },
          { id: 'q7-c', text: 'Losing 15% market share to Amazon and omnichannel competitors - urgent competitive pressure', isCorrect: true, points: 3, feedback: 'Good - identified competitive urgency.' },
          { id: 'q7-d', text: 'Vendor selection in 2 months, phased rollout starting with pilot stores', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 18-month timeline with holiday deadline.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and competitive pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Holiday deadline', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$15M-$25M capital budget approved by board for omnichannel transformation', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires 30% online revenue increase and 24-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: recover $60M lost sales, increase online revenue 30%, improve customer satisfaction', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: commerce platform, integration, data migration, training, peak season testing', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $15M-$25M.' },
          { id: 'q8-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 11,
        hints: ['Budget approved', 'ROI requirements', 'Business case drivers']
      }
    ],
    expectedFindings: [
      '$60M annual lost sales',
      'Inventory inaccuracy 8% vs. 1% best',
      '500 stores, separate systems',
      'No BOPIS capability',
      'Holiday season 10x traffic',
      'No personalization',
      'Board-mandated transformation',
      'Budget $15M-$25M approved'
    ],
    redFlags: [
      'Budget under $12M insufficient',
      'Timeline under 12 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 500 stores simultaneously'
    ],
    opportunities: [
      'Recover $60M lost sales',
      'Increase online revenue 30%',
      'Improve inventory accuracy to 99%',
      'Enable BOPIS and omnichannel',
      'Personalization increases conversion 30%'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we avoid disrupting our 500 stores during implementation? We cannot afford downtime during holiday season.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Store continuity is critical. IBM provides zero-disruption deployment: (1) Phased rollout: pilot 10 stores, then regional waves, (2) Parallel run capability - new and old systems run together, (3) Holiday freeze - no changes Nov-Dec, (4) Store associate training 4 weeks before go-live, (5) 24/7 support during rollout. IBM has deployed omnichannel at 100+ retailers with 99.9% success rate and zero holiday disruptions.',
        responseChoices: [
          { id: 'obj1-a', text: 'Phased rollout: pilot 10 stores (2 months), then regional waves - de-risks deployment', isCorrect: true, points: 4, feedback: 'Excellent - addressed store continuity with phased approach.' },
          { id: 'obj1-b', text: 'Parallel run capability - new and old systems together, cutover store-by-store', isCorrect: true, points: 3, feedback: 'Good - explained parallel run strategy.' },
          { id: 'obj1-c', text: 'Holiday freeze Nov-Dec - no changes during peak season, rollout Jan-Oct', isCorrect: true, points: 3, feedback: 'Good - addressed holiday season concern.' },
          { id: 'obj1-d', text: 'IBM track record: 100+ retail deployments, 99.9% success, zero holiday disruptions', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'Must shut down all stores for 6 months', isCorrect: false, points: 0, feedback: 'Wrong - phased rollout with parallel run.' },
          { id: 'obj1-f', text: 'Store disruption not a concern', isCorrect: false, points: 0, feedback: 'Wrong - store continuity is critical.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed store continuity',
          'Explained phased rollout',
          'Described parallel run',
          'Addressed holiday freeze'
        ],
        hints: ['Phased rollout', 'Parallel run', 'Holiday freeze']
      },
      {
        objection: 'How do we handle 10x traffic spikes during Black Friday and holiday season? Our current systems crash.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'performance',
        customResponse: 'Peak performance is critical. IBM provides elastic scalability: (1) Cloud-native architecture auto-scales to 10x traffic, (2) Global CDN for sub-second page loads, (3) Pre-holiday load testing at 15x expected peak, (4) Real-time monitoring with automatic scaling, (5) 99.99% uptime SLA. IBM commerce platforms handle Black Friday for 50+ major retailers with zero downtime.',
        responseChoices: [
          { id: 'obj2-a', text: 'Cloud-native architecture auto-scales to 10x traffic - elastic compute and database', isCorrect: true, points: 4, feedback: 'Excellent - addressed elastic scalability.' },
          { id: 'obj2-b', text: 'Pre-holiday load testing at 15x expected peak - validate performance before Black Friday', isCorrect: true, points: 3, feedback: 'Good - explained load testing strategy.' },
          { id: 'obj2-c', text: 'Global CDN for sub-second page loads, real-time monitoring with automatic scaling', isCorrect: true, points: 3, feedback: 'Good - described performance architecture.' },
          { id: 'obj2-d', text: 'Track record: 50+ retailers, zero Black Friday downtime, 99.99% uptime', isCorrect: true, points: 3, feedback: 'Good - provided peak season track record.' },
          { id: 'obj2-e', text: 'Cannot handle peak traffic', isCorrect: false, points: 0, feedback: 'Wrong - elastic architecture handles peaks.' },
          { id: 'obj2-f', text: 'Performance not important', isCorrect: false, points: 0, feedback: 'Wrong - peak performance is critical.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed elastic scalability',
          'Explained load testing',
          'Described CDN and monitoring',
          'Provided peak season track record'
        ],
        hints: ['Elastic auto-scaling', 'Pre-holiday load testing', '99.99% uptime']
      },
      {
        objection: 'How do we integrate with our legacy POS systems in 500 stores? We cannot replace them all.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Legacy integration is a core strength: (1) Pre-built connectors for major POS systems (NCR, Oracle, IBM), (2) API-based integration - no POS replacement required, (3) Real-time inventory sync between POS and commerce platform, (4) Phased integration: read-only first, then transactional. IBM has integrated with legacy POS at 200+ retailers. Typical integration 2-3 months per POS type.',
        responseChoices: [
          { id: 'obj3-a', text: 'Pre-built connectors for major POS systems - no custom development, proven at 200+ retailers', isCorrect: true, points: 4, feedback: 'Excellent - addressed POS integration with proven connectors.' },
          { id: 'obj3-b', text: 'API-based integration - no POS replacement, real-time inventory sync', isCorrect: true, points: 3, feedback: 'Good - explained non-invasive integration.' },
          { id: 'obj3-c', text: 'Phased integration: read-only first, then transactional - 2-3 months per POS type', isCorrect: true, points: 3, feedback: 'Good - provided realistic timeline.' },
          { id: 'obj3-d', text: 'Unified commerce platform acts as orchestration layer - integrates all systems', isCorrect: true, points: 3, feedback: 'Good - positioned platform as integration hub.' },
          { id: 'obj3-e', text: 'Must replace all POS systems', isCorrect: false, points: 0, feedback: 'Wrong - API integration preserves POS.' },
          { id: 'obj3-f', text: 'Integration not possible', isCorrect: false, points: 0, feedback: 'Wrong - IBM has 200+ POS integrations.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed POS integration',
          'Explained pre-built connectors',
          'Described API-based approach',
          'Provided realistic timeline'
        ],
        hints: ['Pre-built POS connectors', 'API integration', 'Phased approach']
      },
      {
        objection: 'Your solution costs $20M. Can we start with a pilot to prove ROI before rolling out to all 500 stores?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $3M for 10 stores + e-commerce (4 months), (2) Pilot typically shows 25-30% online revenue increase and 50% inventory accuracy improvement, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining stores ($17M) with proven ROI. Business case shows 22-month payback and $90M three-year benefit vs. $20M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $3M pilot with 10 stores + e-commerce (4 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 25-30% online revenue increase and 50% inventory accuracy improvement', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 22-month payback, $90M three-year benefit vs. $20M investment (350% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 500 stores immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
          { id: 'obj4-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Offered phased approach with pilot',
          'Provided pilot cost and timeline',
          'Quantified expected pilot results',
          'Presented strong ROI case'
        ],
        hints: ['Pilot stores approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we train 12,000 store associates on the new system? They are already overwhelmed.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Change management is critical. IBM provides comprehensive training: (1) Role-based training: store associates get simplified mobile interface, (2) Train-the-trainer program: 100 super users train others, (3) Microlearning videos: 2-3 minute modules, (4) In-store support during rollout, (5) Gamification for engagement. New system is actually EASIER than current fragmented systems. IBM has trained 500,000+ retail associates with 95% satisfaction.',
        responseChoices: [
          { id: 'obj5-a', text: 'Role-based training: store associates get simplified mobile interface - easier than current systems', isCorrect: true, points: 4, feedback: 'Excellent - addressed training with simplified UX.' },
          { id: 'obj5-b', text: 'Train-the-trainer: 100 super users train others, microlearning videos (2-3 min modules)', isCorrect: true, points: 3, feedback: 'Good - explained scalable training approach.' },
          { id: 'obj5-c', text: 'In-store support during rollout, gamification for engagement, 24/7 help desk', isCorrect: true, points: 3, feedback: 'Good - described comprehensive support.' },
          { id: 'obj5-d', text: 'Track record: 500,000+ retail associates trained, 95% satisfaction, faster than old systems', isCorrect: true, points: 3, feedback: 'Good - provided training track record.' },
          { id: 'obj5-e', text: 'No training provided', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive training included.' },
          { id: 'obj5-f', text: 'Training not needed', isCorrect: false, points: 0, feedback: 'Wrong - change management is critical.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed training concerns',
          'Explained simplified interface',
          'Described train-the-trainer',
          'Highlighted comprehensive support'
        ],
        hints: ['Simplified interface', 'Train-the-trainer', 'Microlearning']
      }
    ],
    minimumObjectionsToHandle: 4
  },

  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['watson-studio', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance computing for omnichannel commerce platform, real-time inventory, AI personalization, and peak season scalability',
          configuration: 'Centralized Power E1080 for commerce platform and AI. Regional servers for store connectivity',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Sterling Commerce',
          reason: 'Unified omnichannel commerce platform with AI-powered personalization, recommendations, and dynamic pricing',
          configuration: 'Sterling Order Management, Inventory Visibility, Customer Engagement, Watson AI for personalization',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for product catalog, customer data, transaction history, and AI models',
          configuration: '300TB usable capacity for 500 stores, product catalog, customer profiles, transaction history, AI models',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for commerce platform, AI personalization, and order orchestration, (2) Regional tier: Regional servers for store connectivity and local caching, (3) Storage tier: FlashSystem 9500 for unified product catalog and customer data. IBM Sterling Commerce provides omnichannel orchestration.',
      sizing: 'Central: 1x Power E1080 (32-core) for commerce and AI. Regional: 4x Power E1080 (8-core each) for regional processing. Storage: 300TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-4): Pilot with 10 stores + e-commerce. Phase 2 (Months 5-12): Scale to 250 stores. Phase 3 (Months 13-18): Complete rollout to remaining 240 stores.'
    },
    pricing: {
      hardware: '$10M (5x Power E1080 + FlashSystem 9500)',
      software: '$6M (IBM Sterling Commerce, Watson AI, 3-year licenses)',
      services: '$4M (IBM Expert Labs: implementation, POS integration, data migration, training)',
      support: '$500K/year (24x7 support with 2-hour response)',
      total: '$20M initial + $500K/year support',
      financing: 'IBM Flex financing available - $420K/month for 60 months',
      paymentTerms: 'Phased payment: $3M pilot, $8M Phase 2, $9M Phase 3'
    },
    businessCase: {
      costSavings: '$60M annually (recover lost sales from inventory and experience)',
      revenueImpact: '$75M annually (30% online revenue increase from $250M to $325M)',
      productivityGains: '$15M annually (operational efficiency, reduced manual processes)',
      riskReduction: 'Improve inventory accuracy from 92% to 99%, enable BOPIS, unified customer experience',
      roi: '22 months',
      paybackPeriod: '22 months',
      tco: '3-year TCO: $20M investment vs. $450M in benefits (revenue + savings + productivity) = $430M net benefit, 350% three-year ROI'
    },
    competitivePositioning: 'IBM Sterling Commerce is the leading omnichannel platform with 500+ retail deployments. Unlike generic e-commerce platforms, IBM provides retail-specific capabilities: BOPIS, endless aisle, distributed order management, AI personalization. Power E1080 delivers 3x better performance than x86 for peak season traffic.',
    nextSteps: [
      'Schedule omnichannel workshop with IBM Sterling experts',
      'Conduct pilot store selection and POS assessment',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected stores'
    ],
    requiredElements: [
      'IBM Sterling Commerce for omnichannel orchestration',
      'Power E1080 for commerce platform and AI',
      'FlashSystem for unified product catalog',
      'Watson AI for personalization',
      'POS integration for 500 stores',
      'Real-time inventory visibility',
      'BOPIS and endless aisle capabilities',
      'Training and change management program'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified revenue opportunity ($60M lost sales)',
        'Identified omnichannel capability gaps (BOPIS, real-time inventory)',
        'Understood scale (500 stores, separate systems)',
        'Assessed peak season requirements (10x traffic)',
        'Identified personalization needs (AI recommendations)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($15M-$25M, 18 months)',
        'Identified CFO mandate (30% online revenue increase)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed store disruption with phased rollout',
        'Handled peak performance with elastic scalability',
        'Addressed POS integration with pre-built connectors',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed training with simplified interface and train-the-trainer'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as commerce platform',
        'Included Sterling Commerce for omnichannel orchestration',
        'Included FlashSystem for unified catalog',
        'Addressed all pain points (inventory, BOPIS, personalization)',
        'Proposed phased deployment with pilot',
        'Included POS integration and training'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified revenue recovery ($60M)',
        'Quantified online revenue increase ($75M)',
        'Calculated operational efficiency ($15M)',
        'Calculated ROI (22-month payback, 350% three-year ROI)',
        'Positioned as competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Omnichannel commerce architecture',
      description: 'Design unified commerce platforms with real-time inventory, BOPIS, and seamless customer experience across all channels',
      skillLevel: 'advanced'
    },
    {
      concept: 'Retail peak season scalability',
      description: 'Architect elastic systems to handle 10x traffic spikes during Black Friday and holiday season',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI-powered personalization',
      description: 'Implement AI recommendations, dynamic pricing, and personalized customer experiences',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Legacy POS integration',
      description: 'Integrate modern commerce platforms with legacy POS systems using API-based connectors',
      skillLevel: 'advanced'
    },
    {
      concept: 'Retail change management',
      description: 'Design training and change management programs for large-scale retail deployments',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Omnichannel', 'E-commerce', 'Retail', 'BOPIS', 'Personalization', 'Peak season', 'POS integration'],
    skills: ['Omnichannel architecture', 'Retail operations', 'AI personalization', 'Peak scalability', 'Change management'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Retail'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with revenue opportunity ($60M lost sales) - this is the primary pain point',
    'Emphasize omnichannel capability gaps (BOPIS, real-time inventory) as competitive disadvantage',
    'Address peak season performance proactively - Black Friday is critical',
    'Recommend pilot approach to de-risk investment and prove ROI',
    'Highlight POS integration with pre-built connectors - common concern',
    'Position Sterling Commerce as retail-specific vs. generic e-commerce platforms',
    'Build compelling ROI: 22-month payback, 350% three-year ROI, $75M revenue increase',
    'Chief Digital Officer is champion - focus on omnichannel experience',
    'CIO is supporter but concerned about peak performance - lead with elastic scalability',
    'CFO is neutral - build strong business case with 30% online revenue mandate',
    'Differentiate with proven track record: 500+ retail deployments, zero Black Friday downtime',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address training concerns with simplified interface and train-the-trainer approach'
  ]
};

// Export all retail scenarios

// Made with Bob


/**
 * Retail Scenario 002: AI-Powered Inventory Optimization
 * Grocery retailer needs AI to reduce waste and optimize inventory
 */
export const retailScenario002: TrainingScenario = {
  id: 'retail-inventory-002',
  title: 'Grocery Retailer Needs AI-Powered Inventory Optimization to Reduce Waste and Stockouts',
  description: 'A regional grocery chain with 200 stores faces $45M annually in losses: $30M from food waste (perishables expire) and $15M from stockouts (empty shelves). Manual inventory management cannot handle 50,000+ SKUs with varying shelf lives. They need AI-powered demand forecasting, automated replenishment, and dynamic pricing to reduce waste, eliminate stockouts, and improve margins.',
  
  customerProfile: {
    company: 'FreshMart Grocery',
    industry: 'Retail',
    size: 'Large (1000-5000 employees)',
    revenue: '$1.2B annually',
    employees: 8000,
    location: 'Regional (200 stores across 8 states)',
    currentInfrastructure: {
      servers: 'On-premises servers and legacy inventory systems',
      storage: 'Local storage at each store, no centralized analytics',
      applications: ['Legacy inventory management', 'Manual ordering', 'Spreadsheet-based forecasting', 'Basic POS'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '10-12 years',
      endOfLife: 'Legacy systems approaching end-of-support',
      issues: [
        'Food waste costs $30M annually (8% of perishables expire)',
        'Stockouts cost $15M annually in lost sales',
        'Manual ordering for 50,000+ SKUs - overwhelmed buyers',
        'Cannot forecast demand for perishables',
        'No dynamic pricing to clear expiring inventory',
        'Excess inventory ties up $80M working capital',
        'Cannot optimize across 200 stores',
        'Losing customers to competitors with better availability'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Thompson',
        role: 'Chief Marketing Officer',
        priorities: ['Reduce waste', 'Improve availability', 'Customer satisfaction', 'Sustainability'],
        concerns: ['Implementation complexity', 'Buyer adoption', 'Customer pricing perception', 'ROI timeline'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Susan Martinez',
        role: 'CIO',
        priorities: ['AI capabilities', 'Real-time data', 'Scalability', 'Integration'],
        concerns: ['Data quality', 'AI accuracy', 'Legacy integration', 'Change management'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Robert Chen',
        role: 'CFO',
        priorities: ['Reduce waste', 'Improve margins', 'Working capital', 'ROI'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Operational disruption'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$8M-$12M capital budget for inventory optimization',
    timeline: '12-month implementation across 200 stores',
    decisionProcess: 'Board approved waste reduction initiative. CMO is executive sponsor. CFO requires 50% waste reduction.'
  },
  
  businessContext: {
    challenges: [
      'Food waste costs $30M annually (8% of perishables)',
      'Stockouts cost $15M annually',
      'Manual ordering cannot handle 50,000+ SKUs',
      'Cannot forecast perishable demand',
      'No dynamic pricing for expiring items',
      'Excess inventory $80M working capital',
      'Cannot optimize across 200 stores',
      'Sustainability pressure - reduce food waste'
    ],
    businessImpact: [
      '$45M annual losses (waste + stockouts)',
      '$30M food waste annually',
      '$15M lost sales from stockouts',
      '$80M excess working capital',
      'Customer churn from poor availability'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement AI-powered demand forecasting',
      'Deploy automated replenishment',
      'Enable dynamic pricing for perishables',
      'Reduce food waste from 8% to 3%',
      'Eliminate stockouts',
      'Reduce inventory from 45 to 30 days'
    ],
    competitivePressure: 'Competitors using AI have better availability and lower waste. Sustainability pressure from customers and regulators.',
    regulatoryRequirements: ['Food safety', 'Sustainability reporting', 'Waste reduction mandates'],
    recentEvents: [
      'Lost 10% of customers due to poor availability',
      'Sustainability audit identified 8% waste as unacceptable',
      'Competitor reduced waste to 3% with AI',
      'Board mandated 50% waste reduction'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is your current food waste rate and cost? How does it compare to industry benchmarks?',
        purpose: 'Quantify waste opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Food waste 8% of perishables costing $30M annually vs. industry best 3% - represents $18.75M opportunity', isCorrect: true, points: 4, feedback: 'Excellent - quantified waste reduction opportunity.' },
          { id: 'q1-b', text: 'Perishables: produce, dairy, meat, bakery - different shelf lives, cannot forecast accurately', isCorrect: true, points: 3, feedback: 'Good - identified forecasting complexity.' },
          { id: 'q1-c', text: 'Manual ordering leads to over-ordering to avoid stockouts - creates waste', isCorrect: true, points: 3, feedback: 'Good - identified root cause.' },
          { id: 'q1-d', text: 'Sustainability audit identified 8% waste as unacceptable - must reduce to 3%', isCorrect: true, points: 3, feedback: 'Good - understood regulatory pressure.' },
          { id: 'q1-e', text: 'No food waste', isCorrect: false, points: 0, feedback: 'Wrong - 8% waste costs $30M annually.' },
          { id: 'q1-f', text: 'Waste not a problem', isCorrect: false, points: 0, feedback: 'Wrong - $30M annual cost is critical.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify waste cost', 'Industry benchmark 3%', 'Sustainability pressure']
      },
      {
        question: 'What is your stockout rate and business impact? How often are shelves empty?',
        purpose: 'Quantify stockout impact',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Stockouts cost $15M annually in lost sales - customers go to competitors', isCorrect: true, points: 4, feedback: 'Excellent - quantified stockout cost.' },
          { id: 'q2-b', text: 'Stockout rate 5% vs. industry best 1% - empty shelves frustrate customers', isCorrect: true, points: 3, feedback: 'Good - identified stockout gap.' },
          { id: 'q2-c', text: 'Lost 10% of customers due to poor availability - cannot compete with competitors', isCorrect: true, points: 3, feedback: 'Good - quantified customer churn.' },
          { id: 'q2-d', text: 'Cannot balance waste vs. stockouts - either too much inventory (waste) or too little (stockouts)', isCorrect: true, points: 3, feedback: 'Good - identified optimization challenge.' },
          { id: 'q2-e', text: 'No stockouts', isCorrect: false, points: 0, feedback: 'Wrong - 5% stockout rate costs $15M.' },
          { id: 'q2-f', text: 'Stockouts not important', isCorrect: false, points: 0, feedback: 'Wrong - $15M lost sales is significant.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Quantify lost sales', 'Stockout rate 5% vs. 1%', 'Customer churn']
      },
      {
        question: 'How many SKUs do you manage and what is your current ordering process?',
        purpose: 'Understand complexity and process',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: '50,000+ SKUs across 200 stores - manual ordering overwhelms buyers', isCorrect: true, points: 4, feedback: 'Excellent - identified scale and complexity.' },
          { id: 'q3-b', text: 'Manual spreadsheet-based forecasting using historical averages - cannot handle complexity', isCorrect: true, points: 3, feedback: 'Good - identified manual process limitation.' },
          { id: 'q3-c', text: 'Buyers spend 80% of time on manual ordering, only 20% on strategic decisions', isCorrect: true, points: 3, feedback: 'Good - quantified productivity impact.' },
          { id: 'q3-d', text: 'Need AI to automate ordering for 50,000+ SKUs, free buyers for strategic work', isCorrect: true, points: 3, feedback: 'Good - understood AI value proposition.' },
          { id: 'q3-e', text: 'Only 100 SKUs', isCorrect: false, points: 0, feedback: 'Wrong - 50,000+ SKUs requires AI.' },
          { id: 'q3-f', text: 'Manual ordering works fine', isCorrect: false, points: 0, feedback: 'Wrong - manual process creates waste and stockouts.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['50,000+ SKUs', 'Manual process overwhelmed', 'AI automation needed']
      },
      {
        question: 'What factors affect demand for perishables? Can you forecast accurately?',
        purpose: 'Understand forecasting complexity',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Demand affected by: weather, holidays, local events, promotions, day of week - cannot forecast manually', isCorrect: true, points: 4, feedback: 'Excellent - identified forecasting complexity.' },
          { id: 'q4-b', text: 'Forecast error 40% vs. industry best 15% - leads to waste and stockouts', isCorrect: true, points: 3, feedback: 'Good - quantified forecast accuracy gap.' },
          { id: 'q4-c', text: 'Different shelf lives: produce 3-7 days, dairy 7-14 days, meat 3-5 days - requires different strategies', isCorrect: true, points: 3, feedback: 'Good - understood perishable complexity.' },
          { id: 'q4-d', text: 'Need AI to analyze millions of data points: sales, weather, events, promotions, social media', isCorrect: true, points: 3, feedback: 'Good - understood AI analytical power.' },
          { id: 'q4-e', text: 'Demand is constant', isCorrect: false, points: 0, feedback: 'Wrong - demand varies significantly.' },
          { id: 'q4-f', text: 'Forecasting not needed', isCorrect: false, points: 0, feedback: 'Wrong - accurate forecasting critical for perishables.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Weather, holidays, events', 'Forecast error 40% vs. 15%', 'AI analyzes millions of data points']
      },
      {
        question: 'Do you use dynamic pricing to clear expiring inventory? What is your markdown strategy?',
        purpose: 'Assess pricing capabilities',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'No dynamic pricing - items expire at full price, then thrown away ($30M waste)', isCorrect: true, points: 4, feedback: 'Excellent - identified dynamic pricing opportunity.' },
          { id: 'q5-b', text: 'Manual markdowns too slow - by the time marked down, already expired', isCorrect: true, points: 3, feedback: 'Good - identified timing issue.' },
          { id: 'q5-c', text: 'Competitors use AI dynamic pricing to clear expiring items - we lose sales', isCorrect: true, points: 3, feedback: 'Good - identified competitive disadvantage.' },
          { id: 'q5-d', text: 'Need AI to automatically markdown items 2-3 days before expiration - recover value instead of waste', isCorrect: true, points: 3, feedback: 'Good - understood dynamic pricing value.' },
          { id: 'q5-e', text: 'Already have advanced dynamic pricing', isCorrect: false, points: 0, feedback: 'Wrong - no dynamic pricing capability.' },
          { id: 'q5-f', text: 'Dynamic pricing not needed', isCorrect: false, points: 0, feedback: 'Wrong - could recover significant value.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['No dynamic pricing', 'Manual markdowns too slow', 'AI automated markdowns']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'CMO is executive sponsor, focused on waste reduction and customer satisfaction', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about AI accuracy and data quality', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated 50% waste reduction ($15M savings)', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'VP Merchandising concerned about buyer adoption and trust in AI', isCorrect: true, points: 3, feedback: 'Good - identified operational stakeholder.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - CMO is executive sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['CMO sponsor', 'CFO budget authority', 'VP Merchandising adoption']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any regulatory or sustainability deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '12-month implementation across 200 stores, board-mandated waste reduction initiative', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Sustainability audit requires 50% waste reduction by end of year', isCorrect: true, points: 3, feedback: 'Good - identified regulatory deadline.' },
          { id: 'q7-c', text: 'Losing customers to competitors with better availability - urgent competitive pressure', isCorrect: true, points: 3, feedback: 'Good - identified competitive urgency.' },
          { id: 'q7-d', text: 'Vendor selection in 6 weeks, phased rollout starting with pilot stores', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 12-month timeline with regulatory deadline.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and regulatory pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Sustainability deadline', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$8M-$12M capital budget approved by board for inventory optimization', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires 50% waste reduction ($15M savings) and 18-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce waste $15M, eliminate stockouts $15M, reduce inventory $20M working capital', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: AI platform, integration, training, change management', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $8M-$12M.' },
          { id: 'q8-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 11,
        hints: ['Budget approved', 'ROI requirements', 'Business case drivers']
      }
    ],
    expectedFindings: [
      '$30M annual food waste (8% vs. 3%)',
      '$15M annual stockouts',
      '50,000+ SKUs manual ordering',
      'Forecast error 40% vs. 15%',
      'No dynamic pricing',
      'Board-mandated waste reduction',
      'Sustainability deadline',
      'Budget $8M-$12M approved'
    ],
    redFlags: [
      'Budget under $6M insufficient',
      'Timeline under 9 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 200 stores simultaneously'
    ],
    opportunities: [
      'Reduce waste $15M annually',
      'Eliminate stockouts $15M annually',
      'Reduce inventory $20M working capital',
      'Improve forecast accuracy 40% to 15%',
      'Dynamic pricing recovers value'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we get buyers to trust AI recommendations? They have 20+ years of experience and intuition.',
        stakeholder: 'Chief Marketing Officer',
        difficulty: 'very difficult',
        category: 'skills',
        customResponse: 'Buyer trust is critical. IBM provides human-in-the-loop AI: (1) AI recommends, buyers approve - maintains control, (2) Explainable AI shows reasoning - builds trust, (3) AI learns from buyer overrides - improves over time, (4) Pilot shows AI accuracy improves from 60% to 85% within 3 months, (5) Buyers shift from manual ordering to strategic decisions. IBM has deployed AI ordering at 50+ grocers with 95% buyer satisfaction.',
        responseChoices: [
          { id: 'obj1-a', text: 'Human-in-the-loop: AI recommends, buyers approve - maintains control and builds trust', isCorrect: true, points: 4, feedback: 'Excellent - addressed trust with human oversight.' },
          { id: 'obj1-b', text: 'Explainable AI shows reasoning: weather forecast, event calendar, promotion schedule - not a black box', isCorrect: true, points: 3, feedback: 'Good - explained transparency.' },
          { id: 'obj1-c', text: 'AI learns from buyer overrides - improves accuracy from 60% to 85% within 3 months', isCorrect: true, points: 3, feedback: 'Good - showed adaptive learning.' },
          { id: 'obj1-d', text: 'Track record: 50+ grocers, 95% buyer satisfaction, buyers become AI advocates', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'AI replaces all buyers', isCorrect: false, points: 0, feedback: 'Wrong - human-in-the-loop maintains buyer role.' },
          { id: 'obj1-f', text: 'Buyer trust not important', isCorrect: false, points: 0, feedback: 'Wrong - buyer adoption is critical.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed buyer trust',
          'Explained human-in-the-loop',
          'Described explainable AI',
          'Showed adaptive learning'
        ],
        hints: ['Human-in-the-loop', 'Explainable AI', 'Adaptive learning']
      },
      {
        objection: 'How accurate is AI forecasting for perishables? Our business is too complex with weather, holidays, events.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'performance',
        customResponse: 'AI excels at complexity. IBM Watson analyzes millions of data points: (1) Historical sales patterns by SKU, store, day, time, (2) Weather forecasts - ice cream sales spike at 80°F, (3) Event calendars - sports games, concerts, holidays, (4) Promotion schedules, (5) Social media trends. Typical improvement: 40% error to 15% error (62% improvement). IBM customers average 60%+ forecast accuracy improvement within 6 months.',
        responseChoices: [
          { id: 'obj2-a', text: 'AI analyzes millions of data points: sales, weather, events, promotions, social media - far beyond human capability', isCorrect: true, points: 4, feedback: 'Excellent - explained AI analytical power.' },
          { id: 'obj2-b', text: 'Machine learning adapts to local patterns - learns each store is different', isCorrect: true, points: 3, feedback: 'Good - explained adaptive learning.' },
          { id: 'obj2-c', text: 'Typical improvement: 40% error to 15% error (62% improvement) - proven results', isCorrect: true, points: 3, feedback: 'Good - quantified expected improvement.' },
          { id: 'obj2-d', text: 'Explainable AI shows forecast drivers - weather spike, event impact, promotion lift', isCorrect: true, points: 3, feedback: 'Good - addressed transparency.' },
          { id: 'obj2-e', text: 'AI cannot handle complexity', isCorrect: false, points: 0, feedback: 'Wrong - AI excels at complex patterns.' },
          { id: 'obj2-f', text: 'Forecast accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - drives waste and stockouts.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Explained AI analytical power',
          'Described adaptive learning',
          'Quantified improvement',
          'Addressed transparency'
        ],
        hints: ['Millions of data points', 'Adaptive learning', 'Explainable AI']
      },
      {
        objection: 'How do we implement dynamic pricing without upsetting customers? They might think we are price gouging.',
        stakeholder: 'Chief Marketing Officer',
        difficulty: 'difficult',
        category: 'strategy',
        customResponse: 'Customer perception is critical. IBM provides customer-friendly dynamic pricing: (1) Only markdown expiring items - never increase prices, (2) Clear signage: "Reduced to Clear - Expires Tomorrow", (3) Loyalty app alerts: "Your favorite items on sale", (4) Sustainability messaging: "Help us reduce waste", (5) Gradual rollout with customer feedback. Customers appreciate discounts and sustainability. IBM has deployed dynamic pricing at 30+ grocers with positive customer response.',
        responseChoices: [
          { id: 'obj3-a', text: 'Only markdown expiring items - never increase prices, customers see value', isCorrect: true, points: 4, feedback: 'Excellent - addressed pricing perception.' },
          { id: 'obj3-b', text: 'Clear signage and sustainability messaging - customers appreciate waste reduction', isCorrect: true, points: 3, feedback: 'Good - explained customer communication.' },
          { id: 'obj3-c', text: 'Loyalty app alerts - personalized offers increase engagement', isCorrect: true, points: 3, feedback: 'Good - described customer benefit.' },
          { id: 'obj3-d', text: 'Track record: 30+ grocers, positive customer response, increased loyalty', isCorrect: true, points: 3, feedback: 'Good - provided track record.' },
          { id: 'obj3-e', text: 'Increase prices on expiring items', isCorrect: false, points: 0, feedback: 'Wrong - only markdowns, never increases.' },
          { id: 'obj3-f', text: 'Customer perception not important', isCorrect: false, points: 0, feedback: 'Wrong - customer trust is critical.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed pricing perception',
          'Explained markdown-only strategy',
          'Described customer communication',
          'Highlighted sustainability messaging'
        ],
        hints: ['Markdown only', 'Clear signage', 'Sustainability messaging']
      },
      {
        objection: 'Your solution costs $10M. Can we start with a pilot to prove ROI before rolling out to all 200 stores?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $1.5M for 10 stores (3 months), (2) Pilot typically shows 50% waste reduction and 60% stockout reduction, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining stores ($8.5M) with proven ROI. Business case shows 16-month payback and $50M three-year benefit vs. $10M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $1.5M pilot with 10 stores (3 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 50% waste reduction and 60% stockout reduction within 3 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 16-month payback, $50M three-year benefit vs. $10M investment (400% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 200 stores immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
          { id: 'obj4-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Offered phased approach with pilot',
          'Provided pilot cost and timeline',
          'Quantified expected pilot results',
          'Presented strong ROI case'
        ],
        hints: ['Pilot stores approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we ensure data quality when integrating data from 200 stores and multiple systems?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Data quality is foundational. IBM provides comprehensive data management: (1) Automated data validation and cleansing at ingestion, (2) Master data management for products, stores, suppliers, (3) AI-powered anomaly detection identifies bad data, (4) Data quality dashboards with issue tracking, (5) Continuous monitoring and improvement. IBM Watson handles missing data gracefully. Typical data quality improvement: 70% to 95%+ within 2 months.',
        responseChoices: [
          { id: 'obj5-a', text: 'Automated data validation and cleansing at ingestion - catches errors before they propagate', isCorrect: true, points: 4, feedback: 'Excellent - addressed data quality proactively.' },
          { id: 'obj5-b', text: 'AI-powered anomaly detection identifies bad data - learns normal patterns, flags outliers', isCorrect: true, points: 3, feedback: 'Good - explained AI data quality.' },
          { id: 'obj5-c', text: 'Watson handles missing data gracefully - imputes values, does not fail', isCorrect: true, points: 3, feedback: 'Good - addressed missing data concern.' },
          { id: 'obj5-d', text: 'Data quality dashboards with continuous monitoring - 70% to 95%+ within 2 months', isCorrect: true, points: 3, feedback: 'Good - provided improvement timeline.' },
          { id: 'obj5-e', text: 'Data quality not important', isCorrect: false, points: 0, feedback: 'Wrong - data quality is foundational.' },
          { id: 'obj5-f', text: 'Cannot ensure data quality', isCorrect: false, points: 0, feedback: 'Wrong - IBM provides comprehensive data management.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed data quality concerns',
          'Explained automated validation',
          'Described AI anomaly detection',
          'Highlighted graceful handling of missing data'
        ],
        hints: ['Automated validation', 'AI anomaly detection', 'Handles missing data']
      }
    ],
    minimumObjectionsToHandle: 4
  },

  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['watson-studio', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance computing for AI-powered demand forecasting, automated replenishment, and dynamic pricing across 200 stores and 50,000+ SKUs',
          configuration: 'Centralized Power E1080 for AI forecasting and optimization. Regional servers for store connectivity',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Watson Supply Chain',
          reason: 'AI-powered demand forecasting, automated replenishment, dynamic pricing, and inventory optimization',
          configuration: 'Demand forecasting AI, automated replenishment, dynamic pricing engine, inventory optimization, waste reduction analytics',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for sales history, product data, AI models, and real-time analytics',
          configuration: '150TB usable capacity for 200 stores, sales history, product catalog, AI models, real-time analytics',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for AI forecasting, automated replenishment, and dynamic pricing, (2) Regional tier: Regional servers for store connectivity and local processing, (3) Storage tier: FlashSystem 9500 for sales history and AI models. IBM Watson Supply Chain provides AI optimization.',
      sizing: 'Central: 1x Power E1080 (24-core) for AI and optimization. Regional: 3x Power E1080 (8-core each) for regional processing. Storage: 150TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-3): Pilot with 10 stores. Phase 2 (Months 4-8): Scale to 100 stores. Phase 3 (Months 9-12): Complete rollout to remaining 90 stores.'
    },
    pricing: {
      hardware: '$5M (4x Power E1080 + FlashSystem 9500)',
      software: '$3M (IBM Watson Supply Chain, Watson Studio, 3-year licenses)',
      services: '$2M (IBM Expert Labs: implementation, integration, training, change management)',
      support: '$300K/year (24x7 support with 4-hour response)',
      total: '$10M initial + $300K/year support',
      financing: 'IBM Flex financing available - $210K/month for 60 months',
      paymentTerms: 'Phased payment: $1.5M pilot, $4M Phase 2, $4.5M Phase 3'
    },
    businessCase: {
      costSavings: '$30M annually (waste $15M, stockouts $15M)',
      productivityGains: '$10M annually (buyer productivity, operational efficiency)',
      riskReduction: 'Reduce waste from 8% to 3%, eliminate stockouts from 5% to 1%, improve forecast accuracy from 40% to 15%',
      roi: '16 months',
      paybackPeriod: '16 months',
      tco: '3-year TCO: $10M investment vs. $120M in benefits (waste + stockouts + productivity) = $110M net benefit, 400% three-year ROI'
    },
    competitivePositioning: 'IBM Watson Supply Chain is the leading AI platform for retail with 100+ deployments. Unlike generic forecasting tools, IBM provides grocery-specific AI models for perishables, dynamic pricing, and waste reduction. Power E1080 delivers 3x better performance than x86 for AI workloads.',
    nextSteps: [
      'Schedule inventory optimization workshop with IBM Watson experts',
      'Conduct pilot store selection and data assessment',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected stores'
    ],
    requiredElements: [
      'IBM Watson Supply Chain for AI forecasting',
      'Power E1080 for AI processing',
      'FlashSystem for sales history and AI models',
      'Watson Studio for AI model development',
      'Automated replenishment system',
      'Dynamic pricing engine',
      'POS integration for 200 stores',
      'Training and change management program'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified waste opportunity ($30M, 8% vs. 3%)',
        'Quantified stockout impact ($15M)',
        'Understood complexity (50,000+ SKUs, manual ordering)',
        'Assessed forecasting challenge (40% error vs. 15%)',
        'Identified dynamic pricing opportunity',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($8M-$12M, 12 months)',
        'Identified CFO mandate (50% waste reduction)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed buyer trust with human-in-the-loop',
        'Handled AI accuracy with proven results',
        'Addressed pricing perception with markdown-only strategy',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed data quality with automated validation'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as AI platform',
        'Included Watson Supply Chain for forecasting',
        'Included FlashSystem for data storage',
        'Addressed all pain points (waste, stockouts, forecasting)',
        'Proposed phased deployment with pilot',
        'Included dynamic pricing and automated replenishment'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified waste reduction ($15M)',
        'Quantified stockout elimination ($15M)',
        'Calculated productivity gains ($10M)',
        'Calculated ROI (16-month payback, 400% three-year ROI)',
        'Positioned as sustainability advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'AI-powered demand forecasting for perishables',
      description: 'Master AI forecasting techniques for complex perishable inventory with varying shelf lives',
      skillLevel: 'advanced'
    },
    {
      concept: 'Automated replenishment systems',
      description: 'Design automated ordering systems that balance waste reduction and stockout prevention',
      skillLevel: 'advanced'
    },
    {
      concept: 'Dynamic pricing strategies',
      description: 'Implement customer-friendly dynamic pricing to clear expiring inventory and reduce waste',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Change management for AI adoption',
      description: 'Build buyer trust in AI recommendations through human-in-the-loop and explainable AI',
      skillLevel: 'advanced'
    },
    {
      concept: 'Sustainability and waste reduction',
      description: 'Position AI solutions as sustainability initiatives that reduce food waste and environmental impact',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['AI forecasting', 'Inventory optimization', 'Retail', 'Perishables', 'Waste reduction', 'Dynamic pricing', 'Sustainability'],
    skills: ['AI forecasting', 'Inventory management', 'Dynamic pricing', 'Change management', 'Sustainability'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Retail'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with waste opportunity ($30M, 8% vs. 3%) - this is the primary pain point',
    'Emphasize sustainability pressure - waste reduction is regulatory and customer requirement',
    'Address buyer trust proactively with human-in-the-loop and explainable AI',
    'Recommend pilot approach to de-risk investment and prove ROI',
    'Highlight forecast accuracy improvement (40% to 15%) as key driver',
    'Position Watson as grocery-specific AI vs. generic forecasting tools',
    'Build compelling ROI: 16-month payback, 400% three-year ROI, $30M savings',
    'CMO is champion - focus on waste reduction and customer satisfaction',
    'CIO is supporter but concerned about AI accuracy - lead with proven results',
    'CFO is neutral - build strong business case with 50% waste reduction mandate',
    'Differentiate with proven track record: 100+ retail AI deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address pricing perception with markdown-only and sustainability messaging',
    'Highlight dynamic pricing as customer benefit, not price gouging'
  ]
};
/**
 * Retail Scenario 003: Store Operations and Task Management
 * Regional grocery chain improving store execution with mobile task management
 */
export const retailScenario003: TrainingScenario = {
  id: 'retail-store-ops-003',
  title: 'Regional Grocery Chain Needs Mobile Task Management to Improve Store Execution',
  description: 'A regional grocery chain with 150 stores faces $25M annually in lost sales due to poor store execution - out-of-stocks, missed promotions, and inconsistent merchandising. They need a mobile task management platform to digitize store operations, ensure execution compliance, and improve customer experience.',
  
  customerProfile: {
    company: 'Fresh Market Grocers',
    industry: 'Retail',
    size: 'Large (1000-5000 employees)',
    revenue: '$1.2B annually',
    employees: 8500,
    location: 'Regional (150 stores across 5 states)',
    currentInfrastructure: {
      servers: 'On-premises servers at headquarters',
      storage: 'Limited storage, no centralized data',
      applications: ['Paper-based task lists', 'Manual store audits', 'No mobile apps', 'Email-based communication'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '12-15 years',
      endOfLife: 'Infrastructure approaching capacity',
      issues: [
        '$25M annually in lost sales from poor execution',
        'Out-of-stocks cost $15M annually',
        'Missed promotions cost $10M annually',
        'Paper-based task lists - no visibility or accountability',
        'Store managers spend 20 hours/week on paperwork',
        'No real-time communication with stores',
        'Cannot track task completion or compliance',
        'Inconsistent merchandising across stores'
      ]
    },
    keyStakeholders: [
      {
        name: 'Jennifer Martinez',
        role: 'Chief Digital Officer',
        priorities: ['Store execution', 'Customer experience', 'Operational efficiency', 'Digital transformation'],
        concerns: ['Store manager adoption', 'Implementation complexity', 'ROI', 'Change management'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Robert Chen',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Mobile infrastructure', 'Integration', 'Support'],
        concerns: ['Network connectivity', 'Device management', 'Security', 'Support model'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Lisa Thompson',
        role: 'CFO',
        priorities: ['Sales growth', 'Cost reduction', 'ROI', 'Profitability'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Risk'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$4M-$6M capital budget for mobile task management platform',
    timeline: '8-month implementation across 150 stores',
    decisionProcess: 'Board approved store operations initiative. Chief Digital Officer is executive sponsor. CFO requires $15M sales increase.'
  },
  
  businessContext: {
    challenges: [
      '$25M annually in lost sales',
      'Out-of-stocks cost $15M',
      'Missed promotions cost $10M',
      'Paper-based task lists',
      'Store managers spend 20 hours/week on paperwork',
      'No real-time store communication',
      'Cannot track compliance',
      'Inconsistent merchandising'
    ],
    businessImpact: [
      '$25M annual lost sales',
      '$15M from out-of-stocks',
      '$10M from missed promotions',
      'Customer satisfaction declining',
      'Losing market share to competitors'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement mobile task management platform',
      'Digitize store operations and eliminate paper',
      'Reduce out-of-stocks by 50%',
      'Improve promotion execution to 95%+',
      'Increase sales by $15M annually',
      'Improve customer satisfaction'
    ],
    competitivePressure: 'Competitors have digital store operations. Customers switching to competitors with better in-stock and promotions.',
    regulatoryRequirements: ['Food safety compliance', 'Labor laws', 'Health department requirements', 'OSHA'],
    recentEvents: [
      'Lost 5% market share to competitors',
      'Customer satisfaction scores declining',
      'Board mandated store operations improvement',
      'Store managers complaining about paperwork burden'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of poor store execution? How much sales are you losing?',
        purpose: 'Quantify execution opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: '$25M annually in lost sales from poor execution - out-of-stocks and missed promotions', isCorrect: true, points: 4, feedback: 'Excellent - quantified sales impact.' },
          { id: 'q1-b', text: 'Out-of-stocks cost $15M annually - customers leave without buying or switch to competitors', isCorrect: true, points: 3, feedback: 'Good - identified out-of-stock impact.' },
          { id: 'q1-c', text: 'Missed promotions cost $10M annually - promotional displays not set up on time', isCorrect: true, points: 3, feedback: 'Good - identified promotion execution gap.' },
          { id: 'q1-d', text: 'Lost 5% market share to competitors with better execution and in-stock rates', isCorrect: true, points: 3, feedback: 'Good - identified competitive threat.' },
          { id: 'q1-e', text: 'No execution issues', isCorrect: false, points: 0, feedback: 'Wrong - $25M annual loss is significant.' },
          { id: 'q1-f', text: 'Execution not important', isCorrect: false, points: 0, feedback: 'Wrong - execution drives sales and customer satisfaction.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify lost sales', 'Out-of-stock impact', 'Promotion execution']
      },
      {
        question: 'What is your current store operations process? How do you manage tasks and track completion?',
        purpose: 'Understand current process',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Paper-based task lists - store managers print daily tasks, no visibility or accountability', isCorrect: true, points: 4, feedback: 'Excellent - identified manual process limitation.' },
          { id: 'q2-b', text: 'Store managers spend 20 hours/week on paperwork - time not spent on customers or execution', isCorrect: true, points: 3, feedback: 'Good - quantified productivity loss.' },
          { id: 'q2-c', text: 'No real-time communication - rely on email and phone calls, slow and inefficient', isCorrect: true, points: 3, feedback: 'Good - identified communication gap.' },
          { id: 'q2-d', text: 'Cannot track task completion or compliance - no data on what gets done', isCorrect: true, points: 3, feedback: 'Good - identified visibility gap.' },
          { id: 'q2-e', text: 'Fully digital operations', isCorrect: false, points: 0, feedback: 'Wrong - currently paper-based.' },
          { id: 'q2-f', text: 'No process issues', isCorrect: false, points: 0, feedback: 'Wrong - paper-based process is major limitation.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Paper-based', 'Productivity loss', 'No visibility']
      },
      {
        question: 'What types of tasks do store managers need to execute? What is most critical?',
        purpose: 'Identify task requirements',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Merchandising tasks: set up promotional displays, endcaps, seasonal resets - drive sales', isCorrect: true, points: 4, feedback: 'Excellent - identified merchandising priority.' },
          { id: 'q3-b', text: 'Inventory tasks: check out-of-stocks, order products, receive deliveries - ensure availability', isCorrect: true, points: 3, feedback: 'Good - identified inventory management.' },
          { id: 'q3-c', text: 'Compliance tasks: food safety checks, temperature logs, cleaning schedules - regulatory requirements', isCorrect: true, points: 3, feedback: 'Good - identified compliance needs.' },
          { id: 'q3-d', text: 'Communication tasks: read announcements, acknowledge policies, provide feedback - two-way communication', isCorrect: true, points: 3, feedback: 'Good - identified communication requirements.' },
          { id: 'q3-e', text: 'Only need basic task lists', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive task management required.' },
          { id: 'q3-f', text: 'Tasks not important', isCorrect: false, points: 0, feedback: 'Wrong - task execution drives sales and compliance.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Merchandising', 'Inventory', 'Compliance']
      },
      {
        question: 'What is your out-of-stock situation? How does it impact sales and customer satisfaction?',
        purpose: 'Quantify out-of-stock impact',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Out-of-stocks cost $15M annually - customers leave without buying or switch to competitors', isCorrect: true, points: 4, feedback: 'Excellent - quantified out-of-stock cost.' },
          { id: 'q4-b', text: '8% out-of-stock rate on promoted items - customers frustrated when advertised items unavailable', isCorrect: true, points: 3, feedback: 'Good - quantified promotion out-of-stock rate.' },
          { id: 'q4-c', text: 'Cannot identify out-of-stocks in real-time - rely on customer complaints', isCorrect: true, points: 3, feedback: 'Good - identified visibility gap.' },
          { id: 'q4-d', text: 'Customer satisfaction declining due to out-of-stocks - losing loyal customers', isCorrect: true, points: 3, feedback: 'Good - identified customer impact.' },
          { id: 'q4-e', text: 'No out-of-stock issues', isCorrect: false, points: 0, feedback: 'Wrong - $15M annual cost from out-of-stocks.' },
          { id: 'q4-f', text: 'Out-of-stocks not preventable', isCorrect: false, points: 0, feedback: 'Wrong - mobile task management can reduce by 50%.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['$15M cost', '8% out-of-stock rate', 'Customer impact']
      },
      {
        question: 'What is your promotion execution situation? How many promotions are missed or set up late?',
        purpose: 'Assess promotion execution',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Missed promotions cost $10M annually - displays not set up on time or at all', isCorrect: true, points: 4, feedback: 'Excellent - quantified promotion execution cost.' },
          { id: 'q5-b', text: '30% of promotions set up late or incorrectly - lose first few days of promotion', isCorrect: true, points: 3, feedback: 'Good - quantified promotion execution rate.' },
          { id: 'q5-c', text: 'No way to verify promotion compliance - rely on store manager self-reporting', isCorrect: true, points: 3, feedback: 'Good - identified verification gap.' },
          { id: 'q5-d', text: 'Vendors complaining about poor promotion execution - threatening to reduce support', isCorrect: true, points: 3, feedback: 'Good - identified vendor relationship impact.' },
          { id: 'q5-e', text: 'Perfect promotion execution', isCorrect: false, points: 0, feedback: 'Wrong - 30% of promotions set up late.' },
          { id: 'q5-f', text: 'Promotions not important', isCorrect: false, points: 0, feedback: 'Wrong - promotions drive $10M+ in sales.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['$10M cost', '30% late', 'No verification']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Digital Officer is executive sponsor, focused on store execution and digital transformation', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'VP IT Operations is supporter, concerned about mobile infrastructure and device management', isCorrect: true, points: 3, feedback: 'Good - identified IT stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated $15M sales increase from better execution', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Store managers are end users - need easy-to-use mobile app, concerned about change', isCorrect: true, points: 3, feedback: 'Good - identified end user concerns.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - Chief Digital Officer is sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Chief Digital Officer sponsor', 'CFO budget authority', 'Store manager adoption']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any competitive or customer pressures?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '8-month implementation across 150 stores, board-mandated store operations improvement', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Holiday season in 6 months - need better execution for peak sales period', isCorrect: true, points: 3, feedback: 'Good - identified seasonal driver.' },
          { id: 'q7-c', text: 'Competitors have digital store operations - losing market share', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q7-d', text: 'Vendor selection in 4 weeks, phased rollout starting with pilot stores', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 2+ years', isCorrect: false, points: 0, feedback: 'Wrong - 8-month timeline with board mandate.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and competitive pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Holiday season', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$4M-$6M capital budget approved by board for mobile task management platform', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires $15M sales increase and 12-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce out-of-stocks $7.5M, improve promotions $5M, productivity $2.5M', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: mobile platform, devices, integration, training, change management', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $4M-$6M.' },
          { id: 'q8-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 11,
        hints: ['Budget approved', 'ROI requirements', 'Business case drivers']
      }
    ],
    expectedFindings: [
      '$25M annual lost sales',
      'Out-of-stocks cost $15M',
      'Missed promotions cost $10M',
      'Paper-based task lists',
      '20 hours/week on paperwork',
      'No task visibility',
      'Budget $4M-$6M approved',
      'Holiday season in 6 months'
    ],
    redFlags: [
      'Budget under $3M insufficient',
      'Timeline under 6 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 150 stores simultaneously'
    ],
    opportunities: [
      'Reduce out-of-stocks $7.5M',
      'Improve promotions $5M',
      'Productivity gains $2.5M',
      'Improve customer satisfaction',
      'Competitive advantage'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we get store managers to adopt a mobile app? Many are not tech-savvy and resistant to change.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'very difficult',
        category: 'skills',
        customResponse: 'Store manager adoption is critical. IBM provides comprehensive change management: (1) Intuitive mobile app - designed for non-technical users, simple and fast, (2) Store manager champions program - early adopters become advocates, (3) Hands-on training - in-store training with ongoing support, (4) Quick wins - show immediate benefits (less paperwork, better execution), (5) Gamification - leaderboards and recognition for top performers. IBM has achieved 95%+ adoption at 1,000+ retailers.',
        responseChoices: [
          { id: 'obj1-a', text: 'Intuitive mobile app designed for non-technical users - simple, fast, easy to learn', isCorrect: true, points: 4, feedback: 'Excellent - addressed usability concern.' },
          { id: 'obj1-b', text: 'Store manager champions program - early adopters become advocates, peer influence', isCorrect: true, points: 3, feedback: 'Good - explained adoption strategy.' },
          { id: 'obj1-c', text: 'Hands-on in-store training with ongoing support - not just classroom training', isCorrect: true, points: 3, feedback: 'Good - described training approach.' },
          { id: 'obj1-d', text: 'Track record: 95%+ store manager adoption at 1,000+ retailers, managers become advocates', isCorrect: true, points: 3, feedback: 'Good - provided adoption track record.' },
          { id: 'obj1-e', text: 'Force managers to use app', isCorrect: false, points: 0, feedback: 'Wrong - voluntary adoption with champions works better.' },
          { id: 'obj1-f', text: 'Adoption not important', isCorrect: false, points: 0, feedback: 'Wrong - adoption is critical for success.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed usability',
          'Explained champions program',
          'Described training',
          'Provided adoption track record'
        ],
        hints: ['Intuitive design', 'Champions program', 'In-store training']
      },
      {
        objection: 'How do we handle poor mobile connectivity in some stores? Tasks will not sync.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Mobile connectivity is a known challenge. IBM provides offline-first architecture: (1) Offline mode - app works without connectivity, syncs when connected, (2) Optimized for low bandwidth - minimal data usage, (3) Automatic sync - seamlessly syncs when connectivity available, (4) Local data storage - tasks and data stored on device, (5) Connectivity monitoring - alerts when sync issues occur. IBM mobile apps work in 99%+ of retail locations.',
        responseChoices: [
          { id: 'obj2-a', text: 'Offline-first architecture - app works without connectivity, syncs automatically when connected', isCorrect: true, points: 4, feedback: 'Excellent - addressed connectivity concern.' },
          { id: 'obj2-b', text: 'Optimized for low bandwidth - minimal data usage, works on 3G/4G cellular', isCorrect: true, points: 3, feedback: 'Good - explained bandwidth optimization.' },
          { id: 'obj2-c', text: 'Local data storage on device - tasks and data available offline', isCorrect: true, points: 3, feedback: 'Good - described offline capability.' },
          { id: 'obj2-d', text: 'Track record: 99%+ successful sync rate across 1,000+ retail locations', isCorrect: true, points: 3, feedback: 'Good - provided connectivity track record.' },
          { id: 'obj2-e', text: 'Requires high-speed WiFi', isCorrect: false, points: 0, feedback: 'Wrong - offline-first works without connectivity.' },
          { id: 'obj2-f', text: 'Connectivity not solvable', isCorrect: false, points: 0, feedback: 'Wrong - offline-first architecture proven.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed connectivity',
          'Explained offline mode',
          'Described sync capability',
          'Provided connectivity track record'
        ],
        hints: ['Offline-first', 'Low bandwidth', 'Automatic sync']
      },
      {
        objection: 'How do we manage 150 stores and 1,500+ mobile devices? Device management will be a nightmare.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Device management is built-in. IBM provides comprehensive MDM: (1) Centralized device management - provision, configure, update all devices remotely, (2) Automatic app updates - no manual updates required, (3) Device security - remote wipe, password policies, encryption, (4) Usage analytics - monitor device health and app usage, (5) 24/7 support - help desk for device issues. IBM manages 100,000+ retail devices globally.',
        responseChoices: [
          { id: 'obj3-a', text: 'Centralized MDM - provision, configure, update all 1,500 devices remotely from headquarters', isCorrect: true, points: 4, feedback: 'Excellent - addressed device management comprehensively.' },
          { id: 'obj3-b', text: 'Automatic app updates - no manual updates, seamless deployment of new features', isCorrect: true, points: 3, feedback: 'Good - explained update capability.' },
          { id: 'obj3-c', text: 'Device security - remote wipe, password policies, encryption, compliance', isCorrect: true, points: 3, feedback: 'Good - described security features.' },
          { id: 'obj3-d', text: 'Track record: IBM manages 100,000+ retail devices globally with 99.9% uptime', isCorrect: true, points: 3, feedback: 'Good - provided device management track record.' },
          { id: 'obj3-e', text: 'Manual device management required', isCorrect: false, points: 0, feedback: 'Wrong - centralized MDM automates management.' },
          { id: 'obj3-f', text: 'Device management not important', isCorrect: false, points: 0, feedback: 'Wrong - device management is critical at scale.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed device management',
          'Explained MDM capability',
          'Described security',
          'Provided scale track record'
        ],
        hints: ['Centralized MDM', 'Automatic updates', 'Remote management']
      },
      {
        objection: 'Your solution costs $5M. Can we start with a pilot of 10 stores to prove ROI before rolling out to all 150 stores?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $300K for 10 stores (8 weeks), (2) Pilot typically shows 40% reduction in out-of-stocks and 25% improvement in promotion execution, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining 140 stores ($4.7M) with proven ROI. Business case shows 11-month payback and $45M three-year benefit vs. $5M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $300K pilot with 10 stores (8 weeks) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 40% reduction in out-of-stocks and 25% improvement in promotions within 8 weeks', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 11-month payback, $45M three-year benefit vs. $5M investment (800% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 150 stores immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
          { id: 'obj4-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Offered phased approach with pilot',
          'Provided pilot cost and timeline',
          'Quantified expected pilot results',
          'Presented strong ROI case'
        ],
        hints: ['Pilot stores approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we measure task completion and compliance? We need visibility into what gets done.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Visibility and analytics are core capabilities. IBM provides comprehensive reporting: (1) Real-time task completion dashboard - see what is done, what is overdue, by store, (2) Compliance scoring - measure execution quality with photo verification, (3) Trend analysis - identify patterns and improvement opportunities, (4) Automated alerts - notify managers of missed tasks or compliance issues, (5) Executive dashboards - roll-up reporting for leadership. IBM provides 50+ standard reports plus custom analytics.',
        responseChoices: [
          { id: 'obj5-a', text: 'Real-time dashboard - see task completion, overdue tasks, compliance by store in real-time', isCorrect: true, points: 4, feedback: 'Excellent - addressed visibility comprehensively.' },
          { id: 'obj5-b', text: 'Compliance scoring with photo verification - measure execution quality, not just completion', isCorrect: true, points: 3, feedback: 'Good - explained quality measurement.' },
          { id: 'obj5-c', text: 'Automated alerts - notify managers of missed tasks or compliance issues proactively', isCorrect: true, points: 3, feedback: 'Good - described proactive monitoring.' },
          { id: 'obj5-d', text: 'Track record: 50+ standard reports plus custom analytics, used by 1,000+ retailers', isCorrect: true, points: 3, feedback: 'Good - provided analytics track record.' },
          { id: 'obj5-e', text: 'No reporting capability', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive reporting and analytics.' },
          { id: 'obj5-f', text: 'Visibility not important', isCorrect: false, points: 0, feedback: 'Wrong - visibility is critical for accountability.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed visibility',
          'Explained compliance scoring',
          'Described automated alerts',
          'Highlighted analytics capability'
        ],
        hints: ['Real-time dashboard', 'Compliance scoring', 'Automated alerts']
      }
    ],
    minimumObjectionsToHandle: 4
  },

  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['watson-studio', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance computing for mobile task management platform, real-time analytics, and AI-powered recommendations across 150 stores',
          configuration: 'Centralized Power E1080 for task management platform and analytics. Mobile app on store devices',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI-powered task prioritization, predictive out-of-stock alerts, and execution recommendations',
          configuration: 'Watson Studio for AI task prioritization, predictive analytics, execution recommendations',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for task data, compliance photos, and execution analytics with fast access',
          configuration: '150TB usable capacity for 150 stores, task data, photos, analytics, encrypted storage',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for task management platform and analytics, (2) Mobile tier: iOS/Android app on 1,500+ store devices, (3) Storage tier: FlashSystem 9500 for task data and photos. IBM Watson Studio provides AI-powered task prioritization and recommendations.',
      sizing: 'Central: 1x Power E1080 (24-core) for platform and analytics. Mobile: 1,500 devices (10 per store). Storage: 150TB FlashSystem',
      deployment: 'Phased: Phase 1 (Weeks 1-8): Pilot with 10 stores. Phase 2 (Weeks 9-20): Scale to 70 stores. Phase 3 (Weeks 21-32): Complete rollout to remaining 70 stores.'
    },
    pricing: {
      hardware: '$2.5M (Power E1080 + 1,500 mobile devices + FlashSystem 9500)',
      software: '$1.5M (IBM mobile task management platform, Watson Studio, MDM, 3-year licenses)',
      services: '$1M (IBM Expert Labs: implementation, integration, training, change management)',
      support: '$150K/year (24x7 support with 4-hour response)',
      total: '$5M initial + $150K/year support',
      financing: 'IBM Flex financing available - $105K/month for 60 months',
      paymentTerms: 'Phased payment: $300K pilot, $2.3M Phase 2, $2.4M Phase 3'
    },
    businessCase: {
      costSavings: '$10M annually (out-of-stocks $7.5M, productivity $2.5M)',
      revenueImpact: '$15M annually (better execution, improved promotions)',
      productivityGains: '$2.5M annually (eliminate paperwork, improve efficiency)',
      riskReduction: 'Improve customer satisfaction, reduce compliance risk, competitive advantage',
      roi: '11 months',
      paybackPeriod: '11 months',
      tco: '3-year TCO: $5M investment vs. $82.5M in benefits (revenue + savings + productivity) = $77.5M net benefit, 800% three-year ROI'
    },
    competitivePositioning: 'IBM mobile task management is the leading retail execution solution with 1,000+ retail deployments. Unlike generic task apps, IBM provides retail-specific workflows, AI-powered prioritization, compliance scoring, and proven integration with retail systems. Power E1080 delivers 3x better performance than x86.',
    nextSteps: [
      'Schedule retail operations workshop with IBM experts',
      'Conduct pilot store selection and baseline measurement',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation in selected stores'
    ],
    requiredElements: [
      'IBM mobile task management platform',
      'Power E1080 for platform and analytics',
      'FlashSystem for task data and photos',
      'Watson Studio for AI prioritization',
      '1,500 mobile devices with MDM',
      'Integration with POS and inventory systems',
      'Store manager training and change management',
      'Real-time dashboards and compliance reporting'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified lost sales ($25M annually)',
        'Identified execution gaps (out-of-stocks $15M, promotions $10M)',
        'Understood current process (paper-based, 20 hours/week)',
        'Identified task requirements (merchandising, inventory, compliance)',
        'Assessed out-of-stock impact (8% rate, customer satisfaction)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($4M-$6M, 8 months)',
        'Identified CFO mandate ($15M sales increase)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed adoption with intuitive app and champions program',
        'Handled connectivity with offline-first architecture',
        'Addressed device management with centralized MDM',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed visibility with real-time dashboards and compliance scoring'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as platform',
        'Included Watson Studio for AI prioritization',
        'Included FlashSystem for data storage',
        'Addressed all pain points (out-of-stocks, promotions, paperwork)',
        'Proposed phased deployment with pilot',
        'Included change management for store managers'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($10M)',
        'Quantified revenue impact ($15M)',
        'Calculated productivity gains ($2.5M)',
        'Calculated ROI (11-month payback, 800% three-year ROI)',
        'Positioned as execution improvement and competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Mobile task management',
      description: 'Design mobile task management platforms for retail store operations with offline capability',
      skillLevel: 'advanced'
    },
    {
      concept: 'Store execution optimization',
      description: 'Implement solutions to reduce out-of-stocks and improve promotion execution',
      skillLevel: 'advanced'
    },
    {
      concept: 'Change management for store managers',
      description: 'Drive adoption of mobile apps with non-technical users through champions and training',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Device management at scale',
      description: 'Manage 1,000+ mobile devices with centralized MDM and automated updates',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Retail execution economics',
      description: 'Quantify ROI from out-of-stock reduction, promotion improvement, and productivity gains',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Mobile task management', 'Store operations', 'Retail execution', 'Out-of-stocks', 'Promotions', 'Store managers'],
    skills: ['Mobile platforms', 'Task management', 'Change management', 'Device management', 'Retail economics'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Retail'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with lost sales ($25M annually) - this is the primary driver',
    'Emphasize out-of-stock cost ($15M) and promotion execution ($10M) as immediate opportunities',
    'Address adoption concerns proactively with intuitive design and champions program',
    'Recommend pilot store approach to de-risk investment and prove ROI',
    'Highlight productivity benefit - eliminate 20 hours/week of paperwork',
    'Position IBM as retail-specific vs. generic task management apps',
    'Build compelling ROI: 11-month payback, 800% three-year ROI, $15M revenue',
    'Chief Digital Officer is champion - focus on execution and digital transformation',
    'VP IT Operations is supporter but concerned about devices - lead with MDM capability',
    'CFO is neutral - build strong business case with $15M sales mandate',
    'Differentiate with proven track record: 1,000+ retail deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address connectivity concerns with offline-first architecture',
    'Highlight holiday season urgency - need better execution for peak sales'
  ]
};

/**
 * Retail Scenario 004: Workforce Management and Scheduling
 * Retail chain needs intelligent workforce management to optimize labor costs and improve employee satisfaction
 */
export const retailScenario004: TrainingScenario = {
  id: 'retail-workforce-004',
  title: 'Retail Chain Needs Intelligent Workforce Management to Optimize Labor Costs and Employee Engagement',
  description: 'A national retail chain with 500 stores and 25,000 employees faces $150M in annual labor costs with 60% employee turnover. Manual scheduling processes take 20 hours per week per store, and poor staffing alignment with customer traffic results in lost sales and overtime costs. They need an intelligent workforce management system with AI-powered scheduling, labor optimization, and employee engagement tools.',
  
  customerProfile: {
    company: 'ValueMart Retail',
    industry: 'Retail',
    size: 'Enterprise (25,000+ employees)',
    revenue: '$3.2B annually',
    employees: 25000,
    location: 'National (500 stores across 45 states)',
    currentInfrastructure: {
      servers: 'On-premises servers with legacy HR systems',
      storage: 'Distributed storage, manual scheduling spreadsheets',
      applications: ['Legacy HRIS', 'Manual scheduling', 'Paper timesheets', 'Disconnected POS'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '10-12 years',
      endOfLife: 'Legacy HRIS approaching end-of-support',
      issues: [
        '$150M annual labor costs with poor optimization',
        '60% employee turnover costing $45M annually',
        'Manual scheduling takes 20 hours per week per store',
        'Poor staffing alignment with customer traffic patterns',
        '$25M annual overtime costs from inefficient scheduling',
        'Labor law compliance violations costing $2M in fines',
        'Low employee engagement and satisfaction',
        'Cannot forecast labor needs accurately'
      ]
    },
    keyStakeholders: [
      {
        name: 'Sarah Martinez',
        role: 'Chief Human Resources Officer',
        priorities: ['Employee retention', 'Labor cost optimization', 'Compliance', 'Employee engagement'],
        concerns: ['Implementation complexity', 'Employee adoption', 'Union relations', 'System integration'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Chen',
        role: 'VP of Store Operations',
        priorities: ['Customer service', 'Store productivity', 'Staffing optimization', 'Sales performance'],
        concerns: ['Store manager adoption', 'Scheduling flexibility', 'Peak season readiness', 'Training requirements'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Jennifer Williams',
        role: 'CFO',
        priorities: ['Labor cost reduction', 'ROI', 'Operational efficiency', 'Compliance risk'],
        concerns: ['Capital investment', 'Payback period', 'Operating costs', 'Business disruption'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'David Thompson',
        role: 'CIO',
        priorities: ['System integration', 'Data security', 'Scalability', 'Mobile capabilities'],
        concerns: ['Legacy system integration', 'Data migration', 'Security compliance', 'Vendor support'],
        influence: 'medium',
        supportLevel: 'supporter'
      }
    ],
    budget: '$8M-$12M for workforce management transformation',
    timeline: '12-month implementation across 500 stores',
    decisionProcess: 'Board approved labor optimization initiative. CHRO is executive sponsor. CFO requires 15% labor cost reduction.'
  },
  
  businessContext: {
    challenges: [
      '$150M annual labor costs with poor optimization',
      '60% employee turnover costing $45M annually',
      'Manual scheduling takes 20 hours per week per store',
      'Poor staffing alignment with customer traffic',
      '$25M annual overtime costs',
      'Labor law compliance violations',
      'Low employee engagement scores (45%)',
      'Cannot forecast labor needs accurately'
    ],
    businessImpact: [
      '$70M annual opportunity from labor optimization',
      '$45M costs from employee turnover',
      '$25M wasted on unnecessary overtime',
      '$2M annual compliance fines',
      '$15M lost sales from understaffing during peak times',
      '10,000 hours per week wasted on manual scheduling'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Implement AI-powered workforce management system',
      'Reduce labor costs by 15% ($22.5M annually)',
      'Improve employee retention to 70% (reduce turnover by 10%)',
      'Automate scheduling to save 10,000 hours per week',
      'Align staffing with customer traffic patterns',
      'Ensure labor law compliance across all locations',
      'Improve employee engagement scores to 75%'
    ],
    competitivePressure: 'Competitors using advanced workforce management are achieving better customer service with lower labor costs. Losing talent to retailers with better scheduling flexibility.',
    regulatoryRequirements: ['FLSA compliance', 'State labor laws', 'Break requirements', 'Overtime regulations', 'Predictive scheduling laws']
  },
  
  discoveryPhase: {
    description: 'Understand workforce management challenges, labor optimization opportunities, and employee engagement needs',
    questions: [
      {
        id: 'retail-workforce-004-q1',
        question: 'What are your biggest challenges with workforce management and scheduling today?',
        purpose: 'Understand current pain points and quantify the business impact',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q1-a',
            text: 'Explore the $150M labor cost structure, $45M turnover costs, and $25M overtime expenses to quantify optimization opportunities',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent! Quantifying the financial impact establishes the business case and helps prioritize solutions. This demonstrates strong business acumen.'
          },
          {
            id: 'q1-b',
            text: 'Understand the 20 hours per week per store spent on manual scheduling and the impact on store manager productivity',
            isCorrect: true,
            points: 3,
            feedback: 'Good approach. Understanding the time burden helps quantify the operational efficiency opportunity and manager pain points.'
          },
          {
            id: 'q1-c',
            text: 'Investigate the 60% turnover rate, root causes, and correlation with scheduling practices and employee satisfaction',
            isCorrect: true,
            points: 3,
            feedback: 'Strong focus on retention. Understanding turnover drivers helps design solutions that improve employee engagement and reduce costs.'
          },
          {
            id: 'q1-d',
            text: 'Assess the $2M in compliance fines and labor law violations to understand regulatory risk and compliance gaps',
            isCorrect: true,
            points: 3,
            feedback: 'Important compliance focus. Understanding regulatory risks helps prioritize compliance features and avoid future penalties.'
          },
          {
            id: 'q1-e',
            text: 'Jump directly to discussing workforce management software features without understanding their specific challenges',
            isCorrect: false,
            points: 0,
            feedback: 'Too solution-focused too early. You need to understand their specific challenges and quantify the business impact before discussing solutions.'
          },
          {
            id: 'q1-f',
            text: 'Focus only on technology capabilities without connecting to business outcomes like labor cost reduction or retention improvement',
            isCorrect: false,
            points: 0,
            feedback: 'Missing the business context. Always connect technology capabilities to specific business outcomes and financial impact.'
          }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q2',
        question: 'How do you currently handle scheduling and what are the biggest inefficiencies?',
        purpose: 'Understand current scheduling processes and automation opportunities',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q2-a',
            text: 'Map the manual scheduling process, understand how managers create schedules, and identify automation opportunities',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent process mapping. Understanding the current workflow helps design an automated solution that fits their needs and maximizes efficiency gains.'
          },
          {
            id: 'q2-b',
            text: 'Understand how they forecast labor needs, align staffing with customer traffic, and handle schedule changes',
            isCorrect: true,
            points: 3,
            feedback: 'Good focus on forecasting and optimization. Understanding their planning process helps design AI-powered scheduling that improves staffing alignment.'
          },
          {
            id: 'q2-c',
            text: 'Explore how employees request time off, swap shifts, and communicate availability, and identify friction points',
            isCorrect: true,
            points: 3,
            feedback: 'Strong employee experience focus. Understanding employee scheduling needs helps design self-service features that improve satisfaction and reduce manager burden.'
          },
          {
            id: 'q2-d',
            text: 'Assess how they handle labor law compliance, break requirements, and overtime rules across different states',
            isCorrect: true,
            points: 3,
            feedback: 'Important compliance focus. Understanding their compliance challenges helps design automated rules that prevent violations and reduce risk.'
          },
          {
            id: 'q2-e',
            text: 'Assume all stores have the same scheduling challenges without understanding location-specific differences',
            isCorrect: false,
            points: 0,
            feedback: 'Too generic. Different stores may have unique challenges based on size, location, labor market, and local regulations. Always understand variations.'
          },
          {
            id: 'q2-f',
            text: 'Focus only on automating the current manual process without exploring opportunities to optimize scheduling logic',
            isCorrect: false,
            points: 0,
            feedback: 'Missing optimization opportunity. Automation should not just replicate manual processes but use AI to optimize staffing, reduce costs, and improve service.'
          }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q3',
        question: 'What is driving your 60% employee turnover rate and how does scheduling impact retention?',
        purpose: 'Understand retention challenges and the role of scheduling in employee satisfaction',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q3-a',
            text: 'Investigate the correlation between scheduling practices (inconsistent hours, last-minute changes, poor work-life balance) and turnover',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent analysis. Understanding how scheduling impacts retention helps design solutions that improve employee satisfaction and reduce turnover costs.'
          },
          {
            id: 'q3-b',
            text: 'Explore employee feedback on scheduling flexibility, shift preferences, and work-life balance concerns',
            isCorrect: true,
            points: 3,
            feedback: 'Good employee-centric approach. Understanding employee needs helps design scheduling features that improve satisfaction and engagement.'
          },
          {
            id: 'q3-c',
            text: 'Assess the $45M annual turnover cost breakdown (recruiting, training, productivity loss) to quantify the retention opportunity',
            isCorrect: true,
            points: 3,
            feedback: 'Strong financial focus. Quantifying turnover costs helps build the business case for investing in employee engagement and retention solutions.'
          },
          {
            id: 'q3-d',
            text: 'Understand how competitors are using scheduling flexibility and employee self-service to attract and retain talent',
            isCorrect: true,
            points: 3,
            feedback: 'Good competitive intelligence. Understanding market practices helps position your solution as a competitive advantage for talent retention.'
          },
          {
            id: 'q3-e',
            text: 'Assume turnover is just a retail industry problem without investigating their specific retention challenges',
            isCorrect: false,
            points: 0,
            feedback: 'Too dismissive. While retail has high turnover, understanding their specific challenges helps design targeted solutions that improve retention.'
          },
          {
            id: 'q3-f',
            text: 'Focus only on compensation and benefits without exploring how scheduling practices impact employee satisfaction',
            isCorrect: false,
            points: 0,
            feedback: 'Missing a key driver. Research shows scheduling flexibility and predictability are major factors in retail employee satisfaction and retention.'
          }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q4',
        question: 'How do you align staffing levels with customer traffic patterns and what are the gaps?',
        purpose: 'Understand demand forecasting and staffing optimization needs',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q4-a',
            text: 'Explore how they forecast customer traffic, analyze historical patterns, and adjust staffing levels accordingly',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent forecasting focus. Understanding their demand planning process helps design AI-powered forecasting that improves staffing accuracy and reduces costs.'
          },
          {
            id: 'q4-b',
            text: 'Assess the $15M lost sales from understaffing during peak times and the impact on customer experience',
            isCorrect: true,
            points: 3,
            feedback: 'Strong business impact focus. Quantifying lost sales from poor staffing helps justify investment in optimization and forecasting capabilities.'
          },
          {
            id: 'q4-c',
            text: 'Understand how they handle seasonal variations, promotional events, and unexpected traffic spikes',
            isCorrect: true,
            points: 3,
            feedback: 'Good focus on variability. Understanding how they handle demand fluctuations helps design flexible scheduling that adapts to changing conditions.'
          },
          {
            id: 'q4-d',
            text: 'Investigate how they measure and optimize labor productivity, sales per labor hour, and service level metrics',
            isCorrect: true,
            points: 3,
            feedback: 'Important metrics focus. Understanding their KPIs helps design analytics that measure and optimize workforce performance.'
          },
          {
            id: 'q4-e',
            text: 'Recommend fixed staffing levels without understanding their traffic patterns and demand variability',
            isCorrect: false,
            points: 0,
            feedback: 'Too rigid. Retail traffic varies significantly by time, day, season, and location. Staffing must be flexible and data-driven.'
          },
          {
            id: 'q4-f',
            text: 'Focus only on reducing labor costs without considering the impact on customer service and sales',
            isCorrect: false,
            points: 0,
            feedback: 'Unbalanced approach. Labor optimization must balance cost reduction with customer service quality and sales performance.'
          }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q5',
        question: 'What labor law compliance challenges are you facing and what are the risks?',
        purpose: 'Understand regulatory compliance requirements and risk exposure',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q5-a',
            text: 'Assess the $2M in annual compliance fines, understand the violations (overtime, breaks, predictive scheduling), and identify root causes',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent risk assessment. Understanding compliance violations helps design automated rules that prevent future penalties and reduce regulatory risk.'
          },
          {
            id: 'q5-b',
            text: 'Explore the complexity of managing different labor laws across 45 states (break requirements, overtime rules, minor restrictions)',
            isCorrect: true,
            points: 3,
            feedback: 'Good focus on complexity. Understanding multi-state compliance challenges helps design a system that automates compliance across jurisdictions.'
          },
          {
            id: 'q5-c',
            text: 'Understand how they currently track and enforce compliance, and identify gaps in their manual processes',
            isCorrect: true,
            points: 3,
            feedback: 'Strong process focus. Understanding current compliance tracking helps design automated monitoring and enforcement that reduces violations.'
          },
          {
            id: 'q5-d',
            text: 'Assess emerging regulations like predictive scheduling laws and their impact on scheduling practices and costs',
            isCorrect: true,
            points: 3,
            feedback: 'Forward-thinking approach. Understanding emerging regulations helps design a system that adapts to changing compliance requirements.'
          },
          {
            id: 'q5-e',
            text: 'Assume labor law compliance is the same across all states without understanding jurisdiction-specific requirements',
            isCorrect: false,
            points: 0,
            feedback: 'Dangerous assumption. Labor laws vary significantly by state and locality. Always understand jurisdiction-specific requirements.'
          },
          {
            id: 'q5-f',
            text: 'Treat compliance as a checkbox feature without understanding the financial and reputational risks of violations',
            isCorrect: false,
            points: 0,
            feedback: 'Underestimating risk. Compliance violations can result in significant fines, lawsuits, and reputational damage. Always emphasize risk mitigation.'
          }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q6',
        question: 'How do you measure employee engagement and what role does scheduling play?',
        purpose: 'Understand employee satisfaction drivers and engagement metrics',
        category: 'business-value',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q6-a',
            text: 'Explore the 45% employee engagement score, understand the drivers, and assess how scheduling impacts satisfaction',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent engagement focus. Understanding satisfaction drivers helps design scheduling features that improve employee experience and retention.'
          },
          {
            id: 'q6-b',
            text: 'Investigate employee feedback on scheduling predictability, flexibility, work-life balance, and shift preferences',
            isCorrect: true,
            points: 3,
            feedback: 'Good employee-centric approach. Understanding scheduling preferences helps design self-service features that improve satisfaction.'
          },
          {
            id: 'q6-c',
            text: 'Assess the correlation between engagement scores, turnover rates, and customer satisfaction metrics',
            isCorrect: true,
            points: 3,
            feedback: 'Strong analytical approach. Understanding the engagement-retention-performance connection helps build the business case for employee experience investments.'
          },
          {
            id: 'q6-d',
            text: 'Explore how competitors are using scheduling flexibility and mobile tools to improve employee engagement',
            isCorrect: true,
            points: 3,
            feedback: 'Good competitive intelligence. Understanding market practices helps position your solution as a competitive advantage for talent attraction and retention.'
          },
          {
            id: 'q6-e',
            text: 'Assume employee engagement is not important for retail workers without understanding its impact on performance',
            isCorrect: false,
            points: 0,
            feedback: 'Dangerous assumption. Research shows engaged retail employees deliver better customer service, have lower turnover, and drive higher sales.'
          },
          {
            id: 'q6-f',
            text: 'Focus only on operational efficiency without considering employee experience and satisfaction',
            isCorrect: false,
            points: 0,
            feedback: 'Unbalanced approach. Workforce management must balance operational efficiency with employee experience to achieve sustainable results.'
          }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q7',
        question: 'What are your integration requirements with existing HR, payroll, and POS systems?',
        purpose: 'Understand technical integration needs and data flow requirements',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q7-a',
            text: 'Map the data flow between workforce management, HRIS, payroll, time & attendance, and POS systems',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent integration planning. Understanding data flows helps design seamless integrations that eliminate manual data entry and ensure accuracy.'
          },
          {
            id: 'q7-b',
            text: 'Understand their legacy HRIS capabilities, limitations, and integration options (APIs, file transfers, manual)',
            isCorrect: true,
            points: 3,
            feedback: 'Good technical assessment. Understanding legacy system capabilities helps design realistic integration approaches that work with their infrastructure.'
          },
          {
            id: 'q7-c',
            text: 'Explore how they currently sync employee data, schedules, time punches, and payroll information across systems',
            isCorrect: true,
            points: 3,
            feedback: 'Strong process focus. Understanding current data sync processes helps identify automation opportunities and reduce manual effort.'
          },
          {
            id: 'q7-d',
            text: 'Assess their mobile requirements for employees and managers to access schedules, request time off, and communicate',
            isCorrect: true,
            points: 3,
            feedback: 'Important mobile focus. Understanding mobile needs helps design user-friendly apps that improve adoption and employee satisfaction.'
          },
          {
            id: 'q7-e',
            text: 'Recommend replacing all their existing systems without understanding integration requirements and constraints',
            isCorrect: false,
            points: 0,
            feedback: 'Too disruptive and expensive. Most organizations prefer to integrate with existing systems rather than replace everything. Always explore integration first.'
          },
          {
            id: 'q7-f',
            text: 'Assume integration is simple without understanding their legacy systems, data quality, and technical constraints',
            isCorrect: false,
            points: 0,
            feedback: 'Underestimating complexity. Legacy system integration can be challenging. Always assess technical feasibility and plan for data migration and testing.'
          }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15
      },
      {
        id: 'retail-workforce-004-q8',
        question: 'What are your goals for this workforce management initiative and how will you measure success?',
        purpose: 'Understand success criteria and establish measurable outcomes',
        category: 'business-value',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          {
            id: 'q8-a',
            text: 'Establish specific targets: 15% labor cost reduction ($22.5M), 10% turnover reduction, 75% engagement score, zero compliance violations',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent goal setting. Specific, measurable targets help design the solution, track progress, and demonstrate ROI. This shows strong business partnership.'
          },
          {
            id: 'q8-b',
            text: 'Understand their timeline expectations, phased rollout approach, and success criteria for each phase',
            isCorrect: true,
            points: 3,
            feedback: 'Good implementation planning. Understanding phasing helps design a rollout strategy that minimizes risk and builds momentum.'
          },
          {
            id: 'q8-c',
            text: 'Explore how they will measure ROI, track adoption, and monitor key metrics like labor productivity and employee satisfaction',
            isCorrect: true,
            points: 3,
            feedback: 'Strong measurement focus. Understanding their metrics helps design analytics and dashboards that track progress and demonstrate value.'
          },
          {
            id: 'q8-d',
            text: 'Assess stakeholder alignment on goals, priorities, and success criteria to ensure unified vision',
            isCorrect: true,
            points: 3,
            feedback: 'Important alignment focus. Understanding stakeholder priorities helps address concerns and build consensus around the initiative.'
          },
          {
            id: 'q8-e',
            text: 'Propose generic goals without understanding their specific business priorities and constraints',
            isCorrect: false,
            points: 0,
            feedback: 'Too generic. Goals must be specific to their business context, priorities, and constraints. Always customize based on their situation.'
          },
          {
            id: 'q8-f',
            text: 'Focus only on technology implementation without defining business outcomes and success metrics',
            isCorrect: false,
            points: 0,
            feedback: 'Missing the business focus. Technology is a means to an end. Always define business outcomes and how you will measure success.'
          }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10
      }
    ]
  },
  
  objectionPhase: {
    description: 'Address concerns about workforce management implementation, costs, and change management',
    objections: [
      {
        id: 'retail-workforce-004-obj1',
        objection: 'Workforce management systems are expensive and the ROI is unclear. How can we justify the investment?',
        category: 'cost',
        severity: 'high',
        stakeholder: 'CFO',
        context: 'CFO is concerned about the capital investment and wants clear ROI justification',
        idealResponse: '',
        alternateResponses: [],
        responseChoices: [
          {
            id: 'obj1-a',
            text: 'Present detailed ROI analysis: $22.5M labor cost savings, $13.5M turnover reduction, $2M compliance savings = $38M annual benefit vs. $10M investment = 3.8x ROI, 3-month payback',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent financial justification. Detailed ROI with specific savings and payback period addresses cost concerns and demonstrates strong business value.'
          },
          {
            id: 'obj1-b',
            text: 'Highlight the $70M annual opportunity from labor optimization and the cost of inaction (continued waste, fines, turnover)',
            isCorrect: true,
            points: 3,
            feedback: 'Good opportunity framing. Emphasizing the cost of inaction helps justify investment and creates urgency.'
          },
          {
            id: 'obj1-c',
            text: 'Propose phased implementation starting with high-ROI stores to prove value before full rollout',
            isCorrect: true,
            points: 3,
            feedback: 'Smart risk mitigation. Phased approach reduces upfront investment and allows you to prove ROI before scaling.'
          },
          {
            id: 'obj1-d',
            text: 'Share case studies of similar retailers achieving 15-20% labor cost reduction and 30-40% turnover improvement',
            isCorrect: true,
            points: 3,
            feedback: 'Good social proof. Relevant case studies help build confidence in the ROI and demonstrate proven results.'
          },
          {
            id: 'obj1-e',
            text: 'Dismiss cost concerns by saying "you have to spend money to make money" without providing specific ROI analysis',
            isCorrect: false,
            points: 0,
            feedback: 'Too dismissive. CFOs need detailed financial justification with specific savings, costs, and payback period. Always provide concrete ROI analysis.'
          },
          {
            id: 'obj1-f',
            text: 'Focus only on technology features without connecting to financial outcomes and business value',
            isCorrect: false,
            points: 0,
            feedback: 'Missing the business case. Always connect technology capabilities to specific financial outcomes and ROI that matter to the CFO.'
          }
        ],
        correctChoiceIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 20
      },
      {
        id: 'retail-workforce-004-obj2',
        objection: 'Our store managers are used to creating schedules manually. They will resist automated scheduling.',
        category: 'skills',
        severity: 'high',
        stakeholder: 'VP of Store Operations',
        context: 'VP is concerned about store manager adoption and resistance to change',
        idealResponse: '',
        alternateResponses: [],
        responseChoices: [
          {
            id: 'obj2-a',
            text: 'Emphasize that AI-powered scheduling saves managers 20 hours per week, giving them more time for customer service and team development',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent benefit framing. Showing how automation helps managers focus on higher-value activities addresses resistance and builds support.'
          },
          {
            id: 'obj2-b',
            text: 'Highlight that managers retain control and can override AI recommendations, but get better starting point and optimization suggestions',
            isCorrect: true,
            points: 3,
            feedback: 'Good balance of automation and control. Emphasizing manager control while providing AI assistance reduces resistance and builds confidence.'
          },
          {
            id: 'obj2-c',
            text: 'Propose comprehensive training program, pilot stores, and manager champions to drive adoption and share best practices',
            isCorrect: true,
            points: 3,
            feedback: 'Strong change management approach. Structured training and champions help drive adoption and address concerns through peer support.'
          },
          {
            id: 'obj2-d',
            text: 'Share success stories from pilot stores where managers embraced the system and achieved better results with less effort',
            isCorrect: true,
            points: 3,
            feedback: 'Good social proof. Real examples from peers help overcome resistance and demonstrate practical benefits.'
          },
          {
            id: 'obj2-e',
            text: 'Tell managers they have no choice and must use the new system whether they like it or not',
            isCorrect: false,
            points: 0,
            feedback: 'Terrible change management. Forcing adoption without addressing concerns creates resistance and sabotage. Always engage and support users.'
          },
          {
            id: 'obj2-f',
            text: 'Assume managers will automatically adopt the system without planning for training, support, and change management',
            isCorrect: false,
            points: 0,
            feedback: 'Underestimating change management. User adoption requires structured training, support, and communication. Always plan for change management.'
          }
        ],
        correctChoiceIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 20
      },
      {
        id: 'retail-workforce-004-obj3',
        objection: 'How will this integrate with our legacy HRIS and payroll systems? Integration is always a nightmare.',
        category: 'technical',
        severity: 'medium',
        stakeholder: 'CIO',
        context: 'CIO is concerned about integration complexity and technical risks',
        idealResponse: '',
        alternateResponses: [],
        responseChoices: [
          {
            id: 'obj3-a',
            text: 'Explain IBM App Connect provides pre-built connectors for major HRIS/payroll systems and can handle custom integrations for legacy systems',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent technical solution. Specific integration capabilities with both standard and custom options address concerns and demonstrate feasibility.'
          },
          {
            id: 'obj3-b',
            text: 'Propose phased integration approach: start with file-based transfers, then move to real-time APIs as systems are modernized',
            isCorrect: true,
            points: 3,
            feedback: 'Smart pragmatic approach. Phased integration reduces risk and allows for system modernization over time.'
          },
          {
            id: 'obj3-c',
            text: 'Highlight IBM professional services experience integrating with legacy systems and provide similar customer references',
            isCorrect: true,
            points: 3,
            feedback: 'Good credibility building. Demonstrating experience with similar integrations reduces perceived risk and builds confidence.'
          },
          {
            id: 'obj3-d',
            text: 'Offer integration assessment and proof of concept to validate technical feasibility before full commitment',
            isCorrect: true,
            points: 3,
            feedback: 'Strong risk mitigation. POC validates integration feasibility and reduces technical uncertainty before major investment.'
          },
          {
            id: 'obj3-e',
            text: 'Claim integration is simple and will work perfectly without understanding their specific legacy systems',
            isCorrect: false,
            points: 0,
            feedback: 'Overpromising. Legacy system integration can be complex. Always assess specific systems and plan for challenges.'
          },
          {
            id: 'obj3-f',
            text: 'Recommend replacing all legacy systems immediately without considering cost, risk, and business disruption',
            isCorrect: false,
            points: 0,
            feedback: 'Too disruptive and expensive. Most organizations prefer to integrate with existing systems. Always explore integration before replacement.'
          }
        ],
        correctChoiceIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 20
      },
      {
        id: 'retail-workforce-004-obj4',
        objection: 'We have union contracts that specify scheduling rules. Will this system comply with union agreements?',
        category: 'risk',
        severity: 'high',
        stakeholder: 'Chief Human Resources Officer',
        context: 'CHRO is concerned about union relations and contract compliance',
        idealResponse: '',
        alternateResponses: [],
        responseChoices: [
          {
            id: 'obj4-a',
            text: 'Explain the system can be configured with union contract rules (seniority, shift bidding, overtime distribution) to ensure compliance',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent compliance focus. Demonstrating configurable rules that enforce union contracts addresses concerns and shows flexibility.'
          },
          {
            id: 'obj4-b',
            text: 'Propose involving union representatives in system design and testing to ensure it meets contract requirements and builds trust',
            isCorrect: true,
            points: 3,
            feedback: 'Smart stakeholder management. Involving unions early builds trust and ensures the system meets their requirements.'
          },
          {
            id: 'obj4-c',
            text: 'Highlight how automated compliance reduces grievances and disputes by consistently applying contract rules',
            isCorrect: true,
            points: 3,
            feedback: 'Good benefit framing. Showing how automation improves compliance and reduces disputes appeals to both management and unions.'
          },
          {
            id: 'obj4-d',
            text: 'Share examples of unionized retailers successfully implementing workforce management while maintaining union relationships',
            isCorrect: true,
            points: 3,
            feedback: 'Strong social proof. Relevant examples demonstrate that workforce management can work in union environments.'
          },
          {
            id: 'obj4-e',
            text: 'Dismiss union concerns and say the system will override union contracts to optimize scheduling',
            isCorrect: false,
            points: 0,
            feedback: 'Dangerous approach. Violating union contracts creates legal risk and labor disputes. Always respect and comply with union agreements.'
          },
          {
            id: 'obj4-f',
            text: 'Assume union contracts are not important without understanding their impact on scheduling and labor relations',
            isCorrect: false,
            points: 0,
            feedback: 'Underestimating risk. Union contracts are legally binding and violations can result in grievances, strikes, and legal action. Always understand and comply.'
          }
        ],
        correctChoiceIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 20
      },
      {
        id: 'retail-workforce-004-obj5',
        objection: 'We are heading into holiday season. We cannot disrupt operations during our busiest time of year.',
        category: 'timing',
        severity: 'medium',
        stakeholder: 'VP of Store Operations',
        context: 'VP is concerned about implementation timing and operational disruption',
        idealResponse: '',
        alternateResponses: [],
        responseChoices: [
          {
            id: 'obj5-a',
            text: 'Propose post-holiday implementation timeline: planning and pilot in Q1, rollout in Q2-Q3, ready for next holiday season',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent timing strategy. Respecting their busy season while planning for future peak periods shows business understanding and reduces risk.'
          },
          {
            id: 'obj5-b',
            text: 'Highlight the urgency: without better workforce management, they will face the same challenges next holiday season',
            isCorrect: true,
            points: 3,
            feedback: 'Good urgency framing. Emphasizing the cost of delay helps justify starting planning now to be ready for next peak season.'
          },
          {
            id: 'obj5-c',
            text: 'Propose using holiday season to baseline current performance and identify improvement opportunities for next year',
            isCorrect: true,
            points: 3,
            feedback: 'Smart approach. Using current season as baseline helps quantify improvement opportunities and builds the business case.'
          },
          {
            id: 'obj5-d',
            text: 'Suggest starting with non-peak stores or regions to prove value without disrupting critical holiday operations',
            isCorrect: true,
            points: 3,
            feedback: 'Good risk mitigation. Phased approach allows you to prove value in lower-risk environments before peak season.'
          },
          {
            id: 'obj5-e',
            text: 'Insist on immediate implementation regardless of holiday season impact because the system is important',
            isCorrect: false,
            points: 0,
            feedback: 'Tone deaf. Disrupting operations during peak season creates risk and resistance. Always respect their business cycles and timing constraints.'
          },
          {
            id: 'obj5-f',
            text: 'Accept the delay without creating urgency or proposing alternative approaches to move forward',
            isCorrect: false,
            points: 0,
            feedback: 'Too passive. While respecting timing constraints, you should propose alternative approaches to maintain momentum and prepare for future implementation.'
          }
        ],
        correctChoiceIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 20
      }
    ]
  },
  
  recommendationPhase: {
    products: ['IBM Watson Orchestrate', 'IBM Cloud Pak for Data', 'IBM App Connect'],
    solution: 'Implement IBM Watson Orchestrate for AI-powered workforce management with intelligent scheduling, labor optimization, and employee self-service. Integrate with IBM Cloud Pak for Data for workforce analytics and IBM App Connect for seamless integration with existing HRIS and payroll systems.',
    businessCase: {
      investment: '$8M-$12M over 12 months',
      expectedROI: '380% ROI with 3-month payback period',
      benefits: [
        '$22.5M annual labor cost savings (15% reduction)',
        '$13.5M annual turnover cost reduction (30% improvement)',
        '$2M annual compliance savings (zero violations)',
        '10,000 hours per week saved on manual scheduling',
        '$15M recovered sales from better staffing alignment',
        'Improved employee engagement from 45% to 75%'
      ],
      timeline: '12-month implementation across 500 stores',
      risks: ['Store manager adoption', 'Legacy system integration', 'Union relations', 'Peak season timing'],
      mitigationStrategies: [
        'Comprehensive training and change management program',
        'Phased rollout with pilot stores and champions',
        'Integration assessment and proof of concept',
        'Union involvement in design and testing',
        'Post-holiday implementation timeline'
      ]
    }
  },
  
  scoringCriteria: {
    passingScore: 70,
    categories: {
      discovery: {
        weight: 40,
        description: 'Understanding workforce management challenges, labor optimization opportunities, and employee engagement needs'
      },
      objectionHandling: {
        weight: 40,
        description: 'Addressing cost concerns, change management, integration challenges, union compliance, and timing constraints'
      },
      recommendation: {
        weight: 20,
        description: 'Proposing comprehensive workforce management solution with clear ROI and implementation approach'
      }
    }
  },
  
  learningObjectives: [
    'Quantify labor optimization opportunities and build financial business case',
    'Understand the connection between scheduling practices and employee retention',
    'Design AI-powered scheduling that balances cost optimization with service quality',
    'Address change management and user adoption challenges',
    'Navigate union relations and contract compliance requirements',
    'Plan phased implementation that respects business cycles and timing constraints'
  ],
  
  coachingTips: [
    'Always quantify the financial impact of labor inefficiency and turnover',
    'Connect scheduling practices to employee satisfaction and retention',
    'Balance labor cost optimization with customer service quality',
    'Address change management early - user adoption is critical',
    'Respect union contracts and involve unions in the process',
    'Plan implementation timing around business cycles and peak seasons',
    'Emphasize the time savings for store managers, not just cost reduction',
    'Highlight compliance automation to reduce regulatory risk'
  ]
};



// Update exports
export const retailScenarios = [
  retailScenario001,
  retailScenario002,
  retailScenario003
];
