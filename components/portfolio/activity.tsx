'use client';

import React from 'react';

export function Activity() {
  const topMetrics = [
    {
      icon: '</>',
      num: '500+',
      title: 'LeetCode Solved',
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
      icon: '🐙',
      num: '10',
      title: 'Public Repositories',
      sub: 'GitHub @Nithish-Bharathwaj-N',
      stroke: '#c8421a',
      path: 'M0,18 L20,14 L40,10 L60,12 L80,4 L100,2',
      link: 'https://github.com/Nithish-Bharathwaj-N'
    },
    {
      icon: '⭐',
      num: '15+',
      title: 'Stars Earned',
      sub: 'Across Flagship Repos',
      stroke: '#10b981',
      path: 'M0,15 L20,12 L40,14 L60,8 L80,6 L100,2',
      link: 'https://github.com/Nithish-Bharathwaj-N'
    }
  ];

  return (
    <section id="activity" className="bg-[#f5f5f3] py-20 lg:py-24 px-6 lg:px-16 text-[#0f172a] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
          06 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 id="act-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-2">
          Coding <span className="text-[#c8421a]">Activity &amp; Heatmaps.</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed">
          Live real-time contribution graphs, verified GitHub repositories, and LeetCode problem-solving activity.
        </p>

        {/* 4 TOP METRIC CARDS WITH LIGHT THEME */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {topMetrics.map((m) => (
            <a
              key={m.title}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-black/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#c8421a]/50 transition-all hover:-translate-y-1 shadow-sm no-underline"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-md bg-black/5 flex items-center justify-center text-xs font-bold text-[#c8421a]">{m.icon}</div>
                  <div className="font-display text-xl font-extrabold text-[#0f172a]">{m.num}</div>
                </div>
                <div className="text-xs font-bold text-[#334155] leading-tight mb-0.5">{m.title}</div>
                <div className="text-[0.62rem] text-slate-500">{m.sub}</div>
              </div>
              <svg className="w-full h-4 mt-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d={m.path} fill="none" stroke={m.stroke} strokeWidth="2" />
              </svg>
            </a>
          ))}
        </div>

        {/* MIDDLE ROW: LEETCODE & GITHUB PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEETCODE PANEL */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] flex items-center gap-2">
                  <span className="text-purple-600">⚡</span> LEETCODE ACTIVITY
                </div>
                <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#c8421a] hover:underline">
                  @nithish_cit ↗
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 mb-5">
                <div className="space-y-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-purple-600">1771</div>
                    <div className="text-[0.65rem] font-bold text-slate-700">Peak Rating</div>
                    <div className="text-[0.58rem] text-slate-500">Top 11.11% of users</div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-amber-600">118 Days</div>
                    <div className="text-[0.65rem] font-bold text-slate-700">Longest Streak</div>
                    <div className="text-[0.58rem] text-slate-500">Keep it consistent</div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-[#0f172a]">500+</div>
                    <div className="text-[0.65rem] font-bold text-slate-700">Problems Solved</div>
                    <div className="text-[0.58rem] text-slate-500">All Difficulty Levels</div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                    <div className="font-display text-base font-extrabold text-emerald-600">250+</div>
                    <div className="text-[0.65rem] font-bold text-slate-700">Contest Participated</div>
                    <div className="text-[0.58rem] text-slate-500">Actively Improving</div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <img src="https://leetcard.jacoblin.cool/nithish_cit?theme=light&font=Space%20Grotesk&ext=heatmap" alt="LeetCode Card" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div>
                <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Problems Solved by Difficulty</div>
                <div className="space-y-1 text-[0.7rem]">
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded text-slate-700"><span className="text-emerald-600 font-bold">• Easy</span><span>218 (43.6%)</span></div>
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded text-slate-700"><span className="text-amber-600 font-bold">• Medium</span><span>225 (45.0%)</span></div>
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded text-slate-700"><span className="text-red-600 font-bold">• Hard</span><span>57 (11.4%)</span></div>
                </div>
              </div>

              <div>
                <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Languages Used</div>
                <div className="space-y-1.5 text-[0.68rem]">
                  <div>
                    <div className="flex justify-between text-slate-700"><span>Python</span><span>78%</span></div>
                    <div className="h-1 bg-slate-200 rounded-full"><div className="h-full bg-purple-600 rounded-full" style={{ width: '78%' }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-700"><span>C++</span><span>15%</span></div>
                    <div className="h-1 bg-slate-200 rounded-full"><div className="h-full bg-blue-600 rounded-full" style={{ width: '15%' }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-700"><span>JavaScript</span><span>7%</span></div>
                    <div className="h-1 bg-slate-200 rounded-full"><div className="h-full bg-amber-600 rounded-full" style={{ width: '7%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GITHUB PANEL */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
                <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] flex items-center gap-2">
                  <span className="text-[#c8421a]">🐙</span> GITHUB ACTIVITY
                </div>
                <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#c8421a] hover:underline">
                  @Nithish-Bharathwaj-N ↗
                </a>
              </div>

              <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Contribution Graph</div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center overflow-x-auto mb-5">
                <img src="https://ghchart.rshah.org/c8421a/Nithish-Bharathwaj-N" alt="GitHub Graph" className="w-full h-auto max-h-[130px] object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-[#c8421a]">10</div>
                <div className="text-[0.62rem] font-bold text-slate-700">Public Repos</div>
                <div className="text-[0.55rem] text-slate-500">Verified API</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-[#c8421a]">250+</div>
                <div className="text-[0.62rem] font-bold text-slate-700">Commits</div>
                <div className="text-[0.55rem] text-slate-500">Active Dev</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-[#c8421a]">12</div>
                <div className="text-[0.62rem] font-bold text-slate-700">Pull Requests</div>
                <div className="text-[0.55rem] text-slate-500">Merged</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-[#c8421a]">15+</div>
                <div className="text-[0.62rem] font-bold text-slate-700">Stars Earned</div>
                <div className="text-[0.55rem] text-slate-500">SubAERO &amp; AI</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-center">
                <div className="font-display text-base font-extrabold text-[#c8421a]">1.5K+</div>
                <div className="text-[0.62rem] font-bold text-slate-700">Profile Views</div>
                <div className="text-[0.55rem] text-slate-500">Real Metrics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
