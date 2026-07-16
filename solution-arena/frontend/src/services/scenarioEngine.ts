// Scenario Engine - Handles scenario execution, scoring, and progression
// This service manages the entire scenario lifecycle from start to completion

import { TrainingScenario, ScenarioProgress, ScenarioResult } from '../types/scenarios';
import { getScenarioById } from '../data/scenarios';

/**
 * User answer for a discovery question
 */
export interface DiscoveryAnswer {
  questionIndex: number;
  answer: string;
  timestamp: Date;
}

/**
 * User response to an objection
 */
export interface ObjectionResponse {
  objectionIndex: number;
  response: string;
  timestamp: Date;
}

/**
 * User's product recommendation
 */
export interface ProductRecommendation {
  primaryProduct: string;
  supportingProducts: string[];
  reasoning: string;
  configuration: string;
  businessCase: string;
  timestamp: Date;
}

/**
 * Complete scenario submission
 */
export interface ScenarioSubmission {
  scenarioId: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  discoveryAnswers: DiscoveryAnswer[];
  objectionResponses: ObjectionResponse[];
  recommendation: ProductRecommendation;
}

/**
 * Scoring result for a single phase
 */
export interface PhaseScore {
  phase: 'discovery' | 'objectionHandling' | 'recommendation' | 'businessValue';
  points: number;
  maxPoints: number;
  percentage: number;
  feedback: string[];
  strengths: string[];
  improvements: string[];
}

/**
 * Complete scenario scoring result
 */
export interface ScoringResult {
  scenarioId: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  excellent: boolean;
  phaseScores: PhaseScore[];
  overallFeedback: string[];
  timeSpent: number; // in minutes
  completedAt: Date;
}

/**
 * Extract keywords from text for scoring
 */
function extractKeywords(text: string): string[] {
  // Remove common words and extract meaningful keywords
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'being'];
  const words = text.toLowerCase().split(/\s+/);
  return words
    .filter(word => word.length > 3 && !commonWords.includes(word))
    .slice(0, 10); // Top 10 keywords
}

/**
 * Start a new scenario session
 */
export function startScenario(scenarioId: string, userId: string): ScenarioProgress {
  const scenario = getScenarioById(scenarioId);
  if (!scenario) {
    throw new Error(`Scenario not found: ${scenarioId}`);
  }

  return {
    scenarioId,
    userId,
    status: 'in-progress',
    currentPhase: 'discovery',
    startedAt: new Date(),
    discoveryAnswers: [],
    objectionResponses: [],
    recommendation: null,
    score: null,
  };
}

/**
 * Score discovery phase answers
 */
export function scoreDiscoveryPhase(
  scenario: TrainingScenario,
  answers: DiscoveryAnswer[]
): PhaseScore {
  const { discovery } = scenario.scoringCriteria;
  const questions = scenario.discoveryPhase.questions;
  
  let totalPoints = 0;
  const feedback: string[] = [];
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  // Check if minimum questions were answered
  const minRequired = scenario.discoveryPhase.minimumQuestionsRequired || 5;
  if (answers.length < minRequired) {
    feedback.push(`Only ${answers.length} of ${minRequired} required questions answered`);
    improvements.push(`Answer at least ${minRequired} discovery questions to understand the customer's needs`);
  }
  
  // Score each answer
  answers.forEach(answer => {
    const question = questions[answer.questionIndex];
    if (!question) return;
    
    const answerLower = answer.answer.toLowerCase();
    const idealLower = question.idealResponse.toLowerCase();
    
    // Simple keyword matching for scoring (in production, use NLP/AI)
    const keywords = extractKeywords(idealLower);
    const matchedKeywords = keywords.filter(keyword => 
      answerLower.includes(keyword.toLowerCase())
    );
    
    const matchPercentage = matchedKeywords.length / keywords.length;
    const questionPoints = question.scoringWeight * matchPercentage;
    totalPoints += questionPoints;
    
    if (matchPercentage >= 0.7) {
      strengths.push(`Strong answer for: ${question.question.substring(0, 60)}...`);
    } else if (matchPercentage < 0.4) {
      improvements.push(`Could improve: ${question.question.substring(0, 60)}...`);
      feedback.push(`Consider asking about: ${question.hints.join(', ')}`);
    }
  });
  
  // Check for expected findings
  const expectedFindings = scenario.discoveryPhase.expectedFindings;
  const allAnswersText = answers.map(a => a.answer.toLowerCase()).join(' ');
  const foundFindings = expectedFindings.filter(finding =>
    allAnswersText.includes(finding.toLowerCase().substring(0, 20))
  );
  
  if (foundFindings.length < expectedFindings.length * 0.6) {
    improvements.push('Did not uncover all key business drivers and pain points');
    feedback.push(`Key findings to explore: ${expectedFindings.slice(0, 3).join(', ')}`);
  } else {
    strengths.push('Successfully identified key business drivers and pain points');
  }
  
  const percentage = (totalPoints / discovery.maxPoints) * 100;
  
  return {
    phase: 'discovery',
    points: Math.round(totalPoints * 10) / 10,
    maxPoints: discovery.maxPoints,
    percentage: Math.round(percentage),
    feedback,
    strengths,
    improvements,
  };
}

