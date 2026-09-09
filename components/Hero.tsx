"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const words = ["DIGITAL", "IMPACT.", "RESULTS."];
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      if (wordRef.current) {
        wordRef.current.style.opacity = "0";
        wordRef.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (wordRef.current) {
            wordRef.current.textContent = words[indexRef.current];
            wordRef.current.style.opacity = "1";
            wordRef.current.style.transform = "translateY(0)";
          }
        }, 300);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-24">

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase">
            Available for Projects
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.9] tracking-tighter uppercase">
            <span className="text-foreground block">CREATING</span>
            <span
              ref={wordRef}
              className="block"
              style={{
                backgroundImage: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                opacity: 1,
              }}
            >
              DIGITAL
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-muted text-base md:text-lg max-w-lg mb-10 leading-relaxed">
          Senior Web Developer crafting high-performance websites for{" "}
          <span className="text-foreground font-medium">UK & Middle East</span>{" "}
          clients. React, Next.js, WordPress & SEO.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white text-xs px-7 py-3.5 tracking-widest uppercase transition-colors duration-200 font-medium"
          >
            Build Brief
          </Link>
          <Link
            href="/work"
            className="border border-border-light hover:border-primary text-muted hover:text-foreground text-xs px-7 py-3.5 tracking-widest uppercase transition-all duration-200"
          >
            View Work
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 md:gap-16">
          {[
            { number: "6+", label: "Years Experience" },
            { number: "30+", label: "Projects Delivered" },
            { number: "3", label: "Markets Served" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-black text-foreground leading-none">
                {stat.number}
              </span>
              <span className="text-muted text-[10px] tracking-[0.25em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12">
        <div className="flex justify-between items-center">
          <span className="text-muted/50 text-[10px] tracking-widest uppercase">
            LOC: KARACHI, PK
          </span>
          <span className="text-muted/50 text-[10px] tracking-widest uppercase">
            STATUS: <span className="text-accent">ACTIVE</span>
          </span>
          <span className="text-muted/50 text-[10px] tracking-widest uppercase hidden md:block">
            EST. 2018
          </span>
        </div>
      </div>

    </section>
  );
}