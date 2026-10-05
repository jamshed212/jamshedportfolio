"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  id: string;
  title: string;
  desc: string;
}

const STEP_1_OPTIONS: Option[] = [
  {
    id: "nextjs",
    title: "CUSTOM NEXT.JS / REACT WEB APP",
    desc: "High speed, SSR, modern dynamic architecture",
  },
  {
    id: "wordpress",
    title: "WORDPRESS & CMS BUILD",
    desc: "Custom themes, Elementor, WooCommerce",
  },
  {
    id: "seo",
    title: "PERFORMANCE SEO & AUDIT",
    desc: "Core Web Vitals, PageSpeed 90+, canonical fixes",
  },
  {
    id: "ui_motion",
    title: "UI/UX & MOTION REDESIGN",
    desc: "Framer Motion, GSAP, interactive visual polish",
  },
];

const STEP_2_OPTIONS: Option[] = [
  {
    id: "api_integration",
    title: "CUSTOM API & DATABASE INTEGRATION",
    desc: "REST / GraphQL endpoints, dynamic state management",
  },
  {
    id: "ecom_setup",
    title: "WOOCOMMERCE / SHOPIFY API",
    desc: "Custom checkout flow, product configurator, payment gateways",
  },
  {
    id: "speed_opt",
    title: "ADVANCED PERFORMANCE OPTIMIZATION",
    desc: "Asset minification, caching setup, image pipeline",
  },
  {
    id: "seo_remediation",
    title: "TECHNICAL SEO AUDIT & REDIRECTS",
    desc: "Ahrefs audit cleanup, schema setup, indexing fixes",
  },
];

const TIMELINE_OPTIONS = ["ASAP (1-2 WEEKS)", "STANDARD (3-4 WEEKS)", "FLEXIBLE"];

export default function BriefBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("nextjs");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("STANDARD (3-4 WEEKS)");
  const [clientInfo, setClientInfo] = useState({ name: "", email: "", notes: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);
    const selectedProject = STEP_1_OPTIONS.find(
      (option) => option.id === selectedProjectType
    );

    const selectedFeatureTitles = selectedFeatures
      .map(
        (featureId) =>
          STEP_2_OPTIONS.find((option) => option.id === featureId)?.title
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

    Additional Notes:
    ${clientInfo.notes || "None"}
        `.trim();

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: clientInfo.name,
            email: clientInfo.email,
            projectType: selectedProject?.title || "Not specified",
            details,
            budget: "",
            timeline: selectedTimeline,
          }),
        });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send project brief");
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  } 
    catch (error) {
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
          <span className="text-cyan-400">STEP 0{currentStep} / 04</span> —{" "}
          {currentStep === 1 && "PROJECT TYPE"}
          {currentStep === 2 && "REQUIRED SCOPE"}
          {currentStep === 3 && "TIMELINE & GOALS"}
          {currentStep === 4 && "FINAL EVALUATION"}
        </div>

        {/* Progress Bar Indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
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
            PROJECT BRIEF EVALUATION SENT
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Aap ka brief capture ho gaya hai. Technical scope evaluate karke 24 hours ke andar response forward kar diya jayega.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 underline hover:text-cyan-300 pt-4 inline-block"
          >
            START NEW CONFIGURATION
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
                      <p className="text-slate-400 text-xs leading-relaxed">{opt.desc}</p>
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
                SELECT SCOPE & TECHNICAL REQUIREMENTS
              </h2>

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
                      <p className="text-slate-400 text-xs leading-relaxed">{opt.desc}</p>
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
                TARGET TIMELINE & EXECUTION SCHEDULE
              </h2>

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

          {/* STEP 4 */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white">
                RECEIVE DIRECT EVALUATION
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
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
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
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
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
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    placeholder="Specific design preferences, site reference link, or custom features..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20"
                >
                  {isSubmitting ? "SENDING BRIEF..." : "SUBMIT BRIEF FOR EVALUATION →"}
                </button>
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

          {currentStep < 4 && (
            <button
              onClick={handleNext}
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs px-8 py-3.5 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20"
            >
              NEXT STEP →
            </button>
          )}
        </div>
      )}

    </div>
  );
}