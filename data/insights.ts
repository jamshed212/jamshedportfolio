export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const insightsData: Article[] = [
  {
    id: "01",
    slug: "optimizing-nextjs-app-router-performance",
    title: "OPTIMIZING NEXT.JS APP ROUTER FOR MAXIMUM CORE WEB VITALS",
    category: "NEXT.JS",
    date: "AUG 2026",
    readTime: "5 MIN READ",
    description:
      "A deep dive into Server Components, dynamic imports, asset optimization, and caching strategies to achieve 90+ PageSpeed scores on Vercel.",
    tags: ["NEXT.JS", "PERFORMANCE", "REACT"],
    featured: true,
  },
  {
    id: "02",
    slug: "wordpress-headless-vs-traditional",
    title: "HEADLESS WORDPRESS VS TRADITIONAL MONOLITH: WHEN TO SWITCH?",
    category: "CMS",
    date: "JUL 2026",
    readTime: "7 MIN READ",
    description:
      "Comparing GraphQL & REST API integration with Next.js frontend against standard custom PHP theme architecture for modern businesses.",
    tags: ["WORDPRESS", "HEADLESS", "GRAPHQL"],
  },
  {
    id: "03",
    slug: "framer-motion-gsap-smooth-micro-interactions",
    title: "CRAFTING HIGH-SPEED MOTION UI WITHOUT SACRIFICING PERFORMANCE",
    category: "MOTION UI",
    date: "JUN 2026",
    readTime: "4 MIN READ",
    description:
      "How to leverage Framer Motion and lightweight CSS transformations for smooth 60fps micro-interactions without heavy JavaScript overhead.",
    tags: ["FRAMER MOTION", "GSAP", "UI/UX"],
  },
  {
    id: "04",
    slug: "technical-seo-auditing-clean-architecture",
    title: "FIXING CANONICAL ERRORS & 301 REDIRECTS IN ENTERPRISE SITES",
    category: "PERFORMANCE",
    date: "MAY 2026",
    readTime: "6 MIN READ",
    description:
      "Step-by-step resolution of site audit indexing blockers, canonical flags, and server-level htaccess routing for zero-error domain migrations.",
    tags: ["TECHNICAL SEO", "AHREFS", "AUDIT"],
  },
];