"use client";
import React from "react";

const experiences = [
  {
    period: "FEB 2025 — PRESENT",
    role: "Web Developer",
    company: "Its Digital House",
    location: "Karachi, Sindh, Pakistan",
    details: "Full-stack development specializing in high-performance web solutions and digital transformation.",
    tags: ["Shopify", "WordPress", "Next.js", "React"]
  },
  {
    period: "APR 2023 — JAN 2025",
    role: "Project Manager",
    company: "Get Social",
    location: "Pakistan",
    details: "Led e-commerce projects and PHP-based custom solutions, managing end-to-end delivery and client expectations.",
    tags: ["E-Commerce", "PHP", "Management", "Strategy"]
  },
  {
    period: "APR 2018 — MAR 2020",
    role: "Frontend Developer",
    company: "blueEX",
    location: "Pakistan",
    details: "Crafted responsive and interactive user interfaces for one of Pakistan's leading logistics and tech firms.",
    tags: ["UI/UX", "Frontend", "JavaScript", "Logistics Tech"]
  }
];

export default function Experience() {
  return (
    <section className="bg-black py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-mono text-xs tracking-[1em] uppercase mb-6">
              // CAREER_CHRONICLE
            </h2>
            <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Professional <br /> <span className="text-blue-600">History.</span>
            </h3>
          </div>
          <div className="mt-8 md:mt-0 md:text-right">
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Digital Architect // Karachi
            </p>
            <div className="h-[2px] w-20 bg-blue-600 ml-auto mt-2 hidden md:block" />
          </div>
        </div>

        {/* Experience List */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="group relative grid grid-cols-1 md:grid-cols-12 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500 px-4"
            >
              {/* Left Column: Period & Location */}
              <div className="md:col-span-3 mb-4 md:mb-0 flex flex-col justify-center">
                <span className="text-gray-500 font-mono text-sm tracking-tighter group-hover:text-blue-500 transition-colors">
                  {exp.period}
                </span>
                <span className="text-gray-700 font-mono text-[10px] uppercase mt-1">
                  {exp.location}
                </span>
              </div>

              {/* Middle Column: Role & Company */}
              <div className="md:col-span-5">
                <h4 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                  {exp.role}
                </h4>
                <p className="text-blue-600 font-mono text-sm uppercase tracking-widest mb-4">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                  {exp.details}
                </p>
              </div>

              {/* Right Column: Skills/Tags */}
              <div className="md:col-span-4 flex flex-wrap gap-2 items-start justify-start md:justify-end mt-6 md:mt-0 self-center">
                {exp.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 border border-white/10 text-white/40 text-[10px] font-mono uppercase tracking-widest rounded-full group-hover:border-blue-500/50 group-hover:text-blue-500 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Footer for Section */}
        <div className="mt-20 opacity-10 text-center">
          <p className="text-white font-mono text-[9px] tracking-[2em] uppercase">Verified Professional Record</p>
        </div>

      </div>
    </section>
  );
}