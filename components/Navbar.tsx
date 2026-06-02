"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-20 py-8 flex justify-between items-center transition-all duration-300">
      {/* Background Shadow taake white text nazar aaye */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-transparent opacity-90 pointer-events-none -z-10 h-32" />

      {/* Brand Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-black tracking-tighter uppercase text-white">
          JAMSHED
        </h1>
        <span className="text-[9px] tracking-[0.4em] text-accent uppercase font-bold">
          Systems Architect
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        
        <button className="border border-accent/40 bg-accent/5 px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-accent hover:text-white transition-all rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          Start Project
        </button>
      </div>
    </nav>
  );
}