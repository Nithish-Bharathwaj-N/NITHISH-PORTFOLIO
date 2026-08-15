'use client';

import React from 'react';

export function Achievements() {
  const items = [
    { icon: '💻', num: '500+', title: 'LeetCode Problems Solved', desc: 'Strong foundation in DSA, algorithms and problem solving.' },
    { icon: '📊', num: '1771', title: 'Peak Contest Rating', desc: 'Achieved a peak rating of 1771 with 118-day coding streak.' },
    { icon: '🏆', num: 'Top 8', title: 'Aerothon 2026 Finalist', desc: 'Ranked Top 8 nationwide in HAL & IIT Indore Aerothon 2026.' },
    { icon: '🚀', num: '5+', title: 'National Hackathon Finalist', desc: 'Finalist in 5+ national-level hackathons across domains.' },
  ];

  return (
    <section id="achievements" className="bg-[#0d0d0d] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-white/40 mb-4">
          04 <span className="w-7 h-[1px] bg-white/40 inline-block" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-12">
          Key Achievements.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#111111] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#c8421a]/35 hover:-translate-y-1"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <div className="font-display text-4xl font-extrabold text-white tracking-tight mb-2">
                {item.num}
              </div>
              <div className="text-xs font-bold text-white/65 mb-2">
                {item.title}
              </div>
              <p className="text-xs text-white/35 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider border border-white/20 rounded-md text-white/75 hover:border-white/60 hover:text-white transition-all"
          >
            View All Achievements ↗
          </a>
        </div>
      </div>
    </section>
  );
}
