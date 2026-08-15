'use client';

import React from 'react';

export function Achievements() {
  const topMetrics = [
    {
      icon: '</>',
      num: '500+',
      title: 'LeetCode Problems Solved',
      sub: 'Across All Difficulty Levels',
      stroke: '#c8421a',
      path: 'M0,15 L20,10 L40,14 L60,6 L80,12 L100,2',
      link: 'https://leetcode.com/u/nithish_cit/'
    },
    {
      icon: '📈',
      num: '1771',
      title: 'Peak Contest Rating',
      sub: '118-day Coding Streak',
      stroke: '#a855f7',
      path: 'M0,16 L20,12 L40,8 L60,11 L80,5 L100,2',
      link: 'https://leetcode.com/u/nithish_cit/'
    },
    {
      icon: '🏆',
      num: 'Top 8',
      title: 'Aerothon 2026 Finalist',
      sub: 'HAL x IIT Indore',
      stroke: '#c8421a',
      path: 'M0,18 L20,14 L40,10 L60,12 L80,4 L100,2'
    },
    {
      icon: '🚀',
      num: '5+',
      title: 'National Hackathon Finalist',
      sub: 'Across Multiple Domains',
      stroke: '#10b981',
      path: 'M0,15 L20,12 L40,14 L60,8 L80,6 L100,2'
    }
  ];

  const journeySteps = [
    { year: '2023', title: 'Started Competitive Programming', desc: 'Built strong foundation in DSA & Algorithms.', now: false },
    { year: '2024', title: 'Cybersecurity Focus', desc: 'Deep dive into security, Linux, and web security fundamentals.', now: false },
    { year: '2024 Mid', title: 'Full-Stack & AI', desc: 'Built full-stack projects, explored AI/ML and real-time systems.', now: false },
    { year: '2025', title: 'Hackathons & Building', desc: 'Participated in multiple hackathons and shipped impactful solutions.', now: false },
    { year: '2026', title: 'Aerothon 2026', desc: 'Top 8 Finalist among 500+ teams nationwide with SubAERO.', now: false },
    { year: 'NOW', title: 'Building Next-Gen Systems', desc: 'Working on secure, scalable, and intelligent systems that solve real-world problems.', now: true }
  ];

  return (
    <section id="achievements" className="bg-[#0d0d0d] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* TOP ROW: TITLE & 4 METRIC CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-center mb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
              04 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
            </div>
            <h2 id="ach-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Key <span className="text-[#c8421a]">Achievements.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Evidence of consistency, dedication, and results across coding, competitions, and real-world building.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topMetrics.map((m) => {
              const Content = (
                <div className="bg-[#111111] border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#c8421a]/40 transition-all hover:-translate-y-1 h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-xs font-bold text-[#c8421a]">{m.icon}</div>
                      <div className="font-display text-xl font-extrabold text-white">{m.num}</div>
                    </div>
                    <div className="text-xs font-bold text-white/80 leading-tight mb-0.5">{m.title}</div>
                    <div className="text-[0.62rem] text-white/40">{m.sub}</div>
                  </div>
                  <svg className="w-full h-4 mt-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d={m.path} fill="none" stroke={m.stroke} strokeWidth="2" />
                  </svg>
                </div>
              );

              return m.link ? (
                <a key={m.title} href={m.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                  {Content}
                </a>
              ) : (
                <div key={m.title}>{Content}</div>
              );
            })}
          </div>
        </div>

        {/* MIDDLE ROW: LEETCODE & GITHUB PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* LEETCODE PANEL */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="text-purple-400">⚡</span> LEETCODE ACTIVITY
                </div>
                <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#c8421a] hover:underline">
                  View Profile ↗
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 mb-5">
                <div className="space-y-2.5">
                  <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-purple-400">1771</div>
                    <div className="text-[0.65rem] font-bold text-white/70">Peak Rating</div>
                    <div className="text-[0.58rem] text-white/40">Top 11.11% of users</div>
                  </div>

                  <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-amber-400">118 Days</div>
                    <div className="text-[0.65rem] font-bold text-white/70">Longest Streak</div>
                    <div className="text-[0.58rem] text-white/40">Keep it consistent</div>
                  </div>

                  <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-white">500+</div>
                    <div className="text-[0.65rem] font-bold text-white/70">Problems Solved</div>
                    <div className="text-[0.58rem] text-white/40">All Difficulty Levels</div>
                  </div>

                  <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-emerald-400">250+</div>
                    <div className="text-[0.65rem] font-bold text-white/70">Contest Participated</div>
                    <div className="text-[0.58rem] text-white/40">Actively Improving</div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <img src="https://leetcard.jacoblin.cool/nithish_cit?theme=dark&font=Space%20Grotesk&ext=heatmap" alt="LeetCode Card" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-white/40 mb-2">Problems Solved by Difficulty</div>
                <div className="space-y-1 text-[0.7rem]">
                  <div className="flex justify-between bg-white/5 px-2 py-1 rounded"><span className="text-emerald-400 font-bold">• Easy</span><span>218 (43.6%)</span></div>
                  <div className="flex justify-between bg-white/5 px-2 py-1 rounded"><span className="text-amber-400 font-bold">• Medium</span><span>225 (45.0%)</span></div>
                  <div className="flex justify-between bg-white/5 px-2 py-1 rounded"><span className="text-red-400 font-bold">• Hard</span><span>57 (11.4%)</span></div>
                </div>
              </div>

              <div>
                <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-white/40 mb-2">Languages Used</div>
                <div className="space-y-1.5 text-[0.68rem]">
                  <div>
                    <div className="flex justify-between text-white/80"><span>Python</span><span>78%</span></div>
                    <div className="h-1 bg-white/10 rounded-full"><div className="h-full bg-purple-500 rounded-full" style={{ width: '78%' }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white/80"><span>C++</span><span>15%</span></div>
                    <div className="h-1 bg-white/10 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: '15%' }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white/80"><span>JavaScript</span><span>7%</span></div>
                    <div className="h-1 bg-white/10 rounded-full"><div className="h-full bg-amber-500 rounded-full" style={{ width: '7%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GITHUB PANEL */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="text-emerald-400">🐙</span> GITHUB ACTIVITY
                </div>
                <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#c8421a] hover:underline">
                  View Profile ↗
                </a>
              </div>

              <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-white/40 mb-2">Contribution Graph</div>
              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-xl p-4 text-center overflow-x-auto mb-5">
                <img src="https://ghchart.rshah.org/4ade80/Nithish-Bharathwaj-N" alt="GitHub Graph" className="w-full h-auto max-h-[125px] object-contain filter contrast-110 brightness-105" />
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-emerald-400">24</div>
                <div className="text-[0.62rem] font-bold text-white/70">Repositories</div>
                <div className="text-[0.55rem] text-white/40">Public &amp; Private</div>
              </div>

              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-emerald-400">1.2K+</div>
                <div className="text-[0.62rem] font-bold text-white/70">Commits</div>
                <div className="text-[0.55rem] text-white/40">All Time</div>
              </div>

              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-emerald-400">32</div>
                <div className="text-[0.62rem] font-bold text-white/70">Pull Requests</div>
                <div className="text-[0.55rem] text-white/40">Merged</div>
              </div>

              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-emerald-400">180+</div>
                <div className="text-[0.62rem] font-bold text-white/70">Stars Earned</div>
                <div className="text-[0.55rem] text-white/40">Across Repos</div>
              </div>

              <div className="bg-[#0d0d0d]/70 border border-white/5 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-emerald-400">15K+</div>
                <div className="text-[0.62rem] font-bold text-white/70">Profile Views</div>
                <div className="text-[0.55rem] text-white/40">All Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM JOURNEY OF GROWTH */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 lg:p-7">
          <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#c8421a] mb-5">
            📅 JOURNEY OF GROWTH •
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {journeySteps.map((s) => (
              <div key={s.year} className="relative z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 bg-[#111111] mb-3 ${
                    s.now ? 'bg-[#c8421a] border-white shadow-[0_0_12px_#c8421a] w-5 h-5' : 'border-white/30'
                  }`}
                />
                <div className="font-display text-sm font-extrabold text-[#c8421a] mb-1">{s.year}</div>
                <div className="text-xs font-bold text-white mb-1">{s.title}</div>
                <div className="text-[0.68rem] text-white/45 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
