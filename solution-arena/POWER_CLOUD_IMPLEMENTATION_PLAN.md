
# IBM Power & Cloud Specialist - Complete Implementation Plan

## Executive Summary

This document outlines the complete implementation of an enterprise-grade IBM Power & Cloud sales training platform, running entirely on GitHub Pages with zero backend dependencies.

## Architecture Overview

```
IBM DealSprint Training Platform
├── Core Training Tracks
│   ├── Existing Tracks (preserved)
│   └── NEW: IBM Power & Cloud Specialist ⭐
├── Product Knowledge Library
├── Customer Opportunity Analyzer (Document Parser)
├── Intelligent Recommendation Engine
├── Enterprise Analytics Dashboard
└── Centralized Knowledge Base
```

## Technology Stack (100% Frontend)

- **Framework:** React 18 + Vite
- **Language:** TypeScript (migration from JavaScript)
- **Styling:** TailwindCSS + IBM Carbon Design
- **State:** React Context + localStorage
- **Routing:** React Router (HashRouter)
- **Document Parsing:** pdf.js, mammoth, PapaParse
- **Charts:** Recharts, D3.js
- **Animation:** Framer Motion
- **Icons:** Lucide React + IBM Icons

**NO Backend:** Express ❌ | PostgreSQL ❌ | Firebase ❌ | APIs ❌

---

## STAGE 1: Power & Cloud Sales Track

### 1.1 New Folder Structure

```
frontend/src/
├── tracks/
│   ├── power-cloud/
│   │   ├── scenarios/
│   │   │   ├── healthcare.ts
│   │   │   ├── banking.ts
│   │   │   ├── insurance.ts
│   │   │   ├── retail.ts
│   │   │   ├── manufacturing.ts
│   │   │   ├── government.ts
│   │   │   ├── telecommunications.ts
│   │   │   ├── utilities.ts
│   │   │   ├── higher-education.ts
│   │   │   └── oil-gas.ts
│   │   ├── components/
│   │   │   ├── PowerCloudScenario.tsx
│   │   │   ├── PainPointDiscovery.tsx
│   │   │   ├── SolutionMapping.tsx
│   │   │   ├── ObjectionHandling.tsx
│   │   │   └── CrossSellOpportunity.tsx
│   │   ├── pages/
│   │   │   ├── PowerCloudTrackHome.tsx
│   │   │   ├── ScenarioSelection.tsx
│   │   │   └── ScenarioExecution.tsx
│   │   └── index.ts
│   └── existing-tracks/ (preserved)
```

### 1.2 Scenario Data Structure

```typescript
// frontend/src/tracks/power-cloud/types.ts

export interface PowerCloudScenario {
  id: string;
  industry: Industry;
  customer: CustomerProfile;
  currentState: CurrentInfrastructure;
  businessContext: BusinessContext;
  challenges: Challenge[];
  objectives: BusinessObjective[];
  constraints: Constraints;
  stakeholders: Stakeholder[];
  competitors: Competitor[];
  idealSolution: IdealSolution;
  scoringCriteria: ScoringCriteria;
}

export interface CustomerProfile {
  name: string;
  industry: Industry;
  size: CompanySize;
  revenue: string;
  employees: number;
  locations: number;
  headquarters: string;
  description: string;
}

export interface CurrentInfrastructure {
  servers: Server[];
  operatingSystems: OperatingSystem[];
  databases: Database[];
  storage: StorageSystem[];
  virtualization: VirtualizationPlatform[];
  cloud: CloudProvider[];
  applications: Application[];
  networkingEquipment: string[];
}

export interface Challenge {
  id: string;
  category: ChallengeCategory;
  description: string;
  businessImpact: string;
  technicalImpact: string;
  urgency: 'critical' | 'high' | 'medium' | 'low';
  cost: string;
  affectedStakeholders: string[];
}

export type ChallengeCategory =
  | 'performance'
  | 'cost'
  | 'scalability'
  | 'reliability'
  | 'security'
  | 'compliance'
  | 'modernization'
  | 'cloud-migration'
  | 'disaster-recovery'
  | 'ai-readiness';

export interface BusinessObjective {
  id: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  timeline: string;
  successMetrics: string[];
  budget: string;
}

export interface Constraints {
  budget: BudgetConstraint;
  timeline: TimelineConstraint;
  technical: TechnicalConstraint[];
  compliance: ComplianceRequirement[];
  organizational: OrganizationalConstraint[];
}

export interface IdealSolution {
  primary: IBMProduct[];
  secondary: IBMProduct[];
  architecture: ArchitectureRecommendation;
  implementation: ImplementationPlan;
  businessCase: BusinessCase;
  competitiveAdvantages: string[];
  risks: Risk[];
  mitigations: string[];
}

export interface ScoringCriteria {
  painPointDiscovery: {
    weight: number;
    keyPoints: string[];
  };
  businessAlignment: {
    weight: number;
    keyFactors: string[];
  };
  technicalAccuracy: {
    weight: number;
    requiredProducts: string[];
  };
  consultativeApproach: {
    weight: number;
    expectedBehaviors: string[];
  };
  competitivePositioning: {
    weight: number;
    keyDifferentiators: string[];
  };
  crossSelling: {
    weight: number;
    opportunities: string[];
  };
}
```

