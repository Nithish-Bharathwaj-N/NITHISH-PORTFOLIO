'use client';

import React from 'react';

export function Skills() {
  const arsenal = [
    { name: 'Python', pct: 92 },
    { name: 'TypeScript / JavaScript', pct: 88 },
    { name: 'React 19 / Next.js', pct: 90 },
    { name: 'FastAPI / Flask', pct: 86 },
    { name: 'Linux & Web Security', pct: 88 },
    { name: 'Three.js & WebGL', pct: 80 },
    { name: 'WebSockets / Real-Time Streaming', pct: 88 },
    { name: 'AI Agents & RAG (Gemini/OpenAI)', pct: 85 },
    { name: 'PostgreSQL / MySQL / MongoDB', pct: 82 },
    { name: 'AWS (EC2, S3, Lambda) & Docker', pct: 80 },
    { name: 'OAuth 2.0 / JWT Auth', pct: 86 },
    { name: 'Threat Modeling & OWASP Top 10', pct: 85 },
    { name: 'Scikit-Learn & Predictive ML', pct: 80 },
    { name: 'Tailwind CSS & Modern UI/UX', pct: 90 },
    { name: 'Git / GitHub Actions CI/CD', pct: 88 },
  ];

  const marqueePills = [
    '🐍 Python', '⚡ TypeScript', '⚛️ React 19', '▲ Next.js',
    '🟢 Node.js', '⚡ FastAPI', '🌶️ Flask', '🐘 PostgreSQL',
    '🐬 MySQL', '🍃 MongoDB', '🔴 Redis', '🛡️ Linux Security',
    '🔐 OAuth 2.0', '🤖 Gemini AI', '🧠 AI Agents & RAG',
    '📊 Scikit-Learn', '🔌 WebSockets', '🎲 Three.js / WebGL',
    '🎨 Tailwind CSS', '☁️ AWS (EC2/S3)', '🐳 Docker',
    '🐙 GitHub Actions', '🐧 Linux', '🌐 REST APIs', '🎨 Blender 3D'
  ];

  const domainBreakdown = [
    {
      domain: 'Cybersecurity',
      icon: '🛡️',
      color: 'text-[#c8421a]',
      skills: ['Linux Security', 'Web Security & OWASP', 'OAuth 2.0 / JWT Auth', 'Secure API Design', 'Threat Modeling', 'Security Automation', 'Network Security', 'Wireshark & Audit']
    },
    {
      domain: 'Full-Stack Eng.',
      icon: '</>',
      color: 'text-[#a855f7]',
      skills: ['Python (3.x)', 'TypeScript / JS', 'React 19 & Next.js', 'FastAPI & Flask', 'Node.js & Express', 'PostgreSQL & MySQL', 'MongoDB & Redis', 'Tailwind CSS']
    },
    {
      domain: 'AI & Machine Learning',
      icon: '🧠',
      color: 'text-[#10b981]',
      skills: ['Gemini & LLM APIs', 'AI Agents & RAG', 'Scikit-Learn', 'Predictive Analytics', 'PyTorch Basics', 'Vector Databases', 'Prompt Engineering']
    },
    {
      domain: 'Real-Time & 3D',
      icon: '🧊',
      color: 'text-[#f59e0b]',
      skills: ['Three.js & WebGL', 'WebSockets (1Hz Stream)', 'Socket.io', 'Blender 3D Modeling', 'Digital Twin Arch.', 'Telemetry Pipelines', 'State Sync Engine']
    },
    {
      domain: 'Cloud & DevOps',
      icon: '☁️',
      color: 'text-[#06b6d4]',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker Containerization', 'GitHub Actions CI/CD', 'Linux Admin (Bash)', 'Nginx Web Server', 'Vercel & Netlify', 'REST & GraphQL APIs']
    }
  ];

  const principles = [
    { num: '01', title: 'Security', desc: 'Every system I build follows zero-trust principles and secure design patterns.' },
    { num: '02', title: 'Clean Architecture', desc: 'Scalable, maintainable, and modular architectures that stand the test of time.' },
    { num: '03', title: 'Real-Time Oriented', desc: 'Building low-latency systems with real-time data pipelines and event-driven design.' },
    { num: '04', title: 'Intelligent Systems', desc: 'Leveraging AI/ML to create systems that learn, predict, and make real impact.' },
    { num: '05', title: 'Build for Impact', desc: 'Solving meaningful engineering problems for aerospace, healthcare, and security.' },
  ];

  return (
    <section id="skills" className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          02 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 id="skills-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Expertise &amp; <span className="text-[#c8421a]">Technology.</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
          Technologies and domains I work with to build secure, intelligent, and real-time systems that solve complex engineering problems.
        </p>

        {/* TOP DASHBOARD ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_340px] gap-6 mb-8 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#161616] border border-white/10 rounded-xl p-4 text-center">
                <div className="text-xl mb-1">💻</div>
                <div className="font-display text-2xl font-extrabold text-white">30+</div>
                <div className="text-[0.68rem] font-bold text-slate-400 uppercase tracking-wider">Technologies</div>
              </div>
              <div className="bg-[#161616] border border-white/10 rounded-xl p-4 text-center">
                <div className="text-xl mb-1">⭐</div>
                <div className="font-display text-2xl font-extrabold text-white">5</div>
                <div className="text-[0.68rem] font-bold text-slate-400 uppercase tracking-wider">Core Domains</div>
              </div>
            </div>

            {/* TERMINAL BLOCK */}
            <div className="bg-[#090d16] border border-white/10 rounded-xl overflow-hidden font-mono flex-1 flex flex-col">
              <div className="bg-white/5 px-3 py-2 flex items-center gap-1.5 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[0.65rem] text-white/40 ml-auto">engineer@portfolio:~</span>
              </div>
              <div className="p-3.5 text-[0.72rem] leading-relaxed text-white/80">
                <span className="text-[#c8421a] font-bold">&gt; engineer@portfolio:~$ cat philosophy.txt</span>
                <span className="block text-white/70 mt-1.5">
                  I combine security-first thinking with modern engineering practices to build systems that are scalable, reliable, and impactful.
                  <span className="inline-block w-1.5 h-3 bg-[#c8421a] ml-1 animate-pulse" />
                </span>
              </div>
            </div>
          </div>

          {/* CENTER RADIAL HUB DIAGRAM */}
          <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 relative flex items-center justify-center min-h-[380px] overflow-hidden">
            <div className="relative w-full max-w-[420px] h-[360px] mx-auto">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 360">
                <circle cx="210" cy="180" r="120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="210" cy="180" r="65" fill="none" stroke="rgba(200,66,26,0.2)" strokeWidth="1.5" />
                <line x1="210" y1="180" x2="210" y2="40" stroke="#c8421a" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="180" x2="345" y2="110" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="180" x2="320" y2="290" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="180" x2="100" y2="290" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />
                <line x1="210" y1="180" x2="75" y2="110" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-radial from-[#c8421a]/20 to-[#0d0d0d] border-2 border-[#c8421a] flex flex-col items-center justify-center text-center z-10 shadow-[0_0_20px_rgba(200,66,26,0.3)]">
                <span className="font-display text-lg font-black text-[#c8421a] leading-none">NB</span>
                <span className="text-[0.55rem] font-bold text-white/70 uppercase tracking-wider mt-1">Core Engineering</span>
              </div>

              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 p-2 bg-[#0d0d0d]/95 border border-[#c8421a] rounded-lg text-center z-10 hover:scale-105 transition-transform">
                <div className="text-sm">🛡️</div>
                <div className="text-[0.68rem] font-extrabold uppercase text-white">Cybersecurity</div>
                <div className="text-[0.58rem] text-white/50">Security First</div>
              </div>

              <div className="absolute top-20 right-2 w-32 p-2 bg-[#0d0d0d]/95 border border-[#10b981] rounded-lg text-center z-10 hover:scale-105 transition-transform">
                <div className="text-sm">🧠</div>
                <div className="text-[0.68rem] font-extrabold uppercase text-white">AI &amp; ML</div>
                <div className="text-[0.58rem] text-white/50">Intelligence Layer</div>
              </div>

              <div className="absolute bottom-4 right-6 w-32 p-2 bg-[#0d0d0d]/95 border border-[#f59e0b] rounded-lg text-center z-10 hover:scale-105 transition-transform">
                <div className="text-sm">🧊</div>
                <div className="text-[0.68rem] font-extrabold uppercase text-white">Real-Time 3D</div>
                <div className="text-[0.58rem] text-white/50">Simulate &amp; Visualize</div>
              </div>

              <div className="absolute bottom-4 left-6 w-32 p-2 bg-[#0d0d0d]/95 border border-[#06b6d4] rounded-lg text-center z-10 hover:scale-105 transition-transform">
                <div className="text-sm">☁️</div>
                <div className="text-[0.68rem] font-extrabold uppercase text-white">Cloud &amp; DevOps</div>
                <div className="text-[0.58rem] text-white/50">Deploy &amp; Automate</div>
              </div>

              <div className="absolute top-20 left-2 w-32 p-2 bg-[#0d0d0d]/95 border border-[#a855f7] rounded-lg text-center z-10 hover:scale-105 transition-transform">
                <div className="text-sm">&lt;/&gt;</div>
                <div className="text-[0.68rem] font-extrabold uppercase text-white">Full-Stack</div>
                <div className="text-[0.58rem] text-white/50">Build &amp; Scale</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (SCROLLABLE ALL ARSENAL PROGRESS METERS) */}
          <div className="bg-[#161616] border border-white/10 rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#c8421a] mb-3">
              <span>ALL SKILLS &amp; ARSENAL</span>
              <span className="text-[0.6rem] text-white/40">PROFICIENCY</span>
            </div>
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {arsenal.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-white/90">
                    <span>{item.name}</span>
                    <span className="text-[#c8421a] text-[0.7rem]">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c8421a] to-[#f97316] rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILED ALL SKILLS GRID BY DOMAIN */}
        <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-white mb-3 mt-4">
          COMPLETE SKILLS BREAKDOWN BY DOMAIN •
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {domainBreakdown.map((d) => (
            <div key={d.domain} className="bg-[#161616] border border-white/10 rounded-xl p-4 transition-all hover:border-[#c8421a]/40 hover:-translate-y-1">
              <div className="flex items-center gap-2 font-display text-sm font-extrabold text-white mb-3 pb-2 border-b border-white/10">
                <span className={d.color}>{d.icon}</span> {d.domain}
              </div>
              <ul className="space-y-1.5 text-xs text-white/70">
                {d.skills.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="text-[#c8421a] font-bold">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MIDDLE ECOSYSTEM MARQUEE */}
        <div className="bg-[#161616] border border-white/10 rounded-xl p-4 mb-8 overflow-hidden">
          <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-400 mb-3">
            TECHNOLOGY ECOSYSTEM •
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="py-1 animate-marquee whitespace-nowrap flex gap-2">
              {marqueePills.concat(marqueePills).map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d0d0d] border border-white/10 text-xs font-semibold text-white/80 hover:border-[#c8421a]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM PRINCIPLES */}
        <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 lg:p-7">
          <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#c8421a] mb-4">
            ENGINEERING PRINCIPLES •
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {principles.map((p) => (
              <div
                key={p.num}
                className="bg-[#0d0d0d]/80 border border-white/5 rounded-xl p-4 transition-all hover:-translate-y-1 hover:border-[#c8421a]/40 hover:bg-[#c8421a]/5"
              >
                <div className="font-display text-sm font-black text-[#c8421a] mb-1.5">{p.num}</div>
                <div className="text-xs font-bold text-white mb-1.5">{p.title}</div>
                <div className="text-[0.7rem] text-white/50 leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