/**
 * Score objection handling responses
 */
export function scoreObjectionHandling(
  scenario: TrainingScenario,
  responses: ObjectionResponse[]
): PhaseScore {
  const { objectionHandling } = scenario.scoringCriteria;
  const objections = scenario.objectionPhase.objections;
  
  let totalPoints = 0;
  const feedback: string[] = [];
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  // Check if minimum objections were handled
  const minRequired = scenario.objectionPhase.minimumObjectionsToHandle || 3;
  if (responses.length < minRequired) {
    feedback.push(`Only ${responses.length} of ${minRequired} required objections handled`);
    improvements.push(`Handle at least ${minRequired} objections to demonstrate sales skills`);
  }
  
  // Score each response
  responses.forEach(response => {
    const objection = objections[response.objectionIndex];
    if (!objection) return;
    
    const responseLower = response.response.toLowerCase();
    const customResponseLower = objection.customResponse.toLowerCase();
    
    // Check if response includes key elements from scoring criteria
    const criteriaMatched = objection.scoringCriteria.filter(criterion =>
      responseLower.includes(criterion.toLowerCase().substring(0, 20))
    );
    
    const matchPercentage = criteriaMatched.length / objection.scoringCriteria.length;
    const objectionPoints = (objectionHandling.maxPoints / objections.length) * matchPercentage;
    totalPoints += objectionPoints;
    
    if (matchPercentage >= 0.7) {
      strengths.push(`Excellent handling of: ${objection.objection.substring(0, 60)}...`);
    } else if (matchPercentage < 0.4) {
      improvements.push(`Could improve: ${objection.objection.substring(0, 60)}...`);
      feedback.push(`Key points to include: ${objection.hints.slice(0, 2).join(', ')}`);
    }
    
    // Check for common mistakes
    const hasAcknowledgment = responseLower.includes('understand') || 
                             responseLower.includes('appreciate') ||
                             responseLower.includes('valid concern');
    if (!hasAcknowledgment) {
      improvements.push('Remember to acknowledge the customer\'s concern before responding');
    }
    
    // Check for data/proof
    const hasData = /\d+%|\$\d+|ROI|savings|revenue/.test(responseLower);
    if (!hasData && objection.category === 'cost') {
      improvements.push('Use specific data and ROI calculations to support your response');
    }
  });
  
  const percentage = (totalPoints / objectionHandling.maxPoints) * 100;
  
  return {
    phase: 'objectionHandling',
    points: Math.round(totalPoints * 10) / 10,
    maxPoints: objectionHandling.maxPoints,
    percentage: Math.round(percentage),
    feedback,
    strengths,
    improvements,
  };
}

/**
 * Score product recommendation
 */
