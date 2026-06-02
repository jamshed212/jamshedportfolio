"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Web Architecture", desc: "Next-gen web systems built with sub-second latency and unconventional UI.", tech: ["React", "Next.js", "GSAP"] },
  { id: "02", title: "App Engineering", desc: "Hybrid and native mobile solutions that provide seamless user experiences.", tech: ["Flutter", "React Native", "Firebase"] },
  { id: "03", title: "E-Commerce Expert", desc: "High-conversion Shopify and WordPress stores built for scale.", tech: ["Shopify", "WordPress", "WooCommerce"] },
  { id: "04", title: "Growth & SEO", desc: "Data-driven strategies that dominate search engines and drive traffic.", tech: ["SEO", "Analytics", "Marketing"] },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".service-card");

    cards.forEach((card: any, i) => {
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          endTrigger: container.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      // Text reveal animation inside cards
      gsap.from(card.querySelectorAll(".reveal-text"), {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-[#020617] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Sticky Heading */}
        <div className="mb-32">
          <h2 className="text-blue-500 font-mono tracking-[1em] mb-4 uppercase text-sm">// Capabilities</h2>
          <h3 className="text-white text-6xl md:text-8xl font-black uppercase italic leading-none">
            Selected <br /> <span className="text-blue-600">Expertise.</span>
          </h3>
        </div>

        {/* Cards Stack */}
        <div className="space-y-[30vh]">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card sticky top-[15vh] w-full h-[60vh] md:h-[500px] bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              <div className="relative z-10 w-full md:w-2/3">
                <span className="reveal-text block text-blue-600 font-mono text-xl mb-6">[{service.id}]</span>
                <h4 className="reveal-text text-white text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
                  {service.title}
                </h4>
                <p className="reveal-text text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                  {service.desc}
                </p>
                <div className="reveal-text flex flex-wrap gap-3">
                  {service.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full uppercase tracking-widest bg-blue-500/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimalist Visual (Circle Gradient) */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all" />
              
              <div className="hidden md:block text-white/5 text-[15rem] font-black absolute right-10 bottom-[-40px] select-none leading-none">
                {service.id}
              </div>
            </div>
          ))}
        </div>

        {/* Space for bottom */}
        <div className="h-[20vh]" />
      </div>
    </section>
  );
}