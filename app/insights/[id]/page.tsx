"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticleDetail {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  content: {
    sectionTitle: string;
    text: string;
    codeSnippet?: string;
  }[];
}

const ARTICLES_DATABASE: Record<string, ArticleDetail> = {
  "wp-vs-nextjs-switch": {
    id: "wp-vs-nextjs-switch",
    category: "NEXT.JS",
    title: "WordPress vs Custom Next.js: When Should a Business Switch?",
    date: "JUL 2026",
    readTime: "7 MIN READ",
    tags: ["Architecture", "Next.js", "WordPress", "Migration Strategy"],
    summary:
      "A realistic architectural evaluation framework for determining when a monolithic CMS becomes a growth bottleneck—and how to migrate to decoupled Next.js without losing organic SEO equity or publishing speed.",
    content: [
      {
        sectionTitle: "1. THE MONOLITHIC TIPPING POINT",
        text: "WordPress is an exceptional content management system, but as businesses scale dynamic integrations, high concurrency demands, and real-time frontend pricing engines, the monolithic architecture starts to drag down performance. Page builders like Elementor add unused DOM elements and heavy script bundles that ruin Core Web Vitals.",
      },
      {
        sectionTitle: "2. WHEN TO STAY ON WORDPRESS",
        text: "If your business relies strictly on simple content publishing, blog posts, or standard business presentation where non-technical teams need 100% control over page layouts without developer intervention—staying on a clean, custom WordPress build (without heavy builders) is usually the right financial decision.",
      },
      {
        sectionTitle: "3. WHEN TO MIGRATE TO NEXT.JS",
        text: "You should switch to Next.js when: (1) Your frontend requires sub-second load times across global CDNs, (2) You need custom reactive tools (like interactive product customizers or complex calculators), or (3) Your API layer needs to aggregate data from multiple databases and third-party microservices without blocking rendering.",
      },
      {
        sectionTitle: "4. ARCHITECTURAL COMPARISON",
        text: "Decoupling your platform means separating the presentation layer (Next.js deployed on Vercel) from the backend data layer (Headless WordPress or dedicated database). This guarantees that frontend route transitions are instant, while your content team keeps using familiar CMS dashboards.",
      },
      {
        sectionTitle: "5. PRESERVING SEO EQUITY DURING MIGRATION",
        text: "The biggest risk during migration is organic traffic loss. You must maintain 1-to-1 URL mapping, migrate all structured Schema markup, configure 301 redirects for modified routes, and verify canonical headers during staging tests before DNS propagation.",
      },
    ],
  },
  "canonical-errors-fix": {
    id: "canonical-errors-fix",
    category: "TECHNICAL SEO",
    title: "Fixing Canonical Errors & Redirect Loops Across Large Websites",
    date: "JUN 2026",
    readTime: "5 MIN READ",
    tags: ["Ahrefs", "301 Redirects", "Canonical Rules", "Server Directives"],
    summary:
      "A step-by-step breakdown of identifying 301 redirect chains, clearing cache collisions, and fixing canonical URL misconfigurations using Ahrefs site audit tools and server directives.",
    content: [
      {
        sectionTitle: "1. IDENTIFYING REDIRECT CHAINS WITH AHREFS",
        text: "Canonical loops and multi-step 301 redirect chains waste crawler budget and confuse search indexing engines. During site audits on platforms like PortCity Traders, we identified URL variations that were redirecting multiple times before reaching the final canonical endpoint.",
      },
      {
        sectionTitle: "2. THE HTACCESS / SERVER FIX",
        text: "Instead of relying on WordPress plugins that execute PHP rules on every request, we write direct, low-level HTTP directives on the server level (.htaccess / Nginx). This resolves domain canonicalization (HTTP vs HTTPS, www vs non-www) at the edge before PHP is loaded.",
      },
      {
        sectionTitle: "3. CLEARING CACHE CONFLICTS",
        text: "A frequent issue occurs when caching plugins (like SpeedyCache) cache 301 responses before canonical rules are finalized. Flushing the server-level object cache and clearing CDN edge rules is mandatory after modifying redirect rules.",
      },
    ],
  },
  "pagespeed-90-plus-wordpress": {
    id: "pagespeed-90-plus-wordpress",
    category: "PERFORMANCE",
    title: "Taking a WordPress Website from Poor Performance to 90+ PageSpeed",
    date: "MAY 2026",
    readTime: "6 MIN READ",
    tags: ["Core Web Vitals", "LCP / CLS", "SpeedyCache", "Asset Deferral"],
    summary:
      "How to systematically eliminate plugin bloat, defer non-critical render-blocking assets, optimize database queries, and configure SpeedyCache for sub-second Core Web Vitals.",
    content: [
      {
        sectionTitle: "1. AUDITING THE DOM & BLOAT",
        text: "Most WordPress speed issues stem from loading 30+ separate CSS/JS files from active plugins. We start by auditing asset execution queues using Chrome DevTools Coverage tab to identify unused JavaScript.",
      },
      {
        sectionTitle: "2. DEFERRING NON-CRITICAL ASSETS",
        text: "By adding `defer` and `async` attributes to scripts not needed for immediate paint, we eliminate render-blocking locks. Critical CSS is inlined directly into the header to guarantee instant LCP (Largest Contentful Paint).",
      },
      {
        sectionTitle: "3. OPTIMIZING MEDIA & FONTS",
        text: "Images are converted to WebP/AVIF formats with dynamic `srcset` tags for responsive screen sizes. Fonts are self-hosted with `font-display: swap` to prevent FOIT (Flash of Unseen Text).",
      },
    ],
  },
  "dynamic-jewelry-configurator": {
    id: "dynamic-jewelry-configurator",
    category: "E-COMMERCE / SYSTEMS",
    title: "Building a Dynamic Product Configuration System with WooCommerce APIs",
    date: "APR 2026",
    readTime: "8 MIN READ",
    tags: ["WooCommerce API", "React", "State Management", "E-Commerce"],
    summary:
      "Engineering a custom interactive product customizer using frontend state management connected to WooCommerce REST endpoints for real-time pricing and complex variation mapping.",
    content: [
      {
        sectionTitle: "1. THE BUSINESS REQUIREMENT",
        text: "Standard WooCommerce variable products become slow and UI-restrictive when handling complex product attributes (e.g., ring sizes, chain lengths, metal types, gem selections). We needed a fluid custom UI that recalculates prices instantly.",
      },
      {
        sectionTitle: "2. REACT + WOOCOMMERCE REST API",
        text: "We decoupled the customizer UI into a custom React component that fetches metadata and variations via WooCommerce REST API endpoints, keeping client interaction state synchronized without page reloads.",
      },
    ],
  },
  "nextjs-app-router-patterns": {
    id: "nextjs-app-router-patterns",
    category: "NEXT.JS",
    title: "Next.js App Router Performance Patterns & SSR Strategies",
    date: "MAR 2026",
    readTime: "6 MIN READ",
    tags: ["Next.js App Router", "SSR", "Vercel", "Bundle Size"],
    summary:
      "Best practices for structuring React Server Components (RSC), implementing streaming UI with Suspense boundaries, and minimizing client bundle sizes on Vercel deployments.",
    content: [
      {
        sectionTitle: "1. REACT SERVER COMPONENTS (RSC)",
        text: "By keeping heavy rendering logic on the server and only adding `'use client'` to interactive leaf components, we significantly reduce JavaScript bundle size sent to the user browser.",
      },
      {
        sectionTitle: "2. STREAMING & SUSPENSE",
        text: "Using React Suspense boundaries allows critical page markup to render instantly while slower API data fetches stream into the UI as soon as they resolve.",
      },
    ],
  },
  "mobile-slider-performance": {
    id: "mobile-slider-performance",
    category: "MOTION UI",
    title: "Optimizing Mobile Motion & Heavy Sliders Without Layout Shifts",
    date: "FEB 2026",
    readTime: "4 MIN READ",
    tags: ["GSAP", "Mobile UI", "Touch Viewports", "Layout Shift"],
    summary:
      "How to keep heavy media sliders and interactive UI motion components fluid on touch viewports without triggering Cumulative Layout Shift (CLS) or main-thread lag.",
    content: [
      {
        sectionTitle: "1. THE MOBILE SLIDER CHALLENGE",
        text: "Hiding heavy sliders on mobile breaks UX, but poorly optimized touch sliders trigger lag and layout shifts. The solution is hardware-accelerated CSS transforms paired with lightweight event handlers.",
      },
      {
        sectionTitle: "2. HARDWARE ACCELERATION",
        text: "Using CSS properties like `will-change: transform` and GSAP transforms shifts animation processing directly to the GPU, leaving the main JavaScript thread free for user interaction.",
      },
    ],
  },
  "international-seo-structure": {
    id: "international-seo-structure",
    category: "WORDPRESS / CMS",
    title: "Structuring Technical SEO & Content Models for International Websites",
    date: "JAN 2026",
    readTime: "5 MIN READ",
    tags: ["Custom Post Types", "Schema Markup", "B2B Systems", "Metadata"],
    summary:
      "Designing custom post types, structured schema markup, and clean metadata frameworks for multi-region B2B websites operating across industrial and export markets.",
    content: [
      {
        sectionTitle: "1. STRUCTURED CONTENT TYPES",
        text: "Building clean Custom Post Types (CPT) with Advanced Custom Fields (ACF) allows businesses to manage complex product catalogs systematically without breaking layout rules.",
      },
      {
        sectionTitle: "2. SCHEMA MARKUP & REGIONAL METADATA",
        text: "Injecting JSON-LD Organization and Product schema ensures search engines parse company details, product offerings, and export specifications accurately.",
      },
    ],
  },
};

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const article = ARTICLES_DATABASE[resolvedParams.id];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      {/* NAVIGATION BACK BUTTON */}
      <div className="w-full px-6 md:px-12 lg:px-16 pt-8 pb-4">
        <Link
          href="/insights"
          className="text-xs font-mono font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-2 uppercase tracking-widest"
        >
          ← BACK TO INSIGHTS
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <article className="w-full px-6 md:px-12 lg:px-16 py-8 border-b border-border space-y-6">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <span className="text-primary font-bold uppercase tracking-widest">
            [{article.category}]
          </span>
          <span className="text-muted">•</span>
          <span className="text-muted">{article.date}</span>
          <span className="text-muted">•</span>
          <span className="text-muted">{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
          {article.title}
        </h1>

        <p className="text-muted text-base md:text-lg max-w-4xl leading-relaxed pt-2">
          {article.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-4">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono text-muted bg-surface border border-border px-3 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* FULL ARTICLE BODY */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 border-b border-border">
        <div className="max-w-4xl space-y-12">
          {article.content.map((block, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground font-mono">
                {block.sectionTitle}
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>
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