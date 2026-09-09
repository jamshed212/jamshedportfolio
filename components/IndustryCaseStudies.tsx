"use client";

import React, { useState } from 'react';

type Industry = 'ALL' | 'REAL_ESTATE' | 'E_COMMERCE' | 'SAAS' | 'AGENCY';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: Industry;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'High-Conversion Property Listing Engine',
    client: 'Khaki & Co Real Estate',
    industry: 'REAL_ESTATE',
    problem: 'Slow loading times and clunky property search caused 65% mobile drop-off rate.',
    solution: 'Rebuilt with Next.js 15, instant edge search filtering, and custom map integration.',
    metrics: [
      { label: 'Load Speed', value: '0.6s' },
      { label: 'Mobile Inquiries', value: '+180%' },
      { label: 'PageSpeed Score', value: '99/100' },
    ],
    tags: ['Next.js', 'Tailwind CSS', 'Mapbox API'],
  },
  {
    id: '2',
    title: 'Custom E-Commerce Storefront Transformation',
    client: 'Bathia Ocean Gold (BOG)',
    industry: 'E_COMMERCE',
    problem: 'Outdated platform failed to showcase mineral & precious metals catalog effectively.',
    solution: 'Engineered a modern digital showcase with multi-category auto-sync and instant catalog filtering.',
    metrics: [
      { label: 'Catalog Browsing Speed', value: '3x Faster' },
      { label: 'Lead Conversions', value: '+125%' },
      { label: 'Bounce Rate', value: '-40%' },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST API'],
  },
  {
    id: '3',
    title: 'Digital Agency Brand Transformation',
    client: 'Its Digital House',
    industry: 'AGENCY',
    problem: 'Generic agency site failed to communicate high-end development capabilities to clients.',
    solution: 'Developed an immersive web app featuring interactive project blueprints and real-time calculators.',
    metrics: [
      { label: 'Client Time-on-Site', value: '+210%' },
      { label: 'Qualified Leads', value: '3.5x' },
      { label: 'Lighthouse Score', value: '100%' },
    ],
    tags: ['Next.js', 'GSAP', 'TypeScript', 'Tailwind'],
  },
];

export const IndustryCaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('ALL');

  const filteredStudies = selectedIndustry === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.industry === selectedIndustry);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// PROVEN BUSINESS OUTCOMES</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          Real Results Across Industries
        </h2>
        <p className="text-xs md:text-sm font-mono text-white/60 mt-2 max-w-2xl mx-auto">
          Apni industry select karein aur dekhein ke pehle businesses ke bottlenecks ko tech se kaise solve kiya gaya.
        </p>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { id: 'ALL', label: 'All Industries' },
            { id: 'REAL_ESTATE', label: '🏠 Real Estate' },
            { id: 'E_COMMERCE', label: '🛍️ E-Commerce & Retail' },
            { id: 'AGENCY', label: '⚡ Digital Agencies' },
            { id: 'SAAS', label: '🚀 SaaS & Web Apps' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedIndustry(tab.id as Industry)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase transition-all duration-300 ${
                selectedIndustry === tab.id
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((item) => (
          <div key={item.id} className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded">
                  {item.client}
                </span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">{item.title}</h3>
              
              <div className="space-y-3 mb-6 text-xs font-mono">
                <p className="text-white/50"><strong className="text-white/80 uppercase">Problem:</strong> {item.problem}</p>
                <p className="text-white/50"><strong className="text-cyan-400 uppercase">Solution:</strong> {item.solution}</p>
              </div>
            </div>

            <div>
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-xl mb-4 border border-white/5 text-center">
                {item.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-cyan-400 font-bold font-mono text-sm block">{m.value}</span>
                    <span className="text-[9px] text-white/50 font-mono block leading-tight">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};