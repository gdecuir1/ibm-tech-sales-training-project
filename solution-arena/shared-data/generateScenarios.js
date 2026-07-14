/**
 * Scenario Generator - Creates 100+ training scenarios programmatically
 * Run with: node generateScenarios.js
 */

const fs = require('fs');
const path = require('path');

// Scenario templates by industry and difficulty
const scenarioTemplates = {
  retail: {
    beginner: [
      {
        title: "E-commerce Platform Modernization",
        brief: "Online retailer needs to modernize e-commerce platform to handle seasonal traffic spikes and improve customer experience.",
        focus: ["Red Hat OpenShift", "IBM Cloud", "IBM Instana"],
        priorities: ["modernize-apps", "reduce-downtime", "dev-productivity"],
        objection: "We're already looking at AWS EKS. Why should we consider OpenShift instead?",
        crossSell: "watsonx.ai for AI-powered product recommendations"
      },
      {
        title: "Inventory Management System Upgrade",
        brief: "Regional retail chain needs real-time inventory visibility across stores to reduce stockouts.",
        focus: ["IBM Cloud", "Db2", "Red Hat OpenShift"],
        priorities: ["modernize-apps", "reduce-costs", "observability"],
        objection: "Can't we just use our existing database and add more servers?",
        crossSell: "IBM Sterling Supply Chain for advanced inventory optimization"
      },
      {
        title: "Customer Data Platform Implementation",
        brief: "Retailer wants to unify customer data from online and in-store channels for personalized marketing.",
        focus: ["Cloud Pak for Data", "IBM Cloud", "Db2"],
        priorities: ["modernize-apps", "improve-ai", "compliance"],
        objection: "We have concerns about customer data privacy and compliance.",
        crossSell: "watsonx.ai for personalized marketing campaigns"
      },
      {
        title: "Point of Sale System Cloud Migration",
        brief: "Grocery chain needs to migrate aging POS systems to cloud for better reliability.",
        focus: ["IBM Cloud", "Red Hat OpenShift", "IBM Turbonomic"],
        priorities: ["reduce-costs", "reduce-downtime", "modernize-apps"],
        objection: "What if the internet goes down? We can't afford POS downtime.",
        crossSell: "IBM Instana for real-time POS monitoring"
      }
    ],
    intermediate: [
      {
        title: "Omnichannel Customer Experience Platform",
        brief: "Multi-channel retailer needs unified platform for consistent customer experience across web, mobile, and stores.",
        focus: ["Red Hat OpenShift", "IBM Cloud", "Cloud Pak for Data", "IBM API Connect"],
        priorities: ["modernize-apps", "improve-ai", "dev-productivity"],
        objection: "This seems complex. How long will implementation take?",
        crossSell: "watsonx.ai for intelligent customer service chatbot"
      },
      {
        title: "Supply Chain Optimization with AI",
        brief: "Retailer wants to use AI to optimize supply chain, predict demand, and reduce waste.",
        focus: ["watsonx.ai", "watsonx.data", "IBM Sterling Supply Chain", "IBM Cloud"],
        priorities: ["improve-ai", "reduce-costs", "sustainability"],
        objection: "We don't have data scientists. Can we really implement AI?",
        crossSell: "IBM Consulting for AI implementation and training"
      },
      {
        title: "Real-time Pricing and Promotion Engine",
        brief: "Retailer needs dynamic pricing system that responds to market conditions and inventory levels.",
        focus: ["Red Hat OpenShift", "IBM Cloud", "watsonx.ai", "Db2"],
        priorities: ["modernize-apps", "improve-ai", "reduce-costs"],
        objection: "Won't dynamic pricing upset our customers?",
        crossSell: "IBM Turbonomic for infrastructure cost optimization"
      }
    ],
    advanced: [
      {
        title: "Global E-commerce Platform with Multi-Region Compliance",
        brief: "International retailer needs global e-commerce platform complying with GDPR, CCPA, and regional regulations.",
        focus: ["Red Hat OpenShift", "IBM Cloud", "IBM Guardium", "IBM QRadar", "Cloud Pak for Data"],
        priorities: ["modernize-apps", "compliance", "cyber-resilience", "reduce-downtime"],
        objection: "This is a massive undertaking. How do we minimize risk?",
        crossSell: "IBM Consulting for phased global rollout strategy"
      },
      {
        title: "AI-Powered Demand Forecasting Platform",
        brief: "Large retailer wants enterprise-wide AI platform for demand forecasting, inventory optimization, and automated replenishment.",
        focus: ["watsonx.ai", "watsonx.data", "IBM Sterling Supply Chain", "Red Hat OpenShift", "IBM Cloud"],
        priorities: ["improve-ai", "reduce-costs", "modernize-apps", "sustainability"],
        objection: "We've tried AI before and it didn't work. Why will this be different?",
        crossSell: "watsonx.governance for AI model monitoring and compliance"
      },
      {
        title: "Unified Commerce Platform",
        brief: "Omnichannel retailer needs single platform unifying online, mobile, in-store, and marketplace sales.",
        focus: ["Red Hat OpenShift", "IBM Cloud", "IBM API Connect", "Cloud Pak for Integration", "IBM Instana"],
        priorities: ["modernize-apps", "dev-productivity", "observability", "reduce-downtime"],
        objection: "We have significant investment in existing systems. Do we have to replace everything?",
        crossSell: "IBM Business Automation for order orchestration"
      }
    ]
  },
  // Add more industries...
};

