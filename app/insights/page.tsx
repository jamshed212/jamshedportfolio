"use client";

import { useState } from "react";
import Link from "next/link";

interface Article {
  id: string;
  category: "NEXT.JS" | "WORDPRESS / CMS" | "PERFORMANCE" | "TECHNICAL SEO" | "MOTION UI" | "E-COMMERCE / SYSTEMS";
  title: string;
  description: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

const CATEGORIES = [
  "ALL",
  "NEXT.JS",
  "WORDPRESS / CMS",
  "PERFORMANCE",
  "TECHNICAL SEO",
  "MOTION UI",
  "E-COMMERCE / SYSTEMS",
] as const;

const FEATURED_ARTICLE: Article = {
  id: "wp-vs-nextjs-switch",
  category: "NEXT.JS",
  title: "WordPress vs Custom Next.js: When Should a Business Switch?",
  description:
    "A realistic architectural evaluation framework for determining when a monolithic CMS becomes a growth bottleneck—and how to migrate to decoupled Next.js without losing organic SEO equity or publishing speed.",
  readTime: "7 MIN READ",
  date: "JUL 2026",
  tags: ["Architecture", "Next.js", "WordPress", "Migration Strategy"],
  featured: true,
};

const ARTICLES: Article[] = [
  {
    id: "canonical-errors-fix",
    category: "TECHNICAL SEO",
    title: "Fixing Canonical Errors & Redirect Loops Across Large Websites",
    description:
      "A step-by-step breakdown of identifying 301 redirect chains, clearing cache collisions, and fixing canonical URL misconfigurations using Ahrefs site audit tools and server directives.",
    readTime: "5 MIN READ",
    date: "JUN 2026",
    tags: ["Ahrefs", "301 Redirects", "Canonical Rules", "Server Directives"],
  },
  {
    id: "pagespeed-90-plus-wordpress",
    category: "PERFORMANCE",
    title: "Taking a WordPress Website from Poor Performance to 90+ PageSpeed",
    description:
      "How to systematically eliminate plugin bloat, defer non-critical render-blocking assets, optimize database queries, and configure SpeedyCache for sub-second Core Web Vitals.",
    readTime: "6 MIN READ",
    date: "MAY 2026",
    tags: ["Core Web Vitals", "LCP / CLS", "SpeedyCache", "Asset Deferral"],
  },
  {
    id: "dynamic-jewelry-configurator",
    category: "E-COMMERCE / SYSTEMS",
    title: "Building a Dynamic Product Configuration System with WooCommerce APIs",
    description:
      "Engineering a custom interactive product customizer using frontend state management connected to WooCommerce REST endpoints for real-time pricing and complex variation mapping.",
    readTime: "8 MIN READ",
    date: "APR 2026",
    tags: ["WooCommerce API", "React", "State Management", "E-Commerce"],
  },
  {
    id: "nextjs-app-router-patterns",
    category: "NEXT.JS",
    title: "Next.js App Router Performance Patterns & SSR Strategies",
    description:
      "Best practices for structuring React Server Components (RSC), implementing streaming UI with Suspense boundaries, and minimizing client bundle sizes on Vercel deployments.",
    readTime: "6 MIN READ",
    date: "MAR 2026",
    tags: ["Next.js App Router", "SSR", "Vercel", "Bundle Size"],
  },
  {
    id: "mobile-slider-performance",
    category: "MOTION UI",
    title: "Optimizing Mobile Motion & Heavy Sliders Without Layout Shifts",
    description:
      "How to keep heavy media sliders and interactive UI motion components fluid on touch viewports without triggering Cumulative Layout Shift (CLS) or main-thread lag.",
    readTime: "4 MIN READ",
    date: "FEB 2026",
    tags: ["GSAP", "Mobile UI", "Touch Viewports", "Layout Shift"],
  },
  {
    id: "international-seo-structure",
    category: "WORDPRESS / CMS",
    title: "Structuring Technical SEO & Content Models for International Websites",
    description:
      "Designing custom post types, structured schema markup, and clean metadata frameworks for multi-region B2B websites operating across industrial and export markets.",
    readTime: "5 MIN READ",
    date: "JAN 2026",
    tags: ["Custom Post Types", "Schema Markup", "B2B Systems", "Metadata"],
  },
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredArticles =
    selectedCategory === "ALL"
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      
      {/* HEADER SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 border-b border-border">
        <div className="w-full space-y-4">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            TECHNICAL EDITORIAL & CASE ANALYSIS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
            TECHNICAL <span className="text-primary">INSIGHTS.</span>
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl leading-relaxed pt-2">
            Documentation on web performance, technical SEO remediation, CMS engineering, and full-stack web application architecture based on real production environments.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-12 border-b border-border">
        <div className="w-full mb-6">
          <span className="text-accent text-[10px] font-mono uppercase tracking-widest block font-bold">
            FEATURED ANALYSIS
          </span>
        </div>

        <div className="bg-surface border border-border p-8 md:p-12 rounded-sm space-y-6 hover:border-primary/40 transition-colors duration-200">
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-border/60 pb-4">
            <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
              [{FEATURED_ARTICLE.category}]
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-muted">
              <span>{FEATURED_ARTICLE.date}</span>
              <span>•</span>
              <span>{FEATURED_ARTICLE.readTime}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              {FEATURED_ARTICLE.title}
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-4xl">
              {FEATURED_ARTICLE.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-6 pt-4">
            <div className="flex flex-wrap gap-2">
              {FEATURED_ARTICLE.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono text-muted bg-background border border-border/60 px-2.5 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href={`/insights/${FEATURED_ARTICLE.id}`}
              className="text-xs font-mono font-bold text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4"
            >
              READ FULL ARTICLE →
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-8 border-b border-border bg-surface/30">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-accent text-[10px] font-mono uppercase tracking-widest font-bold mr-2">
            FILTER BY TOPIC:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] font-mono font-bold uppercase px-3 py-1.5 transition-colors duration-150 rounded-sm ${
                  isActive
                    ? "bg-primary text-white border border-primary"
                    : "bg-surface text-muted border border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-b border-border">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 text-muted font-mono text-sm">
            NO ARTICLES FOUND IN THIS CATEGORY.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-surface border border-border p-6 rounded-sm flex flex-col justify-between space-y-6 hover:border-primary/40 transition-colors duration-200"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[11px] font-mono border-b border-border/40 pb-3">
                    <span className="text-primary font-bold tracking-wider">
                      [{article.category}]
                    </span>
                    <span className="text-muted">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-muted text-xs md:text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono text-muted bg-background border border-border/40 px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-mono text-muted">
                      {article.date}
                    </span>
                    <Link
                      href={`/insights/${article.id}`}
                      className="text-xs font-mono font-bold text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4"
                    >
                      READ →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-20">
        <div className="bg-primary/10 border border-primary/40 rounded-sm p-10 md:p-16 text-center space-y-6">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            ARCHITECTURAL & TECHNICAL CONSULTATION
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            NEED TECHNICAL DIRECTION?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Have a complex technical requirement, performance bottleneck, or platform migration to scope? Let's discuss the underlying architecture.
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