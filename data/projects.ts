export interface Project {
  slug: string;
  title: string;
  category: string;
  categorySlug: "crm-software" | "web-apps" | "ecommerce" | "agency" | "corporate";
  client: string;
  timeline: string;
  overview: string;
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
      "Global import and export platform specializing strictly in agro commodities and industrial raw materials.",
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
      "International corporate portal for Bathia Ocean Gold, dealing in gold, silver, copper, agro-mining commodities, and minerals.",
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
      "Enterprise group portal delivering 24/7 corporate services, facility solutions, and multi-sector operational support.",
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
      "Australian occupational health & safety compliance portal providing businesses with structured risk management solutions.",
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
      "Industrial rental portal supplying heavy generator power, industrial machinery, and temporary power grid solutions.",
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
      "Healthcare portal providing patient consultation booking, medical insights, and clinic service overviews.",
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
      "Hospitality booking platform specializing in Umrah packages, hotel reservations in Makkah & Madinah, and travel logistics.",
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
      "Premier sports venue and court reservation showcase, offering luxury club amenities and booking information.",
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
      "Corporate pharmaceutical platform detailing medicine production, regulatory compliance, and healthcare distribution.",
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