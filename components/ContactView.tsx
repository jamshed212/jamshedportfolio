"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Web App",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-wider text-white">
            DIRECT CHANNELS
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Have a project in mind, need technical consultation, or want to build a custom web solution? Reach out directly.
          </p>
        </div>

        <div className="space-y-6 pt-4 border-t border-white/10">
          <div>
            <span className="text-slate-500 text-xs font-mono uppercase block mb-1">
              EMAIL INQUIRIES
            </span>
            <a
              href="mailto:contact@jamshedkhan.com"
              className="text-white hover:text-cyan-400 font-bold text-lg transition-colors"
            >
              contact@jamshedkhan.com
            </a>
          </div>

          <div>
            <span className="text-slate-500 text-xs font-mono uppercase block mb-1">
              LOCATION
            </span>
            <span className="text-slate-300 font-bold text-sm">
              Karachi, Pakistan (Available Globally)
            </span>
          </div>

          <div>
            <span className="text-slate-500 text-xs font-mono uppercase block mb-1">
              SOCIALS & PROFILES
            </span>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold tracking-widest text-cyan-400 hover:text-cyan-300 uppercase"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold tracking-widest text-cyan-400 hover:text-cyan-300 uppercase"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-10">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="text-cyan-400 text-4xl font-black">✓</div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              MESSAGE SENT
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Thank you for reaching out. I'll review your details and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-xs font-bold tracking-widest uppercase text-cyan-400 underline hover:text-cyan-300"
            >
              SEND ANOTHER MESSAGE
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                PROJECT TYPE
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#0a0d14] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="Custom Web App">Custom Next.js / React App</option>
                <option value="WordPress Build">WordPress & CMS Build</option>
                <option value="SEO Audit">Performance SEO & Audit</option>
                <option value="UI Motion Redesign">UI/UX & Motion Redesign</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider uppercase text-slate-300 block">
                PROJECT DETAILS *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe project scope, goals, and timeline..."
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs py-4 tracking-[0.2em] uppercase transition-all duration-200 shadow-lg shadow-cyan-400/20 disabled:opacity-50"
            >
              {status === "submitting" ? "SENDING..." : "SEND MESSAGE →"}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}