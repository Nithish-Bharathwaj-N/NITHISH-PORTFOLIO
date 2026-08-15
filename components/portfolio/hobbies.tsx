'use client';

import React from 'react';

export function Hobbies() {
  const cards = [
    {
      icon: '🏏',
      title: 'CRICKET',
      desc: 'Cricket teaches me focus, patience, and strategy. I enjoy the thrill of the game and the lessons it brings both on and off the field.',
      heroImg: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80',
      thumbs: [
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1593341646782-e0b495cffd6d?auto=format&fit=crop&w=200&q=80'
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
      heroImg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      thumbs: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=200&q=80'
      ]
    },
    {
      icon: '🏃',
      title: 'RUNNING',
      desc: "Running clears my mind and builds discipline. It's my way to stay healthy, challenge myself, and keep moving forward.",
      heroImg: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
      thumbs: [
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=200&q=80'
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
      heroImg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
      thumbs: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=200&q=80'
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

                {/* 3 MINI THUMBNAILS */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {c.thumbs.map((t, i) => (
                    <div key={i} className="h-15 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <img src={t} alt="Thumbnail" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                    </div>
                  ))}
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
