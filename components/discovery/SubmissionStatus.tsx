"use client";

import React from 'react';
// In import lines at top:
import { ProjectDiscoveryState } from '../../types/discovery';

export const SubmissionStatus: React.FC<{ 
  state: ProjectDiscoveryState; 
  ticketId: string;
}> = ({ state, ticketId }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 font-mono py-8">
      <div className="border border-cyan-500/30 bg-cyan-950/10 p-6 rounded-xl space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-cyan-400 font-bold tracking-widest">// DISCOVERY COMPLETE</span>
          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">STATUS: IN REVIEW</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          PROJECT RECEIVED.
        </h1>
        <p className="text-xs text-white/60">
          Your project blueprint has entered technical review.
        </p>
        <div className="pt-2 text-xs text-white/40">
          TICKET REFERENCE: <span className="text-white font-bold">{ticketId}</span>
        </div>
      </div>

      {/* Progress Pipeline */}
      <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl space-y-4">
        <span className="text-xs text-white/40 uppercase tracking-widest">NEXT STEPS PIPELINE</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="border-l-2 border-cyan-400 pl-3 py-1">
            <span className="text-cyan-400 font-bold block">01. BLUEPRINT</span>
            <span className="text-white/60 text-[11px]">Received & Processed</span>
          </div>
          <div className="border-l-2 border-white/20 pl-3 py-1">
            <span className="text-white/40 block">02. TECH REVIEW</span>
            <span className="text-white/40 text-[11px]">Scope Validation</span>
          </div>
          <div className="border-l-2 border-white/20 pl-3 py-1">
            <span className="text-white/40 block">03. ESTIMATION</span>
            <span className="text-white/40 text-[11px]">Timeline & Budget</span>
          </div>
          <div className="border-l-2 border-white/20 pl-3 py-1">
            <span className="text-white/40 block">04. DISCOVERY</span>
            <span className="text-white/40 text-[11px]">1-on-1 Consultation</span>
          </div>
        </div>
      </div>

      {/* Brief Recap Summary */}
      <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl space-y-3 text-xs text-white/70">
        <span className="text-white/40 uppercase block mb-1">CLIENT CONTACT RECORD</span>
        <div>NAME: <span className="text-white">{state.contact.fullName}</span></div>
        <div>EMAIL: <span className="text-white">{state.contact.email}</span></div>
        {state.contact.company && <div>COMPANY: <span className="text-white">{state.contact.company}</span></div>}
      </div>
    </div>
  );
};