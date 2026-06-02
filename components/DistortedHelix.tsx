"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Web Architect", desc: "Next-gen web systems built with sub-second latency." },
  { id: "02", title: "App Engineer", desc: "Monolithic & hybrid mobile solutions for seamless interaction." },
  { id: "03", title: "SaaS Systems", desc: "Scalable automated business ecosystems built for performance." },
  { id: "04", title: "E-Com Expert", desc: "High-conversion Shopify & WP stores that dominate sales." },
];

export default function DistortedHelix() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".helix-card");

    // Timeline optimized for smooth scrubbing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1, // Fixed scrub for better performance
        anticipatePin: 1, // Pinning lag ko khatam karta hai
      },
    });

    cards.forEach((card: any, i) => {
      // GPU Hardware Acceleration layers enable ki hain
      gsap.set(card, { 
        opacity: 0, 
        scale: 0.5, 
        z: -500, 
        force3D: true, // GPU trigger
        backfaceVisibility: "hidden" 
      });

      tl.to(card, {
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 1.5,
        ease: "power2.out",
      }, i * 1.2)
      .to(card, {
        opacity: 0,
        scale: 1.1, // Zoom out ko limit kiya responsive ke liye
        z: 300,
        duration: 1,
        ease: "power2.in"
      }, (i + 0.6) * 1.2);
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      
      {/* Optimized Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Perspective Wrapper with Dynamic Scale */}
      <div className="relative z-[99] w-full max-w-4xl h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
        {services.map((service, i) => (
          <div 
            key={service.id} 
            className="helix-card absolute w-[90%] md:w-[650px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-blue-600/30 p-8 md:p-16 rounded-[24px] md:rounded-[40px] shadow-[0_0_60px_rgba(37,99,235,0.15)] will-change-transform"
          >
             <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">
               Module_0{service.id}
             </span>
             <h4 className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase italic mb-4 leading-none tracking-tighter">
               {service.title}
             </h4>
             <p className="text-zinc-500 text-sm md:text-xl font-medium leading-relaxed max-w-md">
               {service.desc}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
}