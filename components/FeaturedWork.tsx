import Link from "next/link";

const featured = [
  {
    id: "01",
    title: "BOG International",
    category: "WordPress • Elementor",
    description: "Gold mining & minerals trading company — Uganda.",
    href: "/work/bog-international",
    tags: ["WordPress", "SEO", "Elementor"],
  },
  {
    id: "02",
    title: "Its Digital House",
    category: "React • Next.js",
    description: "Full-service agency website targeting UK market.",
    href: "/work/its-digital-house",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: "03",
    title: "Khaaki Luxury Estates",
    category: "HTML • CSS • JS",
    description: "Luxury real estate — PageSpeed 64 to 88.",
    href: "/work/khaaki-luxury-estates",
    tags: ["HTML", "Vercel", "PageSpeed"],
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase mb-3 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
              PROJECTS
            </h2>
          </div>
          <Link
            href="/work"
            className="text-muted hover:text-primary text-xs tracking-widest uppercase transition-colors duration-200 hidden md:block"
          >
            All Work →
          </Link>
        </div>

        <div className="divide-y divide-border">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group flex flex-col md:flex-row md:items-center gap-4 py-8 hover:bg-surface/20 transition-colors duration-300 px-2"
            >
              <span className="text-muted/30 text-xs font-mono w-8 shrink-0">
                {project.id}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-accent text-xs tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
              <p className="text-muted text-sm hidden md:block max-w-xs">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap md:w-40 shrink-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest uppercase px-2 py-1 border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/work"
            className="text-muted hover:text-primary text-xs tracking-widest uppercase transition-colors duration-200"
          >
            All Work →
          </Link>
        </div>

      </div>
    </section>
  );
}