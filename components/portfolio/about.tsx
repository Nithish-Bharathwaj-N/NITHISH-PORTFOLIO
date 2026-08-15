'use client';

import React from 'react';

export function About() {
  const specItems = [
    { icon: '👤', lbl: 'NAME', val: 'Nithish Bharathwaj N' },
    { icon: '💼', lbl: 'ROLE', val: 'Cybersecurity • AI/ML • Full-Stack Engineer' },
    { icon: '🎓', lbl: 'EDUCATION', val: 'BE Cybersecurity | Chennai Institute of Technology' },
    { icon: '📍', lbl: 'LOCATION', val: 'Chennai, Tamil Nadu, India' },
    { icon: '✉️', lbl: 'EMAIL', val: 'nithishbharathwajn@gmail.com' },
    { icon: '🗣️', lbl: 'LANGUAGES', val: 'Tamil (Native) • English (Fluent)' }
  ];

  const whoStats = [
    { icon: '</>', num: '500+', lbl: 'LeetCode Problems' },
    { icon: '🏆', num: '5+', lbl: 'Hackathon Finalist' },
    { icon: '🚀', num: '3+', lbl: 'Major Projects' },
    { icon: '⏱️', num: '5-6 Hrs', lbl: 'Daily Learning' }
  ];

  const approachSteps = [
    { icon: '💡', title: 'LEARN', desc: 'Understand deeply and explore possibilities.' },
    { icon: '</>', title: 'BUILD', desc: 'Build, break, debug and make it better.' },
    { icon: '🎯', title: 'SOLVE', desc: 'Solve real-world problems with impact.' },
    { icon: '📈', title: 'IMPROVE', desc: 'Iterate, optimize and keep leveling up.' }
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
    { icon: '🎧', title: 'Music & Focus' },
    { icon: '🏏', title: 'Cricket Player' },
    { icon: '🎓', title: 'Always Learning' }
  ];

  const journeySteps = [
    { time: 'Till 2025 Mid', icon: '</>', title: 'Competitive Programming', desc: 'Started my coding journey solving problems and building strong DSA foundation.' },
    { time: 'End 2025', icon: '🛡️', title: 'Cybersecurity', desc: 'Explored security fundamentals, networking, ethical hacking and tools.' },
    { time: 'Early 2026', icon: '💻', title: 'Full-Stack Development', desc: 'Building end-to-end web applications and real-world projects.' },
    { time: 'Mid 2026', icon: '🧠', title: 'AI / Machine Learning', desc: 'Diving into ML models, data and intelligent systems.' },
    { time: 'Now', icon: '🚀', title: 'Projects & Hackathons', desc: 'Building solutions, participating in hackathons and creating impact.', isNow: true }
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-24 px-6 lg:px-12 text-[#0f172a]">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr_360px] gap-8 mb-8 items-stretch">
          {/* LEFT COLUMN: TITLE, QUOTE, CIRCULAR PHOTO & SPECS */}
          <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm flex flex-col items-center">
            <div className="w-full flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
              02 ------ <span className="w-7 h-[1px] bg-slate-400 inline-block" />
            </div>
            <h2 id="about-title" className="w-full font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-2 leading-none">
              ABOUT<br /><span className="text-[#c8421a]">ME.</span>
            </h2>

            <p className="w-full text-xs sm:text-sm text-slate-500 italic mb-6 leading-relaxed">
              “ I enjoy solving complex problems, building real-world solutions, and constantly learning. ”
            </p>

            {/* PERFECT CIRCULAR PHOTO FRAME */}
            <div className="relative w-52 h-52 mx-auto mb-7 flex items-center justify-center">
              <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#c8421a]/30 animate-[spin_35s_linear_infinite]" />
              <img
                src="images/nithish-about.jpg"
                alt="Nithish Bharathwaj N Portrait"
                className="w-full h-full rounded-full object-cover object-[center_15%] border-4 border-[#c8421a] shadow-[0_8px_24px_rgba(200,66,26,0.2)] relative z-10"
              />
            </div>

            {/* SPEC LIST */}
            <div className="w-full space-y-3 pt-5 border-t border-slate-100">
              {specItems.map((item) => (
                <div key={item.lbl} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-sm text-[#c8421a] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.6rem] font-extrabold uppercase tracking-wider text-slate-400">{item.lbl}</div>
                    <div className="text-xs font-bold text-[#0f172a] leading-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER COLUMN: WHO AM I & MY APPROACH */}
          <div className="space-y-6">
            {/* WHO AM I */}
            <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="text-[#c8421a]">👤</span> WHO AM I?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                I'm a second-year BE Cybersecurity student at <strong className="text-[#c8421a]">Chennai Institute of Technology</strong> with a strong passion for problem solving, building impactful projects, and exploring the intersection of security, AI, and full-stack development.
                <br /><br />
                I love learning by doing. From competitive programming to cybersecurity, from full-stack development to AI/ML, I enjoy turning ideas into real solutions. Hackathons, projects, and challenges keep me motivated to grow every day.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {whoStats.map((stat) => (
                  <div key={stat.lbl} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center hover:border-[#c8421a]/30 transition-all hover:-translate-y-0.5">
                    <div className="text-lg text-[#c8421a] mb-1">{stat.icon}</div>
                    <div className="font-display text-xl font-black text-[#0f172a]">{stat.num}</div>
                    <div className="text-[0.68rem] font-bold text-slate-500 mt-0.5">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MY APPROACH */}
            <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-5 flex items-center gap-2">
                <span className="text-[#c8421a]">💡</span> MY APPROACH
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {approachSteps.map((step) => (
                  <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-lg text-[#c8421a] mb-2.5">
                      {step.icon}
                    </div>
                    <div className="font-display text-xs font-extrabold text-[#0f172a] uppercase mb-1">{step.title}</div>
                    <div className="text-[0.68rem] text-slate-500 leading-snug">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS OVERVIEW & BEYOND CODE */}
          <div className="space-y-6">
            {/* SKILLS OVERVIEW */}
            <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm">
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

            {/* BEYOND CODE (8 ITEMS) */}
            <div className="bg-white border border-black/10 rounded-2xl p-7 shadow-sm">
              <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-3.5 flex items-center gap-2">
                <span className="text-[#c8421a]">🤍</span> BEYOND CODE
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {beyondCode.map((bc) => (
                  <div key={bc.title} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center flex flex-col items-center justify-center shadow-sm hover:border-[#c8421a]/40 transition-all hover:-translate-y-0.5">
                    <div className="text-lg mb-1">{bc.icon}</div>
                    <div className="text-[0.66rem] font-extrabold text-slate-700 leading-tight">{bc.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH: MY JOURNEY SO FAR */}
        <div className="bg-white border border-black/10 rounded-2xl p-7 lg:p-8 shadow-sm">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider text-[#0f172a] mb-6 flex items-center gap-2">
            <span className="text-[#c8421a]">📅</span> MY JOURNEY SO FAR
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {journeySteps.map((s) => (
              <div key={s.time} className="flex flex-col">
                <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">{s.time}</div>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-3 ${
                    s.isNow ? 'bg-emerald-500 text-white shadow-[0_0_12px_#10b981]' : 'bg-orange-50 border border-orange-200 text-[#c8421a]'
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
