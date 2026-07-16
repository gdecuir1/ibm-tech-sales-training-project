// Training Scenario Type Definitions
// Comprehensive structure for realistic sales training scenarios

import { Industry, CompanySize, IBMProduct } from './products';

export type ScenarioDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type ScenarioPhase = 
  | 'introduction'
  | 'discovery'
  | 'objection'
  | 'recommendation'
  | 'closing'
  | 'complete';

export type StakeholderRole =
  | 'CIO'
  | 'CTO'
  | 'CFO'
  | 'Chief Risk Officer'
  | 'Chief Marketing Officer'
  | 'Chief Data Officer'
  | 'Chief Digital Officer'
  | 'Chief Information Security Officer'
  | 'Chief Human Resources Officer'
  | 'Chief Medical Officer'
  | 'Chief Nursing Officer'
  | 'Chief Quality Officer'
  | 'Chief Experience Officer'
  | 'Head of Trade Finance'
  | 'IT Director'
  | 'VP of IT Operations'
  | 'VP of Store Operations'
  | 'VP of Manufacturing Operations'
  | 'VP of Supply Chain'
  | 'VP of Human Resources'
  | 'VP of Operations'
  | 'VP of Sales'
  | 'VP of Marketing'
  | 'VP of Customer Experience'
  | 'VP of Product Development'
  | 'VP of Quality Assurance'
  | 'VP of Regulatory Affairs'
  | 'VP of Clinical Operations'
  | 'VP of Patient Safety'
  | 'VP of Revenue Cycle'
  | 'VP of Ambulatory Services'
  | 'VP of Population Health'
  | 'VP of Clinical Trials'
  | 'VP of Pharmacy'
  | 'VP of Real Estate'
  | 'VP of Loss Prevention'
  | 'VP of Store Planning'
  | 'VP of Merchandising'
  | 'VP of E-commerce'
  | 'VP of Pricing'
  | 'Infrastructure Manager'
  | 'Application Owner'
  | 'Database Administrator'
  | 'Storage Administrator'
  | 'Cloud Architect'
  | 'Security Officer'
  | 'Procurement Manager'
  | 'Business Unit Leader'
  | 'Director of Maintenance'
  | 'Director of Training and Development'
  | 'Director of Warehouse Operations'
  | 'Director of Patient Financial Services'
  | 'Director of Quality Assurance'
  | 'Chief Safety Officer'
  | 'Chief Analytics Officer'
  | 'Chief Research Officer'
  | 'Chief Pharmacy Officer'
  | 'Chief Engineering Officer';

export interface Stakeholder {
  name: string;
  role: StakeholderRole;
  priorities: string[];
  concerns?: string[];
  influence: 'high' | 'medium' | 'low';
  supportLevel?: 'champion' | 'supporter' | 'neutral' | 'skeptic' | 'blocker';
}

export interface CurrentInfrastructure {
  servers?: string;
  storage?: string;
  applications: string[];
  operatingSystem?: string;
  virtualization?: string;
  age: string;
  endOfLife?: string;
  issues?: string[];
}

export interface CustomerProfile {
  company: string;
  industry: Industry;
  size: CompanySize;
  revenue?: string;
  employees?: number;
  location: string;
  currentInfrastructure: CurrentInfrastructure;
  keyStakeholders: Stakeholder[];
  budget: string;
  timeline: string;
  decisionProcess?: string;
}

export interface BusinessContext {
  challenges: string[];
  businessImpact: string[];
  urgency: 'critical' | 'high' | 'medium' | 'low';
  strategicInitiatives: string[];
  competitivePressure?: string;
  regulatoryRequirements?: string[];
  recentEvents?: string[];
}

export interface AnswerChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  points: number;
  feedback?: string;
}

export interface DiscoveryQuestion {
  id?: string; // Optional ID for tracking
  question: string;
  purpose: string;
  category: 'pain-point' | 'technical' | 'business' | 'business-value' | 'stakeholder' | 'timeline' | 'budget' | 'risk';
  // Multiple choice support
  choices?: AnswerChoice[];
  correctChoiceIds?: string[]; // For multiple select questions
  minCorrectChoices?: number; // Minimum correct choices to select
  maxChoices?: number; // Maximum choices user can select
  // Legacy free-text support (deprecated)
  idealResponse: string;
  alternateResponses?: string[];
  followUpQuestions?: string[];
  scoringWeight: number;
  hints?: string[];
}

export interface DiscoveryPhase {
  description?: string; // Optional description of the phase
  questions: DiscoveryQuestion[];
  expectedFindings?: string[]; // Made optional
  redFlags?: string[];
  opportunities?: string[];
  minimumQuestionsRequired?: number; // Made optional
}