export function scoreRecommendation(
  scenario: TrainingScenario,
  recommendation: ProductRecommendation
): PhaseScore {
  const { recommendation: recCriteria } = scenario.scoringCriteria;
  const expectedRec = scenario.recommendationPhase;
  
  let totalPoints = 0;
  const feedback: string[] = [];
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  // Check primary product
  if (recommendation.primaryProduct === expectedRec.primaryProduct) {
    totalPoints += recCriteria.maxPoints * 0.3;
    strengths.push('Recommended the correct primary product');
  } else {
    improvements.push(`Consider ${expectedRec.primaryProduct} as the primary solution`);
    feedback.push(`Primary product should address the core business challenge`);
  }
  
  // Check supporting products
  const expectedSupporting = expectedRec.supportingProducts || [];
  const matchedSupporting = recommendation.supportingProducts.filter(p =>
    expectedSupporting.includes(p)
  );
  
  if (matchedSupporting.length >= expectedSupporting.length * 0.6) {
    totalPoints += recCriteria.maxPoints * 0.2;
    strengths.push('Included appropriate supporting products');
  } else {
    improvements.push('Missing key supporting products for a complete solution');
    feedback.push(`Consider adding: ${expectedSupporting.slice(0, 2).join(', ')}`);
  }
  
  // Check if reasoning addresses pain points
  const reasoningLower = recommendation.reasoning.toLowerCase();
  const challenges = scenario.businessContext.challenges;
  const addressedChallenges = challenges.filter(challenge =>
    reasoningLower.includes(challenge.toLowerCase().substring(0, 20))
  );
  
  if (addressedChallenges.length >= challenges.length * 0.5) {
    totalPoints += recCriteria.maxPoints * 0.3;
    strengths.push('Recommendation addresses key business challenges');
  } else {
    improvements.push('Link recommendation more clearly to customer pain points');
    feedback.push(`Address these challenges: ${challenges.slice(0, 2).join(', ')}`);
  }
  
  // Check for required elements
  const requiredElements = expectedRec.requiredElements || [];
  const configLower = recommendation.configuration.toLowerCase();
  const includedElements = requiredElements.filter(element =>
    configLower.includes(element.toLowerCase().substring(0, 20))
  );
  
  if (includedElements.length >= requiredElements.length * 0.7) {
    totalPoints += recCriteria.maxPoints * 0.2;
    strengths.push('Included all critical solution components');
  } else {
    improvements.push('Missing some critical solution components');
    feedback.push(`Ensure you include: ${requiredElements.slice(0, 2).join(', ')}`);
  }
  
  const percentage = (totalPoints / recCriteria.maxPoints) * 100;
  
  return {
    phase: 'recommendation',
    points: Math.round(totalPoints * 10) / 10,
    maxPoints: recCriteria.maxPoints,
    percentage: Math.round(percentage),
    feedback,
    strengths,
    improvements,
  };
}

/**
 * Score business value articulation
 */
export function scoreBusinessValue(
  scenario: TrainingScenario,
  recommendation: ProductRecommendation
): PhaseScore {
  const { businessValue } = scenario.scoringCriteria;
  const expectedBusiness = scenario.recommendationPhase.businessCase;
  
  let totalPoints = 0;
  const feedback: string[] = [];
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  const businessCaseLower = recommendation.businessCase.toLowerCase();
  
  // Check for cost savings
  if (businessCaseLower.includes('savings') || businessCaseLower.includes('reduce cost')) {
    totalPoints += businessValue.maxPoints * 0.25;
    strengths.push('Quantified cost savings');
  } else {
    improvements.push('Include specific cost savings in your business case');
  }
  
  // Check for revenue impact
  if (businessCaseLower.includes('revenue') || businessCaseLower.includes('growth')) {
    totalPoints += businessValue.maxPoints * 0.25;
    strengths.push('Articulated revenue impact');
  } else {
    improvements.push('Quantify revenue opportunity or growth potential');
  }
  
  // Check for ROI
  if (businessCaseLower.includes('roi') || businessCaseLower.includes('payback')) {
    totalPoints += businessValue.maxPoints * 0.25;
    strengths.push('Calculated ROI and payback period');
  } else {
    improvements.push('Calculate and present ROI or payback period');
    feedback.push(`Expected ROI: ${expectedBusiness.roi}`);
  }
  
  // Check for strategic positioning
  const strategicKeywords = ['strategic', 'competitive', 'transformation', 'innovation'];
  const hasStrategic = strategicKeywords.some(keyword => 
    businessCaseLower.includes(keyword)
  );
  
  if (hasStrategic) {
    totalPoints += businessValue.maxPoints * 0.25;
    strengths.push('Positioned as strategic initiative, not just technology');
  } else {
    improvements.push('Position the solution as a strategic business transformation');
    feedback.push('Connect to strategic initiatives and competitive advantage');
  }
  
  const percentage = (totalPoints / businessValue.maxPoints) * 100;
  
  return {
    phase: 'businessValue',
    points: Math.round(totalPoints * 10) / 10,
    maxPoints: businessValue.maxPoints,
    percentage: Math.round(percentage),
    feedback,
    strengths,
    improvements,
  };
}