### 1.3 Example Scenario: Healthcare

```typescript
// frontend/src/tracks/power-cloud/scenarios/healthcare.ts

export const healthcareScenario: PowerCloudScenario = {
  id: 'healthcare-001',
  industry: 'Healthcare',
  customer: {
    name: 'MedCare Regional Health System',
    industry: 'Healthcare',
    size: 'Large Enterprise',
    revenue: '$3.2B',
    employees: 12000,
    locations: 15,
    headquarters: 'Boston, MA',
    description: 'Regional healthcare system with 8 hospitals, 45 clinics, and 2 research centers'
  },
  currentState: {
    servers: [
      { vendor: 'HP', model: 'ProLiant DL380', quantity: 45, age: 6 },
      { vendor: 'Dell', model: 'PowerEdge R740', quantity: 30, age: 4 }
    ],
    operatingSystems: [
      { name: 'Windows Server', version: '2016', instances: 40 },
      { name: 'RHEL', version: '7', instances: 25 },
      { name: 'AIX', version: '7.1', instances: 10 }
    ],
    databases: [
      { name: 'Oracle', version: '12c', workload: 'Epic EHR', size: '45TB' },
      { name: 'SQL Server', version: '2017', workload: 'Clinical apps', size: '12TB' },
      { name: 'Db2', version: '11.1', workload: 'Legacy systems', size: '8TB' }
    ],
    storage: [
      { vendor: 'NetApp', model: 'FAS8200', capacity: '500TB', age: 5 },
      { vendor: 'EMC', model: 'Unity 600', capacity: '200TB', age: 3 }
    ],
    virtualization: [
      { platform: 'VMware vSphere', version: '6.7', vms: 450 }
    ],
    cloud: [
      { provider: 'AWS', services: ['S3', 'EC2'], usage: 'Backup, Dev/Test' }
    ],
    applications: [
      { name: 'Epic EHR', criticality: 'mission-critical' },
      { name: 'PACS', criticality: 'mission-critical' },
      { name: 'Revenue Cycle', criticality: 'high' },
      { name: 'Clinical Decision Support', criticality: 'high' }
    ],
    networkingEquipment: ['Cisco Nexus', 'F5 Load Balancers']
  },
  businessContext: {
    recentEvents: [
      'Acquired 2 smaller hospitals in past 18 months',
      'Board approved $50M digital transformation initiative',
      'New CIO hired from Mayo Clinic',
      'Facing pressure from value-based care models'
    ],
    strategicInitiatives: [
      'Implement AI for diagnostic imaging',
      'Improve patient experience scores',
      'Reduce IT operational costs by 25%',
      'Achieve HITRUST certification',
      'Enable telemedicine at scale'
    ],
    competitivePressure: [
      'Competing health systems investing heavily in AI',
      'Patient satisfaction scores below regional average',
      'Losing physicians to competitors with better technology'
    ]
  },
  challenges: [
    {
      id: 'ch-001',
      category: 'performance',
      description: 'Epic EHR response times degrading during peak hours, affecting clinical workflows',
      businessImpact: 'Physician complaints increasing, patient wait times up 15%, risk of Epic contract penalties',
      technicalImpact: 'Oracle database CPU at 85% sustained, storage IOPS bottleneck, aging HP servers',
      urgency: 'critical',
      cost: '$2M annual productivity loss estimated',
      affectedStakeholders: ['CIO', 'CMIO', 'Clinical Staff', 'Patients']
    },
    {
      id: 'ch-002',
      category: 'cost',
      description: 'Oracle licensing costs increasing 12% annually, now $4.5M/year',
      businessImpact: 'Consuming 18% of IT budget, limiting other investments',
      technicalImpact: 'Locked into Oracle due to Epic dependency, limited negotiation leverage',
      urgency: 'high',
      cost: '$4.5M annual, growing',
      affectedStakeholders: ['CFO', 'CIO']
    },
    {
      id: 'ch-003',
      category: 'ai-readiness',
      description: 'Cannot implement AI diagnostic tools due to infrastructure limitations',
      businessImpact: 'Falling behind competitors, missing revenue opportunities, physician recruitment challenges',
      technicalImpact: 'No GPU infrastructure, data silos, insufficient compute for ML training',
      urgency: 'high',
      cost: 'Opportunity cost: $5M+ annually',
      affectedStakeholders: ['CEO', 'CMO', 'CIO', 'Radiologists']
    },
    {
      id: 'ch-004',
      category: 'disaster-recovery',
      description: 'DR site 200 miles away, 4-hour RTO, 1-hour RPO, manual failover',
      businessImpact: 'Regulatory risk, patient safety risk, potential $10M+ loss in major outage',
      technicalImpact: 'Tape-based backup, no automated failover, untested DR procedures',
      urgency: 'high',
      cost: 'Risk exposure: $10M+',
      affectedStakeholders: ['CIO', 'CISO', 'Board']
    },
    {
      id: 'ch-005',
      category: 'compliance',
      description: 'Struggling to maintain HIPAA compliance across hybrid environment',
      businessImpact: 'Audit findings, potential fines, reputation risk',
      technicalImpact: 'Inconsistent security controls, manual compliance reporting, visibility gaps',
      urgency: 'high',
      cost: 'Potential fines: $1M+',
      affectedStakeholders: ['CISO', 'Compliance Officer', 'Legal']
    }
  ],
  objectives: [
    {
      id: 'obj-001',
      description: 'Improve Epic EHR performance by 40% during peak hours',
      priority: 'critical',
      timeline: '6 months',
      successMetrics: ['Sub-2-second response times', '99.99% uptime', 'Zero physician complaints'],
      budget: '$8M'
    },
    {
      id: 'obj-002',
      description: 'Reduce Oracle licensing costs by 30% while improving performance',
      priority: 'critical',
      timeline: '12 months',
      successMetrics: ['$1.35M annual savings', 'Better performance', 'No Epic disruption'],
      budget: 'Included in infrastructure refresh'
    },
    {
      id: 'obj-003',
      description: 'Implement AI-powered diagnostic imaging within 18 months',
      priority: 'high',
      timeline: '18 months',
      successMetrics: ['20% faster radiology reads', 'Improved diagnostic accuracy', 'Physician adoption >80%'],
      budget: '$3M'
    },
    {
      id: 'obj-004',
      description: 'Achieve 15-minute RTO and 5-minute RPO for mission-critical systems',
      priority: 'high',
      timeline: '9 months',
      successMetrics: ['Automated failover', 'Tested quarterly', 'Zero data loss'],
      budget: '$2M'
    }
  ],
  constraints: {
    budget: {
      total: '$15M over 3 years',
      yearOne: '$8M',
      yearTwo: '$4M',
      yearThree: '$3M',
      approvalRequired: '>$1M',
      restrictions: ['Must show ROI within 24 months', 'Prefer OpEx over CapEx']
    },
    timeline: {
      overall: '36 months',
      phase1: '6 months - Epic performance',
      phase2: '12 months - DR and compliance',
      phase3: '18 months - AI implementation',
      criticalDeadlines: ['Epic contract renewal in 8 months', 'HITRUST audit in 10 months']
    },
    technical: [
      'Zero downtime for Epic EHR',
      'Must support AIX for legacy apps',
      'Epic certified infrastructure required',
      'HIPAA and HITRUST compliant',
      'Integration with existing VMware environment'
    ],
    compliance: [
      { standard: 'HIPAA', requirement: 'Full compliance', deadline: 'Ongoing' },
      { standard: 'HITRUST', requirement: 'Certification', deadline: '10 months' },
      { standard: 'SOC 2', requirement: 'Type II', deadline: '12 months' }
    ],
    organizational: [
      'IT staff has limited cloud experience',
      'Change control board meets monthly',
      'Physician resistance to change',
      'Union contracts limit staff changes'
    ]
  },
  stakeholders: [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Information Officer',
      influence: 'high',
      supportLevel: 'champion',
      priorities: ['Epic performance', 'Cost reduction', 'AI enablement'],
      concerns: ['Implementation risk', 'Staff training', 'Vendor lock-in'],
      decisionCriteria: ['Proven healthcare experience', 'Epic partnership', 'Strong support']
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Financial Officer',
      influence: 'high',
      supportLevel: 'neutral',
      priorities: ['Cost reduction', 'ROI', 'OpEx model'],
      concerns: ['Upfront costs', 'Hidden fees', 'Long-term commitments'],
      decisionCriteria: ['Clear ROI', 'Flexible pricing', 'Cost predictability']
    },
    {
      name: 'Dr. Jennifer Park',
      title: 'Chief Medical Information Officer',
      influence: 'high',
      supportLevel: 'supportive',
      priorities: ['Clinical workflow', 'Patient safety', 'AI capabilities'],
      concerns: ['Physician adoption', 'Training burden', 'Downtime'],
      decisionCriteria: ['Clinical validation', 'Ease of use', 'Physician input']
    }
  ],
  competitors: [
    {
      vendor: 'Dell/VMware',
      solution: 'VxRail + VMware Cloud',
      strengths: ['Existing relationship', 'VMware expertise', 'Simple procurement'],
      weaknesses: ['Higher Oracle costs', 'Limited AI capabilities', 'x86 performance limits'],
      pricing: '$12M',
      likelihood: 'high'
    },
    {
      vendor: 'AWS',
      solution: 'EC2 + RDS Oracle',
      strengths: ['Cloud-native', 'Scalability', 'AI services'],
      weaknesses: ['Epic not certified', 'Data sovereignty concerns', 'Unpredictable costs'],
      pricing: '$2M/year OpEx',
      likelihood: 'medium'
    }
  ],
  idealSolution: {
    primary: [
      {
        product: 'Power E1080',
        quantity: 2,
        configuration: '32-core, 2TB RAM, Epic certified',
        purpose: 'Epic EHR production',
        businessValue: 'Eliminates performance issues, reduces Oracle costs 40%',
        technicalValue: 'High core performance, RAS features, AIX support'
      },
      {
        product: 'Power S1024',
        quantity: 2,
        configuration: '24-core, 1TB RAM',
        purpose: 'Development, test, DR',
        businessValue: 'Enables rapid testing, improves DR capabilities',
        technicalValue: 'Cost-effective, flexible, PowerVM'
      },
      {
        product: 'FlashSystem 9500',
        quantity: 2,
        configuration: '500TB effective, NVMe',
        purpose: 'Primary storage for Epic and PACS',
        businessValue: 'Eliminates storage bottleneck, enables AI workloads',
        technicalValue: 'Sub-millisecond latency, inline dedup, cyber resilience'
      },
      {
        product: 'Power Virtual Server',
        quantity: 'As needed',
        configuration: 'DR site, dev/test',
        purpose: 'Disaster recovery, cloud bursting',
        businessValue: 'Achieves 15-min RTO, reduces DR costs 60%',
        technicalValue: 'Automated failover, pay-per-use, IBM Cloud integration'
      }
    ],
    secondary: [
      {
        product: 'watsonx.ai',
        purpose: 'AI diagnostic imaging',
        businessValue: 'Enables competitive AI capabilities',
        technicalValue: 'Pre-trained healthcare models, GPU acceleration'
      },
      {
        product: 'Red Hat OpenShift',
        purpose: 'Container platform for new apps',
        businessValue: 'Accelerates application modernization',
        technicalValue: 'Hybrid cloud, Kubernetes, DevOps enablement'
      },
      {
        product: 'IBM Guardium',
        purpose: 'Database security and compliance',
        businessValue: 'Automates HIPAA compliance, reduces audit costs',
        technicalValue: 'Real-time monitoring, automated reporting, threat detection'
      }
    ],
    architecture: {
      description: 'Hybrid Power infrastructure with cloud DR',
      diagram: 'power-healthcare-architecture.svg',
      components: [
        'Power E1080 cluster for Epic production',
        'FlashSystem 9500 for primary storage',
        'Power Virtual Server for DR',
        'Red Hat OpenShift for containerized apps',
        'watsonx.ai for diagnostic imaging'
      ],
      dataFlow: 'Epic → Power E1080 → FlashSystem → Power Virtual Server (DR)',
      networking: 'Dedicated 100Gb links, IBM Cloud Direct Link',
      security: 'Guardium, QRadar, encryption at rest and in transit'
    },
    implementation: {
      phase1: {
        duration: '6 months',
        activities: [
          'Deploy Power E1080 for Epic',
          'Migrate Epic database',
          'Implement FlashSystem',
          'Performance validation'
        ],
        deliverables: ['Epic on Power', '40% performance improvement', 'Zero downtime migration']
      },
      phase2: {
        duration: '6 months',
        activities: [
          'Deploy Power Virtual Server DR',
          'Implement automated failover',
          'Deploy Guardium',
          'HITRUST certification'
        ],
        deliverables: ['15-min RTO achieved', 'HITRUST certified', 'Compliance automated']
      },
      phase3: {
        duration: '12 months',
        activities: [
          'Deploy watsonx.ai',
          'Train AI models',
          'Physician training',
          'Production rollout'
        ],
        deliverables: ['AI diagnostic imaging live', 'Physician adoption >80%', 'Improved outcomes']
      }
    },
    businessCase: {
      investment: '$15M over 3 years',
      savings: [
        '$1.8M/year Oracle licensing reduction',
        '$800K/year storage cost reduction',
        '$500K/year DR cost reduction',
        '$2M/year productivity improvement'
      ],
      totalSavings: '$5.1M/year',
      roi: '34 months',
      npv: '$8.2M over 5 years',
      irr: '28%'
    },
    competitiveAdvantages: [
      'Only solution that maintains Epic performance while reducing Oracle costs',
      'Proven healthcare deployments (Mayo Clinic, Cleveland Clinic)',
      'Integrated AI capabilities without separate infrastructure',
      'Superior RAS features for mission-critical healthcare',
      'Hybrid cloud flexibility with Power Virtual Server',
      'Single vendor accountability'
    ],
    risks: [
      { risk: 'Epic migration complexity', probability: 'medium', impact: 'high' },
      { risk: 'Staff learning curve', probability: 'high', impact: 'medium' },
      { risk: 'Budget overruns', probability: 'low', impact: 'high' }
    ],
    mitigations: [
      'IBM Consulting for Epic migration',
      'Comprehensive training program',
      'Fixed-price implementation',
      'Phased approach with validation gates'
    ]
  },
  scoringCriteria: {
    painPointDiscovery: {
      weight: 20,
      keyPoints: [
        'Epic performance degradation',
        'Oracle licensing costs',
        'AI infrastructure gap',
        'DR inadequacy',
        'Compliance challenges'
      ]
    },
    businessAlignment: {
      weight: 20,
      keyFactors: [
        'Addresses CIO priorities',
        'Meets CFO ROI requirements',
        'Enables CMIO clinical goals',
        'Aligns with strategic initiatives'
      ]
    },
    technicalAccuracy: {
      weight: 25,
      requiredProducts: [
        'Power E1080 or S1024',
        'FlashSystem',
        'Power Virtual Server',
        'AIX support mentioned'
      ]
    },
    consultativeApproach: {
      weight: 15,
      expectedBehaviors: [
        'Asked discovery questions',
        'Understood stakeholder concerns',
        'Addressed business outcomes first',
        'Provided options and tradeoffs'
      ]
    },
    competitivePositioning: {
      weight: 10,
      keyDifferentiators: [
        'Epic performance advantage',
        'Oracle cost reduction',
        'Healthcare experience',
        'Integrated AI'
      ]
    },
    crossSelling: {
      weight: 10,
      opportunities: [
        'watsonx.ai for diagnostics',
        'Guardium for compliance',
        'OpenShift for modernization',
        'Consulting services'
      ]
    }
  }
};
```

