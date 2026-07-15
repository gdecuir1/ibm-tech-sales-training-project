// Static scenario data for GitHub Pages deployment
// All scenarios work entirely client-side with no backend required

export const scenarios = [
  {
    id: 1,
    company: "TechCorp Industries",
    industry: "Manufacturing",
    size: "Enterprise (5000+ employees)",
    revenue: "$2.5B",
    employees: 5000,
    pain_points: [
      "High operational costs due to inefficient resource allocation",
      "Lack of real-time visibility into production processes",
      "Difficulty scaling infrastructure to meet demand"
    ],
    tech_stack: ["SAP", "Oracle", "Legacy systems"],
    objectives: [
      "Reduce operational costs by 30%",
      "Improve production efficiency",
      "Enable data-driven decision making"
    ],
    ideal_products: ["IBM WatsonX", "IBM Cloud Pak for Data", "IBM Turbonomic"],
    ideal_justification: "IBM WatsonX provides AI-driven insights for production optimization, Cloud Pak for Data unifies data across systems for real-time visibility, and Turbonomic optimizes resource allocation to reduce costs by 30%.",
    objections: [
      {
        objection: "We already have significant investments in our current technology stack. Why should we consider IBM solutions?"
      },
      {
        objection: "How does IBM differentiate from competitors like AWS, Microsoft, or Google in this space?"
      },
      {
        objection: "What's the typical ROI timeline for implementing these solutions?"
      }
    ]
  },
  {
    id: 2,
    company: "FinServe Global",
    industry: "Financial Services",
    size: "Large (1000-5000 employees)",
    revenue: "$8.2B",
    employees: 3500,
    pain_points: [
      "Security vulnerabilities in legacy systems",
      "Compliance challenges with evolving regulations",
      "Slow time-to-market for new products"
    ],
    tech_stack: ["Mainframe", "Java", "SQL Server"],
    objectives: [
      "Enhance security posture",
      "Achieve regulatory compliance",
      "Accelerate digital transformation"
    ],
    ideal_products: ["IBM QRadar", "IBM Guardium", "Red Hat OpenShift"],
    ideal_justification: "IBM QRadar provides comprehensive threat detection and response, Guardium ensures database security and compliance automation, and Red Hat OpenShift accelerates application modernization while maintaining security standards.",
    objections: [
      {
        objection: "Our security team is already overwhelmed. Won't adding new tools make things more complex?"
      },
      {
        objection: "How quickly can we see compliance improvements with these solutions?"
      },
      {
        objection: "What about integration with our existing mainframe systems?"
      }
    ]
  },
  {
    id: 3,
    company: "HealthPlus Network",
    industry: "Healthcare",
    size: "Medium (500-1000 employees)",
    revenue: "$1.2B",
    employees: 850,
    pain_points: [
      "Data fragmentation across multiple systems",
      "Poor patient experience due to disconnected services",
      "Difficulty leveraging AI for diagnostics"
    ],
    tech_stack: ["Epic", "Cerner", "Custom applications"],
    objectives: [
      "Unify patient data",
      "Improve patient outcomes",
      "Implement AI-driven insights"
    ],
    ideal_products: ["IBM Cloud Pak for Data", "IBM WatsonX", "IBM FHIR Server"],
    ideal_justification: "Cloud Pak for Data unifies fragmented patient data across systems, WatsonX enables AI-driven diagnostic insights, and IBM FHIR Server ensures healthcare data interoperability and compliance with industry standards.",
    objections: [
      {
        objection: "We're concerned about patient data privacy and HIPAA compliance with cloud solutions."
      },
      {
        objection: "How does IBM's AI compare to specialized healthcare AI vendors?"
      },
      {
        objection: "What's the integration effort with Epic and Cerner?"
      }
    ]
  },
  {
    id: 4,
    company: "RetailMax Corporation",
    industry: "Retail",
    size: "Enterprise (10000+ employees)",
    revenue: "$5.8B",
    employees: 12000,
    pain_points: [
      "Inconsistent customer experience across channels",
      "Inventory management inefficiencies",
      "Limited personalization capabilities"
    ],
    tech_stack: ["Oracle Retail", "Salesforce", "Custom e-commerce platform"],
    objectives: [
      "Create unified omnichannel experience",
      "Optimize inventory and supply chain",
      "Increase customer lifetime value through personalization"
    ],
    ideal_products: ["IBM Sterling", "IBM WatsonX", "IBM Instana"],
    ideal_justification: "IBM Sterling provides comprehensive supply chain visibility and optimization, WatsonX enables personalized customer experiences through AI, and Instana ensures application performance across all channels.",
    objections: [
      {
        objection: "We've tried supply chain optimization before. What makes IBM Sterling different?"
      },
      {
        objection: "How quickly can we implement personalization at our scale?"
      },
      {
        objection: "What about seasonal traffic spikes? Can your solutions handle Black Friday volumes?"
      }
    ]
  }
];

