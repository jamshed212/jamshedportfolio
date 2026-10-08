import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { PROJECTS_DATA } from "@/data/projects";

export function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    return {
      title: "Case Study Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} | Web Development Case Study | Jamshed Khan`,
    description: project.seoDescription,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Jamshed Khan`,
      description: project.seoDescription,
      url: `/work/${slug}`,
      type: "article",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: `${project.title} | Jamshed Khan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Jamshed Khan`,
      description: project.seoDescription,
      images: ["/og-image.jpeg"],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 md:px-12 lg:px-16 w-full">
      <Script
        id={`project-schema-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: `${project.title} Case Study`,
            description: project.seoDescription,
            url: `https://jamshedportfolio.vercel.app/work/${project.slug}`,
            creator: {
              "@type": "Person",
              name: "Jamshed Khan",
              url: "https://jamshedportfolio.vercel.app",
            },
            about: project.category,
            keywords: project.techStack.join(", "),
          }),
        }}
      />
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
            <span className="text-muted uppercase">
              TIMELINE: {project.timeline}
            </span>
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
              <span className="text-muted text-xs block uppercase">
                THE CHALLENGE / PROBLEM:
              </span>
              <p className="text-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-muted text-xs block uppercase">
                THE ARCHITECTURAL SOLUTION:
              </span>
              <p className="text-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border/40 pb-8">
            <div className="space-y-4">
              <span className="text-accent text-xs tracking-widest uppercase font-bold block">
                // 02. TECHNICAL HIGHLIGHTS
              </span>

              <ul className="space-y-2">
                {project.architectureHighlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-foreground/90"
                  >
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
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-foreground/90"
                  >
                    <span className="text-primary">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="space-y-3">
              <span className="text-muted text-xs block uppercase">
                PROJECT METRICS & RESULTS:
              </span>

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
              <span className="text-muted text-xs block uppercase">
                ENGINEERING STACK:
              </span>

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

        <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <span className="text-accent text-xs tracking-widest uppercase font-mono font-bold">
              // START A PROJECT
            </span>

            <p className="text-muted text-sm mt-2">
              Have a similar project in mind? Let&apos;s discuss your requirements.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live website`}
                className="border border-border px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition"
              >
                VIEW LIVE PROJECT →
              </a>
            )}
            <Link
              href="/build"
              className="bg-accent text-background px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:opacity-90 transition"
            >
              BUILD WITH ME →
            </Link>

            <Link
              href="/contact"
              className="border border-border px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition"
            >
              CONTACT →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}