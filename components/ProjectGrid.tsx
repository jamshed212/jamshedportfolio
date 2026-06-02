"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: "01", title: "BATHIA OCEAN GOLD (BOG)", desc: "Agro-Mining & Metals", detail: "Developed a secure digital ecosystem for trading gold, silver, copper, and minerals alongside agro-mining resources.", color: "#FFD700" },
  { id: "02", title: "ITS DIGITAL HOUSE", desc: "Creative Digital Agency", detail: "Founded and architected a full-service agency focusing on website development, social media, and digital branding strategies.", color: "#8B5CF6" },
  { id: "03", title: "PORTCITY TRADERS", desc: "Import & Export Firm", detail: "Engineered a specialized trading platform for the import and export of raw agro materials and industrial commodities.", color: "#3B82F6" },
  { id: "04", title: "XOX JEWELS", desc: "High-End E-Commerce", detail: "Built a luxury jewelry platform with complex category mapping for products appearing in both chains and bracelets.", color: "#ff2d55" },
  { id: "05", title: "KHAKI & CO", desc: "Real Estate & Construction", detail: "Developed a professional digital presence for a firm specializing in real estate deals and building material supplies.", color: "#c2b280" },
  { id: "06", title: "HIPPO CEMENT", desc: "Industrial Manufacturing", detail: "Created technical product sections and custom material calculators for a leading cement and construction supplier.", color: "#808080" },
  { id: "07", title: "YOURSTAILOR", desc: "Luxury Bespoke Fashion", detail: "Crafted an interactive branding experience and digital portfolio for a premium luxury tailoring brand.", color: "#ffffff" },
  { id: "08", title: "MIDDLE EAST B2B", desc: "International Outreach", detail: "Led strategic B2B sales outreach and lead generation campaigns for the Middle East and UK markets using advanced scraping tools.", color: "#00ff88" }
];

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="relative w-full bg-[#020202] py-12 md:py-24 overflow-hidden font-sans border-t border-white/5 select-none">
      
      <div className="container mx-auto px-6 md:px-10 mb-8 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" />
            <h2 className="text-zinc-500 font-mono text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1em] uppercase">
                Complete_Client_Archive_2026
            </h2>
        </div>
      </div>

      <div className="relative border-y border-white/5 py-10 md:py-20 flex items-center bg-zinc-900/5">
        <div 
          className="flex items-center gap-20 md:gap-40 whitespace-nowrap animate-marquee"
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '35s' 
          }}
        >
          {duplicatedProjects.map((project, i) => (
            <div 
              key={i} 
              // FIXED DETECTION: Using PointerEvents for better accuracy
              onPointerOver={() => { setHoveredProject(project); setIsPaused(true); }}
              onPointerLeave={() => { setHoveredProject(null); setIsPaused(false); }}
              className="relative flex items-center gap-6 md:gap-12 group cursor-crosshair px-4"
            >
              {/* Invisible Hitbox: Isse mouse kabhi miss nahi hoga */}
              <div className="absolute inset-0 z-10 scale-y-150" />

              <span className="text-zinc-800 font-mono text-xl md:text-3xl group-hover:text-blue-500 transition-colors z-20">
                {project.id}
              </span>
              <h3 className="text-zinc-300 text-3xl sm:text-5xl md:text-9xl font-black italic tracking-tighter uppercase transition-all duration-500 group-hover:text-white group-hover:skew-x-[-8deg] z-20">
                {project.title}
              </h3>
              <div className="w-16 md:w-32 h-[1px] bg-zinc-900 group-hover:bg-blue-500/50 transition-all duration-700 z-20" />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-4 md:p-0 pointer-events-none"
          >
            <div className="w-full max-w-[550px] bg-zinc-950/95 backdrop-blur-3xl border border-white/10 p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_120px_rgba(0,0,0,0.9)] relative">
               <div 
                 className="absolute -top-32 -right-32 w-48 md:w-80 h-48 md:h-80 rounded-full blur-[80px] md:blur-[120px] opacity-20"
                 style={{ background: hoveredProject.color }}
               />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <p className="text-blue-500 font-mono text-[8px] md:text-[10px] tracking-[0.5em] uppercase">
                      Node_{hoveredProject.id}
                    </p>
                  </div>

                  <h4 className="text-white text-2xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 md:mb-6 leading-none">
                    {hoveredProject.title}
                  </h4>
                  
                  <div className="mb-6 md:mb-8">
                    <p className="text-zinc-400 text-xs md:text-base font-medium leading-relaxed italic">
                      "{hoveredProject.detail}"
                    </p>
                  </div>
                  
                  <div className="pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{hoveredProject.desc}</span>
                    <span className="text-white text-[8px] md:text-[10px] font-mono animate-pulse">LOCKED</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}