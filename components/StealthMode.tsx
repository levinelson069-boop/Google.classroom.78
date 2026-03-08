'use client';

import React, { useState, useEffect } from 'react';
import { Shield, FileText, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StealthMode = () => {
  const [isStealth, setIsStealth] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Panic key: Escape
      if (e.key === 'Escape') {
        setIsStealth(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isStealth) return (
    <button 
      onClick={() => setIsStealth(true)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FF4D00] text-black px-4 py-2 font-display text-sm hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
    >
      <Shield size={16} />
      STEALTH MODE (ESC)
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black overflow-auto p-8 font-serif">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
          <div className="flex items-center gap-4">
            <FileText size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold">Research Paper: Cognitive Development in Digital Environments</h1>
          </div>
          <button onClick={() => setIsStealth(false)} className="text-gray-400 hover:text-black">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
          <p className="italic text-gray-500">Abstract: This study explores the intersection of interactive media and cognitive load in adolescent populations...</p>
          
          <h2 className="text-xl font-bold mt-8">1. Introduction</h2>
          <p>
            The rapid evolution of digital interfaces has necessitated a re-evaluation of traditional pedagogical models. 
            As students increasingly engage with complex interactive systems, the boundaries between recreational 
            engagement and cognitive skill acquisition become progressively blurred.
          </p>
          
          <h2 className="text-xl font-bold mt-8">2. Methodology</h2>
          <p>
            Our research utilized a multi-faceted approach, incorporating both quantitative data from user interaction 
            logs and qualitative insights from structured interviews. We focused on a demographic of students aged 12-18 
            across diverse socio-economic backgrounds.
          </p>
          
          <div className="bg-gray-100 p-6 border-l-4 border-blue-500 my-8">
            <p className="font-mono text-sm">
              Table 1.1: Correlation between interactive frequency and problem-solving efficiency.
              <br />
              [Data points: 0.84, 0.72, 0.91, 0.65]
            </p>
          </div>
          
          <p>
            Preliminary results suggest that high-frequency interaction with complex systems correlates positively 
            with spatial reasoning and rapid decision-making capabilities. However, the long-term effects on 
            sustained attention spans remain a subject of ongoing investigation.
          </p>

          <h2 className="text-xl font-bold mt-8">3. Preliminary Findings</h2>
          <p>
            The data indicates that the &quot;flow state&quot; achieved during intensive digital interaction mirrors the 
            neurological patterns observed during high-level mathematical problem solving. This suggests that 
            the cognitive architecture required for digital navigation is highly transferable to academic domains.
          </p>
        </div>
      </div>
    </div>
  );
};
