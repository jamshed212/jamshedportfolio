"use client";

import { useState } from "react";
import Link from "next/link";

interface RelatedProject {
  title: string;
  href: string;
}

interface Service {
  number: string;
  name: string;
  positioning: string;
  deliverables: string[];
  techStack: string[];
  relatedProjects: RelatedProject[];
}

interface FAQItem {
  question: string;
  answer: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    name: "CUSTOM WEB DEVELOPMENT",
    positioning:
      "Custom web applications engineered for businesses that have outgrown standard website builders and off-the-shelf templates.",
    deliverables: [
      "Full-stack web application architecture custom-fit to your business logic",
      "Dynamic API integrations and backend database structures",
      "Server-side rendering (SSR) for sub-second route transitions and high performance",
      "Scalable frontend state management and mobile-first responsive interfaces",
      "Automated Vercel/Cloud deployment pipelines with zero-downtime releases",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST / GraphQL APIs", "Vercel"],
    relatedProjects: [
      { title: "ITS Digital House Platform", href: "/work/its-digital-house" },
      { title: "Dynamic Product Configurator", href: "/work/xox-jewels" },
    ],
  },
  {
    number: "02",
    name: "WORDPRESS & CMS ENGINEERING",
    positioning:
      "Clean, security-hardened WordPress platforms built for teams that need full content flexibility without site bloat or performance drop-offs.",
    deliverables: [
      "Lightweight, bespoke custom theme engineering built without heavy page builders",
      "WooCommerce catalog and API setups tailored to dynamic product management",
      "Structured Custom Post Types (CPT) and native Gutenberg / ACF block systems",
      "Database query optimization and plugin reduction to prevent asset bloat",
      "Headless CMS setups or seamless content migration from legacy frameworks",
    ],
    techStack: ["Custom WordPress", "PHP", "WooCommerce API", "Elementor Pro", "MySQL", "SpeedyCache"],
    relatedProjects: [
      { title: "BOG International Platform", href: "/work/bog-international" },
      { title: "PortCity Traders System", href: "/work/portcity-traders" },
    ],
  },
  {
    number: "03",
    name: "WEB PERFORMANCE & TECHNICAL SEO",
    positioning:
      "Technical remediation for active platforms losing organic search traffic, sales conversions, or search indexation due to slow speeds and structural errors.",
    deliverables: [
      "Core Web Vitals audit and LCP/FID/CLS optimization targeting 90+ PageSpeed scores",
      "301 redirect chain cleanup, canonical rule fixes, and indexation error remediation",
      "DOM size reduction, blocking script deferral, and inline critical CSS delivery",
      "Image compression, font optimization, and WebP asset format serving",
      "Server header tuning, caching policy configuration, and schema markup injection",
    ],
    techStack: ["Ahrefs Audit Tools", "Google PageSpeed Insights", "Chrome DevTools", "Server Directives (.htaccess / Nginx)", "Schema Markup"],
    relatedProjects: [
      { title: "PortCity Traders SEO Fixes", href: "/work/portcity-traders" },
      { title: "BOG Minerals Performance", href: "/work/bog-international" },
    ],
  },
  {
    number: "04",
    name: "UI/UX & MOTION DESIGN",
    positioning:
      "Interactive web interfaces engineered to capture visitor focus, clarify complex offerings, and drive conversions without compromising mobile speed.",
    deliverables: [
      "Mobile-first responsive interface designs based on robust typography and spacing systems",
      "Fluid micro-interactions and scroll-triggered visual feedback loops",
      "High-performance mobile application sliders optimized for touch viewports",
      "Conversion-focused layout hierarchy and prominent action pathways",
      "Figma-to-code pixel-perfect execution across all standard viewports",
    ],
    techStack: ["GSAP", "Framer Motion", "Tailwind CSS", "Fabric.js", "Vanilla JS"],
    relatedProjects: [
      { title: "ITS Digital House Identity", href: "/work/its-digital-house" },
      { title: "Interactive Product Configurator", href: "/work/xox-jewels" },
    ],
  },
];

