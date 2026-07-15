// IBM Storage Products
import { IBMProduct } from '../../types/products';

export const flashSystem9500: IBMProduct = {
  id: 'flashsystem-9500',
  name: 'IBM FlashSystem 9500',
  category: 'Storage',
  subcategory: 'All-Flash Array',
  description: 'Enterprise all-flash storage with AI-powered performance and cyber resilience',
  overview: 'FlashSystem 9500 is IBM\'s flagship enterprise storage array, delivering exceptional performance, reliability, and cyber resilience. With AI-powered optimization, up to 32GB/s throughput, and built-in ransomware protection, it\'s the ideal storage platform for mission-critical applications, databases, and virtualized environments.',
  
  idealCustomers: [
    {
      profile: 'Enterprise - Mission-Critical Applications',
      characteristics: [
        'Running SAP, Oracle, Epic, or other tier-1 applications',
        'Need for <1ms latency',
        'High IOPS requirements (>500K IOPS)',
        'Data protection and cyber resilience critical',
        'Existing SAN infrastructure',
        'Budget >$500K for storage'
      ],
      industries: ['Healthcare', 'Banking', 'Insurance', 'Manufacturing', 'Retail'],
      companySize: ['Large (1000-5000 employees)', 'Enterprise (5000+ employees)'],
      typicalBudget: '$500K-$3M'
    },
    {
      profile: 'Healthcare - Epic EHR Storage',
      characteristics: [
        'Epic EHR deployment',
        'Growing patient data volumes',
        'Need for instant recovery from ransomware',
        'HIPAA compliance required',
        'Performance critical for user experience'
      ],
      industries: ['Healthcare'],
      companySize: ['Large (1000-5000 employees)', 'Enterprise (5000+ employees)'],
      typicalBudget: '$800K-$2M'
    },
    {
      profile: 'Financial Services - Trading & Analytics',
      characteristics: [
        'Real-time trading systems',
        'High-frequency data access',
        'Zero tolerance for data loss',
        'Regulatory compliance (SOX, SEC)',
        'Need for instant failover'
      ],
      industries: ['Banking', 'Financial Services'],
      companySize: ['Enterprise (5000+ employees)'],
      typicalBudget: '$1M-$5M'
    }
  ],
  
  commonPainPoints: [
    {
      painPoint: 'Storage performance bottlenecks slowing applications',
      category: 'performance',
      severity: 'critical',
      frequency: 'very common',
      businessImpact: 'User complaints, productivity loss, revenue impact, SLA violations',
      technicalCause: 'Spinning disk latency, insufficient IOPS, storage controller limits',
      howProductHelps: 'FlashSystem delivers <100μs latency, 32GB/s throughput, 21M IOPS - eliminating storage as bottleneck'
    },
    {
      painPoint: 'Ransomware attacks encrypting production data',
      category: 'security',
      severity: 'critical',
      frequency: 'common',
      businessImpact: 'Business shutdown, ransom payments, data loss, reputation damage, regulatory fines',
      technicalCause: 'No immutable backups, slow recovery, insufficient protection',
      howProductHelps: 'SafeguardedCopy creates immutable snapshots, instant recovery (minutes not days), AI detects anomalies'
    },
    {
      painPoint: 'Storage capacity running out, expensive to expand',
      category: 'cost',
      severity: 'high',
      frequency: 'very common',
      businessImpact: 'Cannot add applications, emergency purchases, budget overruns',
      technicalCause: 'Data growth, inefficient storage, no compression/deduplication',
      howProductHelps: '5:1 data reduction (compression + deduplication), thin provisioning, capacity on demand'
    },
    {
      painPoint: 'Complex storage management consuming IT resources',
      category: 'operations',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'High operational costs, slow provisioning, human errors, limited scalability',
      technicalCause: 'Multiple storage systems, manual processes, no automation',
      howProductHelps: 'AI-powered automation, unified management, self-optimizing, predictive analytics'
    },
    {
      painPoint: 'Slow backup and recovery windows',
      category: 'reliability',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Long backup windows, slow recovery (hours/days), RTO/RPO violations',
      technicalCause: 'Disk-based backups, slow snapshots, complex recovery',
      howProductHelps: 'Instant snapshots (seconds), instant recovery, space-efficient copies'
    },
    {
      painPoint: 'Cannot meet compliance requirements for data protection',
      category: 'compliance',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Audit findings, potential fines, business risk, delayed projects',
      technicalCause: 'No immutable backups, insufficient retention, no air gap',
      howProductHelps: 'Immutable snapshots, automated retention, cyber vault, audit trails'
    }
  ],
  
  useCases: [
    {
      useCase: 'Epic EHR Storage Modernization',
      description: 'Replace aging SAN with FlashSystem for Epic EHR, improving performance and adding ransomware protection',
      benefits: [
        '10x faster Epic response times',
        'Instant recovery from ransomware',
        '60% storage footprint reduction',
        'HIPAA compliance built-in',
        'Simplified management'
      ],
      typicalConfig: 'FlashSystem 9500, 500TB effective, SafeguardedCopy',
      customerExample: 'Mayo Clinic',
      industry: 'Healthcare'
    },
    {
      useCase: 'SAP HANA Storage',
      description: 'High-performance storage for SAP HANA in-memory database',
      benefits: [
        'SAP HANA certified',
        '<100μs latency',
        'Fast backup/recovery',
        'Data reduction for cost savings',
        'Simplified management'
      ],
      typicalConfig: 'FlashSystem 9500, 1PB effective, NVMe',
      customerExample: 'Walmart',
      industry: 'Retail'
    },
    {
      useCase: 'VMware vSphere Storage',
      description: 'Consolidate VMware storage onto FlashSystem for performance and efficiency',
      benefits: [
        '5:1 consolidation ratio',
        'Faster VM performance',
        'Instant VM clones',
        'Simplified management',
        'Lower TCO'
      ],
      typicalConfig: 'FlashSystem 9500, 800TB effective, vVols',
      customerExample: 'Multiple customers',
      industry: 'All Industries'
    },
    {
      useCase: 'Ransomware Protection & Recovery',
      description: 'Protect critical data from ransomware with immutable snapshots and instant recovery',
      benefits: [
        'Immutable snapshots',
        'Instant recovery (minutes)',
        'AI anomaly detection',
        'Air-gapped copies',
        'No ransom payments'
      ],
      typicalConfig: 'FlashSystem 9500, SafeguardedCopy, Cyber Vault',
      customerExample: 'Multiple customers',
      industry: 'All Industries'
    }
  ],
  
  whenToRecommend: [
    'Customer running mission-critical applications (SAP, Oracle, Epic)',
    'Storage performance is a bottleneck',
    'Concerned about ransomware attacks',
    'Need for fast backup and recovery',
    'Running out of storage capacity',
    'High storage management costs',
    'Compliance requirements for data protection',
    'VMware or database consolidation',
    'Replacing aging SAN (EMC, NetApp, HPE)',
    'Need for <1ms latency',
    'High IOPS requirements (>100K)',
    'Data growth >30% annually',
    'Looking to reduce storage footprint',
    'Need for cyber resilience'
  ],
  
  whenNotToRecommend: [
    'Budget under $200K',
    'Small-scale deployments (<50TB)',
    'Archive or cold storage only',
    'No performance requirements',
    'Customer committed to hyperscaler cloud storage',
    'No SAN infrastructure or expertise',
    'Short-term project (<2 years)',
    'No mission-critical workloads',
    'Object storage requirements only'
  ],
  
  businessBenefits: [
    'Eliminate storage performance bottlenecks',
    'Protect against ransomware with instant recovery',
    'Reduce storage footprint 60-80% with data reduction',
    'Lower storage TCO 40-50% over 5 years',
    'Reduce management time 70% with AI automation',
    'Meet compliance requirements (HIPAA, SOX, PCI)',
    'Improve application performance 5-10x',
    'Accelerate backup/recovery 10-100x',
    'Reduce data center space and power 60%',
    'Enable business agility with instant provisioning',
    'Avoid ransom payments and business disruption',
    'Extend storage lifecycle 7-10 years'
  ],
  
  technicalBenefits: [
    '<100μs latency (microseconds)',
    'Up to 32GB/s throughput',
    'Up to 21M IOPS',
    '5:1 data reduction (compression + deduplication)',
    'NVMe and NVMe-oF support',
    'AI-powered optimization and prediction',
    'SafeguardedCopy immutable snapshots',
    'Instant snapshots (seconds)',
    'Instant recovery (minutes)',
    'FlashCore Modules (FCM) for performance',
    'End-to-end NVMe for lowest latency',
    'Inline compression and deduplication',
    'Thin provisioning',
    'Storage virtualization (Spectrum Virtualize)',
    'Multi-protocol support (FC, iSCSI, NVMe-oF)',
    'Active-active clustering',
    'Non-disruptive upgrades',
    '99.9999% availability'
  ],
  
  competitiveDifferentiators: [
    'ONLY storage with AI-powered cyber resilience (SafeguardedCopy)',
    'Fastest recovery from ransomware (minutes vs days)',
    'Best data reduction (5:1 guaranteed)',
    'Lowest latency (<100μs)',
    'Highest performance (21M IOPS, 32GB/s)',
    'Built-in storage virtualization (no extra cost)',
    'FlashCore Modules (proprietary technology)',
    'End-to-end NVMe architecture',
    'Non-disruptive everything (upgrades, migrations, scaling)',
    'Single pane of glass management',
    'Proven 99.9999% availability',
    'Lower TCO than competitors (IDC study)'
  ],
  
  discoveryQuestions: [
    {
      question: 'What storage are you using today? What are the pain points?',
      purpose: 'Identify current storage and issues',
      followUp: ['What applications are running on it?', 'When is it end-of-life?'],
      idealAnswer: 'Aging EMC/NetApp/HPE, performance issues, capacity constraints'
    },
    {
      question: 'Have you experienced ransomware attacks? What is your recovery plan?',
      purpose: 'Assess cyber resilience needs',
      followUp: ['How long would recovery take?', 'Do you have immutable backups?'],
      idealAnswer: 'Concerned about ransomware, no immutable backups, slow recovery'
    },
    {
      question: 'What are your storage performance requirements? Are you meeting them?',
      purpose: 'Quantify performance needs',
      followUp: ['What latency do you need?', 'What IOPS?', 'Any bottlenecks?'],
      idealAnswer: 'Need <1ms latency, >100K IOPS, current storage is bottleneck'
    },
    {
      question: 'How much storage capacity do you have? How fast is it growing?',
      purpose: 'Assess capacity needs',
      followUp: ['When will you run out?', 'What is the cost per TB?'],
      idealAnswer: 'Growing 30%+ annually, running out of space, expensive to expand'
    },
    {
      question: 'What applications are most critical? What are their storage needs?',
      purpose: 'Identify tier-1 workloads',
      followUp: ['What are the SLAs?', 'What happens if storage fails?'],
      idealAnswer: 'SAP, Oracle, Epic, or other mission-critical apps'
    },
    {
      question: 'How long do backups take? How long would recovery take?',
      purpose: 'Assess backup/recovery needs',
      followUp: ['What are your RTO/RPO requirements?', 'Any compliance requirements?'],
      idealAnswer: 'Long backup windows, slow recovery, not meeting RTO/RPO'
    },
    {
      question: 'What compliance requirements do you have for data protection?',
      purpose: 'Identify compliance drivers',
      followUp: ['Any audit findings?', 'What are the challenges?'],
      idealAnswer: 'HIPAA, SOX, PCI with compliance challenges'
    },
    {
      question: 'When is your next storage refresh? What is your budget?',
      purpose: 'Identify timing and budget',
      followUp: ['What are you considering?', 'What are the decision criteria?'],
      idealAnswer: 'Within 12 months, budget approved, evaluating options'
    }
  ],
  
  commonObjections: [
    {
      objection: 'FlashSystem is more expensive than competitors',
      category: 'cost',
      frequency: 'very common',
      stakeholder: 'CFO, Procurement'
    },
    {
      objection: 'We\'re standardized on EMC/NetApp/HPE',
      category: 'strategy',
      frequency: 'common',
      stakeholder: 'Storage Admin, Infrastructure Director'
    },
    {
      objection: 'We\'re moving storage to the cloud',
      category: 'strategy',
      frequency: 'very common',
      stakeholder: 'CIO, Cloud Architect'
    },
    {
      objection: 'Our current storage is good enough',
      category: 'status quo',
      frequency: 'common',
      stakeholder: 'Storage Admin'
    },
    {
      objection: 'We don\'t have budget this year',
      category: 'cost',
      frequency: 'common',
      stakeholder: 'CFO'
    },
    {
      objection: 'Implementation will be too disruptive',
      category: 'risk',
      frequency: 'common',
      stakeholder: 'IT Manager'
    }
  ],
  
  objectionResponses: [
    {
      objection: 'FlashSystem is more expensive than competitors',
      response: 'Let\'s look at total cost of ownership, not just acquisition cost. FlashSystem includes features that competitors charge extra for: storage virtualization ($50K-$100K), data reduction (5:1 guaranteed vs 2:1 typical), and cyber resilience. When you factor in better data reduction (60% less capacity needed), longer lifecycle (7-10 years vs 5 years), and lower management costs (70% less time), FlashSystem typically delivers 40-50% lower TCO over 5 years. Would you like me to run a TCO analysis for your environment?',
      supportingData: [
        'IDC study: FlashSystem TCO 40% lower than competitors',
        'Data reduction calculator showing 5:1 savings',
        'Feature comparison showing included vs extra-cost features',
        'Customer TCO case studies'
      ],
      nextSteps: [
        'Offer complimentary TCO analysis',
        'Share customer case studies with documented savings',
        'Provide feature comparison chart',
        'Arrange reference call with similar customer'
      ],
      confidence: 'high'
    },
    {
      objection: 'We\'re standardized on EMC/NetApp/HPE',
      response: 'I understand standardization is important. However, for mission-critical workloads, the superior performance, cyber resilience, and TCO of FlashSystem often justify a strategic exception. Many customers run a hybrid strategy: existing vendor for general storage, FlashSystem for tier-1 applications. This gives you the best of both worlds. Plus, FlashSystem can virtualize your existing storage, so you can manage everything from one console. Would it make sense to do a proof of concept for your most critical workload?',
      supportingData: [
        'Hybrid storage strategy white paper',
        'Storage virtualization benefits',
        'Customer examples of multi-vendor environments',
        'Migration tools and services'
      ],
      nextSteps: [
        'Propose 30-day proof of concept',
        'Demo storage virtualization',
        'Show hybrid architecture',
        'Discuss migration approach'
      ],
      confidence: 'high'
    },
    {
      objection: 'We\'re moving storage to the cloud',
      response: 'That\'s a great strategy for many workloads. However, mission-critical applications often perform better and cost less on-premises or in a hybrid model. Cloud storage can cost 3-5x more than on-prem for high-performance workloads, plus you have egress charges and latency. FlashSystem supports a hybrid approach: keep tier-1 apps on-prem for performance and cost, use cloud for DR, dev/test, or archive. Many customers use this hybrid model. Would you like to see a TCO comparison of on-prem vs cloud for your workloads?',
      supportingData: [
        'Cloud vs on-prem TCO calculator',
        'Hybrid storage architecture diagrams',
        'Cloud storage cost analysis',
        'Hybrid customer case studies'
      ],
      nextSteps: [
        'Provide cloud TCO analysis',
        'Present hybrid architecture',
        'Discuss workload placement strategy',
        'Show cloud integration options'
      ],
      confidence: 'high'
    },
    {
      objection: 'Our current storage is good enough',
      response: 'I hear that often, but let me ask: are you experiencing any performance issues? Any concerns about ransomware? Any capacity constraints? Most customers don\'t realize their storage is a bottleneck until they see the difference. FlashSystem customers typically see 5-10x better application performance, which translates to happier users and faster business processes. Plus, with ransomware attacks increasing 300% annually, cyber resilience is no longer optional. Would you be open to a performance assessment to quantify the opportunity?',
      supportingData: [
        'Performance assessment methodology',
        'Ransomware statistics and trends',
        'Before/after performance metrics from customers',
        'Business impact of storage performance'
      ],
      nextSteps: [
        'Offer complimentary performance assessment',
        'Share ransomware protection white paper',
        'Provide customer performance case studies',
        'Discuss cyber resilience strategy'
      ],
      confidence: 'medium'
    },
    {
      objection: 'We don\'t have budget this year',
      response: 'I understand budget constraints. However, the cost of NOT addressing storage issues can be significant: ransomware recovery costs average $1.85M, downtime costs $100K-$1M per hour, and inefficient storage wastes 30-40% of capacity. Many customers find that FlashSystem pays for itself in 18-24 months through Oracle savings, capacity reduction, and avoided downtime. We also offer flexible financing options including OpEx models. Would it make sense to quantify the cost of the status quo and explore financing options?',
      supportingData: [
        'Cost of ransomware statistics',
        'Cost of downtime calculator',
        'ROI calculator showing 18-24 month payback',
        'Financing options (lease, OpEx, etc.)'
      ],
      nextSteps: [
        'Calculate cost of status quo',
        'Provide ROI analysis',
        'Discuss financing options',
        'Explore budget timing for next fiscal year'
      ],
      confidence: 'medium'
    }
  ],
  
  elevatorPitch: 'FlashSystem 9500 is IBM\'s flagship enterprise storage that delivers <100μs latency, 21M IOPS, and AI-powered cyber resilience. With guaranteed 5:1 data reduction and instant recovery from ransomware, it\'s the proven choice for mission-critical SAP, Oracle, and Epic workloads. Over 20,000 customers worldwide trust FlashSystem for their most important data.',
  
  crossSellOpportunities: [
    {
      product: 'Power E1080',
      trigger: 'Customer mentions SAP, Oracle, or Epic',
      reasoning: 'FlashSystem is the ideal storage for Power servers running mission-critical workloads',
      attachRate: '70%',
      typicalConfig: 'Power E1080 + FlashSystem 9500'
    },
    {
      product: 'Spectrum Protect',
      trigger: 'Customer mentions backup, DR, or compliance',
      reasoning: 'Spectrum Protect provides enterprise backup/recovery for FlashSystem',
      attachRate: '50%',
      typicalConfig: 'FlashSystem + Spectrum Protect'
    },
    {
      product: 'IBM Consulting',
      trigger: 'Customer concerned about migration complexity',
      reasoning: 'Consulting de-risks migration, accelerates time-to-value',
      attachRate: '60%',
      typicalConfig: 'Migration services, 2-4 months'
    },
    {
      product: 'Storage Insights',
      trigger: 'Customer mentions management complexity',
      reasoning: 'Storage Insights provides AI-powered monitoring and optimization',
      attachRate: '40%',
      typicalConfig: 'SaaS subscription'
    },
    {
      product: 'Guardium',
      trigger: 'Customer mentions compliance or security',
      reasoning: 'Guardium provides database security and compliance',
      attachRate: '30%',
      typicalConfig: 'Guardium for databases on FlashSystem'
    }
  ],
  
  relatedProducts: [
    'power-e1080',
    'flashsystem-7300',
    'flashsystem-5200',
    'spectrum-virtualize',
    'spectrum-protect',
    'storage-insights',
    'guardium',
    'ibm-consulting'
  ],
  
  typicalBundles: [
    {
      name: 'Epic EHR Storage Solution',
      products: ['FlashSystem 9500', 'SafeguardedCopy', 'Storage Insights', 'IBM Consulting'],
      description: 'Complete storage solution for Epic EHR with cyber resilience',
      typicalPrice: '$800K-$1.5M',
      targetCustomer: 'Healthcare, Epic EHR, 500+ beds',
      industries: ['Healthcare']
    },
    {
      name: 'SAP HANA Storage',
      products: ['FlashSystem 9500', 'NVMe', 'Storage Insights'],
      description: 'High-performance storage for SAP HANA',
      typicalPrice: '$1M-$2M',
      targetCustomer: 'Enterprise, SAP HANA, >10TB database',
      industries: ['Manufacturing', 'Retail', 'All Industries']
    },
    {
      name: 'Ransomware Protection Bundle',
      products: ['FlashSystem 9500', 'SafeguardedCopy', 'Cyber Vault', 'Storage Insights'],
      description: 'Complete ransomware protection and recovery solution',
      typicalPrice: '$600K-$1.2M',
      targetCustomer: 'Any industry, concerned about ransomware',
      industries: ['All Industries']
    }
  ],
  
  competitors: [
    {
      vendor: 'Dell EMC',
      product: 'PowerStore',
      strengths: [
        'Dell relationship',
        'Broad product portfolio',
        'Good performance',
        'Competitive pricing'
      ],
      weaknesses: [
        'No built-in cyber resilience (requires extra products)',
        'Lower data reduction (2-3:1 vs 5:1)',
        'More complex management',
        'Storage virtualization costs extra',
        'Lower performance than FlashSystem'
      ],
      winStrategy: 'Focus on cyber resilience (SafeguardedCopy), better data reduction (5:1 guaranteed), included features (storage virtualization), and lower TCO.',
      marketShare: '~25% of enterprise storage market'
    },
    {
      vendor: 'NetApp',
      product: 'AFF A-Series',
      strengths: [
        'Strong in VMware environments',
        'Good data management features',
        'NetApp relationship',
        'Hybrid cloud integration'
      ],
      weaknesses: [
        'Lower performance than FlashSystem',
        'No built-in cyber resilience',
        'Lower data reduction',
        'More expensive for high-performance',
        'Complex licensing'
      ],
      winStrategy: 'Focus on performance (21M IOPS), cyber resilience, simpler licensing, and better TCO.',
      marketShare: '~20% of enterprise storage market'
    },
    {
      vendor: 'Pure Storage',
      product: 'FlashArray//X',
      strengths: [
        'Good performance',
        'Simple management',
        'Evergreen model (non-disruptive upgrades)',
        'Strong in all-flash'
      ],
      weaknesses: [
        'No built-in cyber resilience',
        'No storage virtualization',
        'Limited enterprise features',
        'Expensive for large deployments',
        'Less proven in mission-critical'
      ],
      winStrategy: 'Focus on cyber resilience, storage virtualization, enterprise features (RAS), and proven mission-critical track record.',
      marketShare: '~10% of enterprise storage market'
    },
    {
      vendor: 'HPE',
      product: 'Alletra',
      strengths: [
        'HPE relationship',
        'AI-powered management',
        'Cloud integration',
        'Competitive pricing'
      ],
      weaknesses: [
        'Newer product (less proven)',
        'No built-in cyber resilience',
        'Lower performance than FlashSystem',
        'Limited enterprise features'
      ],
      winStrategy: 'Focus on proven track record, cyber resilience, higher performance, and enterprise features.',
      marketShare: '~15% of enterprise storage market'
    }
  ],
  
  competitiveAdvantages: [
    'Only storage with AI-powered cyber resilience (SafeguardedCopy)',
    'Fastest recovery from ransomware (minutes vs days)',
    'Best data reduction (5:1 guaranteed vs 2-3:1 typical)',
    'Lowest latency (<100μs)',
    'Highest performance (21M IOPS, 32GB/s)',
    'Built-in storage virtualization (no extra cost)',
    'FlashCore Modules (proprietary technology)',
    'End-to-end NVMe architecture',
    'Non-disruptive everything',
    'Proven 99.9999% availability',
    'Lower TCO than competitors (IDC study)',
    'Single pane of glass management'
  ],
  
  pricingModel: {
    type: 'CapEx',
    options: ['Purchase', 'Lease', 'IBM Flex financing', 'Storage as a Service (OpEx)'],
    typical: '$300K-$1.5M depending on capacity and features',
    factors: [
      'Capacity (100TB-4PB effective)',
      'Performance tier (NVMe, SAS)',
      'Features (SafeguardedCopy, Cyber Vault)',
      'Support level (24x7, 4-hour response)',
      'Professional Services'
    ]
  },
  
  pricingPositioning: 'Always position on TCO, not acquisition cost. Lead with data reduction (5:1 = 60% less capacity needed), included features (storage virtualization, cyber resilience), and lower management costs. Typical payback period is 18-24 months. Use TCO calculator to show 5-year savings of 40-50% vs competitors.',
  
  typicalDealSize: '$500K-$2M for initial deployment including hardware, software, and services',
  
  discountGuidelines: 'Standard discount 20-30% off list. Larger deals (>$1M) can go to 35%. Competitive situations may require additional discount. Always bundle with services for better margins.',
  
  specifications: [
    { spec: 'Capacity', value: '100TB-4PB effective', unit: 'TB' },
    { spec: 'Performance', value: 'Up to 21M IOPS', unit: 'IOPS' },
    { spec: 'Throughput', value: 'Up to 32GB/s', unit: 'GB/s' },
    { spec: 'Latency', value: '<100μs', unit: 'μs' },
    { spec: 'Data Reduction', value: '5:1 guaranteed', unit: '' },
    { spec: 'Protocols', value: 'FC, iSCSI, NVMe-oF, NFS, SMB', unit: '' },
    { spec: 'Drive Types', value: 'NVMe, SAS SSD', unit: '' },
    { spec: 'Controllers', value: 'Active-active', unit: '' },
    { spec: 'Availability', value: '99.9999%', unit: '' },
    { spec: 'Snapshots', value: 'Unlimited', unit: '' },
    { spec: 'Replication', value: 'Synchronous, Asynchronous', unit: '' },
    { spec: 'Form Factor', value: '2U rack-mount', unit: '' },
    { spec: 'Power', value: '1000-2000W', unit: 'W' }
  ],
  
  integrations: [
    { product: 'Power E1080', type: 'Server', protocol: 'FC, NVMe-oF', certified: true },
    { product: 'VMware vSphere', type: 'Virtualization', protocol: 'FC, iSCSI, vVols', certified: true },
    { product: 'SAP HANA', type: 'Database', protocol: 'FC, NVMe-oF', certified: true },
    { product: 'Oracle', type: 'Database', protocol: 'FC, iSCSI', certified: true },
    { product: 'Epic', type: 'Application', protocol: 'FC', certified: true },
    { product: 'Red Hat OpenShift', type: 'Container Platform', protocol: 'iSCSI, NVMe-oF', certified: true },
    { product: 'Microsoft SQL Server', type: 'Database', protocol: 'FC, iSCSI', certified: true }
  ],
  
  certifications: [
    'SAP HANA certified',
    'Epic certified',
    'VMware certified',
    'Oracle certified',
    'Microsoft certified',
    'Red Hat certified',
    'ISO 9001',
    'ISO 27001'
  ],
  
  supportedPlatforms: ['AIX', 'Linux', 'Windows', 'VMware ESXi', 'IBM i'],
  
  customerExamples: [
    {
      customer: 'Mayo Clinic',
      industry: 'Healthcare',
      useCase: 'Epic EHR storage with ransomware protection',
      results: [
        '10x faster Epic response times',
        'Instant recovery from ransomware (tested)',
        '60% storage footprint reduction',
        '99.9999% availability achieved'
      ],
      quote: '"FlashSystem transformed our Epic performance and gave us confidence against ransomware attacks."',
      publicReference: true,
      caseStudyUrl: 'https://www.ibm.com/case-studies/mayo-clinic-storage'
    },
    {
      customer: 'Walmart',
      industry: 'Retail',
      useCase: 'SAP HANA storage',
      results: [
        '5x faster SAP queries',
        '70% storage footprint reduction',
        'Simplified management',
        'Lower TCO than previous storage'
      ],
      quote: '"FlashSystem delivered the performance we needed for SAP HANA at a fraction of the cost."',
      publicReference: true,
      caseStudyUrl: 'https://www.ibm.com/case-studies/walmart-storage'
    }
  ],
  
  industryFit: [
    {
      industry: 'Healthcare',
      fit: 'excellent',
      reasoning: 'Epic certified, HIPAA compliant, ransomware protection critical',
      marketShare: 'Leading storage for Epic EHR',
      keyCustomers: ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser Permanente']
    },
    {
      industry: 'Banking',
      fit: 'excellent',
      reasoning: 'Mission-critical reliability, security, compliance',
      marketShare: 'Strong presence in banking',
      keyCustomers: ['Bank of America', 'Wells Fargo', 'HSBC']
    },
    {
      industry: 'Manufacturing',
      fit: 'strong',
      reasoning: 'SAP performance, reliability, IoT data',
      marketShare: 'Growing in manufacturing',
      keyCustomers: ['Boeing', 'Caterpillar', 'John Deere']
    }
  ],
  
  tags: [
    'storage',
    'all-flash',
    'enterprise-storage',
    'flashsystem',
    'nvme',
    'cyber-resilience',
    'ransomware-protection',
    'safeguardedcopy',
    'high-performance',
    'data-reduction',
    'sap-hana',
    'epic',
    'vmware',
    'mission-critical',
    'healthcare',
    'banking',
    'financial-services'
  ],
  
  lastUpdated: '2024-01-15',
  productUrl: 'https://www.ibm.com/products/flashsystem-9500',
  documentationUrl: 'https://www.ibm.com/docs/en/flashsystem-9x00',
  salesPlayUrl: 'https://ibm.seismic.com/flashsystem-9500',
  trainingUrl: 'https://www.ibm.com/training/storage',
  competitorComparisonUrl: 'https://ibm.seismic.com/flashsystem-vs-competitors'
};

export const storageProducts: IBMProduct[] = [
  flashSystem9500,
  // Additional storage products will be added here
  // flashSystem7300, flashSystem5200, DS8900F
];

// Made with Bob
