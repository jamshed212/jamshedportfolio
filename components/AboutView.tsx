"use client";

import { motion } from "framer-motion";
import { statsData, experienceData, skillCategories } from "@/data/about";

export default function AboutView() {
  return (
    <div className="space-y-24">
      
      {/* Stats Counter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white/[0.02] border border-white/10 rounded-sm p-8 text-center md:text-left"
          >
            <div className="text-4xl md:text-5xl font-black text-cyan-400 font-mono mb-2">
              {stat.value}
            </div>
            <div className="text-slate-400 text-xs tracking-[0.2em] font-bold uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline Section */}
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-6">
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold mb-2 block">
            CAREER PATHWAY
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            WORK EXPERIENCE
          </h2>
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-10 hover:border-cyan-400/50 transition-all group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Period & ID */}
                <div className="md:col-span-4 space-y-2">
                  <span className="text-cyan-400 text-xs font-mono font-bold block">
                    {item.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    @ {item.company}
                  </p>
                </div>

                {/* Description & Tags */}
                <div className="md:col-span-8 space-y-4">
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 border border-white/10 text-slate-300 text-[9px] tracking-widest px-2.5 py-1 uppercase rounded-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Matrix Section */}
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-6">
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold mb-2 block">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            SKILLS & TOOLING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/10 rounded-sm p-8 space-y-6"
            >
              <h3 className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase border-b border-white/5 pb-4">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-slate-300 text-xs md:text-sm flex items-center gap-2"
                  >
                    <span className="text-cyan-400 font-bold">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}