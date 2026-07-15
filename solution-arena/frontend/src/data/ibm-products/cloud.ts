// IBM Cloud Products
import { IBMProduct } from '../../types/products';

export const powerVirtualServer: IBMProduct = {
  id: 'power-virtual-server',
  name: 'IBM Power Virtual Server',
  category: 'Cloud',
  subcategory: 'Infrastructure as a Service',
  description: 'Power servers in IBM Cloud for hybrid cloud and disaster recovery',
  overview: 'Power Virtual Server delivers Power infrastructure as a service in IBM Cloud, enabling hybrid cloud architectures, disaster recovery, and cloud bursting for AIX, IBM i, and Linux workloads. With the same Power10 technology as on-premises systems, it provides seamless integration and workload portability.',
  
  idealCustomers: [
    {
      profile: 'Enterprise - Hybrid Cloud Strategy',
      characteristics: [
        'Running AIX, IBM i, or Linux on Power on-premises',
        'Need for disaster recovery in the cloud',
        'Want to extend Power workloads to cloud',
        'Looking for dev/test environments in cloud',
        'Need for cloud bursting capability',
        'Budget for cloud services'
      ],
      industries: ['Healthcare', 'Banking', 'Insurance', 'Manufacturing', 'Retail'],
      companySize: ['Large (1000-5000 employees)', 'Enterprise (5000+ employees)'],
      typicalBudget: '$50K-$500K annually'
    },
    {
      profile: 'Healthcare - Epic DR',
      characteristics: [
        'Epic EHR on Power on-premises',
        'Need for disaster recovery',
        'HIPAA compliance required',
        'Want automated failover',
        'Cannot afford Epic downtime'
      ],
      industries: ['Healthcare'],
      companySize: ['Large (1000-5000 employees)', 'Enterprise (5000+ employees)'],
      typicalBudget: '$100K-$300K annually'
    },
    {
      profile: 'Financial Services - DR & Compliance',
      characteristics: [
        'Core banking on Power',
        'Regulatory DR requirements',
        'Need for rapid recovery',
        'Compliance requirements (SOX, Basel)',
        'Cannot use public cloud'
      ],
      industries: ['Banking', 'Financial Services'],
      companySize: ['Enterprise (5000+ employees)'],
      typicalBudget: '$200K-$1M annually'
    }
  ],
  
  commonPainPoints: [
    {
      painPoint: 'No disaster recovery for on-premises Power systems',
      category: 'disaster-recovery',
      severity: 'critical',
      frequency: 'very common',
      businessImpact: 'Business risk, compliance violations, potential for extended outages',
      technicalCause: 'No DR site, expensive to build second data center, complex DR setup',
      howProductHelps: 'Power Virtual Server provides cloud-based DR with automated failover, eliminating need for second data center'
    },
    {
      painPoint: 'Expensive to maintain dev/test environments on-premises',
      category: 'cost',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'High infrastructure costs, slow provisioning, limited environments',
      technicalCause: 'Need dedicated hardware for dev/test, underutilized capacity',
      howProductHelps: 'Spin up dev/test environments in minutes, pay only for what you use, scale up/down as needed'
    },
    {
      painPoint: 'Cannot extend Power workloads to cloud',
      category: 'cloud-migration',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'Stuck on-premises, cannot leverage cloud benefits, limited agility',
      technicalCause: 'No Power option in public cloud, x86 cloud incompatible with AIX/IBM i',
      howProductHelps: 'Run AIX, IBM i, and Linux on Power in IBM Cloud with same tools and processes'
    },
    {
      painPoint: 'Aging on-premises Power hardware approaching end-of-life',
      category: 'modernization',
      severity: 'high',
      frequency: 'common',
      businessImpact: 'High maintenance costs, security risks, cannot run new applications',
      technicalCause: 'Old Power7/8 hardware, no budget for refresh',
      howProductHelps: 'Migrate to Power10 in cloud without upfront capital, pay monthly OpEx'
    },
    {
      painPoint: 'Slow provisioning of new Power capacity',
      category: 'scalability',
      severity: 'medium',
      frequency: 'common',
      businessImpact: 'Delayed projects, missed opportunities, slow time-to-market',
      technicalCause: 'Long procurement cycles, complex installation, capacity planning',
      howProductHelps: 'Provision new Power capacity in minutes, scale up/down on demand'
    }
  ],
  
  useCases: [
    {
      useCase: 'Epic EHR Disaster Recovery',
      description: 'Cloud-based DR for Epic EHR with automated failover and testing',
      benefits: [
        'Automated failover in minutes',
        'Regular DR testing without disruption',
        'HIPAA compliant',
        'Lower cost than second data center',
        'Always up-to-date DR environment'
      ],
      typicalConfig: 'Power Virtual Server matching production, automated replication',
      customerExample: 'Multiple healthcare customers',
      industry: 'Healthcare'
    },
    {
      useCase: 'SAP Dev/Test in Cloud',
      description: 'Spin up SAP development and test environments in cloud',
      benefits: [
        'Provision in minutes vs weeks',
        'Pay only for what you use',
        'Scale up/down as needed',
        'Isolated from production',
        'Faster development cycles'
      ],
      typicalConfig: 'Multiple Power Virtual Servers for dev, test, QA',
      customerExample: 'Multiple SAP customers',
      industry: 'All Industries'
    },
    {
      useCase: 'AIX Modernization',
      description: 'Migrate aging AIX workloads to Power10 in cloud',
      benefits: [
        'No upfront capital required',
        'Power10 performance',
        'OpEx vs CapEx',
        'Simplified management',
        'Hybrid cloud ready'
      ],
      typicalConfig: 'Power Virtual Server with AIX 7.2+',
      customerExample: 'Multiple customers',
      industry: 'All Industries'
    },
    {
      useCase: 'Hybrid Cloud Architecture',
      description: 'Extend on-premises Power to cloud for flexibility',
      benefits: [
        'Seamless workload portability',
        'Cloud bursting capability',
        'Unified management',
        'Disaster recovery',
        'Dev/test in cloud'
      ],
      typicalConfig: 'On-prem Power + Power Virtual Server + Direct Link',
      customerExample: 'Multiple customers',
      industry: 'All Industries'
    }
  ],
  
  whenToRecommend: [
    'Customer has Power on-premises (AIX, IBM i, Linux)',
    'Need for disaster recovery',
    'Want to extend Power to cloud',
    'Need dev/test environments',
    'Aging Power hardware approaching end-of-life',
    'Want to avoid capital expense',
    'Need for rapid provisioning',
    'Hybrid cloud strategy',
    'Compliance requirements for DR',
    'Cannot afford second data center',
    'Want to test cloud before full migration',
    'Need for cloud bursting'
  ],
  
  whenNotToRecommend: [
    'No existing Power workloads',
    'Windows-only shop',
    'Workloads that must stay on-premises (regulatory)',
    'Very small workloads (<2 cores)',
    'No network connectivity to IBM Cloud',
    'Customer committed to other cloud provider',
    'No budget for cloud services',
    'Workloads with extreme latency requirements (<1ms)'
  ],
  
  businessBenefits: [
    'Disaster recovery without second data center (60-80% cost savings)',
    'OpEx vs CapEx (no upfront capital required)',
    'Rapid provisioning (minutes vs weeks)',
    'Pay only for what you use',
    'Scale up/down on demand',
    'Reduce risk of data loss or extended outages',
    'Meet compliance requirements for DR',
    'Enable hybrid cloud strategy',
    'Faster development cycles',
    'Lower TCO for dev/test',
    'Modernize aging infrastructure without capital',
    'Business agility and flexibility'
  ],
  
  technicalBenefits: [
    'Same Power10 technology as on-premises',
    'Run AIX, IBM i, and Linux',
    'Seamless workload portability',
    'Direct Link for low-latency connectivity',
    'Automated replication and failover',
    'Snapshot and backup capabilities',
    'Flexible sizing (0.25 to 32 cores per VM)',
    'Up to 1TB RAM per VM',
    'High-performance storage',
    'Integrated with IBM Cloud services',
    'API-driven automation',
    'Terraform support',
    'PowerVC integration',
    'Same tools and processes as on-prem'
  ],
  
  competitiveDifferentiators: [
    'ONLY Power infrastructure in public cloud',
    'Same Power10 technology as on-premises',
    'Seamless AIX and IBM i compatibility',
    'No re-platforming required',
    'Direct Link for low-latency connectivity',
    'Integrated with IBM Cloud services',
    'Proven for mission-critical workloads',
    'HIPAA, SOX, PCI compliant',
    'Lower cost than building second data center',
    'Faster provisioning than on-premises',
    'Flexible consumption model',
    'Enterprise-grade SLAs'
  ],
  
  discoveryQuestions: [
    {
      question: 'What Power workloads are you running on-premises? (AIX, IBM i, Linux)',
      purpose: 'Identify workloads suitable for cloud',
      followUp: ['What applications?', 'What are the business criticality?'],
      idealAnswer: 'AIX or IBM i workloads that need DR or cloud extension'
    },
    {
      question: 'Do you have disaster recovery for your Power systems?',
      purpose: 'Identify DR gap',
      followUp: ['What is your RTO/RPO?', 'How do you test DR?'],
      idealAnswer: 'No DR or expensive/complex DR setup'
    },
    {
      question: 'How long does it take to provision new Power capacity?',
      purpose: 'Identify provisioning pain',
      followUp: ['What is the process?', 'What are the delays?'],
      idealAnswer: 'Weeks or months, complex process'
    },
    {
      question: 'What is your strategy for dev/test environments?',
      purpose: 'Identify dev/test opportunity',
      followUp: ['How many environments?', 'What are the costs?'],
      idealAnswer: 'Expensive on-premises, limited capacity'
    },
    {
      question: 'When is your Power hardware end-of-life?',
      purpose: 'Identify refresh opportunity',
      followUp: ['What is your refresh budget?', 'What are you considering?'],
      idealAnswer: 'Approaching EOL, limited budget'
    },
    {
      question: 'What is your cloud strategy?',
      purpose: 'Understand cloud direction',
      followUp: ['Which cloud providers?', 'What workloads in cloud?'],
      idealAnswer: 'Hybrid cloud strategy, want to extend Power to cloud'
    },
    {
      question: 'What compliance requirements do you have for DR?',
      purpose: 'Identify compliance drivers',
      followUp: ['Any audit findings?', 'What are the requirements?'],
      idealAnswer: 'Regulatory requirements for DR (HIPAA, SOX, etc.)'
    }
  ],
  
  commonObjections: [
    {
      objection: 'Cloud is more expensive than on-premises',
      category: 'cost',
      frequency: 'very common',
      stakeholder: 'CFO, IT Manager'
    },
    {
      objection: 'We can\'t put production workloads in the cloud',
      category: 'risk',
      frequency: 'common',
      stakeholder: 'CIO, Application Owner'
    },
    {
      objection: 'We\'re standardized on AWS/Azure',
      category: 'strategy',
      frequency: 'common',
      stakeholder: 'CIO, Cloud Architect'
    },
    {
      objection: 'Cloud performance won\'t be good enough',
      category: 'performance',
      frequency: 'common',
      stakeholder: 'Application Owner, Architect'
    },
    {
      objection: 'Migration will be too complex',
      category: 'risk',
      frequency: 'common',
      stakeholder: 'IT Manager'
    },
    {
      objection: 'We don\'t have budget for cloud',
      category: 'cost',
      frequency: 'common',
      stakeholder: 'CFO'
    }
  ],
  
  objectionResponses: [
    {
      objection: 'Cloud is more expensive than on-premises',
      response: 'It depends on the use case. For disaster recovery, Power Virtual Server is 60-80% less expensive than building a second data center. For dev/test, you pay only for what you use, which is typically 50-70% less than dedicated on-premises hardware. For production, the economics depend on utilization - if you can scale down during off-hours, cloud can be very cost-effective. Plus, you avoid capital expense and can use OpEx budget. Would you like me to run a TCO comparison for your specific use case?',
      supportingData: [
        'DR cost comparison: cloud vs second data center',
        'Dev/test TCO calculator',
        'Production workload cost analysis',
        'Customer cost savings case studies'
      ],
      nextSteps: [
        'Provide TCO analysis for specific use case',
        'Share customer cost savings examples',
        'Discuss OpEx vs CapEx benefits',
        'Offer proof of concept to validate costs'
      ],
      confidence: 'high'
    },
    {
      objection: 'We can\'t put production workloads in the cloud',
      response: 'I understand that concern. Many customers start with DR or dev/test in cloud, then move production later once they\'re comfortable. Power Virtual Server has the same Power10 technology as on-premises, with enterprise-grade SLAs (99.95% availability). It\'s HIPAA, SOX, and PCI compliant. Many customers run mission-critical SAP, Oracle, and Epic in Power Virtual Server. What if we started with DR or dev/test to build confidence, then consider production later?',
      supportingData: [
        'Power Virtual Server SLAs and compliance',
        'Customer examples of production workloads',
        'Security and compliance white papers',
        'Phased migration approach'
      ],
      nextSteps: [
        'Propose starting with DR or dev/test',
        'Share production customer references',
        'Provide security and compliance documentation',
        'Discuss phased migration approach'
      ],
      confidence: 'high'
    },
    {
      objection: 'We\'re standardized on AWS/Azure',
      response: 'That makes sense for x86 workloads. However, AWS and Azure don\'t offer Power infrastructure, so your AIX and IBM i workloads can\'t run there. Power Virtual Server is specifically for Power workloads, and it integrates with other clouds via Direct Link. Many customers use a multi-cloud strategy: AWS/Azure for x86, IBM Cloud for Power. This gives you the best platform for each workload. Would it make sense to use IBM Cloud specifically for your Power workloads while keeping x86 on AWS/Azure?',
      supportingData: [
        'Multi-cloud architecture diagrams',
        'AWS/Azure integration via Direct Link',
        'Customer examples of multi-cloud',
        'Workload placement best practices'
      ],
      nextSteps: [
        'Present multi-cloud architecture',
        'Show AWS/Azure integration options',
        'Discuss workload placement strategy',
        'Share multi-cloud customer examples'
      ],
      confidence: 'high'
    },
    {
      objection: 'Cloud performance won\'t be good enough',
      response: 'Power Virtual Server uses the same Power10 processors as on-premises systems, so performance is comparable. With Direct Link, you get low-latency connectivity (typically <5ms). Many customers actually see better performance in cloud due to newer hardware and high-performance storage. We can do a proof of concept to measure actual performance for your workloads. What if we tested your most performance-sensitive workload to validate?',
      supportingData: [
        'Performance benchmarks',
        'Direct Link latency specifications',
        'Customer performance case studies',
        'Proof of concept methodology'
      ],
      nextSteps: [
        'Offer performance proof of concept',
        'Share performance benchmarks',
        'Discuss Direct Link connectivity',
        'Provide customer performance examples'
      ],
      confidence: 'high'
    }
  ],
  
  elevatorPitch: 'Power Virtual Server brings Power10 infrastructure to IBM Cloud, enabling disaster recovery, dev/test, and hybrid cloud for AIX, IBM i, and Linux workloads. With the same technology as on-premises Power systems, it provides seamless workload portability and eliminates the need for a second data center. Over 1,000 customers use Power Virtual Server for mission-critical workloads.',
  
  crossSellOpportunities: [
    {
      product: 'Power E1080',
      trigger: 'Customer has on-premises Power',
      reasoning: 'Power Virtual Server complements on-prem Power for hybrid cloud',
      attachRate: '80%',
      typicalConfig: 'On-prem production + cloud DR'
    },
    {
      product: 'Direct Link',
      trigger: 'Always - required for low-latency connectivity',
      reasoning: 'Direct Link provides secure, low-latency connection to IBM Cloud',
      attachRate: '90%',
      typicalConfig: 'Direct Link Connect or Dedicated'
    },
    {
      product: 'IBM Consulting',
      trigger: 'Customer concerned about migration',
      reasoning: 'Consulting de-risks migration, accelerates time-to-value',
      attachRate: '60%',
      typicalConfig: 'Migration services, 2-4 months'
    },
    {
      product: 'Spectrum Protect',
      trigger: 'Customer mentions backup/recovery',
      reasoning: 'Spectrum Protect provides backup for Power Virtual Server',
      attachRate: '40%',
      typicalConfig: 'Spectrum Protect in cloud'
    }
  ],
  
  relatedProducts: [
    'power-e1080',
    'direct-link',
    'ibm-cloud',
    'spectrum-protect',
    'powervc',
    'ibm-consulting'
  ],
  
  typicalBundles: [
    {
      name: 'Epic DR Solution',
      products: ['Power Virtual Server', 'Direct Link', 'Automated Replication', 'IBM Consulting'],
      description: 'Complete DR solution for Epic EHR',
      typicalPrice: '$150K-$300K annually',
      targetCustomer: 'Healthcare, Epic EHR',
      industries: ['Healthcare']
    },
    {
      name: 'Hybrid Cloud Bundle',
      products: ['Power E1080 on-prem', 'Power Virtual Server', 'Direct Link', 'PowerVC'],
      description: 'Hybrid cloud architecture for Power workloads',
      typicalPrice: '$200K-$500K annually (cloud portion)',
      targetCustomer: 'Enterprise with Power on-premises',
      industries: ['All Industries']
    },
    {
      name: 'Dev/Test Cloud',
      products: ['Power Virtual Server', 'Direct Link', 'Automation Tools'],
      description: 'Cloud-based dev/test environments',
      typicalPrice: '$50K-$150K annually',
      targetCustomer: 'Any customer with Power workloads',
      industries: ['All Industries']
    }
  ],
  
  competitors: [
    {
      vendor: 'AWS',
      product: 'EC2',
      strengths: [
        'Market leader',
        'Broad service portfolio',
        'Global presence',
        'Competitive pricing for x86'
      ],
      weaknesses: [
        'No Power infrastructure',
        'Cannot run AIX or IBM i',
        'Would require re-platforming',
        'No seamless migration from Power'
      ],
      winStrategy: 'Emphasize that AWS cannot run Power workloads. Power Virtual Server is the only option for AIX and IBM i in public cloud.',
      marketShare: '~32% of cloud market'
    },
    {
      vendor: 'Microsoft',
      product: 'Azure',
      strengths: [
        'Strong enterprise presence',
        'Microsoft integration',
        'Hybrid cloud capabilities',
        'Competitive pricing'
      ],
      weaknesses: [
        'No Power infrastructure',
        'Cannot run AIX or IBM i',
        'Would require re-platforming',
        'No seamless migration from Power'
      ],
      winStrategy: 'Emphasize that Azure cannot run Power workloads. Suggest multi-cloud: Azure for Windows, IBM Cloud for Power.',
      marketShare: '~21% of cloud market'
    },
    {
      vendor: 'Google',
      product: 'GCP',
      strengths: [
        'Strong in data/analytics',
        'Competitive pricing',
        'Innovation focus'
      ],
      weaknesses: [
        'No Power infrastructure',
        'Cannot run AIX or IBM i',
        'Smaller enterprise presence',
        'Would require re-platforming'
      ],
      winStrategy: 'Emphasize that GCP cannot run Power workloads. Power Virtual Server is the only option.',
      marketShare: '~10% of cloud market'
    }
  ],
  
  competitiveAdvantages: [
    'ONLY Power infrastructure in public cloud',
    'Run AIX, IBM i, and Linux without re-platforming',
    'Same Power10 technology as on-premises',
    'Seamless workload portability',
    'No application changes required',
    'Direct Link for low-latency connectivity',
    'Enterprise-grade SLAs',
    'HIPAA, SOX, PCI compliant',
    'Proven for mission-critical workloads',
    'Integrated with IBM Cloud services',
    'Lower cost than second data center for DR',
    'Flexible consumption model'
  ],
  
  pricingModel: {
    type: 'OpEx',
    options: ['Pay-as-you-go', 'Monthly subscription', 'Reserved capacity'],
    typical: '$200-$500 per core per month depending on configuration',
    factors: [
      'Number of cores',
      'Amount of RAM',
      'Storage capacity',
      'Network bandwidth',
      'Support level',
      'Reserved vs on-demand'
    ]
  },
  
  pricingPositioning: 'Position on TCO and OpEx benefits. For DR, compare to cost of second data center (60-80% savings). For dev/test, emphasize pay-only-for-what-you-use (50-70% savings vs dedicated hardware). For production, show flexibility to scale up/down. Always include Direct Link costs in total.',
  
  typicalDealSize: '$50K-$500K annually depending on workload size and use case',
  
  discountGuidelines: 'Standard discount 10-20% for annual commit. Larger deals (>$200K annually) can go to 25%. Reserved capacity offers 30-40% discount vs on-demand. Bundle with Direct Link and services for better value.',
  
  specifications: [
    { spec: 'Processor', value: 'Power10', unit: '' },
    { spec: 'Cores per VM', value: '0.25 to 32', unit: 'cores' },
    { spec: 'Memory per VM', value: 'Up to 1TB', unit: 'TB' },
    { spec: 'Storage', value: 'Tier 1 (NVMe) or Tier 3 (SSD)', unit: '' },
    { spec: 'Network', value: 'Up to 10Gbps', unit: '' },
    { spec: 'Operating Systems', value: 'AIX 7.1+, IBM i 7.1+, Linux', unit: '' },
    { spec: 'Availability SLA', value: '99.95%', unit: '' },
    { spec: 'Backup', value: 'Snapshots, IBM Spectrum Protect', unit: '' },
    { spec: 'Replication', value: 'Automated replication available', unit: '' },
    { spec: 'Regions', value: 'Multiple global regions', unit: '' }
  ],
  
  integrations: [
    { product: 'Power E1080', type: 'On-premises server', protocol: 'Direct Link', certified: true },
    { product: 'Direct Link', type: 'Network connectivity', protocol: 'Dedicated/Connect', certified: true },
    { product: 'IBM Cloud Object Storage', type: 'Storage', protocol: 'S3 API', certified: true },
    { product: 'PowerVC', type: 'Management', protocol: 'API', certified: true },
    { product: 'Spectrum Protect', type: 'Backup', protocol: 'Native', certified: true },
    { product: 'Terraform', type: 'Automation', protocol: 'API', certified: true }
  ],
  
  certifications: [
    'HIPAA compliant',
    'SOX compliant',
    'PCI DSS compliant',
    'ISO 27001',
    'SOC 1/2/3',
    'GDPR compliant'
  ],
  
  supportedPlatforms: ['AIX 7.1+', 'IBM i 7.1+', 'SUSE Linux Enterprise Server', 'Red Hat Enterprise Linux'],
  
  customerExamples: [
    {
      customer: 'Multiple Healthcare Customers',
      industry: 'Healthcare',
      useCase: 'Epic EHR disaster recovery',
      results: [
        'Automated DR failover in minutes',
        '60% cost savings vs second data center',
        'Regular DR testing without disruption',
        'HIPAA compliance achieved'
      ],
      quote: '"Power Virtual Server gave us enterprise-grade DR for Epic without the cost of a second data center."',
      publicReference: false,
      caseStudyUrl: ''
    },
    {
      customer: 'Multiple Banking Customers',
      industry: 'Banking',
      useCase: 'Core banking DR and dev/test',
      results: [
        'Regulatory DR requirements met',
        'Faster development cycles',
        'Lower TCO for dev/test',
        'Hybrid cloud architecture'
      ],
      quote: '"Power Virtual Server enabled our hybrid cloud strategy while maintaining our Power investments."',
      publicReference: false,
      caseStudyUrl: ''
    }
  ],
  
  industryFit: [
    {
      industry: 'Healthcare',
      fit: 'excellent',
      reasoning: 'Epic DR, HIPAA compliant, proven for mission-critical',
      marketShare: 'Growing rapidly in healthcare',
      keyCustomers: ['Multiple healthcare systems']
    },
    {
      industry: 'Banking',
      fit: 'excellent',
      reasoning: 'Core banking DR, regulatory compliance, proven reliability',
      marketShare: 'Strong presence in banking',
      keyCustomers: ['Multiple banks']
    },
    {
      industry: 'Insurance',
      fit: 'strong',
      reasoning: 'DR, compliance, hybrid cloud',
      marketShare: 'Growing in insurance',
      keyCustomers: ['Multiple insurers']
    }
  ],
  
  tags: [
    'cloud',
    'iaas',
    'power',
    'hybrid-cloud',
    'disaster-recovery',
    'dev-test',
    'aix',
    'ibm-i',
    'linux',
    'power10',
    'power-virtual-server',
    'pvs',
    'opex',
    'consumption-model'
  ],
  
  lastUpdated: '2024-01-15',
  productUrl: 'https://www.ibm.com/products/power-virtual-server',
  documentationUrl: 'https://cloud.ibm.com/docs/power-iaas',
  salesPlayUrl: 'https://ibm.seismic.com/power-virtual-server',
  trainingUrl: 'https://www.ibm.com/training/cloud',
  competitorComparisonUrl: 'https://ibm.seismic.com/pvs-vs-cloud'
};

export const cloudProducts: IBMProduct[] = [
  powerVirtualServer,
  // Additional cloud products will be added here
  // ibmCloud, watsonx, redHatOpenShift
];

// Made with Bob
