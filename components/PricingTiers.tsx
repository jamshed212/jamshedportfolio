"use client";

import React from 'react';

export const PricingTiers: React.FC<{ onOpenDiscovery: () => void }> = ({ onOpenDiscovery }) => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// TRANSPARENT INVESTMENT</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          Predictable Pricing, Zero Hidden Fees
        </h2>
        <p className="text-xs md:text-sm font-mono text-white/60 mt-2">
          Har project fixed scope aur milestone billing par chalega. Koi surprise extra charges nahi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier 1 */}
        <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-white/50 uppercase block">// STARTER</span>
            <h3 className="text-2xl font-black uppercase tracking-tight mt-1">High-Impact Landing Page</h3>
            <div className="my-4">
              <span className="text-3xl font-black text-cyan-400">$800 – $1,500</span>
              <span className="text-xs text-white/40 font-mono block">Typical Delivery: 1–2 Weeks</span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-white/70 mb-6">
              <li>✓ Custom Next.js 15 Single-Page App</li>
              <li>✓ Sub-1 Second Page Load Guarantee</li>
              <li>✓ Fully Responsive Mobile-First Design</li>
              <li>✓ Contact Form + Email/WhatsApp Sync</li>
              <li>✓ Basic SEO & Analytics Setup</li>
            </ul>
          </div>
          <button
            onClick={onOpenDiscovery}
            className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase rounded-xl transition"
          >
            Configure Scope
          </button>
        </div>

        {/* Tier 2 - Featured */}
        <div className="bg-cyan-950/20 border-2 border-cyan-500/50 p-6 rounded-2xl flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
          <div className="absolute -top-3 right-6 bg-cyan-500 text-black font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            MOST POPULAR
          </div>
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase block">// FULL DIGITAL PLATFORM</span>
            <h3 className="text-2xl font-black uppercase tracking-tight mt-1">Web Application / E-Com</h3>
            <div className="my-4">
              <span className="text-3xl font-black text-cyan-400">$2,500 – $5,000</span>
              <span className="text-xs text-white/40 font-mono block">Typical Delivery: 3–5 Weeks</span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-white/80 mb-6">
              <li>✓ Multi-Page Next.js / React Architecture</li>
              <li>✓ Custom CMS / Admin Control Panel</li>
              <li>✓ Authentication, User Roles & Database</li>
              <li>✓ Payment Gateways (Stripe, Local Payments)</li>
              <li>✓ Advanced Animations (GSAP / Framer)</li>
              <li>✓ 30-Day Free Post-Launch Warranty</li>
            </ul>
          </div>
          <button
            onClick={onOpenDiscovery}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold uppercase rounded-xl transition"
          >
            Launch Scope Blueprint
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-white/50 uppercase block">// ENTERPRISE</span>
            <h3 className="text-2xl font-black uppercase tracking-tight mt-1">Custom Software & SaaS</h3>
            <div className="my-4">
              <span className="text-3xl font-black text-cyan-400">$5,000+</span>
              <span className="text-xs text-white/40 font-mono block">Custom Timeline & Sprints</span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-white/70 mb-6">
              <li>✓ Complex Workflows & Multi-tenant SaaS</li>
              <li>✓ Custom API Integrations & n8n Automation</li>
              <li>✓ Dedicated Staging Environments</li>
              <li>✓ High-Load Optimization & Microservices</li>
              <li>✓ SLA Support & Technical Maintenance</li>
            </ul>
          </div>
          <button
            onClick={onOpenDiscovery}
            className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase rounded-xl transition"
          >
            Custom Consultation
          </button>
        </div>
      </div>
    </section>
  );
};