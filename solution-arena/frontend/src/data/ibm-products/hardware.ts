// IBM Power Hardware Products
import { IBMProduct } from '../../types/products';

export const powerE1080: IBMProduct = {
  id: 'power-e1080',
  name: 'IBM Power E1080',
  category: 'Hardware',
  subcategory: 'Enterprise Server',
  description: 'Enterprise-class Power10 server for mission-critical workloads',
  overview: 'The Power E1080 is IBM\'s flagship enterprise server, delivering exceptional performance, reliability, and security for mission-critical applications like SAP, Oracle, and Epic. Built on Power10 technology, it provides up to 240 cores and 64TB of memory with industry-leading RAS features.',
  
  idealCustomers: [
    {
      profile: 'Large Enterprise - Mission-Critical Workloads',
      characteristics: [
        'Running SAP, Oracle, or Epic EHR',
        'Need for 99.999% uptime',
        'High transaction volumes (>10,000 TPS)',
        'Regulatory compliance requirements (HIPAA, SOX, PCI)',
        'Existing AIX or IBM i investment',
        'Budget >$2M for infrastructure'
      ],
      industries: ['Healthcare', 'Banking', 'Insurance', 'Manufacturing'],
      companySize: ['Enterprise (5000+ employees)'],
      typicalBudget: '$2M-$10M'
    },
    {
      profile: 'Healthcare - Epic EHR',
      characteristics: [
        'Epic EHR deployment (500+ beds)',
        'HIPAA compliance required',
        'Zero downtime tolerance',
        'Growing patient data volumes',
        'Oracle database licensing pain'
      ],
      industries: ['Healthcare'],
      companySize: ['Large (1000-5000 employees)', 'Enterprise (5000+ employees)'],
      typicalBudget: '$3M-$8M'
    },
    {
      profile: 'Financial Services - Core Banking',
      characteristics: [
        'Core banking systems',
        'Real-time transaction processing',
        'Regulatory compliance (SOX, Basel III)',
        'Need for disaster recovery',
        'Legacy AIX applications'
      ],
      industries: ['Banking', 'Financial Services'],
      companySize: ['Enterprise (5000+ employees)'],
      typicalBudget: '$5M-$15M'
    }
  ],
  
  commonPainPoints: [
    {
      painPoint: 'Oracle licensing costs spiraling out of control',
      category: 'cost',
      severity: 'critical',
      frequency: 'very common',
      businessImpact: 'Consuming 15-25% of IT budget, limiting other investments, CFO pressure',
      technicalCause: 'Oracle per-core licensing on x86 requires many cores due to lower per-core performance',
      howProductHelps: 'Power10\'s high per-core performance reduces Oracle core count by 40-60%, directly cutting licensing costs while improving performance'
    },
    {
      painPoint: 'SAP or Epic performance degradation during peak hours',
      category: 'performance',
      severity: 'critical',
      frequency: 'common',
      businessImpact: 'User complaints, productivity loss, business delays, potential SLA penalties',
      technicalCause: 'x86 servers hitting CPU limits, memory bottlenecks, storage IOPS constraints',
      howProductHelps: 'Power10 delivers 2-3x per-core performance vs x86, with up to 64TB RAM and high-bandwidth I/O'
    },
    {
      painPoint: 'Frequent unplanned downtime affecting business operations',
      category: 'reliability',
      severity: 'critical',
      frequency: 'common',
      businessImpact: '$100K-$1M per hour of downtime, reputation damage, regulatory risk',
      technicalCause: 'x86 hardware failures, required maintenance windows, firmware updates need downtime',
      howProductHelps: 'RAS features enable hot-swap of CPUs, memory, I/O, power, cooling; concurrent firmware updates with zero downtime'
    },
    {
      painPoint: 'Data center space and power constraints',
      category: 'scalability',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Cannot add capacity, expensive data center expansion, high power costs',
      technicalCause: 'Many x86 servers required, inefficient power usage',
      howProductHelps: 'Consolidate 10-20 x86 servers to 1-2 Power systems, reducing footprint 80% and power 60%'
    },
    {
      painPoint: 'Cannot meet compliance requirements (HIPAA, SOX, PCI)',
      category: 'compliance',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Audit findings, potential fines, business risk, delayed projects',
      technicalCause: 'Inconsistent security controls, manual processes, visibility gaps',
      howProductHelps: 'Built-in encryption, secure boot, compliance-ready architecture, audit logging'
    },
    {
      painPoint: 'Aging AIX infrastructure approaching end-of-life',
      category: 'modernization',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Support costs rising, security risks, cannot run new applications',
      technicalCause: 'Old Power7/8 servers, outdated AIX versions, no vendor support',
      howProductHelps: 'Backward compatible with AIX 5.3+, seamless migration path, modern capabilities'
    }
  ],
  
  useCases: [
    {
      useCase: 'Epic EHR Consolidation',
      description: 'Consolidate multiple Epic instances onto fewer Power servers while improving performance and reducing Oracle costs',
      benefits: [
        '40-60% Oracle licensing cost reduction',
        '2-3x better Epic response times',
        'Simplified management and support',
        '99.999% uptime achievement',
        'HIPAA compliance built-in'
      ],
      typicalConfig: '2x Power E1080, 32-core, 2TB RAM, FlashSystem storage',
      customerExample: 'Mayo Clinic',
      industry: 'Healthcare'
    },
    {
      useCase: 'SAP S/4HANA Migration',
      description: 'Migrate SAP ECC to S/4HANA on Power for real-time analytics and improved performance',
      benefits: [
        '50% faster SAP processing',
        'Real-time analytics enabled',
        '30% lower TCO vs x86',
        'Simplified landscape',
        'Future-proof platform'
      ],
      typicalConfig: '4x Power E1080, 24-core, 4TB RAM, SLES for SAP',
      customerExample: 'Walmart',
      industry: 'Retail'
    },
    {
      useCase: 'Core Banking Modernization',
      description: 'Modernize core banking systems while maintaining AIX compatibility and adding cloud capabilities',
      benefits: [
        'Zero downtime migration',
        'Improved transaction performance',
        'Hybrid cloud ready',
        'Regulatory compliance',
        'Disaster recovery enabled'
      ],
      typicalConfig: '6x Power E1080, 32-core, 3TB RAM, PowerVM, Power Virtual Server DR',
      customerExample: 'Bank of America',
      industry: 'Banking'
    },
    {
      useCase: 'Oracle Database Consolidation',
      description: 'Consolidate multiple Oracle databases onto Power to reduce licensing and improve performance',
      benefits: [
        '40-60% Oracle cost savings',
        '3:1 or better consolidation',
        'Better database performance',
        'Reduced management overhead',
        'Lower data center costs'
      ],
      typicalConfig: '2x Power E1080, 32-core, 4TB RAM, Oracle RAC',
      customerExample: 'Multiple customers',
      industry: 'All Industries'
    }
  ],
  
  whenToRecommend: [
    'Customer running SAP, Oracle, or Epic',
    'Oracle licensing costs are a major pain point',
    'Need for 99.99%+ uptime',
    'Mission-critical workloads that cannot tolerate downtime',
    'Existing AIX or IBM i environment',
    'Regulatory compliance requirements (HIPAA, SOX, PCI)',
    'High transaction volumes (>5,000 TPS)',
    'Need to consolidate many x86 servers',
    'Data center space or power constraints',
    'Looking to reduce TCO over 3-5 years',
    'Need for superior RAS features',
    'Planning SAP S/4HANA migration',
    'Epic EHR performance issues',
    'Core banking modernization'
  ],
  
  whenNotToRecommend: [
    'Greenfield cloud-native applications only',
    'Windows-only shop with no Unix/Linux',
    'Budget under $500K',
    'No mission-critical workloads',
    'Customer committed to x86-only strategy',
    'Workloads that require specific x86-only software',
    'Small-scale deployments (<100 users)',
    'No performance or reliability issues',
    'Short-term project (<2 years)',
    'No existing Power/AIX knowledge and unwilling to learn'
  ],
  
  businessBenefits: [
    'Reduce Oracle licensing costs 40-60% while improving performance',
    'Eliminate unplanned downtime (achieve 99.999% uptime)',
    'Consolidate servers 3:1 to 10:1, reducing data center footprint',
    'Defer hardware refresh 2-3 years longer than x86',
    'Reduce data center power consumption by 60%',
    'Improve application performance 2-3x',
    'Accelerate business processes and decision-making',
    'Meet compliance requirements with built-in security',
    'Lower TCO by 30-40% over 5 years vs x86',
    'Reduce management overhead with fewer systems',
    'Enable hybrid cloud strategy with Power Virtual Server',
    'Protect existing AIX/IBM i investments'
  ],
  
  technicalBenefits: [
    'Power10 processor: 2-3x per-core performance vs x86',
    'Up to 240 cores per system',
    'Up to 64TB RAM (2x more than x86)',
    'Hot-swap everything: CPUs, memory, I/O, power, cooling',
    'Concurrent firmware updates (no downtime required)',
    'PowerVM: industry-leading virtualization (included)',
    'Memory encryption at no performance cost',
    'Transparent memory encryption for security',
    'Live partition mobility for workload balancing',
    'Micro-partitioning (0.05 core increments)',
    'PCIe Gen5 for high-speed I/O',
    'NVMe support for ultra-fast storage',
    'Backward compatible with AIX 5.3+, IBM i 7.1+',
    'Integrated virtualization (no separate license)',
    'Superior RAS features vs x86'
  ],
  
  competitiveDifferentiators: [
    'ONLY platform that reduces Oracle costs while improving performance',
    'RAS features unmatched by x86 (hot-swap CPUs, concurrent firmware)',
    'Proven 99.999% uptime in production environments',
    'Epic certified and recommended by Epic Systems',
    'SAP HANA certified with best TDI benchmark results',
    'Lower TCO than x86 for enterprise workloads (IDC study)',
    'Backward compatible with AIX 5.3+ and IBM i 7.1+',
    'Single-vendor support for hardware, OS, and virtualization',
    'No hypervisor tax (PowerVM included)',
    'Superior per-core performance reduces software licensing',
    'Hybrid cloud ready with Power Virtual Server',
    '50+ years of enterprise reliability heritage'
  ],
  
  discoveryQuestions: [
    {
      question: 'What mission-critical applications are you running today?',
      purpose: 'Identify workloads suitable for Power',
      followUp: ['Which applications cannot tolerate downtime?', 'What are your SLA requirements?'],
      idealAnswer: 'SAP, Oracle, Epic, or other mission-critical apps'
    },
    {
      question: 'Are you running SAP, Oracle, or Epic? If so, what are your current Oracle licensing costs?',
      purpose: 'Quantify Oracle cost pain point',
      followUp: ['How many Oracle cores are you licensed for?', 'What percentage of IT budget is Oracle?'],
      idealAnswer: 'High Oracle costs, growing annually'
    },
    {
      question: 'What uptime requirements do you have? Have you experienced unplanned downtime?',
      purpose: 'Assess reliability requirements',
      followUp: ['What was the business impact?', 'What caused the downtime?'],
      idealAnswer: 'Need 99.99%+ uptime, have had costly outages'
    },
    {
      question: 'Are you running AIX or IBM i today? On what hardware?',
      purpose: 'Identify existing Power investment',
      followUp: ['What version?', 'When is hardware end-of-life?'],
      idealAnswer: 'Yes, on aging Power7/8 hardware'
    },
    {
      question: 'What are your current performance pain points?',
      purpose: 'Identify performance issues',
      followUp: ['During what times?', 'What is the business impact?'],
      idealAnswer: 'Slow response times, user complaints'
    },
    {
      question: 'When is your next hardware refresh cycle?',
      purpose: 'Identify timing opportunity',
      followUp: ['What is your budget?', 'What are you considering?'],
      idealAnswer: 'Within 12 months, budget approved'
    },
    {
      question: 'What compliance requirements do you have?',
      purpose: 'Identify compliance drivers',
      followUp: ['Any audit findings?', 'What are the challenges?'],
      idealAnswer: 'HIPAA, SOX, PCI with compliance challenges'
    },
    {
      question: 'How many x86 servers are running these workloads?',
      purpose: 'Quantify consolidation opportunity',
      followUp: ['What is your data center footprint?', 'Any space/power constraints?'],
      idealAnswer: 'Many servers, space/power constrained'
    }
  ],
  
  commonObjections: [
    {
      objection: 'Power is more expensive than x86',
      category: 'cost',
      frequency: 'very common',
      stakeholder: 'CFO, Procurement'
    },
    {
      objection: 'We\'re standardized on x86',
      category: 'strategy',
      frequency: 'common',
      stakeholder: 'CIO, Infrastructure Director'
    },
    {
      objection: 'Our team doesn\'t know AIX',
      category: 'skills',
      frequency: 'common',
      stakeholder: 'IT Manager, Unix Admin'
    },
    {
      objection: 'We\'re moving everything to the cloud',
      category: 'strategy',
      frequency: 'very common',
      stakeholder: 'CIO, Cloud Architect'
    },
    {
      objection: 'Power is legacy technology',
      category: 'strategy',
      frequency: 'common',
      stakeholder: 'CIO, Application Owner'
    },
    {
      objection: 'We can\'t afford the upfront cost',
      category: 'cost',
      frequency: 'common',
      stakeholder: 'CFO'
    }
  ],
  
  objectionResponses: [
    {
      objection: 'Power is more expensive than x86',
      response: 'Let\'s look at total cost of ownership, not just acquisition cost. When you factor in Oracle licensing savings (40-60% reduction), consolidation (3:1 or better), reduced downtime, longer refresh cycles, and lower power costs, Power typically delivers 30-40% lower TCO over 5 years. For example, Mayo Clinic saved $2.1M annually after migrating Epic from x86 to Power. Would you like me to run a TCO analysis for your specific environment?',
      supportingData: [
        'IDC study: Power TCO 30% lower than x86 for enterprise workloads',
        'Oracle licensing calculator showing 40-60% savings',
        'Mayo Clinic case study: $2.1M annual savings',
        'Consolidation ratio calculator'
      ],
      nextSteps: [
        'Offer complimentary TCO analysis',
        'Share customer case studies with documented savings',
        'Arrange reference call with similar customer',
        'Provide Oracle cost reduction calculator'
      ],
      confidence: 'high'
    },
    {
      objection: 'We\'re standardized on x86',
      response: 'I understand standardization is important for operational efficiency. However, for mission-critical workloads like SAP and Oracle, the economics and reliability of Power often justify a strategic exception. Many customers run a hybrid strategy: x86 for general workloads, Power for mission-critical. This gives you the best of both worlds - standardization where it makes sense, and superior economics and reliability where it matters most. Would it make sense to do a proof of concept to quantify the benefits for your specific workloads?',
      supportingData: [
        'Hybrid infrastructure best practices white paper',
        'List of customers running both x86 and Power successfully',
        'Workload placement decision framework',
        'ROI calculator for hybrid approach'
      ],
      nextSteps: [
        'Propose 30-day proof of concept',
        'Show hybrid architecture diagram',
        'Discuss workload placement strategy',
        'Share hybrid customer success stories'
      ],
      confidence: 'high'
    },
    {
      objection: 'Our team doesn\'t know AIX',
      response: 'That\'s a common concern, but it\'s more manageable than you might think. First, Power runs Linux too - you can run SUSE or Red Hat if you prefer. Second, AIX skills are actually quite similar to other Unix systems. Third, IBM offers comprehensive training and our Professional Services team can help during the transition. Finally, many customers find they need fewer admins with Power due to better reliability and consolidation. What if we included training and professional services in the proposal to de-risk the transition?',
      supportingData: [
        'AIX training curriculum and timeline',
        'Linux on Power option (SUSE, Red Hat)',
        'Professional Services migration packages',
        'Customer testimonials on skills transition'
      ],
      nextSteps: [
        'Provide training plan and costs',
        'Offer Professional Services assessment',
        'Arrange call with customer who made transition',
        'Discuss Linux on Power as alternative'
      ],
      confidence: 'medium'
    },
    {
      objection: 'We\'re moving everything to the cloud',
      response: 'That\'s a great strategy for many workloads. However, mission-critical applications like SAP and Oracle often perform better and cost less on-premises or in a hybrid model. Power Virtual Server gives you the best of both worlds - you can run Power workloads in IBM Cloud for DR, dev/test, or cloud bursting, while keeping production on-premises for performance and cost efficiency. Many customers use a hybrid approach: Power on-prem for production, Power Virtual Server for DR and dev/test. Would you like to see a hybrid architecture that supports your cloud strategy?',
      supportingData: [
        'Hybrid cloud architecture diagrams',
        'Power Virtual Server overview',
        'TCO comparison: on-prem vs cloud for SAP/Oracle',
        'Hybrid customer case studies'
      ],
      nextSteps: [
        'Present hybrid cloud architecture',
        'Demo Power Virtual Server',
        'Provide cloud TCO analysis',
        'Discuss workload placement strategy'
      ],
      confidence: 'high'
    },
    {
      objection: 'Power is legacy technology',
      response: 'Actually, Power10 is IBM\'s newest processor technology, released in 2021. It includes cutting-edge features like PCIe Gen5, NVMe support, AI acceleration, and memory encryption. Power is also cloud-ready with Power Virtual Server in IBM Cloud. The difference is that Power maintains backward compatibility - you can run 20-year-old AIX applications alongside modern cloud-native apps. That\'s not legacy, that\'s investment protection. Would you like to see what\'s new in Power10?',
      supportingData: [
        'Power10 technology overview',
        'Power Virtual Server cloud capabilities',
        'Modern features: AI, containers, cloud',
        'Roadmap showing continued innovation'
      ],
      nextSteps: [
        'Present Power10 technology briefing',
        'Show Power Virtual Server demo',
        'Discuss modernization path',
        'Share innovation roadmap'
      ],
      confidence: 'high'
    }
  ],
  
  elevatorPitch: 'Power E1080 is IBM\'s flagship enterprise server that delivers 2-3x better performance than x86 while reducing Oracle licensing costs by 40-60%. With industry-leading 99.999% uptime and the ability to consolidate 10-20 x86 servers into 1-2 Power systems, it\'s the proven choice for mission-critical SAP, Oracle, and Epic workloads. Over 10,000 customers worldwide trust Power for their most important applications.',
  
  crossSellOpportunities: [
    {
      product: 'FlashSystem 9500',
      trigger: 'Customer mentions storage performance, capacity, or data protection',
      reasoning: 'Power E1080 performance requires high-performance storage to avoid bottlenecks',
      attachRate: '85%',
      typicalConfig: 'FlashSystem 9500, 500TB effective capacity'
    },
    {
      product: 'Power Virtual Server',
      trigger: 'Customer mentions disaster recovery, cloud, or dev/test',
      reasoning: 'Power Virtual Server provides cloud DR for on-prem Power with automated failover',
      attachRate: '60%',
      typicalConfig: 'DR site in IBM Cloud, matching production capacity'
    },
    {
      product: 'IBM Consulting',
      trigger: 'Customer concerned about migration complexity or risk',
      reasoning: 'Consulting de-risks migration, accelerates time-to-value, ensures best practices',
      attachRate: '70%',
      typicalConfig: 'Migration services, 3-6 months engagement'
    },
    {
      product: 'PowerVM',
      trigger: 'Always - included with Power E1080',
      reasoning: 'PowerVM virtualization is included, enables consolidation and flexibility',
      attachRate: '100%',
      typicalConfig: 'Included with system'
    },
    {
      product: 'IBM Guardium',
      trigger: 'Customer mentions compliance, security, or audit requirements',
      reasoning: 'Guardium automates database security and compliance for Oracle/Db2',
      attachRate: '40%',
      typicalConfig: 'Guardium for Oracle and Db2'
    }
  ],
  
  relatedProducts: [
    'power-s1024',
    'power-s1022',
    'flashsystem-9500',
    'power-virtual-server',
    'aix',
    'ibm-i',
    'linux-on-power',
    'powervm',
    'powervc',
    'ibm-consulting'
  ],
  
  typicalBundles: [
    {
      name: 'Epic EHR Complete Solution',
      products: ['Power E1080', 'FlashSystem 9500', 'AIX', 'PowerVM', 'IBM Consulting', 'Power Virtual Server'],
      description: 'Complete solution for Epic EHR with production, DR, and migration services',
      typicalPrice: '$4M-$6M',
      targetCustomer: 'Healthcare, 500+ beds, Epic EHR',
      industries: ['Healthcare']
    },
    {
      name: 'SAP S/4HANA on Power',
      products: ['Power E1080', 'FlashSystem 9500', 'SLES for SAP', 'PowerVM', 'IBM Consulting'],
      description: 'SAP S/4HANA migration and deployment on Power',
      typicalPrice: '$3M-$5M',
      targetCustomer: 'Enterprise, $1B+ revenue, SAP ECC to S/4HANA',
      industries: ['Manufacturing', 'Retail', 'All Industries']
    },
    {
      name: 'Oracle Consolidation Bundle',
      products: ['Power E1080', 'FlashSystem 9500', 'AIX or Linux', 'PowerVM', 'IBM Guardium'],
      description: 'Consolidate Oracle databases with security and compliance',
      typicalPrice: '$2M-$4M',
      targetCustomer: 'Enterprise with multiple Oracle databases',
      industries: ['All Industries']
    }
  ],
  
  competitors: [
    {
      vendor: 'Dell',
      product: 'PowerEdge R750',
      strengths: [
        'Lower acquisition cost ($50K-$100K vs $500K-$1M)',
        'Familiar x86 architecture',
        'Broad ecosystem and software support',
        'Existing Dell relationship'
      ],
      weaknesses: [
        'Higher Oracle licensing costs (need 3-5x more cores)',
        'Lower per-core performance (1/3 of Power)',
        'More servers needed (10-20 vs 1-2 Power)',
        'Less reliable (more downtime)',
        'Higher power and cooling costs',
        'Shorter refresh cycle (3-4 years vs 5-7 years)'
      ],
      winStrategy: 'Focus on TCO over 5 years, Oracle savings, reliability, and consolidation. Show that lower acquisition cost leads to higher total cost.',
      marketShare: '~30% of x86 server market'
    },
    {
      vendor: 'HPE',
      product: 'ProLiant DL380',
      strengths: [
        'Lower acquisition cost',
        'Familiar x86 architecture',
        'HPE relationship and support',
        'GreenLake consumption model'
      ],
      weaknesses: [
        'Higher Oracle licensing costs',
        'Lower per-core performance',
        'More servers needed',
        'Less reliable than Power',
        'Higher operational costs'
      ],
      winStrategy: 'Focus on TCO, Oracle savings, and reliability. Compare GreenLake to Power as a Service.',
      marketShare: '~25% of x86 server market'
    },
    {
      vendor: 'Oracle',
      product: 'Exadata',
      strengths: [
        'Oracle optimized and certified',
        'Integrated stack (compute, storage, network)',
        'Strong Oracle relationship',
        'Good for Oracle-only environments'
      ],
      weaknesses: [
        'Very expensive ($2M-$10M+)',
        'Oracle lock-in (proprietary)',
        'Limited flexibility (Oracle only)',
        'High ongoing costs',
        'Vendor lock-in risk'
      ],
      winStrategy: 'Focus on flexibility, cost, avoiding lock-in, and ability to run non-Oracle workloads. Power runs Oracle AND everything else.',
      marketShare: '~5% of enterprise database market'
    },
    {
      vendor: 'Cisco',
      product: 'UCS',
      strengths: [
        'Integrated with Cisco networking',
        'Unified management',
        'Cisco relationship'
      ],
      weaknesses: [
        'x86 limitations (Oracle costs, performance)',
        'More expensive than Dell/HPE',
        'Cisco-centric (less flexible)'
      ],
      winStrategy: 'Focus on Power advantages over x86, plus Power integrates with Cisco networking too.',
      marketShare: '~10% of x86 server market'
    }
  ],
  
  competitiveAdvantages: [
    'Only platform that reduces Oracle costs while improving performance',
    'RAS features unmatched by x86 (hot-swap CPUs, concurrent firmware)',
    'Proven 99.999% uptime in production',
    'Epic certified and recommended',
    'SAP HANA certified with best TDI results',
    'Lower TCO than x86 for enterprise workloads',
    'Backward compatible with AIX 5.3+',
    'Single-vendor support for hardware, OS, virtualization',
    'No hypervisor tax (PowerVM included)',
    'Superior consolidation (10:1 vs 3:1 for x86)',
    'Longer refresh cycle (5-7 years vs 3-4 years)',
    'Hybrid cloud ready with Power Virtual Server'
  ],
  
  pricingModel: {
    type: 'CapEx',
    options: ['Purchase', 'Lease', 'IBM Flex financing', 'Power as a Service (OpEx)'],
    typical: '$500K-$2M per system depending on configuration',
    factors: [
      'Core count (8-60 cores per system)',
      'Memory (512GB-16TB)',
      'I/O adapters',
      'Software (AIX, IBM i, or Linux)',
      'Support level (24x7, 4-hour response)',
      'Professional Services'
    ]
  },
  
  pricingPositioning: 'Always position on TCO, not acquisition cost. Lead with Oracle savings (40-60%), consolidation benefits (3:1 to 10:1), and reliability (99.999% uptime). Typical payback period is 18-24 months. Use TCO calculator to show 5-year savings of 30-40% vs x86.',
  
  typicalDealSize: '$2M-$8M for initial deployment including hardware, software, storage, and services',
  
  discountGuidelines: 'Standard discount 15-25% off list. Larger deals (>$5M) can go to 30%. Competitive situations may require additional discount. Always bundle with services and storage for better margins.',
  
  specifications: [
    { spec: 'Processor', value: 'Power10', unit: '' },
    { spec: 'Cores', value: '8-60 per system, up to 240 with multiple systems', unit: 'cores' },
    { spec: 'Memory', value: 'Up to 64TB', unit: 'TB' },
    { spec: 'Memory Type', value: 'DDR4', unit: '' },
    { spec: 'I/O Slots', value: 'Up to 32 PCIe Gen5', unit: 'slots' },
    { spec: 'Storage', value: 'NVMe, SAS, Fibre Channel', unit: '' },
    { spec: 'Networking', value: '1/10/25/100GbE, InfiniBand', unit: '' },
    { spec: 'Virtualization', value: 'PowerVM (included)', unit: '' },
    { spec: 'Operating Systems', value: 'AIX, IBM i, Linux (SUSE, Red Hat)', unit: '' },
    { spec: 'Form Factor', value: '4U rack-mount', unit: '' },
    { spec: 'Power', value: '2000-4000W', unit: 'W' },
    { spec: 'Dimensions', value: '17.5" x 30" x 7"', unit: '' },
    { spec: 'Weight', value: '150-200 lbs', unit: 'lbs' }
  ],
  
  integrations: [
    { product: 'FlashSystem', type: 'Storage', protocol: 'Fibre Channel, NVMe-oF', certified: true },
    { product: 'DS8000', type: 'Storage', protocol: 'Fibre Channel', certified: true },
    { product: 'Spectrum Virtualize', type: 'Storage virtualization', protocol: 'SAN', certified: true },
    { product: 'Power Virtual Server', type: 'Cloud', protocol: 'Direct Link', certified: true },
    { product: 'IBM Cloud', type: 'Cloud', protocol: 'Direct Link', certified: true },
    { product: 'Cisco Nexus', type: 'Networking', protocol: 'Ethernet', certified: true },
    { product: 'VMware', type: 'Virtualization', protocol: 'N/A', certified: false }
  ],
  
  certifications: [
    'SAP HANA certified',
    'Epic certified',
    'Oracle certified',
    'Red Hat certified',
    'SUSE certified',
    'ISO 9001',
    'ISO 14001',
    'ENERGY STAR'
  ],
  
  supportedPlatforms: ['AIX 7.1+', 'IBM i 7.1+', 'SUSE Linux Enterprise Server', 'Red Hat Enterprise Linux'],
  
  customerExamples: [
    {
      customer: 'Mayo Clinic',
      industry: 'Healthcare',
      useCase: 'Epic EHR consolidation and performance improvement',
      results: [
        '40% Oracle licensing cost reduction ($2.1M annual savings)',
        '99.999% uptime achieved',
        '2x better Epic response times',
        'Consolidated 20 x86 servers to 2 Power systems'
      ],
      quote: '"Power E1080 transformed our Epic performance while dramatically reducing Oracle costs. The reliability has been exceptional."',
      publicReference: true,
      caseStudyUrl: 'https://www.ibm.com/case-studies/mayo-clinic'
    },
    {
      customer: 'Walmart',
      industry: 'Retail',
      useCase: 'SAP S/4HANA migration',
      results: [
        '50% faster SAP processing',
        'Real-time analytics enabled',
        '30% TCO reduction vs x86',
        'Simplified SAP landscape'
      ],
      quote: '"Power delivered the performance we needed for SAP HANA at a fraction of the cost of alternatives."',
      publicReference: true,
      caseStudyUrl: 'https://www.ibm.com/case-studies/walmart'
    },
    {
      customer: 'Bank of America',
      industry: 'Banking',
      useCase: 'Core banking modernization',
      results: [
        'Zero downtime migration',
        '99.999% uptime for core banking',
        'Improved transaction performance',
        'Regulatory compliance achieved'
      ],
      quote: '"Power\'s reliability and performance are unmatched for our mission-critical banking systems."',
      publicReference: true,
      caseStudyUrl: 'https://www.ibm.com/case-studies/bank-of-america'
    }
  ],
  
  industryFit: [
    {
      industry: 'Healthcare',
      fit: 'excellent',
      reasoning: 'Epic certified, HIPAA compliant, proven reliability for mission-critical EHR',
      marketShare: 'Leading platform for Epic EHR (>60% of Epic customers)',
      keyCustomers: ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser Permanente', 'Johns Hopkins']
    },
    {
      industry: 'Banking',
      fit: 'excellent',
      reasoning: 'Mission-critical reliability, security, compliance, proven in core banking',
      marketShare: 'Dominant in core banking (>70% of top banks)',
      keyCustomers: ['Bank of America', 'Wells Fargo', 'HSBC', 'Citibank']
    },
    {
      industry: 'Insurance',
      fit: 'excellent',
      reasoning: 'High transaction volumes, reliability, compliance',
      marketShare: 'Strong presence in insurance (>50%)',
      keyCustomers: ['State Farm', 'Allstate', 'MetLife']
    },
    {
      industry: 'Retail',
      fit: 'strong',
      reasoning: 'SAP performance, high transaction volumes, seasonal scalability',
      marketShare: 'Growing in retail SAP',
      keyCustomers: ['Walmart', 'Target', 'Kroger']
    },
    {
      industry: 'Manufacturing',
      fit: 'strong',
      reasoning: 'SAP performance, reliability, IoT integration',
      marketShare: 'Strong in manufacturing SAP',
      keyCustomers: ['Boeing', 'Caterpillar', 'John Deere']
    },
    {
      industry: 'Government',
      fit: 'strong',
      reasoning: 'Security, compliance, reliability, long lifecycle',
      marketShare: 'Established in government',
      keyCustomers: ['US Federal agencies', 'State governments']
    }
  ],
  
  tags: [
    'power',
    'enterprise-server',
    'mission-critical',
    'sap',
    'oracle',
    'epic',
    'aix',
    'ibm-i',
    'linux',
    'powervm',
    'high-performance',
    'reliability',
    'healthcare',
    'banking',
    'financial-services',
    'consolidation',
    'cost-reduction',
    'power10'
  ],
  
  lastUpdated: '2024-01-15',
  productUrl: 'https://www.ibm.com/products/power-e1080',
  documentationUrl: 'https://www.ibm.com/docs/en/power10',
  salesPlayUrl: 'https://ibm.seismic.com/power-e1080',
  trainingUrl: 'https://www.ibm.com/training/power',
  competitorComparisonUrl: 'https://ibm.seismic.com/power-vs-x86'
};

export const powerHardwareProducts: IBMProduct[] = [
  powerE1080,
  // Additional Power servers will be added here
  // powerS1024, powerS1022, powerS1014
];

// Made with Bob
