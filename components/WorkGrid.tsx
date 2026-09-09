"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA as projectsData } from "@/data/projects";

// Type definition to satisfy TypeScript build
interface Project {
  id: string | number;
  subtitle: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  metrics: string;
  link: string;
}

const categories = ["ALL", "NEXT.JS / REACT", "WORDPRESS", "CUSTOM FRONTEND"];

export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState("ALL");

  // Typecast to ensure TypeScript treats it as an array
  const projectsList = (projectsData as unknown) as Project[];

  const filteredProjects =
    activeTab === "ALL"
      ? projectsList
      : projectsList.filter((project: Project) => project.category === activeTab);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm border transition-all duration-200 ${
              activeTab === category
                ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/20"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-10 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: ID & Title */}
              <div className="md:col-span-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-sm font-mono font-bold">
                    {project.id}
                  </span>
                  <span className="text-cyan-400 text-[10px] tracking-[0.2em] font-bold uppercase">
                    {project.subtitle}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>
              </div>

              {/* Middle Column: Description & Tags */}
              <div className="md:col-span-5 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-slate-300 text-[9px] tracking-widest px-2.5 py-1 uppercase rounded-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Metric & CTA */}
              <div className="md:col-span-2 flex flex-col items-start md:items-end justify-between h-full gap-4">
                <span className="text-emerald-400 text-xs font-mono font-semibold bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-sm">
                  {project.metrics}
                </span>
                
                <Link
                  href={project.link}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group-hover:translate-x-1 transition-all"
                >
                  DISCUSS <span className="text-base">→</span>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}