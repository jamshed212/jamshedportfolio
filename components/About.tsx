"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="aspect-square bg-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden"
        >
          {/* Yahan aapki cool animated profile picture ya koi abstract shape aayegi */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent" />
          <span className="text-blue-200 text-[15rem] font-black opacity-10 uppercase absolute -bottom-10 -right-10 leading-none select-none">
            22
          </span>
          <p className="text-blue-600 font-mono text-xl z-10 font-bold tracking-widest">AQUARIUS BORN.</p>
        </motion.div>
      </div>

      <div>
        <h3 className="text-blue-600 font-mono text-sm uppercase tracking-widest mb-4">01 — The Mindset</h3>
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8 tracking-tighter">
          I don’t just write code. <br /> I architect <span className="italic text-blue-600">solutions.</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Founded on the principle of high-performance digital architecture, I've spent years helping brands like <strong>BOG</strong> and <strong>PortCity Traders</strong> scale through modern tech stacks.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
          "Innovating from the edge, born under the sign of progress."
        </p>
      </div>
    </section>
  );
}