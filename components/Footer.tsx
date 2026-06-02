"use client";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Name Part */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold tracking-tighter text-xl uppercase">
              Jamshed <span className="text-blue-600">Khan.</span>
            </h4>
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest mt-1">
              Building Digital Excellence
            </p>
          </div>

          {/* Navigation / Back to top */}
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="text-gray-500 hover:text-white font-mono text-[10px] uppercase tracking-[0.5em] transition-all group"
            >
              [ Back to Top <span className="inline-block group-hover:-translate-y-1 transition-transform">↑</span> ]
            </button>
            <p className="text-gray-800 font-mono text-[9px] mt-4 uppercase">
              Karachi, Pakistan — 2026
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}