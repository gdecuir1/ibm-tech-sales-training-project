// Healthcare Industry Training Scenarios
// Focus: Epic EHR, HIPAA compliance, ransomware protection, performance optimization

import { TrainingScenario } from '../../types/scenarios';

export const healthcareScenario001: TrainingScenario = {
  id: 'healthcare-epic-performance-001',
  title: '500-Bed Hospital with Slow Epic Response Times',
  description: 'A regional medical center experiencing Epic EHR performance degradation during peak hours, with growing Oracle licensing costs and no disaster recovery plan.',
  
  customerProfile: {
    company: 'Memorial Regional Medical Center',
    industry: 'Healthcare',
    size: 'Large (1000-5000 employees)',
    revenue: '$800M annually',
    employees: 2500,
    location: 'Midwest USA',
    currentInfrastructure: {
      servers: '15 Dell PowerEdge R750 servers',
      storage: 'EMC VNX 5400 (5 years old)',
      applications: ['Epic EHR (Hyperspace, Cadence, Beaker)', 'Oracle Database 19c', 'VMware vSphere 7.0'],
      operatingSystem: 'Red Hat Enterprise Linux 8',
      virtualization: 'VMware vSphere',
      age: '5 years',
      endOfLife: '18 months',
      issues: [
        'Epic response times >3 seconds during peak hours',
        'Oracle database CPU at 85% utilization',
        'Storage IOPS bottleneck',
        'No disaster recovery site'
      ]
    },
    keyStakeholders: [
      {
        name: 'Dr. Sarah Chen',
        role: 'CIO',
        priorities: ['Epic performance', 'Patient care quality', 'Cost control'],
        concerns: ['Disruption to clinical operations', 'Budget constraints'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Mike Johnson',
        role: 'IT Director',
        priorities: ['System reliability', 'Easy management', 'Staff workload'],
        concerns: ['Team lacks AIX skills', 'Migration complexity'],
        influence: 'high',
        supportLevel: 'skeptic'
      },
      {
        name: 'Lisa Martinez',
        role: 'CFO',
        priorities: ['ROI', 'Budget adherence', 'Cost reduction'],
        concerns: ['High upfront cost', 'Oracle licensing costs'],
        influence: 'high',
        supportLevel: 'neutral'
      },
      {
        name: 'Dr. James Wilson',
        role: 'Business Unit Leader',
        priorities: ['Physician satisfaction', 'Patient outcomes', 'Workflow efficiency'],
        concerns: ['System downtime', 'Training requirements'],
        influence: 'medium',
        supportLevel: 'supporter'
      }
    ],
    budget: '$2M-$4M',
    timeline: '6-9 months',
    decisionProcess: 'Committee decision with CIO, CFO, and IT Director approval required'
  },
  
  businessContext: {
    challenges: [
      'Epic response times degrading from 1 second to 3-5 seconds during peak hours (8am-5pm)',
      'Physician and nurse complaints about system slowness affecting patient care',
      'Oracle licensing costs increasing 15% annually, now $850K per year',
      'No disaster recovery plan - single point of failure',
      'Recent ransomware attacks on other hospitals causing concern',
      'Hardware approaching end-of-life in 18 months',
      'Storage running at 80% capacity with 30% annual growth'
    ],
    businessImpact: [
      'Patient care delays - physicians spending 30 extra minutes per day waiting for Epic',
      'Staff productivity loss estimated at $2M annually',
      'Risk of HIPAA violations due to inadequate data protection',
      'Potential for extended outage if hardware fails',
      'Budget pressure from rising Oracle costs',
      'Physician satisfaction scores declining'
    ],
    urgency: 'high',
    strategicInitiatives: [
      'Improve patient experience and outcomes',
      'Reduce IT operational costs by 20%',
      'Enhance cybersecurity and data protection',
      'Achieve 99.9% uptime for Epic',
      'Prepare for future growth (new clinic opening in 12 months)'
    ],
    competitivePressure: 'Competing hospitals have faster Epic systems, affecting physician recruitment',
    regulatoryRequirements: ['HIPAA compliance', 'State health department data protection requirements'],
    recentEvents: [
      'Nearby hospital hit by ransomware 3 months ago',
      'Epic upgrade planned for next year',
      'New clinic opening requiring 20% more Epic capacity'
    ]
  },
  
  discoveryPhase: {
    questions: [
      {
        question: 'Can you describe the specific Epic performance issues you\'re experiencing? Which modules and at what times?',
        purpose: 'Quantify the problem and identify scope',
        category: 'pain-point',
        // Multiple choice options
        choices: [
          { id: 'q1-a', text: 'Which specific Epic modules are experiencing the slowest response times?', isCorrect: true, points: 3, feedback: 'Excellent - identifying specific modules helps scope the problem' },
          { id: 'q1-b', text: 'What are the peak usage times when performance degrades?', isCorrect: true, points: 3, feedback: 'Great question - timing helps identify capacity issues' },
          { id: 'q1-c', text: 'How many concurrent users are affected during peak hours?', isCorrect: true, points: 3, feedback: 'Critical data point for sizing the solution' },
          { id: 'q1-d', text: 'What are the actual measured response times (baseline vs peak)?', isCorrect: true, points: 2, feedback: 'Good - quantifying the problem is important' },
          { id: 'q1-e', text: 'What color scheme does your Epic interface use?', isCorrect: false, points: 0, feedback: 'Not relevant to performance issues' },
          { id: 'q1-f', text: 'Do your physicians prefer Epic over other EHR systems?', isCorrect: false, points: 0, feedback: 'Not relevant to the technical performance problem' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support (deprecated but kept for backward compatibility)
        idealResponse: 'Hyperspace and Cadence are slowest during peak hours (8am-5pm). Response times go from 1 second to 3-5 seconds. Affects all 500 concurrent users.',
        alternateResponses: [
          'All Epic modules are slow',
          'Mainly during morning rounds and afternoon charting'
        ],
        followUpQuestions: [
          'How many concurrent Epic users during peak hours?',
          'What is the business impact of these delays?',
          'Have you measured the actual response times?'
        ],
        scoringWeight: 10,
        hints: ['Ask about specific modules', 'Quantify the problem', 'Identify peak times']
      },
      {
        question: 'What is your current Oracle licensing situation? How many cores are you licensed for and what are the annual costs?',
        purpose: 'Identify Oracle cost pain point and savings opportunity',
        category: 'business',
        // Multiple choice options
        choices: [
          { id: 'q2-a', text: 'How many Oracle cores are you currently licensed for?', isCorrect: true, points: 3, feedback: 'Critical for calculating potential savings' },
          { id: 'q2-b', text: 'What are your annual Oracle licensing costs?', isCorrect: true, points: 4, feedback: 'Essential for building the business case' },
          { id: 'q2-c', text: 'How much do Oracle costs increase each year?', isCorrect: true, points: 3, feedback: 'Shows the growing pain point' },
          { id: 'q2-d', text: 'What percentage of your IT budget goes to Oracle?', isCorrect: true, points: 2, feedback: 'Helps quantify the burden' },
          { id: 'q2-e', text: 'What version of Oracle are you running?', isCorrect: false, points: 0, feedback: 'Less relevant than cost and licensing' },
          { id: 'q2-f', text: 'Do you like Oracle as a company?', isCorrect: false, points: 0, feedback: 'Not relevant to the business problem' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'We\'re licensed for 240 Oracle cores across 15 servers at $850K annually. Costs increase 15% per year. It\'s consuming a large portion of our IT budget.',
        alternateResponses: [
          'Oracle costs are high and growing',
          'We have many Oracle cores licensed'
        ],
        followUpQuestions: [
          'What percentage of your IT budget is Oracle?',
          'How does the CFO feel about these costs?',
          'Have you explored ways to reduce Oracle licensing?'
        ],
        scoringWeight: 15,
        hints: ['Oracle licensing is often a major pain point', 'Quantify the costs', 'Identify budget pressure']
      },
      {
        question: 'Do you have a disaster recovery plan for Epic? What is your RTO and RPO?',
        purpose: 'Identify DR gap and compliance risk',
        category: 'technical',
        // Multiple choice options
        choices: [
          { id: 'q3-a', text: 'Do you have a disaster recovery site for Epic?', isCorrect: true, points: 4, feedback: 'Critical for understanding DR readiness' },
          { id: 'q3-b', text: 'What is your target RTO (Recovery Time Objective)?', isCorrect: true, points: 3, feedback: 'Essential for sizing the DR solution' },
          { id: 'q3-c', text: 'What is your target RPO (Recovery Point Objective)?', isCorrect: true, points: 3, feedback: 'Determines backup frequency requirements' },
          { id: 'q3-d', text: 'What would be the business impact of an extended Epic outage?', isCorrect: true, points: 3, feedback: 'Quantifies the urgency and value' },
          { id: 'q3-e', text: 'What color are your server racks?', isCorrect: false, points: 0, feedback: 'Not relevant to disaster recovery planning' },
          { id: 'q3-f', text: 'Do you prefer tape or disk backups?', isCorrect: false, points: 0, feedback: 'Too tactical - focus on business requirements first' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'We don\'t have a DR site. If our data center goes down, we\'d be offline for days. This is a major concern, especially after the ransomware attack at the hospital nearby.',
        alternateResponses: [
          'We have backups but no DR site',
          'DR is on our list but we haven\'t implemented it'
        ],
        followUpQuestions: [
          'What would be the business impact of an extended Epic outage?',
          'Do you have regulatory requirements for DR?',
          'What is your budget for DR?'
        ],
        scoringWeight: 12,
        hints: ['DR is critical for healthcare', 'Identify compliance requirements', 'Quantify risk']
      },
      {
        question: 'When is your current hardware end-of-life? What is your refresh strategy?',
        purpose: 'Identify refresh timing and budget',
        category: 'timeline',
        // Multiple choice options
        choices: [
          { id: 'q4-a', text: 'When will your current servers reach end-of-life?', isCorrect: true, points: 3, feedback: 'Critical timing information for the proposal' },
          { id: 'q4-b', text: 'What is your budget for the hardware refresh?', isCorrect: true, points: 4, feedback: 'Essential for solution sizing' },
          { id: 'q4-c', text: 'Who is involved in the refresh decision?', isCorrect: true, points: 2, feedback: 'Identifies key stakeholders' },
          { id: 'q4-d', text: 'What are you considering for replacement?', isCorrect: true, points: 2, feedback: 'Reveals competitive landscape' },
          { id: 'q4-e', text: 'What brand of servers do you currently have?', isCorrect: false, points: 0, feedback: 'Less important than EOL timing and budget' },
          { id: 'q4-f', text: 'How many rack units do you have available?', isCorrect: false, points: 0, feedback: 'Too tactical for discovery phase' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'Our Dell servers are 5 years old and will be end-of-life in 18 months. We need to plan the refresh now. Budget is approved for $2-4M.',
        alternateResponses: [
          'Hardware is aging and needs replacement soon',
          'We have budget for refresh'
        ],
        followUpQuestions: [
          'What is your budget for the refresh?',
          'What are you considering for replacement?',
          'Who is involved in the decision?'
        ],
        scoringWeight: 8,
        hints: ['Timing is important', 'Identify budget', 'Understand decision process']
      },
      {
        question: 'What are your top priorities for the new infrastructure? Performance, cost, reliability, or something else?',
        purpose: 'Understand decision criteria and stakeholder priorities',
        category: 'business',
        // Multiple choice options
        choices: [
          { id: 'q5-a', text: 'How do you prioritize performance vs. cost vs. reliability?', isCorrect: true, points: 4, feedback: 'Critical for solution positioning' },
          { id: 'q5-b', text: 'What would success look like for this project?', isCorrect: true, points: 3, feedback: 'Defines measurable outcomes' },
          { id: 'q5-c', text: 'How do different stakeholders prioritize these factors?', isCorrect: true, points: 3, feedback: 'Reveals potential conflicts to address' },
          { id: 'q5-d', text: 'Are there any other critical requirements?', isCorrect: true, points: 2, feedback: 'Uncovers hidden needs' },
          { id: 'q5-e', text: 'What is your favorite color for server LEDs?', isCorrect: false, points: 0, feedback: 'Not relevant to business priorities' },
          { id: 'q5-f', text: 'Do you prefer rack-mount or blade servers?', isCorrect: false, points: 0, feedback: 'Too tactical - focus on business outcomes' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'Performance is #1 - we need faster Epic. Cost reduction is #2 - especially Oracle. Reliability is #3 - we can\'t afford downtime. DR is also critical.',
        alternateResponses: [
          'All of the above',
          'Performance and cost are most important'
        ],
        followUpQuestions: [
          'How do the different stakeholders prioritize these?',
          'What would success look like?',
          'Are there any other requirements?'
        ],
        scoringWeight: 10,
        hints: ['Understand priorities', 'Identify success criteria', 'Map to stakeholders']
      },
      {
        question: 'How concerned are you about ransomware and data protection? Do you have immutable backups?',
        purpose: 'Identify security concerns and cyber resilience needs',
        category: 'pain-point',
        // Multiple choice options
        choices: [
          { id: 'q6-a', text: 'Do you have immutable backups that can\'t be encrypted by ransomware?', isCorrect: true, points: 4, feedback: 'Critical cyber resilience capability' },
          { id: 'q6-b', text: 'How long would it take to recover from a ransomware attack?', isCorrect: true, points: 3, feedback: 'Quantifies the business risk' },
          { id: 'q6-c', text: 'Have you been affected by ransomware or know others who have?', isCorrect: true, points: 2, feedback: 'Establishes urgency and awareness' },
          { id: 'q6-d', text: 'What is your current backup and recovery strategy?', isCorrect: true, points: 3, feedback: 'Identifies gaps in protection' },
          { id: 'q6-e', text: 'What antivirus software do you use?', isCorrect: false, points: 0, feedback: 'Too tactical - focus on business impact' },
          { id: 'q6-f', text: 'How many USB ports do your servers have?', isCorrect: false, points: 0, feedback: 'Not relevant to ransomware protection' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'Very concerned after the attack nearby. We have backups but they\'re not immutable. If we got hit, recovery would take days and we might lose data.',
        alternateResponses: [
          'Ransomware is a major concern',
          'We need better data protection'
        ],
        followUpQuestions: [
          'What is your backup and recovery strategy?',
          'How long would recovery take?',
          'Do you have cyber insurance?'
        ],
        scoringWeight: 10,
        hints: ['Ransomware is critical for healthcare', 'Identify protection gaps', 'Quantify recovery time']
      },
      {
        question: 'What is your team\'s experience with different platforms? Any concerns about skills or training?',
        purpose: 'Identify skills concerns and training needs',
        category: 'stakeholder',
        // Multiple choice options
        choices: [
          { id: 'q7-a', text: 'What platforms does your team have experience with?', isCorrect: true, points: 3, feedback: 'Identifies current skill base' },
          { id: 'q7-b', text: 'Are skills or training a concern for new technology?', isCorrect: true, points: 3, feedback: 'Surfaces potential objection early' },
          { id: 'q7-c', text: 'Would training and professional services help address concerns?', isCorrect: true, points: 2, feedback: 'Offers solution to skills objection' },
          { id: 'q7-d', text: 'How important is ease of management and automation?', isCorrect: true, points: 3, feedback: 'Identifies operational priorities' },
          { id: 'q7-e', text: 'What certifications does your team have?', isCorrect: false, points: 0, feedback: 'Less relevant than platform experience' },
          { id: 'q7-f', text: 'How many IT staff do you have?', isCorrect: false, points: 0, feedback: 'Not directly related to skills concerns' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'Team is experienced with x86 and VMware. No AIX experience. Concerned about learning curve but willing to train if the benefits are clear.',
        alternateResponses: [
          'We\'re an x86 shop',
          'Skills are a concern but not a blocker'
        ],
        followUpQuestions: [
          'Would training and professional services help?',
          'What if we included Linux on Power as an option?',
          'How important is ease of management?'
        ],
        scoringWeight: 8,
        hints: ['Skills are often an objection', 'Offer training and services', 'Emphasize Linux option']
      },
      {
        question: 'Are you planning any Epic upgrades or expansions? What is your growth projection?',
        purpose: 'Identify future needs and scalability requirements',
        category: 'business',
        // Multiple choice options
        choices: [
          { id: 'q8-a', text: 'Are you planning any Epic upgrades in the next 12-24 months?', isCorrect: true, points: 3, feedback: 'Identifies near-term capacity needs' },
          { id: 'q8-b', text: 'What is your growth projection over the next 3-5 years?', isCorrect: true, points: 3, feedback: 'Essential for sizing scalability' },
          { id: 'q8-c', text: 'Are you opening new facilities or expanding services?', isCorrect: true, points: 3, feedback: 'Reveals expansion plans' },
          { id: 'q8-d', text: 'Do you need flexibility to scale capacity up and down?', isCorrect: true, points: 2, feedback: 'Identifies elasticity requirements' },
          { id: 'q8-e', text: 'What version of Epic are you on today?', isCorrect: false, points: 0, feedback: 'Less relevant than future plans' },
          { id: 'q8-f', text: 'How many Epic modules do you use?', isCorrect: false, points: 0, feedback: 'Not directly related to growth planning' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        // Legacy free-text support
        idealResponse: 'Epic upgrade next year. New clinic opening in 12 months will add 20% more users. We need a platform that can scale.',
        alternateResponses: [
          'We\'re growing',
          'Epic upgrade is planned'
        ],
        followUpQuestions: [
          'How much growth do you expect over 3-5 years?',
          'What are the capacity requirements?',
          'Do you need flexibility to scale up and down?'
        ],
        scoringWeight: 7,
        hints: ['Identify growth needs', 'Emphasize scalability', 'Plan for future']
      }
    ],
    expectedFindings: [
      'Oracle database is the primary bottleneck',
      'Storage IOPS insufficient for Epic workload',
      'No disaster recovery plan - major risk',
      'Oracle licensing costs are a significant pain point',
      'Hardware refresh needed within 18 months',
      'Ransomware protection is inadequate',
      'Team skills are a concern but not a blocker',
      'Growth planned - need scalable platform'
    ],
    redFlags: [
      'If budget is under $1M - not enough for complete solution',
      'If timeline is less than 3 months - too aggressive',
      'If team is completely opposed to new platforms',
      'If they\'re committed to another vendor'
    ],
    opportunities: [
      'Oracle cost reduction (40-60% savings possible)',
      'Epic performance improvement (2-3x faster)',
      'Disaster recovery in cloud (60-80% less than second data center)',
      'Ransomware protection with immutable snapshots',
      'Consolidation (15 servers to 2)',
      'Future-proof platform for growth'
    ],
    minimumQuestionsRequired: 5
  },
  
  objectionPhase: {
    objections: [
      {
        objection: 'Power is more expensive than staying with Dell. We can\'t afford the upfront cost.',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        bestResponseId: 'power-e1080-objection-cost',
        responseChoices: [
          {
            id: 'obj1-a',
            text: 'Focus on TCO: Power reduces Oracle licensing 40-60% ($340K-$510K annually), consolidates 15 servers to 2, and includes cloud DR for $150K/year vs $2M+ for second data center',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent - addresses TCO comprehensively with specific savings across multiple areas'
          },
          {
            id: 'obj1-b',
            text: 'Offer TCO analysis comparing 5-year costs of Power vs Dell upgrade, including Oracle licensing, hardware, support, and DR',
            isCorrect: true,
            points: 3,
            feedback: 'Good approach - quantifying long-term costs helps CFOs make informed decisions'
          },
          {
            id: 'obj1-c',
            text: 'Reference Mayo Clinic case study: saved $2.1M annually by moving Epic to Power, achieved ROI in 18 months',
            isCorrect: true,
            points: 3,
            feedback: 'Strong - healthcare peer example with specific ROI data is compelling for CFOs'
          },
          {
            id: 'obj1-d',
            text: 'Discuss IBM Flex financing: $75K/month for 60 months spreads cost and aligns payments with Oracle savings realization',
            isCorrect: true,
            points: 2,
            feedback: 'Helpful - financing can address cash flow concerns and make project more feasible'
          },
          {
            id: 'obj1-e',
            text: 'Power is premium hardware and costs more upfront, but you get what you pay for in terms of reliability',
            isCorrect: false,
            points: 0,
            feedback: 'Weak - doesn\'t address CFO\'s cost concern or quantify value. Focus on TCO and savings instead'
          },
          {
            id: 'obj1-f',
            text: 'Dell is cheaper initially but you\'ll need more servers and higher Oracle costs, so it\'s actually more expensive',
            isCorrect: false,
            points: 0,
            feedback: 'Too vague - need specific numbers. Quantify the difference: 15+ Dell servers vs 2 Power, $340K-$510K Oracle savings'
          }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed TCO vs acquisition cost',
          'Quantified Oracle savings ($340K-$510K annually)',
          'Mentioned consolidation benefits (15 to 2 servers)',
          'Offered TCO analysis',
          'Provided customer example (Mayo Clinic)',
          'Discussed financing options'
        ],
        hints: [
          'Focus on total cost of ownership, not just acquisition cost',
          'Lead with Oracle savings - 40-60% reduction',
          'Mention Mayo Clinic saved $2.1M annually',
          'Offer to run TCO analysis'
        ]
      },
      {
        objection: 'Our team doesn\'t know AIX. This will be too complex to manage.',
        stakeholder: 'IT Director',
        difficulty: 'common',
        category: 'skills',
        bestResponseId: 'power-e1080-objection-skills',
        responseChoices: [
          {
            id: 'obj2-a',
            text: 'Power runs Red Hat Enterprise Linux or SUSE Linux - no AIX required. Your team can use their existing Linux skills',
            isCorrect: true,
            points: 4,
            feedback: 'Perfect - addresses concern directly by eliminating the need for AIX skills'
          },
          {
            id: 'obj2-b',
            text: 'Include IBM training and professional services in proposal: 5-day Power administration course, 3 months on-site support during migration',
            isCorrect: true,
            points: 3,
            feedback: 'Good - concrete training plan reduces risk and builds confidence'
          },
          {
            id: 'obj2-c',
            text: 'Consolidation from 15 to 2 servers means fewer admins needed - can invest savings in training existing team',
            isCorrect: true,
            points: 3,
            feedback: 'Strong business case - operational savings fund skills development'
          },
          {
            id: 'obj2-d',
            text: 'AIX is similar to other Unix systems - if team knows Solaris or HP-UX, transition is straightforward. Many commands are identical',
            isCorrect: true,
            points: 2,
            feedback: 'Helpful if team has Unix background, but Linux option is stronger selling point'
          },
          {
            id: 'obj2-e',
            text: 'AIX is easy to learn, just takes a few weeks of training',
            isCorrect: false,
            points: 0,
            feedback: 'Too dismissive of legitimate concern. Better to offer Linux option or comprehensive training plan'
          },
          {
            id: 'obj2-f',
            text: 'You can hire AIX administrators - there are plenty available',
            isCorrect: false,
            points: 0,
            feedback: 'Weak - adds cost and doesn\'t address concern. Better to leverage existing skills with Linux on Power'
          }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Mentioned Linux on Power option',
          'Offered training and professional services',
          'Emphasized similarity to other Unix systems',
          'Mentioned fewer admins needed due to consolidation',
          'Provided customer testimonial on skills transition',
          'Offered to include training in proposal'
        ],
        hints: [
          'Power runs Linux too - RHEL or SUSE',
          'AIX skills are similar to other Unix',
          'Offer training and professional services',
          'Fewer servers = fewer admins needed'
        ]
      },
      {
        objection: 'We\'re concerned about disruption during migration. We can\'t afford Epic downtime.',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'I completely understand - Epic uptime is critical for patient care. The good news is that migrations can be done with zero downtime using proven methodologies. We\'d use a phased approach: 1) Set up new Power systems in parallel, 2) Replicate data, 3) Test thoroughly, 4) Cut over during a maintenance window with instant rollback capability. IBM Consulting has done hundreds of Epic migrations with zero unplanned downtime. We can also do a proof of concept first to validate performance. Would you like to see a detailed migration plan?',
        responseChoices: [
          {
            id: 'obj3-a',
            text: 'Acknowledge concern: Epic uptime is critical for patient care. Use phased migration: install Power in parallel, replicate data, test thoroughly, cut over during maintenance window with instant rollback',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent - shows empathy and provides detailed zero-downtime approach with safety net'
          },
          {
            id: 'obj3-b',
            text: 'IBM Consulting has completed 200+ Epic migrations with zero unplanned downtime. Proven methodology with healthcare-specific expertise',
            isCorrect: true,
            points: 3,
            feedback: 'Strong - quantified experience builds confidence in risk mitigation'
          },
          {
            id: 'obj3-c',
            text: 'Offer proof of concept: migrate non-production Epic environment first to validate performance and process before touching production',
            isCorrect: true,
            points: 3,
            feedback: 'Smart risk reduction - validates approach before production migration'
          },
          {
            id: 'obj3-d',
            text: 'Provide detailed migration plan with timeline, rollback procedures, and success criteria. Include 24x7 support during cutover',
            isCorrect: true,
            points: 2,
            feedback: 'Good - detailed planning and support reduce risk and build confidence'
          },
          {
            id: 'obj3-e',
            text: 'Migrations are routine and rarely have issues. We\'ve done this many times',
            isCorrect: false,
            points: 0,
            feedback: 'Too casual - doesn\'t acknowledge legitimate concern or provide specific risk mitigation'
          },
          {
            id: 'obj3-f',
            text: 'We can do the migration over a weekend when usage is low',
            isCorrect: false,
            points: 0,
            feedback: 'Incomplete - doesn\'t address zero-downtime requirement or provide detailed methodology'
          }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Acknowledged the concern',
          'Explained zero-downtime migration approach',
          'Mentioned phased methodology',
          'Referenced IBM Consulting experience',
          'Offered proof of concept',
          'Provided rollback plan'
        ],
        hints: [
          'Acknowledge the concern - it\'s valid',
          'Explain phased migration approach',
          'Mention IBM Consulting expertise',
          'Offer proof of concept to reduce risk'
        ]
      },
      {
        objection: 'We\'re standardized on Dell. Why should we make an exception for Power?',
        stakeholder: 'IT Director',
        difficulty: 'common',
        category: 'strategy',
        customResponse: 'Standardization is important for operational efficiency, and I respect that. However, for mission-critical workloads like Epic, the economics and reliability of Power often justify a strategic exception. Many customers run a hybrid strategy: Dell for general workloads, Power for Epic. This gives you the best of both worlds. Consider this: Power will reduce your Oracle costs by $340K-$510K annually, improve Epic performance 2-3x, and provide 99.999% uptime. The ROI is compelling. Plus, with only 2 Power servers vs 15 Dell servers, management is actually simpler. Would it make sense to do a proof of concept to quantify the benefits for your specific Epic workload?',
        responseChoices: [
          {
            id: 'obj4-a',
            text: 'Acknowledge standardization value, then propose hybrid strategy: Dell for general workloads, Power for Epic. Best of both worlds - operational efficiency + mission-critical performance',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent - respects their strategy while showing how Power fits as strategic exception'
          },
          {
            id: 'obj4-b',
            text: 'Quantify ROI: $340K-$510K annual Oracle savings, 2-3x Epic performance improvement, 99.999% uptime. Economics justify exception for mission-critical workload',
            isCorrect: true,
            points: 3,
            feedback: 'Strong - specific financial benefits make compelling case for strategic exception'
          },
          {
            id: 'obj4-c',
            text: 'Management is actually simpler: 2 Power servers vs 15 Dell servers. Fewer systems to patch, monitor, and maintain despite being different platform',
            isCorrect: true,
            points: 3,
            feedback: 'Good counter to standardization concern - fewer servers = less complexity'
          },
          {
            id: 'obj4-d',
            text: 'Offer proof of concept to quantify benefits for their specific Epic workload. Validate performance, Oracle savings, and management simplicity',
            isCorrect: true,
            points: 2,
            feedback: 'Smart - lets data drive decision rather than debating standardization philosophy'
          },
          {
            id: 'obj4-e',
            text: 'Standardization is overrated - best tool for the job is more important',
            isCorrect: false,
            points: 0,
            feedback: 'Too confrontational - dismisses their valid operational concern. Better to acknowledge value then show exception is justified'
          },
          {
            id: 'obj4-f',
            text: 'Power is better than Dell for all workloads, you should standardize on Power instead',
            isCorrect: false,
            points: 0,
            feedback: 'Unrealistic and dismissive - hybrid approach is more credible and addresses their concern'
          }
        ],
        correctResponseIds: ['obj4-a', 'obj4-b', 'obj4-c', 'obj4-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Acknowledged standardization value',
          'Explained hybrid strategy',
          'Quantified Oracle savings',
          'Emphasized Epic performance improvement',
          'Mentioned simplified management (2 vs 15 servers)',
          'Offered proof of concept'
        ],
        hints: [
          'Acknowledge standardization is important',
          'Suggest hybrid approach - Dell for general, Power for Epic',
          'Quantify the benefits - Oracle savings, performance',
          'Emphasize that 2 servers is simpler than 15'
        ]
      },
      {
        objection: 'What if we just upgrade our Dell servers and add more storage? That seems simpler.',
        stakeholder: 'IT Director',
        difficulty: 'difficult',
        category: 'competition',
        customResponse: 'That\'s a fair question. Let\'s compare the options. Upgrading Dell would require: 1) More servers due to lower per-core performance (likely 20+ servers for Epic growth), 2) Same or higher Oracle licensing costs (240+ cores), 3) More storage due to no data reduction, 4) Still no DR solution, 5) More complexity to manage. With Power, you get: 1) Only 2 servers (vs 20+), 2) 40-60% lower Oracle costs (saves $340K-$510K annually), 3) 60% less storage needed (5:1 data reduction with FlashSystem), 4) DR in cloud for $150K/year (vs $2M+ for second data center), 5) Simpler management. Over 5 years, Power TCO is 30-40% lower than Dell, plus you get better performance and reliability. Would you like me to run a detailed TCO comparison?',
        responseChoices: [
          {
            id: 'obj5-a',
            text: 'Compare side-by-side: Dell upgrade = 20+ servers, 240+ Oracle cores, no DR, more complexity. Power = 2 servers, 40-60% lower Oracle costs, cloud DR, simpler management',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent - comprehensive comparison shows Power advantages across all dimensions'
          },
          {
            id: 'obj5-b',
            text: 'Quantify 5-year TCO: Power is 30-40% lower than Dell upgrade. Includes Oracle savings ($340K-$510K/year), fewer servers, less storage, cloud DR vs data center',
            isCorrect: true,
            points: 3,
            feedback: 'Strong - long-term financial analysis shows Power is actually simpler AND cheaper'
          },
          {
            id: 'obj5-c',
            text: 'Address all pain points: Power solves Epic performance (2-3x faster), Oracle costs (40-60% reduction), DR (cloud vs $2M+ data center), and growth (scalable platform)',
            isCorrect: true,
            points: 3,
            feedback: 'Good - shows Power addresses all requirements while Dell upgrade only addresses some'
          },
          {
            id: 'obj5-d',
            text: 'Offer detailed TCO analysis comparing both options over 5 years with your specific Epic workload, growth projections, and Oracle licensing',
            isCorrect: true,
            points: 2,
            feedback: 'Smart - quantified comparison helps make data-driven decision'
          },
          {
            id: 'obj5-e',
            text: 'Dell upgrade won\'t solve your problems, you\'ll still have performance issues',
            isCorrect: false,
            points: 0,
            feedback: 'Too negative without specifics. Better to compare options objectively with numbers'
          },
          {
            id: 'obj5-f',
            text: 'Power is the industry standard for Epic, Dell isn\'t recommended',
            isCorrect: false,
            points: 0,
            feedback: 'Overstated - many Epic customers use x86. Better to focus on specific TCO and performance advantages'
          }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Compared both options fairly',
          'Quantified Dell disadvantages (more servers, higher Oracle costs)',
          'Quantified Power advantages (fewer servers, lower costs)',
          'Mentioned TCO over 5 years',
          'Addressed all pain points (performance, cost, DR)',
          'Offered TCO analysis'
        ],
        hints: [
          'Compare both options side-by-side',
          'Quantify the differences - servers, Oracle costs, storage',
          'Emphasize TCO over 5 years, not just acquisition cost',
          'Address all pain points, not just one'
        ]
      }
    ],
    minimumObjectionsToHandle: 3,
    bonusObjections: [
      {
        objection: 'We\'re moving everything to the cloud eventually. Why invest in on-premises infrastructure?',
        stakeholder: 'CIO',
        difficulty: 'very difficult',
        category: 'strategy',
        customResponse: 'That\'s a great long-term strategy. However, Epic typically performs better and costs less on-premises for production workloads. Many customers use a hybrid approach: Power on-premises for Epic production, Power Virtual Server in IBM Cloud for DR and dev/test. This gives you: 1) Best performance and cost for production, 2) Cloud DR without a second data center (60-80% savings), 3) Cloud dev/test environments, 4) Flexibility to move workloads to cloud later if needed. You\'re not locked in - Power Virtual Server uses the same technology, so workloads are portable. This hybrid approach supports your cloud strategy while optimizing for Epic\'s specific needs. Would you like to see a hybrid architecture?',
        responseChoices: [
          {
            id: 'obj6-a',
            text: 'Embrace cloud strategy with hybrid approach: Power on-prem for Epic production (best performance/cost), Power Virtual Server in cloud for DR and dev/test. Supports cloud journey',
            isCorrect: true,
            points: 4,
            feedback: 'Excellent - aligns with their strategy while addressing Epic-specific needs'
          },
          {
            id: 'obj6-b',
            text: 'Emphasize workload portability: Power Virtual Server uses same technology as on-prem Power. Can move workloads to cloud later if needed - not locked in',
            isCorrect: true,
            points: 3,
            feedback: 'Strong - addresses lock-in concern and provides future flexibility'
          },
          {
            id: 'obj6-c',
            text: 'Quantify hybrid benefits: Cloud DR saves 60-80% vs second data center ($150K/year vs $2M+), cloud dev/test on-demand, production optimized for performance',
            isCorrect: true,
            points: 3,
            feedback: 'Good - shows hybrid delivers cloud benefits while optimizing production'
          },
          {
            id: 'obj6-d',
            text: 'Offer to show hybrid architecture: on-prem Power for production, Power Virtual Server for DR/dev/test, Direct Link connectivity, automated failover',
            isCorrect: true,
            points: 2,
            feedback: 'Helpful - concrete architecture makes hybrid approach tangible'
          },
          {
            id: 'obj6-e',
            text: 'Cloud isn\'t ready for Epic production workloads yet, you should wait',
            isCorrect: false,
            points: 0,
            feedback: 'Dismissive of their strategy - better to show how hybrid supports cloud journey'
          },
          {
            id: 'obj6-f',
            text: 'On-premises is always better than cloud for performance and cost',
            isCorrect: false,
            points: 0,
            feedback: 'Too absolute and fights their strategy - hybrid approach is more credible'
          }
        ],
        correctResponseIds: ['obj6-a', 'obj6-b', 'obj6-c', 'obj6-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Acknowledged cloud strategy',
          'Explained hybrid approach',
          'Quantified benefits of hybrid',
          'Emphasized workload portability',
          'Addressed Epic-specific needs',
          'Offered to show hybrid architecture'
        ],
        hints: [
          'Don\'t fight the cloud strategy - embrace it',
          'Suggest hybrid: on-prem for production, cloud for DR/dev/test',
          'Emphasize workload portability',
          'Show how this supports their cloud strategy'
        ]
      }
    ]
  },
  
  recommendationPhase: {
    primaryProduct: 'power-e1080',
    supportingProducts: ['flashsystem-9500', 'power-virtual-server'],
    configuration: {
      products: [
        {
          productId: 'power-e1080',
          productName: 'IBM Power E1080',
          reason: 'Delivers 2-3x better Epic performance while reducing Oracle licensing costs 40-60%. Proven for Epic EHR with 99.999% uptime.',
          configuration: '2x Power E1080, 32-core, 2TB RAM each, Red Hat Enterprise Linux',
          priority: 'primary'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for Epic with <100μs latency, 5:1 data reduction, and ransomware protection via SafeguardedCopy.',
          configuration: 'FlashSystem 9500, 500TB effective capacity (100TB raw with 5:1 reduction), SafeguardedCopy enabled',
          priority: 'primary'
        },
        {
          productId: 'power-virtual-server',
          productName: 'IBM Power Virtual Server',
          reason: 'Cloud-based disaster recovery with automated failover, eliminating need for second data center. 60-80% cost savings vs building DR site.',
          configuration: 'Power Virtual Server matching production capacity, automated replication, Direct Link connectivity',
          priority: 'supporting'
        }
      ],
      architecture: 'Active-active Power E1080 cluster for Epic production, FlashSystem 9500 for storage, Power Virtual Server for DR with automated failover',
      sizing: 'Sized for current 500 concurrent users plus 20% growth (600 users). 32 cores per Power system provides headroom for Epic upgrade and new clinic.',
      deployment: 'Phased migration: 1) Install new infrastructure, 2) Replicate data, 3) Test thoroughly, 4) Cut over during maintenance window, 5) Decommission old servers'
    },
    pricing: {
      hardware: '$2.8M (2x Power E1080 + FlashSystem 9500)',
      software: '$400K (Red Hat Enterprise Linux, PowerVM, management tools)',
      services: '$350K (IBM Consulting migration services, training, 3 months support)',
      support: '$180K/year (24x7 support with 4-hour response)',
      total: '$3.55M initial + $180K/year support + $150K/year cloud DR',
      financing: 'IBM Flex financing available - $75K/month for 60 months',
      paymentTerms: 'Net 30, or financing options available'
    },
    businessCase: {
      costSavings: '$425K annually (Oracle savings $340K-$510K, power/cooling $50K, management $35K)',
      productivityGains: '$2M annually (30 minutes per day per physician x 200 physicians x $200/hour)',
      riskReduction: 'Eliminate risk of extended Epic outage (estimated $5M+ impact), ransomware protection (average attack costs $1.85M)',
      roi: '18 months',
      paybackPeriod: '18 months',
      tco: '30-40% lower than Dell over 5 years ($2.5M-$3.5M savings)'
    },
    competitivePositioning: 'Power is the ONLY platform that reduces Oracle costs while improving Epic performance. Dell would require 20+ servers and 240+ Oracle cores. Power consolidates to 2 servers and 64 cores, directly cutting Oracle licensing 40-60%.',
    nextSteps: [
      'Schedule technical deep-dive with Epic team',
      'Provide detailed TCO analysis',
      'Arrange reference call with similar healthcare customer (Mayo Clinic)',
      'Propose 30-day proof of concept to validate performance',
      'Develop detailed migration plan',
      'Present to steering committee'
    ],
    requiredElements: [
      'Must include Power E1080 for Epic',
      'Must include high-performance storage (FlashSystem)',
      'Must include disaster recovery solution',
      'Must address Oracle cost reduction',
      'Must address ransomware protection',
      'Must include migration services',
      'Must quantify ROI and TCO'
    ]
  },
  
  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Asked about Epic performance specifics (modules, times, impact)',
        'Identified Oracle licensing pain and quantified costs',
        'Uncovered disaster recovery gap',
        'Identified ransomware concerns',
        'Understood stakeholder priorities',
        'Quantified business impact',
        'Identified timeline and budget',
        'Asked about growth and future needs'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed cost objection with TCO, not acquisition cost',
        'Handled skills concern with training and Linux option',
        'Addressed migration risk with proven methodology',
        'Positioned Power as strategic exception to Dell standard',
        'Compared Power vs Dell upgrade fairly and quantitatively',
        'Used customer examples and data to support responses'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as primary solution',
        'Included FlashSystem for storage',
        'Included Power Virtual Server for DR',
        'Sized configuration appropriately',
        'Addressed all pain points (performance, cost, DR, ransomware)',
        'Provided complete solution, not just hardware'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified Oracle savings ($340K-$510K annually)',
        'Quantified productivity gains ($2M annually)',
        'Calculated ROI (18 months)',
        'Articulated TCO advantage (30-40% lower over 5 years)',
        'Aligned solution to strategic initiatives'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 90
  },
  
  learningOutcomes: [
    {
      concept: 'Epic EHR Performance Optimization',
      description: 'How to identify Epic performance bottlenecks and position Power as the solution',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Oracle Cost Reduction Strategy',
      description: 'How to quantify Oracle licensing costs and demonstrate 40-60% savings with Power',
      skillLevel: 'intermediate'
    },
    {
      concept: 'TCO vs Acquisition Cost Positioning',
      description: 'How to handle price objections by focusing on total cost of ownership',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Hybrid Cloud Architecture for Healthcare',
      description: 'How to position on-premises Power with cloud DR for optimal cost and performance',
      skillLevel: 'advanced'
    },
    {
      concept: 'Complete Solution Selling',
      description: 'How to build a complete solution (compute + storage + DR + services) vs selling individual products',
      skillLevel: 'intermediate'
    }
  ],
  
  metadata: {
    tags: ['healthcare', 'epic', 'performance', 'oracle-cost-reduction', 'disaster-recovery', 'power-e1080', 'flashsystem', 'power-virtual-server'],
    skills: ['discovery', 'objection-handling', 'solution-architecture', 'business-value', 'tco-analysis'],
    products: ['power-e1080', 'flashsystem-9500', 'power-virtual-server'],
    industries: ['Healthcare'],
    estimatedTime: 30,
    prerequisites: ['Basic understanding of Epic EHR', 'Familiarity with Power E1080 product'],
    relatedScenarios: ['healthcare-ransomware-002', 'healthcare-epic-consolidation-003'],
    difficulty: 'intermediate',
    version: '1.0',
    lastUpdated: '2024-01-15',
    author: 'IBM Sales Enablement'
  },
  
  coachingTips: [
    'Start with open-ended questions about Epic performance to understand the full scope',
    'Always quantify the Oracle licensing costs - this is often the biggest pain point',
    'Don\'t forget to ask about disaster recovery - it\'s critical for healthcare',
    'Use customer examples (Mayo Clinic) to build credibility',
    'Focus on TCO over 5 years, not just acquisition cost',
    'Address skills concerns proactively - offer training and Linux option',
    'Build a complete solution - don\'t just sell hardware'
  ],
  
  commonMistakes: [
    'Focusing only on performance and ignoring Oracle cost reduction',
    'Not quantifying the business impact of slow Epic',
    'Forgetting to include disaster recovery in the solution',
    'Comparing acquisition cost instead of TCO',
    'Not addressing skills concerns proactively',
    'Recommending only hardware without storage and DR',
    'Not offering proof of concept to reduce risk'
  ],
  
  bestPractices: [
    'Ask 6-8 discovery questions to fully understand the situation',
    'Quantify everything - Oracle costs, productivity loss, ROI',
    'Use the "feel, felt, found" technique for objections',
    'Provide customer examples and case studies',
    'Offer proof of concept for high-value deals',
    'Include IBM Consulting services to de-risk migration',
    'Build a complete solution that addresses all pain points'
  ],
  
  expertInsights: [
    'Epic customers are often unaware of how much Oracle licensing is costing them - help them calculate it',
    'The #1 reason hospitals buy Power is Oracle cost reduction, not just performance',
    'Disaster recovery is often an afterthought but it\'s critical - make it part of the solution',
    'Skills concerns are common but rarely a deal-breaker if you offer training',
    'Mayo Clinic is a powerful reference - use it',
    'Hybrid cloud (on-prem + cloud DR) is the sweet spot for healthcare'
  ]
};

export const healthcareScenarios: TrainingScenario[] = [
  healthcareScenario001,
  // Additional healthcare scenarios will be added here
];

// Made with Bob
