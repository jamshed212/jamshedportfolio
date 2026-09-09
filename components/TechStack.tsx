export default function TechStack() {
  const skillCategories = [
    {
      category: "DEVELOPMENT",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    },
    {
      category: "CMS & PLATFORMS",
      skills: ["WordPress", "Elementor", "Shopify", "Squarespace"],
    },
    {
      category: "DESIGN & ANIMATION",
      skills: ["Figma", "UI/UX Design", "Framer Motion", "CSS3 / Canvas"],
    },
    {
      category: "TECHNICAL & SEO",
      skills: ["SEO", "GSC", "PageSpeed", "Ahrefs", "Git & Vercel"],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">
            FAVORITE TOOLS
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">
            SKILLS
          </h2>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
          {skillCategories.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-cyan-400 text-[11px] tracking-[0.2em] font-bold uppercase mb-6">
                {col.category}
              </h3>
              <ul className="space-y-3">
                {col.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-300 text-sm md:text-base font-medium hover:text-white transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}