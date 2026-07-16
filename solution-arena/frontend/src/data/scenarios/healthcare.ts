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


// Made with Bob


/**
 * Healthcare Scenario 002: Patient Data Platform with AI Analytics
 * Hospital system needs unified patient data platform with AI-powered clinical insights
 */
export const healthcareScenario002: TrainingScenario = {
  id: 'healthcare-patient-data-002',
  title: 'Hospital System Needs Unified Patient Data Platform with AI-Powered Clinical Insights',
  description: 'A regional hospital system with 8 hospitals and 50 clinics faces $40M annually in costs from fragmented patient data: duplicate tests, medication errors, delayed diagnoses, and poor care coordination. They need a unified patient data platform with AI-powered clinical decision support, predictive analytics, and interoperability to improve outcomes, reduce costs, and meet regulatory requirements.',
  
  customerProfile: {
    company: 'Regional Health System',
    industry: 'Healthcare',
    size: 'Enterprise (5000+ employees)',
    revenue: '$2.8B annually',
    employees: 15000,
    location: 'Regional (8 hospitals, 50 clinics across 3 states)',
    currentInfrastructure: {
      servers: 'Mix of on-premises servers and legacy systems',
      storage: 'Distributed storage, no unified patient record',
      applications: ['Multiple EHR systems', 'Legacy imaging systems', 'Separate lab systems', 'Disconnected clinics'],
      operatingSystem: 'Windows Server, some Unix',
      virtualization: 'Limited VMware',
      age: '10-15 years',
      endOfLife: 'Legacy systems approaching end-of-support',
      issues: [
        'Fragmented patient data across 8 hospitals and 50 clinics',
        'Duplicate tests cost $15M annually',
        'Medication errors cost $12M annually',
        'Delayed diagnoses cost $13M annually',
        'No AI-powered clinical decision support',
        'Cannot share patient data across facilities',
        'Poor care coordination',
        'HIPAA compliance challenges'
      ]
    },
    keyStakeholders: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Chief Digital Officer',
        priorities: ['Patient safety', 'Clinical outcomes', 'Care coordination', 'AI decision support'],
        concerns: ['Clinical workflow disruption', 'Physician adoption', 'Patient safety', 'Implementation timeline'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Chen',
        role: 'CIO',
        priorities: ['Data integration', 'Interoperability', 'Security', 'Scalability'],
        concerns: ['EHR integration', 'Data migration', 'HIPAA compliance', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Patricia Williams',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Operational efficiency', 'Value-based care'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Reimbursement impact'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$20M-$30M capital budget for patient data platform',
    timeline: '24-month implementation across 8 hospitals and 50 clinics',
    decisionProcess: 'Board approved patient data initiative. CMO is executive sponsor. CFO requires $20M cost reduction.'
  },
  
  businessContext: {
    challenges: [
      'Fragmented patient data across facilities',
      'Duplicate tests cost $15M annually',
      'Medication errors cost $12M annually',
      'Delayed diagnoses cost $13M annually',
      'No AI clinical decision support',
      'Cannot share patient data',
      'Poor care coordination',
      'HIPAA compliance challenges'
    ],
    businessImpact: [
      '$40M annual costs from fragmentation',
      '$15M duplicate tests',
      '$12M medication errors',
      '$13M delayed diagnoses',
      'Patient safety risks'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement unified patient data platform',
      'Deploy AI-powered clinical decision support',
      'Enable interoperability across facilities',
      'Reduce duplicate tests by 70%',
      'Reduce medication errors by 80%',
      'Improve care coordination'
    ],
    competitivePressure: 'Competing health systems have unified patient data and AI. Value-based care requires better outcomes and lower costs.',
    regulatoryRequirements: ['HIPAA', 'HITECH', 'Meaningful Use', 'Interoperability mandates', 'Quality reporting'],
    recentEvents: [
      'Medication error caused patient death',
      'CMS quality penalties $5M',
      'Interoperability audit identified gaps',
      'Board mandated patient data platform'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of fragmented patient data? How much do duplicate tests and errors cost?',
        purpose: 'Quantify data fragmentation costs',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Fragmented data costs $40M annually: $15M duplicate tests, $12M medication errors, $13M delayed diagnoses', isCorrect: true, points: 4, feedback: 'Excellent - quantified total cost of fragmentation.' },
          { id: 'q1-b', text: 'Patient data scattered across 8 hospitals, 50 clinics, multiple EHR systems - no unified view', isCorrect: true, points: 3, feedback: 'Good - identified data fragmentation.' },
          { id: 'q1-c', text: 'Medication error caused patient death - board mandated unified patient data platform', isCorrect: true, points: 3, feedback: 'Good - identified patient safety impact.' },
          { id: 'q1-d', text: 'CMS quality penalties $5M due to poor care coordination and outcomes', isCorrect: true, points: 3, feedback: 'Good - identified regulatory impact.' },
          { id: 'q1-e', text: 'No data fragmentation', isCorrect: false, points: 0, feedback: 'Wrong - $40M annual cost is significant.' },
          { id: 'q1-f', text: 'Data fragmentation not a problem', isCorrect: false, points: 0, feedback: 'Wrong - causing patient safety issues.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify costs', 'Patient safety impact', 'Regulatory penalties']
      },
      {
        question: 'What AI-powered clinical capabilities do you need? How do you currently support clinical decisions?',
        purpose: 'Identify AI requirements',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'No AI clinical decision support - physicians rely on memory and experience, miss critical insights', isCorrect: true, points: 4, feedback: 'Excellent - identified AI capability gap.' },
          { id: 'q2-b', text: 'Need AI for: drug interaction alerts, sepsis prediction, readmission risk, treatment recommendations', isCorrect: true, points: 3, feedback: 'Good - understood AI use cases.' },
          { id: 'q2-c', text: 'Delayed diagnoses cost $13M annually - AI could identify patterns physicians miss', isCorrect: true, points: 3, feedback: 'Good - quantified AI value.' },
          { id: 'q2-d', text: 'Competing health systems using AI have better outcomes and lower costs', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q2-e', text: 'Already have advanced AI', isCorrect: false, points: 0, feedback: 'Wrong - no AI clinical decision support.' },
          { id: 'q2-f', text: 'AI not needed in healthcare', isCorrect: false, points: 0, feedback: 'Wrong - AI improves outcomes and reduces costs.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['No AI decision support', 'Drug interactions, sepsis, readmissions', 'Competitive pressure']
      },
      {
        question: 'How many facilities and EHR systems do you have? What is your interoperability challenge?',
        purpose: 'Understand integration complexity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: '8 hospitals, 50 clinics using multiple EHR systems (Epic, Cerner, Meditech) - no interoperability', isCorrect: true, points: 4, feedback: 'Excellent - identified scale and complexity.' },
          { id: 'q3-b', text: 'Cannot share patient data across facilities - physicians cannot see complete patient history', isCorrect: true, points: 3, feedback: 'Good - identified interoperability gap.' },
          { id: 'q3-c', text: 'Interoperability audit identified gaps - must comply with federal mandates', isCorrect: true, points: 3, feedback: 'Good - identified regulatory requirement.' },
          { id: 'q3-d', text: 'Need unified patient data platform with FHIR APIs for interoperability', isCorrect: true, points: 3, feedback: 'Good - understood solution requirement.' },
          { id: 'q3-e', text: 'Only one facility', isCorrect: false, points: 0, feedback: 'Wrong - 8 hospitals and 50 clinics.' },
          { id: 'q3-f', text: 'Full interoperability already', isCorrect: false, points: 0, feedback: 'Wrong - multiple EHR systems not integrated.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Multiple EHR systems', 'No interoperability', 'FHIR APIs']
      },
      {
        question: 'What is your current medication error rate and what causes errors?',
        purpose: 'Quantify medication safety gap',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Medication errors cost $12M annually - drug interactions, allergies, dosing errors', isCorrect: true, points: 4, feedback: 'Excellent - quantified medication error cost.' },
          { id: 'q4-b', text: 'Medication error caused patient death - board mandated AI-powered drug interaction alerts', isCorrect: true, points: 3, feedback: 'Good - identified patient safety impact.' },
          { id: 'q4-c', text: 'Fragmented data means physicians do not see complete medication history across facilities', isCorrect: true, points: 3, feedback: 'Good - identified root cause.' },
          { id: 'q4-d', text: 'Need AI to check drug interactions, allergies, dosing in real-time at point of care', isCorrect: true, points: 3, feedback: 'Good - understood AI solution.' },
          { id: 'q4-e', text: 'No medication errors', isCorrect: false, points: 0, feedback: 'Wrong - $12M annual cost and patient death.' },
          { id: 'q4-f', text: 'Medication errors not preventable', isCorrect: false, points: 0, feedback: 'Wrong - AI can prevent 80%+ of errors.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['$12M annual cost', 'Patient death', 'AI drug interaction alerts']
      },
      {
        question: 'What is your duplicate test rate and why do physicians order duplicate tests?',
        purpose: 'Quantify duplicate test waste',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Duplicate tests cost $15M annually - physicians cannot see tests done at other facilities', isCorrect: true, points: 4, feedback: 'Excellent - quantified duplicate test cost.' },
          { id: 'q5-b', text: 'Fragmented data means test results not visible across facilities - physicians re-order', isCorrect: true, points: 3, feedback: 'Good - identified root cause.' },
          { id: 'q5-c', text: 'Patients frustrated by duplicate tests - impacts satisfaction scores', isCorrect: true, points: 3, feedback: 'Good - identified patient experience impact.' },
          { id: 'q5-d', text: 'Unified patient data platform would show all test results - reduce duplicates 70%', isCorrect: true, points: 3, feedback: 'Good - quantified opportunity.' },
          { id: 'q5-e', text: 'No duplicate tests', isCorrect: false, points: 0, feedback: 'Wrong - $15M annual cost.' },
          { id: 'q5-f', text: 'Duplicate tests not a problem', isCorrect: false, points: 0, feedback: 'Wrong - significant waste and patient frustration.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['$15M annual cost', 'Cannot see tests at other facilities', '70% reduction opportunity']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'CMO is executive sponsor, focused on patient safety and clinical outcomes', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about EHR integration and HIPAA compliance', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated $20M cost reduction', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Chief Quality Officer concerned about CMS penalties and quality metrics', isCorrect: true, points: 3, feedback: 'Good - identified quality stakeholder.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - CMO is executive sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['CMO sponsor', 'CFO budget authority', 'CIO technical concerns']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any regulatory or patient safety deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '24-month implementation across 8 hospitals and 50 clinics, board-mandated after patient death', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Interoperability mandate requires compliance by end of year - federal requirement', isCorrect: true, points: 3, feedback: 'Good - identified regulatory deadline.' },
          { id: 'q7-c', text: 'CMS quality penalties increasing - must improve outcomes to avoid further penalties', isCorrect: true, points: 3, feedback: 'Good - identified financial urgency.' },
          { id: 'q7-d', text: 'Vendor selection in 3 months, phased rollout starting with pilot hospital', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 24-month timeline with regulatory deadline.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - patient death and regulatory mandate.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate after patient death', 'Interoperability deadline', 'CMS penalties']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$20M-$30M capital budget approved by board for patient data platform', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires $20M cost reduction and 30-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce duplicate tests $10.5M, medication errors $9.6M, improve outcomes', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: data platform, AI, EHR integration, training, HIPAA compliance', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $20M-$30M.' },
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
      '$40M annual fragmentation cost',
      '$15M duplicate tests',
      '$12M medication errors',
      'Multiple EHR systems',
      'No AI decision support',
      'Patient death from medication error',
      'Interoperability mandate',
      'Budget $20M-$30M approved'
    ],
    redFlags: [
      'Budget under $15M insufficient',
      'Timeline under 18 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all facilities simultaneously'
    ],
    opportunities: [
      'Reduce duplicate tests $10.5M',
      'Reduce medication errors $9.6M',
      'Improve care coordination',
      'AI clinical decision support',
      'Avoid CMS penalties'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we avoid disrupting clinical workflows? Physicians are already overwhelmed and resistant to change.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'very difficult',
        category: 'skills',
        customResponse: 'Clinical workflow is sacred. IBM provides physician-centric design: (1) AI integrates into existing EHR workflow - no separate system, (2) Ambient AI captures documentation automatically - reduces physician burden, (3) Pilot with physician champions - build grassroots support, (4) Phased rollout with extensive training, (5) AI improves workflow - reduces clicks, saves time. IBM has deployed clinical AI at 100+ health systems with 90% physician satisfaction.',
        responseChoices: [
          { id: 'obj1-a', text: 'AI integrates into existing EHR workflow - no separate system, appears as smart alerts and recommendations', isCorrect: true, points: 4, feedback: 'Excellent - addressed workflow integration.' },
          { id: 'obj1-b', text: 'Ambient AI captures documentation automatically - reduces physician documentation burden by 50%', isCorrect: true, points: 3, feedback: 'Good - showed physician benefit.' },
          { id: 'obj1-c', text: 'Pilot with physician champions - build grassroots support before broad rollout', isCorrect: true, points: 3, feedback: 'Good - explained change management strategy.' },
          { id: 'obj1-d', text: 'Track record: 100+ health systems, 90% physician satisfaction, physicians become AI advocates', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'Physicians must use separate system', isCorrect: false, points: 0, feedback: 'Wrong - AI integrates into existing workflow.' },
          { id: 'obj1-f', text: 'Physician adoption not important', isCorrect: false, points: 0, feedback: 'Wrong - physician adoption is critical.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed workflow integration',
          'Explained EHR integration',
          'Described physician benefits',
          'Highlighted change management'
        ],
        hints: ['EHR integration', 'Ambient AI documentation', 'Physician champions']
      },
      {
        objection: 'How do we ensure HIPAA compliance when aggregating patient data across facilities? We cannot risk a breach.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'HIPAA compliance is non-negotiable. IBM provides defense-in-depth security: (1) End-to-end encryption at rest and in transit, (2) Role-based access control - physicians only see their patients, (3) Audit logging of all data access, (4) De-identification for analytics, (5) HITRUST certification, (6) Regular security audits. IBM has secured patient data for 500+ health systems with zero breaches.',
        responseChoices: [
          { id: 'obj2-a', text: 'End-to-end encryption at rest and in transit, HITRUST certified, regular security audits', isCorrect: true, points: 4, feedback: 'Excellent - addressed HIPAA compliance comprehensively.' },
          { id: 'obj2-b', text: 'Role-based access control - physicians only see their patients, audit logging of all access', isCorrect: true, points: 3, feedback: 'Good - explained access controls.' },
          { id: 'obj2-c', text: 'De-identification for analytics - AI learns from patterns without exposing PHI', isCorrect: true, points: 3, feedback: 'Good - addressed privacy-preserving AI.' },
          { id: 'obj2-d', text: 'Track record: 500+ health systems, zero breaches, HIPAA compliant for 20+ years', isCorrect: true, points: 3, feedback: 'Good - provided security track record.' },
          { id: 'obj2-e', text: 'No encryption needed', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA requires encryption.' },
          { id: 'obj2-f', text: 'HIPAA compliance not important', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA compliance is mandatory.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed HIPAA compliance',
          'Explained encryption and access controls',
          'Described audit logging',
          'Highlighted HITRUST certification'
        ],
        hints: ['End-to-end encryption', 'HITRUST certification', 'Zero breaches']
      },
      {
        objection: 'How do we integrate with multiple EHR systems (Epic, Cerner, Meditech)? We cannot replace them.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'EHR integration is a core strength. IBM provides standards-based interoperability: (1) FHIR APIs for all major EHRs - Epic, Cerner, Meditech, Allscripts, (2) HL7 integration for legacy systems, (3) Real-time bidirectional sync, (4) Unified patient data model, (5) No EHR replacement required. IBM has integrated with EHRs at 300+ health systems. Typical integration 3-4 months per EHR.',
        responseChoices: [
          { id: 'obj3-a', text: 'FHIR APIs for all major EHRs - Epic, Cerner, Meditech, Allscripts - standards-based, proven at 300+ sites', isCorrect: true, points: 4, feedback: 'Excellent - addressed EHR integration with standards.' },
          { id: 'obj3-b', text: 'Real-time bidirectional sync - data flows both ways, unified patient data model', isCorrect: true, points: 3, feedback: 'Good - explained integration architecture.' },
          { id: 'obj3-c', text: 'No EHR replacement required - IBM platform sits on top, aggregates data', isCorrect: true, points: 3, feedback: 'Good - addressed EHR preservation.' },
          { id: 'obj3-d', text: 'Phased integration: read-only first, then write-back - 3-4 months per EHR', isCorrect: true, points: 3, feedback: 'Good - provided realistic timeline.' },
          { id: 'obj3-e', text: 'Must replace all EHRs', isCorrect: false, points: 0, feedback: 'Wrong - FHIR integration preserves EHRs.' },
          { id: 'obj3-f', text: 'Integration not possible', isCorrect: false, points: 0, feedback: 'Wrong - IBM has 300+ EHR integrations.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed EHR integration',
          'Explained FHIR standards',
          'Described bidirectional sync',
          'Provided realistic timeline'
        ],
        hints: ['FHIR APIs', 'Standards-based', 'No EHR replacement']
      },
      {
        objection: 'Your solution costs $25M. Can we start with a pilot hospital to prove ROI before rolling out to all 8 hospitals?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $4M for single hospital (6 months), (2) Pilot typically shows 60% duplicate test reduction and 70% medication error reduction, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining hospitals ($21M) with proven ROI. Business case shows 28-month payback and $60M three-year benefit vs. $25M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $4M pilot at single hospital (6 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 60% duplicate test reduction and 70% medication error reduction', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 28-month payback, $60M three-year benefit vs. $25M investment (140% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 8 hospitals immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot hospital approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How accurate is AI for clinical decision support? We cannot risk patient safety with inaccurate AI.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'difficult',
        category: 'performance',
        customResponse: 'Patient safety is paramount. IBM Watson Health AI is clinically validated: (1) Drug interaction detection: 95%+ accuracy, FDA cleared, (2) Sepsis prediction: 85% accuracy, 6-hour early warning, (3) Readmission risk: 80% accuracy, (4) Explainable AI shows reasoning - physicians understand why, (5) Human-in-the-loop - AI recommends, physicians decide. IBM clinical AI has prevented 100,000+ adverse events.',
        responseChoices: [
          { id: 'obj5-a', text: 'Clinically validated AI: drug interactions 95%+ accuracy (FDA cleared), sepsis 85% accuracy (6-hour early warning)', isCorrect: true, points: 4, feedback: 'Excellent - provided clinical validation.' },
          { id: 'obj5-b', text: 'Explainable AI shows reasoning - physicians understand why AI recommends action', isCorrect: true, points: 3, feedback: 'Good - addressed transparency.' },
          { id: 'obj5-c', text: 'Human-in-the-loop - AI recommends, physicians decide, maintains physician autonomy', isCorrect: true, points: 3, feedback: 'Good - addressed physician control.' },
          { id: 'obj5-d', text: 'Track record: 100,000+ adverse events prevented, deployed at 100+ health systems', isCorrect: true, points: 3, feedback: 'Good - provided safety track record.' },
          { id: 'obj5-e', text: 'AI not accurate', isCorrect: false, points: 0, feedback: 'Wrong - 95%+ accuracy, FDA cleared.' },
          { id: 'obj5-f', text: 'Patient safety not important', isCorrect: false, points: 0, feedback: 'Wrong - patient safety is paramount.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed AI accuracy',
          'Provided clinical validation',
          'Explained explainable AI',
          'Highlighted human-in-the-loop'
        ],
        hints: ['95%+ accuracy', 'FDA cleared', 'Explainable AI']
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
          reason: 'High-performance computing for unified patient data platform, AI-powered clinical decision support, and real-time analytics across 8 hospitals and 50 clinics',
          configuration: 'Centralized Power E1080 for patient data platform and AI. Regional servers for hospital connectivity',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Watson Health',
          reason: 'AI-powered clinical decision support: drug interaction alerts, sepsis prediction, readmission risk, treatment recommendations',
          configuration: 'Watson Health AI, clinical decision support, predictive analytics, natural language processing for clinical notes',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for patient records, medical imaging, lab results, and AI models with HIPAA compliance',
          configuration: '500TB usable capacity for 8 hospitals and 50 clinics, patient records, imaging, lab results, AI models, encrypted storage',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for unified patient data platform, AI clinical decision support, and analytics, (2) Regional tier: Regional servers for hospital connectivity and local caching, (3) Storage tier: FlashSystem 9500 for patient records and imaging. IBM Watson Health provides AI clinical insights.',
      sizing: 'Central: 1x Power E1080 (32-core) for patient data and AI. Regional: 4x Power E1080 (8-core each) for regional processing. Storage: 500TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-6): Pilot at single hospital. Phase 2 (Months 7-18): Scale to 4 hospitals. Phase 3 (Months 19-24): Complete rollout to remaining 3 hospitals and 50 clinics.'
    },
    pricing: {
      hardware: '$12M (5x Power E1080 + FlashSystem 9500)',
      software: '$8M (IBM Watson Health, Watson Studio, FHIR integration, 3-year licenses)',
      services: '$5M (IBM Expert Labs: implementation, EHR integration, data migration, training, HIPAA compliance)',
      support: '$600K/year (24x7 support with 2-hour response)',
      total: '$25M initial + $600K/year support',
      financing: 'IBM Flex financing available - $525K/month for 60 months',
      paymentTerms: 'Phased payment: $4M pilot, $10M Phase 2, $11M Phase 3'
    },
    businessCase: {
      costSavings: '$28M annually (duplicate tests $10.5M, medication errors $9.6M, delayed diagnoses $7.9M)',
      productivityGains: '$12M annually (physician productivity, care coordination efficiency)',
      riskReduction: 'Reduce duplicate tests 70%, medication errors 80%, improve patient safety, avoid CMS penalties',
      roi: '28 months',
      paybackPeriod: '28 months',
      tco: '3-year TCO: $25M investment vs. $120M in benefits (cost savings + productivity + avoided penalties) = $95M net benefit, 140% three-year ROI'
    },
    competitivePositioning: 'IBM Watson Health is the leading clinical AI platform with 100+ health system deployments. Unlike generic data platforms, IBM provides healthcare-specific AI: drug interactions, sepsis prediction, readmission risk. Power E1080 delivers 3x better performance than x86 for AI workloads. HITRUST certified.',
    nextSteps: [
      'Schedule patient data platform workshop with IBM Watson Health experts',
      'Conduct pilot hospital selection and EHR assessment',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected hospital'
    ],
    requiredElements: [
      'IBM Watson Health for AI clinical decision support',
      'Power E1080 for patient data platform and AI',
      'FlashSystem for patient records and imaging',
      'Watson Studio for AI model development',
      'FHIR APIs for EHR integration',
      'HIPAA compliant architecture',
      'Physician training and change management',
      'Clinical workflow integration'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified fragmentation cost ($40M annually)',
        'Identified AI capability gaps (no clinical decision support)',
        'Understood integration complexity (multiple EHR systems)',
        'Assessed medication error impact ($12M, patient death)',
        'Quantified duplicate test waste ($15M)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($20M-$30M, 24 months)',
        'Identified CFO mandate ($20M cost reduction)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed physician adoption with workflow integration',
        'Handled HIPAA compliance with encryption and HITRUST',
        'Addressed EHR integration with FHIR standards',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed AI accuracy with clinical validation'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as patient data platform',
        'Included Watson Health for AI clinical decision support',
        'Included FlashSystem for patient records',
        'Addressed all pain points (fragmentation, errors, duplicates)',
        'Proposed phased deployment with pilot',
        'Included FHIR integration and HIPAA compliance'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($28M)',
        'Quantified productivity gains ($12M)',
        'Calculated patient safety improvements',
        'Calculated ROI (28-month payback, 140% three-year ROI)',
        'Positioned as patient safety and quality advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Healthcare data interoperability',
      description: 'Design unified patient data platforms with FHIR APIs for multi-EHR integration',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI-powered clinical decision support',
      description: 'Implement clinically validated AI for drug interactions, sepsis prediction, and readmission risk',
      skillLevel: 'advanced'
    },
    {
      concept: 'HIPAA compliance architecture',
      description: 'Design HIPAA compliant systems with encryption, access controls, and audit logging',
      skillLevel: 'advanced'
    },
    {
      concept: 'Healthcare change management',
      description: 'Build physician adoption through workflow integration and clinical champions',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Value-based care economics',
      description: 'Quantify ROI from reduced errors, duplicate tests, and improved outcomes',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Patient data platform', 'AI clinical decision support', 'Healthcare', 'Interoperability', 'HIPAA', 'EHR integration', 'Patient safety'],
    skills: ['Healthcare interoperability', 'Clinical AI', 'HIPAA compliance', 'EHR integration', 'Change management'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Healthcare'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with patient safety impact (medication error death) - this is the primary driver',
    'Emphasize fragmentation cost ($40M annually) as quantifiable opportunity',
    'Address physician adoption proactively with workflow integration',
    'Recommend pilot approach to de-risk investment and prove ROI',
    'Highlight FHIR standards for EHR integration - common concern',
    'Position Watson Health as clinically validated vs. generic AI',
    'Build compelling ROI: 28-month payback, 140% three-year ROI, $28M savings',
    'CMO is champion - focus on patient safety and clinical outcomes',
    'CIO is supporter but concerned about HIPAA - lead with HITRUST certification',
    'CFO is neutral - build strong business case with $20M cost reduction mandate',
    'Differentiate with proven track record: 100+ health system deployments, 100,000+ adverse events prevented',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address AI accuracy with clinical validation and FDA clearance',
    'Highlight explainable AI and human-in-the-loop for physician trust'
  ]
};

/**
 * Healthcare Scenario 003: Telehealth Platform Expansion
 * Regional health system expanding telehealth to rural areas
 */
export const healthcareScenario003: TrainingScenario = {
  id: 'healthcare-telehealth-003',
  title: 'Regional Health System Needs Telehealth Platform to Expand Access to Rural Areas',
  description: 'A regional health system serving 15 rural counties faces $20M annually in lost revenue as rural patients travel to urban competitors or delay care. They need a comprehensive telehealth platform with video consultations, remote patient monitoring, and mobile health units to expand access, improve outcomes, and capture rural market share.',
  
  customerProfile: {
    company: 'Rural Health Network',
    industry: 'Healthcare',
    size: 'Large (1000-5000 employees)',
    revenue: '$800M annually',
    employees: 4500,
    location: 'Regional (3 hospitals, 25 clinics across 15 rural counties)',
    currentInfrastructure: {
      servers: 'On-premises servers at main hospital',
      storage: 'Limited storage, no cloud infrastructure',
      applications: ['Basic EHR', 'No telehealth platform', 'Manual scheduling', 'Phone-based triage'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '8-10 years',
      endOfLife: 'Infrastructure approaching capacity',
      issues: [
        'Rural patients travel 60+ miles to urban competitors',
        'Lost $20M annually to competitors',
        'No telehealth capabilities',
        'Physician shortage in rural areas',
        'Poor broadband in rural counties',
        'Cannot monitor chronic patients remotely',
        'Emergency room overuse for primary care',
        'CMS telehealth reimbursement opportunity missed'
      ]
    },
    keyStakeholders: [
      {
        name: 'Dr. James Wilson',
        role: 'Chief Digital Officer',
        priorities: ['Rural access', 'Telehealth expansion', 'Patient satisfaction', 'Market share'],
        concerns: ['Broadband limitations', 'Physician adoption', 'Reimbursement', 'Implementation timeline'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Susan Martinez',
        role: 'CIO',
        priorities: ['Platform reliability', 'EHR integration', 'Security', 'Scalability'],
        concerns: ['Network infrastructure', 'HIPAA compliance', 'Rural connectivity', 'Support model'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Robert Chen',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost reduction', 'ROI', 'Reimbursement'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Reimbursement risk'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$8M-$12M capital budget for telehealth platform',
    timeline: '12-month implementation across 15 rural counties',
    decisionProcess: 'Board approved rural expansion strategy. Chief Digital Officer is executive sponsor. CFO requires $10M revenue increase.'
  },
  
  businessContext: {
    challenges: [
      'Rural patients travel 60+ miles to competitors',
      'Lost $20M annually in rural market',
      'No telehealth capabilities',
      'Physician shortage in rural areas',
      'Poor broadband in some counties',
      'Cannot monitor chronic patients',
      'ER overuse for primary care',
      'Missing CMS telehealth reimbursement'
    ],
    businessImpact: [
      '$20M annual lost revenue',
      '$5M from ER overuse',
      '$3M from readmissions',
      'Losing rural market share',
      'Physician recruitment challenges'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement comprehensive telehealth platform',
      'Deploy remote patient monitoring for chronic disease',
      'Launch mobile health units with telehealth',
      'Capture $10M+ in rural market revenue',
      'Reduce ER visits by 30%',
      'Improve chronic disease outcomes'
    ],
    competitivePressure: 'Urban health systems expanding telehealth to rural areas. National telehealth companies entering market.',
    regulatoryRequirements: ['HIPAA', 'State telehealth laws', 'CMS telehealth reimbursement', 'DEA prescribing rules'],
    recentEvents: [
      'Lost 15% of rural patients to urban competitors',
      'CMS expanded telehealth reimbursement',
      'State passed telehealth parity law',
      'Board mandated rural expansion'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of losing rural patients to competitors? How much revenue are you losing?',
        purpose: 'Quantify rural market opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Losing $20M annually as rural patients travel 60+ miles to urban competitors with telehealth', isCorrect: true, points: 4, feedback: 'Excellent - quantified revenue loss and competitive disadvantage.' },
          { id: 'q1-b', text: 'Lost 15% of rural market share in past 2 years to competitors offering telehealth', isCorrect: true, points: 3, feedback: 'Good - identified market share loss.' },
          { id: 'q1-c', text: 'Rural patients delay care due to travel distance - leads to worse outcomes and higher costs', isCorrect: true, points: 3, feedback: 'Good - identified clinical impact.' },
          { id: 'q1-d', text: 'CMS expanded telehealth reimbursement - $10M+ opportunity if we had platform', isCorrect: true, points: 3, feedback: 'Good - identified reimbursement opportunity.' },
          { id: 'q1-e', text: 'No revenue impact', isCorrect: false, points: 0, feedback: 'Wrong - $20M annual loss is significant.' },
          { id: 'q1-f', text: 'Rural market not important', isCorrect: false, points: 0, feedback: 'Wrong - rural market is strategic priority.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify revenue loss', 'Market share decline', 'CMS reimbursement']
      },
      {
        question: 'What telehealth capabilities do you need? What use cases are most important?',
        purpose: 'Identify telehealth requirements',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Video consultations for primary care, specialty care, behavioral health - reduce travel burden', isCorrect: true, points: 4, feedback: 'Excellent - identified core telehealth use cases.' },
          { id: 'q2-b', text: 'Remote patient monitoring for chronic disease (diabetes, hypertension, CHF) - 40% of rural population', isCorrect: true, points: 3, feedback: 'Good - identified RPM opportunity.' },
          { id: 'q2-c', text: 'Mobile health units with telehealth for underserved areas - bring care to patients', isCorrect: true, points: 3, feedback: 'Good - identified mobile strategy.' },
          { id: 'q2-d', text: 'E-prescribing, lab review, care coordination - complete virtual care workflow', isCorrect: true, points: 3, feedback: 'Good - understood comprehensive platform needs.' },
          { id: 'q2-e', text: 'Only need basic phone calls', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive video platform required.' },
          { id: 'q2-f', text: 'Telehealth not needed', isCorrect: false, points: 0, feedback: 'Wrong - telehealth is strategic imperative.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Video consultations', 'Remote monitoring', 'Mobile health units']
      },
      {
        question: 'What is your rural broadband situation? Can patients access video consultations?',
        purpose: 'Assess connectivity challenges',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Poor broadband in 40% of rural counties - need low-bandwidth video solution', isCorrect: true, points: 4, feedback: 'Excellent - identified connectivity constraint.' },
          { id: 'q3-b', text: 'Mobile-first strategy required - most rural patients have smartphones with cellular data', isCorrect: true, points: 3, feedback: 'Good - identified mobile opportunity.' },
          { id: 'q3-c', text: 'Need offline capabilities for mobile health units - sync when connected', isCorrect: true, points: 3, feedback: 'Good - understood offline requirements.' },
          { id: 'q3-d', text: 'Adaptive video quality based on bandwidth - ensure reliable experience', isCorrect: true, points: 3, feedback: 'Good - understood technical solution.' },
          { id: 'q3-e', text: 'All rural areas have fiber', isCorrect: false, points: 0, feedback: 'Wrong - rural broadband is limited.' },
          { id: 'q3-f', text: 'Connectivity not a concern', isCorrect: false, points: 0, feedback: 'Wrong - rural connectivity is major challenge.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Poor rural broadband', 'Mobile-first', 'Adaptive video quality']
      },
      {
        question: 'What is your physician shortage situation in rural areas? How does telehealth help?',
        purpose: 'Understand workforce challenges',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Physician shortage in rural areas - cannot recruit specialists, telehealth enables urban specialists to serve rural patients', isCorrect: true, points: 4, feedback: 'Excellent - identified workforce solution.' },
          { id: 'q4-b', text: 'Behavioral health crisis in rural areas - no psychiatrists, telehealth provides access', isCorrect: true, points: 3, feedback: 'Good - identified behavioral health gap.' },
          { id: 'q4-c', text: 'Telehealth improves physician productivity - see more patients, reduce travel time', isCorrect: true, points: 3, feedback: 'Good - understood productivity benefit.' },
          { id: 'q4-d', text: 'Physician burnout from travel to rural clinics - telehealth reduces burden', isCorrect: true, points: 3, feedback: 'Good - identified physician satisfaction benefit.' },
          { id: 'q4-e', text: 'No physician shortage', isCorrect: false, points: 0, feedback: 'Wrong - rural physician shortage is well-documented.' },
          { id: 'q4-f', text: 'Telehealth does not help recruitment', isCorrect: false, points: 0, feedback: 'Wrong - telehealth enables specialist access.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Physician shortage', 'Behavioral health gap', 'Productivity improvement']
      },
      {
        question: 'What is your ER overuse situation? How much does inappropriate ER use cost?',
        purpose: 'Quantify ER overuse opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'ER overuse for primary care costs $5M annually - rural patients have no other option', isCorrect: true, points: 4, feedback: 'Excellent - quantified ER overuse cost.' },
          { id: 'q5-b', text: '30% of rural ER visits are non-urgent - could be handled via telehealth', isCorrect: true, points: 3, feedback: 'Good - quantified telehealth opportunity.' },
          { id: 'q5-c', text: 'Telehealth triage could redirect 30% of ER visits to virtual care - save $1.5M annually', isCorrect: true, points: 3, feedback: 'Good - calculated cost savings.' },
          { id: 'q5-d', text: 'After-hours telehealth would reduce ER visits - rural clinics close at 5pm', isCorrect: true, points: 3, feedback: 'Good - identified after-hours opportunity.' },
          { id: 'q5-e', text: 'No ER overuse', isCorrect: false, points: 0, feedback: 'Wrong - $5M annual cost from overuse.' },
          { id: 'q5-f', text: 'ER overuse not preventable', isCorrect: false, points: 0, feedback: 'Wrong - telehealth can redirect 30% of visits.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['$5M ER overuse cost', '30% non-urgent visits', 'Telehealth triage']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Digital Officer is executive sponsor, focused on rural expansion and telehealth', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about rural connectivity and HIPAA compliance', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated $10M revenue increase from rural market', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Chief Medical Officer concerned about quality of care and physician adoption', isCorrect: true, points: 3, feedback: 'Good - identified clinical stakeholder.' },
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
        question: 'What is your timeline and what drives the urgency? Any regulatory or competitive deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '12-month implementation across 15 rural counties, board-mandated rural expansion', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'CMS telehealth reimbursement expansion creates immediate revenue opportunity', isCorrect: true, points: 3, feedback: 'Good - identified reimbursement driver.' },
          { id: 'q7-c', text: 'Competitors expanding telehealth to rural areas - losing market share', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q7-d', text: 'Vendor selection in 6 weeks, phased rollout starting with pilot county', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 12-month timeline with board mandate.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and competitive pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'CMS reimbursement', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$8M-$12M capital budget approved by board for telehealth platform', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires $10M revenue increase and 18-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: capture $20M rural market, reduce ER overuse $1.5M, improve outcomes', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: telehealth platform, RPM devices, mobile units, EHR integration, training', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
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
      '$20M annual lost revenue',
      'Lost 15% rural market share',
      'No telehealth capabilities',
      'Poor rural broadband',
      'Physician shortage',
      '$5M ER overuse',
      'CMS reimbursement opportunity',
      'Budget $8M-$12M approved'
    ],
    redFlags: [
      'Budget under $6M insufficient',
      'Timeline under 9 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 15 counties simultaneously'
    ],
    opportunities: [
      'Capture $20M rural market',
      'Reduce ER overuse $1.5M',
      'CMS telehealth reimbursement',
      'Improve chronic disease outcomes',
      'Physician recruitment advantage'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we ensure quality of care via telehealth? Physicians are concerned about not examining patients in person.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Quality of care is paramount. IBM telehealth platform provides clinical-grade capabilities: (1) High-definition video with diagnostic peripherals (digital stethoscope, otoscope, dermascope), (2) Clinical decision support integrated into workflow, (3) Evidence-based protocols for telehealth appropriateness, (4) Quality metrics and outcomes tracking, (5) Hybrid model - telehealth for appropriate cases, in-person when needed. Studies show telehealth outcomes equal to in-person for many conditions.',
        responseChoices: [
          { id: 'obj1-a', text: 'Clinical-grade HD video with diagnostic peripherals - digital stethoscope, otoscope, dermascope for remote exam', isCorrect: true, points: 4, feedback: 'Excellent - addressed clinical examination capability.' },
          { id: 'obj1-b', text: 'Evidence-based protocols for telehealth appropriateness - guides physicians on when telehealth is suitable', isCorrect: true, points: 3, feedback: 'Good - explained clinical decision support.' },
          { id: 'obj1-c', text: 'Quality metrics and outcomes tracking - monitor telehealth quality vs. in-person', isCorrect: true, points: 3, feedback: 'Good - addressed quality monitoring.' },
          { id: 'obj1-d', text: 'Studies show telehealth outcomes equal to in-person for primary care, behavioral health, chronic disease management', isCorrect: true, points: 3, feedback: 'Good - provided evidence base.' },
          { id: 'obj1-e', text: 'Telehealth cannot provide quality care', isCorrect: false, points: 0, feedback: 'Wrong - evidence shows equivalent outcomes.' },
          { id: 'obj1-f', text: 'Quality not important', isCorrect: false, points: 0, feedback: 'Wrong - quality is paramount.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed quality concerns',
          'Explained diagnostic peripherals',
          'Described clinical protocols',
          'Provided evidence base'
        ],
        hints: ['Diagnostic peripherals', 'Evidence-based protocols', 'Quality metrics']
      },
      {
        objection: 'How do we handle poor broadband in 40% of rural counties? Video will not work.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Rural connectivity is a known challenge. IBM provides adaptive solutions: (1) Adaptive video quality - automatically adjusts to available bandwidth (down to 384 kbps), (2) Mobile-first design - optimized for cellular data, (3) Offline capabilities for mobile health units - sync when connected, (4) Audio-only fallback when video not possible, (5) Partnership with rural broadband initiatives. IBM has deployed telehealth in rural areas globally with 95% successful connection rate.',
        responseChoices: [
          { id: 'obj2-a', text: 'Adaptive video quality - automatically adjusts to bandwidth (384 kbps to 2 Mbps), ensures reliable connection', isCorrect: true, points: 4, feedback: 'Excellent - addressed bandwidth adaptation.' },
          { id: 'obj2-b', text: 'Mobile-first design optimized for cellular data - most rural patients have smartphones', isCorrect: true, points: 3, feedback: 'Good - explained mobile strategy.' },
          { id: 'obj2-c', text: 'Offline capabilities for mobile health units - sync data when connected to network', isCorrect: true, points: 3, feedback: 'Good - addressed offline requirements.' },
          { id: 'obj2-d', text: 'Track record: 95% successful connection rate in rural deployments globally', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj2-e', text: 'Requires high-speed fiber', isCorrect: false, points: 0, feedback: 'Wrong - adaptive technology works with limited bandwidth.' },
          { id: 'obj2-f', text: 'Connectivity not solvable', isCorrect: false, points: 0, feedback: 'Wrong - adaptive solutions proven in rural areas.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed bandwidth limitations',
          'Explained adaptive video',
          'Described mobile-first approach',
          'Provided rural deployment track record'
        ],
        hints: ['Adaptive video quality', 'Mobile-first', 'Offline capabilities']
      },
      {
        objection: 'How do we get physicians to adopt telehealth? Many are skeptical and prefer in-person visits.',
        stakeholder: 'Chief Digital Officer',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Physician adoption is critical. IBM provides comprehensive change management: (1) Physician champions program - early adopters become advocates, (2) Workflow integration - telehealth embedded in existing EHR, not separate system, (3) Productivity benefits - see more patients, reduce travel time, (4) Training and support - hands-on training, 24/7 technical support, (5) Financial incentives - telehealth reimbursement, productivity bonuses. IBM has achieved 90%+ physician adoption at 200+ health systems.',
        responseChoices: [
          { id: 'obj3-a', text: 'Physician champions program - early adopters become advocates, peer-to-peer influence', isCorrect: true, points: 4, feedback: 'Excellent - addressed adoption strategy.' },
          { id: 'obj3-b', text: 'Workflow integration - telehealth embedded in EHR, not separate system, minimal disruption', isCorrect: true, points: 3, feedback: 'Good - explained workflow integration.' },
          { id: 'obj3-c', text: 'Productivity benefits - see more patients, reduce travel, improve work-life balance', isCorrect: true, points: 3, feedback: 'Good - highlighted physician benefits.' },
          { id: 'obj3-d', text: 'Track record: 90%+ physician adoption at 200+ health systems, physicians become advocates', isCorrect: true, points: 3, feedback: 'Good - provided adoption track record.' },
          { id: 'obj3-e', text: 'Force physicians to use telehealth', isCorrect: false, points: 0, feedback: 'Wrong - voluntary adoption with champions works better.' },
          { id: 'obj3-f', text: 'Physician adoption not important', isCorrect: false, points: 0, feedback: 'Wrong - physician adoption is critical.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed physician adoption',
          'Explained champions program',
          'Described workflow integration',
          'Highlighted productivity benefits'
        ],
        hints: ['Physician champions', 'Workflow integration', 'Productivity benefits']
      },
      {
        objection: 'Your solution costs $10M. Can we start with a pilot county to prove ROI before rolling out to all 15 counties?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $1.5M for single county (3 months), (2) Pilot typically shows 25-30% increase in rural patient visits and 20% ER reduction, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining counties ($8.5M) with proven ROI. Business case shows 16-month payback and $30M three-year benefit vs. $10M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $1.5M pilot in single county (3 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 25-30% increase in rural visits and 20% ER reduction within 3 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 16-month payback, $30M three-year benefit vs. $10M investment (200% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 15 counties immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot county approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we ensure HIPAA compliance for video consultations? We cannot risk a breach.',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'HIPAA compliance is non-negotiable. IBM provides comprehensive security: (1) End-to-end encryption for all video, audio, and data, (2) HIPAA-compliant cloud infrastructure with BAA, (3) Secure patient authentication and access controls, (4) Audit logging of all sessions, (5) Regular security audits and penetration testing. IBM telehealth platform is HITRUST certified and has zero breaches across 500+ healthcare deployments.',
        responseChoices: [
          { id: 'obj5-a', text: 'End-to-end encryption for all video, audio, data - HIPAA-compliant cloud with BAA', isCorrect: true, points: 4, feedback: 'Excellent - addressed HIPAA compliance comprehensively.' },
          { id: 'obj5-b', text: 'Secure patient authentication, access controls, audit logging of all sessions', isCorrect: true, points: 3, feedback: 'Good - explained security controls.' },
          { id: 'obj5-c', text: 'HITRUST certified, regular security audits and penetration testing', isCorrect: true, points: 3, feedback: 'Good - highlighted certifications.' },
          { id: 'obj5-d', text: 'Track record: 500+ healthcare deployments, zero breaches, HIPAA compliant for 15+ years', isCorrect: true, points: 3, feedback: 'Good - provided security track record.' },
          { id: 'obj5-e', text: 'No encryption needed', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA requires encryption.' },
          { id: 'obj5-f', text: 'HIPAA compliance not important', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA compliance is mandatory.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed HIPAA compliance',
          'Explained encryption and security',
          'Described audit logging',
          'Highlighted HITRUST certification'
        ],
        hints: ['End-to-end encryption', 'HITRUST certification', 'Zero breaches']
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
          reason: 'High-performance computing for telehealth platform, video processing, remote patient monitoring, and AI-powered triage across 15 rural counties',
          configuration: 'Centralized Power E1080 for telehealth platform and video infrastructure. Edge servers for mobile health units',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Watson Health',
          reason: 'AI-powered telehealth triage, clinical decision support, and remote patient monitoring analytics',
          configuration: 'Telehealth triage AI, clinical decision support, RPM analytics, predictive alerts for chronic disease',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for video recordings, patient data, RPM data, and telehealth analytics with HIPAA compliance',
          configuration: '200TB usable capacity for 15 counties, video recordings, patient records, RPM data, encrypted storage',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for telehealth platform, video infrastructure, and AI triage, (2) Edge tier: Edge servers for mobile health units with offline capabilities, (3) Storage tier: FlashSystem 9500 for video and patient data. IBM Watson Health provides AI-powered triage and RPM analytics.',
      sizing: 'Central: 1x Power E1080 (24-core) for telehealth and video. Edge: 5x mobile health unit servers. Storage: 200TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-3): Pilot in single county. Phase 2 (Months 4-8): Scale to 7 counties. Phase 3 (Months 9-12): Complete rollout to remaining 7 counties.'
    },
    pricing: {
      hardware: '$5M (Power E1080 + mobile unit servers + FlashSystem 9500)',
      software: '$3M (IBM telehealth platform, Watson Health, RPM platform, 3-year licenses)',
      services: '$2M (IBM Expert Labs: implementation, EHR integration, training, change management)',
      support: '$300K/year (24x7 support with 2-hour response)',
      total: '$10M initial + $300K/year support',
      financing: 'IBM Flex financing available - $210K/month for 60 months',
      paymentTerms: 'Phased payment: $1.5M pilot, $4M Phase 2, $4.5M Phase 3'
    },
    businessCase: {
      costSavings: '$8.5M annually (ER overuse $1.5M, readmissions $3M, travel costs $4M)',
      revenueImpact: '$20M annually (capture rural market share)',
      productivityGains: '$5M annually (physician productivity, operational efficiency)',
      riskReduction: 'Improve rural access, reduce ER overuse 30%, improve chronic disease outcomes, physician recruitment advantage',
      roi: '16 months',
      paybackPeriod: '16 months',
      tco: '3-year TCO: $10M investment vs. $100M in benefits (revenue + savings + productivity) = $90M net benefit, 200% three-year ROI'
    },
    competitivePositioning: 'IBM telehealth platform is the leading enterprise solution with 500+ healthcare deployments. Unlike consumer video tools, IBM provides clinical-grade video, diagnostic peripherals, EHR integration, HIPAA compliance, and AI-powered triage. Power E1080 delivers 3x better video performance than x86.',
    nextSteps: [
      'Schedule telehealth workshop with IBM Watson Health experts',
      'Conduct pilot county selection and broadband assessment',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation in selected county'
    ],
    requiredElements: [
      'IBM telehealth platform with clinical-grade video',
      'Power E1080 for video infrastructure and AI',
      'FlashSystem for video and patient data storage',
      'Watson Health for AI triage and RPM analytics',
      'Diagnostic peripherals for remote examination',
      'Mobile health unit servers with offline capabilities',
      'EHR integration',
      'Physician training and change management'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified rural market opportunity ($20M lost revenue)',
        'Identified telehealth use cases (video, RPM, mobile units)',
        'Assessed connectivity challenges (poor rural broadband)',
        'Understood physician shortage and workforce benefits',
        'Quantified ER overuse opportunity ($5M, 30% non-urgent)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($8M-$12M, 12 months)',
        'Identified CFO mandate ($10M revenue increase)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed quality of care with diagnostic peripherals',
        'Handled connectivity with adaptive video',
        'Addressed physician adoption with champions program',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed HIPAA compliance with encryption and HITRUST'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as telehealth platform',
        'Included Watson Health for AI triage and RPM',
        'Included FlashSystem for video storage',
        'Addressed all pain points (rural access, ER overuse, physician shortage)',
        'Proposed phased deployment with pilot',
        'Included mobile health units and offline capabilities'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified revenue opportunity ($20M)',
        'Quantified cost savings ($8.5M)',
        'Calculated productivity gains ($5M)',
        'Calculated ROI (16-month payback, 200% three-year ROI)',
        'Positioned as rural expansion and competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Telehealth platform architecture',
      description: 'Design enterprise telehealth platforms with clinical-grade video, diagnostic peripherals, and EHR integration',
      skillLevel: 'advanced'
    },
    {
      concept: 'Rural healthcare connectivity',
      description: 'Address rural broadband challenges with adaptive video, mobile-first design, and offline capabilities',
      skillLevel: 'advanced'
    },
    {
      concept: 'Remote patient monitoring',
      description: 'Implement RPM programs for chronic disease management with AI-powered analytics',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Healthcare change management',
      description: 'Build physician adoption through champions programs and workflow integration',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Rural health economics',
      description: 'Quantify ROI from rural market expansion, ER reduction, and telehealth reimbursement',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Telehealth', 'Rural health', 'Video consultations', 'Remote monitoring', 'Healthcare access', 'Physician adoption'],
    skills: ['Telehealth architecture', 'Rural connectivity', 'RPM', 'Change management', 'Healthcare economics'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Healthcare'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with rural market opportunity ($20M lost revenue) - this is the primary driver',
    'Emphasize CMS telehealth reimbursement expansion as immediate opportunity',
    'Address connectivity concerns proactively with adaptive video technology',
    'Recommend pilot county approach to de-risk investment and prove ROI',
    'Highlight physician productivity benefits - see more patients, reduce travel',
    'Position IBM as enterprise telehealth vs. consumer video tools',
    'Build compelling ROI: 16-month payback, 200% three-year ROI, $20M revenue',
    'Chief Digital Officer is champion - focus on rural expansion and access',
    'CIO is supporter but concerned about connectivity - lead with adaptive solutions',
    'CFO is neutral - build strong business case with $10M revenue mandate',
    'Differentiate with proven track record: 500+ healthcare telehealth deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address quality concerns with diagnostic peripherals and evidence base',
    'Highlight mobile health units as innovative rural access strategy'
  ]
};

/**
 * Healthcare Scenario 004: Medical Imaging AI and PACS
 * Academic medical center modernizing imaging with AI-powered diagnostics
 */
export const healthcareScenario004: TrainingScenario = {
  id: 'healthcare-imaging-ai-004',
  title: 'Academic Medical Center Needs AI-Powered Medical Imaging and Modern PACS',
  description: 'A large academic medical center with 1.2M imaging studies annually faces $18M in lost revenue from radiologist shortage, delayed diagnoses, and aging PACS infrastructure. They need an AI-powered medical imaging platform with modern PACS to improve diagnostic accuracy, reduce radiologist burnout, and accelerate time-to-diagnosis.',
  
  customerProfile: {
    company: 'University Medical Center',
    industry: 'Healthcare',
    size: 'Large (1000-5000 employees)',
    revenue: '$2.5B annually',
    employees: 12000,
    location: 'Academic medical center with 4 hospitals and 30 outpatient imaging centers',
    currentInfrastructure: {
      servers: 'On-premises PACS servers (15 years old)',
      storage: 'Legacy storage arrays, running out of capacity',
      applications: ['Legacy PACS', 'No AI capabilities', 'Manual image routing', 'Separate systems per modality'],
      operatingSystem: 'Windows Server 2008 (end of life)',
      virtualization: 'Limited VMware',
      age: '15 years',
      endOfLife: 'PACS vendor ending support in 12 months',
      issues: [
        '$18M annually in lost revenue from delays and radiologist shortage',
        'Radiologist shortage - cannot recruit, high burnout',
        'Delayed diagnoses - 48-72 hour turnaround for complex studies',
        'Legacy PACS - slow, unreliable, vendor ending support',
        'No AI capabilities - miss incidental findings',
        'Storage capacity crisis - 1.2M studies/year, 500TB data',
        'Cannot share images with referring physicians',
        'Separate systems for CT, MRI, X-ray - no unified workflow'
      ]
    },
    keyStakeholders: [
      {
        name: 'Dr. Sarah Williams',
        role: 'CTO',
        priorities: ['Diagnostic accuracy', 'Patient safety', 'Radiologist recruitment', 'Quality of care'],
        concerns: ['AI accuracy', 'Radiologist trust', 'Patient safety', 'Implementation disruption'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Michael Chen',
        role: 'CIO',
        priorities: ['PACS modernization', 'System reliability', 'Integration', 'Vendor support'],
        concerns: ['Migration complexity', 'Downtime', 'Data migration', 'Support model'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Jennifer Martinez',
        role: 'CFO',
        priorities: ['Revenue growth', 'Cost reduction', 'ROI', 'Radiologist productivity'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Risk'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$12M-$18M capital budget for AI imaging platform and PACS modernization',
    timeline: '18-month implementation across 4 hospitals and 30 imaging centers',
    decisionProcess: 'Board approved imaging modernization. CMO is executive sponsor. CFO requires $10M revenue increase from improved throughput.'
  },
  
  businessContext: {
    challenges: [
      '$18M annually in lost revenue',
      'Radiologist shortage and burnout',
      'Delayed diagnoses (48-72 hours)',
      'Legacy PACS ending support',
      'No AI capabilities',
      'Storage capacity crisis',
      'Cannot share images externally',
      'Fragmented imaging systems'
    ],
    businessImpact: [
      '$18M annual lost revenue',
      '$8M from delayed diagnoses',
      '$6M from radiologist shortage',
      '$4M from missed incidental findings',
      'Patient safety risk',
      'Radiologist burnout and turnover'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement AI-powered medical imaging platform',
      'Modernize PACS infrastructure',
      'Reduce time-to-diagnosis by 50%',
      'Improve diagnostic accuracy with AI',
      'Recruit and retain radiologists',
      'Increase imaging throughput by 30%',
      'Enable image sharing with referring physicians'
    ],
    competitivePressure: 'Competing academic medical centers deploying AI imaging. Referring physicians sending patients to competitors with faster turnaround.',
    regulatoryRequirements: ['FDA clearance for AI algorithms', 'HIPAA', 'DICOM standards', 'ACR accreditation', 'State medical imaging regulations'],
    recentEvents: [
      'PACS vendor announced end of support in 12 months',
      'Lost 3 radiologists to competitors with AI tools',
      'Patient safety event from missed incidental finding',
      'Board mandated imaging modernization'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of radiologist shortage and delayed diagnoses? How much revenue are you losing?',
        purpose: 'Quantify imaging opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: '$18M annually in lost revenue - delayed diagnoses and radiologist shortage limit imaging capacity', isCorrect: true, points: 4, feedback: 'Excellent - quantified revenue impact.' },
          { id: 'q1-b', text: 'Radiologist shortage - cannot recruit, 48-72 hour turnaround for complex studies', isCorrect: true, points: 3, feedback: 'Good - identified workforce challenge.' },
          { id: 'q1-c', text: 'Lost 3 radiologists to competitors with AI tools - burnout from high workload', isCorrect: true, points: 3, feedback: 'Good - identified retention issue.' },
          { id: 'q1-d', text: 'Referring physicians sending patients to competitors with faster turnaround', isCorrect: true, points: 3, feedback: 'Good - identified competitive threat.' },
          { id: 'q1-e', text: 'No revenue impact', isCorrect: false, points: 0, feedback: 'Wrong - $18M annual loss is significant.' },
          { id: 'q1-f', text: 'Radiologist shortage not a problem', isCorrect: false, points: 0, feedback: 'Wrong - shortage is limiting capacity.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify revenue loss', 'Radiologist shortage', 'Competitive threat']
      },
      {
        question: 'What AI capabilities do you need? What clinical use cases are most important?',
        purpose: 'Identify AI requirements',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'AI triage - prioritize critical findings (stroke, PE, pneumothorax) for immediate radiologist review', isCorrect: true, points: 4, feedback: 'Excellent - identified critical triage use case.' },
          { id: 'q2-b', text: 'AI detection - identify incidental findings (lung nodules, fractures, masses) that radiologists might miss', isCorrect: true, points: 3, feedback: 'Good - identified detection opportunity.' },
          { id: 'q2-c', text: 'AI quantification - automate measurements (tumor size, ejection fraction, bone density)', isCorrect: true, points: 3, feedback: 'Good - identified quantification use case.' },
          { id: 'q2-d', text: 'AI workflow - automate image routing, hanging protocols, prior comparison', isCorrect: true, points: 3, feedback: 'Good - understood workflow automation.' },
          { id: 'q2-e', text: 'Only need basic PACS', isCorrect: false, points: 0, feedback: 'Wrong - AI capabilities are strategic priority.' },
          { id: 'q2-f', text: 'AI not needed', isCorrect: false, points: 0, feedback: 'Wrong - AI is key to addressing radiologist shortage.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['AI triage', 'Incidental findings', 'Workflow automation']
      },
      {
        question: 'What is your current PACS situation? Why is modernization urgent?',
        purpose: 'Assess PACS challenges',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Legacy PACS (15 years old) - vendor ending support in 12 months, forced migration', isCorrect: true, points: 4, feedback: 'Excellent - identified urgent timeline.' },
          { id: 'q3-b', text: 'Slow and unreliable - radiologists frustrated, impacts productivity and quality', isCorrect: true, points: 3, feedback: 'Good - identified performance issues.' },
          { id: 'q3-c', text: 'Storage capacity crisis - 1.2M studies/year, 500TB data, running out of space', isCorrect: true, points: 3, feedback: 'Good - identified storage challenge.' },
          { id: 'q3-d', text: 'Fragmented systems - separate PACS for CT, MRI, X-ray, no unified workflow', isCorrect: true, points: 3, feedback: 'Good - identified integration gap.' },
          { id: 'q3-e', text: 'PACS is modern and working well', isCorrect: false, points: 0, feedback: 'Wrong - legacy PACS is major issue.' },
          { id: 'q3-f', text: 'No urgency for modernization', isCorrect: false, points: 0, feedback: 'Wrong - vendor ending support in 12 months.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Vendor ending support', 'Performance issues', 'Storage crisis']
      },
      {
        question: 'What is your imaging volume and growth? What are the storage requirements?',
        purpose: 'Assess scale and capacity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: '1.2M imaging studies annually across 4 hospitals and 30 outpatient centers', isCorrect: true, points: 4, feedback: 'Excellent - quantified imaging volume.' },
          { id: 'q4-b', text: '500TB current data, growing 20% annually, need 1PB+ capacity for 7-year retention', isCorrect: true, points: 3, feedback: 'Good - identified storage requirements.' },
          { id: 'q4-c', text: 'High-resolution studies (CT, MRI) - 500MB-2GB per study, need high-performance storage', isCorrect: true, points: 3, feedback: 'Good - understood performance needs.' },
          { id: 'q4-d', text: 'Multi-site deployment - need centralized PACS with local caching for performance', isCorrect: true, points: 3, feedback: 'Good - identified multi-site architecture.' },
          { id: 'q4-e', text: 'Small imaging volume', isCorrect: false, points: 0, feedback: 'Wrong - 1.2M studies annually is large volume.' },
          { id: 'q4-f', text: 'Storage not a concern', isCorrect: false, points: 0, feedback: 'Wrong - storage capacity crisis.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['1.2M studies', '500TB data', 'Multi-site']
      },
      {
        question: 'What is your radiologist productivity challenge? How does AI help?',
        purpose: 'Understand workforce impact',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Radiologist burnout - reading 100+ studies/day, high error risk, cannot sustain', isCorrect: true, points: 4, feedback: 'Excellent - identified burnout issue.' },
          { id: 'q5-b', text: 'AI triage reduces workload - prioritizes critical cases, automates routine measurements', isCorrect: true, points: 3, feedback: 'Good - understood AI productivity benefit.' },
          { id: 'q5-c', text: 'AI detection improves accuracy - catches incidental findings, reduces callbacks and liability', isCorrect: true, points: 3, feedback: 'Good - identified quality benefit.' },
          { id: 'q5-d', text: 'AI recruitment advantage - radiologists want to work with modern AI tools', isCorrect: true, points: 3, feedback: 'Good - understood recruitment benefit.' },
          { id: 'q5-e', text: 'No productivity issues', isCorrect: false, points: 0, feedback: 'Wrong - radiologist burnout is major concern.' },
          { id: 'q5-f', text: 'AI does not help productivity', isCorrect: false, points: 0, feedback: 'Wrong - AI proven to improve radiologist productivity.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Radiologist burnout', 'AI triage', 'Recruitment advantage']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Medical Officer is executive sponsor, focused on diagnostic accuracy and patient safety', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about PACS migration complexity and data migration', isCorrect: true, points: 3, feedback: 'Good - identified IT stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated $10M revenue increase from improved throughput', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Radiologists are end users - need AI tools that improve workflow, not add burden', isCorrect: true, points: 3, feedback: 'Good - identified end user concerns.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - CMO is executive sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['CMO sponsor', 'CFO budget authority', 'Radiologist adoption']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any vendor or regulatory deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '18-month implementation, PACS vendor ending support in 12 months - forced migration', isCorrect: true, points: 4, feedback: 'Excellent - identified urgent timeline.' },
          { id: 'q7-b', text: 'Board mandated imaging modernization after patient safety event', isCorrect: true, points: 3, feedback: 'Good - identified board mandate.' },
          { id: 'q7-c', text: 'Radiologist recruitment crisis - need AI tools to attract and retain talent', isCorrect: true, points: 3, feedback: 'Good - identified workforce driver.' },
          { id: 'q7-d', text: 'Vendor selection in 8 weeks, phased rollout starting with pilot hospital', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - vendor ending support in 12 months.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - forced migration and board mandate.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Vendor ending support', 'Board mandate', 'Recruitment crisis']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$12M-$18M capital budget approved by board for AI imaging and PACS modernization', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires $10M revenue increase and 24-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: increase throughput $10M, reduce radiologist burnout $4M, improve quality $4M', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: AI platform, PACS, storage, data migration, training, FDA-cleared algorithms', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $12M-$18M.' },
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
      '$18M annual lost revenue',
      'Radiologist shortage and burnout',
      'Legacy PACS ending support',
      '1.2M studies annually',
      '500TB storage crisis',
      'AI capabilities needed',
      'Budget $12M-$18M approved',
      'Vendor ending support in 12 months'
    ],
    redFlags: [
      'Budget under $10M insufficient',
      'Timeline under 12 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all sites simultaneously'
    ],
    opportunities: [
      'Increase throughput $10M',
      'Reduce burnout $4M',
      'Improve quality $4M',
      'Recruit radiologists',
      'Competitive advantage'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How accurate is AI for medical imaging? Radiologists are concerned about false positives and liability.',
        stakeholder: 'CTO',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'AI accuracy and safety are paramount. IBM medical imaging AI is FDA-cleared: (1) 95%+ sensitivity for critical findings (stroke, PE, pneumothorax), (2) Low false positive rate (<5%) - does not overwhelm radiologists, (3) FDA 510(k) clearance for clinical use, (4) Explainable AI - shows why findings were flagged, (5) Human-in-the-loop - AI assists, radiologist makes final diagnosis. IBM AI deployed at 200+ health systems with proven safety record.',
        responseChoices: [
          { id: 'obj1-a', text: 'FDA 510(k) cleared AI algorithms - 95%+ sensitivity for critical findings (stroke, PE, pneumothorax)', isCorrect: true, points: 4, feedback: 'Excellent - addressed regulatory clearance and accuracy.' },
          { id: 'obj1-b', text: 'Low false positive rate (<5%) - AI flags true findings, does not overwhelm radiologists', isCorrect: true, points: 3, feedback: 'Good - addressed false positive concern.' },
          { id: 'obj1-c', text: 'Explainable AI - shows heatmaps and reasoning, radiologists understand why findings flagged', isCorrect: true, points: 3, feedback: 'Good - explained transparency.' },
          { id: 'obj1-d', text: 'Track record: 200+ health systems, proven safety, no liability issues, radiologists trust AI', isCorrect: true, points: 3, feedback: 'Good - provided safety track record.' },
          { id: 'obj1-e', text: 'AI is not accurate', isCorrect: false, points: 0, feedback: 'Wrong - FDA-cleared with 95%+ sensitivity.' },
          { id: 'obj1-f', text: 'Accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - accuracy is critical for patient safety.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed FDA clearance',
          'Quantified accuracy',
          'Explained explainable AI',
          'Provided safety track record'
        ],
        hints: ['FDA clearance', '95% sensitivity', 'Explainable AI']
      },
      {
        objection: 'How do we migrate 500TB of imaging data from legacy PACS without disrupting operations?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Data migration is critical. IBM provides proven migration approach: (1) Phased migration - pilot hospital first, validate, then scale, (2) Parallel operation - legacy and new PACS run simultaneously during transition, (3) Automated migration tools - migrate data overnight, no downtime, (4) Data validation - verify all studies migrated correctly, (5) Rollback capability - can revert if issues. IBM has migrated 1,000+ PACS with 99.9% success rate.',
        responseChoices: [
          { id: 'obj2-a', text: 'Phased migration: pilot hospital first (50TB), validate, then scale to remaining sites', isCorrect: true, points: 4, feedback: 'Excellent - addressed migration approach.' },
          { id: 'obj2-b', text: 'Parallel operation - legacy and new PACS run simultaneously, zero downtime', isCorrect: true, points: 3, feedback: 'Good - explained zero-downtime approach.' },
          { id: 'obj2-c', text: 'Automated migration tools - migrate 50TB per week overnight, no impact to operations', isCorrect: true, points: 3, feedback: 'Good - quantified migration speed.' },
          { id: 'obj2-d', text: 'Track record: 1,000+ PACS migrations, 99.9% success rate, zero data loss', isCorrect: true, points: 3, feedback: 'Good - provided migration track record.' },
          { id: 'obj2-e', text: 'Requires weeks of downtime', isCorrect: false, points: 0, feedback: 'Wrong - parallel operation enables zero downtime.' },
          { id: 'obj2-f', text: 'Migration not possible', isCorrect: false, points: 0, feedback: 'Wrong - proven migration approach.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed migration approach',
          'Explained parallel operation',
          'Quantified migration speed',
          'Provided migration track record'
        ],
        hints: ['Phased migration', 'Parallel operation', 'Zero downtime']
      },
      {
        objection: 'How do we get radiologists to trust and adopt AI? Many are skeptical of AI replacing their judgment.',
        stakeholder: 'CTO',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Radiologist trust is critical. IBM provides comprehensive adoption program: (1) AI assists, does not replace - radiologist makes final diagnosis, (2) Radiologist champions - early adopters become advocates, (3) Clinical validation - show AI improves accuracy and reduces burnout, (4) Training and support - hands-on training, 24/7 clinical support, (5) Transparency - explainable AI shows reasoning. IBM has achieved 90%+ radiologist adoption at 200+ health systems.',
        responseChoices: [
          { id: 'obj3-a', text: 'AI assists, does not replace - radiologist makes final diagnosis, AI is second reader', isCorrect: true, points: 4, feedback: 'Excellent - addressed replacement concern.' },
          { id: 'obj3-b', text: 'Radiologist champions program - early adopters become advocates, peer influence', isCorrect: true, points: 3, feedback: 'Good - explained adoption strategy.' },
          { id: 'obj3-c', text: 'Clinical validation - studies show AI improves accuracy 15% and reduces burnout', isCorrect: true, points: 3, feedback: 'Good - provided evidence base.' },
          { id: 'obj3-d', text: 'Track record: 90%+ radiologist adoption at 200+ health systems, radiologists become advocates', isCorrect: true, points: 3, feedback: 'Good - provided adoption track record.' },
          { id: 'obj3-e', text: 'AI will replace radiologists', isCorrect: false, points: 0, feedback: 'Wrong - AI assists, radiologist makes final diagnosis.' },
          { id: 'obj3-f', text: 'Adoption not important', isCorrect: false, points: 0, feedback: 'Wrong - radiologist adoption is critical.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed replacement concern',
          'Explained champions program',
          'Provided clinical evidence',
          'Highlighted adoption track record'
        ],
        hints: ['AI assists', 'Champions program', 'Clinical validation']
      },
      {
        objection: 'Your solution costs $15M. Can we start with a pilot hospital to prove ROI before rolling out to all 4 hospitals?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $3M for single hospital (6 months), (2) Pilot typically shows 25% increase in throughput and 30% reduction in turnaround time, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining hospitals ($12M) with proven ROI. Business case shows 22-month payback and $54M three-year benefit vs. $15M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $3M pilot at single hospital (6 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 25% throughput increase and 30% faster turnaround within 6 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 22-month payback, $54M three-year benefit vs. $15M investment (260% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 4 hospitals immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot hospital approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we ensure HIPAA compliance and data security for cloud-based PACS?',
        stakeholder: 'CIO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'HIPAA compliance is non-negotiable. IBM provides comprehensive security: (1) HIPAA-compliant cloud infrastructure with BAA, (2) End-to-end encryption for all imaging data at rest and in transit, (3) Access controls and audit logging - track who accessed what images, (4) HITRUST certified and SOC 2 Type II compliant, (5) Regular security audits and penetration testing. IBM has zero breaches across 200+ healthcare imaging deployments.',
        responseChoices: [
          { id: 'obj5-a', text: 'HIPAA-compliant cloud with BAA - end-to-end encryption at rest and in transit', isCorrect: true, points: 4, feedback: 'Excellent - addressed HIPAA compliance comprehensively.' },
          { id: 'obj5-b', text: 'Access controls and audit logging - track who accessed images, when, and why', isCorrect: true, points: 3, feedback: 'Good - explained security controls.' },
          { id: 'obj5-c', text: 'HITRUST certified and SOC 2 Type II compliant - highest healthcare security standards', isCorrect: true, points: 3, feedback: 'Good - highlighted certifications.' },
          { id: 'obj5-d', text: 'Track record: 200+ healthcare imaging deployments, zero breaches, HIPAA compliant for 15+ years', isCorrect: true, points: 3, feedback: 'Good - provided security track record.' },
          { id: 'obj5-e', text: 'No encryption needed', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA requires encryption.' },
          { id: 'obj5-f', text: 'HIPAA compliance not important', isCorrect: false, points: 0, feedback: 'Wrong - HIPAA compliance is mandatory.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed HIPAA compliance',
          'Explained encryption and security',
          'Described audit logging',
          'Highlighted certifications'
        ],
        hints: ['HIPAA-compliant cloud', 'End-to-end encryption', 'HITRUST certified']
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
          reason: 'High-performance computing for AI-powered medical imaging, PACS infrastructure, and real-time image processing across 4 hospitals',
          configuration: 'Centralized Power E1080 for AI inference and PACS. Edge servers at imaging centers for local caching',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Watson Health Imaging',
          reason: 'FDA-cleared AI algorithms for medical imaging - triage, detection, quantification, and workflow automation',
          configuration: 'Watson Health Imaging for AI triage, incidental finding detection, automated measurements, workflow optimization',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for 1.2M imaging studies annually, 500TB current data, 1PB+ capacity with HIPAA compliance',
          configuration: '1PB usable capacity for 7-year retention, high-performance for large studies, encrypted storage, HIPAA compliant',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for AI inference and PACS, (2) Edge tier: Edge servers at 30 imaging centers for local caching, (3) Storage tier: FlashSystem 9500 for imaging data. IBM Watson Health Imaging provides FDA-cleared AI algorithms.',
      sizing: 'Central: 2x Power E1080 (24-core each) for AI and PACS. Edge: 30x imaging center servers. Storage: 1PB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-6): Pilot at single hospital. Phase 2 (Months 7-12): Scale to 2 hospitals. Phase 3 (Months 13-18): Complete rollout to remaining hospital and 30 imaging centers.'
    },
    pricing: {
      hardware: '$8M (2x Power E1080 + 30 edge servers + FlashSystem 9500)',
      software: '$5M (IBM Watson Health Imaging AI, PACS platform, 3-year licenses, FDA-cleared algorithms)',
      services: '$2M (IBM Expert Labs: implementation, data migration, AI training, radiologist training)',
      support: '$500K/year (24x7 support with 1-hour response for critical issues)',
      total: '$15M initial + $500K/year support',
      financing: 'IBM Flex financing available - $315K/month for 60 months',
      paymentTerms: 'Phased payment: $3M pilot, $6M Phase 2, $6M Phase 3'
    },
    businessCase: {
      costSavings: '$8M annually (radiologist productivity $4M, reduced callbacks $2M, storage optimization $2M)',
      revenueImpact: '$18M annually (increased throughput 30%, faster turnaround, improved quality)',
      productivityGains: '$4M annually (radiologist efficiency, automated measurements, workflow optimization)',
      riskReduction: 'Improve diagnostic accuracy, reduce patient safety risk, recruit radiologists, competitive advantage',
      roi: '22 months',
      paybackPeriod: '22 months',
      tco: '3-year TCO: $15M investment vs. $90M in benefits (revenue + savings + productivity) = $75M net benefit, 260% three-year ROI'
    },
    competitivePositioning: 'IBM Watson Health Imaging is the leading AI medical imaging solution with FDA clearance and 200+ health system deployments. Unlike generic AI tools, IBM provides clinical-grade accuracy (95%+ sensitivity), FDA 510(k) clearance, explainable AI, and proven integration with PACS. Power E1080 delivers 3x better AI performance than x86.',
    nextSteps: [
      'Schedule medical imaging workshop with IBM Watson Health experts',
      'Conduct pilot hospital selection and baseline assessment',
      'Develop phased deployment and data migration roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected hospital'
    ],
    requiredElements: [
      'IBM Watson Health Imaging with FDA-cleared AI algorithms',
      'Power E1080 for AI inference and PACS infrastructure',
      'FlashSystem for 1PB imaging data storage',
      'Watson Studio for AI model management',
      'Modern PACS platform with unified workflow',
      'Data migration tools and services',
      'Radiologist training and change management',
      'HIPAA-compliant cloud infrastructure'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified revenue opportunity ($18M annually)',
        'Identified AI use cases (triage, detection, quantification)',
        'Assessed PACS challenges (legacy, vendor ending support)',
        'Understood imaging volume and storage (1.2M studies, 500TB)',
        'Identified radiologist productivity challenges (burnout, shortage)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($12M-$18M, 18 months)',
        'Identified CFO mandate ($10M revenue increase)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed AI accuracy with FDA clearance and 95% sensitivity',
        'Handled data migration with phased approach and parallel operation',
        'Addressed radiologist trust with AI-assists model and champions program',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed HIPAA compliance with encryption and HITRUST certification'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as AI and PACS platform',
        'Included Watson Health Imaging for FDA-cleared AI',
        'Included FlashSystem for 1PB imaging storage',
        'Addressed all pain points (radiologist shortage, legacy PACS, storage)',
        'Proposed phased deployment with pilot hospital',
        'Included data migration and radiologist training'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($8M)',
        'Quantified revenue impact ($18M)',
        'Calculated productivity gains ($4M)',
        'Calculated ROI (22-month payback, 260% three-year ROI)',
        'Positioned as diagnostic accuracy and competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'AI-powered medical imaging',
      description: 'Design AI imaging platforms with FDA-cleared algorithms for triage, detection, and quantification',
      skillLevel: 'advanced'
    },
    {
      concept: 'PACS modernization',
      description: 'Migrate legacy PACS to modern cloud-based platforms with zero downtime',
      skillLevel: 'advanced'
    },
    {
      concept: 'Radiologist workflow optimization',
      description: 'Implement AI tools that improve radiologist productivity and reduce burnout',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Healthcare data migration',
      description: 'Execute large-scale medical imaging data migrations with parallel operation',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Medical imaging economics',
      description: 'Quantify ROI from increased throughput, improved quality, and radiologist productivity',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Medical imaging', 'AI diagnostics', 'PACS', 'Radiology', 'FDA clearance', 'Healthcare AI'],
    skills: ['AI imaging', 'PACS modernization', 'Data migration', 'Radiologist adoption', 'Healthcare economics'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Healthcare'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with revenue opportunity ($18M annually) - this is the primary driver',
    'Emphasize vendor ending support in 12 months as forcing function',
    'Address AI accuracy concerns proactively with FDA clearance and 95% sensitivity',
    'Recommend pilot hospital approach to de-risk investment and prove ROI',
    'Highlight radiologist recruitment advantage - AI tools attract talent',
    'Position IBM as FDA-cleared clinical AI vs. research-grade tools',
    'Build compelling ROI: 22-month payback, 260% three-year ROI, $18M revenue',
    'CMO is champion - focus on diagnostic accuracy and patient safety',
    'CIO is supporter but concerned about migration - lead with parallel operation',
    'CFO is neutral - build strong business case with $10M revenue mandate',
    'Differentiate with proven track record: 200+ health system AI imaging deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address radiologist trust with AI-assists model and explainable AI',
    'Highlight data migration expertise - 1,000+ PACS migrations with 99.9% success'
  ]
};


// Update exports
export const healthcareScenarios = [
  healthcareScenario001,
  healthcareScenario002,
  healthcareScenario003,
  healthcareScenario004
];
