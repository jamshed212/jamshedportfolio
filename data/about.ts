export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const statsData = [
  { value: "4+", label: "YEARS OF EXPERIENCE" },
  { value: "30+", label: "PROJECTS DELIVERED" },
  { value: "95+", label: "PAGESPEED TARGET" },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "01",
    period: "2024 — PRESENT",
    role: "SENIOR WEB DEVELOPER",
    company: "PORTCITY TRADERS",
    description:
      "Leading web engineering, technical SEO auditing, canonical redirect fixes, and high-performance frontend builds for international trade platforms.",
    skills: ["NEXT.JS", "TYPESCRIPT", "WORDPRESS", "TECHNICAL SEO"],
  },
  {
    id: "02",
    period: "2023 — PRESENT",
    role: "FOUNDER & WEB DEVELOPER",
    company: "ITS DIGITAL HOUSE",
    description:
      "Architecting custom agency platforms, client portfolios, and interactive web applications with server-side rendering and motion UI.",
    skills: ["REACT", "NEXT.JS", "TAILWIND CSS", "FRAMER MOTION"],
  },
  {
    id: "03",
    period: "2022 — 2023",
    role: "FRONTEND DEVELOPER",
    company: "FREELANCE / REMOTE",
    description:
      "Developed custom WordPress themes, WooCommerce API engines, and interactive web interfaces for luxury real estate and retail clients.",
    skills: ["HTML5 / CSS3", "JAVASCRIPT", "ELEMENTOR PRO", "WOOCOMMERCE"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND ARCHITECTURE",
    skills: [
      "Next.js (App Router)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion / GSAP",
      "HTML5 / CSS3 / JavaScript",
    ],
  },
  {
    title: "CMS & BACKEND INTEGRATION",
    skills: [
      "Custom WordPress Development",
      "Elementor Pro Engineering",
      "WooCommerce REST API",
      "Headless CMS Architecture",
      "PHP & MySQL Basics",
    ],
  },
  {
    title: "PERFORMANCE & TOOLING",
    skills: [
      "Core Web Vitals Optimization",
      "Technical SEO & Ahrefs Auditing",
      "Vercel & Git Workflow",
      "Figma to Code Translation",
      "Responsive Cross-Browser UI",
    ],
  },
];