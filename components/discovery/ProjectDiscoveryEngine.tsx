"use client";

import React, { useState } from 'react';
import { ProjectDiscoveryState, ProjectType, UserRoleType } from '@/types/discovery';
import { LiveBlueprintPanel } from './LiveBlueprintPanel';
import { TechnicalTranslation } from './TechnicalTranslation';
import { SubmissionStatus } from './SubmissionStatus';

const INITIAL_STATE: ProjectDiscoveryState = {
  step: 0,
  objectiveCategory: 'GROW',
  objectives: [],
  successDefinition: '',
  projectType: 'WEB_APPLICATION',
  userTypes: [],
  userTypeCount: '1',
  hasMultiAccess: 'NO',
  userRoles: [],
  selectedFeatures: [],
  dynamicAnswers: {},
  selectedIntegrations: [],
  hasExistingAPIs: 'NO',
  designDirections: [],
  designPriorities: [],
  contentReadiness: 'MOSTLY_READY',
  existingAssets: [],
  timelineExpectation: '1-2_MONTHS',
  investmentRange: '3K_5K',
  projectReadiness: 'READY_TO_START',
  contact: {
    fullName: '',
    email: '',
    company: '',
    phoneWhatsapp: '',
    websiteUrl: '',
    additionalNotes: '',
  },
};

