"use client";
import { motion } from "framer-motion";

const skills = ["React Native", "Flutter", "Shopify", "WordPress", "Next.js", "SaaS", "UI/UX", "Tailwind CSS"];

export default function Skills() {
  return (
    <div className="py-10 bg-white/5 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 w-fit"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-3xl md:text-5xl font-bold text-gray-700 hover:text-blue-500 transition-colors uppercase">
            {skill} •
          </span>
        ))}
      </motion.div>
    </div>
  );
}