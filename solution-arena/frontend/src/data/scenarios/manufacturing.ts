// Manufacturing Industry Training Scenarios
// Comprehensive scenarios with multiple choice questions

import { TrainingScenario } from '../../types/scenarios';

/**
 * Manufacturing Scenario 001: Smart Factory IoT Implementation
 * Automotive parts manufacturer needs IoT sensors and AI-powered predictive maintenance
 */
export const manufacturingScenario001: TrainingScenario = {
  id: 'manufacturing-smart-factory-001',
  title: 'Automotive Parts Manufacturer Needs Smart Factory IoT and Predictive Maintenance',
  description: 'A tier-1 automotive parts supplier with 8 manufacturing plants is losing $25M annually to unplanned downtime and quality defects. They need IoT sensors, edge computing, and AI-powered predictive maintenance to improve equipment reliability, reduce scrap rates, and optimize production efficiency.',
  
  customerProfile: {
    company: 'Precision Auto Components',
    industry: 'Manufacturing',
    size: 'Large (1000-5000 employees)',
    revenue: '$1.8B annually',
    employees: 3200,
    location: 'Multi-site (8 plants across 4 states)',
    currentInfrastructure: {
      servers: 'Mix of on-premises servers and legacy SCADA systems',
      storage: 'Local storage at each plant, no centralized data',
      applications: ['Legacy MES', 'SAP ERP', 'Manual quality inspection', 'Spreadsheet-based maintenance'],
      operatingSystem: 'Windows Server, some Linux',
      virtualization: 'Limited VMware at headquarters',
      age: '10-15 years',
      endOfLife: 'SCADA systems approaching end-of-support',
      issues: [
        'Unplanned downtime costs $25M annually (8% of production time)',
        'Quality defect rate 2.8% vs. industry best 0.5%',
        'No real-time visibility into equipment health',
        'Reactive maintenance - fix after breakdown',
        'Manual quality inspection misses 15% of defects',
        'Cannot predict equipment failures',
        'Data silos - each plant operates independently',
        'OEE at 65% vs. world-class 85%'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Martinez',
        role: 'VP of IT Operations',
        priorities: ['Reduce downtime', 'Improve OEE', 'Predictive maintenance', 'Quality improvement'],
        concerns: ['Production disruption', 'ROI timeline', 'Staff training', 'Integration'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Sarah Chen',
        role: 'CIO',
        priorities: ['Digital transformation', 'Data-driven decisions', 'IT/OT convergence', 'Cybersecurity'],
        concerns: ['IT/OT security', 'Network infrastructure', 'Data management', 'Vendor lock-in'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Michael Thompson',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Capital efficiency'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$8M-$12M capital budget approved',
    timeline: '18-month implementation across all 8 plants',
    decisionProcess: 'Board approved smart factory initiative. VP Manufacturing is executive sponsor. CFO requires strong ROI.'
  },
  
  businessContext: {
    challenges: [
      'Unplanned downtime costs $25M annually',
      'Quality defect rate 2.8% causing $12M in scrap annually',
      'Reactive maintenance - fix after breakdown',
      'No predictive capabilities',
      'Manual inspection misses 15% of defects',
      'Data silos across 8 plants',
      'OEE at 65% vs. world-class 85%',
      'Cannot meet OEM demands for real-time quality data'
    ],
    businessImpact: [
      '$25M annual downtime cost',
      '$12M annual quality cost',
      '$15M lost revenue from missed targets',
      '$3M customer penalties for late deliveries',
      'Losing contracts to competitors'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement IoT sensors on critical equipment',
      'Deploy AI-powered predictive maintenance',
      'Implement computer vision for quality inspection',
      'Achieve 85% OEE',
      'Reduce defect rate to 0.5%',
      'Centralize data from all 8 plants'
    ],
    competitivePressure: 'Competitors with smart factories winning contracts. OEMs demanding real-time quality data.',
    regulatoryRequirements: ['IATF 16949', 'ISO 9001', 'OSHA', 'Environmental regulations'],
    recentEvents: [
      'Lost $50M contract to competitor',
      'Major equipment failure caused 3-day shutdown ($2M cost)',
      'Customer audit identified monitoring gaps',
      'Board mandated smart factory initiative'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is your current unplanned downtime rate and cost? What are the primary causes of equipment failures?',
        purpose: 'Quantify downtime costs and identify root causes',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Unplanned downtime 8% of production time, costing $25M annually - primary causes: bearing failures, hydraulic issues, electrical faults', isCorrect: true, points: 4, feedback: 'Excellent - quantified downtime cost and identified specific failure modes.' },
          { id: 'q1-b', text: 'Cannot predict equipment failures, reactive maintenance - fix after breakdown, no early warning', isCorrect: true, points: 3, feedback: 'Good - identified reactive maintenance as root cause.' },
          { id: 'q1-c', text: 'Major equipment failure caused 3-day plant shutdown costing $2M', isCorrect: true, points: 3, feedback: 'Good - provided recent example of business impact.' },
          { id: 'q1-d', text: 'Maintenance team overwhelmed with reactive repairs, no time for preventive maintenance', isCorrect: true, points: 3, feedback: 'Good - identified operational constraint.' },
          { id: 'q1-e', text: 'Downtime is not a problem', isCorrect: false, points: 0, feedback: 'Wrong - $25M annual cost is critical.' },
          { id: 'q1-f', text: 'Equipment never fails', isCorrect: false, points: 0, feedback: 'Unrealistic - all equipment requires maintenance.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify downtime costs', 'Identify failure modes', 'Reactive vs predictive']
      },
      {
        question: 'What is your quality defect rate compared to industry benchmarks? What is the cost of quality issues?',
        purpose: 'Establish quality baseline',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Defect rate 2.8% vs. industry best 0.5%, costing $12M annually in scrap and rework', isCorrect: true, points: 4, feedback: 'Excellent - quantified quality gap and cost.' },
          { id: 'q2-b', text: 'Manual inspection misses 15% of defects, leading to customer returns ($3M annually)', isCorrect: true, points: 3, feedback: 'Good - identified inspection limitation.' },
          { id: 'q2-c', text: 'Lost $50M contract to competitor with better quality', isCorrect: true, points: 3, feedback: 'Good - connected quality to revenue loss.' },
          { id: 'q2-d', text: 'Customer audit identified gaps in real-time monitoring - must improve by Q3 2026', isCorrect: true, points: 3, feedback: 'Good - identified customer requirement.' },
          { id: 'q2-e', text: 'Quality is perfect', isCorrect: false, points: 0, feedback: 'Wrong - 2.8% defect rate is above industry best.' },
          { id: 'q2-f', text: 'Quality not important', isCorrect: false, points: 0, feedback: 'Wrong - $12M annual cost is critical.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Quantify quality gap', 'Manual inspection limits', 'Customer requirements']
      },
      {
        question: 'What is your current OEE and what limits it? What is world-class OEE in your industry?',
        purpose: 'Understand production efficiency gap',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Current OEE 65% vs. world-class 85% - 20 point gap represents significant capacity loss', isCorrect: true, points: 4, feedback: 'Excellent - quantified OEE gap.' },
          { id: 'q3-b', text: 'Primary limiters: unplanned downtime (8%), quality defects (2.8%), slow changeovers', isCorrect: true, points: 3, feedback: 'Good - identified specific OEE components.' },
          { id: 'q3-c', text: 'No real-time visibility into OEE across 8 plants - cannot identify best practices', isCorrect: true, points: 3, feedback: 'Good - identified data visibility gap.' },
          { id: 'q3-d', text: 'Improving OEE to 85% would increase capacity 30% without new equipment', isCorrect: true, points: 3, feedback: 'Good - quantified business value.' },
          { id: 'q3-e', text: 'OEE not relevant', isCorrect: false, points: 0, feedback: 'Wrong - OEE is standard efficiency metric.' },
          { id: 'q3-f', text: '65% OEE is world-class', isCorrect: false, points: 0, feedback: 'Wrong - world-class is 85%+.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['OEE = Availability × Performance × Quality', 'World-class is 85%+', 'Quantify capacity gain']
      },
      {
        question: 'How many plants do you have and what is your data management approach across sites?',
        purpose: 'Understand multi-site complexity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: '8 plants across 4 states, each operating independently with local data silos', isCorrect: true, points: 4, feedback: 'Excellent - identified multi-site complexity.' },
          { id: 'q4-b', text: 'Cannot compare performance across plants or identify best practices', isCorrect: true, points: 3, feedback: 'Good - identified business impact of silos.' },
          { id: 'q4-c', text: 'Mix of legacy SCADA, spreadsheets, manual tracking - no standardization', isCorrect: true, points: 3, feedback: 'Good - identified technical debt.' },
          { id: 'q4-d', text: 'Need centralized platform to aggregate data from all 8 plants', isCorrect: true, points: 3, feedback: 'Good - understood centralized architecture need.' },
          { id: 'q4-e', text: 'Only one plant', isCorrect: false, points: 0, feedback: 'Wrong - customer has 8 plants.' },
          { id: 'q4-f', text: 'Data management not important', isCorrect: false, points: 0, feedback: 'Wrong - centralized data is critical for AI.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Multi-site complexity', 'Data silos', 'Standardization needs']
      },
      {
        question: 'What equipment needs monitoring? How many sensors or data points?',
        purpose: 'Understand IoT scope',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Critical equipment: CNC machines, injection molding, stamping presses, robotic welders - 500+ machines across 8 plants', isCorrect: true, points: 4, feedback: 'Excellent - identified equipment types and scale.' },
          { id: 'q5-b', text: 'Monitor: vibration, temperature, pressure, current, speed, cycle times - 10,000+ data points per plant', isCorrect: true, points: 3, feedback: 'Good - identified sensor types and data volume.' },
          { id: 'q5-c', text: 'Legacy SCADA has limited connectivity, need edge devices for older equipment', isCorrect: true, points: 3, feedback: 'Good - identified brownfield integration challenge.' },
          { id: 'q5-d', text: 'Real-time monitoring required - sub-second latency for predictive alerts', isCorrect: true, points: 3, feedback: 'Good - understood real-time requirement.' },
          { id: 'q5-e', text: 'Only 5 machines', isCorrect: false, points: 0, feedback: 'Wrong - 500+ machines requires enterprise scale.' },
          { id: 'q5-f', text: 'No sensors needed', isCorrect: false, points: 0, feedback: 'Wrong - IoT sensors required for predictive maintenance.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Equipment types and quantity', 'Sensor types', 'Real-time requirements']
      },
      {
        question: 'Who are the key stakeholders and what are their concerns? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'VP Manufacturing Operations is executive sponsor, focused on reducing downtime and improving OEE', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about IT/OT security and data management', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, requires strong ROI with 24-month payback', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and ROI requirement.' },
          { id: 'q6-d', text: 'VP Quality is supporter, focused on defect reduction and customer satisfaction', isCorrect: true, points: 3, feedback: 'Good - identified quality stakeholder.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - VP Manufacturing is executive sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders is critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Executive sponsor', 'Budget authority', 'Technical and quality stakeholders']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any regulatory or customer deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '18-month implementation across 8 plants, board-mandated smart factory initiative', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and executive mandate.' },
          { id: 'q7-b', text: 'OEM customer demanding real-time quality data by Q3 2026 - risk losing $50M+ contracts', isCorrect: true, points: 3, feedback: 'Good - identified customer deadline.' },
          { id: 'q7-c', text: 'Losing market share to competitors with smart factories', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q7-d', text: 'Vendor selection in 2 months, phased rollout starting with pilot plant', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 18-month timeline with customer deadline.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and customer deadline create urgency.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Customer deadlines', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What is included?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$8M-$12M capital budget approved by board for smart factory initiative', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires 24-month payback and 300%+ three-year ROI', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Budget includes: IoT sensors, edge devices, AI platform, network, implementation, training', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-d', text: 'Business case: reduce downtime 70% ($17.5M), reduce defects 80% ($9.6M), improve OEE to 85% ($15M)', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $8M-$12M.' },
          { id: 'q8-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires 24-month payback.' }
        ],
        correctChoiceIds: ['q8-a', 'q8-b', 'q8-c', 'q8-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 11,
        hints: ['Budget approved', 'ROI requirements', 'Business case drivers']
      }
    ],
    expectedFindings: [
      '$25M annual downtime cost',
      'Quality defect rate 2.8% vs. 0.5% best',
      'OEE 65% vs. 85% world-class',
      '8 plants with data silos',
      '500+ machines need monitoring',
      'Board-mandated initiative',
      'Customer deadline Q3 2026',
      'Budget $8M-$12M approved'
    ],
    redFlags: [
      'Budget under $6M insufficient',
      'Timeline under 12 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 8 plants simultaneously'
    ],
    opportunities: [
      'Downtime reduction: $17.5M annually',
      'Quality improvement: $9.6M annually',
      'OEE improvement: $15M capacity gain',
      'Maintenance optimization: $3M annually',
      'Customer retention: $50M+ contracts'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'We cannot afford production disruption during IoT sensor installation. We cannot have downtime.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'very difficult',
        category: 'risk',
        customResponse: 'Production continuity is critical. IBM has zero-disruption deployment: (1) Edge devices connect without modifying production systems - no PLC changes, (2) Sensors installed during planned maintenance windows, (3) Phased rollout with pilot plant first, (4) Parallel run capability for validation, (5) Rollback at every phase. IBM has deployed IoT in 500+ plants with 99.8% success rate and zero unplanned disruptions.',
        responseChoices: [
          { id: 'obj1-a', text: 'Edge devices connect without modifying production systems - no PLC changes, no production interruption', isCorrect: true, points: 4, feedback: 'Excellent - addressed production continuity with non-invasive approach.' },
          { id: 'obj1-b', text: 'Sensors installed during planned maintenance windows - no additional downtime', isCorrect: true, points: 3, feedback: 'Good - leverage existing maintenance windows.' },
          { id: 'obj1-c', text: 'Phased rollout: pilot plant first, then scale - de-risks deployment', isCorrect: true, points: 3, feedback: 'Good - phased approach minimizes risk.' },
          { id: 'obj1-d', text: 'IBM track record: 500+ plants, 99.8% success, zero unplanned disruptions', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'Must shut down all production for 6 months', isCorrect: false, points: 0, feedback: 'Wrong - non-invasive deployment requires no shutdown.' },
          { id: 'obj1-f', text: 'Production disruption not a concern', isCorrect: false, points: 0, feedback: 'Wrong - production continuity is critical concern.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Acknowledged production continuity concern',
          'Explained non-invasive deployment',
          'Described phased rollout',
          'Provided IBM track record'
        ],
        hints: ['Non-invasive edge deployment', 'Planned maintenance windows', 'Phased rollout']
      },
      {
        objection: 'How do we ensure IT/OT security when connecting factory equipment to the network? We cannot risk cyberattacks.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'IT/OT security is paramount. IBM provides defense-in-depth: (1) Edge devices create secure DMZ between OT and IT networks, (2) Zero-trust architecture with encrypted communication, (3) Network segmentation isolates production systems, (4) IBM Maximo includes security monitoring and threat detection, (5) IEC 62443 compliance, (6) Regular security audits. IBM has secured 500+ manufacturing IoT deployments with zero breaches.',
        responseChoices: [
          { id: 'obj2-a', text: 'Edge devices create secure DMZ between OT and IT - production systems never directly exposed', isCorrect: true, points: 4, feedback: 'Excellent - addressed IT/OT security with proper segmentation.' },
          { id: 'obj2-b', text: 'Zero-trust architecture: encrypted communication, certificate-based authentication, network segmentation', isCorrect: true, points: 3, feedback: 'Good - explained comprehensive security architecture.' },
          { id: 'obj2-c', text: 'IBM Maximo includes security monitoring and threat detection, IEC 62443 compliance', isCorrect: true, points: 3, feedback: 'Good - highlighted platform security and compliance.' },
          { id: 'obj2-d', text: 'Track record: 500+ IoT deployments, zero security breaches, NIST framework, regular audits', isCorrect: true, points: 3, feedback: 'Good - provided security track record.' },
          { id: 'obj2-e', text: 'Connect all systems directly to internet', isCorrect: false, points: 0, feedback: 'Wrong - would create unacceptable security risk.' },
          { id: 'obj2-f', text: 'Security not important', isCorrect: false, points: 0, feedback: 'Wrong - IT/OT security is critical concern.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed IT/OT security',
          'Explained network segmentation',
          'Described zero-trust architecture',
          'Highlighted IEC 62443 compliance'
        ],
        hints: ['Edge DMZ between OT and IT', 'Zero-trust architecture', 'IEC 62443 compliance']
      },
      {
        objection: 'Our maintenance team is overwhelmed. How will they manage a new IoT system and AI platform?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'IBM Maximo REDUCES maintenance workload: (1) AI predicts failures 7-14 days in advance for planned maintenance, (2) Automated work order generation, (3) Mobile app with step-by-step procedures, (4) Captures tribal knowledge in AI models, (5) Comprehensive training and 24/7 support. Most manufacturers see 40% productivity improvement because technicians do planned maintenance instead of firefighting.',
        responseChoices: [
          { id: 'obj3-a', text: 'AI predicts failures 7-14 days in advance, enabling planned maintenance instead of emergency repairs', isCorrect: true, points: 4, feedback: 'Excellent - showed how predictive maintenance reduces workload.' },
          { id: 'obj3-b', text: 'Automated work order generation, mobile app with step-by-step procedures - reduces manual effort', isCorrect: true, points: 3, feedback: 'Good - explained automation features.' },
          { id: 'obj3-c', text: 'Captures tribal knowledge from experienced technicians in AI models before retirement', isCorrect: true, points: 3, feedback: 'Good - addressed aging workforce concern.' },
          { id: 'obj3-d', text: 'Comprehensive training and 24/7 support, 40% productivity improvement, temporary staff augmentation available', isCorrect: true, points: 3, feedback: 'Good - addressed training and support concerns.' },
          { id: 'obj3-e', text: 'Team must manually monitor all sensors 24/7', isCorrect: false, points: 0, feedback: 'Wrong - AI automates monitoring.' },
          { id: 'obj3-f', text: 'No training provided', isCorrect: false, points: 0, feedback: 'Wrong - comprehensive training included.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed resource constraints',
          'Explained how AI reduces workload',
          'Described automation features',
          'Highlighted training and support'
        ],
        hints: ['Predictive vs reactive', 'Automation reduces effort', 'Training included']
      },
      {
        objection: 'Your solution costs $10M. Can we start with a smaller pilot to prove ROI before committing to all 8 plants?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $1.5M for single plant (3 months), (2) Pilot typically shows 60-70% downtime reduction within 6 months, (3) Use pilot results to secure funding for remaining plants, (4) Phase 2-3: Scale to remaining plants ($8.5M) with proven ROI. Business case shows 18-month payback and 420% three-year ROI: $42M benefit vs. $10M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $1.5M pilot at single plant (3 months) to prove ROI before full commitment', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 60-70% downtime reduction and 50%+ defect reduction within 6 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment based on proven ROI', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 18-month payback, 420% three-year ROI ($42M benefit vs. $10M investment)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 8 plants immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
          { id: 'obj4-f', text: 'ROI not important', isCorrect: false, points: 0, feedback: 'Wrong - CFO requires strong ROI case.' }
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
        hints: ['Pilot plant approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we integrate IBM Maximo with our SAP ERP and legacy MES systems? We cannot replace these systems.',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Integration is a core strength of IBM Maximo: (1) Pre-built connectors for SAP ERP - synchronize work orders, inventory, purchasing bidirectionally, (2) Open APIs and industry standards (OPC-UA, MQTT) for MES integration, (3) Edge devices collect data without modifying existing systems, (4) IBM Maximo acts as data aggregation layer. IBM has integrated Maximo with SAP at 200+ manufacturing sites. Typical integration takes 2-3 months vs. 12+ months custom development.',
        responseChoices: [
          { id: 'obj5-a', text: 'Pre-built connectors for SAP ERP - synchronize work orders, inventory, purchasing bidirectionally, proven at 200+ sites', isCorrect: true, points: 4, feedback: 'Excellent - addressed SAP integration with proven connectors.' },
          { id: 'obj5-b', text: 'Open APIs and industry standards (OPC-UA, MQTT) for MES integration - no custom development', isCorrect: true, points: 3, feedback: 'Good - explained standards-based integration.' },
          { id: 'obj5-c', text: 'IBM Maximo acts as data aggregation layer - unifies data from SAP, MES, SCADA, IoT sensors', isCorrect: true, points: 3, feedback: 'Good - positioned Maximo as integration hub.' },
          { id: 'obj5-d', text: 'Phased integration: read-only first, then work orders, then full sync - 2-3 months vs. 12+ months custom', isCorrect: true, points: 3, feedback: 'Good - provided realistic timeline.' },
          { id: 'obj5-e', text: 'Must replace SAP and MES', isCorrect: false, points: 0, feedback: 'Wrong - Maximo integrates with existing systems.' },
          { id: 'obj5-f', text: 'Integration not possible', isCorrect: false, points: 0, feedback: 'Wrong - IBM has proven integration at 200+ sites.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed integration concerns',
          'Explained pre-built SAP connectors',
          'Described standards-based MES integration',
          'Positioned Maximo as data aggregation layer'
        ],
        hints: ['Pre-built SAP connectors', 'Standards-based integration', 'Phased approach']
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
          reason: 'High-performance edge computing for real-time IoT data processing, AI-powered predictive maintenance, and computer vision quality inspection',
          configuration: 'Edge servers at each of 8 plants for local processing. Centralized Power E1080 at headquarters for enterprise AI model training',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with IBM Maximo Application Suite',
          reason: 'AI-powered predictive maintenance platform with computer vision for quality inspection',
          configuration: 'Predictive maintenance AI models, computer vision quality inspection, anomaly detection, automated work order generation',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for IoT time-series data, AI models, quality images, and historical analytics',
          configuration: '200TB usable capacity for 8 plants, time-series database, image storage, AI model repository, immutable snapshots',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Edge tier: Power E1080 at each of 8 plants for local IoT processing and AI inference, (2) Aggregation tier: Centralized Power E1080 for enterprise AI training and cross-plant analytics, (3) Storage tier: FlashSystem 9500 for time-series data, quality images, and AI models. IBM Maximo provides predictive maintenance and asset management across all plants.',
      sizing: 'Edge: 8x Power E1080 (4-core each) for local processing. Central: 1x Power E1080 (16-core) for enterprise AI. Storage: 200TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-3): Pilot at single plant with 50 machines. Phase 2 (Months 4-9): Scale to 3 plants. Phase 3 (Months 10-18): Complete rollout to remaining 4 plants.'
    },
    pricing: {
      hardware: '$6M (9x Power E1080 + FlashSystem 9500)',
      software: '$2.5M (IBM Maximo, Watson Studio, 3-year licenses)',
      services: '$1.5M (IBM Expert Labs: implementation, integration, training)',
      support: '$300K/year (24x7 support with 4-hour response)',
      total: '$10M initial + $300K/year support',
      financing: 'IBM Flex financing available - $210K/month for 60 months',
      paymentTerms: 'Phased payment: $1.5M pilot, $4M Phase 2, $4.5M Phase 3'
    },
    businessCase: {
      costSavings: '$30.1M annually (downtime $17.5M, quality $9.6M, maintenance $3M)',
      productivityGains: '$15M annually (OEE improvement 65% to 85%)',
      riskReduction: 'Reduce equipment failures by 70%, improve quality from 2.8% to 0.5% defects, ensure customer compliance',
      roi: '18 months',
      paybackPeriod: '18 months',
      tco: '3-year TCO: $10M investment vs. $135M in benefits (downtime + quality + OEE) = $125M net benefit, 420% three-year ROI'
    },
    competitivePositioning: 'IBM Maximo is the leading asset management platform for manufacturing with 5,000+ deployments. Unlike generic IoT platforms, IBM provides manufacturing-specific AI models, proven SAP integration, and comprehensive security. Power E1080 delivers 3x better performance than x86 for AI workloads.',
    nextSteps: [
      'Schedule smart factory workshop with IBM Maximo experts',
      'Conduct pilot plant assessment and equipment inventory',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected plant'
    ],
    requiredElements: [
      'IBM Maximo Application Suite for predictive maintenance',
      'Power E1080 for edge computing and AI processing',
      'FlashSystem for IoT data storage',
      'Watson Studio for AI model development',
      'Edge devices for equipment connectivity',
      'Network infrastructure for plant connectivity',
      'SAP ERP integration',
      'Training and change management program'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified downtime costs ($25M annually)',
        'Identified quality defect gap (2.8% vs. 0.5%)',
        'Uncovered OEE gap (65% vs. 85%)',
        'Understood multi-site complexity (8 plants)',
        'Identified IoT scope (500+ machines)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($8M-$12M, 18 months)',
        'Assessed integration requirements (SAP, MES)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed production disruption with non-invasive deployment',
        'Handled IT/OT security with defense-in-depth architecture',
        'Addressed resource concerns with automation benefits',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed integration with pre-built SAP connectors'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as edge computing platform',
        'Included Watson Studio and Maximo for predictive maintenance',
        'Included FlashSystem for IoT data storage',
        'Addressed all pain points (downtime, quality, OEE)',
        'Proposed phased deployment with pilot',
        'Included SAP integration and security architecture'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified downtime reduction value ($17.5M annually)',
        'Quantified quality improvement value ($9.6M annually)',
        'Calculated OEE improvement value ($15M capacity gain)',
        'Calculated ROI (18-month payback, 420% three-year ROI)',
        'Positioned as strategic competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Smart factory IoT implementation',
      description: 'Understand IoT sensor deployment, edge computing architecture, and multi-site data aggregation for manufacturing',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI-powered predictive maintenance',
      description: 'Master predictive maintenance strategies, AI model development, and ROI quantification for equipment reliability',
      skillLevel: 'advanced'
    },
    {
      concept: 'Manufacturing OEE optimization',
      description: 'Analyze Overall Equipment Effectiveness gaps and design data-driven optimization strategies',
      skillLevel: 'intermediate'
    },
    {
      concept: 'IT/OT convergence and security',
      description: 'Design secure IT/OT architectures with network segmentation, edge computing, and IEC 62443 compliance',
      skillLevel: 'advanced'
    },
    {
      concept: 'Multi-site manufacturing data architecture',
      description: 'Architect centralized data platforms for multi-site manufacturing operations with local edge processing',
      skillLevel: 'advanced'
    }
  ],

  metadata: {
    tags: ['Smart factory', 'IoT', 'Predictive maintenance', 'Manufacturing', 'OEE', 'Quality', 'Edge computing'],
    skills: ['IoT architecture', 'Predictive maintenance', 'Manufacturing operations', 'IT/OT security', 'Multi-site deployment'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Manufacturing'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with quantified downtime cost ($25M) - this is the primary pain point',
    'Emphasize OEE gap (65% vs. 85%) as capacity opportunity without capital investment',
    'Address IT/OT security concerns proactively with edge DMZ architecture',
    'Recommend pilot approach to de-risk investment and prove ROI',
    'Highlight SAP integration with pre-built connectors - common concern',
    'Position Watson Studio as manufacturing-specific AI vs. generic IoT platforms',
    'Build compelling ROI: 18-month payback, 420% three-year ROI',
    'VP Manufacturing is champion - focus on downtime and OEE',
    'CIO is supporter but concerned about security - lead with edge DMZ',
    'CFO is neutral - build strong business case with pilot approach',
    'Differentiate with proven track record: 500+ manufacturing deployments',
    'Emphasize phased deployment to minimize risk and build confidence'
  ]
};

// Export all manufacturing scenarios

// Made with Bob


/**
 * Manufacturing Scenario 002: Supply Chain Optimization with AI
 * Electronics manufacturer needs supply chain visibility and demand forecasting
 */
export const manufacturingScenario002: TrainingScenario = {
  id: 'manufacturing-supply-chain-002',
  title: 'Electronics Manufacturer Needs Supply Chain Optimization and AI-Powered Demand Forecasting',
  description: 'A global electronics manufacturer with 12 factories and 500+ suppliers faces $40M annually in supply chain inefficiencies: excess inventory, stockouts, long lead times, and poor demand forecasting. They need real-time supply chain visibility, AI-powered demand forecasting, and supplier collaboration to reduce costs and improve customer service.',
  
  customerProfile: {
    company: 'TechComponents Global',
    industry: 'Manufacturing',
    size: 'Enterprise (5000+ employees)',
    revenue: '$3.2B annually',
    employees: 8500,
    location: 'Global (12 factories across 6 countries, 500+ suppliers)',
    currentInfrastructure: {
      servers: 'Mix of on-premises ERP and legacy supply chain systems',
      storage: 'Distributed storage across regions, no unified data lake',
      applications: ['SAP ERP', 'Legacy MRP', 'Excel-based forecasting', 'Email-based supplier communication'],
      operatingSystem: 'Windows Server, some Unix',
      virtualization: 'VMware at major sites',
      age: '8-12 years',
      endOfLife: 'Legacy MRP approaching end-of-support',
      issues: [
        'Excess inventory $180M (45 days vs. industry best 30 days)',
        'Stockouts cost $25M annually in lost sales',
        'Manual demand forecasting - 35% error rate',
        'No real-time supplier visibility',
        'Lead times 90 days vs. competitors 60 days',
        'Cannot respond to demand changes',
        'Bullwhip effect amplifies demand variability',
        'Supplier quality issues cost $15M annually'
      ]
    },
    keyStakeholders: [
      {
        name: 'Jennifer Wu',
        role: 'VP of IT Operations',
        priorities: ['Reduce inventory', 'Improve forecast accuracy', 'Supplier collaboration', 'Lead time reduction'],
        concerns: ['Implementation complexity', 'Supplier adoption', 'Data quality', 'ROI timeline'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Robert Kim',
        role: 'CIO',
        priorities: ['Digital supply chain', 'Data integration', 'AI/ML capabilities', 'Cloud migration'],
        concerns: ['SAP integration', 'Data governance', 'Security', 'Multi-region deployment'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Lisa Anderson',
        role: 'CFO',
        priorities: ['Working capital reduction', 'Cost savings', 'Cash flow improvement'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Change management'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$12M-$18M capital budget for supply chain transformation',
    timeline: '24-month global rollout across 12 factories and 500+ suppliers',
    decisionProcess: 'Board approved supply chain transformation. VP Supply Chain is executive sponsor. CFO requires 30% inventory reduction.'
  },
  
  businessContext: {
    challenges: [
      'Excess inventory $180M (45 days vs. 30 days best)',
      'Stockouts cost $25M annually',
      'Forecast error rate 35% vs. industry best 15%',
      'No real-time supplier visibility',
      'Lead times 90 days vs. competitors 60 days',
      'Bullwhip effect amplifies demand variability',
      'Supplier quality issues $15M annually',
      'Cannot respond to market changes'
    ],
    businessImpact: [
      '$40M annual supply chain inefficiency cost',
      '$180M excess working capital tied up',
      '$25M lost sales from stockouts',
      '$15M supplier quality cost',
      'Losing market share to agile competitors'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement AI-powered demand forecasting',
      'Deploy real-time supply chain visibility',
      'Enable supplier collaboration platform',
      'Reduce inventory from 45 to 30 days',
      'Improve forecast accuracy to 85%+',
      'Reduce lead times from 90 to 60 days'
    ],
    competitivePressure: 'Competitors with AI-powered supply chains responding faster to market changes. Customers demanding shorter lead times.',
    regulatoryRequirements: ['Conflict minerals reporting', 'REACH compliance', 'RoHS', 'Export controls'],
    recentEvents: [
      'Lost $50M contract due to long lead times',
      'Component shortage caused $8M production shutdown',
      'Customer penalty $5M for late deliveries',
      'Board mandated supply chain transformation'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is your current inventory level and how does it compare to industry benchmarks? What is the cost of excess inventory?',
        purpose: 'Quantify inventory opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: 'Excess inventory $180M (45 days) vs. industry best 30 days - represents $60M opportunity', isCorrect: true, points: 4, feedback: 'Excellent - quantified inventory reduction opportunity.' },
          { id: 'q1-b', text: 'Carrying cost 25% annually - excess inventory costs $45M per year in warehousing, obsolescence, financing', isCorrect: true, points: 3, feedback: 'Good - calculated carrying cost impact.' },
          { id: 'q1-c', text: 'Cannot reduce inventory due to poor forecast accuracy (35% error) and long lead times (90 days)', isCorrect: true, points: 3, feedback: 'Good - identified root causes.' },
          { id: 'q1-d', text: 'CFO mandated 30% inventory reduction ($54M) to improve cash flow', isCorrect: true, points: 3, feedback: 'Good - understood executive mandate.' },
          { id: 'q1-e', text: 'Inventory not a problem', isCorrect: false, points: 0, feedback: 'Wrong - $180M excess is significant.' },
          { id: 'q1-f', text: 'Inventory levels optimal', isCorrect: false, points: 0, feedback: 'Wrong - 45 days vs. 30 days best practice.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify excess inventory', 'Calculate carrying cost', 'Identify root causes']
      },
      {
        question: 'What is your demand forecast accuracy and what is the business impact of forecast errors?',
        purpose: 'Establish forecasting baseline',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Forecast error rate 35% vs. industry best 15% - causes both excess inventory and stockouts', isCorrect: true, points: 4, feedback: 'Excellent - quantified forecast accuracy gap.' },
          { id: 'q2-b', text: 'Manual Excel-based forecasting using historical averages - cannot detect trends or seasonality', isCorrect: true, points: 3, feedback: 'Good - identified manual process limitation.' },
          { id: 'q2-c', text: 'Stockouts cost $25M annually in lost sales - customers go to competitors', isCorrect: true, points: 3, feedback: 'Good - quantified stockout impact.' },
          { id: 'q2-d', text: 'Bullwhip effect amplifies demand variability - small changes cascade through supply chain', isCorrect: true, points: 3, feedback: 'Good - understood supply chain dynamics.' },
          { id: 'q2-e', text: 'Forecasting is perfect', isCorrect: false, points: 0, feedback: 'Wrong - 35% error rate is significant.' },
          { id: 'q2-f', text: 'Forecast accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - drives inventory and stockouts.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Quantify forecast error', 'Manual process limits', 'Bullwhip effect']
      },
      {
        question: 'What is your current lead time and how does it compare to competitors? What drives long lead times?',
        purpose: 'Understand lead time gap',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Lead times 90 days vs. competitors 60 days - losing contracts due to slow response', isCorrect: true, points: 4, feedback: 'Excellent - quantified competitive disadvantage.' },
          { id: 'q3-b', text: 'No real-time supplier visibility - cannot expedite or identify bottlenecks', isCorrect: true, points: 3, feedback: 'Good - identified visibility gap.' },
          { id: 'q3-c', text: 'Lost $50M contract because customer needed 60-day lead time', isCorrect: true, points: 3, feedback: 'Good - provided business impact example.' },
          { id: 'q3-d', text: 'Email-based supplier communication - slow, manual, error-prone', isCorrect: true, points: 3, feedback: 'Good - identified process inefficiency.' },
          { id: 'q3-e', text: 'Lead times not important', isCorrect: false, points: 0, feedback: 'Wrong - competitive disadvantage.' },
          { id: 'q3-f', text: '90 days is industry standard', isCorrect: false, points: 0, feedback: 'Wrong - competitors at 60 days.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Competitive lead time gap', 'Supplier visibility', 'Process inefficiency']
      },
      {
        question: 'How many factories and suppliers do you have? What is your data integration challenge?',
        purpose: 'Understand supply chain complexity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: '12 factories across 6 countries, 500+ suppliers - complex global supply chain', isCorrect: true, points: 4, feedback: 'Excellent - identified scale and complexity.' },
          { id: 'q4-b', text: 'Each factory uses different systems - no unified data, cannot see end-to-end supply chain', isCorrect: true, points: 3, feedback: 'Good - identified data silos.' },
          { id: 'q4-c', text: 'Suppliers use email and phone - no digital integration, manual data entry', isCorrect: true, points: 3, feedback: 'Good - identified supplier integration gap.' },
          { id: 'q4-d', text: 'Need centralized supply chain control tower with real-time visibility', isCorrect: true, points: 3, feedback: 'Good - understood solution requirement.' },
          { id: 'q4-e', text: 'Only one factory', isCorrect: false, points: 0, feedback: 'Wrong - 12 factories globally.' },
          { id: 'q4-f', text: 'Data integration not needed', isCorrect: false, points: 0, feedback: 'Wrong - critical for visibility.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Global scale', 'Data silos', 'Supplier integration']
      },
      {
        question: 'What AI or analytics capabilities do you currently have for demand forecasting and supply chain optimization?',
        purpose: 'Assess AI maturity',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: 'Manual Excel-based forecasting using historical averages - no AI, no machine learning', isCorrect: true, points: 4, feedback: 'Excellent - identified AI capability gap.' },
          { id: 'q5-b', text: 'Cannot detect trends, seasonality, or market signals - purely reactive', isCorrect: true, points: 3, feedback: 'Good - understood analytical limitations.' },
          { id: 'q5-c', text: 'No predictive analytics for supplier risk, quality issues, or disruptions', isCorrect: true, points: 3, feedback: 'Good - identified risk management gap.' },
          { id: 'q5-d', text: 'Need AI to analyze millions of data points: demand patterns, supplier performance, market signals, weather, events', isCorrect: true, points: 3, feedback: 'Good - understood AI value proposition.' },
          { id: 'q5-e', text: 'Already have advanced AI', isCorrect: false, points: 0, feedback: 'Wrong - using manual Excel forecasting.' },
          { id: 'q5-f', text: 'AI not needed', isCorrect: false, points: 0, feedback: 'Wrong - AI critical for forecast accuracy.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Manual forecasting', 'No predictive analytics', 'AI value']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'VP Supply Chain is executive sponsor, focused on inventory reduction and forecast accuracy', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'CIO is supporter, concerned about SAP integration and data governance', isCorrect: true, points: 3, feedback: 'Good - identified technical stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated 30% inventory reduction ($54M) to improve cash flow', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'VP Operations concerned about supplier adoption and change management', isCorrect: true, points: 3, feedback: 'Good - identified operational stakeholder.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - VP Supply Chain is sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Executive sponsor', 'Budget authority', 'CFO mandate']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any customer or board mandates?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '24-month global rollout across 12 factories and 500+ suppliers, board-mandated transformation', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Lost $50M contract due to long lead times - must improve competitiveness', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q7-c', text: 'CFO mandated 30% inventory reduction by end of fiscal year', isCorrect: true, points: 3, feedback: 'Good - identified financial mandate.' },
          { id: 'q7-d', text: 'Vendor selection in 3 months, phased rollout starting with pilot region', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 5+ years', isCorrect: false, points: 0, feedback: 'Wrong - 24-month timeline with board mandate.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - board mandate and competitive pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Competitive pressure', 'CFO mandate']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$12M-$18M capital budget approved by board for supply chain transformation', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires 24-month payback and 30% inventory reduction ($54M working capital)', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce inventory $54M, eliminate stockouts $25M, improve forecast accuracy, reduce lead times', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: AI platform, supply chain control tower, supplier portal, SAP integration, implementation', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
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
      '$180M excess inventory (45 days vs. 30 days)',
      'Forecast error 35% vs. 15% best',
      'Lead times 90 days vs. 60 days competitors',
      '12 factories, 500+ suppliers',
      'Manual Excel forecasting',
      'Board-mandated transformation',
      'CFO mandate: 30% inventory reduction',
      'Budget $12M-$18M approved'
    ],
    redFlags: [
      'Budget under $10M insufficient',
      'Timeline under 18 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 500 suppliers simultaneously'
    ],
    opportunities: [
      'Inventory reduction: $54M working capital',
      'Stockout elimination: $25M annually',
      'Forecast accuracy: 15% improvement',
      'Lead time reduction: 30 days',
      'Supplier quality: $15M annually'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we get 500+ suppliers to adopt a new collaboration platform? Many are small companies without IT resources.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'very difficult',
        category: 'strategy',
        customResponse: 'Supplier adoption is critical. IBM provides multi-tier approach: (1) Tier 1 suppliers (80% of spend): Full portal with real-time integration, (2) Tier 2-3 suppliers: Simple web interface, no IT required, (3) Mobile app for small suppliers, (4) Automated onboarding with training, (5) Supplier incentives: faster payment, preferred status. IBM has onboarded 10,000+ suppliers globally with 95% adoption rate within 6 months.',
        responseChoices: [
          { id: 'obj1-a', text: 'Multi-tier approach: Full portal for Tier 1 (80% spend), simple web for Tier 2-3, mobile for small suppliers', isCorrect: true, points: 4, feedback: 'Excellent - addressed supplier diversity with tiered approach.' },
          { id: 'obj1-b', text: 'No IT required for suppliers - simple web interface, automated onboarding, training videos', isCorrect: true, points: 3, feedback: 'Good - removed IT barrier.' },
          { id: 'obj1-c', text: 'Supplier incentives: faster payment (30 days vs. 60 days), preferred status, demand visibility', isCorrect: true, points: 3, feedback: 'Good - provided supplier value proposition.' },
          { id: 'obj1-d', text: 'IBM track record: 10,000+ suppliers onboarded, 95% adoption within 6 months', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'All suppliers must have advanced IT', isCorrect: false, points: 0, feedback: 'Wrong - simple web interface requires no IT.' },
          { id: 'obj1-f', text: 'Supplier adoption not important', isCorrect: false, points: 0, feedback: 'Wrong - supplier collaboration is critical.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed supplier diversity',
          'Explained tiered approach',
          'Removed IT barriers',
          'Provided supplier incentives'
        ],
        hints: ['Tiered approach', 'No IT required', 'Supplier incentives']
      },
      {
        objection: 'How do we integrate with our SAP ERP and legacy MRP systems across 12 factories in 6 countries?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'SAP integration is a core strength of IBM Supply Chain Intelligence Suite: (1) Pre-built SAP connectors for ERP, APO, IBP - bidirectional sync, (2) API-based integration for legacy MRP systems, (3) Multi-region deployment with local data residency, (4) Phased integration: read-only first, then transactional. IBM has integrated with SAP at 300+ global manufacturers. Typical integration 3-4 months vs. 12+ months custom development.',
        responseChoices: [
          { id: 'obj2-a', text: 'Pre-built SAP connectors for ERP, APO, IBP - bidirectional sync, proven at 300+ sites', isCorrect: true, points: 4, feedback: 'Excellent - addressed SAP integration with proven connectors.' },
          { id: 'obj2-b', text: 'API-based integration for legacy MRP - no custom development, standards-based', isCorrect: true, points: 3, feedback: 'Good - explained legacy system integration.' },
          { id: 'obj2-c', text: 'Multi-region deployment with local data residency for compliance (GDPR, data sovereignty)', isCorrect: true, points: 3, feedback: 'Good - addressed global deployment concerns.' },
          { id: 'obj2-d', text: 'Phased integration: read-only first, then transactional - 3-4 months vs. 12+ months custom', isCorrect: true, points: 3, feedback: 'Good - provided realistic timeline.' },
          { id: 'obj2-e', text: 'Must replace SAP', isCorrect: false, points: 0, feedback: 'Wrong - IBM integrates with SAP.' },
          { id: 'obj2-f', text: 'Integration not possible', isCorrect: false, points: 0, feedback: 'Wrong - IBM has 300+ SAP integrations.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed SAP integration',
          'Explained pre-built connectors',
          'Addressed multi-region deployment',
          'Provided realistic timeline'
        ],
        hints: ['Pre-built SAP connectors', 'Multi-region deployment', 'Phased integration']
      },
      {
        objection: 'How accurate is AI-powered demand forecasting? Our business is complex with many variables.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'performance',
        customResponse: 'IBM Watson Supply Chain AI delivers industry-leading forecast accuracy: (1) Analyzes millions of data points: historical demand, market signals, weather, events, social media, (2) Machine learning adapts to your business patterns, (3) Typical improvement: 35% error to 15% error (57% improvement), (4) Ensemble models combine multiple algorithms, (5) Explainable AI shows forecast drivers. IBM customers average 50%+ forecast accuracy improvement within 6 months.',
        responseChoices: [
          { id: 'obj3-a', text: 'Analyzes millions of data points: demand, market signals, weather, events, social media - far beyond Excel', isCorrect: true, points: 4, feedback: 'Excellent - explained AI analytical power.' },
          { id: 'obj3-b', text: 'Machine learning adapts to your patterns - improves over time as it learns your business', isCorrect: true, points: 3, feedback: 'Good - explained adaptive learning.' },
          { id: 'obj3-c', text: 'Typical improvement: 35% error to 15% error (57% improvement) - proven results', isCorrect: true, points: 3, feedback: 'Good - quantified expected improvement.' },
          { id: 'obj3-d', text: 'Explainable AI shows forecast drivers - not a black box, builds trust', isCorrect: true, points: 3, feedback: 'Good - addressed transparency concern.' },
          { id: 'obj3-e', text: 'AI cannot handle complexity', isCorrect: false, points: 0, feedback: 'Wrong - AI excels at complex patterns.' },
          { id: 'obj3-f', text: 'Forecast accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - drives inventory and stockouts.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
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
        objection: 'Your solution costs $15M. Can we start with a pilot region to prove ROI before global rollout?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $2.5M for single region (2 factories, 100 suppliers, 6 months), (2) Pilot typically shows 25-30% inventory reduction and 40%+ forecast improvement, (3) Use pilot results to secure funding for global rollout, (4) Phase 2-3: Scale to remaining regions ($12.5M) with proven ROI. Business case shows 20-month payback and $79M three-year benefit vs. $15M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $2.5M pilot in single region (2 factories, 100 suppliers) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 25-30% inventory reduction and 40%+ forecast improvement within 6 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment based on proven ROI', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 20-month payback, $79M three-year benefit vs. $15M investment (427% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy globally immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot region approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we ensure data quality when integrating data from 12 factories and 500+ suppliers?',
        stakeholder: 'CIO',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Data quality is foundational. IBM provides comprehensive data management: (1) Automated data validation and cleansing at ingestion, (2) Master data management for products, suppliers, locations, (3) Data quality dashboards with issue tracking, (4) AI-powered anomaly detection identifies bad data, (5) Supplier data validation with feedback loop. IBM Supply Chain Intelligence Suite includes built-in data quality tools. Typical data quality improvement: 60% to 95%+ within 3 months.',
        responseChoices: [
          { id: 'obj5-a', text: 'Automated data validation and cleansing at ingestion - catches errors before they propagate', isCorrect: true, points: 4, feedback: 'Excellent - addressed data quality proactively.' },
          { id: 'obj5-b', text: 'Master data management for products, suppliers, locations - single source of truth', isCorrect: true, points: 3, feedback: 'Good - explained MDM approach.' },
          { id: 'obj5-c', text: 'AI-powered anomaly detection identifies bad data - learns normal patterns, flags outliers', isCorrect: true, points: 3, feedback: 'Good - highlighted AI data quality capabilities.' },
          { id: 'obj5-d', text: 'Data quality dashboards with issue tracking - continuous monitoring and improvement', isCorrect: true, points: 3, feedback: 'Good - described ongoing data governance.' },
          { id: 'obj5-e', text: 'Data quality not important', isCorrect: false, points: 0, feedback: 'Wrong - data quality is foundational.' },
          { id: 'obj5-f', text: 'Cannot ensure data quality', isCorrect: false, points: 0, feedback: 'Wrong - IBM provides comprehensive data management.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed data quality concerns',
          'Explained automated validation',
          'Described master data management',
          'Highlighted AI anomaly detection'
        ],
        hints: ['Automated validation', 'Master data management', 'AI anomaly detection']
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
          reason: 'High-performance computing for AI-powered demand forecasting, supply chain optimization, and real-time analytics across 12 factories',
          configuration: 'Centralized Power E1080 for enterprise AI and supply chain control tower. Regional servers for local processing',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Supply Chain Intelligence Suite',
          reason: 'AI-powered demand forecasting, supply chain optimization, supplier risk management, and predictive analytics',
          configuration: 'Demand forecasting AI, supply chain control tower, supplier collaboration portal, risk analytics, inventory optimization',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for supply chain data lake, AI models, and real-time analytics',
          configuration: '500TB usable capacity for 12 factories and 500+ suppliers, time-series data, AI models, master data, analytics',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for enterprise AI, supply chain control tower, and global analytics, (2) Regional tier: Regional servers for local processing and data residency, (3) Storage tier: FlashSystem 9500 for supply chain data lake. IBM Supply Chain Intelligence Suite provides demand forecasting, inventory optimization, and supplier collaboration.',
      sizing: 'Central: 1x Power E1080 (32-core) for enterprise AI. Regional: 3x Power E1080 (8-core each) for regional processing. Storage: 500TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-6): Pilot in single region (2 factories, 100 suppliers). Phase 2 (Months 7-15): Scale to 3 regions. Phase 3 (Months 16-24): Complete global rollout.'
    },
    pricing: {
      hardware: '$8M (4x Power E1080 + FlashSystem 9500)',
      software: '$4.5M (IBM Supply Chain Intelligence Suite, Watson Studio, 3-year licenses)',
      services: '$2.5M (IBM Expert Labs: implementation, SAP integration, supplier onboarding, training)',
      support: '$400K/year (24x7 support with 4-hour response)',
      total: '$15M initial + $400K/year support',
      financing: 'IBM Flex financing available - $315K/month for 60 months',
      paymentTerms: 'Phased payment: $2.5M pilot, $6M Phase 2, $6.5M Phase 3'
    },
    businessCase: {
      costSavings: '$79M annually (inventory $54M, stockouts $25M)',
      productivityGains: '$15M annually (lead time reduction, supplier quality)',
      riskReduction: 'Reduce inventory 30%, improve forecast accuracy from 35% to 15% error, reduce lead times from 90 to 60 days',
      roi: '20 months',
      paybackPeriod: '20 months',
      tco: '3-year TCO: $15M investment vs. $282M in benefits (inventory + stockouts + productivity) = $267M net benefit, 427% three-year ROI'
    },
    competitivePositioning: 'IBM Supply Chain Intelligence Suite is the leading AI-powered supply chain platform with 1,000+ deployments. Unlike generic supply chain tools, IBM provides manufacturing-specific AI models, proven SAP integration, and global supplier network. Power E1080 delivers 3x better performance than x86 for AI workloads.',
    nextSteps: [
      'Schedule supply chain transformation workshop with IBM experts',
      'Conduct pilot region assessment and supplier analysis',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation in selected region'
    ],
    requiredElements: [
      'IBM Supply Chain Intelligence Suite for AI forecasting',
      'Power E1080 for AI processing and analytics',
      'FlashSystem for supply chain data lake',
      'Watson Studio for AI model development',
      'Supplier collaboration portal',
      'SAP ERP integration',
      'Master data management',
      'Training and change management program'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified inventory opportunity ($180M, 45 days vs. 30 days)',
        'Identified forecast accuracy gap (35% vs. 15%)',
        'Uncovered lead time gap (90 days vs. 60 days)',
        'Understood supply chain complexity (12 factories, 500+ suppliers)',
        'Assessed AI maturity (manual Excel forecasting)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($12M-$18M, 24 months)',
        'Identified CFO mandate (30% inventory reduction)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed supplier adoption with tiered approach',
        'Handled SAP integration with pre-built connectors',
        'Addressed AI accuracy with proven results',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed data quality with automated validation'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as AI platform',
        'Included Supply Chain Intelligence Suite for forecasting',
        'Included FlashSystem for data lake',
        'Addressed all pain points (inventory, forecast, lead time)',
        'Proposed phased deployment with pilot',
        'Included SAP integration and supplier portal'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified inventory reduction value ($54M)',
        'Quantified stockout elimination value ($25M)',
        'Calculated forecast accuracy improvement (35% to 15%)',
        'Calculated ROI (20-month payback, 427% three-year ROI)',
        'Positioned as strategic competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'AI-powered demand forecasting',
      description: 'Master AI-based demand forecasting techniques, machine learning models, and forecast accuracy improvement strategies',
      skillLevel: 'advanced'
    },
    {
      concept: 'Supply chain optimization',
      description: 'Understand inventory optimization, lead time reduction, and supply chain visibility strategies',
      skillLevel: 'advanced'
    },
    {
      concept: 'Supplier collaboration platforms',
      description: 'Design supplier collaboration portals with tiered approach for diverse supplier base',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Global supply chain architecture',
      description: 'Architect multi-region supply chain platforms with local data residency and SAP integration',
      skillLevel: 'advanced'
    },
    {
      concept: 'Supply chain data management',
      description: 'Implement master data management, data quality, and supply chain data lakes',
      skillLevel: 'advanced'
    }
  ],

  metadata: {
    tags: ['Supply chain', 'AI forecasting', 'Inventory optimization', 'Manufacturing', 'Supplier collaboration', 'SAP integration'],
    skills: ['Demand forecasting', 'Supply chain optimization', 'AI/ML', 'Supplier management', 'Global deployment'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Manufacturing'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with inventory opportunity ($180M, 45 days vs. 30 days) - this is the primary pain point',
    'Emphasize forecast accuracy gap (35% vs. 15%) as root cause of inventory and stockouts',
    'Address supplier adoption concerns proactively with tiered approach',
    'Recommend pilot approach to de-risk investment and prove ROI',
    'Highlight SAP integration with pre-built connectors - common concern',
    'Position Watson as manufacturing-specific AI vs. generic forecasting tools',
    'Build compelling ROI: 20-month payback, 427% three-year ROI, $54M inventory reduction',
    'VP Supply Chain is champion - focus on inventory and forecast accuracy',
    'CIO is supporter but concerned about integration - lead with SAP connectors',
    'CFO is neutral - build strong business case with 30% inventory reduction mandate',
    'Differentiate with proven track record: 1,000+ supply chain deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address data quality concerns with automated validation and MDM'
  ]
};
/**
 * Manufacturing Scenario 003: Quality Management with Computer Vision
 * Automotive parts manufacturer reducing defects with AI-powered visual inspection
 */
export const manufacturingScenario003: TrainingScenario = {
  id: 'manufacturing-quality-vision-003',
  title: 'Automotive Parts Manufacturer Needs AI-Powered Visual Inspection to Reduce Defects',
  description: 'A Tier 1 automotive parts manufacturer faces $15M annually in warranty claims and customer returns due to quality defects that manual inspection misses. They need an AI-powered computer vision system to automate visual inspection, detect micro-defects, and achieve 99.9% quality with zero-defect manufacturing.',
  
  customerProfile: {
    company: 'Precision Auto Components',
    industry: 'Manufacturing',
    size: 'Large (1000-5000 employees)',
    revenue: '$600M annually',
    employees: 3200,
    location: 'Multi-site (5 plants across North America)',
    currentInfrastructure: {
      servers: 'On-premises servers at each plant',
      storage: 'Limited storage, no centralized data lake',
      applications: ['Manual visual inspection', 'Basic quality management system', 'No AI or computer vision', 'Paper-based defect tracking'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '10-12 years',
      endOfLife: 'Infrastructure approaching capacity',
      issues: [
        '$15M annually in warranty claims and returns',
        'Manual inspection misses 5-8% of defects',
        'Inconsistent quality across shifts and inspectors',
        'Cannot detect micro-defects (scratches, cracks, surface defects)',
        'Slow inspection process (bottleneck)',
        'No root cause analysis or defect tracking',
        'Customer (OEM) threatening to switch suppliers',
        'Zero-defect manufacturing mandate from customers'
      ]
    },
    keyStakeholders: [
      {
        name: 'Michael Chen',
        role: 'CTO',
        priorities: ['Zero-defect manufacturing', 'Customer satisfaction', 'Warranty reduction', 'Quality consistency'],
        concerns: ['AI accuracy', 'False positives', 'Integration with production', 'Inspector resistance'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Sarah Johnson',
        role: 'VP of IT Operations',
        priorities: ['Production throughput', 'Efficiency', 'Cost reduction', 'Automation'],
        concerns: ['Production disruption', 'Implementation timeline', 'Training', 'ROI'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'David Martinez',
        role: 'CFO',
        priorities: ['Warranty cost reduction', 'ROI', 'Capital efficiency', 'Profitability'],
        concerns: ['Capital investment', 'Payback period', 'Operating costs', 'Risk'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$5M-$8M capital budget for AI-powered quality system',
    timeline: '9-month implementation across 5 plants',
    decisionProcess: 'Board approved zero-defect initiative. Chief Quality Officer is executive sponsor. CFO requires 50% warranty reduction.'
  },
  
  businessContext: {
    challenges: [
      '$15M annually in warranty claims',
      'Manual inspection misses 5-8% of defects',
      'Inconsistent quality across shifts',
      'Cannot detect micro-defects',
      'Slow inspection (bottleneck)',
      'No root cause analysis',
      'Customer threatening to switch',
      'Zero-defect mandate from OEMs'
    ],
    businessImpact: [
      '$15M annual warranty costs',
      '$5M from customer returns',
      '$3M from rework and scrap',
      'Losing market share to competitors',
      'Customer satisfaction declining'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement AI-powered visual inspection',
      'Achieve 99.9% quality (zero-defect)',
      'Reduce warranty claims by 50%',
      'Automate 100% of visual inspection',
      'Real-time defect detection and root cause analysis',
      'Improve customer satisfaction and retention'
    ],
    competitivePressure: 'Competitors deploying AI quality systems. OEM customers demanding zero-defect. Risk of losing contracts.',
    regulatoryRequirements: ['ISO 9001', 'IATF 16949 (automotive quality)', 'Customer quality requirements', 'Traceability'],
    recentEvents: [
      'Major customer issued quality warning',
      'Lost $5M contract to competitor with AI quality',
      'Board mandated zero-defect initiative',
      'Warranty claims increased 20% year-over-year'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of quality defects? How much are warranty claims and returns costing you?',
        purpose: 'Quantify quality cost',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: '$15M annually in warranty claims and customer returns - 2.5% of revenue', isCorrect: true, points: 4, feedback: 'Excellent - quantified warranty cost impact.' },
          { id: 'q1-b', text: 'Manual inspection misses 5-8% of defects - leads to customer complaints and returns', isCorrect: true, points: 3, feedback: 'Good - identified inspection gap.' },
          { id: 'q1-c', text: 'Lost $5M contract to competitor with AI quality system - customers demanding zero-defect', isCorrect: true, points: 3, feedback: 'Good - identified competitive threat.' },
          { id: 'q1-d', text: 'Major OEM customer issued quality warning - threatening to switch suppliers', isCorrect: true, points: 3, feedback: 'Good - identified customer risk.' },
          { id: 'q1-e', text: 'No quality issues', isCorrect: false, points: 0, feedback: 'Wrong - $15M annual warranty cost is significant.' },
          { id: 'q1-f', text: 'Quality not important', isCorrect: false, points: 0, feedback: 'Wrong - quality is critical in automotive.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify warranty costs', 'Inspection gap', 'Customer risk']
      },
      {
        question: 'What types of defects are you trying to detect? What does manual inspection miss?',
        purpose: 'Identify defect types and inspection gaps',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Micro-defects: scratches, cracks, surface defects, dimensional variations - too small for human eye', isCorrect: true, points: 4, feedback: 'Excellent - identified micro-defect challenge.' },
          { id: 'q2-b', text: 'Inconsistent quality across shifts and inspectors - human fatigue and subjectivity', isCorrect: true, points: 3, feedback: 'Good - identified consistency issue.' },
          { id: 'q2-c', text: 'Complex parts with multiple inspection points - manual inspection too slow and error-prone', isCorrect: true, points: 3, feedback: 'Good - understood complexity challenge.' },
          { id: 'q2-d', text: 'Need 100% inspection at production speed - manual inspection is bottleneck', isCorrect: true, points: 3, feedback: 'Good - identified throughput requirement.' },
          { id: 'q2-e', text: 'Only need to detect large defects', isCorrect: false, points: 0, feedback: 'Wrong - micro-defects are the challenge.' },
          { id: 'q2-f', text: 'Manual inspection is perfect', isCorrect: false, points: 0, feedback: 'Wrong - misses 5-8% of defects.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Micro-defects', 'Consistency', 'Throughput']
      },
      {
        question: 'What is your current inspection process? Where are the bottlenecks?',
        purpose: 'Understand current process',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Manual visual inspection at end of line - inspectors use magnifying glass, slow and inconsistent', isCorrect: true, points: 4, feedback: 'Excellent - identified manual process limitations.' },
          { id: 'q3-b', text: 'Inspection is production bottleneck - can only inspect 60% of parts, rest go uninspected', isCorrect: true, points: 3, feedback: 'Good - quantified bottleneck impact.' },
          { id: 'q3-c', text: 'No defect tracking or root cause analysis - cannot identify patterns or improve process', isCorrect: true, points: 3, feedback: 'Good - identified analytics gap.' },
          { id: 'q3-d', text: 'Paper-based defect logs - no real-time visibility or traceability', isCorrect: true, points: 3, feedback: 'Good - identified data management issue.' },
          { id: 'q3-e', text: 'Inspection is fully automated', isCorrect: false, points: 0, feedback: 'Wrong - currently manual inspection.' },
          { id: 'q3-f', text: 'No bottlenecks', isCorrect: false, points: 0, feedback: 'Wrong - inspection is major bottleneck.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Manual process', 'Bottleneck', 'No analytics']
      },
      {
        question: 'What are your zero-defect requirements? What quality level do customers demand?',
        purpose: 'Understand quality targets',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'OEM customers mandate zero-defect manufacturing - 99.9% quality or lose contracts', isCorrect: true, points: 4, feedback: 'Excellent - identified zero-defect mandate.' },
          { id: 'q4-b', text: 'IATF 16949 automotive quality standard requires 100% inspection and traceability', isCorrect: true, points: 3, feedback: 'Good - identified regulatory requirement.' },
          { id: 'q4-c', text: 'Need real-time defect detection - cannot ship defective parts to customers', isCorrect: true, points: 3, feedback: 'Good - understood real-time requirement.' },
          { id: 'q4-d', text: 'Must reduce warranty claims by 50% to meet profitability targets', isCorrect: true, points: 3, feedback: 'Good - quantified improvement target.' },
          { id: 'q4-e', text: 'No quality requirements', isCorrect: false, points: 0, feedback: 'Wrong - zero-defect is mandated.' },
          { id: 'q4-f', text: 'Current quality is acceptable', isCorrect: false, points: 0, feedback: 'Wrong - customers demanding improvement.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Zero-defect mandate', 'IATF 16949', '50% warranty reduction']
      },
      {
        question: 'What is your production environment? How many inspection points do you need?',
        purpose: 'Assess deployment scope',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: '5 plants across North America, 20 production lines, need 50+ inspection stations', isCorrect: true, points: 4, feedback: 'Excellent - quantified deployment scope.' },
          { id: 'q5-b', text: 'High-speed production - need inspection at line speed (60 parts/minute)', isCorrect: true, points: 3, feedback: 'Good - identified throughput requirement.' },
          { id: 'q5-c', text: 'Harsh factory environment - dust, vibration, temperature variations, need ruggedized cameras', isCorrect: true, points: 3, feedback: 'Good - understood environmental constraints.' },
          { id: 'q5-d', text: 'Multiple part types and sizes - need flexible vision system that can adapt', isCorrect: true, points: 3, feedback: 'Good - identified flexibility requirement.' },
          { id: 'q5-e', text: 'Only need 1-2 inspection points', isCorrect: false, points: 0, feedback: 'Wrong - need 50+ stations across 5 plants.' },
          { id: 'q5-f', text: 'Low-speed production', isCorrect: false, points: 0, feedback: 'Wrong - high-speed production at 60 parts/minute.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['Multi-site deployment', 'High-speed production', 'Harsh environment']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'Chief Quality Officer is executive sponsor, focused on zero-defect and warranty reduction', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'VP Operations is supporter, concerned about production disruption and throughput', isCorrect: true, points: 3, feedback: 'Good - identified operations stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated 50% warranty reduction and strong ROI', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Quality inspectors concerned about job security - need change management', isCorrect: true, points: 3, feedback: 'Good - identified change management need.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - Chief Quality Officer is sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Chief Quality Officer sponsor', 'CFO budget authority', 'Change management']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any customer or regulatory deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '9-month implementation across 5 plants, board-mandated zero-defect initiative', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'Major OEM customer quality audit in 6 months - must show improvement or lose contract', isCorrect: true, points: 3, feedback: 'Good - identified customer deadline.' },
          { id: 'q7-c', text: 'Competitors deploying AI quality - losing market share and contracts', isCorrect: true, points: 3, feedback: 'Good - identified competitive pressure.' },
          { id: 'q7-d', text: 'Vendor selection in 4 weeks, phased rollout starting with pilot line', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 3+ years', isCorrect: false, points: 0, feedback: 'Wrong - 9-month timeline with board mandate.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - customer audit and competitive pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Customer audit', 'Competitive pressure']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$5M-$8M capital budget approved by board for AI quality system', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires 50% warranty reduction and 18-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce warranty $7.5M, eliminate rework $3M, retain customers $20M+', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: vision hardware, AI software, integration, training, support', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
          { id: 'q8-e', text: 'Budget unlimited', isCorrect: false, points: 0, feedback: 'Unrealistic - budget is $5M-$8M.' },
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
      '$15M annual warranty costs',
      'Manual inspection misses 5-8% defects',
      'Zero-defect mandate from OEMs',
      'Inspection bottleneck',
      'Customer threatening to switch',
      'Need 50+ inspection stations',
      'Budget $5M-$8M approved',
      'Customer audit in 6 months'
    ],
    redFlags: [
      'Budget under $4M insufficient',
      'Timeline under 6 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 5 plants simultaneously'
    ],
    opportunities: [
      'Reduce warranty $7.5M annually',
      'Eliminate rework $3M',
      'Retain $20M+ customer contracts',
      'Improve quality to 99.9%',
      'Competitive advantage'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How accurate is AI vision? We cannot afford false positives that stop production or false negatives that miss defects.',
        stakeholder: 'CTO',
        difficulty: 'very difficult',
        category: 'technical',
        customResponse: 'AI accuracy is critical. IBM computer vision achieves 99.9% accuracy: (1) Deep learning models trained on millions of defect images, (2) 99.9% defect detection rate (better than human 92-95%), (3) <0.1% false positive rate (minimizes production disruption), (4) Continuous learning - model improves over time, (5) Human-in-the-loop for edge cases. IBM has deployed vision systems at 500+ manufacturers with proven accuracy.',
        responseChoices: [
          { id: 'obj1-a', text: '99.9% defect detection rate - better than human inspection (92-95%), proven in automotive manufacturing', isCorrect: true, points: 4, feedback: 'Excellent - quantified accuracy advantage.' },
          { id: 'obj1-b', text: '<0.1% false positive rate - minimizes production disruption, only flags true defects', isCorrect: true, points: 3, feedback: 'Good - addressed false positive concern.' },
          { id: 'obj1-c', text: 'Deep learning trained on millions of defect images - detects micro-defects humans miss', isCorrect: true, points: 3, feedback: 'Good - explained AI capability.' },
          { id: 'obj1-d', text: 'Track record: 500+ manufacturing deployments, 99.9% accuracy validated by customers', isCorrect: true, points: 3, feedback: 'Good - provided credible track record.' },
          { id: 'obj1-e', text: 'AI is not accurate', isCorrect: false, points: 0, feedback: 'Wrong - 99.9% accuracy proven.' },
          { id: 'obj1-f', text: 'Accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - accuracy is critical.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Quantified accuracy',
          'Addressed false positives',
          'Explained AI capability',
          'Provided track record'
        ],
        hints: ['99.9% accuracy', 'Low false positives', 'Proven track record']
      },
      {
        objection: 'How do we integrate vision inspection with our production lines without disrupting operations?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'difficult',
        category: 'technical',
        customResponse: 'Production integration is critical. IBM provides seamless integration: (1) Inline inspection at line speed (60+ parts/minute), (2) Plug-and-play cameras and lighting - minimal production disruption, (3) Integration with existing MES and quality systems, (4) Phased rollout - pilot line first, then scale, (5) 24/7 support during implementation. IBM has integrated vision systems at 500+ production lines with <1 day downtime per line.',
        responseChoices: [
          { id: 'obj2-a', text: 'Inline inspection at line speed (60+ parts/minute) - no production slowdown', isCorrect: true, points: 4, feedback: 'Excellent - addressed throughput concern.' },
          { id: 'obj2-b', text: 'Plug-and-play cameras and lighting - minimal production disruption, <1 day downtime per line', isCorrect: true, points: 3, feedback: 'Good - quantified disruption.' },
          { id: 'obj2-c', text: 'Phased rollout: pilot line first (4 weeks), validate, then scale to remaining lines', isCorrect: true, points: 3, feedback: 'Good - explained phased approach.' },
          { id: 'obj2-d', text: 'Track record: 500+ production line integrations, <1 day downtime per line', isCorrect: true, points: 3, feedback: 'Good - provided integration track record.' },
          { id: 'obj2-e', text: 'Requires weeks of downtime', isCorrect: false, points: 0, feedback: 'Wrong - <1 day downtime per line.' },
          { id: 'obj2-f', text: 'Integration not possible', isCorrect: false, points: 0, feedback: 'Wrong - proven integration approach.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed throughput',
          'Quantified downtime',
          'Explained phased rollout',
          'Provided integration track record'
        ],
        hints: ['Line speed inspection', 'Minimal downtime', 'Phased rollout']
      },
      {
        objection: 'What about our quality inspectors? Will they lose their jobs to AI?',
        stakeholder: 'CTO',
        difficulty: 'common',
        category: 'skills',
        customResponse: 'Inspector roles evolve, not eliminated. IBM provides workforce transition: (1) Inspectors become quality analysts - monitor AI, investigate root causes, (2) Higher-value work - focus on process improvement, not repetitive inspection, (3) Training program - upskill inspectors on AI system operation, (4) Improved job satisfaction - less tedious work, more problem-solving, (5) Headcount redeployed to quality engineering. IBM has transitioned 10,000+ inspectors to quality analyst roles.',
        responseChoices: [
          { id: 'obj3-a', text: 'Inspectors become quality analysts - monitor AI, investigate root causes, higher-value work', isCorrect: true, points: 4, feedback: 'Excellent - addressed role evolution.' },
          { id: 'obj3-b', text: 'Training program - upskill inspectors on AI operation, data analysis, problem-solving', isCorrect: true, points: 3, feedback: 'Good - explained training approach.' },
          { id: 'obj3-c', text: 'Improved job satisfaction - less tedious inspection, more strategic quality work', isCorrect: true, points: 3, feedback: 'Good - highlighted employee benefits.' },
          { id: 'obj3-d', text: 'Track record: 10,000+ inspectors transitioned to quality analyst roles successfully', isCorrect: true, points: 3, feedback: 'Good - provided workforce transition track record.' },
          { id: 'obj3-e', text: 'All inspectors will be laid off', isCorrect: false, points: 0, feedback: 'Wrong - roles evolve to quality analysts.' },
          { id: 'obj3-f', text: 'Workforce not important', isCorrect: false, points: 0, feedback: 'Wrong - workforce transition is critical.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed role evolution',
          'Explained training',
          'Highlighted employee benefits',
          'Provided transition track record'
        ],
        hints: ['Quality analyst roles', 'Training program', 'Higher-value work']
      },
      {
        objection: 'Your solution costs $6M. Can we start with a pilot line to prove ROI before rolling out to all 20 lines?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $400K for single line (4 weeks), (2) Pilot typically shows 95% defect reduction and 20% throughput increase, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining lines ($5.6M) with proven ROI. Business case shows 14-month payback and $40M three-year benefit vs. $6M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $400K pilot on single line (4 weeks) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 95% defect reduction and 20% throughput increase within 4 weeks', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 14-month payback, $40M three-year benefit vs. $6M investment (567% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 20 lines immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot line approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we handle different part types and sizes? Do we need separate AI models for each part?',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Flexibility is built-in. IBM provides adaptive vision system: (1) Single AI model handles multiple part types - transfer learning, (2) Quick changeover - <5 minutes to switch between parts, (3) Automatic part recognition and inspection recipe selection, (4) Easy to add new parts - train model with 100-200 images, (5) Centralized model management across all plants. IBM vision systems handle 50+ part types per line.',
        responseChoices: [
          { id: 'obj5-a', text: 'Single AI model handles multiple part types using transfer learning - no separate models needed', isCorrect: true, points: 4, feedback: 'Excellent - addressed flexibility comprehensively.' },
          { id: 'obj5-b', text: 'Quick changeover (<5 minutes) - automatic part recognition and inspection recipe selection', isCorrect: true, points: 3, feedback: 'Good - explained changeover capability.' },
          { id: 'obj5-c', text: 'Easy to add new parts - train model with 100-200 images, deploy in hours', isCorrect: true, points: 3, feedback: 'Good - highlighted ease of expansion.' },
          { id: 'obj5-d', text: 'Track record: IBM vision systems handle 50+ part types per line successfully', isCorrect: true, points: 3, feedback: 'Good - provided flexibility track record.' },
          { id: 'obj5-e', text: 'Need separate model for each part', isCorrect: false, points: 0, feedback: 'Wrong - single model handles multiple parts.' },
          { id: 'obj5-f', text: 'Cannot handle multiple parts', isCorrect: false, points: 0, feedback: 'Wrong - proven multi-part capability.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed flexibility',
          'Explained transfer learning',
          'Described quick changeover',
          'Highlighted ease of expansion'
        ],
        hints: ['Single model', 'Transfer learning', 'Quick changeover']
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
          reason: 'High-performance computing for AI-powered computer vision, real-time defect detection, and quality analytics across 5 plants',
          configuration: 'Centralized Power E1080 for AI model training and inference. Edge servers at each inspection station for real-time processing',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Maximo Visual Inspection',
          reason: 'AI-powered computer vision for defect detection, model training, and continuous learning',
          configuration: 'Maximo Visual Inspection for defect detection, Watson Studio for model training, continuous learning, root cause analysis',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for inspection images, defect data, and quality analytics with traceability',
          configuration: '300TB usable capacity for 5 plants, inspection images, defect data, quality records, encrypted storage',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for AI model training and quality analytics, (2) Edge tier: Edge servers at 50+ inspection stations for real-time defect detection, (3) Storage tier: FlashSystem 9500 for images and quality data. IBM Maximo Visual Inspection provides AI-powered defect detection.',
      sizing: 'Central: 1x Power E1080 (24-core) for AI training. Edge: 50x inspection stations with cameras and edge servers. Storage: 300TB FlashSystem',
      deployment: 'Phased: Phase 1 (Weeks 1-4): Pilot on single line. Phase 2 (Weeks 5-20): Scale to 10 lines across 3 plants. Phase 3 (Weeks 21-36): Complete rollout to remaining 10 lines.'
    },
    pricing: {
      hardware: '$3.5M (Power E1080 + 50 inspection stations + cameras + FlashSystem 9500)',
      software: '$2M (IBM Maximo Visual Inspection, Watson Studio, 3-year licenses)',
      services: '$1M (IBM Expert Labs: implementation, model training, integration, change management)',
      support: '$200K/year (24x7 support with 2-hour response)',
      total: '$6.5M initial + $200K/year support',
      financing: 'IBM Flex financing available - $140K/month for 60 months',
      paymentTerms: 'Phased payment: $400K pilot, $3M Phase 2, $3.1M Phase 3'
    },
    businessCase: {
      costSavings: '$10.5M annually (warranty $7.5M, rework $3M)',
      revenueImpact: '$20M annually (retain customer contracts, win new business)',
      productivityGains: '$5M annually (throughput increase, labor efficiency)',
      riskReduction: 'Achieve 99.9% quality, retain major customers, competitive advantage, zero-defect manufacturing',
      roi: '14 months',
      paybackPeriod: '14 months',
      tco: '3-year TCO: $6.5M investment vs. $106M in benefits (savings + revenue + productivity) = $99.5M net benefit, 567% three-year ROI'
    },
    competitivePositioning: 'IBM Maximo Visual Inspection is the leading AI vision solution with 500+ manufacturing deployments. Unlike generic vision systems, IBM provides automotive-grade accuracy (99.9%), proven integration with production lines, and continuous learning. Power E1080 delivers 3x better AI performance than x86.',
    nextSteps: [
      'Schedule vision workshop with IBM Maximo experts',
      'Conduct pilot line selection and baseline quality assessment',
      'Develop phased deployment roadmap',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation on selected line'
    ],
    requiredElements: [
      'IBM Maximo Visual Inspection for AI-powered defect detection',
      'Power E1080 for AI model training and inference',
      'FlashSystem for inspection images and quality data',
      'Watson Studio for model training and continuous learning',
      '50+ inspection stations with cameras and lighting',
      'Edge servers for real-time processing',
      'Integration with MES and quality systems',
      'Inspector training and change management'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified warranty cost ($15M annually)',
        'Identified defect types and inspection gaps (micro-defects, 5-8% miss rate)',
        'Understood current process and bottlenecks (manual, slow)',
        'Identified zero-defect requirements (99.9% quality)',
        'Assessed deployment scope (5 plants, 50+ stations)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($5M-$8M, 9 months)',
        'Identified CFO mandate (50% warranty reduction)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed AI accuracy with 99.9% defect detection',
        'Handled integration with inline inspection and minimal downtime',
        'Addressed workforce with quality analyst role evolution',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed flexibility with multi-part capability'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as AI platform',
        'Included Maximo Visual Inspection for defect detection',
        'Included FlashSystem for image storage',
        'Addressed all pain points (warranty, defects, bottleneck)',
        'Proposed phased deployment with pilot',
        'Included change management for inspectors'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($10.5M)',
        'Quantified revenue impact ($20M)',
        'Calculated productivity gains ($5M)',
        'Calculated ROI (14-month payback, 567% three-year ROI)',
        'Positioned as zero-defect and competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'AI-powered computer vision',
      description: 'Design AI vision systems for manufacturing quality inspection with 99.9% accuracy',
      skillLevel: 'advanced'
    },
    {
      concept: 'Zero-defect manufacturing',
      description: 'Implement zero-defect strategies using AI to achieve 99.9% quality',
      skillLevel: 'advanced'
    },
    {
      concept: 'Production line integration',
      description: 'Integrate vision inspection with high-speed production lines with minimal disruption',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Workforce transition',
      description: 'Manage inspector-to-analyst workforce transition with training and change management',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Quality economics',
      description: 'Quantify ROI from warranty reduction, rework elimination, and customer retention',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Computer vision', 'AI quality', 'Defect detection', 'Zero-defect', 'Automotive', 'Visual inspection'],
    skills: ['AI vision', 'Quality management', 'Production integration', 'Workforce transition', 'Manufacturing economics'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Manufacturing'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with warranty cost ($15M annually) - this is the primary driver',
    'Emphasize zero-defect mandate from OEM customers as immediate pressure',
    'Address AI accuracy concerns proactively with 99.9% detection rate',
    'Recommend pilot line approach to de-risk investment and prove ROI',
    'Highlight inspector role evolution - quality analysts, not job elimination',
    'Position IBM as automotive-grade AI vision vs. generic systems',
    'Build compelling ROI: 14-month payback, 567% three-year ROI, $10.5M savings',
    'Chief Quality Officer is champion - focus on zero-defect and warranty reduction',
    'VP Operations is supporter but concerned about disruption - lead with minimal downtime',
    'CFO is neutral - build strong business case with 50% warranty reduction mandate',
    'Differentiate with proven track record: 500+ manufacturing vision deployments',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address workforce concerns with training and quality analyst roles',
    'Highlight customer retention benefit - $20M+ contracts at risk'
  ]
};


/**
 * Manufacturing Scenario 004: Energy Management and Sustainability
 * Chemical manufacturer reducing energy costs and carbon emissions with IoT and AI
 */
export const manufacturingScenario004: TrainingScenario = {
  id: 'manufacturing-energy-004',
  title: 'Chemical Manufacturer Needs Energy Management Platform to Reduce Costs and Carbon Emissions',
  description: 'A large chemical manufacturer with 8 plants faces $35M annually in energy costs and pressure to reduce carbon emissions by 40% by 2030. They need an IoT-powered energy management platform with AI optimization to reduce energy consumption, lower costs, and meet sustainability goals.',
  
  customerProfile: {
    company: 'Global Chemical Industries',
    industry: 'Manufacturing',
    size: 'Large (1000-5000 employees)',
    revenue: '$3.5B annually',
    employees: 8500,
    location: 'Multi-site (8 chemical plants across North America and Europe)',
    currentInfrastructure: {
      servers: 'On-premises servers at each plant',
      storage: 'Limited storage, no centralized energy data',
      applications: ['Manual energy monitoring', 'Spreadsheet-based tracking', 'No IoT sensors', 'No AI optimization'],
      operatingSystem: 'Windows Server',
      virtualization: 'Limited VMware',
      age: '12-15 years',
      endOfLife: 'Infrastructure approaching capacity',
      issues: [
        '$35M annually in energy costs (15% of operating costs)',
        'Energy waste - no real-time monitoring or optimization',
        'Carbon emissions 40% above 2030 target',
        'Manual energy tracking - no visibility into consumption',
        'Cannot identify energy waste or optimization opportunities',
        'Regulatory pressure - EU carbon tax, EPA emissions limits',
        'Customer pressure - sustainability requirements in contracts',
        'No predictive maintenance - equipment failures waste energy'
      ]
    },
    keyStakeholders: [
      {
        name: 'David Martinez',
        role: 'CTO',
        priorities: ['Energy efficiency', 'Sustainability', 'Cost reduction', 'Regulatory compliance'],
        concerns: ['IoT deployment complexity', 'ROI', 'Integration', 'Change management'],
        influence: 'high',
        supportLevel: 'champion'
      },
      {
        name: 'Jennifer Chen',
        role: 'VP of IT Operations',
        priorities: ['System reliability', 'IoT infrastructure', 'Data management', 'Security'],
        concerns: ['IoT sensor deployment', 'Network capacity', 'Data volume', 'Support model'],
        influence: 'high',
        supportLevel: 'supporter'
      },
      {
        name: 'Michael Thompson',
        role: 'CFO',
        priorities: ['Cost reduction', 'ROI', 'Regulatory compliance', 'Profitability'],
        concerns: ['Capital investment', 'Operating costs', 'Payback period', 'Risk'],
        influence: 'high',
        supportLevel: 'neutral'
      }
    ],
    budget: '$8M-$12M capital budget for energy management platform',
    timeline: '12-month implementation across 8 plants',
    decisionProcess: 'Board approved sustainability initiative. CTO is executive sponsor. CFO requires $10M energy cost reduction.'
  },
  
  businessContext: {
    challenges: [
      '$35M annually in energy costs',
      'Energy waste from inefficiency',
      'Carbon emissions 40% above target',
      'Manual energy tracking',
      'No real-time visibility',
      'Cannot identify waste',
      'Regulatory pressure (EU carbon tax)',
      'Customer sustainability requirements'
    ],
    businessImpact: [
      '$35M annual energy costs',
      '$10M potential savings from optimization',
      '$5M EU carbon tax exposure',
      'Losing contracts due to sustainability',
      'Regulatory compliance risk'
    ],
    urgency: 'critical',
    strategicInitiatives: [
      'Implement IoT energy management platform',
      'Deploy 5,000+ IoT sensors across 8 plants',
      'Reduce energy costs by 30% ($10M annually)',
      'Reduce carbon emissions by 40% by 2030',
      'Achieve ISO 50001 energy management certification',
      'Meet customer sustainability requirements'
    ],
    competitivePressure: 'Competitors achieving sustainability goals. Customers requiring carbon-neutral suppliers. EU carbon tax increasing costs.',
    regulatoryRequirements: ['EU carbon tax', 'EPA emissions limits', 'ISO 50001', 'Customer sustainability requirements', 'Carbon disclosure'],
    recentEvents: [
      'Lost $20M contract due to sustainability requirements',
      'EU carbon tax increased 50%',
      'Board mandated 40% emissions reduction by 2030',
      'Major customer required carbon-neutral supply chain'
    ]
  },

  discoveryPhase: {
    questions: [
      {
        question: 'What is the business impact of energy costs and carbon emissions? How much are you spending?',
        purpose: 'Quantify energy opportunity',
        category: 'pain-point',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q1-a', text: '$35M annually in energy costs - 15% of operating costs, major expense', isCorrect: true, points: 4, feedback: 'Excellent - quantified energy cost impact.' },
          { id: 'q1-b', text: 'Energy waste from inefficiency - no real-time monitoring, cannot optimize', isCorrect: true, points: 3, feedback: 'Good - identified waste opportunity.' },
          { id: 'q1-c', text: '$5M EU carbon tax exposure - emissions 40% above 2030 target', isCorrect: true, points: 3, feedback: 'Good - identified regulatory cost.' },
          { id: 'q1-d', text: 'Lost $20M contract due to sustainability requirements - customers demanding carbon-neutral suppliers', isCorrect: true, points: 3, feedback: 'Good - identified customer pressure.' },
          { id: 'q1-e', text: 'No energy cost issues', isCorrect: false, points: 0, feedback: 'Wrong - $35M annual cost is significant.' },
          { id: 'q1-f', text: 'Sustainability not important', isCorrect: false, points: 0, feedback: 'Wrong - regulatory and customer pressure is critical.' }
        ],
        correctChoiceIds: ['q1-a', 'q1-b', 'q1-c', 'q1-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 15,
        hints: ['Quantify energy costs', 'Carbon tax exposure', 'Customer requirements']
      },
      {
        question: 'What is your current energy monitoring situation? How do you track consumption?',
        purpose: 'Understand current process',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q2-a', text: 'Manual energy tracking - spreadsheets, monthly utility bills, no real-time visibility', isCorrect: true, points: 4, feedback: 'Excellent - identified manual process limitation.' },
          { id: 'q2-b', text: 'No IoT sensors - cannot monitor equipment-level consumption or identify waste', isCorrect: true, points: 3, feedback: 'Good - identified visibility gap.' },
          { id: 'q2-c', text: 'Cannot identify optimization opportunities - no data on where energy is wasted', isCorrect: true, points: 3, feedback: 'Good - identified analytics gap.' },
          { id: 'q2-d', text: 'Reactive approach - only know about issues when utility bill arrives', isCorrect: true, points: 3, feedback: 'Good - identified reactive problem.' },
          { id: 'q2-e', text: 'Real-time energy monitoring in place', isCorrect: false, points: 0, feedback: 'Wrong - currently manual tracking.' },
          { id: 'q2-f', text: 'No monitoring issues', isCorrect: false, points: 0, feedback: 'Wrong - manual process is major limitation.' }
        ],
        correctChoiceIds: ['q2-a', 'q2-b', 'q2-c', 'q2-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Manual tracking', 'No IoT sensors', 'No real-time visibility']
      },
      {
        question: 'What energy optimization opportunities do you see? Where is energy wasted?',
        purpose: 'Identify optimization potential',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q3-a', text: 'Equipment inefficiency - motors, compressors, HVAC running inefficiently, 20-30% waste', isCorrect: true, points: 4, feedback: 'Excellent - identified equipment optimization.' },
          { id: 'q3-b', text: 'Production scheduling - run energy-intensive processes during peak pricing, $5M opportunity', isCorrect: true, points: 3, feedback: 'Good - identified scheduling optimization.' },
          { id: 'q3-c', text: 'Compressed air leaks - estimated 15% of compressed air wasted, $2M annually', isCorrect: true, points: 3, feedback: 'Good - identified leak detection opportunity.' },
          { id: 'q3-d', text: 'Predictive maintenance - equipment failures waste energy, AI can predict and prevent', isCorrect: true, points: 3, feedback: 'Good - identified predictive maintenance benefit.' },
          { id: 'q3-e', text: 'No optimization opportunities', isCorrect: false, points: 0, feedback: 'Wrong - 20-30% waste is typical.' },
          { id: 'q3-f', text: 'Energy already optimized', isCorrect: false, points: 0, feedback: 'Wrong - manual tracking cannot optimize.' }
        ],
        correctChoiceIds: ['q3-a', 'q3-b', 'q3-c', 'q3-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 12,
        hints: ['Equipment inefficiency', 'Production scheduling', 'Leak detection']
      },
      {
        question: 'What is your carbon emissions situation? What are your sustainability goals?',
        purpose: 'Assess sustainability requirements',
        category: 'business',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q4-a', text: 'Carbon emissions 40% above 2030 target - board mandated reduction, regulatory pressure', isCorrect: true, points: 4, feedback: 'Excellent - identified emissions gap.' },
          { id: 'q4-b', text: 'EU carbon tax exposure $5M annually - increasing 10% per year', isCorrect: true, points: 3, feedback: 'Good - quantified regulatory cost.' },
          { id: 'q4-c', text: 'Customer sustainability requirements - losing contracts without carbon-neutral certification', isCorrect: true, points: 3, feedback: 'Good - identified customer pressure.' },
          { id: 'q4-d', text: 'ISO 50001 energy management certification required by major customers', isCorrect: true, points: 3, feedback: 'Good - identified certification requirement.' },
          { id: 'q4-e', text: 'No emissions targets', isCorrect: false, points: 0, feedback: 'Wrong - board mandated 40% reduction.' },
          { id: 'q4-f', text: 'Sustainability not a priority', isCorrect: false, points: 0, feedback: 'Wrong - regulatory and customer pressure is critical.' }
        ],
        correctChoiceIds: ['q4-a', 'q4-b', 'q4-c', 'q4-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['40% emissions gap', 'EU carbon tax', 'Customer requirements']
      },
      {
        question: 'What is your IoT deployment scope? How many sensors do you need?',
        purpose: 'Assess deployment scale',
        category: 'technical',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q5-a', text: '8 chemical plants across North America and Europe - need 5,000+ IoT sensors', isCorrect: true, points: 4, feedback: 'Excellent - quantified deployment scope.' },
          { id: 'q5-b', text: 'Monitor equipment (motors, compressors, HVAC), utilities (electricity, gas, steam), production lines', isCorrect: true, points: 3, feedback: 'Good - identified monitoring requirements.' },
          { id: 'q5-c', text: 'Harsh chemical environment - need industrial-grade sensors, explosion-proof in some areas', isCorrect: true, points: 3, feedback: 'Good - understood environmental constraints.' },
          { id: 'q5-d', text: 'Real-time data collection - 1-minute intervals, 7M data points per day', isCorrect: true, points: 3, feedback: 'Good - quantified data volume.' },
          { id: 'q5-e', text: 'Only need 10-20 sensors', isCorrect: false, points: 0, feedback: 'Wrong - need 5,000+ sensors across 8 plants.' },
          { id: 'q5-f', text: 'IoT not needed', isCorrect: false, points: 0, feedback: 'Wrong - IoT sensors are foundation of energy management.' }
        ],
        correctChoiceIds: ['q5-a', 'q5-b', 'q5-c', 'q5-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 10,
        hints: ['5,000+ sensors', 'Industrial-grade', 'Real-time data']
      },
      {
        question: 'Who are the key stakeholders and what are their priorities? Who has budget authority?',
        purpose: 'Map decision-making process',
        category: 'stakeholder',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q6-a', text: 'CTO is executive sponsor, focused on energy efficiency and sustainability', isCorrect: true, points: 4, feedback: 'Excellent - identified decision owner.' },
          { id: 'q6-b', text: 'VP IT Operations is supporter, concerned about IoT deployment and data management', isCorrect: true, points: 3, feedback: 'Good - identified IT stakeholder.' },
          { id: 'q6-c', text: 'CFO has budget authority, mandated $10M energy cost reduction', isCorrect: true, points: 3, feedback: 'Good - identified budget authority and mandate.' },
          { id: 'q6-d', text: 'Plant managers are end users - need easy-to-use dashboards and actionable insights', isCorrect: true, points: 3, feedback: 'Good - identified end user needs.' },
          { id: 'q6-e', text: 'No clear decision owner', isCorrect: false, points: 0, feedback: 'Wrong - CTO is executive sponsor.' },
          { id: 'q6-f', text: 'Stakeholders not important', isCorrect: false, points: 0, feedback: 'Wrong - understanding stakeholders critical.' }
        ],
        correctChoiceIds: ['q6-a', 'q6-b', 'q6-c', 'q6-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['CTO sponsor', 'CFO budget authority', 'Plant manager adoption']
      },
      {
        question: 'What is your timeline and what drives the urgency? Any regulatory or customer deadlines?',
        purpose: 'Understand timeline constraints',
        category: 'timeline',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q7-a', text: '12-month implementation across 8 plants, board-mandated sustainability initiative', isCorrect: true, points: 4, feedback: 'Excellent - identified timeline and mandate.' },
          { id: 'q7-b', text: 'EU carbon tax increasing 10% annually - immediate cost pressure', isCorrect: true, points: 3, feedback: 'Good - identified regulatory driver.' },
          { id: 'q7-c', text: 'Major customer requiring carbon-neutral certification by end of year - $50M contract at risk', isCorrect: true, points: 3, feedback: 'Good - identified customer deadline.' },
          { id: 'q7-d', text: 'Vendor selection in 6 weeks, phased rollout starting with pilot plant', isCorrect: true, points: 3, feedback: 'Good - understood phased approach.' },
          { id: 'q7-e', text: 'No timeline, can take 3+ years', isCorrect: false, points: 0, feedback: 'Wrong - 12-month timeline with board mandate.' },
          { id: 'q7-f', text: 'No urgency', isCorrect: false, points: 0, feedback: 'Wrong - regulatory and customer pressure.' }
        ],
        correctChoiceIds: ['q7-a', 'q7-b', 'q7-c', 'q7-d'],
        minCorrectChoices: 3,
        maxChoices: 6,
        scoringWeight: 8,
        hints: ['Board mandate', 'Carbon tax pressure', 'Customer deadline']
      },
      {
        question: 'What is your budget and expected ROI? What are the key business case drivers?',
        purpose: 'Qualify budget and ROI expectations',
        category: 'budget',
        idealResponse: '',
        alternateResponses: [],
        choices: [
          { id: 'q8-a', text: '$8M-$12M capital budget approved by board for energy management platform', isCorrect: true, points: 4, feedback: 'Excellent - confirmed adequate budget.' },
          { id: 'q8-b', text: 'CFO requires $10M energy cost reduction and 18-month payback', isCorrect: true, points: 3, feedback: 'Good - understood ROI requirements.' },
          { id: 'q8-c', text: 'Business case: reduce energy $10M, avoid carbon tax $5M, retain contracts $50M', isCorrect: true, points: 3, feedback: 'Good - understood business case drivers.' },
          { id: 'q8-d', text: 'Budget includes: IoT sensors, platform, integration, training, ISO 50001 certification', isCorrect: true, points: 3, feedback: 'Good - confirmed comprehensive budget.' },
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
      '$35M annual energy costs',
      'Energy waste 20-30%',
      'Carbon emissions 40% above target',
      'Manual energy tracking',
      'Need 5,000+ IoT sensors',
      'EU carbon tax $5M',
      'Budget $8M-$12M approved',
      'Customer deadline end of year'
    ],
    redFlags: [
      'Budget under $6M insufficient',
      'Timeline under 9 months too aggressive',
      'No executive sponsorship',
      'Costs not quantified',
      'Want all 8 plants simultaneously'
    ],
    opportunities: [
      'Reduce energy costs $10M',
      'Avoid carbon tax $5M',
      'Retain customer contracts $50M',
      'ISO 50001 certification',
      'Competitive advantage'
    ],
    minimumQuestionsRequired: 6
  },

  objectionPhase: {
    objections: [
      {
        objection: 'How do we deploy 5,000+ IoT sensors across 8 plants without disrupting production?',
        stakeholder: 'CTO',
        difficulty: 'very difficult',
        category: 'technical',
        customResponse: 'IoT deployment at scale is our expertise. IBM provides proven deployment approach: (1) Phased deployment - pilot plant first (500 sensors), validate, then scale, (2) Non-intrusive installation - wireless sensors, no production downtime, (3) Automated provisioning - sensors self-configure and connect, (4) Industrial-grade sensors - explosion-proof, harsh environment rated, (5) Deployment team - IBM experts install sensors during maintenance windows. IBM has deployed 100,000+ industrial IoT sensors globally.',
        responseChoices: [
          { id: 'obj1-a', text: 'Phased deployment: pilot plant first (500 sensors, 4 weeks), validate, then scale to remaining plants', isCorrect: true, points: 4, feedback: 'Excellent - addressed deployment approach.' },
          { id: 'obj1-b', text: 'Non-intrusive wireless sensors - no production downtime, install during maintenance windows', isCorrect: true, points: 3, feedback: 'Good - explained zero-downtime approach.' },
          { id: 'obj1-c', text: 'Automated provisioning - sensors self-configure, connect to network, start sending data', isCorrect: true, points: 3, feedback: 'Good - described automation.' },
          { id: 'obj1-d', text: 'Track record: 100,000+ industrial IoT sensors deployed globally, proven in chemical plants', isCorrect: true, points: 3, feedback: 'Good - provided deployment track record.' },
          { id: 'obj1-e', text: 'Requires weeks of downtime', isCorrect: false, points: 0, feedback: 'Wrong - wireless sensors enable zero downtime.' },
          { id: 'obj1-f', text: 'Deployment not possible', isCorrect: false, points: 0, feedback: 'Wrong - proven deployment approach.' }
        ],
        correctResponseIds: ['obj1-a', 'obj1-b', 'obj1-c', 'obj1-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed deployment scale',
          'Explained phased approach',
          'Described zero-downtime installation',
          'Provided deployment track record'
        ],
        hints: ['Phased deployment', 'Wireless sensors', 'Zero downtime']
      },
      {
        objection: 'How accurate is AI for energy optimization? We cannot risk production disruption from bad recommendations.',
        stakeholder: 'CTO',
        difficulty: 'difficult',
        category: 'risk',
        customResponse: 'AI accuracy and safety are paramount. IBM provides proven AI optimization: (1) 15-25% energy reduction proven across 500+ industrial deployments, (2) Safe recommendations - AI suggests, humans approve before implementation, (3) Continuous learning - AI improves over time based on results, (4) Explainable AI - shows why recommendations made, (5) Simulation mode - test recommendations before implementation. IBM AI has optimized $2B+ in industrial energy costs.',
        responseChoices: [
          { id: 'obj2-a', text: '15-25% energy reduction proven across 500+ industrial deployments, validated results', isCorrect: true, points: 4, feedback: 'Excellent - quantified AI performance.' },
          { id: 'obj2-b', text: 'Safe recommendations - AI suggests, humans approve, no automatic changes to production', isCorrect: true, points: 3, feedback: 'Good - addressed safety concern.' },
          { id: 'obj2-c', text: 'Explainable AI - shows reasoning, plant managers understand why recommendations made', isCorrect: true, points: 3, feedback: 'Good - explained transparency.' },
          { id: 'obj2-d', text: 'Track record: $2B+ in industrial energy costs optimized, proven in chemical manufacturing', isCorrect: true, points: 3, feedback: 'Good - provided AI track record.' },
          { id: 'obj2-e', text: 'AI is not accurate', isCorrect: false, points: 0, feedback: 'Wrong - 15-25% reduction proven.' },
          { id: 'obj2-f', text: 'Accuracy not important', isCorrect: false, points: 0, feedback: 'Wrong - accuracy is critical for trust.' }
        ],
        correctResponseIds: ['obj2-a', 'obj2-b', 'obj2-c', 'obj2-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Quantified AI performance',
          'Addressed safety concerns',
          'Explained explainable AI',
          'Provided optimization track record'
        ],
        hints: ['15-25% reduction', 'Human approval', 'Explainable AI']
      },
      {
        objection: 'How do we manage 7M data points per day from 5,000 sensors? Data management will be overwhelming.',
        stakeholder: 'VP of IT Operations',
        difficulty: 'common',
        category: 'technical',
        customResponse: 'Data management at IoT scale is built-in. IBM provides comprehensive platform: (1) Edge computing - process data locally, send only insights to cloud, (2) Automated data management - retention policies, archiving, no manual management, (3) Real-time analytics - process data as it arrives, immediate insights, (4) Scalable storage - handles petabytes of IoT data, (5) Data quality monitoring - alerts on sensor issues. IBM manages 100B+ IoT data points daily globally.',
        responseChoices: [
          { id: 'obj3-a', text: 'Edge computing - process data locally at plant, send only insights to cloud, reduce bandwidth 90%', isCorrect: true, points: 4, feedback: 'Excellent - addressed data volume comprehensively.' },
          { id: 'obj3-b', text: 'Automated data management - retention policies, archiving, compression, no manual management', isCorrect: true, points: 3, feedback: 'Good - explained automation.' },
          { id: 'obj3-c', text: 'Real-time analytics - process 7M data points/day in real-time, immediate insights', isCorrect: true, points: 3, feedback: 'Good - described real-time capability.' },
          { id: 'obj3-d', text: 'Track record: 100B+ IoT data points managed daily globally, proven at scale', isCorrect: true, points: 3, feedback: 'Good - provided scale track record.' },
          { id: 'obj3-e', text: 'Manual data management required', isCorrect: false, points: 0, feedback: 'Wrong - automated data management.' },
          { id: 'obj3-f', text: 'Data management not important', isCorrect: false, points: 0, feedback: 'Wrong - data management is critical at IoT scale.' }
        ],
        correctResponseIds: ['obj3-a', 'obj3-b', 'obj3-c', 'obj3-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed data volume',
          'Explained edge computing',
          'Described automation',
          'Provided scale track record'
        ],
        hints: ['Edge computing', 'Automated management', 'Real-time analytics']
      },
      {
        objection: 'Your solution costs $10M. Can we start with a pilot plant to prove ROI before rolling out to all 8 plants?',
        stakeholder: 'CFO',
        difficulty: 'common',
        category: 'cost',
        customResponse: 'Pilot is our recommended approach. IBM offers phased deployment: (1) Phase 1 Pilot: $1.2M for single plant (4 months), (2) Pilot typically shows 20% energy reduction and $1.5M annual savings, (3) Use pilot results to secure funding for full rollout, (4) Phase 2-3: Scale to remaining plants ($8.8M) with proven ROI. Business case shows 16-month payback and $90M three-year benefit vs. $10M investment.',
        responseChoices: [
          { id: 'obj4-a', text: 'Phased approach: $1.2M pilot at single plant (4 months) to prove ROI', isCorrect: true, points: 4, feedback: 'Excellent - offered pilot to de-risk investment.' },
          { id: 'obj4-b', text: 'Pilot typically shows 20% energy reduction and $1.5M annual savings within 4 months', isCorrect: true, points: 3, feedback: 'Good - provided realistic pilot results.' },
          { id: 'obj4-c', text: 'Use pilot results to refine business case and secure funding - staged investment', isCorrect: true, points: 3, feedback: 'Good - showed how pilot reduces financial risk.' },
          { id: 'obj4-d', text: 'Business case: 16-month payback, $90M three-year benefit vs. $10M investment (800% ROI)', isCorrect: true, points: 3, feedback: 'Good - quantified strong ROI.' },
          { id: 'obj4-e', text: 'Must deploy to all 8 plants immediately', isCorrect: false, points: 0, feedback: 'Wrong - phased approach with pilot recommended.' },
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
        hints: ['Pilot plant approach', 'Prove ROI first', 'Staged investment']
      },
      {
        objection: 'How do we achieve ISO 50001 energy management certification? Our customers require it.',
        stakeholder: 'CTO',
        difficulty: 'common',
        category: 'risk',
        customResponse: 'ISO 50001 certification is built into our approach. IBM provides comprehensive support: (1) Platform designed for ISO 50001 compliance - meets all requirements, (2) Energy baseline and monitoring - automated tracking and reporting, (3) Continuous improvement process - AI identifies optimization opportunities, (4) Documentation and audit support - automated reports for certification, (5) Certification consulting - IBM experts guide through process. IBM has helped 200+ manufacturers achieve ISO 50001.',
        responseChoices: [
          { id: 'obj5-a', text: 'Platform designed for ISO 50001 - meets all energy monitoring, measurement, and reporting requirements', isCorrect: true, points: 4, feedback: 'Excellent - addressed certification comprehensively.' },
          { id: 'obj5-b', text: 'Automated energy baseline and monitoring - continuous tracking required for certification', isCorrect: true, points: 3, feedback: 'Good - explained monitoring capability.' },
          { id: 'obj5-c', text: 'Continuous improvement process - AI identifies opportunities, documents improvements for audit', isCorrect: true, points: 3, feedback: 'Good - described improvement process.' },
          { id: 'obj5-d', text: 'Track record: 200+ manufacturers achieved ISO 50001 with IBM platform and consulting', isCorrect: true, points: 3, feedback: 'Good - provided certification track record.' },
          { id: 'obj5-e', text: 'ISO 50001 not supported', isCorrect: false, points: 0, feedback: 'Wrong - platform designed for ISO 50001.' },
          { id: 'obj5-f', text: 'Certification not important', isCorrect: false, points: 0, feedback: 'Wrong - customers require ISO 50001.' }
        ],
        correctResponseIds: ['obj5-a', 'obj5-b', 'obj5-c', 'obj5-d'],
        minCorrectResponses: 3,
        maxResponses: 6,
        scoringCriteria: [
          'Addressed ISO 50001 compliance',
          'Explained monitoring and reporting',
          'Described continuous improvement',
          'Highlighted certification support'
        ],
        hints: ['ISO 50001 compliance', 'Automated monitoring', 'Certification consulting']
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
          reason: 'High-performance computing for IoT energy management platform, real-time analytics, and AI optimization across 8 chemical plants',
          configuration: 'Centralized Power E1080 for energy platform and AI. Edge servers at each plant for local processing',
          priority: 'primary'
        },
        {
          productId: 'watson-studio',
          productName: 'IBM Watson Studio with Maximo',
          reason: 'AI-powered energy optimization, predictive maintenance, and continuous improvement recommendations',
          configuration: 'Watson Studio for AI optimization, Maximo for asset management and predictive maintenance',
          priority: 'supporting'
        },
        {
          productId: 'flashsystem-9500',
          productName: 'IBM FlashSystem 9500',
          reason: 'High-performance storage for 7M IoT data points daily, energy analytics, and ISO 50001 compliance reporting',
          configuration: '500TB usable capacity for 8 plants, IoT data, analytics, compliance reports, encrypted storage',
          priority: 'supporting'
        }
      ],
      architecture: 'Three-tier: (1) Central tier: Power E1080 for energy platform and AI optimization, (2) Edge tier: Edge servers at 8 plants for local IoT processing, (3) Storage tier: FlashSystem 9500 for IoT data and analytics. IBM Watson Studio provides AI-powered optimization. 5,000+ industrial IoT sensors.',
      sizing: 'Central: 1x Power E1080 (24-core) for platform and AI. Edge: 8x plant servers for local processing. IoT: 5,000 sensors. Storage: 500TB FlashSystem',
      deployment: 'Phased: Phase 1 (Months 1-4): Pilot at single plant (500 sensors). Phase 2 (Months 5-8): Scale to 4 plants (2,500 sensors). Phase 3 (Months 9-12): Complete rollout to remaining 3 plants (2,000 sensors).'
    },
    pricing: {
      hardware: '$5M (Power E1080 + 8 edge servers + 5,000 IoT sensors + FlashSystem 9500)',
      software: '$3M (IBM energy management platform, Watson Studio, Maximo, 3-year licenses)',
      services: '$2M (IBM Expert Labs: implementation, IoT deployment, AI training, ISO 50001 consulting)',
      support: '$300K/year (24x7 support with 4-hour response)',
      total: '$10M initial + $300K/year support',
      financing: 'IBM Flex financing available - $210K/month for 60 months',
      paymentTerms: 'Phased payment: $1.2M pilot, $4.4M Phase 2, $4.4M Phase 3'
    },
    businessCase: {
      costSavings: '$15M annually (energy reduction $10M, carbon tax avoidance $5M)',
      revenueImpact: '$50M annually (retain customer contracts requiring sustainability)',
      productivityGains: '$5M annually (predictive maintenance, operational efficiency)',
      riskReduction: 'Achieve ISO 50001 certification, meet customer sustainability requirements, reduce regulatory risk, competitive advantage',
      roi: '16 months',
      paybackPeriod: '16 months',
      tco: '3-year TCO: $10M investment vs. $210M in benefits (savings + revenue + productivity) = $200M net benefit, 800% three-year ROI'
    },
    competitivePositioning: 'IBM energy management is the leading industrial IoT solution with 500+ manufacturing deployments. Unlike generic IoT platforms, IBM provides industrial-grade sensors, AI optimization proven to deliver 15-25% energy reduction, and ISO 50001 compliance. Power E1080 delivers 3x better IoT performance than x86.',
    nextSteps: [
      'Schedule energy management workshop with IBM Maximo experts',
      'Conduct pilot plant selection and energy baseline assessment',
      'Develop phased deployment and IoT sensor plan',
      'Create detailed ROI model with pilot metrics',
      'Present business case to board',
      'Begin pilot implementation at selected plant'
    ],
    requiredElements: [
      'IBM energy management platform with IoT and AI',
      'Power E1080 for platform and AI optimization',
      'FlashSystem for IoT data and analytics storage',
      'Watson Studio for AI optimization',
      '5,000 industrial-grade IoT sensors',
      '8 edge servers for local processing',
      'ISO 50001 compliance and certification support',
      'Plant manager training and change management'
    ]
  },

  scoringCriteria: {
    discovery: {
      maxPoints: 40,
      criteria: [
        'Quantified energy costs ($35M annually)',
        'Identified energy waste opportunities (20-30% inefficiency)',
        'Assessed carbon emissions gap (40% above target)',
        'Understood IoT deployment scope (5,000 sensors, 8 plants)',
        'Identified sustainability requirements (ISO 50001, customer contracts)',
        'Mapped stakeholders and decision process',
        'Qualified budget and timeline ($8M-$12M, 12 months)',
        'Identified CFO mandate ($10M cost reduction)'
      ],
      weight: 0.4
    },
    objectionHandling: {
      maxPoints: 30,
      criteria: [
        'Addressed IoT deployment with phased approach and wireless sensors',
        'Handled AI accuracy with 15-25% proven reduction and explainable AI',
        'Addressed data management with edge computing and automation',
        'Handled cost objection with pilot approach and strong ROI',
        'Addressed ISO 50001 with compliance platform and consulting'
      ],
      weight: 0.3
    },
    recommendation: {
      maxPoints: 20,
      criteria: [
        'Recommended Power E1080 as energy platform',
        'Included Watson Studio for AI optimization',
        'Included FlashSystem for IoT data storage',
        'Addressed all pain points (energy costs, emissions, compliance)',
        'Proposed phased deployment with pilot plant',
        'Included ISO 50001 certification support'
      ],
      weight: 0.2
    },
    businessValue: {
      maxPoints: 10,
      criteria: [
        'Quantified cost savings ($15M)',
        'Quantified revenue impact ($50M)',
        'Calculated productivity gains ($5M)',
        'Calculated ROI (16-month payback, 800% three-year ROI)',
        'Positioned as sustainability and competitive advantage'
      ],
      weight: 0.1
    },
    totalPoints: 100,
    passingScore: 70,
    excellentScore: 85
  },

  learningOutcomes: [
    {
      concept: 'Industrial IoT energy management',
      description: 'Design IoT-powered energy management platforms with 5,000+ sensors and real-time analytics',
      skillLevel: 'advanced'
    },
    {
      concept: 'AI energy optimization',
      description: 'Implement AI algorithms that deliver 15-25% energy reduction in industrial settings',
      skillLevel: 'advanced'
    },
    {
      concept: 'Sustainability and carbon reduction',
      description: 'Build solutions that achieve 40% carbon emissions reduction and ISO 50001 certification',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Edge computing for IoT',
      description: 'Deploy edge computing architecture to process 7M IoT data points daily',
      skillLevel: 'intermediate'
    },
    {
      concept: 'Energy management economics',
      description: 'Quantify ROI from energy reduction, carbon tax avoidance, and contract retention',
      skillLevel: 'intermediate'
    }
  ],

  metadata: {
    tags: ['Energy management', 'IoT', 'Sustainability', 'Carbon emissions', 'AI optimization', 'ISO 50001'],
    skills: ['Industrial IoT', 'Energy optimization', 'Sustainability', 'Edge computing', 'Manufacturing economics'],
    products: ['power-e1080', 'watson-studio', 'flashsystem-9500'],
    industries: ['Manufacturing'],
    estimatedTime: 45,
    difficulty: 'advanced',
    version: '1.0',
    lastUpdated: '2026-07-16',
    author: 'IBM Sales Training Team'
  },

  coachingTips: [
    'Lead with energy cost ($35M annually) - this is the primary driver',
    'Emphasize regulatory pressure (EU carbon tax, customer requirements) as forcing function',
    'Address IoT deployment concerns proactively with phased approach and wireless sensors',
    'Recommend pilot plant approach to de-risk investment and prove ROI',
    'Highlight sustainability benefit - 40% emissions reduction and ISO 50001 certification',
    'Position IBM as industrial IoT vs. consumer IoT platforms',
    'Build compelling ROI: 16-month payback, 800% three-year ROI, $15M savings',
    'CTO is champion - focus on energy efficiency and sustainability',
    'VP IT Operations is supporter but concerned about IoT scale - lead with edge computing',
    'CFO is neutral - build strong business case with $10M cost reduction mandate',
    'Differentiate with proven track record: 500+ industrial deployments, 15-25% energy reduction',
    'Emphasize phased deployment to minimize risk and build confidence',
    'Address AI accuracy with explainable AI and human-in-the-loop',
    'Highlight customer contract retention - $50M at risk without sustainability'
  ]
};


// Update exports
export const manufacturingScenarios = [
  manufacturingScenario001,
  manufacturingScenario002,
  manufacturingScenario003,
  manufacturingScenario004
];
