// Scenario Index - Central export for all training scenarios
// This file aggregates all scenarios and provides utility functions for scenario management

import { TrainingScenario } from '../../types/scenarios';

// Healthcare Scenarios
import { healthcareScenario001 } from './healthcare';

// Banking Scenarios
import { bankingScenario001 } from './banking';

/**
 * All available training scenarios
 * Organized by industry and difficulty
 */
export const allScenarios: TrainingScenario[] = [
  // Healthcare (1 scenario)
  healthcareScenario001,
  
  // Banking (1 scenario)
  bankingScenario001,
];

/**
 * Get scenario by ID
 */
export function getScenarioById(id: string): TrainingScenario | undefined {
  return allScenarios.find(scenario => scenario.id === id);
}

/**
 * Get scenarios by industry
 */
export function getScenariosByIndustry(industry: string): TrainingScenario[] {
  return allScenarios.filter(scenario => 
    scenario.customerProfile.industry.toLowerCase() === industry.toLowerCase()
  );
}

/**
 * Get scenarios by difficulty
 */
export function getScenariosByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): TrainingScenario[] {
  return allScenarios.filter(scenario => 
    scenario.metadata.difficulty === difficulty
  );
}

/**
 * Get scenarios by product
 */
export function getScenariosByProduct(productId: string): TrainingScenario[] {
  return allScenarios.filter(scenario => 
    scenario.metadata.products.includes(productId)
  );
}

/**
 * Get scenarios by tag
 */
export function getScenariosByTag(tag: string): TrainingScenario[] {
  return allScenarios.filter(scenario => 
    scenario.metadata.tags.includes(tag)
  );
}

/**
 * Get scenarios by skill
 */
export function getScenariosBySkill(skill: string): TrainingScenario[] {
  return allScenarios.filter(scenario => 
    scenario.metadata.skills.includes(skill)
  );
}

/**
 * Search scenarios by keyword
 */
export function searchScenarios(keyword: string): TrainingScenario[] {
  const lowerKeyword = keyword.toLowerCase();
  return allScenarios.filter(scenario => 
    scenario.title.toLowerCase().includes(lowerKeyword) ||
    scenario.description.toLowerCase().includes(lowerKeyword) ||
    scenario.metadata.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
}

/**
 * Get recommended scenarios based on user progress
 */
export function getRecommendedScenarios(
  completedScenarioIds: string[],
  userSkillLevel: 'beginner' | 'intermediate' | 'advanced'
): TrainingScenario[] {
  // Filter out completed scenarios
  const availableScenarios = allScenarios.filter(
    scenario => !completedScenarioIds.includes(scenario.id)
  );
  
  // Prioritize scenarios matching user skill level
  const matchingDifficulty = availableScenarios.filter(
    scenario => scenario.metadata.difficulty === userSkillLevel
  );
  
  // If no matching difficulty, suggest next level up
  if (matchingDifficulty.length === 0) {
    const nextLevel = userSkillLevel === 'beginner' ? 'intermediate' : 'advanced';
    return availableScenarios.filter(
      scenario => scenario.metadata.difficulty === nextLevel
    ).slice(0, 3);
  }
  
  return matchingDifficulty.slice(0, 3);
}

/**
 * Get scenario statistics
 */
export function getScenarioStats() {
  const industries = new Set(allScenarios.map(s => s.customerProfile.industry));
  const products = new Set(allScenarios.flatMap(s => s.metadata.products));
  const tags = new Set(allScenarios.flatMap(s => s.metadata.tags));
  
  return {
    totalScenarios: allScenarios.length,
    industries: Array.from(industries),
    products: Array.from(products),
    tags: Array.from(tags),
    byDifficulty: {
      beginner: allScenarios.filter(s => s.metadata.difficulty === 'beginner').length,
      intermediate: allScenarios.filter(s => s.metadata.difficulty === 'intermediate').length,
      advanced: allScenarios.filter(s => s.metadata.difficulty === 'advanced').length,
    },
    byIndustry: Array.from(industries).map(industry => ({
      industry,
      count: getScenariosByIndustry(industry).length
    })),
    averageEstimatedTime: Math.round(
      allScenarios.reduce((sum, s) => sum + s.metadata.estimatedTime, 0) / allScenarios.length
    )
  };
}

/**
 * Validate scenario structure
 */
export function validateScenario(scenario: TrainingScenario): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check required fields
  if (!scenario.id) errors.push('Missing scenario ID');
  if (!scenario.title) errors.push('Missing scenario title');
  if (!scenario.description) errors.push('Missing scenario description');
  
  // Check discovery phase
  if (!scenario.discoveryPhase?.questions || scenario.discoveryPhase.questions.length === 0) {
    errors.push('Discovery phase must have at least one question');
  }
  
  // Check objection phase
  if (!scenario.objectionPhase?.objections || scenario.objectionPhase.objections.length === 0) {
    errors.push('Objection phase must have at least one objection');
  }
  
  // Check recommendation phase
  if (!scenario.recommendationPhase?.primaryProduct) {
    errors.push('Recommendation phase must have a primary product');
  }
  
  // Check scoring criteria
  if (!scenario.scoringCriteria) {
    errors.push('Missing scoring criteria');
  } else {
    const totalWeight = 
      scenario.scoringCriteria.discovery.weight +
      scenario.scoringCriteria.objectionHandling.weight +
      scenario.scoringCriteria.recommendation.weight +
      scenario.scoringCriteria.businessValue.weight;
    
    if (Math.abs(totalWeight - 1.0) > 0.01) {
      errors.push(`Scoring weights must sum to 1.0 (currently ${totalWeight})`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Get scenario catalog for UI display
 */
export function getScenarioCatalog() {
  return allScenarios.map(scenario => ({
    id: scenario.id,
    title: scenario.title,
    description: scenario.description,
    industry: scenario.customerProfile.industry,
    difficulty: scenario.metadata.difficulty,
    estimatedTime: scenario.metadata.estimatedTime,
    tags: scenario.metadata.tags,
    products: scenario.metadata.products,
    skills: scenario.metadata.skills,
  }));
}

/**
 * Export scenario summary for analytics
 */
export function getScenarioSummary(scenarioId: string) {
  const scenario = getScenarioById(scenarioId);
  if (!scenario) return null;
  
  return {
    id: scenario.id,
    title: scenario.title,
    industry: scenario.customerProfile.industry,
    difficulty: scenario.metadata.difficulty,
    discoveryQuestions: scenario.discoveryPhase.questions.length,
    objections: scenario.objectionPhase.objections.length,
    products: scenario.recommendationPhase.configuration.products.length,
    estimatedTime: scenario.metadata.estimatedTime,
    maxScore: scenario.scoringCriteria.totalPoints,
    passingScore: scenario.scoringCriteria.passingScore,
    excellentScore: scenario.scoringCriteria.excellentScore,
  };
}

// Export default for convenience
export default allScenarios;

// Made with Bob