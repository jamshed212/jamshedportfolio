import type { DiscoveryData } from "@/lib/discovery-schema";

type LiveBlueprintProps = {
  data: DiscoveryData;
};

export function LiveBlueprint({ data }: LiveBlueprintProps) {
  return (
    <aside className="sticky top-24 rounded-sm border border-border bg-surface p-6">
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
        Live Blueprint
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">Project Type</div>
          <div className="mt-2 text-sm font-bold text-foreground">{data.projectType || "Custom"}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">Priority Features</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(data.featureSet || []).map((feature) => (
              <span key={feature} className="border border-primary/50 px-2 py-1 text-[10px] font-mono uppercase text-primary">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">Workflow</div>
          <div className="mt-2 space-y-2">
            {(data.workflow || []).map((step, index) => (
              <div key={`${step}-${index}`} className="text-xs text-foreground">{index + 1}. {step}</div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
