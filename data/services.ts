export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  relatedCategory: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "CUSTOM WEB DEVELOPMENT",
    tagline: "NEXT.JS / REACT / TYPESCRIPT",
    description:
      "Building high-speed, scalable web applications with Next.js, Server-Side Rendering (SSR), and dynamic API integrations designed for growth.",
    deliverables: [
      "Custom Next.js & React Architecture",
      "Dynamic API & Headless CMS Integration",
      "Responsive UI & Mobile Optimization",
      "State Management & Clean Code Standards",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    relatedCategory: "NEXT.JS / REACT",
  },
  {
    id: "02",
    title: "WORDPRESS & CMS ENGINEERING",
    tagline: "CUSTOM THEMES & HEADLESS SETUPS",
    description:
      "Enterprise WordPress development focusing on custom field structures, Speed Optimization, WooCommerce systems, and security hardening.",
    deliverables: [
      "Custom Theme & Elementor Pro Builds",
      "WooCommerce & Payment Gateway Setup",
      "Database & Speed Optimization",
      "Plugin Customization & Security Hardening",
    ],
    techStack: ["WordPress", "Elementor", "PHP", "WooCommerce", "MySQL"],
    relatedCategory: "WORDPRESS",
  },
  {
    id: "03",
    title: "WEB PERFORMANCE & TECHNICAL SEO",
    tagline: "CORE WEB VITALS & AUDITING",
    description:
      "Eliminating performance bottlenecks, fixing canonical & 301 redirect issues, and restructuring technical site architecture for top search engine rankings.",
    deliverables: [
      "Core Web Vitals Optimization (90+ PageSpeed)",
      "Technical SEO & Canonical Error Fixes",
      "Ahrefs & Google Search Console Audits",
      "Schema Markup & Asset Compression",
    ],
    techStack: ["Ahrefs", "Google Search Console", "Lighthouse", "SpeedyCache"],
    relatedCategory: "CUSTOM FRONTEND",
  },
  {
    id: "04",
    title: "UI/UX & MOTION DESIGN",
    tagline: "GSAP / FRAMER MOTION / INTERACTIVE UI",
    description:
      "Transforming static layouts into immersive digital experiences with interactive micro-animations, custom sliders, and high-converting visual flow.",
    deliverables: [
      "Interactive Motion & Page Transitions",
      "Custom Canvas & Slider Engineering",
      "Wireframing & Prototype Translation",
      "Cross-Browser Compatibility",
    ],
    techStack: ["Framer Motion", "GSAP", "Figma", "CSS3 / Canvas"],
    relatedCategory: "NEXT.JS / REACT",
  },
];

export const faqsData: FAQItem[] = [
  {
    question: "How long does a typical custom web development project take?",
    answer:
      "Most custom Next.js or WordPress projects take between 2 to 4 weeks depending on complex features, API integrations, and asset availability.",
  },
  {
    question: "Do you handle both custom coding and CMS platforms?",
    answer:
      "Yes. I specialize in custom frontend development (React, Next.js, Tailwind) as well as advanced custom WordPress ecosystems.",
  },
  {
    question: "How do you ensure the website is SEO-friendly and fast?",
    answer:
      "Every project follows Core Web Vitals optimization, clean semantic HTML, schema markup, and zero-redundancy code to guarantee 90+ PageSpeed scores.",
  },
  {
    question: "Can we start with a project brief builder before kick-off?",
    answer:
      "Absolutely. You can use our interactive Brief Builder page to outline your target deliverables, budget, and scope for a fast project estimate.",
  },
];  