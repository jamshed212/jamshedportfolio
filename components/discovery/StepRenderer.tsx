import type { DiscoveryData } from "@/lib/discovery-schema";

type StepRendererProps = {
  step: number;
  data: DiscoveryData;
  updateData: (key: string, value: unknown) => void;
};

export function StepRenderer({ step, data, updateData }: StepRendererProps) {
  return (
    <section className="rounded-sm border border-border bg-surface p-8">
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
        Discovery Step {step}
      </div>
      <div className="mt-6 space-y-4">
        <h2 className="text-3xl font-black uppercase tracking-tight text-foreground">
          Project Discovery
        </h2>
        <p className="text-sm text-muted">
          Collecting the shape of the launch, feature set, and workflow path.
        </p>
        <div className="grid gap-3">
          <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">
            Project type
          </label>
          <input
            value={data.projectType || "WEB_APP"}
            onChange={(event) => updateData("projectType", event.target.value)}
            className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
      </div>
    </section>
  );
}
