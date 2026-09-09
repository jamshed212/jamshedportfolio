import Link from "next/link";

const servicesList = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    desc: "React, Next.js & modern frontend — fast, scalable, production-ready.",
  },
  {
    num: "02",
    title: "WORDPRESS & CMS",
    desc: "Custom WordPress, Elementor, Shopify & Squarespace builds.",
  },
  {
    num: "03",
    title: "SEO & PERFORMANCE",
    desc: "Technical audits, Core Web Vitals, GSC & PageSpeed optimization.",
  },
  {
    num: "04",
    title: "UI/UX & ANIMATIONS",
    desc: "Pixel-perfect interfaces with Framer Motion & GSAP animations.",
  },
];

export default function Services() {
  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">
              WHAT I DO
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">
              SERVICES
            </h2>
          </div>
          <Link
            href="/services"
            className="text-slate-400 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center gap-2 pb-2"
          >
            ALL SERVICES <span className="text-cyan-400">→</span>
          </Link>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 md:gap-x-24 border-t border-white/10 pt-12 md:pt-16 relative">
          
          {/* Optional Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-16 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2" />

          {servicesList.map((service, index) => (
            <div key={index} className="flex flex-col group relative">
              <span className="text-slate-600 text-xl font-medium mb-4 transition-colors group-hover:text-cyan-400">
                {service.num}
              </span>
              <h3 className="text-white text-lg font-black tracking-wide uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                {service.desc}
              </p>
              <Link
                href="/services"
                className="mt-auto text-cyan-400 text-[10px] tracking-[0.2em] uppercase font-bold hover:text-cyan-300 transition-colors flex items-center gap-2 w-max"
              >
                LEARN MORE <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}