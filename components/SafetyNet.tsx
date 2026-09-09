"use client";

import React from 'react';

export const SafetyNet: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <div className="bg-gradient-to-r from-cyan-950/40 via-black to-cyan-950/40 border border-cyan-500/30 p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// PEACE OF MIND GUARANTEE</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-1">
            Zero-Risk Post-Launch Support
          </h2>
          <p className="text-xs font-mono text-white/60 mt-2">
            Project launch hone ke baad main gayab nahi hota. Har client ko yeh 3 safety guarantees milti hain:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="bg-black/50 border border-white/10 p-5 rounded-2xl">
            <span className="text-2xl mb-2 block">🛡️</span>
            <h4 className="text-sm font-bold text-white uppercase mb-1">30-Day Free Bug Warranty</h4>
            <p className="text-white/60">Launch ke baad aane wale kisi bhi bug ya glitch ko 100% free fix kiya jayega.</p>
          </div>

          <div className="bg-black/50 border border-white/10 p-5 rounded-2xl">
            <span className="text-2xl mb-2 block">📹</span>
            <h4 className="text-sm font-bold text-white uppercase mb-1">Loom Video Walkthrough</h4>
            <p className="text-white/60">Aapko 10-min Loom video walkthrough milega taake aap site/admin panel easily manage kar sakein.</p>
          </div>

          <div className="bg-black/50 border border-white/10 p-5 rounded-2xl">
            <span className="text-2xl mb-2 block">⚡</span>
            <h4 className="text-sm font-bold text-white uppercase mb-1">PageSpeed SLA</h4>
            <p className="text-white/60">Website Mobile & Desktop par minimum 90+ PageSpeed score maintain karegi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};