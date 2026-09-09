export type BusinessObjectiveCategory = 'GROW' | 'BUILD' | 'IMPROVE' | 'OTHER';

export type ProjectType = 
  | 'BUSINESS_WEBSITE'
  | 'E_COMMERCE'
  | 'WEB_APPLICATION'
  | 'CUSTOM_SOFTWARE'
  | 'INTERNAL_DASHBOARD'
  | 'MOBILE_APP'
  | 'CMS_WORDPRESS'
  | 'UI_UX_REDESIGN'
  | 'PERFORMANCE_SEO'
  | 'OTHER';

export type UserRoleType = 'Customer' | 'Admin' | 'Manager' | 'Staff' | 'Vendor' | 'Partner' | 'Public';

export interface DynamicAnswers {
  productCount?: string;
  paymentGateways?: string[];
  hasShipping?: boolean;
  authMethod?: string;
  dataScale?: string;
  pageCount?: string;
  hasCMS?: boolean;
  platforms?: ('iOS' | 'Android' | 'Cross-platform')[];
  targetMetrics?: string[];
}

export interface ProjectDiscoveryState {
  step: number;
  objectiveCategory: BusinessObjectiveCategory;
  objectives: string[];
  successDefinition: string;
  projectType: ProjectType;
  projectTypeCustom?: string;
  userTypes: string[];
  userTypeCount: '1' | '2-3' | '4-6' | '7+';
  hasMultiAccess: 'YES' | 'NO' | 'NOT_SURE';
  userRoles: UserRoleType[];
  selectedFeatures: string[];
  dynamicAnswers: DynamicAnswers;
  selectedIntegrations: string[];
  hasExistingAPIs: 'YES' | 'NO' | 'NOT_SURE';
  designDirections: string[];
  designPriorities: string[];
  contentReadiness: 'READY' | 'MOSTLY_READY' | 'NEEDS_REFINEMENT' | 'NEEDS_CREATION' | 'NOT_SURE';
  existingAssets: string[];
  timelineExpectation: 'EXPLORING' | 'NO_FIXED_DATE' | 'WITHIN_1_MONTH' | '1-2_MONTHS' | '2-3_MONTHS' | '3+_MONTHS' | 'FIXED_DEADLINE';
  targetDeadlineDate?: string;
  investmentRange: 'UNDER_1K' | '1K_3K' | '3K_5K' | '5K_10K' | '10K_PLUS' | 'NOT_SURE';
  projectReadiness: 'JUST_EXPLORING' | 'CLEAR_DIRECTION' | 'MOSTLY_DEFINED' | 'READY_TO_START';
  contact: {
    fullName: string;
    email: string;
    company: string;
    phoneWhatsapp: string;
    websiteUrl: string;
    additionalNotes: string;
  };
}

export interface TechnicalTranslationResult {
  requirements: string[];
  frontendStack: string[];
  backendStack: string[];
  databaseStack: string[];
  integrations: string[];
}