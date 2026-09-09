"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = [
  { id: "nextjs", label: "Custom Next.js / React Web App", desc: "High speed, SSR, modern dynamic architecture" },
  { id: "wordpress", label: "WordPress & CMS Build", desc: "Custom themes, Elementor, WooCommerce" },
  { id: "seo", label: "Performance SEO & Audit", desc: "Core Web Vitals, PageSpeed 90+, canonical fixes" },
  { id: "motion", label: "UI/UX & Motion Redesign", desc: "Framer Motion, GSAP, interactive visual polish" },
];

const budgetRanges = [
  { id: "b1", label: "$500 — $1,500", desc: "Small business site or landing page" },
  { id: "b2", label: "$1,500 — $3,000", desc: "Full custom web application or store" },
  { id: "b3", label: "$3,000+", desc: "Enterprise platform with complex integrations" },
];

const timelines = [
  { id: "t1", label: "1 — 2 Weeks", desc: "Urgent turnaround" },
  { id: "t2", label: "2 — 4 Weeks", desc: "Standard development cycle" },
  { id: "t3", label: "Flexible", desc: "Focus on quality and iterations" },
];

export default function ProcessBuilder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Brief Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12">
      
      {/* Progress Bar */}
      <div className="mb-12 border-b border-white/10 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xs font-bold">
            STEP 0{step} / 04
          </span>
          <span className="text-slate-500 text-xs uppercase tracking-widest hidden sm:inline">
            {step === 1 && "— Project Type"}
            {step === 2 && "— Budget Allocation"}
            {step === 3 && "— Expected Timeline"}
            {step === 4 && "— Contact & Scope"}
          </span>
        </div>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= step ? "w-8 bg-cyan-400" : "w-3 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: PROJECT TYPE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                  WHAT ARE WE BUILDING?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: item.label })}
                      className={`text-left p-6 border rounded-sm transition-all ${
                        formData.projectType === item.label
                          ? "bg-cyan-400/10 border-cyan-400 text-white"
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      <h3 className="text-white text-base font-bold uppercase mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: BUDGET */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                  ESTIMATED BUDGET RANGE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {budgetRanges.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: item.label })}
                      className={`text-left p-6 border rounded-sm transition-all ${
                        formData.budget === item.label
                          ? "bg-cyan-400/10 border-cyan-400 text-white"
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      <h3 className="text-cyan-400 text-lg font-mono font-bold mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: TIMELINE */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                  EXPECTED TIMELINE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timelines.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: item.label })}
                      className={`text-left p-6 border rounded-sm transition-all ${
                        formData.timeline === item.label
                          ? "bg-cyan-400/10 border-cyan-400 text-white"
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                      }`}
                    >
                      <h3 className="text-white text-base font-bold uppercase mb-1">
                        {item.label}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: CONTACT & FINAL SUBMIT */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                  YOUR DETAILS & BRIEF
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="NAME"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="PROJECT SCOPE OR SPECIFIC REQUIREMENTS..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                />

                {/* Brief Summary Box */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-sm text-xs text-slate-400 flex flex-wrap gap-4">
                  <div>Type: <span className="text-cyan-400 font-bold">{formData.projectType || "Not set"}</span></div>
                  <div>Budget: <span className="text-cyan-400 font-bold">{formData.budget || "Not set"}</span></div>
                  <div>Timeline: <span className="text-cyan-400 font-bold">{formData.timeline || "Not set"}</span></div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between items-center border-t border-white/10 pt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-slate-400 hover:text-white text-xs tracking-widest uppercase font-bold"
              >
                ← BACK
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !formData.projectType) ||
                  (step === 2 && !formData.budget) ||
                  (step === 3 && !formData.timeline)
                }
                className="bg-cyan-400 hover:bg-cyan-300 disabled:opacity-30 disabled:hover:bg-cyan-400 text-black font-bold text-xs px-8 py-3.5 tracking-[0.2em] uppercase rounded-sm"
              >
                NEXT STEP →
              </button>
            ) : (
              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs px-8 py-3.5 tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-cyan-400/20"
              >
                SUBMIT BRIEF
              </button>
            )}
          </div>
        </form>
      ) : (
        /* Success Screen */
        <div className="text-center py-12 space-y-4">
          <span className="text-cyan-400 font-mono text-2xl font-bold">✓ BRIEF RECEIVED</span>
          <h2 className="text-3xl font-black uppercase text-white">
            THANK YOU FOR REACHING OUT
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Your brief has been submitted successfully. I will review the scope and get back to you within 24 hours.
          </p>
        </div>
      )}

    </div>
  );
}