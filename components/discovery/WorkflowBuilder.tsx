"use client";

import { useState } from "react";

const AVAILABLE_ACTIONS = [
  "VISIT", "SIGN UP", "LOGIN", "SEARCH", "FILTER",
  "BOOK", "BUY", "PAY", "APPROVE", "REJECT",
  "NOTIFY", "MESSAGE", "UPLOAD", "TRACK", "DOWNLOAD"
];

interface WorkflowBuilderProps {
  workflow: string[];
  onChange: (workflow: string[]) => void;
}

export function WorkflowBuilder({ workflow, onChange }: WorkflowBuilderProps) {
  const addAction = (action: string) => {
    onChange([...workflow, action]);
  };

  const removeAction = (index: number) => {
    onChange(workflow.filter((_, i) => i !== index));
  };

  const clearAll = () => onChange([]);

  return (
    <div className="space-y-6">
      <div>
        <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-2">
          CLICK ACTIONS TO BUILD USER JOURNEY
        </span>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_ACTIONS.map((act) => (
            <button
              key={act}
              type="button"
              onClick={() => addAction(act)}
              className="px-3 py-2 border border-border hover:border-primary/60 bg-surface/50 text-xs font-mono uppercase transition-all hover:scale-105 active:scale-95"
            >
              + {act}
            </button>
          ))}
        </div>
      </div>

      {/* VISUAL ACTION CHAIN */}
      <div className="border border-border/80 bg-background/80 p-6 min-h-[120px] flex items-center">
        {workflow.length === 0 ? (
          <p className="text-xs font-mono text-muted italic">
            No workflow steps added yet. Click actions above to map the customer flow.
          </p>
        ) : (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full">
            {workflow.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2 shrink-0">
                <div className="relative group border border-primary/50 bg-primary/10 px-4 py-2 text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <span>{String(idx + 1).padStart(2, "0")}. {step}</span>
                  <button
                    type="button"
                    onClick={() => removeAction(idx)}
                    className="text-muted hover:text-red-400 font-bold ml-1"
                    title="Remove step"
                  >
                    ×
                  </button>
                </div>
                {idx < workflow.length - 1 && (
                  <span className="text-accent font-mono text-xs font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {workflow.length > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] font-mono text-muted hover:text-foreground uppercase tracking-widest"
          >
            CLEAR WORKFLOW
          </button>
        </div>
      )}
    </div>
  );
}