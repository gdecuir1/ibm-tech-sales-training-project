// Banking & Financial Services Training Scenarios
// Focus: Core banking, fraud detection, regulatory compliance, digital transformation

import { TrainingScenario } from '../../types/scenarios';

export const bankingScenario001: TrainingScenario = {
  id: 'banking-fraud-detection-001',
  title: 'Regional Bank Needs Real-Time Fraud Detection',
  description: 'A mid-sized regional bank with 2M customers is losing $15M annually to fraud. Their current batch-based fraud detection system has 24-hour delays, allowing fraudsters to drain accounts before detection. They need real-time fraud prevention with AI/ML capabilities.',
  
  customerProfile: {
    company: 'First Regional Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$1.2B annually',
    employees: 3200,
    location: 'Southeast USA',
    currentInfrastructure: {
      servers: '20 x86 servers running fraud detection batch jobs',
      storage: 'NetApp FAS8200 (aging, 4 years old)',
      applications: ['Core banking system (Fiserv)', 'Fraud detection (legacy rules-based)', 'Customer portal', 'Mobile banking app'],
      operatingSystem: 'Red Hat Enterprise Linux 7',
      virtualization: 'VMware vSphere 6.7',
      age: '4-5 years',
      endOfLife: '12 months',
      issues: [
        'Fraud detection runs in 24-hour batches - too slow',
        'False positive rate of 40% - overwhelming fraud team',
        'No AI/ML capabilities - only rules-based detection',
        'Cannot handle real-time transaction volumes (10K TPS)',
        'Storage performance bottleneck for analytics',
        'Regulatory compliance concerns (PCI-DSS, SOX)'
      ]
    },
    keyStakeholders: [
      {
        name: 'Jennifer Martinez',
        role: 'CIO',
        priorities: ['Real-time fraud prevention', 'Regulatory compliance', 'Customer experience'],
        concerns: ['Implementation risk', 'Integration complexity', 'Cost'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Robert Chen',
        role: 'Chief Risk Officer',
        priorities: ['Fraud loss reduction', 'False positive reduction', 'Regulatory compliance'],
        concerns: ['AI/ML accuracy', 'Explainability for regulators', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'David Thompson',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Performance', 'Operational simplicity'],
        concerns: ['Team skills for new technology', 'Integration with existing systems', 'Downtime during migration'],
        influence: 'medium',
        supportLevel: 'skeptic'
      },
      {
        name: 'Maria Rodriguez',
        role: 'CFO',
        priorities: ['ROI', 'Cost reduction', 'Fraud loss prevention'],
        concerns: ['High upfront cost', 'Ongoing operational costs', 'Payback period'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$3M-$5M',
    timeline: '6-9 months',
    decisionProcess: 'Board approval required for investments >$3M. CIO, CRO, and CFO must all support.'
  },
  
  businessContext: {
    challenges: [
      'Losing $15M annually to fraud (credit card, ACH, wire fraud)',
      'Fraud detection runs in 24-hour batches - fraudsters drain accounts before detection',
      'False positive rate of 40% - fraud team overwhelmed with alerts',
      'Cannot detect sophisticated fraud patterns - only simple rules',
      'Customer complaints about legitimate transactions being blocked',
      'Regulatory pressure to improve fraud controls (OCC examination findings)',
      'Competitors have real-time fraud prevention - losing customers',
      'Current system cannot scale to handle growing transaction volumes',
      'No AI/ML capabilities - falling behind industry standards',
      'Storage performance bottleneck prevents real-time analytics'
    ],
    businessImpact: [
      'Direct fraud losses: $15M annually',
      'False positive costs: $3M annually (customer service, lost transactions)',
      'Regulatory fines risk: $5M+ if controls not improved',
      'Customer attrition: 5% of customers leaving due to fraud concerns',
      'Reputation damage from fraud incidents',
      'Competitive disadvantage - losing new customer acquisitions',
      'Fraud team burnout from alert overload',
      'Cannot launch new digital products due to fraud risk'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Reduce fraud losses by 70% within 18 months',
      'Achieve <5% false positive rate',
      'Enable real-time fraud prevention for all channels',
      'Meet regulatory requirements (PCI-DSS, SOX, OCC)',
      'Launch new digital banking products safely',
      'Improve customer experience (fewer false declines)',
      'Build AI/ML capabilities for future use cases'
    ],
    competitivePressure: 'Top 3 competitors all have real-time fraud prevention. Losing market share.',
    regulatoryRequirements: ['PCI-DSS compliance', 'SOX compliance', 'OCC examination requirements', 'State banking regulations'],
    recentEvents: [
      'OCC examination cited inadequate fraud controls 6 months ago',
      'Major fraud incident 3 months ago - $2M loss from single attack',
      'Board mandated fraud prevention improvement',
      'Competitor launched real-time fraud prevention - marketing advantage'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'Can you quantify your current fraud losses and the business impact? What types of fraud are most costly?',
        purpose: 'Establish baseline and identify biggest pain points',
        category: 'pain-point',
        idealResponse: '$15M annually in direct losses. Credit card fraud is 60%, ACH fraud 25%, wire fraud 15%. Plus $3M in false positive costs. Board is demanding improvement.',
        alternateResponses: [
          'Fraud is a major problem costing millions',
          'We lose money to fraud every day'
        ],
        followUpQuestions: [
          'What percentage of fraud is detected vs. undetected?',
          'How long does it take to detect fraud currently?',
          'What is your false positive rate?'
        ],
        scoringWeight: 15,
        hints: ['Quantify the problem', 'Identify fraud types', 'Understand business impact']
      },
      {
        question: 'What is your current fraud detection process? How long does it take from transaction to detection?',
        purpose: 'Understand current state and identify latency issues',
        category: 'technical',
        idealResponse: 'Batch-based system runs every 24 hours. By the time we detect fraud, accounts are already drained. We need real-time detection - milliseconds, not hours.',
        alternateResponses: [
          'Our system is too slow',
          'We detect fraud after the damage is done'
        ],
        followUpQuestions: [
          'What transaction volumes do you process?',
          'What is your target detection time?',
          'Do you need real-time blocking or just alerting?'
        ],
        scoringWeight: 12,
        hints: ['Identify latency problem', 'Understand volume requirements', 'Real-time is key']
      },
      {
        question: 'What is your false positive rate? How does this impact your fraud team and customers?',
        purpose: 'Identify false positive pain and AI/ML opportunity',
        category: 'pain-point',
        idealResponse: '40% false positive rate. Fraud team is overwhelmed - can\'t investigate all alerts. Customers complain about legitimate transactions being blocked. We need AI/ML to reduce false positives.',
        alternateResponses: [
          'Too many false alerts',
          'Customers are frustrated with blocked transactions'
        ],
        followUpQuestions: [
          'How many fraud analysts do you have?',
          'What is the cost of investigating false positives?',
          'Are you open to AI/ML for fraud detection?'
        ],
        scoringWeight: 12,
        hints: ['False positives are expensive', 'AI/ML can help', 'Customer experience matters']
      },
      {
        question: 'What are your regulatory requirements? Any recent examination findings or compliance concerns?',
        purpose: 'Identify compliance drivers and urgency',
        category: 'business',
        idealResponse: 'OCC examination 6 months ago cited inadequate fraud controls. We must improve or face enforcement action. PCI-DSS and SOX compliance are also critical. Board is very concerned.',
        alternateResponses: [
          'Regulators are pushing us to improve',
          'Compliance is a major concern'
        ],
        followUpQuestions: [
          'What is the timeline for addressing OCC findings?',
          'What specific improvements are required?',
          'Is there risk of fines or enforcement action?'
        ],
        scoringWeight: 10,
        hints: ['Regulatory pressure creates urgency', 'Compliance is non-negotiable', 'Board involvement signals priority']
      },
      {
        question: 'What is your current infrastructure? Any performance bottlenecks or capacity constraints?',
        purpose: 'Understand technical environment and identify infrastructure needs',
        category: 'technical',
        idealResponse: '20 x86 servers, aging NetApp storage. Cannot handle real-time analytics at 10K TPS. Storage IOPS is a bottleneck. Need high-performance infrastructure for AI/ML workloads.',
        alternateResponses: [
          'Our infrastructure is old and slow',
          'We can\'t handle real-time processing'
        ],
        followUpQuestions: [
          'What transaction volumes do you process?',
          'What are your performance requirements?',
          'When is your hardware end-of-life?'
        ],
        scoringWeight: 10,
        hints: ['Infrastructure refresh opportunity', 'Performance is critical', 'AI/ML needs compute power']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$3-5M budget approved. Need solution in 6-9 months. Board approval required. CIO, CRO, and CFO must all support. ROI is critical for CFO.',
        alternateResponses: [
          'We have budget allocated',
          'Board wants this done quickly'
        ],
        followUpQuestions: [
          'What ROI or payback period is required?',
          'Who are the key decision makers?',
          'What could delay or derail this project?'
        ],
        scoringWeight: 8,
        hints: ['Budget is approved - good sign', 'Multiple stakeholders', 'ROI is important']
      },
      {
        question: 'Are you considering any competitors or alternative solutions? What are your evaluation criteria?',
        purpose: 'Understand competitive landscape and decision criteria',
        category: 'business',
        idealResponse: 'Looking at SAS Fraud Management and FICO Falcon. Key criteria: real-time performance, AI/ML accuracy, false positive reduction, regulatory compliance, TCO. Open to best solution.',
        alternateResponses: [
          'We\'re evaluating several vendors',
          'Performance and accuracy are most important'
        ],
        followUpQuestions: [
          'What are the pros and cons of each option?',
          'What would make IBM the preferred choice?',
          'When do you need to make a decision?'
        ],
        scoringWeight: 8,
        hints: ['Competitive situation', 'Understand decision criteria', 'Position IBM strengths']
      },
      {
        question: 'What are your team\'s skills and concerns about implementing a new fraud detection system?',
        purpose: 'Identify skills gaps and implementation concerns',
        category: 'stakeholder',
        idealResponse: 'Team has banking and fraud expertise but limited AI/ML skills. Concerned about integration complexity and learning curve. Need training and professional services support.',
        alternateResponses: [
          'Team is worried about new technology',
          'We need help with implementation'
        ],
        followUpQuestions: [
          'What training would be helpful?',
          'Do you want IBM professional services?',
          'What is your risk tolerance for implementation?'
        ],
        scoringWeight: 7,
        hints: ['Skills are a concern', 'Offer training and services', 'De-risk implementation']
      }
    ],
    expectedFindings: [
      'Fraud losses are significant and quantifiable ($15M+)',
      'Batch processing is too slow - need real-time',
      'False positives are overwhelming the fraud team',
      'Regulatory pressure creates urgency',
      'Infrastructure is aging and inadequate',
      'Budget is approved - qualified opportunity',
      'Competitive evaluation in progress',
      'Team needs training and support'
    ],
    redFlags: [
      'If budget is under $2M - not enough for complete solution',
      'If timeline is less than 4 months - too aggressive',
      'If they\'re committed to a competitor',
      'If no regulatory pressure - less urgency',
      'If fraud losses are not quantified - may not be real pain'
    ],
    opportunities: [
      'Fraud loss reduction: $10M+ annually (70% reduction)',
      'False positive reduction: $2M+ annually (from 40% to <5%)',
      'Regulatory compliance: avoid fines and enforcement action',
      'Real-time fraud prevention: competitive advantage',
      'AI/ML platform: foundation for future use cases',
      'Infrastructure modernization: Power + FlashSystem + Watson',
      'Customer experience improvement: fewer false declines'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'IBM is more expensive than SAS or FICO. We need to minimize costs.',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        bestResponseId: 'watson-fraud-objection-cost',
        scoringCriteria: [
          'Addressed TCO vs acquisition cost',
          'Quantified fraud loss reduction ($10M+ annually)',
          'Mentioned false positive savings ($2M+ annually)',
          'Calculated ROI (6-12 months payback)',
          'Compared to cost of doing nothing (regulatory fines, continued losses)',
          'Offered TCO analysis'
        ],
        hints: [
          'Focus on fraud loss reduction - $10M+ annually',
          'False positive reduction saves $2M+ annually',
          'ROI is 6-12 months - very fast payback',
          'Cost of doing nothing: $15M+ annually plus regulatory risk'
        ]
      },
      {
        objection: 'We\'re concerned about AI/ML accuracy. What if it makes mistakes and blocks legitimate transactions?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'common',
        category: 'technical',
        bestResponseId: 'watson-fraud-objection-accuracy',
        scoringCriteria: [
          'Explained Watson AI/ML accuracy (>95%)',
          'Mentioned false positive reduction (40% to <5%)',
          'Described explainability for regulators',
          'Offered proof of concept to validate accuracy',
          'Provided customer examples (banks using Watson)',
          'Addressed regulatory compliance'
        ],
        hints: [
          'Watson achieves >95% accuracy in fraud detection',
          'Reduces false positives from 40% to <5%',
          'Explainable AI for regulatory compliance',
          'Offer proof of concept to prove accuracy'
        ]
      },
      {
        objection: 'Our team doesn\'t have AI/ML skills. This will be too complex to implement and manage.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'I understand that concern - AI/ML is new for many teams. The good news is that Watson Studio provides a user-friendly interface that fraud analysts can use without deep data science skills. IBM also offers comprehensive training and professional services to support implementation. Many banks have successfully deployed Watson with similar skill levels. We can include training for your team in the proposal, and IBM Consulting can handle the initial implementation. Once deployed, the system is largely automated. Would it help to see a demo of how fraud analysts use the system?',
        scoringCriteria: [
          'Acknowledged the concern',
          'Explained Watson Studio user-friendly interface',
          'Offered training and professional services',
          'Mentioned IBM Consulting support',
          'Provided customer examples',
          'Offered demo to show ease of use'
        ],
        hints: [
          'Watson Studio is designed for business users, not just data scientists',
          'Offer comprehensive training and professional services',
          'IBM Consulting can handle implementation',
          'Show demo to prove ease of use'
        ]
      },
      {
        objection: 'How do we know this will integrate with our core banking system (Fiserv) and existing applications?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Great question - integration is critical. IBM has extensive experience integrating with Fiserv and other core banking systems. Watson can consume data from multiple sources via APIs, message queues, or database connections. We support real-time integration for transaction scoring and batch integration for model training. IBM has pre-built connectors for common banking systems. We can do a technical assessment to map out the integration architecture and identify any challenges. Many banks have successfully integrated Watson with Fiserv. Would you like to see reference architectures from similar implementations?',
        scoringCriteria: [
          'Acknowledged integration importance',
          'Explained Watson integration capabilities',
          'Mentioned pre-built connectors',
          'Offered technical assessment',
          'Provided customer examples with Fiserv',
          'Offered reference architectures'
        ],
        hints: [
          'IBM has extensive banking integration experience',
          'Pre-built connectors for common systems',
          'Offer technical assessment to map integration',
          'Show reference architectures from similar banks'
        ]
      },
      {
        objection: 'What if we implement this and it doesn\'t reduce fraud as promised? We can\'t afford to fail.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'I completely understand - this is a critical investment and failure is not an option. That\'s why I recommend a phased approach with proof of concept first. We can start with a 60-day POC using your historical fraud data to validate accuracy and ROI before full deployment. IBM also offers performance guarantees and success-based pricing options. We have extensive experience with fraud detection - over 200 banks worldwide use Watson for fraud prevention. We can provide references from similar banks who achieved 70%+ fraud reduction. IBM Consulting will be involved throughout to ensure success. Would a POC help de-risk this decision?',
        scoringCriteria: [
          'Acknowledged the concern and risk',
          'Proposed phased approach with POC',
          'Mentioned performance guarantees',
          'Provided customer success examples',
          'Offered references from similar banks',
          'Emphasized IBM Consulting support'
        ],
        hints: [
          'Propose proof of concept to validate before full deployment',
          'Mention performance guarantees and success-based pricing',
          'Provide customer examples with 70%+ fraud reduction',
          'Emphasize IBM Consulting involvement'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: [
      {
        objection: 'Why not just upgrade our current rules-based system instead of moving to AI/ML?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'very difficult',
        category: 'strategy',
        customResponse: 'That\'s a fair question. Rules-based systems work for known fraud patterns, but they have fundamental limitations. Fraudsters constantly evolve their tactics - by the time you write a rule, they\'ve moved on. Rules also generate high false positives because they can\'t understand context. AI/ML learns from patterns in your data and adapts automatically. It can detect sophisticated fraud that rules miss, while dramatically reducing false positives. The banking industry is moving to AI/ML because it\'s simply more effective. Your competitors already have it. Upgrading rules might save money short-term, but you\'ll continue losing $15M annually to fraud and fall further behind. AI/ML is an investment in staying competitive. Would you like to see a comparison of rules-based vs. AI/ML performance?',
        scoringCriteria: [
          'Explained limitations of rules-based systems',
          'Highlighted AI/ML advantages (adaptive, context-aware)',
          'Mentioned competitive pressure',
          'Quantified cost of doing nothing ($15M annually)',
          'Positioned AI/ML as strategic investment',
          'Offered performance comparison'
        ],
        hints: [
          'Rules-based systems can\'t keep up with evolving fraud',
          'AI/ML adapts automatically and reduces false positives',
          'Competitors have AI/ML - you\'re falling behind',
          'Cost of doing nothing: $15M+ annually'
        ]
      }
    ]
  },
  
  recommendationPhase: {
    primaryProduct: 'watson-studio',
    supportingProducts: ['power-e1080', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI/ML platform for real-time fraud detection with explainable AI, pre-built fraud models, and user-friendly interface for fraud analysts.',
          configuration: 'Watson Studio on Cloud Pak for Data, fraud detection models, real-time scoring API, model monitoring and governance',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for real-time transaction processing (10K+ TPS) and AI/ML model training. Proven for banking workloads.',
          configuration: '2x Power E1080, 32-core, 2TB RAM each, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'primary'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'Ultra-low latency storage (<100μs) for real-time fraud scoring and high-performance analytics. Cyber resilience with SafeguardedCopy.',
          configuration: 'FlashSystem 9500, 300TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'primary'
        }
      ],
      architecture: 'Watson Studio on Power E1080 for AI/ML fraud detection, FlashSystem 9500 for high-performance storage, real-time API integration with Fiserv core banking system',
      sizing: 'Sized for 10K transactions per second with <10ms fraud scoring latency. Supports 2M customers with 5-year growth capacity.',
      deployment: 'Phased approach: 1) 60-day POC with historical data, 2) Pilot with 10% of transactions, 3) Full production rollout, 4) Continuous model improvement'
    },
    pricing: {
      hardware: '$2.5M (2x Power E1080 + FlashSystem 9500)',
      software: '$800K (Watson Studio, Cloud Pak for Data, fraud models)',
      services: '$600K (IBM Consulting: POC, implementation, training, 6 months support)',
      support: '$200K/year (24x7 support with 4-hour response)',
      total: '$3.9M initial + $200K/year support',
      financing: 'IBM Flex financing available - $82K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$12M annually (fraud loss reduction $10M, false positive reduction $2M)',
      productivityGains: '$1M annually (fraud team efficiency, automated investigation)',
      riskReduction: 'Avoid regulatory fines ($5M+ risk), meet OCC requirements, PCI-DSS compliance',
      roi: '6 months',
      paybackPeriod: '6 months',
      tco: '3-year TCO: $4.5M investment vs. $45M in fraud losses prevented = $40.5M net benefit'
    },
    competitivePositioning: 'Watson is the ONLY solution that combines real-time fraud detection, explainable AI for regulators, and proven banking performance. SAS and FICO lack explainability and real-time capabilities. IBM Power provides the performance needed for 10K+ TPS that x86 cannot match.',
    nextSteps: [
      'Schedule technical deep-dive with fraud team and IT',
      'Provide detailed ROI analysis and TCO comparison',
      'Arrange reference call with similar bank (fraud reduction success story)',
      'Propose 60-day proof of concept with historical fraud data',
      'Develop detailed integration architecture with Fiserv',
      'Present to Board with CIO, CRO, and CFO'
    ],
    requiredElements: [
      'Must include Watson Studio for AI/ML fraud detection',
      'Must include high-performance infrastructure (Power E1080)',
      'Must include high-performance storage (FlashSystem 9500)',
      'Must address real-time processing (<10ms latency)',
      'Must address regulatory compliance (explainable AI)',
      'Must include POC to validate accuracy and ROI',
      'Must include IBM Consulting services for implementation'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified fraud losses and business impact',
        'Identified batch processing latency problem',
        'Uncovered false positive pain (40% rate)',
        'Identified regulatory pressure (OCC findings)',
        'Understood infrastructure limitations',
        'Qualified budget and timeline',
        'Identified competitive evaluation',
        'Assessed team skills and concerns'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed cost objection with ROI and fraud loss reduction',
        'Handled AI/ML accuracy concern with proof and examples',
        'Addressed skills concern with training and services',
        'Handled integration concern with experience and assessment',
        'Addressed risk concern with POC and phased approach',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Watson Studio as primary solution',
        'Included Power E1080 for high-performance infrastructure',
        'Included FlashSystem 9500 for storage performance',
        'Sized for real-time processing (10K TPS)',
        'Addressed all pain points (fraud, false positives, compliance)',
        'Proposed POC to de-risk decision'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified fraud loss reduction ($10M annually)',
        'Quantified false positive savings ($2M annually)',
        'Calculated ROI (6 months)',
        'Articulated regulatory compliance value',
        'Positioned as strategic competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Real-Time Fraud Detection',
      description: 'How to position AI/ML fraud detection vs. rules-based systems and quantify the business value',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Banking Regulatory Compliance',
      description: 'Understanding PCI-DSS, SOX, OCC requirements and how IBM solutions address them',
      skillLevel: 'intermediate'
    },
    {
      concept: 'AI/ML Explainability',
      description: 'How to address concerns about AI/ML accuracy and explainability for regulators',
      skillLevel: 'advanced'
    },
    {
      concept: 'ROI Calculation for Fraud Prevention',
      description: 'How to quantify fraud loss reduction, false positive savings, and calculate payback period',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Risk Mitigation with POC',
      description: 'How to use proof of concept to de-risk large AI/ML investments',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'fraud-detection', 'ai-ml', 'watson', 'real-time', 'regulatory-compliance', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis', 'risk-mitigation'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    prerequisites: ['Basic understanding of fraud detection', 'Familiarity with Watson AI/ML', 'Banking industry knowledge'],
    relatedScenarios: ['banking-core-modernization-002', 'banking-digital-transformation-003'],
    difficulty: 'intermediate',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying the fraud problem - $15M in losses gets attention',
    'Emphasize real-time detection - batch processing is the core problem',
    'False positives are expensive - $2M+ annually in costs',
    'Regulatory pressure creates urgency - OCC findings are serious',
    'Use ROI to overcome cost objections - 6-month payback is compelling',
    'Offer POC to de-risk the decision - prove accuracy before full deployment',
    'Position Watson as strategic AI/ML platform, not just fraud detection'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying business impact',
    'Not addressing regulatory compliance requirements',
    'Ignoring false positive costs - they\'re significant',
    'Not offering POC to validate accuracy and ROI',
    'Comparing acquisition cost instead of TCO and ROI',
    'Not positioning Watson explainability for regulators',
    'Forgetting to include IBM Consulting services for implementation'
  ],
  
  bestPractices: [
    'Quantify fraud losses and false positive costs early',
    'Emphasize real-time detection as competitive advantage',
    'Use regulatory pressure to create urgency',
    'Propose POC to de-risk and prove value',
    'Calculate ROI with fraud reduction and false positive savings',
    'Position Watson explainability for regulatory compliance',
    'Include IBM Consulting to address implementation concerns',
    'Provide banking customer references with fraud reduction results'
  ],
  
  expertInsights: [
    'Banks are under intense regulatory pressure to improve fraud controls - use this',
    'False positives cost more than most people realize - quantify it',
    'Real-time fraud detection is table stakes now - batch processing is obsolete',
    'AI/ML explainability is critical for banking regulators - Watson has this',
    'POC is essential for fraud detection - banks won\'t buy without proof',
    'Power E1080 performance is critical for real-time fraud scoring at scale',
    'FlashSystem low latency enables real-time analytics that x86 storage cannot match'
  ]
};

// Import additional banking scenarios
import { bankingAdditionalScenarios } from './banking-additional';

export const bankingScenarios: TrainingScenario[] = [
  bankingScenario001,
  ...bankingAdditionalScenarios,
];

// Made with Bob