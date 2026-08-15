'use client';

import React from 'react';

export function Hobbies() {
  const hobbies = [
    {
      icon: '📚',
      badge: 'Mind Growth',
      title: 'Technical & Personal Growth Books',
      desc: 'Reading books on software architecture, psychology, cybersecurity principles, and self-improvement to expand problem-solving perspectives.',
      tags: ['System Architecture', 'Psychology & Habits', 'Cybersecurity Mindset']
    },
    {
      icon: '🏋️',
      badge: 'Discipline & Energy',
      title: 'Strength Training & Fitness',
      desc: 'Maintaining physical strength, high energy levels, and mental stamina through consistent weekly workout routines and active physical training.',
      tags: ['5 Days / Week', 'Stamina', 'Mental Focus']
    },
    {
      icon: '✈️',
      badge: 'Perspective & Culture',
      title: 'Travel & Exploration',
      desc: 'Exploring new cities, natural landscapes, and diverse environments to refresh creative thinking and experience regional cultures.',
      tags: ['Nature Trails', 'Tech Hubs', 'Cultural Spots']
    },
    {
      icon: '🎧',
      badge: 'Flow State',
      title: 'Deep Focus & Ambient Soundscapes',
      desc: 'Listening to curated lo-fi beats, synthwave, and instrumental audio track playlists that help trigger intense focus states during late-night coding sessions.',
      tags: ['Lo-Fi Beats', 'Synthwave', 'Deep Work']
    },
    {
      icon: '♟️',
      badge: 'Tactical Thinking',
      title: 'Chess & Strategic Puzzles',
      desc: 'Solving tactical chess puzzles and strategy games to sharpen pattern recognition, tactical foresight, and decision-making under pressure.',
      tags: ['Pattern Recognition', 'Tactics', 'Foresight']
    },
    {
      icon: '🚀',
      badge: 'Constant Curiosity',
      title: 'Exploring Emerging Tech & AI Tools',
      desc: 'Experimenting with new open-source AI frameworks, developer tools, and security exploits to stay ahead of the technology curve.',
      tags: ['AI Tools', 'Open Source', 'Security Experiments']
    }
  ];

  return (
    <section id="hobbies" className="bg-white py-20 lg:py-24 px-6 lg:px-12 text-[#0f172a] border-t border-slate-100">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-3">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">
              07 <span className="text-slate-300">——</span> BEYOND THE CODE
            </div>
            <h2 id="hobbies-title" className="font-display text-4xl sm:text-5xl font-black text-[#0f172a] leading-tight tracking-tight">
              HOBBIES & PASSIONS.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
            What keeps me curious, disciplined, and energized outside of engineering and software architecture.
          </p>
        </div>

        {/* HOBBIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hobbies.map((h) => (
            <div
              key={h.title}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#c8421a]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-[#c8421a]/10 border border-[#c8421a]/20 flex items-center justify-center text-2xl text-[#c8421a]">
                    {h.icon}
                  </div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-[#c8421a] bg-[#c8421a]/10 px-2.5 py-1 rounded-full border border-[#c8421a]/20">
                    {h.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold text-[#0f172a] mb-2.5 leading-snug">
                  {h.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {h.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {h.tags.map((t) => (
                  <span key={t} className="text-[0.7rem] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BANNER */}
        <div className="bg-gradient-to-r from-white to-orange-50/80 border border-[#c8421a]/20 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="font-display text-lg sm:text-xl font-bold text-[#0f172a] text-center md:text-left">
            "Engineering builds the <span className="text-[#c8421a]">systems</span>, but curiosity and passion build the <span className="text-[#c8421a]">engineer</span>."
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">
            Nithish Bharathwaj N
          </div>
        </div>
      </div>
    </section>
  );
}
