"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "WORK",
    href: "/work",
    subLinks: [
      { label: "ALL WORK", href: "/work" },
      { label: "CASE STUDIES", href: "/work#case-studies" },
    ],
  },
  { label: "SERVICES", href: "/services" },
  { label: "PROCESS", href: "/process" },
  { label: "INSIGHTS", href: "/insights" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* TOP HEADER BAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/60 px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between transition-colors">
        
        {/* PERSONAL BRAND LOGO */}
        <Link
          href="/"
          className="text-sm md:text-base font-black tracking-widest uppercase font-mono text-foreground hover:text-primary transition-colors"
        >
          JAMSHED KHAN<span className="text-primary">.</span>
        </Link>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* ALWAYS VISIBLE TOP-RIGHT CTA */}
          <Link
            href="/build"
            className="bg-primary hover:bg-primary-hover text-white text-[11px] md:text-xs font-bold font-mono px-4 py-2.5 md:px-5 md:py-3 tracking-[0.15em] uppercase transition-all duration-200 shadow-md shadow-primary/20"
          >
            MAKE BUILD →
          </Link>

          {/* MENU TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors py-2 px-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span className="hidden sm:inline">
              {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
            </span>
            <div className="w-6 h-4 flex flex-col justify-between items-end relative">
              <span
                className={`w-6 h-[2px] bg-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-4 h-[2px] bg-foreground transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-foreground transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>

        </div>
      </header>

      {/* FULLSCREEN OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
          
          {/* MAIN NAVIGATION LINKS */}
          <nav className="lg:col-span-8 flex flex-col space-y-2 md:space-y-4">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.label} className="group space-y-1">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-accent font-bold">
                      0{idx + 1}
                    </span>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>

                  {/* SUB-LINKS */}
                  {item.subLinks && (
                    <div className="pl-10 flex gap-6 pt-1">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xs font-mono text-muted hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-1.5"
                        >
                          <span className="text-accent">↳</span> {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* SIDEBAR: PROFESSIONAL BIO & CONTACT */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/60 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between space-y-8 font-mono">
            
            <div className="space-y-4">
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold block">
                DEVELOPER PROFILE
              </span>
              <p className="text-muted text-xs leading-relaxed">
                Web & Mobile Application Developer. Crafting high-performance digital experiences with a focus on clean architecture, modern frontend frameworks, and scalable technical solutions.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-[10px] font-bold tracking-widest uppercase block">
                DIRECT CONTACT
              </span>
              <a
                href="mailto:jamshed@example.com"
                className="text-xs md:text-sm font-bold text-foreground hover:text-primary transition-colors block underline decoration-border underline-offset-4"
              >
                jamshed@example.com
              </a>
            </div>

            <div className="pt-4 border-t border-border/40 flex justify-between items-center text-xs text-muted">
              <span>KARACHI, PK</span>
              <span>© {new Date().getFullYear()}</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}