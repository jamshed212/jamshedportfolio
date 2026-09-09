import { ProjectDiscoveryState, TechnicalTranslationResult } from '@/types/discovery';

export function calculateComplexity(state: ProjectDiscoveryState): {
  score: number;
  tier: 'BASIC' | 'MODERATE' | 'ADVANCED' | 'ENTERPRISE';
  factors: string[];
} {
  let score = 15;
  const factors: string[] = [];

  if (['WEB_APPLICATION', 'CUSTOM_SOFTWARE', 'MOBILE_APP'].includes(state.projectType)) {
    score += 25;
    factors.push('Custom Application Architecture');
  } else if (['E_COMMERCE', 'INTERNAL_DASHBOARD'].includes(state.projectType)) {
    score += 20;
    factors.push('Complex Data Operations');
  } else if (state.projectType === 'BUSINESS_WEBSITE') {
    score += 10;
  }

  const featureCount = state.selectedFeatures.length;
  if (featureCount > 0) {
    const featureWeight = Math.min(featureCount * 3, 30);
    score += featureWeight;
    factors.push(`${featureCount} Functional Modules`);
  }

  if (state.hasMultiAccess === 'YES') {
    score += 10;
    factors.push('Role-Based Access Control (RBAC)');
  }

  if (state.selectedIntegrations.length > 0) {
    const integrationWeight = state.selectedIntegrations.length * 4;
    score += integrationWeight;
    factors.push(`${state.selectedIntegrations.length} External APIs`);
  }

  const finalScore = Math.min(Math.max(score, 10), 98);

  let tier: 'BASIC' | 'MODERATE' | 'ADVANCED' | 'ENTERPRISE' = 'BASIC';
  if (finalScore >= 75) tier = 'ENTERPRISE';
  else if (finalScore >= 50) tier = 'ADVANCED';
  else if (finalScore >= 30) tier = 'MODERATE';

  return { score: finalScore, tier, factors };
}

export function estimateTimelineWindow(state: ProjectDiscoveryState): string {
  const { score } = calculateComplexity(state);
  if (score < 30) return '2–3 Weeks';
  if (score < 55) return '3–5 Weeks';
  if (score < 75) return '5–8 Weeks';
  return '8–12+ Weeks';
}

export function translateRequirementsToTech(state: ProjectDiscoveryState): TechnicalTranslationResult {
  const frontend: string[] = ['Next.js 14/15', 'TypeScript', 'Tailwind CSS'];
  const backend: string[] = ['Node.js API Routes', 'Server Actions'];
  const database: string[] = [];
  const integrations: string[] = [...state.selectedIntegrations];

  if (['WEB_APPLICATION', 'CUSTOM_SOFTWARE', 'INTERNAL_DASHBOARD'].includes(state.projectType)) {
    database.push('PostgreSQL / Prisma ORM');
    backend.push('RESTful API / GraphQL');
  }

  if (state.selectedFeatures.includes('Login / Signup') || state.hasMultiAccess === 'YES') {
    backend.push('NextAuth / OAuth 2.0 / JWT');
  }

  if (state.selectedFeatures.includes('Payments') || state.selectedFeatures.includes('Subscriptions')) {
    integrations.push('Stripe Gateway');
  }

  if (state.projectType === 'CMS_WORDPRESS') {
    frontend.length = 0;
    frontend.push('Custom Headless Next.js', 'WP REST API');
    backend.push('WordPress Core CMS');
    database.push('MySQL');
  }

  if (database.length === 0) {
    database.push('Headless CMS / Edge Cache');
  }

  return {
    requirements: [
      `Targeting ${state.userTypeCount} User Group(s)`,
      `${state.selectedFeatures.length} Core Capabilities`,
      `Design Direction: ${state.designDirections.join(', ') || 'Modern/Minimal'}`,
    ],
    frontendStack: frontend,
    backendStack: backend,
    databaseStack: database,
    integrations: Array.from(new Set(integrations)),
  };
}