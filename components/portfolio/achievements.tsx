'use client';

import React from 'react';

export function Achievements() {
  const steps = [
    { year: '2023', title: 'Started Competitive Programming', active: false, now: false },
    { year: '2024', title: 'Cybersecurity Specialization', active: false, now: false },
    { year: '2025', title: 'Built Real-Time & AI Systems', active: false, now: false },
    { year: '2026', title: 'Top 8 Aerothon SubAERO', active: true, now: false },
    { year: 'NOW', title: 'Building Next-Gen Systems', active: false, now: true },
  ];

  const strengths = [
    { icon: '🎯', title: 'Consistency', desc: 'Maintaining long coding streaks and continuous learning.' },
    { icon: '🧠', title: 'Problem Solver', desc: 'Strong foundation in DSA, algorithms & system design.' },
    { icon: '👥', title: 'Team Player', desc: 'Proven collaboration in national level hackathons.' },
    { icon: '🔨', title: 'Builder', desc: 'Building real-world systems that solve practical problems.' },
    { icon: '📖', title: 'Learner', desc: 'Always exploring new technologies and improving.' },
  ];

  return (
    <section id="achievements" className="bg-[#0d0d0d] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-center mb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
              04 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
            </div>
            <h2 id="ach-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Key <span className="text-[#c8421a]">Achievements.</span> 🏆
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              A reflection of consistency, passion, and relentless pursuit of engineering excellence.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
            <div className="flex justify-between text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-400 mb-4">
              <span>📅 MILESTONE TIMELINE</span>
              <span className="text-white/30">JOURNEY OF GROWTH</span>
            </div>
            <div className="flex justify-between relative">
              <div className="absolute top-2 left-3 right-3 h-[2px] bg-white/10 z-0" />
              {steps.map((s) => (
                <div key={s.year} className="relative z-10 flex flex-col items-center text-center flex-1">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 bg-[#161616] mb-2 ${
                      s.active
                        ? 'bg-[#c8421a] border-white shadow-[0_0_10px_#c8421a]'
                        : s.now
                        ? 'bg-emerald-500 border-white shadow-[0_0_10px_#10b981]'
                        : 'border-white/30'
                    }`}
                  />
                  <div className={`font-display text-xs font-bold ${s.active ? 'text-[#c8421a]' : s.now ? 'text-emerald-400' : 'text-white/50'}`}>
                    {s.year}
                  </div>
                  <div className="text-[0.65rem] text-white/40 leading-tight max-w-[85px] mt-1">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mb-8">
          {/* METRICS STACK */}
          <div className="space-y-3">
            <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-white/10 rounded-xl p-4 flex items-center gap-3.5 hover:border-[#c8421a]/50 transition-all hover:translate-x-1">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm shrink-0">&lt;/&gt;</div>
              <div className="flex-1">
                <div className="font-display text-xl font-bold text-white leading-tight">500+</div>
                <div className="text-xs font-bold text-white/70">LeetCode Solved</div>
                <div className="text-[0.65rem] text-white/40">Strong foundation in DSA</div>
              </div>
              <span className="text-[0.68rem] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">▲ 202%</span>
            </a>

            <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" className="bg-[#111111] border border-white/10 rounded-xl p-4 flex items-center gap-3.5 hover:border-[#c8421a]/50 transition-all hover:translate-x-1">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm shrink-0">📈</div>
              <div className="flex-1">
                <div className="font-display text-xl font-bold text-white leading-tight">1771</div>
                <div className="text-xs font-bold text-white/70">Peak Contest Rating</div>
                <div className="text-[0.65rem] text-white/40">118-day coding streak</div>
              </div>
              <span className="text-[0.68rem] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">▲ 18.7%</span>
            </a>

            <div className="bg-[#111111] border border-white/10 rounded-xl p-4 flex items-center gap-3.5 hover:border-[#c8421a]/50 transition-all hover:translate-x-1">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm shrink-0">🏆</div>
              <div className="flex-1">
                <div className="font-display text-xl font-bold text-white leading-tight">Top 8</div>
                <div className="text-xs font-bold text-white/70">Aerothon 2026 Finalist</div>
                <div className="text-[0.65rem] text-white/40">HAL x IIT Indore</div>
              </div>
              <span className="text-[0.68rem] font-bold text-[#c8421a] bg-[#c8421a]/15 px-2 py-0.5 rounded">▲ Top 8</span>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-xl p-4 flex items-center gap-3.5 hover:border-[#c8421a]/50 transition-all hover:translate-x-1">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm shrink-0">🚀</div>
              <div className="flex-1">
                <div className="font-display text-xl font-bold text-white leading-tight">5+</div>
                <div className="text-xs font-bold text-white/70">National Hackathon Finalist</div>
                <div className="text-[0.65rem] text-white/40">5+ national events</div>
              </div>
              <span className="text-[0.68rem] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">▲ 5+</span>
            </div>
          </div>

          {/* OVERVIEW CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Aerothon */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c8421a]/40 transition-all hover:-translate-y-1">
              <div className="w-full p-4 rounded-xl bg-radial from-[#c8421a]/15 to-[#0d0d0d] border border-[#c8421a]/30 text-center mb-3">
                <div className="font-display text-xs font-black tracking-widest text-[#c8421a] uppercase">AEROTHON 2026</div>
                <div className="text-[0.6rem] font-bold text-white/60 mt-0.5">TOP 8 FINALIST</div>
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">Aerothon 2026</div>
                <div className="text-xs font-bold text-[#c8421a] mb-1.5">Top 8 Finalist</div>
                <div className="text-[0.7rem] text-white/50 leading-relaxed mb-3">Built SubAERO — Real-Time Aero Engine Digital Twin Platform for HAL.</div>
              </div>
              <div className="text-[0.65rem] font-bold text-white/40 uppercase pt-2 border-t border-white/10 flex gap-2">
                <span>HAL</span> • <span>IIT INDORE</span>
              </div>
            </div>

            {/* CodeKaze */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all hover:-translate-y-1">
              <div className="w-full p-4 rounded-xl bg-radial from-purple-500/15 to-[#0d0d0d] border border-purple-500/30 text-center mb-3">
                <div className="font-display text-xs font-black tracking-widest text-purple-400 uppercase">CODEKAZE 2025</div>
                <div className="text-[0.6rem] font-bold text-white/60 mt-0.5">NATIONAL FINALIST</div>
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">CodeKaze 2025</div>
                <div className="text-xs font-bold text-purple-400 mb-1.5">National Finalist</div>
                <div className="text-[0.7rem] text-white/50 leading-relaxed mb-3">Threat Intelligence &amp; Log Analyzer platform with real-time detection.</div>
              </div>
              <div className="text-[0.65rem] font-bold text-white/40 uppercase pt-2 border-t border-white/10">
                CODEKAZE
              </div>
            </div>

            {/* SIH */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all hover:-translate-y-1">
              <div className="w-full p-4 rounded-xl bg-radial from-emerald-500/15 to-[#0d0d0d] border border-emerald-500/30 text-center mb-3">
                <div className="font-display text-xs font-black tracking-widest text-emerald-400 uppercase">SIH 2025</div>
                <div className="text-[0.6rem] font-bold text-white/60 mt-0.5">FINALIST</div>
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">Smart India Hackathon</div>
                <div className="text-xs font-bold text-emerald-400 mb-1.5">Finalist</div>
                <div className="text-[0.7rem] text-white/50 leading-relaxed mb-3">AI-driven Queue Optimization System for healthcare workflow automation.</div>
              </div>
              <div className="text-[0.65rem] font-bold text-white/40 uppercase pt-2 border-t border-white/10">
                SIH 2025
              </div>
            </div>

            {/* MORE ACHIEVEMENTS */}
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#c8421a] mb-2.5">
                MORE ACHIEVEMENTS
              </div>
              <ul className="space-y-2 text-[0.7rem] text-white/75 leading-tight flex-1">
                <li className="flex gap-1.5"><span className="text-[#c8421a] font-bold">•</span> Secured SSBM Class XII (93.67%)</li>
                <li className="flex gap-1.5"><span className="text-[#c8421a] font-bold">•</span> International Abacus Competition</li>
                <li className="flex gap-1.5"><span className="text-[#c8421a] font-bold">•</span> District Level Throwball Player</li>
                <li className="flex gap-1.5"><span className="text-[#c8421a] font-bold">•</span> Zonal Carrom Player</li>
                <li className="flex gap-1.5"><span className="text-[#c8421a] font-bold">•</span> Athletics &amp; Cricket Participant</li>
              </ul>
              <a href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379" target="_blank" rel="noopener noreferrer" className="text-[0.68rem] font-bold text-[#c8421a] hover:underline mt-3">
                VIEW ALL ACHIEVEMENTS →
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM CORE STRENGTHS BANNER */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
          <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-400 mb-4">
            ⭐ CORE STRENGTHS RECOGNIZED
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm shrink-0">{s.icon}</div>
                <div>
                  <div className="text-xs font-extrabold text-white mb-0.5">{s.title}</div>
                  <div className="text-[0.68rem] text-white/45 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