// Company name generators by industry
const companyNames = {
  retail: ["FashionForward", "QuickMart", "HomeGoods Plus", "FreshMarket", "TechGadgets", "StyleHub", "MegaMart", "UrbanOutfitters", "PrimeRetail"],
  healthcare: ["CityHealth", "WellCare", "RuralHealth", "DiagnosticLabs", "HealthPlus", "MediCare", "LifeCare", "HealthFirst", "CarePoint"],
  finance: ["CommunityFirst", "InsureNow", "PayFast", "QuickLoan", "WealthManage", "SecureBank", "TrustFinancial", "GlobalInvest"],
  manufacturing: ["PrecisionParts", "FoodSafe", "ElectroComponents", "SteelWorks", "ChemicalSolutions", "AutoTech", "IndustrialPro"],
  telecom: ["RegionalTel", "FiberNet", "MobileTalk", "CableCom", "NextGen Mobile", "ConnectPlus", "TelecomGlobal"],
  government: ["City of Springfield", "County Administration", "Regional Emergency", "State Revenue", "Metro Transit", "Federal Agency"],
  education: ["StateU University", "K12 District", "TechU Research", "Liberal Arts College", "LearnOnline Academy", "Community College"],
  energy: ["PowerGrid Utilities", "GreenEnergy Corp", "UtilityFirst", "RenewablePower", "EnergyTech Solutions"],
  transport: ["FastShip Logistics", "GlobalFreight", "UrbanTransit", "CargoExpress", "SmartFleet Services"],
  media: ["StreamNow Media", "ContentHub", "DigitalBroadcast", "MediaPro Studios", "EntertainmentPlus"]
};

// Generate full scenario from template
function generateScenario(template, industry, difficulty, index) {
  const companyName = companyNames[industry][index % companyNames[industry].length];
  const sizes = difficulty === 'beginner' ? ['Small Business', 'Mid-Market'] : 
                difficulty === 'intermediate' ? ['Mid-Market', 'Enterprise'] : ['Enterprise', 'Large Enterprise'];
  const size = sizes[index % sizes.length];
  
  const revenues = {
    'Small Business': ['$50M', '$85M', '$120M', '$150M'],
    'Mid-Market': ['$200M', '$350M', '$500M', '$750M'],
    'Enterprise': ['$1.2B', '$2.5B', '$4.8B', '$8.2B'],
    'Large Enterprise': ['$15B', '$25B', '$50B', '$100B']
  };
  
  const revenue = revenues[size][index % revenues[size].length];
  const employees = size === 'Small Business' ? Math.floor(Math.random() * 500) + 100 :
                    size === 'Mid-Market' ? Math.floor(Math.random() * 3000) + 500 :
                    size === 'Enterprise' ? Math.floor(Math.random() * 10000) + 3000 :
                    Math.floor(Math.random() * 50000) + 10000;
  
  const estimatedTime = difficulty === 'beginner' ? '3-4 minutes' :
                        difficulty === 'intermediate' ? '4-5 minutes' : '5-6 minutes';
  
  const id = `scenario-${difficulty}-${industry}-${String(index + 1).padStart(3, '0')}`;
  
  return {
    id,
    title: template.title,
    difficulty,
    estimatedTime,
    company: `${companyName} ${getIndustrySuffix(industry)}`,
    industry: capitalizeIndustry(industry),
    size,
    revenue,
    employees,
    brief: template.brief,
    currentEnvironment: generateEnvironment(industry, difficulty),
    businessGoals: generateBusinessGoals(template.priorities),
    constraints: generateConstraints(difficulty),
    questions: generateQuestions(template, difficulty),
    scoringBreakdown: {
      businessUnderstanding: { questions: ["q1"], maxScore: 10 },
      cloudPositioning: { questions: ["q2", "q3"], maxScore: 15 },
      portfolioKnowledge: { questions: ["q2", "q4", "q7"], maxScore: 15 },
      objectionHandling: { questions: ["q6"], maxScore: 10 }
    },
    idealSolution: {
      primary: template.focus.slice(0, 3),
      supporting: template.focus.slice(3),
      summary: `${template.focus[0]} provides the foundation for ${template.title.toLowerCase()}.`
    }
  };
}

