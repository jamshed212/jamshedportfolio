import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    brief: "React, Next.js & modern frontend — fast, scalable, production-ready.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "WordPress & CMS",
    brief: "Custom WordPress, Elementor, Shopify & Squarespace builds.",
    href: "/services/wordpress-cms",
  },
  {
    number: "03",
    title: "SEO & Performance",
    brief: "Technical audits, Core Web Vitals, GSC & PageSpeed optimization.",
    href: "/services/seo-performance",
  },
  {
    number: "04",
    title: "UI/UX & Animations",
    brief: "Pixel-perfect interfaces with Framer Motion & GSAP animations.",
    href: "/services/ui-ux",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase mb-3 block">
              What I Do
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
              SERVICES
            </h2>
          </div>
          <Link
            href="/services"
            className="text-muted hover:text-primary text-xs tracking-widest uppercase transition-colors duration-200 hidden md:block"
          >
            All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group bg-surface p-8 hover:bg-surface-2 transition-colors duration-300"
            >
              <span className="text-muted/20 text-4xl font-black font-mono block mb-4">
                {service.number}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {service.brief}
              </p>
              <span className="text-accent text-xs tracking-widest uppercase group-hover:translate-x-1 inline-block transition-transform duration-200">
                Learn More 
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/services"
            className="text-muted hover:text-primary text-xs tracking-widest uppercase transition-colors duration-200"
          >
            All Services →
          </Link>
        </div>

      </div>
    </section>
  );
}