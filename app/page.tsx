

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jamshed Khan | Full Stack Developer",
  description:
    "Jamshed Khan is a Full Stack Developer specializing in React, Next.js, WordPress, Shopify, API integrations, SaaS solutions, AI automation, performance, and technical SEO.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jamshed Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, WordPress, Shopify, APIs, SaaS, AI automation, performance, and technical SEO.",
    url: "/",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Jamshed Khan | Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Jamshed Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, WordPress, Shopify, APIs, SaaS, AI automation, performance, and technical SEO.",
    images: ["/og-image.jpeg"],
  },
};

const STATS = [
  {
    number: "04+",
    label: "YEARS EXPERIENCE",
    desc: "Custom Web & WordPress Engineering",
  },
  {
    number: "30+",
    label: "PROJECTS DELIVERED",
    desc: "Web Apps, Platforms & High-Speed Sites",
  },
  {
    number: "30+",
    label: "PROJECTS DELIVERED",
    desc: "Web Apps, Platforms & High Speed Sites",
  },
];

const TRUST_BADGES = [
  "⚡ PERFORMANCE-FOCUSED DEVELOPMENT",
  "🛡️ POST-LAUNCH SUPPORT",
  "🔒 CLEAR PROJECT SCOPE",
];

const SERVICES = [
  {
    code: "01",
    title: "CUSTOM WEB APPLICATIONS",
    desc: "Building fast, scalable web applications with Next.js and React, connected to the APIs, databases, and third-party services your business needs.",
    outcome: "A faster, more reliable web application built around your business requirements.",
  },
  {
    code: "02",
    title: "WORDPRESS ENGINEERING",
    desc: "Building fast, maintainable WordPress and WooCommerce websites with custom themes, clean integrations, and carefully selected plugins.",
    outcome: "A faster WordPress site that is easier to manage, maintain, and grow.",
  },
  {
    code: "03",
    title: "PERFORMANCE & TECHNICAL SEO",
    desc: "Improving website speed, Core Web Vitals, crawlability, indexation, redirects, and technical SEO issues that can affect search visibility and user experience.",
    outcome: "A technically healthier website built for better performance, crawlability, and search visibility.",
  },
  {
    code: "04",
    title: "UI/UX & MOTION ENGINEERING",
    desc: "Creating responsive, polished interfaces with thoughtful animations, interactions, and layouts that work smoothly across desktop, tablet, and mobile.",
    outcome: "A modern user experience that looks premium without sacrificing usability or performance.",
  },
];

const FEATURED_PROJECTS = [
  {
    id: "portfolio-app",
    title: "GLOBAL AGRO & MINERALS PLATFORM",
    category: "INDUSTRIAL REAL ESTATE & LOGISTICS",
    built: "Custom dynamic showcase with server-rendered catalogue architecture",
    problem: "Outdated laggy interface causing high bounce rates and poor mobile navigation",
    metric: "98/100 Mobile PageSpeed & 0.4s initial load time",
    slug: "agro-minerals-platform",
  },
  {
    id: "ecom-configurator",
    title: "DYNAMIC PRODUCT CONFIGURATOR",
    category: "CUSTOM COMMERCE & API INTEGRATION",
    built: "Real-time pricing engine connected directly to custom WooCommerce APIs",
    problem: "Complex dynamic variant mapping failing on mobile browsers",
    metric: "100% calculation accuracy across multi-category items",
    slug: "product-configurator",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Page Load Performance",
    builder: "Often affected by heavy themes, plugins & scripts",
    custom: "Performance-focused architecture & optimized assets",
  },
  {
    feature: "Lighthouse Performance",
    builder: "Limited by theme, plugins & page-builder overhead",
    custom: "Built with performance targets for each project",
  },
  {
    feature: "Code Maintainability",
    builder: "More dependencies & third-party plugin overhead",
    custom: "Cleaner, project-specific code & integrations",
  },
  {
    feature: "Business Scalability",
    builder: "Can become restrictive as requirements grow",
    custom: "Flexible architecture with custom APIs & UI",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVERY & SCOPE",
    desc: "We clarify your goals, requirements, technical needs, and project scope before development begins.",
  },
  {
    step: "02",
    title: "PROPOSAL & ARCHITECTURE",
    desc: "You receive a clear project proposal covering the recommended approach, scope, timeline, and investment.",
  },
  {
    step: "03",
    title: "DEVELOPMENT & REVIEW",
    desc: "I build the project in stages, sharing progress for review and keeping the implementation aligned with the agreed scope.",
  },
  {
    step: "04",
    title: "LAUNCH & SUPPORT",
    desc: "After testing and final review, I handle deployment and provide post-launch support based on the agreed project terms.",
  },
];

