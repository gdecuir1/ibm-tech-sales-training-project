// Mock API service for GitHub Pages deployment (no backend)

const scenarios = [
  {
    id: 1,
    company: "TechCorp Industries",
    industry: "Manufacturing",
    size: "Enterprise (5000+ employees)",
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
    ]
  },
  {
    id: 2,
    company: "FinServe Global",
    industry: "Financial Services",
    size: "Large (1000-5000 employees)",
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
    ]
  },
  {
    id: 3,
    company: "HealthPlus Network",
    industry: "Healthcare",
    size: "Medium (500-1000 employees)",
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
    ]
  }
];

const products = [
  { name: "IBM WatsonX", category: "AI & Data" },
  { name: "IBM Cloud Pak for Data", category: "Data & Analytics" },
  { name: "IBM Turbonomic", category: "IT Operations" },
  { name: "IBM Instana", category: "Observability" },
  { name: "IBM QRadar", category: "Security" },
  { name: "IBM Sterling", category: "Supply Chain" },
  { name: "IBM API Connect", category: "Integration" },
  { name: "IBM Cloud", category: "Infrastructure" }
];

const objections = [
  {
    objection: "We already have significant investments in our current technology stack. Why should we consider IBM solutions?"
  },
  {
    objection: "How does IBM differentiate from competitors like AWS, Microsoft, or Google in this space?"
  },
  {
    objection: "What's the typical ROI timeline for implementing these solutions?"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async getRandomScenario() {
    await delay(500);
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
  },

  async getScenarioById(id) {
    await delay(300);
    return scenarios.find(s => s.id === id) || scenarios[0];
  },

  async getProducts() {
    await delay(300);
    return products;
  },

  async generateObjections(scenarioId, selectedProducts) {
    await delay(500);
    return { objections };
  },

  async evaluateProducts(scenarioId, selectedProducts) {
    await delay(500);
    
    // Simple mock evaluation
    const idealProducts = ["IBM WatsonX", "IBM Cloud Pak for Data", "IBM Turbonomic"];
    const correctProducts = selectedProducts.filter(p => idealProducts.includes(p));
    const incorrectProducts = selectedProducts.filter(p => !idealProducts.includes(p));
    const missingProducts = idealProducts.filter(p => !selectedProducts.includes(p));
    
    const score = Math.round((correctProducts.length / idealProducts.length) * 100);
    
    return {
      score,
      correctProducts,
      incorrectProducts,
      missingProducts,
      idealProducts
    };
  },

  async evaluateResponse(responseText) {
    await delay(500);
    
    // Simple mock evaluation based on response length and keywords
    const wordCount = responseText.trim().split(/\s+/).length;
    const hasBusinessValue = /roi|value|cost|benefit|efficiency/i.test(responseText);
    const hasSpecifics = /ibm|watson|cloud|solution/i.test(responseText);
    
    let businessScore = Math.min(50, Math.round(wordCount / 2));
    if (hasBusinessValue) businessScore = Math.min(50, businessScore + 10);
    
    let objectionScore = Math.min(50, Math.round(wordCount / 2));
    if (hasSpecifics) objectionScore = Math.min(50, objectionScore + 10);
    
    const totalScore = businessScore + objectionScore;
    
    const feedback = [];
    if (wordCount < 50) feedback.push("Response could be more detailed");
    if (hasBusinessValue) feedback.push("Good focus on business value");
    if (hasSpecifics) feedback.push("Strong product knowledge demonstrated");
    if (!hasBusinessValue) feedback.push("Consider emphasizing ROI and business outcomes");
    
    return {
      businessScore,
      objectionScore,
      totalScore,
      feedback
    };
  }
};

// Made with Bob
