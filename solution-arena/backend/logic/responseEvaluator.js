/**
 * Keyword sets for response evaluation
 */
const businessKeywords = [
  'roi', 'return on investment', 'cost', 'save', 'savings', 'efficiency', 'efficient',
  'scale', 'scalable', 'value', 'revenue', 'profit', 'reduce', 'optimize', 'optimization',
  'productivity', 'performance', 'growth', 'competitive advantage', 'market share'
];

const acknowledgementKeywords = [
  'understand', 'appreciate', 'recognize', 'valid', 'great point', 'good question',
  'i hear you', 'makes sense', 'fair concern', 'absolutely', 'agree', 'right'
];

const differentiationKeywords = [
  'ibm provides', 'ibm offers', 'unlike', 'different from', 'differentiates',
  'unique', 'exclusively', 'only ibm', 'sets us apart', 'advantage', 'superior',
  'better than', 'outperforms', 'leading', 'industry-leading'
];

const justificationKeywords = [
  'because', 'since', 'due to', 'as a result', 'therefore', 'consequently',
  'this means', 'which allows', 'enabling', 'ensures', 'guarantees', 'proven',
  'demonstrated', 'track record', 'case study', 'example'
];

/**
 * Count keyword matches in text (case-insensitive)
 * @param {string} text - The response text
 * @param {Array} keywords - Array of keywords to match
 * @returns {number} - Count of matches
 */
function countKeywordMatches(text, keywords) {
  const lowerText = text.toLowerCase();
  let count = 0;
  
  keywords.forEach(keyword => {
    if (lowerText.includes(keyword.toLowerCase())) {
      count++;
    }
  });
  
  return count;
}

/**
 * Evaluate user's response to objections
 * @param {string} responseText - User's response text
 * @returns {Object} - Scores and feedback
 */
function evaluateResponse(responseText) {
  if (!responseText || responseText.trim().length === 0) {
    return {
      businessScore: 0,
      objectionScore: 0,
      totalScore: 0,
      feedback: ['Response is empty. Please provide a detailed response.']
    };
  }
  
  const feedback = [];
  
  // Business value score (max 50 points)
  const businessMatches = countKeywordMatches(responseText, businessKeywords);
  let businessScore = Math.min(50, businessMatches * 10);
  
  if (businessScore >= 30) {
    feedback.push('Strong business value articulation');
  } else if (businessScore >= 10) {
    feedback.push('Good business value mentioned, but could be stronger');
  } else {
    feedback.push('Weak business value articulation - focus more on ROI, cost savings, and efficiency');
  }
  
  // Objection handling score (max 50 points)
  let objectionScore = 0;
  
  // Check for acknowledgement (20 points)
  const acknowledgementMatches = countKeywordMatches(responseText, acknowledgementKeywords);
  if (acknowledgementMatches > 0) {
    objectionScore += 20;
    feedback.push('Good acknowledgement of concerns');
  } else {
    feedback.push('Missing acknowledgement - always validate the customer\'s concerns first');
  }
  
  // Check for differentiation (20 points)
  const differentiationMatches = countKeywordMatches(responseText, differentiationKeywords);
  if (differentiationMatches > 0) {
    objectionScore += 20;
    feedback.push('Clear differentiation from competitors');
  } else {
    feedback.push('Weak differentiation - explain what makes IBM unique');
  }
  
  // Check for justification (10 points)
  const justificationMatches = countKeywordMatches(responseText, justificationKeywords);
  if (justificationMatches > 0) {
    objectionScore += 10;
    feedback.push('Good use of justification and reasoning');
  } else {
    feedback.push('Add more justification - use "because", "since", or provide examples');
  }
  
  // Length check (bonus feedback)
  const wordCount = responseText.trim().split(/\s+/).length;
  if (wordCount < 30) {
    feedback.push('Response is too brief - aim for at least 50 words');
  } else if (wordCount > 150) {
    feedback.push('Response is quite long - consider being more concise');
  }
  
  // Calculate total score
  const totalScore = businessScore + objectionScore;
  
  return {
    businessScore,
    objectionScore,
    totalScore,
    feedback
  };
}

module.exports = {
  evaluateResponse
};

// Made with Bob
