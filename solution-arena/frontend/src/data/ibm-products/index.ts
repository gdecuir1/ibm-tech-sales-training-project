// IBM Product Knowledge Base - Main Index
// Centralized access to all IBM products with utility functions

import { IBMProduct, Industry, PainPointCategory, CompanySize } from '../../types/products';
import { powerHardwareProducts } from './hardware';
import { storageProducts } from './storage';
import { cloudProducts } from './cloud';

// Combine all products
export const allIBMProducts: IBMProduct[] = [
  ...powerHardwareProducts,
  ...storageProducts,
  ...cloudProducts,
];

// Export individual product arrays
export { powerHardwareProducts, storageProducts, cloudProducts };

// Export individual products for direct access
export { powerE1080 } from './hardware';
export { flashSystem9500 } from './storage';
export { powerVirtualServer } from './cloud';

/**
 * Get product by ID
 */
export function getProductById(id: string): IBMProduct | undefined {
  return allIBMProducts.find(product => product.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): IBMProduct[] {
  return allIBMProducts.filter(product => product.category === category);
}

/**
 * Get products by industry fit
 */
export function getProductsByIndustry(industry: Industry): IBMProduct[] {
  return allIBMProducts.filter(product =>
    product.industryFit?.some(fit => fit.industry === industry && fit.fit === 'excellent')
  );
}

/**
 * Search products by pain point
 */
export function getProductsByPainPoint(painPointCategory: PainPointCategory): IBMProduct[] {
  return allIBMProducts.filter(product =>
    product.commonPainPoints.some(pain => pain.category === painPointCategory)
  );
}

/**
 * Search products by keyword
 */
export function searchProducts(keyword: string): IBMProduct[] {
  const lowerKeyword = keyword.toLowerCase();
  return allIBMProducts.filter(product =>
    product.name.toLowerCase().includes(lowerKeyword) ||
    product.description.toLowerCase().includes(lowerKeyword) ||
    product.overview.toLowerCase().includes(lowerKeyword) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
}

/**
 * Get recommended products based on customer profile
 */
export function getRecommendedProducts(params: {
  industry?: Industry;
  painPoints?: PainPointCategory[];
  budget?: string;
  companySize?: CompanySize;
}): IBMProduct[] {
  let products = allIBMProducts;

  // Filter by industry
  if (params.industry) {
    products = products.filter(product =>
      product.idealCustomers.some(customer =>
        customer.industries?.includes(params.industry!)
      ) ||
      product.industryFit?.some(fit =>
        fit.industry === params.industry && (fit.fit === 'excellent' || fit.fit === 'strong')
      )
    );
  }

  // Filter by pain points
  if (params.painPoints && params.painPoints.length > 0) {
    products = products.filter(product =>
      product.commonPainPoints.some(pain =>
        params.painPoints!.includes(pain.category)
      )
    );
  }

  // Filter by company size
  if (params.companySize) {
    products = products.filter(product =>
      product.idealCustomers.some(customer =>
        customer.companySize?.includes(params.companySize!)
      )
    );
  }

  return products;
}

/**
 * Get cross-sell opportunities for a product
 */
export function getCrossSellProducts(productId: string): IBMProduct[] {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) {
    return [];
  }

  return product.relatedProducts
    .map(relatedId => getProductById(relatedId))
    .filter((p): p is IBMProduct => p !== undefined);
}

/**
 * Get competitive alternatives
 */
export function getCompetitiveInfo(productId: string) {
  const product = getProductById(productId);
  if (!product) {
    return null;
  }

  return {
    product: product.name,
    competitors: product.competitors || [],
    advantages: product.competitiveAdvantages || [],
    differentiators: product.competitiveDifferentiators || [],
  };
}

/**
 * Get objection handling for a product
 */
export function getObjectionHandling(productId: string, objection?: string) {
  const product = getProductById(productId);
  if (!product) {
    return null;
  }

  if (objection) {
    const response = product.objectionResponses?.find(
      resp => resp.objection.toLowerCase().includes(objection.toLowerCase())
    );
    return response || null;
  }

  return {
    commonObjections: product.commonObjections || [],
    responses: product.objectionResponses || [],
  };
}

/**
 * Get discovery questions for a product
 */
export function getDiscoveryQuestions(productId: string) {
  const product = getProductById(productId);
  return product?.discoveryQuestions || [];
}

/**
 * Get use cases for a product by industry
 */
export function getUseCasesByIndustry(productId: string, industry?: Industry) {
  const product = getProductById(productId);
  if (!product) {
    return [];
  }

  if (industry) {
    return product.useCases.filter(useCase => useCase.industry === industry);
  }

  return product.useCases;
}

/**
 * Get product bundles
 */
export function getProductBundles(productId: string) {
  const product = getProductById(productId);
  return product?.typicalBundles || [];
}

/**
 * Calculate product fit score for a customer scenario
 */
export function calculateProductFitScore(
  productId: string,
  scenario: {
    industry?: Industry;
    painPoints?: PainPointCategory[];
    budget?: string;
    companySize?: CompanySize;
  }
): number {
  const product = getProductById(productId);
  if (!product) {
    return 0;
  }

  let score = 0;
  let maxScore = 0;

  // Industry fit (30 points)
  maxScore += 30;
  if (scenario.industry) {
    const industryFit = product.industryFit?.find(fit => fit.industry === scenario.industry);
    if (industryFit) {
      if (industryFit.fit === 'excellent') score += 30;
      else if (industryFit.fit === 'strong') score += 20;
      else if (industryFit.fit === 'good') score += 10;
    }
  }

  // Pain point match (40 points)
  maxScore += 40;
  if (scenario.painPoints && scenario.painPoints.length > 0) {
    const matchingPainPoints = product.commonPainPoints.filter(pain =>
      scenario.painPoints!.includes(pain.category)
    );
    const painPointScore = (matchingPainPoints.length / scenario.painPoints.length) * 40;
    score += painPointScore;
  }

  // Company size match (15 points)
  maxScore += 15;
  if (scenario.companySize) {
    const hasMatch = product.idealCustomers.some(customer =>
      customer.companySize?.includes(scenario.companySize!)
    );
    if (hasMatch) score += 15;
  }

  // Budget alignment (15 points)
  maxScore += 15;
  if (scenario.budget) {
    // Simple budget check - could be more sophisticated
    const hasMatch = product.idealCustomers.some(customer =>
      customer.typicalBudget?.includes(scenario.budget!)
    );
    if (hasMatch) score += 15;
  }

  // Return percentage score
  return Math.round((score / maxScore) * 100);
}

/**
 * Get product elevator pitch
 */
export function getElevatorPitch(productId: string): string {
  const product = getProductById(productId);
  return product?.elevatorPitch || '';
}

/**
 * Get product specifications
 */
export function getProductSpecs(productId: string) {
  const product = getProductById(productId);
  return product?.specifications || [];
}

/**
 * Get customer examples for a product
 */
export function getCustomerExamples(productId: string, industry?: Industry) {
  const product = getProductById(productId);
  if (!product) {
    return [];
  }

  if (industry) {
    return product.customerExamples?.filter(example => example.industry === industry) || [];
  }

  return product.customerExamples || [];
}

/**
 * Get all products that solve a specific pain point
 */
export function getProductsForPainPoint(painPoint: string): IBMProduct[] {
  const lowerPainPoint = painPoint.toLowerCase();
  return allIBMProducts.filter(product =>
    product.commonPainPoints.some(pain =>
      pain.painPoint.toLowerCase().includes(lowerPainPoint)
    )
  );
}

/**
 * Get product tags for filtering
 */
export function getAllProductTags(): string[] {
  const tags = new Set<string>();
  allIBMProducts.forEach(product => {
    product.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Get all industries covered
 */
export function getAllIndustries(): Industry[] {
  const industries = new Set<Industry>();
  allIBMProducts.forEach(product => {
    product.industryFit?.forEach(fit => industries.add(fit.industry));
  });
  return Array.from(industries).sort();
}

/**
 * Get product pricing information
 */
export function getProductPricing(productId: string) {
  const product = getProductById(productId);
  if (!product) {
    return null;
  }

  return {
    model: product.pricingModel,
    positioning: product.pricingPositioning,
    typicalDealSize: product.typicalDealSize,
    discountGuidelines: product.discountGuidelines,
  };
}

/**
 * Export product statistics
 */
export const productStats = {
  totalProducts: allIBMProducts.length,
  byCategory: {
    Hardware: powerHardwareProducts.length,
    Storage: storageProducts.length,
    Cloud: cloudProducts.length,
  },
  totalUseCases: allIBMProducts.reduce((sum, p) => sum + p.useCases.length, 0),
  totalCustomerExamples: allIBMProducts.reduce(
    (sum, p) => sum + (p.customerExamples?.length || 0),
    0
  ),
};

// Default export
export default {
  allIBMProducts,
  getProductById,
  getProductsByCategory,
  getProductsByIndustry,
  getProductsByPainPoint,
  searchProducts,
  getRecommendedProducts,
  getCrossSellProducts,
  getCompetitiveInfo,
  getObjectionHandling,
  getDiscoveryQuestions,
  getUseCasesByIndustry,
  getProductBundles,
  calculateProductFitScore,
  getElevatorPitch,
  getProductSpecs,
  getCustomerExamples,
  getProductsForPainPoint,
  getAllProductTags,
  getAllIndustries,
  getProductPricing,
  productStats,
};

// Made with Bob
