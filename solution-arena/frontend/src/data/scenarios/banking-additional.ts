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
        // Multiple choice options
        choices: [
          { id: 'q1-a', text: 'What is your annual customer attrition rate and how much has it increased?', isCorrect: true, points: 4, feedback: 'Excellent - quantifying attrition establishes urgency and business impact' },
          { id: 'q1-b', text: 'What is your mobile app rating and what specific complaints are customers making?', isCorrect: true, points: 3, feedback: 'Great question - app rating is public reputation and reveals specific pain points' },
          { id: 'q1-c', text: 'Which competitors are winning your customers and what advantages do they have?', isCorrect: true, points: 3, feedback: 'Important - understanding competitive threats helps position IBM solution' },
          { id: 'q1-d', text: 'How has the board or executive team responded to customer losses?', isCorrect: true, points: 3, feedback: 'Good - executive pressure creates urgency and budget availability' },
          { id: 'q1-e', text: 'What color scheme does your current mobile app use?', isCorrect: false, points: 0, feedback: 'Irrelevant - focus on business drivers and customer impact' },
          { id: 'q1-f', text: 'How many developers work on your mobile app team?', isCorrect: false, points: 0, feedback: 'Too tactical - focus on business pain and competitive pressure first' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q2-a', text: 'What critical features are missing - mobile check deposit, P2P payments, budgeting tools?', isCorrect: true, points: 4, feedback: 'Excellent - identifying specific feature gaps shows competitive disadvantages' },
          { id: 'q2-b', text: 'How does your mobile user experience compare to competitors in terms of clicks and ease?', isCorrect: true, points: 3, feedback: 'Great question - UX friction drives customers to competitors' },
          { id: 'q2-c', text: 'Do you have open banking APIs to integrate with fintechs and third-party services?', isCorrect: true, points: 3, feedback: 'Important - open banking is strategic for partnerships and revenue' },
          { id: 'q2-d', text: 'How long does it take to launch new digital features with your current platform?', isCorrect: true, points: 3, feedback: 'Good - agility is competitive advantage in digital banking' },
          { id: 'q2-e', text: 'What programming language is your mobile app written in?', isCorrect: false, points: 0, feedback: 'Too technical - focus on feature gaps and business impact' },
          { id: 'q2-f', text: 'How many screens does your mobile app have?', isCorrect: false, points: 0, feedback: 'Irrelevant metric - focus on missing features and UX problems' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q3-a', text: 'What is your current app store rating on iOS and Android?', isCorrect: true, points: 4, feedback: 'Critical - app rating is public reputation visible to all prospects' },
          { id: 'q3-b', text: 'What specific complaints are customers making in app reviews?', isCorrect: true, points: 3, feedback: 'Excellent - customer feedback reveals specific pain points to address' },
          { id: 'q3-c', text: 'How is the poor rating impacting new customer acquisition and account openings?', isCorrect: true, points: 3, feedback: 'Important - quantifies business impact of reputation damage' },
          { id: 'q3-d', text: 'What percentage of your customers use mobile as their primary banking channel?', isCorrect: true, points: 3, feedback: 'Good - shows importance of mobile experience to customer base' },
          { id: 'q3-e', text: 'What version of iOS and Android do you support?', isCorrect: false, points: 0, feedback: 'Too technical - focus on rating impact and customer sentiment' },
          { id: 'q3-f', text: 'How many times has your app been downloaded?', isCorrect: false, points: 0, feedback: 'Not relevant - focus on rating and reputation impact' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q4-a', text: 'What percentage of your current customer base is under 35 years old?', isCorrect: true, points: 4, feedback: 'Critical - reveals demographic risk and long-term growth challenge' },
          { id: 'q4-b', text: 'What features and experiences do younger customers expect from digital banking?', isCorrect: true, points: 3, feedback: 'Excellent - understanding expectations helps design solution' },
          { id: 'q4-c', text: 'How are competitors successfully attracting younger customers?', isCorrect: true, points: 3, feedback: 'Important - competitive intelligence shows what works' },
          { id: 'q4-d', text: 'What is your target demographic mix for sustainable long-term growth?', isCorrect: true, points: 3, feedback: 'Good - establishes goals and success metrics' },
          { id: 'q4-e', text: 'What is the average age of your branch managers?', isCorrect: false, points: 0, feedback: 'Not relevant - focus on customer demographics, not staff' },
          { id: 'q4-f', text: 'Do you offer student checking accounts?', isCorrect: false, points: 0, feedback: 'Too specific - focus on broader demographic strategy' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q5-a', text: 'Do you need open banking APIs to enable fintech partnerships and integrations?', isCorrect: true, points: 4, feedback: 'Critical - open banking is strategic for ecosystem and revenue growth' },
          { id: 'q5-b', text: 'What types of fintech services do customers want to integrate (budgeting, investing, payments)?', isCorrect: true, points: 3, feedback: 'Excellent - understanding use cases helps design API strategy' },
          { id: 'q5-c', text: 'What revenue opportunities exist from fintech partnerships and API monetization?', isCorrect: true, points: 3, feedback: 'Important - quantifies business value of open banking' },
          { id: 'q5-d', text: 'Do you have API management and developer portal capabilities today?', isCorrect: true, points: 3, feedback: 'Good - identifies technical gaps in API infrastructure' },
          { id: 'q5-e', text: 'What API protocol do you prefer - REST or SOAP?', isCorrect: false, points: 0, feedback: 'Too technical - focus on business strategy and use cases first' },
          { id: 'q5-f', text: 'How many API calls per second can your system handle?', isCorrect: false, points: 0, feedback: 'Premature detail - focus on strategic goals and partnerships' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q6-a', text: 'What is your annual maintenance cost for the current digital banking platform?', isCorrect: true, points: 4, feedback: 'Excellent - quantifying costs establishes ROI opportunity' },
          { id: 'q6-b', text: 'How long does it take to launch new digital features from concept to production?', isCorrect: true, points: 3, feedback: 'Critical - time-to-market is competitive advantage in digital banking' },
          { id: 'q6-c', text: 'What is your target time-to-market for new features with a modern platform?', isCorrect: true, points: 3, feedback: 'Important - establishes goals and success criteria' },
          { id: 'q6-d', text: 'What features are in your backlog waiting to be developed?', isCorrect: true, points: 3, feedback: 'Good - shows pent-up demand and opportunity cost of slow delivery' },
          { id: 'q6-e', text: 'What version control system do you use for code?', isCorrect: false, points: 0, feedback: 'Too technical - focus on costs and time-to-market impact' },
          { id: 'q6-f', text: 'How many servers run your digital banking platform?', isCorrect: false, points: 0, feedback: 'Not relevant - focus on operational costs and agility problems' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q7-a', text: 'What budget has been allocated for digital banking transformation?', isCorrect: true, points: 4, feedback: 'Critical - qualifies opportunity and ensures adequate funding' },
          { id: 'q7-b', text: 'What is your timeline for selecting and implementing a new platform?', isCorrect: true, points: 3, feedback: 'Important - helps align IBM sales cycle and implementation plan' },
          { id: 'q7-c', text: 'Who are the key decision makers and what approval process is required?', isCorrect: true, points: 3, feedback: 'Essential - identifies stakeholders and decision authority' },
          { id: 'q7-d', text: 'What ROI or payback period does the CFO require to approve?', isCorrect: true, points: 3, feedback: 'Good - understanding ROI requirements helps build business case' },
          { id: 'q7-e', text: 'What is your fiscal year end date?', isCorrect: false, points: 0, feedback: 'Not relevant to qualifying opportunity - focus on budget and timeline' },
          { id: 'q7-f', text: 'How many vendors are you evaluating?', isCorrect: false, points: 0, feedback: 'Too detailed - focus on decision makers and approval process' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        choices: [
          { id: 'q8-a', text: 'What are your biggest concerns about customer disruption during migration?', isCorrect: true, points: 4, feedback: 'Critical - understanding concerns helps design migration strategy' },
          { id: 'q8-b', text: 'Do you prefer a phased rollout or big-bang migration approach?', isCorrect: true, points: 3, feedback: 'Excellent - phased approach reduces risk and proves value incrementally' },
          { id: 'q8-c', text: 'What customer communication and training will be needed for adoption?', isCorrect: true, points: 3, feedback: 'Important - communication is key to successful customer migration' },
          { id: 'q8-d', text: 'What support resources will customers need during and after migration?', isCorrect: true, points: 3, feedback: 'Good - planning support ensures smooth transition and adoption' },
          { id: 'q8-e', text: 'What day of the week should we migrate?', isCorrect: false, points: 0, feedback: 'Premature detail - focus on strategy and concerns first' },
          { id: 'q8-f', text: 'How many customer service reps do you have?', isCorrect: false, points: 0, feedback: 'Not relevant - focus on migration strategy and customer experience' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
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
        // Multiple choice options
        responseChoices: [
          { id: 'obj1-a', text: 'Quantify time and cost of custom development - typically 3-5 years and $10M+ vs. 9-12 months and $2-3M for IBM', isCorrect: true, points: 4, feedback: 'Excellent - dramatic cost and time difference makes buy vs. build clear' },
          { id: 'obj1-b', text: 'Highlight opportunity cost - losing 8% of customers annually while building for 3-5 years', isCorrect: true, points: 3, feedback: 'Great - quantifies business impact of delay' },
          { id: 'obj1-c', text: 'Emphasize IBM platform is proven with 200+ banks and includes continuous updates', isCorrect: true, points: 3, feedback: 'Important - reduces risk with proven solution and ongoing innovation' },
          { id: 'obj1-d', text: 'Position focus on differentiation and customers, not reinventing banking infrastructure', isCorrect: true, points: 3, feedback: 'Good - strategic positioning of where to invest resources' },
          { id: 'obj1-e', text: 'Agree that custom development gives more control and suggest they build it themselves', isCorrect: false, points: 0, feedback: 'Terrible - gives up and doesn\'t address their real needs' },
          { id: 'obj1-f', text: 'Criticize their development team\'s ability to build a modern platform', isCorrect: false, points: 0, feedback: 'Wrong approach - insulting their team damages relationship' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        // Multiple choice options
        responseChoices: [
          { id: 'obj2-a', text: 'Use customer feedback as proof of demand - 2.5 star rating and 8% attrition show desperation for better experience', isCorrect: true, points: 4, feedback: 'Excellent - customers are already voting with their feet' },
          { id: 'obj2-b', text: 'Provide industry adoption statistics - banks typically see 80%+ adoption within 6 months', isCorrect: true, points: 3, feedback: 'Great - industry data reduces perceived risk' },
          { id: 'obj2-c', text: 'Propose phased rollout starting with early adopters to prove value before full deployment', isCorrect: true, points: 3, feedback: 'Important - de-risks adoption with incremental approach' },
          { id: 'obj2-d', text: 'Offer adoption guarantees and metrics in the contract to share risk', isCorrect: true, points: 3, feedback: 'Good - shows IBM confidence and shares risk' },
          { id: 'obj2-e', text: 'Admit that adoption is uncertain and they should accept the risk', isCorrect: false, points: 0, feedback: 'Weak response - doesn\'t address concern or reduce risk' },
          { id: 'obj2-f', text: 'Suggest they force customers to use the new platform by shutting down the old one', isCorrect: false, points: 0, feedback: 'Terrible approach - would drive more customers away' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        // Multiple choice options
        responseChoices: [
          { id: 'obj3-a', text: 'Explain IBM provides full implementation services - we handle deployment, integration, and migration heavy lifting', isCorrect: true, points: 4, feedback: 'Excellent - directly addresses resource constraint concern' },
          { id: 'obj3-b', text: 'Highlight cloud platform is self-managing - IBM handles infrastructure, patches, and updates', isCorrect: true, points: 3, feedback: 'Great - shows reduced long-term operational burden' },
          { id: 'obj3-c', text: 'Quantify cost reduction - maintenance drops from $500K to $200K annually', isCorrect: true, points: 3, feedback: 'Important - demonstrates financial benefit of reduced burden' },
          { id: 'obj3-d', text: 'Mention training provided so team can support platform after implementation', isCorrect: true, points: 3, feedback: 'Good - shows knowledge transfer and enablement' },
          { id: 'obj3-e', text: 'Agree their team is too busy and suggest they hire more staff first', isCorrect: false, points: 0, feedback: 'Wrong - creates barrier instead of showing how IBM helps' },
          { id: 'obj3-f', text: 'Suggest they outsource all IT operations to IBM permanently', isCorrect: false, points: 0, feedback: 'Too extreme - doesn\'t address their specific concern' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        // Multiple choice options
        responseChoices: [
          { id: 'obj4-a', text: 'Highlight IBM has extensive Jack Henry experience with pre-built connectors and integration patterns', isCorrect: true, points: 4, feedback: 'Excellent - directly addresses integration concern with proven solution' },
          { id: 'obj4-b', text: 'Explain integration approach using Jack Henry APIs for real-time account data and transactions', isCorrect: true, points: 3, feedback: 'Great - shows technical understanding and approach' },
          { id: 'obj4-c', text: 'Provide timeline - integration typically takes 6-8 weeks as part of standard implementation', isCorrect: true, points: 3, feedback: 'Important - sets expectations and shows it\'s manageable' },
          { id: 'obj4-d', text: 'Offer reference customers - many Jack Henry banks successfully deployed IBM platform', isCorrect: true, points: 3, feedback: 'Good - social proof from similar banks builds confidence' },
          { id: 'obj4-e', text: 'Admit Jack Henry integration is very complex and may take 6-12 months', isCorrect: false, points: 0, feedback: 'Wrong - reinforces concern instead of addressing it' },
          { id: 'obj4-f', text: 'Suggest they replace Jack Henry with a more modern core banking system', isCorrect: false, points: 0, feedback: 'Terrible - creates massive new problem instead of solving integration' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        // Multiple choice options
        responseChoices: [
          { id: 'obj5-a', text: 'Highlight IBM\'s 50+ year banking history and digital banking as strategic growth area with 200+ banks', isCorrect: true, points: 4, feedback: 'Excellent - demonstrates long-term commitment and strategic importance' },
          { id: 'obj5-b', text: 'Emphasize IBM\'s financial stability as $60B company - not going anywhere', isCorrect: true, points: 3, feedback: 'Great - addresses acquisition/discontinuation concern directly' },
          { id: 'obj5-c', text: 'Explain platform built on open standards and APIs - data and integrations are portable, not locked in', isCorrect: true, points: 3, feedback: 'Important - shows exit strategy exists if ever needed' },
          { id: 'obj5-d', text: 'Offer long-term support commitments in contract - typically 10+ years with guaranteed updates', isCorrect: true, points: 3, feedback: 'Good - provides contractual protection and assurance' },
          { id: 'obj5-e', text: 'Admit that IBM could discontinue the platform but it\'s unlikely', isCorrect: false, points: 0, feedback: 'Weak response - doesn\'t adequately address the concern' },
          { id: 'obj5-f', text: 'Suggest they build custom platform to avoid vendor risk entirely', isCorrect: false, points: 0, feedback: 'Terrible - contradicts IBM solution and creates bigger problems' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing business customers who need instant payments for supply chain and payroll, missing $2M annually in payment processing revenue, FedNow launched and board mandated implementation within 18 months', isCorrect: true, points: 4, feedback: 'Excellent! You identified the quantified revenue loss ($2M), specific customer segments (business/supply chain), regulatory driver (FedNow), and board mandate with timeline. This demonstrates strong business impact understanding.' },
          { id: 'q1-b', text: 'Business customers demanding instant payments for supply chain, losing market share to competitors with real-time capabilities, FedNow compliance required', isCorrect: true, points: 3, feedback: 'Good discovery! You captured customer demand, competitive pressure, and regulatory requirement. Adding quantified revenue loss would strengthen the business case.' },
          { id: 'q1-c', text: 'Customers frustrated with 24-48 hour ACH delays, competitors marketing real-time payments as differentiator, need to support FedNow', isCorrect: true, points: 3, feedback: 'Solid response identifying customer pain, competitive threat, and regulatory driver. Quantifying the revenue impact would make this stronger.' },
          { id: 'q1-d', text: 'Falling behind larger banks and fintechs who have instant payments, losing business customers, board wants real-time capability', isCorrect: true, points: 3, feedback: 'Good identification of competitive disadvantage and customer attrition. Adding specific revenue loss and FedNow timeline would enhance this.' },
          { id: 'q1-e', text: 'Some customers asking about instant payments, considering it for future roadmap', isCorrect: false, points: 0, feedback: 'Too vague and lacks urgency. You missed the quantified revenue loss ($2M), customer attrition, FedNow mandate, and board timeline. This doesn\'t establish business urgency.' },
          { id: 'q1-f', text: 'Want to modernize payment systems and stay current with technology trends', isCorrect: false, points: 0, feedback: 'This is technology-focused without business justification. You missed the revenue loss, customer attrition, competitive pressure, and FedNow regulatory driver that create urgency.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Process 2M ACH transactions monthly and 50K wires monthly, need to support 10K real-time payments daily initially growing to 100K daily, require <1 second processing with 99.99% availability and 24/7 operation', isCorrect: true, points: 4, feedback: 'Outstanding! You captured current volumes (2M ACH, 50K wires), growth trajectory (10K to 100K daily), performance requirement (<1 sec), and availability target (99.99%). This provides complete technical context.' },
          { id: 'q2-b', text: 'High transaction volumes with 2M monthly ACH, need sub-second processing for real-time payments, require 99.99% availability with no downtime', isCorrect: true, points: 3, feedback: 'Good technical discovery! You identified current scale, performance requirement, and availability target. Adding the growth projection (10K to 100K daily) would complete the picture.' },
          { id: 'q2-c', text: 'Processing millions of transactions monthly, need instant payment processing in under 1 second, must have 24/7 availability', isCorrect: true, points: 3, feedback: 'Solid response capturing scale, performance requirement, and availability need. Specific volume numbers and growth trajectory would strengthen this.' },
          { id: 'q2-d', text: 'Large payment volumes requiring high-performance infrastructure, need real-time processing with very high availability', isCorrect: true, points: 3, feedback: 'Good identification of scale and requirements. Adding specific metrics (2M ACH, <1 sec, 99.99%) would make this more actionable.' },
          { id: 'q2-e', text: 'Moderate transaction volumes, need good performance and reliability for payments', isCorrect: false, points: 0, feedback: 'Too vague for technical requirements. You missed specific volumes (2M ACH, 50K wires), performance target (<1 sec), availability requirement (99.99%), and growth projection.' },
          { id: 'q2-f', text: 'Standard banking transaction volumes, want fast processing', isCorrect: false, points: 0, feedback: 'This lacks all technical specifics needed for solution design. You missed volumes, performance requirements, availability targets, and growth trajectory.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Current fraud detection is batch-based and won\'t work for instant payments, concerned about fraud risk because real-time payments are irrevocable, need real-time fraud scoring in milliseconds, also need AML/BSA compliance for instant payments', isCorrect: true, points: 4, feedback: 'Excellent! You identified the current limitation (batch-based), the critical risk (irrevocable payments), the technical requirement (millisecond fraud scoring), and regulatory compliance (AML/BSA). This shows strong risk awareness.' },
          { id: 'q3-b', text: 'Fraud detection is major concern because instant payments cannot be reversed, need real-time AI/ML fraud scoring, must maintain AML compliance', isCorrect: true, points: 3, feedback: 'Good risk discovery! You captured the irrevocability concern, need for real-time AI/ML, and compliance requirement. Mentioning current batch limitations would strengthen this.' },
          { id: 'q3-c', text: 'Worried about fraud losses with instant payments since they\'re irrevocable, current fraud tools are too slow, need millisecond fraud detection', isCorrect: true, points: 3, feedback: 'Solid response identifying fraud risk, current tool limitations, and performance requirement. Adding AML/BSA compliance would complete the picture.' },
          { id: 'q3-d', text: 'Fraud risk is critical concern for real-time payments, need advanced fraud detection before payment is sent, require compliance with banking regulations', isCorrect: true, points: 3, feedback: 'Good identification of fraud risk and prevention timing. Adding specific requirements (millisecond scoring, AI/ML, AML/BSA) would enhance this.' },
          { id: 'q3-e', text: 'Have standard fraud detection tools, will monitor for fraud issues', isCorrect: false, points: 0, feedback: 'This underestimates the fraud risk. You missed that instant payments are irrevocable, batch fraud detection won\'t work, millisecond scoring is required, and AML/BSA compliance is mandatory.' },
          { id: 'q3-f', text: 'Fraud is always a concern in banking, will implement appropriate controls', isCorrect: false, points: 0, feedback: 'Too generic for instant payment fraud risk. You missed the irrevocability issue, need for real-time AI/ML scoring, millisecond performance requirement, and AML/BSA compliance.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Business customers need instant payments for supply chain (pay suppliers immediately), instant payroll for gig workers, and B2B payments, also need P2P for consumer customers to compete with Zelle, these are high-value customers and losing them hurts', isCorrect: true, points: 4, feedback: 'Outstanding! You identified multiple high-value use cases (supply chain, instant payroll, B2B, P2P), competitive context (Zelle), and customer value impact. This demonstrates strong business understanding.' },
          { id: 'q4-b', text: 'Business customers need instant supply chain payments and instant payroll for gig economy, consumer customers want P2P to compete with Zelle and Venmo', isCorrect: true, points: 3, feedback: 'Good use case discovery! You captured key business use cases and consumer P2P need. Emphasizing the high customer value and attrition risk would strengthen this.' },
          { id: 'q4-c', text: 'Multiple use cases including B2B payments, instant payroll, and consumer P2P payments, business customers are high-value segment', isCorrect: true, points: 3, feedback: 'Solid response identifying diverse use cases and customer value. Adding specific examples (supply chain, gig workers, Zelle competition) would enhance this.' },
          { id: 'q4-d', text: 'Business customers demanding instant payments for operations, consumers want P2P like competitors offer, losing customers without these capabilities', isCorrect: true, points: 3, feedback: 'Good identification of business and consumer needs plus attrition risk. Specific use cases (supply chain, payroll, gig economy) would make this stronger.' },
          { id: 'q4-e', text: 'Various customers asking about faster payments, general interest in instant payment capabilities', isCorrect: false, points: 0, feedback: 'Too vague for use case discovery. You missed specific high-value use cases (supply chain, instant payroll, gig economy, B2B), P2P competition with Zelle, and customer attrition risk.' },
          { id: 'q4-f', text: 'Want to offer modern payment options to stay competitive', isCorrect: false, points: 0, feedback: 'This lacks specific use cases and customer segments. You missed supply chain payments, instant payroll, gig economy, B2B, P2P competition, and the high-value customer attrition risk.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: '25 x86 servers with aging HPE storage, infrastructure is 6-8 years old and approaching end-of-life in 12-18 months, cannot handle real-time processing volumes, need high-performance infrastructure for instant payments', isCorrect: true, points: 4, feedback: 'Excellent! You identified the current infrastructure (25 x86, HPE storage), age (6-8 years), end-of-life timing (12-18 months), performance limitation, and need for high-performance. This reveals a perfect infrastructure refresh opportunity.' },
          { id: 'q5-b', text: 'Aging infrastructure approaching end-of-life in 12-18 months, cannot support real-time payment volumes, need infrastructure refresh anyway', isCorrect: true, points: 3, feedback: 'Good discovery! You captured the end-of-life timing, performance limitation, and refresh need. Adding specific infrastructure details (25 x86, HPE storage, 6-8 years) would strengthen this.' },
          { id: 'q5-c', text: 'Current infrastructure is 6-8 years old and inadequate for real-time payments, need high-performance systems for instant processing', isCorrect: true, points: 3, feedback: 'Solid response identifying infrastructure age and performance gap. Adding end-of-life timing and specific infrastructure details would enhance this.' },
          { id: 'q5-d', text: 'Infrastructure is old and needs refresh, cannot handle instant payment requirements, timing aligns with real-time payments project', isCorrect: true, points: 3, feedback: 'Good identification of refresh need and timing alignment. Specific details (age, end-of-life date, current infrastructure) would make this stronger.' },
          { id: 'q5-e', text: 'Infrastructure is adequate for now, will upgrade if needed', isCorrect: false, points: 0, feedback: 'This misses the critical infrastructure refresh opportunity. You missed that infrastructure is 6-8 years old, approaching end-of-life in 12-18 months, and cannot handle real-time payment volumes.' },
          { id: 'q5-f', text: 'Have standard x86 infrastructure, no immediate concerns', isCorrect: false, points: 0, feedback: 'This completely misses the infrastructure refresh opportunity and timing. You missed the age (6-8 years), end-of-life (12-18 months), performance limitations, and the opportunity to combine initiatives.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: '$4-6M budget approved, need solution in 12-18 months to meet FedNow timeline, board approval required, CIO is champion, CFO needs ROI case, CRO concerned about fraud risk', isCorrect: true, points: 4, feedback: 'Outstanding! You qualified the budget ($4-6M), timeline (12-18 months), approval process (board), and stakeholder positions (CIO champion, CFO needs ROI, CRO concerned about fraud). This provides complete qualification.' },
          { id: 'q6-b', text: 'Budget of $4-6M approved, 12-18 month timeline for FedNow compliance, board must approve, multiple stakeholders involved', isCorrect: true, points: 3, feedback: 'Good qualification! You captured budget, timeline, approval level, and stakeholder complexity. Adding specific stakeholder positions would strengthen this.' },
          { id: 'q6-c', text: 'Significant budget approved ($4-6M), aggressive timeline to meet FedNow, CIO is driving this, CFO and CRO must support', isCorrect: true, points: 3, feedback: 'Solid response identifying budget, timeline driver, and key stakeholders. Adding board approval requirement and specific stakeholder concerns would enhance this.' },
          { id: 'q6-d', text: 'Budget is approved for real-time payments, need to implement quickly, multiple executives must agree', isCorrect: true, points: 3, feedback: 'Good identification of budget approval, urgency, and stakeholder complexity. Specific budget amount, timeline, and stakeholder positions would make this stronger.' },
          { id: 'q6-e', text: 'Budget is being discussed, timeline is flexible, IT will decide', isCorrect: false, points: 0, feedback: 'This misses that budget is already approved ($4-6M) and timeline is fixed (12-18 months for FedNow). You also missed that board approval is required and multiple executives are involved.' },
          { id: 'q6-f', text: 'Will determine budget based on proposals, no specific timeline', isCorrect: false, points: 0, feedback: 'This completely misses the qualification. Budget is approved ($4-6M), timeline is mandated (12-18 months for FedNow), board approval is required, and you missed all stakeholder dynamics.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Looking at FIS, Fiserv, and ACI for real-time payments, key criteria are performance (<1 sec), fraud detection, FedNow/RTP support, reliability (99.99%), and TCO, open to best solution', isCorrect: true, points: 4, feedback: 'Excellent! You identified the competitors (FIS, Fiserv, ACI), all key criteria (performance, fraud detection, FedNow/RTP, reliability, TCO), and openness to best solution. This provides complete competitive context.' },
          { id: 'q7-b', text: 'Evaluating FIS, Fiserv, and ACI, key criteria are performance, fraud detection, and reliability, looking for best overall solution', isCorrect: true, points: 3, feedback: 'Good competitive discovery! You captured competitors and main criteria. Adding specific metrics (<1 sec, 99.99%, FedNow/RTP, TCO) would strengthen this.' },
          { id: 'q7-c', text: 'Considering several payment vendors, performance and fraud detection are critical, need FedNow support and high reliability', isCorrect: true, points: 3, feedback: 'Solid response identifying competitive situation and key criteria. Naming specific competitors and adding TCO consideration would enhance this.' },
          { id: 'q7-d', text: 'Multiple vendors being evaluated, looking at performance, reliability, and total cost, open to recommendations', isCorrect: true, points: 3, feedback: 'Good identification of competitive evaluation and criteria. Specific competitors and detailed criteria (fraud detection, FedNow, 99.99%) would make this stronger.' },
          { id: 'q7-e', text: 'Not sure who else we\'re considering, IT will evaluate options', isCorrect: false, points: 0, feedback: 'This shows lack of competitive awareness. You missed that they\'re evaluating FIS, Fiserv, and ACI, and you missed all evaluation criteria (performance, fraud detection, FedNow/RTP, reliability, TCO).' },
          { id: 'q7-f', text: 'Will look at various vendors, price is main consideration', isCorrect: false, points: 0, feedback: 'This oversimplifies the competitive situation. You missed specific competitors (FIS, Fiserv, ACI) and all key criteria beyond price (performance, fraud detection, FedNow/RTP, reliability).' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Need to integrate with Fiserv core, mobile app, online banking, and business banking portal, all channels must support instant payments, integration is complex and need proven approach and experience', isCorrect: true, points: 4, feedback: 'Excellent! You identified the core system (Fiserv), all channels (mobile, online, business portal), requirement for universal support, and need for proven integration experience. This shows strong integration awareness.' },
          { id: 'q8-b', text: 'Must integrate with Fiserv core banking and all customer channels including mobile and online banking, integration complexity is a concern, need experienced partner', isCorrect: true, points: 3, feedback: 'Good integration discovery! You captured the core system, channel requirements, and need for experience. Adding business banking portal and emphasizing proven approach would strengthen this.' },
          { id: 'q8-c', text: 'Integration with core banking system and multiple channels required, all channels need instant payment support, looking for proven integration patterns', isCorrect: true, points: 3, feedback: 'Solid response identifying integration scope and need for proven approach. Naming specific systems (Fiserv) and channels would enhance this.' },
          { id: 'q8-d', text: 'Need to connect with core banking and customer channels, integration is complex, want partner with integration experience', isCorrect: true, points: 3, feedback: 'Good identification of integration requirements and experience need. Specific systems (Fiserv) and channels (mobile, online, business) would make this stronger.' },
          { id: 'q8-e', text: 'Will integrate with core system, standard APIs should work', isCorrect: false, points: 0, feedback: 'This underestimates integration complexity. You missed that it\'s Fiserv core, must integrate with mobile, online, and business banking, all channels need support, and proven experience is critical.' },
          { id: 'q8-f', text: 'Integration is not a major concern, systems are modern', isCorrect: false, points: 0, feedback: 'This completely misses the integration challenge. You missed Fiserv core integration, multiple channel requirements (mobile, online, business), universal support need, and the complexity requiring proven experience.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        responseChoices: [
          { id: 'obj1-a', text: 'Acknowledge fraud risk is real and serious, explain Watson real-time fraud detection scores every payment in milliseconds using AI/ML analyzing hundreds of factors, banks achieve <0.01% fraud rates (lower than ACH), implement layered controls (limits, authentication, risk-based), emphasize prevention before payment not after, offer demo', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged the risk, explained Watson\'s millisecond AI/ML fraud detection, provided compelling statistics (<0.01%), described layered controls, emphasized prevention timing, and offered a demo. This addresses all concerns comprehensively.' },
          { id: 'obj1-b', text: 'Fraud risk is valid concern, Watson provides real-time AI/ML fraud detection in milliseconds, banks using Watson have very low fraud rates, implement multiple fraud controls, prevention before payment is critical', isCorrect: true, points: 3, feedback: 'Good response! You acknowledged the risk, explained Watson\'s real-time capability, and emphasized prevention. Adding specific fraud rate statistics (<0.01%) and offering a demo would strengthen this.' },
          { id: 'obj1-c', text: 'Real-time fraud detection is essential for instant payments, Watson AI/ML analyzes transaction patterns in milliseconds, implement transaction limits and authentication, focus on preventing fraud before payment', isCorrect: true, points: 3, feedback: 'Solid response covering real-time detection, AI/ML capability, and prevention focus. Acknowledging the risk concern and providing fraud rate statistics would enhance this.' },
          { id: 'obj1-d', text: 'Watson fraud detection works in real-time using AI/ML, banks have low fraud rates with instant payments, multiple fraud controls available, can demonstrate the solution', isCorrect: true, points: 3, feedback: 'Good coverage of Watson capability and controls. Acknowledging the risk, providing specific statistics (<0.01%), and emphasizing prevention timing would make this stronger.' },
          { id: 'obj1-e', text: 'We have fraud detection tools that should work fine for instant payments', isCorrect: false, points: 0, feedback: 'This dismisses a critical concern. You missed acknowledging the irrevocability risk, explaining Watson\'s millisecond AI/ML detection, providing fraud rate statistics, describing layered controls, and emphasizing prevention before payment.' },
          { id: 'obj1-f', text: 'Fraud is always a risk in banking, we\'ll implement standard controls', isCorrect: false, points: 0, feedback: 'Too generic for instant payment fraud risk. You missed the irrevocability concern, Watson\'s real-time AI/ML capability, fraud rate statistics (<0.01%), layered controls, prevention timing, and demo offer.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj2-a', text: 'Acknowledge 99.99% is required, Power Systems achieve 99.999% availability (5 minutes downtime per year), redundant everything (processors, memory, I/O, power), PowerVM live partition mobility for zero-downtime maintenance, FlashSystem dual controllers, offer availability guarantees with SLA penalties, provide reference architectures', isCorrect: true, points: 4, feedback: 'Excellent! You acknowledged the requirement, exceeded it with Power\'s 99.999% capability, explained comprehensive redundancy, highlighted zero-downtime features, offered contractual guarantees with penalties, and provided references. This fully addresses the concern.' },
          { id: 'obj2-b', text: 'Power Systems designed for 99.999% availability, redundant processors, memory, and I/O, PowerVM enables zero-downtime maintenance, FlashSystem has no single point of failure, can include availability guarantees in contract', isCorrect: true, points: 3, feedback: 'Good response! You explained Power\'s superior availability and redundancy features. Adding SLA penalties and reference architectures would strengthen this.' },
          { id: 'obj2-c', text: 'IBM Power Systems achieve better than 99.99% availability, comprehensive redundancy throughout the system, zero-downtime maintenance capabilities, disaster recovery with automated failover', isCorrect: true, points: 3, feedback: 'Solid response covering availability capability and key features. Adding specific availability metrics (99.999%), SLA guarantees, and references would enhance this.' },
          { id: 'obj2-d', text: 'Power Systems meet and exceed 99.99% requirement, redundant architecture, live partition mobility, dual controller storage, can provide availability guarantees', isCorrect: true, points: 3, feedback: 'Good coverage of capability and features. Adding specific metrics (99.999%, 5 minutes/year), SLA penalties, and reference architectures would make this stronger.' },
          { id: 'obj2-e', text: 'Our systems are highly reliable and should meet your availability needs', isCorrect: false, points: 0, feedback: 'Too vague for a critical requirement. You missed Power\'s 99.999% capability, comprehensive redundancy, PowerVM zero-downtime features, FlashSystem dual controllers, SLA guarantees with penalties, and reference architectures.' },
          { id: 'obj2-f', text: 'We have good uptime with our infrastructure, availability shouldn\'t be a problem', isCorrect: false, points: 0, feedback: 'This doesn\'t address the specific requirement. You missed Power\'s 99.999% capability, redundancy details, zero-downtime maintenance, contractual guarantees, and the opportunity to exceed their expectations.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj3-a', text: 'Acknowledge investment size, quantify current losses ($2M revenue + $50M deposits = $2.5M+ annually), calculate new revenue ($3M+ annually), show 12-month payback, calculate 5-year ROI (5:1 = $25M benefits vs $5M investment), emphasize cost of doing nothing (continued losses), offer detailed ROI model', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged the investment, quantified all losses and gains, showed clear payback and ROI, emphasized the cost of inaction, and offered detailed analysis. This provides a complete business case.' },
          { id: 'obj3-b', text: 'Current losses are $2M+ annually in revenue and customer deposits, real-time payments will generate $3M+ in new revenue, payback is 12 months, 5-year ROI is 5:1, avoiding continued losses is critical', isCorrect: true, points: 3, feedback: 'Good business case! You quantified losses and gains with clear payback and ROI. Adding acknowledgment of investment size and offering detailed ROI model would strengthen this.' },
          { id: 'obj3-c', text: 'Losing significant revenue and customers currently, real-time payments will generate substantial new revenue, payback period is short, strong ROI over 5 years, cost of doing nothing is high', isCorrect: true, points: 3, feedback: 'Solid response covering losses, gains, and ROI. Adding specific numbers ($2M, $3M, 12 months, 5:1) and offering detailed model would enhance this.' },
          { id: 'obj3-d', text: 'Investment will pay back quickly through new payment revenue and customer retention, strong ROI, avoiding continued competitive losses, can provide detailed financial analysis', isCorrect: true, points: 3, feedback: 'Good coverage of payback and ROI. Adding specific loss and gain amounts, payback period, and ROI ratio would make this stronger.' },
          { id: 'obj3-e', text: 'The investment will pay for itself over time through increased revenue', isCorrect: false, points: 0, feedback: 'Too vague for a CFO. You missed quantifying current losses ($2M+ annually), new revenue ($3M+), payback period (12 months), ROI calculation (5:1), cost of doing nothing, and offering detailed ROI model.' },
          { id: 'obj3-f', text: 'This is a necessary investment to stay competitive in the market', isCorrect: false, points: 0, feedback: 'This doesn\'t provide financial justification. You missed all quantification: current losses, new revenue, payback period, ROI calculation, and the detailed business case a CFO needs.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj4-a', text: 'Acknowledge outsourcing appeal, quantify third-party costs (1-2% per transaction + fees = $3-5M annually at 100K daily volume), highlight loss of control (customer experience, data, pricing), emphasize strategic value (revenue center vs cost center), mention competitive pricing and differentiation, provide industry data (40% higher revenue for banks that own infrastructure), offer TCO comparison', isCorrect: true, points: 4, feedback: 'Excellent! You acknowledged the appeal, quantified outsourcing costs, explained control and strategic implications, provided compelling industry data, and offered TCO analysis. This makes a complete strategic case.' },
          { id: 'obj4-b', text: 'Third-party processors charge $3-5M annually at your volumes, you lose control over customer experience and pricing, payment processing should be revenue center not cost center, banks that own infrastructure have 40% higher payment revenue', isCorrect: true, points: 3, feedback: 'Good strategic response! You quantified costs, explained control loss, and provided industry data. Acknowledging the appeal and offering TCO comparison would strengthen this.' },
          { id: 'obj4-c', text: 'Outsourcing costs more than owning at scale ($3-5M annually), lose control over customer data and pricing, payment infrastructure is strategic asset for differentiation, owning enables higher revenue', isCorrect: true, points: 3, feedback: 'Solid response covering costs, control, and strategic value. Adding specific industry data (40% higher revenue) and offering TCO comparison would enhance this.' },
          { id: 'obj4-d', text: 'Third-party fees are substantial at your transaction volumes, you lose strategic control and differentiation, payment processing should be revenue generator, can provide build vs outsource analysis', isCorrect: true, points: 3, feedback: 'Good coverage of costs and strategic implications. Adding specific cost quantification ($3-5M) and industry data would make this stronger.' },
          { id: 'obj4-e', text: 'Building your own infrastructure gives you more control and flexibility', isCorrect: false, points: 0, feedback: 'Too vague for a strategic decision. You missed quantifying outsourcing costs ($3-5M annually), explaining control loss, emphasizing revenue center vs cost center, providing industry data (40% higher revenue), and offering TCO comparison.' },
          { id: 'obj4-f', text: 'Outsourcing might seem easier but owning is better long-term', isCorrect: false, points: 0, feedback: 'This doesn\'t make the strategic case. You missed all quantification, control implications, strategic value explanation, industry data, and the detailed TCO comparison needed for this decision.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj5-a', text: 'Acknowledge integration is critical, highlight IBM extensive Fiserv experience with pre-built connectors and integration patterns, done dozens of times with other banks, explain integration via Fiserv APIs (account validation, balance checks, posting), provide timeline (8-12 weeks), offer technical assessment, mention reference customers with Fiserv, position as standard implementation', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged importance, demonstrated extensive Fiserv experience, explained technical approach, provided timeline, offered assessment and references, and positioned as proven. This fully addresses the integration concern.' },
          { id: 'obj5-b', text: 'IBM has extensive Fiserv integration experience with pre-built connectors, done this integration many times, connects via Fiserv APIs, takes 8-12 weeks as standard implementation, have reference customers using Fiserv', isCorrect: true, points: 3, feedback: 'Good response! You demonstrated experience, explained approach, and provided timeline and references. Offering technical assessment would strengthen this.' },
          { id: 'obj5-c', text: 'Pre-built connectors for Fiserv core banking, proven integration patterns from other banks, standard API integration approach, typical 8-12 week timeline, can provide reference customers', isCorrect: true, points: 3, feedback: 'Solid response covering connectors, proven approach, and timeline. Acknowledging importance and offering technical assessment would enhance this.' },
          { id: 'obj5-d', text: 'IBM has done Fiserv integration many times, pre-built connectors available, standard implementation process, reference customers can validate, can assess your specific requirements', isCorrect: true, points: 3, feedback: 'Good coverage of experience and approach. Adding technical details (APIs, timeline) and emphasizing proven patterns would make this stronger.' },
          { id: 'obj5-e', text: 'We can integrate with most core banking systems including Fiserv', isCorrect: false, points: 0, feedback: 'Too generic for a critical concern. You missed IBM\'s extensive Fiserv experience, pre-built connectors, proven patterns, technical approach (APIs), timeline (8-12 weeks), technical assessment offer, and reference customers.' },
          { id: 'obj5-f', text: 'Integration should be straightforward with standard APIs', isCorrect: false, points: 0, feedback: 'This underestimates the concern. You missed demonstrating specific Fiserv experience, pre-built connectors, proven patterns from dozens of implementations, timeline, assessment offer, and reference customers.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing customers at 12% annually and cannot predict who will churn, marketing campaigns have 0.8% response rates because cannot personalize offers, customer data scattered across 15+ systems making unified views impossible, costing $18M in lost revenue plus $8M in wasted marketing spend, competitors winning with superior personalization', isCorrect: true, points: 4, feedback: 'Excellent! You identified the quantified churn rate (12%), poor marketing performance (0.8%), data fragmentation (15+ systems), financial impact ($18M + $8M), and competitive pressure. This demonstrates comprehensive understanding of business drivers.' },
          { id: 'q1-b', text: 'High customer churn rate with no prediction capability, marketing campaigns ineffective due to lack of personalization, data scattered across many systems, significant revenue loss, competitive disadvantage', isCorrect: true, points: 3, feedback: 'Good discovery! You captured churn, marketing ineffectiveness, data fragmentation, revenue impact, and competition. Adding specific metrics (12% churn, 0.8% response, $26M impact) would strengthen this.' },
          { id: 'q1-c', text: 'Cannot predict customer churn, marketing response rates below industry average, customer data in disconnected systems, losing revenue and customers to competitors', isCorrect: true, points: 3, feedback: 'Solid response identifying churn prediction gap, marketing underperformance, data silos, and competitive threat. Quantifying the impact would enhance this.' },
          { id: 'q1-d', text: 'Customer retention challenges, ineffective marketing, data integration problems, revenue loss, need to compete better', isCorrect: true, points: 3, feedback: 'Good identification of key issues. Adding specific metrics (12% churn, 0.8% response, 15+ systems, $26M impact) would make this more compelling.' },
          { id: 'q1-e', text: 'Want to improve customer experience and marketing effectiveness', isCorrect: false, points: 0, feedback: 'Too vague for business justification. You missed quantified churn (12%), marketing performance (0.8% vs 3-5%), data fragmentation (15+ systems), financial impact ($26M), and competitive pressure.' },
          { id: 'q1-f', text: 'Looking to modernize our data infrastructure and analytics', isCorrect: false, points: 0, feedback: 'This is technology-focused without business drivers. You missed the churn crisis, marketing failure, data silos, massive revenue loss, and competitive threat that create urgency.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Customer data in 15+ systems including core banking, CRM, marketing automation, mobile banking, online banking, call center, branch systems, loan origination, credit cards, and wealth management, each system has own customer ID and data model, no master data management, data quality varies significantly, manual data aggregation takes 2-3 weeks and is error-prone, need real-time data integration and unified customer IDs', isCorrect: true, points: 4, feedback: 'Outstanding! You identified the scope (15+ systems), specific systems, data model inconsistencies, lack of MDM, data quality issues, manual process inefficiency (2-3 weeks), and integration requirements. This provides complete technical context.' },
          { id: 'q2-b', text: 'Data in 15+ disconnected systems with different customer IDs, no master data management, significant data quality issues, manual aggregation takes weeks, need real-time integration', isCorrect: true, points: 3, feedback: 'Good technical discovery! You captured system count, ID inconsistency, MDM gap, quality issues, and manual inefficiency. Naming specific systems would strengthen this.' },
          { id: 'q2-c', text: 'Customer data scattered across many systems including core banking, CRM, and digital channels, each with different data models, manual data work is time-consuming and error-prone, need unified customer view', isCorrect: true, points: 3, feedback: 'Solid response identifying data fragmentation, model inconsistencies, and manual inefficiency. Adding specific count (15+) and timeframe (2-3 weeks) would enhance this.' },
          { id: 'q2-d', text: 'Multiple disconnected systems with customer data, no unified view, data quality problems, manual processes are slow, need better integration', isCorrect: true, points: 3, feedback: 'Good identification of key challenges. Specific system count, examples, and timeframes would make this more actionable.' },
          { id: 'q2-e', text: 'Have several systems with customer data, some integration challenges', isCorrect: false, points: 0, feedback: 'Too vague for technical assessment. You missed the scope (15+ systems), specific systems, data model inconsistencies, MDM gap, quality issues, manual inefficiency (2-3 weeks), and integration requirements.' },
          { id: 'q2-f', text: 'Standard banking systems, typical data integration needs', isCorrect: false, points: 0, feedback: 'This completely misses the complexity. You missed 15+ disconnected systems, different customer IDs, no MDM, significant quality issues, 2-3 week manual processes, and the urgent need for real-time integration.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Need to predict customer churn and proactively retain at-risk customers, personalize product recommendations based on life events, transaction patterns, and financial goals, optimize marketing campaigns with AI-driven targeting and timing, provide real-time next-best-action recommendations for customer service reps, identify cross-sell opportunities automatically, segment customers dynamically for targeted campaigns', isCorrect: true, points: 4, feedback: 'Excellent! You identified all key use cases: churn prediction, personalized recommendations, campaign optimization, next-best-action, cross-sell identification, and dynamic segmentation. This demonstrates comprehensive understanding of personalization requirements.' },
          { id: 'q3-b', text: 'Predict and prevent customer churn, personalize product recommendations, optimize marketing campaigns with AI, provide next-best-action for service reps, automate cross-sell identification', isCorrect: true, points: 3, feedback: 'Good use case discovery! You captured major personalization needs. Adding dynamic segmentation and specific data inputs (life events, transaction patterns) would strengthen this.' },
          { id: 'q3-c', text: 'Churn prediction and retention, personalized offers based on customer behavior, AI-driven marketing optimization, real-time recommendations for customer service, automated opportunity identification', isCorrect: true, points: 3, feedback: 'Solid response covering key use cases. Adding specific examples (life events, financial goals, dynamic segmentation) would enhance this.' },
          { id: 'q3-d', text: 'Need to predict churn, personalize marketing, optimize campaigns, help service reps with recommendations, find cross-sell opportunities', isCorrect: true, points: 3, feedback: 'Good identification of core needs. More detail on AI-driven approaches and real-time capabilities would make this stronger.' },
          { id: 'q3-e', text: 'Want to improve customer targeting and marketing effectiveness', isCorrect: false, points: 0, feedback: 'Too vague for requirements gathering. You missed specific use cases: churn prediction, personalized recommendations, campaign optimization, next-best-action, cross-sell automation, and dynamic segmentation.' },
          { id: 'q3-f', text: 'Need better customer insights and analytics', isCorrect: false, points: 0, feedback: 'This lacks specific personalization requirements. You missed churn prediction, product recommendations, AI-driven campaigns, next-best-action, cross-sell identification, and dynamic segmentation use cases.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Need predictive analytics for churn prediction, propensity modeling for product recommendations, customer lifetime value calculations, and campaign optimization, machine learning models for fraud detection, credit risk assessment, and personalization, real-time analytics dashboards for marketing, customer service, and executives, self-service analytics for business users, need to operationalize AI models in production', isCorrect: true, points: 4, feedback: 'Outstanding! You identified all analytics needs: predictive analytics (churn, propensity, CLV, campaigns), ML models (fraud, risk, personalization), real-time dashboards, self-service analytics, and AI operationalization. This shows comprehensive analytics understanding.' },
          { id: 'q4-b', text: 'Predictive analytics for churn and recommendations, machine learning for fraud and personalization, real-time dashboards, self-service analytics for business users, production AI deployment', isCorrect: true, points: 3, feedback: 'Good analytics discovery! You captured key capabilities. Adding specific use cases (propensity modeling, CLV, campaign optimization, credit risk) would strengthen this.' },
          { id: 'q4-c', text: 'Need predictive models for customer behavior, ML for fraud and risk, real-time analytics dashboards, business user self-service, ability to deploy AI models', isCorrect: true, points: 3, feedback: 'Solid response covering major analytics needs. More specific use cases and operationalization details would enhance this.' },
          { id: 'q4-d', text: 'Predictive analytics, machine learning capabilities, real-time dashboards, self-service tools, AI model deployment', isCorrect: true, points: 3, feedback: 'Good identification of core capabilities. Specific use cases (churn, propensity, CLV, fraud, risk, personalization) would make this more actionable.' },
          { id: 'q4-e', text: 'Want advanced analytics and AI capabilities for better insights', isCorrect: false, points: 0, feedback: 'Too vague for technical requirements. You missed specific needs: predictive analytics, propensity modeling, CLV, ML models, real-time dashboards, self-service analytics, and AI operationalization.' },
          { id: 'q4-f', text: 'Need reporting and analytics tools', isCorrect: false, points: 0, feedback: 'This vastly underestimates requirements. You missed predictive analytics, ML models, real-time capabilities, self-service, and the critical need to operationalize AI in production.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Must comply with GDPR, CCPA, GLBA, and fair lending regulations, need consent management for marketing communications, need data lineage and audit trails for regulatory reporting, need role-based access controls and data masking for sensitive information, need to ensure data quality and consistency across all systems, need master data management for customer identities, have Chief Data Officer responsible for governance', isCorrect: true, points: 4, feedback: 'Excellent! You identified all compliance requirements (GDPR, CCPA, GLBA, fair lending), consent management, data lineage, access controls, data masking, quality/consistency needs, MDM requirement, and governance ownership. This demonstrates comprehensive compliance understanding.' },
          { id: 'q5-b', text: 'GDPR, CCPA, and GLBA compliance required, need consent management and audit trails, role-based access and data masking for sensitive data, master data management needed, Chief Data Officer oversees governance', isCorrect: true, points: 3, feedback: 'Good compliance discovery! You captured major regulations, consent, auditing, security, and governance. Adding fair lending and data quality/consistency would strengthen this.' },
          { id: 'q5-c', text: 'Must comply with data privacy regulations including GDPR and CCPA, need consent management, audit trails, access controls, data masking, master data management', isCorrect: true, points: 3, feedback: 'Solid response covering privacy regulations and key controls. Adding GLBA, fair lending, data quality requirements, and CDO ownership would enhance this.' },
          { id: 'q5-d', text: 'Privacy and compliance regulations required, consent management, audit capabilities, security controls, data governance processes, master data management', isCorrect: true, points: 3, feedback: 'Good identification of governance needs. Specific regulations (GDPR, CCPA, GLBA, fair lending) and CDO ownership would make this more complete.' },
          { id: 'q5-e', text: 'Need to comply with banking regulations and data privacy laws', isCorrect: false, points: 0, feedback: 'Too vague for compliance requirements. You missed specific regulations (GDPR, CCPA, GLBA, fair lending), consent management, data lineage, access controls, data masking, MDM, and CDO governance.' },
          { id: 'q5-f', text: 'Standard banking compliance and security requirements', isCorrect: false, points: 0, feedback: 'This lacks all specifics. You missed GDPR, CCPA, GLBA, fair lending, consent management, audit trails, access controls, data masking, data quality, MDM, and governance structure.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Need to start within 3 months and complete in 12-18 months, Phase 1 (6 months): integrate core systems and create unified customer views, Phase 2 (6 months): implement predictive analytics and churn models, Phase 3 (6 months): deploy AI-driven personalization and campaign optimization, need quick wins to demonstrate value and secure ongoing funding, board approval required for investments over $5M', isCorrect: true, points: 4, feedback: 'Outstanding! You captured start timing (3 months), total duration (12-18 months), all three phases with specific deliverables, need for quick wins, and board approval requirement. This provides complete timeline context.' },
          { id: 'q6-b', text: 'Start within 3 months, 12-18 month implementation, phased approach with unified views first, then analytics, then personalization, need to show quick wins, board approval required', isCorrect: true, points: 3, feedback: 'Good timeline discovery! You captured timing, duration, phased approach, and approval. Adding specific phase durations (6 months each) would strengthen this.' },
          { id: 'q6-c', text: '12-18 month timeline with phased implementation, start with data integration, add predictive analytics, then personalization, need early value demonstration, board must approve', isCorrect: true, points: 3, feedback: 'Solid response covering duration, phases, and approval. Adding start timing (3 months) and specific phase durations would enhance this.' },
          { id: 'q6-d', text: 'Phased implementation over 12-18 months, data integration first, analytics second, personalization third, need quick wins, board approval needed', isCorrect: true, points: 3, feedback: 'Good identification of approach and phases. Start timing and specific phase durations (6 months each) would make this more actionable.' },
          { id: 'q6-e', text: 'Want to implement as soon as possible, flexible on timeline', isCorrect: false, points: 0, feedback: 'Too vague for project planning. You missed start timing (3 months), duration (12-18 months), three 6-month phases, specific deliverables, quick win requirement, and board approval.' },
          { id: 'q6-f', text: 'Standard implementation timeline, will determine phases later', isCorrect: false, points: 0, feedback: 'This lacks all planning details. You missed 3-month start, 12-18 month duration, three phases (unified views, analytics, personalization), quick wins, and board approval requirement.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Allocated $5-8M for this initiative including software licenses, infrastructure, professional services for implementation, and ongoing support, currently spending $4M annually on manual data aggregation and ineffective marketing, losing $18M annually from customer churn, need to demonstrate ROI within 12-18 months to justify investment, CFO requires detailed business case with quantified benefits', isCorrect: true, points: 4, feedback: 'Excellent! You qualified the budget ($5-8M), scope (software, infrastructure, services), current costs ($4M), churn impact ($18M), ROI timeframe (12-18 months), and CFO requirement for business case. This provides complete financial context.' },
          { id: 'q7-b', text: 'Budget of $5-8M allocated, currently spending $4M on manual processes, losing $18M from churn, need ROI within 12-18 months, CFO needs strong business case', isCorrect: true, points: 3, feedback: 'Good budget qualification! You captured budget, current costs, churn impact, ROI timing, and CFO requirement. Adding scope details (software, infrastructure, services) would strengthen this.' },
          { id: 'q7-c', text: '$5-8M budget available, significant current costs from manual work and customer churn, need to show ROI within 12-18 months, CFO requires quantified benefits', isCorrect: true, points: 3, feedback: 'Solid response covering budget and ROI requirements. Adding specific current costs ($4M, $18M) and scope components would enhance this.' },
          { id: 'q7-d', text: 'Budget allocated for CDP initiative, currently have high costs from inefficient processes and churn, need to demonstrate ROI, CFO approval required', isCorrect: true, points: 3, feedback: 'Good identification of budget and requirements. Specific amounts ($5-8M, $4M, $18M) and ROI timeframe would make this more actionable.' },
          { id: 'q7-e', text: 'Have budget for this project, will determine exact amount based on proposals', isCorrect: false, points: 0, feedback: 'This doesn\'t qualify the opportunity. You missed budget range ($5-8M), current costs ($4M manual, $18M churn), ROI requirement (12-18 months), and CFO\'s need for detailed business case.' },
          { id: 'q7-f', text: 'Budget is flexible depending on value delivered', isCorrect: false, points: 0, feedback: 'This lacks all financial qualification. You missed $5-8M budget, $4M current costs, $18M churn loss, 12-18 month ROI requirement, and CFO\'s business case requirement.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Chief Marketing Officer is executive sponsor owning customer experience and churn problem, CIO responsible for technology implementation and integration, Chief Data Officer manages data governance and quality, CFO controls budget and requires strong business case, also need buy-in from heads of retail banking, digital channels, and customer service, board approval required for investments over $5M, decision timeline is 2-3 months', isCorrect: true, points: 4, feedback: 'Outstanding! You identified all key stakeholders (CMO sponsor, CIO, CDO, CFO), their roles and concerns, additional influencers, board approval requirement, and decision timeline. This provides complete stakeholder mapping.' },
          { id: 'q8-b', text: 'CMO is executive sponsor, CIO handles implementation, CDO manages governance, CFO controls budget, need buy-in from retail banking and digital channel heads, board approval required, 2-3 month decision timeline', isCorrect: true, points: 3, feedback: 'Good stakeholder discovery! You captured key executives and their roles, influencers, board approval, and timeline. Adding specific concerns (churn, business case) would strengthen this.' },
          { id: 'q8-c', text: 'Executive sponsor from marketing, CIO for technology, CDO for data governance, CFO for budget approval, multiple business unit heads involved, board must approve, decision in 2-3 months', isCorrect: true, points: 3, feedback: 'Solid response identifying key roles and approval process. Naming specific executives (CMO, CIO, CDO, CFO) and their concerns would enhance this.' },
          { id: 'q8-d', text: 'Marketing executive sponsoring, IT implementing, data officer governing, finance approving, business units involved, board approval needed, decision timeline 2-3 months', isCorrect: true, points: 3, feedback: 'Good identification of stakeholder structure. Specific titles and individual concerns would make this more actionable.' },
          { id: 'q8-e', text: 'Multiple executives involved, will need various approvals', isCorrect: false, points: 0, feedback: 'Too vague for stakeholder mapping. You missed CMO sponsor, CIO, CDO, CFO roles, their specific concerns, business unit heads, board approval requirement, and 2-3 month timeline.' },
          { id: 'q8-f', text: 'IT and business stakeholders, standard approval process', isCorrect: false, points: 0, feedback: 'This lacks all stakeholder details. You missed CMO, CIO, CDO, CFO, their roles and concerns, business unit heads, board approval for $5M+, and decision timeline.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        responseChoices: [
          { id: 'obj1-a', text: 'Acknowledge Salesforce and Adobe investments are valuable, position CDP as integration layer not replacement, explain Salesforce only sees sales/service data while Adobe only sees marketing interactions, neither can access core banking transactions, loan activity, credit card spending, or wealth management data, CDP integrates all 15+ data sources then feeds enriched data back to Salesforce and Adobe making them 3-5x more effective, provide examples (Adobe targets on banking behavior, Salesforce sees complete relationships), emphasize connecting silos not creating new ones', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged existing investments, positioned CDP as enhancing not replacing, explained data limitations, provided specific examples, quantified improvement (3-5x), and emphasized integration. This fully addresses the concern.' },
          { id: 'obj1-b', text: 'Salesforce and Adobe are valuable but limited in data scope, CDP integrates all customer data sources including core banking, feeds enriched data back to existing tools making them 3-5x more effective, connects silos rather than creating new ones', isCorrect: true, points: 3, feedback: 'Good response! You positioned CDP as enhancing existing tools and explained integration benefits. Adding specific examples (Adobe targeting, Salesforce complete view) would strengthen this.' },
          { id: 'obj1-c', text: 'CDP enhances Salesforce and Adobe by providing complete customer data from all 15+ systems, makes existing tools more effective through data enrichment, integration layer not replacement', isCorrect: true, points: 3, feedback: 'Solid response covering enhancement and integration. Adding quantified improvement (3-5x) and specific use case examples would enhance this.' },
          { id: 'obj1-d', text: 'CDP integrates data from all systems and feeds it to Salesforce and Adobe, makes existing investments more valuable, connects data silos', isCorrect: true, points: 3, feedback: 'Good coverage of integration value. Acknowledging investments, explaining limitations, and providing specific examples would make this stronger.' },
          { id: 'obj1-e', text: 'CDP is better than Salesforce and Adobe for customer data management', isCorrect: false, points: 0, feedback: 'This dismisses existing investments and creates competition. You missed positioning CDP as enhancing not replacing, explaining data limitations, providing examples, quantifying improvement, and emphasizing integration.' },
          { id: 'obj1-f', text: 'You need a CDP because Salesforce and Adobe are not sufficient', isCorrect: false, points: 0, feedback: 'This devalues existing investments. You missed acknowledging their value, positioning CDP as integration layer, explaining how it enhances existing tools (3-5x), and providing specific examples.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj2-a', text: 'Acknowledge data quality is foundation of effective AI, Watson Studio includes data profiling to assess quality across all systems, automated data cleansing, standardization, and enrichment using AI, entity resolution algorithms match customer records across systems with 95%+ accuracy, establish master data management for customer identities, continuous data quality monitoring, take iterative approach starting with highest quality data sources (core banking, CRM), demonstrate value with churn prediction, then expand to additional sources and continuously improve quality, need good enough data to deliver business value not perfection on day one', isCorrect: true, points: 4, feedback: 'Excellent! You acknowledged the concern, explained Watson Studio data quality capabilities, provided entity resolution accuracy (95%+), described iterative approach, emphasized continuous improvement, and set realistic expectations. This fully addresses data quality concerns.' },
          { id: 'obj2-b', text: 'Data quality is critical, Watson Studio includes comprehensive data quality tools, entity resolution with 95%+ accuracy, iterative approach starting with best data sources, continuous improvement not one-time fix, good enough data to start then improve', isCorrect: true, points: 3, feedback: 'Good response! You covered key capabilities and iterative approach. Adding specific tools (profiling, cleansing, MDM) and examples would strengthen this.' },
          { id: 'obj2-c', text: 'Watson Studio provides data quality capabilities including profiling, cleansing, and entity resolution, start with highest quality data, demonstrate value, then expand and improve iteratively', isCorrect: true, points: 3, feedback: 'Solid response covering tools and approach. Adding accuracy metrics (95%+) and realistic expectations would enhance this.' },
          { id: 'obj2-d', text: 'Comprehensive data quality tools in Watson Studio, iterative approach starting with best data, continuous improvement, entity resolution for matching records', isCorrect: true, points: 3, feedback: 'Good coverage of capabilities and approach. Specific accuracy metrics and realistic expectations would make this stronger.' },
          { id: 'obj2-e', text: 'Our data quality tools will clean up all your data before we start', isCorrect: false, points: 0, feedback: 'This sets unrealistic expectations. You missed Watson Studio capabilities, entity resolution accuracy (95%+), iterative approach, continuous improvement, and the realistic expectation of good enough data to start.' },
          { id: 'obj2-f', text: 'Data quality should not be a concern with modern tools', isCorrect: false, points: 0, feedback: 'This dismisses a legitimate concern. You missed acknowledging importance, explaining Watson Studio capabilities, entity resolution, iterative approach, continuous improvement, and realistic expectations.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj3-a', text: 'Take privacy concerns very seriously, privacy and compliance built into solution architecture, IBM Power Systems provide hardware-based encryption and pervasive security, Watson Studio includes consent management, data lineage, audit trails, and role-based access controls, implement data masking and anonymization for sensitive PII, provide GDPR and CCPA compliance frameworks including right to be forgotten, data portability, and consent tracking, conduct privacy impact assessments before deployment, IBM has deep financial services expertise, key insight: unified CDP actually reduces compliance risk, today have 15 disconnected systems with inconsistent governance, CDP provides centralized governance, consistent controls, and complete audit trails, move from 15 compliance problems to one well-governed platform', isCorrect: true, points: 4, feedback: 'Outstanding! You took privacy seriously, explained comprehensive security and compliance capabilities, provided specific frameworks (GDPR, CCPA), emphasized IBM expertise, and reframed CDP as reducing risk through centralized governance. This fully addresses compliance concerns.' },
          { id: 'obj3-b', text: 'Privacy and compliance are built in, hardware-based encryption, consent management, data lineage, audit trails, GDPR and CCPA compliance frameworks, privacy impact assessments, IBM financial services expertise, CDP reduces risk by centralizing governance from 15 systems to one platform', isCorrect: true, points: 3, feedback: 'Good response! You covered key capabilities and risk reduction. Adding specific controls (data masking, role-based access) would strengthen this.' },
          { id: 'obj3-c', text: 'Comprehensive privacy and compliance capabilities including encryption, consent management, audit trails, GDPR and CCPA frameworks, CDP centralizes governance reducing compliance risk', isCorrect: true, points: 3, feedback: 'Solid response covering capabilities and risk reduction. Adding IBM expertise and privacy impact assessments would enhance this.' },
          { id: 'obj3-d', text: 'Privacy built into architecture, compliance frameworks for GDPR and CCPA, centralized governance reduces risk, IBM financial services expertise', isCorrect: true, points: 3, feedback: 'Good coverage of key points. Specific capabilities (encryption, consent, audit trails, data masking) would make this stronger.' },
          { id: 'obj3-e', text: 'We comply with all privacy regulations, should not be a concern', isCorrect: false, points: 0, feedback: 'This dismisses a critical concern. You missed taking privacy seriously, explaining specific capabilities, GDPR/CCPA frameworks, IBM expertise, and the key insight that CDP reduces risk through centralized governance.' },
          { id: 'obj3-f', text: 'Privacy and compliance are standard features in our platform', isCorrect: false, points: 0, feedback: 'Too generic for a critical concern. You missed hardware encryption, consent management, data lineage, audit trails, GDPR/CCPA frameworks, privacy assessments, IBM expertise, and risk reduction through centralization.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj4-a', text: 'Understand cost concerns especially in cost-cutting environment, show why this is cost reduction and revenue growth investment, today losing $18M annually from 12% customer churn, wasting $8M on ineffective marketing with 0.8% response rates, spending $4M on manual data processes, total $30M in annual costs and lost revenue, solution costs $6M initially plus $500K annually, conservative benefits: reduce churn by 3 percentage points = $4.5M retained revenue, improve marketing response from 0.8% to 2.5% = $5M additional revenue, eliminate manual data work = $4M cost savings, total annual benefit $13.5M, payback in 6 months, year 2 and beyond $13M annual net benefit, not an expense but investment that pays for itself in 6 months and generates $13M annually thereafter', isCorrect: true, points: 4, feedback: 'Excellent! You led with quantified business case, showed current costs ($30M), provided conservative benefits ($13.5M), calculated payback (6 months), emphasized ongoing benefits ($13M), and reframed as investment with measurable ROI. This provides complete financial justification.' },
          { id: 'obj4-b', text: 'Current state costs $30M annually (churn, marketing, manual work), solution costs $6M initially plus $500K annually, conservative benefits $13.5M annually, payback in 6 months, year 2+ generates $13M annual net benefit', isCorrect: true, points: 3, feedback: 'Good business case! You quantified costs and benefits with clear payback. Adding specific benefit breakdown and reframing as investment would strengthen this.' },
          { id: 'obj4-c', text: 'Losing $18M from churn, $8M on ineffective marketing, $4M on manual processes, solution delivers $13.5M annual benefits, payback in 6 months, ongoing $13M annual benefit', isCorrect: true, points: 3, feedback: 'Solid response covering costs and benefits. Adding solution cost and detailed benefit calculation would enhance this.' },
          { id: 'obj4-d', text: 'Current costs and losses are $30M annually, solution costs $6M, delivers $13.5M annual benefits, 6-month payback, $13M ongoing benefit', isCorrect: true, points: 3, feedback: 'Good coverage of financial case. Specific benefit breakdown (churn reduction, marketing improvement, cost savings) would make this stronger.' },
          { id: 'obj4-e', text: 'The investment will pay for itself over time through improved efficiency', isCorrect: false, points: 0, feedback: 'Too vague for CFO. You missed quantifying current costs ($30M), solution cost ($6M), specific benefits ($13.5M), payback period (6 months), ongoing benefits ($13M), and reframing as investment.' },
          { id: 'obj4-f', text: 'This is a strategic investment that will deliver value', isCorrect: false, points: 0, feedback: 'This lacks all financial justification. You missed current costs, solution cost, benefit quantification, payback calculation, ongoing benefits, and the compelling ROI story.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj5-a', text: 'Acknowledge past failure as valid concern, appreciate sharing experience, many data warehouse projects have failed due to complexity, long timelines, and lack of business value, approach is fundamentally different in three ways: agile methodology with quick wins every 3 months not 3-year big bang project, focus on specific business outcomes (churn reduction, campaign optimization) not just building infrastructure, modern cloud-native architecture with AI-powered data integration not traditional ETL, specific approach: Month 1-3 integrate core banking and CRM data create unified customer views, Month 4-6 deploy churn prediction model demonstrate value, Month 7-9 implement campaign optimization measure ROI, see business value in 3-4 months not 3 years, IBM professional services with best practices from 100+ financial services implementations, learn from past failures and apply proven methodologies', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged past failure, contrasted old vs new approach (agile, business outcomes, modern architecture), provided specific timeline with value milestones, highlighted IBM expertise (100+ implementations), and offered to learn from past experience. This fully addresses the concern.' },
          { id: 'obj5-b', text: 'Valid concern, many data warehouse projects have failed, our approach is different: agile with quick wins every 3 months, focus on business outcomes not just infrastructure, modern cloud-native architecture not traditional ETL, value in 3-4 months not 3 years, IBM professional services with 100+ implementations', isCorrect: true, points: 3, feedback: 'Good response! You contrasted approaches and emphasized quick value. Adding specific timeline milestones would strengthen this.' },
          { id: 'obj5-c', text: 'Appreciate concern from past experience, agile methodology with quick wins, business outcome focus, modern architecture, deliver value in months not years, IBM proven methodologies from many implementations', isCorrect: true, points: 3, feedback: 'Solid response covering key differences. Specific timeline (Month 1-3, 4-6, 7-9) and implementation count (100+) would enhance this.' },
          { id: 'obj5-d', text: 'Acknowledge past failure, different approach with agile methodology, focus on business value, modern technology, quick wins, IBM experience', isCorrect: true, points: 3, feedback: 'Good identification of differences. Specific contrasts (3 months vs 3 years, outcomes vs infrastructure) would make this stronger.' },
          { id: 'obj5-e', text: 'Our technology is much better than what was available 5 years ago', isCorrect: false, points: 0, feedback: 'This dismisses the concern and focuses only on technology. You missed acknowledging failure, contrasting approaches (agile vs big bang, outcomes vs infrastructure), providing timeline, and highlighting IBM expertise.' },
          { id: 'obj5-f', text: 'Data warehouse projects fail because of poor planning, we will plan better', isCorrect: false, points: 0, feedback: 'This oversimplifies and doesn\'t address the concern. You missed acknowledging failure, explaining fundamental differences (agile, business outcomes, modern architecture), providing specific timeline, and IBM proven methodologies.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Suffered ransomware attack last year costing $3M in recovery, lost business, and reputation damage, experiencing increasing cyber threats with phishing attacks up 40%, account takeover fraud costing $2M annually, legacy security tools cannot detect sophisticated threats in real-time, generate 10,000+ alerts daily with 95% false positives, security team overwhelmed and cannot investigate all alerts, regulators requiring better security controls, cyber insurance premiums increased 60%, board demanding immediate action', isCorrect: true, points: 4, feedback: 'Excellent! You identified the ransomware impact ($3M), increasing threats (phishing up 40%, fraud $2M), tool limitations (10K alerts, 95% false positives), team overwhelm, regulatory pressure, insurance increase (60%), and board urgency. This demonstrates comprehensive understanding of cybersecurity drivers.' },
          { id: 'q1-b', text: 'Recent ransomware attack cost $3M, phishing and fraud increasing significantly, legacy tools generate too many false positives, security team overwhelmed, regulators demanding improvements, insurance premiums increased, board wants action', isCorrect: true, points: 3, feedback: 'Good discovery! You captured ransomware impact, increasing threats, false positive problem, team overwhelm, regulatory and insurance pressure, and board urgency. Adding specific metrics (40% phishing increase, 10K alerts, 95% false positives) would strengthen this.' },
          { id: 'q1-c', text: 'Ransomware attack last year, increasing cyber threats, security tools inadequate with high false positives, team cannot keep up with alerts, regulatory requirements, insurance costs rising', isCorrect: true, points: 3, feedback: 'Solid response identifying ransomware, threat increase, tool inadequacy, team capacity, regulatory and insurance issues. Quantifying impacts would enhance this.' },
          { id: 'q1-d', text: 'Experienced ransomware attack, cyber threats growing, current security insufficient, team overwhelmed, compliance pressure, board concerned', isCorrect: true, points: 3, feedback: 'Good identification of key drivers. Adding specific impacts ($3M ransomware, $2M fraud, 10K alerts, 60% insurance increase) would make this more compelling.' },
          { id: 'q1-e', text: 'Want to improve cybersecurity posture and reduce risk', isCorrect: false, points: 0, feedback: 'Too vague for business justification. You missed ransomware attack ($3M), increasing threats (phishing up 40%, fraud $2M), tool limitations (10K alerts, 95% false positives), team overwhelm, regulatory pressure, insurance increase, and board urgency.' },
          { id: 'q1-f', text: 'Need to modernize security infrastructure', isCorrect: false, points: 0, feedback: 'This is technology-focused without business drivers. You missed the ransomware crisis, quantified threat increases, massive false positive problem, team overwhelm, regulatory requirements, insurance impact, and board-level urgency.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Have legacy firewall, antivirus, basic SIEM, and signature-based intrusion detection that are 5-10 years old and cannot detect modern threats, no AI-powered threat detection, no behavioral analytics, no insider threat detection, cannot detect zero-day exploits or advanced persistent threats, SIEM generates too many false positives, no automated incident response, lack threat intelligence integration, cannot detect compromised credentials or account takeovers in real-time, need modern security with AI and automation', isCorrect: true, points: 4, feedback: 'Outstanding! You identified current tools (firewall, antivirus, SIEM, IDS), their age (5-10 years), all capability gaps (no AI, behavioral analytics, insider threat detection, zero-day detection, APT detection), false positive problem, lack of automation and threat intelligence, and real-time detection needs. This provides complete security posture assessment.' },
          { id: 'q2-b', text: 'Legacy security tools 5-10 years old cannot detect modern threats, no AI-powered detection or behavioral analytics, SIEM has too many false positives, no automated response, lack threat intelligence, cannot detect compromised credentials in real-time', isCorrect: true, points: 3, feedback: 'Good security assessment! You captured tool age, modern threat gap, AI/behavioral analytics absence, false positives, automation gap, and real-time detection need. Adding specific tools and more capability gaps would strengthen this.' },
          { id: 'q2-c', text: 'Current security tools are outdated and inadequate for modern threats, no AI or behavioral analytics, high false positives, no automation, need real-time threat detection', isCorrect: true, points: 3, feedback: 'Solid response identifying tool inadequacy and key gaps. Adding specific tools, age, and detailed capability gaps would enhance this.' },
          { id: 'q2-d', text: 'Legacy security infrastructure with significant gaps in threat detection, no AI capabilities, too many false alarms, manual processes, need modernization', isCorrect: true, points: 3, feedback: 'Good identification of gaps. Specific tools, age (5-10 years), and detailed capabilities (behavioral analytics, insider threats, zero-day, APT) would make this more actionable.' },
          { id: 'q2-e', text: 'Have standard security tools, some gaps in capabilities', isCorrect: false, points: 0, feedback: 'Too vague for security assessment. You missed specific tools, age (5-10 years), all capability gaps (AI, behavioral analytics, insider threats, zero-day, APT, automation, threat intelligence), false positive problem, and real-time detection needs.' },
          { id: 'q2-f', text: 'Security tools need updating, want better threat detection', isCorrect: false, points: 0, feedback: 'This lacks all technical details. You missed current tools, age, comprehensive capability gaps, false positive crisis (95%), lack of automation, and the urgent need for AI-powered real-time detection.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Need AI-powered threat detection that can identify sophisticated attacks in real-time, behavioral analytics to detect anomalous user activity and insider threats, detect account takeover attempts before fraud occurs, identify phishing campaigns and malicious emails, detect ransomware and malware before they spread, automated incident response to contain threats quickly, threat intelligence integration to stay ahead of emerging threats, reduce false positives from 95% to under 10%', isCorrect: true, points: 4, feedback: 'Excellent! You identified all key capabilities: AI-powered real-time detection, behavioral analytics, insider threats, account takeover prevention, phishing detection, ransomware/malware detection, automated response, threat intelligence, and false positive reduction target (95% to <10%). This demonstrates comprehensive security requirements understanding.' },
          { id: 'q3-b', text: 'AI-powered real-time threat detection, behavioral analytics for insider threats, account takeover prevention, phishing and ransomware detection, automated incident response, threat intelligence integration, significant false positive reduction', isCorrect: true, points: 3, feedback: 'Good requirements discovery! You captured major capabilities. Adding specific false positive target (95% to <10%) would strengthen this.' },
          { id: 'q3-c', text: 'Real-time threat detection with AI, behavioral analytics, detect account takeovers and phishing, automated response, threat intelligence, reduce false positives significantly', isCorrect: true, points: 3, feedback: 'Solid response covering key capabilities. Adding ransomware/malware detection and specific false positive metrics would enhance this.' },
          { id: 'q3-d', text: 'AI threat detection, behavioral analytics, fraud prevention, phishing detection, automated response, threat intelligence, lower false positives', isCorrect: true, points: 3, feedback: 'Good identification of core needs. More specific use cases (account takeover, ransomware) and false positive target would make this stronger.' },
          { id: 'q3-e', text: 'Need better threat detection and response capabilities', isCorrect: false, points: 0, feedback: 'Too vague for requirements gathering. You missed AI-powered detection, behavioral analytics, insider threats, account takeover prevention, phishing detection, ransomware detection, automated response, threat intelligence, and false positive reduction target.' },
          { id: 'q3-f', text: 'Want advanced security tools to protect the bank', isCorrect: false, points: 0, feedback: 'This lacks all specific requirements. You missed AI detection, behavioral analytics, specific use cases (insider threats, account takeover, phishing, ransomware), automation, threat intelligence, and the critical false positive reduction need.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Incident response is mostly manual and reactive, small security team investigates alerts from SIEM, with 10,000+ daily alerts and 95% false positives cannot investigate everything, mean time to detect is 3-4 weeks for sophisticated threats, mean time to respond is 2-3 days, no automated playbooks or orchestration, lack forensic capabilities, no threat hunting program, during ransomware attack were overwhelmed and had to bring in external incident response consultants, need automated detection, investigation, and response', isCorrect: true, points: 4, feedback: 'Outstanding! You identified manual/reactive process, team size constraint, alert volume problem (10K+ daily, 95% false positives), MTTD (3-4 weeks), MTTR (2-3 days), lack of automation/playbooks/forensics/threat hunting, ransomware response failure, and automation needs. This provides complete incident response assessment.' },
          { id: 'q4-b', text: 'Manual and reactive incident response, small team overwhelmed by 10,000+ daily alerts with 95% false positives, mean time to detect 3-4 weeks, mean time to respond 2-3 days, no automation or forensics, ransomware attack required external consultants', isCorrect: true, points: 3, feedback: 'Good incident response assessment! You captured manual process, team overwhelm, alert metrics, MTTD/MTTR, lack of automation, and ransomware response failure. Adding playbooks, orchestration, and threat hunting gaps would strengthen this.' },
          { id: 'q4-c', text: 'Mostly manual incident response, team cannot handle alert volume with high false positives, slow detection and response times (weeks to detect, days to respond), no automation, lacked capability during ransomware attack', isCorrect: true, points: 3, feedback: 'Solid response identifying manual process, capacity issues, and slow response. Adding specific metrics (10K alerts, 95% false positives, 3-4 weeks MTTD) would enhance this.' },
          { id: 'q4-d', text: 'Manual reactive incident response, overwhelmed security team, slow threat detection and response, no automated capabilities, struggled with ransomware incident', isCorrect: true, points: 3, feedback: 'Good identification of key issues. Specific metrics (alert volume, false positive rate, MTTD/MTTR) and capability gaps would make this more actionable.' },
          { id: 'q4-e', text: 'Have incident response process, team investigates security alerts', isCorrect: false, points: 0, feedback: 'Too vague for capability assessment. You missed manual/reactive nature, team overwhelm (10K+ alerts, 95% false positives), slow metrics (3-4 weeks MTTD, 2-3 days MTTR), lack of automation/playbooks/forensics/threat hunting, and ransomware response failure.' },
          { id: 'q4-f', text: 'Security team handles incidents as they occur', isCorrect: false, points: 0, feedback: 'This lacks all assessment details. You missed manual process, alert volume crisis, false positive problem, MTTD/MTTR metrics, automation gaps, forensic limitations, threat hunting absence, and ransomware incident failure.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Must comply with FFIEC cybersecurity assessment tool, GLBA safeguards rule, and NCUA requirements, have annual security audits and penetration tests, regulators requiring better threat detection, incident response, and security monitoring, had audit findings last year related to inadequate security controls, must report security incidents to regulators within 36 hours, need to demonstrate continuous monitoring and threat detection capabilities, need audit trails and forensic evidence for investigations, compliance is board-level concern', isCorrect: true, points: 4, feedback: 'Excellent! You identified all compliance requirements (FFIEC, GLBA, NCUA), audit frequency, regulator demands (threat detection, incident response, monitoring), audit findings, incident reporting requirement (36 hours), continuous monitoring need, forensic evidence requirement, and board-level concern. This demonstrates comprehensive compliance understanding.' },
          { id: 'q5-b', text: 'FFIEC, GLBA, and NCUA compliance required, annual security audits, regulators demanding better threat detection and incident response, audit findings last year, must report incidents within 36 hours, need continuous monitoring and audit trails, board-level concern', isCorrect: true, points: 3, feedback: 'Good compliance discovery! You captured major requirements and audit findings. Adding penetration testing and forensic evidence needs would strengthen this.' },
          { id: 'q5-c', text: 'Must comply with banking cybersecurity regulations including FFIEC and GLBA, annual audits with findings on security controls, regulators requiring better monitoring, incident reporting required, need audit trails', isCorrect: true, points: 3, feedback: 'Solid response covering key regulations and requirements. Adding NCUA, 36-hour reporting, continuous monitoring, forensics, and board concern would enhance this.' },
          { id: 'q5-d', text: 'Banking cybersecurity regulations required, annual audits, regulator demands for better security, incident reporting obligations, need monitoring and audit capabilities', isCorrect: true, points: 3, feedback: 'Good identification of compliance needs. Specific regulations (FFIEC, GLBA, NCUA), audit findings, and reporting timeframe (36 hours) would make this more complete.' },
          { id: 'q5-e', text: 'Need to comply with banking regulations and pass security audits', isCorrect: false, points: 0, feedback: 'Too vague for compliance assessment. You missed specific regulations (FFIEC, GLBA, NCUA), audit findings, regulator demands, incident reporting requirement (36 hours), continuous monitoring need, forensic evidence, and board-level concern.' },
          { id: 'q5-f', text: 'Standard banking compliance and security audit requirements', isCorrect: false, points: 0, feedback: 'This lacks all specifics. You missed FFIEC, GLBA, NCUA, audit findings, regulator demands for threat detection/incident response, 36-hour reporting, continuous monitoring, audit trails, forensics, and board concern.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'This is urgent, board wants action within 3 months, need to start immediately and complete core implementation in 9-12 months, Phase 1 (3 months): deploy AI-powered threat detection and reduce false positives, Phase 2 (3 months): implement behavioral analytics and insider threat detection, Phase 3 (3 months): deploy automated incident response and threat hunting, need quick wins to demonstrate value to board and regulators, annual security audit is in 6 months and need improvements before then', isCorrect: true, points: 4, feedback: 'Outstanding! You captured urgency (board wants action in 3 months), total timeline (9-12 months), all three phases with specific deliverables, quick win requirement, and audit deadline (6 months). This provides complete timeline context.' },
          { id: 'q6-b', text: 'Urgent timeline, board wants action in 3 months, 9-12 month implementation with phased approach (threat detection, behavioral analytics, automated response), need quick wins, security audit in 6 months', isCorrect: true, points: 3, feedback: 'Good timeline discovery! You captured urgency, duration, phased approach, and audit deadline. Adding specific phase durations (3 months each) would strengthen this.' },
          { id: 'q6-c', text: 'Board demanding immediate action, 9-12 month timeline with phases for threat detection, analytics, and automated response, need to show value quickly, audit coming up', isCorrect: true, points: 3, feedback: 'Solid response covering urgency, timeline, and phases. Adding start timing (3 months) and specific audit deadline (6 months) would enhance this.' },
          { id: 'q6-d', text: 'Urgent implementation needed, phased approach over 9-12 months, threat detection first then analytics and automation, quick wins required, audit deadline approaching', isCorrect: true, points: 3, feedback: 'Good identification of urgency and approach. Specific phase durations and audit timing would make this more actionable.' },
          { id: 'q6-e', text: 'Want to implement as soon as possible, flexible on timeline', isCorrect: false, points: 0, feedback: 'Too vague for project planning. You missed board urgency (3 months), total duration (9-12 months), three 3-month phases, specific deliverables, quick win requirement, and audit deadline (6 months).' },
          { id: 'q6-f', text: 'Standard implementation timeline, will determine phases later', isCorrect: false, points: 0, feedback: 'This lacks all planning details. You missed board urgency, 9-12 month timeline, three phases (threat detection, behavioral analytics, automated response), quick wins, and 6-month audit deadline.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Allocated $3-5M for cybersecurity improvements including security software, infrastructure, professional services, and training, currently spending $1.5M annually on security tools and staff, ransomware attack cost $3M, account takeover fraud costs $2M annually, cyber insurance premiums increased $300K after attack, need to demonstrate ROI through reduced fraud, lower insurance premiums, and avoided incident costs, board has approved this investment as top priority', isCorrect: true, points: 4, feedback: 'Excellent! You qualified budget ($3-5M), scope (software, infrastructure, services, training), current spend ($1.5M), incident costs ($3M ransomware, $2M fraud), insurance increase ($300K), ROI requirements, and board approval. This provides complete financial context.' },
          { id: 'q7-b', text: 'Budget of $3-5M allocated, currently spending $1.5M on security, ransomware cost $3M, fraud costs $2M annually, insurance premiums increased $300K, need ROI through reduced costs, board approved as priority', isCorrect: true, points: 3, feedback: 'Good budget qualification! You captured budget, current spend, incident costs, insurance impact, and board approval. Adding scope details (software, infrastructure, services) would strengthen this.' },
          { id: 'q7-c', text: '$3-5M budget available, significant current costs from ransomware ($3M) and fraud ($2M annually), insurance premiums increased, need to show ROI, board priority', isCorrect: true, points: 3, feedback: 'Solid response covering budget and cost drivers. Adding current spend ($1.5M) and scope components would enhance this.' },
          { id: 'q7-d', text: 'Budget allocated for cybersecurity, currently have high costs from incidents and fraud, insurance increased, need to demonstrate ROI, board approved', isCorrect: true, points: 3, feedback: 'Good identification of budget and drivers. Specific amounts ($3-5M, $3M, $2M, $300K) would make this more actionable.' },
          { id: 'q7-e', text: 'Have budget for cybersecurity improvements, will determine exact amount based on proposals', isCorrect: false, points: 0, feedback: 'This doesn\'t qualify the opportunity. You missed budget range ($3-5M), current spend ($1.5M), incident costs ($3M ransomware, $2M fraud), insurance increase ($300K), ROI requirements, and board approval.' },
          { id: 'q7-f', text: 'Budget is flexible depending on value delivered', isCorrect: false, points: 0, feedback: 'This lacks all financial qualification. You missed $3-5M budget, $1.5M current spend, $3M ransomware cost, $2M fraud, $300K insurance increase, ROI requirements, and board approval as top priority.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Chief Information Security Officer is executive sponsor owning security posture and threat detection problem, CIO responsible for technology implementation and integration, Chief Risk Officer manages regulatory compliance and fraud prevention, CFO controls budget and requires strong business case, also need buy-in from heads of IT operations, application development, and branch operations, board notification required for investments over $3M, decision timeline is 2-3 months', isCorrect: true, points: 4, feedback: 'Outstanding! You identified all key stakeholders (CISO sponsor, CIO, CRO, CFO), their roles and concerns, additional influencers (IT ops, app dev, branch ops), board notification requirement, and decision timeline. This provides complete stakeholder mapping.' },
          { id: 'q8-b', text: 'CISO is executive sponsor, CIO handles implementation, CRO manages compliance and fraud, CFO controls budget, need buy-in from IT and operations heads, board notification required, 2-3 month decision timeline', isCorrect: true, points: 3, feedback: 'Good stakeholder discovery! You captured key executives and their roles, influencers, board notification, and timeline. Adding specific concerns (security posture, business case) would strengthen this.' },
          { id: 'q8-c', text: 'Executive sponsor from security, CIO for technology, CRO for compliance, CFO for budget approval, multiple department heads involved, board must be notified, decision in 2-3 months', isCorrect: true, points: 3, feedback: 'Solid response identifying key roles and approval process. Naming specific executives (CISO, CIO, CRO, CFO) and their concerns would enhance this.' },
          { id: 'q8-d', text: 'Security executive sponsoring, IT implementing, risk officer for compliance, finance approving, operations involved, board notification needed, decision timeline 2-3 months', isCorrect: true, points: 3, feedback: 'Good identification of stakeholder structure. Specific titles and individual concerns would make this more actionable.' },
          { id: 'q8-e', text: 'Multiple executives involved, will need various approvals', isCorrect: false, points: 0, feedback: 'Too vague for stakeholder mapping. You missed CISO sponsor, CIO, CRO, CFO roles, their specific concerns, department heads, board notification requirement ($3M+), and 2-3 month timeline.' },
          { id: 'q8-f', text: 'IT and security stakeholders, standard approval process', isCorrect: false, points: 0, feedback: 'This lacks all stakeholder details. You missed CISO, CIO, CRO, CFO, their roles and concerns, department heads, board notification for $3M+, and decision timeline.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        responseChoices: [
          { id: 'obj1-a', text: 'Acknowledge false positives as major problem with traditional tools, explain AI is fundamentally different using machine learning models trained on billions of security events to distinguish real threats from normal activity, behavioral analytics establish baselines for normal user and system behavior then detect anomalies, AI continuously learns and improves accuracy over time, implement tuning and customization for specific environment, industry data shows AI reduces false positives by 80-90% compared to signature-based tools, instead of 10,000 daily alerts with 95% false positives might see 500 alerts with 10% false positives (50 real threats vs 500 false alarms much more manageable), provide IBM Security experts to help tune and optimize during implementation', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged the concern, explained AI fundamentals (ML trained on billions of events, behavioral analytics), emphasized continuous learning, provided compelling metrics (80-90% reduction, 10K to 500 alerts), and offered IBM Security expert support. This fully addresses false positive concerns.' },
          { id: 'obj1-b', text: 'False positives are legitimate concern, AI uses machine learning and behavioral analytics fundamentally different from signature-based tools, reduces false positives by 80-90%, continuous learning improves accuracy, IBM Security experts help tune and optimize', isCorrect: true, points: 3, feedback: 'Good response! You explained AI approach and quantified improvement. Adding specific examples (10K to 500 alerts, 95% to 10% false positives) would strengthen this.' },
          { id: 'obj1-c', text: 'AI-powered detection uses machine learning trained on billions of events, behavioral analytics detect anomalies, significantly reduces false positives compared to traditional tools, continuous improvement, expert tuning available', isCorrect: true, points: 3, feedback: 'Solid response covering AI capabilities and improvement. Adding specific metrics (80-90% reduction) and examples would enhance this.' },
          { id: 'obj1-d', text: 'AI threat detection fundamentally different from signature-based tools, machine learning and behavioral analytics, reduces false positives significantly, continuous learning, IBM experts help optimize', isCorrect: true, points: 3, feedback: 'Good coverage of AI advantages. Specific reduction metrics (80-90%, 10K to 500 alerts) would make this more compelling.' },
          { id: 'obj1-e', text: 'Our AI is very accurate and should not have false positive problems', isCorrect: false, points: 0, feedback: 'This dismisses a critical concern. You missed acknowledging the problem, explaining AI fundamentals (ML, behavioral analytics), providing metrics (80-90% reduction, 10K to 500 alerts), continuous learning, and IBM expert support.' },
          { id: 'obj1-f', text: 'AI-powered tools are better than traditional security tools', isCorrect: false, points: 0, feedback: 'Too generic without addressing the concern. You missed explaining how AI works (ML, behavioral analytics), quantifying improvement (80-90% reduction), providing examples (10K to 500 alerts), and offering expert tuning support.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj2-a', text: 'Acknowledge zero downtime is absolutely critical for banking operations, designed implementation approach specifically to avoid disruption, deploy in monitor-only mode initially where AI observes and learns without blocking any traffic, implement in phases starting with non-critical systems then gradually expand to production banking systems, schedule any infrastructure changes during maintenance windows, run parallel with existing security tools during transition maintaining current protection while adding AI capabilities, provide 24x7 support during implementation, AI-powered threat detection deployed as overlay on existing infrastructure not requiring replacing or modifying core banking systems, gain enhanced security without touching production banking applications, successfully deployed this approach at 50+ banks with zero downtime', isCorrect: true, points: 4, feedback: 'Excellent! You acknowledged the requirement, explained monitor-only mode, described phased approach, emphasized parallel operation, positioned as overlay not replacement, provided 24x7 support, and offered track record (50+ banks, zero downtime). This fully addresses downtime concerns.' },
          { id: 'obj2-b', text: 'Zero downtime is critical, deploy in monitor-only mode initially, phased approach starting with non-critical systems, parallel operation with existing security tools, overlay on existing infrastructure not replacement, 50+ banks deployed with zero downtime', isCorrect: true, points: 3, feedback: 'Good response! You covered key deployment strategies and track record. Adding 24x7 support and maintenance window scheduling would strengthen this.' },
          { id: 'obj2-c', text: 'Monitor-only mode for initial deployment, phased implementation starting with non-critical systems, parallel with existing tools, deployed as overlay not replacement of core systems, proven at many banks with zero downtime', isCorrect: true, points: 3, feedback: 'Solid response covering deployment approach. Adding specific bank count (50+) and 24x7 support would enhance this.' },
          { id: 'obj2-d', text: 'Phased deployment approach, monitor-only mode initially, parallel operation with current security, overlay on existing infrastructure, proven zero-downtime track record', isCorrect: true, points: 3, feedback: 'Good coverage of deployment strategy. More detail on phasing (non-critical first) and specific track record (50+ banks) would make this stronger.' },
          { id: 'obj2-e', text: 'We will be careful during implementation to minimize disruption', isCorrect: false, points: 0, feedback: 'This doesn\'t address the zero-downtime requirement. You missed monitor-only mode, phased approach, parallel operation, overlay positioning, 24x7 support, and the proven track record at 50+ banks.' },
          { id: 'obj2-f', text: 'Implementation will be done during off-hours to avoid disruption', isCorrect: false, points: 0, feedback: 'This misses the comprehensive approach needed. You missed monitor-only mode, phased deployment, parallel operation, overlay architecture, 24x7 support, and the critical 50+ bank zero-downtime track record.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj3-a', text: 'Reframe: security team being overwhelmed is exactly why need AI-powered threat detection as it actually reduces their workload not increases it, AI reduces false positives by 80-90% so instead of investigating 9,500 false alarms daily they investigate 50 real threats, automated incident response handles routine threats without human intervention (malware quarantine, credential resets, network isolation), AI provides context and recommendations for each alert so analysts spend less time investigating and more time responding, threat hunting becomes proactive instead of reactive as AI identifies patterns and anomalies automatically, provide comprehensive training and IBM Security experts for ongoing support, result is security team becomes more effective and less overwhelmed focusing on strategic security initiatives instead of chasing false positives, seen security teams reduce alert investigation time by 70% while improving threat detection by 300%', isCorrect: true, points: 4, feedback: 'Outstanding! You reframed as workload reduction, quantified false positive reduction (80-90%, 9,500 to 50 alerts), explained automated response, described AI context/recommendations, emphasized proactive hunting, offered training and expert support, and provided compelling metrics (70% less time, 300% better detection). This fully addresses team capacity concerns.' },
          { id: 'obj3-b', text: 'AI reduces workload not increases it, reduces false positives by 80-90%, automated incident response handles routine threats, AI provides context and recommendations, proactive threat hunting, training and IBM Security expert support, teams reduce investigation time by 70% while improving detection by 300%', isCorrect: true, points: 3, feedback: 'Good response! You covered workload reduction and key benefits. Adding specific example (9,500 to 50 alerts) would strengthen this.' },
          { id: 'obj3-c', text: 'AI-powered detection reduces false positives significantly, automated response handles routine threats, provides context for analysts, proactive threat hunting, comprehensive training and support, teams become more effective', isCorrect: true, points: 3, feedback: 'Solid response covering key benefits. Adding specific metrics (80-90% reduction, 70% less time, 300% better detection) would enhance this.' },
          { id: 'obj3-d', text: 'Reduces false positives dramatically, automates routine responses, provides analyst context, enables proactive hunting, training and expert support available, improves team effectiveness', isCorrect: true, points: 3, feedback: 'Good coverage of benefits. Specific quantification (80-90%, 9,500 to 50 alerts, 70%/300% metrics) would make this more compelling.' },
          { id: 'obj3-e', text: 'The tool is easy to use and should not add much workload', isCorrect: false, points: 0, feedback: 'This misses the reframing opportunity. You missed that AI reduces workload (80-90% fewer false positives, 9,500 to 50 alerts), automates responses, provides context, enables proactive hunting, and delivers 70% less investigation time with 300% better detection.' },
          { id: 'obj3-f', text: 'We will provide training so your team can manage the new tool', isCorrect: false, points: 0, feedback: 'This doesn\'t address the overwhelm concern. You missed the workload reduction (80-90% fewer false positives), automation benefits, AI context, proactive hunting, and the compelling metrics (70% less time, 300% better detection).' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj4-a', text: 'Show why this is actually cost reduction and risk mitigation investment, today spending $7M annually on cybersecurity problems: $3M ransomware recovery, $2M account takeover fraud, $1.5M security team overtime, $500K potential fines, cyber insurance premiums increased $300K after attack totaling $7.3M in annual costs, solution costs $4M initially plus $400K annually, conservative benefits: prevent one ransomware attack = $3M savings, reduce account takeover fraud by 50% = $1M savings, reduce security team overtime by 40% = $600K savings, lower cyber insurance premiums by 20% = $300K savings, total annual benefit $4.9M, payback in 10 months, year 2 and beyond $4.5M annual net benefit, plus avoid regulatory fines, reputation damage, and customer trust issues, not an expense but investment that pays for itself in 10 months and generates $4.5M annually thereafter while significantly reducing cyber risk', isCorrect: true, points: 4, feedback: 'Excellent! You led with quantified business case, showed current costs ($7.3M), provided conservative benefits ($4.9M), calculated payback (10 months), emphasized ongoing benefits ($4.5M), and reframed as investment with measurable ROI. This provides complete financial justification.' },
          { id: 'obj4-b', text: 'Current state costs $7.3M annually (ransomware, fraud, overtime, premiums), solution costs $4M initially plus $400K annually, conservative benefits $4.9M annually, payback in 10 months, year 2+ generates $4.5M annual net benefit', isCorrect: true, points: 3, feedback: 'Good business case! You quantified costs and benefits with clear payback. Adding specific benefit breakdown and reframing as investment would strengthen this.' },
          { id: 'obj4-c', text: 'Spending $7M+ annually on cybersecurity problems (ransomware, fraud, overtime), solution delivers $4.9M annual benefits, payback in 10 months, ongoing $4.5M annual benefit', isCorrect: true, points: 3, feedback: 'Solid response covering costs and benefits. Adding solution cost and detailed benefit calculation would enhance this.' },
          { id: 'obj4-d', text: 'Current costs and losses are $7.3M annually, solution costs $4M, delivers $4.9M annual benefits, 10-month payback, $4.5M ongoing benefit', isCorrect: true, points: 3, feedback: 'Good coverage of financial case. Specific benefit breakdown (ransomware prevention, fraud reduction, overtime savings, insurance) would make this stronger.' },
          { id: 'obj4-e', text: 'The investment will pay for itself over time through reduced security incidents', isCorrect: false, points: 0, feedback: 'Too vague for CFO. You missed quantifying current costs ($7.3M), solution cost ($4M), specific benefits ($4.9M), payback period (10 months), ongoing benefits ($4.5M), and reframing as investment.' },
          { id: 'obj4-f', text: 'This is a necessary investment to protect the bank', isCorrect: false, points: 0, feedback: 'This doesn\'t provide financial justification. You missed all quantification: current costs, solution cost, benefit breakdown, payback calculation, ongoing benefits, and the compelling ROI story.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        responseChoices: [
          { id: 'obj5-a', text: 'Acknowledge protecting legitimate banking transactions while blocking threats is absolutely critical, have multiple safeguards to prevent false blocking, deploy in monitor-only mode for 30-60 days to establish baselines and tune AI before any blocking occurs, implement graduated response where suspicious activity triggers additional authentication not immediate blocking, maintain whitelists for known-good transactions and users, provide real-time override capabilities for security analysts, implement rollback procedures if any issues occur, start with high-confidence threats (malware, known bad IPs) before expanding to behavioral anomalies, AI learns specific banking patterns and customer behaviors, industry data shows AI-powered security has 99.9%+ accuracy for legitimate transactions while detecting 95%+ of real threats, provide IBM Security experts during implementation to ensure proper tuning, risk of blocking legitimate transactions is far lower than risk of missing ransomware attack or account takeover', isCorrect: true, points: 4, feedback: 'Outstanding! You acknowledged the concern, explained monitor-only mode (30-60 days), described graduated response, emphasized safeguards (whitelists, overrides, rollback), explained phased approach (high-confidence first), provided accuracy metrics (99.9%+, 95%+), offered IBM expert support, and reframed the risk. This fully addresses transaction blocking concerns.' },
          { id: 'obj5-b', text: 'Legitimate transaction protection is critical, monitor-only mode for 30-60 days before blocking, graduated response with additional authentication not immediate blocking, whitelists and override capabilities, start with high-confidence threats, 99.9%+ accuracy for legitimate transactions, IBM Security experts ensure proper tuning', isCorrect: true, points: 3, feedback: 'Good response! You covered key safeguards and metrics. Adding rollback procedures and risk reframing would strengthen this.' },
          { id: 'obj5-c', text: 'Multiple safeguards to prevent false blocking, monitor-only mode initially, graduated response not immediate blocking, whitelists and overrides, AI learns banking patterns, 99.9%+ accuracy for legitimate transactions, expert tuning available', isCorrect: true, points: 3, feedback: 'Solid response covering safeguards and accuracy. Adding specific timeframe (30-60 days) and risk comparison would enhance this.' },
          { id: 'obj5-d', text: 'Monitor-only mode before blocking, graduated response approach, whitelists and override capabilities, high-confidence threats first, very high accuracy for legitimate transactions, IBM experts help tune', isCorrect: true, points: 3, feedback: 'Good coverage of safeguards. Specific metrics (30-60 days, 99.9%+ accuracy) and risk reframing would make this stronger.' },
          { id: 'obj5-e', text: 'The AI is very accurate and should not block legitimate transactions', isCorrect: false, points: 0, feedback: 'This dismisses a critical concern. You missed monitor-only mode (30-60 days), graduated response, safeguards (whitelists, overrides, rollback), phased approach, accuracy metrics (99.9%+), IBM expert support, and risk reframing.' },
          { id: 'obj5-f', text: 'We have controls in place to prevent false blocking', isCorrect: false, points: 0, feedback: 'Too generic without addressing the concern. You missed monitor-only mode, graduated response, specific safeguards, phased approach, accuracy metrics, expert tuning, and the critical risk comparison.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Data center lease expiring in 18 months ($2M annually) and infrastructure end-of-life ($5M refresh)', isCorrect: true, points: 4, feedback: 'Excellent - identified the urgent cost drivers with specific timelines and amounts.' },
          { id: 'q1-b', text: 'Board mandate for cloud-first strategy to compete with digital-first banks', isCorrect: true, points: 3, feedback: 'Good - recognized the strategic imperative and competitive pressure.' },
          { id: 'q1-c', text: 'Need to reduce costs while improving agility for faster innovation', isCorrect: true, points: 3, feedback: 'Good - identified the dual objectives of cost reduction and business agility.' },
          { id: 'q1-d', text: 'Multiple drivers including cost, agility, and strategic transformation', isCorrect: true, points: 3, feedback: 'Good - recognized this is a multi-faceted initiative, not a single driver.' },
          { id: 'q1-e', text: 'Just following industry trends and what competitors are doing', isCorrect: false, points: 0, feedback: 'Too vague - need to understand specific business drivers, not just trends.' },
          { id: 'q1-f', text: 'IT department wants to learn new cloud technologies', isCorrect: false, points: 0, feedback: 'Wrong focus - cloud migration must be driven by business needs, not IT preferences.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify costs and timeline', 'Understand strategic context']
      },
      {
        question: 'Which applications are you planning to migrate to cloud? What are your priorities?',
        purpose: 'Understand application portfolio and migration priorities',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Core banking (Jack Henry Silverlake) is priority #1 - most critical but also most complex', isCorrect: true, points: 4, feedback: 'Excellent - identified the most critical application and acknowledged its complexity.' },
          { id: 'q2-b', text: 'Customer portal and mobile banking are #2 - easier to migrate and high business value', isCorrect: true, points: 3, feedback: 'Good - recognized lower-risk applications with high business value for early wins.' },
          { id: 'q2-c', text: 'Loan origination system is #3, start with dev/test to build confidence', isCorrect: true, points: 3, feedback: 'Good - understood the phased approach starting with lower-risk environments.' },
          { id: 'q2-d', text: 'Need to prioritize based on complexity, business value, and risk tolerance', isCorrect: true, points: 3, feedback: 'Good - recognized the multiple factors that drive migration prioritization.' },
          { id: 'q2-e', text: 'Migrate everything at once to minimize disruption', isCorrect: false, points: 0, feedback: 'Too risky - big bang migrations rarely succeed, especially for critical banking systems.' },
          { id: 'q2-f', text: 'Start with the most complex applications first', isCorrect: false, points: 0, feedback: 'Wrong approach - should start with simpler apps to build confidence and learn.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify application portfolio', 'Understand migration priorities', 'Assess complexity and risk']
      },
      {
        question: 'What are your security and compliance requirements for cloud? How do you handle data sovereignty?',
        purpose: 'Identify security, compliance, and regulatory constraints',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Must comply with FFIEC cloud guidance, GLBA, and state banking regulations', isCorrect: true, points: 4, feedback: 'Excellent - identified the key regulatory frameworks for banking cloud deployments.' },
          { id: 'q3-b', text: 'Data must stay in US, need SOC 2 compliance and encryption at rest/in transit', isCorrect: true, points: 3, feedback: 'Good - understood data sovereignty requirements and security controls.' },
          { id: 'q3-c', text: 'Must pass bank audits, Chief Risk Officer very concerned about third-party risk', isCorrect: true, points: 3, feedback: 'Good - recognized audit requirements and key stakeholder concerns.' },
          { id: 'q3-d', text: 'Need dedicated infrastructure (not multi-tenant) for regulatory compliance', isCorrect: true, points: 3, feedback: 'Good - understood that banking regulations often require dedicated infrastructure.' },
          { id: 'q3-e', text: 'Cloud security is the vendor\'s responsibility, not ours', isCorrect: false, points: 0, feedback: 'Wrong - shared responsibility model means bank retains significant security obligations.' },
          { id: 'q3-f', text: 'Compliance requirements are the same as on-premises', isCorrect: false, points: 0, feedback: 'Incorrect - cloud introduces new compliance considerations and third-party risk.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify regulatory requirements', 'Understand data sovereignty needs', 'Address stakeholder concerns']
      },
      {
        question: 'What is your current disaster recovery situation? What are your RTO and RPO requirements?',
        purpose: 'Understand DR requirements and current gaps',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Current DR site costs $800K annually with 4-hour RTO and 1-hour RPO', isCorrect: true, points: 4, feedback: 'Excellent - quantified current DR costs and capabilities with specific metrics.' },
          { id: 'q4-b', text: 'Recent audit highlighted DR gaps, need 1-hour RTO and 15-minute RPO for core banking', isCorrect: true, points: 3, feedback: 'Good - identified audit findings and specific requirements for critical systems.' },
          { id: 'q4-c', text: 'Board concerned about business continuity after seeing ransomware attacks on other banks', isCorrect: true, points: 3, feedback: 'Good - recognized the strategic importance and board-level concern about DR.' },
          { id: 'q4-d', text: 'Need immutable backups and cyber vault capabilities to protect against ransomware', isCorrect: true, points: 3, feedback: 'Good - understood modern DR requirements include ransomware protection.' },
          { id: 'q4-e', text: 'DR is not a priority - focus on cost savings first', isCorrect: false, points: 0, feedback: 'Wrong - DR is critical for banking and often a regulatory requirement.' },
          { id: 'q4-f', text: 'Cloud automatically provides DR, no planning needed', isCorrect: false, points: 0, feedback: 'Incorrect - DR must be architected and configured, not automatic.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Quantify current DR costs', 'Identify RTO/RPO requirements', 'Understand audit findings']
      },
      {
        question: 'How do you plan to handle the migration? Big bang or phased approach?',
        purpose: 'Understand migration strategy and risk tolerance',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Phased approach - cannot afford downtime, start with dev/test then non-critical apps', isCorrect: true, points: 4, feedback: 'Excellent - recognized the need for phased migration to minimize risk.' },
          { id: 'q5-b', text: 'Need parallel run capability - keep on-premises running during migration', isCorrect: true, points: 3, feedback: 'Good - understood the importance of parallel operations for zero-downtime migration.' },
          { id: 'q5-c', text: 'Timeline is 12-18 months with data center lease expiring in 18 months', isCorrect: true, points: 3, feedback: 'Good - identified the timeline constraint and urgency driver.' },
          { id: 'q5-d', text: 'Migrate core banking last after proving approach with simpler applications', isCorrect: true, points: 3, feedback: 'Good - understood the risk-based sequencing with most critical system last.' },
          { id: 'q5-e', text: 'Big bang migration over a weekend to minimize disruption', isCorrect: false, points: 0, feedback: 'Too risky - banking systems are too complex and critical for big bang approach.' },
          { id: 'q5-f', text: 'No need for parallel run - just cutover and fix issues later', isCorrect: false, points: 0, feedback: 'Unacceptable risk - banking systems require validated parallel operations.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Understand risk tolerance', 'Identify migration timeline', 'Assess parallel run needs']
      },
      {
        question: 'What is your team\'s cloud experience? Do you need training or managed services?',
        purpose: 'Assess team capabilities and support needs',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Limited cloud experience - mostly on-premises, VP of IT Ops concerned about team skills', isCorrect: true, points: 4, feedback: 'Excellent - honestly assessed current capabilities and identified stakeholder concerns.' },
          { id: 'q6-b', text: 'Will need training and potentially managed services during migration', isCorrect: true, points: 3, feedback: 'Good - recognized the need for external support during transition.' },
          { id: 'q6-c', text: 'Long-term goal is to build internal cloud capabilities, not permanent outsourcing', isCorrect: true, points: 3, feedback: 'Good - understood the strategic objective of building internal expertise.' },
          { id: 'q6-d', text: 'Need knowledge transfer and skills development plan as part of migration', isCorrect: true, points: 3, feedback: 'Good - recognized that migration should include team enablement.' },
          { id: 'q6-e', text: 'Team already has all needed cloud skills', isCorrect: false, points: 0, feedback: 'Unrealistic - most on-premises teams need cloud training and support.' },
          { id: 'q6-f', text: 'Will hire all new cloud engineers and replace current team', isCorrect: false, points: 0, feedback: 'Wrong approach - should develop existing team who knows the business.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Assess team skills', 'Identify training needs', 'Understand support model preferences']
      },
      {
        question: 'What is your budget for cloud migration and ongoing operational costs?',
        purpose: 'Understand budget constraints and TCO expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Board approved $4-6M for migration, CFO wants 30% reduction in total IT costs within 3 years', isCorrect: true, points: 4, feedback: 'Excellent - quantified both migration budget and TCO reduction expectations.' },
          { id: 'q7-b', text: 'Currently spending $2M data center + $800K DR + $500K maintenance = $3.3M annually', isCorrect: true, points: 3, feedback: 'Good - documented current costs to establish baseline for TCO comparison.' },
          { id: 'q7-c', text: 'Need predictable monthly costs, concerned about cloud cost variability', isCorrect: true, points: 3, feedback: 'Good - identified the need for cost predictability and management.' },
          { id: 'q7-d', text: 'Must avoid $5M infrastructure refresh by migrating to cloud', isCorrect: true, points: 3, feedback: 'Good - recognized the avoided capital expense as part of business case.' },
          { id: 'q7-e', text: 'Budget is unlimited - just need the best solution', isCorrect: false, points: 0, feedback: 'Unrealistic - all projects have budget constraints that must be understood.' },
          { id: 'q7-f', text: 'Cloud will definitely be cheaper, no need to calculate TCO', isCorrect: false, points: 0, feedback: 'Wrong - must build detailed TCO model to validate business case.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify migration budget', 'Understand TCO expectations', 'Identify cost reduction targets']
      },
      {
        question: 'Who are the key stakeholders and decision makers? What are their concerns?',
        purpose: 'Map stakeholder landscape and address concerns',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'CIO is champion driving cloud strategy, CFO is neutral and concerned about costs', isCorrect: true, points: 4, feedback: 'Excellent - mapped key executives and their positions on the initiative.' },
          { id: 'q8-b', text: 'Chief Risk Officer is skeptic - worried about security, compliance, and third-party risk', isCorrect: true, points: 3, feedback: 'Good - identified the key skeptic and their specific concerns to address.' },
          { id: 'q8-c', text: 'VP of IT Ops is supporter but concerned about team skills and support model', isCorrect: true, points: 3, feedback: 'Good - recognized supporter with specific concerns that need addressing.' },
          { id: 'q8-d', text: 'Board approval required - need strong business case with risk mitigation', isCorrect: true, points: 3, feedback: 'Good - understood the decision process and what\'s needed for approval.' },
          { id: 'q8-e', text: 'Only need to convince the CIO, others will follow', isCorrect: false, points: 0, feedback: 'Wrong - major cloud initiatives require alignment across multiple executives.' },
          { id: 'q8-f', text: 'All stakeholders are aligned and supportive', isCorrect: false, points: 0, feedback: 'Unrealistic - cloud migrations typically have skeptics that must be addressed.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        customResponse: '',
        responseChoices: [
          { id: 'obj1-a', text: 'IBM Power Virtual Server provides predictable consumption-based pricing with no hidden fees', isCorrect: true, points: 4, feedback: 'Excellent - addressed pricing transparency and predictability upfront.' },
          { id: 'obj1-b', text: 'Right-size workloads before migration and use reserved instances for 30-40% savings', isCorrect: true, points: 3, feedback: 'Good - provided specific cost optimization strategies with quantified savings.' },
          { id: 'obj1-c', text: 'IBM Cloud cost management tools with budgets, alerts, and monthly reviews', isCorrect: true, points: 3, feedback: 'Good - outlined proactive cost management and governance approach.' },
          { id: 'obj1-d', text: 'Typical customers see 30-40% total cost reduction vs on-premises when properly managed', isCorrect: true, points: 3, feedback: 'Good - quantified expected savings to set realistic expectations.' },
          { id: 'obj1-e', text: 'Cloud costs are always lower than on-premises, no management needed', isCorrect: false, points: 0, feedback: 'Wrong - cloud requires active cost management to realize savings.' },
          { id: 'obj1-f', text: 'Just pay the bills and don\'t worry about optimization', isCorrect: false, points: 0, feedback: 'Unacceptable - CFO needs proactive cost management strategy.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj2-a', text: 'IBM Power Virtual Server provides dedicated infrastructure - not multi-tenant shared resources', isCorrect: true, points: 4, feedback: 'Excellent - led with dedicated infrastructure which addresses key banking security concern.' },
          { id: 'obj2-b', text: 'SOC 2, PCI-DSS, ISO 27001 certifications with US data centers for data sovereignty', isCorrect: true, points: 3, feedback: 'Good - listed relevant compliance certifications and addressed data sovereignty.' },
          { id: 'obj2-c', text: 'FFIEC-compliant architecture with encryption at rest and in transit', isCorrect: true, points: 3, feedback: 'Good - addressed banking-specific compliance and security controls.' },
          { id: 'obj2-d', text: 'IBM has 50+ years serving financial services, can provide audit support and compliance documentation', isCorrect: true, points: 3, feedback: 'Good - emphasized IBM financial services expertise and audit support.' },
          { id: 'obj2-e', text: 'Cloud is automatically compliant, no additional work needed', isCorrect: false, points: 0, feedback: 'Wrong - compliance requires shared responsibility and ongoing validation.' },
          { id: 'obj2-f', text: 'Security is the cloud provider\'s problem, not the bank\'s', isCorrect: false, points: 0, feedback: 'Incorrect - shared responsibility model means bank retains significant obligations.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj3-a', text: 'IBM Power Virtual Server uses familiar Linux/AIX - your team already knows these technologies', isCorrect: true, points: 4, feedback: 'Excellent - emphasized familiar technologies to reduce skills gap concern.' },
          { id: 'obj3-b', text: 'IBM Cloud training and certification programs (free for customers) with 2-3 weeks typical ramp-up', isCorrect: true, points: 3, feedback: 'Good - outlined training programs with realistic timeline for skills development.' },
          { id: 'obj3-c', text: 'IBM Expert Labs provides migration services with knowledge transfer to your team', isCorrect: true, points: 3, feedback: 'Good - offered migration services that build internal capabilities.' },
          { id: 'obj3-d', text: 'Managed services option during transition, gradual skills building through phased migration', isCorrect: true, points: 3, feedback: 'Good - provided transition support while building long-term internal capabilities.' },
          { id: 'obj3-e', text: 'You need to hire all new cloud engineers immediately', isCorrect: false, points: 0, feedback: 'Wrong approach - should develop existing team who knows the business.' },
          { id: 'obj3-f', text: 'Cloud is so easy anyone can manage it without training', isCorrect: false, points: 0, feedback: 'Unrealistic - proper training and support are essential for success.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased migration starting with dev/test (no business impact), then non-critical apps, core banking last', isCorrect: true, points: 4, feedback: 'Excellent - outlined risk-based phased approach that builds confidence.' },
          { id: 'obj4-b', text: 'Parallel run capability - keep on-premises running during migration with immediate rollback', isCorrect: true, points: 3, feedback: 'Good - addressed zero-downtime requirement with parallel operations.' },
          { id: 'obj4-c', text: 'IBM Expert Labs has migrated 500+ banking workloads with 99.8% success rate', isCorrect: true, points: 3, feedback: 'Good - provided credibility with specific success statistics.' },
          { id: 'obj4-d', text: 'Automated migration tools, cutover during maintenance windows, detailed migration plan with risk mitigation', isCorrect: true, points: 3, feedback: 'Good - outlined specific risk mitigation strategies and planning.' },
          { id: 'obj4-e', text: 'Big bang migration over a weekend - fastest approach', isCorrect: false, points: 0, feedback: 'Too risky - banking systems require phased approach with validation.' },
          { id: 'obj4-f', text: 'Migrations never fail, no need to worry', isCorrect: false, points: 0, feedback: 'Unrealistic - must acknowledge risks and provide mitigation strategies.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj5-a', text: 'IBM Power Virtual Server uses open standards - Linux, AIX, standard APIs for portability', isCorrect: true, points: 4, feedback: 'Excellent - addressed lock-in concern with open standards approach.' },
          { id: 'obj5-b', text: 'Portable workloads can run on-premises or other clouds, no proprietary dependencies', isCorrect: true, points: 3, feedback: 'Good - emphasized workload portability and flexibility.' },
          { id: 'obj5-c', text: 'Hybrid cloud architecture allows keeping some workloads on-premises for flexibility', isCorrect: true, points: 3, feedback: 'Good - highlighted hybrid approach that avoids all-or-nothing commitment.' },
          { id: 'obj5-d', text: 'For banking, stability and compliance more important than portability - IBM 50+ year track record', isCorrect: true, points: 3, feedback: 'Good - balanced portability concern with banking-specific stability needs.' },
          { id: 'obj5-e', text: 'Once you migrate to IBM, you can never leave', isCorrect: false, points: 0, feedback: 'Wrong - reinforces lock-in concern rather than addressing it.' },
          { id: 'obj5-f', text: 'Vendor lock-in is not a real concern, just ignore it', isCorrect: false, points: 0, feedback: 'Dismissive - must acknowledge concern and provide architectural flexibility.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Open banking regulations require API access in 18 months - regulatory compliance deadline', isCorrect: true, points: 4, feedback: 'Excellent - identified the regulatory driver with specific timeline.' },
          { id: 'q1-b', text: 'Losing $5M annually to digital banks with better integrations and fintech partnerships', isCorrect: true, points: 3, feedback: 'Good - quantified the competitive revenue loss driving urgency.' },
          { id: 'q1-c', text: 'Have $3M+ in fintech partnership opportunities we cannot pursue without APIs', isCorrect: true, points: 3, feedback: 'Good - identified the strategic revenue opportunity.' },
          { id: 'q1-d', text: 'Board has made API platform a strategic priority for digital transformation', isCorrect: true, points: 3, feedback: 'Good - recognized executive-level strategic commitment.' },
          { id: 'q1-e', text: 'Just want to modernize our technology stack', isCorrect: false, points: 0, feedback: 'Too vague - need to understand specific business drivers, not just technology refresh.' },
          { id: 'q1-f', text: 'Competitors have APIs so we should too', isCorrect: false, points: 0, feedback: 'Weak justification - need to understand specific business impact and urgency.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue impact', 'Understand regulatory timeline']
      },
      {
        question: 'What banking services do you want to expose via APIs? Accounts, payments, loans, or something else?',
        purpose: 'Understand API scope and prioritization',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Phase 1: Account information (balances, transactions) and payment initiation - required for open banking', isCorrect: true, points: 4, feedback: 'Excellent - prioritized regulatory requirements for Phase 1.' },
          { id: 'q2-b', text: 'Phase 2: Loan origination, credit cards, and wealth management services', isCorrect: true, points: 3, feedback: 'Good - identified additional services for expansion after core compliance.' },
          { id: 'q2-c', text: 'Phase 3: Advanced services like fraud detection and personalization', isCorrect: true, points: 3, feedback: 'Good - recognized future innovation opportunities beyond basic banking.' },
          { id: 'q2-d', text: 'Start with regulatory requirements then expand to value-added services', isCorrect: true, points: 3, feedback: 'Good - understood the phased approach from compliance to innovation.' },
          { id: 'q2-e', text: 'Expose everything at once to maximize value', isCorrect: false, points: 0, feedback: 'Too risky - phased approach is better for managing complexity and risk.' },
          { id: 'q2-f', text: 'Only expose read-only data, never allow transactions', isCorrect: false, points: 0, feedback: 'Too limited - open banking requires payment initiation, not just read access.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify phased approach', 'Prioritize regulatory requirements', 'Understand full scope']
      },
      {
        question: 'Who are your target API consumers? Fintechs, corporate customers, internal developers, or all of the above?',
        purpose: 'Understand API consumer landscape and use cases',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'External fintechs for partnerships (competing with Plaid, Stripe)', isCorrect: true, points: 4, feedback: 'Excellent - identified key external consumer segment and competitive context.' },
          { id: 'q3-b', text: 'Corporate customers for treasury management and payment integrations', isCorrect: true, points: 3, feedback: 'Good - recognized B2B use case for enterprise customers.' },
          { id: 'q3-c', text: 'Internal developers for mobile app and digital banking features', isCorrect: true, points: 3, feedback: 'Good - understood internal consumption for own digital channels.' },
          { id: 'q3-d', text: 'Each audience has different needs - fintechs need comprehensive APIs, corporates need specific integrations', isCorrect: true, points: 3, feedback: 'Good - recognized that different consumers have different requirements.' },
          { id: 'q3-e', text: 'Only internal developers - too risky to expose APIs externally', isCorrect: false, points: 0, feedback: 'Too limited - open banking requires external access, missing revenue opportunities.' },
          { id: 'q3-f', text: 'Anyone who wants to use them - no segmentation needed', isCorrect: false, points: 0, feedback: 'Too broad - need to understand different consumer segments and their needs.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Identify multiple consumer types', 'Understand different use cases', 'Assess volume expectations']
      },
      {
        question: 'What are your API security and compliance requirements? How do you handle authentication and authorization?',
        purpose: 'Identify security, compliance, and risk management needs',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Must comply with open banking security standards (OAuth 2.0, strong customer authentication)', isCorrect: true, points: 4, feedback: 'Excellent - identified specific security standards required for open banking.' },
          { id: 'q4-b', text: 'Chief Risk Officer very concerned about data exposure and fraud risk', isCorrect: true, points: 3, feedback: 'Good - recognized key stakeholder security concerns.' },
          { id: 'q4-c', text: 'Need API gateway with rate limiting, threat detection, and comprehensive audit logging', isCorrect: true, points: 3, feedback: 'Good - identified specific security controls and monitoring requirements.' },
          { id: 'q4-d', text: 'Must pass bank audits and manage third-party risk for fintech partners', isCorrect: true, points: 3, feedback: 'Good - understood audit requirements and third-party risk management.' },
          { id: 'q4-e', text: 'Security is not a concern - APIs are inherently secure', isCorrect: false, points: 0, feedback: 'Dangerous assumption - API security is critical for banking and requires multiple controls.' },
          { id: 'q4-f', text: 'Just use basic username/password authentication', isCorrect: false, points: 0, feedback: 'Insufficient - open banking requires OAuth 2.0 and strong customer authentication.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify security standards', 'Address stakeholder concerns', 'Understand audit requirements']
      },
      {
        question: 'Do you have a developer portal and API documentation strategy? How will developers discover and use your APIs?',
        purpose: 'Understand developer experience and onboarding needs',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Have nothing today - no developer portal, no API docs, no sandbox environment', isCorrect: true, points: 4, feedback: 'Excellent - honestly assessed current state showing need for complete solution.' },
          { id: 'q5-b', text: 'Chief Digital Officer wants world-class developer experience to attract fintech partners', isCorrect: true, points: 3, feedback: 'Good - identified stakeholder expectation for high-quality developer experience.' },
          { id: 'q5-c', text: 'Need self-service onboarding, interactive API docs, sandbox for testing, and developer support', isCorrect: true, points: 3, feedback: 'Good - outlined comprehensive developer experience requirements.' },
          { id: 'q5-d', text: 'Want to launch developer portal with initial APIs - developer experience is competitive differentiator', isCorrect: true, points: 3, feedback: 'Good - recognized that developer experience drives API adoption and success.' },
          { id: 'q5-e', text: 'Developers can figure it out themselves - no portal needed', isCorrect: false, points: 0, feedback: 'Wrong - poor developer experience will prevent API adoption and partnerships.' },
          { id: 'q5-f', text: 'Just provide PDF documentation', isCorrect: false, points: 0, feedback: 'Insufficient - modern APIs require interactive docs, sandbox, and self-service onboarding.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Assess current state', 'Identify developer experience needs', 'Understand onboarding requirements']
      },
      {
        question: 'How do you plan to monetize your APIs? Free for partners, transaction fees, or subscription model?',
        purpose: 'Understand business model and revenue expectations',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Hybrid model: Free tier for open banking compliance, premium APIs with transaction fees', isCorrect: true, points: 4, feedback: 'Excellent - identified multi-tier monetization strategy balancing compliance and revenue.' },
          { id: 'q6-b', text: 'Premium APIs targeting $5M annual revenue from fintech partnerships', isCorrect: true, points: 3, feedback: 'Good - quantified revenue target for API monetization.' },
          { id: 'q6-c', text: 'Enterprise pricing for corporate customers with high-volume usage', isCorrect: true, points: 3, feedback: 'Good - recognized B2B monetization opportunity with different pricing.' },
          { id: 'q6-d', text: 'CFO wants clear monetization strategy and ROI, need API analytics to track usage and revenue', isCorrect: true, points: 3, feedback: 'Good - understood need for analytics and business case justification.' },
          { id: 'q6-e', text: 'All APIs should be free - monetization is not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO needs revenue justification, missing $5M+ opportunity.' },
          { id: 'q6-f', text: 'Charge for everything including regulatory compliance APIs', isCorrect: false, points: 0, feedback: 'Incorrect - open banking compliance APIs must be free per regulations.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify monetization strategy', 'Quantify revenue targets', 'Understand pricing models']
      },
      {
        question: 'What is your timeline for launching the API platform? Are there regulatory deadlines?',
        purpose: 'Understand timeline constraints and phasing',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Open banking compliance deadline in 18 months - hard regulatory requirement', isCorrect: true, points: 4, feedback: 'Excellent - identified the regulatory deadline driving timeline.' },
          { id: 'q7-b', text: 'Want Phase 1 (account info, payments) in 9-12 months to get ahead of deadline', isCorrect: true, points: 3, feedback: 'Good - understood phased approach with buffer before regulatory deadline.' },
          { id: 'q7-c', text: 'Phase 2 (loans, cards) in 18 months, Phase 3 (advanced services) in 24 months', isCorrect: true, points: 3, feedback: 'Good - outlined multi-phase roadmap beyond initial compliance.' },
          { id: 'q7-d', text: 'Need quick wins to build momentum and start fintech partnerships early', isCorrect: true, points: 3, feedback: 'Good - recognized importance of early success to drive adoption.' },
          { id: 'q7-e', text: 'No rush - can take 3-4 years to build properly', isCorrect: false, points: 0, feedback: 'Too slow - regulatory deadline in 18 months, competitive pressure requires faster action.' },
          { id: 'q7-f', text: 'Launch everything in 3 months', isCorrect: false, points: 0, feedback: 'Unrealistic - API platform requires proper planning, security, and testing.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Identify regulatory deadlines', 'Understand phased approach', 'Assess urgency']
      },
      {
        question: 'What is your budget for the API platform? How do you justify the investment?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Board approved $3-5M for initial platform plus ongoing operational costs', isCorrect: true, points: 4, feedback: 'Excellent - quantified budget with both initial and ongoing cost considerations.' },
          { id: 'q8-b', text: 'Business case: avoid $1M regulatory fines, capture $5M revenue loss, generate $5M from API monetization', isCorrect: true, points: 3, feedback: 'Good - identified multiple business case drivers with quantified benefits.' },
          { id: 'q8-c', text: 'Reduce integration costs by $2M annually by replacing manual processes', isCorrect: true, points: 3, feedback: 'Good - recognized operational cost savings from automation.' },
          { id: 'q8-d', text: 'CFO wants 24-month payback and clear path to profitability', isCorrect: true, points: 3, feedback: 'Good - understood ROI expectations and need for financial justification.' },
          { id: 'q8-e', text: 'Budget is unlimited - just build the best platform', isCorrect: false, points: 0, feedback: 'Unrealistic - all projects have budget constraints that must be managed.' },
          { id: 'q8-f', text: 'No business case needed - regulatory compliance is enough justification', isCorrect: false, points: 0, feedback: 'Insufficient - CFO needs full business case with revenue and cost benefits.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        customResponse: '',
        responseChoices: [
          { id: 'obj1-a', text: 'API Gateway with OAuth 2.0, strong customer authentication, and comprehensive token management', isCorrect: true, points: 4, feedback: 'Excellent - led with industry-standard authentication and authorization framework.' },
          { id: 'obj1-b', text: 'Real-time threat detection with Watson AI to identify suspicious API calls and prevent fraud', isCorrect: true, points: 3, feedback: 'Good - highlighted AI-powered security monitoring for proactive threat detection.' },
          { id: 'obj1-c', text: 'Rate limiting, DDoS protection, end-to-end encryption, and comprehensive audit logging', isCorrect: true, points: 3, feedback: 'Good - outlined multiple security controls and compliance requirements.' },
          { id: 'obj1-d', text: 'IBM has secured APIs for 100+ banks with zero breaches, follows OWASP standards', isCorrect: true, points: 3, feedback: 'Good - provided credibility with track record and industry standards.' },
          { id: 'obj1-e', text: 'APIs are inherently secure, no special measures needed', isCorrect: false, points: 0, feedback: 'Dangerous - API security requires multiple layers of controls and monitoring.' },
          { id: 'obj1-f', text: 'Just use HTTPS and you\'re secure', isCorrect: false, points: 0, feedback: 'Insufficient - banking APIs require OAuth 2.0, threat detection, and comprehensive controls.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj2-a', text: 'Pre-built API templates for common banking services - no need to build from scratch', isCorrect: true, points: 4, feedback: 'Excellent - led with accelerators that reduce time to market.' },
          { id: 'obj2-b', text: 'IBM API Connect provides complete platform out-of-the-box with developer portal and documentation tools', isCorrect: true, points: 3, feedback: 'Good - highlighted comprehensive platform that eliminates custom development.' },
          { id: 'obj2-c', text: 'Typical timeline: 3 months platform setup, 6 months for Phase 1 APIs, 9-12 months full launch', isCorrect: true, points: 3, feedback: 'Good - provided specific timeline with phased milestones.' },
          { id: 'obj2-d', text: 'IBM Expert Labs has launched 50+ banking API platforms with average 9-month time to market', isCorrect: true, points: 3, feedback: 'Good - provided credibility with track record and realistic expectations.' },
          { id: 'obj2-e', text: 'Can launch complete platform in 1 month', isCorrect: false, points: 0, feedback: 'Unrealistic - API platforms require proper planning, security, and testing.' },
          { id: 'obj2-f', text: 'Will take 3-4 years to build properly', isCorrect: false, points: 0, feedback: 'Too slow - regulatory deadline in 18 months, accelerators enable faster delivery.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj3-a', text: 'World-class developer portal with interactive API documentation (Swagger/OpenAPI) and sandbox environment', isCorrect: true, points: 4, feedback: 'Excellent - led with developer experience essentials that drive adoption.' },
          { id: 'obj3-b', text: 'Self-service onboarding - developers can sign up and start testing in minutes', isCorrect: true, points: 3, feedback: 'Good - highlighted frictionless onboarding that accelerates adoption.' },
          { id: 'obj3-c', text: 'SDKs and code samples in multiple languages (Python, Java, Node.js) with developer support', isCorrect: true, points: 3, feedback: 'Good - provided tools that make integration easy for developers.' },
          { id: 'obj3-d', text: 'IBM helps with go-to-market strategy and fintech partnerships - many banks see 50+ partners in first year', isCorrect: true, points: 3, feedback: 'Good - offered strategic support with quantified success metrics.' },
          { id: 'obj3-e', text: 'Developers will find us if we build it', isCorrect: false, points: 0, feedback: 'Wrong - requires proactive developer experience and marketing strategy.' },
          { id: 'obj3-f', text: 'Just publish API specs and let developers figure it out', isCorrect: false, points: 0, feedback: 'Insufficient - modern APIs require comprehensive developer experience and support.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj4-a', text: 'Flexible monetization: Free tier for compliance, transaction-based pricing for premium APIs, subscription plans', isCorrect: true, points: 4, feedback: 'Excellent - outlined multi-tier monetization strategy balancing compliance and revenue.' },
          { id: 'obj4-b', text: 'Typical banking API revenue: Year 1: $2M, Year 2: $5M, Year 3: $10M+ as ecosystem matures', isCorrect: true, points: 3, feedback: 'Good - provided realistic revenue projections showing growth trajectory.' },
          { id: 'obj4-c', text: 'Built-in usage tracking and billing integration with API analytics to track revenue and ROI', isCorrect: true, points: 3, feedback: 'Good - highlighted tools for revenue management and business case validation.' },
          { id: 'obj4-d', text: 'Many banks achieve 18-24 month payback on API platform investment', isCorrect: true, points: 3, feedback: 'Good - quantified ROI timeline to justify investment.' },
          { id: 'obj4-e', text: 'All APIs should be free - monetization is not possible', isCorrect: false, points: 0, feedback: 'Wrong - premium APIs can generate significant revenue beyond compliance.' },
          { id: 'obj4-f', text: 'Charge maximum prices for all APIs including compliance', isCorrect: false, points: 0, feedback: 'Incorrect - open banking compliance APIs must be free per regulations.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj5-a', text: 'API Gateway acts as abstraction layer - APIs do not directly access core banking systems', isCorrect: true, points: 4, feedback: 'Excellent - led with architectural pattern that protects legacy systems.' },
          { id: 'obj5-b', text: 'Integration layer transforms API calls to formats core banking understands (batch, file, or real-time)', isCorrect: true, points: 3, feedback: 'Good - explained how to bridge modern APIs with legacy systems.' },
          { id: 'obj5-c', text: 'Caching layer reduces load on core systems, asynchronous processing for complex operations', isCorrect: true, points: 3, feedback: 'Good - highlighted performance optimization that protects legacy infrastructure.' },
          { id: 'obj5-d', text: 'IBM Power E1080 handles 10,000+ API calls/second, integrated with all major core banking platforms', isCorrect: true, points: 3, feedback: 'Good - provided performance metrics and integration experience.' },
          { id: 'obj5-e', text: 'Need to replace core banking system first before APIs', isCorrect: false, points: 0, feedback: 'Wrong - abstraction layer allows APIs without core banking replacement.' },
          { id: 'obj5-f', text: 'Legacy systems cannot support APIs at all', isCorrect: false, points: 0, feedback: 'Incorrect - integration layer enables APIs with any core banking system.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing $10M annually to digital platforms, 7-10 day processing cannot compete with 24-hour platforms', isCorrect: true, points: 4, feedback: 'Excellent - quantified competitive revenue loss and identified the speed gap.' },
          { id: 'q1-b', text: 'Suffering $5M in fraud losses from fraudulent documents, need blockchain verification', isCorrect: true, points: 3, feedback: 'Good - identified fraud as major driver with specific financial impact.' },
          { id: 'q1-c', text: 'Lost major corporate customer last quarter, board made this strategic priority', isCorrect: true, points: 3, feedback: 'Good - recognized recent loss and executive-level urgency.' },
          { id: 'q1-d', text: 'Board wants us to join blockchain consortium (Marco Polo or we.trade)', isCorrect: true, points: 3, feedback: 'Good - understood strategic direction toward consortium participation.' },
          { id: 'q1-e', text: 'Just want to try new blockchain technology', isCorrect: false, points: 0, feedback: 'Too vague - need to understand specific business drivers and financial impact.' },
          { id: 'q1-f', text: 'Blockchain is trendy so we should adopt it', isCorrect: false, points: 0, feedback: 'Wrong approach - technology adoption must be driven by business needs, not trends.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue and fraud losses', 'Understand competitive pressure']
      },
      {
        question: 'What trade finance products do you offer today? Letters of credit, bill of lading, supply chain financing, or others?',
        purpose: 'Understand product portfolio and digitization priorities',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Letters of credit (80% of volume), documentary collections, bank guarantees - 500 annually at $20K average', isCorrect: true, points: 4, feedback: 'Excellent - identified product portfolio with volume and value metrics.' },
          { id: 'q2-b', text: 'Do NOT offer supply chain financing - missing $8M revenue opportunity', isCorrect: true, points: 3, feedback: 'Good - recognized gap in product offering and quantified opportunity.' },
          { id: 'q2-c', text: 'Priority is digitizing letters of credit first, then expanding to supply chain financing', isCorrect: true, points: 3, feedback: 'Good - understood phased approach starting with core product.' },
          { id: 'q2-d', text: 'Need blockchain platform that supports multiple trade finance products', isCorrect: true, points: 3, feedback: 'Good - recognized need for flexible platform for future expansion.' },
          { id: 'q2-e', text: 'Offer every possible trade finance product', isCorrect: false, points: 0, feedback: 'Unrealistic - need to understand actual product portfolio and gaps.' },
          { id: 'q2-f', text: 'Only focus on letters of credit, ignore other opportunities', isCorrect: false, points: 0, feedback: 'Too narrow - missing $8M supply chain financing opportunity.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify product portfolio', 'Understand volume and value', 'Prioritize digitization roadmap']
      },
      {
        question: 'What is your current letter of credit processing time and cost? How does it compare to digital platforms?',
        purpose: 'Quantify current state and competitive gap',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: '7-10 days processing time with 15 specialists at $200K each ($3M annually)', isCorrect: true, points: 4, feedback: 'Excellent - quantified both time and cost with specific metrics.' },
          { id: 'q3-b', text: 'Digital platforms process in 24 hours with 80% less staff', isCorrect: true, points: 3, feedback: 'Good - identified competitive gap in both speed and efficiency.' },
          { id: 'q3-c', text: 'Losing customers because cannot compete on speed, each day of delay costs money', isCorrect: true, points: 3, feedback: 'Good - understood business impact of slow processing on customer retention.' },
          { id: 'q3-d', text: 'Need to reduce processing from 7-10 days to 24 hours to be competitive', isCorrect: true, points: 3, feedback: 'Good - set clear target based on competitive benchmark.' },
          { id: 'q3-e', text: 'Processing time is fine, no need to improve', isCorrect: false, points: 0, feedback: 'Wrong - 7-10 days vs 24 hours is massive competitive disadvantage.' },
          { id: 'q3-f', text: 'Cost is not important, only focus on speed', isCorrect: false, points: 0, feedback: 'Incomplete - both speed AND cost reduction are important for ROI.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify processing time', 'Calculate operational costs', 'Understand competitive gap']
      },
      {
        question: 'What is your document fraud situation? How much are you losing annually?',
        purpose: 'Identify fraud risk and blockchain value proposition',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: '$5M annual losses from fraudulent bills of lading and forged documents', isCorrect: true, points: 4, feedback: 'Excellent - quantified fraud losses with specific dollar amount.' },
          { id: 'q4-b', text: 'No way to verify document authenticity in real-time, blockchain provides immutable verification', isCorrect: true, points: 3, feedback: 'Good - identified verification gap and blockchain solution.' },
          { id: 'q4-c', text: 'Chief Risk Officer very concerned about fraud risk', isCorrect: true, points: 3, feedback: 'Good - recognized key stakeholder concern driving initiative.' },
          { id: 'q4-d', text: 'Blockchain can eliminate fraud through immutable document verification', isCorrect: true, points: 3, feedback: 'Good - understood blockchain value proposition for fraud prevention.' },
          { id: 'q4-e', text: 'Fraud is not a significant problem', isCorrect: false, points: 0, feedback: 'Wrong - $5M annual losses is a major problem requiring immediate action.' },
          { id: 'q4-f', text: 'Manual verification is sufficient', isCorrect: false, points: 0, feedback: 'Insufficient - manual processes cannot prevent sophisticated document fraud.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Quantify fraud losses', 'Identify verification challenges', 'Address stakeholder concerns']
      },
      {
        question: 'Are you considering joining a blockchain trade consortium like Marco Polo, we.trade, or Contour?',
        purpose: 'Understand blockchain strategy and consortium participation',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Board wants us to join Marco Polo or we.trade to access network of 50+ banks and 1000+ customers', isCorrect: true, points: 4, feedback: 'Excellent - identified board mandate and understood network effects.' },
          { id: 'q5-b', text: 'Cannot build our own blockchain network - need to join existing consortium', isCorrect: true, points: 3, feedback: 'Good - recognized that consortium participation is more practical than building own network.' },
          { id: 'q5-c', text: 'Need platform that integrates with consortium APIs and supports smart contracts', isCorrect: true, points: 3, feedback: 'Good - understood technical requirements for consortium participation.' },
          { id: 'q5-d', text: 'Consortium provides immediate access to corporate customers and trading partners', isCorrect: true, points: 3, feedback: 'Good - recognized business value of instant network access.' },
          { id: 'q5-e', text: 'Will build our own private blockchain instead', isCorrect: false, points: 0, feedback: 'Wrong - misses network effects and would take years to build ecosystem.' },
          { id: 'q5-f', text: 'Blockchain consortiums are not important', isCorrect: false, points: 0, feedback: 'Wrong - consortiums provide essential network effects for trade finance.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Identify consortium preferences', 'Understand network effects', 'Assess integration needs']
      },
      {
        question: 'What are your blockchain security and compliance concerns? How do you handle smart contract risk?',
        purpose: 'Identify security, compliance, and risk management needs',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Risk Officer concerned about blockchain security, smart contract bugs, and regulatory compliance', isCorrect: true, points: 4, feedback: 'Excellent - identified key stakeholder concerns across security and compliance.' },
          { id: 'q6-b', text: 'Need permissioned blockchain (not public), immutable audit trail, smart contract testing/validation', isCorrect: true, points: 3, feedback: 'Good - specified security requirements including permissioned network.' },
          { id: 'q6-c', text: 'Must comply with UCC Article 5, ICC UCP 600, and trade sanctions', isCorrect: true, points: 3, feedback: 'Good - identified specific regulatory requirements for trade finance.' },
          { id: 'q6-d', text: 'Need ability to reverse transactions if required by regulators', isCorrect: true, points: 3, feedback: 'Good - understood that immutability must be balanced with regulatory requirements.' },
          { id: 'q6-e', text: 'Public blockchain is fine for banking', isCorrect: false, points: 0, feedback: 'Wrong - banks require permissioned blockchain for security and compliance.' },
          { id: 'q6-f', text: 'Smart contracts are always bug-free', isCorrect: false, points: 0, feedback: 'Dangerous assumption - smart contracts require rigorous testing and validation.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify security concerns', 'Understand compliance requirements', 'Address smart contract risk']
      },
      {
        question: 'How will you integrate blockchain with your legacy mainframe trade finance system?',
        purpose: 'Understand integration challenges and technical constraints',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Legacy mainframe system is 8 years old and not designed for blockchain', isCorrect: true, points: 4, feedback: 'Excellent - honestly assessed legacy system constraints.' },
          { id: 'q7-b', text: 'Need integration layer that connects blockchain to mainframe without disrupting operations', isCorrect: true, points: 3, feedback: 'Good - identified need for abstraction layer to protect legacy systems.' },
          { id: 'q7-c', text: 'Want to run parallel systems during transition, eventually migrate off mainframe', isCorrect: true, points: 3, feedback: 'Good - understood phased transition approach minimizing risk.' },
          { id: 'q7-d', text: 'Need 12-18 month transition period for gradual migration', isCorrect: true, points: 3, feedback: 'Good - set realistic timeline for complex legacy integration.' },
          { id: 'q7-e', text: 'Replace mainframe immediately with blockchain', isCorrect: false, points: 0, feedback: 'Too risky - need gradual transition with parallel systems.' },
          { id: 'q7-f', text: 'Blockchain can directly access mainframe', isCorrect: false, points: 0, feedback: 'Wrong - need integration layer to bridge modern blockchain with legacy mainframe.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Assess legacy integration needs', 'Understand transition strategy', 'Identify technical constraints']
      },
      {
        question: 'What is your budget and expected ROI for trade finance digitization?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Board approved $4-6M for platform plus ongoing costs', isCorrect: true, points: 4, feedback: 'Excellent - quantified budget with both initial and ongoing considerations.' },
          { id: 'q8-b', text: 'Business case: capture $10M revenue, eliminate $5M fraud, reduce $3M costs by 50%, generate $8M supply chain financing', isCorrect: true, points: 3, feedback: 'Good - identified multiple ROI drivers with specific financial targets.' },
          { id: 'q8-c', text: 'CFO wants 24-month payback and clear path to profitability', isCorrect: true, points: 3, feedback: 'Good - understood ROI expectations and timeline requirements.' },
          { id: 'q8-d', text: 'Need to show ROI from fraud reduction and operational efficiency before revenue growth', isCorrect: true, points: 3, feedback: 'Good - recognized that cost savings provide faster payback than revenue growth.' },
          { id: 'q8-e', text: 'Budget is unlimited, ROI does not matter', isCorrect: false, points: 0, feedback: 'Unrealistic - all projects require business case justification.' },
          { id: 'q8-f', text: 'Only focus on revenue, ignore cost savings', isCorrect: false, points: 0, feedback: 'Incomplete - fraud elimination and cost reduction provide faster ROI.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        customResponse: '',
        responseChoices: [
          { id: 'obj1-a', text: '50+ banks live on production networks, Marco Polo processed $1B+ transactions, we.trade has 1000+ customers', isCorrect: true, points: 4, feedback: 'Excellent - led with production proof points and major consortium statistics.' },
          { id: 'obj1-b', text: 'Proven benefits: 80% faster processing (7 days → 24 hours), 95% fraud reduction, 50% cost savings', isCorrect: true, points: 3, feedback: 'Good - quantified specific benefits from live production systems.' },
          { id: 'obj1-c', text: 'IBM Blockchain Platform powers both consortiums with 99.99% uptime', isCorrect: true, points: 3, feedback: 'Good - provided reliability metrics and IBM platform credibility.' },
          { id: 'obj1-d', text: 'IBM has deployed 500+ blockchain networks with comprehensive security and compliance', isCorrect: true, points: 3, feedback: 'Good - demonstrated IBM experience and enterprise-grade capabilities.' },
          { id: 'obj1-e', text: 'Blockchain is experimental, no one uses it yet', isCorrect: false, points: 0, feedback: 'Wrong - 50+ banks are live in production with billions in transactions.' },
          { id: 'obj1-f', text: 'Just trust that blockchain will work', isCorrect: false, points: 0, feedback: 'Insufficient - need to provide production proof points and statistics.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj2-a', text: 'Permissioned blockchain - only authorized banks and corporates participate (not public blockchain)', isCorrect: true, points: 4, feedback: 'Excellent - led with permissioned network addressing key banking security concern.' },
          { id: 'obj2-b', text: 'Smart contract testing, validation tools, and formal verification using mathematical proofs', isCorrect: true, points: 3, feedback: 'Good - outlined rigorous testing approach to prevent bugs.' },
          { id: 'obj2-c', text: 'Immutable audit trail, multi-signature approvals, ability to pause/upgrade smart contracts', isCorrect: true, points: 3, feedback: 'Good - provided multiple security controls and governance mechanisms.' },
          { id: 'obj2-d', text: 'IBM has secured 500+ blockchain networks with zero breaches, follows NIST standards', isCorrect: true, points: 3, feedback: 'Good - demonstrated track record and compliance with security standards.' },
          { id: 'obj2-e', text: 'Smart contracts are always perfect, no testing needed', isCorrect: false, points: 0, feedback: 'Dangerous - smart contracts require rigorous testing and validation.' },
          { id: 'obj2-f', text: 'Public blockchain is fine for banking', isCorrect: false, points: 0, feedback: 'Wrong - banks require permissioned blockchain for security and compliance.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj3-a', text: 'Proven timeline: 3 months consortium setup, 6 months integration, 9 months pilot, 12-18 months production', isCorrect: true, points: 4, feedback: 'Excellent - provided specific phased timeline with clear milestones.' },
          { id: 'obj3-b', text: 'IBM Power E1080 provides high-performance integration layer connecting blockchain to mainframe', isCorrect: true, points: 3, feedback: 'Good - addressed mainframe integration with specific IBM solution.' },
          { id: 'obj3-c', text: 'Run parallel systems during transition - blockchain for new, mainframe for existing transactions', isCorrect: true, points: 3, feedback: 'Good - outlined risk mitigation strategy with parallel operations.' },
          { id: 'obj3-d', text: 'IBM Expert Labs has integrated blockchain with mainframes, average 12-month timeline', isCorrect: true, points: 3, feedback: 'Good - provided credibility with experience and realistic expectations.' },
          { id: 'obj3-e', text: 'Can implement in 1 month', isCorrect: false, points: 0, feedback: 'Unrealistic - blockchain with mainframe integration requires 12-18 months.' },
          { id: 'obj3-f', text: 'Must replace mainframe first before blockchain', isCorrect: false, points: 0, feedback: 'Wrong - integration layer allows blockchain without mainframe replacement.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj4-a', text: 'Multi-consortium support - can connect to Marco Polo, we.trade, and Contour simultaneously', isCorrect: true, points: 4, feedback: 'Excellent - addressed consortium risk with multi-network capability.' },
          { id: 'obj4-b', text: 'Open standards (Hyperledger Fabric) - not proprietary, can migrate between networks', isCorrect: true, points: 3, feedback: 'Good - highlighted portability through open standards.' },
          { id: 'obj4-c', text: 'Portable smart contracts can redeploy to different blockchain networks', isCorrect: true, points: 3, feedback: 'Good - emphasized flexibility and investment protection.' },
          { id: 'obj4-d', text: 'IBM Blockchain Platform used by all major consortiums - consistent technology regardless of choice', isCorrect: true, points: 3, feedback: 'Good - demonstrated IBM platform ubiquity reducing switching risk.' },
          { id: 'obj4-e', text: 'Once you join a consortium, you can never leave', isCorrect: false, points: 0, feedback: 'Wrong - open standards and portability enable consortium flexibility.' },
          { id: 'obj4-f', text: 'Consortium risk is not a concern', isCorrect: false, points: 0, feedback: 'Dismissive - must acknowledge risk and provide mitigation strategies.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        customResponse: '',
        responseChoices: [
          { id: 'obj5-a', text: 'Compelling ROI: $5M fraud elimination, $1.5M cost reduction, $10M revenue capture, $8M supply chain financing', isCorrect: true, points: 4, feedback: 'Excellent - quantified multiple ROI sources totaling $24.5M annual benefit.' },
          { id: 'obj5-b', text: 'Payback: 3 months from fraud elimination, 6 months with cost savings, 12 months with revenue', isCorrect: true, points: 3, feedback: 'Good - provided multiple payback scenarios showing quick ROI.' },
          { id: 'obj5-c', text: 'Investment: $5M initial + $1M annual operational costs, three-year ROI: 380%', isCorrect: true, points: 3, feedback: 'Good - outlined investment requirements and long-term ROI.' },
          { id: 'obj5-d', text: 'Most banks see 6-12 month payback from fraud reduction and efficiency before revenue growth', isCorrect: true, points: 3, feedback: 'Good - set realistic expectations with industry benchmarks.' },
          { id: 'obj5-e', text: 'ROI is impossible to calculate', isCorrect: false, points: 0, feedback: 'Wrong - clear ROI from fraud elimination, cost savings, and revenue.' },
          { id: 'obj5-f', text: 'Just focus on technology, ignore business case', isCorrect: false, points: 0, feedback: 'Unacceptable - CFO needs quantified ROI and payback period.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [],
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
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing $50M annually to digital lenders like Rocket Mortgage who approve in 10 days vs our 45 days', isCorrect: true, points: 4, feedback: 'Excellent - quantified competitive revenue loss and identified speed gap.' },
          { id: 'q1-b', text: 'Customer satisfaction 6.2/10 vs 8.5/10 for digital lenders - losing customers due to poor experience', isCorrect: true, points: 3, feedback: 'Good - recognized customer experience gap driving competitive disadvantage.' },
          { id: 'q1-c', text: 'Board mandated reduce processing to 10 days within 18 months or risk more market share loss', isCorrect: true, points: 3, feedback: 'Good - identified executive urgency and strategic priority.' },
          { id: 'q1-d', text: 'This is strategic priority #1 - multiple drivers including competition, customer demand, and efficiency', isCorrect: true, points: 3, feedback: 'Good - understood this is multi-faceted strategic initiative.' },
          { id: 'q1-e', text: 'Just want to try new technology', isCorrect: false, points: 0, feedback: 'Too vague - need to understand specific business drivers and financial impact.' },
          { id: 'q1-f', text: 'Automation is trendy so we should do it', isCorrect: false, points: 0, feedback: 'Wrong - technology adoption must be driven by business needs, not trends.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify multiple business drivers', 'Quantify revenue impact', 'Understand competitive pressure']
      },
      {
        question: 'What is your current mortgage origination process? Where are the biggest bottlenecks and delays?',
        purpose: 'Understand current state and pain points',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Current process takes 45 days: application (5 days), document gathering (15 days), verification (10 days), underwriting (10 days), compliance (5 days)', isCorrect: true, points: 4, feedback: 'Excellent - mapped complete process with time breakdown for each step.' },
          { id: 'q2-b', text: 'Biggest bottlenecks are document collection (15 days) and manual underwriting (10 days)', isCorrect: true, points: 3, feedback: 'Good - identified the two major bottlenecks consuming 25 of 45 days.' },
          { id: 'q2-c', text: 'Loan officers spend 70% of time on paperwork vs customer interaction', isCorrect: true, points: 3, feedback: 'Good - quantified productivity impact of manual processes.' },
          { id: 'q2-d', text: 'Paper-based forms and manual phone calls for verification causing delays', isCorrect: true, points: 3, feedback: 'Good - identified specific manual processes that need automation.' },
          { id: 'q2-e', text: 'Process is fine, no bottlenecks', isCorrect: false, points: 0, feedback: 'Wrong - 45 days vs 10 days for competitors indicates major bottlenecks.' },
          { id: 'q2-f', text: 'Only issue is staffing, not process', isCorrect: false, points: 0, feedback: 'Incomplete - manual processes are the root cause, not just staffing levels.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Map current process', 'Identify bottlenecks', 'Quantify time spent']
      },
      {
        question: 'What is the business impact of your slow mortgage processing? How much volume are you losing?',
        purpose: 'Quantify business impact and opportunity',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Losing $50M annually in mortgage volume to digital lenders like Rocket Mortgage', isCorrect: true, points: 4, feedback: 'Excellent - quantified revenue loss with specific dollar amount.' },
          { id: 'q3-b', text: 'Customer abandonment rate 35% vs industry average 20% - customers go to faster competitors', isCorrect: true, points: 3, feedback: 'Good - identified customer retention problem with competitive benchmark.' },
          { id: 'q3-c', text: 'Market share declining 5% annually, loan officer productivity 40% below industry average', isCorrect: true, points: 3, feedback: 'Good - quantified market share loss and productivity gap.' },
          { id: 'q3-d', text: 'Operational costs $3M higher than digital lenders due to manual processes', isCorrect: true, points: 3, feedback: 'Good - identified cost disadvantage from inefficient processes.' },
          { id: 'q3-e', text: 'No significant business impact', isCorrect: false, points: 0, feedback: 'Wrong - $50M revenue loss and declining market share is major impact.' },
          { id: 'q3-f', text: 'Only losing a few customers', isCorrect: false, points: 0, feedback: 'Understated - 35% abandonment rate and $50M loss is significant.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify revenue loss', 'Identify customer impact', 'Assess productivity impact']
      },
      {
        question: 'What automation capabilities do you need? Document collection, income verification, credit decisioning, or all of the above?',
        purpose: 'Understand automation scope and priorities',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Comprehensive automation: digital document collection via mobile app, automated income/employment verification', isCorrect: true, points: 4, feedback: 'Excellent - identified end-to-end automation scope starting with documents and verification.' },
          { id: 'q4-b', text: 'AI-powered credit decisioning to automate 80% of underwriting decisions', isCorrect: true, points: 3, feedback: 'Good - recognized AI decisioning as key capability with realistic automation target.' },
          { id: 'q4-c', text: 'Automated compliance checks for TRID, fair lending, AML/KYC, plus e-signature and digital closing', isCorrect: true, points: 3, feedback: 'Good - understood need for compliance automation and digital closing.' },
          { id: 'q4-d', text: 'Want to automate 80% of workflow and reduce processing from 45 days to 10 days', isCorrect: true, points: 3, feedback: 'Good - set clear automation target and processing time goal.' },
          { id: 'q4-e', text: 'Only need document scanning', isCorrect: false, points: 0, feedback: 'Too limited - need comprehensive automation across entire mortgage process.' },
          { id: 'q4-f', text: 'Automate everything 100%, no human involvement', isCorrect: false, points: 0, feedback: 'Unrealistic - need human oversight for edge cases and compliance.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Identify automation scope', 'Prioritize capabilities', 'Understand target state']
      },
      {
        question: 'What are your compliance and risk management requirements? How do you ensure automated decisions meet regulatory standards?',
        purpose: 'Identify compliance, risk, and audit needs',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Chief Risk Officer very concerned about automated decisioning - must comply with TRID, fair lending, HMDA, AML/KYC', isCorrect: true, points: 4, feedback: 'Excellent - identified stakeholder concern and specific regulatory requirements.' },
          { id: 'q5-b', text: 'Need explainable AI - must be able to explain why loan was approved or denied for auditors', isCorrect: true, points: 3, feedback: 'Good - understood requirement for transparent, auditable AI decisions.' },
          { id: 'q5-c', text: 'Need comprehensive audit trail for regulatory exams and fraud detection for suspicious applications', isCorrect: true, points: 3, feedback: 'Good - recognized audit and fraud detection requirements.' },
          { id: 'q5-d', text: 'Want to reduce compliance costs from $2M to $500K annually through automation', isCorrect: true, points: 3, feedback: 'Good - quantified compliance cost reduction opportunity.' },
          { id: 'q5-e', text: 'Compliance is not important for automation', isCorrect: false, points: 0, feedback: 'Dangerous - compliance is critical for mortgage automation and regulatory approval.' },
          { id: 'q5-f', text: 'AI decisions don\'t need to be explainable', isCorrect: false, points: 0, feedback: 'Wrong - regulators require explainable AI for fair lending compliance.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Identify regulatory requirements', 'Address stakeholder concerns', 'Understand audit needs']
      },
      {
        question: 'How will you integrate mortgage automation with your existing systems? What systems need to connect?',
        purpose: 'Understand integration requirements and technical constraints',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Need to integrate with Ellie Mae Encompass (mortgage origination system) and credit bureaus', isCorrect: true, points: 4, feedback: 'Excellent - identified core mortgage system and credit bureau integrations.' },
          { id: 'q6-b', text: 'Must connect to income verification services (The Work Number, IRS) and document management', isCorrect: true, points: 3, feedback: 'Good - recognized verification and document system integration needs.' },
          { id: 'q6-c', text: 'Integration with core banking system and compliance systems required', isCorrect: true, points: 3, feedback: 'Good - understood need for banking and compliance system connectivity.' },
          { id: 'q6-d', text: 'Current systems 6 years old, not designed for real-time integration - need API-based integration layer', isCorrect: true, points: 3, feedback: 'Good - assessed legacy constraints and identified integration approach.' },
          { id: 'q6-e', text: 'No integration needed, standalone system', isCorrect: false, points: 0, feedback: 'Wrong - mortgage automation requires extensive integration with existing systems.' },
          { id: 'q6-f', text: 'Replace all existing systems', isCorrect: false, points: 0, feedback: 'Too risky and expensive - should integrate with existing systems like Encompass.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Identify integration points', 'Assess technical constraints', 'Understand system landscape']
      },
      {
        question: 'What is your customer experience vision? How do you want customers to interact with your mortgage process?',
        purpose: 'Understand customer experience goals and expectations',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Chief Digital Officer wants Rocket Mortgage-level experience: apply online/mobile in 15 minutes, upload docs via phone', isCorrect: true, points: 4, feedback: 'Excellent - identified stakeholder vision with specific competitive benchmark.' },
          { id: 'q7-b', text: 'Get pre-approval in 24 hours, track application status in real-time, e-sign all documents', isCorrect: true, points: 3, feedback: 'Good - outlined key digital experience features customers expect.' },
          { id: 'q7-c', text: 'Close in 10 days, improve customer satisfaction from 6.2 to 8.5', isCorrect: true, points: 3, feedback: 'Good - set clear timeline and satisfaction improvement targets.' },
          { id: 'q7-d', text: 'Need mobile-first experience - 60% of customers start on mobile', isCorrect: true, points: 3, feedback: 'Good - recognized mobile as primary channel based on customer behavior.' },
          { id: 'q7-e', text: 'Keep paper-based process', isCorrect: false, points: 0, feedback: 'Wrong - customers demand digital experience, paper is causing abandonment.' },
          { id: 'q7-f', text: 'Customer experience is not important', isCorrect: false, points: 0, feedback: 'Wrong - poor experience (6.2/10) is driving customers to competitors.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Identify customer experience goals', 'Understand digital expectations', 'Assess mobile requirements']
      },
      {
        question: 'What is your budget and timeline? What ROI do you expect from mortgage automation?',
        purpose: 'Understand budget constraints and business case expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: 'Board approved $4-6M for mortgage automation, timeline 12-18 months to full implementation', isCorrect: true, points: 4, feedback: 'Excellent - quantified budget and timeline with board approval.' },
          { id: 'q8-b', text: 'Business case: capture $50M lost volume, reduce operational costs by $3M, reduce compliance costs from $2M to $500K', isCorrect: true, points: 3, feedback: 'Good - identified multiple ROI drivers with specific financial targets.' },
          { id: 'q8-c', text: 'Improve customer satisfaction from 6.2 to 8.5, CFO wants 24-month payback', isCorrect: true, points: 3, feedback: 'Good - included customer satisfaction goal and ROI timeline expectation.' },
          { id: 'q8-d', text: 'Need quick wins to build momentum and demonstrate value early', isCorrect: true, points: 3, feedback: 'Good - understood importance of phased approach with early wins.' },
          { id: 'q8-e', text: 'Budget is unlimited, no ROI needed', isCorrect: false, points: 0, feedback: 'Unrealistic - all projects require business case justification.' },
          { id: 'q8-f', text: 'Can implement in 1 month', isCorrect: false, points: 0, feedback: 'Unrealistic - comprehensive mortgage automation requires 12-18 months.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
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
        responseChoices: [
          { id: 'obj1-a', text: 'Watson Studio provides explainable AI - every decision includes detailed reasoning auditors can review, ensuring transparency and compliance', isCorrect: true, points: 4, feedback: 'Excellent - explainable AI is critical for regulatory compliance and audit readiness.' },
          { id: 'obj1-b', text: 'Fair lending algorithms trained on millions of compliant loans with no bias, plus real-time compliance checks for TRID, HMDA, AML/KYC', isCorrect: true, points: 3, feedback: 'Good - addressed fair lending and regulatory compliance comprehensively.' },
          { id: 'obj1-c', text: 'FlashSystem immutable snapshots provide tamper-proof audit trail, human oversight for 20% edge cases ensures quality control', isCorrect: true, points: 3, feedback: 'Good - highlighted audit trail and human oversight for risk management.' },
          { id: 'obj1-d', text: 'Track record: 50+ banks, zero fair lending violations, 95% accuracy vs 85% manual, CFPB compliant', isCorrect: true, points: 3, feedback: 'Good - provided compelling track record and accuracy statistics.' },
          { id: 'obj1-e', text: 'AI makes all decisions automatically with no human review', isCorrect: false, points: 0, feedback: 'Wrong - human oversight is required for edge cases and regulatory compliance.' },
          { id: 'obj1-f', text: 'Compliance is not a concern with automation', isCorrect: false, points: 0, feedback: 'Wrong - compliance is paramount, requiring explainable AI, audit trails, and oversight.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        responseChoices: [
          { id: 'obj2-a', text: 'Pre-built mortgage automation templates and Watson Studio AI models trained on millions of mortgages - ready to deploy, no building from scratch', isCorrect: true, points: 4, feedback: 'Excellent - highlighted accelerators that dramatically reduce implementation time.' },
          { id: 'obj2-b', text: 'IBM API Connect provides out-of-the-box integration with Ellie Mae Encompass and credit bureaus', isCorrect: true, points: 3, feedback: 'Good - addressed integration complexity with pre-built connectors.' },
          { id: 'obj2-c', text: 'Phased timeline: 3 months platform setup, 6 months Phase 1 (documents/verification), 12 months full automation', isCorrect: true, points: 3, feedback: 'Good - provided realistic phased timeline with early value delivery.' },
          { id: 'obj2-d', text: 'IBM Expert Labs track record: 50+ mortgage automation projects, 12-month average time to market with accelerators and best practices', isCorrect: true, points: 3, feedback: 'Good - provided credible track record and implementation expertise.' },
          { id: 'obj2-e', text: 'Can implement full automation in 1 month', isCorrect: false, points: 0, feedback: 'Unrealistic - comprehensive mortgage automation requires 12-18 months for full deployment.' },
          { id: 'obj2-f', text: 'Timeline is not important', isCorrect: false, points: 0, feedback: 'Wrong - speed to market is critical to compete with digital lenders.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        responseChoices: [
          { id: 'obj3-a', text: 'IBM API Connect provides pre-built connectors for Ellie Mae Encompass - no custom development needed, proven with 50+ banks', isCorrect: true, points: 4, feedback: 'Excellent - addressed integration complexity with proven pre-built solution.' },
          { id: 'obj3-b', text: 'Power E1080 integration layer handles data transformation and orchestration, Watson Studio integrates with Encompass decisioning engine', isCorrect: true, points: 3, feedback: 'Good - explained technical integration architecture and AI connectivity.' },
          { id: 'obj3-c', text: 'FlashSystem provides seamless document and audit trail storage with Encompass integration', isCorrect: true, points: 3, feedback: 'Good - addressed data storage and audit requirements.' },
          { id: 'obj3-d', text: 'Phased approach with reference architectures: 3-4 months vs 12+ months custom development, blueprints for Ellie Mae, Black Knight, Fiserv', isCorrect: true, points: 3, feedback: 'Good - provided realistic timeline and de-risked with reference architectures.' },
          { id: 'obj3-e', text: 'Need to replace Ellie Mae Encompass entirely', isCorrect: false, points: 0, feedback: 'Wrong - should integrate with existing Encompass investment, not replace it.' },
          { id: 'obj3-f', text: 'Integration is not possible with legacy systems', isCorrect: false, points: 0, feedback: 'Wrong - IBM has proven integration with 50+ banks using Encompass and other platforms.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        responseChoices: [
          { id: 'obj4-a', text: 'Loan officers become advisors, not processors - automation handles paperwork so they focus on customer relationships and higher-value activities', isCorrect: true, points: 4, feedback: 'Excellent - reframed automation as role enhancement, not replacement.' },
          { id: 'obj4-b', text: 'AI provides recommendations, not mandates - loan officers review and approve all decisions, maintaining control and expertise', isCorrect: true, points: 3, feedback: 'Good - positioned AI as assistant that augments human judgment.' },
          { id: 'obj4-c', text: 'Comprehensive 2-week training program with gradual rollout - pilot with 10 loan officers, then expand based on feedback', isCorrect: true, points: 3, feedback: 'Good - addressed training and change management with phased approach.' },
          { id: 'obj4-d', text: 'Productivity gains: close 50% more loans, satisfaction increases 6/10 to 8/10, proven with 50+ banks, IBM provides change management support', isCorrect: true, points: 3, feedback: 'Good - quantified benefits and provided track record to build confidence.' },
          { id: 'obj4-e', text: 'Loan officers will be replaced by AI', isCorrect: false, points: 0, feedback: 'Wrong - loan officers are enhanced by automation, not replaced.' },
          { id: 'obj4-f', text: 'No training needed, system is intuitive', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive training and change management are critical for adoption success.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
        responseChoices: [
          { id: 'obj5-a', text: 'End-to-end encryption for all customer data (documents, financial info, personal data) with Power E1080 hardware-based encryption and secure enclaves', isCorrect: true, points: 4, feedback: 'Excellent - comprehensive encryption approach with hardware-level security.' },
          { id: 'obj5-b', text: 'FlashSystem immutable snapshots protect against ransomware and data tampering with 99.9999% data durability', isCorrect: true, points: 3, feedback: 'Good - addressed ransomware protection and data integrity.' },
          { id: 'obj5-c', text: 'Watson Studio processes data in secure environment with no leakage, comprehensive access controls and audit logging', isCorrect: true, points: 3, feedback: 'Good - explained AI security and audit capabilities.' },
          { id: 'obj5-d', text: 'Track record: 100+ banks, zero breaches, GLBA/FFIEC/NIST compliant, cyber-resilient architecture', isCorrect: true, points: 3, feedback: 'Good - provided compelling security track record and compliance standards.' },
          { id: 'obj5-e', text: 'Security is not a concern with cloud storage', isCorrect: false, points: 0, feedback: 'Wrong - mortgage data requires enterprise-grade security with encryption and compliance.' },
          { id: 'obj5-f', text: 'Customer data can be stored without encryption', isCorrect: false, points: 0, feedback: 'Wrong - end-to-end encryption is mandatory for sensitive mortgage data.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
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
  id: 'banking-card-processing-014',
  title: 'Regional Bank Needs Modern Credit Card Processing with Real-Time Fraud Detection',
  description: 'A regional bank with 1.2M credit card accounts is losing $15M annually to fraud due to batch-only fraud detection. Their 25-year-old mainframe card processing system cannot support modern card features like contactless payments, mobile wallets, or instant issuance. They need to modernize card processing infrastructure to reduce fraud losses, improve customer satisfaction, and compete with digital-first card programs.',
  
  customerProfile: {
    company: 'Summit Regional Bank',
    industry: 'Financial Services',
    size: 'Large (1000-5000 employees)',
    revenue: '$3.2B annually',
    employees: 2800,
    location: 'Regional (8 states)',
    currentInfrastructure: {
      servers: 'Legacy mainframe card processing system (25+ years old)',
      storage: 'Oracle database on aging SAN storage',
      applications: ['COBOL card processing', 'Batch authorization system', 'Legacy fraud detection (batch-only)', 'Card management system'],
      operatingSystem: 'z/OS mainframe',
      virtualization: 'None - bare metal mainframe',
      age: '25+ years',
      endOfLife: 'Vendor support ending in 18 months',
      issues: [
        'Batch processing causes 24-hour delays for fraud detection',
        'Cannot support modern card features: contactless, mobile wallets, instant issuance',
        'System maxed at 1.5M accounts, cannot scale beyond current 1.2M',
        'High maintenance costs: $8M annually',
        'Integration challenges with fintech partners and digital wallets',
        '$15M annual fraud losses due to delayed fraud detection',
        'Customer satisfaction declining (3.2/5 stars)',
        'Cannot compete with digital-first card programs'
      ]
    },
    keyStakeholders: [
      {
        name: 'Michael Torres',
        role: 'CIO',
        priorities: ['Real-time processing', 'Fraud reduction', 'Customer satisfaction', 'System modernization'],
        concerns: ['Migration risk', 'System downtime', 'Integration complexity', 'Cost'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Kim',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Fraud loss prevention', 'Operational efficiency'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Business disruption'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'David Chen',
        role: 'Chief Risk Officer',
        priorities: ['Fraud prevention', 'Regulatory compliance', 'Risk mitigation', 'Data security'],
        concerns: ['False positive rates', 'Compliance requirements', 'Fraud detection accuracy', 'PCI-DSS compliance'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Lisa Anderson',
        role: 'VP of IT Operations',
        priorities: ['Customer satisfaction', 'Modern card features', 'Competitive positioning'],
        concerns: ['Customer experience during migration', 'Staff training', 'Service level maintenance'],
        influence: 'medium',
        supportLevel: 'champion'
      }
    ],
    budget: '$12M-$18M capital budget approved',
    timeline: '18-month implementation (vendor support ending)',
    decisionProcess: 'Board approval required for capital investment over $10M. CIO and Chief Risk Officer are champions. CFO needs strong ROI case.'
  },
  
  businessContext: {
    challenges: [
      'Legacy mainframe card processing system (25+ years old) approaching end-of-life',
      '$15M annual fraud losses due to batch-only fraud detection (24-hour delays)',
      'Cannot support contactless payments, mobile wallets (Apple Pay, Google Pay), or instant card issuance',
      'Batch processing causes 24-hour delays in fraud alerts - customers frustrated',
      'Vendor announcing end-of-support in 18 months - compliance and security risk',
      'Customer satisfaction declining (3.2/5 stars) due to poor card experience',
      'Unable to compete with digital-first card programs (Chime, Apple Card)',
      'System cannot scale beyond 1.2M card accounts - blocking growth strategy',
      'High operational costs ($8M annually) for legacy system maintenance',
      'Cannot integrate with fintechs or launch innovative card products'
    ],
    businessImpact: [
      '$15M annual fraud losses (0.33% fraud rate on $4.5B card portfolio)',
      'Customer satisfaction at 3.2/5 stars and declining',
      'Losing market share to digital-first competitors with superior card experience',
      'Cannot support modern card features - competitive disadvantage',
      '24-hour fraud detection delays causing customer frustration and churn',
      'Limited to 1.2M card accounts with no growth path (system maxed at 1.5M)',
      'High operational costs ($8M annually) due to legacy system maintenance',
      'Vendor end-of-support creating compliance and security risks',
      'Lost 3 major co-brand partnerships due to lack of digital features',
      'Cannot launch innovative card products to compete with fintechs'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Modernize card processing to support real-time authorization and fraud detection',
      'Reduce fraud losses by 70% through AI-powered real-time fraud detection',
      'Enable modern card features: contactless, mobile wallets, instant issuance',
      'Improve customer satisfaction from 3.2 to 4.5+ stars',
      'Reduce operational costs by 50% through automation and efficiency',
      'Scale to support 3M accounts to enable growth strategy',
      'Launch innovative card products to compete with fintechs and neobanks',
      'Achieve real-time dispute resolution and customer service'
    ],
    competitivePressure: 'Digital-first banks and fintechs offering instant card issuance, real-time fraud alerts, dynamic rewards, and superior mobile experiences. Summit losing 15% of new card applications to competitors annually.',
    regulatoryRequirements: ['PCI DSS 4.0 compliance', 'Real-time fraud monitoring', 'Consumer protection regulations', 'Data residency and privacy', 'Audit trail requirements'],
    recentEvents: [
      'Vendor announced end-of-support for legacy card processing system (18 months)',
      'Major fraud incident cost $2.3M in Q4 2025',
      'Customer satisfaction dropped from 3.8 to 3.2 stars in 12 months',
      'Lost 3 major co-brand partnerships due to lack of digital features',
      'Board mandated card processing modernization initiative'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'What is your current fraud loss rate, and how much are you losing annually to card fraud? What percentage of fraud is detected within 24 hours vs. real-time?',
        purpose: 'Quantify fraud losses and establish baseline for ROI calculation',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Fraud loss rate 0.33% ($15M annually on $4.5B portfolio), only 40% detected within 24 hours due to batch processing', isCorrect: true, points: 4, feedback: 'Excellent - quantified fraud losses and identified batch processing as root cause.' },
          { id: 'q1-b', text: 'Real-time fraud detection could prevent 70% of fraud losses, saving $10.5M annually - this is #1 pain point and board priority', isCorrect: true, points: 3, feedback: 'Good - identified ROI opportunity and executive urgency.' },
          { id: 'q1-c', text: 'Batch processing causes 24-hour delays in fraud detection, fraudulent transactions approved before detection', isCorrect: true, points: 3, feedback: 'Good - understood technical limitation and business impact.' },
          { id: 'q1-d', text: 'Major fraud incident cost $2.3M in Q4 2025, customer complaints about delayed fraud alerts increasing', isCorrect: true, points: 3, feedback: 'Good - provided recent example and customer impact evidence.' },
          { id: 'q1-e', text: 'Fraud is not a significant problem', isCorrect: false, points: 0, feedback: 'Wrong - $15M annual fraud losses is a critical business problem.' },
          { id: 'q1-f', text: 'Real-time fraud detection is not necessary', isCorrect: false, points: 0, feedback: 'Wrong - real-time detection could save $10.5M annually and is board priority.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'What types of fraud are most common?',
          'What is your false positive rate?',
          'How long does dispute resolution take?'
        ],
        scoringWeight: 15,
        hints: ['Fraud losses are quantifiable and significant', 'Real-time detection proven to reduce fraud by 70%', 'This is measurable ROI']
      },
      {
        question: 'What modern card features are you unable to support with your current system? How is this impacting customer satisfaction and competitive position?',
        purpose: 'Identify feature gaps and competitive disadvantages',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Cannot support contactless payments, mobile wallets (Apple Pay, Google Pay), instant card issuance, real-time rewards, or dynamic spending limits', isCorrect: true, points: 4, feedback: 'Excellent - identified comprehensive list of missing modern card features.' },
          { id: 'q2-b', text: 'Customer satisfaction declined to 3.2 stars, losing high-value customers to competitors with better card experiences', isCorrect: true, points: 3, feedback: 'Good - quantified customer satisfaction impact and competitive disadvantage.' },
          { id: 'q2-c', text: 'Market research shows 65% of customers want instant card issuance and real-time fraud alerts', isCorrect: true, points: 3, feedback: 'Good - provided customer demand data to justify feature investment.' },
          { id: 'q2-d', text: 'Lost 3 major co-brand partnerships due to lack of digital features, losing 15% of new card applications to competitors annually', isCorrect: true, points: 3, feedback: 'Good - quantified partnership and revenue impact of feature gaps.' },
          { id: 'q2-e', text: 'Current features are sufficient for our customers', isCorrect: false, points: 0, feedback: 'Wrong - customer satisfaction at 3.2 stars and losing customers to competitors.' },
          { id: 'q2-f', text: 'Modern card features are not important', isCorrect: false, points: 0, feedback: 'Wrong - 65% of customers demand these features and competitors are winning with them.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'Which features are customers requesting most?',
          'How many customers have you lost to competitors?',
          'What is the revenue impact of customer attrition?'
        ],
        scoringWeight: 12,
        hints: ['Feature gaps driving customer attrition', 'Modern features are table stakes', 'Quantify customer loss']
      },
      {
        question: 'What is your current operational cost per card account, and how does it compare to industry benchmarks? What are your largest cost drivers?',
        purpose: 'Establish cost baseline and identify automation opportunities',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Operational cost $6.50 per account annually vs. industry average $3.20 - costs are 2x industry benchmark', isCorrect: true, points: 4, feedback: 'Excellent - quantified cost gap and established clear improvement opportunity.' },
          { id: 'q3-b', text: 'Largest cost drivers: manual fraud review ($2.5M annually), batch processing overhead ($1.8M), legacy system maintenance ($8M)', isCorrect: true, points: 3, feedback: 'Good - identified specific cost drivers that automation can address.' },
          { id: 'q3-c', text: 'Process 45M transactions annually with significant manual intervention, automation could reduce costs by 50%', isCorrect: true, points: 3, feedback: 'Good - quantified transaction volume and automation savings opportunity.' },
          { id: 'q3-d', text: 'High operational costs ($8M annually) blocking ability to invest in innovation and customer experience improvements', isCorrect: true, points: 3, feedback: 'Good - connected operational costs to strategic limitations.' },
          { id: 'q3-e', text: 'Operational costs are acceptable', isCorrect: false, points: 0, feedback: 'Wrong - costs are 2x industry average, representing $4M annual savings opportunity.' },
          { id: 'q3-f', text: 'Manual processes are more reliable than automation', isCorrect: false, points: 0, feedback: 'Wrong - manual processes are expensive, slow, and error-prone compared to automation.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'How many FTEs support card operations?',
          'What percentage of transactions require manual review?',
          'What is your system maintenance cost?'
        ],
        scoringWeight: 12,
        hints: ['Operational costs are 2x industry average', 'Automation drives significant savings', 'Quantify manual processes']
      },
      {
        question: 'What is your current card processing capacity, and what are your growth targets? Can your current system support your growth strategy?',
        purpose: 'Identify scalability constraints and growth enablement',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Current system maxed at 1.5M accounts and 50M transactions annually, currently at 1.2M accounts - near capacity', isCorrect: true, points: 4, feedback: 'Excellent - quantified current capacity and proximity to limits.' },
          { id: 'q4-b', text: 'Strategic plan: grow to 3M accounts and 120M transactions within 3 years - 2.5x growth target', isCorrect: true, points: 3, feedback: 'Good - identified aggressive growth targets that require new infrastructure.' },
          { id: 'q4-c', text: 'Current system cannot scale beyond 1.5M accounts without major infrastructure investment - blocking growth strategy', isCorrect: true, points: 3, feedback: 'Good - connected scalability constraint to strategic business impact.' },
          { id: 'q4-d', text: 'Market expansion plans and new card products require scalable platform to support growth', isCorrect: true, points: 3, feedback: 'Good - understood that growth strategy depends on scalable infrastructure.' },
          { id: 'q4-e', text: 'Current system can support unlimited growth', isCorrect: false, points: 0, feedback: 'Wrong - system is maxed at 1.5M accounts, blocking 3M account growth target.' },
          { id: 'q4-f', text: 'Growth is not a priority', isCorrect: false, points: 0, feedback: 'Wrong - strategic plan calls for 2.5x growth within 3 years.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'What is your target account growth rate?',
          'What markets are you planning to expand into?',
          'What is the cost of scaling current system?'
        ],
        scoringWeight: 10,
        hints: ['Scalability blocking growth strategy', 'Current system at capacity', 'Growth targets are aggressive']
      },
      {
        question: 'What is your current authorization response time, and how does batch processing impact fraud detection and customer experience?',
        purpose: 'Quantify real-time processing gap and impact',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Authorization response time 2-3 seconds (acceptable), but fraud detection runs batch overnight causing 24-hour delays', isCorrect: true, points: 4, feedback: 'Excellent - distinguished authorization performance from fraud detection gap.' },
          { id: 'q5-b', text: 'Fraudulent transactions are approved and only detected next day - customers complain about delayed fraud alerts', isCorrect: true, points: 3, feedback: 'Good - identified customer experience impact of batch fraud detection.' },
          { id: 'q5-c', text: 'Real-time fraud detection would prevent fraud before authorization, eliminating 70% of fraud losses', isCorrect: true, points: 3, feedback: 'Good - understood business value of real-time fraud prevention.' },
          { id: 'q5-d', text: 'Slow dispute resolution due to batch processing - takes 3-5 days vs. real-time resolution', isCorrect: true, points: 3, feedback: 'Good - identified additional customer experience problem from batch processing.' },
          { id: 'q5-e', text: 'Batch processing is sufficient for fraud detection', isCorrect: false, points: 0, feedback: 'Wrong - 24-hour delays allow fraud to occur and frustrate customers.' },
          { id: 'q5-f', text: 'Authorization response time is the only important metric', isCorrect: false, points: 0, feedback: 'Wrong - fraud detection timing is critical for preventing losses and customer satisfaction.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'How many fraudulent transactions are approved daily?',
          'What is your average fraud detection time?',
          'How long does dispute resolution take?'
        ],
        scoringWeight: 10,
        hints: ['Batch processing causes 24-hour delays', 'Real-time detection prevents fraud at authorization', 'Customer experience suffers']
      },
      {
        question: 'Who are the key stakeholders for this decision, and what are their primary concerns? Who has budget authority?',
        purpose: 'Map decision-making process and stakeholder concerns',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'CIO Michael Torres owns decision with strong support from Chief Risk Officer David Chen and VP of Card Services Lisa Anderson', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner and key champions.' },
          { id: 'q6-b', text: 'CFO Jennifer Kim has budget authority, focused on ROI - requires 24-month payback and 300%+ three-year ROI', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and ROI requirements.' },
          { id: 'q6-c', text: 'Board has mandated card modernization as top priority, decision timeline 3 months with 18-month implementation', isCorrect: true, points: 3, feedback: 'Good - understood executive urgency and timeline constraints.' },
          { id: 'q6-d', text: 'CIO priorities: real-time processing, fraud reduction, customer satisfaction; Chief Risk Officer priorities: fraud prevention, compliance, data security', isCorrect: true, points: 3, feedback: 'Good - mapped stakeholder priorities to solution requirements.' },
          { id: 'q6-e', text: 'No clear decision owner identified', isCorrect: false, points: 0, feedback: 'Wrong - CIO Michael Torres owns the decision with CFO budget authority.' },
          { id: 'q6-f', text: 'Stakeholder concerns are not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholder priorities is critical for solution alignment.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'What are the CIO\'s top priorities?',
          'What is the CFO\'s ROI requirement?',
          'Who are the potential blockers?'
        ],
        scoringWeight: 8,
        hints: ['CIO and Chief Risk Officer are champions', 'CFO controls budget', 'Board mandate creates urgency']
      },
      {
        question: 'What is your timeline for card processing modernization, and what are the key milestones? What is driving the timeline?',
        purpose: 'Understand urgency and timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: 'Board presentation in 6 weeks, vendor selection in 3 months, implementation must complete within 18 months - board mandated', isCorrect: true, points: 4, feedback: 'Excellent - identified specific milestones and executive mandate.' },
          { id: 'q7-b', text: 'Timeline driven by vendor end-of-support (18 months), competitive pressure, and fraud losses - multiple urgency drivers', isCorrect: true, points: 3, feedback: 'Good - understood multiple factors creating timeline pressure.' },
          { id: 'q7-c', text: 'Delayed decision costs $1.25M monthly in fraud losses - quantifiable cost of delay', isCorrect: true, points: 3, feedback: 'Good - quantified financial impact of timeline delays.' },
          { id: 'q7-d', text: 'Vendor announcing end-of-support creates compliance and security risk if not addressed within 18 months', isCorrect: true, points: 3, feedback: 'Good - identified regulatory and security implications of timeline.' },
          { id: 'q7-e', text: 'Timeline is flexible, no urgency', isCorrect: false, points: 0, feedback: 'Wrong - board has mandated 18-month completion with vendor end-of-support deadline.' },
          { id: 'q7-f', text: 'Can implement in 6 months', isCorrect: false, points: 0, feedback: 'Unrealistic - card processing migration requires 18 months for phased approach with parallel run.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'What happens if timeline slips?',
          'Are there regulatory deadlines?',
          'What is the cost of delay?'
        ],
        scoringWeight: 8,
        hints: ['Timeline is aggressive and board-mandated', 'Delay has quantifiable cost', 'Vendor end-of-support creates urgency']
      },
      {
        question: 'What is your budget for card processing modernization, and what is included? What is your expected ROI and payback period?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$12-18M budget approved for complete modernization including hardware, software, implementation, and training', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget with board approval.' },
          { id: 'q8-b', text: 'CFO requires 24-month payback and 300%+ three-year ROI - achievable with fraud reduction and cost savings', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements and how to meet them.' },
          { id: 'q8-c', text: 'Budget includes migration costs and parallel run period - comprehensive funding for risk mitigation', isCorrect: true, points: 3, feedback: 'Good - confirmed budget covers full implementation including risk mitigation.' },
          { id: 'q8-d', text: 'Board approved budget based on fraud reduction ($10.5M annually) and operational cost savings ($4M annually)', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers and executive buy-in.' },
          { id: 'q8-e', text: 'Budget is unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $12-18M with specific ROI requirements.' },
          { id: 'q8-f', text: 'ROI is not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires 24-month payback and 300%+ three-year ROI.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        followUpQuestions: [
          'What is included in the budget?',
          'What is the approval process?',
          'Are there additional funds for innovation?'
        ],
        scoringWeight: 8,
        hints: ['Budget is approved and adequate', 'ROI expectations are achievable', 'Focus on fraud reduction']
      }
    ],
    expectedFindings: [
      '$15M annual fraud losses due to batch-only fraud detection',
      'Cannot support modern card features (contactless, mobile wallets, instant issuance)',
      'Customer satisfaction declining (3.2/5 stars)',
      'System at capacity (1.2M accounts, maxed at 1.5M)',
      'High operational costs ($8M annually, $6.50 per account)',
      'Vendor end-of-support in 18 months',
      'Board mandate for modernization',
      'Budget approved ($12-18M) - qualified opportunity'
    ],
    redFlags: [
      'If budget is under $10M - not enough for complete modernization',
      'If timeline is less than 12 months - too aggressive for card processing',
      'If no executive sponsorship - will struggle with change management',
      'If fraud losses are not quantified - may not be real pain',
      'If they want to keep mainframe - not true modernization'
    ],
    opportunities: [
      'Fraud reduction: $10.5M annually (reduce losses by 70%)',
      'Operational cost savings: $4M annually (reduce from $8M to $4M)',
      'Customer retention: $5M annually (improve satisfaction, reduce churn)',
      'Revenue growth: $8M annually from new card accounts and features',
      'Scalability: Support 3M accounts (2.5x growth capacity)',
      'Modern features: Contactless, mobile wallets, instant issuance',
      'Real-time fraud detection: <100ms fraud scoring',
      'Customer satisfaction: 3.2 to 4.5+ stars'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    minimumObjectionsToHandle: 3,
    objections: [
      {
        objection: 'We are concerned about the complexity and risk of migrating 1.2M active card accounts from our legacy system. What if something goes wrong and we cannot process card transactions?',
        stakeholder: 'CIO',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Migration risk is a valid concern for mission-critical card processing. IBM has a proven migration approach that eliminates risk: (1) Phased migration starting with new accounts (no migration risk), then gradually migrating existing accounts in small batches, (2) Parallel run capability - legacy system continues processing while new system validates in parallel, (3) Automated migration tools with validation and reconciliation, (4) Rollback capability at every phase if issues arise, (5) IBM Expert Labs has migrated 200+ card processing systems with 99.5% success rate. We recommend 18-month timeline with 6-month parallel run to ensure zero business disruption. Most banks find the new system is MORE reliable than legacy.',
        scoringCriteria: [
          'Acknowledged migration risk and complexity',
          'Presented phased migration approach with parallel run',
          'Emphasized IBM track record (200+ migrations, 99.5% success)',
          'Offered rollback capability and risk mitigation',
          'Provided realistic timeline with adequate testing'
        ],
        hints: [
          'Migration risk is #1 concern for card processing',
          'Phased approach with parallel run eliminates risk',
          'IBM has proven track record'
        ]
      },
      {
        objection: 'Your solution costs $15M, which is significantly more than cloud-based card processing platforms that cost $3-5M. Why should we pay 3x more for on-premises infrastructure?',
        stakeholder: 'CFO',
        difficulty: 'difficult',
        category: 'cost',
        customResponse: 'Let\'s look at total cost of ownership over 5 years, not just initial cost. Cloud platforms charge per-transaction fees that add up quickly: at 45M transactions annually, you will pay $2.7M per year in transaction fees ($0.06 per transaction), totaling $13.5M over 5 years. IBM solution has zero per-transaction fees. Additionally, cloud platforms charge for data egress, API calls, and storage - adding another $1.5M annually. Total cloud TCO is $21M over 5 years vs. $15M for IBM solution. IBM solution also provides superior performance (sub-100ms vs. 300ms cloud latency), better security (dedicated infrastructure vs. multi-tenant), and data sovereignty. The business case shows 24-month payback and 380% three-year ROI through fraud reduction and operational cost savings.',
        scoringCriteria: [
          'Compared total cost of ownership, not just initial cost',
          'Quantified cloud transaction fees and hidden costs',
          'Showed IBM solution is lower TCO over 5 years',
          'Emphasized performance, security, and data sovereignty advantages',
          'Presented strong ROI (24-month payback, 380% three-year ROI)'
        ],
        hints: [
          'Cloud platforms have hidden per-transaction fees',
          'TCO analysis shows IBM is lower cost over 5 years',
          'Performance and security advantages justify investment'
        ]
      },
      {
        objection: 'We are concerned about false positives blocking legitimate customer transactions. If your AI fraud detection is too aggressive, we will frustrate customers and lose sales.',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Balancing fraud detection with customer experience is critical. Watson AI is designed to minimize false positives while maximizing fraud detection: (1) Machine learning models are trained on YOUR historical transaction data to understand normal customer behavior, (2) Behavioral analytics detect anomalies based on individual customer patterns, not generic rules, (3) Graduated response - suspicious transactions trigger additional authentication (SMS code, biometric), not immediate blocking, (4) Real-time learning - AI adapts to customer behavior changes (travel, large purchases), (5) Industry benchmarks show Watson achieves <1% false positive rate while detecting 95% of fraud. We can tune sensitivity based on your risk tolerance. Most banks find customer satisfaction IMPROVES because legitimate transactions are approved faster and fraud is prevented before it impacts customers.',
        scoringCriteria: [
          'Acknowledged false positive concern and customer impact',
          'Explained how Watson AI minimizes false positives',
          'Described graduated response approach',
          'Provided industry benchmarks (<1% false positive rate)',
          'Emphasized customer experience improvement'
        ],
        hints: [
          'False positives are major concern for card issuers',
          'Watson AI uses behavioral analytics, not generic rules',
          'Graduated response balances security and experience'
        ]
      },
      {
        objection: 'Our card services team is already overwhelmed with current operations. How will we manage the implementation and training for a new card processing system?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Resource constraints are a common concern. IBM provides comprehensive implementation and training support: (1) IBM Expert Labs handles the technical implementation - your team focuses on business requirements and testing, (2) Phased rollout minimizes operational impact - start with new accounts while legacy system continues, (3) Comprehensive training program for card services staff with hands-on workshops, (4) IBM provides 24/7 support during migration and first 6 months of operation, (5) Modern card processing system is actually EASIER to operate than legacy system - automated fraud detection, self-service customer tools, and streamlined operations. Most banks find staff productivity improves 40% after migration because they spend less time on manual fraud review and customer service. We can also provide temporary staff augmentation during migration if needed.',
        responseChoices: [
          { id: 'obj4-a', text: 'IBM Expert Labs handles technical implementation - your team focuses on business requirements and testing, not technical complexity', isCorrect: true, points: 4, feedback: 'Excellent - IBM takes on implementation burden, freeing up customer team.' },
          { id: 'obj4-b', text: 'Phased rollout minimizes operational impact: start with new accounts while legacy system continues - no disruption', isCorrect: true, points: 3, feedback: 'Good - phased approach allows team to manage change gradually.' },
          { id: 'obj4-c', text: 'Comprehensive training program with hands-on workshops, 24/7 support during migration and first 6 months', isCorrect: true, points: 3, feedback: 'Good - extensive training and support ensure team readiness.' },
          { id: 'obj4-d', text: 'Modern system EASIER to operate: automated fraud detection, self-service tools - staff productivity improves 40%, temporary staff augmentation available', isCorrect: true, points: 3, feedback: 'Good - automation reduces operational burden and improves productivity.' },
          { id: 'obj4-e', text: 'Team must handle all implementation themselves', isCorrect: false, points: 0, feedback: 'Wrong - IBM Expert Labs handles technical implementation.' },
          { id: 'obj4-f', text: 'No training or support provided', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive training program and 24/7 support included.' }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Acknowledged resource constraints and operational concerns',
          'Explained IBM implementation support and Expert Labs',
          'Described phased approach to minimize operational impact',
          'Emphasized training and 24/7 support',
          'Showed how automation improves staff productivity'
        ],
        hints: [
          'Resource constraints are common for card operations teams',
          'IBM Expert Labs handles technical implementation',
          'Automation reduces operational burden'
        ]
      }
    ],
    bonusObjections: [
      {
        objection: 'We have heard that AI fraud detection can be biased and discriminate against certain customer demographics. How do you ensure fair lending and avoid regulatory issues?',
        stakeholder: 'Chief Risk Officer',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'Fair lending and non-discrimination are absolutely critical for card processing. IBM Watson AI is designed for fairness and regulatory compliance: (1) Fraud detection models are trained on transaction behavior, not demographic data - no access to race, gender, age, or other protected characteristics, (2) Explainable AI provides detailed reasoning for every fraud decision that auditors can review, (3) Bias testing and fairness metrics are built into model development and monitoring, (4) Comprehensive audit trail for every fraud decision stored on FlashSystem with immutable snapshots, (5) IBM provides fairness assessment tools and ongoing monitoring for bias. Watson AI has been deployed at 50+ banks with zero fair lending violations. We can also provide third-party fairness audits if required by regulators.',
        scoringCriteria: [
          'Acknowledged fair lending concerns and regulatory requirements',
          'Explained how Watson AI avoids demographic bias',
          'Described explainable AI and audit trail capabilities',
          'Provided IBM track record (zero violations)',
          'Offered fairness assessment and third-party audits'
        ],
        hints: [
          'Fair lending is critical regulatory requirement',
          'Watson AI uses transaction behavior, not demographics',
          'Explainable AI provides transparency'
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
          reason: 'High-performance, reliable infrastructure for real-time card processing with sub-second authorization response times, 99.999% uptime, and ability to scale to 5M+ accounts and 200M+ transactions annually.',
          configuration: '2x Power E1080, 32-core each, 2TB RAM total, Red Hat Enterprise Linux, PowerVM virtualization, live partition mobility',
          priority: 'primary'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'Ultra-low latency storage for real-time card transaction processing, fraud detection, and customer data access. Cyber Vault protects against ransomware. Immutable snapshots provide audit trail for regulatory compliance.',
          configuration: 'FlashSystem 9500, 300TB effective capacity, NVMe performance, Cyber Vault, SafeguardedCopy, encryption at rest',
          priority: 'supporting'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio',
          reason: 'AI-powered fraud detection that analyzes every transaction in real-time, reducing fraud losses by 70% while minimizing false positives. Machine learning models continuously improve fraud detection accuracy.',
          configuration: 'Watson Studio on Power E1080, real-time fraud scoring (<50ms), behavioral analytics, network analysis, explainable AI',
          priority: 'supporting'
        }
      ],
      architecture: 'Power E1080 as card processing platform running modern card management software with real-time authorization and fraud detection. FlashSystem 9500 provides ultra-low latency storage for transaction data, customer profiles, and fraud models. Watson Studio AI analyzes every transaction in real-time, scoring fraud risk and blocking suspicious transactions before authorization.',
      sizing: 'Sized for 1.2M current accounts with growth capacity to 3M accounts and 120M transactions annually. Supports 10K concurrent authorizations with <100ms response time.',
      deployment: 'Phased approach: Phase 1 (Months 1-3): Infrastructure deployment and testing. Phase 2 (Months 4-6): Card management software installation, Watson AI model training. Phase 3 (Months 7-9): Pilot with 50K new card accounts. Phase 4 (Months 10-15): Phased migration of existing 1.2M accounts, parallel run. Phase 5 (Months 16-18): Complete migration, decommission legacy system, launch modern card features.'
    },
    pricing: {
      hardware: '$8M (2x Power E1080 + FlashSystem 9500)',
      software: '$4M (Card management software, Watson Studio, 3-year license)',
      services: '$2.5M (IBM Expert Labs: implementation, migration, training)',
      support: '$500K/year (24x7 support with 2-hour response)',
      total: '$14.5M initial + $500K/year support',
      financing: 'IBM Flex financing available - $310K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$14.5M annually (fraud reduction $10.5M, operational cost savings $4M)',
      productivityGains: '$2M annually (automated fraud detection, reduced manual review)',
      riskReduction: 'Eliminate vendor end-of-support risk, improve PCI-DSS compliance, reduce fraud losses by 70%',
      roi: '24 months',
      paybackPeriod: '24 months',
      tco: '3-year TCO: $16M investment vs. $49.5M in benefits (fraud reduction + cost savings + revenue growth) = $33.5M net benefit, 380% three-year ROI'
    },
    competitivePositioning: 'IBM Power E1080 provides enterprise-grade reliability and performance for mission-critical card processing. Watson AI fraud detection is proven to reduce fraud losses by 70% while maintaining <1% false positive rate. Unlike cloud platforms with per-transaction fees, IBM solution has zero transaction fees and lower 5-year TCO. FlashSystem provides ransomware protection and immutable audit trails for compliance.',
    nextSteps: [
      'Schedule technical deep-dive on Power E1080 card processing architecture',
      'Provide detailed ROI analysis with fraud reduction modeling',
      'Arrange reference call with similar regional bank (card processing customer)',
      'Conduct Watson AI fraud detection demo with your transaction data',
      'Develop phased migration plan with parallel run strategy',
      'Present to Board with CIO, CFO, and Chief Risk Officer'
    ],
    requiredElements: [
      'Must include Power E1080 for card processing infrastructure',
      'Must include Watson Studio for real-time fraud detection',
      'Must include FlashSystem 9500 for storage performance and security',
      'Must include phased migration with parallel run',
      'Must address fraud reduction (70% target)',
      'Must support modern card features (contactless, mobile wallets)',
      'Must include IBM Expert Labs services for implementation'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified fraud losses and business impact ($15M annually)',
        'Identified modern card feature gaps and competitive disadvantages',
        'Uncovered operational cost problems ($8M annually, $6.50 per account)',
        'Identified scalability constraints (1.2M accounts, maxed at 1.5M)',
        'Understood real-time processing gap (24-hour fraud detection delays)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($12-18M, 18 months)',
        'Assessed migration concerns and risk tolerance'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed migration risk with phased approach and parallel run',
        'Handled cost objection with TCO analysis (5-year comparison)',
        'Addressed false positive concerns with Watson AI capabilities',
        'Handled resource concerns with IBM services and automation benefits',
        'Addressed fair lending with explainable AI and compliance features',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as primary card processing platform',
        'Included Watson Studio for real-time fraud detection',
        'Included FlashSystem 9500 for storage performance and security',
        'Addressed all pain points (fraud, features, costs, scalability)',
        'Proposed phased migration with parallel run',
        'Included modern card features (contactless, mobile wallets)'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified fraud reduction value ($10.5M annually)',
        'Quantified operational cost savings ($4M annually)',
        'Calculated ROI (24-month payback, 380% three-year ROI)',
        'Articulated customer satisfaction improvement (3.2 to 4.5+ stars)',
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
      concept: 'Card Processing Modernization',
      description: 'How to position modern card processing infrastructure vs. legacy mainframe systems and quantify fraud reduction value',
      skillLevel: 'advanced'
    },
    {
      concept: 'Real-Time Fraud Detection',
      description: 'Understanding AI-powered fraud detection and how to address false positive concerns while demonstrating fraud reduction benefits',
      skillLevel: 'advanced'
    },
    {
      concept: 'TCO Analysis for Card Processing',
      description: 'How to compare on-premises vs. cloud card processing using total cost of ownership including transaction fees',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Migration Risk Management',
      description: 'How to address migration concerns for mission-critical card processing with phased approach and parallel run strategy',
      skillLevel: 'advanced'
    },
    {
      concept: 'Modern Card Features',
      description: 'Understanding competitive importance of contactless payments, mobile wallets, and instant issuance for customer satisfaction',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['Card processing', 'Fraud detection', 'Real-time processing', 'AI fraud prevention', 'Payment modernization', 'PCI compliance', 'Power E1080', 'Watson Studio'],
    skills: ['Discovery', 'Objection handling', 'Solution architecture', 'Business value', 'ROI analysis', 'Risk management', 'TCO analysis'],
    products: ['power-e1080', 'flashsystem-9500', 'watson-studio'],
    industries: ['Banking', 'Financial Services'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },
  
  coachingTips: [
    'Lead with fraud reduction - $10.5M annual savings is compelling and quantifiable',
    'Emphasize real-time processing enables modern card features and customer experience',
    'Address migration risk early with phased approach and parallel run capability',
    'Build strong TCO case - IBM is lower cost than cloud over 5 years despite higher initial cost',
    'CIO and Chief Risk Officer are champions - focus on real-time processing and fraud reduction',
    'Chief Risk Officer is concerned about false positives - emphasize Watson AI accuracy (<1% false positive rate)',
    'CFO requires strong ROI - show 24-month payback and 380% three-year ROI',
    'Differentiate from cloud with performance (sub-100ms vs 300ms), security, and TCO advantages',
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
