"use client";

import React, { useState } from 'react';
// In import lines at top:
import { ProjectDiscoveryState } from '../../types/discovery';
import { calculateComplexity, estimateTimelineWindow } from '../../lib/discovery-engine';

interface LiveBlueprintPanelProps {
  state: ProjectDiscoveryState;
  onNavigateToStep?: (stepIndex: number) => void;
}

export const LiveBlueprintPanel: React.FC<LiveBlueprintPanelProps> = ({ state, onNavigateToStep }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { score, tier } = calculateComplexity(state);
  const timeline = estimateTimelineWindow(state);

  const formatProjectType = (type: string) => {
    return type.replace(/_/g, ' ');
  };

  const Content = (
    <div className="space-y-6 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-cyan-400 font-bold tracking-widest uppercase">// LIVE_BLUEPRINT</span>
        <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
          REV-2026
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-white/40 block text-[10px] uppercase tracking-wider">PROJECT TYPE</span>
          <span className="text-white font-medium text-sm">
            {state.projectType ? formatProjectType(state.projectType) : 'NOT SELECTED'}
          </span>
        </div>

        <div>
          <span className="text-white/40 block text-[10px] uppercase tracking-wider">PRIMARY OBJECTIVE</span>
          <span className="text-white/90">
            {state.objectives.length > 0 ? state.objectives.join(', ') : 'Pending Input'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
          <div>
            <span className="text-white/40 block text-[10px] uppercase">FEATURES</span>
            <span className="text-cyan-400 font-semibold">{state.selectedFeatures.length} Selected</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase">INTEGRATIONS</span>
            <span className="text-cyan-400 font-semibold">{state.selectedIntegrations.length} External</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-white/40 uppercase">COMPLEXITY SCORE</span>
            <span className="text-blue-400">{score}% ({tier})</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-500 ease-out"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
          <div>
            <span className="text-white/40 block text-[10px] uppercase">EST. TIMELINE</span>
            <span className="text-white">{timeline}</span>
          </div>
          <div>
            <span className="text-white/40 block text-[10px] uppercase">INVESTMENT</span>
            <span className="text-white">{state.investmentRange.replace(/_/g, ' ')}</span>
          </div>
        </div>
      </div>

      {state.step > 0 && state.step < 14 && onNavigateToStep && (
        <button
          onClick={() => onNavigateToStep(13)}
          className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 rounded transition text-center text-[11px] uppercase tracking-wider"
        >
          Jump to Review →
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Panel */}
      <aside className="hidden lg:block w-80 sticky top-24 self-start bg-[#080b11] border border-white/10 rounded-xl p-5 shadow-2xl backdrop-blur-md">
        {Content}
      </aside>

      {/* Mobile Sticky Drawer Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080b11] border-t border-white/10 p-3 flex justify-between items-center shadow-2xl">
        <div>
          <span className="text-[10px] font-mono text-white/40 uppercase block">PROJECT BLUEPRINT</span>
          <span className="text-xs font-mono font-bold text-cyan-400">
            {state.selectedFeatures.length} Features | {score}% Complexity
          </span>
        </div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="px-3 py-1.5 bg-blue-600 text-white font-mono text-xs rounded uppercase tracking-wider"
        >
          {isMobileOpen ? 'Close' : 'View Scope'}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-[#0a0e17] border-t border-white/15 p-6 rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">// BLUEPRINT SUMMARY</span>
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="text-white/50 text-sm font-mono"
              >
                ✕ CLOSE
              </button>
            </div>
            {Content}
          </div>
        </div>
      )}
    </>
  );
};