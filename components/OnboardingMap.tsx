"use client";

import React from 'react';

export const OnboardingMap: React.FC = () => {
  const steps = [
    { num: '01', title: 'Interactive Discovery', desc: '3-min Blueprint engine fill karein. Exact technical scope receive karein.' },
    { num: '02', title: 'Proposal & Roadmap', desc: '24 hrs mein fixed pricing, wireframes, aur milestone timeline paayein.' },
    { num: '03', title: 'Agile Sprints', desc: 'Live staging URL par Weekly updates aur progress directly dekhein.' },
    { num: '04', title: 'Launch & Handoff', desc: 'QA Testing, Speed Optimization, and Full Source Code handoff.' },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// SIMPLE & TRANSPARENT</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          How We Work Together
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl relative font-mono">
            <span className="text-3xl font-black text-cyan-500/30 block mb-2">{s.num}</span>
            <h4 className="text-sm font-bold text-white uppercase mb-2">{s.title}</h4>
            <p className="text-xs text-white/50">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};