### 1.4 Scenario Flow Component

```typescript
// frontend/src/tracks/power-cloud/components/PowerCloudScenario.tsx

import React, { useState } from 'react';
import { PowerCloudScenario } from '../types';
import PainPointDiscovery from './PainPointDiscovery';
import SolutionMapping from './SolutionMapping';
import ObjectionHandling from './ObjectionHandling';
import CrossSellOpportunity from './CrossSellOpportunity';
import ScenarioResults from './ScenarioResults';

interface Props {
  scenario: PowerCloudScenario;
  onComplete: (results: ScenarioResults) => void;
}

export const PowerCloudScenarioFlow: React.FC<Props> = ({ scenario, onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState<Phase>('discovery');
  const [responses, setResponses] = useState<ScenarioResponses>({});
  const [score, setScore] = useState<ScenarioScore | null>(null);

  const phases: Phase[] = [
    'discovery',
    'prioritization',
    'solution-mapping',
    'justification',
    'objection-handling',
    'cross-sell',
    'results'
  ];

  const handlePhaseComplete = (phaseData: PhaseData) => {
    setResponses(prev => ({
      ...prev,
      [currentPhase]: phaseData
    }));

    const nextPhaseIndex = phases.indexOf(currentPhase) + 1;
    if (nextPhaseIndex < phases.length) {
      setCurrentPhase(phases[nextPhaseIndex]);
    } else {
      // Calculate final score
      const finalScore = calculateScore(scenario, responses);
      setScore(finalScore);
      onComplete({ scenario, responses, score: finalScore });
    }
  };

  return (
    <div className="power-cloud-scenario">
      <ScenarioHeader scenario={scenario} currentPhase={currentPhase} />
      <ProgressIndicator phases={phases} currentPhase={currentPhase} />
      
      {currentPhase === 'discovery' && (
        <PainPointDiscovery
          scenario={scenario}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'prioritization' && (
        <BusinessPrioritization
          scenario={scenario}
          discoveredPainPoints={responses.discovery}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'solution-mapping' && (
        <SolutionMapping
          scenario={scenario}
          painPoints={responses.discovery}
          priorities={responses.prioritization}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'justification' && (
        <SolutionJustification
          scenario={scenario}
          selectedSolutions={responses.solutionMapping}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'objection-handling' && (
        <ObjectionHandling
          scenario={scenario}
          solutions={responses.solutionMapping}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'cross-sell' && (
        <CrossSellOpportunity
          scenario={scenario}
          primarySolutions={responses.solutionMapping}
          onComplete={handlePhaseComplete}
        />
      )}
      
      {currentPhase === 'results' && score && (
        <ScenarioResults
          scenario={scenario}
          responses={responses}
          score={score}
        />
      )}
    </div>
  );
};
```

