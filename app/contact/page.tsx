"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Custom Web Application",
    details: "",
    budget: "",
    timeline: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 w-full">
      
      {/* HEADER SECTION */}
      <section className="w-full px-6 md:px-12 lg:px-16 pt-12 pb-12 border-b border-border">
        <div className="w-full space-y-4">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono">
            DIRECT COMMUNICATION
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-foreground">
            GET IN <span className="text-primary">TOUCH.</span>
          </h1>
          <p className="text-muted text-sm md:text-base max-w-2xl leading-relaxed pt-2">
            If you already know what you need or want to discuss a specific problem directly, send a message below. If you need help structuring your project requirements first, use the interactive Brief Builder.
          </p>
        </div>
      </section>

      {/* DUAL ROUTING CHOICE BANNER */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-8 border-b border-border bg-surface/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* PATH A: BRIEF BUILDER */}
          <div className="bg-surface border border-border p-6 rounded-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block mb-1">
                HAVE A DEFINED PROJECT SCOPE?
              </span>
              <h3 className="text-lg font-black uppercase text-foreground">
                BUILD YOUR BRIEF
              </h3>
              <p className="text-muted text-xs leading-relaxed pt-1">
                Select your specific feature modules, timelines, and deliverables to generate a structured specification.
              </p>
            </div>
            <Link
              href="/build"
              className="bg-primary hover:bg-primary-hover text-white text-xs font-bold font-mono px-5 py-3 tracking-widest uppercase transition-colors text-center inline-block"
            >
              START BRIEF BUILDER →
            </Link>
          </div>

          {/* PATH B: DIRECT MESSAGE */}
          <div className="bg-surface border border-primary/30 p-6 rounded-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-primary text-[10px] font-mono font-bold tracking-widest uppercase block mb-1">
                JUST WANT TO TALK?
              </span>
              <h3 className="text-lg font-black uppercase text-foreground">
                SEND A DIRECT MESSAGE
              </h3>
              <p className="text-muted text-xs leading-relaxed pt-1">
                For general engineering inquiries, technical consultation, or custom contracts without using the interactive tool.
              </p>
            </div>
            <a
              href="#contact-form"
              className="border border-border hover:border-primary/50 text-foreground text-xs font-bold font-mono px-5 py-3 tracking-widest uppercase transition-colors text-center inline-block"
            >
              SCROLL TO FORM ↓
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT BODY: DETAILS & FORM */}
      <section id="contact-form" className="w-full px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: DIRECT METRICS & DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-2">
                DIRECT CHANNELS
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                CONTACT DETAILS
              </h2>
            </div>

            <div className="space-y-6">
              
              {/* EMAIL */}
              <div className="bg-surface border border-border p-6 rounded-sm space-y-1">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block">
                  EMAIL DIRECTLY
                </span>
                <a
                  href="mailto:contact@jamshed.dev"
                  className="text-sm md:text-base font-mono font-bold text-foreground hover:text-primary transition-colors block underline decoration-border underline-offset-4"
                >
                  contact@jamshed.dev
                </a>
              </div>

              {/* LOCATION */}
              <div className="bg-surface border border-border p-6 rounded-sm space-y-1">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block">
                  PRIMARY LOCATION
                </span>
                <p className="text-sm font-mono font-bold text-foreground">
                  Karachi, Pakistan (PKT / UTC+5)
                </p>
                <p className="text-muted text-xs pt-1">
                  Available for global remote engineering contracts & consultations.
                </p>
              </div>

              {/* NETWORKS */}
              <div className="bg-surface border border-border p-6 rounded-sm space-y-3">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block">
                  PROFESSIONAL NETWORKS
                </span>
                <div className="flex flex-col space-y-2 text-xs font-mono">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-center justify-between border-b border-border/40 pb-2"
                  >
                    <span>LINKEDIN</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-center justify-between pt-1"
                  >
                    <span>GITHUB</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: ESSENTIAL CONTACT FORM */}
          <div className="lg:col-span-7 bg-surface border border-border p-8 md:p-12 rounded-sm space-y-6">
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block font-mono mb-1">
                MESSAGE INTERFACE
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                SEND MESSAGE
              </h2>
            </div>

            {status === "success" ? (
              <div className="bg-primary/10 border border-primary p-6 rounded-sm text-center space-y-3 py-12">
                <span className="text-primary font-mono text-sm font-bold block uppercase tracking-widest">
                  [MESSAGE RECEIVED]
                </span>
                <h3 className="text-xl font-bold uppercase text-foreground">
                  THANK YOU FOR REACHING OUT.
                </h3>
                <p className="text-muted text-xs max-w-md mx-auto leading-relaxed">
                  Your message has been logged. I will review the technical details and respond back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* NAME & EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-accent block">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name or company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-xs md:text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-accent block">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 text-xs md:text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* PROJECT TYPE */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-accent block">
                    PROJECT TYPE *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-xs md:text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm font-mono"
                  >
                    <option value="Custom Web Application">Custom Web Application (Next.js / React)</option>
                    <option value="Custom WordPress System">Custom WordPress / CMS System</option>
                    <option value="E-commerce / Configurator">E-commerce / Product Configurator</option>
                    <option value="Technical SEO & Speed Optimization">Technical SEO & Speed Optimization</option>
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                {/* PROJECT DETAILS */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase text-accent block">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, current bottlenecks, or specific technical requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-background border border-border p-4 text-xs md:text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm leading-relaxed"
                  />
                </div>

                {/* OPTIONAL: BUDGET & TIMELINE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-border/40">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-muted block">
                      BUDGET RANGE <span className="text-accent/60">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $2,000 - $5,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-muted block">
                      TIMELINE <span className="text-accent/60">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3-4 Weeks / Immediate"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary hover:bg-primary-hover text-white text-xs font-bold font-mono py-4 tracking-[0.2em] uppercase transition-colors rounded-sm disabled:opacity-50"
                >
                  {status === "submitting" ? "SENDING MESSAGE..." : "SEND MESSAGE →"}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}