"use client";

import { useState } from "react";
import { DiscoveryData, initialDiscoveryData } from "@/lib/discovery-schema";
import { WorkflowBuilder } from "./WorkflowBuilder";
import { BlueprintSummary } from "./BlueprintSummary";
import { ProjectDiscoveryState, ProjectType } from "@/types/discovery";

export default function DiscoveryEngine() {
  const [data, setData] = useState<DiscoveryData>(initialDiscoveryData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateData = <K extends keyof DiscoveryData,>(
    key: K,
    value: DiscoveryData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Submit logic
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Step 5: Workflow Builder */}
      {data.step === 5 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase">MAP THE USER WORKFLOW</h2>
          <p className="text-xs font-mono text-muted">
            Define what happens step-by-step when a user interacts with your system.
          </p>
          <WorkflowBuilder 
            workflow={data.workflow || []} 
            onChange={(wf) => updateData("workflow", wf)} 
          />
        </div>
      )}

      {/* Step 14: Final Review & Blueprint */}
      {data.step === 14 && (
        <BlueprintSummary
          state={toProjectDiscoveryState(data)}
          onEditStep={(stepNum) => updateData("step", stepNum)}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}
function toProjectDiscoveryState(
  data: DiscoveryData
): ProjectDiscoveryState {
  const projectTypeMap: Record<string, ProjectType> = {
    WEB_APP: "WEB_APPLICATION",
    WEB_APPLICATION: "WEB_APPLICATION",
    E_COMMERCE: "E_COMMERCE",
    BUSINESS_WEBSITE: "BUSINESS_WEBSITE",
    CUSTOM_SOFTWARE: "CUSTOM_SOFTWARE",
    INTERNAL_DASHBOARD: "INTERNAL_DASHBOARD",
    MOBILE_APP: "MOBILE_APP",
    CMS_WORDPRESS: "CMS_WORDPRESS",
    UI_UX_REDESIGN: "UI_UX_REDESIGN",
    PERFORMANCE_SEO: "PERFORMANCE_SEO",
    OTHER: "OTHER",
  };

  const budgetMap: Record<string, ProjectDiscoveryState["investmentRange"]> = {
    "$1k - $3k": "1K_3K",
    "$3k - $5k": "3K_5K",
    "$5k - $10k": "5K_10K",
    "$10k+": "10K_PLUS",
    "Under $1k": "UNDER_1K",
  };

  const timelineMap: Record<
    string,
    ProjectDiscoveryState["timelineExpectation"]
  > = {
    "ASAP": "WITHIN_1_MONTH",
    "1-2 Months": "1-2_MONTHS",
    "2-3 Months": "2-3_MONTHS",
    "3+ Months": "3+_MONTHS",
    "Flexible": "NO_FIXED_DATE",
    "No Fixed Date": "NO_FIXED_DATE",
  };

  const userCount = data.users.length;

  const userTypeCount: ProjectDiscoveryState["userTypeCount"] =
    userCount <= 1 ? "1" :
    userCount <= 3 ? "2-3" :
    userCount <= 6 ? "4-6" : "7+";

  return {
    step: data.step,

    objectiveCategory: data.businessProblem.length
      ? "BUILD"
      : "OTHER",

    objectives: data.businessProblem,
    successDefinition: data.problemDescription,

    projectType: projectTypeMap[data.projectType] ?? "OTHER",

    projectTypeCustom:
      projectTypeMap[data.projectType] === undefined
        ? data.projectType
        : undefined,

    userTypes: data.users,
    userTypeCount,

    hasMultiAccess: "NOT_SURE",
    userRoles: [],

    selectedFeatures: data.featureSet?.length
      ? data.featureSet
      : data.features,

    dynamicAnswers: {},
    selectedIntegrations: data.integrations,

    hasExistingAPIs:
      data.existingSystem === "YES"
        ? "YES"
        : data.existingSystem === "NO"
          ? "NO"
          : "NOT_SURE",

    designDirections: data.designDirection
      ? [data.designDirection]
      : [],

    designPriorities: [],
    contentReadiness: "NOT_SURE",
    existingAssets: [],

    timelineExpectation:
      timelineMap[data.timeline] ?? "EXPLORING",

    investmentRange:
      budgetMap[data.budget] ?? "NOT_SURE",

    projectReadiness: "CLEAR_DIRECTION",

    contact: {
      fullName: data.client.name,
      email: data.client.email,
      company: data.client.company ?? "",
      phoneWhatsapp: "",
      websiteUrl: "",
      additionalNotes: data.problemDescription,
    },
  };
}