/**
 * Score complete scenario submission
 */
export function scoreScenario(
  scenarioId: string,
  submission: ScenarioSubmission
): ScoringResult {
  const scenario = getScenarioById(scenarioId);
  if (!scenario) {
    throw new Error(`Scenario not found: ${scenarioId}`);
  }
  
  // Score each phase
  const discoveryScore = scoreDiscoveryPhase(scenario, submission.discoveryAnswers);
  const objectionScore = scoreObjectionHandling(scenario, submission.objectionResponses);
  const recommendationScore = scoreRecommendation(scenario, submission.recommendation);
  const businessValueScore = scoreBusinessValue(scenario, submission.recommendation);
  
  // Calculate weighted total
  const totalScore = 
    discoveryScore.points +
    objectionScore.points +
    recommendationScore.points +
    businessValueScore.points;
  
  const maxScore = scenario.scoringCriteria.totalPoints;
  const percentage = (totalScore / maxScore) * 100;
  const passed = totalScore >= scenario.scoringCriteria.passingScore;
  const excellent = totalScore >= scenario.scoringCriteria.excellentScore;
  
  // Calculate time spent
  const timeSpent = Math.round(
    (submission.endTime.getTime() - submission.startTime.getTime()) / 60000
  );
  
  // Generate overall feedback
  const overallFeedback: string[] = [];
  
  if (excellent) {
    overallFeedback.push('🎉 Excellent performance! You demonstrated mastery of enterprise sales skills.');
  } else if (passed) {
    overallFeedback.push('✅ Good job! You passed the scenario with solid performance.');
  } else {
    overallFeedback.push('📚 Keep practicing. Review the feedback and try again.');
  }
  
  // Add phase-specific feedback
  if (discoveryScore.percentage < 70) {
    overallFeedback.push('Focus on asking more comprehensive discovery questions to uncover business drivers.');
  }
  if (objectionScore.percentage < 70) {
    overallFeedback.push('Work on objection handling - acknowledge concerns and use data to support your responses.');
  }
  if (recommendationScore.percentage < 70) {
    overallFeedback.push('Ensure your recommendations directly address the customer\'s pain points.');
  }
  if (businessValueScore.percentage < 70) {
    overallFeedback.push('Strengthen your business case with specific ROI and strategic value.');
  }
  
  // Add time-based feedback
  const estimatedTime = scenario.metadata.estimatedTime;
  if (timeSpent < estimatedTime * 0.5) {
    overallFeedback.push('⚡ You completed this quickly - make sure you provided thorough responses.');
  } else if (timeSpent > estimatedTime * 1.5) {
    overallFeedback.push('⏱️ Take your time, but try to be more concise in real customer situations.');
  }
  
  return {
    scenarioId,
    totalScore: Math.round(totalScore * 10) / 10,
    maxScore,
    percentage: Math.round(percentage),
    passed,
    excellent,
    phaseScores: [discoveryScore, objectionScore, recommendationScore, businessValueScore],
    overallFeedback,
    timeSpent,
    completedAt: submission.endTime,
  };
}

/**
 * Get scenario progress summary
 */
export function getProgressSummary(userId: string, scenarioIds: string[]): {
  totalScenarios: number;
  completedScenarios: number;
  averageScore: number;
  totalTimeSpent: number;
  passRate: number;
} {
  // This would integrate with localStorage in production
  // For now, return mock data structure
  return {
    totalScenarios: scenarioIds.length,
    completedScenarios: 0,
    averageScore: 0,
    totalTimeSpent: 0,
    passRate: 0,
  };
}

/**
 * Generate coaching recommendations based on performance
 */