const FAQS: FAQItem[] = [
  {
    question: "How long does a custom build take?",
    answer:
      "Timelines depend on complexity and scope clarity. A focused custom web application or bespoke WordPress platform generally takes 3 to 6 weeks from initial technical scoping to final deployment. Isolated performance audits or minor component builds take 1 to 2 weeks.",
  },
  {
    question: "Should I use WordPress or a custom application?",
    answer:
      "If your priority is frequent internal content publishing and simple CMS management, a clean custom WordPress architecture is ideal. If your platform requires dynamic real-time calculations, high-concurrency API integrations, or sub-second app speeds, a Next.js/React application is the better investment.",
  },
  {
    question: "Can you integrate APIs or existing systems?",
    answer:
      "Yes. I routinely connect web interfaces to external REST/GraphQL APIs, custom WooCommerce endpoints, CRM systems, and automated workflows (such as n8n pipelines) to make sure data flows seamlessly across your business tools.",
  },
  {
    question: "How do you handle performance?",
    answer:
      "Performance is engineered directly into the codebase from day one—not added as an afterthought. I avoid bloated third-party plugins, optimize assets (images, fonts, scripts), structure clean DOM elements, and tune caching policies to achieve 90+ Core Web Vitals targets.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Yes. I evaluate existing codebases for refactoring, technical SEO remediation, speed optimization, and custom component additions without forcing a full rebuild—unless the underlying system is fundamentally unmaintainable.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      
      {/* HEADER SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 border-b border-border">
        <div className="w-full space-y-4">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            CAPABILITIES & SYSTEMS ENGINEERING
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
            ENGINEERING <span className="text-primary">SERVICES.</span>
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl leading-relaxed pt-2">
            Technical solutions built around business objectives. Every system is engineered to solve operational bottlenecks, speed up performance, and convert visitors into clients.
          </p>
        </div>
      </section>

      {/* CORE SERVICES LIST */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-12 border-b border-border space-y-12">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="bg-surface border border-border p-8 md:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-primary/40 transition-colors duration-200"
          >
            {/* LEFT: Service Number & Name */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-primary font-mono font-black text-sm tracking-widest block">
                [{service.number}]
              </span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                {service.name}
              </h2>
              <p className="text-muted text-xs md:text-sm leading-relaxed pt-2">
                {service.positioning}
              </p>
            </div>

            {/* MIDDLE: What You Get & Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-accent text-[10px] font-mono uppercase tracking-widest block mb-3 font-bold">
                  WHAT YOU GET
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs md:text-sm text-muted flex items-start gap-2 leading-relaxed">
                      <span className="text-accent text-xs">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-accent text-[10px] font-mono uppercase tracking-widest block mb-2 font-bold">
                  ENGINEERING / TECHNOLOGY
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-muted bg-background border border-border/60 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Related Proof / Case Studies */}
            <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div>
                <span className="text-accent text-[10px] font-mono uppercase tracking-widest block mb-3 font-bold">
                  RELATED PROOF
                </span>
                <div className="space-y-2">
                  {service.relatedProjects.map((proj, pIdx) => (
                    <Link
                      key={pIdx}
                      href={proj.href}
                      className="text-xs font-mono text-foreground hover:text-primary transition-colors block underline decoration-border underline-offset-4"
                    >
                      → {proj.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/build"
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-3.5 tracking-[0.2em] uppercase transition-colors inline-block text-center w-full"
              >
                SCOPE THIS SERVICE →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* FAQs SECTION (FULL WIDTH) */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20 border-b border-border">
        <div className="w-full mb-12">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-2">
            TECHNICAL & OPERATIONAL CLARITY
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="w-full space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-surface border border-border rounded-sm transition-colors duration-200 w-full"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 text-foreground font-bold text-sm md:text-base tracking-wide uppercase font-mono"
                >
                  <span>{faq.question}</span>
                  <span className="text-accent font-mono text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted text-xs md:text-sm leading-relaxed border-t border-border/40 pt-4 w-full">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM BRIEF BUILDER CTA */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="bg-primary/10 border border-primary/40 rounded-sm p-10 md:p-16 text-center space-y-6">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            READY TO TALK SPECIFICS?
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            CONFIGURE YOUR PROJECT SCOPE
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Translate your business requirements into an actionable technical plan. Select your required features, timeline, and goals.
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