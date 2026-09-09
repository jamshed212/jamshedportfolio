"use client";

import { DiscoveryData } from "@/lib/discovery-schema";

export function ProjectSignals({ data }: { data: DiscoveryData }) {
  // Compute Signals Logic
  const getComplexity = () => {
    let score = 0;
    if (["WEB_APP", "SOFTWARE", "MOBILE"].includes(data.projectType)) score += 3;
    if (data.features.length > 6) score += 2;
    if (data.integrations.length > 2) score += 2;
    if (data.users.includes("ADMINS") || data.users.includes("EMPLOYEES")) score += 1;

    if (score >= 6) return { level: "HIGH", color: "text-amber-400 border-amber-400/30 bg-amber-400/10" };
    if (score >= 3) return { level: "MEDIUM", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" };
    return { level: "LOW", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" };
  };

  const getRecommendedArchitecture = () => {
    switch (data.projectType) {
      case "WEB_APP":
      case "SOFTWARE":
        return "Full-Stack Web App (Next.js + Node.js API + PostgreSQL/Supabase)";
      case "ECOMMERCE":
        return "Headless E-Commerce (Next.js Storefront + Stripe + CMS/Database)";
      case "MOBILE":
        return "Cross-Platform Mobile App (React Native/Flutter + Cloud Backend)";
      case "WEBSITE":
      default:
        return "High-Performance SSR Site (Next.js + Tailwind + Headless CMS)";
    }
  };

  const getOpenQuestions = () => {
    const questions: string[] = [];
    if (data.features.some(f => f.toLowerCase().includes("payment"))) {
      questions.push("Which payment gateway provider will be used (Stripe, Tap, Checkout, etc.)?");
    }
    if (data.users.length > 2) {
      questions.push("Do different user roles require granular backend permissions & access control?");
    }
    if (data.existingSystem === "YES") {
      questions.push("Will existing legacy data or user databases need to be migrated?");
    }
    if (data.workflow.length === 0) {
      questions.push("What specific step-by-step action should happen immediately after user signup?");
    }
    if (questions.length === 0) {
      questions.push("Are there specific third-party APIs that require immediate key authentication?");
    }
    return questions;
  };

  const complexity = getComplexity();
  const openQuestions = getOpenQuestions();

  return (
    <div className="border border-border/80 bg-surface/40 p-6 font-mono text-xs space-y-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <span className="text-accent font-bold uppercase tracking-widest text-[10px]">
          PROJECT INTELLIGENCE SIGNALS
        </span>
        <span className="text-[10px] text-muted">COMPUTED SYSTEM DIAGNOSTIC</span>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border/40 p-3 bg-background/50">
          <span className="text-muted block text-[10px] uppercase">PROJECT COMPLEXITY</span>
          <span className={`inline-block font-bold mt-1 px-2 py-0.5 border ${complexity.color}`}>
            {complexity.level}
          </span>
        </div>

        <div className="border border-border/40 p-3 bg-background/50">
          <span className="text-muted block text-[10px] uppercase">READINESS SCORE</span>
          <span className="font-bold text-foreground block mt-1">
            {data.client.email && data.features.length > 0 ? "HIGH (85%)" : "PARTIAL (50%)"}
          </span>
        </div>
      </div>

      {/* RECOMMENDED ARCHITECTURE */}
      <div className="border border-border/40 p-3 bg-background/50">
        <span className="text-muted block text-[10px] uppercase mb-1">RECOMMENDED SOLUTION DIRECTION</span>
        <p className="text-foreground font-semibold leading-relaxed">
          {getRecommendedArchitecture()}
        </p>
      </div>

      {/* AUTOMATED OPEN QUESTIONS */}
      <div>
        <span className="text-accent block text-[10px] uppercase font-bold mb-2">
          IDENTIFIED OPEN QUESTIONS ({openQuestions.length})
        </span>
        <ul className="space-y-2">
          {openQuestions.map((q, i) => (
            <li key={i} className="text-muted flex items-start gap-2 text-[11px] leading-normal">
              <span className="text-primary font-bold">•</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}