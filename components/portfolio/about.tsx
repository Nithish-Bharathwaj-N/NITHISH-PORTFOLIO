'use client';

import React from 'react';

export function About() {
  return (
    <section id="about" className="bg-[#f5f5f3] py-20 lg:py-28 px-6 lg:px-20 text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          01 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-12">
          About Me.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 -right-3.5 -bottom-3.5 border-[1.5px] border-[#c8421a]/30 rounded-2xl z-0" />
            <img
              src="/images/about-photo.jpg"
              alt="Portrait of Nithish Bharathwaj N"
              className="w-full aspect-[3/4] object-cover rounded-2xl relative z-10 shadow-lg"
            />
          </div>

          <div>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-8">
              I&apos;m a <strong>Computer Science &amp; Engineering (Cyber Security)</strong> scholar at{' '}
              <strong>Chennai Institute of Technology</strong>. I specialise in engineering high-performance AI-driven systems, interactive 3D WebGL Digital Twin platforms, and secure full-stack software architectures.
              <br /><br />
              Recognised as a <strong className="text-[#c8421a]">Top 8 Finalist nationwide in Aerothon 2026</strong> hosted by HAL (Hindustan Aeronautics Limited) and IIT Indore for building the real-time SubAERO submarine telemetry twin platform. Passionate about solving complex algorithmic challenges with <strong>500+ LeetCode solutions</strong>, a <strong>1771 Contest Rating</strong>, and an active <strong>118-day continuous coding streak</strong>.
              <br /><br />
              Driven by a commitment to zero-trust cybersecurity principles, modern cloud infrastructure (AWS/Docker), real-time WebSocket communication, and immersive web experiences powered by Three.js and React 19.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
              {[
                { icon: '💻', num: '500+', label: 'LeetCode Solved' },
                { icon: '📈', num: '1771', label: 'Contest Rating' },
                { icon: '🏆', num: 'Top 8', label: 'Aerothon 2026' },
                { icon: '🚀', num: '5+', label: 'Hackathon Finalist' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#0d0d0d] border border-white/10 rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:border-[#c8421a]/50"
                >
                  <span className="text-xl mb-2 block">{s.icon}</span>
                  <div className="font-display text-2xl font-extrabold text-white mb-1 tracking-tight">
                    {s.num}
                  </div>
                  <div className="text-[0.68rem] font-bold text-white/45 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  Experience <span className="flex-1 h-[1px] bg-slate-200" />
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="block text-xs font-bold text-slate-800">Generative AI Virtual Intern</strong>
                    <span className="text-[0.78rem] text-slate-500">AWS Academy × AICTE × EduSkills</span>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-800">SubAERO Digital Twin Lead</strong>
                    <span className="text-[0.78rem] text-slate-500">HAL &amp; IIT Indore — Aerothon 2026</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  Education <span className="flex-1 h-[1px] bg-slate-200" />
                </div>
                <div className="space-y-3">
                  <div>
                    <strong className="block text-xs font-bold text-slate-800">B.E. CSE (Cyber Security)</strong>
                    <span className="text-[0.78rem] text-slate-500">Chennai Institute of Technology (2025–Present)</span>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-slate-800">Class XII — 88.4%</strong>
                    <span className="text-[0.78rem] text-slate-500">SSBM</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  Interests <span className="flex-1 h-[1px] bg-slate-200" />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Cybersecurity, AI, Real-Time Systems, 3D WebGL, Competitive Programming (118-day streak).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
