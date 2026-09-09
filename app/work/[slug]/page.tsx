import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 md:px-12 lg:px-16 w-full">
      <Link
        href="/work"
        className="text-accent text-xs font-mono tracking-widest hover:underline mb-8 inline-block uppercase"
      >
        ← BACK TO ALL PROJECTS
      </Link>

      <div className="w-full space-y-8">
        <div className="border-b border-border pb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="text-accent tracking-widest uppercase">
              [{project.category}]
            </span>
            <span className="text-muted">|</span>
            <span className="text-muted uppercase">TIMELINE: {project.timeline}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground">
            {project.title}
          </h1>
        </div>

        <div className="bg-surface border border-border p-6 md:p-12 rounded-sm space-y-10 font-mono text-sm w-full">
          <div className="space-y-2 border-b border-border/40 pb-6">
            <span className="text-accent text-xs tracking-widest uppercase font-bold block">
              // 01. EXECUTIVE OVERVIEW
            </span>
            <p className="text-foreground text-base md:text-lg leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border/40 pb-8">
            <div className="space-y-2">
              <span className="text-muted text-xs block uppercase">THE CHALLENGE / PROBLEM:</span>
              <p className="text-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-2">
              <span className="text-muted text-xs block uppercase">THE ARCHITECTURAL SOLUTION:</span>
              <p className="text-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border/40 pb-8">
            <div className="space-y-4">
              <span className="text-accent text-xs tracking-widest uppercase font-bold block">
                // 02. TECHNICAL HIGHLIGHTS
              </span>
              <ul className="space-y-2">
                {project.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                    <span className="text-accent">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-xs tracking-widest uppercase font-bold block">
                // 03. KEY FEATURES DELIVERED
              </span>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                    <span className="text-primary">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="space-y-3">
              <span className="text-muted text-xs block uppercase">VERIFIED METRICS & RESULTS:</span>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="bg-background border border-border px-3 py-1.5 text-xs text-primary font-bold tracking-wider"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-muted text-xs block uppercase">ENGINEERING STACK:</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t, i) => (
                  <span
                    key={i}
                    className="bg-background border border-border/60 text-muted px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}