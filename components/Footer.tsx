"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-8 px-6 md:px-12 border-t border-white/10 text-slate-500 text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand / Designation */}
        <div className="flex items-center gap-3">
          <span className="text-white font-black tracking-widest text-sm uppercase">
            JAMSHED
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 uppercase tracking-wider text-[11px]">
            WEB DEVELOPER
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-slate-500 tracking-wider">
          © {new Date().getFullYear()} JAMSHED KHAN. ALL RIGHTS RESERVED.
        </div>

        {/* Right: Quick Links / Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-[11px]"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-[11px]"
          >
            GITHUB
          </a>
          <button
            onClick={scrollToTop}
            className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-bold text-[11px] flex items-center gap-1 ml-2"
          >
            TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
}