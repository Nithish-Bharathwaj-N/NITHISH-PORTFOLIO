'use client';

import React from 'react';

export function About() {
  const specItems = [
    { lbl: '👤 NAME', val: 'Nithish Bharathwaj N' },
    { lbl: '💼 ROLE', val: 'Cybersecurity • AI/ML • Full-Stack Engineer' },
    { lbl: '🎓 EDUCATION', val: 'BE Cybersecurity | Chennai Institute of Technology' },
    { lbl: '📍 LOCATION', val: 'Chennai, Tamil Nadu, India' },
    { lbl: '✉️ EMAIL', val: 'nithishbharathwajn@gmail.com' },
    { lbl: '🗣️ LANGUAGES', val: 'Tamil (Native) • English (Fluent)' }
  ];

  const whoStats = [
    { icon: '</>', num: '500+', lbl: 'LeetCode Problems' },
    { icon: '🏆', num: '5+', lbl: 'Hackathon Finalist' },
    { icon: '🚀', num: '3+', lbl: 'Projects Shipped' },
    { icon: '⏱️', num: '5-6 Hrs', lbl: 'Daily Learning' }
  ];

  const approachSteps = [
    { icon: '💡', name: 'Learn', desc: 'Understand deeply and explore possibilities.' },
    { icon: '</>', name: 'Build', desc: 'Build, break, debug and make it better.' },
    { icon: '🎯', name: 'Solve', desc: 'Solve real-world problems with impact.' },
    { icon: '📈', name: 'Improve', desc: 'Iterate, optimize and keep leveling up.' }
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
    { icon: '📖', title: 'Reading Books' },
    { icon: '🏋️', title: 'Workout & Fitness' },
    { icon: '🎬', title: 'Tamil Movies' },
    { icon: '✈️', title: 'Travel & Exploration' },
    { icon: '📈', title: 'Personal Growth' },
    { icon: '🎧', title: 'Music & Focus' }
  ];

  const journeySteps = [
    { time: 'Till 2025 Mid', icon: '</>', title: 'Competitive Programming', desc: 'Started my coding journey solving problems and building strong DSA foundation.' },
    { time: 'End 2025', icon: '🛡️', title: 'Cybersecurity', desc: 'Explored security fundamentals, networking, ethical hacking and tools.' },
    { time: 'Early 2026', icon: '💻', title: 'Full-Stack Development', desc: 'Building end-to-end web applications and real-world projects.' },
    { time: 'Mid 2026', icon: '🧠', title: 'AI / Machine Learning', desc: 'Diving into ML models, data and intelligent systems.' },
    { time: 'Now', icon: '🚀', title: 'Projects & Hackathons', desc: 'Building solutions, participating in hackathons and creating impact.', isNow: true }
  ];

  return (
    <section id="about" className="bg-[#f5f5f3] py-20 lg:py-24 px-6 lg:px-16 text-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
          01 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 id="about-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-1">
          ABOUT <span className="text-[#c8421a]">ME.</span>
        </h2>
        <p className="text-sm text-slate-500 italic mb-8">
          "I enjoy solving complex problems, building real-world solutions, and constantly learning."
        </p>

        {/* MAIN 3-COLUMN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr_300px] gap-5 mb-6">
          {/* LEFT COLUMN: PHOTO & SPECS */}
          <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border-2 border-[#c8421a] shadow-[0_0_20px_rgba(200,66,26,0.25)]">
                <img src="images/nithish-photo.jpg" alt="Nithish Bharathwaj N Portrait" className="w-full h-full object-cover object-top" />
              </div>
              <div className="space-y-2.5 text-xs">
                {specItems.map((item) => (
                  <div key={item.lbl} className="pb-2 border-b border-slate-100 last:border-none">
                    <div className="text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{item.lbl}</div>
                    <div className="font-bold text-[#0f172a]">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: WHO AM I & MY APPROACH */}
          <div className="space-y-5">
            {/* WHO AM I */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-3 flex items-center gap-2">
                👤 WHO AM I?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                I'm a second-year BE Cybersecurity student at <strong className="text-[#0f172a]">Chennai Institute of Technology</strong> with a strong passion for problem solving, building impactful projects, and exploring the intersection of security, AI, and full-stack development.
                <br /><br />
                I love learning by doing. From competitive programming to cybersecurity, from full-stack development to AI/ML, I enjoy turning ideas into real solutions. Hackathons, projects, and challenges keep me motivated to grow every day.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {whoStats.map((stat) => (
                  <div key={stat.lbl} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-base text-[#c8421a] mb-1">{stat.icon}</div>
                    <div className="font-display text-lg font-extrabold text-[#0f172a]">{stat.num}</div>
                    <div className="text-[0.62rem] font-bold text-slate-500 mt-0.5">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MY APPROACH */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                💡 MY APPROACH
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {approachSteps.map((step) => (
                  <div key={step.name} className="flex flex-col items-center text-center">
                    <div className="w-11 h-11 rounded-full bg-[#c8421a]/10 border border-[#c8421a]/30 flex items-center justify-center text-base text-[#c8421a] mb-2">
                      {step.icon}
                    </div>
                    <div className="font-display text-xs font-extrabold text-[#0f172a] mb-1">{step.name}</div>
                    <div className="text-[0.65rem] text-slate-500 leading-snug">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS OVERVIEW & BEYOND CODE */}
          <div className="space-y-5">
            {/* SKILLS OVERVIEW */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                📊 SKILLS OVERVIEW
              </div>
              <div className="space-y-2.5">
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

            {/* BEYOND CODE */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-3 flex items-center gap-2">
                🎲 BEYOND CODE
              </div>
              <div className="grid grid-cols-3 gap-2">
                {beyondCode.map((bc) => (
                  <div key={bc.title} className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-center hover:border-[#c8421a]/40 transition-all hover:-translate-y-0.5">
                    <div className="text-base mb-1">{bc.icon}</div>
                    <div className="text-[0.62rem] font-extrabold text-slate-700 leading-tight">{bc.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH: MY JOURNEY SO FAR */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 lg:p-7 shadow-sm">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-5 flex items-center gap-2">
            📅 MY JOURNEY SO FAR
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {journeySteps.map((s) => (
              <div key={s.time} className="flex flex-col">
                <div className="text-[0.62rem] font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">{s.time}</div>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-2.5 ${
                    s.isNow ? 'bg-emerald-500 text-white shadow-[0_0_12px_#10b981]' : 'bg-[#c8421a]/10 border border-[#c8421a]/30 text-[#c8421a]'
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
