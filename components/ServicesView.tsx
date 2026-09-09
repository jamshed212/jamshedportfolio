"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData, faqsData } from "@/data/services";

export default function ServicesView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-24">
      {/* Services Breakdown List */}
      <div className="space-y-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 hover:border-cyan-400/50 transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Header Info */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 font-mono text-sm font-bold">
                    {service.id}
                  </span>
                  <span className="text-cyan-400 text-[10px] tracking-[0.2em] font-bold uppercase">
                    {service.tagline}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Internal SEO Link to Work Category */}
                <div className="pt-2">
                  <Link
                    href={`/work`}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300"
                  >
                    VIEW RELATED PROJECTS <span className="text-base">→</span>
                  </Link>
                </div>
              </div>

              {/* Deliverables & Tech Stack */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.01] border border-white/5 p-6 rounded-sm">
                <div>
                  <h3 className="text-white text-xs tracking-[0.2em] font-bold uppercase mb-4 text-cyan-400">
                    KEY DELIVERABLES
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-300 text-xs md:text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white text-xs tracking-[0.2em] font-bold uppercase mb-4 text-cyan-400">
                    TECH STACK USED
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/5 border border-white/10 text-slate-300 text-[10px] tracking-widest px-3 py-1 uppercase rounded-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Accordion Section for SEO Content Depth */}
      <div className="border-t border-white/10 pt-20">
        <div className="mb-12">
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
            FREQUENTLY ASKED
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqsData.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-sm bg-white/[0.01] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white text-sm md:text-base font-bold tracking-wide">
                  {faq.question}
                </span>
                <span className="text-cyan-400 text-xl font-bold">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}