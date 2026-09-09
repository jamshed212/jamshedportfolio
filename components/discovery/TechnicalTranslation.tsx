"use client";

import React from 'react';
// In import lines at top:
import { ProjectDiscoveryState } from '../../types/discovery';
import { translateRequirementsToTech } from '../../lib/discovery-engine';

export const TechnicalTranslation: React.FC<{ state: ProjectDiscoveryState }> = ({ state }) => {
  const tech = translateRequirementsToTech(state);

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STEP 09: TECHNICAL ARCHITECTURE</span>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1">
          Requirement to Stack Translation
        </h2>
        <p className="text-xs font-mono text-white/50 mt-1">
          "Your requirements define the problem. Final architecture is validated during technical discovery."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
        <div className="bg-white/[0.02] border border-white/10 p-4 rounded-lg">
          <span className="text-[10px] text-white/40 uppercase block mb-2">01. BUSINESS REQUIREMENTS</span>
          <ul className="space-y-2 text-xs text-white/80">
            {tech.requirements.map((req: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-blue-400">›</span> {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-4 rounded-lg">
          <span className="text-[10px] text-cyan-400 uppercase block mb-2">02. FRONTEND & API LAYER</span>
          <ul className="space-y-2 text-xs text-white/80">
            {tech.frontendStack.map((item: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-4 rounded-lg">
          <span className="text-[10px] text-blue-400 uppercase block mb-2">03. BACKEND & DATA INFRA</span>
          <ul className="space-y-2 text-xs text-white/80">
            {tech.backendStack.concat(tech.databaseStack).map((item: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-blue-400">⚡</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};