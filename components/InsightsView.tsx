"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { insightsData } from "@/data/insights";

const categories = ["ALL", "NEXT.JS", "CMS", "MOTION UI", "PERFORMANCE"];

export default function InsightsView() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredArticles =
    activeCategory === "ALL"
      ? insightsData
      : insightsData.filter((article) => article.category === activeCategory);

  const featuredArticle = insightsData.find((item) => item.featured);

  return (
    <div className="space-y-16">
      
      {/* Featured Highlight Banner */}
      {featuredArticle && activeCategory === "ALL" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.02] border border-cyan-400/30 rounded-sm p-8 md:p-12 hover:border-cyan-400/60 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-cyan-400 text-black text-[10px] font-bold tracking-[0.2em] px-4 py-1 uppercase">
            FEATURED ARTICLE
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-cyan-400 font-bold uppercase tracking-wider">
                {featuredArticle.category}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{featuredArticle.date}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{featuredArticle.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              {featuredArticle.title}
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {featuredArticle.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {featuredArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/10 text-slate-300 text-[9px] tracking-widest px-2.5 py-1 uppercase rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
              >
                READ ARTICLE <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm border transition-all duration-200 ${
              activeCategory === category
                ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/20"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white/[0.02] border border-white/10 rounded-sm p-8 hover:border-cyan-400/50 transition-all group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-slate-500">{article.readTime}</span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {article.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/10 text-slate-400 text-[9px] tracking-widest px-2.5 py-1 uppercase rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-600 text-xs font-mono">
                  {article.date}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group-hover:translate-x-1 transition-all"
                >
                  READ <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}