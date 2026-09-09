import Link from "next/link";

const projectsList = [
  {
    num: "01",
    title: "BOG INTERNATIONAL",
    subtitle: "WORDPRESS + ELEMENTOR",
    desc: "Gold mining & minerals trading company — Uganda.",
    tags: ["WORDPRESS", "SEO", "ELEMENTOR"],
    href: "/projects",
  },
  {
    num: "02",
    title: "ITS DIGITAL HOUSE",
    subtitle: "REACT + NEXT.JS",
    desc: "Full-service agency website targeting UK market.",
    tags: ["REACT", "TAILWIND", "FRAMER MOTION"],
    href: "/projects",
  },
  {
    num: "03",
    title: "KHAAKI LUXURY ESTATES",
    subtitle: "HTML + CSS + JS",
    desc: "Luxury real estate — PageSpeed 94 to 98.",
    tags: ["HTML", "VERCEL", "PAGESPEED"],
    href: "/projects",
  },
];

export default function Projects() {
  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">
              PROJECTS
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-slate-400 hover:text-white text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center gap-2 pb-2"
          >
            ALL WORK <span className="text-cyan-400">→</span>
          </Link>
        </div>

        {/* List View */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {projectsList.map((project) => (
            <div
              key={project.num}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white/[0.02] transition-colors px-2"
            >
              {/* Left Title & Num */}
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="text-slate-600 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                  {project.num}
                </span>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-[11px] tracking-[0.2em] uppercase mt-1 font-semibold">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-slate-400 text-sm font-normal">
                  {project.desc}
                </p>
              </div>

              {/* Tags & Link */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-slate-400 text-[9px] tracking-widest px-2.5 py-1 uppercase rounded-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  aria-label={`View ${project.title}`}
                  className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}