import { Scenario } from '../../types/scenarios';

/**
 * Banking Scenario 3: Core Banking System Modernization
 * 
 * Industry: Financial Services
 * Difficulty: Advanced
 * Focus: Legacy system modernization, hybrid cloud architecture
 * 
 * Customer Profile:
 * - Regional bank with 150 branches
 * - 2M+ customers
 * - Running 30-year-old mainframe core banking system
 * - Struggling with digital transformation initiatives
 * - High operational costs and limited agility
 */

export const bankingCoreModernizationScenario: Scenario = {
  id: 'banking-core-modernization',
  title: 'Core Banking System Modernization',
  industry: 'Financial Services',
  difficulty: 'Advanced',
  estimatedTime: 25,
  description: 'A regional bank needs to modernize their legacy core banking system while maintaining 24/7 operations and regulatory compliance.',
  
  customerProfile: {
    companyName: 'First Regional Bank',
    industry: 'Financial Services',
    size: '2,000 employees',
    revenue: '$850M annually',
    geography: 'Multi-state (US)',
    techStack: [
      'IBM z/OS mainframe (30+ years old)',
      'COBOL applications',
      'Batch processing overnight',
      'Limited API capabilities',
      'Siloed data systems'
    ],
    businessContext: 'Regional bank facing competitive pressure from digital-first banks and fintechs. Current core banking system limits ability to launch new products, integrate with modern channels, and provide real-time services. Board has mandated digital transformation while maintaining operational stability.'
  },

  challengeStatement: 'First Regional Bank\'s 30-year-old mainframe core banking system is becoming a competitive liability. The system processes 500K+ transactions daily but lacks modern API capabilities, making it difficult to support mobile banking, real-time payments, and open banking initiatives. The bank needs to modernize without disrupting 24/7 operations or risking regulatory compliance. How would you approach this transformation?',

  discoveryPhase: {
    description: 'Understand the bank\'s current architecture, business drivers, and modernization constraints.',
    questions: [
      {
        id: 'q1',
        question: 'What are the primary business drivers for modernizing your core banking system?',
        expectedKeyPoints: [
          'Digital transformation and customer experience',
          'Competitive pressure from fintechs',
          'Cost reduction and operational efficiency',
          'Regulatory compliance and reporting',
          'New product time-to-market',
          'Real-time processing capabilities',
          'Open banking and API economy'
        ],
        hints: [
          'Consider both competitive and regulatory pressures',
          'Think about customer expectations in digital banking',
          'Ask about new product launch timelines'
        ],
        weight: 0.15
      },
      {
        id: 'q2',
        question: 'What are your biggest concerns about modernizing a mission-critical system that runs 24/7?',
        expectedKeyPoints: [
          'Zero downtime requirement',
          'Data integrity and consistency',
          'Regulatory compliance during transition',
          'Staff training and change management',
          'Risk of transaction failures',
          'Customer impact and communication',
          'Rollback capabilities'
        ],
        hints: [
          'Focus on operational risk and business continuity',
          'Consider regulatory and audit requirements',
          'Think about the human element of change'
        ],
        weight: 0.15
      },
      {
        id: 'q3',
        question: 'Can you describe your current mainframe workload characteristics and performance requirements?',
        expectedKeyPoints: [
          'Transaction volumes and patterns',
          'Peak processing times',
          'Batch window requirements',
          'Response time SLAs',
          'Data volumes and growth',
          'Integration points',
          'Disaster recovery requirements'
        ],
        hints: [
          'Ask about daily, monthly, and annual transaction volumes',
          'Understand peak load scenarios',
          'Inquire about current performance bottlenecks'
        ],
        weight: 0.12
      },
      {
        id: 'q4',
        question: 'What is your current IT team\'s skill set, and what are your concerns about skills transition?',
        expectedKeyPoints: [
          'COBOL and mainframe expertise',
          'Modern development skills gap',
          'Retirement and succession planning',
          'Training budget and timeline',
          'Contractor vs. employee strategy',
          'DevOps and cloud capabilities',
          'Knowledge transfer processes'
        ],
        hints: [
          'Consider the aging mainframe workforce',
          'Ask about current hiring challenges',
          'Discuss training and upskilling programs'
        ],
        weight: 0.10
      },
      {
        id: 'q5',
        question: 'What is your strategy for data migration and how do you plan to maintain data integrity?',
        expectedKeyPoints: [
          'Data volume and complexity',
          'Data quality and cleansing',
          'Migration approach (big bang vs. phased)',
          'Dual-run period requirements',
          'Reconciliation processes',
          'Historical data retention',
          'Regulatory data requirements'
        ],
        hints: [
          'Discuss data quality challenges',
          'Ask about data governance policies',
          'Consider regulatory retention requirements'
        ],
        weight: 0.12
      },
      {
        id: 'q6',
        question: 'How do you envision your future architecture - cloud, hybrid, or on-premises?',
        expectedKeyPoints: [
          'Cloud strategy and readiness',
          'Regulatory constraints on cloud',
          'Data residency requirements',
          'Hybrid cloud considerations',
          'Disaster recovery and backup',
          'Cost optimization goals',
          'Scalability requirements'
        ],
        hints: [
          'Explore regulatory and compliance constraints',
          'Discuss cost vs. flexibility tradeoffs',
          'Consider disaster recovery requirements'
        ],
        weight: 0.12
      },
      {
        id: 'q7',
        question: 'What are your integration requirements with existing systems and external partners?',
        expectedKeyPoints: [
          'Payment networks and processors',
          'Credit bureaus and data providers',
          'Branch and ATM systems',
          'Mobile and online banking',
          'Third-party fintech integrations',
          'Regulatory reporting systems',
          'API management needs'
        ],
        hints: [
          'Map out the entire ecosystem',
          'Consider real-time vs. batch integrations',
          'Discuss API strategy and standards'
        ],
        weight: 0.12
      },
      {
        id: 'q8',
        question: 'What is your timeline and budget for this modernization initiative?',
        expectedKeyPoints: [
          'Board and executive expectations',
          'Phased approach timeline',
          'Budget constraints and approval',
          'ROI expectations',
          'Quick wins vs. long-term goals',
          'Resource availability',
          'Risk tolerance'
        ],
        hints: [
          'Understand executive pressure and expectations',
          'Discuss phased approach benefits',
          'Consider quick wins to build momentum'
        ],
        weight: 0.12
      }
    ]
  },

  objectionPhase: {
    description: 'Address concerns about modernization approach, risk, and IBM\'s capabilities.',
    objections: [
      {
        id: 'obj1',
        objection: 'We\'ve heard horror stories about core banking modernization projects that failed or went massively over budget. How can we be confident this won\'t happen to us?',
        category: 'risk',
        difficulty: 'hard',
        expectedResponse: [
          'Acknowledge the real risks and industry challenges',
          'Highlight IBM\'s proven methodology and experience',
          'Discuss phased approach to minimize risk',
          'Reference successful customer case studies',
          'Explain risk mitigation strategies',
          'Offer proof of concept or pilot approach',
          'Discuss governance and project management'
        ],
        hints: [
          'Don\'t minimize the risks - address them directly',
          'Share specific success stories from similar banks',
          'Emphasize IBM\'s 50+ years of banking experience'
        ],
        weight: 0.25
      },
      {
        id: 'obj2',
        objection: 'Our mainframe runs perfectly fine and has been reliable for 30 years. Why should we take on the risk and cost of modernization now?',
        category: 'value',
        difficulty: 'medium',
        expectedResponse: [
          'Acknowledge the mainframe\'s reliability',
          'Discuss the cost of inaction and competitive risk',
          'Highlight limitations for digital innovation',
          'Explain the skills and support challenges ahead',
          'Show the business value of modernization',
          'Discuss hybrid approach that preserves investments',
          'Present ROI and cost-benefit analysis'
        ],
        hints: [
          'Focus on business outcomes, not just technology',
          'Discuss the competitive landscape and fintech threat',
          'Highlight the aging workforce and skills gap'
        ],
        weight: 0.20
      },
      {
        id: 'obj3',
        objection: 'We\'re concerned about moving sensitive financial data to the cloud. How do you address our security and regulatory compliance concerns?',
        category: 'technical',
        difficulty: 'hard',
        expectedResponse: [
          'Explain IBM\'s financial services cloud compliance',
          'Discuss data encryption and security controls',
          'Highlight regulatory certifications',
          'Explain hybrid cloud options for sensitive data',
          'Discuss data residency and sovereignty',
          'Reference other banks using IBM cloud',
          'Offer security assessment and audit support'
        ],
        hints: [
          'Address specific regulations (PCI-DSS, SOC 2, etc.)',
          'Discuss IBM\'s financial services cloud expertise',
          'Explain the shared responsibility model'
        ],
        weight: 0.20
      },
      {
        id: 'obj4',
        objection: 'Our IT team is already stretched thin. We don\'t have the resources or skills to take on a major modernization project.',
        category: 'resources',
        difficulty: 'medium',
        expectedResponse: [
          'Acknowledge resource constraints',
          'Discuss IBM\'s managed services and support',
          'Explain training and knowledge transfer programs',
          'Highlight automation and DevOps benefits',
          'Discuss phased approach to spread workload',
          'Offer staff augmentation options',
          'Show how modernization reduces long-term burden'
        ],
        hints: [
          'Position IBM as a partner, not just a vendor',
          'Discuss the long-term efficiency gains',
          'Highlight IBM\'s training and certification programs'
        ],
        weight: 0.15
      },
      {
        id: 'obj5',
        objection: 'We\'ve invested millions in our current system. How do we justify throwing that away and starting over?',
        category: 'value',
        difficulty: 'medium',
        expectedResponse: [
          'Reframe as evolution, not replacement',
          'Discuss hybrid modernization approach',
          'Explain how to preserve valuable investments',
          'Highlight strangler pattern and incremental migration',
          'Show how to leverage existing COBOL assets',
          'Discuss the cost of maintaining legacy systems',
          'Present TCO analysis over 5-10 years'
        ],
        hints: [
          'Emphasize preserving what works',
          'Discuss incremental modernization strategies',
          'Show the hidden costs of legacy maintenance'
        ],
        weight: 0.20
      }
    ]
  },

  recommendationPhase: {
    description: 'Recommend IBM solutions for core banking modernization.',
    suggestedProducts: [
      'power-systems-e1080',
      'storage-flashsystem-9500',
      'watsonx-ai'
    ],
    idealProducts: ['power-systems-e1080'],
    requiredCapabilities: [
      'High-performance transaction processing',
      'Hybrid cloud architecture',
      'Data migration and integration',
      'Security and compliance',
      'DevOps and automation',
      'AI-powered insights'
    ],
    evaluationCriteria: {
      technicalFit: 0.30,
      businessValue: 0.25,
      riskMitigation: 0.25,
      costEffectiveness: 0.20
    }
  },

  successCriteria: {
    minimumScore: 70,
    timeLimit: 1800, // 30 minutes
    requiredTopics: [
      'Hybrid modernization approach',
      'Zero downtime migration',
      'Data integrity and compliance',
      'Skills transition and training',
      'Risk mitigation strategies',
      'Business value and ROI'
    ]
  },

  learningObjectives: [
    'Understand core banking modernization challenges',
    'Navigate complex legacy system transformation',
    'Address risk and compliance concerns',
    'Position hybrid cloud architecture',
    'Articulate business value of modernization',
    'Handle objections about cost and risk'
  ],

  tags: [
    'banking',
    'financial-services',
    'legacy-modernization',
    'mainframe',
    'hybrid-cloud',
    'core-banking',
    'digital-transformation',
    'advanced'
  ],

  metadata: {
    createdAt: '2026-07-16',
    version: '1.0',
    author: 'IBM Tech Sales Training',
    lastUpdated: '2026-07-16'
  }
};

export default bankingCoreModernizationScenario;

// Made with Bob
