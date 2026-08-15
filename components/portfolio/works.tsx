'use client';

import React from 'react';

export function Works() {
  const topStats = [
    { icon: '</>', title: '3+', sub: 'Major Projects' },
    { icon: '🚀', title: 'Built for Impact', sub: 'Solving real problems' },
    { icon: '⚙️', title: 'Modern Tech', sub: 'Scalable & Efficient' },
    { icon: '👥', title: 'User-Centric', sub: 'Designed with clarity' }
  ];

  const subaeroTech = ['React', 'TypeScript', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Three.js', 'Docker'];

  const subaeroSpecs = [
    { icon: '🛡️', lbl: 'DOMAIN', val: 'Defense • AI • Simulation' },
    { icon: '💼', lbl: 'ROLE', val: 'Full-Stack Developer' },
    { icon: '📅', lbl: 'DURATION', val: 'Jan 2026 – Present' },
    { icon: '⚡', lbl: 'IMPACT', val: 'Streamlines submarine design workflows and improves simulation accuracy by 35%.' }
  ];

  const voyageTech = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AI API'];
  const queuecureTech = ['MERN Stack', 'Socket.IO', 'MongoDB', 'OpenAI API', 'Twilio', 'Chart.js'];

  return (
    <section id="works" className="bg-[#f5f5f3] py-20 lg:py-24 px-6 lg:px-16 text-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER ROW */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
              03 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
            </div>
            <h2 id="works-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-1">
              MY <span className="text-[#c8421a]">PROJECTS.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">Real-world solutions built with purpose, impact, and cutting-edge technology.</p>
          </div>

          {/* TOP 4 STAT PILLS */}
          <div className="flex items-center gap-3 flex-wrap">
            {topStats.map((stat) => (
              <div key={stat.sub} className="bg-white border border-black/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-sm">
                <div className="text-lg text-[#c8421a]">{stat.icon}</div>
                <div>
                  <div className="font-display text-xs font-extrabold text-[#0f172a] leading-tight">{stat.title}</div>
                  <div className="text-[0.62rem] text-slate-400">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HERO FEATURED PROJECT CARD: SUBAERO */}
        <div className="bg-white border-2 border-[#c8421a] rounded-2xl p-6 lg:p-7 shadow-[0_12px_36px_rgba(200,66,26,0.12)] grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_0.8fr] gap-6 items-center mb-6">
          {/* LEFT COPY */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8421a]/10 border border-[#c8421a]/30 text-[0.65rem] font-extrabold uppercase tracking-wider text-[#c8421a] mb-3">
              ★ FEATURED PROJECT
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-[#c8421a] tracking-tight mb-1">SubAERO</h3>
            <div className="text-xs sm:text-sm font-extrabold text-[#0f172a] mb-2.5 leading-snug">
              AI-Powered Submarine Development &amp; Analysis Platform
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              An advanced AI-driven platform for submarine design, analysis, and optimization. SubAERO integrates simulation, analytics, and intelligent recommendations to accelerate R&amp;D and decision-making.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {subaeroTech.map((tech) => (
                <span key={tech} className="text-[0.65rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2.5">
              <a
                href="https://subaero-app-3d.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#c8421a] hover:bg-[#e05225] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all no-underline"
              >
                View Case Study →
              </a>
              <a
                href="https://github.com/Nithish-Bharathwaj-N/SubAERO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-transparent border border-black/20 text-[#0f172a] hover:bg-black/5 font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all no-underline"
              >
                GitHub Repo 🐙
              </a>
            </div>
          </div>

          {/* CENTER PREVIEW IMAGE */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/subaero-preview.jpg" alt="SubAERO Submarine Digital Twin Dashboard UI" className="w-full h-full object-cover" />
          </div>

          {/* RIGHT SPECS */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            {subaeroSpecs.map((spec) => (
              <div key={spec.lbl} className="flex items-start gap-2.5">
                <div className="text-base text-[#c8421a] shrink-0 mt-0.5">{spec.icon}</div>
                <div>
                  <div className="text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-400">{spec.lbl}</div>
                  <div className="text-xs font-bold text-[#0f172a] leading-tight">{spec.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECONDARY PROJECTS GRID (VOYAGEAI & QUEUECURE AI) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {/* VOYAGEAI */}
          <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-4 items-center hover:border-[#c8421a]/40 transition-all hover:-translate-y-0.5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
              <img src="images/voyage-preview.jpg" alt="VoyageAI Travel Planner Preview" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-display text-lg font-extrabold text-[#0f172a]">VoyageAI</h4>
                <span className="text-[0.6rem] font-extrabold text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded-full">● Live</span>
              </div>
              <div className="text-xs font-bold text-[#c8421a] mb-1.5">AI Travel Planner</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                An intelligent travel planning platform that creates personalized itineraries, estimates budgets, and provides real-time travel recommendations using AI.
              </p>
              <div className="flex flex-wrap gap-1 mb-3.5">
                {voyageTech.map((t) => (
                  <span key={t} className="text-[0.62rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href="https://nithishportfolio-eight.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#c8421a] text-white font-extrabold text-[0.68rem] rounded-md no-underline"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Nithish-Bharathwaj-N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-slate-300 text-slate-700 font-extrabold text-[0.68rem] rounded-md no-underline"
                >
                  GitHub Repo 🐙
                </a>
              </div>
            </div>
          </div>

          {/* QUEUECURE AI */}
          <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-4 items-center hover:border-[#c8421a]/40 transition-all hover:-translate-y-0.5">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-slate-200">
              <img src="images/queuecure-preview.jpg" alt="QueueCure AI Clinic Dashboard Preview" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-display text-lg font-extrabold text-[#0f172a]">QueueCure AI</h4>
                <span className="text-[0.6rem] font-extrabold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">● Live</span>
              </div>
              <div className="text-xs font-bold text-[#c8421a] mb-1.5">AI-Powered Queue Management System</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                A smart queue management solution for clinics and hospitals with AI-based token allocation, real-time updates, and SMS notifications.
              </p>
              <div className="flex flex-wrap gap-1 mb-3.5">
                {queuecureTech.map((t) => (
                  <span key={t} className="text-[0.62rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href="https://queue-cure-ai-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#c8421a] text-white font-extrabold text-[0.68rem] rounded-md no-underline"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-slate-300 text-slate-700 font-extrabold text-[0.68rem] rounded-md no-underline"
                >
                  GitHub Repo 🐙
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div className="bg-white border border-black/10 rounded-xl px-5 py-4 flex items-center justify-between shadow-sm">
          <div className="text-xs sm:text-sm italic font-medium text-slate-600">
            “ Building solutions that solve <span className="text-[#c8421a] font-bold">real problems</span> and create <span className="text-[#c8421a] font-bold">meaningful impact</span>. ”
          </div>
          <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold text-[#c8421a] hover:underline no-underline shrink-0">
            🐙 Explore more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
