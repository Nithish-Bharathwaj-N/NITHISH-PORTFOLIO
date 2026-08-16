'use client';

import React from 'react';

export function Hobbies() {
  const cards = [
    {
      icon: '🏏',
      title: 'CRICKET',
      desc: 'Cricket teaches me focus, patience, and strategy. I enjoy the thrill of the game and the lessons it brings both on and off the field.',
      heroImg: 'images/hobbies/cricket_hero.jpg',
      thumbs: [
        'images/hobbies/cricket_thumb1.jpg',
        'images/hobbies/cricket_thumb2.jpg',
        'images/hobbies/cricket_thumb3.jpg',
        'images/hobbies/cricket_thumb4.jpg',
        'images/hobbies/cricket_thumb5.jpg',
        'images/hobbies/cricket_thumb1.jpg',
        'images/hobbies/cricket_thumb2.jpg',
        'images/hobbies/cricket_thumb3.jpg',
        'images/hobbies/cricket_thumb4.jpg',
        'images/hobbies/cricket_thumb5.jpg'
      ],
      stats: [
        { label: 'DISTRICT LEVEL', val: 'Throwball Player' },
        { label: 'ZONAL LEVEL', val: 'Carrom Player' }
      ]
    },
    {
      icon: '📷',
      title: 'PHOTOGRAPHY',
      desc: 'Capturing moments, telling stories, and freezing memories. Photography helps me see the world from a different perspective.',
      heroImg: 'images/hobbies/photography_hero.jpg',
      thumbs: [
        'images/hobbies/photo_thumb1.jpg',
        'images/hobbies/photo_thumb2.jpg',
        'images/hobbies/photo_thumb3.jpg',
        'images/hobbies/photo_thumb4.jpg',
        'images/hobbies/photo_thumb5.jpg',
        'images/hobbies/photo_thumb1.jpg',
        'images/hobbies/photo_thumb2.jpg',
        'images/hobbies/photo_thumb3.jpg',
        'images/hobbies/photo_thumb4.jpg',
        'images/hobbies/photo_thumb5.jpg'
      ]
    },
    {
      icon: '🏃',
      title: 'RUNNING',
      desc: "Running clears my mind and builds discipline. It's my way to stay healthy, challenge myself, and keep moving forward.",
      heroImg: 'images/hobbies/running_hero.jpg',
      thumbs: [
        'images/hobbies/run_thumb1.jpg',
        'images/hobbies/run_thumb2.jpg',
        'images/hobbies/run_thumb3.jpg',
        'images/hobbies/run_thumb4.jpg',
        'images/hobbies/run_thumb5.jpg',
        'images/hobbies/run_thumb1.jpg',
        'images/hobbies/run_thumb2.jpg',
        'images/hobbies/run_thumb3.jpg',
        'images/hobbies/run_thumb4.jpg',
        'images/hobbies/run_thumb5.jpg'
      ],
      stats: [
        { label: '5K PERSONAL BEST', val: '23:15' },
        { label: '10K PERSONAL BEST', val: '49:48' }
      ]
    },
    {
      icon: '✈️',
      title: 'TRAVEL',
      desc: 'Exploring new places, experiencing different cultures, and collecting memories that last a lifetime.',
      heroImg: 'images/hobbies/travel_hero.jpg',
      thumbs: [
        'images/hobbies/travel_thumb1.jpg',
        'images/hobbies/travel_thumb2.jpg',
        'images/hobbies/travel_thumb3.jpg',
        'images/hobbies/travel_thumb4.jpg',
        'images/hobbies/travel_thumb5.jpg',
        'images/hobbies/travel_thumb1.jpg',
        'images/hobbies/travel_thumb2.jpg',
        'images/hobbies/travel_thumb3.jpg',
        'images/hobbies/travel_thumb4.jpg',
        'images/hobbies/travel_thumb5.jpg'
      ]
    }
  ];

  return (
    <section id="hobbies" className="bg-white py-20 lg:py-24 px-6 lg:px-12 text-[#0f172a] border-t border-slate-100">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        {/* HEADER ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-8">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">
              08 <span className="text-slate-300">——</span>
            </div>
            <h2 id="hobbies-title" className="font-display text-5xl font-black text-[#0f172a] leading-none mb-3 tracking-tight">
              HOBBIES<span className="text-[#c8421a]">.</span>
            </h2>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              Beyond the code, these are the things that keep me inspired, active and creative.
            </p>
          </div>

          <div className="relative flex items-center gap-3.5 pr-10">
            <div className="w-[3px] h-12 bg-[#c8421a] shrink-0" />
            <div className="text-sm italic text-slate-600 leading-snug">
              <span className="block not-italic text-[#c8421a] font-bold text-xl mb-[-4px]">“</span>
              Do what you love,<br />love what you do.
            </div>
            <div className="absolute right-0 -top-2.5 w-15 h-15 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-70 pointer-events-none" />
          </div>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map((c, idx) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* HERO THUMBNAIL */}
              <div className="relative h-[190px] overflow-hidden bg-slate-100">
                <img src={c.heroImg} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-full bg-white border-2 border-[#c8421a] flex items-center justify-center text-lg shadow-md z-10">
                  {c.icon}
                </div>
              </div>

              {/* BODY */}
              <div className="p-5 pt-7 flex flex-col flex-1">
                <h3 className="font-display text-lg font-black text-[#0f172a] uppercase tracking-wide mb-2.5">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[68px]">
                  {c.desc}
                </p>

                {/* MOVING MARQUEE SUB-PHOTOS */}
                <div className="overflow-hidden mb-4 rounded-xl w-full [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
                  <div className="flex gap-2.5 w-max animate-[hobbyMarquee_22s_linear_infinite] hover:[animation-play-state:paused]">
                    {c.thumbs.map((t, i) => (
                      <div key={i} className="w-[115px] h-[86px] shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:scale-105 hover:border-[#c8421a] transition-all">
                        <img src={t} alt="Thumbnail" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center justify-between py-2 mb-3">
                  <button type="button" className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs text-slate-500 hover:bg-[#c8421a] hover:text-white transition-colors">
                    ‹
                  </button>
                  <div className="flex gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-[#c8421a] w-3.5' : 'bg-slate-300'}`} />
                    <span className={`w-1.5 h-1.5 rounded-full ${idx % 2 !== 0 ? 'bg-[#c8421a] w-3.5' : 'bg-slate-300'}`} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                  <button type="button" className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs text-slate-500 hover:bg-[#c8421a] hover:text-white transition-colors">
                    ›
                  </button>
                </div>

                {/* STATS FOOTER */}
                {c.stats && (
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    {c.stats.map((st) => (
                      <div key={st.label} className="flex flex-col">
                        <div className="text-[0.65rem] font-extrabold uppercase tracking-wider text-[#c8421a] mb-0.5">{st.label}</div>
                        <div className="text-xs font-bold text-slate-700">{st.val}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM REF BANNER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 px-8 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 border border-[#c8421a]/20 flex items-center justify-center text-lg text-[#c8421a] shrink-0">
              ♡
            </div>
            <div className="w-[2px] h-7 bg-[#c8421a]" />
            <div className="text-sm italic text-slate-600">
              Hobbies are not a break from life, they are a part of life.
            </div>
          </div>
          <div className="w-24 h-10 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-60" />
        </div>
      </div>
    </section>
  );
}
