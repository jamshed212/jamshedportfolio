"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // 1. Initial Setup
    gsap.set(".word-mask", { y: "110%" });
    gsap.set(".char-3d", { opacity: 0, scale: 1.5, filter: "blur(15px)", y: 50 });

    // 2. The "Explosion" Reveal
    tl.to(".char-3d", {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.8,
      stagger: { each: 0.04, from: "start" },
      ease: "expo.inOut"
    })
    .to(".word-mask", {
      y: "0%",
      duration: 1,
      stagger: 0.1
    }, "-=1.2");

    // 3. Dynamic Interaction (Mouse-Reactive Tracking)
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5);
      const yPercent = (clientY / window.innerHeight - 0.5);

      // Background text moves opposite to create depth
      gsap.to(bgTextRef.current, {
        x: -xPercent * 60,
        y: -yPercent * 60,
        duration: 1.5,
        ease: "power2.out"
      });

      // Character-specific light following
      gsap.to(".char-3d", {
        textShadow: `${-xPercent * 25}px ${-yPercent * 25}px 40px rgba(59, 130, 246, 0.4)`,
        duration: 0.6
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, { scope: container });

  const renderText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char-3d inline-block will-change-transform tracking-[-0.05em]">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={container} className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center bg-[#000] overflow-hidden pt-20">
      
      {/* BACKGROUND LAYER: Ghost Text */}
      <div 
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none"
      >
        <h1 className="text-[35vw] font-black leading-none text-white whitespace-nowrap italic">
          2026_CORE
        </h1>
      </div>

      {/* MAIN CONTENT LAYER */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-24 lg:px-32">
        
        {/* FIRST LINE */}
        <div className="flex flex-col items-start overflow-visible">
          <h1 className="text-[18vw] md:text-[14vw] lg:text-[12rem] font-[1000] leading-[0.75] text-white uppercase italic">
            {renderText("CREATING")}
          </h1>
        </div>

        {/* SECOND LINE: Liquid Gradient */}
        <div className="flex flex-col items-end overflow-visible mt-2 md:mt-4">
          <h1 
            className="text-[18vw] md:text-[14vw] lg:text-[12rem] font-[1000] leading-[0.75] uppercase italic"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #ffffff 10%, #3b82f6 50%, #ffffff 90%)",
              backgroundSize: "200% auto",
              animation: "gradient-move 6s linear infinite"
            }}
          >
            {renderText("IMPACT.")}
          </h1>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
          <div className="md:col-span-8">
            <div className="overflow-hidden">
              <div className="word-mask">
                <p className="text-zinc-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl leading-snug">
                  Architecting <span className="text-white italic">unconventional digital systems</span> that transcend modern web standards.
                </p>
              </div>
            </div>
            
            <div className="overflow-hidden mt-8">
              <div className="word-mask">
                <button className="relative px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Launch Prototype</span>
                  <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
              </div>
            </div>
          </div>

          {/* SYSTEM INFO (Hidden on very small screens) */}
          <div className="md:col-span-4 hidden sm:flex flex-col items-end opacity-30">
            <div className="text-right font-mono text-[9px] text-blue-400 space-y-1 tracking-widest uppercase">
              <p>LOC: Karachi_Hub</p>
              <p>STATUS: ACTIVE</p>
              <p>V: 3.0.1_STABLE</p>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes gradient-move {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}