export interface ScenarioObjection {
  id?: string; // Optional ID for tracking
  objection: string;
  stakeholder: StakeholderRole;
  difficulty?: 'easy' | 'common' | 'difficult' | 'very difficult'; // Made optional
  severity?: 'low' | 'medium' | 'high'; // Alternative to difficulty
  category: 'cost' | 'strategy' | 'skills' | 'risk' | 'competition' | 'timing' | 'performance' | 'technical';
  context?: string; // Optional context for the objection
  // Multiple choice support
  responseChoices?: AnswerChoice[];
  correctResponseIds?: string[]; // For multiple select responses (alias for correctChoiceIds)
  correctChoiceIds?: string[]; // Alternative name for correctResponseIds
  minCorrectResponses?: number; // Minimum correct responses to select
  minCorrectChoices?: number; // Alternative name
  maxResponses?: number; // Maximum responses user can select
  maxChoices?: number; // Alternative name
  // Legacy free-text support (deprecated)
  idealResponse?: string; // Ideal response text
  alternateResponses?: string[]; // Alternative responses
  bestResponseId?: string; // Reference to product objection response
  customResponse?: string;
  scoringCriteria?: string[]; // Made optional
  scoringWeight?: number; // Optional scoring weight
  hints?: string[];
  coachingTips?: string[]; // Optional coaching tips
}

export interface ObjectionPhase {
  description?: string; // Optional description of the phase
  objections: ScenarioObjection[];
  minimumObjectionsToHandle?: number; // Made optional
  bonusObjections?: ScenarioObjection[]; // Optional advanced objections
}

export interface ProductRecommendation {
  productId: string;
  productName: string;
  reason: string;
  configuration?: string;
  priority: 'primary' | 'supporting' | 'optional';
}

export interface SolutionConfiguration {
  products: ProductRecommendation[];
  architecture?: string;
  sizing?: string;
  deployment?: string;
}

export interface PricingBreakdown {
  hardware?: string;
  software?: string;
  services?: string;
  support?: string;
  total: string;
  annual?: string; // Annual costs
  financing?: string;
  paymentTerms?: string;
  [key: string]: string | undefined; // Allow additional pricing fields
}

export interface BusinessCase {
  costSavings?: string;
  revenueImpact?: string;
  productivityGains?: string;
  riskReduction?: string;
  roi?: string; // Made optional
  paybackPeriod?: string; // Made optional
  tco?: string;
  costs?: string | { initial?: string; annual?: string; threeYear?: string; [key: string]: string | undefined }; // Total costs - can be string or object
  investment?: string; // Investment amount
  benefits?: string[]; // List of benefits
  timeline?: string; // Implementation timeline
  expectedROI?: string; // Expected ROI
  risks?: string[]; // Risks
  mitigationStrategies?: string[]; // Risk mitigation strategies
  [key: string]: any; // Allow additional business case fields with any type
}

export interface RecommendationPhase {
  primaryProduct?: string; // Product ID - made optional
  products?: string[]; // Alternative: list of product names
  supportingProducts?: string[]; // Product IDs
  solution?: string; // Solution description
  configuration?: SolutionConfiguration; // Made optional
  pricing?: PricingBreakdown; // Made optional
  businessCase?: BusinessCase; // Made optional
  competitivePositioning?: string;
  nextSteps?: string[]; // Made optional
  requiredElements?: string[]; // What must be included in recommendation - made optional
  [key: string]: any; // Allow additional fields
}

export interface ScoringCategory {
  maxPoints: number;
  criteria: string[];
  weight: number;
}

export interface ScoringCriteria {
  discovery?: ScoringCategory; // Made optional
  objectionHandling?: ScoringCategory; // Made optional
  recommendation?: ScoringCategory; // Made optional
  businessValue?: ScoringCategory; // Made optional
  discoveryWeight?: number; // Alternative simple weight
  objectionWeight?: number; // Alternative simple weight
  recommendationWeight?: number; // Alternative simple weight
  categories?: { // Alternative structure
    discovery?: { weight: number; description: string };
    objectionHandling?: { weight: number; description: string };
    recommendation?: { weight: number; description: string };
    [key: string]: any;
  };
  totalPoints?: number; // Made optional
  passingScore?: number; // Made optional
  excellentScore?: number; // Made optional
  rubric?: { // Alternative rubric structure
    discovery?: string;
    objectionHandling?: string;
    recommendation?: string;
    [key: string]: string | undefined;
  };
  [key: string]: any; // Allow additional fields
}

export interface ScenarioOutcome {
  score: number;
  maxScore: number;
  percentage: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  passed: boolean;
  strengths: string[];
  improvements: string[];
  missedOpportunities: string[];
  feedback: string;
  nextRecommendedScenario?: string;
}

export interface LearningOutcome {
  concept?: string;
  description?: string;
  skillLevel?: 'beginner' | 'intermediate' | 'advanced';
  [key: string]: any; // Allow string values for simple learning outcomes
}

export interface ScenarioMetadata {
  tags?: string[]; // Made optional
  skills?: string[]; // Made optional
  products?: string[]; // Made optional
  industries?: Industry[]; // Made optional
  estimatedTime?: number; // minutes - made optional
  prerequisites?: string[];
  relatedScenarios?: string[];
  difficulty?: ScenarioDifficulty; // Made optional
  version?: string; // Made optional
  lastUpdated?: string; // Made optional
  author?: string;
  [key: string]: any; // Allow additional fields
}