---

## STAGE 2: Product Library

### 2.1 Centralized Knowledge Base

```typescript
// frontend/src/data/ibmProducts.ts

export interface IBMProduct {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  overview: string;
  
  // When to position
  idealCustomers: IdealCustomer[];
  commonPainPoints: PainPoint[];
  useCases: UseCase[];
  whenToRecommend: string[];
  whenNotToRecommend: string[];
  
  // Value proposition
  businessBenefits: string[];
  technicalBenefits: string[];
  competitiveDifferentiators: string[];
  
  // Sales enablement
  discoveryQuestions: string[];
  commonObjections: Objection[];
  objectionResponses: ObjectionResponse[];
  
  // Cross-sell
  crossSellOpportunities: CrossSell[];
  relatedProducts: string[];
  typicalBundles: ProductBundle[];
  
  // Competitive
  competitors: CompetitorProduct[];
  competitiveAdvantages: string[];
  
  // Pricing
  pricingModel: PricingModel;
  pricingPositioning: string;
  typicalDealSize: string;
  
  // Technical
  specifications: TechnicalSpec[];
  integrations: Integration[];
  certifications: string[];
  
  // Customer proof
  customerExamples: CustomerExample[];
  industryFit: IndustryFit[];
  
  // Metadata
  tags: string[];
  lastUpdated: string;
}

export const ibmProducts: IBMProduct[] = [
  {
    id: 'power-e1080',
    name: 'IBM Power E1080',
    category: 'Hardware',
    subcategory: 'Enterprise Server',
    description: 'Enterprise-class Power10 server for mission-critical workloads',
    overview: 'The Power E1080 is IBM\'s flagship enterprise server, delivering exceptional performance, reliability, and security for mission-critical applications like SAP, Oracle, and Epic.',
    
    idealCustomers: [
      {
        profile: 'Large Enterprise',
        characteristics: [
          'Running mission-critical SAP, Oracle, or Epic',
          'Need for 99.999% uptime',
          'High transaction volumes',
          'Regulatory compliance requirements',
          'Existing AIX or IBM i investment'
        ]
      },
      {
        profile: 'Healthcare',
        characteristics: [
          'Epic EHR deployment',
          'HIPAA compliance required',
          'Zero downtime tolerance',
          'Growing data volumes'
        ]
      }
    ],
    
    commonPainPoints: [
      {
        painPoint: 'Oracle licensing costs spiraling',
        severity: 'critical',
        frequency: 'very common',
        businessImpact: 'Consuming 15-25% of IT budget',
        technicalCause: 'Oracle per-core licensing on x86',
        howPowerHelps: 'Power\'s high core performance reduces Oracle core count by 40-60%'
      },
      {
        painPoint: 'SAP performance degradation',
        severity: 'high',
        frequency: 'common',
        businessImpact: 'User complaints, productivity loss, business delays',
        technicalCause: 'x86 servers hitting CPU limits, storage bottlenecks',
        howPowerHelps: 'Power10 delivers 2-3x per-core performance vs x86'
      },
      {
        painPoint: 'Frequent unplanned downtime',
        severity: 'critical',
        frequency: 'common',
        businessImpact: '$100K-$1M per hour of downtime',
        technicalCause: 'x86 hardware failures, maintenance windows',
        howPowerHelps: 'RAS features, hot-swap everything, concurrent firmware updates'
      }
    ],
    
    useCases: [
      {
        useCase: 'Epic EHR Consolidation',
        description: 'Consolidate multiple Epic instances onto fewer Power servers',
        benefits: ['40% Oracle cost reduction', 'Better performance', 'Simplified management'],
        typicalConfig: '2x Power E1080, 32-core, 2TB RAM',
        customerExample: 'Mayo Clinic'
      },
      {
        useCase: 'SAP HANA Migration',
        description: 'Migrate SAP ECC to S/4HANA on Power',
        benefits: ['50% faster processing', 'Real-time analytics', 'Lower TCO'],
        typicalConfig: '4x Power E1080, 24-core, 4TB RAM',
        customerExample: 'Walmart'
      }
    ],
    
    whenToRecommend: [
      'Customer running SAP, Oracle, or Epic',
      'Oracle licensing costs are a pain point',
      'Need for 99.99%+ uptime',
      'Mission-critical workloads',
      'Existing AIX or IBM i',
      'Regulatory compliance (HIPAA, SOX, PCI)',
      'High transaction volumes',
      'Need to consolidate servers'
    ],
    
    whenNotToRecommend: [
      'Greenfield cloud-native applications',
      'Windows-only shop with no Unix',
      'Budget under $500K',
      'No mission-critical workloads',
      'Customer committed to x86-only strategy',
      'Workloads that require specific x86 software'
    ],
    
    businessBenefits: [
      'Reduce Oracle licensing costs 40-60%',
      'Eliminate unplanned downtime (99.999% uptime)',
      'Consolidate servers 3:1 or better',
      'Defer hardware refresh 2-3 years longer',
      'Reduce data center footprint and power',
      'Improve application performance 2-3x',
      'Accelerate business processes',
      'Meet compliance requirements'
    ],
    
    technicalBenefits: [
      'Power10 processor: 2-3x per-core performance vs x86',
      'Up to 240 cores per system',
      'Up to 64TB RAM',
      'Hot-swap everything (CPUs, memory, I/O, power, cooling)',
      'Concurrent firmware updates (no downtime)',
      'PowerVM: industry-leading virtualization',
      'Memory encryption at no performance cost',
      'Transparent memory encryption',
      'Live partition mobility',
      'Micro-partitioning (0.05 core increments)'
    ],
    
    competitiveDifferentiators: [
      'Only platform that reduces Oracle costs while improving performance',
      'RAS features unmatched by x86 (hot-swap CPUs, concurrent firmware)',
      'Proven 99.999% uptime in production',
      'Epic certified and recommended',
      'SAP HANA certified with best TDI results',
      'Lower TCO than x86 for enterprise workloads',
      'Backward compatible with AIX 5.3+ and IBM i',
      'Single-vendor support for hardware, OS, and virtualization'
    ],
    
    discoveryQuestions: [
      'What mission-critical applications are you running today?',
      'Are you running SAP, Oracle, or Epic?',
      'What are your current Oracle licensing costs?',
      'How many cores are you licensed for Oracle?',
      'What uptime requirements do you have?',
      'Have you experienced unplanned downtime? What was the business impact?',
      'Are you running AIX or IBM i today?',
      'What are your performance pain points?',
      'When is your next hardware refresh?',
      'What compliance requirements do you have?',
      'How many x86 servers are running these workloads?',
      'What\'s your virtualization strategy?'
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
        stakeholder: 'IT Manager'
      },
      {
        objection: 'We\'re moving to the cloud',
        category: 'strategy',
        frequency: 'very common',
        stakeholder: 'CIO'
      }
    ],
    
    objectionResponses: [
      {
        objection: 'Power is more expensive than x86',
        response: 'Let\'s look at total cost of ownership, not just acquisition cost. When you factor in Oracle licensing savings (40-60% reduction), consolidation (3:1 or better), reduced downtime, and longer refresh cycles, Power typically delivers 30-40% lower TCO over 5 years. For example, [Customer X] saved $2.1M annually after migrating their Oracle database from x86 to Power.',
        supportingData: [
          'IDC study: Power TCO 30% lower than x86 for enterprise workloads',
          'Oracle licensing calculator showing 40-60% savings',
          'Customer case study with documented savings'
        ],
        nextSteps: [
          'Offer TCO analysis',
          'Share customer case studies',
          'Arrange reference call'
        ]
      },
      {
        objection: 'We\'re standardized on x86',
        response: 'I understand standardization is important. However, for mission-critical workloads like SAP and Oracle, the economics and reliability of Power often justify an exception. Many customers run a hybrid strategy: x86 for general workloads, Power for mission-critical. This gives you the best of both worlds. Would it make sense to do a proof of concept to quantify the benefits for your specific workloads?',
        supportingData: [
          'Hybrid infrastructure best practices',
          'Customers running both x86 and Power',
          'ROI calculator'
        ],
        nextSteps: [
          'Propose POC',
          'Show hybrid architecture',
          'Discuss workload placement strategy'
        ]
      }
    ],
    
    crossSellOpportunities: [
      {
        product: 'FlashSystem',
        trigger: 'Customer mentions storage performance or capacity',
        reasoning: 'Power E1080 performance requires high-performance storage',
        attachRate: '85%',
        typicalConfig: 'FlashSystem 9500, 500TB'
      },
      {
        product: 'Power Virtual Server',
        trigger: 'Customer mentions DR or cloud',
        reasoning: 'Power Virtual Server provides cloud DR for on-prem Power',
        attachRate: '60%',
        typicalConfig: 'DR site in IBM Cloud'
      },
      {
        product: 'IBM Consulting',
        trigger: 'Customer concerned about migration complexity',
        reasoning: 'Consulting de-risks migration and accelerates time-to-value',
        attachRate: '70%',
        typicalConfig: 'Migration services, 3-6 months'
      }
    ],
    
    relatedProducts: [
      'power-s1024',
      'flashsystem-9500',
      'power-virtual-server',
      'aix',
      'powervm',
      'ibm-consulting'
    ],
    
    typicalBundles: [
      {
        name: 'Epic EHR Bundle',
        products: ['Power E1080', 'FlashSystem 9500', 'AIX', 'PowerVM', 'IBM Consulting'],
        description: 'Complete solution for Epic EHR',
        typicalPrice: '$4-6M',
        targetCustomer: 'Healthcare, 500+ beds'
      },
      {
        name: 'SAP HANA Bundle',
        products: ['Power E1080', 'FlashSystem 9500', 'SLES', 'PowerVM'],
        description: 'SAP S/4HANA on Power',
        typicalPrice: '$3-5M',
        targetCustomer: 'Enterprise, $1B+ revenue'
      }
    ],
    
    competitors: [
      {
        vendor: 'Dell',
        product: 'PowerEdge R750',
        strengths: ['Lower acquisition cost', 'Familiar x86', 'Broad ecosystem'],
        weaknesses: ['Higher Oracle costs', 'Lower per-core performance', 'More servers needed', 'Less reliable'],
        winStrategy: 'Focus on TCO, Oracle savings, and reliability'
      },
      {
        vendor: 'HPE',
        product: 'ProLiant DL380',
        strengths: ['Lower acquisition cost', 'Familiar x86', 'HPE relationship'],
        weaknesses: ['Higher Oracle costs', 'Lower per-core performance', 'More servers needed'],
        winStrategy: 'Focus on TCO and Oracle savings'
      },
      {
        vendor: 'Oracle',
        product: 'Exadata',
        strengths: ['Oracle optimized', 'Integrated stack', 'Oracle relationship'],
        weaknesses: ['Very expensive', 'Oracle lock-in', 'Limited flexibility', 'Proprietary'],
        winStrategy: 'Focus on flexibility, cost, and avoiding lock-in'
      }
    ],
    
    competitiveAdvantages: [
      'Only platform that reduces Oracle costs while improving performance',
      'RAS features unmatched by x86',
      'Proven 99.999% uptime',
      'Epic certified and recommended',
      'Lower TCO than x86 for enterprise workloads',
      'Backward compatible with AIX 5.3+',
      'Single-vendor support'
    ],
    
    pricingModel: {
      type: 'CapEx',
      options: ['Purchase', 'Lease', 'Flex financing'],
      typical: '$500K-$2M per system',
      factors: ['Core count', 'Memory', 'I/O', 'Software', 'Support']
    },
    
    pricingPositioning: 'Position on TCO, not acquisition cost. Show Oracle savings, consolidation, and reliability benefits. Typical payback: 18-24 months.',
    
    typicalDealSize: '$2-8M for initial deployment',
    
    specifications: [
      { spec: 'Processor', value: 'Power10, up to 240 cores' },
      { spec: 'Memory', value: 'Up to 64TB' },
      { spec: 'I/O', value: 'PCIe Gen5, up to 32 slots' },
      { spec: 'Storage', value: 'NVMe, SAS, Fibre Channel' },
      { spec: 'Networking', value: '1/10/25/100GbE, InfiniBand' },
      { spec: 'Virtualization', value: 'PowerVM (included)' },
      { spec: 'RAS', value: 'Hot-swap everything, concurrent firmware' }
    ],
    
    integrations: [
      { product: 'FlashSystem', type: 'Storage', protocol: 'Fibre Channel, NVMe' },
      { product: 'Spectrum Virtualize', type: 'Storage virtualization', protocol: 'SAN' },
      { product: 'Power Virtual Server', type: 'Cloud', protocol: 'Direct Link' },
      { product: 'VMware', type: 'Virtualization', protocol: 'N/A (not supported)' }
    ],
    
    certifications: [
      'SAP HANA certified',
      'Epic certified',
      'Oracle certified',
      'Red Hat certified',
      'SUSE certified',
      'ISO 9001',
      'ISO 14001'
    ],
    
    customerExamples: [
      {
        customer: 'Mayo Clinic',
        industry: 'Healthcare',
        useCase: 'Epic EHR',
        results: ['40% Oracle cost reduction', '99.999% uptime', 'Better performance'],
        quote: '"Power E1080 transformed our Epic performance while dramatically reducing Oracle costs."',
        publicReference: true
      },
      {
        customer: 'Walmart',
        industry: 'Retail',
        useCase: 'SAP S/4HANA',
        results: ['50% faster processing', 'Real-time analytics', '30% TCO reduction'],
        quote: '"Power delivered the performance we needed for SAP HANA at a fraction of the cost of alternatives."',
        publicReference: true
      }
    ],
    
    industryFit: [
      {
        industry: 'Healthcare',
        fit: 'excellent',
        reasoning: 'Epic certified, HIPAA compliant, proven reliability',
        marketShare: 'Leading platform for Epic EHR',
        keyCustomers: ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser Permanente']
      },
      {
        industry: 'Financial Services',
        fit: 'excellent',
        reasoning: 'Mission-critical reliability, security, compliance',
        marketShare: 'Dominant in core banking',
        keyCustomers: ['Bank of America', 'Wells Fargo', 'HSBC']
      },
      {
        industry: 'Retail',
        fit: 'strong',
        reasoning: 'SAP performance, high transaction volumes',
        marketShare: 'Growing',
        keyCustomers: ['Walmart', 'Target', 'Kroger']
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
      'linux',
      'powervm',
      'high-performance',
      'reliability',
      'healthcare',
      'financial-services'
    ],
    
    lastUpdated: '2024-01-15'
  },
  
  // ... Continue with all other IBM products following the same structure
  // Power S1024, Power S1022, Power S1014
  // FlashSystem 9500, 7300, 5200
  // Power Virtual Server
  // AIX, IBM i, Linux on Power
  // PowerVM, PowerVC
  // watsonx.ai, watsonx.data
  // Red Hat OpenShift
  // IBM Guardium, QRadar
  // IBM Consulting
  // etc.
];
```

### 2.2 Product Library UI

```typescript
// frontend/src/pages/ProductLibrary.tsx

import React, { useState, useMemo } from 'react';
import { ibmProducts, IBMProduct } from '../data/ibmProducts';
import { Search, Filter, BookOpen, TrendingUp, Users, Shield } from 'lucide-react';

export const ProductLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    industry: 'all',
    painPoint: 'all',
    priceRange: 'all'
  });
  const [selectedProduct, setSelectedProduct] = useState<IBMProduct | null>(null);

  const filteredProducts = useMemo(() => {
    return ibmProducts.filter(product => {
      // Search filter
