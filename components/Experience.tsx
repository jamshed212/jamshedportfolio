export default function Experience() {
  const experiences = [
    {
      period: "2022 — PRESENT",
      role: "SENIOR WEB DEVELOPER",
      company: "PortCity Traders",
      desc: "Leading web development projects for UK & Middle East clients. Building high-performance Next.js & Custom WordPress sites.",
      skills: ["React", "Next.js", "WordPress", "SEO", "Tailwind CSS"],
    },
    {
      period: "2020 — 2022",
      role: "WEB DEVELOPER & PRODUCT MANAGER",
      company: "Its Digital House",
      desc: "Managed end-to-end website delivery and client communication. Built bespoke digital experiences using modern stacks.",
      skills: ["React", "WordPress", "Elementor", "Node.js", "GSAP"],
    },
    {
      period: "2018 — 2020",
      role: "FRONTEND DEVELOPER",
      company: "Freelance / Remote",
      desc: "Crafted clean, responsive web user interfaces and interactive components for international clients.",
      skills: ["JavaScript", "HTML/CSS", "Bootstrap", "WordPress"],
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-3 block">
            CAREER PATH
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">
            EXPERIENCE
          </h2>
        </div>

        {/* Timeline List */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-white/[0.01] transition-colors"
            >
              {/* Date Column */}
              <div className="md:col-span-3">
                <span className="text-slate-500 text-xs tracking-[0.2em] font-semibold uppercase">
                  {exp.period}
                </span>
              </div>

              {/* Content Column */}
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-wider">
                  {exp.role}{" "}
                  <span className="text-cyan-400 font-bold text-lg">
                    @ {exp.company}
                  </span>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-white/10 text-slate-400 text-[10px] tracking-widest px-3 py-1 uppercase rounded-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}