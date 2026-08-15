'use client';

import React, { useState } from 'react';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      name: 'SubAERO',
      sub: 'Aerospace Digital Twin Platform',
      desc: 'Real-time aero engine health monitoring platform for HAL using 3D digital twins and predictive analytics.',
      cat: ['3d-webgl', 'ai-ml'],
      badge: '3D Full-Stack',
      featured: true,
      image: '/images/subaero-preview.jpg',
      tech: ['React 19', 'Three.js', 'FastAPI', 'WebSockets'],
      caseStudy: 'https://github.com/Nithish-Bharathwaj-N/SubAERO',
      liveDemo: 'https://null-pointers-aerothon-2026.vercel.app/',
    },
    {
      name: 'VoyageAI',
      sub: 'Smart Travel Planning Platform',
      desc: 'AI-powered travel itinerary generator with budget optimization, real-time maps and smart recommendations.',
      cat: ['ai-ml'],
      badge: 'AI Full-Stack',
      image: '/images/voyage-preview.jpg',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API'],
      caseStudy: 'https://github.com/Nithish-Bharathwaj-N/Voyage-AI',
      liveDemo: 'https://voyage-ai-nithish.vercel.app',
    },
    {
      name: 'Queue Cure AI',
      sub: 'Smart Queue Optimization System',
      desc: 'Healthcare queue management with AI-driven wait-time prediction and OPD workflow automation.',
      cat: ['ai-ml'],
      badge: 'AI & Healthcare',
      image: '/images/queuecure-preview.jpg',
      tech: ['Python', 'Flask', 'Scikit-Learn', 'MySQL'],
      caseStudy: 'https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI',
    },
    {
      name: 'SentinelX',
      sub: 'Threat Intelligence & Log Analyzer',
      desc: 'Security telemetry platform for real-time threat detection, log parsing and incident visualization.',
      cat: ['cybersecurity', 'ai-ml'],
      badge: 'Cybersecurity',
      image: '',
      tech: ['Python', 'FastAPI', 'SQLite', 'DKIM 2.0'],
      caseStudy: 'https://github.com/Nithish-Bharathwaj-N',
      liveDemo: 'https://github.com/Nithish-Bharathwaj-N',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.cat.includes(filter)
  );

  return (
    <section id="works" className="bg-[#f5f5f3] py-20 lg:py-28 px-6 lg:px-20 text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          03 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Selected Works.
        </h2>
        <p className="text-sm text-slate-500 max-w-md mb-8">
          Engineering solutions at the intersection of AI, cybersecurity, and real-time systems.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Systems' },
            { id: '3d-webgl', label: '3D WebGL & Twins' },
            { id: 'ai-ml', label: 'AI & Full-Stack' },
            { id: 'cybersecurity', label: 'Cybersecurity' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-md border text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#0d0d0d] text-white border-[#0d0d0d]'
                  : 'bg-white text-slate-600 border-black/10 hover:bg-[#0d0d0d] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((proj) => (
            <article
              key={proj.name}
              className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-xl hover:border-[#c8421a]/20"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100 flex items-center justify-center">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0a0f1e] to-[#1a2744] flex items-center justify-center">
                    <svg className="w-16 h-16 opacity-40 text-[#c8421a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-[#0d0d0d]/85 text-white/80 text-[0.65rem] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  {proj.badge}
                </span>
                {proj.featured && (
                  <span className="absolute top-3 right-3 bg-[#c8421a] text-white text-[0.62rem] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Flagship
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="font-display text-base font-bold text-slate-900 mb-1">
                  {proj.name}
                </div>
                <div className="text-[0.76rem] font-bold text-[#c8421a] mb-2">
                  {proj.sub}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-3">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[0.68rem] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={proj.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-2.5 rounded-md text-[0.72rem] font-bold border border-black/15 text-slate-700 hover:bg-[#0d0d0d] hover:text-white transition-colors"
                  >
                    Case Study →
                  </a>
                  {proj.liveDemo && (
                    <a
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-2.5 rounded-md text-[0.72rem] font-bold border border-[#c8421a] text-[#c8421a] hover:bg-[#c8421a] hover:text-white transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/Nithish-Bharathwaj-N"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#c8421a] hover:opacity-75"
          >
            View More Projects on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