const SKILL_COLUMNS = [
  {
    title: "FRONTEND DEVELOPMENT",
    skills: ["React / Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },

  {
    title: "CMS & E-COMMERCE",
    skills: ["WordPress", "WooCommerce", "Elementor", "Shopify", "Custom Integrations"],
  },

  {
    title: "APIs & BACKEND",
    skills: ["REST APIs", "Third-Party Integrations", "API Data Sync", "Server-Side Logic", "Database Integration"],
  },

  {
    title: "PERFORMANCE & SEO",
    skills: ["Core Web Vitals", "Technical SEO", "PageSpeed Optimization", "Schema Markup", "Mobile Optimization"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      
      {/* 1. HERO SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-20 border-b border-border">
        <div className="space-y-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border text-accent text-[10px] font-mono tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            SENIOR WEB DEVELOPER / TECHNICAL ENGINEER
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
            FULL STACK<br />
            <span className="text-primary">DEVELOPER.</span>
          </h1>

          <p className="text-muted text-base md:text-xl font-normal max-w-3xl leading-relaxed pt-2">
            I build fast, scalable websites and web applications for businesses that need
            better performance, stronger user experiences, and reliable integrations.
            Specializing in Next.js, React, WordPress, Shopify, APIs, and technical SEO.
          </p>

          {/* Objection-Buster Trust Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {TRUST_BADGES.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-surface border border-border px-3 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/build"
              className="bg-primary hover:bg-primary-hover text-white font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-primary/20"
            >
              START A PROJECT →
            </Link>
            <Link
              href="/work"
              className="border border-border hover:border-foreground text-foreground font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-colors duration-200 bg-surface"
            >
              VIEW MY WORK →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-2 border-l border-border pl-6">
              <div className="text-4xl md:text-6xl font-black text-primary font-mono tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-foreground tracking-[0.2em] uppercase">
                {stat.label}
              </div>
              <p className="text-muted text-xs leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 border-b border-border">
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground">
            ENGINEERING SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.code}
              className="bg-surface border border-border p-8 rounded-sm space-y-4 hover:border-primary/40 transition-colors duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-accent font-mono text-xs tracking-widest font-bold">
                  [{srv.code}]
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-foreground">
                  {srv.title}
                </h3>
                <p className="text-muted text-xs md:text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </div>
              <div className="pt-4 text-xs font-mono text-foreground/80 border-t border-border/40 mt-4">
                <span className="text-accent">OUTCOME:</span> {srv.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SELECTED PROJECTS SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 border-b border-border">
        <div className="flex flex-wrap items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
              SELECTED PROOF
            </span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              RECENT PROJECTS
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-bold tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
          >
            SEE ALL PROJECTS →
          </Link>
        </div>

        <div className="space-y-8">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-surface border border-border p-8 md:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <span className="text-accent text-[10px] font-mono tracking-widest uppercase block">
                  {proj.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                  {proj.title}
                </h3>
                <div className="space-y-2 text-sm text-muted max-w-3xl">
                  <p><strong className="text-foreground">Scope Built:</strong> {proj.built}</p>
                  <p><strong className="text-foreground">Problem Solved:</strong> {proj.problem}</p>
                </div>
                <div className="inline-block bg-background border border-border px-4 py-2 text-xs font-mono text-primary font-bold mt-2">
                  RESULT: {proj.metric}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col lg:items-end lg:justify-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-muted uppercase">
                  PROJECT DETAILS
                </span>

                <Link
                  href={`/work/${proj.slug}`}
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-8 py-4 tracking-[0.2em] uppercase transition-colors inline-block whitespace-nowrap"
                >
                  VIEW CASE STUDY →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CUSTOM CODE VS GENERIC BUILDERS (COMPARISON) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 border-b border-border">
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            TECHNICAL SUPERIORITY
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground">
            CUSTOM STACK VS TEMPLATES
          </h2>
        </div>

        <div className="bg-surface border border-border rounded-sm overflow-hidden font-mono text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-background border-b border-border p-4 font-bold text-foreground">
            <span>METRIC / REQUIREMENT</span>
            <span className="text-muted">GENERIC BUILDERS (WIX / HEAVY WP)</span>
            <span className="text-primary">MY CUSTOM ARCHITECTURE</span>
          </div>

          {COMPARISON_ROWS.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 p-4 border-b border-border/40 hover:bg-background/50 transition-colors gap-2 md:gap-0"
            >
              <span className="font-bold text-foreground">{row.feature}</span>
              <span className="text-muted">{row.builder}</span>
              <span className="text-accent font-bold">{row.custom}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FRICTIONLESS ONBOARDING PROCESS */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 border-b border-border">
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            TRANSPARENT WORKFLOW
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground">
            HOW WE WORK TOGETHER
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((p, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-sm space-y-3 font-mono">
              <span className="text-2xl font-black text-primary block">{p.step}</span>
              <h3 className="text-xs font-bold text-foreground tracking-wider uppercase">{p.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. POST-LAUNCH PEACE OF MIND GUARANTEE */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="bg-surface border border-border p-8 md:p-12 rounded-sm space-y-6">
          <div className="space-y-2">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
              SAFETY NET & SUPPORT
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase text-foreground tracking-tight">
              ZERO-RISK POST-LAUNCH WARRANTY
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-3xl">
              Launch hone ke baad aap ka project chhor kar gayab nahi hota. Har project ke sath enterprise-grade support guarantees shamil hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs pt-4">
            <div className="bg-background border border-border p-5 rounded-sm space-y-2">
              <span className="text-accent text-lg block">🛡️</span>
              <h4 className="font-bold text-foreground uppercase">30-Day Free Bug Fixes</h4>
              <p className="text-muted">Launch ke baad koi bhi technical issue ya glitch 100% free fix hoga.</p>
            </div>

            <div className="bg-background border border-border p-5 rounded-sm space-y-2">
              <span className="text-accent text-lg block">📹</span>
              <h4 className="font-bold text-foreground uppercase">Loom Training Videos</h4>
              <p className="text-muted">Recorded video walkthroughs taake aap site aur admin dashboard easily manage kar sakein.</p>
            </div>

            <div className="bg-background border border-border p-5 rounded-sm space-y-2">
              <span className="text-accent text-lg block">⚡</span>
              <h4 className="font-bold text-foreground uppercase">95+ Speed SLA Guarantee</h4>
              <p className="text-muted">Google PageSpeed score desktop aur mobile dono par optimized aur maintained rahega.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPACT EXPERIENCE SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="bg-surface border border-border p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-4xl">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block">
              TRACK RECORD
            </span>
            <h3 className="text-2xl md:text-4xl font-black uppercase text-foreground tracking-tight">
              FULL STACK DEVELOPMENT EXPERIENCE
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Building and improving web applications, business websites, e-commerce platforms, API integrations, and technical SEO systems across modern web technologies.
            </p>
          </div>
          <Link
            href="/about"
            className="border border-border hover:border-foreground text-foreground font-bold text-xs px-8 py-4 tracking-[0.2em] uppercase transition-colors whitespace-nowrap"
          >
            VIEW MY EXPERIENCE →
          </Link>
        </div>
      </section>

      {/* 9. TECHNICAL SKILLS (4-COLUMN) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-24 border-b border-border">
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground">
            CORE STACK & TOOLING
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_COLUMNS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-bold text-primary font-mono tracking-wider uppercase border-b border-border pb-2">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-xs font-mono text-muted flex items-center gap-2">
                    <span className="text-accent text-[10px]">■</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 10. BLUE CONVERSION CTA MOMENT */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="bg-primary/10 border border-primary/40 rounded-sm p-10 md:p-20 text-center space-y-6">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            LET&apos;S WORK TOGETHER
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tell me what you’re building, what you need help with, and where you want to take it. I’ll review your requirements and we can discuss the right approach for your project.
          </p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/build"
              className="bg-primary hover:bg-primary-hover text-white font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-xl shadow-primary/30"
            >
              START A PROJECT →
            </Link>
            <Link
              href="/process"
              className="border border-white/20 hover:border-white text-white font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-colors bg-black/20"
            >
              SEE PROCESS →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. DIRECT CONTACT FOOTNOTE */}
      <section className="w-full px-6 md:px-12 lg:px-16 pb-16 text-center border-t border-border/40 pt-12">
        <p className="text-muted text-xs uppercase tracking-widest">
          Prefer to talk first?{" "}
          <Link
            href="/contact"
            className="text-accent underline font-bold hover:text-white transition-colors"
          >
            Get in Touch →
          </Link>
        </p>
      </section>

    </div>
  );
}