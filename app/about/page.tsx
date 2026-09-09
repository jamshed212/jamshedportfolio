"use client";

import Link from "next/link";

interface StatItem {
  label: string;
  value: string;
  description: string;
}

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

const STATS: StatItem[] = [
  {
    label: "SYSTEMS DEPLOYED",
    value: "15+",
    description: "Production web applications, custom CMS setups, & APIs",
  },
  {
    label: "PERFORMANCE BENCHMARK",
    value: "95+",
    description: "Average Core Web Vitals targets achieved",
  },
  {
    label: "CORE TECH STACK",
    value: "Full-Stack",
    description: "Next.js, React, Custom WordPress, & Modern Frontend",
  },
];

const PHILOSOPHIES = [
  {
    number: "01",
    title: "SYSTEMS OVER PAGES",
    description:
      "I don't just build individual screens. I think about how the website, CMS, APIs, data and user experience work together.",
  },
  {
    number: "02",
    title: "PERFORMANCE BY DESIGN",
    description:
      "Performance should be considered during architecture and implementation, not added as a final optimization step.",
  },
  {
    number: "03",
    title: "BUILD FOR THE BUSINESS",
    description:
      "Technology is only useful when it solves a real business problem.",
  },
];

const FOCUS_AREAS = [
  "High-performance web applications",
  "Custom WordPress systems",
  "E-commerce / configuration systems",
  "Technical SEO / performance",
  "Interactive digital experiences",
];

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Lead Engineer",
    organization: "ITS DIGITAL HOUSE",
    description:
      "Directing full-stack digital builds, client technical architecture, and web application strategy.",
    highlights: [
      "Engineered agency platform migration to Next.js & React on Vercel infrastructure",
      "Architected dynamic lead acquisition and web performance workflows",
      "Standardized mobile-first UI components and sub-second page transitions",
    ],
  },
  {
    period: "2023 — PRESENT",
    role: "Full-Stack & CMS Engineer",
    organization: "INDEPENDENT CONTRACTS",
    description:
      "Engineering specialized web platforms, e-commerce integrations, and SEO technical remediations for international clients and internal ventures.",
    highlights: [
      "Built custom WooCommerce variant configurator engine with real-time pricing for XOX Jewels",
      "Structured structured-data product catalogs for Bathia Ocean Gold (BOG)",
      "Fixed critical 301 redirect loops and indexation errors for PortCity Traders",
    ],
  },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "FRONTEND ENGINEERING",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    category: "CMS & BACKEND INTEGRATIONS",
    skills: ["Custom WordPress", "PHP", "WooCommerce REST API", "REST / GraphQL", "ACF / CPTs"],
  },
  {
    category: "PERFORMANCE & ANIMATION",
    skills: ["Core Web Vitals", "Ahrefs Technical SEO", "GSAP", "Framer Motion", "SpeedyCache"],
  },
  {
    category: "DEVOPS & WORKFLOWS",
    skills: ["Git / GitHub", "Vercel", "n8n Automation", "Cursor", "Elementor Pro"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      
      {/* HEADER & HERO OVERVIEW */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 border-b border-border">
        <div className="w-full space-y-6">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            ENGINEERING & ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
            ABOUT THE <span className="text-primary">ENGINEER.</span>
          </h1>
          <p className="text-muted text-base md:text-lg max-w-3xl leading-relaxed pt-2">
            I engineer web applications, bespoke CMS architectures, and interactive digital interfaces with a focus on speed, structural clarity, and business outcomes.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border p-6 rounded-sm space-y-2"
            >
              <span className="text-accent text-[10px] font-mono tracking-widest uppercase block font-bold">
                {stat.label}
              </span>
              <span className="text-3xl md:text-4xl font-black font-mono text-foreground block">
                {stat.value}
              </span>
              <p className="text-muted text-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW I THINK (PHILOSOPHY SECTION) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="w-full mb-12">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-2">
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            HOW I THINK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHIES.map((item) => (
            <div
              key={item.number}
              className="bg-surface border border-border p-8 rounded-sm space-y-4 hover:border-primary/40 transition-colors duration-200"
            >
              <span className="text-primary font-mono font-black text-sm tracking-widest block">
                [{item.number}]
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-muted text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT FOCUS SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-b border-border bg-surface/30">
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
              TARGET SCOPE
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              CURRENT FOCUS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            {FOCUS_AREAS.map((focus, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border p-4 rounded-sm flex items-center gap-3"
              >
                <span className="text-accent text-xs">■</span>
                <span className="text-xs md:text-sm font-mono font-bold text-foreground">
                  {focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & CAREER HISTORY */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="w-full mb-12">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-2">
            PRODUCTION RECORD
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-8 w-full">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border p-8 md:p-10 rounded-sm space-y-6 hover:border-primary/40 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <span className="text-primary font-mono text-xs tracking-widest font-bold block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                    {exp.role}
                  </h3>
                </div>
                <span className="text-accent font-mono text-xs uppercase tracking-widest bg-background border border-border px-3 py-1 self-start md:self-auto">
                  {exp.organization}
                </span>
              </div>

              <p className="text-muted text-xs md:text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <span className="text-accent text-[10px] font-mono uppercase tracking-widest block font-bold">
                  KEY CONTRIBUTIONS
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs md:text-sm text-muted flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-accent text-xs">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS & TECHNICAL STACK */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="w-full mb-12">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-2">
            TECHNICAL TOOLING
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            SKILLS & STACK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border p-8 rounded-sm space-y-4"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest font-bold text-accent border-b border-border/60 pb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono text-foreground bg-background border border-border px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="bg-primary/10 border border-primary/40 rounded-sm p-10 md:p-16 text-center space-y-6">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            INITIATE PROJECT SCOPING
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            READY TO BUILD YOUR SYSTEM?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Translate your product goals and business logic into an actionable engineering specification.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/build"
              className="bg-primary hover:bg-primary-hover text-white font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-xl shadow-primary/30"
            >
              START BRIEF BUILDER →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}