export interface UserProgress {
  scenarioId: string;
  userId?: string;
  startedAt: string;
  completedAt?: string;
  currentPhase: ScenarioPhase;
  questionsAsked: string[];
  objectionsHandled: string[];
  recommendationMade?: {
    products: string[];
    configuration?: string;
    pricing?: string;
  };
  score?: ScenarioOutcome;
  timeSpent: number; // minutes
  attempts: number;
}

export interface ScenarioProgress {
  scenarioId: string;
  userId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  currentPhase: ScenarioPhase;
  startedAt: Date;
  completedAt?: Date;
  discoveryAnswers: Array<{
    questionIndex: number;
    answer: string;
    timestamp: Date;
  }>;
  objectionResponses: Array<{
    objectionIndex: number;
    response: string;
    timestamp: Date;
  }>;
  recommendation: {
    primaryProduct: string;
    supportingProducts: string[];
    reasoning: string;
    configuration: string;
    businessCase: string;
    timestamp: Date;
  } | null;
  score: {
    totalScore: number;
    maxScore: number;
    percentage: number;
    passed: boolean;
  } | null;
}

export interface ScenarioResult {
  scenarioId: string;
  userId: string;
  completedAt: Date;
  totalScore: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  excellent: boolean;
  phaseScores: Array<{
    phase: 'discovery' | 'objectionHandling' | 'recommendation' | 'businessValue';
    points: number;
    maxPoints: number;
    percentage: number;
  }>;
  timeSpent: number; // in minutes
  feedback: string[];
  strengths: string[];
  improvements: string[];
}

export interface TrainingScenario {
  // Core identification
  id: string;
  title: string;
  description: string;
  
  // Customer and context
  customerProfile: CustomerProfile;
  businessContext: BusinessContext;
  
  // Scenario phases
  discoveryPhase: DiscoveryPhase;
  objectionPhase: ObjectionPhase;
  recommendationPhase: RecommendationPhase;
  
  // Evaluation
  scoringCriteria: ScoringCriteria;
  learningOutcomes?: LearningOutcome[] | string[]; // Made optional, can be simple strings
  learningObjectives?: string[]; // Alternative simple format
  
  // Metadata
  metadata?: ScenarioMetadata; // Made optional
  
  // Optional coaching
  coachingTips?: string[];
  commonMistakes?: string[];
  bestPractices?: string[];
  expertInsights?: string[];
  
  // Allow additional fields
  [key: string]: any;
}

// Scenario collection types
export interface ScenarioLibrary {
  healthcare: TrainingScenario[];
  banking: TrainingScenario[];
  manufacturing: TrainingScenario[];
  retail: TrainingScenario[];
  crossIndustry: TrainingScenario[];
}

export interface ScenarioFilter {
  industry?: Industry;
  difficulty?: ScenarioDifficulty;
  products?: string[];
  skills?: string[];
  timeAvailable?: number;
  completedScenarios?: string[];
}

export interface ScenarioRecommendation {
  scenario: TrainingScenario;
  fitScore: number;
  reason: string;
  estimatedTime: number;
}

// Adaptive learning types
export interface UserSkillProfile {
  userId?: string;
  discoverySkill: number; // 0-100
  objectionHandlingSkill: number; // 0-100
  productKnowledge: number; // 0-100
  businessValueSkill: number; // 0-100
  overallLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  completedScenarios: string[];
  averageScore: number;
  totalTimeSpent: number;
  lastActivity: string;
}

export interface LearningPath {
  name: string;
  description: string;
  targetAudience: string;
  scenarios: string[]; // Scenario IDs in recommended order
  estimatedTotalTime: number;
  skills: string[];
  products: string[];
}

// Scenario generation types
export interface ScenarioTemplate {
  industry: Industry;
  painPoints: string[];
  products: string[];
  difficulty: ScenarioDifficulty;
  focusArea: 'discovery' | 'objection-handling' | 'recommendation' | 'complete';
}

export interface GeneratedScenario {
  scenario: TrainingScenario;
  generationMethod: 'template' | 'ai' | 'manual';
  confidence: number;
  needsReview: boolean;
}

// Export helper types
export type ScenarioPhaseData = 
  | { phase: 'discovery'; data: DiscoveryPhase }
  | { phase: 'objection'; data: ObjectionPhase }
  | { phase: 'recommendation'; data: RecommendationPhase };

export type ScenarioResponse = 
  | { type: 'question'; question: string }
  | { type: 'objection-response'; objection: string; response: string }
  | { type: 'recommendation'; products: string[]; reasoning: string };

// Validation types
export interface ScenarioValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

// Analytics types
export interface ScenarioAnalytics {
  scenarioId: string;
  totalAttempts: number;
  completionRate: number;
  averageScore: number;
  averageTime: number;
  commonMistakes: string[];
  successPatterns: string[];
  difficultyRating: number; // User-perceived difficulty
}

// Made with Bob
