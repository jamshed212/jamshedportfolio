export interface DiscoveryData {
  step: number;
  projectType: string;
  client: {
    name: string;
    email: string;
    company?: string;
  };
  budget: string;
  timeline: string;
  businessProblem: string[];
  problemDescription: string;
  users: string[];
  userScale: string;
  features: string[];
  featureSet?: string[];
  workflow: string[];
  designDirection: string;
  integrations: string[];
  existingSystem: string;
}

export const initialDiscoveryData: DiscoveryData = {
  step: 1,
  projectType: "WEB_APP",
  client: {
    name: "",
    email: "",
    company: "",
  },
  budget: "$5k - $10k",
  timeline: "1-2 Months",
  businessProblem: [],
  problemDescription: "",
  users: [],
  userScale: "1k - 10k Users",
  features: [],
  featureSet: [],
  workflow: [],
  designDirection: "MODERN",
  integrations: [],
  existingSystem: "NO",
};