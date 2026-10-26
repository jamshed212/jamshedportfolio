"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsPDF from "jspdf";

interface Option {
  id: string;
  title: string;
  desc: string;
}

const STEP_1_OPTIONS: Option[] = [
  {
    id: "nextjs",
    title: "CUSTOM WEBSITE OR WEB APP",
    desc: "Modern React / Next.js development for custom business websites and web applications",
  },
  {
    id: "wordpress",
    title: "WORDPRESS OR E-COMMERCE WEBSITE",
    desc: "WordPress, WooCommerce, Shopify, custom themes, and business websites",
  },
  {
    id: "seo",
    title: "SEO & PERFORMANCE IMPROVEMENT",
    desc: "Technical SEO, Core Web Vitals, speed optimization, and website audits",
  },
  {
    id: "ui_motion",
    title: "WEBSITE REDESIGN & UI/UX",
    desc: "Modern responsive interfaces, visual improvements, animations, and user experience",
  },
];

const STEP_2_OPTIONS: Option[] = [
  {
    id: "api_integration",
    title: "API & THIRD-PARTY INTEGRATIONS",
    desc: "Connect your website or application with external services, platforms, or business systems",
  },
  {
    id: "ecom_setup",
    title: "E-COMMERCE & ONLINE PAYMENTS",
    desc: "Products, shopping carts, checkout, payment gateways, and custom e-commerce functionality",
  },
  {
    id: "speed_opt",
    title: "WEBSITE SPEED & PERFORMANCE",
    desc: "Improve loading speed, Core Web Vitals, mobile performance, and overall website efficiency",
  },
  {
    id: "seo_remediation",
    title: "TECHNICAL SEO & SEARCH VISIBILITY",
    desc: "Fix crawlability, indexing, redirects, structured data, and other technical SEO issues",
  },
];

const TIMELINE_OPTIONS = [
  "AS SOON AS POSSIBLE",
  "WITHIN 3–4 WEEKS",
  "FLEXIBLE / NO FIXED DATE",
];
const BUDGET_OPTIONS = [
  "UNDER $500",
  "$500–$1,000",
  "$1,000–$3,000",
  "$3,000+",
  "LET'S DISCUSS",
];

