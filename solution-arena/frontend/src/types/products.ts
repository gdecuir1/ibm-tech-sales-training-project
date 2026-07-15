// IBM Product Knowledge Base - Type Definitions
// All product information is centralized here for consistency

export type ProductCategory = 
  | 'Hardware'
  | 'Storage'
  | 'Cloud'
  | 'Software'
  | 'Virtualization'
  | 'AI'
  | 'Containers'
  | 'Security'
  | 'Integration'
  | 'Services';

export type Industry =
  | 'Healthcare'
  | 'Banking'
  | 'Insurance'
  | 'Retail'
  | 'Manufacturing'
  | 'Government'
  | 'Telecommunications'
  | 'Utilities'
  | 'Higher Education'
  | 'Oil & Gas'
  | 'Financial Services'
  | 'All Industries';

export type PainPointCategory =
  | 'performance'
  | 'cost'
  | 'scalability'
  | 'reliability'
  | 'security'
  | 'compliance'
  | 'modernization'
  | 'cloud-migration'
  | 'disaster-recovery'
  | 'ai-readiness'
  | 'data-management'
  | 'integration'
  | 'operations';

export type CompanySize =
  | 'Small (1-500 employees)'
  | 'Medium (500-1000 employees)'
  | 'Large (1000-5000 employees)'
  | 'Enterprise (5000+ employees)';

export interface PainPoint {
  painPoint: string;
  category: PainPointCategory;
  severity: 'critical' | 'high' | 'medium' | 'low';
  frequency: 'very common' | 'common' | 'occasional' | 'rare';
  businessImpact: string;
  technicalCause: string;
  howProductHelps: string;
}

export interface IdealCustomer {
  profile: string;
  characteristics: string[];
  industries?: Industry[];
  companySize?: CompanySize[];
  typicalBudget?: string;
}

export interface UseCase {
  useCase: string;
  description: string;
  benefits: string[];
  typicalConfig: string;
  customerExample?: string;
  industry?: Industry;
}

export interface Objection {
  objection: string;
  category: 'cost' | 'strategy' | 'skills' | 'risk' | 'competition' | 'timing' | 'status quo' | 'performance';
  frequency: 'very common' | 'common' | 'occasional' | 'rare';
  stakeholder: string;
}

export interface ObjectionResponse {
  objection: string;
  response: string;
  supportingData: string[];
  nextSteps: string[];
  confidence: 'high' | 'medium' | 'low';
}

export interface CrossSell {
  product: string;
  trigger: string;
  reasoning: string;
  attachRate: string;
  typicalConfig: string;
}

export interface ProductBundle {
  name: string;
  products: string[];
  description: string;
  typicalPrice: string;
  targetCustomer: string;
  industries: Industry[];
}

export interface CompetitorProduct {
  vendor: string;
  product: string;
  strengths: string[];
  weaknesses: string[];
  winStrategy: string;
  marketShare?: string;
}

export interface PricingModel {
  type: 'CapEx' | 'OpEx' | 'Hybrid' | 'Subscription' | 'Consumption';
  options: string[];
  typical: string;
  factors: string[];
}

export interface TechnicalSpec {
  spec: string;
  value: string;
  unit?: string;
}

export interface Integration {
  product: string;
  type: string;
  protocol: string;
  certified: boolean;
}

export interface CustomerExample {
  customer: string;
  industry: Industry;
  useCase: string;
  results: string[];
  quote?: string;
  publicReference: boolean;
  caseStudyUrl?: string;
}

export interface IndustryFit {
  industry: Industry;
  fit: 'excellent' | 'strong' | 'good' | 'fair' | 'poor';
  reasoning: string;
  marketShare?: string;
  keyCustomers: string[];
}

export interface DiscoveryQuestion {
  question: string;
  purpose: string;
  followUp?: string[];
  idealAnswer?: string;
}

export interface IBMProduct {
  // Basic Information
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  overview: string;
  
  // Positioning
  idealCustomers: IdealCustomer[];
  commonPainPoints: PainPoint[];
  useCases: UseCase[];
  whenToRecommend: string[];
  whenNotToRecommend: string[];
  
  // Value Proposition
  businessBenefits: string[];
  technicalBenefits: string[];
  competitiveDifferentiators: string[];
  
  // Sales Enablement
  discoveryQuestions: DiscoveryQuestion[];
  commonObjections: Objection[];
  objectionResponses: ObjectionResponse[];
  elevatorPitch: string;
  
  // Cross-Sell & Bundles
  crossSellOpportunities: CrossSell[];
  relatedProducts: string[];
  typicalBundles: ProductBundle[];
  
  // Competitive Intelligence
  competitors: CompetitorProduct[];
  competitiveAdvantages: string[];
  battleCards?: string[];
  
  // Pricing
  pricingModel: PricingModel;
  pricingPositioning: string;
  typicalDealSize: string;
  discountGuidelines?: string;
  
  // Technical Details
  specifications: TechnicalSpec[];
  integrations: Integration[];
  certifications: string[];
  supportedPlatforms?: string[];
  
  // Customer Proof
  customerExamples: CustomerExample[];
  industryFit: IndustryFit[];
  
  // Metadata
  tags: string[];
  lastUpdated: string;
  productUrl?: string;
  documentationUrl?: string;
  
  // Internal
  salesPlayUrl?: string;
  trainingUrl?: string;
  competitorComparisonUrl?: string;
}

// Product Search and Filter Types
export interface ProductFilters {
  category?: ProductCategory | 'all';
  industry?: Industry | 'all';
  painPoint?: PainPointCategory | 'all';
  priceRange?: 'all' | 'under-500k' | '500k-2m' | '2m-5m' | 'over-5m';
  companySize?: CompanySize | 'all';
  searchTerm?: string;
}

export interface ProductSearchResult {
  product: IBMProduct;
  relevanceScore: number;
  matchedCriteria: string[];
}

export interface ProductRecommendation {
  product: IBMProduct;
  confidence: number;
  reasoning: string[];
  painPointsAddressed: PainPoint[];
  estimatedValue: string;
  implementationComplexity: 'low' | 'medium' | 'high';
  timeToValue: string;
}

// Product Comparison
export interface ProductComparison {
  products: IBMProduct[];
  criteria: ComparisonCriterion[];
}

export interface ComparisonCriterion {
  name: string;
  values: { [productId: string]: string | number | boolean };
  weight?: number;
}

// Made with Bob
