'use client';

import React from 'react';

export function Achievements() {
  return (
    <section id="achievements" className="bg-[#0d0d0d] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          04 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 id="ach-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Key Achievements &amp; <span className="text-[#c8421a]">Activity.</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mb-10 leading-relaxed">
          Verified metrics, continuous coding streaks, LeetCode problem solving, and live contribution heatmaps.
        </p>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#c8421a]/40 hover:-translate-y-1">
            <span className="text-3xl mb-4 block">💻</span>
            <div className="font-display text-4xl font-extrabold text-white mb-2 tracking-tight">500+</div>
            <div className="text-sm font-bold text-white/70 mb-1.5">LeetCode Solved</div>
            <div className="text-xs text-white/35 leading-relaxed">Strong foundation in DSA, algorithms and problem solving.</div>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#c8421a]/40 hover:-translate-y-1">
            <span className="text-3xl mb-4 block">📊</span>
            <div className="font-display text-4xl font-extrabold text-white mb-2 tracking-tight">1771</div>
            <div className="text-sm font-bold text-white/70 mb-1.5">Peak Contest Rating</div>
            <div className="text-xs text-white/35 leading-relaxed">Achieved a peak rating of 1771 with 118-day coding streak.</div>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#c8421a]/40 hover:-translate-y-1">
            <span className="text-3xl mb-4 block">🏆</span>
            <div className="font-display text-4xl font-extrabold text-white mb-2 tracking-tight">Top 8</div>
            <div className="text-sm font-bold text-white/70 mb-1.5">Aerothon 2026 Finalist</div>
            <div className="text-xs text-white/35 leading-relaxed">Ranked Top 8 nationwide in HAL &amp; IIT Indore Aerothon 2026.</div>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#c8421a]/40 hover:-translate-y-1">
            <span className="text-3xl mb-4 block">🚀</span>
            <div className="font-display text-4xl font-extrabold text-white mb-2 tracking-tight">5+</div>
            <div className="text-sm font-bold text-white/70 mb-1.5">National Hackathon Finalist</div>
            <div className="text-xs text-white/35 leading-relaxed">Finalist in 5+ national-level hackathons across domains.</div>
          </div>
        </div>

        {/* LIVE HEATMAPS & CONTRIBUTION GRAPHS */}
        <div className="space-y-6">
          {/* GITHUB GREEN BOXES HEATMAP */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 transition-all hover:border-[#c8421a]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                <span>🐙</span> GitHub Live Contributions (Green Boxes Heatmap)
              </div>
              <a
                href="https://github.com/Nithish-Bharathwaj-N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#c8421a] hover:underline"
              >
                @Nithish-Bharathwaj-N ↗
              </a>
            </div>
            <div className="overflow-x-auto py-2 text-center">
              <img
                src="https://ghchart.rshah.org/4ade80/Nithish-Bharathwaj-N"
                alt="Nithish Bharathwaj N GitHub Green Contribution Graph"
                className="w-full h-auto max-h-[130px] object-contain filter contrast-110 brightness-105"
              />
            </div>
          </div>

          {/* LEETCODE STATS & ACTIVITY CARD */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 transition-all hover:border-[#c8421a]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="font-display text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                <span>⚡</span> LeetCode Live Stats &amp; Activity
              </div>
              <a
                href="https://leetcode.com/u/nithish_cit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#c8421a] hover:underline"
              >
                @nithish_cit ↗
              </a>
            </div>
            <div className="text-center py-2">
              <img
                src="https://leetcard.jacoblin.cool/nithish_cit?theme=dark&font=Space%20Grotesk&ext=heatmap"
                alt="Nithish Bharathwaj N LeetCode Stats Card & Activity Heatmap"
                className="w-full max-w-xl mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://leetcode.com/u/nithish_cit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 font-bold text-xs uppercase tracking-wider border border-white/20 rounded-md text-white/80 hover:text-white hover:border-white/60 transition-all"
          >
            View Full LeetCode Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