export const products = [
  { name: "IBM WatsonX", category: "AI & Data", description: "Enterprise AI platform for building and deploying AI models" },
  { name: "IBM Cloud Pak for Data", category: "Data & Analytics", description: "Unified data and AI platform" },
  { name: "IBM Turbonomic", category: "IT Operations", description: "Application resource management and cost optimization" },
  { name: "IBM Instana", category: "Observability", description: "Real-time application performance monitoring" },
  { name: "IBM QRadar", category: "Security", description: "Security information and event management (SIEM)" },
  { name: "IBM Guardium", category: "Security", description: "Database security and compliance" },
  { name: "IBM Sterling", category: "Supply Chain", description: "Supply chain visibility and optimization" },
  { name: "Red Hat OpenShift", category: "Platform", description: "Enterprise Kubernetes platform" },
  { name: "IBM API Connect", category: "Integration", description: "API lifecycle management" },
  { name: "IBM Cloud", category: "Infrastructure", description: "Hybrid cloud platform" },
  { name: "IBM Power Virtual Server", category: "Infrastructure", description: "Power Systems in the cloud" },
  { name: "IBM FHIR Server", category: "Healthcare", description: "Healthcare data interoperability" },
  { name: "IBM Db2", category: "Database", description: "Enterprise database management" },
  { name: "IBM MQ", category: "Integration", description: "Enterprise messaging" },
  { name: "IBM Apptio", category: "FinOps", description: "Technology business management" }
];

// Helper functions
export function getRandomScenario() {
  const randomIndex = Math.floor(Math.random() * scenarios.length);
  return scenarios[randomIndex];
}

export function getScenarioById(id) {
  return scenarios.find(s => s.id === parseInt(id)) || scenarios[0];
}

export function getAllScenarios() {
  return scenarios;
}

export function getProducts() {
  return products;
}

export function generateObjections(scenarioId) {
  const scenario = getScenarioById(scenarioId);
  return scenario ? scenario.objections : [];
}

export function evaluateProducts(scenarioId, selectedProducts) {
  const scenario = getScenarioById(scenarioId);
  if (!scenario) {
    return {
      score: 0,
      correctProducts: [],
      incorrectProducts: selectedProducts,
      missingProducts: [],
      idealProducts: []
    };
  }

  const idealProducts = scenario.ideal_products;
  const correctProducts = selectedProducts.filter(p => idealProducts.includes(p));
  const incorrectProducts = selectedProducts.filter(p => !idealProducts.includes(p));
  const missingProducts = idealProducts.filter(p => !selectedProducts.includes(p));
  
  // Calculate score: 100 points max
  // +40 points per correct product (max 3 ideal products = 120, capped at 100)
  // -10 points per incorrect product
  let score = (correctProducts.length / idealProducts.length) * 100;
  score = Math.max(0, Math.min(100, Math.round(score)));
  
  return {
    score,
    correctProducts,
    incorrectProducts,
    missingProducts,
    idealProducts
  };
}

export function evaluateResponse(responseText, scenarioId = null) {
  // Simple client-side evaluation based on response quality
  const wordCount = responseText.trim().split(/\s+/).filter(w => w).length;
  
  // Check for key business value terms
  const businessValueTerms = /roi|value|cost|benefit|efficiency|productivity|revenue|savings|competitive|advantage/gi;
  const businessMatches = (responseText.match(businessValueTerms) || []).length;
  
  // Check for IBM-specific terms
  const ibmTerms = /ibm|watson|cloud|power|red hat|openshift|turbonomic|instana|qradar|guardium|sterling/gi;
  const ibmMatches = (responseText.match(ibmTerms) || []).length;
  
  // Check for objection handling techniques
  const objectionHandling = /understand|acknowledge|however|specifically|example|proven|demonstrated|success/gi;
  const objectionMatches = (responseText.match(objectionHandling) || []).length;
  
  // Calculate business score (0-50)
  let businessScore = Math.min(50, Math.round(
    (wordCount / 100) * 20 + // Length factor (max 20)
    businessMatches * 5 + // Business terms (5 points each)
    (wordCount > 50 ? 10 : 0) // Bonus for detailed response
  ));
  
  // Calculate objection handling score (0-50)
  let objectionScore = Math.min(50, Math.round(
    ibmMatches * 5 + // IBM product knowledge (5 points each)
    objectionMatches * 3 + // Objection handling technique (3 points each)
    (wordCount > 75 ? 10 : 0) // Bonus for comprehensive response
  ));
  
  const totalScore = businessScore + objectionScore;
  
  // Generate feedback
  const feedback = [];
  if (wordCount < 50) {
    feedback.push("Response could be more detailed. Aim for 75-150 words.");
  } else if (wordCount > 150) {
    feedback.push("Good detail! Consider being more concise for executive audiences.");
  } else {
    feedback.push("Good response length - detailed but concise.");
  }
  
  if (businessMatches >= 3) {
    feedback.push("Strong focus on business value and ROI.");
  } else {
    feedback.push("Consider emphasizing business outcomes and ROI more clearly.");
  }
  
  if (ibmMatches >= 2) {
    feedback.push("Good product knowledge demonstrated.");
  } else {
    feedback.push("Reference specific IBM solutions to strengthen your response.");
  }
  
  if (objectionMatches >= 2) {
    feedback.push("Effective objection handling technique.");
  } else {
    feedback.push("Try acknowledging concerns before presenting solutions.");
  }
  
  return {
    businessScore,
    objectionScore,
    totalScore,
    feedback
  };
}

// Made with Bob
