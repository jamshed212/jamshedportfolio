"use client";

import React from 'react';

export const StackComparison: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// WHY MODERN TECH MATTERS</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          Generic Builders vs My Custom Architecture
        </h2>
      </div>

      <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden font-mono text-xs">
        <div className="grid grid-cols-3 bg-white/5 p-4 font-bold border-b border-white/10 text-white">
          <span>FEATURE / METRIC</span>
          <span className="text-red-400">TRADITIONAL BUILDERS (WIX / SLOW WP)</span>
          <span className="text-cyan-400">MY CUSTOM STACK (NEXT.JS / REACT)</span>
        </div>

        {[
          { feature: 'Page Load Time', traditional: '3.5s – 6.0s (High Bounce Rate)', custom: '⚡ < 0.8s (Instant Edge Load)' },
          { feature: 'Google PageSpeed', traditional: '❌ 30–50 / 100 Mobile Score', custom: '🟢 98–100 / 100 Score Guaranteed' },
          { feature: 'Security & Hacks', traditional: '❌ Vulnerable to Plugin Exploits', custom: '🔒 Serverless & Enterprise Grade' },
          { feature: 'Custom Functionality', traditional: '❌ Limited to Plugin Features', custom: '⚡ 100% Unlimited API Control' },
          { feature: 'SEO & Google Ranking', traditional: '❌ Bloated Code, Slow Indexing', custom: '📈 Dynamic SSG/SSR & Clean Schema' },
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/[0.01] transition">
            <span className="font-bold text-white/80">{row.feature}</span>
            <span className="text-white/50">{row.traditional}</span>
            <span className="text-cyan-300 font-bold">{row.custom}</span>
          </div>
        ))}
      </div>
    </section>
  );
};