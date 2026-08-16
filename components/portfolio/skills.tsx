'use client';

import React from 'react';

export function Skills() {
  return (
    <section id="skills" className="bg-[#0d0d0d] py-24 px-6 lg:px-12 border-t border-white/10 text-white relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* TOP LAYOUT: LEFT SIDE & RIGHT 4 CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-9 items-start">
          {/* LEFT SIDE HEADER */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-[#d9471f] mb-4 before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-[#d9471f]">
              EXPERTISE &amp; TECHNOLOGY
            </div>
            <h2 id="skills-title" className="font-display text-4xl lg:text-5xl font-black text-white leading-none tracking-tight mb-5">
              WHAT I KNOW.<br />WHAT I <span className="text-[#d9471f]">BUILD</span> WITH.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              I work across cybersecurity, intelligent systems and modern software engineering to build secure, scalable and real-time solutions.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#works" className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-white/[0.03] border border-[#d9471f]/40 text-xs font-black text-white hover:bg-[#d9471f] hover:border-[#d9471f] transition-all">
                📦 View Full Tech Stack &rarr;
              </a>

              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-black text-white leading-none">30+</span>
                  <span className="text-[0.68rem] font-extrabold tracking-wider uppercase text-slate-400 mt-1">TECHNOLOGIES</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-black text-white leading-none">5</span>
                  <span className="text-[0.68rem] font-extrabold tracking-wider uppercase text-slate-400 mt-1">CORE DOMAINS</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 DOMAIN CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* CARD 01 */}
            <div className="bg-[#131317] border border-white/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/40 hover:-translate-y-1 transition-all shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/25 flex items-center justify-center text-xl text-[#d9471f] mb-4">
                🛡️
              </div>
              <span className="font-display text-xs font-black text-[#d9471f] tracking-widest mb-0.5">01</span>
              <h3 className="font-display text-sm font-black text-white tracking-wider uppercase mb-1">CYBERSECURITY</h3>
              <p className="text-[0.74rem] text-slate-400 leading-snug mb-3.5">Secure systems. Protect what matters.</p>
              <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Linux &amp; System Security</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Web Security</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Networking</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Authentication &amp; Authorization</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Security Research</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Secure Architecture</li>
              </ul>
            </div>

            {/* CARD 02 */}
            <div className="bg-[#131317] border border-white/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/40 hover:-translate-y-1 transition-all shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/25 flex items-center justify-center text-xl text-[#d9471f] mb-4">
                🧠
              </div>
              <span className="font-display text-xs font-black text-[#d9471f] tracking-widest mb-0.5">02</span>
              <h3 className="font-display text-sm font-black text-white tracking-wider uppercase mb-1">AI &amp; INTELLIGENT SYSTEMS</h3>
              <p className="text-[0.74rem] text-slate-400 leading-snug mb-3.5">Intelligence that learns. Systems that adapt.</p>
              <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> LLM Applications</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> AI Agents</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> RAG Systems</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Machine Learning</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Computer Vision</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> AI-assisted Engineering</li>
              </ul>
            </div>

            {/* CARD 03 */}
            <div className="bg-[#131317] border border-white/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/40 hover:-translate-y-1 transition-all shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/25 flex items-center justify-center text-xl text-[#d9471f] mb-4">
                &lt;/&gt;
              </div>
              <span className="font-display text-xs font-black text-[#d9471f] tracking-widest mb-0.5">03</span>
              <h3 className="font-display text-sm font-black text-white tracking-wider uppercase mb-1">FULL-STACK ENGINEERING</h3>
              <p className="text-[0.74rem] text-slate-400 leading-snug mb-3.5">Build robust. Ship fast. Scale endlessly.</p>
              <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> React / Next.js</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> TypeScript / JavaScript</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Node.js / Express</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Python / FastAPI</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> REST APIs / GraphQL</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Real-time Applications</li>
              </ul>
            </div>

            {/* CARD 04 */}
            <div className="bg-[#131317] border border-white/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/40 hover:-translate-y-1 transition-all shadow-md">
              <div className="w-11 h-11 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/25 flex items-center justify-center text-xl text-[#d9471f] mb-4">
                ☁️
              </div>
              <span className="font-display text-xs font-black text-[#d9471f] tracking-widest mb-0.5">04</span>
              <h3 className="font-display text-sm font-black text-white tracking-wider uppercase mb-1">SYSTEMS &amp; INFRASTRUCTURE</h3>
              <p className="text-[0.74rem] text-slate-400 leading-snug mb-3.5">Infrastructure that scales. Systems that perform.</p>
              <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Docker / Containers</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> AWS Cloud Services</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Linux Administration</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Git / GitHub</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> CI / CD Pipelines</li>
                <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> 3D / WebGL / Simulation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE CARD: TECH STACK CATEGORIES */}
        <div className="bg-[#131317] border border-white/10 rounded-2xl p-7 lg:p-9 flex flex-col gap-6">
          <div className="font-display text-base font-black text-white tracking-wider uppercase">
            TECH STACK <span className="text-[#d9471f]">•</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">&lt;/&gt;</span> LANGUAGES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">🧱</span> FRAMEWORKS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'FastAPI', 'Node.js', 'Express'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">🗄️</span> DATA &amp; DATABASES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">🧠</span> AI &amp; ML
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['OpenAI', 'Gemini', 'RAG', 'AI Agents', 'ML'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">☁️</span> DEVOPS &amp; CLOUD
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Docker', 'AWS', 'Linux', 'Nginx', 'GitHub Actions'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">🛠️</span> TOOLS &amp; PLATFORMS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['VS Code', 'Postman', 'Figma', 'Jupyter', 'Unity'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">⚡</span> REAL-TIME &amp; SYSTEMS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['WebSockets', 'Socket.IO', 'Kafka', 'Redis Streams'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="text-xs font-black tracking-widest text-slate-200 uppercase flex items-center gap-1.5">
                <span className="text-[#d9471f]">🎯</span> OTHER SKILLS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['System Design', 'OOP', 'DSA', 'Linux Scripting'].map((t) => (
                  <span key={t} className="text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-[#d9471f] hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARD: ENGINEERING PRINCIPLES */}
        <div className="bg-[#131317] border border-white/10 rounded-2xl p-7 lg:p-9 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="flex items-center gap-3 border-l-4 border-[#d9471f] pl-3.5">
            <div className="font-display text-xs font-black text-white tracking-wider uppercase leading-snug">
              &gt;_ ENGINEERING PRINCIPLES I LIVE BY
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            <div className="flex flex-col">
              <span className="text-lg text-[#d9471f] mb-1.5">🛡️</span>
              <div className="font-display text-xs font-black text-white tracking-wider uppercase mb-1">SECURITY FIRST</div>
              <div className="text-[0.72rem] text-slate-400 leading-snug">Every system I build follows zero-trust principles.</div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg text-[#d9471f] mb-1.5">⚡</span>
              <div className="font-display text-xs font-black text-white tracking-wider uppercase mb-1">PERFORMANCE DRIVEN</div>
              <div className="text-[0.72rem] text-slate-400 leading-snug">I design for speed, scalability and real-world usage.</div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg text-[#d9471f] mb-1.5">&lt;/&gt;</span>
              <div className="font-display text-xs font-black text-white tracking-wider uppercase mb-1">CLEAN &amp; MAINTAINABLE</div>
              <div className="text-[0.72rem] text-slate-400 leading-snug">Clean code, modular architecture and continuous improvement.</div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg text-[#d9471f] mb-1.5">👤</span>
              <div className="font-display text-xs font-black text-white tracking-wider uppercase mb-1">USER FOCUSED</div>
              <div className="text-[0.72rem] text-slate-400 leading-snug">I build solutions that solve real problems for real users.</div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg text-[#d9471f] mb-1.5">🎯</span>
              <div className="font-display text-xs font-black text-white tracking-wider uppercase mb-1">IMPACT ORIENTED</div>
              <div className="text-[0.72rem] text-slate-400 leading-snug">I aim to build systems that create measurable impact.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
