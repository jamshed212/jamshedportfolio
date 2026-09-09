"use client";

import React from 'react';
import { ProjectDiscoveryState } from '@/types/discovery';
import { calculateComplexity, estimateTimelineWindow } from '@/lib/discovery-engine';

interface BlueprintSummaryProps {
  state: ProjectDiscoveryState;
  onEditStep: (stepNumber: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const BlueprintSummary: React.FC<BlueprintSummaryProps> = ({
  state,
  onEditStep,
  onSubmit,
  isSubmitting,
}) => {
  const complexity = calculateComplexity(state);
  const estimatedTimeline = estimateTimelineWindow(state);

  return (
    <div className="space-y-8 max-w-4xl mx-auto text-white">
      {/* Header */}
      <div>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          // FINAL REVIEW & CONFIRMATION
        </span>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-1">
          Review Your Project Blueprint
        </h2>
        <p className="text-xs font-mono text-white/60 mt-1">
          Submit karne se pehle apni tamam details check kar lein. Sab kuch verify karke neeche se email send karein.
        </p>
      </div>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Section 1: Business Scope & Objective */}
        <div className="bg-white/[0.02] border border-white/10 p-5 rounded-xl relative group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase">// 01. Objective & Type</span>
            <button
              onClick={() => onEditStep(1)}
              className="text-[10px] text-white/50 hover:text-white underline font-mono"
            >
              Edit
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-white/40 text-xs block font-mono">Project Type:</span>
              <span className="font-semibold text-white">{state.projectType}</span>
            </div>
            <div>
              <span className="text-white/40 text-xs block font-mono">Selected Objectives:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {state.objectives.length > 0 ? (
                  state.objectives.map((obj, i) => (
                    <span key={i} className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/80">
                      {obj}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-white/40">Not specified</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Selected Features & Stack */}
        <div className="bg-white/[0.02] border border-white/10 p-5 rounded-xl relative group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase">// 02. Features ({state.selectedFeatures.length})</span>
            <button
              onClick={() => onEditStep(5)}
              className="text-[10px] text-white/50 hover:text-white underline font-mono"
            >
              Edit
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <span className="text-white/40 text-xs block font-mono">Selected Scope:</span>
            <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
              {state.selectedFeatures.length > 0 ? (
                state.selectedFeatures.map((feat, i) => (
                  <span key={i} className="text-[11px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                    ✓ {feat}
                  </span>
                ))
              ) : (
                <span className="text-xs text-white/40">No specific features selected</span>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Timeline, Budget & Complexity */}
        <div className="bg-white/[0.02] border border-white/10 p-5 rounded-xl relative group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase">// 03. Estimates</span>
            <button
              onClick={() => onEditStep(11)}
              className="text-[10px] text-white/50 hover:text-white underline font-mono"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div>
              <span className="text-white/40 block">Timeline:</span>
              <span className="text-white font-bold">{estimatedTimeline}</span>
            </div>
            <div>
              <span className="text-white/40 block">Budget Tier:</span>
              <span className="text-white font-bold">{state.investmentRange}</span>
            </div>
            <div>
              <span className="text-white/40 block">Complexity Score:</span>
              <span className="text-cyan-400 font-bold">{complexity.score}/100</span>
            </div>
            <div>
              <span className="text-white/40 block">Architecture:</span>
              <span className="text-cyan-400 font-bold">{complexity.tier}</span>
            </div>
          </div>
        </div>

        {/* Section 4: Contact & Communication */}
        <div className="bg-white/[0.02] border border-white/10 p-5 rounded-xl relative group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase">// 04. Client Contact</span>
            <button
              onClick={() => onEditStep(13)}
              className="text-[10px] text-white/50 hover:text-white underline font-mono"
            >
              Edit
            </button>
          </div>
          <div className="space-y-1 text-xs font-mono">
            <p><span className="text-white/40">Name:</span> {state.contact.fullName || 'N/A'}</p>
            <p><span className="text-white/40">Email:</span> {state.contact.email || 'N/A'}</p>
            <p><span className="text-white/40">Phone/WhatsApp:</span> {state.contact.phoneWhatsapp || 'N/A'}</p>
            <p><span className="text-white/40">Company:</span> {state.contact.company || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Additional Notes Box */}
      {state.contact.additionalNotes && (
        <div className="bg-white/[0.02] border border-white/10 p-4 rounded-xl text-xs font-mono">
          <span className="text-white/40 block mb-1 uppercase">// Notes:</span>
          <p className="text-white/80">{state.contact.additionalNotes}</p>
        </div>
      )}

      {/* Action CTA Button */}
      <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-white/50">
          "Submit" click karte hi blueprint aapke email par send ho jayegi.
        </p>
        <button
          onClick={onSubmit}
          disabled={isSubmitting || !state.contact.email}
          className={`w-full md:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            isSubmitting
              ? 'bg-cyan-500/50 text-white cursor-wait'
              : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              SENDING EMAIL & BLUEPRINT...
            </span>
          ) : (
            '📧 SUBMIT & SEND EMAIL BLUEPRINT'
          )}
        </button>
      </div>
    </div>
  );
};