export default function BriefBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] =
    useState<string>("WITHIN 3–4 WEEKS");
  const [selectedBudget, setSelectedBudget] = useState<string>("LET'S DISCUSS");
  const [generatedBrief, setGeneratedBrief] = useState<string>("");
  const [editedBrief, setEditedBrief] = useState("");
  const [isEditingBrief, setIsEditingBrief] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleNext = () => {
    if (currentStep === 1 && !selectedProjectType) {
      alert("Please select what you are looking to build.");
      return;
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const generateAIProjectBrief = async () => {
    const selectedProject = STEP_1_OPTIONS.find(
      (option) => option.id === selectedProjectType,
    );

    const requirements = selectedFeatures
      .map(
        (featureId) =>
          STEP_2_OPTIONS.find((option) => option.id === featureId)?.title,
      )
      .filter((title): title is string => Boolean(title));

    try {
      const response = await fetch("/api/generate-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectType: selectedProject?.title || selectedProjectType,
          requirements,
          budget: selectedBudget,
          timeline: selectedTimeline,
          additionalNotes: clientInfo.notes.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success || typeof data.brief !== "string") {
        throw new Error(data.error || "AI brief generation failed.");
      }

      setGeneratedBrief(data.brief);
      setCurrentStep(4);
    } catch (error) {
      console.error("AI project brief generation failed:", error);
      alert(
        "AI brief generation failed. Please try again or use the standard brief generator.",
      );
    }
  };

  const generateProjectBrief = () => {
    const selectedProject = STEP_1_OPTIONS.find(
      (option) => option.id === selectedProjectType,
    );
    const selectedFeatureTitles = selectedFeatures
      .map(
        (featureId) =>
          STEP_2_OPTIONS.find((option) => option.id === featureId)?.title,
      )
      .filter((title): title is string => Boolean(title));

    const projectTitles: Record<string, string> = {
      nextjs: "Custom Web Application",
      wordpress: "WordPress Website & CMS Solution",
      seo: "Technical SEO & Performance Improvement Plan",
      ui_motion: "UI/UX Design & Motion Experience",
    };

    const projectTitle =
      projectTitles[selectedProjectType] ||
      selectedProject?.title ||
      "Custom Digital Project";

    const projectPlans: Record<
      string,
      {
        overview: string;
        approach: string;
        priorities: string[];
        questions: string[];
      }
    > = {
      nextjs: {
        overview:
          "A modern web application focused on responsive design, maintainable architecture, and a smooth user experience.",
        approach:
          "Use React and Next.js with TypeScript and Tailwind CSS where suitable. Confirm rendering, data, integration, and deployment requirements before implementation.",
        priorities: [
          "Responsive layouts across mobile, tablet, and desktop",
          "Performance, accessibility, and maintainable components",
          "Search visibility and metadata where relevant",
        ],
        questions: [
          "Which pages and user journeys are essential for launch?",
          "Are authentication, databases, dashboards, or third-party APIs required?",
        ],
      },
      wordpress: {
        overview:
          "A manageable website built around the client's content, business goals, and required website functionality.",
        approach:
          "Use WordPress and suitable themes or plugins. Confirm whether e-commerce, custom functionality, or external integrations are needed before selecting the final setup.",
        priorities: [
          "Mobile-friendly layouts and straightforward content management",
          "Appropriate plugin selection and security considerations",
          "Performance, SEO fundamentals, and maintainability",
        ],
        questions: [
          "Is this a new website or a redesign of an existing website?",
          "Are payments, bookings, memberships, or other integrations required?",
        ],
      },
      seo: {
        overview:
          "An SEO improvement project focused on identifying technical issues, improving search accessibility, and creating a prioritized optimization plan.",
        approach:
          "Review available site data, technical SEO signals, page structure, indexing, metadata, and performance. Final recommendations depend on the website and access provided.",
        priorities: [
          "Crawlability, indexability, and canonical URL checks",
          "Metadata, internal linking, and page structure",
          "Core Web Vitals and prioritized technical fixes",
        ],
        questions: [
          "Which website and target locations should be included?",
          "Are Google Search Console and analytics data available?",
        ],
      },
      ui_motion: {
        overview:
          "A user-interface project focused on clear visual hierarchy, responsive layouts, and purposeful interactions.",
        approach:
          "Develop a consistent interface system with accessible interactions and carefully selected animations that support usability rather than distract from it.",
        priorities: [
          "Typography, spacing, layout, and visual consistency",
          "Responsive behaviour and accessible interaction states",
          "Animation performance and reduced-motion support",
        ],
        questions: [
          "Are existing designs or brand guidelines available?",
          "Which pages, components, or interactions are the main priority?",
        ],
      },
    };

    const plan = projectPlans[selectedProjectType] || {
      overview:
        "A custom digital project shaped around the client's goals and confirmed requirements.",
      approach:
        "Confirm the scope, technical constraints, integrations, and delivery expectations before selecting the implementation approach.",
      priorities: [
        "Clarify project goals and essential functionality",
        "Agree on scope and delivery milestones",
        "Test the completed work against agreed requirements",
      ],
      questions: [
        "What is the main outcome this project should achieve?",
        "Are there existing systems or services that must be integrated?",
      ],
    };

    const projectDeliverables: Record<string, string[]> = {
      nextjs: [
        "Responsive website or web application pages based on the agreed scope",
        "Reusable UI components and structured project architecture",
        "Integration of confirmed functionality and third-party services",
        "Basic technical SEO, accessibility, and performance checks",
        "Testing and deployment support as agreed",
      ],

      wordpress: [
        "WordPress website or e-commerce store configured to the agreed scope",
        "Responsive page layouts and content management setup",
        "Required theme, plugin, or WooCommerce configuration",
        "Basic technical SEO and performance checks",
        "Testing and handover guidance",
      ],

      seo: [
        "Review of technical SEO and website performance",
        "Prioritized list of identified issues and recommendations",
        "Implementation of agreed technical fixes, if included in scope",
        "Post-change validation of completed fixes",
        "Summary of findings and recommended next steps",
      ],

      ui_motion: [
        "Redesigned page layouts and visual hierarchy",
        "Responsive UI components and consistent styling",
        "Agreed animations and interactive elements",
        "Accessibility and reduced-motion considerations",
        "Cross-device review and implementation handover",
      ],
    };

    const deliverables = projectDeliverables[selectedProjectType] || [
      "Confirmed project requirements and scope",
      "Agreed implementation deliverables",
      "Quality assurance and project handover",
    ];

    const featureDetails: Record<string, string> = {
      api_integration:
        "Define the required services, API authentication, data mapping, error handling, security considerations, and integration testing.",
      ecom_setup:
        "Define the product catalogue, cart, checkout flow, payment gateway, shipping rules, order notifications, and order management requirements.",
      speed_opt:
        "Review page loading, image sizes, scripts, caching, mobile performance, and relevant Core Web Vitals before prioritizing improvements.",
      seo_remediation:
        "Review crawling, indexing, metadata, canonical URLs, redirects, structured data, internal links, and relevant technical SEO issues.",
    };

    const requirements =
      selectedFeatureTitles.length > 0
        ? selectedFeatures
            .map((featureId) => {
              const title = STEP_2_OPTIONS.find(
                (option) => option.id === featureId,
              )?.title;
              if (!title) return null;

              const detail = featureDetails[featureId];

              return `• ${title}${detail ? `\n  Scope: ${detail}` : ""}`;
            })
            .filter(Boolean)
            .join("\n\n")
        : "• Features and scope to be confirmed during project discovery.";

    const additionalNotes =
      clientInfo.notes.trim() || "No additional notes provided.";

    const brief = `PROJECT BRIEF ${projectTitle}

1. PROJECT OVERVIEW
${plan.overview}

2. SELECTED REQUIREMENTS
${requirements}

3. PROPOSED DELIVERABLES
${deliverables.map((item) => `- ${item}`).join("\n")}

4. SUGGESTED TECHNICAL APPROACH
${plan.approach}

5. KEY PROJECT PRIORITIES
${plan.priorities.map((item) => `- ${item}`).join("\n")}

6. BUDGET & TIMELINE
- Budget range: ${selectedBudget}
- Preferred timeline: ${selectedTimeline}
(These are the client's selected preferences. Final cost and delivery dates depend on the confirmed scope and project complexity.)

7. ADDITIONAL NOTES
${additionalNotes}

8. PROPOSED DELIVERY ROADMAP
- Phase 1 — Discovery: Confirm goals, requirements, constraints, and scope.
- Phase 2 — Planning: Agree on structure, technical approach, and milestones.
- Phase 3 — Implementation: Complete the agreed design, development, or optimization work.
- Phase 4 — Quality Assurance: Test functionality, responsiveness, and agreed requirements.
- Phase 5 — Handover: Review the deliverables and confirm deployment or next steps.

9. QUESTIONS TO CONFIRM
${plan.questions.map((item) => `- ${item}`).join("\n")}

10. NEXT STEPS
Review the proposed scope, clarify outstanding questions, and confirm the quotation and delivery plan before work begins.

Note: This is an automatically assembled preliminary brief based on the selected options, not a technical audit or a final quotation.
`.trim();

    setGeneratedBrief(brief);
    setCurrentStep(4);
  };
  const startEditingBrief = () => {
    setEditedBrief(generatedBrief);
    setIsEditingBrief(true);
  };

  const saveEditedBrief = () => {
    setGeneratedBrief(editedBrief);
    setIsEditingBrief(false);
  };
  const downloadProjectBrief = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;
    const footerY = pageHeight - 13;
    let y = 20;

    const projectTitles: Record<string, string> = {
      nextjs: "Custom Web Application",
      wordpress: "WordPress Website & CMS Solution",
      seo: "Technical SEO & Performance Improvement Plan",
      ui_motion: "UI/UX Design & Motion Experience",
    };

    const projectTitle =
      projectTitles[selectedProjectType] || "Custom Digital Project";

    const selectedProject = STEP_1_OPTIONS.find(
      (option) => option.id === selectedProjectType,
    );

    const addPageIfNeeded = (requiredHeight = 12) => {
      if (y + requiredHeight > footerY - 8) {
        doc.addPage();
        y = 22;
      }
    };

    // Parse the generated brief into sections.
    const sections = generatedBrief
      .split(/\n\s*(?=\d+\.\s)/)
      .map((section) => {
        const lines = section.trim().split("\n");

        return {
          heading: lines[0]?.trim() || "",
          content: lines.slice(1).join("\n").trim(),
        };
      })
      .filter((section) => section.heading && section.content);

    // Cover page.
    doc.setFillColor(8, 15, 28);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setFillColor(10, 35, 52);
    doc.rect(0, 0, pageWidth, 8, "F");

    doc.setDrawColor(34, 211, 238);
    doc.setLineWidth(0.7);
    doc.line(margin, 45, margin + 24, 45);

    doc.setTextColor(34, 211, 238);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("PROJECT BLUEPRINT", margin, 37);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(27);
    doc.text("Your Project", margin, 61);
    doc.text("Brief", margin, 74);

    doc.setTextColor(180, 205, 220);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const coverSubtitle = doc.splitTextToSize(
      "A structured overview of your requirements, technical direction, priorities and proposed delivery plan.",
      contentWidth,
    );

    doc.text(coverSubtitle, margin, 88);

    // Project summary panel.
    const summaryY = 116;

    doc.setFillColor(16, 29, 44);
    doc.roundedRect(margin, summaryY, contentWidth, 54, 3, 3, "F");

    doc.setTextColor(34, 211, 238);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("PROJECT TYPE", margin + 6, summaryY + 10);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);

    const coverProjectTitle = doc.splitTextToSize(
      selectedProject?.title || projectTitle,
      contentWidth - 12,
    );

    doc.text(coverProjectTitle, margin + 6, summaryY + 18);

    doc.setTextColor(34, 211, 238);
    doc.setFontSize(8);
    doc.text("BUDGET RANGE", margin + 6, summaryY + 32);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(selectedBudget || "To be confirmed", margin + 6, summaryY + 39);

    doc.setTextColor(34, 211, 238);
    doc.setFontSize(8);
    doc.text("PREFERRED TIMELINE", margin + 6, summaryY + 46);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text(selectedTimeline || "To be confirmed", margin + 6, summaryY + 51);

    // Personal branding.
    doc.setDrawColor(34, 211, 238);
    doc.setLineWidth(0.3);
    doc.line(margin, 202, pageWidth - margin, 202);

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Jamshed Khan", margin, 214);

    doc.setTextColor(180, 205, 220);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);

    doc.text(
      "Full Stack Developer | Web Applications, APIs & AI Automation",
      margin,
      222,
    );

    doc.setTextColor(34, 211, 238);
    doc.text("jamshedportfolio.vercel.app", margin, 232);

    doc.setTextColor(125, 145, 160);
    doc.setFontSize(8);
    doc.text(
      "PRELIMINARY PROJECT DOCUMENT • FOR REVIEW",
      margin,
      pageHeight - 20,
    );

    // Detailed brief starts on a fresh page.
    doc.addPage();
    y = 22;

    doc.setTextColor(8, 145, 178);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("PROJECT DOCUMENTATION", margin, y);

    y += 9;

    doc.setTextColor(20, 30, 45);
    doc.setFontSize(19);
    doc.text("Project Scope & Delivery Plan", margin, y);

    y += 7;

    doc.setDrawColor(34, 211, 238);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 30, y);

    y += 12;

    // Add each section in a clean, readable format.
    sections.forEach((section) => {
      const heading = section.heading.replace(/^\d+\.\s*/, "");
      const contentLines = doc.splitTextToSize(
        section.content.replace(/\s+/g, " ").trim(),
        contentWidth - 8,
      );

      addPageIfNeeded(20);

      doc.setFillColor(240, 248, 252);
      doc.roundedRect(margin, y, contentWidth, 9, 2, 2, "F");

      doc.setFillColor(8, 145, 178);
      doc.rect(margin, y, 1.2, 9, "F");

      doc.setTextColor(8, 105, 135);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);

      const headingLines = doc.splitTextToSize(heading, contentWidth - 12);

      doc.text(headingLines[0] || heading, margin + 4, y + 6);

      y += 13;

      doc.setTextColor(55, 65, 81);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);

      contentLines.forEach((line: string) => {
        addPageIfNeeded(6);
        doc.text(line, margin + 4, y);
        y += 5;
      });

      y += 7;
    });

    // Branded footer and page numbering.
    const pageCount = doc.getNumberOfPages();

    for (let page = 1; page <= pageCount; page++) {
      doc.setPage(page);

      if (page > 1) {
        doc.setDrawColor(220, 230, 238);
        doc.line(margin, footerY, pageWidth - margin, footerY);

        doc.setTextColor(90, 110, 125);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);

        doc.text(
          "Jamshed Khan | Full Stack Developer • jamshedportfolio.vercel.app",
          margin,
          pageHeight - 8,
        );

        doc.text(
          `Page ${page} of ${pageCount}`,
          pageWidth - margin,
          pageHeight - 8,
          { align: "right" },
        );
      }
    }

    doc.save("jamshed-khan-project-blueprint.pdf");
  };
  const parsedBriefSections = generatedBrief
    .split(/\n\s*(?=\d+\.\s)/)
    .map((section) => {
      const lines = section.trim().split("\n");
      const heading = lines[0]?.trim() || "";
      const content = lines.slice(1).join("\n").trim();

      return { heading, content };
    })
    .filter((section) => section.heading && section.content);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const selectedProject = STEP_1_OPTIONS.find(
        (option) => option.id === selectedProjectType,
      );

      const selectedFeatureTitles = selectedFeatures
        .map(
          (featureId) =>
            STEP_2_OPTIONS.find((option) => option.id === featureId)?.title,
        )
        .filter(Boolean);

      const details = `
    Project Type:
    ${selectedProject?.title || "Not specified"}

    Technical Requirements:
    ${
      selectedFeatureTitles.length > 0
        ? selectedFeatureTitles.join("\n")
        : "None selected"
    }

    Additional Notes:${clientInfo.notes || "None"}`.trim();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: clientInfo.name,
          email: clientInfo.email,
          projectType: selectedProject?.title || "Not specified",
          details: `${details}\n\nGENERATED PROJECT BRIEF:\n\n${generatedBrief}`,
          budget: selectedBudget,
          timeline: selectedTimeline,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send project brief");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Brief submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-sm p-6 md:p-12 relative overflow-hidden">
      {/* Top Header Step Indicator */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
        <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
          <span className="text-cyan-400">
            {currentStep === 5
              ? "PROJECT PREVIEW"
              : `STEP 0${currentStep} / 04`}
          </span>{" "}
          — {currentStep === 1 && "PROJECT TYPE"}
          {currentStep === 2 && "YOUR NEEDS"}
          {currentStep === 3 && "TIMELINE"}
          {currentStep === 5 && "PROJECT PREVIEW"}
        </div>

        {/* Progress Bar Indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === currentStep
                  ? "w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                  : step < currentStep
                    ? "w-3 bg-cyan-400/40"
                    : "w-3 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Step Contents */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 space-y-6"
        >
          <div className="text-cyan-400 text-5xl font-black">✓</div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">
            PROJECT DETAILS SENT
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Thanks — your project details have been sent. I’ll review your
            requirements and get back to you with the next steps.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 underline hover:text-cyan-300 pt-4 inline-block"
          >
            SUBMIT ANOTHER PROJECT
          </button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                WHAT ARE WE BUILDING?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STEP_1_OPTIONS.map((opt) => {
                  const isSelected = selectedProjectType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedProjectType(opt.id)}
                      className={`text-left p-6 border rounded-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-white/[0.05] border-cyan-400 shadow-lg shadow-cyan-400/10"
                          : "bg-white/[0.01] border-white/10 hover:border-white/30"
                      }`}
                    >
                      <h3
                        className={`text-sm md:text-base font-black uppercase tracking-wider mb-2 ${
                          isSelected ? "text-cyan-400" : "text-white"
                        }`}
                      >
                        {opt.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                WHAT DO YOU NEED?
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                Select all that apply. You can choose more than one option.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STEP_2_OPTIONS.map((opt) => {
                  const isSelected = selectedFeatures.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleFeature(opt.id)}
                      className={`text-left p-6 border rounded-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-white/[0.05] border-cyan-400 shadow-lg shadow-cyan-400/10"
                          : "bg-white/[0.01] border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-sm md:text-base font-black uppercase tracking-wider ${
                            isSelected ? "text-cyan-400" : "text-white"
                          }`}
                        >
                          {opt.title}
                        </h3>
                        <span className="text-cyan-400 text-xs font-mono">
                          {isSelected ? "✓" : "+"}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                WHEN WOULD YOU LIKE TO START?
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Choose the timeframe that best fits your project.
              </p>
              <div className="space-y-4">
                <h3 className="text-sm font-black tracking-widest uppercase text-white">
                  WHAT IS YOUR ESTIMATED BUDGET?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {BUDGET_OPTIONS.map((budget) => {
                    const isSelected = selectedBudget === budget;

                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`p-4 border text-center rounded-sm transition-all duration-200 ${
                          isSelected
                            ? "border-cyan-400 bg-white/[0.05] text-cyan-400"
                            : "border-white/10 bg-white/[0.01] text-slate-300 hover:border-white/30"
                        }`}
                      >
                        <span className="text-xs font-bold tracking-wide">
                          {budget}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TIMELINE_OPTIONS.map((time) => {
                  const isSelected = selectedTimeline === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeline(time)}
                      className={`p-6 border text-center rounded-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-white/[0.05] border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-400/10"
                          : "bg-white/[0.01] border-white/10 text-slate-300 hover:border-white/30"
                      }`}
                    >
                      <span className="text-xs font-black tracking-widest uppercase">
                        {time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 5 — GENERATED PROJECT BRIEF */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.03] to-transparent p-6 md:p-8">
                {/* Decorative accent */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.08] blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      Project Blueprint Generated
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      Confidential Project Overview
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    Your Project Plan
                  </span>

                  <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                    Your Project Brief
                    <span className="text-cyan-400">.</span>
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                    A structured overview of your project requirements,
                    recommended technical direction, key priorities, and
                    proposed development phases — prepared to guide the next
                    stage of discovery.
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/60 via-white/10 to-transparent" />

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      Requirements → Architecture → Delivery
                    </span>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                      Ready for Review
                    </span>
                    <button
                      type="button"
                      onClick={downloadProjectBrief}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M12 15V3" />
                      </svg>
                      Download Project Brief PDF
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(generatedBrief);
                          alert("Project brief copied successfully!");
                        } catch (error) {
                          console.error("Failed to copy project brief:", error);
                          alert(
                            "Unable to copy the project brief. Please try again.",
                          );
                        }
                      }}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="8" y="8" width="13" height="13" rx="2" />
                        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                      </svg>
                      Copy Project Brief
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-3">
                {!isEditingBrief ? (
                  <button
                    type="button"
                    onClick={startEditingBrief}
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-all hover:bg-cyan-400/20"
                  >
                    Edit Project Brief
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={saveEditedBrief}
                      className="rounded-lg bg-cyan-400 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-cyan-300"
                    >
                      Save Changes
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsEditingBrief(false)}
                      className="rounded-lg border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/80 transition-all hover:bg-white/10"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>

              {isEditingBrief ? (
                <textarea
                  value={editedBrief}
                  onChange={(event) => setEditedBrief(event.target.value)}
                  rows={22}
                  aria-label="Edit project brief"
                  className="w-full rounded-xl border border-cyan-400/30 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200 outline-none transition-colors focus:border-cyan-300"
                />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {parsedBriefSections.map((section, index) => (
                    <motion.div
                      key={`${section.heading}-${index}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-colors duration-300 hover:border-cyan-400/30 md:p-6"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400/60 opacity-60 transition-opacity group-hover:opacity-100" />

                      <div className="mb-4 flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 font-mono text-xs font-bold text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="pt-1 text-sm font-bold uppercase tracking-wider text-white md:text-base">
                          {section.heading.replace(/^\d+\.\s*/, "")}
                        </h3>
                      </div>

                      <div className="whitespace-pre-wrap break-words pl-11 text-sm leading-7 text-slate-300">
                        {section.heading.toLowerCase().includes("roadmap") ? (
                          <div className="space-y-4">
                            {section.content
                              .split(/Phase \d+\s*—/i)
                              .filter(Boolean)
                              .map((phase, phaseIndex) => (
                                <div
                                  key={phaseIndex}
                                  className="flex gap-3 rounded-lg border border-cyan-400/10 bg-white/[0.02] p-4"
                                >
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-bold text-cyan-300">
                                    {String(phaseIndex + 1).padStart(2, "0")}
                                  </span>

                                  <div className="min-w-0 flex-1">
                                    <h4 className="mb-1 font-bold uppercase tracking-wide text-white">
                                      Phase{" "}
                                      {String(phaseIndex + 1).padStart(2, "0")}
                                    </h4>

                                    <p className="text-sm leading-6 text-slate-400">
                                      {phase.replace(/^[\s:—-]+/, "").trim()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ) : (
                          section.content
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="border border-white/20 px-6 py-3 text-xs font-bold tracking-widest uppercase text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  ← EDIT DETAILS
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="bg-cyan-400 px-6 py-3 text-xs font-bold tracking-widest uppercase text-black transition hover:bg-cyan-300"
                >
                  CONTINUE TO CONTACT →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5 — CONTACT DETAILS */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                SEND PROJECT DETAILS →
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={clientInfo.name}
                      onChange={(e) =>
                        setClientInfo({ ...clientInfo, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={clientInfo.email}
                      onChange={(e) =>
                        setClientInfo({ ...clientInfo, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                    ADDITIONAL NOTES (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    value={clientInfo.notes}
                    onChange={(e) =>
                      setClientInfo({ ...clientInfo, notes: e.target.value })
                    }
                    placeholder="Tell me about your goals, current website, key features, or anything else I should know..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20"
                >
                  {isSubmitting
                    ? "SENDING DETAILS..."
                    : "SEND PROJECT DETAILS →"}
                </button>
                <p className="mt-3 text-center text-[11px] font-mono tracking-wide text-slate-500">
                  Your details are only used to review your project requirements
                  and contact you about the project.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Bottom Controls */}
      {!isSubmitted && (
        <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
          {currentStep > 1 ? (
            <button
              onClick={handleBack}
              className="text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
            >
              ← PREVIOUS STEP
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 && (
            <button
              onClick={handleNext}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs px-8 py-3.5 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20"
            >
              NEXT STEP →
            </button>
          )}

          {currentStep === 3 && (
            <button
              type="button"
              onClick={generateProjectBrief}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs px-8 py-3.5 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20"
            >
              GENERATE PROJECT BRIEF →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
