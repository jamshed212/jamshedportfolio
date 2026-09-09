type DiscoveryProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function DiscoveryProgress({ currentStep, totalSteps }: DiscoveryProgressProps) {
  const progress = Math.max(6, Math.round((currentStep / totalSteps) * 100));

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-muted">
        <span>Discovery Flow</span>
        <span>Step {currentStep} / {totalSteps}</span>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface border border-border">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