function getIndustrySuffix(industry) {
  const suffixes = {
    retail: 'Retail',
    healthcare: 'Medical Center',
    finance: 'Financial',
    manufacturing: 'Manufacturing',
    telecom: 'Communications',
    government: '',
    education: 'University',
    energy: 'Utilities',
    transport: 'Logistics',
    media: 'Media'
  };
  return suffixes[industry] || '';
}

function capitalizeIndustry(industry) {
  const names = {
    retail: 'Retail',
    healthcare: 'Healthcare',
    finance: 'Financial Services',
    manufacturing: 'Manufacturing',
    telecom: 'Telecommunications',
    government: 'Government',
    education: 'Education',
    energy: 'Energy & Utilities',
    transport: 'Transportation & Logistics',
    media: 'Media & Entertainment'
  };
  return names[industry] || industry;
}

function generateEnvironment(industry, difficulty) {
  // Simplified - would be more detailed in production
  return {
    infrastructure: ["Legacy systems", "On-premises servers", "Aging infrastructure"],
    applications: ["Core business applications", "Customer-facing systems"],
    challenges: ["High costs", "Limited scalability", "Poor performance", "Security concerns"]
  };
}

function generateBusinessGoals(priorities) {
  const goalMap = {
    'modernize-apps': 'Modernize legacy applications',
    'reduce-costs': 'Reduce infrastructure costs',
    'reduce-downtime': 'Improve system reliability',
    'improve-ai': 'Leverage AI for competitive advantage',
    'cyber-resilience': 'Enhance security posture',
    'compliance': 'Meet regulatory requirements',
    'dev-productivity': 'Accelerate development cycles',
    'observability': 'Improve system visibility'
  };
  return priorities.map(p => goalMap[p] || p);
}

function generateConstraints(difficulty) {
  const budgets = {
    beginner: 'Moderate - $500K-$1M approved',
    intermediate: 'Significant - $2M-$5M approved',
    advanced: 'Large - $10M+ multi-year investment'
  };
  
  const timelines = {
    beginner: '6-9 months',
    intermediate: '12-18 months',
    advanced: '18-36 months phased approach'
  };
  
  return {
    budget: budgets[difficulty],
    timeline: timelines[difficulty],
    compliance: 'Industry-standard compliance requirements',
    technical: 'Must maintain business continuity'
  };
}

function generateQuestions(template, difficulty) {
  // This would generate all 7 questions based on the template
  // Simplified version here
  return [
    {
      id: "q1",
      type: "priorities",
      step: 1,
      title: "Identify Customer Priorities",
      question: "Select ALL business outcomes that matter most to this customer:",
      options: generatePriorityOptions(template.priorities)
    },
    // ... q2-q7 would be generated similarly
  ];
}

function generatePriorityOptions(correctPriorities) {
  const allPriorities = [
    { id: "reduce-costs", text: "Reduce infrastructure costs", weight: 10 },
    { id: "improve-ai", text: "Improve AI readiness", weight: 8 },
    { id: "modernize-apps", text: "Modernize legacy applications", weight: 10 },
    { id: "cyber-resilience", text: "Increase cyber resilience", weight: 9 },
    { id: "compliance", text: "Meet compliance requirements", weight: 9 },
    { id: "reduce-downtime", text: "Reduce downtime", weight: 10 },
    { id: "dev-productivity", text: "Improve developer productivity", weight: 8 },
    { id: "observability", text: "Improve observability and monitoring", weight: 8 }
  ];
  
  return allPriorities.map(opt => ({
    ...opt,
    correct: correctPriorities.includes(opt.id)
  }));
}

// Main generation function
function generateAllScenarios() {
  const allScenarios = [];
  let scenarioCount = 0;
  
  // Generate scenarios for each industry
  for (const [industry, difficulties] of Object.entries(scenarioTemplates)) {
    for (const [difficulty, templates] of Object.entries(difficulties)) {
      templates.forEach((template, index) => {
        const scenario = generateScenario(template, industry, difficulty, scenarioCount);
        allScenarios.push(scenario);
        scenarioCount++;
      });
    }
  }
  
  console.log(`Generated ${allScenarios.length} scenarios`);
  return allScenarios;
}

// Run generator
if (require.main === module) {
  const scenarios = generateAllScenarios();
  const outputPath = path.join(__dirname, 'scenarios_generated.json');
  fs.writeFileSync(outputPath, JSON.stringify(scenarios, null, 2));
  console.log(`✅ Scenarios written to ${outputPath}`);
  console.log(`\nBreakdown:`);
  console.log(`- Beginner: ${scenarios.filter(s => s.difficulty === 'beginner').length}`);
  console.log(`- Intermediate: ${scenarios.filter(s => s.difficulty === 'intermediate').length}`);
  console.log(`- Advanced: ${scenarios.filter(s => s.difficulty === 'advanced').length}`);
}

module.exports = { generateAllScenarios, generateScenario };

// Made with Bob
