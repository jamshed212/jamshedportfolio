"use client";
import { motion } from "framer-motion";

const works = [
  { title: "BOG (Bathia Ocean Gold)", desc: "Mining & Mineral Ecosystem", img: "/gold.jpg" },
  { title: "PortCity Traders", desc: "Agro-Trade Import/Export", img: "/port.jpg" },
  { title: "Hippo Cement", desc: "Construction Inventory Logic", img: "/cement.jpg" }
];

export default function Projects() {
  return (
    <section id="work" className="py-40 bg-[#020617] px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-8xl font-black text-white/5 uppercase mb-20">Selected Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {works.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative h-[600px] bg-gray-900 overflow-hidden group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute bottom-10 left-10 z-20">
                <h4 className="text-3xl font-black uppercase text-white">{item.title}</h4>
                <p className="text-blue-500 font-mono text-xs uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}