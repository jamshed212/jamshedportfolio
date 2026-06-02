"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "Journey" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.5 });

    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-center gap-24 z-[100] border-r border-white/5 bg-[#020617]/50 backdrop-blur-md">
      {navLinks.map((link) => (
        <a 
          key={link.id} 
          href={`#${link.id}`} 
          className="relative -rotate-90 whitespace-nowrap flex items-center group"
        >
          {/* Active Dot */}
          <div className={`absolute -left-6 w-1.5 h-1.5 rounded-full transition-all duration-500 ${active === link.id ? 'bg-blue-500 scale-150 shadow-[0_0_10px_#3b82f6]' : 'bg-transparent'}`} />
          
          <span className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${active === link.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  );
}