"use client";

import { useState } from "react";
import { DiscoveryData, initialDiscoveryData } from "@/lib/discovery-schema";
import { WorkflowBuilder } from "./WorkflowBuilder";
import { BlueprintSummary } from "./BlueprintSummary";
import { ProjectSignals } from "./ProjectSignals";

export default function DiscoveryEngine() {
  const [data, setData] = useState<DiscoveryData>(initialDiscoveryData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateData = (key: keyof DiscoveryData | string, value: any) => {
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
          state={data as any}
          onEditStep={(stepNum) => updateData("step", stepNum)}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}