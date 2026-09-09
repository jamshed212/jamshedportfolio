"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">
            LET'S WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start border-t border-white/10 pt-12">
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-8">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Available for freelance projects and full-time opportunities. Specializing in high-performance web development for <span className="text-white font-semibold">UK & Middle East</span> clients.
            </p>

            <div className="space-y-6 pt-2">
              <div>
                <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">
                  EMAIL
                </span>
                <a
                  href="mailto:contact@jamshed.dev"
                  className="text-white text-base md:text-lg font-bold hover:text-cyan-400 transition-colors"
                >
                  contact@jamshed.dev
                </a>
              </div>

              <div>
                <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">
                  LOCATION
                </span>
                <p className="text-slate-300 text-sm font-medium">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-bold block mb-1">
                  AVAILABILITY
                </span>
                <p className="text-cyan-400 text-sm font-semibold uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Open to Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="NAME"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="PROJECT TYPE / BUDGET"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="MESSAGE"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs md:text-sm px-8 py-4 tracking-[0.2em] uppercase transition-all duration-200 rounded-sm shadow-lg shadow-cyan-400/20"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}