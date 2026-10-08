export interface Project {
  slug: string;
  title: string;
  category: string;
  categorySlug: "crm-software" | "web-apps" | "ecommerce" | "agency" | "corporate";
  client: string;
  timeline: string;
  overview: string;
  seoDescription: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  metrics: string[];
  techStack: string[];
  liveUrl?: string;
  isPrivate?: boolean;
}

export const PROJECTS_DATA: Record<string, Project> = {
  "its-digital-house": {
    slug: "its-digital-house",
    title: "ITS DIGITAL HOUSE",
    category: "CREATIVE DIGITAL AGENCY PLATFORM",
    categorySlug: "agency",
    client: "Its Digital House",
    timeline: "3 Weeks",
    overview:
      "Full-service creative digital agency combining design, technology, and strategy to build, grow, and transform online brand identities.",
    seoDescription:
      "A modern digital agency website built with React, Vite, Tailwind CSS, and Framer Motion, focused on performance, technical SEO, service discovery, and lead generation.",
    problem:
      "Legacy web presence suffered from high mobile drop-off, slow interactive loads, and unoptimized service showcases.",
    solution:
      "Architected a custom Next.js agency platform with smooth Framer Motion transitions, dynamic scoping tools, and sub-second page delivery.",
    architectureHighlights: [
      "Next.js App Router with server-side page optimization",
      "Dynamic lead capture form with automated routing",
      "Core Web Vitals optimized for 95+ performance",
    ],
    keyFeatures: [
      "Interactive Project Builder / Scoping Tool",
      "Smooth Layout Motion & Page Transitions",
      "SEO-Ready Schema & OpenGraph Meta Config",
    ],
    metrics: ["98/100 Core Web Vitals", "Sub-second Route Transitions"],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://www.itsdigitalhouse.com/",
  },

  "portcity-traders": {
    slug: "portcity-traders",
    title: "PORTCITY TRADERS",
    category: "IMPORT & EXPORT RAW MATERIALS",
    categorySlug: "corporate",
    client: "Portcity Traders",
    timeline: "2 Weeks",
    overview:
    "Global import/export platform specializing in agro commodities and industrial raw materials.",
    seoDescription:
      "A professional WordPress website for an import and export business, designed to showcase agricultural commodities, industrial raw materials, product information, and B2B inquiries.",
    problem:
      "Absence of an organized, modern digital showcase resulted in reliance on manual PDF brochures during B2B international inquiries.",
    solution:
      "Engineered a lightweight, high-trust corporate portal highlighting trade supply chains, raw material catalogs, and instant inquiry channels.",
    architectureHighlights: [
      "Minimalist, zero-bloat dynamic architecture",
      "SEO structural markup for international trade keywords",
      "Mobile-optimized touch navigation",
    ],
    keyFeatures: [
      "Agro & Raw Material Commodity Catalog",
      "Direct B2B Trade Inquiry Triggering",
      "Global Trade Specification Showcase",
    ],
    metrics: ["100% Mobile Usability Score", "Sub-0.5s Global Load Speeds"],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://portcitytraders.com/",
  },

  "bog-international": {
    slug: "bog-international",
    title: "BOG INTERNATIONAL",
    category: "AGRO-MINING & MINERALS PLATFORM",
    categorySlug: "corporate",
    client: "Bathia Ocean Gold (BOG)",
    timeline: "3 Weeks",
    overview:
      "Corporate platform for gold, silver, copper, agro-mining commodities, and minerals.",
    seoDescription:
      "A Next.js and React corporate website for BOG International, showcasing gold, silver, copper, minerals, agro-mining products, and international business inquiries.",
    problem:
      "Outdated catalog presentation causing slow response times for international investor inquiries and heavy media layout shifts.",
    solution:
      "Built a dynamic corporate platform with server-rendered mineral product inventories and high-performance CDN media delivery.",
    architectureHighlights: [
      "Dynamic catalog presentation with edge caching",
      "Optimized media asset delivery for global access",
      "Structured industrial category mapping",
    ],
    keyFeatures: [
      "Multi-Mineral & Commodity Inventory Showcase",
      "International Investor Inquiry Routing",
      "Multi-Currency Specification Sheets",
    ],
    metrics: ["0.4s Initial Page Load Time", "95+ Mobile PageSpeed Score"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://bog-international.com/",
  },

  "24seven-group": {
    slug: "24seven-group",
    title: "24SEVEN GROUP",
    category: "CORPORATE SERVICES ENTERPRISE",
    categorySlug: "corporate",
    client: "24Seven Group",
    timeline: "3 Weeks",
    overview:
      "Enterprise group portal representing 24/7 services, facilities, and multi-sector business operations.",
    seoDescription:
      "A professional WordPress corporate website for 24Seven Group, designed to present its multi-sector business services, improve mobile usability, and provide a clear digital experience for clients and inquiries.",
    problem:
      "Multi-division business operations were fragmented across old web properties, confusing corporate clients.",
    solution:
      "Consolidated multi-service offerings under a unified, high-performance corporate platform with structured service funnels.",
    architectureHighlights: [
      "Clean modular component architecture",
      "Optimized image pipelines and responsive grid layouts",
      "Integrated contact and support routing",
    ],
    keyFeatures: [
      "Multi-Division Corporate Service Architecture",
      "Rapid Client Contact & Quotation Booking",
      "Mobile-First Responsive Layouts",
    ],
    metrics: ["90+ Lighthouse Performance", "+40% Client Inquiries"],
    techStack: ["WordPress", "Custom CSS", "JavaScript", "PHP"],
    liveUrl: "https://www.24seven-group.com/",
  },

  "ohs-centric": {
    slug: "ohs-centric",
    title: "OHS CENTRIC",
    category: "HEALTH & SAFETY COMPLIANCE PLATFORM",
    categorySlug: "web-apps",
    client: "OHS Centric (Australia)",
    timeline: "4 Weeks",
    overview:
      "Australian OHS compliance portal for workplace health and safety professionals.",
    seoDescription:
      "An AI powered workplace health and safety platform built for Australian WHS professionals, providing cited answers from verified legislation, compliance resources, document tools, and jurisdiction-specific safety guidance.",
    problem:
      "Complex safety compliance guidelines required an intuitive digital system to convert visitors into consultation leads.",
    solution:
      "Developed an Australian compliance portal with interactive audit booking workflows and clean corporate UI.",
    architectureHighlights: [
      "Custom state management for safety audit requests",
      "Strict accessibility (WCAG) and performance standards",
      "Fast cloud hosting integration",
    ],
    keyFeatures: [
      "Occupational Safety Audit Request Workflow",
      "Interactive Compliance Services Overview",
      "Resource & Safety Documentation Portal",
    ],
    metrics: ["100% Mobile Accessibility Compliance", "Sub-second Page Speeds"],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://ohscentric.com.au/",
  },

  "ghazi-rental": {
    slug: "ghazi-rental",
    title: "GHAZI RENTAL POWER",
    category: "INDUSTRIAL POWER & EQUIPMENT RENTAL",
    categorySlug: "corporate",
    client: "Ghazi Rental Power",
    timeline: "2 Weeks",
    overview:
      "Industrial power and equipment rental portal for generators, machinery, and temporary power solutions.",
    seoDescription:
      "A professional WordPress website for Ghazi Rental Power, showcasing diesel generator rentals, generator sales, air compressor services, transportation, and industrial power solutions across Pakistan.",
    problem:
      "Clients required immediate equipment specs and emergency power booking, which was difficult on their previous website.",
    solution:
      "Engineered an equipment fleet showcase with instant quotation triggers and high-visibility specs breakdown.",
    architectureHighlights: [
      "Lightweight asset delivery for industrial mobile users",
      "Structured equipment category inventory",
      "Click-to-Call emergency response integration",
    ],
    keyFeatures: [
      "Generator & Power Equipment Fleet Catalog",
      "Instant Emergency Quote Trigger",
      "Industrial Specs & KW Capacity Calculator",
    ],
    metrics: ["Sub-1s Initial Load", "+50% Mobile Quote Conversion"],
    techStack: ["WordPress", "Custom PHP", "Tailwind CSS"],
    liveUrl: "https://ghazirentalpower.com/",
  },

  "dr-saeed": {
    slug: "dr-saeed",
    title: "DR SAEED MEDICAL PORTAL",
    category: "HEALTHCARE & CLINICAL PLATFORM",
    categorySlug: "web-apps",
    client: "Dr. Saeed Practice",
    timeline: "2 Weeks",
    overview:
      "Healthcare portal for consultation booking, medical services, and clinical information.",
    seoDescription:
      "A modern healthcare website built with Next.js and React, designed to help patients explore medical specialties, find clinic information, and request appointments through a fast, accessible digital experience.",
    problem:
      "Patients faced friction when scheduling clinic consultations and searching for medical department information.",
    solution:
      "Built a clean medical portal with streamlined appointment request flows and high-accessibility design.",
    architectureHighlights: [
      "Patient-first mobile UX with instant touch targets",
      "Optimized SEO for local medical search queries",
      "HIPAA-conscious data submission routing",
    ],
    keyFeatures: [
      "Online Patient Consultation Appointment Form",
      "Medical Specialties & Treatment Index",
      "Clinic Location & Operating Hours Sync",
    ],
    metrics: ["99/100 Mobile Usability", "Instant Search Indexing"],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://drsaeed.pk/",
  },

  "taibah-reservation": {
    slug: "taibah-reservation",
    title: "TAIBAH RESERVATION",
    category: "TRAVEL & HOSPITALITY BOOKING PLATFORM",
    categorySlug: "ecommerce",
    client: "Taibah Reservations",
    timeline: "4 Weeks",
    overview:
      "Travel and hospitality booking platform for Umrah packages, hotels in Makkah and Madinah, and travel logistics.",
    seoDescription:
      "A fast travel and hotel reservation website built for Umrah packages, Makkah and Madinah hotels, and travel consultations, with searchable listings and a mobile-focused booking experience.",
    problem:
      "High bounce rates during seasonal Umrah rushes due to slow package listings and complex pricing variations.",
    solution:
      "Engineered a fast hotel and package reservation portal with dynamic filters and direct booking request triggers.",
    architectureHighlights: [
      "Dynamic filtering engine for hotels and distance to Haram",
      "Fast image gallery caching for room previews",
      "Direct WhatsApp and form booking integration",
    ],
    keyFeatures: [
      "Makkah & Madinah Hotel Package Listings",
      "Custom Distance & Star-Rating Search Filters",
      "Direct Booking Consultation Trigger",
    ],
    metrics: ["Sub-second Search Performance", "+45% Direct Bookings"],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://taibahreservations.com/",
  },

  "courtx": {
    slug: "courtx",
    title: "COURTX SPORTS & CLUB",
    category: "SPORTS & VENUE MANAGEMENT PLATFORM",
    categorySlug: "web-apps",
    client: "CourtX",
    timeline: "3 Weeks",
    overview:
      "Luxury sports venue and court reservation showcase for a modern sports club.",
    seoDescription:
      "A modern sports club website built with Next.js, Tailwind CSS, and Framer Motion, designed to showcase sports courts, memberships, events, and venue experiences with a fast mobile-first interface.",
    problem:
      "Needed a high-end visual platform matching the luxury brand identity while maintaining fast mobile rendering.",
    solution:
      "Designed a sleek, dark-mode sports facility portal with dynamic court previews and membership inquiry flows.",
    architectureHighlights: [
      "Framer Motion animations with 60fps performance",
      "High-resolution media optimization",
      "Membership tier breakdown grid",
    ],
    keyFeatures: [
      "Interactive Sports Court Preview",
      "Club Membership Application Workflow",
      "Event & Tournament Calendar Showcase",
    ],
    metrics: ["95+ Performance Score", "100% Brand Alignment"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://thecourtx.com/",
  },

  "inventor-pharma": {
    slug: "inventor-pharma",
    title: "INVENTOR PHARMA",
    category: "PHARMACEUTICAL MANUFACTURING PORTAL",
    categorySlug: "corporate",
    client: "Inventor Pharma",
    timeline: "3 Weeks",
    overview:
      "Pharmaceutical manufacturing platform covering medicine production, regulatory compliance, and distribution.",
    seoDescription:
      "A professional WordPress website for a pharmaceutical manufacturing company, showcasing medicine products, manufacturing capabilities, regulatory standards, compliance information, and distributor inquiries.",
    problem:
      "Strict healthcare regulatory standards required a structured product catalog with certified documentation.",
    solution:
      "Architected a pharmaceutical portal with categorized medicine listings, formula specs, and B2B distributor inquiries.",
    architectureHighlights: [
      "Pharma product index with instant search capability",
      "Document delivery pipeline for medical certifications",
      "High-security corporate web architecture",
    ],
    keyFeatures: [
      "Categorized Pharmaceutical Product Catalog",
      "Distributor & B2B Inquiry Routing",
      "Regulatory Compliance & Quality Standards Overview",
    ],
    metrics: ["100% Technical SEO Score", "Fast Global Load Times"],
    techStack: ["WordPress", "Custom PHP", "Tailwind CSS"],
    liveUrl: "https://inventorpharma.pk/",
  },
};