export const ProjectDiscoveryEngine: React.FC = () => {
  const [state, setState] = useState<ProjectDiscoveryState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const updateState = <K extends keyof ProjectDiscoveryState>(
    key: K,
    value: ProjectDiscoveryState[K]
  ) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleArrayItem = (key: 'objectives' | 'userTypes' | 'selectedFeatures' | 'selectedIntegrations' | 'designDirections' | 'designPriorities' | 'userRoles', item: string) => {
    setState((prev) => {
      const list = prev[key] as string[];
      const exists = list.includes(item);
      const updated = exists ? list.filter((i) => i !== item) : [...list, item];
      return { ...prev, [key]: updated };
    });
  };

  const handleNext = () => {
    setState((prev) => ({ ...prev, step: Math.min(prev.step + 1, 15) }));
  };

  const handleBack = () => {
    setState((prev) => ({ ...prev, step: Math.max(prev.step - 1, 0) }));
  };

  const handleSubmitBlueprint = async () => {
    setIsSubmitting(true);
    const referenceId = `JAM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const emailPayload = {
      ticketId: referenceId,
      clientName: state.contact.fullName,
      email: state.contact.email,
      company: state.contact.company,
      phone: state.contact.phoneWhatsapp,
      website: state.contact.websiteUrl,
      projectType: state.projectType,
      objectives: state.objectives,
      successDefinition: state.successDefinition,
      userGroups: state.userTypes,
      userRoles: state.userRoles,
      featuresCount: state.selectedFeatures.length,
      featuresList: state.selectedFeatures,
      integrations: state.selectedIntegrations,
      designDirections: state.designDirections,
      contentReadiness: state.contentReadiness,
      timeline: state.timelineExpectation,
      investment: state.investmentRange,
      readiness: state.projectReadiness,
      notes: state.contact.additionalNotes,
    };

    try {
      // API Post Call
      await fetch('/api/discovery/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPayload),
      }).catch(() => {
        // Fallback for visual demonstration
      });

      setSubmittedTicket(referenceId);
      setState((prev) => ({ ...prev, step: 15 }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedTicket && state.step === 15) {
    return <SubmissionStatus state={state} ticketId={submittedTicket} />;
  }

  return (
    <div className="min-h-screen bg-[#05070e] text-white font-sans selection:bg-cyan-500 selection:text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Dynamic View Area */}
        <main className="lg:col-span-8 bg-[#0a0d14] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Progress Header */}
          {state.step > 0 && state.step < 14 && (
            <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-white/40 uppercase">STEP {String(state.step).padStart(2, '0')} / 13</span>
              <div className="flex gap-1">
                {Array.from({ length: 13 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 w-4 rounded-full transition-all ${
                      idx + 1 <= state.step ? 'bg-cyan-400' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 00: INTRO */}
          {state.step === 0 && (
            <div className="space-y-6">
              <span className="text-xs font-mono text-cyan-400 tracking-widest block uppercase">// PROJECT INTELLIGENCE</span>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">ENGINEER YOUR PROJECT.</h1>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
                Tell us what you're trying to build. We'll translate your goals into a structured digital blueprint covering scope, functionality, technical direction, timeline and investment.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-white/50 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-white/30 text-[10px] uppercase">ESTIMATED TIME</span>
                  <span className="text-white">04–06 MIN</span>
                </div>
                <div>
                  <span className="block text-white/30 text-[10px] uppercase">PREREQUISITES</span>
                  <span className="text-white">NO TECH KNOWLEDGE NEEDED</span>
                </div>
                <div>
                  <span className="block text-white/30 text-[10px] uppercase">SECURITY</span>
                  <span className="text-white">CONFIDENTIAL DISCOVERY</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  START PROJECT DISCOVERY →
                </button>
              </div>
            </div>
          )}

          {/* STEP 01: OBJECTIVES */}
          {state.step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STEP 01: BUSINESS GOALS</span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">WHAT ARE YOU TRYING TO ACHIEVE?</h2>
                <p className="text-xs font-mono text-white/50 mt-1">"Start with the outcome. Technology comes later."</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Generate more leads',
                  'Increase online sales',
                  'Launch a new product',
                  'Build internal software',
                  'Automate a business process',
                  'Redesign existing website',
                  'Improve conversion rate',
                  'Expand into new market'
                ].map((obj) => {
                  const selected = state.objectives.includes(obj);
                  return (
                    <button
                      key={obj}
                      onClick={() => handleToggleArrayItem('objectives', obj)}
                      className={`p-4 rounded-lg border text-left font-mono text-xs transition-all ${
                        selected
                          ? 'border-cyan-400 bg-cyan-950/20 text-white'
                          : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30'
                      }`}
                    >
                      <span className="mr-2">{selected ? '✓' : '+'}</span> {obj}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/60 uppercase block">WHAT WOULD SUCCESS LOOK LIKE?</label>
                <textarea
                  rows={3}
                  value={state.successDefinition}
                  onChange={(e) => updateState('successDefinition', e.target.value)}
                  placeholder="Example: We currently receive enquiries manually and want to automate lead capture and follow-up."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {/* STEP 02: PROJECT TYPE */}
          {state.step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STEP 02: PRODUCT CLASS</span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">WHAT ARE WE ENGINEERING?</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'BUSINESS_WEBSITE', label: 'BUSINESS WEBSITE', desc: 'High-conversion marketing site focused on authority and lead generation.' },
                  { id: 'E_COMMERCE', label: 'E-COMMERCE', desc: 'Digital storefront with payment gateways, cart flows, and catalog management.' },
                  { id: 'WEB_APPLICATION', label: 'WEB APPLICATION', desc: 'Interactive browser-based software with user accounts and dynamic workflows.' },
                  { id: 'CUSTOM_SOFTWARE', label: 'CUSTOM SOFTWARE', desc: 'Tailored enterprise platforms built for unique internal processes.' },
                  { id: 'INTERNAL_DASHBOARD', label: 'INTERNAL DASHBOARD', desc: 'Admin tools, analytics platforms, and operations management panels.' },
                  { id: 'MOBILE_APP', label: 'MOBILE APP', desc: 'Native or cross-platform iOS and Android mobile software.' },
                  { id: 'CMS_WORDPRESS', label: 'WORDPRESS / CMS', desc: 'Content-managed web architecture engineered for rapid updating.' },
                  { id: 'UI_UX_REDESIGN', label: 'UI/UX REDESIGN', desc: 'Complete interface overhaul, component systems, and UX optimization.' }
                ].map((item) => {
                  const selected = state.projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => updateState('projectType', item.id as ProjectType)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selected
                          ? 'border-cyan-400 bg-cyan-950/20 text-white'
                          : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold uppercase">{item.label}</div>
                      <p className="text-[11px] text-white/50 mt-1 font-mono">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 04: FUNCTIONAL REQUIREMENTS */}
          {state.step === 4 && (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STEP 04: CAPABILITIES</span>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">WHAT SHOULD IT ACTUALLY DO?</h2>
                </div>
                <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded">
                  {state.selectedFeatures.length} SELECTED
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { category: 'ACCOUNTS & ACCESS', items: ['Login / Signup', 'User Profiles', 'Roles & Permissions', 'Password Reset'] },
                  { category: 'BUSINESS & TRANSACTIONS', items: ['Booking System', 'Payments', 'Subscriptions', 'Lead Management', 'Search & Filters'] },
                  { category: 'ADMIN & CONTROL', items: ['Admin Dashboard', 'Content Management', 'Analytics & Reporting', 'Data Export'] },
                  { category: 'COMMUNICATIONS', items: ['Email Notifications', 'WhatsApp Integration', 'SMS Alerts', 'Automated Workflows'] }
                ].map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{group.category}</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {group.items.map((feat) => {
                        const selected = state.selectedFeatures.includes(feat);
                        return (
                          <button
                            key={feat}
                            onClick={() => handleToggleArrayItem('selectedFeatures', feat)}
                            className={`p-2.5 rounded border text-left font-mono text-[11px] transition-all ${
                              selected
                                ? 'border-cyan-400 bg-cyan-950/30 text-white'
                                : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20'
                            }`}
                          >
                            {selected ? '✓' : '+'} {feat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 09: TECHNICAL ARCHITECTURE TRANSLATION */}
          {state.step === 9 && <TechnicalTranslation state={state} />}

          {/* STEP 13: FINAL REVIEW */}
          {state.step === 13 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STEP 13: BLUEPRINT CONFIRMATION</span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">REVIEW YOUR PROJECT BLUEPRINT.</h2>
              </div>

              <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">PROJECT TYPE</span>
                  <span className="text-white font-bold">{state.projectType}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">SELECTED FEATURES</span>
                  <span className="text-cyan-400">{state.selectedFeatures.length} Modules</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/40">TIMELINE EXPECTATION</span>
                  <span className="text-white">{state.timelineExpectation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">INVESTMENT RANGE</span>
                  <span className="text-white">{state.investmentRange}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono text-white/60 uppercase block">ENTER CONTACT DETAILS FOR REVIEW RECEIPT</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={state.contact.fullName}
                    onChange={(e) => updateState('contact', { ...state.contact, fullName: e.target.value })}
                    className="bg-white/[0.03] border border-white/10 rounded p-3 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={state.contact.email}
                    onChange={(e) => updateState('contact', { ...state.contact, email: e.target.value })}
                    className="bg-white/[0.03] border border-white/10 rounded p-3 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Controls Footer */}
          {state.step > 0 && state.step < 15 && (
            <div className="flex justify-between items-center pt-6 border-t border-white/10 font-mono text-xs">
              <button
                onClick={handleBack}
                className="px-4 py-2 border border-white/10 hover:border-white/30 text-white/70 rounded transition"
              >
                ← BACK
              </button>

              {state.step === 13 ? (
                <button
                  onClick={handleSubmitBlueprint}
                  disabled={isSubmitting || !state.contact.fullName || !state.contact.email}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider rounded transition disabled:opacity-50"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SUBMIT BLUEPRINT →'}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider rounded transition"
                >
                  NEXT STEP →
                </button>
              )}
            </div>
          )}

        </main>

        {/* Desktop Sticky Blueprint Sidebar */}
        <LiveBlueprintPanel 
          state={state} 
          onNavigateToStep={(stepIdx) => updateState('step', stepIdx)} 
        />

      </div>
    </div>
  );
};