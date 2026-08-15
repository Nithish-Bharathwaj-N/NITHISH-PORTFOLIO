'use client';

import React from 'react';

export function About() {
  const stats = [
    { icon: '</>', num: '500+', lbl1: 'LeetCode', lbl2: 'Problems' },
    { icon: '🏆', num: '5+', lbl1: 'Hackathon', lbl2: 'Finalist' },
    { icon: '🚀', num: '3+', lbl1: 'Major', lbl2: 'Projects' },
    { icon: '⏱️', num: '5-6 Hrs', lbl1: 'Daily', lbl2: 'Learning' }
  ];

  const skillsOverview = [
    { name: 'Cybersecurity', pct: 85 },
    { name: 'Web Development', pct: 80 },
    { name: 'AI / Machine Learning', pct: 70 },
    { name: 'Data Structures & Algorithms', pct: 90 },
    { name: 'Problem Solving', pct: 90 },
    { name: 'Databases', pct: 75 },
    { name: 'DevOps & Tools', pct: 65 }
  ];

  const beyondCode = [
    { icon: '📖', lbl1: 'Reading', lbl2: 'Books' },
    { icon: '🏋️', lbl1: 'Workout &', lbl2: 'Fitness' },
    { icon: '✈️', lbl1: 'Travel &', lbl2: 'Exploration' },
    { icon: '🎧', lbl1: 'Music &', lbl2: 'Focus' },
    { icon: '📈', lbl1: 'Personal', lbl2: 'Growth' }
  ];

  const journeySteps = [
    { time: 'MID 2025', icon: '</>', title: 'Competitive Programming', desc: 'Started my coding journey, solving problems and building strong DSA foundation.' },
    { time: 'END 2025', icon: '🛡️', title: 'Cybersecurity', desc: 'Explored security fundamentals, networking, ethical hacking and tools.' },
    { time: 'EARLY 2026', icon: '💻', title: 'Full-Stack Development', desc: 'Building end-to-end web applications and real-world projects.' },
    { time: 'MID 2026', icon: '🧠', title: 'AI / Machine Learning', desc: 'Diving into ML models, data and intelligent systems.' },
    { time: 'NOW', icon: '🚀', title: 'Projects & Hackathons', desc: 'Building solutions, participating in hackathons and creating impact.', isNow: true }
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-24 px-6 lg:px-12 text-[#0f172a]">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1.2fr_1fr] gap-10 mb-8 items-start">
          {/* LEFT COLUMN: TITLE, QUOTE, PORTRAIT CUTOUT WITH PEACH BACKDROP */}
          <div className="flex flex-col">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">
              02 <span className="text-slate-300">——</span>
            </div>
            <h2 id="about-title" className="font-display text-5xl font-black text-[#0f172a] leading-none mb-3 tracking-tight">
              ABOUT<br /><span className="text-[#c8421a]">ME.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 italic mb-7 leading-relaxed">
              I enjoy solving complex problems, building real-world solutions, and constantly learning.
            </p>

            {/* PORTRAIT STAGE */}
            <div className="relative w-[280px] h-[310px] mx-auto flex items-end justify-center">
              <div className="absolute left-[-20px] top-[60px] w-[50px] h-[100px] opacity-60 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:10px_10px]" />
              <div className="absolute right-[-15px] top-[40px] w-[260px] h-[260px] border-r border-[#c8421a]/25 rounded-full pointer-events-none" />
              <div className="absolute bottom-0 w-[230px] h-[230px] rounded-full bg-gradient-to-br from-orange-100 to-amber-200" />
              <img src="images/nithish-about.jpg" alt="Nithish Bharathwaj N Portrait" className="relative z-10 w-[260px] h-[300px] object-cover object-top" />
            </div>
          </div>

          {/* CENTER COLUMN: WHO AM I & 4 STATS */}
          <div className="flex flex-col">
            <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
              <span className="text-[#c8421a]">👤</span> WHO AM I?
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              I'm a second-year BE Cybersecurity student at <strong className="text-[#c8421a] font-extrabold">Chennai Institute of Technology</strong> with a strong passion for problem solving, building impactful projects, and exploring the intersection of security, AI, and full-stack development.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              I love learning by doing. From competitive programming to cybersecurity, from full-stack development to AI/ML, I enjoy turning ideas into real solutions. Hackathons, projects, and challenges keep me motivated to grow every day.
            </p>

            <div className="h-[1px] bg-slate-100 my-8" />

            {/* 4 STATS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
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

          {/* RIGHT COLUMN: SKILLS OVERVIEW & BEYOND CODE */}
          <div className="flex flex-col gap-9">
            <div>
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="text-[#c8421a]">📊</span> SKILLS OVERVIEW
              </div>
              <div className="space-y-3">
                {skillsOverview.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>{item.name}</span>
                      <span className="text-[#c8421a]">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#c8421a] to-amber-500 rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="text-[#c8421a]">❤️</span> BEYOND CODE
              </div>
              <div className="grid grid-cols-5 gap-2.5">
                {beyondCode.map((bc) => (
                  <div key={bc.lbl1} className="flex flex-col items-center text-center">
                    <div className="text-xl text-[#c8421a] mb-1.5">{bc.icon}</div>
                    <div className="text-[0.68rem] font-bold text-slate-600 leading-tight">
                      {bc.lbl1}<br />{bc.lbl2}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH TIMELINE CARD */}
        <div className="bg-white border border-black/10 rounded-2xl p-7 lg:p-8 shadow-sm">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-6 flex items-center gap-2">
            <span className="text-[#c8421a]">📍</span> MY JOURNEY SO FAR
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 relative">
            <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#c8421a] via-orange-400 to-emerald-500 z-0" />
            {journeySteps.map((s) => (
              <div key={s.time} className="flex flex-col items-center text-center relative z-10">
                <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">{s.time}</div>
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-base font-bold mb-3 ${
                    s.isNow ? 'bg-emerald-500 text-white shadow-[0_0_16px_#10b981]' : 'bg-white border-2 border-[#c8421a] text-[#c8421a] shadow-sm'
                  }`}
                >
                  {s.icon}
                </div>
                <div className="font-display text-xs font-extrabold text-[#0f172a] mb-1">{s.title}</div>
                <div className="text-[0.68rem] text-slate-500 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
