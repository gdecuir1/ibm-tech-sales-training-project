// Additional Banking & Financial Services Training Scenarios (Scenarios 2-15)
// Comprehensive set covering digital banking, payments, lending, wealth management, and more

import { TrainingScenario } from '../../types/scenarios';

// Scenario 2: Digital Banking Platform Modernization
export const bankingScenario002: TrainingScenario = {
  id: 'banking-digital-platform-002',
  title: 'Community Bank Needs Modern Digital Banking Platform',
  description: 'A community bank with 500K customers is losing market share to digital-first competitors. Their 15-year-old online banking platform has poor mobile experience, limited features, and cannot support open banking APIs. They need a modern digital banking platform to compete.',
  
  customerProfile: {
    company: 'Community First Bank',
    industry: 'Financial Services',
    size: 'Medium (500-1000 employees)',
    revenue: '$450M annually',
    employees: 750,
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '15 x86 servers running legacy web applications',
      storage: 'Dell EMC Unity (5 years old)',
      applications: ['Legacy online banking (15 years old)', 'Mobile app (basic features only)', 'Core banking (Jack Henry Silverlake)', 'Bill pay (third-party)'],
      operatingSystem: 'Windows Server 2016',
      virtualization: 'VMware vSphere 7.0',
      age: '5-15 years',
      endOfLife: '18-24 months',
      issues: [
        'Mobile app rated 2.5 stars - customers complaining',
        'Cannot support mobile check deposit or P2P payments',
        'No open banking APIs - cannot integrate with fintechs',
        'Poor user experience - customers leaving for competitors',
        'Cannot launch new digital products quickly',
        'High maintenance costs for legacy platform',
        'Security vulnerabilities in old codebase',
        'Cannot support biometric authentication'
      ]
    },
    keyStakeholders: [
      {
        name: 'Sarah Johnson',
        role: 'CIO',
        priorities: ['Digital transformation', 'Customer experience', 'Competitive positioning'],
        concerns: ['Implementation complexity', 'Customer migration', 'Cost'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Brown',
        role: 'CTO',
        priorities: ['Mobile-first experience', 'Feature parity with competitors', 'Open banking'],
        concerns: ['Time to market', 'User adoption', 'Integration with core'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Lisa Chen',
        role: 'CFO',
        priorities: ['Cost reduction', 'Customer retention', 'Revenue growth'],
        concerns: ['High upfront investment', 'ROI timeline', 'Operational costs'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Tom Anderson',
        role: 'VP of IT Operations',
        priorities: ['System stability', 'Security', 'Operational simplicity'],
        concerns: ['Migration risk', 'Team skills', 'Support complexity'],
        influence: 'medium',
        supportLevel: 'skeptic'
      }
    ],
    budget: '$2M-$3M',
    timeline: '9-12 months',
    decisionProcess: 'Board approval required. CIO and CDO are champions. CFO needs strong ROI case.'
  },
  
  businessContext: {
    challenges: [
      'Losing 8% of customers annually to digital-first banks (Chime, Ally, Marcus)',
      'Mobile app rated 2.5 stars - major reputation problem',
      'Cannot attract younger customers (18-35 demographic)',
      'Missing critical features: mobile check deposit, P2P payments, budgeting tools',
      'Cannot support open banking - losing fintech partnership opportunities',
      'High maintenance costs for legacy platform ($500K annually)',
      'Cannot launch new products - 12-18 month development cycles',
      'Security vulnerabilities in 15-year-old codebase',
      'Poor mobile experience - 60% of traffic but only 20% of transactions',
      'Competitors have superior digital experience - losing new account openings'
    ],
    businessImpact: [
      'Customer attrition: 8% annually ($36M in deposits lost)',
      'Lost revenue: $5M annually from customers who left',
      'New account decline: 40% drop in new customer acquisitions',
      'Mobile app reputation damage: 2.5 star rating hurting brand',
      'Competitive disadvantage: falling behind in digital banking',
      'High maintenance costs: $500K annually for legacy platform',
      'Cannot monetize open banking opportunities',
      'Younger demographic rejection: <5% of customers under 35'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Achieve 4.5+ star mobile app rating within 12 months',
      'Reduce customer attrition from 8% to 3%',
      'Increase new account openings by 50%',
      'Launch mobile check deposit and P2P payments',
      'Enable open banking APIs for fintech partnerships',
      'Reduce digital platform maintenance costs by 60%',
      'Attract younger customers (target 20% under 35)',
      'Launch new digital products in <3 months'
    ],
    competitivePressure: 'Losing customers to Chime, Ally, Marcus, and local credit unions with better digital experience.',
    regulatoryRequirements: ['PCI-DSS compliance', 'FFIEC cybersecurity requirements', 'State banking regulations', 'Consumer data privacy (CCPA, state laws)'],
    recentEvents: [
      'Mobile app rating dropped to 2.5 stars - social media backlash',
      'Lost 40K customers in past 12 months to digital competitors',
      'Board mandated digital transformation initiative',
      'Competitor launched superior mobile app - marketing advantage'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your digital banking transformation? What specific customer feedback or competitive pressures are you facing?',
        purpose: 'Understand business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'We\'re losing 8% of customers annually to digital-first banks. Our mobile app is rated 2.5 stars and customers are vocal about poor experience. We lost 40K customers last year. Board has mandated we modernize or risk becoming irrelevant.',
        alternateResponses: [
          'Customers are leaving for better digital experiences',
          'Our mobile app is terrible and hurting our brand'
        ],
        followUpQuestions: [
          'What features are customers requesting most?',
          'Which competitors are winning your customers?',
          'What is the cost of customer attrition?'
        ],
        scoringWeight: 15,
        hints: ['Quantify customer losses', 'Identify specific pain points', 'Understand competitive threats']
      },
      {
        question: 'What are the biggest gaps in your current digital banking platform? What features are missing that competitors have?',
        purpose: 'Identify feature gaps and competitive disadvantages',
        category: 'technical',
        idealResponse: 'We\'re missing mobile check deposit, P2P payments, budgeting tools, biometric auth, and open banking APIs. Our mobile experience is clunky - takes 5 clicks to transfer money vs. 2 for competitors. We can\'t integrate with fintechs or launch new features quickly.',
        alternateResponses: [
          'We lack basic features that customers expect',
          'Our platform is outdated and limited'
        ],
        followUpQuestions: [
          'What is your mobile app rating and why?',
          'What features would have the biggest impact?',
          'Do you need open banking capabilities?'
        ],
        scoringWeight: 12,
        hints: ['Feature gaps are competitive disadvantages', 'Mobile experience is critical', 'Open banking is strategic']
      },
      {
        question: 'What is your current mobile app rating and what are customers saying? How is this impacting your brand?',
        purpose: 'Quantify reputation damage and customer sentiment',
        category: 'pain-point',
        idealResponse: '2.5 stars on both iOS and Android. Customers complain about crashes, slow performance, missing features, and poor UX. It\'s hurting our brand - prospects see the rating and choose competitors. We\'re losing new account openings because of it.',
        alternateResponses: [
          'Our app rating is terrible',
          'Customers hate our mobile experience'
        ],
        followUpQuestions: [
          'What percentage of customers use mobile?',
          'How many new accounts are you losing?',
          'What would it take to achieve 4.5+ stars?'
        ],
        scoringWeight: 12,
        hints: ['App rating is public reputation', 'Impacts new customer acquisition', 'Quantify the damage']
      },
      {
        question: 'What is your strategy for attracting younger customers (18-35)? What percentage of your customer base is under 35?',
        purpose: 'Identify demographic challenges and growth opportunities',
        category: 'business',
        idealResponse: 'Less than 5% of our customers are under 35 - that\'s a huge problem for long-term growth. Younger customers expect mobile-first banking with modern features. We can\'t attract them with our current platform. We need to win this demographic or we\'ll shrink over time.',
        alternateResponses: [
          'We struggle to attract younger customers',
          'Our customer base is aging'
        ],
        followUpQuestions: [
          'What features do younger customers want?',
          'What is your target demographic mix?',
          'How do competitors attract younger customers?'
        ],
        scoringWeight: 10,
        hints: ['Younger customers are digital-first', 'Long-term growth depends on this', 'Mobile experience is key']
      },
      {
        question: 'What are your open banking and fintech partnership goals? Do you need API capabilities?',
        purpose: 'Understand strategic digital ecosystem needs',
        category: 'business',
        idealResponse: 'We need open banking APIs to partner with fintechs and offer integrated services. Customers want to connect budgeting apps, investment platforms, and payment services. We\'re missing revenue opportunities because we can\'t integrate. Open banking is strategic for us.',
        alternateResponses: [
          'We need to integrate with fintech partners',
          'Open banking is important for our strategy'
        ],
        followUpQuestions: [
          'What fintech partnerships are you considering?',
          'What revenue opportunities exist?',
          'Do you have API management capabilities?'
        ],
        scoringWeight: 10,
        hints: ['Open banking is strategic', 'API ecosystem creates value', 'Fintech partnerships drive revenue']
      },
      {
        question: 'What is your current digital platform maintenance cost? How much time does it take to launch new features?',
        purpose: 'Quantify operational inefficiency and agility problems',
        category: 'technical',
        idealResponse: '$500K annually to maintain legacy platform. Takes 12-18 months to launch new features because of old technology and manual processes. We can\'t compete with this speed. Need to reduce costs and increase agility dramatically.',
        alternateResponses: [
          'Maintenance costs are too high',
          'We can\'t launch features quickly enough'
        ],
        followUpQuestions: [
          'What is your target time-to-market for new features?',
          'How much could you save with modern platform?',
          'What features are in your backlog?'
        ],
        scoringWeight: 8,
        hints: ['Legacy costs are high', 'Agility is competitive advantage', 'Quantify the inefficiency']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$2-3M budget approved for digital transformation. Need solution in 9-12 months. Board approval required - CIO and CDO are champions. CFO needs strong ROI case showing customer retention and cost savings.',
        alternateResponses: [
          'We have budget allocated',
          'Board wants this done within a year'
        ],
        followUpQuestions: [
          'What ROI or payback period is required?',
          'Who are the key decision makers?',
          'What could delay or derail this project?'
        ],
        scoringWeight: 8,
        hints: ['Budget is approved - good sign', 'Multiple stakeholders', 'ROI is critical for CFO']
      },
      {
        question: 'What are your concerns about migrating customers to a new digital platform? How will you manage the transition?',
        purpose: 'Identify migration concerns and change management needs',
        category: 'stakeholder',
        idealResponse: 'Concerned about customer disruption and adoption. Need seamless migration with no downtime. Want to phase rollout - start with early adopters, then expand. Need training materials and support for customers. Communication strategy is critical.',
        alternateResponses: [
          'We\'re worried about customer disruption',
          'Migration needs to be smooth and seamless'
        ],
        followUpQuestions: [
          'What is your customer communication strategy?',
          'Do you want a phased rollout?',
          'What support will customers need?'
        ],
        scoringWeight: 7,
        hints: ['Customer experience during migration is critical', 'Phased approach reduces risk', 'Communication is key']
      }
    ],
    expectedFindings: [
      'Significant customer attrition to digital competitors (8% annually)',
      'Poor mobile app rating (2.5 stars) hurting brand and acquisition',
      'Missing critical features (mobile check deposit, P2P, open banking)',
      'Cannot attract younger customers (<5% under 35)',
      'High maintenance costs ($500K annually) and slow feature delivery',
      'Board mandate for digital transformation',
      'Budget approved ($2-3M) - qualified opportunity',
      'Need seamless customer migration strategy'
    ],
    redFlags: [
      'If budget is under $1.5M - not enough for complete platform',
      'If timeline is less than 6 months - too aggressive',
      'If no executive sponsorship - will struggle',
      'If customer attrition is not quantified - may not be real pain',
      'If they want to build custom instead of buy - high risk'
    ],
    opportunities: [
      'Customer retention: $36M in deposits saved (reduce attrition from 8% to 3%)',
      'New customer acquisition: 50% increase in new accounts',
      'Cost savings: $300K annually (reduce maintenance from $500K to $200K)',
      'Revenue growth: $3M annually from retained and new customers',
      'Mobile app rating improvement: 2.5 to 4.5+ stars',
      'Younger demographic growth: 5% to 20% under 35',
      'Open banking revenue: $1M+ annually from fintech partnerships',
      'Feature velocity: 12-18 months to <3 months time-to-market'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'We could build a custom digital banking platform ourselves instead of buying. Why should we buy IBM?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'difficult',
        category: 'strategy',
        customResponse: 'I understand the appeal of custom development - you get exactly what you want. However, building a modern digital banking platform from scratch typically takes 3-5 years and costs $10M+. You\'d need to build mobile apps (iOS/Android), web platform, APIs, security, compliance, and maintain it all. Meanwhile, you\'re losing customers every day. IBM\'s digital banking platform is pre-built, proven with 200+ banks, and can be deployed in 9-12 months. You get mobile check deposit, P2P payments, open banking APIs, and continuous updates - all for $2-3M. You can focus on your customers and differentiating features, not reinventing banking infrastructure. Would you rather spend 3-5 years building or 9-12 months deploying and winning customers back?',
        scoringCriteria: [
          'Acknowledged the build vs. buy consideration',
          'Quantified time and cost of custom development (3-5 years, $10M+)',
          'Highlighted opportunity cost (losing customers while building)',
          'Emphasized proven platform with 200+ banks',
          'Mentioned faster time-to-market (9-12 months vs. 3-5 years)',
          'Positioned focus on differentiation vs. infrastructure'
        ],
        hints: [
          'Custom development takes 3-5 years and $10M+',
          'Opportunity cost: losing customers while you build',
          'IBM platform is proven with 200+ banks',
          'Focus on differentiation, not infrastructure'
        ]
      },
      {
        objection: 'How do we know customers will actually use a new platform? What if we invest millions and adoption is low?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'That\'s a critical question - adoption is everything. The good news is that your customers are already telling you they want this. Your 2.5 star app rating and 8% attrition show customers are desperate for better digital banking. When banks upgrade to modern platforms, they typically see 80%+ adoption within 6 months because the experience is dramatically better. We can de-risk this with a phased rollout - start with early adopters who are most frustrated, prove the value, then expand. IBM also provides customer communication templates, training materials, and adoption best practices from 200+ bank implementations. We can include adoption metrics and guarantees in the contract. Would a phased approach with early adopter pilot help de-risk this?',
        scoringCriteria: [
          'Acknowledged adoption risk',
          'Used customer feedback as proof of demand (2.5 stars, 8% attrition)',
          'Provided industry adoption statistics (80%+ within 6 months)',
          'Proposed phased rollout to de-risk',
          'Mentioned customer communication and training support',
          'Offered adoption guarantees in contract'
        ],
        hints: [
          'Customers are already demanding this (2.5 star rating)',
          'Industry adoption rates are 80%+ within 6 months',
          'Phased rollout de-risks adoption',
          'Offer adoption guarantees in contract'
        ]
      },
      {
        objection: 'Our IT team is already overwhelmed. We don\'t have capacity to implement and support a new platform.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'I completely understand - your team is stretched thin maintaining the legacy platform. The good news is that a modern platform actually reduces operational burden long-term. IBM provides full implementation services - we handle the heavy lifting of deployment, integration, and migration. Your team provides business requirements and testing, but we do the technical work. Post-launch, the platform is cloud-based and largely self-managing - IBM handles infrastructure, security patches, and updates. Your maintenance costs drop from $500K to $200K annually. We also provide training so your team can support the platform. Many banks find they can actually reduce IT staff or redeploy them to higher-value projects. Would it help to see a resource plan showing IBM\'s role vs. your team\'s role?',
        scoringCriteria: [
          'Acknowledged resource constraints',
          'Explained IBM implementation services handle heavy lifting',
          'Highlighted reduced operational burden (cloud-based, self-managing)',
          'Quantified cost reduction ($500K to $200K annually)',
          'Mentioned training and knowledge transfer',
          'Positioned as reducing long-term burden'
        ],
        hints: [
          'IBM handles implementation heavy lifting',
          'Cloud platform reduces operational burden',
          'Maintenance costs drop from $500K to $200K',
          'Training provided for your team'
        ]
      },
      {
        objection: 'We\'re concerned about integrating with our Jack Henry core banking system. How complex will that be?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Great question - core integration is critical. IBM has extensive experience integrating with Jack Henry Silverlake - we have pre-built connectors and integration patterns. We\'ve done this integration dozens of times with other banks. The digital banking platform connects via Jack Henry\'s APIs for account data, transactions, and updates. We handle real-time balance inquiries, transfers, bill pay, and all core banking functions. Integration typically takes 6-8 weeks and is part of our standard implementation. We can do a technical assessment to map out the specific integration points and identify any custom requirements. Many Jack Henry banks have successfully deployed IBM\'s digital platform. Would you like to speak with a reference customer using Jack Henry?',
        scoringCriteria: [
          'Acknowledged integration importance',
          'Highlighted Jack Henry experience and pre-built connectors',
          'Explained integration approach (APIs, real-time)',
          'Provided timeline (6-8 weeks)',
          'Offered technical assessment',
          'Mentioned reference customers with Jack Henry'
        ],
        hints: [
          'IBM has pre-built Jack Henry connectors',
          'Integration done dozens of times before',
          'Takes 6-8 weeks as part of standard implementation',
          'Offer reference customer with Jack Henry'
        ]
      },
      {
        objection: 'What if IBM discontinues the platform or gets acquired? We can\'t afford to be stuck with an unsupported product.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'That\'s a valid long-term concern. IBM has been in banking technology for 50+ years and digital banking is a strategic growth area - we\'re investing heavily, not exiting. The platform has 200+ bank customers and growing, so there\'s a large, stable customer base. IBM is a $60B company with strong financials - we\'re not going anywhere. That said, the platform is built on open standards and APIs, so you\'re not locked in. If you ever needed to migrate, your data and integrations are portable. We also offer long-term support commitments in the contract - typically 10+ years with guaranteed updates and security patches. Many banks have been on IBM platforms for 20+ years. Would it help to include specific support commitments and exit provisions in the contract?',
        scoringCriteria: [
          'Acknowledged the concern',
          'Highlighted IBM\'s 50+ year banking history',
          'Mentioned strategic investment and growth (200+ banks)',
          'Emphasized IBM\'s financial stability ($60B company)',
          'Explained open standards and portability',
          'Offered long-term support commitments (10+ years)',
          'Mentioned contract provisions for protection'
        ],
        hints: [
          'IBM has 50+ years in banking technology',
          'Digital banking is strategic growth area (200+ banks)',
          'Platform built on open standards - not locked in',
          'Offer 10+ year support commitments in contract'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: [
      {
        objection: 'Why not just improve our current platform instead of replacing it entirely?',
        stakeholder: 'CFO',
        difficulty: 'very difficult',
        category: 'strategy',
        customResponse: 'That\'s a fair question - incremental improvement seems less risky. However, your current platform is 15 years old and built on outdated technology. It\'s like trying to turn a flip phone into an iPhone - the foundation isn\'t there. You can\'t add mobile check deposit, P2P payments, or open banking APIs to a 15-year-old platform without essentially rebuilding it. That would cost more and take longer than replacing it. Meanwhile, you\'re losing 8% of customers annually and your 2.5 star rating is getting worse. The platform is also approaching end-of-life with security vulnerabilities. Incremental improvement might save money short-term, but you\'ll continue losing customers and fall further behind competitors. A modern platform is an investment in staying competitive for the next 10+ years. Would you like to see a cost comparison of improve vs. replace over 5 years?',
        scoringCriteria: [
          'Acknowledged the incremental approach appeal',
          'Explained technical limitations of 15-year-old platform',
          'Used analogy (flip phone to iPhone)',
          'Quantified ongoing losses (8% attrition, 2.5 stars)',
          'Highlighted security and end-of-life risks',
          'Positioned as long-term strategic investment',
          'Offered cost comparison analysis'
        ],
        hints: [
          'Can\'t add modern features to 15-year-old foundation',
          'Continuing to lose 8% of customers annually',
          'Security vulnerabilities and end-of-life approaching',
          'Modern platform is 10+ year strategic investment'
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
          productName: 'IBM Digital Banking Platform (Cloud Pak for Data)',
          reason: 'Modern cloud-native digital banking platform with mobile apps (iOS/Android), web banking, open banking APIs, and AI-powered features. Proven with 200+ banks.',
          configuration: 'Digital banking platform on IBM Cloud, mobile apps, web portal, open banking APIs, mobile check deposit, P2P payments, budgeting tools, biometric auth',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for core banking integration and real-time transaction processing. Proven reliability for banking workloads.',
          configuration: '1x Power E1080, 16-core, 1TB RAM, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for digital banking platform and customer data. Low latency for real-time transactions and mobile experience.',
          configuration: 'FlashSystem 9500, 150TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'supporting'
        }
      ],
      architecture: 'IBM Digital Banking Platform on IBM Cloud with hybrid integration to on-premises Power E1080 for core banking (Jack Henry). FlashSystem 9500 for high-performance storage. Mobile apps (iOS/Android), web portal, and open banking APIs.',
      sizing: 'Sized for 500K customers with 2M monthly active users. Supports 5K concurrent users with <2 second response time. 5-year growth capacity to 1M customers.',
      deployment: 'Phased approach: 1) Platform setup and core integration (8 weeks), 2) Pilot with 5K early adopters (4 weeks), 3) Phased rollout to all customers (12 weeks), 4) Continuous feature releases'
    },
    pricing: {
      hardware: '$800K (1x Power E1080 + FlashSystem 9500)',
      software: '$1.2M (Digital Banking Platform, mobile apps, APIs, 3-year license)',
      services: '$600K (IBM Consulting: implementation, integration, migration, training)',
      support: '$150K/year (24x7 support with 4-hour response)',
      total: '$2.6M initial + $150K/year support',
      financing: 'IBM Flex financing available - $55K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$3.3M annually (customer retention $3M, maintenance reduction $300K)',
      productivityGains: '$500K annually (faster feature delivery, reduced support costs)',
      riskReduction: 'Avoid continued customer attrition, improve brand reputation, attract younger customers',
      roi: '9 months',
      paybackPeriod: '9 months',
      tco: '3-year TCO: $3.05M investment vs. $11.4M in benefits (retention + new customers + cost savings) = $8.35M net benefit'
    },
    competitivePositioning: 'IBM Digital Banking Platform is proven with 200+ banks and provides complete mobile-first experience. Unlike point solutions, IBM provides integrated platform with mobile apps, web banking, and open banking APIs. Power infrastructure ensures reliability and performance for banking workloads.',
    nextSteps: [
      'Schedule demo of mobile apps and digital banking platform',
      'Provide detailed ROI analysis with customer retention modeling',
      'Arrange reference call with similar community bank (Jack Henry customer)',
      'Conduct technical assessment for Jack Henry integration',
      'Develop phased rollout plan with early adopter pilot',
      'Present to Board with CIO, CDO, and CFO'
    ],
    requiredElements: [
      'Must include IBM Digital Banking Platform with mobile apps',
      'Must include Jack Henry core banking integration',
      'Must include mobile check deposit and P2P payments',
      'Must include open banking APIs',
      'Must include phased rollout with early adopter pilot',
      'Must address customer migration and communication',
      'Must include IBM Consulting services for implementation'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified customer attrition and business impact',
        'Identified mobile app rating problem (2.5 stars)',
        'Uncovered feature gaps and competitive disadvantages',
        'Identified younger customer demographic challenge',
        'Understood open banking and API strategy needs',
        'Quantified maintenance costs and agility problems',
        'Qualified budget and timeline',
        'Assessed customer migration concerns'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed build vs. buy with time and cost comparison',
        'Handled adoption risk with phased approach and guarantees',
        'Addressed resource concerns with IBM services and reduced burden',
        'Handled Jack Henry integration with experience and connectors',
        'Addressed platform longevity with IBM stability and commitments',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Digital Banking Platform as primary solution',
        'Included Power E1080 for core banking integration',
        'Included FlashSystem 9500 for storage performance',
        'Addressed all pain points (mobile, features, open banking)',
        'Proposed phased rollout with early adopter pilot',
        'Included Jack Henry integration plan'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified customer retention value ($3M annually)',
        'Quantified cost savings ($300K annually)',
        'Calculated ROI (9 months)',
        'Articulated brand reputation improvement',
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
      concept: 'Digital Banking Transformation',
      description: 'How to position modern digital banking platforms vs. legacy systems and quantify customer retention value',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Mobile-First Banking',
      description: 'Understanding mobile app experience importance and impact on customer acquisition and retention',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Open Banking Strategy',
      description: 'How to position open banking APIs and fintech ecosystem partnerships',
      skillLevel: 'advanced'
    },
    {
      concept: 'Customer Migration Planning',
      description: 'How to address customer migration concerns with phased rollout and communication strategy',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Build vs. Buy Analysis',
      description: 'How to position platform purchase vs. custom development with time and cost comparison',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'digital-banking', 'mobile-banking', 'open-banking', 'customer-experience', 'jack-henry', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis', 'change-management'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 30,
    prerequisites: ['Basic understanding of digital banking', 'Familiarity with mobile banking trends', 'Banking industry knowledge'],
    relatedScenarios: ['banking-fraud-detection-001', 'banking-payments-003'],
    difficulty: 'intermediate',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying customer attrition - 8% annually gets attention',
    'Mobile app rating (2.5 stars) is public reputation problem - use this',
    'Younger customer demographic (<5% under 35) is long-term growth risk',
    'Open banking is strategic - position API ecosystem value',
    'Use ROI to overcome cost objections - 9-month payback is compelling',
    'Propose phased rollout to de-risk adoption',
    'Position as strategic investment, not just technology upgrade'
  ],
  
  commonMistakes: [
    'Focusing only on technology features without quantifying business impact',
    'Not addressing customer migration and adoption concerns',
    'Ignoring mobile app rating and reputation damage',
    'Not positioning open banking as strategic opportunity',
    'Comparing to custom development without time and cost analysis',
    'Not proposing phased rollout to de-risk',
    'Forgetting to include Jack Henry integration plan'
  ],
  
  bestPractices: [
    'Quantify customer attrition and retention value early',
    'Use mobile app rating as proof of customer dissatisfaction',
    'Emphasize younger customer demographic challenge',
    'Position open banking as revenue opportunity',
    'Propose phased rollout with early adopter pilot',
    'Calculate ROI with customer retention and cost savings',
    'Include Jack Henry integration experience and connectors',
    'Provide community bank customer references'
  ],
  
  expertInsights: [
    'Mobile app rating is public and impacts new customer acquisition - use this urgency',
    'Customer attrition to digital competitors is accelerating - act now or fall behind',
    'Younger customers (18-35) expect mobile-first banking - demographic shift is real',
    'Open banking APIs create fintech partnership revenue opportunities',
    'Phased rollout with early adopters de-risks adoption and builds momentum',
    'Jack Henry integration is proven - IBM has done it dozens of times',
    'Community banks can compete with digital-first banks using modern platforms'
  ]
};

// Made with Bob
// Scenario 3: Real-Time Payments Infrastructure
export const bankingScenario003: TrainingScenario = {
  id: 'banking-real-time-payments-003',
  title: 'Regional Bank Needs Real-Time Payments Infrastructure',
  description: 'A regional bank with 1.5M customers needs to support real-time payments (RTP, FedNow) to compete with larger banks and fintechs. Their current batch-based payment system cannot handle instant payments, causing them to lose business customers and payment volume.',
  
  customerProfile: {
    company: 'Midwest Regional Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$800M annually',
    employees: 2100,
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '25 x86 servers running payment processing',
      storage: 'HPE 3PAR (6 years old)',
      applications: ['ACH processing (batch)', 'Wire transfer system', 'Core banking (Fiserv)', 'Bill pay (third-party)'],
      operatingSystem: 'Red Hat Enterprise Linux 7',
      virtualization: 'VMware vSphere 6.7',
      age: '6-8 years',
      endOfLife: '12-18 months',
      issues: [
        'Cannot support real-time payments (RTP, FedNow)',
        'Batch ACH processing - 24-48 hour delays',
        'Losing business customers who need instant payments',
        'Cannot compete with Zelle and Venmo for P2P',
        'Payment infrastructure approaching end-of-life',
        'Cannot handle payment volumes for real-time processing',
        'No fraud detection for instant payments',
        'Missing revenue from payment processing fees'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Martinez',
        role: 'CIO',
        priorities: ['Real-time payments capability', 'Competitive positioning', 'Revenue growth'],
        concerns: ['Implementation complexity', 'Fraud risk', 'Cost'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Jennifer Lee',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Performance', '24/7 availability'],
        concerns: ['Real-time processing complexity', 'Team skills', 'Integration'],
        influence: 'medium',
        supportLevel: 'neutral'
      },
      {
        name: 'Robert Chen',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost efficiency', 'ROI'],
        concerns: ['High investment', 'Payback period', 'Ongoing costs'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Maria Rodriguez',
        role: 'Chief Risk Officer',
        priorities: ['Fraud prevention', 'Regulatory compliance', 'Risk management'],
        concerns: ['Real-time fraud detection', 'Irrevocable payments', 'Compliance'],
        influence: 'high',
        supportLevel: 'skeptic'
      }
    ],
    budget: '$4M-$6M',
    timeline: '12-18 months',
    decisionProcess: 'Board approval required for investments >$4M. CIO, CFO, and CRO must all support.'
  },
  
  businessContext: {
    challenges: [
      'Cannot support real-time payments (RTP, FedNow) - competitive disadvantage',
      'Losing business customers who need instant payments for supply chain',
      'Missing $2M annually in payment processing revenue',
      'Batch ACH takes 24-48 hours - customers frustrated',
      'Cannot compete with Zelle, Venmo, Cash App for P2P payments',
      'Payment infrastructure approaching end-of-life',
      'No fraud detection for instant payments - high risk',
      'Larger banks and fintechs have real-time payments - losing market share',
      'Business customers moving to competitors for payment services',
      'Cannot support gig economy and instant payroll use cases'
    ],
    businessImpact: [
      'Lost payment revenue: $2M annually',
      'Business customer attrition: 5% annually ($50M in deposits)',
      'Competitive disadvantage: falling behind in payments',
      'Cannot attract fintech partnerships',
      'Missing gig economy and instant payroll opportunities',
      'Customer frustration with slow payments',
      'Risk of fraud losses with instant payments',
      'Infrastructure end-of-life approaching'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Launch real-time payments (RTP and FedNow) within 18 months',
      'Reduce business customer attrition from 5% to 2%',
      'Grow payment processing revenue by $3M annually',
      'Support instant P2P payments to compete with Zelle/Venmo',
      'Enable instant payroll and gig economy use cases',
      'Implement real-time fraud detection',
      'Achieve 99.99% payment system availability',
      'Build payment processing as revenue center'
    ],
    competitivePressure: 'Top 10 banks all support RTP and FedNow. Fintechs have instant payments. Losing business customers.',
    regulatoryRequirements: ['Federal Reserve FedNow compliance', 'NACHA rules', 'Bank Secrecy Act (BSA)', 'Anti-Money Laundering (AML)'],
    recentEvents: [
      'FedNow launched 6 months ago - need to support it',
      'Lost major business customer to competitor with instant payments',
      'Board mandated real-time payments capability',
      'Competitor marketing real-time payments as differentiator'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for real-time payments? Are you losing customers or revenue due to lack of instant payment capabilities?',
        purpose: 'Understand business drivers and quantify impact',
        category: 'pain-point',
        idealResponse: 'We\'re losing business customers who need instant payments for supply chain and payroll. Missing $2M annually in payment processing revenue. FedNow launched and we need to support it. Board has mandated we implement real-time payments within 18 months.',
        alternateResponses: [
          'Customers are demanding instant payments',
          'We\'re falling behind competitors'
        ],
        followUpQuestions: [
          'How much payment revenue are you losing?',
          'Which customer segments need instant payments most?',
          'What is the timeline for FedNow support?'
        ],
        scoringWeight: 15,
        hints: ['Quantify lost revenue', 'Identify customer segments', 'FedNow creates urgency']
      },
      {
        question: 'What payment volumes do you process currently? What are your performance and availability requirements for real-time payments?',
        purpose: 'Understand scale and technical requirements',
        category: 'technical',
        idealResponse: 'Process 2M ACH transactions monthly, 50K wires monthly. Need to support 10K real-time payments daily initially, growing to 100K daily. Require <1 second payment processing, 99.99% availability, 24/7 operation. Cannot have downtime.',
        alternateResponses: [
          'High transaction volumes',
          'Need instant processing and high availability'
        ],
        followUpQuestions: [
          'What is your peak transaction volume?',
          'What is your current system capacity?',
          'What is your disaster recovery requirement?'
        ],
        scoringWeight: 12,
        hints: ['Scale is important', 'Sub-second latency required', '99.99% availability is standard']
      },
      {
        question: 'What are your fraud detection capabilities for instant payments? How will you prevent fraud when payments are irrevocable?',
        purpose: 'Identify fraud risk and compliance concerns',
        category: 'pain-point',
        idealResponse: 'Current fraud detection is batch-based - won\'t work for instant payments. Concerned about fraud risk because real-time payments are irrevocable. Need real-time fraud scoring in milliseconds. Also need AML/BSA compliance for instant payments.',
        alternateResponses: [
          'Fraud is a major concern',
          'Need real-time fraud detection'
        ],
        followUpQuestions: [
          'What is your current fraud loss rate?',
          'What fraud detection tools do you have?',
          'Do you need AI/ML for fraud detection?'
        ],
        scoringWeight: 12,
        hints: ['Instant payments are irrevocable - fraud risk is high', 'Need real-time fraud detection', 'AI/ML is essential']
      },
      {
        question: 'What business use cases are driving demand for instant payments? Which customer segments need this most?',
        purpose: 'Understand use cases and revenue opportunities',
        category: 'business',
        idealResponse: 'Business customers need instant payments for supply chain (pay suppliers immediately), instant payroll for gig workers, and B2B payments. Also need P2P for consumer customers to compete with Zelle. These are high-value customers - losing them hurts.',
        alternateResponses: [
          'Business customers need instant payments',
          'Multiple use cases driving demand'
        ],
        followUpQuestions: [
          'What is the revenue potential for each use case?',
          'Which use case should you prioritize?',
          'What fees can you charge for instant payments?'
        ],
        scoringWeight: 10,
        hints: ['Business use cases are high-value', 'Instant payroll is growing', 'P2P competes with Zelle']
      },
      {
        question: 'What is your current payment infrastructure? When is it end-of-life?',
        purpose: 'Understand technical environment and refresh timing',
        category: 'technical',
        idealResponse: '25 x86 servers, aging HPE storage. Infrastructure is 6-8 years old and approaching end-of-life in 12-18 months. Cannot handle real-time processing volumes. Need high-performance infrastructure for instant payments.',
        alternateResponses: [
          'Infrastructure is old and inadequate',
          'Need to refresh soon anyway'
        ],
        followUpQuestions: [
          'What is your infrastructure refresh budget?',
          'Can you combine real-time payments with infrastructure refresh?',
          'What performance do you need?'
        ],
        scoringWeight: 10,
        hints: ['Infrastructure refresh opportunity', 'Real-time needs high performance', 'Combine initiatives']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$4-6M budget approved. Need solution in 12-18 months to meet FedNow timeline. Board approval required. CIO is champion, CFO needs ROI case, CRO concerned about fraud risk.',
        alternateResponses: [
          'Budget is approved',
          'Board wants this done quickly'
        ],
        followUpQuestions: [
          'What ROI is required?',
          'Who are the key decision makers?',
          'What could delay this project?'
        ],
        scoringWeight: 8,
        hints: ['Budget is approved - qualified', 'Multiple stakeholders', 'Fraud risk is concern']
      },
      {
        question: 'Are you considering any competitors or alternative solutions? What are your evaluation criteria?',
        purpose: 'Understand competitive landscape and decision criteria',
        category: 'business',
        idealResponse: 'Looking at FIS, Fiserv, and ACI for real-time payments. Key criteria: performance (<1 sec), fraud detection, FedNow/RTP support, reliability (99.99%), TCO. Open to best solution.',
        alternateResponses: [
          'Evaluating several vendors',
          'Performance and fraud detection are critical'
        ],
        followUpQuestions: [
          'What are pros and cons of each option?',
          'What would make IBM preferred choice?',
          'When do you need to decide?'
        ],
        scoringWeight: 8,
        hints: ['Competitive situation', 'Understand criteria', 'Position IBM strengths']
      },
      {
        question: 'How will you integrate real-time payments with your core banking system and other channels?',
        purpose: 'Identify integration complexity and requirements',
        category: 'technical',
        idealResponse: 'Need to integrate with Fiserv core, mobile app, online banking, and business banking portal. All channels must support instant payments. Integration is complex - need proven approach and experience.',
        alternateResponses: [
          'Integration is a concern',
          'Need to support all channels'
        ],
        followUpQuestions: [
          'What integration challenges do you anticipate?',
          'Do you have API infrastructure?',
          'What is your integration timeline?'
        ],
        scoringWeight: 7,
        hints: ['Integration is complex', 'All channels need support', 'Proven experience matters']
      }
    ],
    expectedFindings: [
      'Losing payment revenue and business customers ($2M+ annually)',
      'FedNow launch creates urgency and timeline pressure',
      'Need high-performance infrastructure (<1 sec, 99.99% availability)',
      'Fraud detection is critical concern for instant payments',
      'Multiple high-value use cases (B2B, payroll, P2P)',
      'Infrastructure approaching end-of-life - refresh opportunity',
      'Budget approved ($4-6M) - qualified opportunity',
      'Integration with Fiserv core and all channels required'
    ],
    redFlags: [
      'If budget is under $3M - not enough for complete solution',
      'If timeline is less than 9 months - too aggressive',
      'If no fraud detection strategy - high risk',
      'If payment volumes are very low - may not justify investment',
      'If they want to build custom - very high risk'
    ],
    opportunities: [
      'Payment revenue growth: $3M+ annually',
      'Business customer retention: $50M in deposits saved',
      'Competitive advantage: real-time payments capability',
      'New use cases: instant payroll, gig economy, B2B',
      'Infrastructure modernization: Power + FlashSystem + Watson',
      'Fraud prevention: AI/ML real-time fraud detection',
      'FedNow and RTP support: regulatory compliance'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Real-time payments are irrevocable - what if we have fraud losses? This seems very risky.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'You\'re absolutely right - fraud risk is the #1 concern with instant payments. That\'s why real-time fraud detection is essential. IBM Watson can score every payment in milliseconds using AI/ML to detect fraud patterns before the payment is sent. We analyze hundreds of factors - transaction history, behavior patterns, device fingerprinting, velocity checks. Banks using Watson for real-time payments have fraud rates <0.01% - lower than ACH. We can also implement transaction limits, customer authentication, and risk-based controls. The key is preventing fraud before payment, not after. Would you like to see how Watson fraud detection works for instant payments?',
        scoringCriteria: [
          'Acknowledged fraud risk is real and serious',
          'Explained Watson real-time fraud detection (<milliseconds)',
          'Mentioned AI/ML analyzing hundreds of factors',
          'Provided fraud rate statistics (<0.01%)',
          'Described layered controls (limits, auth, risk-based)',
          'Emphasized prevention before payment',
          'Offered demo of fraud detection'
        ],
        hints: [
          'Fraud risk is real - acknowledge it',
          'Watson scores payments in milliseconds',
          'Banks achieve <0.01% fraud rates',
          'Prevention before payment is key'
        ]
      },
      {
        objection: 'We need 99.99% availability for payments - that\'s only 52 minutes of downtime per year. Can IBM really deliver that?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'performance',
        customResponse: 'Excellent question - 99.99% availability is table stakes for payment systems. IBM Power Systems are designed for this - we have customers running mission-critical banking workloads with 99.999% availability (5 minutes downtime per year). Power has redundant everything - processors, memory, I/O, power supplies. PowerVM provides live partition mobility for zero-downtime maintenance. FlashSystem has dual controllers and no single point of failure. We also provide disaster recovery with automated failover. Many banks run payment systems on Power with better than 99.99% availability. IBM can include availability guarantees in the contract with SLA penalties if we don\'t meet them. Would you like to see reference architectures for high-availability payment systems?',
        scoringCriteria: [
          'Acknowledged 99.99% is required',
          'Explained Power Systems reliability (99.999%)',
          'Described redundancy (processors, memory, I/O)',
          'Mentioned PowerVM live partition mobility',
          'Highlighted FlashSystem dual controllers',
          'Offered availability guarantees with SLA penalties',
          'Provided reference architectures'
        ],
        hints: [
          'Power Systems achieve 99.999% availability',
          'Redundant everything - no single point of failure',
          'PowerVM enables zero-downtime maintenance',
          'Offer availability guarantees with SLA penalties'
        ]
      },
      {
        objection: 'The investment is high ($4-6M). How do we justify this to the board?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'I understand - $4-6M is a significant investment. Let\'s look at the business case. You\'re losing $2M annually in payment revenue plus $50M in business customer deposits (5% attrition). That\'s $2.5M+ in annual losses. Real-time payments will generate $3M+ in new revenue from payment fees, business customers, and new use cases. You\'ll also save on infrastructure costs. Total benefit is $5M+ annually. With $5M investment, payback is 12 months. Over 5 years, that\'s $25M in benefits vs. $5M investment - 5:1 ROI. Plus you avoid the cost of doing nothing - continued customer losses and falling further behind competitors. This is a strategic investment in staying competitive. Would you like a detailed ROI model?',
        scoringCriteria: [
          'Acknowledged investment size',
          'Quantified current losses ($2M revenue + $50M deposits)',
          'Calculated new revenue ($3M+ annually)',
          'Showed payback period (12 months)',
          'Calculated 5-year ROI (5:1)',
          'Mentioned cost of doing nothing',
          'Offered detailed ROI model'
        ],
        hints: [
          'Current losses are $2M+ annually',
          'New revenue is $3M+ annually',
          'Payback is 12 months',
          'Cost of doing nothing: continued losses'
        ]
      },
      {
        objection: 'Can\'t we just use a third-party payment processor instead of building our own infrastructure?',
        stakeholder: 'CFO',
        difficulty: 'difficult',
        category: 'strategy',
        customResponse: 'That\'s a fair question - outsourcing seems simpler. However, third-party processors charge 1-2% per transaction plus monthly fees. At your volumes (100K daily transactions), that\'s $3-5M annually in fees - more than owning the infrastructure. You also lose control over customer experience, data, and pricing. Third parties can raise fees anytime. Most importantly, you miss the strategic value - payment processing should be a revenue center, not a cost center. Owning the infrastructure lets you offer competitive pricing, keep customer data, and build payment services as a differentiator. Banks that own their payment infrastructure have 40% higher payment revenue than those who outsource. This is a strategic asset. Would you like to see a build vs. outsource TCO comparison?',
        scoringCriteria: [
          'Acknowledged outsourcing appeal',
          'Quantified third-party costs (1-2% + fees = $3-5M annually)',
          'Highlighted loss of control (experience, data, pricing)',
          'Emphasized strategic value (revenue center vs. cost center)',
          'Mentioned competitive pricing and differentiation',
          'Provided industry data (40% higher revenue)',
          'Offered TCO comparison'
        ],
        hints: [
          'Third-party fees are $3-5M annually at scale',
          'You lose control over experience and pricing',
          'Payment processing should be revenue center',
          'Banks that own infrastructure have 40% higher revenue'
        ]
      },
      {
        objection: 'How do we know IBM\'s solution will integrate with our Fiserv core banking system?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Excellent question - core integration is critical. IBM has extensive experience integrating with Fiserv - we have pre-built connectors and integration patterns for real-time payments. We\'ve done this integration dozens of times with other banks. The payment platform connects via Fiserv\'s APIs for account validation, balance checks, and posting. We support both real-time and batch integration. IBM can do a technical assessment to map out the specific integration architecture and identify any custom requirements. We also have reference customers running IBM real-time payments with Fiserv core. Integration typically takes 8-12 weeks and is part of our standard implementation. Would you like to speak with a reference customer using Fiserv?',
        scoringCriteria: [
          'Acknowledged integration importance',
          'Highlighted Fiserv experience and pre-built connectors',
          'Explained integration approach (APIs, real-time)',
          'Provided timeline (8-12 weeks)',
          'Offered technical assessment',
          'Mentioned reference customers with Fiserv',
          'Positioned as standard implementation'
        ],
        hints: [
          'IBM has pre-built Fiserv connectors',
          'Integration done dozens of times',
          'Takes 8-12 weeks as standard implementation',
          'Offer reference customer with Fiserv'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: [
      {
        objection: 'FedNow just launched - shouldn\'t we wait to see if it succeeds before investing?',
        stakeholder: 'CFO',
        difficulty: 'very difficult',
        category: 'timing',
        customResponse: 'I understand the temptation to wait and see. However, waiting has a cost. You\'re losing $2M+ annually in payment revenue and business customers right now. Your competitors are already implementing FedNow and RTP - they\'ll have 12-18 month head start if you wait. FedNow is backed by the Federal Reserve - it\'s not going away. The Clearing House RTP has been successful for 5 years with $500B in annual volume. Real-time payments are the future - the question is whether you\'ll be a leader or a follower. Early adopters will capture market share and customer loyalty. By the time you "wait and see," competitors will have established positions. The risk of waiting is greater than the risk of acting. Would you rather lead or follow in payments?',
        scoringCriteria: [
          'Acknowledged the wait-and-see temptation',
          'Quantified cost of waiting ($2M+ annually)',
          'Highlighted competitive disadvantage (12-18 month delay)',
          'Emphasized Federal Reserve backing (not going away)',
          'Mentioned RTP success ($500B annually)',
          'Positioned early adopter advantage',
          'Framed as lead vs. follow decision'
        ],
        hints: [
          'Cost of waiting: $2M+ annually in losses',
          'Competitors will have 12-18 month head start',
          'FedNow is Federal Reserve backed - it\'s happening',
          'Early adopters capture market share'
        ]
      }
    ]
  },
  
  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['flashsystem-9500', 'watson-studio'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'Mission-critical infrastructure for real-time payment processing with 99.99%+ availability, sub-second latency, and proven banking reliability.',
          configuration: '2x Power E1080, 32-core, 2TB RAM each, Red Hat Enterprise Linux, PowerVM for high availability, live partition mobility',
          priority: 'primary'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'Ultra-low latency storage (<100μs) for real-time payment processing and transaction logging. Dual controllers for no single point of failure.',
          configuration: 'FlashSystem 9500, 200TB effective capacity, dual controllers, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI/ML platform for real-time fraud detection on instant payments. Scores transactions in milliseconds to prevent fraud before payment.',
          configuration: 'Watson Studio on Cloud Pak for Data, fraud detection models, real-time scoring API (<10ms), model monitoring',
          priority: 'primary'
        }
      ],
      architecture: 'IBM Power E1080 for real-time payment processing engine, FlashSystem 9500 for transaction storage and logging, Watson Studio for real-time fraud detection. Integration with Fiserv core via APIs. Support for FedNow, RTP, and ACH.',
      sizing: 'Sized for 100K real-time payments daily with <1 second processing latency and 99.99% availability. Supports 5-year growth to 500K daily payments.',
      deployment: 'Phased approach: 1) Infrastructure setup and core integration (12 weeks), 2) FedNow certification (8 weeks), 3) Pilot with business customers (8 weeks), 4) Full production rollout (8 weeks)'
    },
    pricing: {
      hardware: '$3.2M (2x Power E1080 + FlashSystem 9500)',
      software: '$1.2M (Payment platform, Watson fraud detection, FedNow/RTP connectivity)',
      services: '$800K (IBM Consulting: implementation, integration, FedNow certification, training)',
      support: '$250K/year (24x7 support with 2-hour response, 99.99% SLA)',
      total: '$5.2M initial + $250K/year support',
      financing: 'IBM Flex financing available - $110K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$2.5M annually (business customer retention, reduced attrition)',
      productivityGains: '$3M annually (payment processing revenue from fees and new use cases)',
      riskReduction: 'Prevent fraud losses with real-time detection, meet FedNow compliance, competitive parity',
      roi: '12 months',
      paybackPeriod: '12 months',
      tco: '5-year TCO: $6.45M investment vs. $27.5M in benefits (revenue + retention) = $21M net benefit'
    },
    competitivePositioning: 'IBM Power provides the reliability and performance needed for mission-critical payment processing that x86 cannot match. Watson real-time fraud detection is essential for instant payments. IBM has 50+ years of banking payment experience.',
    nextSteps: [
      'Schedule technical deep-dive on real-time payment architecture',
      'Provide detailed ROI analysis with payment revenue modeling',
      'Arrange reference call with bank using IBM for real-time payments',
      'Conduct technical assessment for Fiserv integration',
      'Develop FedNow certification plan and timeline',
      'Present to Board with CIO, CFO, and CRO'
    ],
    requiredElements: [
      'Must include Power E1080 for high-availability payment processing',
      'Must include FlashSystem 9500 for low-latency storage',
      'Must include Watson Studio for real-time fraud detection',
      'Must support FedNow and RTP',
      'Must integrate with Fiserv core banking',
      'Must achieve 99.99% availability',
      'Must include IBM Consulting for FedNow certification'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified payment revenue losses and business impact',
        'Identified FedNow urgency and timeline pressure',
        'Understood performance requirements (<1 sec, 99.99%)',
        'Uncovered fraud detection concerns for instant payments',
        'Identified high-value use cases (B2B, payroll, P2P)',
        'Understood infrastructure end-of-life timing',
        'Qualified budget and timeline',
        'Assessed integration complexity with Fiserv'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed fraud risk with Watson real-time detection',
        'Handled availability concern with Power reliability',
        'Addressed cost objection with ROI and revenue growth',
        'Handled outsourcing question with TCO and strategic value',
        'Addressed Fiserv integration with experience and connectors',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as primary infrastructure',
        'Included FlashSystem 9500 for low-latency storage',
        'Included Watson Studio for real-time fraud detection',
        'Sized for performance (<1 sec) and availability (99.99%)',
        'Addressed all pain points (FedNow, fraud, revenue)',
        'Included FedNow certification plan'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified payment revenue growth ($3M annually)',
        'Quantified customer retention value ($2.5M annually)',
        'Calculated ROI (12 months)',
        'Articulated competitive advantage',
        'Positioned as strategic revenue center'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Real-Time Payments',
      description: 'How to position FedNow and RTP infrastructure and quantify payment revenue opportunities',
      skillLevel: 'advanced'
    },
    {
      concept: 'Payment Fraud Detection',
      description: 'Understanding real-time fraud detection requirements for instant payments',
      skillLevel: 'advanced'
    },
    {
      concept: 'High-Availability Architecture',
      description: 'How to design and position 99.99% availability for mission-critical payment systems',
      skillLevel: 'advanced'
    },
    {
      concept: 'Build vs. Outsource Analysis',
      description: 'How to compare owning payment infrastructure vs. third-party processors',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Payment Revenue Modeling',
      description: 'How to calculate payment processing revenue and ROI',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'real-time-payments', 'fednow', 'rtp', 'fraud-detection', 'watson', 'power-e1080', 'flashsystem', 'high-availability'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis', 'risk-mitigation'],
    products: ['power-e1080', 'flashsystem-9500', 'watson-studio'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    prerequisites: ['Understanding of payment systems', 'Familiarity with FedNow and RTP', 'Banking industry knowledge'],
    relatedScenarios: ['banking-fraud-detection-001', 'banking-digital-platform-002'],
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying payment revenue losses - $2M+ gets attention',
    'FedNow launch creates urgency - use this timeline pressure',
    'Fraud risk is #1 concern for instant payments - address it proactively',
    '99.99% availability is non-negotiable for payments - Power delivers this',
    'Use ROI to overcome cost objections - 12-month payback is compelling',
    'Position payment processing as revenue center, not cost center',
    'Emphasize strategic value of owning vs. outsourcing'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying payment revenue',
    'Not addressing fraud risk for instant payments',
    'Ignoring availability requirements (99.99%)',
    'Not comparing build vs. outsource TCO',
    'Underestimating integration complexity with core banking',
    'Not positioning Watson for real-time fraud detection',
    'Forgetting FedNow certification requirements'
  ],
  
  bestPractices: [
    'Quantify payment revenue losses and growth opportunities early',
    'Address fraud risk proactively with Watson real-time detection',
    'Emphasize Power reliability for 99.99% availability',
    'Calculate ROI with payment revenue and customer retention',
    'Compare owning vs. outsourcing with 5-year TCO',
    'Include FedNow certification in implementation plan',
    'Provide banking payment customer references',
    'Position as strategic revenue center investment'
  ],
  
  expertInsights: [
    'FedNow is Federal Reserve backed - it\'s happening, not optional',
    'Real-time payments are irrevocable - fraud detection is critical',
    'Payment processing should be revenue center, not cost center',
    'Banks that own infrastructure have 40% higher payment revenue',
    '99.99% availability requires Power-class infrastructure',
    'Watson can score payments in milliseconds - essential for instant payments',
    'Early FedNow adopters will capture market share and customer loyalty'
  ]
};

// Scenario 4: Wealth Management Platform Modernization
const bankingScenario004: TrainingScenario = {
  id: 'banking-wealth-management-004',
  title: 'Private Bank Needs Modern Wealth Management Platform',
  description: 'A private bank with $50B AUM and 5,000 high-net-worth clients needs to modernize their 20-year-old wealth management platform. Current system lacks digital client portal, mobile access, and integrated financial planning tools, causing client attrition to competitors with better digital experiences.',
  
  customerProfile: {
    company: 'Premier Private Bank',
    industry: 'Financial Services',
    size: 'Medium (500-1000 employees)',
    revenue: '$600M annually',
    employees: 850,
    location: 'Northeast USA',
    currentInfrastructure: {
      servers: '30 x86 servers running wealth management applications',
      storage: 'NetApp FAS (8 years old)',
      applications: ['Legacy portfolio management (20 years old)', 'CRM (Salesforce)', 'Trading platform', 'Reporting tools (custom built)'],
      operatingSystem: 'Windows Server 2012',
      virtualization: 'VMware vSphere 6.5',
      age: '8-20 years',
      endOfLife: '6-12 months',
      issues: [
        'No digital client portal - clients cannot view portfolios online',
        'No mobile access - losing younger HNW clients',
        'Manual financial planning - takes weeks instead of hours',
        'Siloed data - portfolio, CRM, and planning not integrated',
        'Cannot support model portfolios or automated rebalancing',
        'Advisors spend 60% of time on administrative tasks',
        'Compliance reporting is manual and error-prone',
        'Losing clients to competitors with better digital experience'
      ]
    },
    keyStakeholders: [
      {
        name: 'Elizabeth Morgan',
        role: 'CIO',
        priorities: ['Digital transformation', 'Advisor productivity', 'Client experience'],
        concerns: ['Implementation risk', 'Advisor adoption', 'Cost'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'James Patterson',
        role: 'CIO',
        priorities: ['Portfolio management', 'Model portfolios', 'Performance reporting'],
        concerns: ['Data migration', 'Trading integration', 'Accuracy'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Sarah Williams',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost efficiency', 'ROI'],
        concerns: ['High investment', 'Advisor productivity during transition', 'Payback period'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Michael Chen',
        role: 'Chief Risk Officer',
        priorities: ['Regulatory compliance', 'Audit trail', 'Risk management'],
        concerns: ['SEC compliance', 'Data security', 'Reporting accuracy'],
        influence: 'medium',
        supportLevel: 'neutral'
      }
    ],
    budget: '$5M-$8M',
    timeline: '12-18 months',
    decisionProcess: 'Board approval required. CIO and CIO are champions. CFO needs strong ROI case.'
  },
  
  businessContext: {
    challenges: [
      'Losing 10% of HNW clients annually to competitors with better digital experience',
      'No digital client portal - clients demand online access to portfolios',
      'No mobile access - losing younger HNW clients (under 50)',
      'Advisors spend 60% of time on administrative tasks vs. client relationships',
      'Manual financial planning takes 2-3 weeks - clients expect same-day',
      'Cannot support model portfolios or automated rebalancing',
      'Siloed data across portfolio management, CRM, and planning systems',
      'Compliance reporting is manual, time-consuming, and error-prone',
      'Cannot attract next-generation wealth advisors - technology is outdated',
      'Competitors have integrated wealth platforms - losing competitive advantage'
    ],
    businessImpact: [
      'Client attrition: 10% annually ($5B AUM lost, $25M revenue)',
      'Advisor productivity loss: 60% time on admin vs. 40% with clients',
      'Lost revenue: $10M annually from clients who left',
      'Cannot attract younger HNW clients (under 50)',
      'Advisor recruitment challenge: cannot attract top talent',
      'Compliance risk: manual processes prone to errors',
      'Competitive disadvantage: falling behind in wealth management',
      'Client satisfaction declining: NPS score dropped 15 points'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Reduce client attrition from 10% to 3% within 18 months',
      'Launch digital client portal with mobile access',
      'Increase advisor productivity by 40% (reduce admin time)',
      'Enable same-day financial planning (vs. 2-3 weeks)',
      'Implement model portfolios and automated rebalancing',
      'Integrate portfolio management, CRM, and planning',
      'Automate compliance reporting',
      'Attract younger HNW clients (target 30% under 50)'
    ],
    competitivePressure: 'Top wealth management firms have integrated digital platforms. Losing clients and advisors to competitors.',
    regulatoryRequirements: ['SEC compliance', 'FINRA rules', 'Fiduciary standards', 'Data privacy (GDPR, state laws)'],
    recentEvents: [
      'Lost $5B AUM in past 12 months to competitors',
      'Client satisfaction (NPS) dropped 15 points',
      'Board mandated digital transformation',
      'Top advisor left for competitor with better technology'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your wealth management platform modernization? How much AUM and revenue are you losing to client attrition?',
        purpose: 'Understand business drivers and quantify impact',
        category: 'pain-point',
        idealResponse: 'We\'re losing 10% of clients annually - that\'s $5B in AUM and $25M in revenue. Clients are leaving for competitors with better digital experience. We have no client portal or mobile access. Board has mandated we modernize or risk becoming irrelevant.',
        alternateResponses: [
          'Clients are demanding digital access',
          'We\'re losing clients to competitors'
        ],
        followUpQuestions: [
          'What percentage of clients are under 50?',
          'What features are clients requesting?',
          'What is your client satisfaction score?'
        ],
        scoringWeight: 15,
        hints: ['Quantify AUM and revenue losses', 'Client demographics matter', 'Digital experience is competitive advantage']
      },
      {
        question: 'How much time do your advisors spend on administrative tasks vs. client relationships? What is the impact on productivity?',
        purpose: 'Identify advisor productivity pain and opportunity',
        category: 'pain-point',
        idealResponse: 'Advisors spend 60% of time on admin tasks - portfolio updates, reporting, compliance. Only 40% with clients. This is backwards. We need to flip this to 80% client time. Advisors are frustrated and some have left for firms with better technology.',
        alternateResponses: [
          'Advisors are overwhelmed with admin work',
          'We\'re losing productivity to manual processes'
        ],
        followUpQuestions: [
          'What admin tasks take the most time?',
          'How many advisors have left recently?',
          'What is your advisor-to-client ratio?'
        ],
        scoringWeight: 12,
        hints: ['60% admin time is too high', 'Advisor retention is at risk', 'Technology can automate admin tasks']
      },
      {
        question: 'What are your clients\' expectations for digital access? Do they want mobile access to portfolios and financial plans?',
        purpose: 'Understand client digital expectations',
        category: 'business',
        idealResponse: 'Clients expect 24/7 digital access to portfolios, performance, and financial plans. They want mobile apps like they have for retail banking. Younger clients (under 50) demand this - we\'re losing them because we don\'t have it. This is table stakes now.',
        alternateResponses: [
          'Clients want digital access',
          'Mobile is critical for younger clients'
        ],
        followUpQuestions: [
          'What percentage of clients are under 50?',
          'What digital features are most important?',
          'Are clients comparing you to competitors?'
        ],
        scoringWeight: 12,
        hints: ['Digital access is table stakes', 'Younger clients expect mobile', 'Client portal is essential']
      },
      {
        question: 'How long does financial planning take currently? What would same-day planning enable?',
        purpose: 'Identify financial planning inefficiency',
        category: 'technical',
        idealResponse: 'Financial planning takes 2-3 weeks because it\'s manual. Advisors gather data from multiple systems, build plans in Excel, then present to clients. Same-day planning would be transformational - we could respond to client needs immediately and close more business.',
        alternateResponses: [
          'Planning is too slow and manual',
          'Clients expect faster turnaround'
        ],
        followUpQuestions: [
          'What tools do advisors use for planning?',
          'How many plans do you create monthly?',
          'What is the business impact of slow planning?'
        ],
        scoringWeight: 10,
        hints: ['2-3 weeks is too slow', 'Manual planning is inefficient', 'Same-day planning is competitive advantage']
      },
      {
        question: 'What are your model portfolio and rebalancing capabilities? Can you automate portfolio management?',
        purpose: 'Understand portfolio management needs',
        category: 'technical',
        idealResponse: 'We have no model portfolios - every client portfolio is custom managed. Rebalancing is manual and time-consuming. We need model portfolios for efficiency and automated rebalancing. This would save advisors hundreds of hours and improve client outcomes.',
        alternateResponses: [
          'Portfolio management is manual',
          'We need automation for efficiency'
        ],
        followUpQuestions: [
          'How many portfolios do you manage?',
          'How often do you rebalance?',
          'What is the cost of manual management?'
        ],
        scoringWeight: 10,
        hints: ['Model portfolios improve efficiency', 'Automated rebalancing saves time', 'Consistency improves outcomes']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$5-8M budget approved. Need solution in 12-18 months. Board approval required. CIO and CIO are champions. CFO needs strong ROI case showing revenue growth and cost savings.',
        alternateResponses: [
          'Budget is approved',
          'Board wants this done within 18 months'
        ],
        followUpQuestions: [
          'What ROI is required?',
          'Who are the key decision makers?',
          'What could delay this project?'
        ],
        scoringWeight: 8,
        hints: ['Budget is approved - qualified', 'Multiple stakeholders', 'ROI is critical']
      },
      {
        question: 'What are your data integration challenges? How many systems need to be integrated?',
        purpose: 'Understand integration complexity',
        category: 'technical',
        idealResponse: 'Data is siloed across portfolio management, Salesforce CRM, trading platform, and custom reporting tools. Advisors manually consolidate data. We need integrated platform where all data flows seamlessly. Integration is complex but essential.',
        alternateResponses: [
          'Data is siloed across multiple systems',
          'Integration is a major challenge'
        ],
        followUpQuestions: [
          'What systems must be integrated?',
          'Do you have APIs available?',
          'What is your data quality?'
        ],
        scoringWeight: 7,
        hints: ['Data silos reduce productivity', 'Integration is complex', 'APIs are essential']
      },
      {
        question: 'What are your compliance and regulatory reporting requirements? How much time does compliance take?',
        purpose: 'Identify compliance pain and requirements',
        category: 'business',
        idealResponse: 'SEC and FINRA compliance is manual and time-consuming. Compliance team spends weeks on quarterly reporting. Risk of errors is high. We need automated compliance reporting with audit trails. This is non-negotiable for regulators.',
        alternateResponses: [
          'Compliance is manual and risky',
          'Automated reporting is essential'
        ],
        followUpQuestions: [
          'What compliance reports are required?',
          'How many compliance staff do you have?',
          'What is the cost of manual compliance?'
        ],
        scoringWeight: 7,
        hints: ['Compliance is non-negotiable', 'Automation reduces risk', 'Audit trails are required']
      }
    ],
    expectedFindings: [
      'Significant client attrition (10% annually, $5B AUM, $25M revenue)',
      'Advisor productivity loss (60% admin time vs. 40% client time)',
      'No digital client portal or mobile access - competitive disadvantage',
      'Manual financial planning takes 2-3 weeks - clients expect same-day',
      'No model portfolios or automated rebalancing',
      'Data siloed across multiple systems',
      'Budget approved ($5-8M) - qualified opportunity',
      'Compliance reporting is manual and time-consuming'
    ],
    redFlags: [
      'If budget is under $4M - not enough for complete platform',
      'If timeline is less than 9 months - too aggressive',
      'If no executive sponsorship - will struggle',
      'If advisors resist change - adoption risk',
      'If data quality is poor - migration will be difficult'
    ],
    opportunities: [
      'Client retention: $5B AUM saved (reduce attrition from 10% to 3%)',
      'Revenue growth: $25M annually from retained clients',
      'Advisor productivity: 40% improvement (60% to 80% client time)',
      'Cost savings: $3M annually (reduced admin costs)',
      'Digital client portal: competitive advantage',
      'Model portfolios: efficiency and consistency',
      'Automated compliance: reduced risk and cost',
      'Attract younger HNW clients: growth opportunity'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Our advisors are used to the current system. What if they resist the new platform and productivity drops during transition?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'That\'s a valid concern - advisor adoption is critical. The good news is that modern wealth platforms are designed for advisors, not IT. The interface is intuitive and actually reduces their workload. We\'ll implement a phased rollout starting with early adopter advisors who are most frustrated with current system. They\'ll become champions for the rest. IBM provides comprehensive training, change management support, and advisor coaching. Most firms see productivity improve within 3 months as advisors realize they can spend 80% of time with clients vs. 60% on admin. We can include adoption metrics and support in the contract. Would a phased rollout with early adopters help de-risk this?',
        scoringCriteria: [
          'Acknowledged advisor adoption concern',
          'Explained intuitive interface designed for advisors',
          'Proposed phased rollout with early adopters',
          'Mentioned comprehensive training and change management',
          'Provided productivity improvement timeline (3 months)',
          'Quantified benefit (80% client time vs. 60% admin)',
          'Offered adoption metrics in contract'
        ],
        hints: [
          'Advisor adoption is critical - address it',
          'Phased rollout with early adopters de-risks',
          'Training and change management are essential',
          'Productivity improves within 3 months'
        ]
      },
      {
        objection: 'We have 20 years of client data in the current system. How do we migrate without losing data or disrupting client service?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Data migration is always the biggest concern - and rightfully so. IBM has migrated hundreds of wealth management platforms with zero data loss. We use a proven 4-phase approach: 1) Data assessment and cleansing, 2) Parallel run (both systems operating), 3) Phased migration by advisor or client segment, 4) Validation and cutover. The parallel run period ensures no disruption - advisors can verify data accuracy before cutover. We typically migrate in waves over 3-6 months, not all at once. IBM provides data migration tools, validation reports, and dedicated migration team. We can also include data accuracy guarantees in the contract. Many firms find their data is actually cleaner and more accessible after migration. Would you like to see our data migration methodology?',
        scoringCriteria: [
          'Acknowledged data migration concern',
          'Explained proven 4-phase migration approach',
          'Mentioned parallel run to prevent disruption',
          'Described phased migration over 3-6 months',
          'Highlighted data migration tools and team',
          'Offered data accuracy guarantees',
          'Positioned as opportunity to improve data quality'
        ],
        hints: [
          'Data migration is #1 concern - address thoroughly',
          'Parallel run prevents disruption',
          'Phased migration over 3-6 months is standard',
          'Offer data accuracy guarantees'
        ]
      },
      {
        objection: 'The investment is significant ($5-8M). How do we justify this to the board when we\'re already losing revenue?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'I understand - $5-8M is significant, especially when revenue is declining. But let\'s look at the business case. You\'re losing $25M annually in revenue from client attrition. Retaining just 7% more clients (from 10% to 3% attrition) saves $17.5M annually. Advisor productivity improvement (40%) saves $3M in costs. Total benefit is $20M+ annually. With $6.5M investment, payback is 4 months. Over 5 years, that\'s $100M in benefits vs. $6.5M investment - 15:1 ROI. The real question is: can you afford NOT to invest? Continuing to lose $25M annually while competitors gain market share is not sustainable. This is a strategic investment in survival and growth. Would you like a detailed ROI model?',
        scoringCriteria: [
          'Acknowledged investment size',
          'Quantified current losses ($25M annually)',
          'Calculated retention value ($17.5M annually)',
          'Added productivity savings ($3M annually)',
          'Showed payback period (4 months)',
          'Calculated 5-year ROI (15:1)',
          'Framed as cost of doing nothing',
          'Offered detailed ROI model'
        ],
        hints: [
          'Current losses are $25M annually',
          'Retention value is $17.5M annually',
          'Payback is 4 months - very fast',
          'Cost of doing nothing: continued losses'
        ]
      },
      {
        objection: 'What if IBM\'s platform doesn\'t integrate with our existing systems like Salesforce CRM and our trading platform?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Great question - integration is critical for wealth management. IBM has extensive experience integrating with Salesforce and major trading platforms. We have pre-built connectors for Salesforce, Charles River, Bloomberg, and other common systems. The platform uses open APIs for real-time data exchange. We\'ve done this integration hundreds of times with other wealth firms. IBM can do a technical assessment to map out the specific integration architecture and identify any custom requirements. Integration typically takes 8-12 weeks and is part of our standard implementation. We also have reference customers running IBM wealth platform with Salesforce. Would you like to speak with a reference customer about their integration experience?',
        scoringCriteria: [
          'Acknowledged integration importance',
          'Highlighted Salesforce and trading platform experience',
          'Mentioned pre-built connectors',
          'Explained open API architecture',
          'Provided timeline (8-12 weeks)',
          'Offered technical assessment',
          'Mentioned reference customers',
          'Positioned as standard implementation'
        ],
        hints: [
          'IBM has pre-built Salesforce connectors',
          'Integration done hundreds of times',
          'Takes 8-12 weeks as standard implementation',
          'Offer reference customer'
        ]
      },
      {
        objection: 'How do we ensure SEC and FINRA compliance with a new platform? We can\'t afford compliance violations.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'Compliance is absolutely critical - violations are not an option. IBM\'s wealth platform is designed for SEC and FINRA compliance from the ground up. It includes automated compliance reporting, audit trails, and regulatory filings. The platform tracks all advisor-client interactions, portfolio changes, and transactions for regulatory review. We have built-in compliance rules engine that alerts on potential violations before they happen. IBM also provides compliance consulting to help configure rules for your specific requirements. Many RIAs and broker-dealers use IBM platform specifically because of compliance capabilities. We can include compliance certification and regulatory support in the implementation. Would you like to see the compliance features and reporting capabilities?',
        scoringCriteria: [
          'Acknowledged compliance criticality',
          'Explained built-in compliance features',
          'Mentioned automated reporting and audit trails',
          'Described compliance rules engine',
          'Highlighted proactive violation prevention',
          'Offered compliance consulting',
          'Mentioned RIA/broker-dealer customers',
          'Offered compliance certification'
        ],
        hints: [
          'Compliance is built into platform',
          'Automated reporting and audit trails',
          'Rules engine prevents violations',
          'Offer compliance consulting and certification'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: [
      {
        objection: 'Why not just upgrade our current system instead of replacing it entirely?',
        stakeholder: 'CFO',
        difficulty: 'very difficult',
        category: 'strategy',
        customResponse: 'That\'s a fair question - incremental improvement seems less risky. However, your current platform is 20 years old and built on outdated technology. It\'s like trying to turn a flip phone into a smartphone - the foundation isn\'t there. You can\'t add a modern client portal, mobile apps, or integrated financial planning to a 20-year-old system without essentially rebuilding it. That would cost more and take longer than replacing it. Meanwhile, you\'re losing $25M annually in revenue and falling further behind competitors. The platform is also approaching end-of-life with security vulnerabilities. Incremental improvement might save money short-term, but you\'ll continue losing clients and advisors. A modern platform is an investment in staying competitive for the next 10+ years. Would you like to see a cost comparison of upgrade vs. replace over 5 years?',
        scoringCriteria: [
          'Acknowledged incremental approach appeal',
          'Explained technical limitations of 20-year-old platform',
          'Used analogy (flip phone to smartphone)',
          'Quantified ongoing losses ($25M annually)',
          'Highlighted security and end-of-life risks',
          'Positioned as long-term strategic investment',
          'Offered cost comparison analysis'
        ],
        hints: [
          'Can\'t add modern features to 20-year-old foundation',
          'Continuing to lose $25M annually',
          'Security vulnerabilities and end-of-life approaching',
          'Modern platform is 10+ year strategic investment'
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
          productName: 'IBM Wealth Management Platform (Cloud Pak for Data)',
          reason: 'Modern cloud-native wealth management platform with digital client portal, mobile apps, integrated financial planning, model portfolios, and automated compliance.',
          configuration: 'Wealth platform on IBM Cloud, client portal, mobile apps (iOS/Android), financial planning tools, portfolio management, model portfolios, automated rebalancing, compliance reporting',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for portfolio analytics, financial planning calculations, and real-time reporting. Proven reliability for wealth management workloads.',
          configuration: '2x Power E1080, 24-core, 1.5TB RAM each, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for client data, portfolio history, and document management. Low latency for real-time analytics and reporting.',
          configuration: 'FlashSystem 9500, 250TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'supporting'
        }
      ],
      architecture: 'IBM Wealth Management Platform on IBM Cloud with hybrid integration to on-premises Power E1080 for portfolio analytics. FlashSystem 9500 for high-performance storage. Integration with Salesforce CRM and trading platforms via APIs.',
      sizing: 'Sized for 5,000 HNW clients, 100 advisors, $50B AUM. Supports 10K concurrent client portal users. 5-year growth capacity to 10,000 clients and $100B AUM.',
      deployment: 'Phased approach: 1) Platform setup and integration (12 weeks), 2) Pilot with 10 early adopter advisors (8 weeks), 3) Phased rollout to all advisors (16 weeks), 4) Client portal launch (4 weeks)'
    },
    pricing: {
      hardware: '$2.5M (2x Power E1080 + FlashSystem 9500)',
      software: '$2.8M (Wealth platform, client portal, mobile apps, financial planning, 5-year license)',
      services: '$1.2M (IBM Consulting: implementation, data migration, integration, training, change management)',
      support: '$200K/year (24x7 support with 4-hour response)',
      total: '$6.5M initial + $200K/year support',
      financing: 'IBM Flex financing available - $137K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$20M annually (client retention $17.5M, advisor productivity $3M)',
      productivityGains: '$5M annually (advisor efficiency, automated compliance)',
      riskReduction: 'Prevent client attrition, improve compliance, attract younger HNW clients',
      roi: '4 months',
      paybackPeriod: '4 months',
      tco: '5-year TCO: $7.5M investment vs. $125M in benefits (retention + productivity) = $117.5M net benefit'
    },
    competitivePositioning: 'IBM Wealth Management Platform provides complete digital experience that competitors have. Power infrastructure ensures performance for portfolio analytics. Watson AI enables personalized financial planning.',
    nextSteps: [
      'Schedule demo of client portal and advisor workstation',
      'Provide detailed ROI analysis with client retention modeling',
      'Arrange reference call with similar wealth management firm',
      'Conduct technical assessment for Salesforce and trading platform integration',
      'Develop phased rollout plan with early adopter pilot',
      'Present to Board with CIO, CIO, and CFO'
    ],
    requiredElements: [
      'Must include IBM Wealth Management Platform with client portal',
      'Must include mobile apps for iOS and Android',
      'Must include integrated financial planning tools',
      'Must include model portfolios and automated rebalancing',
      'Must integrate with Salesforce CRM',
      'Must include automated compliance reporting',
      'Must include IBM Consulting for data migration and change management'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified client attrition and revenue impact',
        'Identified advisor productivity loss (60% admin time)',
        'Uncovered digital client portal and mobile access needs',
        'Identified financial planning inefficiency (2-3 weeks)',
        'Understood model portfolio and rebalancing needs',
        'Qualified budget and timeline',
        'Assessed data integration complexity',
        'Identified compliance reporting requirements'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed advisor adoption with phased rollout and training',
        'Handled data migration with proven methodology',
        'Addressed cost objection with ROI and retention value',
        'Handled integration concern with Salesforce experience',
        'Addressed compliance with built-in features',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Wealth Management Platform as primary solution',
        'Included Power E1080 for portfolio analytics',
        'Included FlashSystem 9500 for storage performance',
        'Addressed all pain points (digital, productivity, compliance)',
        'Proposed phased rollout with early adopter pilot',
        'Included data migration and change management'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified client retention value ($17.5M annually)',
        'Quantified productivity savings ($3M annually)',
        'Calculated ROI (4 months)',
        'Articulated competitive advantage',
        'Positioned as strategic investment'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Wealth Management Digital Transformation',
      description: 'How to position modern wealth platforms and quantify client retention value',
      skillLevel: 'advanced'
    },
    {
      concept: 'Advisor Productivity',
      description: 'Understanding advisor workflow and how technology improves productivity',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Data Migration Strategy',
      description: 'How to address data migration concerns with proven methodology',
      skillLevel: 'advanced'
    },
    {
      concept: 'Change Management',
      description: 'How to manage advisor adoption with phased rollout and training',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Wealth Management ROI',
      description: 'How to calculate client retention value and advisor productivity savings',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'wealth-management', 'private-banking', 'digital-transformation', 'client-portal', 'advisor-productivity', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis', 'change-management'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    prerequisites: ['Understanding of wealth management', 'Familiarity with advisor workflows', 'Financial services knowledge'],
    relatedScenarios: ['banking-fraud-detection-001', 'banking-digital-platform-002'],
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying client attrition - $25M in lost revenue gets attention',
    'Advisor productivity (60% admin time) is major pain point',
    'Digital client portal is table stakes - clients expect it',
    'Data migration is #1 concern - address with proven methodology',
    'Use ROI to overcome cost objections - 4-month payback is compelling',
    'Propose phased rollout to de-risk advisor adoption',
    'Position as strategic investment in survival and growth'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying business impact',
    'Not addressing advisor adoption and change management',
    'Ignoring data migration complexity',
    'Not positioning digital client portal as competitive necessity',
    'Comparing to upgrade cost instead of cost of doing nothing',
    'Not emphasizing advisor productivity improvement',
    'Forgetting compliance and regulatory requirements'
  ],
  
  bestPractices: [
    'Quantify client attrition and revenue losses early',
    'Emphasize advisor productivity improvement (60% to 80% client time)',
    'Position digital client portal as competitive necessity',
    'Address data migration with proven 4-phase methodology',
    'Calculate ROI with client retention and productivity savings',
    'Propose phased rollout with early adopter advisors',
    'Include change management and training in proposal',
    'Provide wealth management customer references'
  ],
  
  expertInsights: [
    'Client attrition in wealth management is expensive - $25M annually is typical',
    'Advisors spending 60% time on admin is common problem - technology fixes this',
    'Digital client portal is table stakes - clients expect it like retail banking',
    'Data migration is always #1 concern - proven methodology is essential',
    'Phased rollout with early adopters de-risks advisor adoption',
    'Wealth management ROI is compelling - 4-month payback is typical',
    'Younger HNW clients (under 50) demand digital experience - growth opportunity'
  ]
};

// Scenario 5: Commercial Lending Automation
const bankingScenario005: TrainingScenario = {
  id: 'banking-commercial-lending-005',
  title: 'Regional Bank Needs Commercial Lending Automation',
  description: 'A regional bank processing 2,000 commercial loans annually ($800M volume) needs to automate their manual loan origination process. Current 45-day cycle time and 15% operational costs are causing them to lose deals to faster competitors with automated underwriting and decisioning.',
  
  customerProfile: {
    company: 'Midwest Commercial Bank',
    industry: 'Banking',
    size: 'Medium (500-1000 employees)',
    revenue: '$450M annually',
    employees: 750,
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '25 x86 servers running loan origination system',
      storage: 'Dell EMC (6 years old)',
      applications: ['Legacy loan origination (15 years old)', 'Core banking system', 'Credit bureau integrations', 'Document management'],
      operatingSystem: 'Windows Server 2016',
      virtualization: 'VMware vSphere 6.7',
      age: '6-15 years',
      endOfLife: '12-18 months',
      issues: [
        'Manual loan origination takes 45 days - losing deals to competitors',
        'No automated underwriting - every loan manually reviewed',
        'Paper-based documentation - scanning and manual data entry',
        'Cannot scale - adding loan officers does not increase capacity',
        'Operational costs are 15% of loan volume ($120M annually)',
        'Credit decisions inconsistent - depends on loan officer experience',
        'Compliance risk - manual processes prone to errors',
        'Customer experience poor - borrowers expect faster decisions'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Martinez',
        role: 'CIO',
        priorities: ['Loan automation', 'Operational efficiency', 'Competitive advantage'],
        concerns: ['Implementation complexity', 'Integration with core banking', 'Cost'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Lee',
        role: 'Chief Risk Officer',
        priorities: ['Credit quality', 'Risk management', 'Compliance'],
        concerns: ['Automated decisioning accuracy', 'Regulatory compliance', 'Model risk'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Robert Chen',
        role: 'CFO',
        priorities: ['Cost reduction', 'Revenue growth', 'ROI'],
        concerns: ['High investment', 'Payback period', 'Operational disruption'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Sarah Williams',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Integration', 'Support'],
        concerns: ['Core banking integration', 'Data migration', 'Staff training'],
        influence: 'medium',
        supportLevel: 'supporter'
      }
    ],
    budget: '$4M-$6M',
    timeline: '12-15 months',
    decisionProcess: 'Board approval required. CIO is champion. Chief Risk Officer and CFO need strong business case.'
  },
  
  businessContext: {
    challenges: [
      'Losing 20% of commercial loan deals to faster competitors',
      'Manual loan origination takes 45 days - borrowers expect 10-15 days',
      'No automated underwriting - every loan manually reviewed by credit analysts',
      'Paper-based documentation - scanning, manual data entry, errors',
      'Cannot scale - adding loan officers does not increase capacity proportionally',
      'Operational costs 15% of loan volume ($120M annually) - industry average is 8%',
      'Credit decisions inconsistent - depends on loan officer experience and judgment',
      'Compliance risk - manual processes prone to errors and audit findings',
      'Customer experience poor - borrowers frustrated with slow process',
      'Cannot compete with fintech lenders offering instant decisions'
    ],
    businessImpact: [
      'Lost revenue: $160M annually (20% of deals lost to competitors)',
      'High operational costs: $120M annually (15% vs. 8% industry average)',
      'Excess cost: $56M annually (7% difference × $800M volume)',
      'Loan officer productivity: 50 loans/year vs. 150 with automation',
      'Customer satisfaction declining: NPS dropped 20 points',
      'Competitive disadvantage: falling behind in commercial lending market',
      'Compliance risk: manual processes increase audit findings',
      'Cannot attract younger business borrowers who expect digital experience'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Reduce loan cycle time from 45 days to 10-15 days',
      'Implement automated underwriting and credit decisioning',
      'Reduce operational costs from 15% to 8% of loan volume',
      'Increase loan officer productivity from 50 to 150 loans/year',
      'Improve customer satisfaction (NPS) by 25 points',
      'Capture lost revenue ($160M annually)',
      'Ensure regulatory compliance with automated audit trails',
      'Enable digital loan application and document upload'
    ],
    competitivePressure: 'Fintech lenders and larger banks have automated lending platforms. Losing market share rapidly.',
    regulatoryRequirements: ['Fair lending compliance', 'TILA-RESPA', 'Bank Secrecy Act', 'OFAC screening', 'Model risk management'],
    recentEvents: [
      'Lost $160M in loan volume last year to competitors',
      'Customer satisfaction (NPS) dropped 20 points',
      'Board mandated lending automation',
      'Regulatory audit found compliance gaps in manual processes'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your commercial lending automation initiative? How much loan volume are you losing to competitors?',
        purpose: 'Understand business drivers and quantify impact',
        category: 'pain-point',
        idealResponse: 'We\'re losing 20% of commercial loan deals - $160M annually - because our 45-day cycle time is too slow. Borrowers expect decisions in 10-15 days. Competitors with automated underwriting are winning. Board has mandated we automate or risk losing more market share.',
        alternateResponses: [
          'Loan cycle time is too slow',
          'Losing deals to faster competitors'
        ],
        followUpQuestions: [
          'What is your current loan cycle time?',
          'What cycle time do borrowers expect?',
          'How much volume are you losing?'
        ],
        scoringWeight: 15,
        hints: ['Quantify lost revenue ($160M)', 'Cycle time gap (45 vs. 10-15 days)', 'Competitive pressure is urgent']
      },
      {
        question: 'What are your operational costs as a percentage of loan volume? How does this compare to industry benchmarks?',
        purpose: 'Identify cost reduction opportunity',
        category: 'pain-point',
        idealResponse: 'Our operational costs are 15% of loan volume - $120M annually on $800M volume. Industry average is 8%. That\'s $56M in excess costs annually. Manual processes are expensive - credit analysts, document processing, data entry. We need automation to reduce costs.',
        alternateResponses: [
          'Operational costs are too high',
          'Manual processes are expensive'
        ],
        followUpQuestions: [
          'What is your loan volume?',
          'How many credit analysts do you have?',
          'What processes are most manual?'
        ],
        scoringWeight: 15,
        hints: ['15% vs. 8% industry average', '$56M excess costs annually', 'Automation reduces costs']
      },
      {
        question: 'How many loans can your loan officers process annually? What limits their productivity?',
        purpose: 'Understand productivity constraints',
        category: 'technical',
        idealResponse: 'Loan officers process about 50 loans per year. They spend 60% of time on paperwork, data entry, and chasing documents. Only 40% on customer relationships. With automation, industry benchmark is 150 loans per year. We need to triple productivity to grow without adding headcount.',
        alternateResponses: [
          'Loan officer productivity is low',
          'Too much time on paperwork'
        ],
        followUpQuestions: [
          'How much time is spent on paperwork?',
          'What is industry benchmark productivity?',
          'How many loan officers do you have?'
        ],
        scoringWeight: 12,
        hints: ['50 vs. 150 loans/year', '60% time on paperwork', 'Automation triples productivity']
      },
      {
        question: 'What is your current underwriting and credit decisioning process? Is it automated or manual?',
        purpose: 'Assess automation opportunity',
        category: 'technical',
        idealResponse: 'Underwriting is completely manual. Credit analysts review every loan application, pull credit reports, analyze financials, and make recommendations. Takes 2-3 weeks per loan. Decisions are inconsistent - depends on analyst experience. We need automated underwriting with consistent credit models and instant preliminary decisions.',
        alternateResponses: [
          'Underwriting is manual and slow',
          'Credit decisions are inconsistent'
        ],
        followUpQuestions: [
          'How long does underwriting take?',
          'How many credit analysts do you have?',
          'What credit models do you use?'
        ],
        scoringWeight: 12,
        hints: ['Manual underwriting takes 2-3 weeks', 'Inconsistent decisions', 'Automated models provide consistency']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$4-6M budget approved. Need solution in 12-15 months. Board approval required. CIO is champion. Chief Risk Officer needs assurance on credit quality and compliance. CFO needs strong ROI case showing cost savings and revenue growth.',
        alternateResponses: [
          'Budget is approved',
          'Board wants this done within 15 months'
        ],
        followUpQuestions: [
          'What ROI is required?',
          'Who are the key decision makers?',
          'What could delay this project?'
        ],
        scoringWeight: 10,
        hints: ['Budget approved - qualified', 'Multiple stakeholders', 'ROI is critical']
      },
      {
        question: 'What are your integration requirements? What systems need to be connected?',
        purpose: 'Understand integration complexity',
        category: 'technical',
        idealResponse: 'Need to integrate with core banking system, credit bureaus (Experian, Equifax, TransUnion), document management, and accounting systems. Real-time data exchange is critical. Current integrations are batch and manual. We need APIs for seamless integration.',
        alternateResponses: [
          'Multiple systems need integration',
          'Current integrations are manual'
        ],
        followUpQuestions: [
          'What is your core banking system?',
          'Do you have APIs available?',
          'What is your data quality?'
        ],
        scoringWeight: 8,
        hints: ['Core banking integration is critical', 'Credit bureau APIs needed', 'Real-time data exchange']
      },
      {
        question: 'What are your regulatory compliance requirements? How do you ensure fair lending and audit trails?',
        purpose: 'Identify compliance needs',
        category: 'business',
        idealResponse: 'Fair lending compliance is critical - we must demonstrate consistent credit decisions. Need complete audit trails for every loan decision. TILA-RESPA compliance for disclosures. Bank Secrecy Act and OFAC screening. Recent audit found gaps in manual processes. Automated system must have built-in compliance.',
        alternateResponses: [
          'Compliance is critical',
          'Audit found gaps in manual processes'
        ],
        followUpQuestions: [
          'What compliance reports are required?',
          'What were the audit findings?',
          'How do you ensure fair lending?'
        ],
        scoringWeight: 8,
        hints: ['Fair lending is non-negotiable', 'Audit trails required', 'Automation improves compliance']
      },
      {
        question: 'What is your customer experience vision? What do borrowers expect?',
        purpose: 'Understand customer expectations',
        category: 'business',
        idealResponse: 'Borrowers expect digital loan application, instant preliminary decisions, and 10-15 day final decisions. They want to upload documents online, track loan status, and communicate digitally. Our current paper-based process frustrates them. Customer satisfaction (NPS) dropped 20 points. We need modern digital experience.',
        alternateResponses: [
          'Borrowers expect digital experience',
          'Customer satisfaction is declining'
        ],
        followUpQuestions: [
          'What is your current NPS score?',
          'What features do borrowers request?',
          'How do competitors compare?'
        ],
        scoringWeight: 7,
        hints: ['Digital experience is table stakes', 'NPS dropped 20 points', 'Borrowers compare to fintech']
      }
    ],
    expectedFindings: [
      'Significant lost revenue ($160M annually, 20% of deals)',
      'High operational costs (15% vs. 8% industry average, $56M excess)',
      'Low loan officer productivity (50 vs. 150 loans/year)',
      'Manual underwriting (2-3 weeks, inconsistent decisions)',
      'Budget approved ($4-6M) - qualified opportunity',
      'Complex integration requirements (core banking, credit bureaus)',
      'Compliance gaps in manual processes',
      'Poor customer experience (NPS dropped 20 points)'
    ],
    redFlags: [
      'If budget is under $3M - not enough for complete automation',
      'If timeline is less than 9 months - too aggressive',
      'If no executive sponsorship - will struggle',
      'If credit quality is poor - automation will not fix bad credit models',
      'If core banking system is very old - integration may be difficult'
    ],
    opportunities: [
      'Revenue growth: $160M annually (capture lost deals)',
      'Cost savings: $56M annually (reduce from 15% to 8%)',
      'Productivity: 3x improvement (50 to 150 loans/year per officer)',
      'Customer satisfaction: 25-point NPS improvement',
      'Competitive advantage: match fintech speed',
      'Compliance: automated audit trails and fair lending',
      'Scalability: grow without proportional headcount increase'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Automated underwriting might approve bad loans or decline good ones. How do we ensure credit quality?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'That\'s the #1 concern with lending automation - and rightfully so. IBM\'s commercial lending platform uses Watson AI trained on your historical loan performance data. It learns what makes a good loan for YOUR bank, not generic models. You maintain full control over credit policies and approval thresholds. The system provides recommendations, but loan officers make final decisions on complex loans. For straightforward loans within policy, automation provides consistent decisions based on proven criteria. Most banks see credit quality improve because decisions are consistent and based on data, not individual judgment. We can run parallel testing - automated decisions vs. manual - to prove accuracy before going live. Would you like to see how the credit models work?',
        scoringCriteria: [
          'Acknowledged credit quality concern',
          'Explained Watson AI learns from bank\'s data',
          'Emphasized bank maintains control over policies',
          'Described human oversight for complex loans',
          'Highlighted consistency improves quality',
          'Offered parallel testing to prove accuracy',
          'Positioned as improvement over manual inconsistency'
        ],
        hints: [
          'Credit quality is #1 concern - address thoroughly',
          'Watson learns from bank\'s historical data',
          'Bank maintains control over policies',
          'Offer parallel testing to prove accuracy'
        ]
      },
      {
        objection: 'Our loan officers are used to manual processes. What if they resist automation and productivity drops?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'Change management is critical for lending automation success. The good news is that loan officers typically embrace automation because it eliminates the paperwork they hate. They can focus on customer relationships instead of data entry. IBM provides comprehensive training and phased rollout - start with simple loans, then expand to complex ones. Loan officers see productivity improve within 3 months as they process 150 loans/year vs. 50. We also include adoption metrics and coaching in the implementation. Most banks find loan officers become champions because they can serve more customers and earn more commissions. Would a phased rollout with early adopter loan officers help de-risk this?',
        scoringCriteria: [
          'Acknowledged change management concern',
          'Explained loan officers benefit from automation',
          'Described phased rollout approach',
          'Mentioned comprehensive training',
          'Quantified productivity improvement (3x)',
          'Highlighted commission benefit for loan officers',
          'Offered early adopter approach'
        ],
        hints: [
          'Loan officers benefit from automation',
          'Phased rollout de-risks adoption',
          'Productivity improves 3x within 3 months',
          'Loan officers become champions'
        ]
      },
      {
        objection: 'The investment is significant ($4-6M). How do we justify this when we\'re already losing revenue?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'I understand - $4-6M is significant when revenue is declining. But let\'s look at the business case. You\'re losing $160M annually in loan volume to competitors. Capturing just half of that ($80M) generates $6.4M in revenue (8% margin). Your excess operational costs are $56M annually (15% vs. 8%). Reducing to 10% saves $40M annually. Total benefit is $46M+ annually. With $5M investment, payback is 6 weeks. Over 5 years, that\'s $230M in benefits vs. $5M investment - 46:1 ROI. The real question is: can you afford NOT to invest? Continuing to lose $160M annually while competitors gain market share is not sustainable. This is a strategic investment in survival and growth. Would you like a detailed ROI model?',
        scoringCriteria: [
          'Acknowledged investment size',
          'Quantified lost revenue ($160M annually)',
          'Calculated revenue capture ($80M × 8% = $6.4M)',
          'Calculated cost savings ($40M annually)',
          'Showed payback period (6 weeks)',
          'Calculated 5-year ROI (46:1)',
          'Framed as cost of doing nothing',
          'Offered detailed ROI model'
        ],
        hints: [
          'Lost revenue is $160M annually',
          'Cost savings are $40M annually',
          'Payback is 6 weeks - extremely fast',
          'Cost of doing nothing: continued losses'
        ]
      },
      {
        objection: 'What if the system doesn\'t integrate with our core banking system? We can\'t replace that.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Core banking integration is always the biggest technical concern. IBM has extensive experience integrating with all major core banking systems - Jack Henry, Fiserv, FIS, and others. We have pre-built connectors and APIs for real-time data exchange. The lending platform sits on top of your core system - you don\'t replace it. We\'ve done this integration hundreds of times with other banks. IBM can do a technical assessment to map out the specific integration architecture and identify any custom requirements. Integration typically takes 8-12 weeks and is part of our standard implementation. We also have reference customers running IBM lending platform with your core banking system. Would you like to speak with a reference customer about their integration experience?',
        scoringCriteria: [
          'Acknowledged integration concern',
          'Highlighted experience with major core systems',
          'Mentioned pre-built connectors and APIs',
          'Explained platform sits on top of core',
          'Provided timeline (8-12 weeks)',
          'Offered technical assessment',
          'Mentioned reference customers',
          'Positioned as standard implementation'
        ],
        hints: [
          'IBM has pre-built core banking connectors',
          'Integration done hundreds of times',
          'Takes 8-12 weeks as standard implementation',
          'Offer reference customer'
        ]
      },
      {
        objection: 'How do we ensure regulatory compliance with automated lending? Fair lending is critical.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'Fair lending compliance is absolutely critical - violations are not an option. IBM\'s lending platform is designed for regulatory compliance from the ground up. It includes complete audit trails for every loan decision, automated fair lending testing, and compliance reporting. The system tracks all credit factors and decisions for regulatory review. We have built-in compliance rules engine that alerts on potential fair lending issues before they happen. IBM also provides compliance consulting to help configure rules for your specific requirements. Many banks use IBM platform specifically because of compliance capabilities. The automated audit trails actually improve compliance vs. manual processes where documentation is inconsistent. We can include compliance certification and regulatory support in the implementation. Would you like to see the compliance features and reporting capabilities?',
        scoringCriteria: [
          'Acknowledged compliance criticality',
          'Explained built-in compliance features',
          'Mentioned complete audit trails',
          'Described fair lending testing',
          'Highlighted proactive issue detection',
          'Offered compliance consulting',
          'Positioned automation as compliance improvement',
          'Offered compliance certification'
        ],
        hints: [
          'Compliance is built into platform',
          'Complete audit trails for every decision',
          'Fair lending testing automated',
          'Automation improves compliance vs. manual'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: []
  },
  
  recommendationPhase: {
    primaryProduct: 'watson-studio',
    supportingProducts: ['power-e1080', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'watson-studio',
          productName: 'IBM Commercial Lending Platform (Cloud Pak for Data)',
          reason: 'Modern cloud-native lending platform with automated underwriting, credit decisioning, digital loan application, document management, and compliance.',
          configuration: 'Lending platform on IBM Cloud, Watson AI for credit decisioning, digital loan application, automated underwriting, document management, compliance reporting',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for credit decisioning, financial analysis, and real-time loan processing. Proven reliability for banking workloads.',
          configuration: '2x Power E1080, 24-core, 1TB RAM each, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for loan documents, financial data, and credit reports. Low latency for real-time decisioning.',
          configuration: 'FlashSystem 9500, 200TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'supporting'
        }
      ],
      architecture: 'IBM Commercial Lending Platform on IBM Cloud with hybrid integration to on-premises Power E1080 for credit decisioning. FlashSystem 9500 for high-performance storage. Integration with core banking system and credit bureaus via APIs.',
      sizing: 'Sized for 2,000 loans annually with growth capacity to 6,000 loans. Supports 50 loan officers with expansion to 150. Real-time credit decisioning and document processing.',
      deployment: 'Phased approach: 1) Platform setup and integration (12 weeks), 2) Pilot with simple loans (8 weeks), 3) Expand to complex loans (12 weeks), 4) Full production rollout (8 weeks)'
    },
    pricing: {
      hardware: '$2M (2x Power E1080 + FlashSystem 9500)',
      software: '$2.2M (Lending platform, Watson AI, 5-year license)',
      services: '$800K (IBM Consulting: implementation, integration, training, change management)',
      support: '$150K/year (24x7 support with 4-hour response)',
      total: '$5M initial + $150K/year support',
      financing: 'IBM Flex financing available - $105K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$46M annually (revenue capture $6.4M, cost reduction $40M)',
      productivityGains: '$8M annually (loan officer efficiency)',
      riskReduction: 'Prevent lost revenue, improve compliance, consistent credit quality',
      roi: '6 weeks',
      paybackPeriod: '6 weeks',
      tco: '5-year TCO: $5.75M investment vs. $270M in benefits = $264M net benefit'
    },
    competitivePositioning: 'IBM Commercial Lending Platform provides fintech-speed automation that competitors have. Power infrastructure ensures performance for credit decisioning. Watson AI enables intelligent underwriting.',
    nextSteps: [
      'Schedule demo of lending platform and automated underwriting',
      'Provide detailed ROI analysis with revenue and cost modeling',
      'Arrange reference call with similar regional bank',
      'Conduct technical assessment for core banking integration',
      'Develop phased rollout plan with pilot loans',
      'Present to Board with CIO, Chief Risk Officer, and CFO'
    ],
    requiredElements: [
      'Must include IBM Commercial Lending Platform with automated underwriting',
      'Must include Watson AI for credit decisioning',
      'Must include digital loan application and document upload',
      'Must integrate with core banking system',
      'Must integrate with credit bureaus (Experian, Equifax, TransUnion)',
      'Must include compliance reporting and audit trails',
      'Must include IBM Consulting for change management'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified lost revenue and deals ($160M, 20%)',
        'Identified operational cost gap (15% vs. 8%, $56M excess)',
        'Uncovered productivity constraints (50 vs. 150 loans/year)',
        'Assessed manual underwriting process (2-3 weeks)',
        'Qualified budget and timeline',
        'Identified integration requirements',
        'Uncovered compliance gaps',
        'Understood customer experience issues'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed credit quality with Watson AI and parallel testing',
        'Handled change management with phased rollout',
        'Addressed cost objection with ROI (6-week payback)',
        'Handled integration with core banking experience',
        'Addressed compliance with built-in features',
        'Used data and examples to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Commercial Lending Platform as primary solution',
        'Included Power E1080 for credit decisioning',
        'Included FlashSystem 9500 for storage performance',
        'Addressed all pain points (speed, cost, productivity, compliance)',
        'Proposed phased rollout with pilot',
        'Included change management and training'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified revenue capture ($6.4M annually)',
        'Quantified cost savings ($40M annually)',
        'Calculated ROI (6 weeks)',
        'Articulated competitive advantage',
        'Positioned as strategic investment'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Commercial Lending Automation',
      description: 'How to position lending platforms and quantify revenue and cost benefits',
      skillLevel: 'advanced'
    },
    {
      concept: 'Credit Decisioning AI',
      description: 'Understanding Watson AI for automated underwriting and credit models',
      skillLevel: 'advanced'
    },
    {
      concept: 'Lending ROI Calculation',
      description: 'How to calculate revenue capture, cost savings, and productivity gains',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Change Management',
      description: 'How to manage loan officer adoption with phased rollout',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Regulatory Compliance',
      description: 'Understanding fair lending, audit trails, and compliance automation',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'commercial-lending', 'loan-automation', 'credit-decisioning', 'watson-ai', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    prerequisites: ['Understanding of commercial lending', 'Familiarity with credit decisioning', 'Banking knowledge'],
    relatedScenarios: ['banking-fraud-detection-001', 'banking-digital-platform-002'],
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying lost revenue - $160M gets attention',
    'Operational cost gap (15% vs. 8%) is $56M annually - huge opportunity',
    'Loan officer productivity (3x improvement) is compelling',
    'Credit quality concern is #1 - address with Watson AI and parallel testing',
    'Use ROI to overcome cost objections - 6-week payback is exceptional',
    'Propose phased rollout to de-risk adoption',
    'Position as strategic investment in competitive survival'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying business impact',
    'Not addressing credit quality and compliance concerns',
    'Ignoring change management and loan officer adoption',
    'Not positioning automation as productivity multiplier',
    'Comparing to manual cost instead of cost of doing nothing',
    'Not emphasizing customer experience improvement',
    'Forgetting regulatory compliance requirements'
  ],
  
  bestPractices: [
    'Quantify lost revenue and excess costs early',
    'Emphasize loan officer productivity improvement (3x)',
    'Address credit quality with Watson AI and parallel testing',
    'Calculate ROI with revenue capture and cost savings',
    'Propose phased rollout with pilot loans',
    'Include change management and training in proposal',
    'Highlight compliance automation and audit trails',
    'Provide banking customer references'
  ],
  
  expertInsights: [
    'Lost revenue in commercial lending is expensive - $160M annually is typical',
    'Operational costs of 15% vs. 8% industry average is $56M opportunity',
    'Loan officer productivity can triple with automation (50 to 150 loans/year)',
    'Credit quality concern is #1 - Watson AI and parallel testing address it',
    'Lending automation ROI is compelling - 6-week payback is typical',
    'Phased rollout with pilot loans de-risks adoption',
    'Compliance automation improves audit trails vs. manual processes'
  ]
};

// Scenario 6: Branch Transformation and Digital Teller
const bankingScenario006: TrainingScenario = {
  id: 'banking-branch-transformation-006',
  title: 'Community Bank Needs Branch Transformation Strategy',
  description: 'A community bank with 45 branches experiencing 40% decline in foot traffic needs to transform branches from transaction centers to advisory hubs. Current branch model is expensive ($2.5M per branch annually) while customers prefer digital channels for routine transactions.',
  
  customerProfile: {
    company: 'Community Trust Bank',
    industry: 'Banking',
    size: 'Medium (500-1000 employees)',
    revenue: '$380M annually',
    employees: 650,
    location: 'Southeast USA',
    currentInfrastructure: {
      servers: '20 x86 servers running branch systems',
      storage: 'NetApp FAS (7 years old)',
      applications: ['Branch teller system (12 years old)', 'Core banking', 'ATM network', 'Appointment scheduling'],
      operatingSystem: 'Windows Server 2016',
      virtualization: 'VMware vSphere 6.7',
      age: '7-12 years',
      endOfLife: '12-18 months',
      issues: [
        'Branch foot traffic down 40% in 3 years - customers prefer digital',
        'Branch operating costs $2.5M per branch annually - unsustainable',
        'Tellers spend 80% time on routine transactions vs. 20% on sales',
        'Cannot compete with digital-only banks on cost structure',
        'Branches are underutilized - average 30% capacity',
        'No video banking or remote teller capabilities',
        'Cannot offer extended hours without high labor costs',
        'Younger customers (under 40) rarely visit branches'
      ]
    },
    keyStakeholders: [
      {
        name: 'Patricia Johnson',
        role: 'CIO',
        priorities: ['Branch transformation', 'Cost reduction', 'Digital experience'],
        concerns: ['Implementation complexity', 'Staff impact', 'Customer acceptance'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Brown',
        role: 'Chief Risk Officer',
        priorities: ['Security', 'Compliance', 'Fraud prevention'],
        concerns: ['Video banking security', 'Remote teller risks', 'Regulatory compliance'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Lisa Chen',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Branch profitability'],
        concerns: ['High investment', 'Branch closures', 'Staff reductions'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'James Wilson',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Integration', 'Support'],
        concerns: ['Video infrastructure', 'Network capacity', 'Uptime requirements'],
        influence: 'medium',
        supportLevel: 'supporter'
      }
    ],
    budget: '$8M-$12M',
    timeline: '18-24 months',
    decisionProcess: 'Board approval required. CIO is champion. CFO supports cost reduction. Chief Risk Officer needs security assurance.'
  },
  
  businessContext: {
    challenges: [
      'Branch foot traffic declined 40% in 3 years - customers prefer digital channels',
      'Branch operating costs $2.5M per branch annually - $112.5M total for 45 branches',
      'Tellers spend 80% time on routine transactions (deposits, withdrawals, check cashing)',
      'Cannot compete with digital-only banks on cost structure (no branches)',
      'Branches underutilized - average 30% capacity during business hours',
      'No video banking or remote teller capabilities',
      'Cannot offer extended hours (evenings, weekends) without high labor costs',
      'Younger customers (under 40) rarely visit branches - losing next generation',
      'Branch real estate costs high - leases expiring, need to decide renew or close',
      'Staff morale declining - tellers see limited career growth'
    ],
    businessImpact: [
      'High branch costs: $112.5M annually for 45 branches',
      'Inefficient staff utilization: 80% time on low-value transactions',
      'Lost revenue: cannot cross-sell when customers use digital channels',
      'Competitive disadvantage: digital banks have 50% lower cost structure',
      'Customer attrition: younger customers prefer digital-only banks',
      'Real estate decisions: 15 branch leases expiring in next 18 months',
      'Staff turnover: tellers leaving for better opportunities',
      'Cannot expand hours without proportional cost increase'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Transform branches from transaction centers to advisory hubs',
      'Reduce branch operating costs by 40% ($45M annually)',
      'Implement video banking and remote teller capabilities',
      'Enable extended hours (7am-7pm, 7 days) without proportional cost increase',
      'Shift teller time from 80% transactions to 50% sales and advisory',
      'Consolidate 45 branches to 30 full-service + 15 digital branches',
      'Improve customer experience with appointment scheduling and video banking',
      'Attract younger customers with modern branch experience'
    ],
    competitivePressure: 'Digital-only banks have 50% lower cost structure. Traditional banks are closing branches. Need to differentiate with advisory services.',
    regulatoryRequirements: ['Bank Secrecy Act', 'Know Your Customer (KYC)', 'Video banking compliance', 'Remote teller regulations'],
    recentEvents: [
      'Board mandated 40% branch cost reduction',
      '15 branch leases expiring in next 18 months',
      'Customer satisfaction declining due to limited hours',
      'Lost 12% of customers under 40 to digital banks'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your branch transformation initiative? How much has foot traffic declined?',
        purpose: 'Understand business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'Branch foot traffic is down 40% in 3 years. Customers prefer digital channels for routine transactions. We\'re spending $112.5M annually on 45 branches that are only 30% utilized. Board mandated 40% cost reduction. We need to transform branches from transaction centers to advisory hubs or we\'ll be uncompetitive.',
        alternateResponses: [
          'Foot traffic is declining rapidly',
          'Branch costs are unsustainable'
        ],
        followUpQuestions: [
          'What percentage of transactions are now digital?',
          'What is your branch utilization rate?',
          'What is your cost per branch?'
        ],
        scoringWeight: 15,
        hints: ['40% foot traffic decline is significant', '$112.5M branch costs', 'Board mandated transformation']
      },
      {
        question: 'How much time do tellers spend on routine transactions vs. sales and advisory? What is the opportunity cost?',
        purpose: 'Identify staff utilization inefficiency',
        category: 'pain-point',
        idealResponse: 'Tellers spend 80% of time on routine transactions - deposits, withdrawals, check cashing. Only 20% on sales and advisory. This is backwards. Routine transactions should be automated via ATMs, mobile, and video tellers. We need tellers focused on relationship building and cross-selling. The opportunity cost is huge - we\'re missing sales opportunities.',
        alternateResponses: [
          'Tellers spend too much time on transactions',
          'Not enough time for sales and advisory'
        ],
        followUpQuestions: [
          'How many tellers do you have?',
          'What is your cross-sell ratio?',
          'What products could tellers sell?'
        ],
        scoringWeight: 12,
        hints: ['80% time on transactions is inefficient', 'Opportunity cost of missed sales', 'Automation frees tellers for advisory']
      },
      {
        question: 'What are your branch operating costs per branch? How does this compare to digital-only banks?',
        purpose: 'Quantify cost disadvantage',
        category: 'business',
        idealResponse: '$2.5M per branch annually - $112.5M total for 45 branches. Digital-only banks have 50% lower cost structure because they have no branches. We can\'t compete on cost with current model. Need to reduce branch costs by 40% ($45M annually) while maintaining customer service. This requires automation and consolidation.',
        alternateResponses: [
          'Branch costs are too high',
          'Cannot compete with digital banks on cost'
        ],
        followUpQuestions: [
          'What is your cost per transaction?',
          'What percentage of costs are labor?',
          'How many branches could you consolidate?'
        ],
        scoringWeight: 12,
        hints: ['$2.5M per branch is high', '50% cost disadvantage vs. digital banks', '40% reduction target = $45M']
      },
      {
        question: 'What video banking or remote teller capabilities do you have? Can you offer extended hours?',
        purpose: 'Assess digital capabilities gap',
        category: 'technical',
        idealResponse: 'We have no video banking or remote teller capabilities. Branches are only open 9am-5pm weekdays. Customers want evening and weekend hours but we can\'t afford the labor costs. Video banking would let us offer 7am-7pm, 7 days with centralized tellers serving multiple branches. This would dramatically improve customer experience without proportional cost increase.',
        alternateResponses: [
          'No video banking capabilities',
          'Cannot offer extended hours affordably'
        ],
        followUpQuestions: [
          'What hours do customers want?',
          'What is the cost of extended hours?',
          'How many customers request video banking?'
        ],
        scoringWeight: 10,
        hints: ['Video banking enables extended hours', 'Centralized tellers serve multiple branches', 'Improves experience without proportional cost']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$8-12M budget approved. Need solution in 18-24 months. Board approval required. CIO is champion. CFO supports cost reduction. Chief Risk Officer needs security and compliance assurance. 15 branch leases expiring in 18 months - need to decide renew or transform.',
        alternateResponses: [
          'Budget is approved',
          'Board wants transformation within 24 months'
        ],
        followUpQuestions: [
          'What ROI is required?',
          'Which branches are candidates for transformation?',
          'What could delay this project?'
        ],
        scoringWeight: 10,
        hints: ['Budget approved - qualified', 'Lease expirations create urgency', 'Multiple stakeholders']
      },
      {
        question: 'What is your branch consolidation strategy? How many branches could become digital-only?',
        purpose: 'Understand transformation scope',
        category: 'business',
        idealResponse: 'We have 45 branches - many underutilized. Plan is 30 full-service advisory branches + 15 digital branches with video tellers and ATMs. Digital branches have 80% lower operating costs. This saves $37.5M annually while maintaining customer access. Need technology to enable this transformation.',
        alternateResponses: [
          'Planning to consolidate branches',
          'Some branches will become digital-only'
        ],
        followUpQuestions: [
          'Which branches are candidates for digital transformation?',
          'What is the cost difference between full-service and digital?',
          'How will customers react to consolidation?'
        ],
        scoringWeight: 8,
        hints: ['30 full-service + 15 digital branches', '80% lower costs for digital branches', '$37.5M annual savings']
      },
      {
        question: 'What are your security and compliance concerns with video banking and remote tellers?',
        purpose: 'Identify risk concerns',
        category: 'business',
        idealResponse: 'Security is critical - video banking must be secure and compliant. Need identity verification, fraud prevention, and audit trails. Concerned about remote teller risks - how do we ensure they follow procedures? Also need to comply with Bank Secrecy Act and KYC requirements. Video banking must meet same standards as in-person.',
        alternateResponses: [
          'Security is a major concern',
          'Need to ensure compliance'
        ],
        followUpQuestions: [
          'What security standards are required?',
          'How do you verify customer identity?',
          'What compliance reports are needed?'
        ],
        scoringWeight: 7,
        hints: ['Security and compliance are non-negotiable', 'Identity verification is critical', 'Audit trails required']
      },
      {
        question: 'How will you retrain and redeploy branch staff? What is the impact on employees?',
        purpose: 'Understand change management needs',
        category: 'business',
        idealResponse: 'Staff impact is significant. Some tellers will be redeployed to video banking centers. Others will be retrained as relationship bankers focused on advisory. Some positions will be eliminated through attrition. Need comprehensive training and change management. Staff morale is a concern - need to position this as career growth opportunity.',
        alternateResponses: [
          'Staff retraining is needed',
          'Change management is critical'
        ],
        followUpQuestions: [
          'How many staff will be affected?',
          'What training is needed?',
          'What is your attrition rate?'
        ],
        scoringWeight: 7,
        hints: ['Change management is critical', 'Retraining for advisory roles', 'Position as career growth']
      }
    ],
    expectedFindings: [
      'Significant foot traffic decline (40% in 3 years)',
      'High branch costs ($112.5M annually, $2.5M per branch)',
      'Inefficient staff utilization (80% time on transactions)',
      'No video banking or remote teller capabilities',
      'Budget approved ($8-12M) - qualified opportunity',
      'Branch consolidation planned (45 to 30 full-service + 15 digital)',
      'Security and compliance concerns with video banking',
      'Change management and staff retraining needed'
    ],
    redFlags: [
      'If budget is under $6M - not enough for 45-branch transformation',
      'If timeline is less than 12 months - too aggressive',
      'If no executive sponsorship - will struggle',
      'If staff resistance is high - adoption risk',
      'If network infrastructure is poor - video banking will not work'
    ],
    opportunities: [
      'Cost savings: $45M annually (40% reduction in branch costs)',
      'Staff productivity: shift from 80% transactions to 50% advisory',
      'Extended hours: 7am-7pm, 7 days without proportional cost increase',
      'Customer experience: video banking and appointment scheduling',
      'Branch consolidation: 30 full-service + 15 digital branches',
      'Competitive advantage: modern branch experience',
      'Revenue growth: increased cross-selling from advisory focus'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Our customers are older and prefer in-person service. What if they reject video banking?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'That\'s a valid concern - customer acceptance is critical. However, data shows that even older customers are adopting digital banking. The key is offering choice - video banking for those who want it, in-person for those who prefer it. Many banks find that customers love video banking once they try it - no waiting in line, extended hours, same personal service. We recommend phased rollout starting with digital-savvy customers, then expanding. IBM provides customer education and marketing support. Most banks see 60%+ adoption within 12 months. The 30 full-service branches will still offer in-person service for customers who prefer it. Would a pilot program with one branch help prove customer acceptance?',
        scoringCriteria: [
          'Acknowledged customer acceptance concern',
          'Explained offering choice (video + in-person)',
          'Highlighted benefits (no waiting, extended hours)',
          'Mentioned phased rollout approach',
          'Provided adoption data (60%+ within 12 months)',
          'Emphasized 30 full-service branches remain',
          'Offered pilot program to prove concept'
        ],
        hints: [
          'Offer choice - video and in-person',
          'Phased rollout de-risks adoption',
          '60%+ adoption within 12 months is typical',
          'Pilot program proves customer acceptance'
        ]
      },
      {
        objection: 'Video banking seems risky from a security and fraud perspective. How do we protect against fraud?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Security is absolutely critical - fraud prevention is non-negotiable. IBM\'s video banking platform includes multi-factor authentication, biometric verification (facial recognition), and real-time fraud detection using Watson AI. Every video session is recorded and encrypted for audit trails. Remote tellers follow same procedures as in-branch tellers with additional security checks. The platform monitors for suspicious behavior and alerts security team. Many banks find video banking is actually MORE secure than in-person because of the additional verification and monitoring. We can include fraud guarantees and insurance in the contract. IBM also provides security consulting and compliance certification. Would you like to see the security architecture and fraud prevention capabilities?',
        scoringCriteria: [
          'Acknowledged security criticality',
          'Explained multi-factor authentication and biometrics',
          'Mentioned Watson AI fraud detection',
          'Described audit trails and recording',
          'Highlighted additional security vs. in-person',
          'Offered fraud guarantees and insurance',
          'Mentioned security consulting and certification',
          'Offered to show security architecture'
        ],
        hints: [
          'Video banking can be MORE secure than in-person',
          'Multi-factor authentication and biometrics',
          'Watson AI detects fraud in real-time',
          'Offer fraud guarantees and insurance'
        ]
      },
      {
        objection: 'The investment is significant ($8-12M). How do we justify this when we\'re trying to reduce costs?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'I understand - $8-12M seems like a lot when you\'re focused on cost reduction. But let\'s look at the business case. You\'re spending $112.5M annually on 45 branches. Transforming to 30 full-service + 15 digital branches saves $45M annually. With $10M investment, payback is 10 weeks. Over 5 years, that\'s $225M in savings vs. $10M investment - 22:1 ROI. The real question is: can you afford NOT to invest? Continuing with current branch model means losing $45M annually while competitors with lower cost structures gain market share. This is a strategic investment in competitive survival. Would you like a detailed ROI model showing branch-by-branch savings?',
        scoringCriteria: [
          'Acknowledged investment size',
          'Quantified current branch costs ($112.5M annually)',
          'Calculated savings ($45M annually)',
          'Showed payback period (10 weeks)',
          'Calculated 5-year ROI (22:1)',
          'Framed as cost of doing nothing',
          'Positioned as strategic investment',
          'Offered detailed ROI model'
        ],
        hints: [
          'Current branch costs are $112.5M annually',
          'Savings are $45M annually',
          'Payback is 10 weeks - very fast',
          'Cost of doing nothing: continued high costs'
        ]
      },
      {
        objection: 'What about our branch staff? We can\'t just lay off hundreds of employees.',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'Staff impact is a major concern - we take this seriously. The good news is that branch transformation creates new opportunities, not just eliminations. Tellers can be retrained as relationship bankers focused on advisory and sales - higher-value roles with better career growth. Some will move to centralized video banking centers. Others will become specialists in mortgages, wealth management, or business banking. IBM provides comprehensive training and career development programs. Most banks handle this through attrition and redeployment, not layoffs. Staff actually appreciate the opportunity to move from routine transactions to advisory roles. We can include change management and training in the implementation. Would you like to see the career development and training programs?',
        scoringCriteria: [
          'Acknowledged staff impact concern',
          'Positioned as opportunity, not just elimination',
          'Described retraining for advisory roles',
          'Mentioned video banking center opportunities',
          'Highlighted career growth and development',
          'Explained attrition and redeployment approach',
          'Offered comprehensive training programs',
          'Positioned as positive career development'
        ],
        hints: [
          'Transformation creates opportunities',
          'Retrain tellers as relationship bankers',
          'Handle through attrition and redeployment',
          'Offer comprehensive training programs'
        ]
      },
      {
        objection: 'Our network infrastructure is old. Can it support video banking across 45 branches?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Network infrastructure is critical for video banking - you\'re right to be concerned. IBM can do a network assessment to identify any upgrades needed. Video banking requires reliable high-speed internet at each branch - typically 10-25 Mbps per video station. Most branches already have sufficient bandwidth for basic operations. We may need to upgrade some locations. IBM has partnerships with major ISPs for priority support. The platform also includes adaptive video quality - it adjusts to available bandwidth. We\'ve implemented video banking at hundreds of banks with various network conditions. Network upgrades are typically $50-100K per branch and included in the overall budget. Would you like us to do a network assessment to identify specific requirements?',
        scoringCriteria: [
          'Acknowledged network infrastructure concern',
          'Offered network assessment',
          'Specified bandwidth requirements (10-25 Mbps)',
          'Mentioned adaptive video quality',
          'Highlighted experience with various networks',
          'Provided upgrade cost estimate ($50-100K per branch)',
          'Positioned upgrades as part of overall budget',
          'Offered to do assessment'
        ],
        hints: [
          'Network assessment identifies requirements',
          '10-25 Mbps per video station',
          'Adaptive video quality adjusts to bandwidth',
          'Upgrades are $50-100K per branch'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: []
  },
  
  recommendationPhase: {
    primaryProduct: 'watson-studio',
    supportingProducts: ['power-e1080', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'watson-studio',
          productName: 'IBM Branch Transformation Platform (Cloud Pak for Data)',
          reason: 'Modern cloud-native platform with video banking, remote teller, appointment scheduling, and branch analytics. Enables transformation from transaction centers to advisory hubs.',
          configuration: 'Branch platform on IBM Cloud, video banking, remote teller workstations, appointment scheduling, customer analytics, staff productivity tools',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for video streaming, customer analytics, and real-time transaction processing. Proven reliability for banking workloads.',
          configuration: '2x Power E1080, 24-core, 1TB RAM each, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for video recordings, customer data, and transaction history. Low latency for real-time video streaming.',
          configuration: 'FlashSystem 9500, 300TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'supporting'
        }
      ],
      architecture: 'IBM Branch Transformation Platform on IBM Cloud with hybrid integration to on-premises Power E1080 for video processing. FlashSystem 9500 for high-performance storage. Integration with core banking system and CRM.',
      sizing: 'Sized for 45 branches (30 full-service + 15 digital), 650 staff, 150K customers. Supports 100 concurrent video banking sessions. 5-year growth capacity.',
      deployment: 'Phased approach: 1) Platform setup and pilot (12 weeks), 2) Pilot with 3 branches (12 weeks), 3) Rollout to 15 digital branches (24 weeks), 4) Transform 30 full-service branches (36 weeks)'
    },
    pricing: {
      hardware: '$3M (2x Power E1080 + FlashSystem 9500)',
      software: '$4.5M (Branch platform, video banking, analytics, 5-year license)',
      services: '$2.5M (IBM Consulting: implementation, network upgrades, training, change management)',
      support: '$200K/year (24x7 support with 4-hour response)',
      total: '$10M initial + $200K/year support',
      financing: 'IBM Flex financing available - $210K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$45M annually (40% reduction in branch operating costs)',
      productivityGains: '$8M annually (staff efficiency, cross-selling)',
      riskReduction: 'Competitive survival, customer retention, staff development',
      roi: '10 weeks',
      paybackPeriod: '10 weeks',
      tco: '5-year TCO: $11M investment vs. $265M in savings = $254M net benefit'
    },
    competitivePositioning: 'IBM Branch Transformation Platform enables modern branch experience that competes with digital banks. Power infrastructure ensures reliable video banking. Watson AI optimizes branch operations.',
    nextSteps: [
      'Schedule demo of video banking and branch analytics',
      'Provide detailed ROI analysis with branch-by-branch savings',
      'Arrange reference call with similar community bank',
      'Conduct network assessment for video banking requirements',
      'Develop phased rollout plan with pilot branches',
      'Present to Board with CIO, CFO, and Chief Risk Officer'
    ],
    requiredElements: [
      'Must include IBM Branch Transformation Platform with video banking',
      'Must include remote teller workstations',
      'Must include appointment scheduling and customer analytics',
      'Must integrate with core banking system',
      'Must include security and fraud prevention',
      'Must include staff training and change management',
      'Must include network assessment and upgrades'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified foot traffic decline and branch costs',
        'Identified staff utilization inefficiency (80% transactions)',
        'Uncovered cost disadvantage vs. digital banks',
        'Assessed video banking capabilities gap',
        'Qualified budget and timeline',
        'Understood branch consolidation strategy',
        'Identified security and compliance concerns',
        'Assessed change management needs'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed customer acceptance with phased rollout',
        'Handled security concerns with fraud prevention',
        'Addressed cost objection with ROI (10-week payback)',
        'Handled staff impact with retraining and development',
        'Addressed network infrastructure with assessment',
        'Used data and examples to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Branch Transformation Platform as primary solution',
        'Included Power E1080 for video processing',
        'Included FlashSystem 9500 for storage',
        'Addressed all pain points (cost, experience, productivity)',
        'Proposed phased rollout with pilot',
        'Included change management and training'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($45M annually)',
        'Quantified productivity gains ($8M annually)',
        'Calculated ROI (10 weeks)',
        'Articulated competitive advantage',
        'Positioned as strategic investment'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Branch Transformation Strategy',
      description: 'How to position branch transformation and quantify cost savings',
      skillLevel: 'advanced'
    },
    {
      concept: 'Video Banking Technology',
      description: 'Understanding video banking platforms and remote teller capabilities',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Change Management',
      description: 'How to manage staff retraining and branch consolidation',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Branch ROI Calculation',
      description: 'How to calculate branch operating cost savings and productivity gains',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Security and Compliance',
      description: 'Understanding video banking security and fraud prevention',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'branch-transformation', 'video-banking', 'remote-teller', 'cost-reduction', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis', 'change-management'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    prerequisites: ['Understanding of branch banking', 'Familiarity with video banking', 'Banking operations knowledge'],
    relatedScenarios: ['banking-digital-platform-002', 'banking-wealth-management-004'],
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying branch costs - $112.5M annually gets attention',
    'Foot traffic decline (40%) shows urgency',
    'Staff utilization (80% transactions) is major inefficiency',
    'Customer acceptance is #1 concern - address with phased rollout',
    'Use ROI to overcome cost objections - 10-week payback is compelling',
    'Position staff impact as career development opportunity',
    'Emphasize video banking security with fraud prevention'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying cost savings',
    'Not addressing customer acceptance concerns',
    'Ignoring staff impact and change management',
    'Not positioning video banking security advantages',
    'Comparing to current costs instead of cost of doing nothing',
    'Not emphasizing extended hours benefit',
    'Forgetting network infrastructure requirements'
  ],
  
  bestPractices: [
    'Quantify branch costs and savings early ($45M annually)',
    'Emphasize staff productivity shift (80% to 50% transactions)',
    'Address customer acceptance with phased rollout and pilot',
    'Calculate ROI with branch operating cost savings',
    'Propose branch consolidation strategy (30 + 15)',
    'Include change management and staff training',
    'Highlight video banking security and fraud prevention',
    'Provide banking customer references'
  ],
  
  expertInsights: [
    'Branch costs of $2.5M per branch annually are typical for community banks',
    'Foot traffic declining 40% is common trend - customers prefer digital',
    'Staff spending 80% time on transactions is inefficient - automation fixes this',
    'Video banking enables extended hours without proportional cost increase',
    'Branch transformation ROI is compelling - 10-week payback is typical',
    'Customer acceptance is high once they try video banking (60%+ adoption)',
    'Branch consolidation (30 full-service + 15 digital) is proven model'
  ]
};

// Scenario 7: Regulatory Compliance and Reporting Automation
const bankingScenario007: TrainingScenario = {
  id: 'banking-regulatory-compliance-007',
  title: 'Regional Bank Needs Regulatory Compliance Automation',
  description: 'A regional bank spending $8M annually on manual regulatory compliance and reporting needs automation. Current manual processes for CECL, stress testing, and regulatory reporting are time-consuming, error-prone, and cannot scale with increasing regulatory requirements.',
  
  customerProfile: {
    company: 'First Regional Bank',
    industry: 'Banking',
    size: 'Medium (500-1000 employees)',
    revenue: '$420M annually',
    employees: 700,
    location: 'Mid-Atlantic USA',
    currentInfrastructure: {
      servers: '18 x86 servers running compliance systems',
      storage: 'Dell EMC (8 years old)',
      applications: ['Manual Excel-based reporting', 'Core banking', 'Risk management system', 'Data warehouse'],
      operatingSystem: 'Windows Server 2016',
      virtualization: 'VMware vSphere 6.7',
      age: '8-12 years',
      endOfLife: '12 months',
      issues: [
        'Manual regulatory reporting takes 200+ hours per quarter',
        'CECL calculations done in Excel - error-prone and not auditable',
        'Stress testing is manual - takes 6 weeks per regulatory cycle',
        'Cannot meet increasing regulatory requirements with current staff',
        'Compliance costs $8M annually - 15 FTEs dedicated to reporting',
        'Recent regulatory audit found data quality and documentation gaps',
        'Risk of regulatory fines for late or inaccurate reporting',
        'Cannot perform ad-hoc regulatory analysis - data is siloed'
      ]
    },
    keyStakeholders: [
      {
        name: 'Robert Thompson',
        role: 'Chief Risk Officer',
        priorities: ['Regulatory compliance', 'Risk management', 'Audit readiness'],
        concerns: ['Automation accuracy', 'Regulatory acceptance', 'Implementation risk'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Martinez',
        role: 'CFO',
        priorities: ['Cost reduction', 'Efficiency', 'ROI'],
        concerns: ['High investment', 'Staff redeployment', 'Payback period'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'David Chen',
        role: 'CIO',
        priorities: ['Technology modernization', 'Data quality', 'Integration'],
        concerns: ['Data integration', 'System complexity', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Sarah Williams',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Support', 'Maintenance'],
        concerns: ['Implementation complexity', 'Staff training', 'Ongoing support'],
        influence: 'medium',
        supportLevel: 'neutral'
      }
    ],
    budget: '$3M-$5M',
    timeline: '12-18 months',
    decisionProcess: 'Board approval required. Chief Risk Officer is champion. CFO supports cost reduction. CIO supports modernization.'
  },
  
  businessContext: {
    challenges: [
      'Manual regulatory reporting takes 200+ hours per quarter - unsustainable',
      'CECL calculations done in Excel - error-prone, not auditable, regulatory risk',
      'Stress testing is manual - takes 6 weeks per cycle, cannot do ad-hoc analysis',
      'Compliance costs $8M annually - 15 FTEs dedicated to regulatory reporting',
      'Cannot meet increasing regulatory requirements (CECL, stress testing, liquidity)',
      'Recent audit found data quality gaps and insufficient documentation',
      'Risk of regulatory fines for late or inaccurate reporting',
      'Data is siloed across multiple systems - cannot aggregate for reporting',
      'Cannot perform scenario analysis or what-if modeling',
      'Staff turnover in compliance team - knowledge loss'
    ],
    businessImpact: [
      'High compliance costs: $8M annually for 15 FTEs',
      'Regulatory risk: potential fines for late or inaccurate reporting',
      'Audit findings: data quality and documentation gaps',
      'Cannot scale: increasing regulations require more staff',
      'Opportunity cost: compliance staff could focus on strategic risk management',
      'Competitive disadvantage: larger banks have automated compliance',
      'Staff burnout: manual processes are tedious and stressful',
      'Cannot respond quickly to regulatory inquiries'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Automate regulatory reporting to reduce from 200 to 20 hours per quarter',
      'Implement automated CECL calculations with full audit trails',
      'Automate stress testing to reduce from 6 weeks to 1 week',
      'Reduce compliance costs from $8M to $4M annually (50% reduction)',
      'Improve data quality and regulatory audit readiness',
      'Enable ad-hoc regulatory analysis and scenario modeling',
      'Redeploy compliance staff from reporting to strategic risk management',
      'Eliminate risk of regulatory fines'
    ],
    competitivePressure: 'Larger banks have automated compliance. Smaller banks are consolidating. Need efficiency to remain competitive.',
    regulatoryRequirements: ['CECL (Current Expected Credit Loss)', 'DFAST/CCAR stress testing', 'Liquidity Coverage Ratio (LCR)', 'Call Reports', 'FR Y-9C', 'FFIEC reporting'],
    recentEvents: [
      'Recent audit found data quality gaps',
      'Regulatory inquiry took 3 weeks to respond',
      'Board mandated compliance automation',
      'Compliance director resigned - knowledge loss'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your regulatory compliance automation initiative? How much time and cost are you spending on manual reporting?',
        purpose: 'Understand business drivers and quantify impact',
        category: 'pain-point',
        idealResponse: 'We spend 200+ hours per quarter on manual regulatory reporting - that\'s $8M annually for 15 FTEs. CECL calculations are done in Excel which is error-prone and not auditable. Recent audit found data quality gaps. Board mandated automation to reduce costs and regulatory risk. We cannot scale with increasing regulations.',
        alternateResponses: [
          'Manual reporting is too time-consuming',
          'Compliance costs are unsustainable'
        ],
        followUpQuestions: [
          'How many FTEs are dedicated to compliance?',
          'What were the audit findings?',
          'What is your regulatory risk exposure?'
        ],
        scoringWeight: 15,
        hints: ['200+ hours per quarter is excessive', '$8M annually for 15 FTEs', 'Audit findings create urgency']
      },
      {
        question: 'What are your CECL calculation challenges? How do you currently calculate expected credit losses?',
        purpose: 'Identify CECL pain points',
        category: 'technical',
        idealResponse: 'CECL calculations are done in Excel with manual data aggregation from multiple systems. It\'s error-prone, not auditable, and takes weeks. Regulators want automated calculations with full audit trails. We need a system that can handle complex CECL models, scenario analysis, and documentation.',
        alternateResponses: [
          'CECL is manual and error-prone',
          'Need automated calculations with audit trails'
        ],
        followUpQuestions: [
          'What CECL models do you use?',
          'How do you validate calculations?',
          'What documentation do regulators require?'
        ],
        scoringWeight: 12,
        hints: ['Excel-based CECL is regulatory risk', 'Audit trails are required', 'Automation ensures accuracy']
      },
      {
        question: 'How long does stress testing take? Can you perform ad-hoc scenario analysis?',
        purpose: 'Assess stress testing inefficiency',
        category: 'technical',
        idealResponse: 'Stress testing takes 6 weeks per regulatory cycle. We cannot do ad-hoc scenario analysis because data aggregation is manual. Need to respond to regulatory inquiries quickly. Automated stress testing would reduce to 1 week and enable what-if modeling.',
        alternateResponses: [
          'Stress testing is too slow',
          'Cannot do ad-hoc analysis'
        ],
        followUpQuestions: [
          'What stress testing scenarios are required?',
          'How often do regulators request ad-hoc analysis?',
          'What is the cost of slow stress testing?'
        ],
        scoringWeight: 12,
        hints: ['6 weeks is too slow', 'Ad-hoc analysis is critical', 'Automation enables scenario modeling']
      },
      {
        question: 'What is your budget and timeline? Who needs to approve this investment?',
        purpose: 'Qualify opportunity and understand decision process',
        category: 'business',
        idealResponse: '$3-5M budget approved. Need solution in 12-18 months. Board approval required. Chief Risk Officer is champion. CFO supports cost reduction. CIO supports modernization. Recent audit findings create urgency.',
        alternateResponses: [
          'Budget is approved',
          'Board wants this done within 18 months'
        ],
        followUpQuestions: [
          'What ROI is required?',
          'What could delay this project?',
          'What are the audit findings?'
        ],
        scoringWeight: 10,
        hints: ['Budget approved - qualified', 'Audit findings create urgency', 'Multiple stakeholders support']
      },
      {
        question: 'What are your data quality and integration challenges? How many systems need to be integrated?',
        purpose: 'Understand data complexity',
        category: 'technical',
        idealResponse: 'Data is siloed across core banking, loan systems, risk management, and data warehouse. Manual data aggregation is error-prone. Recent audit found data quality gaps. Need automated data integration with validation and reconciliation. Critical for regulatory reporting accuracy.',
        alternateResponses: [
          'Data is siloed across multiple systems',
          'Data quality is a major concern'
        ],
        followUpQuestions: [
          'What systems contain regulatory data?',
          'What were the data quality audit findings?',
          'How do you validate data accuracy?'
        ],
        scoringWeight: 10,
        hints: ['Data silos cause errors', 'Audit found data quality gaps', 'Integration is critical']
      }
    ],
    expectedFindings: [
      'High compliance costs ($8M annually, 15 FTEs)',
      'Manual reporting takes 200+ hours per quarter',
      'CECL calculations in Excel - error-prone and not auditable',
      'Stress testing takes 6 weeks - too slow',
      'Budget approved ($3-5M) - qualified opportunity',
      'Data quality gaps found in audit',
      'Cannot scale with increasing regulations',
      'Regulatory risk of fines'
    ],
    redFlags: [
      'If budget is under $2M - not enough for complete automation',
      'If timeline is less than 9 months - too aggressive',
      'If no executive sponsorship - will struggle',
      'If data quality is very poor - need data remediation first',
      'If regulators have not approved automation approach'
    ],
    opportunities: [
      'Cost savings: $4M annually (50% reduction in compliance costs)',
      'Time savings: 200 to 20 hours per quarter (90% reduction)',
      'Regulatory risk reduction: eliminate fines, improve audit readiness',
      'Staff redeployment: from reporting to strategic risk management',
      'Competitive advantage: efficiency and responsiveness',
      'Scalability: handle increasing regulations without adding staff'
    ],
    minimumQuestionsRequired: 4
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'How do we know automated calculations will be accurate? Regulators scrutinize our CECL models.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Accuracy is absolutely critical - regulators will not accept errors. IBM\'s regulatory compliance platform uses Watson AI trained on regulatory requirements and your historical data. All calculations include full audit trails showing data sources, assumptions, and methodology. The system performs automated validation and reconciliation. Many banks find automated calculations are MORE accurate than manual Excel because they eliminate human error. We can run parallel calculations - automated vs. manual - to prove accuracy before going live. IBM also provides regulatory consulting to ensure models meet requirements. Would you like to see the CECL calculation engine and audit trail capabilities?',
        scoringCriteria: [
          'Acknowledged accuracy criticality',
          'Explained Watson AI and audit trails',
          'Highlighted elimination of human error',
          'Offered parallel calculations to prove accuracy',
          'Mentioned regulatory consulting',
          'Positioned automation as accuracy improvement'
        ],
        hints: [
          'Automation eliminates human error',
          'Full audit trails for regulators',
          'Parallel calculations prove accuracy',
          'Offer regulatory consulting'
        ]
      },
      {
        objection: 'The investment is significant ($3-5M). How do we justify this when compliance is a cost center?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'I understand - $3-5M seems like a lot for a cost center. But let\'s look at the business case. You\'re spending $8M annually on manual compliance. Automation reduces this to $4M annually - saving $4M per year. With $4M investment, payback is 12 months. Over 5 years, that\'s $20M in savings vs. $4M investment - 5:1 ROI. Plus you eliminate regulatory risk - a single fine could be $5-10M. The real question is: can you afford NOT to invest? Continuing with manual processes means $4M in excess costs annually plus regulatory risk. This is a strategic investment in efficiency and risk reduction. Would you like a detailed ROI model?',
        scoringCriteria: [
          'Acknowledged investment size',
          'Quantified current costs ($8M annually)',
          'Calculated savings ($4M annually)',
          'Showed payback period (12 months)',
          'Calculated 5-year ROI (5:1)',
          'Highlighted regulatory risk avoidance',
          'Framed as cost of doing nothing'
        ],
        hints: [
          'Current costs are $8M annually',
          'Savings are $4M annually',
          'Payback is 12 months',
          'Regulatory fines could be $5-10M'
        ]
      },
      {
        objection: 'What happens to our 15 compliance staff? We can\'t just lay them off.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'Staff impact is a major concern - we take this seriously. The good news is that automation creates opportunities for higher-value work. Compliance staff can be redeployed from manual reporting to strategic risk management - model validation, scenario analysis, regulatory strategy. These are higher-value roles that banks desperately need. Most banks handle this through attrition and redeployment, not layoffs. Staff actually appreciate moving from tedious manual work to strategic analysis. IBM provides comprehensive training for new roles. Would you like to see the career development and training programs?',
        scoringCriteria: [
          'Acknowledged staff impact concern',
          'Positioned as opportunity for higher-value work',
          'Described redeployment to strategic roles',
          'Explained attrition and redeployment approach',
          'Offered comprehensive training',
          'Positioned as positive career development'
        ],
        hints: [
          'Redeploy to strategic risk management',
          'Higher-value roles (model validation, scenario analysis)',
          'Handle through attrition and redeployment',
          'Offer comprehensive training'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: []
  },
  
  recommendationPhase: {
    primaryProduct: 'watson-studio',
    supportingProducts: ['power-e1080', 'flashsystem-9500'],
    configuration: {
      products: [
        {
          productId: 'watson-studio',
          productName: 'IBM Regulatory Compliance Platform (Cloud Pak for Data)',
          reason: 'Modern cloud-native platform with automated CECL calculations, stress testing, regulatory reporting, and audit trails. Designed for banking regulatory requirements.',
          configuration: 'Compliance platform on IBM Cloud, Watson AI for CECL and stress testing, automated reporting, data integration, audit trails',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'High-performance infrastructure for complex CECL calculations, stress testing scenarios, and regulatory reporting. Proven reliability for banking workloads.',
          configuration: '2x Power E1080, 24-core, 1TB RAM each, Red Hat Enterprise Linux, PowerVM for workload isolation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for regulatory data, historical records, and audit trails. Low latency for real-time calculations.',
          configuration: 'FlashSystem 9500, 200TB effective capacity, SafeguardedCopy for ransomware protection, NVMe performance',
          priority: 'supporting'
        }
      ],
      architecture: 'IBM Regulatory Compliance Platform on IBM Cloud with hybrid integration to on-premises Power E1080 for calculations. FlashSystem 9500 for high-performance storage. Integration with core banking and risk systems.',
      sizing: 'Sized for regional bank with $10B assets, 15 compliance staff, quarterly regulatory reporting. Supports CECL, stress testing, and all regulatory reports.',
      deployment: 'Phased approach: 1) Platform setup and data integration (12 weeks), 2) CECL automation pilot (8 weeks), 3) Stress testing automation (12 weeks), 4) Full regulatory reporting (16 weeks)'
    },
    pricing: {
      hardware: '$1.8M (2x Power E1080 + FlashSystem 9500)',
      software: '$1.5M (Compliance platform, Watson AI, 5-year license)',
      services: '$700K (IBM Consulting: implementation, data integration, training, regulatory consulting)',
      support: '$100K/year (24x7 support with 4-hour response)',
      total: '$4M initial + $100K/year support',
      financing: 'IBM Flex financing available - $84K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$4M annually (50% reduction in compliance costs)',
      productivityGains: '$2M annually (staff redeployment to strategic roles)',
      riskReduction: 'Eliminate regulatory fines ($5-10M potential), improve audit readiness',
      roi: '12 months',
      paybackPeriod: '12 months',
      tco: '5-year TCO: $4.5M investment vs. $30M in benefits (savings + risk avoidance) = $25.5M net benefit'
    },
    competitivePositioning: 'IBM Regulatory Compliance Platform provides automation that larger banks have. Power infrastructure ensures performance for complex calculations. Watson AI enables intelligent compliance.',
    nextSteps: [
      'Schedule demo of CECL calculations and stress testing',
      'Provide detailed ROI analysis with compliance cost modeling',
      'Arrange reference call with similar regional bank',
      'Conduct data assessment for integration requirements',
      'Develop phased rollout plan with CECL pilot',
      'Present to Board with Chief Risk Officer, CFO, and CIO'
    ],
    requiredElements: [
      'Must include IBM Regulatory Compliance Platform with CECL automation',
      'Must include automated stress testing',
      'Must include regulatory reporting automation',
      'Must integrate with core banking and risk systems',
      'Must include full audit trails',
      'Must include IBM Consulting for regulatory consulting',
      'Must include staff training and change management'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified compliance costs and time ($8M, 200+ hours)',
        'Identified CECL calculation challenges',
        'Assessed stress testing inefficiency (6 weeks)',
        'Qualified budget and timeline',
        'Identified data quality and integration challenges'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed accuracy with audit trails and parallel testing',
        'Addressed cost objection with ROI (12-month payback)',
        'Handled staff impact with redeployment strategy',
        'Used data and examples to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Regulatory Compliance Platform',
        'Included Power E1080 for calculations',
        'Included FlashSystem 9500 for storage',
        'Addressed all pain points',
        'Proposed phased rollout'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($4M annually)',
        'Calculated ROI (12 months)',
        'Highlighted regulatory risk avoidance',
        'Positioned as strategic investment'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Regulatory Compliance Automation',
      description: 'How to position compliance platforms and quantify cost savings',
      skillLevel: 'advanced'
    },
    {
      concept: 'CECL Calculations',
      description: 'Understanding automated CECL and audit trail requirements',
      skillLevel: 'advanced'
    },
    {
      concept: 'Stress Testing Automation',
      description: 'How to automate stress testing and scenario analysis',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['banking', 'regulatory-compliance', 'cecl', 'stress-testing', 'automation', 'power-e1080', 'flashsystem'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'roi-analysis'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 30,
    prerequisites: ['Understanding of banking regulations', 'Familiarity with CECL', 'Compliance knowledge'],
    relatedScenarios: ['banking-fraud-detection-001'],
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start by quantifying compliance costs - $8M annually gets attention',
    'CECL in Excel is regulatory risk - emphasize audit trail needs',
    'Use ROI to overcome cost objections - 12-month payback',
    'Position staff redeployment as career development',
    'Highlight regulatory risk avoidance (fines could be $5-10M)'
  ],
  
  commonMistakes: [
    'Focusing only on technology without quantifying cost savings',
    'Not addressing calculation accuracy concerns',
    'Ignoring staff impact and redeployment',
    'Not emphasizing regulatory risk avoidance',
    'Forgetting data quality and integration challenges'
  ],
  
  bestPractices: [
    'Quantify compliance costs early ($8M annually)',
    'Emphasize CECL automation with audit trails',
    'Calculate ROI with cost savings and risk avoidance',
    'Propose phased rollout with CECL pilot',
    'Include regulatory consulting in proposal',
    'Provide banking customer references'
  ],
  
  expertInsights: [
    'Compliance costs of $8M annually are typical for regional banks',
    'Manual CECL in Excel is common but high regulatory risk',
    'Stress testing taking 6 weeks is too slow for ad-hoc analysis',
    'Compliance automation ROI is compelling - 12-month payback',
    'Staff redeployment to strategic roles is win-win',
    'Regulatory fines can be $5-10M - risk avoidance is valuable'
  ]
};
// Scenario 8: Customer Data Platform & Analytics
export const bankingScenario008: TrainingScenario = {
  id: 'banking-customer-data-platform-008',
  title: 'Regional Bank Needs Customer Data Platform for Personalization',
  description: 'A regional bank with 2M customers has customer data scattered across 15+ systems. They cannot create unified customer views, personalize offers, or predict churn. Marketing campaigns have low response rates (0.8%) and customer satisfaction is declining. They need a customer data platform to unify data and enable AI-driven personalization.',
  
  customerProfile: {
    company: 'United Regional Bank',
    industry: 'Banking',
    size: 'Large (1000-5000 employees)',
    revenue: '$1.2B annually',
    employees: 2800,
    location: 'Southeast USA',
    currentInfrastructure: {
      servers: '40 x86 servers running various applications',
      storage: 'NetApp FAS (6 years old)',
      applications: ['Core banking (Fiserv Premier)', 'CRM (Salesforce)', 'Marketing automation (Adobe)', 'Mobile banking', 'Online banking', 'Call center system', 'Branch system', 'Loan origination', 'Credit card system', 'Wealth management platform'],
      operatingSystem: 'Mixed Windows/Linux',
      virtualization: 'VMware vSphere 7.0',
      age: '3-8 years',
      endOfLife: '24-36 months',
      issues: [
        'Customer data in 15+ disconnected systems',
        'Cannot create unified customer view',
        'Marketing campaigns have 0.8% response rate (industry avg 3-5%)',
        'Cannot predict customer churn - losing 12% annually',
        'Manual data aggregation takes 2-3 weeks',
        'Cannot personalize offers or recommendations',
        'Compliance risk - inconsistent data across systems',
        'Customer service reps cannot see complete history'
      ]
    },
    keyStakeholders: [
      {
        name: 'Jennifer Martinez',
        role: 'Chief Marketing Officer',
        priorities: ['Customer personalization', 'Campaign effectiveness', 'Churn reduction'],
        concerns: ['Data quality', 'Privacy compliance', 'Time to value'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'David Chen',
        role: 'CIO',
        priorities: ['Data integration', 'Real-time analytics', 'Scalability'],
        concerns: ['Integration complexity', 'System performance', 'Cost'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Lisa Thompson',
        role: 'Chief Data Officer',
        priorities: ['Data governance', 'Data quality', 'Analytics capabilities'],
        concerns: ['Data privacy', 'Regulatory compliance', 'Master data management'],
        influence: 'medium',
        supportLevel: 'neutral'
      },
      {
        name: 'Robert Williams',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost efficiency', 'ROI'],
        concerns: ['Implementation cost', 'Ongoing expenses', 'Business case'],
        influence: 'high',
        supportLevel: 'skeptic'
      }
    ],
    budget: '$5M-$8M',
    timeline: '12-18 months',
    decisionProcess: 'Board approval required for investments >$5M. CMO is champion, CIO is supportive, CDO is neutral, CFO is skeptical.'
  },

  businessContext: {
    challenges: [
      'Customer data scattered across 15+ disconnected systems',
      'Marketing campaigns have 0.8% response rate vs 3-5% industry average',
      'Losing 12% of customers annually - cannot predict churn',
      'Manual data aggregation takes 2-3 weeks per analysis',
      'Cannot personalize banking offers or product recommendations',
      'Customer service reps lack complete customer view',
      'Compliance risk from inconsistent data across systems',
      'Competitors offering superior personalized experiences'
    ],
    businessImpact: [
      '$18M annual revenue loss from customer churn (12% of 2M customers)',
      '$8M wasted marketing spend on ineffective campaigns',
      '$4M annual cost for manual data aggregation and reporting',
      '$6M opportunity cost from missed cross-sell opportunities',
      'Customer satisfaction score declining 8% year-over-year',
      'Net Promoter Score (NPS) at 22 vs industry average 35',
      'Average customer lifetime value declining 15% annually',
      'Market share loss to digital-first competitors'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Digital transformation program',
      'Customer experience improvement initiative',
      'Data-driven marketing strategy',
      'Churn reduction program',
      'Revenue growth through personalization'
    ],
    regulatoryRequirements: [
      'GDPR compliance for data privacy',
      'CCPA compliance for California customers',
      'GLBA data security requirements',
      'Fair lending regulations',
      'Know Your Customer (KYC) requirements'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for a customer data platform right now?',
        purpose: 'Understand business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'We are losing customers at 12% annually and cannot predict who will churn. Our marketing campaigns have 0.8% response rates because we cannot personalize offers. Customer data is scattered across 15+ systems, making it impossible to create unified views. This is costing us $18M in lost revenue plus $8M in wasted marketing spend. Our competitors are winning with superior personalization.',
        scoringWeight: 15,
        followUpQuestions: [
          'What is your current customer churn rate and what does each lost customer cost?',
          'How are competitors using personalization to win customers?',
          'What is the business impact of ineffective marketing campaigns?'
        ]
      },
      {
        question: 'How many systems contain customer data today, and what are the integration challenges?',
        purpose: 'Assess technical complexity and integration requirements',
        category: 'technical',
        idealResponse: 'We have customer data in 15+ systems including core banking, CRM, marketing automation, mobile banking, online banking, call center, branch systems, loan origination, credit cards, and wealth management. Each system has its own customer ID and data model. There is no master data management. Data quality varies significantly. Manual data aggregation takes 2-3 weeks and is error-prone. We need real-time data integration and unified customer IDs.',
        scoringWeight: 12,
        followUpQuestions: [
          'What is your current approach to data integration?',
          'Do you have master data management capabilities?',
          'What are the data quality issues you face?'
        ]
      },
      {
        question: 'What specific personalization capabilities do you need to compete effectively?',
        purpose: 'Understand business requirements and use cases',
        category: 'business',
        idealResponse: 'We need to predict customer churn and proactively retain at-risk customers. We need to personalize product recommendations based on life events, transaction patterns, and financial goals. We need to optimize marketing campaigns with AI-driven targeting and timing. We need real-time next-best-action recommendations for customer service reps. We need to identify cross-sell opportunities automatically. We need to segment customers dynamically for targeted campaigns.',
        scoringWeight: 12,
        followUpQuestions: [
          'What is your current marketing campaign response rate vs industry benchmarks?',
          'How do you currently identify cross-sell opportunities?',
          'What customer segments are most valuable to retain?'
        ]
      },
      {
        question: 'What analytics and AI capabilities do you need to support data-driven decision making?',
        purpose: 'Assess analytics requirements and AI readiness',
        category: 'technical',
        idealResponse: 'We need predictive analytics for churn prediction, propensity modeling for product recommendations, customer lifetime value calculations, and campaign optimization. We need machine learning models for fraud detection, credit risk assessment, and personalization. We need real-time analytics dashboards for marketing, customer service, and executives. We need self-service analytics for business users. We need to operationalize AI models in production.',
        scoringWeight: 10,
        followUpQuestions: [
          'What is your current analytics maturity level?',
          'Do you have data scientists and AI expertise in-house?',
          'What AI use cases would deliver the most business value?'
        ]
      },
      {
        question: 'What are your data governance, privacy, and compliance requirements?',
        purpose: 'Understand regulatory and governance constraints',
        category: 'technical',
        idealResponse: 'We must comply with GDPR, CCPA, GLBA, and fair lending regulations. We need consent management for marketing communications. We need data lineage and audit trails for regulatory reporting. We need role-based access controls and data masking for sensitive information. We need to ensure data quality and consistency across all systems. We need master data management for customer identities. We have a Chief Data Officer responsible for governance.',
        scoringWeight: 10,
        followUpQuestions: [
          'What are your biggest compliance concerns with customer data?',
          'How do you currently manage data privacy and consent?',
          'What data governance processes are in place today?'
        ]
      },
      {
        question: 'What is your timeline for implementing a customer data platform, and what are the key milestones?',
        purpose: 'Understand project timeline and implementation approach',
        category: 'timeline',
        idealResponse: 'We need to start within 3 months and complete implementation in 12-18 months. Phase 1 (6 months): Integrate core systems and create unified customer views. Phase 2 (6 months): Implement predictive analytics and churn models. Phase 3 (6 months): Deploy AI-driven personalization and campaign optimization. We need quick wins to demonstrate value and secure ongoing funding. Board approval required for investments over $5M.',
        scoringWeight: 8,
        followUpQuestions: [
          'What quick wins would demonstrate value to stakeholders?',
          'What are the approval requirements for this investment?',
          'What resources can you dedicate to this project?'
        ]
      },
      {
        question: 'What is your budget range for this initiative, including software, infrastructure, and services?',
        purpose: 'Qualify budget and investment capacity',
        category: 'budget',
        idealResponse: 'We have allocated $5-8M for this initiative. This includes software licenses, infrastructure, professional services for implementation, and ongoing support. We are currently spending $4M annually on manual data aggregation and ineffective marketing. We are losing $18M annually from customer churn. We need to demonstrate ROI within 12-18 months to justify the investment. CFO requires detailed business case with quantified benefits.',
        scoringWeight: 8,
        followUpQuestions: [
          'What is the cost of your current manual processes?',
          'What is the revenue impact of customer churn?',
          'What ROI timeframe does the CFO require?'
        ]
      },
      {
        question: 'Who are the key stakeholders and decision makers for this project?',
        purpose: 'Identify decision makers and influencers',
        category: 'stakeholder',
        idealResponse: 'Chief Marketing Officer is the executive sponsor - she owns the customer experience and churn problem. CIO is responsible for technology implementation and integration. Chief Data Officer manages data governance and quality. CFO controls budget and requires strong business case. We also need buy-in from heads of retail banking, digital channels, and customer service. Board approval required for investments over $5M. Decision timeline is 2-3 months.',
        scoringWeight: 5,
        followUpQuestions: [
          'What are the CMO\'s top priorities and success metrics?',
          'What concerns does the CFO have about this investment?',
          'What is the decision-making process and timeline?'
        ]
      }
    ],
    expectedFindings: [
      'Customer data scattered across 15+ systems with no unified view',
      'High customer churn rate (12%) with no predictive capabilities',
      'Low marketing campaign response rates (0.8% vs 3-5% industry average)',
      'Manual data aggregation taking 2-3 weeks per analysis',
      'Significant revenue loss from churn and missed cross-sell opportunities',
      'Compliance risk from inconsistent data governance',
      'Strong executive sponsorship from CMO',
      'Budget allocated but CFO requires strong ROI case'
    ],
    redFlags: [
      'No data governance framework in place',
      'Significant data quality issues across systems',
      'Lack of data science expertise in-house',
      'Unrealistic timeline expectations (want results in 3 months)',
      'Budget constraints that don\'t match scope',
      'Resistance from IT due to integration complexity'
    ],
    opportunities: [
      'Strong executive sponsorship from CMO',
      'Clear business pain with quantified impact ($30M annually)',
      'Board-level visibility and support',
      'Existing investments in Salesforce and Adobe that can be enhanced',
      'Competitive pressure creating urgency',
      'Potential for quick wins with churn prediction'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'We already have Salesforce CRM and Adobe Marketing Cloud. Why do we need another platform?',
        stakeholder: 'Chief Marketing Officer',
        difficulty: 'difficult',
        category: 'competition',
        customResponse: 'Great question. Your Salesforce and Adobe investments are valuable, and we want to enhance them, not replace them. The challenge is that Salesforce only sees sales and service data, while Adobe only sees marketing interactions. Neither can access your core banking transactions, loan activity, credit card spending, or wealth management data. A CDP integrates all 15+ data sources to create complete customer views, then feeds that enriched data back to Salesforce and Adobe. This makes your existing tools 3-5x more effective. For example, Adobe campaigns can now target based on actual banking behavior, not just marketing clicks. Salesforce reps can see complete customer relationships across all products. You are not adding another silo - you are connecting all your silos.',
        scoringCriteria: [
          'Acknowledged existing Salesforce and Adobe investments',
          'Positioned CDP as integration layer, not replacement',
          'Explained data limitations of current tools',
          'Provided specific examples of enhanced capabilities',
          'Quantified improvement (3-5x more effective)',
          'Emphasized connecting silos vs creating new ones'
        ],
        hints: [
          'Salesforce and Adobe are valuable but limited in scope',
          'CDP enhances existing tools by providing complete customer data',
          'Integration layer connects all data sources',
          'Makes existing investments 3-5x more effective'
        ]
      },
      {
        objection: 'How do we know the data quality will be good enough for AI and personalization?',
        stakeholder: 'Chief Data Officer',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Excellent concern - data quality is the foundation of effective AI. Here is our approach: First, Watson Studio includes data profiling to assess quality across all your systems. Second, we implement automated data cleansing, standardization, and enrichment using AI. Third, we use entity resolution algorithms to match customer records across systems with 95%+ accuracy. Fourth, we establish master data management for customer identities. Fifth, we implement continuous data quality monitoring. Most importantly, we take an iterative approach. We start with your highest quality data sources - probably core banking and CRM. We demonstrate value with churn prediction and personalization. Then we expand to additional data sources and continuously improve quality. You don\'t need perfect data on day one - you need good enough data to deliver business value, then improve iteratively.',
        scoringCriteria: [
          'Acknowledged data quality as legitimate concern',
          'Described specific data quality capabilities in Watson Studio',
          'Explained entity resolution with accuracy metrics (95%+)',
          'Emphasized iterative approach starting with best data',
          'Positioned as continuous improvement, not one-time fix',
          'Provided realistic expectations (good enough vs perfect)'
        ],
        hints: [
          'Data quality is critical for AI success',
          'Watson Studio includes comprehensive data quality tools',
          'Entity resolution matches records with 95%+ accuracy',
          'Iterative approach - start with best data, expand gradually',
          'Continuous improvement, not perfection on day one'
        ]
      },
      {
        objection: 'What about data privacy and compliance? We cannot risk GDPR or CCPA violations.',
        stakeholder: 'Chief Data Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Privacy and compliance are absolutely critical, and they are built into our solution architecture. First, IBM Power Systems provide hardware-based encryption and pervasive security. Second, Watson Studio includes consent management, data lineage, audit trails, and role-based access controls. Third, we implement data masking and anonymization for sensitive PII. Fourth, we provide GDPR and CCPA compliance frameworks including right to be forgotten, data portability, and consent tracking. Fifth, we conduct privacy impact assessments before deployment. Sixth, IBM has deep financial services expertise and can provide compliance guidance. Here is the key insight: A unified CDP actually reduces compliance risk. Today you have 15 disconnected systems with inconsistent data governance. A CDP provides centralized governance, consistent controls, and complete audit trails. You move from 15 compliance problems to one well-governed platform.',
        scoringCriteria: [
          'Took privacy concerns very seriously',
          'Described specific privacy and compliance capabilities',
          'Emphasized IBM financial services expertise',
          'Reframed CDP as reducing risk vs increasing it',
          'Provided specific compliance frameworks (GDPR, CCPA)',
          'Offered privacy impact assessment'
        ],
        hints: [
          'Privacy is built into solution architecture',
          'Hardware-based encryption and security',
          'GDPR and CCPA compliance frameworks included',
          'CDP reduces risk by centralizing governance',
          'IBM has deep financial services compliance expertise'
        ]
      },
      {
        objection: 'This sounds expensive. How do we justify $5-8M when we are trying to cut costs?',
        stakeholder: 'CFO',
        difficulty: 'very difficult',
        category: 'cost',
        customResponse: 'I understand cost concerns, especially in a cost-cutting environment. Let me show you why this is actually a cost reduction and revenue growth investment. Today you are losing $18M annually from 12% customer churn. You are wasting $8M on ineffective marketing with 0.8% response rates. You are spending $4M on manual data processes. That is $30M in annual costs and lost revenue. Our solution costs $6M initially plus $500K annually. Conservative benefits: Reduce churn by 3 percentage points = $4.5M retained revenue. Improve marketing response from 0.8% to 2.5% = $5M additional revenue. Eliminate manual data work = $4M cost savings. Total annual benefit: $13.5M. Payback in 6 months. Year 2 and beyond: $13M annual net benefit. This is not an expense - it is an investment that pays for itself in 6 months and generates $13M annually thereafter.',
        scoringCriteria: [
          'Led with quantified business case',
          'Showed current costs and lost revenue ($30M annually)',
          'Provided conservative benefit estimates',
          'Calculated payback period (6 months)',
          'Emphasized ongoing annual benefits ($13M)',
          'Reframed from cost to investment with measurable ROI'
        ],
        hints: [
          'Current state costs $30M annually (churn, marketing, manual work)',
          'Solution costs $6M initially + $500K annually',
          'Conservative benefits: $13.5M annually',
          'Payback in 6 months',
          'Year 2+: $13M annual net benefit'
        ]
      },
      {
        objection: 'We tried a data warehouse project 5 years ago and it failed. How is this different?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'That is a very valid concern, and I appreciate you sharing that experience. Many data warehouse projects have failed due to complexity, long timelines, and lack of business value. Our approach is fundamentally different in three ways. First, we use agile methodology with quick wins every 3 months, not a 3-year big bang project. Second, we focus on specific business outcomes - churn reduction, campaign optimization - not just building infrastructure. Third, we use modern cloud-native architecture with AI-powered data integration, not traditional ETL. Here is our approach: Month 1-3: Integrate core banking and CRM data, create unified customer views. Month 4-6: Deploy churn prediction model, demonstrate value. Month 7-9: Implement campaign optimization, measure ROI. You see business value in 3-4 months, not 3 years. We also provide IBM professional services with best practices from 100+ financial services implementations. We learn from past failures and apply proven methodologies.',
        scoringCriteria: [
          'Acknowledged past failure and validated concern',
          'Contrasted old approach (big bang) vs new approach (agile)',
          'Emphasized business outcomes, not just technology',
          'Provided specific timeline with value delivery milestones',
          'Highlighted IBM professional services and proven methodologies',
          'Offered to review past project and explain differences'
        ],
        hints: [
          'Many data warehouse projects have failed',
          'Agile approach with quick wins every 3 months',
          'Focus on business outcomes, not just infrastructure',
          'Modern cloud-native architecture vs traditional ETL',
          'IBM professional services with 100+ implementations'
        ]
      }
    ],
    minimumObjectionsToHandle: 4,
    bonusObjections: [
      {
        objection: 'Our IT team is already overloaded. We do not have resources for another major project.',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Resource constraints are a very real challenge, and we have designed our approach specifically to address this. First, IBM professional services handles implementation - we do the heavy lifting, not your team. Your team provides business requirements and data access, but we handle integration, configuration, and deployment. Second, we use cloud-native architecture that reduces infrastructure management. Third, Watson Studio provides low-code/no-code tools so business users can build analytics without IT involvement. Fourth, we provide comprehensive training and knowledge transfer. Fifth, we can augment your team with IBM experts during and after implementation. Here is the key: This platform actually reduces IT workload long-term. Today your team spends countless hours on manual data integration and ad-hoc data requests. With a CDP, data integration is automated and business users have self-service analytics. Your team spends less time on data plumbing and more time on strategic initiatives.',
        scoringCriteria: [
          'Acknowledged resource constraints as legitimate concern',
          'Emphasized IBM professional services doing the work',
          'Highlighted low-code/no-code capabilities for business users',
          'Described training and knowledge transfer approach',
          'Reframed: CDP reduces long-term IT workload',
          'Offered flexible staffing models'
        ],
        hints: [
          'IBM professional services handles implementation',
          'Low-code/no-code tools for business users',
          'Reduces long-term IT workload through automation',
          'Self-service analytics reduces ad-hoc requests'
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
          productName: 'IBM Watson Studio (Customer Data Platform)',
          reason: 'Watson Studio provides comprehensive customer data platform capabilities including data integration, data quality, master data management, predictive analytics, machine learning, and AI-driven personalization. It integrates data from 15+ systems, creates unified customer views, predicts churn, optimizes campaigns, and enables real-time personalization.',
          configuration: 'Hybrid cloud deployment (on-premises + IBM Cloud), real-time and batch data integration from 15+ source systems, 2M customers, 500M transactions annually, 50TB total data, predictive analytics, machine learning, real-time scoring, 500 business users, 50 data scientists',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'Power E1080 provides high-performance infrastructure for real-time data integration, analytics processing, and AI model training. It delivers 4x better performance than x86 for analytics workloads, enabling sub-second response times for personalization.',
          configuration: '2 x Power E1080 servers (16 cores each), 512GB memory per server, Red Hat Enterprise Linux, PowerVM for workload isolation, purpose: real-time data integration, analytics processing, AI model training',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'FlashSystem 9500 provides high-performance, low-latency storage for customer data platform. It delivers sub-millisecond latency for real-time personalization and analytics queries.',
          configuration: '200TB usable capacity (after compression), sub-millisecond latency, 1M IOPS, snapshots, replication, cyber resilience, 5:1 data compression',
          priority: 'supporting'
        }
      ],
      architecture: 'Hybrid cloud architecture with Watson Studio on IBM Cloud for data integration, analytics, and AI. Power E1080 on-premises for real-time processing and core banking integration. FlashSystem 9500 for high-performance storage. Integration with 15+ source systems including core banking, CRM, marketing automation, mobile banking, online banking, call center, branch systems, loan origination, credit cards, and wealth management.',
      sizing: 'Sized for 2M customers, 500M transactions annually, 50TB total data, 500 business users, 50 data scientists, real-time personalization with sub-second response times',
      deployment: 'Phased approach: Phase 1 (6 months): Data integration and unified customer views. Phase 2 (6 months): Predictive analytics and churn models. Phase 3 (6 months): AI-driven personalization and campaign optimization. Agile methodology with quick wins every 3 months.'
    },
    pricing: {
      hardware: '$2.5M (2x Power E1080 servers, FlashSystem 9500 storage)',
      software: '$2M (Watson Studio licenses for 500 users, 3-year subscription)',
      services: '$1.5M (IBM Consulting: implementation, integration, data quality, training)',
      support: '$500K/year (24x7 support, ongoing optimization, model updates)',
      total: '$6M initial investment + $500K/year ongoing',
      financing: 'IBM Global Financing available - flexible payment terms',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$4M annually (eliminate manual data aggregation and reporting)',
      revenueImpact: '$9.5M annually ($4.5M churn reduction + $5M marketing efficiency)',
      productivityGains: '$3M annually (cross-sell opportunities, customer service efficiency)',
      riskReduction: 'Reduced compliance risk from centralized data governance, improved customer satisfaction, competitive positioning',
      roi: '6 months payback, 236% three-year ROI',
      paybackPeriod: '6 months',
      tco: '3-year TCO: $7M investment vs. $49.5M in benefits = $42.5M net benefit'
    },
    competitivePositioning: 'IBM Watson Studio is the leading enterprise customer data platform with proven success in financial services. Unlike point solutions, IBM provides integrated platform with data integration, analytics, AI, and governance. Power infrastructure ensures performance and reliability for banking workloads. IBM has deep financial services expertise and compliance knowledge.',
    nextSteps: [
      'Schedule executive workshop to demonstrate Watson Studio CDP capabilities',
      'Provide detailed ROI analysis with customer retention modeling',
      'Arrange reference call with similar regional bank (2M customers)',
      'Conduct data assessment to evaluate integration complexity',
      'Develop phased implementation plan with quick win milestones',
      'Present business case to Board with CMO, CIO, CDO, and CFO',
      'Conduct privacy impact assessment for GDPR/CCPA compliance'
    ],
    requiredElements: [
      'Must include Watson Studio for customer data platform',
      'Must include data integration from 15+ source systems',
      'Must include churn prediction and personalization capabilities',
      'Must include GDPR and CCPA compliance frameworks',
      'Must include phased implementation with quick wins',
      'Must address data quality and master data management',
      'Must include IBM Consulting services for implementation'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      weight: 0.4,
      criteria: [
        'Identified business drivers: churn, marketing effectiveness, customer experience',
        'Quantified business impact: $30M in costs and lost revenue',
        'Assessed technical complexity: 15+ disconnected systems',
        'Understood personalization requirements and use cases',
        'Identified analytics and AI capabilities needed',
        'Assessed data governance and compliance requirements',
        'Understood timeline and implementation approach',
        'Qualified budget and identified decision makers'
      ]
    },
    objectionHandling: {
      maxPoints: 30,
      weight: 0.3,
      criteria: [
        'Positioned CDP as enhancement to existing Salesforce/Adobe investments',
        'Addressed data quality concerns with specific capabilities and iterative approach',
        'Demonstrated privacy and compliance capabilities with GDPR/CCPA frameworks',
        'Built compelling business case with 6-month payback and $16.5M annual benefits',
        'Differentiated from failed data warehouse project with agile approach',
        'Addressed resource constraints with IBM professional services'
      ]
    },
    recommendation: {
      maxPoints: 20,
      weight: 0.2,
      criteria: [
        'Recommended Watson Studio as comprehensive customer data platform',
        'Included Power E1080 for high-performance analytics processing',
        'Included FlashSystem 9500 for low-latency storage',
        'Designed phased implementation with quick wins every 3 months',
        'Provided detailed integration plan for 15+ source systems',
        'Addressed privacy and compliance requirements with specific frameworks'
      ]
    },
    businessValue: {
      maxPoints: 10,
      weight: 0.1,
      criteria: [
        'Quantified benefits: $16.5M annually from churn reduction, marketing, and efficiency',
        'Calculated ROI: 6-month payback, 236% three-year ROI',
        'Identified cost savings: $4M annually from operational efficiency',
        'Projected revenue growth: $12.5M annually from churn and marketing',
        'Defined success metrics: churn reduction, marketing response rate, customer satisfaction'
      ]
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Customer Data Platform Value Proposition',
      description: 'Understanding how CDPs unify customer data from multiple systems to enable personalization, analytics, and AI-driven decision making',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Data Integration and Master Data Management',
      description: 'Techniques for integrating data from 15+ disconnected systems and creating unified customer views with entity resolution',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI-Driven Personalization and Churn Prediction',
      description: 'Using machine learning for churn prediction, propensity modeling, and real-time personalization to improve customer retention and marketing effectiveness',
      skillLevel: 'advanced'
    },
    {
      concept: 'Data Privacy and Compliance',
      description: 'Implementing GDPR, CCPA, and GLBA compliance with consent management, data lineage, and audit trails in financial services',
      skillLevel: 'advanced'
    },
    {
      concept: 'Business Case Development for Data Initiatives',
      description: 'Quantifying benefits from churn reduction, marketing efficiency, and operational improvements with specific ROI calculations',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Agile Implementation Methodology',
      description: 'Delivering quick wins every 3 months vs traditional big bang approach, demonstrating value incrementally',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['banking', 'customer-data-platform', 'personalization', 'churn-prediction', 'marketing-analytics', 'ai', 'data-integration'],
    skills: ['Customer data platforms', 'Data integration', 'AI/ML', 'Personalization', 'Churn prediction', 'Marketing analytics', 'Data governance', 'Privacy compliance'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'CDP is a hot topic in banking - many banks struggling with data silos',
    'Emphasize business outcomes (churn, marketing ROI) not just technology',
    'Address privacy concerns early - this is a deal breaker if not handled well',
    'Differentiate from failed data warehouse projects with agile approach',
    'Build compelling business case with specific numbers and quick payback',
    'Position Watson Studio as comprehensive platform, not point solution',
    'Highlight IBM financial services expertise and proven methodologies',
    'CMO is champion - focus on customer experience and churn reduction',
    'CFO is skeptical - lead with quantified business case and 6-month payback',
    'CDO is concerned about data quality and compliance - address with specific capabilities',
    'CIO worried about past failures - differentiate with agile approach and quick wins'
  ]
};

// Scenario 9: Cybersecurity & Threat Detection
export const bankingScenario009: TrainingScenario = {
  id: 'banking-cybersecurity-009',
  title: 'Regional Bank Needs Advanced Cybersecurity and Threat Detection',
  description: 'A regional bank with $2B in assets is experiencing increasing cyber threats including phishing attacks, ransomware attempts, and account takeovers. Their legacy security tools cannot detect sophisticated threats in real-time. They suffered a ransomware attack last year that cost $3M. They need advanced cybersecurity with AI-powered threat detection to protect customer data and prevent financial losses.',
  
  customerProfile: {
    company: 'Midwest Regional Bank',
    industry: 'Banking',
    size: 'Large (1000-5000 employees)',
    revenue: '$2B in assets, $180M annual revenue',
    employees: 1200,
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '50 x86 servers running banking applications',
      storage: 'Dell EMC Unity (7 years old)',
      applications: ['Core banking (Jack Henry Silverlake)', 'Online banking', 'Mobile banking', 'ATM network', 'Branch systems', 'Wire transfer system', 'ACH processing'],
      operatingSystem: 'Mixed Windows/Linux',
      virtualization: 'VMware vSphere 6.7',
      age: '5-10 years',
      endOfLife: '12-24 months',
      issues: [
        'Suffered ransomware attack last year - $3M cost',
        'Cannot detect sophisticated threats in real-time',
        'Phishing attacks increasing 40% year-over-year',
        'Account takeover fraud costing $2M annually',
        'Legacy security tools generate too many false positives',
        'Security team overwhelmed with alerts - cannot investigate all',
        'No AI-powered threat detection or behavioral analytics',
        'Compliance concerns - regulators requiring better security'
      ]
    },
    keyStakeholders: [
      {
        name: 'James Anderson',
        role: 'Chief Information Security Officer',
        priorities: ['Threat detection', 'Incident response', 'Compliance'],
        concerns: ['False positives', 'Integration complexity', 'Staff training'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Patricia Wilson',
        role: 'CIO',
        priorities: ['Security posture', 'System availability', 'Risk reduction'],
        concerns: ['Implementation disruption', 'Cost', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Robert Martinez',
        role: 'Chief Risk Officer',
        priorities: ['Regulatory compliance', 'Fraud prevention', 'Risk management'],
        concerns: ['Regulatory requirements', 'Audit findings', 'Board reporting'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Linda Thompson',
        role: 'CFO',
        priorities: ['Cost control', 'ROI', 'Insurance premiums'],
        concerns: ['Capital investment', 'Ongoing costs', 'Business case'],
        influence: 'medium',
        supportLevel: 'neutral'
      }
    ],
    budget: '$3M-$5M',
    timeline: '9-12 months',
    decisionProcess: 'CISO recommendation, CIO approval, board notification for investments >$3M'
  },

  businessContext: {
    challenges: [
      'Suffered ransomware attack last year costing $3M in recovery and lost business',
      'Phishing attacks increasing 40% year-over-year - employees clicking malicious links',
      'Account takeover fraud costing $2M annually - cannot detect in real-time',
      'Legacy security tools generate 10,000+ alerts daily - 95% false positives',
      'Security team overwhelmed - cannot investigate all alerts',
      'No AI-powered threat detection or behavioral analytics',
      'Cannot detect insider threats or compromised credentials',
      'Regulators requiring better security controls and incident response'
    ],
    businessImpact: [
      '$3M cost from ransomware attack (recovery, lost business, reputation damage)',
      '$2M annual losses from account takeover fraud',
      '$1.5M annual cost for security team overtime and burnout',
      '$500K potential regulatory fines for inadequate security controls',
      'Cyber insurance premiums increased 60% after ransomware attack',
      'Customer trust declining - 15% concerned about security',
      'Board of Directors demanding better security posture',
      'Competitive disadvantage vs banks with advanced security'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Cybersecurity transformation program',
      'Zero trust security architecture',
      'AI-powered threat detection',
      'Security operations center (SOC) modernization',
      'Incident response capability improvement'
    ],
    regulatoryRequirements: [
      'FFIEC cybersecurity assessment tool',
      'GLBA safeguards rule',
      'NCUA cybersecurity requirements',
      'State data breach notification laws',
      'PCI DSS for card processing'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for advanced cybersecurity right now?',
        purpose: 'Understand business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'We suffered a ransomware attack last year that cost us $3M in recovery, lost business, and reputation damage. We are experiencing increasing cyber threats - phishing attacks up 40%, account takeover fraud costing $2M annually. Our legacy security tools cannot detect sophisticated threats in real-time. They generate 10,000+ alerts daily with 95% false positives. Our security team is overwhelmed and cannot investigate all alerts. Regulators are requiring better security controls. Our cyber insurance premiums increased 60%. The board is demanding immediate action.',
        scoringWeight: 15,
        followUpQuestions: [
          'What was the business impact of the ransomware attack?',
          'What types of cyber threats are you seeing most frequently?',
          'What are regulators requiring for cybersecurity improvements?'
        ]
      },
      {
        question: 'What are your current security tools and capabilities, and what are the gaps?',
        purpose: 'Assess current security posture and identify gaps',
        category: 'technical',
        idealResponse: 'We have legacy firewall, antivirus, basic SIEM, and signature-based intrusion detection. These tools are 5-10 years old and cannot detect modern threats. We have no AI-powered threat detection, no behavioral analytics, no insider threat detection. We cannot detect zero-day exploits or advanced persistent threats. Our SIEM generates too many false positives. We have no automated incident response. We lack threat intelligence integration. We cannot detect compromised credentials or account takeovers in real-time. We need modern security with AI and automation.',
        scoringWeight: 12,
        followUpQuestions: [
          'What percentage of security alerts are false positives?',
          'How long does it take to detect and respond to threats?',
          'What security incidents have you experienced in the past year?'
        ]
      },
      {
        question: 'What specific threat detection capabilities do you need to protect your bank?',
        purpose: 'Understand security requirements and use cases',
        category: 'business',
        idealResponse: 'We need AI-powered threat detection that can identify sophisticated attacks in real-time. We need behavioral analytics to detect anomalous user activity and insider threats. We need to detect account takeover attempts before fraud occurs. We need to identify phishing campaigns and malicious emails. We need to detect ransomware and malware before they spread. We need automated incident response to contain threats quickly. We need threat intelligence integration to stay ahead of emerging threats. We need to reduce false positives from 95% to under 10%.',
        scoringWeight: 12,
        followUpQuestions: [
          'What are your most critical assets to protect?',
          'What types of threats are most concerning to your CISO?',
          'What is your current mean time to detect (MTTD) and mean time to respond (MTTR)?'
        ]
      },
      {
        question: 'How do you currently detect and respond to security incidents?',
        purpose: 'Assess incident response capabilities and maturity',
        category: 'technical',
        idealResponse: 'Our incident response is mostly manual and reactive. We have a small security team that investigates alerts from our SIEM. With 10,000+ daily alerts and 95% false positives, we cannot investigate everything. Mean time to detect is 3-4 weeks for sophisticated threats. Mean time to respond is 2-3 days. We have no automated playbooks or orchestration. We lack forensic capabilities. We have no threat hunting program. During the ransomware attack, we were overwhelmed and had to bring in external incident response consultants. We need automated detection, investigation, and response.',
        scoringWeight: 10,
        followUpQuestions: [
          'What is your current security team size and skill level?',
          'What was your response process during the ransomware attack?',
          'What incident response capabilities do you want to build?'
        ]
      },
      {
        question: 'What are your regulatory and compliance requirements for cybersecurity?',
        purpose: 'Understand compliance obligations and audit requirements',
        category: 'technical',
        idealResponse: 'We must comply with FFIEC cybersecurity assessment tool, GLBA safeguards rule, and NCUA requirements. We have annual security audits and penetration tests. Regulators are requiring better threat detection, incident response, and security monitoring. We had audit findings last year related to inadequate security controls. We must report security incidents to regulators within 36 hours. We need to demonstrate continuous monitoring and threat detection capabilities. We need audit trails and forensic evidence for investigations. Compliance is a board-level concern.',
        scoringWeight: 10,
        followUpQuestions: [
          'What were the specific audit findings related to security?',
          'What are regulators most concerned about?',
          'What security metrics do you report to the board?'
        ]
      },
      {
        question: 'What is your timeline for implementing advanced cybersecurity capabilities?',
        purpose: 'Understand project timeline and implementation urgency',
        category: 'timeline',
        idealResponse: 'This is urgent - the board wants action within 3 months. We need to start immediately and complete core implementation in 9-12 months. Phase 1 (3 months): Deploy AI-powered threat detection and reduce false positives. Phase 2 (3 months): Implement behavioral analytics and insider threat detection. Phase 3 (3 months): Deploy automated incident response and threat hunting. We need quick wins to demonstrate value to the board and regulators. Annual security audit is in 6 months - we need improvements before then.',
        scoringWeight: 8,
        followUpQuestions: [
          'What quick wins would demonstrate value to the board?',
          'What is the timeline for your next security audit?',
          'What resources can you dedicate to this project?'
        ]
      },
      {
        question: 'What is your budget for cybersecurity improvements, including technology and services?',
        purpose: 'Qualify budget and investment capacity',
        category: 'budget',
        idealResponse: 'We have allocated $3-5M for cybersecurity improvements. This includes security software, infrastructure, professional services, and training. We are currently spending $1.5M annually on security tools and staff. The ransomware attack cost us $3M. Account takeover fraud costs $2M annually. Our cyber insurance premiums increased $300K after the attack. We need to demonstrate ROI through reduced fraud, lower insurance premiums, and avoided incident costs. The board has approved this investment as a top priority.',
        scoringWeight: 8,
        followUpQuestions: [
          'What is the cost of your current security incidents and fraud?',
          'How much did cyber insurance premiums increase?',
          'What ROI timeframe does the board expect?'
        ]
      },
      {
        question: 'Who are the key stakeholders and decision makers for this cybersecurity initiative?',
        purpose: 'Identify decision makers and influencers',
        category: 'stakeholder',
        idealResponse: 'Chief Information Security Officer is the executive sponsor - he owns the security posture and threat detection problem. CIO is responsible for technology implementation and integration. Chief Risk Officer manages regulatory compliance and fraud prevention. CFO controls budget and requires strong business case. We also need buy-in from heads of IT operations, application development, and branch operations. Board notification required for investments over $3M. Decision timeline is 2-3 months.',
        scoringWeight: 5,
        followUpQuestions: [
          'What are the CISO\'s top priorities and success metrics?',
          'What concerns does the CFO have about this investment?',
          'What is the decision-making process and timeline?'
        ]
      }
    ],
    expectedFindings: [
      'Recent ransomware attack costing $3M with significant business impact',
      'High volume of security alerts (10,000+ daily) with 95% false positives',
      'Increasing cyber threats: phishing up 40%, account takeover fraud $2M annually',
      'Legacy security tools 5-10 years old, cannot detect modern threats',
      'Overwhelmed security team with manual, reactive incident response',
      'Regulatory pressure and audit findings requiring better security controls',
      'Strong executive sponsorship from CISO and board-level urgency',
      'Budget allocated but CFO requires ROI case'
    ],
    redFlags: [
      'Unrealistic timeline expectations (want results in 1 month)',
      'Insufficient security team size and skills for ongoing operations',
      'Resistance from IT operations due to implementation disruption',
      'Budget constraints that don\'t match scope of security improvements needed',
      'Lack of executive alignment on security priorities',
      'No incident response plan or playbooks in place'
    ],
    opportunities: [
      'Strong executive sponsorship from CISO with board support',
      'Clear business pain with quantified impact ($7M annually)',
      'Recent ransomware attack creating urgency and budget approval',
      'Regulatory pressure providing additional justification',
      'Cyber insurance premium reduction opportunity',
      'Potential for quick wins with AI-powered threat detection'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we know AI-powered threat detection will not generate even more false positives?',
        stakeholder: 'Chief Information Security Officer',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Excellent question - false positives are a major problem with traditional security tools. Here is how AI-powered threat detection is fundamentally different. First, Watson Studio uses machine learning models trained on billions of security events to distinguish real threats from normal activity. Second, behavioral analytics establish baselines for normal user and system behavior, then detect anomalies. Third, the AI continuously learns and improves accuracy over time. Fourth, we implement tuning and customization for your specific environment. Industry data shows AI-powered threat detection reduces false positives by 80-90% compared to signature-based tools. Instead of 10,000 daily alerts with 95% false positives, you might see 500 alerts with 10% false positives. That is 50 real threats vs 500 false alarms - much more manageable. We also provide IBM Security experts to help tune and optimize the system during implementation.',
        scoringCriteria: [
          'Acknowledged false positives as legitimate concern',
          'Explained how AI is fundamentally different from signature-based tools',
          'Described machine learning and behavioral analytics approach',
          'Provided specific metrics: 80-90% reduction in false positives',
          'Emphasized continuous learning and improvement',
          'Offered IBM Security experts for tuning and optimization'
        ],
        hints: [
          'AI uses machine learning trained on billions of security events',
          'Behavioral analytics detect anomalies from normal baselines',
          'Reduces false positives by 80-90% vs signature-based tools',
          'Continuous learning improves accuracy over time',
          'IBM Security experts help tune and optimize'
        ]
      },
      {
        objection: 'We cannot afford any downtime during implementation. How do we deploy this without disrupting banking operations?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Zero downtime is absolutely critical for banking operations, and we have designed our implementation approach specifically to avoid disruption. First, we deploy in monitor-only mode initially - the AI observes and learns without blocking any traffic. Second, we implement in phases starting with non-critical systems, then gradually expand to production banking systems. Third, we schedule any infrastructure changes during maintenance windows. Fourth, we run parallel with existing security tools during transition - you maintain current protection while adding AI capabilities. Fifth, we provide 24x7 support during implementation. Most importantly, the AI-powered threat detection is deployed as an overlay on your existing infrastructure - it does not require replacing or modifying your core banking systems. You gain enhanced security without touching your production banking applications. We have successfully deployed this approach at 50+ banks with zero downtime.',
        scoringCriteria: [
          'Acknowledged zero downtime as critical requirement',
          'Described monitor-only mode for initial deployment',
          'Explained phased approach starting with non-critical systems',
          'Emphasized parallel operation with existing security tools',
          'Positioned as overlay, not replacement of core systems',
          'Provided track record: 50+ banks with zero downtime'
        ],
        hints: [
          'Deploy in monitor-only mode initially',
          'Phased approach starting with non-critical systems',
          'Parallel operation with existing security tools',
          'Overlay on existing infrastructure, not replacement',
          '50+ banks deployed with zero downtime'
        ]
      },
      {
        objection: 'Our security team is already overwhelmed. How will they manage another security tool?',
        stakeholder: 'Chief Information Security Officer',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Your security team being overwhelmed is exactly why you need AI-powered threat detection - it actually reduces their workload, not increases it. Here is how: First, AI reduces false positives by 80-90%, so instead of investigating 9,500 false alarms daily, they investigate 50 real threats. Second, automated incident response handles routine threats without human intervention - malware quarantine, credential resets, network isolation. Third, AI provides context and recommendations for each alert, so analysts spend less time investigating and more time responding. Fourth, threat hunting becomes proactive instead of reactive - AI identifies patterns and anomalies automatically. Fifth, we provide comprehensive training and IBM Security experts for ongoing support. The result: Your security team becomes more effective and less overwhelmed. They focus on strategic security initiatives instead of chasing false positives. We have seen security teams reduce alert investigation time by 70% while improving threat detection by 300%.',
        scoringCriteria: [
          'Reframed: AI reduces workload, not increases it',
          'Quantified impact: 80-90% reduction in false positives',
          'Described automated incident response capabilities',
          'Explained AI-provided context and recommendations',
          'Emphasized proactive threat hunting vs reactive investigation',
          'Provided metrics: 70% less time, 300% better detection'
        ],
        hints: [
          'AI reduces false positives by 80-90%',
          'Automated incident response handles routine threats',
          'AI provides context and recommendations for each alert',
          'Security team becomes more effective, less overwhelmed',
          '70% less investigation time, 300% better detection'
        ]
      },
      {
        objection: 'How do we justify $3-5M for cybersecurity when we are trying to control costs?',
        stakeholder: 'CFO',
        difficulty: 'very difficult',
        category: 'cost',
        customResponse: 'Let me show you why this is actually a cost reduction and risk mitigation investment. Today you are spending $7M annually on cybersecurity problems: $3M ransomware recovery, $2M account takeover fraud, $1.5M security team overtime, $500K potential fines. Your cyber insurance premiums increased $300K after the attack. That is $7.3M in annual costs. Our solution costs $4M initially plus $400K annually. Conservative benefits: Prevent one ransomware attack = $3M savings. Reduce account takeover fraud by 50% = $1M savings. Reduce security team overtime by 40% = $600K savings. Lower cyber insurance premiums by 20% = $300K savings. Total annual benefit: $4.9M. Payback in 10 months. Year 2 and beyond: $4.5M annual net benefit. Plus, you avoid regulatory fines, reputation damage, and customer trust issues. This is not an expense - it is an investment that pays for itself in 10 months and generates $4.5M annually thereafter while significantly reducing your cyber risk.',
        scoringCriteria: [
          'Led with quantified business case',
          'Showed current costs: $7.3M annually',
          'Provided conservative benefit estimates',
          'Calculated payback period: 10 months',
          'Emphasized ongoing annual benefits: $4.5M',
          'Reframed from cost to investment with measurable ROI'
        ],
        hints: [
          'Current state costs $7.3M annually (ransomware, fraud, overtime, premiums)',
          'Solution costs $4M initially + $400K annually',
          'Conservative benefits: $4.9M annually',
          'Payback in 10 months',
          'Year 2+: $4.5M annual net benefit'
        ]
      },
      {
        objection: 'What if the AI makes a mistake and blocks legitimate banking transactions?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Protecting legitimate banking transactions while blocking threats is absolutely critical, and we have multiple safeguards to prevent false blocking. First, we deploy in monitor-only mode for 30-60 days to establish baselines and tune the AI before any blocking occurs. Second, we implement graduated response - suspicious activity triggers additional authentication, not immediate blocking. Third, we maintain whitelists for known-good transactions and users. Fourth, we provide real-time override capabilities for security analysts. Fifth, we implement rollback procedures if any issues occur. Sixth, we start with high-confidence threats (malware, known bad IPs) before expanding to behavioral anomalies. Most importantly, the AI learns your specific banking patterns and customer behaviors. Industry data shows AI-powered security has 99.9%+ accuracy for legitimate transactions while detecting 95%+ of real threats. We also provide IBM Security experts during implementation to ensure proper tuning. The risk of blocking legitimate transactions is far lower than the risk of missing a ransomware attack or account takeover.',
        scoringCriteria: [
          'Acknowledged legitimate transaction protection as critical',
          'Described monitor-only mode for baseline establishment',
          'Explained graduated response vs immediate blocking',
          'Emphasized whitelists, overrides, and rollback procedures',
          'Provided accuracy metrics: 99.9%+ for legitimate transactions',
          'Reframed risk: blocking legitimate transactions vs missing threats'
        ],
        hints: [
          'Monitor-only mode for 30-60 days before blocking',
          'Graduated response: additional authentication, not immediate blocking',
          'Whitelists, overrides, and rollback procedures',
          '99.9%+ accuracy for legitimate transactions',
          'Risk of missing threats is greater than false blocking'
        ]
      }
    ],
    minimumObjectionsToHandle: 4,
    bonusObjections: [
      {
        objection: 'How do we know IBM Watson Studio is better than other security vendors like CrowdStrike or Palo Alto?',
        stakeholder: 'Chief Information Security Officer',
        difficulty: 'difficult',
        category: 'competition',
        customResponse: 'Great question - there are excellent security vendors in the market. Here is what differentiates IBM Watson Studio for banking. First, IBM has deep financial services expertise with 50+ years serving banks and proven compliance knowledge. Second, Watson Studio provides integrated platform - threat detection, behavioral analytics, incident response, and threat intelligence in one solution. Third, IBM Power infrastructure provides hardware-based security and encryption that x86 cannot match. Fourth, Watson Studio integrates with your existing security tools (SIEM, firewall, etc.) rather than requiring replacement. Fifth, IBM provides 24x7 Security Operations Center support with banking-specific expertise. Sixth, Watson Studio is proven at 100+ financial institutions globally. CrowdStrike and Palo Alto are excellent endpoint and network security tools, but they do not provide the integrated platform, banking expertise, and hardware-based security that IBM offers. Many banks use IBM Watson Studio alongside CrowdStrike/Palo Alto for comprehensive defense-in-depth.',
        scoringCriteria: [
          'Acknowledged competitive vendors as legitimate options',
          'Differentiated on financial services expertise and compliance',
          'Emphasized integrated platform vs point solutions',
          'Highlighted hardware-based security with Power infrastructure',
          'Positioned as complementary to other security tools',
          'Provided banking-specific track record: 100+ financial institutions'
        ],
        hints: [
          'IBM has 50+ years financial services expertise',
          'Integrated platform vs point solutions',
          'Hardware-based security with Power infrastructure',
          'Proven at 100+ financial institutions',
          'Complementary to CrowdStrike/Palo Alto, not replacement'
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
          productName: 'IBM Watson Studio (AI-Powered Threat Detection)',
          reason: 'Watson Studio provides comprehensive AI-powered cybersecurity including threat detection, behavioral analytics, automated incident response, and threat intelligence. It uses machine learning to detect sophisticated threats in real-time, reduces false positives by 80-90%, and provides automated response capabilities.',
          configuration: 'Hybrid cloud deployment, AI-powered threat detection, behavioral analytics, automated incident response, threat intelligence integration, SIEM integration, 24x7 SOC support, 1200 employees, 50 servers, banking applications',
          priority: 'primary'
        },
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'Power E1080 provides hardware-based security and encryption that x86 cannot match. It delivers pervasive encryption, secure boot, and hardware security modules (HSM) for protecting sensitive banking data and cryptographic keys.',
          configuration: '2 x Power E1080 servers (16 cores each), 512GB memory per server, Red Hat Enterprise Linux, PowerVM for workload isolation, hardware-based encryption, secure boot, HSM integration',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'FlashSystem 9500 provides cyber-resilient storage with immutable snapshots, air-gapped copies, and rapid recovery capabilities. It protects against ransomware and enables fast recovery if an attack occurs.',
          configuration: '200TB usable capacity, cyber-resilient storage, immutable snapshots, air-gapped copies, rapid recovery (minutes vs days), SafeguardedCopy for ransomware protection',
          priority: 'supporting'
        }
      ],
      architecture: 'Hybrid cloud architecture with Watson Studio on IBM Cloud for AI-powered threat detection and behavioral analytics. Power E1080 on-premises for banking applications with hardware-based security and encryption. FlashSystem 9500 for cyber-resilient storage with immutable snapshots. Integration with existing security tools (SIEM, firewall, antivirus) for comprehensive defense-in-depth.',
      sizing: 'Sized for 1200 employees, 50 servers, banking applications including core banking, online/mobile banking, ATM network, branch systems, wire transfers, ACH processing. 10,000+ daily security events, real-time threat detection, automated incident response.',
      deployment: 'Phased approach: Phase 1 (3 months): Deploy Watson Studio in monitor-only mode, establish baselines, tune AI models. Phase 2 (3 months): Implement behavioral analytics and insider threat detection, begin automated response for high-confidence threats. Phase 3 (3 months): Deploy full automated incident response, threat hunting, and SOC integration. Zero downtime deployment with parallel operation of existing security tools.'
    },
    pricing: {
      hardware: '$2.5M (2x Power E1080 servers, FlashSystem 9500 storage)',
      software: '$1M (Watson Studio licenses, AI models, threat intelligence feeds)',
      services: '$500K (IBM Security Consulting: implementation, tuning, training)',
      support: '$400K/year (24x7 SOC support, threat intelligence updates, model updates)',
      total: '$4M initial investment + $400K/year ongoing',
      financing: 'IBM Global Financing available - flexible payment terms',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$4.9M annually ($3M ransomware prevention, $1M fraud reduction, $600K overtime reduction, $300K insurance savings)',
      revenueImpact: 'Avoid revenue loss from security incidents and reputation damage',
      productivityGains: '$600K annually (security team efficiency, reduced investigation time)',
      riskReduction: 'Prevent ransomware attacks, reduce account takeover fraud, meet regulatory requirements, lower cyber insurance premiums, protect customer trust',
      roi: '10 months payback, 225% three-year ROI',
      paybackPeriod: '10 months',
      tco: '3-year TCO: $5.2M investment vs. $14.7M in benefits = $9.5M net benefit'
    },
    competitivePositioning: 'IBM Watson Studio is the leading AI-powered cybersecurity platform with proven success in financial services. Unlike point solutions, IBM provides integrated platform with threat detection, behavioral analytics, incident response, and threat intelligence. Power infrastructure provides hardware-based security that x86 cannot match. IBM has deep financial services expertise and compliance knowledge with 100+ financial institutions globally.',
    nextSteps: [
      'Schedule executive workshop to demonstrate Watson Studio threat detection capabilities',
      'Provide detailed ROI analysis with ransomware prevention and fraud reduction modeling',
      'Arrange reference call with similar regional bank ($2B assets)',
      'Conduct security assessment to evaluate current posture and gaps',
      'Develop phased implementation plan with quick win milestones',
      'Present business case to Board with CISO, CIO, CRO, and CFO',
      'Conduct proof of concept in monitor-only mode (30 days)'
    ],
    requiredElements: [
      'Must include Watson Studio for AI-powered threat detection',
      'Must include behavioral analytics and insider threat detection',
      'Must include automated incident response capabilities',
      'Must include threat intelligence integration',
      'Must include phased implementation with monitor-only mode',
      'Must address false positive reduction (80-90%)',
      'Must include IBM Security Consulting services for implementation'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      weight: 0.4,
      criteria: [
        'Identified business drivers: ransomware attack, increasing threats, overwhelmed security team',
        'Quantified business impact: $7.3M in annual costs (ransomware, fraud, overtime, premiums)',
        'Assessed current security posture: legacy tools, 95% false positives, manual response',
        'Understood threat detection requirements: AI-powered, behavioral analytics, automated response',
        'Identified incident response gaps: 3-4 weeks MTTD, 2-3 days MTTR, no automation',
        'Assessed regulatory requirements: FFIEC, GLBA, NCUA, audit findings',
        'Understood timeline and urgency: board demanding action, audit in 6 months',
        'Qualified budget and identified decision makers: $3-5M allocated, CISO champion'
      ]
    },
    objectionHandling: {
      maxPoints: 30,
      weight: 0.3,
      criteria: [
        'Addressed false positive concerns with AI capabilities and 80-90% reduction metrics',
        'Demonstrated zero downtime deployment with monitor-only mode and phased approach',
        'Positioned AI as reducing security team workload, not increasing it',
        'Built compelling business case with 10-month payback and $4.9M annual benefits',
        'Addressed legitimate transaction protection with safeguards and 99.9%+ accuracy',
        'Differentiated from competitive vendors with banking expertise and integrated platform'
      ]
    },
    recommendation: {
      maxPoints: 20,
      weight: 0.2,
      criteria: [
        'Recommended Watson Studio as comprehensive AI-powered threat detection platform',
        'Included Power E1080 for hardware-based security and encryption',
        'Included FlashSystem 9500 for cyber-resilient storage and ransomware protection',
        'Designed phased implementation with monitor-only mode and zero downtime',
        'Provided integration plan with existing security tools (SIEM, firewall)',
        'Addressed regulatory requirements and audit findings'
      ]
    },
    businessValue: {
      maxPoints: 10,
      weight: 0.1,
      criteria: [
        'Quantified benefits: $4.9M annually from ransomware prevention, fraud reduction, efficiency',
        'Calculated ROI: 10-month payback, 225% three-year ROI',
        'Identified cost savings: $4.9M annually',
        'Projected risk reduction: prevent ransomware, reduce fraud, meet compliance',
        'Defined success metrics: false positive reduction, MTTD/MTTR improvement, threat detection rate'
      ]
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'AI-Powered Threat Detection',
      description: 'Understanding how machine learning and behavioral analytics detect sophisticated cyber threats in real-time while reducing false positives by 80-90%',
      skillLevel: 'advanced'
    },
    {
      concept: 'Automated Incident Response',
      description: 'Implementing automated playbooks and orchestration to contain threats quickly without human intervention, reducing MTTR from days to minutes',
      skillLevel: 'advanced'
    },
    {
      concept: 'Behavioral Analytics and Insider Threat Detection',
      description: 'Using AI to establish baselines for normal user and system behavior, then detecting anomalies that indicate insider threats or compromised credentials',
      skillLevel: 'advanced'
    },
    {
      concept: 'Cyber Resilience and Ransomware Protection',
      description: 'Implementing immutable snapshots, air-gapped copies, and rapid recovery capabilities to protect against ransomware and enable fast recovery',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Business Case Development for Cybersecurity',
      description: 'Quantifying benefits from ransomware prevention, fraud reduction, and operational efficiency with specific ROI calculations',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Zero Downtime Security Deployment',
      description: 'Implementing security improvements without disrupting banking operations using monitor-only mode, phased approach, and parallel operation',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['banking', 'cybersecurity', 'threat-detection', 'ai', 'ransomware', 'fraud-prevention', 'incident-response'],
    skills: ['Cybersecurity', 'AI/ML', 'Threat detection', 'Incident response', 'Behavioral analytics', 'Risk management', 'Compliance'],
    products: ['watson-studio', 'power-e1080', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 35,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Cybersecurity is top priority for banks after recent high-profile attacks',
    'Lead with recent ransomware attack and quantified business impact ($7.3M annually)',
    'Address false positive concerns early - this is a major pain point',
    'Emphasize zero downtime deployment - banks cannot afford disruption',
    'Position AI as reducing security team workload, not increasing it',
    'Build compelling business case with 10-month payback and $4.9M annual benefits',
    'Differentiate from point solutions with integrated platform approach',
    'Highlight IBM financial services expertise and compliance knowledge',
    'CISO is champion - focus on threat detection and incident response capabilities',
    'CFO is neutral - lead with quantified ROI and cost reduction',
    'CRO is concerned about regulatory compliance - address audit findings',
    'CIO worried about implementation disruption - emphasize zero downtime approach'
  ]
};

export const bankingScenario010: TrainingScenario = {
  id: 'banking-cloud-migration-010',
  title: 'Regional Bank Needs Cloud Migration for Banking Applications',
  description: 'A regional bank with $5B in assets needs to migrate aging on-premises banking applications to a hybrid cloud environment while maintaining security, compliance, and performance requirements.',

  customerProfile: {
    company: 'First Community Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$5B in assets',
    employees: 1800,
    location: 'Western USA',
    currentInfrastructure: {
      servers: '45 x86 servers running core banking, loan origination, and customer portal',
      storage: 'Dell EMC Unity (6 years old, 80% capacity)',
      applications: ['Core banking (Jack Henry Silverlake)', 'Loan origination system', 'Customer portal', 'Mobile banking', 'Credit card processing'],
      operatingSystem: 'Windows Server 2016, Red Hat Enterprise Linux 7',
      virtualization: 'VMware vSphere 6.5',
      age: '6 years',
      endOfLife: '12 months',
      issues: [
        'Aging infrastructure approaching end-of-life',
        'Data center lease expiring in 18 months ($2M annual cost)',
        'Cannot scale quickly for seasonal demand (tax season, holidays)',
        'Disaster recovery site costs $800K annually',
        'Manual provisioning takes 2-3 weeks',
        'Limited ability to innovate with legacy infrastructure'
      ]
    },
    keyStakeholders: [
      {
        name: 'Michael Rodriguez',
        role: 'CIO',
        priorities: ['Cloud strategy', 'Cost optimization', 'Business agility'],
        concerns: ['Security and compliance', 'Migration risk', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Kim',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Predictable spending'],
        concerns: ['Cloud costs spiraling', 'Hidden fees', 'Long-term commitment'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'David Thompson',
        role: 'Chief Risk Officer',
        priorities: ['Data security', 'Regulatory compliance', 'Business continuity'],
        concerns: ['Data sovereignty', 'Third-party risk', 'Audit requirements'],
        influence: 'high',
        supportLevel: 'skeptic'
      },
      {
        name: 'Sarah Martinez',
        role: 'VP of IT Operations',
        priorities: ['Operational efficiency', 'Team skills', 'Reliability'],
        concerns: ['Team lacks cloud skills', 'Complexity', 'Support model'],
        influence: 'medium',
        supportLevel: 'supporter'
      }
    ],
    budget: '$4M-$6M initial + ongoing operational costs',
    timeline: '12-18 months',
    decisionProcess: 'Board approval required for cloud strategy, CIO and CFO must align on business case'
  },

  businessContext: {
    challenges: [
      'Data center lease expiring in 18 months - $2M annual cost',
      'Infrastructure end-of-life in 12 months - $5M refresh cost',
      'Cannot scale for seasonal demand - lose $1M in loan origination revenue during peak periods',
      'DR site costs $800K annually with 4-hour RTO',
      'Manual provisioning takes 2-3 weeks - slows innovation',
      'Limited disaster recovery capabilities',
      'Competing banks moving to cloud gaining competitive advantage'
    ],
    businessImpact: [
      '$2M annual data center costs',
      '$5M infrastructure refresh needed',
      '$1M lost revenue from inability to scale',
      '$800K annual DR costs',
      '$500K annual maintenance on aging hardware',
      'Slow time-to-market for new digital banking features',
      'Risk of extended outage with aging infrastructure'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Digital transformation - launch new mobile banking features',
      'Cost optimization - reduce IT infrastructure costs by 30%',
      'Business agility - reduce time-to-market from months to weeks',
      'Improve disaster recovery - achieve 1-hour RTO',
      'Enable innovation - adopt AI/ML for fraud detection and personalization'
    ],
    competitivePressure: 'Competing banks have migrated to cloud and are launching new digital features faster',
    regulatoryRequirements: ['FFIEC cloud computing guidance', 'GLBA data protection', 'State banking regulations', 'SOC 2 compliance'],
    recentEvents: [
      'Board approved cloud-first strategy 6 months ago',
      'Data center lease expires in 18 months',
      'Competitor launched AI-powered mobile banking app',
      'Recent audit highlighted DR gaps'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your cloud migration initiative right now? Is it cost, agility, or something else?',
        purpose: 'Understand primary business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'Multiple drivers: data center lease expiring in 18 months ($2M annually), infrastructure end-of-life ($5M refresh), and board mandate for cloud-first strategy. We need to reduce costs while improving agility to compete with digital-first banks.',
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify costs and timeline', 'Understand strategic context']
      },
      {
        question: 'Which applications are you planning to migrate to cloud? What are your priorities?',
        purpose: 'Understand application portfolio and migration priorities',
        category: 'technical',
        idealResponse: 'Core banking (Jack Henry Silverlake) is priority #1 - most critical but also most complex. Customer portal and mobile banking are #2 - easier to migrate and high business value. Loan origination is #3. We want to start with lower-risk applications to build confidence.',
        scoringWeight: 12,
        hints: ['Identify application portfolio', 'Understand migration priorities', 'Assess complexity and risk']
      },
      {
        question: 'What are your security and compliance requirements for cloud? How do you handle data sovereignty?',
        purpose: 'Identify security, compliance, and regulatory constraints',
        category: 'technical',
        idealResponse: 'We must comply with FFIEC cloud guidance, GLBA, and state banking regulations. Data must stay in US. We need SOC 2 compliance, encryption at rest and in transit, and ability to pass bank audits. Chief Risk Officer is very concerned about third-party risk.',
        scoringWeight: 15,
        hints: ['Identify regulatory requirements', 'Understand data sovereignty needs', 'Address stakeholder concerns']
      },
      {
        question: 'What is your current disaster recovery situation? What are your RTO and RPO requirements?',
        purpose: 'Understand DR requirements and current gaps',
        category: 'technical',
        idealResponse: 'Current DR site costs $800K annually with 4-hour RTO and 1-hour RPO. Recent audit highlighted gaps. We need 1-hour RTO and 15-minute RPO for core banking. Board is concerned about business continuity after seeing other banks hit by ransomware.',
        scoringWeight: 10,
        hints: ['Quantify current DR costs', 'Identify RTO/RPO requirements', 'Understand audit findings']
      },
      {
        question: 'How do you plan to handle the migration? Big bang or phased approach?',
        purpose: 'Understand migration strategy and risk tolerance',
        category: 'business',
        idealResponse: 'Phased approach - we cannot afford downtime. Start with dev/test environments, then non-critical apps, then core banking. Need parallel run capability. Timeline is 12-18 months with data center lease expiring in 18 months.',
        scoringWeight: 10,
        hints: ['Understand risk tolerance', 'Identify migration timeline', 'Assess parallel run needs']
      },
      {
        question: 'What is your team\'s cloud experience? Do you need training or managed services?',
        purpose: 'Assess team capabilities and support needs',
        category: 'stakeholder',
        idealResponse: 'Limited cloud experience - mostly on-premises. VP of IT Operations is concerned about team skills. We will need training and potentially managed services during migration. Long-term we want to build internal cloud capabilities.',
        scoringWeight: 8,
        hints: ['Assess team skills', 'Identify training needs', 'Understand support model preferences']
      },
      {
        question: 'What is your budget for cloud migration and ongoing operational costs?',
        purpose: 'Understand budget constraints and TCO expectations',
        category: 'budget',
        idealResponse: 'Board approved $4-6M for migration. CFO wants to see 30% reduction in total IT infrastructure costs within 3 years. Currently spending $2M data center + $800K DR + $500K maintenance = $3.3M annually. Need predictable monthly costs.',
        scoringWeight: 15,
        hints: ['Quantify migration budget', 'Understand TCO expectations', 'Identify cost reduction targets']
      },
      {
        question: 'Who are the key stakeholders and decision makers? What are their concerns?',
        purpose: 'Map stakeholder landscape and address concerns',
        category: 'stakeholder',
        idealResponse: 'CIO is champion - driving cloud strategy. CFO is neutral - concerned about costs. Chief Risk Officer is skeptic - worried about security and compliance. VP of IT Ops is supporter but concerned about team skills. Board approval required.',
        scoringWeight: 15,
        hints: ['Map stakeholder influence', 'Identify concerns by role', 'Understand decision process']
      }
    ],
    expectedFindings: [
      'Data center lease expiring creating urgency',
      'Multiple cost drivers: $2M data center + $5M refresh + $800K DR',
      'Board mandate for cloud-first strategy',
      'Security and compliance are top concerns',
      'Team lacks cloud skills',
      'Phased migration approach preferred',
      'Need 30% cost reduction to justify migration'
    ],
    redFlags: [
      'Unrealistic timeline expectations',
      'Insufficient budget for migration',
      'Lack of executive alignment',
      'No clear migration strategy',
      'Underestimating compliance complexity'
    ],
    opportunities: [
      'Eliminate $2M annual data center costs',
      'Avoid $5M infrastructure refresh',
      'Reduce DR costs from $800K to $200K',
      'Enable faster innovation and time-to-market',
      'Improve disaster recovery capabilities'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'We are concerned about cloud costs spiraling out of control. How do we avoid bill shock?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Valid concern - cloud cost management is critical. IBM Power Virtual Server provides predictable, consumption-based pricing with no hidden fees. We recommend: (1) Right-sizing workloads before migration to avoid over-provisioning, (2) Reserved instances for steady-state workloads (30-40% savings), (3) IBM Cloud cost management tools with budgets and alerts, (4) Monthly cost reviews and optimization. Typical customers see 30-40% total cost reduction vs on-premises when properly managed. We can model your specific costs based on current infrastructure.',
        scoringCriteria: [
          'Acknowledged cost management concerns',
          'Explained predictable pricing model',
          'Provided specific cost optimization strategies',
          'Quantified savings (30-40% reduction)',
          'Offered to model customer-specific costs'
        ],
        hints: [
          'Address cost management proactively',
          'Explain pricing transparency',
          'Provide cost optimization best practices',
          'Quantify expected savings'
        ]
      },
      {
        objection: 'How do we ensure our data stays secure and compliant in the cloud? We have strict regulatory requirements.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Security and compliance are IBM\'s top priorities for financial services. IBM Power Virtual Server provides: (1) Dedicated infrastructure - not multi-tenant, (2) Data encryption at rest and in transit, (3) SOC 2, PCI-DSS, and ISO 27001 certifications, (4) US data centers with data sovereignty, (5) FFIEC-compliant architecture, (6) Immutable backups with FlashSystem Cyber Vault for ransomware protection. IBM has 50+ years serving financial services and understands banking regulations. We can provide compliance documentation for your auditors and support your audit process.',
        scoringCriteria: [
          'Addressed security and compliance comprehensively',
          'Highlighted dedicated infrastructure (not multi-tenant)',
          'Listed relevant certifications (SOC 2, PCI-DSS, ISO 27001)',
          'Emphasized data sovereignty and US data centers',
          'Mentioned IBM financial services expertise',
          'Offered audit support'
        ],
        hints: [
          'Lead with dedicated infrastructure',
          'List relevant compliance certifications',
          'Emphasize data sovereignty',
          'Highlight IBM financial services experience'
        ]
      },
      {
        objection: 'Our team does not have cloud skills. How do we manage this without hiring a whole new team?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Great question - skills transition is critical for success. IBM provides comprehensive support: (1) IBM Power Virtual Server uses familiar Linux/AIX - your team already knows these, (2) IBM Cloud training and certification programs (free for customers), (3) IBM Expert Labs can provide migration services and knowledge transfer, (4) Managed services option during transition period, (5) 24/7 IBM support, (6) Gradual skills building through phased migration. Most customers find their existing Linux admins can manage Power Virtual Server with 2-3 weeks training. We can create a skills development plan for your team.',
        scoringCriteria: [
          'Acknowledged skills concern',
          'Emphasized familiar technologies (Linux/AIX)',
          'Outlined training and certification programs',
          'Mentioned migration services and knowledge transfer',
          'Provided managed services option',
          'Quantified training timeline (2-3 weeks)'
        ],
        hints: [
          'Emphasize familiar technologies',
          'Outline training programs',
          'Offer migration services',
          'Provide managed services option'
        ]
      },
      {
        objection: 'What if the migration fails or causes downtime? We cannot afford to be offline.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Zero downtime is achievable with proper planning. IBM\'s proven migration approach: (1) Phased migration starting with dev/test (no business impact), (2) Parallel run capability - keep on-premises running during migration, (3) Automated migration tools reduce errors, (4) Cutover during maintenance windows, (5) Immediate rollback capability if issues arise, (6) IBM Expert Labs has migrated 500+ banking workloads with 99.8% success rate. We recommend 12-18 month timeline with core banking last after proving approach with simpler apps. Can provide detailed migration plan with risk mitigation.',
        scoringCriteria: [
          'Addressed downtime concerns directly',
          'Explained phased migration approach',
          'Highlighted parallel run capability',
          'Mentioned automated tools and rollback',
          'Provided success rate statistics (99.8%)',
          'Offered detailed migration plan'
        ],
        hints: [
          'Lead with phased approach',
          'Emphasize parallel run capability',
          'Provide success rate statistics',
          'Offer detailed migration planning'
        ]
      },
      {
        objection: 'How do we avoid vendor lock-in? What if we want to move to another cloud provider later?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'strategy',
        customResponse: 'Avoiding lock-in is smart strategy. IBM Power Virtual Server provides flexibility: (1) Open standards - Linux, AIX, standard APIs, (2) Portable workloads - can run on-premises or other clouds, (3) No proprietary database or middleware required, (4) Standard networking and security, (5) Hybrid cloud architecture - keep some workloads on-premises, (6) Multi-cloud management tools. However, for banking workloads, stability and compliance are more important than portability. IBM has 50+ year track record serving financial services. Most banks choose IBM for long-term partnership, not just technology. We can architect for portability while optimizing for your specific needs.',
        scoringCriteria: [
          'Acknowledged vendor lock-in concern',
          'Explained open standards approach',
          'Highlighted workload portability',
          'Mentioned hybrid cloud flexibility',
          'Balanced portability with stability needs',
          'Emphasized IBM long-term partnership'
        ],
        hints: [
          'Acknowledge concern',
          'Explain open standards',
          'Highlight portability',
          'Balance with stability needs'
        ]
      }
    ],
    minimumObjectionsToHandle: 4
  },

  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['flashsystem-9500', 'watson-studio'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'Primary compute platform for core banking workloads in IBM Power Virtual Server cloud environment',
          configuration: '8-core Power10 instances for core banking, 4-core instances for loan origination, 2-core instances for customer portal',
          priority: 'primary'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance cloud storage with cyber resilience and immutable backups',
          configuration: '200TB usable capacity with FlashCore Modules, Cyber Vault for ransomware protection, replication to secondary site',
          priority: 'supporting'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI/ML platform for fraud detection and customer personalization (future innovation)',
          configuration: 'Cloud-native deployment for fraud detection models and customer analytics',
          priority: 'optional'
        }
      ],
      architecture: 'Hybrid cloud architecture with IBM Power Virtual Server for core banking, FlashSystem for storage, and Watson Studio for AI/ML. Phased migration starting with dev/test, then customer portal, then loan origination, finally core banking.',
      sizing: '8-core Power10 for core banking (500 TPS), 4-core for loan origination (200 TPS), 2-core for customer portal (1000 concurrent users)',
      deployment: 'IBM Power Virtual Server in US data centers with FlashSystem replication to secondary site for DR'
    },
    pricing: {
      hardware: '$2M Power Virtual Server reserved instances (3-year)',
      software: '$800K Jack Henry Silverlake cloud licensing',
      services: '$1.2M IBM Expert Labs migration services',
      support: '$400K annual IBM support and managed services',
      total: '$4M initial investment + $1.2M annual operational costs'
    },
    businessCase: {
      costSavings: '$2.1M annually (eliminate $2M data center + $800K DR - $1.2M cloud operational costs + avoid $5M infrastructure refresh)',
      revenueImpact: '$1M annually (capture seasonal loan origination revenue through elastic scaling)',
      productivityGains: '$500K annually (reduce provisioning time from weeks to hours, enable faster innovation)',
      riskReduction: 'Eliminate single point of failure, achieve 1-hour RTO vs 4-hour, immutable backups protect against ransomware',
      roi: '18 months payback, 185% three-year ROI',
      paybackPeriod: '18 months',
      tco: '$7.6M over 3 years vs $14.9M on-premises (49% reduction)'
    },
    competitivePositioning: 'IBM Power Virtual Server provides dedicated infrastructure (not multi-tenant like AWS/Azure), superior performance for core banking workloads, and deep financial services compliance expertise. IBM has 50+ years serving banks vs cloud providers focused on consumer workloads.',
    nextSteps: [
      'Schedule technical deep-dive with IBM Power Virtual Server architects',
      'Conduct application assessment and migration planning workshop',
      'Develop detailed migration roadmap and timeline',
      'Create skills development plan for IT team',
      'Prepare business case presentation for board approval',
      'Pilot migration with dev/test environment'
    ],
    requiredElements: [
      'Hybrid cloud architecture with Power Virtual Server',
      'Phased migration approach starting with lower-risk applications',
      'Comprehensive security and compliance documentation',
      'Detailed cost model showing 30%+ TCO reduction',
      'Skills development and training plan',
      'Migration services and support model'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Identified multiple business drivers (cost, agility, strategy)',
        'Quantified current costs ($2M data center + $800K DR + $500K maintenance)',
        'Understood application portfolio and migration priorities',
        'Assessed security and compliance requirements',
        'Mapped stakeholder landscape and concerns',
        'Identified budget and timeline constraints',
        'Understood team skills and support needs'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed cost management concerns with specific strategies',
        'Provided comprehensive security and compliance response',
        'Outlined skills development and training approach',
        'Explained migration risk mitigation and zero-downtime approach',
        'Balanced vendor lock-in concerns with stability needs'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power Virtual Server for core banking workloads',
        'Included FlashSystem for cyber-resilient storage',
        'Proposed phased migration approach',
        'Provided detailed cost model with 30%+ TCO reduction',
        'Addressed security, compliance, and skills concerns',
        'Created clear next steps and migration roadmap'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($2.1M annually)',
        'Calculated ROI (18 months payback, 185% three-year ROI)',
        'Identified revenue impact ($1M from elastic scaling)',
        'Highlighted risk reduction (ransomware protection, improved DR)',
        'Demonstrated competitive advantage (faster innovation)'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Cloud migration business drivers',
      description: 'Understand the multiple drivers for cloud migration: cost reduction, business agility, disaster recovery, and innovation enablement',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Hybrid cloud architecture for banking',
      description: 'Design hybrid cloud solutions that balance security, compliance, performance, and cost for regulated financial services workloads',
      skillLevel: 'advanced'
    },
    {
      concept: 'Migration risk mitigation',
      description: 'Develop phased migration strategies with parallel run capability, rollback plans, and zero-downtime approaches',
      skillLevel: 'advanced'
    },
    {
      concept: 'Cloud cost management',
      description: 'Address cloud cost concerns with right-sizing, reserved instances, cost monitoring, and TCO modeling',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Financial services compliance in cloud',
      description: 'Navigate FFIEC, GLBA, and banking regulations for cloud deployments with proper security controls and audit support',
      skillLevel: 'advanced'
    },
    {
      concept: 'Skills transition and change management',
      description: 'Plan for team skills development, training programs, and managed services during cloud transition',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Cloud migration', 'Hybrid cloud', 'Cost optimization', 'Disaster recovery', 'Compliance', 'Skills development'],
    skills: ['Cloud strategy', 'Migration planning', 'Cost modeling', 'Risk mitigation', 'Compliance', 'Change management'],
    products: ['power-e1080', 'flashsystem-9500', 'watson-studio'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 40,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Cloud migration is strategic initiative - lead with business drivers, not just technology',
    'Quantify current costs early: $2M data center + $800K DR + $500K maintenance = $3.3M annually',
    'Address security and compliance concerns proactively - this is #1 concern for banks',
    'Emphasize phased migration approach - banks cannot afford downtime',
    'Position IBM Power Virtual Server as dedicated infrastructure, not multi-tenant',
    'Build compelling TCO case: 49% reduction over 3 years',
    'Address skills concerns with training programs and managed services',
    'CIO is champion - focus on strategic benefits and competitive advantage',
    'CFO is neutral - lead with quantified cost savings and predictable pricing',
    'Chief Risk Officer is skeptic - address security, compliance, and audit requirements',
    'VP of IT Ops is concerned about skills - emphasize familiar technologies and training',
    'Differentiate from AWS/Azure with dedicated infrastructure and financial services expertise'
  ]
};

export const bankingScenario011: TrainingScenario = {
  id: 'banking-api-platform-011',
  title: 'Regional Bank Needs API Banking Platform for Open Banking and Fintech Partnerships',
  description: 'A regional bank with $3B in assets needs to launch an API banking platform to comply with open banking regulations, enable fintech partnerships, and compete with digital-first banks.',

  customerProfile: {
    company: 'Community Trust Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$3B in assets',
    employees: 1200,
    location: 'Northeast USA',
    currentInfrastructure: {
      servers: '25 x86 servers running core banking and legacy systems',
      storage: 'NetApp FAS8200 (5 years old)',
      applications: ['Core banking (FIS Profile)', 'Online banking', 'Mobile app', 'Legacy mainframe systems'],
      operatingSystem: 'Red Hat Enterprise Linux 7, Windows Server 2019',
      virtualization: 'VMware vSphere 7.0',
      age: '5 years',
      endOfLife: '24 months',
      issues: [
        'No API infrastructure - all integrations are batch file transfers',
        'Cannot partner with fintechs - no way to expose banking services',
        'Losing customers to digital banks with better integrations (Plaid, Stripe)',
        'Manual processes for third-party integrations take 6-12 months',
        'No developer portal or API documentation',
        'Security concerns about exposing banking data via APIs'
      ]
    },
    keyStakeholders: [
      {
        name: 'Alex Thompson',
        role: 'CIO',
        priorities: ['Digital transformation', 'Fintech partnerships', 'API strategy'],
        concerns: ['Security', 'Complexity', 'Time to market'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Maria Garcia',
        role: 'Chief Digital Officer',
        priorities: ['Customer experience', 'Innovation', 'Competitive advantage'],
        concerns: ['Developer experience', 'Time to launch', 'Partner ecosystem'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Robert Chen',
        role: 'Chief Risk Officer',
        priorities: ['Data security', 'Regulatory compliance', 'Third-party risk'],
        concerns: ['API security', 'Data exposure', 'Fraud risk'],
        influence: 'high',
        supportLevel: 'skeptic'
      },
      {
        name: 'Jennifer Martinez',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost efficiency', 'ROI'],
        concerns: ['Investment cost', 'Monetization strategy', 'Ongoing costs'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$3M-$5M initial + ongoing operational costs',
    timeline: '9-12 months to launch',
    decisionProcess: 'Executive committee approval required, CIO and Chief Digital Officer driving initiative'
  },

  businessContext: {
    challenges: [
      'Losing $5M annually in customers to digital banks with better integrations',
      'Cannot partner with fintechs - no API infrastructure',
      'Manual third-party integrations take 6-12 months and cost $200K each',
      'Open banking regulations requiring API access within 18 months',
      'Competitors launching API platforms and fintech partnerships',
      'Developer talent leaving for banks with modern technology',
      'No way to monetize banking services through APIs'
    ],
    businessImpact: [
      '$5M annual revenue loss to digital banks',
      '$2M annually in manual integration costs (10 integrations × $200K)',
      '$1M potential regulatory fines if not compliant in 18 months',
      'Losing 15% of millennial/Gen Z customers annually',
      'Cannot launch new digital products without API infrastructure',
      'Missing fintech partnership revenue opportunities ($3M+ annually)'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Launch open banking API platform within 12 months',
      'Partner with 10+ fintechs in first year',
      'Reduce integration time from 6 months to 2 weeks',
      'Generate $5M annual revenue from API monetization',
      'Improve customer retention by 20% through better integrations',
      'Attract developer talent with modern API platform'
    ],
    competitivePressure: 'Competing banks have launched API platforms and are partnering with fintechs, gaining market share',
    regulatoryRequirements: ['Open banking regulations', 'PSD2 compliance (if applicable)', 'GLBA data protection', 'OAuth 2.0 security standards'],
    recentEvents: [
      'Lost major corporate customer to competitor with better API integrations',
      'Open banking regulations announced - 18 month compliance deadline',
      'Board approved digital transformation strategy',
      'Fintech partnership opportunities identified ($3M+ revenue potential)'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for an API banking platform right now? Is it regulatory, competitive, or strategic?',
        purpose: 'Understand primary business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'Multiple drivers: open banking regulations require API access in 18 months, we are losing $5M annually to digital banks with better integrations, and we have $3M+ in fintech partnership opportunities we cannot pursue without APIs. Board has made this a strategic priority.',
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue impact', 'Understand regulatory timeline']
      },
      {
        question: 'What banking services do you want to expose via APIs? Accounts, payments, loans, or something else?',
        purpose: 'Understand API scope and prioritization',
        category: 'technical',
        idealResponse: 'Phase 1: Account information (balances, transactions) and payment initiation - these are required for open banking compliance. Phase 2: Loan origination, credit cards, and wealth management. Phase 3: Advanced services like fraud detection and personalization. We want to start with regulatory requirements then expand.',
        scoringWeight: 12,
        hints: ['Identify phased approach', 'Prioritize regulatory requirements', 'Understand full scope']
      },
      {
        question: 'Who are your target API consumers? Fintechs, corporate customers, internal developers, or all of the above?',
        purpose: 'Understand API consumer landscape and use cases',
        category: 'business',
        idealResponse: 'Three audiences: (1) External fintechs for partnerships (Plaid, Stripe competitors), (2) Corporate customers for treasury management integrations, (3) Internal developers for mobile app and digital banking. Each has different needs - fintechs need comprehensive APIs, corporates need specific integrations, internal needs full access.',
        scoringWeight: 10,
        hints: ['Identify multiple consumer types', 'Understand different use cases', 'Assess volume expectations']
      },
      {
        question: 'What are your API security and compliance requirements? How do you handle authentication and authorization?',
        purpose: 'Identify security, compliance, and risk management needs',
        category: 'technical',
        idealResponse: 'Must comply with open banking security standards (OAuth 2.0, strong customer authentication). Chief Risk Officer is very concerned about data exposure and fraud. Need API gateway with rate limiting, threat detection, and audit logging. Must pass bank audits and regulatory reviews. Need to manage third-party risk for fintech partners.',
        scoringWeight: 15,
        hints: ['Identify security standards', 'Address stakeholder concerns', 'Understand audit requirements']
      },
      {
        question: 'Do you have a developer portal and API documentation strategy? How will developers discover and use your APIs?',
        purpose: 'Understand developer experience and onboarding needs',
        category: 'business',
        idealResponse: 'We have nothing today - no developer portal, no API docs, no sandbox environment. Chief Digital Officer wants world-class developer experience to attract fintech partners. Need self-service onboarding, interactive API documentation, sandbox for testing, and developer support. Want to launch developer portal with initial APIs.',
        scoringWeight: 10,
        hints: ['Assess current state', 'Identify developer experience needs', 'Understand onboarding requirements']
      },
      {
        question: 'How do you plan to monetize your APIs? Free for partners, transaction fees, or subscription model?',
        purpose: 'Understand business model and revenue expectations',
        category: 'business',
        idealResponse: 'Hybrid model: (1) Free tier for open banking compliance, (2) Premium APIs with transaction fees for fintechs (targeting $5M annual revenue), (3) Enterprise pricing for corporate customers. CFO wants clear monetization strategy and ROI. Need API analytics to track usage and revenue.',
        scoringWeight: 12,
        hints: ['Identify monetization strategy', 'Quantify revenue targets', 'Understand pricing models']
      },
      {
        question: 'What is your timeline for launching the API platform? Are there regulatory deadlines?',
        purpose: 'Understand timeline constraints and phasing',
        category: 'timeline',
        idealResponse: 'Open banking compliance deadline in 18 months. Want to launch Phase 1 (account info, payments) in 9-12 months to get ahead of deadline and start fintech partnerships. Phase 2 (loans, cards) in 18 months. Phase 3 (advanced services) in 24 months. Need quick wins to build momentum.',
        scoringWeight: 10,
        hints: ['Identify regulatory deadlines', 'Understand phased approach', 'Assess urgency']
      },
      {
        question: 'What is your budget for the API platform? How do you justify the investment?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: 'Board approved $3-5M for initial platform plus ongoing operational costs. Business case: avoid $1M regulatory fines, capture $5M revenue loss to digital banks, generate $5M from API monetization, reduce integration costs by $2M annually. CFO wants to see 24-month payback and clear path to profitability.',
        scoringWeight: 16,
        hints: ['Quantify budget', 'Understand business case drivers', 'Identify ROI expectations']
      }
    ],
    expectedFindings: [
      'Multiple drivers: regulatory compliance, competitive pressure, revenue opportunities',
      'Losing $5M+ annually to digital banks',
      '$3M+ fintech partnership opportunities',
      'Open banking deadline in 18 months',
      'No current API infrastructure',
      'Security and compliance are top concerns',
      'Need world-class developer experience',
      'Hybrid monetization model targeting $5M annual revenue'
    ],
    redFlags: [
      'Unrealistic timeline expectations',
      'Insufficient security focus',
      'No clear monetization strategy',
      'Lack of executive alignment',
      'Underestimating complexity'
    ],
    opportunities: [
      'Capture $5M revenue loss to digital banks',
      'Generate $5M from API monetization',
      'Reduce integration costs by $2M annually',
      'Avoid $1M regulatory fines',
      'Enable fintech partnerships',
      'Improve customer retention by 20%'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we ensure API security? We cannot afford a data breach or fraud through our APIs.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'API security is absolutely critical for banking. IBM provides comprehensive security: (1) API Gateway with OAuth 2.0, strong customer authentication, and token management, (2) Rate limiting and DDoS protection to prevent abuse, (3) Real-time threat detection with Watson AI to identify suspicious API calls, (4) End-to-end encryption and data masking, (5) Comprehensive audit logging for regulatory compliance, (6) Third-party risk management for fintech partners. IBM has secured APIs for 100+ banks with zero breaches. We follow OWASP API security standards and can pass any bank audit. FlashSystem provides immutable audit logs that cannot be tampered with.',
        scoringCriteria: [
          'Addressed security concerns comprehensively',
          'Explained OAuth 2.0 and strong customer authentication',
          'Highlighted real-time threat detection with AI',
          'Mentioned audit logging and compliance',
          'Provided track record (100+ banks, zero breaches)',
          'Referenced industry standards (OWASP)'
        ],
        hints: [
          'Lead with comprehensive security approach',
          'Explain OAuth 2.0 and authentication',
          'Highlight AI-powered threat detection',
          'Provide track record and statistics'
        ]
      },
      {
        objection: 'How long will it take to build and launch the API platform? We need to move fast.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'common',
        category: 'timing',
        customResponse: 'Speed to market is critical. IBM\'s proven approach delivers results fast: (1) Pre-built API templates for common banking services (accounts, payments, loans) - no need to build from scratch, (2) IBM API Connect provides complete API management platform out-of-the-box, (3) Developer portal and documentation tools included, (4) Typical timeline: 3 months for platform setup, 6 months for Phase 1 APIs (account info, payments), 9-12 months for full launch. We can have your first APIs in production in 6 months. IBM Expert Labs has launched 50+ banking API platforms with average 9-month time to market. We provide accelerators, templates, and best practices to avoid common pitfalls.',
        scoringCriteria: [
          'Addressed timeline concerns',
          'Explained pre-built templates and accelerators',
          'Provided specific timeline (6 months for first APIs)',
          'Mentioned IBM API Connect platform',
          'Highlighted track record (50+ platforms, 9-month average)',
          'Offered Expert Labs support'
        ],
        hints: [
          'Lead with pre-built templates',
          'Provide specific timeline',
          'Highlight accelerators',
          'Offer Expert Labs support'
        ]
      },
      {
        objection: 'How do we attract developers and fintech partners to use our APIs? We are not a tech company.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'difficult',
        category: 'strategy',
        customResponse: 'Great question - developer experience is key to API success. IBM provides complete developer ecosystem: (1) World-class developer portal with interactive API documentation (Swagger/OpenAPI), (2) Sandbox environment for testing without affecting production, (3) Self-service onboarding - developers can sign up and start testing in minutes, (4) SDKs and code samples in multiple languages (Python, Java, Node.js), (5) Developer support and community forums, (6) API analytics to track usage and performance. IBM has helped 100+ banks build thriving developer ecosystems. We can also help with go-to-market strategy, developer marketing, and fintech partnership programs. Many banks see 50+ fintech partners in first year with proper developer experience.',
        scoringCriteria: [
          'Addressed developer experience comprehensively',
          'Explained developer portal and documentation',
          'Highlighted sandbox environment',
          'Mentioned self-service onboarding',
          'Provided SDKs and code samples',
          'Offered go-to-market support',
          'Quantified success (50+ partners in first year)'
        ],
        hints: [
          'Lead with developer experience',
          'Explain developer portal features',
          'Highlight self-service onboarding',
          'Offer go-to-market support'
        ]
      },
      {
        objection: 'How do we monetize APIs and generate revenue? What is the business model?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'API monetization is critical for ROI. IBM API Connect provides flexible monetization: (1) Free tier for open banking compliance (required by regulation), (2) Transaction-based pricing for premium APIs (typical: $0.01-0.05 per API call), (3) Subscription plans for high-volume partners (monthly/annual fees), (4) Enterprise pricing for corporate customers, (5) Built-in usage tracking and billing integration. Typical banking API revenue model: Year 1: $2M (early adopters), Year 2: $5M (scale), Year 3: $10M+ (mature ecosystem). IBM provides API analytics to track usage, revenue, and ROI. We can help design pricing strategy based on your market and competitive landscape. Many banks achieve 18-24 month payback on API platform investment.',
        scoringCriteria: [
          'Addressed monetization comprehensively',
          'Explained multiple pricing models',
          'Provided revenue projections ($2M → $5M → $10M)',
          'Mentioned usage tracking and billing',
          'Offered pricing strategy support',
          'Quantified payback period (18-24 months)'
        ],
        hints: [
          'Explain multiple pricing models',
          'Provide revenue projections',
          'Highlight usage tracking',
          'Quantify payback period'
        ]
      },
      {
        objection: 'What if our core banking system cannot support APIs? Our systems are old and not designed for real-time access.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Legacy system integration is a common challenge - IBM has solved this for 100+ banks. Our approach: (1) API Gateway acts as abstraction layer - APIs do not directly access core banking, (2) Integration layer transforms API calls to formats your core banking understands (batch, file, or real-time), (3) Caching layer reduces load on core systems - frequently accessed data cached for performance, (4) Asynchronous processing for complex operations, (5) Gradual modernization - start with read-only APIs (account info) then add write operations (payments) as systems evolve. IBM Power E1080 provides high-performance integration layer that can handle 10,000+ API calls per second while protecting legacy systems. We have integrated with every major core banking platform (FIS, Jack Henry, Fiserv, Temenos). Can provide reference architectures for your specific core banking system.',
        scoringCriteria: [
          'Addressed legacy integration concerns',
          'Explained API Gateway abstraction layer',
          'Highlighted caching and performance optimization',
          'Mentioned gradual modernization approach',
          'Provided performance metrics (10,000+ TPS)',
          'Offered reference architectures'
        ],
        hints: [
          'Lead with abstraction layer concept',
          'Explain caching and performance',
          'Highlight gradual modernization',
          'Offer reference architectures'
        ]
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
          reason: 'High-performance API gateway and integration layer for banking APIs with enterprise-grade security and scalability',
          configuration: 'IBM API Connect on Power E1080 for API management, 8-core instances for API gateway (10,000+ TPS), 4-core instances for integration layer',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI-powered API analytics, threat detection, and developer insights',
          configuration: 'Real-time API threat detection, usage analytics, developer behavior analysis, fraud detection for API transactions',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for API logs, audit trails, and developer portal content with immutable audit logs',
          configuration: '50TB usable capacity with FlashCore Modules, immutable snapshots for audit compliance, replication for DR',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier architecture: (1) API Gateway layer (IBM API Connect on Power E1080) for security, rate limiting, and routing, (2) Integration layer for core banking connectivity and data transformation, (3) Developer portal for API documentation and sandbox. Watson Studio provides AI-powered threat detection and analytics. FlashSystem stores audit logs and developer portal content.',
      sizing: '8-core Power E1080 for API gateway (10,000+ API calls per second), 4-core for integration layer, 50TB FlashSystem for logs and content',
      deployment: 'Hybrid cloud deployment with on-premises API gateway for security and cloud-based developer portal for accessibility'
    },
    pricing: {
      hardware: '$1.5M Power E1080 and FlashSystem',
      software: '$1.2M IBM API Connect licenses (3-year)',
      services: '$800K IBM Expert Labs for platform setup and API development',
      support: '$300K annual IBM support and managed services',
      total: '$3.5M initial investment + $800K annual operational costs'
    },
    businessCase: {
      costSavings: '$3M annually (reduce integration costs from $2M to $200K, avoid $1M regulatory fines)',
      revenueImpact: '$10M annually by Year 3 (capture $5M revenue loss + $5M API monetization)',
      productivityGains: '$500K annually (reduce integration time from 6 months to 2 weeks)',
      riskReduction: 'Avoid regulatory fines, reduce fraud risk with AI-powered threat detection, improve third-party risk management',
      roi: '24 months payback, 220% three-year ROI',
      paybackPeriod: '24 months',
      tco: '$6.9M over 3 years vs $21M in lost revenue and costs (67% improvement)'
    },
    competitivePositioning: 'IBM API Connect is the leading API management platform for banking with 100+ financial institutions. Unlike generic API platforms (Apigee, MuleSoft), IBM provides banking-specific security, compliance, and integration capabilities. Power E1080 delivers 3x better performance than x86 for API workloads with superior security.',
    nextSteps: [
      'Schedule API platform architecture workshop with IBM API Connect experts',
      'Conduct core banking integration assessment',
      'Develop API roadmap and phasing strategy',
      'Create developer portal design and content plan',
      'Prepare business case presentation for executive committee',
      'Pilot Phase 1 APIs (account info, payments) in sandbox environment'
    ],
    requiredElements: [
      'IBM API Connect platform for API management',
      'Power E1080 for high-performance API gateway',
      'Watson Studio for AI-powered threat detection and analytics',
      'Developer portal with interactive documentation',
      'Sandbox environment for testing',
      'Comprehensive security (OAuth 2.0, rate limiting, threat detection)',
      'API monetization and usage tracking',
      'Core banking integration layer'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Identified multiple business drivers (regulatory, competitive, revenue)',
        'Quantified revenue impact ($5M loss + $5M opportunity)',
        'Understood API scope and phasing strategy',
        'Assessed security and compliance requirements',
        'Identified target API consumers (fintechs, corporates, internal)',
        'Understood developer experience needs',
        'Assessed monetization strategy and revenue targets',
        'Mapped timeline and regulatory deadlines'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed API security concerns comprehensively',
        'Explained timeline and speed to market',
        'Outlined developer experience and ecosystem strategy',
        'Provided monetization and revenue model',
        'Addressed legacy system integration challenges'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM API Connect on Power E1080',
        'Included Watson Studio for AI-powered analytics',
        'Proposed comprehensive API platform architecture',
        'Addressed security, compliance, and developer experience',
        'Provided clear phasing and timeline',
        'Created compelling business case with 24-month payback'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($3M annually)',
        'Calculated revenue impact ($10M by Year 3)',
        'Demonstrated ROI (24 months payback, 220% three-year ROI)',
        'Highlighted risk reduction (regulatory compliance, fraud prevention)',
        'Showed competitive advantage (fintech partnerships, customer retention)'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'API banking and open banking',
      description: 'Understand open banking regulations, API strategy, and how banks use APIs to enable fintech partnerships and digital innovation',
      skillLevel: 'advanced'
    },
    {
      concept: 'API security and compliance',
      description: 'Master API security best practices including OAuth 2.0, threat detection, rate limiting, and regulatory compliance for banking APIs',
      skillLevel: 'advanced'
    },
    {
      concept: 'Developer experience and ecosystem',
      description: 'Design world-class developer portals, API documentation, sandbox environments, and developer onboarding to attract fintech partners',
      skillLevel: 'intermediate'
    },
    {
      concept: 'API monetization strategies',
      description: 'Develop API pricing models, usage tracking, and revenue strategies for banking API platforms',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Legacy system integration',
      description: 'Architect API abstraction layers, caching strategies, and integration patterns to connect modern APIs with legacy core banking systems',
      skillLevel: 'advanced'
    },
    {
      concept: 'API platform business case',
      description: 'Build compelling business cases for API platforms including revenue projections, cost savings, and competitive positioning',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['API banking', 'Open banking', 'Fintech partnerships', 'Developer platform', 'API security', 'Digital transformation'],
    skills: ['API strategy', 'Developer experience', 'API security', 'Monetization', 'Legacy integration', 'Business case development'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'API banking is strategic transformation - lead with business drivers (regulatory, competitive, revenue)',
    'Quantify revenue opportunity early: $5M revenue loss + $5M API monetization = $10M annually',
    'Address security concerns proactively - this is #1 concern for Chief Risk Officer',
    'Emphasize developer experience - world-class developer portal is key to fintech partnerships',
    'Position IBM API Connect as banking-specific vs generic platforms (Apigee, MuleSoft)',
    'Highlight speed to market with pre-built templates and accelerators',
    'Build compelling monetization story: $2M Year 1 → $5M Year 2 → $10M+ Year 3',
    'Address legacy integration concerns with abstraction layer and caching',
    'CIO and Chief Digital Officer are champions - focus on speed and developer experience',
    'Chief Risk Officer is skeptic - lead with comprehensive security and compliance',
    'CFO is neutral - build strong business case with 24-month payback and clear revenue model',
    'Differentiate with AI-powered threat detection and analytics (Watson Studio)',
    'Emphasize IBM track record: 100+ banking API platforms, zero breaches'
  ]
};


export const bankingScenario012: TrainingScenario = {
  id: 'banking-trade-finance-012',
  title: 'Regional Bank Needs Trade Finance Digitization and Blockchain Platform',
  description: 'A regional bank with $4B in assets needs to digitize trade finance operations including letters of credit, bill of lading, and supply chain financing using blockchain technology to reduce fraud, speed up processing, and compete with digital trade platforms.',

  customerProfile: {
    company: 'International Commerce Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$4B in assets',
    employees: 1500,
    location: 'West Coast USA',
    currentInfrastructure: {
      servers: '30 x86 servers running trade finance systems',
      storage: 'Dell EMC Unity (6 years old)',
      applications: ['Trade finance system (legacy mainframe)', 'Letter of credit processing', 'Document management', 'SWIFT messaging'],
      operatingSystem: 'IBM z/OS (mainframe), Red Hat Enterprise Linux 7',
      virtualization: 'VMware vSphere 6.7',
      age: '8 years (mainframe), 6 years (x86)',
      endOfLife: '24 months',
      issues: [
        'Manual paper-based processes - letters of credit take 7-10 days',
        'Document fraud risk - $5M annual losses from fraudulent documents',
        'Cannot compete with digital trade platforms (Marco Polo, we.trade)',
        'SWIFT messaging delays - 2-3 days for international transactions',
        'No supply chain visibility - customers demand real-time tracking',
        'High operational costs - $200K per trade finance specialist (15 staff)',
        'Losing corporate customers to banks with digital trade platforms'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Kim',
        role: 'CIO',
        priorities: ['Digital transformation', 'Blockchain strategy', 'Competitive advantage'],
        concerns: ['Blockchain complexity', 'Integration with legacy systems', 'ROI'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Sarah Johnson',
        role: 'Head of Trade Finance',
        priorities: ['Process efficiency', 'Fraud reduction', 'Customer experience'],
        concerns: ['Staff impact', 'Learning curve', 'Regulatory compliance'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Michael Chen',
        role: 'Chief Risk Officer',
        priorities: ['Fraud prevention', 'Regulatory compliance', 'Data security'],
        concerns: ['Blockchain security', 'Smart contract risk', 'Audit trail'],
        influence: 'high',
        supportLevel: 'skeptic'
      },
      {
        name: 'Jennifer Martinez',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost reduction', 'ROI'],
        concerns: ['Investment cost', 'Ongoing operational costs', 'Time to value'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$4M-$6M initial + ongoing operational costs',
    timeline: '12-18 months to launch',
    decisionProcess: 'Board approval required for blockchain initiative, CIO and Head of Trade Finance driving'
  },

  businessContext: {
    challenges: [
      'Losing $10M annually in trade finance revenue to digital platforms',
      '$5M annual losses from document fraud',
      'Letter of credit processing takes 7-10 days vs 24 hours on digital platforms',
      '$3M annual operational costs (15 trade finance specialists × $200K)',
      'Cannot offer supply chain financing - missing $8M revenue opportunity',
      'Corporate customers demanding digital trade finance capabilities',
      'Competitors joining blockchain trade consortiums (Marco Polo, we.trade, Contour)'
    ],
    businessImpact: [
      '$10M annual revenue loss to digital platforms',
      '$5M annual fraud losses',
      '$3M annual operational costs',
      '$8M missed supply chain financing revenue',
      'Losing 20% of corporate trade finance customers annually',
      'Cannot compete for new business without digital capabilities',
      'Risk of being left behind as industry moves to blockchain'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Launch digital trade finance platform within 18 months',
      'Join blockchain trade consortium (Marco Polo or we.trade)',
      'Reduce letter of credit processing from 7 days to 24 hours',
      'Eliminate document fraud with blockchain verification',
      'Launch supply chain financing product ($8M revenue target)',
      'Reduce operational costs by 50% through automation'
    ],
    competitivePressure: 'Major banks have joined blockchain trade consortiums and are winning corporate customers with 24-hour letter of credit processing',
    regulatoryRequirements: ['UCC Article 5 (letters of credit)', 'ICC Uniform Customs and Practice (UCP 600)', 'AML/KYC compliance', 'Trade sanctions compliance'],
    recentEvents: [
      'Lost major corporate customer ($5M annual revenue) to competitor with digital trade platform',
      'Board approved digital transformation strategy including blockchain',
      'Three competitors joined Marco Polo blockchain consortium',
      'Corporate customers demanding 24-hour letter of credit processing'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for trade finance digitization right now? Is it competitive pressure, fraud, or operational efficiency?',
        purpose: 'Understand primary business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'Multiple drivers: we are losing $10M annually to digital platforms, suffering $5M in fraud losses, and our 7-10 day letter of credit processing cannot compete with 24-hour digital platforms. We lost a major corporate customer last quarter. Board has made this a strategic priority and wants us to join a blockchain consortium.',
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue and fraud losses', 'Understand competitive pressure']
      },
      {
        question: 'What trade finance products do you offer today? Letters of credit, bill of lading, supply chain financing, or others?',
        purpose: 'Understand product portfolio and digitization priorities',
        category: 'business',
        idealResponse: 'We offer letters of credit (80% of volume), documentary collections, and bank guarantees. We do NOT offer supply chain financing - that is an $8M revenue opportunity we are missing. Priority is digitizing letters of credit first, then expanding to supply chain financing. We process 500 letters of credit annually at $20K average value.',
        scoringWeight: 12,
        hints: ['Identify product portfolio', 'Understand volume and value', 'Prioritize digitization roadmap']
      },
      {
        question: 'What is your current letter of credit processing time and cost? How does it compare to digital platforms?',
        purpose: 'Quantify current state and competitive gap',
        category: 'pain-point',
        idealResponse: '7-10 days for letter of credit processing with 15 trade finance specialists at $200K each ($3M annually). Digital platforms process in 24 hours with 80% less staff. We are losing customers because we cannot compete on speed. Each day of delay costs customers money in supply chain financing.',
        scoringWeight: 15,
        hints: ['Quantify processing time', 'Calculate operational costs', 'Understand competitive gap']
      },
      {
        question: 'What is your document fraud situation? How much are you losing annually?',
        purpose: 'Identify fraud risk and blockchain value proposition',
        category: 'pain-point',
        idealResponse: '$5M annual losses from fraudulent bills of lading and forged documents. We have no way to verify document authenticity in real-time. Blockchain would provide immutable document verification and eliminate fraud. Chief Risk Officer is very concerned about fraud risk.',
        scoringWeight: 12,
        hints: ['Quantify fraud losses', 'Identify verification challenges', 'Address stakeholder concerns']
      },
      {
        question: 'Are you considering joining a blockchain trade consortium like Marco Polo, we.trade, or Contour?',
        purpose: 'Understand blockchain strategy and consortium participation',
        category: 'business',
        idealResponse: 'Yes, board wants us to join Marco Polo or we.trade to access their network of 50+ banks and 1000+ corporate customers. We cannot build our own blockchain network - need to join existing consortium for network effects. Need platform that integrates with consortium APIs and supports smart contracts.',
        scoringWeight: 10,
        hints: ['Identify consortium preferences', 'Understand network effects', 'Assess integration needs']
      },
      {
        question: 'What are your blockchain security and compliance concerns? How do you handle smart contract risk?',
        purpose: 'Identify security, compliance, and risk management needs',
        category: 'technical',
        idealResponse: 'Chief Risk Officer is concerned about blockchain security, smart contract bugs, and regulatory compliance. Need permissioned blockchain (not public), immutable audit trail for regulators, and smart contract testing/validation. Must comply with UCC Article 5, ICC UCP 600, and trade sanctions. Need ability to reverse transactions if required by regulators.',
        scoringWeight: 12,
        hints: ['Identify security concerns', 'Understand compliance requirements', 'Address smart contract risk']
      },
      {
        question: 'How will you integrate blockchain with your legacy mainframe trade finance system?',
        purpose: 'Understand integration challenges and technical constraints',
        category: 'technical',
        idealResponse: 'Legacy mainframe system is 8 years old and not designed for blockchain. Need integration layer that connects blockchain to mainframe without disrupting current operations. Want to run parallel systems during transition. Eventually migrate off mainframe but need 12-18 month transition period.',
        scoringWeight: 10,
        hints: ['Assess legacy integration needs', 'Understand transition strategy', 'Identify technical constraints']
      },
      {
        question: 'What is your budget and expected ROI for trade finance digitization?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: 'Board approved $4-6M for platform plus ongoing costs. Business case: capture $10M revenue loss, eliminate $5M fraud, reduce $3M operational costs by 50%, generate $8M from supply chain financing. CFO wants 24-month payback and clear path to profitability. Need to show ROI from fraud reduction and operational efficiency before revenue growth.',
        scoringWeight: 14,
        hints: ['Quantify budget', 'Understand ROI expectations', 'Identify business case drivers']
      }
    ],
    expectedFindings: [
      'Losing $10M+ annually to digital platforms',
      '$5M annual fraud losses',
      '7-10 day processing vs 24 hours on digital platforms',
      '$3M annual operational costs',
      'Board mandate to join blockchain consortium',
      'Need to integrate with legacy mainframe',
      'Security and compliance are top concerns',
      'Target 24-month payback with fraud reduction and cost savings'
    ],
    redFlags: [
      'Unrealistic blockchain expectations',
      'Insufficient security focus',
      'No clear consortium strategy',
      'Underestimating integration complexity',
      'Lack of executive alignment'
    ],
    opportunities: [
      'Capture $10M revenue loss',
      'Eliminate $5M fraud losses',
      'Reduce operational costs by $1.5M (50%)',
      'Generate $8M from supply chain financing',
      'Join blockchain consortium for network effects',
      'Improve customer retention by 20%'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'Blockchain is unproven technology. How do we know it will work for trade finance?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Blockchain for trade finance is proven with 50+ banks live on production networks. Marco Polo consortium has processed $1B+ in trade finance transactions. we.trade has 20+ banks and 1000+ corporate customers. IBM Blockchain Platform powers both consortiums with 99.99% uptime. Key benefits proven in production: (1) 80% reduction in processing time (7 days → 24 hours), (2) 95% reduction in document fraud through immutable verification, (3) 50% reduction in operational costs through automation, (4) Real-time supply chain visibility. IBM has deployed 500+ blockchain networks for enterprises with comprehensive security, audit trails, and regulatory compliance. We can provide reference customers and proof points.',
        scoringCriteria: [
          'Addressed blockchain maturity concerns',
          'Provided production statistics (50+ banks, $1B+ transactions)',
          'Quantified benefits (80% faster, 95% fraud reduction, 50% cost savings)',
          'Mentioned major consortiums (Marco Polo, we.trade)',
          'Highlighted IBM track record (500+ networks, 99.99% uptime)',
          'Offered reference customers'
        ],
        hints: [
          'Lead with production proof points',
          'Quantify benefits from live networks',
          'Mention major consortiums',
          'Provide IBM track record'
        ]
      },
      {
        objection: 'How do we ensure blockchain security and prevent smart contract bugs that could cost millions?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Smart contract security is critical - IBM provides comprehensive protection: (1) Permissioned blockchain - only authorized banks and corporates can participate (not public blockchain), (2) Smart contract testing and validation tools to catch bugs before deployment, (3) Formal verification of smart contracts using mathematical proofs, (4) Immutable audit trail - every transaction recorded and cannot be altered, (5) Multi-signature approvals for high-value transactions, (6) Ability to pause/upgrade smart contracts if issues found, (7) IBM Blockchain Platform includes security monitoring and threat detection. IBM has secured 500+ blockchain networks with zero security breaches. We follow NIST blockchain security standards and can pass any bank audit. FlashSystem provides immutable backup of blockchain data for disaster recovery.',
        scoringCriteria: [
          'Addressed smart contract security comprehensively',
          'Explained permissioned blockchain (not public)',
          'Highlighted testing and formal verification',
          'Mentioned immutable audit trail',
          'Provided track record (500+ networks, zero breaches)',
          'Referenced security standards (NIST)',
          'Offered disaster recovery with FlashSystem'
        ],
        hints: [
          'Lead with permissioned blockchain',
          'Explain smart contract testing',
          'Highlight immutable audit trail',
          'Provide security track record'
        ]
      },
      {
        objection: 'How long will it take to implement blockchain and integrate with our legacy mainframe system?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'timing',
        customResponse: 'Proven timeline with mainframe integration: (1) 3 months to join blockchain consortium and set up IBM Blockchain Platform, (2) 6 months to build integration layer connecting blockchain to mainframe, (3) 9 months for pilot with 10 corporate customers, (4) 12-18 months for full production launch. IBM Power E1080 provides high-performance integration layer that connects blockchain to mainframe without disrupting operations. We can run parallel systems during transition - blockchain for new transactions, mainframe for existing. IBM Expert Labs has integrated blockchain with every major trade finance system (including mainframes) with average 12-month timeline. We provide pre-built connectors and accelerators to speed implementation.',
        scoringCriteria: [
          'Provided specific timeline (12-18 months)',
          'Explained phased approach (consortium → integration → pilot → production)',
          'Addressed mainframe integration with Power E1080',
          'Mentioned parallel systems during transition',
          'Highlighted Expert Labs experience',
          'Offered pre-built connectors and accelerators'
        ],
        hints: [
          'Provide specific timeline',
          'Explain phased approach',
          'Address mainframe integration',
          'Offer accelerators'
        ]
      },
      {
        objection: 'What if the blockchain consortium fails or we want to switch to a different network?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'strategy',
        customResponse: 'Great question - consortium risk is real. IBM Blockchain Platform provides flexibility: (1) Multi-consortium support - can connect to Marco Polo, we.trade, and Contour simultaneously, (2) Open standards (Hyperledger Fabric) - not proprietary, can migrate between networks, (3) Portable smart contracts - can redeploy to different blockchain networks, (4) Hybrid approach - run private blockchain for bilateral trades while participating in consortiums for network trades. Most banks join multiple consortiums to maximize network effects. IBM Blockchain Platform is used by all major trade consortiums, so you have consistent technology regardless of consortium. We can architect for flexibility while optimizing for your primary consortium.',
        scoringCriteria: [
          'Addressed consortium risk',
          'Explained multi-consortium support',
          'Highlighted open standards (Hyperledger Fabric)',
          'Mentioned portable smart contracts',
          'Suggested hybrid approach',
          'Emphasized IBM platform consistency across consortiums'
        ],
        hints: [
          'Acknowledge consortium risk',
          'Explain multi-consortium support',
          'Highlight open standards',
          'Suggest hybrid approach'
        ]
      },
      {
        objection: 'How do we justify the investment? What is the ROI and payback period?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Compelling ROI from multiple sources: (1) Fraud elimination: $5M annually (currently losing to fraudulent documents), (2) Operational cost reduction: $1.5M annually (reduce 15 staff to 7-8 through automation), (3) Revenue capture: $10M annually (win back customers lost to digital platforms), (4) New revenue: $8M annually from supply chain financing (cannot offer today). Total annual benefit: $24.5M. Investment: $5M initial + $1M annual operational costs. Payback: 3 months from fraud elimination alone, 6 months including cost savings, 12 months including revenue. Three-year ROI: 380%. Most banks see payback in 6-12 months from fraud reduction and operational efficiency before counting revenue growth. We can model your specific ROI based on transaction volumes.',
        scoringCriteria: [
          'Quantified multiple ROI sources',
          'Provided specific numbers ($24.5M annual benefit)',
          'Calculated payback periods (3-12 months)',
          'Emphasized fraud elimination as quick win',
          'Mentioned three-year ROI (380%)',
          'Offered to model customer-specific ROI'
        ],
        hints: [
          'Quantify multiple benefit sources',
          'Calculate specific payback periods',
          'Lead with fraud elimination',
          'Provide three-year ROI'
        ]
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
          reason: 'High-performance blockchain platform and mainframe integration layer for trade finance with enterprise-grade security',
          configuration: 'IBM Blockchain Platform on Power E1080 for consortium connectivity, 8-core instances for blockchain nodes, 4-core instances for mainframe integration layer',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI-powered document verification, fraud detection, and smart contract validation',
          configuration: 'Document authenticity verification using AI, fraud pattern detection, smart contract testing and validation, supply chain analytics',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for blockchain ledger with immutable backups and disaster recovery',
          configuration: '100TB usable capacity with FlashCore Modules, immutable snapshots for blockchain backup, replication for DR',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier architecture: (1) Blockchain layer (IBM Blockchain Platform on Power E1080) for consortium connectivity and smart contracts, (2) Integration layer for mainframe connectivity and data transformation, (3) Application layer for trade finance portal and APIs. Watson Studio provides AI-powered document verification and fraud detection. FlashSystem stores blockchain ledger with immutable backups.',
      sizing: '8-core Power E1080 for blockchain nodes (1000+ TPS), 4-core for integration layer, 100TB FlashSystem for blockchain ledger and documents',
      deployment: 'Hybrid deployment with on-premises blockchain nodes for security and consortium connectivity to Marco Polo/we.trade networks'
    },
    pricing: {
      hardware: '$2M Power E1080 and FlashSystem',
      software: '$1.5M IBM Blockchain Platform licenses (3-year)',
      services: '$1.5M IBM Expert Labs for blockchain implementation and mainframe integration',
      support: '$500K annual IBM support and consortium fees',
      total: '$5M initial investment + $1M annual operational costs'
    },
    businessCase: {
      costSavings: '$6.5M annually (eliminate $5M fraud + reduce $3M operational costs by 50%)',
      revenueImpact: '$18M annually (capture $10M revenue loss + $8M supply chain financing)',
      productivityGains: '$1.5M annually (reduce processing time from 7 days to 24 hours, automate document verification)',
      riskReduction: 'Eliminate document fraud, improve regulatory compliance, reduce operational risk with immutable audit trail',
      roi: '6 months payback, 380% three-year ROI',
      paybackPeriod: '6 months',
      tco: '$8M over 3 years vs $34.5M in losses and costs (77% improvement)'
    },
    competitivePositioning: 'IBM Blockchain Platform powers Marco Polo and we.trade consortiums with 50+ banks and $1B+ in transactions. Unlike generic blockchain platforms, IBM provides trade finance-specific smart contracts, regulatory compliance, and mainframe integration. Power E1080 delivers 3x better performance than x86 for blockchain workloads.',
    nextSteps: [
      'Schedule blockchain architecture workshop with IBM trade finance experts',
      'Join Marco Polo or we.trade consortium (IBM can facilitate)',
      'Conduct mainframe integration assessment',
      'Develop smart contract library for letters of credit',
      'Prepare business case presentation for board approval',
      'Pilot blockchain with 10 corporate customers'
    ],
    requiredElements: [
      'IBM Blockchain Platform for consortium connectivity',
      'Power E1080 for high-performance blockchain and integration',
      'Watson Studio for AI-powered document verification',
      'Mainframe integration layer for legacy system connectivity',
      'Smart contract library for trade finance products',
      'Comprehensive security and compliance framework',
      'Immutable audit trail with FlashSystem backup'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Identified multiple business drivers (revenue loss, fraud, operational costs)',
        'Quantified current state ($10M revenue loss, $5M fraud, 7-10 day processing)',
        'Understood product portfolio and digitization priorities',
        'Assessed fraud situation and blockchain value proposition',
        'Identified consortium strategy (Marco Polo, we.trade)',
        'Understood security and compliance concerns',
        'Assessed mainframe integration challenges',
        'Mapped budget and ROI expectations'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed blockchain maturity with production proof points',
        'Provided comprehensive smart contract security response',
        'Explained timeline and mainframe integration approach',
        'Addressed consortium risk with multi-network strategy',
        'Built compelling ROI case with 6-month payback'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended IBM Blockchain Platform on Power E1080',
        'Included Watson Studio for AI-powered verification',
        'Proposed comprehensive blockchain architecture',
        'Addressed mainframe integration and security',
        'Provided clear consortium strategy',
        'Created compelling business case with 6-month payback'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($6.5M annually)',
        'Calculated revenue impact ($18M annually)',
        'Demonstrated ROI (6 months payback, 380% three-year ROI)',
        'Highlighted fraud elimination ($5M annually)',
        'Showed competitive advantage (24-hour processing vs 7 days)'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Blockchain for trade finance',
      description: 'Understand how blockchain technology transforms trade finance through immutable document verification, smart contracts, and consortium networks',
      skillLevel: 'advanced'
    },
    {
      concept: 'Trade finance digitization',
      description: 'Master the business case for digitizing letters of credit, bill of lading, and supply chain financing with quantified ROI',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Blockchain consortium strategy',
      description: 'Navigate blockchain consortium participation (Marco Polo, we.trade, Contour) and multi-network strategies',
      skillLevel: 'advanced'
    },
    {
      concept: 'Smart contract security',
      description: 'Address smart contract security concerns including testing, validation, formal verification, and audit trails',
      skillLevel: 'advanced'
    },
    {
      concept: 'Legacy system integration',
      description: 'Architect blockchain integration with legacy mainframe systems using high-performance integration layers',
      skillLevel: 'advanced'
    },
    {
      concept: 'Fraud prevention with blockchain',
      description: 'Quantify fraud reduction benefits and explain immutable document verification for trade finance',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Blockchain', 'Trade finance', 'Letters of credit', 'Supply chain financing', 'Fraud prevention', 'Smart contracts'],
    skills: ['Blockchain strategy', 'Trade finance', 'Smart contracts', 'Fraud prevention', 'Legacy integration', 'Consortium participation'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Trade finance blockchain is proven - lead with production statistics (50+ banks, $1B+ transactions)',
    'Quantify fraud losses early: $5M annually from fraudulent documents',
    'Emphasize speed advantage: 24 hours vs 7-10 days processing time',
    'Address security concerns proactively - permissioned blockchain, smart contract testing',
    'Position IBM Blockchain Platform as powering major consortiums (Marco Polo, we.trade)',
    'Build compelling ROI: 6-month payback from fraud elimination and cost savings',
    'Highlight mainframe integration capability with Power E1080',
    'CIO is champion - focus on digital transformation and competitive advantage',
    'Head of Trade Finance is supporter - emphasize process efficiency and customer experience',
    'Chief Risk Officer is skeptic - lead with security, compliance, and fraud prevention',
    'CFO is neutral - build strong business case with 6-month payback and 380% three-year ROI',
    'Differentiate with AI-powered document verification (Watson Studio)',
    'Emphasize consortium network effects - cannot build alone, must join existing network'
  ]
};


export const bankingAdditionalScenarios: TrainingScenario[] = [
  bankingScenario002,
  bankingScenario003,
  bankingScenario004,
  bankingScenario005,
  bankingScenario006,
  bankingScenario007,
  bankingScenario008,
  bankingScenario009,
  bankingScenario010,
  bankingScenario011,
  bankingScenario012
];

export const bankingScenario013: TrainingScenario = {
  id: 'banking-mortgage-automation-013',
  title: 'Regional Bank Needs Mortgage Origination Automation to Compete with Digital Lenders',
  description: 'A regional bank with $5B in assets needs to automate mortgage origination to compete with digital-first lenders like Rocket Mortgage and reduce processing time from 45 days to 10 days.',

  customerProfile: {
    company: 'Heritage Community Bank',
    industry: 'Banking',
    size: 'Large (1000-5000 employees)',
    revenue: '$5B in assets',
    employees: 1500,
    location: 'Southeast USA',
    currentInfrastructure: {
      servers: '30 x86 servers running mortgage systems and document management',
      storage: 'Dell EMC Unity (6 years old)',
      applications: ['Mortgage origination system (Ellie Mae Encompass)', 'Document management', 'Credit decisioning', 'Compliance systems'],
      operatingSystem: 'Windows Server 2016, Red Hat Enterprise Linux 7',
      virtualization: 'VMware vSphere 6.7',
      age: '6 years',
      endOfLife: '18 months',
      issues: [
        'Manual mortgage processing takes 45 days vs 10 days for digital lenders',
        'Losing $50M annually in mortgage volume to Rocket Mortgage and Better.com',
        'Paper-based document collection and verification',
        'Manual underwriting and credit decisioning',
        'No automated income/employment verification',
        'Customer satisfaction score 6.2/10 vs 8.5/10 for digital lenders',
        'Loan officers spend 70% of time on paperwork vs customer interaction'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Martinez',
        role: 'CIO',
        priorities: ['Digital transformation', 'Automation', 'Competitive advantage'],
        concerns: ['Implementation complexity', 'Integration with existing systems', 'Cost'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Sarah Johnson',
        role: 'Chief Digital Officer',
        priorities: ['Customer experience', 'Speed to market', 'Innovation'],
        concerns: ['User adoption', 'Customer satisfaction', 'Time to implement'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Chen',
        role: 'Chief Risk Officer',
        priorities: ['Compliance', 'Risk management', 'Audit trail'],
        concerns: ['Automated decisioning accuracy', 'Regulatory compliance', 'Fraud detection'],
        influence: 'high',
        supportLevel: 'skeptic'
      },
      {
        name: 'Jennifer Williams',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost reduction', 'ROI'],
        concerns: ['Investment cost', 'Payback period', 'Operational savings'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Robert Taylor',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'Integration', 'Support'],
        concerns: ['Technical complexity', 'Staff training', 'Ongoing maintenance'],
        influence: 'medium',
        supportLevel: 'neutral'
      }
    ],
    budget: '$4M-$6M initial + ongoing operational costs',
    timeline: '12-18 months to full implementation',
    decisionProcess: 'Executive committee approval required, CIO and Chief Digital Officer driving initiative, Chief Risk Officer must approve compliance approach'
  },

  businessContext: {
    challenges: [
      'Losing $50M annually in mortgage volume to digital lenders (Rocket Mortgage, Better.com)',
      'Manual processing takes 45 days vs 10 days for competitors',
      'Customer satisfaction 6.2/10 vs 8.5/10 for digital lenders',
      'Loan officers spend 70% time on paperwork vs 30% on customers',
      'Paper-based document collection causing delays and errors',
      'Manual underwriting creating bottlenecks and inconsistency',
      'No automated income/employment verification',
      'Compliance costs $2M annually due to manual processes'
    ],
    businessImpact: [
      '$50M annual mortgage volume loss to digital lenders',
      '$3M annually in operational inefficiency (manual processing)',
      '$2M annually in compliance costs',
      '$1M annually in customer acquisition costs (poor experience)',
      'Market share declining 5% annually',
      'Loan officer productivity 40% below industry average',
      'Customer abandonment rate 35% (industry average 20%)'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Reduce mortgage processing time from 45 days to 10 days',
      'Automate 80% of mortgage origination workflow',
      'Improve customer satisfaction from 6.2 to 8.5',
      'Capture $50M in lost mortgage volume',
      'Reduce operational costs by $3M annually',
      'Increase loan officer productivity by 50%'
    ],
    competitivePressure: 'Digital lenders like Rocket Mortgage and Better.com are capturing market share with 10-day mortgage approvals and superior customer experience',
    regulatoryRequirements: ['TRID compliance', 'Fair lending regulations', 'HMDA reporting', 'Anti-money laundering (AML)', 'Know Your Customer (KYC)'],
    recentEvents: [
      'Lost $15M mortgage deal to Rocket Mortgage due to slow processing',
      'Customer satisfaction survey showed 6.2/10 rating',
      'Board mandated digital transformation initiative',
      'Competitor launched 10-day mortgage approval program'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is driving your need for mortgage automation right now? Is it competitive pressure, customer demand, or operational efficiency?',
        purpose: 'Understand primary business drivers and urgency',
        category: 'pain-point',
        idealResponse: 'Multiple drivers: we are losing $50M annually to digital lenders like Rocket Mortgage who approve mortgages in 10 days vs our 45 days. Customer satisfaction is 6.2/10 vs 8.5/10 for digital lenders. Board has mandated we reduce processing time to 10 days within 18 months or risk losing more market share. This is strategic priority #1.',
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue impact', 'Understand competitive pressure']
      },
      {
        question: 'What is your current mortgage origination process? Where are the biggest bottlenecks and delays?',
        purpose: 'Understand current state and pain points',
        category: 'technical',
        idealResponse: 'Current process takes 45 days: (1) Application collection - 5 days (paper forms), (2) Document gathering - 15 days (manual collection of pay stubs, tax returns, bank statements), (3) Income/employment verification - 10 days (manual phone calls), (4) Credit decisioning - 10 days (manual underwriting), (5) Compliance review - 5 days. Biggest bottlenecks are document collection (15 days) and manual underwriting (10 days). Loan officers spend 70% of time on paperwork.',
        scoringWeight: 12,
        hints: ['Map current process', 'Identify bottlenecks', 'Quantify time spent']
      },
      {
        question: 'What is the business impact of your slow mortgage processing? How much volume are you losing?',
        purpose: 'Quantify business impact and opportunity',
        category: 'business',
        idealResponse: 'Losing $50M annually in mortgage volume to digital lenders. Customer abandonment rate is 35% vs industry average 20% - customers get frustrated and go to Rocket Mortgage. Market share declining 5% annually. Loan officer productivity 40% below industry average because they spend 70% of time on paperwork. Operational costs $3M higher than digital lenders due to manual processes.',
        scoringWeight: 15,
        hints: ['Quantify revenue loss', 'Identify customer impact', 'Assess productivity impact']
      },
      {
        question: 'What automation capabilities do you need? Document collection, income verification, credit decisioning, or all of the above?',
        purpose: 'Understand automation scope and priorities',
        category: 'technical',
        idealResponse: 'Need comprehensive automation: (1) Digital document collection - customers upload docs via mobile app, (2) Automated income/employment verification - integrate with payroll systems and IRS, (3) AI-powered credit decisioning - automate 80% of underwriting decisions, (4) Automated compliance checks - TRID, fair lending, AML/KYC, (5) E-signature and digital closing. Want to automate 80% of workflow and reduce processing time from 45 days to 10 days.',
        scoringWeight: 12,
        hints: ['Identify automation scope', 'Prioritize capabilities', 'Understand target state']
      },
      {
        question: 'What are your compliance and risk management requirements? How do you ensure automated decisions meet regulatory standards?',
        purpose: 'Identify compliance, risk, and audit needs',
        category: 'technical',
        idealResponse: 'Chief Risk Officer is very concerned about automated decisioning. Must comply with TRID, fair lending, HMDA reporting, AML/KYC. Need explainable AI - must be able to explain why loan was approved or denied. Need comprehensive audit trail for regulatory exams. Fraud detection is critical - automated systems must catch suspicious applications. Want to reduce compliance costs from $2M to $500K annually.',
        scoringWeight: 15,
        hints: ['Identify regulatory requirements', 'Address stakeholder concerns', 'Understand audit needs']
      },
      {
        question: 'How will you integrate mortgage automation with your existing systems? What systems need to connect?',
        purpose: 'Understand integration requirements and technical constraints',
        category: 'technical',
        idealResponse: 'Need to integrate with: (1) Ellie Mae Encompass (mortgage origination system), (2) Credit bureaus (Experian, Equifax, TransUnion), (3) Income verification services (The Work Number, IRS), (4) Document management system, (5) Core banking system, (6) Compliance systems. Current systems are 6 years old and not designed for real-time integration. Need API-based integration layer.',
        scoringWeight: 10,
        hints: ['Identify integration points', 'Assess technical constraints', 'Understand system landscape']
      },
      {
        question: 'What is your customer experience vision? How do you want customers to interact with your mortgage process?',
        purpose: 'Understand customer experience goals and expectations',
        category: 'business',
        idealResponse: 'Chief Digital Officer wants Rocket Mortgage-level experience: (1) Apply online or mobile in 15 minutes, (2) Upload documents via phone camera, (3) Get pre-approval in 24 hours, (4) Track application status in real-time, (5) E-sign all documents, (6) Close in 10 days. Want to improve customer satisfaction from 6.2 to 8.5. Need mobile-first experience - 60% of customers start on mobile.',
        scoringWeight: 10,
        hints: ['Identify customer experience goals', 'Understand digital expectations', 'Assess mobile requirements']
      },
      {
        question: 'What is your budget and timeline? What ROI do you expect from mortgage automation?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: 'Board approved $4-6M for mortgage automation. Timeline: 12-18 months to full implementation. Business case: capture $50M in lost mortgage volume, reduce operational costs by $3M annually, reduce compliance costs from $2M to $500K, improve customer satisfaction from 6.2 to 8.5. CFO wants to see 24-month payback and clear path to profitability. Need quick wins to build momentum.',
        scoringWeight: 11,
        hints: ['Quantify budget', 'Understand timeline', 'Identify ROI expectations']
      }
    ],
    expectedFindings: [
      'Losing $50M annually to digital lenders',
      'Processing time 45 days vs 10 days for competitors',
      'Customer satisfaction 6.2/10 vs 8.5/10 for digital lenders',
      'Manual processes costing $3M+ annually',
      'Loan officer productivity 40% below industry average',
      'Need comprehensive automation (documents, verification, decisioning)',
      'Compliance and risk management are top concerns',
      'Mobile-first customer experience required'
    ],
    redFlags: [
      'Unrealistic timeline expectations',
      'Insufficient compliance focus',
      'Underestimating integration complexity',
      'Lack of change management planning',
      'No clear customer experience vision'
    ],
    opportunities: [
      'Capture $50M in lost mortgage volume',
      'Reduce operational costs by $3M annually',
      'Reduce compliance costs from $2M to $500K',
      'Improve customer satisfaction from 6.2 to 8.5',
      'Increase loan officer productivity by 50%',
      'Gain competitive advantage with 10-day approvals'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we ensure automated credit decisions are accurate and compliant? We cannot afford fair lending violations.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Compliance and accuracy are absolutely critical for mortgage automation. IBM provides comprehensive solution: (1) Watson Studio AI with explainable decisioning - every loan decision includes detailed reasoning that auditors can review, (2) Fair lending algorithms trained on millions of compliant loans - no bias or discrimination, (3) Real-time compliance checks for TRID, fair lending, HMDA, AML/KYC, (4) Comprehensive audit trail stored on FlashSystem with immutable snapshots - cannot be tampered with, (5) Human oversight for edge cases - 20% of loans flagged for manual review, (6) Continuous monitoring and model validation. IBM has automated mortgage decisioning for 50+ banks with zero fair lending violations. Our AI models achieve 95% accuracy vs 85% for manual underwriting. We follow CFPB guidelines and can pass any regulatory exam.',
        scoringCriteria: [
          'Addressed compliance concerns comprehensively',
          'Explained explainable AI and audit trail',
          'Highlighted fair lending algorithms',
          'Mentioned human oversight for edge cases',
          'Provided track record (50+ banks, zero violations)',
          'Quantified accuracy (95% vs 85% manual)'
        ],
        hints: [
          'Lead with explainable AI',
          'Explain fair lending algorithms',
          'Highlight audit trail and compliance',
          'Provide track record and statistics'
        ]
      },
      {
        objection: 'How long will it take to implement mortgage automation? We need to move fast to compete.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'common',
        category: 'timing',
        customResponse: 'Speed to market is critical. IBM\'s proven approach delivers results fast: (1) Pre-built mortgage automation templates - no need to build from scratch, (2) Watson Studio provides AI models trained on millions of mortgages - ready to deploy, (3) IBM API Connect integrates with Ellie Mae Encompass and credit bureaus out-of-the-box, (4) Typical timeline: 3 months for platform setup, 6 months for Phase 1 (document automation, income verification), 12 months for full automation (credit decisioning, compliance). We can have your first automated workflows in production in 6 months. IBM Expert Labs has implemented 50+ mortgage automation projects with average 12-month time to market. We provide accelerators, templates, and best practices to avoid common pitfalls.',
        scoringCriteria: [
          'Addressed timeline concerns',
          'Explained pre-built templates and accelerators',
          'Provided specific timeline (6 months for Phase 1)',
          'Mentioned Watson Studio AI models',
          'Highlighted track record (50+ projects, 12-month average)',
          'Offered Expert Labs support'
        ],
        hints: [
          'Lead with pre-built templates',
          'Provide specific timeline',
          'Highlight accelerators',
          'Offer Expert Labs support'
        ]
      },
      {
        objection: 'How do we integrate with our existing Ellie Mae Encompass system? Our mortgage system is complex.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Ellie Mae Encompass integration is a common requirement - IBM has solved this for 50+ banks. Our approach: (1) IBM API Connect provides pre-built connectors for Ellie Mae Encompass - no custom development needed, (2) Integration layer on Power E1080 handles data transformation and orchestration, (3) Watson Studio AI integrates with Encompass credit decisioning engine, (4) FlashSystem stores documents and audit trails with seamless Encompass integration, (5) Phased approach - start with document automation, then add income verification, then credit decisioning. IBM has reference architectures for every major mortgage platform (Ellie Mae, Black Knight, Fiserv). We can provide Encompass integration blueprint and accelerators. Typical integration takes 3-4 months vs 12+ months for custom development.',
        scoringCriteria: [
          'Addressed integration concerns',
          'Explained pre-built Ellie Mae connectors',
          'Highlighted integration layer and orchestration',
          'Mentioned phased approach',
          'Provided timeline (3-4 months)',
          'Offered reference architectures'
        ],
        hints: [
          'Lead with pre-built connectors',
          'Explain integration layer',
          'Highlight phased approach',
          'Offer reference architectures'
        ]
      },
      {
        objection: 'What if loan officers resist automation? They are used to manual underwriting.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Change management is critical for automation success. IBM provides comprehensive approach: (1) Loan officers become advisors, not processors - automation handles paperwork so they focus on customer relationships, (2) AI provides recommendations, not mandates - loan officers review and approve decisions, (3) Comprehensive training program - 2-week training on new system, (4) Gradual rollout - pilot with 10 loan officers, then expand, (5) Productivity gains are immediate - loan officers close 50% more loans with automation. IBM has helped 50+ banks with mortgage automation adoption - average loan officer satisfaction increases from 6/10 to 8/10 after automation. We provide change management consulting, training materials, and ongoing support. Most loan officers love automation once they see productivity gains.',
        scoringCriteria: [
          'Addressed change management concerns',
          'Explained loan officer role transformation',
          'Highlighted AI as assistant, not replacement',
          'Mentioned training and gradual rollout',
          'Quantified productivity gains (50% more loans)',
          'Provided satisfaction statistics (6/10 to 8/10)'
        ],
        hints: [
          'Lead with role transformation',
          'Explain AI as assistant',
          'Highlight productivity gains',
          'Offer change management support'
        ]
      },
      {
        objection: 'How do we ensure customer data security and privacy? Mortgage data is highly sensitive.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Data security is paramount for mortgage automation. IBM provides enterprise-grade security: (1) End-to-end encryption for all customer data - documents, financial information, personal data, (2) Power E1080 provides hardware-based encryption and secure enclaves for sensitive data processing, (3) FlashSystem immutable snapshots protect against ransomware and data tampering, (4) Watson Studio AI processes data in secure environment with no data leakage, (5) Comprehensive access controls and audit logging - know who accessed what data when, (6) Compliance with GLBA, FFIEC, and state privacy laws. IBM has secured mortgage data for 100+ banks with zero breaches. We follow NIST cybersecurity framework and can pass any security audit. FlashSystem provides 99.9999% data durability with cyber-resilient architecture.',
        scoringCriteria: [
          'Addressed security concerns comprehensively',
          'Explained end-to-end encryption',
          'Highlighted hardware-based security (Power E1080)',
          'Mentioned immutable snapshots (FlashSystem)',
          'Provided track record (100+ banks, zero breaches)',
          'Referenced compliance standards (GLBA, FFIEC, NIST)'
        ],
        hints: [
          'Lead with end-to-end encryption',
          'Explain hardware-based security',
          'Highlight immutable snapshots',
          'Provide track record'
        ]
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
          reason: 'High-performance mortgage automation platform with AI-powered credit decisioning, document processing, and integration layer',
          configuration: 'Watson Studio on Power E1080 for AI decisioning, 8-core instances for mortgage workflow automation, 4-core instances for integration with Ellie Mae Encompass',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI-powered credit decisioning, document intelligence, income verification, and fraud detection with explainable AI',
          configuration: 'Credit decisioning models, document OCR and classification, income verification AI, fraud detection algorithms, compliance monitoring',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for mortgage documents, audit trails, and customer data with immutable snapshots for compliance',
          configuration: '100TB usable capacity with FlashCore Modules, immutable snapshots for audit compliance, replication for DR, cyber-resilient architecture',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier architecture: (1) Customer-facing layer (mobile app, web portal) for document upload and application tracking, (2) Automation layer (Watson Studio on Power E1080) for AI decisioning, document processing, and workflow orchestration, (3) Integration layer for Ellie Mae Encompass, credit bureaus, and income verification services. FlashSystem stores documents and audit trails with immutable snapshots.',
      sizing: '8-core Power E1080 for mortgage automation (1,000+ applications per day), 4-core for integration layer, 100TB FlashSystem for documents and audit trails',
      deployment: 'Hybrid cloud deployment with on-premises automation for security and cloud-based customer portal for accessibility'
    },
    pricing: {
      hardware: '$2M Power E1080 and FlashSystem',
      software: '$1.5M Watson Studio and IBM API Connect licenses (3-year)',
      services: '$1.2M IBM Expert Labs for implementation and training',
      support: '$400K annual IBM support and managed services',
      total: '$4.7M initial investment + $1.2M annual operational costs'
    },
    businessCase: {
      costSavings: '$4.5M annually (reduce operational costs from $3M to $500K, reduce compliance costs from $2M to $500K)',
      revenueImpact: '$50M annually (capture lost mortgage volume)',
      productivityGains: '$2M annually (increase loan officer productivity by 50%)',
      riskReduction: 'Reduce fair lending risk with explainable AI, improve fraud detection, ensure regulatory compliance with comprehensive audit trail',
      roi: '12 months payback, 450% three-year ROI',
      paybackPeriod: '12 months',
      tco: '$8.3M over 3 years vs $25M in lost revenue and costs (67% improvement)'
    },
    competitivePositioning: 'IBM Watson Studio is the leading AI platform for mortgage automation with 50+ financial institutions. Unlike generic automation platforms, IBM provides banking-specific AI models, explainable decisioning, and comprehensive compliance. Power E1080 delivers 3x better performance than x86 for AI workloads with superior security.',
    nextSteps: [
      'Schedule mortgage automation workshop with IBM Watson Studio experts',
      'Conduct Ellie Mae Encompass integration assessment',
      'Develop mortgage automation roadmap and phasing strategy',
      'Create customer experience design and mobile app mockups',
      'Prepare business case presentation for executive committee',
      'Pilot Phase 1 automation (document collection, income verification) with 10 loan officers'
    ],
    requiredElements: [
      'Watson Studio AI for credit decisioning and document processing',
      'Power E1080 for high-performance mortgage automation',
      'FlashSystem for secure document storage with immutable snapshots',
      'IBM API Connect for Ellie Mae Encompass integration',
      'Mobile app for customer document upload and tracking',
      'Explainable AI for regulatory compliance',
      'Comprehensive audit trail and compliance monitoring',
      'Change management and training program'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Identified competitive pressure and revenue loss ($50M)',
        'Quantified processing time gap (45 days vs 10 days)',
        'Understood customer satisfaction impact (6.2 vs 8.5)',
        'Assessed automation scope (documents, verification, decisioning)',
        'Identified compliance and risk management requirements',
        'Understood integration needs (Ellie Mae Encompass)',
        'Assessed customer experience vision (mobile-first)',
        'Mapped budget and ROI expectations'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed compliance and accuracy concerns with explainable AI',
        'Explained implementation timeline and phased approach',
        'Outlined Ellie Mae Encompass integration strategy',
        'Addressed change management and loan officer adoption',
        'Provided comprehensive data security approach'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Watson Studio on Power E1080 for mortgage automation',
        'Included FlashSystem for secure document storage',
        'Proposed comprehensive automation architecture',
        'Addressed compliance, security, and customer experience',
        'Provided clear phasing and timeline',
        'Created compelling business case with 12-month payback'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($4.5M annually)',
        'Calculated revenue impact ($50M mortgage volume)',
        'Demonstrated ROI (12 months payback, 450% three-year ROI)',
        'Highlighted risk reduction (compliance, fraud detection)',
        'Showed competitive advantage (10-day approvals, 8.5 satisfaction)'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Mortgage origination automation',
      description: 'Understand mortgage automation strategies, AI-powered credit decisioning, and how banks compete with digital lenders',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI-powered credit decisioning',
      description: 'Master explainable AI for mortgage underwriting, fair lending compliance, and regulatory requirements',
      skillLevel: 'advanced'
    },
    {
      concept: 'Document automation and intelligence',
      description: 'Design document collection, OCR, classification, and verification workflows for mortgage processing',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Mortgage system integration',
      description: 'Architect integration with Ellie Mae Encompass, credit bureaus, and income verification services',
      skillLevel: 'advanced'
    },
    {
      concept: 'Change management for automation',
      description: 'Develop change management strategies for loan officer adoption and productivity improvement',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Mortgage automation business case',
      description: 'Build compelling business cases for mortgage automation including revenue capture, cost savings, and competitive positioning',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Mortgage automation', 'AI decisioning', 'Document intelligence', 'Digital lending', 'Ellie Mae integration', 'Compliance'],
    skills: ['Mortgage automation', 'AI strategy', 'Document processing', 'System integration', 'Change management', 'Business case development'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Mortgage automation is competitive imperative - lead with $50M revenue loss to digital lenders',
    'Quantify time gap early: 45 days vs 10 days for Rocket Mortgage',
    'Address compliance concerns proactively - explainable AI is critical for Chief Risk Officer',
    'Emphasize customer experience - mobile-first, 10-day approvals, 8.5 satisfaction',
    'Position Watson Studio as mortgage-specific AI vs generic automation',
    'Highlight speed to market with pre-built templates and Ellie Mae connectors',
    'Build compelling ROI story: 12-month payback, $50M revenue capture, $4.5M cost savings',
    'Address change management - loan officers become advisors, not processors',
    'CIO and Chief Digital Officer are champions - focus on speed and customer experience',
    'Chief Risk Officer is skeptic - lead with explainable AI and compliance',
    'CFO is neutral - build strong business case with 12-month payback',
    'Differentiate with AI-powered decisioning and comprehensive security',
    'Emphasize IBM track record: 50+ mortgage automation projects, zero fair lending violations'
  ]
};
// Banking Scenario 014: Credit Card Processing Modernization
export const bankingScenario014: TrainingScenario = {
  id: 'banking-014',
  title: 'Credit Card Processing Modernization',
  description: 'Modernize legacy credit card processing infrastructure with real-time fraud detection and high-performance transaction processing using IBM Power Systems and AI.',
  
  customerProfile: {
    company: 'Summit Regional Bank',
    industry: 'Banking',
    size: 'Large (1000-5000 employees)',
    revenue: '$3.2B',
    employees: 2800,
    location: 'Regional (8 states)',
    currentInfrastructure: {
      servers: 'Legacy mainframe card processing system',
      storage: 'Oracle database',
      applications: ['COBOL card processing', 'Batch authorization system', 'Legacy fraud detection'],
      age: '25+ years',
      endOfLife: 'Vendor support ending in 18 months',
      issues: [
        'Batch processing causes 24-hour delays for fraud detection',
        'Cannot support modern card features: contactless, mobile wallets',
        'System maxed at 1.5M accounts, cannot scale',
        'High maintenance costs: $8M annually',
        'Integration challenges with fintech partners'
      ]
    },
    keyStakeholders: [
      {
        name: 'Michael Torres',
        role: 'CIO',
        priorities: ['Real-time processing', 'Fraud reduction', 'Customer satisfaction'],
        concerns: ['Migration risk', 'System downtime', 'Integration complexity'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Kim',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Fraud loss prevention'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'David Chen',
        role: 'Chief Risk Officer',
        priorities: ['Fraud prevention', 'Regulatory compliance', 'Risk mitigation'],
        concerns: ['Data security', 'Compliance requirements', 'Fraud detection accuracy'],
        influence: 'high',
        supportLevel: 'supporter'
      }
    ],
    budget: '$45M capital budget, $12M annual operating budget',
    timeline: '18-month implementation (vendor support ending)',
    decisionProcess: 'Board approval required for capital investment over $25M'
  },
  
  businessContext: {
    challenges: [
      'Legacy mainframe card processing system (25+ years old)',
      '$15M annual fraud losses due to batch-only fraud detection',
      'Cannot support contactless, mobile wallets, or instant issuance',
      'Batch processing causes 24-hour delays in fraud alerts',
      'Vendor announcing end-of-support in 18 months',
      'Customer satisfaction declining (3.2/5 stars)',
      'Unable to compete with digital-first card programs',
      'System cannot scale beyond current 1.2M card accounts'
    ],
    businessImpact: [
      '$15M annual fraud losses',
      'Customer satisfaction at 3.2/5 stars (declining)',
      'Losing market share to digital-first competitors',
      'Cannot support modern card features (contactless, mobile wallets)',
      '24-hour fraud detection delays causing customer frustration',
      'Limited to 1.2M card accounts with no growth path',
      'High operational costs due to legacy system maintenance',
      'Vendor end-of-support creating compliance and security risks'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Modernize card processing to support real-time authorization and fraud detection',
      'Reduce fraud losses by 70% through AI-powered real-time fraud detection',
      'Enable modern card features: contactless, mobile wallets, instant issuance',
      'Improve customer satisfaction to 4.5+ stars through better card experience',
      'Reduce operational costs by 50% through automation and efficiency',
      'Scale to support 3M accounts to enable growth strategy',
      'Launch innovative card products to compete with fintechs and neobanks',
      'Achieve real-time dispute resolution and customer service'
    ],
    competitivePressure: 'Digital-first banks and fintechs offering instant card issuance, real-time fraud alerts, dynamic rewards, and superior mobile experiences. Summit losing 15% of new card applications to competitors annually.',
    regulatoryRequirements: [
      'PCI DSS 4.0 compliance for card data security',
      'Real-time fraud monitoring requirements',
      'Consumer protection regulations for fraud liability',
      'Data residency and privacy requirements',
      'Audit trail and transaction logging requirements'
    ],
    recentEvents: [
      'Vendor announced end-of-support for legacy card processing system (18 months)',
      'Major fraud incident cost $2.3M in Q4 2025',
      'Customer satisfaction dropped from 3.8 to 3.2 stars in 12 months',
      'Lost 3 major co-brand partnerships due to lack of digital features',
      'Board mandated card processing modernization initiative'
    ]
  },

  situation: {
    background: 'Summit Regional Bank is a $3.2B regional bank with 1.2M credit card accounts and $4.5B card portfolio. The bank\'s legacy card processing system is 25+ years old, running on aging mainframe infrastructure with batch processing that causes 24-hour delays. The bank is losing $15M annually to card fraud due to delayed fraud detection, and customer satisfaction has declined to 3.2 stars. Competitors are offering instant card issuance, real-time fraud alerts, and dynamic rewards programs that Summit cannot match. The bank\'s strategic plan calls for growing to 3M card accounts, but the current system is maxed out at 1.5M accounts. The CEO has made card modernization a top priority, with a mandate to reduce fraud losses by 70%, improve customer satisfaction to 4.5+ stars, and enable modern card features within 18 months.',
    immediateNeed: 'The bank needs to modernize its credit card processing infrastructure to support real-time authorization, fraud detection, and modern card features while reducing operational costs and fraud losses.',
    stakeholders: [
      {
        name: 'Michael Torres',
        role: 'CIO',
        goals: ['Modernize card processing infrastructure', 'Eliminate legacy mainframe dependencies', 'Enable real-time processing and fraud detection'],
        concerns: ['System reliability and uptime', 'Migration complexity and risk', 'Integration with existing banking systems'],
        influence: 'high',
        technicalBackground: 'strong'
      },
      {
        name: 'Jennifer Kim',
        role: 'Chief Digital Officer',
        goals: ['Launch innovative card products', 'Enable mobile wallet and contactless payments', 'Improve customer experience and satisfaction'],
        concerns: ['Time to market for new features', 'Customer adoption of new card features', 'Competitive differentiation'],
        influence: 'high',
        technicalBackground: 'moderate'
      },
      {
        name: 'Robert Chen',
        role: 'Chief Risk Officer',
        goals: ['Reduce fraud losses by 70%', 'Ensure regulatory compliance', 'Implement real-time fraud monitoring'],
        concerns: ['False positive rates blocking legitimate transactions', 'Regulatory compliance for real-time monitoring', 'Data security and PCI-DSS compliance'],
        influence: 'high',
        technicalBackground: 'moderate'
      },
      {
        name: 'David Martinez',
        role: 'CFO',
        goals: ['Reduce operational costs by 50%', 'Achieve positive ROI within 24 months', 'Reduce fraud losses'],
        concerns: ['Total cost of ownership', 'Business disruption during migration', 'Payback period and ROI'],
        influence: 'high',
        technicalBackground: 'low'
      },
      {
        name: 'Lisa Anderson',
        role: 'VP of Card Services',
        goals: ['Improve customer satisfaction to 4.5+ stars', 'Launch instant card issuance', 'Enable real-time rewards and offers'],
        concerns: ['Customer experience during migration', 'Staff training and change management', 'Service level maintenance'],
        influence: 'medium',
        technicalBackground: 'low'
      }
    ],
    competitivePressure: 'High - Fintechs and neobanks offering instant card issuance, real-time fraud alerts, dynamic rewards, and superior mobile experiences. Traditional competitors have modernized card processing and are gaining market share.',
    timeline: 'Board presentation in 6 weeks, decision in 3 months, implementation must complete within 18 months',
    budget: '$12-18M approved for card processing modernization'
  },

  challenge: {
    primaryObjective: 'Position IBM Power E1080, FlashSystem 9500, and Watson Studio as the optimal solution for modernizing Summit Regional Bank\'s credit card processing infrastructure to enable real-time authorization, AI-powered fraud detection, and modern card features while reducing costs and fraud losses.',
    successCriteria: [
      'Demonstrate how IBM solution enables real-time card authorization and fraud detection',
      'Prove 70% reduction in fraud losses through AI-powered fraud detection',
      'Show how solution supports modern card features: contactless, mobile wallets, instant issuance',
      'Build compelling business case with 24-month payback and 380% three-year ROI',
      'Address migration complexity and risk mitigation strategies',
      'Differentiate from cloud-only solutions and legacy mainframe vendors',
      'Secure commitment to move forward with IBM solution'
    ],
    keyDecisionFactors: [
      'Real-time processing capability for authorization and fraud detection',
      'AI/ML fraud detection accuracy and false positive rates',
      'Support for modern card features and fintech integrations',
      'Migration complexity and business continuity during transition',
      'Total cost of ownership and ROI',
      'Scalability to support 3M+ accounts',
      'PCI-DSS compliance and data security',
      'Vendor stability and long-term support'
    ]
  },

  discoveryQuestions: [
    {
      question: 'What is your current fraud loss rate, and what percentage of fraud is detected within 24 hours vs. real-time? How much are you losing annually to card fraud?',
      purpose: 'Quantify fraud losses and establish baseline for ROI calculation. Real-time fraud detection is critical value driver.',
      category: 'pain-point',
      idealResponse: 'Current fraud loss rate is 0.33% ($15M annually on $4.5B portfolio). Only 40% of fraud is detected within 24 hours due to batch processing. Real-time fraud detection could prevent 70% of fraud losses, saving $10.5M annually. This is our #1 pain point.',
      followUpQuestions: [
        'What types of fraud are most common?',
        'What is your false positive rate?',
        'How long does dispute resolution take?'
      ],
      scoringWeight: 15,
      hints: ['Fraud losses are quantifiable and significant', 'Real-time detection is proven to reduce fraud by 70%', 'This is measurable ROI']
    },
    {
      question: 'What modern card features are you unable to support with your current system? How is this impacting customer satisfaction and competitive position?',
      purpose: 'Identify feature gaps and competitive disadvantages. Modern card features drive customer satisfaction and retention.',
      category: 'business',
      idealResponse: 'We cannot support contactless payments, mobile wallet provisioning (Apple Pay, Google Pay), instant card issuance, real-time rewards, or dynamic spending limits. Customer satisfaction has declined to 3.2 stars, and we are losing high-value customers to competitors offering these features. Market research shows 65% of customers want instant card issuance and real-time fraud alerts.',
      followUpQuestions: [
        'Which features are customers requesting most?',
        'How many customers have you lost to competitors?',
        'What is the revenue impact of customer attrition?'
      ],
      scoringWeight: 12,
      hints: ['Feature gaps are driving customer attrition', 'Modern features are table stakes for card programs', 'Quantify customer loss and revenue impact']
    },
    {
      question: 'What is your current operational cost per card account, and how does it compare to industry benchmarks? What are your largest cost drivers?',
      purpose: 'Establish cost baseline and identify automation opportunities. Operational efficiency is key ROI driver.',
      category: 'business',
      idealResponse: 'Current operational cost is $6.50 per account annually vs. industry average of $3.20. Largest cost drivers are manual fraud review ($2.5M annually), batch processing overhead ($1.8M), and legacy system maintenance ($8M). We process 45M transactions annually with significant manual intervention. Automation could reduce costs by 50%.',
      followUpQuestions: [
        'How many FTEs support card operations?',
        'What percentage of transactions require manual review?',
        'What is your system maintenance cost?'
      ],
      scoringWeight: 12,
      hints: ['Operational costs are 2x industry average', 'Automation drives significant cost savings', 'Quantify manual processes and FTE costs']
    },
    {
      question: 'What is your current card processing capacity, and what are your growth targets? Can your current system support your growth strategy?',
      purpose: 'Identify scalability constraints and growth enablement. Scalability is critical for business strategy.',
      category: 'technical',
      idealResponse: 'Current system is maxed at 1.5M accounts and 50M transactions annually. Our strategic plan calls for growing to 3M accounts and 120M transactions within 3 years. Current system cannot scale beyond 1.5M accounts without major infrastructure investment. This is blocking our growth strategy and market expansion plans.',
      followUpQuestions: [
        'What is your target account growth rate?',
        'What markets are you planning to expand into?',
        'What is the cost of scaling current system?'
      ],
      scoringWeight: 10,
      hints: ['Scalability is blocking growth strategy', 'Current system is at capacity', 'Growth targets are aggressive and time-sensitive']
    },
    {
      question: 'What is your current authorization response time, and how does batch processing impact fraud detection and customer experience?',
      purpose: 'Quantify real-time processing gap and impact. Real-time processing is fundamental requirement.',
      category: 'technical',
      idealResponse: 'Current authorization response time is 2-3 seconds, which is acceptable. However, fraud detection runs in batch overnight, causing 24-hour delays. This means fraudulent transactions are approved and we only detect fraud the next day. Customers complain about delayed fraud alerts and slow dispute resolution. Real-time fraud detection would prevent fraud before authorization.',
      followUpQuestions: [
        'How many fraudulent transactions are approved daily?',
        'What is your average fraud detection time?',
        'How long does dispute resolution take?'
      ],
      scoringWeight: 10,
      hints: ['Batch processing causes 24-hour fraud detection delays', 'Real-time fraud detection prevents fraud at authorization', 'Customer experience suffers from delayed alerts']
    },
    {
      question: 'Who are the key stakeholders for this decision, and what are their primary concerns? Who has budget authority?',
      purpose: 'Map decision-making process and stakeholder concerns. Essential for sales strategy and objection handling.',
      category: 'stakeholder',
      idealResponse: 'CIO Michael Torres owns the decision with strong support from Chief Digital Officer Jennifer Kim and Chief Risk Officer Robert Chen. CFO David Martinez has budget authority and is focused on ROI. VP of Card Services Lisa Anderson is concerned about customer experience during migration. Board has mandated card modernization as top priority. Decision timeline is 3 months.',
      followUpQuestions: [
        'What are the CIO\'s top priorities?',
        'What is the CFO\'s ROI requirement?',
        'Who are the potential blockers?'
      ],
      scoringWeight: 8,
      hints: ['CIO and Chief Digital Officer are champions', 'CFO controls budget and requires strong ROI', 'Board mandate creates urgency']
    },
    {
      question: 'What is your timeline for card processing modernization, and what are the key milestones? What is driving the timeline?',
      purpose: 'Understand urgency and timeline constraints. Critical for proposal timing and implementation planning.',
      category: 'timeline',
      idealResponse: 'Board presentation in 6 weeks, vendor selection in 3 months, implementation must complete within 18 months. Timeline is driven by competitive pressure, customer attrition, and fraud losses. Board has mandated completion within 18 months. Delayed decision costs $1.25M monthly in fraud losses and customer attrition.',
      followUpQuestions: [
        'What happens if timeline slips?',
        'Are there regulatory deadlines?',
        'What is the cost of delay?'
      ],
      scoringWeight: 8,
      hints: ['Timeline is aggressive and board-mandated', 'Delay has quantifiable cost', 'Competitive pressure creates urgency']
    },
    {
      question: 'What is your budget for card processing modernization, and what is included in that budget? What is your expected ROI and payback period?',
      purpose: 'Qualify budget and ROI expectations. Essential for solution sizing and business case.',
      category: 'budget',
      idealResponse: 'Budget is $12-18M for complete card processing modernization including hardware, software, implementation, and training. CFO requires 24-month payback and 300%+ three-year ROI. Budget includes migration costs and parallel run period. Board has approved budget based on fraud reduction and operational cost savings.',
      followUpQuestions: [
        'What is included in the budget?',
        'What is the approval process?',
        'Are there additional funds for innovation?'
      ],
      scoringWeight: 8,
      hints: ['Budget is approved and adequate', 'ROI expectations are achievable', 'Focus on fraud reduction and cost savings']
    }
  ],

  proposedSolution: {
    overview: 'IBM Power E1080 with FlashSystem 9500 and Watson Studio provides a modern, real-time card processing platform that enables instant authorization, AI-powered fraud detection, and support for modern card features while reducing operational costs by 50% and fraud losses by 70%.',
    products: [
      {
        productId: 'ibm-power-e1080',
        role: 'primary',
        reasoning: 'Power E1080 provides the high-performance, reliable infrastructure for real-time card processing with sub-second authorization response times, 99.999% uptime, and ability to scale to 5M+ accounts and 200M+ transactions annually. Handles peak transaction loads (Black Friday, holiday shopping) without performance degradation.',
        keyCapabilities: [
          'Real-time transaction processing with <100ms authorization response time',
          'Horizontal scalability to support 5M+ card accounts and 200M+ transactions',
          '99.999% uptime with built-in redundancy and failover',
          'Hardware-based encryption for PCI-DSS compliance and data security',
          'Secure enclaves for sensitive cardholder data processing',
          'Live partition mobility for zero-downtime maintenance',
          'PowerVM virtualization for workload isolation and resource optimization'
        ],
        businessValue: [
          'Enables real-time card authorization and fraud detection',
          'Supports 3x growth to 3M+ accounts without infrastructure constraints',
          'Eliminates batch processing delays and enables instant fraud detection',
          'Provides enterprise-grade reliability for mission-critical card processing',
          'Reduces infrastructure costs through consolidation and efficiency'
        ]
      },
      {
        productId: 'ibm-flashsystem-9500',
        role: 'supporting',
        reasoning: 'FlashSystem 9500 provides ultra-low latency storage for real-time card transaction processing, fraud detection, and customer data access. Cyber Vault protects against ransomware and ensures business continuity. Immutable snapshots provide audit trail for regulatory compliance.',
        keyCapabilities: [
          'Sub-millisecond latency for real-time transaction processing and fraud detection',
          'NVMe performance for high-speed card authorization and data access',
          'Cyber Vault with immutable snapshots for ransomware protection',
          'Storage virtualization for simplified management and efficiency',
          'Data reduction (compression, deduplication) reduces storage costs by 5:1',
          'Encryption at rest for PCI-DSS compliance',
          'Seamless scalability to support transaction volume growth'
        ],
        businessValue: [
          'Enables real-time fraud detection with instant data access',
          'Protects card data and transaction history from ransomware',
          'Reduces storage costs by 80% through data reduction',
          'Ensures regulatory compliance with immutable audit trails',
          'Supports business continuity with rapid recovery capabilities'
        ]
      },
      {
        productId: 'ibm-watson-studio',
        role: 'supporting',
        reasoning: 'Watson Studio provides AI-powered fraud detection that analyzes every transaction in real-time, reducing fraud losses by 70% while minimizing false positives. Machine learning models continuously improve fraud detection accuracy based on transaction patterns and fraud trends.',
        keyCapabilities: [
          'Real-time fraud scoring for every card transaction (<50ms)',
          'Machine learning models trained on historical fraud patterns',
          'Behavioral analytics to detect anomalous spending patterns',
          'Network analysis to identify fraud rings and coordinated attacks',
          'Adaptive learning that improves accuracy over time',
          'Explainable AI for regulatory compliance and dispute resolution',
          'Integration with card authorization system for instant fraud prevention'
        ],
        businessValue: [
          'Reduces fraud losses by 70% through real-time fraud detection',
          'Minimizes false positives to <1% to avoid blocking legitimate transactions',
          'Prevents fraud before authorization, not after the fact',
          'Provides instant fraud alerts to customers via mobile app',
          'Enables dynamic fraud rules based on transaction patterns and risk levels'
        ]
      }
    ],
    technicalApproach: 'Deploy Power E1080 as the card processing platform running modern card management software with real-time authorization and fraud detection. FlashSystem 9500 provides ultra-low latency storage for transaction data, customer profiles, and fraud models. Watson Studio AI analyzes every transaction in real-time, scoring fraud risk and blocking suspicious transactions before authorization. Implement phased migration starting with new card accounts, then gradually migrate existing accounts. Maintain parallel run with legacy system during migration to ensure business continuity.',
    implementationSteps: [
      'Phase 1 (Months 1-3): Infrastructure deployment and testing - Power E1080, FlashSystem 9500, Watson Studio',
      'Phase 2 (Months 4-6): Card management software installation and configuration, Watson AI model training',
      'Phase 3 (Months 7-9): Pilot with 50K new card accounts, validate real-time processing and fraud detection',
      'Phase 4 (Months 10-15): Phased migration of existing 1.2M accounts, parallel run with legacy system',
      'Phase 5 (Months 16-18): Complete migration, decommission legacy system, launch modern card features'
    ],
    expectedOutcomes: [
      'Real-time card authorization with <100ms response time',
      '70% reduction in fraud losses ($10.5M annual savings)',
      '50% reduction in operational costs ($3.9M annual savings)',
      'Support for modern card features: contactless, mobile wallets, instant issuance',
      'Customer satisfaction improvement from 3.2 to 4.5+ stars',
      'Scalability to support 3M+ accounts and 120M+ transactions',
      'PCI-DSS compliance with hardware-based encryption and audit trails',
      '24-month payback, 380% three-year ROI'
    ]
  },

  objections: [
    {
      objection: 'We are concerned about the complexity and risk of migrating 1.2M active card accounts from our legacy system. What if something goes wrong and we cannot process card transactions? This is mission-critical.',
      stakeholder: 'CIO',
      difficulty: 'very difficult',
      category: 'risk',
      customResponse: 'Migration risk is a valid concern for mission-critical card processing. IBM has a proven migration approach that eliminates risk: (1) Phased migration starting with new accounts (no migration risk), then gradually migrating existing accounts in small batches, (2) Parallel run capability - legacy system continues processing while new system validates in parallel, (3) Automated migration tools with validation and reconciliation, (4) Rollback capability at every phase if issues arise, (5) IBM Expert Labs has migrated 200+ card processing systems with 99.5% success rate. We recommend 18-month timeline with 6-month parallel run to ensure zero business disruption. Most banks find the new system is MORE reliable than legacy.',
      scoringCriteria: [
        'Acknowledges migration risk and complexity',
        'Presents phased migration approach with parallel run',
        'Emphasizes IBM track record and proven methodology',
        'Offers rollback capability and risk mitigation',
        'Provides realistic timeline with adequate testing'
      ],
      hints: [
        'Migration risk is the #1 concern for card processing',
        'Phased approach with parallel run eliminates risk',
        'IBM has proven track record with 200+ migrations'
      ]
    },
    {
      objection: 'Your solution costs $15M, which is significantly more than cloud-based card processing platforms that cost $3-5M. Why should we pay 3x more for on-premises infrastructure?',
      stakeholder: 'CFO',
      difficulty: 'difficult',
      category: 'cost',
      customResponse: 'Let\'s look at total cost of ownership over 5 years, not just initial cost. Cloud platforms charge per-transaction fees that add up quickly: at 45M transactions annually, you will pay $2.7M per year in transaction fees ($0.06 per transaction), totaling $13.5M over 5 years. IBM solution has zero per-transaction fees. Additionally, cloud platforms charge for data egress, API calls, and storage - adding another $1.5M annually. Total cloud TCO is $21M over 5 years vs. $15M for IBM solution. IBM solution also provides superior performance (sub-100ms vs. 300ms cloud latency), better security (dedicated infrastructure vs. multi-tenant), and data sovereignty (your data stays in your data center). The business case shows 24-month payback and 380% three-year ROI through fraud reduction and operational cost savings.',
      scoringCriteria: [
        'Compares total cost of ownership, not just initial cost',
        'Quantifies cloud transaction fees and hidden costs',
        'Shows IBM solution is actually lower TCO over 5 years',
        'Emphasizes performance, security, and data sovereignty advantages',
        'Presents strong ROI with fraud reduction and cost savings'
      ],
      hints: [
        'Cloud platforms have hidden per-transaction fees',
        'TCO analysis shows IBM is lower cost over 5 years',
        'Performance and security advantages justify investment'
      ]
    },
    {
      objection: 'We are concerned about false positives blocking legitimate customer transactions. If your AI fraud detection is too aggressive, we will frustrate customers and lose sales. How do you balance fraud detection with customer experience?',
      stakeholder: 'Chief Risk Officer',
      difficulty: 'difficult',
      category: 'risk',
      customResponse: 'Balancing fraud detection with customer experience is critical. Watson AI is designed to minimize false positives while maximizing fraud detection: (1) Machine learning models are trained on YOUR historical transaction data to understand normal customer behavior, (2) Behavioral analytics detect anomalies based on individual customer patterns, not generic rules, (3) Graduated response - suspicious transactions trigger additional authentication (SMS code, biometric), not immediate blocking, (4) Real-time learning - AI adapts to customer behavior changes (travel, large purchases), (5) Industry benchmarks show Watson achieves <1% false positive rate while detecting 95% of fraud. We can tune sensitivity based on your risk tolerance. Most banks find customer satisfaction IMPROVES because legitimate transactions are approved faster and fraud is prevented before it impacts customers.',
      scoringCriteria: [
        'Acknowledges false positive concern and customer impact',
        'Explains how Watson AI minimizes false positives',
        'Describes graduated response approach',
        'Provides industry benchmarks for false positive rates',
        'Emphasizes customer experience improvement'
      ],
      hints: [
        'False positives are a major concern for card issuers',
        'Watson AI uses behavioral analytics, not generic rules',
        'Graduated response balances security and experience'
      ]
    },
    {
      objection: 'Our card services team is already overwhelmed with current operations. How will we manage the implementation and training for a new card processing system? We do not have the resources for a major technology project.',
      stakeholder: 'VP of Card Services',
      difficulty: 'common',
      category: 'skills',
      customResponse: 'Resource constraints are a common concern. IBM provides comprehensive implementation and training support: (1) IBM Expert Labs handles the technical implementation - your team focuses on business requirements and testing, (2) Phased rollout minimizes operational impact - start with new accounts while legacy system continues, (3) Comprehensive training program for card services staff with hands-on workshops, (4) IBM provides 24/7 support during migration and first 6 months of operation, (5) Modern card processing system is actually EASIER to operate than legacy system - automated fraud detection, self-service customer tools, and streamlined operations. Most banks find staff productivity improves 40% after migration because they spend less time on manual fraud review and customer service. We can also provide temporary staff augmentation during migration if needed.',
      scoringCriteria: [
        'Acknowledges resource constraints and operational concerns',
        'Explains IBM implementation support and Expert Labs',
        'Describes phased approach to minimize operational impact',
        'Emphasizes training and 24/7 support',
        'Shows how automation improves staff productivity'
      ],
      hints: [
        'Resource constraints are common for card operations teams',
        'IBM Expert Labs handles technical implementation',
        'Automation reduces operational burden, not increases it'
      ]
    },
    {
      objection: 'We have heard that AI fraud detection can be biased and discriminate against certain customer demographics. How do you ensure fair lending and avoid regulatory issues with AI-powered fraud detection?',
      stakeholder: 'Chief Risk Officer',
      difficulty: 'difficult',
      category: 'risk',
      customResponse: 'Fair lending and non-discrimination are absolutely critical for card processing. IBM Watson AI is designed for fairness and regulatory compliance: (1) Fraud detection models are trained on transaction behavior, not demographic data - no access to race, gender, age, or other protected characteristics, (2) Explainable AI provides detailed reasoning for every fraud decision that auditors can review, (3) Bias testing and fairness metrics are built into model development and monitoring, (4) Comprehensive audit trail for every fraud decision stored on FlashSystem with immutable snapshots, (5) IBM provides fairness assessment tools and ongoing monitoring for bias. Watson AI has been deployed at 50+ banks with zero fair lending violations. We can also provide third-party fairness audits if required by regulators.',
      scoringCriteria: [
        'Acknowledges fair lending concerns and regulatory requirements',
        'Explains how Watson AI avoids demographic bias',
        'Describes explainable AI and audit trail capabilities',
        'Provides IBM track record with zero violations',
        'Offers fairness assessment and third-party audits'
      ],
      hints: [
        'Fair lending is critical regulatory requirement',
        'Watson AI uses transaction behavior, not demographics',
        'Explainable AI provides transparency for auditors'
      ]
    },
    {
      objection: 'What happens if IBM discontinues support for Power Systems or Watson AI in the future? We cannot afford to be locked into a platform that IBM might abandon. We need long-term stability.',
      stakeholder: 'CIO',
      difficulty: 'common',
      category: 'strategy',
      customResponse: 'Platform stability is a valid long-term concern. IBM Power Systems and Watson AI are strategic growth platforms with strong commitment: (1) IBM has been in banking technology for 50+ years and card processing is a core market, (2) Power Systems has 500+ bank customers globally and growing - large, stable customer base, (3) IBM is investing $1B+ annually in Power Systems and AI development, (4) Watson AI is deployed at 200+ financial institutions for fraud detection, (5) IBM is a $60B company with strong financials - we are not going anywhere. That said, the solution is built on open standards and APIs, so you are not locked in. If you ever needed to migrate, your data and applications are portable. IBM also provides 10-year support commitments for Power Systems.',
      scoringCriteria: [
        'Acknowledges long-term platform stability concern',
        'Provides IBM commitment and investment evidence',
        'Shows large customer base and market traction',
        'Emphasizes IBM financial stability and longevity',
        'Offers open standards and portability as insurance'
      ],
      hints: [
        'Platform stability is important for long-term investment',
        'IBM has 50+ years in banking and strong commitment',
        'Large customer base provides stability and ecosystem'
      ]
    }
  ],

  competitiveContext: {
    competitors: [
      {
        name: 'Cloud-based card processing platforms (Marqeta, Galileo, Stripe Issuing)',
        strengths: ['Lower initial cost', 'Fast deployment', 'Modern API-first architecture', 'Elastic scalability'],
        weaknesses: ['Per-transaction fees add up quickly', 'Multi-tenant security concerns', 'Higher latency (300ms vs. 100ms)', 'Data sovereignty issues', 'Limited customization'],
        differentiators: [
          'IBM provides dedicated infrastructure with superior performance and security',
          'Zero per-transaction fees - lower TCO over 5 years',
          'Sub-100ms latency vs. 300ms cloud latency',
          'Data stays in your data center for sovereignty and compliance',
          'Enterprise-grade reliability with 99.999% uptime'
        ]
      },
      {
        name: 'Legacy mainframe vendors (FIS, Fiserv, ACI Worldwide)',
        strengths: ['Proven track record', 'Deep banking expertise', 'Comprehensive card processing features', 'Regulatory compliance'],
        weaknesses: ['Expensive maintenance costs', 'Batch processing limitations', 'Cannot support modern card features', 'Slow innovation cycle', 'Vendor lock-in'],
        differentiators: [
          'IBM provides modern real-time processing vs. legacy batch processing',
          'Watson AI fraud detection vs. rules-based fraud detection',
          'Support for modern card features: contactless, mobile wallets, instant issuance',
          'Open architecture vs. proprietary vendor lock-in',
          '50% lower operational costs through automation'
        ]
      }
    ],
    marketTrends: [
      'Real-time card processing is becoming table stakes for competitive card programs',
      'AI-powered fraud detection is proven to reduce fraud losses by 60-80%',
      'Modern card features (contactless, mobile wallets, instant issuance) are customer expectations',
      'Banks are moving away from legacy mainframe card processing to modern platforms',
      'Regulatory pressure for real-time fraud monitoring and instant dispute resolution'
    ]
  },

  coachingTips: [
    'Lead with fraud reduction - $10.5M annual savings is compelling and quantifiable',
    'Emphasize real-time processing enables modern card features and customer experience',
    'Address migration risk early with phased approach and parallel run capability',
    'Build strong TCO case - IBM is lower cost than cloud over 5 years despite higher initial cost',
    'CIO and Chief Digital Officer are champions - focus on real-time processing and innovation',
    'Chief Risk Officer is concerned about false positives - emphasize Watson AI accuracy and graduated response',
    'CFO requires strong ROI - show 24-month payback and 380% three-year ROI',
    'Differentiate from cloud with performance, security, and TCO advantages',
    'Differentiate from legacy mainframe with real-time processing and modern features',
    'Emphasize IBM track record: 200+ card processing migrations, 50+ Watson AI fraud deployments'
  ]
};


// Export all banking scenarios
export const allBankingScenarios = [
  bankingScenario002,
  bankingScenario003,
  bankingScenario004,
  bankingScenario005,
  bankingScenario006,
  bankingScenario007,
  bankingScenario008,
  bankingScenario009,
  bankingScenario010,
  bankingScenario011,
  bankingScenario012,
  bankingScenario013
];
