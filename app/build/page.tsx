import type { Metadata } from "next";
import BriefBuilder from "@/components/BriefBuilder";

export const metadata: Metadata = {
  title: "Build Your Project Brief",
  description:
    "Use Jamshed Khan's interactive project brief builder to define your website, web application, e-commerce, API, and custom software requirements for a technical project evaluation.",
  alternates: {
    canonical: "/build",
  },
  openGraph: {
    title: "Build Your Project Brief | Jamshed Khan",
    description:
      "Define your website, web application, e-commerce, API, or custom software requirements and request a technical project evaluation.",
    url: "/build",
  },
  twitter: {
    title: "Build Your Project Brief | Jamshed Khan",
    description:
      "Define your project requirements and request a technical evaluation for your website, web application, e-commerce, API, or custom software project.",
  },
};

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            INTERACTIVE CONFIGURATOR
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            BUILD YOUR BRIEF
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Select your requirements step-by-step to calculate scope, technical
            requirements, and receive a direct project evaluation.
          </p>
        </div>

        {/* Multi-step Brief Builder Component */}
        <BriefBuilder />
      </div>
    </div>
  );
}