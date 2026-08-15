'use client';

import React, { useState } from 'react';

export function Projects() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="works" className="bg-[#f5f5f3] py-20 lg:py-28 px-6 lg:px-20 text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          03 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Selected Works.
        </h2>
        <p className="text-sm text-slate-600 max-w-lg mb-8 leading-relaxed">
          Engineering solutions at the intersection of AI, cybersecurity, and real-time systems.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Systems' },
            { id: '3d-webgl', label: '3D WebGL & Twins' },
            { id: 'ai-ml', label: 'AI & Full-Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-md border text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#0d0d0d] text-white border-[#0d0d0d]'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TOP PREFERRED PROJECT: SubAERO (LARGER FEATURED CARD) */}
        {(filter === 'all' || filter === '3d-webgl' || filter === 'ai-ml') && (
          <article className="bg-white border border-[#c8421a]/30 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] mb-6 shadow-md hover:shadow-xl transition-all hover:border-[#c8421a] hover:-translate-y-1">
            <div className="relative min-h-[280px] bg-[#090d16] overflow-hidden">
              <span className="absolute top-3.5 left-3.5 bg-black/85 backdrop-blur-md text-white/80 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                3D Full-Stack
              </span>
              <img
                src="/images/subaero-preview.jpg"
                alt="SubAERO Aerospace Digital Twin Platform"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-extrabold uppercase tracking-widest text-white bg-[#c8421a] px-3 py-1 rounded w-max mb-3">
                ⭐ FEATURED FLAGSHIP PROJECT
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-1">
                SubAERO
              </h3>
              <div className="text-xs font-bold text-[#c8421a] mb-3">
                Aerospace Digital Twin &amp; Real-Time Telemetry Platform
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Real-time aero engine health monitoring platform built for <strong>HAL (Hindustan Aeronautics Limited)</strong> and <strong>IIT Indore Aerothon 2026</strong> using interactive 3D WebGL digital twins and predictive telemetry analytics.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React 19', 'Three.js (WebGL)', 'FastAPI', 'WebSockets', 'Python'].map((t) => (
                  <span key={t} className="text-[0.7rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Nithish-Bharathwaj-N/SubAERO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-[#c8421a] text-white font-bold text-xs uppercase tracking-wider rounded transition-all"
                >
                  Case Study →
                </a>
                <a
                  href="https://null-pointers-aerothon-2026.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-transparent border border-[#c8421a] text-[#c8421a] hover:bg-[#c8421a] hover:text-white font-bold text-xs uppercase tracking-wider rounded transition-all"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </article>
        )}

        {/* BOTTOM SECONDARY PROJECTS (2 COLUMNS GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(filter === 'all' || filter === 'ai-ml') && (
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-[#c8421a]/30 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-white/80 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                  AI Full-Stack
                </span>
                <img
                  src="/images/voyage-preview.jpg"
                  alt="VoyageAI Smart Travel Planning Platform"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">VoyageAI</h3>
                <div className="text-xs font-bold text-[#c8421a] mb-2.5">
                  Smart Travel Planning Platform
                </div>
                <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-4">
                  AI-powered travel itinerary generator with budget optimization, real-time maps and smart recommendations.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API'].map((t) => (
                    <span key={t} className="text-[0.68rem] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Nithish-Bharathwaj-N/Voyage-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-slate-300 hover:bg-slate-900 hover:text-white font-bold text-xs rounded transition-all"
                  >
                    Case Study →
                  </a>
                  <a
                    href="https://voyage-ai-nithish.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-[#c8421a] text-[#c8421a] hover:bg-[#c8421a] hover:text-white font-bold text-xs rounded transition-all"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          )}

          {(filter === 'all' || filter === 'ai-ml') && (
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-[#c8421a]/30 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-white/80 text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded z-10">
                  AI &amp; Healthcare
                </span>
                <img
                  src="/images/queuecure-preview.jpg"
                  alt="Queue Cure AI Healthcare Queue Optimization"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">Queue Cure AI</h3>
                <div className="text-xs font-bold text-[#c8421a] mb-2.5">
                  Smart Queue Optimization System
                </div>
                <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-4">
                  Healthcare queue management with AI-driven wait-time prediction and OPD workflow automation.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Python', 'Flask', 'Scikit-Learn', 'MySQL'].map((t) => (
                    <span key={t} className="text-[0.68rem] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 border border-slate-300 hover:bg-slate-900 hover:text-white font-bold text-xs rounded transition-all"
                >
                  Case Study →
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
