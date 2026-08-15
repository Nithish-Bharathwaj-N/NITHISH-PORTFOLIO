'use client';

import React from 'react';

export function Achievements() {
  const topMetrics = [
    {
      icon: '</>',
      num: '500+',
      title: 'LeetCode Solved',
      sub: 'Across All Difficulty Levels',
      badge: '▲ 202%',
      stroke: '#c8421a',
      path: 'M0,15 L20,10 L40,14 L60,6 L80,12 L100,2',
      link: 'https://leetcode.com/u/nithish_cit/'
    },
    {
      icon: '📈',
      num: '1771',
      title: 'Peak Contest Rating',
      sub: '118-day Coding Streak',
      badge: 'Top 11%',
      stroke: '#a855f7',
      path: 'M0,16 L20,12 L40,8 L60,11 L80,5 L100,2',
      link: 'https://leetcode.com/u/nithish_cit/'
    },
    {
      icon: '🐙',
      num: '24 Repos',
      title: 'GitHub Contributions',
      sub: '10 Public Repos & 15+ Stars',
      badge: '250+ Commits',
      stroke: '#10b981',
      path: 'M0,18 L20,14 L40,10 L60,12 L80,4 L100,2',
      link: 'https://github.com/Nithish-Bharathwaj-N'
    },
    {
      icon: '🏆',
      num: 'Aerothon',
      title: '2026 Finalist',
      sub: 'HAL × IIT Indore',
      badge: 'Top 8',
      stroke: '#c8421a',
      path: 'M0,18 L20,14 L40,10 L60,12 L80,4 L100,2'
    }
  ];

  const badgeCards = [
    {
      sub: 'AEROTHON 2026',
      title: 'TOP 8 FINALIST',
      tag: 'HAL × IIT INDORE',
      featured: true,
      icon: '🏆'
    },
    {
      sub: 'SMART HORIZON 2026',
      title: 'FINALIST',
      tag: 'National Level Hackathon',
      featured: false,
      icon: '🎖️'
    },
    {
      sub: 'CODEATHON 2025',
      title: 'FINALIST',
      tag: 'National Level Hackathon',
      featured: false,
      icon: '</>'
    },
    {
      sub: 'CIT SDG HACKATHON 2025',
      title: 'FINALIST',
      tag: 'National Level Hackathon',
      featured: false,
      icon: '🌿'
    },
    {
      sub: 'ABACUS COMPETITION',
      title: 'QUALIFIER',
      tag: 'International Level Qualified',
      featured: false,
      icon: '🧮'
    }
  ];

  const journeySteps = [
    {
      time: 'MID 2025',
      icon: '</>',
      title: 'Started Competitive Programming',
      desc: 'Building problem solving skills and algorithms foundation.',
      color: 'border-[#c8421a] text-[#c8421a]'
    },
    {
      time: 'END 2025',
      icon: '🛡️',
      title: 'Cybersecurity',
      desc: 'Explored security fundamentals, networking, and ethical hacking concepts.',
      color: 'border-[#c8421a] text-[#c8421a]'
    },
    {
      time: 'EARLY 2026',
      icon: '💻',
      title: 'Full-Stack Development',
      desc: 'Started building end-to-end web applications and dynamic user experiences.',
      color: 'border-blue-500 text-blue-400'
    },
    {
      time: 'MID 2026',
      icon: '🧠',
      title: 'AI / Machine Learning',
      desc: 'Diving into ML models, data, and intelligent system building.',
      color: 'border-purple-500 text-purple-400'
    },
    {
      time: 'NOW',
      icon: '🚀',
      title: 'Working on Projects & Hackathons',
      desc: 'Building impactful solutions and participating in real-world hackathons.',
      isNow: true,
      color: 'border-emerald-500 text-emerald-400'
    }
  ];

  const beyondTech = [
    { icon: '🏐', label: 'District Level Throwball' },
    { icon: '🎲', label: 'Zonal Level Carrom Player' },
    { icon: '🏃', label: 'Athlete' },
    { icon: '🏏', label: 'Cricket Player' },
    { icon: '🧮', label: 'Abacus International Level Qualifier' }
  ];

  return (
    <section id="achievements" className="bg-[#0d0d0d] py-20 lg:py-24 px-6 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER BLOCK */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
            04 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
          </div>
          <h2 id="ach-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
            KEY <span className="text-[#c8421a]">ACHIEVEMENTS.</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            Milestones that reflect hard work, consistency, problem solving, and real-world engineering results.
          </p>
        </div>

        {/* TOP METRIC CARDS ROW (LEETCODE SOLVED, CONTEST RATING, GITHUB CONTRIBUTIONS, AEROTHON) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {topMetrics.map((m) => {
            const Content = (
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c8421a]/40 transition-all hover:-translate-y-1 h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold text-[#c8421a]">{m.icon}</div>
                    <span className="text-[0.65rem] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{m.badge}</span>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-white mb-1">{m.num}</div>
                  <div className="text-xs font-bold text-white/80 leading-tight mb-0.5">{m.title}</div>
                  <div className="text-[0.62rem] text-white/40">{m.sub}</div>
                </div>
                <svg className="w-full h-4 mt-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d={m.path} fill="none" stroke={m.stroke} strokeWidth="2" />
                </svg>
              </div>
            );

            return m.link ? (
              <a key={m.title} href={m.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                {Content}
              </a>
            ) : (
              <div key={m.title}>{Content}</div>
            );
          })}
        </div>

        {/* 5 BADGE CARDS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {badgeCards.map((b) => (
            <div
              key={b.sub}
              className={`rounded-2xl p-4 text-center flex flex-col items-center justify-between min-h-[180px] transition-all hover:-translate-y-1 ${
                b.featured
                  ? 'bg-gradient-to-b from-[#c8421a]/20 to-[#111111] border-2 border-[#c8421a] shadow-[0_0_24px_rgba(200,66,26,0.25)]'
                  : 'bg-[#111111] border border-white/10 hover:border-[#c8421a]'
              }`}
            >
              <div
                className={`w-11 h-11 mb-2.5 flex items-center justify-center text-base font-bold ${
                  b.featured
                    ? 'bg-[#c8421a] text-white rounded-xl shadow-[0_0_12px_#c8421a]'
                    : 'bg-[#c8421a]/15 text-[#c8421a] rounded-xl border border-[#c8421a]/30'
                }`}
              >
                {b.icon}
              </div>
              <div className="text-[0.6rem] font-extrabold uppercase tracking-wider text-white/50 mb-0.5 truncate w-full">{b.sub}</div>
              <div className={`font-display text-xs font-black uppercase tracking-wider my-1 leading-tight ${b.featured ? 'text-[#c8421a]' : 'text-white'}`}>
                {b.title}
              </div>
              <div className="text-[0.6rem] font-bold text-white/40 pt-1.5 border-t border-white/10 w-full truncate">{b.tag}</div>
            </div>
          ))}
        </div>

        {/* MIDDLE PANEL: MY JOURNEY */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 lg:p-7 mb-8">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
            🚀 MY JOURNEY
          </div>
          <div className="text-xs text-white/45 mb-7">A continuous path of learning, exploring, and building.</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {journeySteps.map((s) => (
              <div key={s.time} className="relative z-10">
                <div className="flex flex-col items-start mb-3">
                  <span className="text-[0.62rem] font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">{s.time}</span>
                  <div
                    className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center text-xs font-bold ${
                      s.isNow ? 'bg-emerald-500 border-white text-white shadow-[0_0_16px_#10b981] rounded-full' : `bg-[#161616] ${s.color}`
                    }`}
                  >
                    {s.icon}
                  </div>
                </div>
                <div className="font-display text-xs font-extrabold text-white mb-1">{s.title}</div>
                <div className="text-[0.68rem] text-white/45 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM PANEL: BEYOND TECHNOLOGY */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 lg:p-7">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
            ⭐ BEYOND TECHNOLOGY
          </div>
          <div className="text-xs text-white/45 mb-5">Sports, competitions, and activities that keep me balanced and driven.</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {beyondTech.map((item) => (
              <div key={item.label} className="bg-[#0d0d0d]/60 border border-white/5 rounded-xl p-3 flex items-center gap-3 hover:border-[#c8421a]/40 transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-full bg-[#c8421a]/15 border border-[#c8421a]/30 flex items-center justify-center text-sm text-[#c8421a] shrink-0">
                  {item.icon}
                </div>
                <div className="font-display text-[0.7rem] font-extrabold text-white uppercase leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
