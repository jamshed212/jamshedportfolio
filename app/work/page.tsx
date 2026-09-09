import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";

export default function WorkListingPage() {
  const projects = Object.values(PROJECTS_DATA);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 md:px-12 lg:px-16 w-full">
      <div className="mb-12 space-y-4">
        <span className="text-accent text-xs font-mono tracking-widest uppercase block">
          ENGINEERING ARCHIVE
        </span>
        <h1 className="text-4xl md:text-7xl font-black uppercase text-foreground">
          SELECTED WORK
        </h1>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-surface border border-border p-8 rounded-sm space-y-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="text-accent uppercase">[{project.category}]</span>
              {project.isPrivate && (
                <span className="bg-background border border-border text-muted px-2 py-1 text-[10px]">
                  🔒 INTERNAL ENTERPRISE SOFTWARE
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase text-foreground">
              {project.title}
            </h2>

            <p className="text-muted text-sm max-w-3xl leading-relaxed font-sans">
              {project.overview}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40 font-mono">
              <div className="flex flex-wrap gap-2 text-xs">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-background border border-border/60 text-muted px-2.5 py-1 text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/work/${project.slug}`}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-3 uppercase tracking-wider transition-colors"
              >
                VIEW CASE STUDY →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}