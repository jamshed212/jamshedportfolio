"use client";

import { useState } from "react";

// Types definition
type ProjectType = "WEBSITE" | "WEB_APP" | "ECOMMERCE" | "CMS" | "MOBILE" | "SOFTWARE" | "UIUX" | "SEO";

interface ProjectData {
  type: ProjectType | null;
  requirements: string[];
  goal: string;
  users: string;
  pages: string;
  hasExisting: string;
  url: string;
  budget: string;
  timeline: string;
  notes: string;
}

const REQUIREMENTS_MAP: Record<string, string[]> = {
  WEBSITE: ["Lead Generation", "Contact Forms", "CMS Integration", "Blog", "Multi-page", "Animations", "Analytics", "SEO"],
  WEB_APP: ["Authentication", "User Dashboard", "Admin Dashboard", "Roles & Permissions", "Database", "API Integrations", "Notifications", "Payments", "Reporting"],
  ECOMMERCE: ["Product Catalog", "Cart System", "Checkout Flow", "Payment Gateway", "Customer Accounts", "Inventory Management", "Shipping Integration"],
  CMS: ["Content Strategy", "Custom Fields", "Page Builder", "SEO Plugins", "Multi-language", "User Roles"],
  MOBILE: ["User Auth", "Push Notifications", "Payments", "Location Services", "Real-time Chat", "API Backend", "Admin Panel"],
  SOFTWARE: ["Dashboard", "Internal Workflows", "Database Architecture", "Automations", "API Integration", "User Permissions"],
  UIUX: ["Design System", "Prototyping", "Responsive Layouts", "Motion/Interaction", "Website Redesign"],
  SEO: ["Core Web Vitals", "Speed Optimization", "Technical Audit", "Canonical/Redirects", "Image Optimization", "JS Optimization"]
};

