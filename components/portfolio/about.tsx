'use client';

import React from 'react';

export function About() {
  const stats = [
    { icon: '</>', num: '500+', lbl1: 'LeetCode', lbl2: 'Problems' },
    { icon: '🏆', num: '5+', lbl1: 'Hackathon', lbl2: 'Finalist' },
    { icon: '🚀', num: '3+', lbl1: 'Major', lbl2: 'Projects' },
    { icon: '⏱️', num: '5-6 Hrs', lbl1: 'Daily', lbl2: 'Learning' }
  ];

  const specs = [
    { icon: '👤', text: 'Nithish Bharathwaj N' },
    { icon: '🎓', text: 'Cybersecurity • AI/ML • Full-Stack Engineer' },
    { icon: '📍', text: 'Chennai, Tamil Nadu, India' },
    { icon: '✉️', text: 'nithishbharathwajn@gmail.com' }
  ];

  const beyondCode = [
    { icon: '📖', lbl1: 'Reading', lbl2: 'Books' },
    { icon: '🏋️', lbl1: 'Workout &', lbl2: 'Fitness' },
    { icon: '✈️', lbl1: 'Travel &', lbl2: 'Exploration' },
    { icon: '🎧', lbl1: 'Music &', lbl2: 'Focus' },
    { icon: '📈', lbl1: 'Personal', lbl2: 'Growth' }
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-24 px-6 lg:px-12 text-[#0f172a]">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        {/* TOP SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 mb-10 items-start">
          {/* LEFT COLUMN: TITLE, BIO PARAGRAPHS & 4 STATS */}
          <div className="flex flex-col">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">
              02 <span className="text-slate-300">——</span>
            </div>
            <h2 id="about-title" className="font-display text-5xl sm:text-6xl font-black text-[#0f172a] leading-none mb-3 tracking-tight">
              ABOUT<br /><span className="text-[#c8421a]">ME.</span>
            </h2>

            <div className="mb-8">
              <div className="text-xs sm:text-sm text-slate-500 italic">Learner. Builder. Problem Solver.</div>
              <div className="text-xs sm:text-sm text-slate-500 italic">Always curious, always improving.</div>
              <div className="w-10 h-[2px] bg-[#c8421a] mt-2.5" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              I'm a second-year BE Cybersecurity student at <strong className="text-[#0f172a] font-extrabold">Chennai Institute of Technology</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              I'm passionate about solving complex problems, building impactful projects, and exploring the intersection of security, AI, and full-stack development.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              I love learning by doing. From competitive programming to real-world applications, I enjoy turning ideas into solutions that make a difference.
            </p>

            {/* 4 STAT COLUMNS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100 text-center">
              {stats.map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                  <div className="text-2xl text-[#c8421a] mb-2">{s.icon}</div>
                  <div className="font-display text-2xl font-black text-[#0f172a] mb-1">{s.num}</div>
                  <div className="text-xs font-bold text-slate-500 leading-tight">
                    {s.lbl1}<br />{s.lbl2}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PORTRAIT PHOTO & SPECS */}
          <div className="lg:border-l lg:border-slate-100 lg:pl-12 flex flex-col items-center">
            {/* PORTRAIT STAGE */}
            <div className="relative w-[300px] h-[320px] mb-6 flex items-end justify-center">
              <div className="absolute right-[-10px] top-[40px] w-[50px] h-[90px] opacity-70 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
              <div className="absolute right-0 top-[120px] w-2.5 h-2.5 rounded-full bg-[#c8421a] z-30" />
              <div className="absolute bottom-0 w-[250px] h-[250px] rounded-[120px_120px_40px_40px] bg-gradient-to-br from-orange-100 to-amber-200 z-10" />
              <img src="images/nithish-about.jpg" alt="Nithish Bharathwaj N Portrait" className="relative z-20 w-[280px] h-[310px] object-cover object-top" />
            </div>

            {/* 4 SPECS LIST */}
            <div className="w-full max-w-xs space-y-3">
              {specs.map((item) => (
                <div key={item.text} className="flex items-center gap-3 pb-2.5 border-b border-slate-100 last:border-none">
                  <div className="text-base text-[#c8421a] shrink-0">{item.icon}</div>
                  <div className="text-xs font-bold text-slate-800">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH CARD: BEYOND CODE */}
        <div className="bg-white border border-black/10 rounded-2xl p-7 lg:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-center">
          <div>
            <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-1 flex items-center gap-2">
              <span className="text-[#c8421a]">♡</span> BEYOND CODE
            </div>
            <div className="text-xs text-slate-500 mb-2">Things that fuel my mind and keep me balanced.</div>
            <div className="w-7 h-[2px] bg-[#c8421a]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {beyondCode.map((bc) => (
              <div key={bc.lbl1} className="flex flex-col items-center text-center lg:border-l lg:border-slate-100 lg:first:border-none lg:pl-3">
                <div className="text-2xl text-[#c8421a] mb-2">{bc.icon}</div>
                <div className="text-xs font-bold text-slate-700 leading-tight">
                  {bc.lbl1}<br />{bc.lbl2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
