"use client";
import React from "react";

const tools = [
  { name: "Next.js", level: "Expert", category: "Framework" },
  { name: "React", level: "Expert", category: "Library" },
  { name: "TypeScript", level: "Advanced", category: "Language" },
  { name: "Flutter", level: "Advanced", category: "Mobile" },
  { name: "C# / .NET", level: "Advanced", category: "Backend" },
  { name: "MongoDB", level: "Advanced", category: "Database" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "Tailwind", level: "Expert", category: "Design" },
  { name: "SaaS", level: "Expert", category: "Architecture" },
  { name: "Shopify", level: "Expert", category: "E-Commerce" },
  { name: "WordPress", level: "Expert", category: "CMS" },
  { name: "Ahrefs/SEO", level: "Advanced", category: "Growth" },
  { name: "Firebase", level: "Advanced", category: "Cloud" },
  { name: "Framer Motion", level: "Expert", category: "Motion" },
  { name: "GitHub", level: "Expert", category: "Version" },
  { name: "REST APIs", level: "Expert", category: "Backend" },
];

export default function TechStack() {
  return (
    <section className="bg-black py-32 relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-mono text-xs tracking-[1em] uppercase mb-6">
              // TECH_ECOSYSTEM
            </h2>
            <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Engineered <br /> <span className="text-blue-600">With Precision.</span>
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest text-right">
              Stack_v2.0 // Fully_Optimized <br />
              Based_on_Industry_Standards
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
          {tools.map((tool, i) => (
            <div 
              key={i}
              className="group relative bg-black p-8 hover:bg-blue-600/[0.03] transition-all duration-500 cursor-default"
            >
              {/* Animated Corner Border */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-blue-600 opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-blue-600 opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-mono text-gray-700 uppercase tracking-tighter group-hover:text-blue-500/50 transition-colors">
                    0{i + 1}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 animate-pulse" />
                </div>

                <h4 className="text-white text-xl font-bold uppercase tracking-tight mb-1 group-hover:translate-x-1 transition-transform">
                  {tool.name}
                </h4>
                <p className="text-gray-600 font-mono text-[9px] uppercase tracking-widest mb-6 group-hover:text-gray-400">
                  {tool.category}
                </p>

                {/* Micro Progress Indicator */}
                <div className="flex items-center gap-2">
                  <div className="h-[2px] flex-grow bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" 
                      style={{ width: tool.level === "Expert" ? "100%" : "70%" }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-gray-800 uppercase group-hover:text-blue-600 transition-colors">
                    {tool.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Tag */}
        <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/5 rounded-full bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.4em]">All Systems Operational</span>
            </div>
        </div>

      </div>
    </section>
  );
}