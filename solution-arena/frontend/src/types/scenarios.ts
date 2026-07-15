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
  | 'IT Director'
  | 'VP of IT Operations'
  | 'Infrastructure Manager'
  | 'Application Owner'
  | 'Database Administrator'
  | 'Storage Administrator'
  | 'Cloud Architect'
  | 'Security Officer'
  | 'Procurement Manager'
  | 'Business Unit Leader';

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

export interface DiscoveryQuestion {
  question: string;
  purpose: string;
  category: 'pain-point' | 'technical' | 'business' | 'stakeholder' | 'timeline' | 'budget';
  idealResponse: string;
  alternateResponses?: string[];
  followUpQuestions?: string[];
  scoringWeight: number;
  hints?: string[];
}

export interface DiscoveryPhase {
  questions: DiscoveryQuestion[];
  expectedFindings: string[];
  redFlags?: string[];
  opportunities?: string[];
  minimumQuestionsRequired: number;
}

export interface ScenarioObjection {
  objection: string;
  stakeholder: StakeholderRole;
  difficulty: 'easy' | 'common' | 'difficult' | 'very difficult';
  category: 'cost' | 'strategy' | 'skills' | 'risk' | 'competition' | 'timing' | 'performance' | 'technical';
  bestResponseId?: string; // Reference to product objection response
  customResponse?: string;
  scoringCriteria: string[];
  hints?: string[];
}

export interface ObjectionPhase {
  objections: ScenarioObjection[];
  minimumObjectionsToHandle: number;
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
  financing?: string;
  paymentTerms?: string;
}

export interface BusinessCase {
  costSavings?: string;
  revenueImpact?: string;
  productivityGains?: string;
  riskReduction?: string;
  roi: string;
  paybackPeriod: string;
  tco?: string;
}

export interface RecommendationPhase {
  primaryProduct: string; // Product ID
  supportingProducts?: string[]; // Product IDs
  configuration: SolutionConfiguration;
  pricing: PricingBreakdown;
  businessCase: BusinessCase;
  competitivePositioning?: string;
  nextSteps: string[];
  requiredElements: string[]; // What must be included in recommendation
}

export interface ScoringCategory {
  maxPoints: number;
  criteria: string[];
  weight: number;
}

export interface ScoringCriteria {
  discovery: ScoringCategory;
  objectionHandling: ScoringCategory;
  recommendation: ScoringCategory;
  businessValue: ScoringCategory;
  totalPoints: number;
  passingScore: number;
  excellentScore: number;
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
  concept: string;
  description: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface ScenarioMetadata {
  tags: string[];
  skills: string[];
  products: string[];
  industries: Industry[];
  estimatedTime: number; // minutes
  prerequisites?: string[];
  relatedScenarios?: string[];
  difficulty: ScenarioDifficulty;
  version: string;
  lastUpdated: string;
  author?: string;
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
  learningOutcomes: LearningOutcome[];
  
  // Metadata
  metadata: ScenarioMetadata;
  
  // Optional coaching
  coachingTips?: string[];
  commonMistakes?: string[];
  bestPractices?: string[];
  expertInsights?: string[];
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