export default function ProcessPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ProjectData>({
    type: null,
    requirements: [],
    goal: "",
    users: "",
    pages: "",
    hasExisting: "",
    url: "",
    budget: "",
    timeline: "",
    notes: ""
  });

  const updateData = (key: keyof ProjectData, value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleRequirement = (req: string) => {
    setData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter((r) => r !== req)
        : [...prev.requirements, req]
    }));
  };

  const isStepValid = () => {
    if (step === 1) return !!data.type;
    if (step === 2) return data.requirements.length > 0;
    if (step === 3) return !!data.goal;
    if (step === 4) return !!data.users && !!data.pages;
    if (step === 5) return !!data.budget && !!data.timeline;
    return true;
  };

  const handleSubmit = async () => {
    console.log("Submitting Project Brief:", data);
    // Add API call here to send data to your backend/email
    alert("Brief submitted successfully.");
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-16 w-full max-w-5xl mx-auto">
      
      {/* HEADER */}
      <section className="mb-12">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-bold font-mono mb-2 block">
          PROJECT PROCESS
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground mb-4">
          FROM IDEA TO <span className="text-primary">BRIEF.</span>
        </h1>
        <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
          Tell us what you're trying to build, what it needs to do, and what success looks like. We'll turn your requirements into the right technical solution.
        </p>
      </section>

      {/* STEP INDICATOR */}
      <div className="w-full h-1 bg-surface mb-12 flex">
        {[1,2,3,4,5].map((s) => (
          <div key={s} className={`flex-1 ${step >= s ? 'bg-primary' : 'bg-border'}`} />
        ))}
      </div>

      {/* STEP 01: DEFINE TYPE */}
      {step === 1 && (
        <StepContainer title="WHAT ARE WE BUILDING?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(REQUIREMENTS_MAP).map((type) => (
              <OptionCard 
                key={type} 
                selected={data.type === type} 
                onClick={() => updateData('type', type)}
                label={type.replace('_', ' ')}
              />
            ))}
          </div>
        </StepContainer>
      )}

      {/* STEP 02: REQUIREMENTS */}
      {step === 2 && data.type && (
        <StepContainer title="WHAT DOES IT NEED TO DO?">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {REQUIREMENTS_MAP[data.type].map((req) => (
              <OptionCard 
                key={req} 
                selected={data.requirements.includes(req)} 
                onClick={() => toggleRequirement(req)}
                label={req}
              />
            ))}
          </div>
        </StepContainer>
      )}

      {/* STEP 03: GOAL */}
      {step === 3 && (
        <StepContainer title="WHAT SHOULD THIS ACHIEVE?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Generate Leads", "Increase Sales", "Improve Branding", "Automate Processes", "Better UX", "New Product", "Performance Scale"].map((goal) => (
              <OptionCard key={goal} selected={data.goal === goal} onClick={() => updateData('goal', goal)} label={goal} />
            ))}
          </div>
          <textarea 
            className="w-full bg-surface border border-border p-4 mt-6 text-sm text-foreground focus:border-primary outline-none"
            placeholder="Tell us anything else about the project..."
            value={data.notes}
            onChange={(e) => updateData('notes', e.target.value)}
          />
        </StepContainer>
      )}

      {/* STEP 04: SCALE */}
      {step === 4 && (
        <StepContainer title="PROJECT SCALE">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-accent mb-4">HOW MANY USERS EXPECTED?</p>
              <div className="flex flex-wrap gap-2">
                {["Under 100", "100-1k", "1k-10k", "10k+"].map(u => (
                  <OptionCard key={u} selected={data.users === u} onClick={() => updateData('users', u)} label={u} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-accent mb-4">SCOPE (PAGES/FEATURES)?</p>
              <div className="flex flex-wrap gap-2">
                {["Small", "Medium", "Large", "Not Sure"].map(p => (
                  <OptionCard key={p} selected={data.pages === p} onClick={() => updateData('pages', p)} label={p} />
                ))}
              </div>
            </div>
          </div>
        </StepContainer>
      )}

      {/* STEP 05: BUDGET & TIMELINE */}
      {step === 5 && (
        <StepContainer title="SCOPE & TIMELINE">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-mono text-accent mb-4">BUDGET RANGE</p>
              {["$500-$1k", "$1k-$2.5k", "$2.5k-$5k", "$5k-$10k", "$10k+"].map(b => (
                 <button key={b} onClick={() => updateData('budget', b)} className={`w-full text-left p-3 border mb-2 text-xs font-mono uppercase ${data.budget === b ? 'border-primary bg-primary/10' : 'border-border'}`}>{b}</button>
              ))}
            </div>
            <div>
              <p className="text-xs font-mono text-accent mb-4">TIMELINE</p>
              {["ASAP", "2-4 Weeks", "1-2 Months", "Flexible"].map(t => (
                 <button key={t} onClick={() => updateData('timeline', t)} className={`w-full text-left p-3 border mb-2 text-xs font-mono uppercase ${data.timeline === t ? 'border-primary bg-primary/10' : 'border-border'}`}>{t}</button>
              ))}
            </div>
          </div>
        </StepContainer>
      )}

      {/* SUMMARY */}
      {step === 6 && (
        <div className="border border-border p-8 bg-surface space-y-6">
          <h2 className="text-2xl font-black uppercase text-primary">YOUR PROJECT BRIEF</h2>
          <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
            <div><span className="text-muted">TYPE:</span> {data.type}</div>
            <div><span className="text-muted">GOAL:</span> {data.goal}</div>
            <div className="col-span-2"><span className="text-muted">REQS:</span> {data.requirements.join(", ")}</div>
          </div>
          <button onClick={handleSubmit} className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary-hover">SUBMIT PROJECT BRIEF →</button>
        </div>
      )}

      {/* CONTROLS */}
      {step < 6 && (
        <div className="mt-12 flex justify-between">
          <button disabled={step === 1} onClick={() => setStep(step - 1)} className="text-muted hover:text-foreground text-xs font-bold uppercase">← BACK</button>
          <button disabled={!isStepValid()} onClick={() => setStep(step + 1)} className="bg-primary px-8 py-3 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover disabled:opacity-50">NEXT STEP →</button>
        </div>
      )}

    </main>
  );
}

// Components
function StepContainer({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold uppercase mb-8">{title}</h2>
      {children}
    </div>
  );
}

function OptionCard({ selected, onClick, label }: { selected: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`p-6 border transition-all duration-200 text-left ${selected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
    >
      <span className={`block font-bold text-sm ${selected ? 'text-primary' : 'text-foreground'}`}>
        {label}
      </span>
    </button>
  );
}