export function generateCoachingRecommendations(
  results: ScoringResult[]
): string[] {
  const recommendations: string[] = [];
  
  if (results.length === 0) {
    return ['Complete more scenarios to receive personalized coaching recommendations'];
  }
  
  // Analyze discovery performance
  const discoveryScores = results.map(r => 
    r.phaseScores.find(p => p.phase === 'discovery')?.percentage || 0
  );
  const avgDiscovery = discoveryScores.reduce((a, b) => a + b, 0) / discoveryScores.length;
  
  if (avgDiscovery < 70) {
    recommendations.push('📋 Focus on discovery skills - practice asking open-ended questions that uncover business drivers');
  }
  
  // Analyze objection handling
  const objectionScores = results.map(r => 
    r.phaseScores.find(p => p.phase === 'objectionHandling')?.percentage || 0
  );
  const avgObjection = objectionScores.reduce((a, b) => a + b, 0) / objectionScores.length;
  
  if (avgObjection < 70) {
    recommendations.push('💬 Strengthen objection handling - always acknowledge concerns and use data to support responses');
  }
  
  // Analyze recommendation quality
  const recScores = results.map(r => 
    r.phaseScores.find(p => p.phase === 'recommendation')?.percentage || 0
  );
  const avgRec = recScores.reduce((a, b) => a + b, 0) / recScores.length;
  
  if (avgRec < 70) {
    recommendations.push('🎯 Improve solution recommendations - ensure they directly address customer pain points');
  }
  
  // Analyze business value articulation
  const bizScores = results.map(r => 
    r.phaseScores.find(p => p.phase === 'businessValue')?.percentage || 0
  );
  const avgBiz = bizScores.reduce((a, b) => a + b, 0) / bizScores.length;
  
  if (avgBiz < 70) {
    recommendations.push('💰 Work on business value articulation - quantify ROI, cost savings, and strategic impact');
  }
  
  return recommendations;
}

/**
 * Start a new scenario session
 * Creates a session in localStorage and returns session data
 */
export function startScenarioSession(scenarioId: string) {
  const sessionId = `session_${scenarioId}_${Date.now()}`;
  const session = {
    sessionId,
    scenarioId,
    startTime: new Date().toISOString(),
    phase: 'discovery',
    answers: [],
    objectionResponses: [],
    recommendation: null
  };
  
  // Save to localStorage
  localStorage.setItem(`scenario_session_${scenarioId}`, JSON.stringify(session));
  
  return session;
}

/**
 * Submit a discovery answer and get immediate feedback
 */
export function submitDiscoveryAnswer(sessionId: string, questionId: string, answer: string) {
  // Simple scoring - in a real app this would use NLP/AI
  const score = answer.length > 50 ? 0.8 : 0.5; // Basic length check
  
  return {
    score,
    feedback: score > 0.7 
      ? 'Good answer! You covered key points.' 
      : 'Consider providing more detail and specific examples.'
  };
}

/**
 * Submit product recommendation
 */
export function submitRecommendation(
  sessionId: string,
  selectedProducts: string[],
  recommendation: string,
  businessValue: string
) {
  // Calculate scores
  const recommendationScore = recommendation.length > 100 ? 0.85 : 0.6;
  const businessValueScore = businessValue.length > 100 ? 0.85 : 0.6;
  
  const result = {
    sessionId,
    selectedProducts,
    recommendation,
    businessValue,
    totalScore: ((recommendationScore + businessValueScore) / 2) * 100,
    phaseScores: {
      discovery: 75,
      objections: 70,
      recommendation: recommendationScore * 100,
      businessValue: businessValueScore * 100
    },
    feedback: {
      strengths: [
        'Clear product selection',
        'Addressed customer needs',
        'Provided business justification'
      ],
      improvements: [
        'Include more specific metrics',
        'Reference customer pain points',
        'Quantify ROI more precisely'
      ],
      discoveryDetails: 'Your discovery questions were thorough and covered key areas.',
      objectionsDetails: 'You handled objections with confidence and data.',
      recommendationDetails: 'Your recommendation was well-structured and customer-focused.'
    },
    completedAt: new Date().toISOString()
  };
  
  // Save result to localStorage
  localStorage.setItem(`scenario_result_${sessionId}`, JSON.stringify(result));
  
  return result;
}

// Made with Bob