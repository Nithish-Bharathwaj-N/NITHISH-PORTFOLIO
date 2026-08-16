'use client';

import React from 'react';
import Image from 'next/image';

export function Achievements() {
  return (
    <section id="achievements" className="bg-[#0d0d0d] py-24 px-6 lg:px-12 border-t border-white/10 text-white relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-9">
        {/* TOP ROW: LEFT HEADER, MIDDLE FEATURED CARD, RIGHT SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 items-stretch">
          {/* LEFT HEADER */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-[#d9471f] mb-3.5 before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-[#d9471f]">
              ACHIEVEMENTS
            </div>
            <h2 id="ach-title" className="font-display text-4xl lg:text-5xl font-black text-white leading-none tracking-tight mb-4">
              PROOF OF WORK.<br /><span className="text-[#d9471f]">MILESTONES</span> THAT MATTER.
            </h2>
            <p className="text-xs lg:text-sm text-slate-400 leading-relaxed mb-6">
              From hackathons to code, every milestone represents learning, consistency, and impact.
            </p>
            <a href="#works" className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-white/[0.03] border border-[#d9471f]/40 text-xs font-black text-white hover:bg-[#d9471f] hover:border-[#d9471f] transition-all w-fit">
              🏆 View All Achievements &rarr;
            </a>
          </div>

          {/* MIDDLE FEATURED CARD */}
          <div className="bg-[#131317] border border-[#d9471f]/30 rounded-2xl p-6 lg:p-7 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-center shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-[0.7rem] font-black tracking-widest text-[#d9471f] uppercase mb-2">
                🏆 FEATURED ACHIEVEMENT
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-black text-white mb-1">
                Aerothon 2026
              </h3>
              <div className="text-xs font-black text-[#d9471f] tracking-wider uppercase mb-3">
                TOP 8 FINALIST <span className="text-slate-400 font-normal">HAL × IIT Indore</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Built an enterprise-grade aerospace mission control and digital twin platform for real-time engine health monitoring and predictive maintenance.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Aerospace', 'Digital Twin', 'Real-Time', 'AI/ML', 'Systems'].map((t) => (
                  <span key={t} className="text-[0.68rem] font-bold text-slate-300 bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#works" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#d9471f]/15 border border-[#d9471f]/40 text-xs font-black text-white hover:bg-[#d9471f] transition-colors w-fit">
                View Project Case Study &rarr;
              </a>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/subaero-preview.jpg"
                alt="Aerothon 2026 Digital Twin"
                width={220}
                height={165}
                className="w-full aspect-[4/3] object-cover block"
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR STATS */}
          <div className="bg-[#131317] border border-white/10 rounded-2xl p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="text-xl text-[#d9471f] shrink-0 mt-0.5">&lt;/&gt;</span>
              <div>
                <div className="font-display text-2xl font-black text-white leading-none">500+</div>
                <div className="text-xs font-bold text-slate-300 mt-0.5">LeetCode Problems Solved</div>
                <div className="text-[0.68rem] text-slate-400">Across All Difficulty Levels</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="text-xl text-[#d9471f] shrink-0 mt-0.5">📊</span>
              <div>
                <div className="font-display text-2xl font-black text-white leading-none">1771</div>
                <div className="text-xs font-bold text-slate-300 mt-0.5">Peak Contest Rating</div>
                <div className="text-[0.68rem] text-slate-400">118-Day Coding Streak</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="text-xl text-[#d9471f] shrink-0 mt-0.5">🐙</span>
              <div>
                <div className="font-display text-2xl font-black text-white leading-none">24+</div>
                <div className="text-xs font-bold text-slate-300 mt-0.5">GitHub Repositories</div>
                <div className="text-[0.68rem] text-slate-400">250+ Commits</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="text-xl text-[#d9471f] shrink-0 mt-0.5">🏆</span>
              <div>
                <div className="font-display text-2xl font-black text-white leading-none">5+</div>
                <div className="text-xs font-bold text-slate-300 mt-0.5">Hackathon Finalist</div>
                <div className="text-[0.68rem] text-slate-400">National Level Competitions</div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE CARD: HACKATHON & COMPETITIONS HORIZONTAL TIMELINE */}
        <div className="bg-[#131317] border border-white/10 rounded-2xl p-7 lg:p-9 flex flex-col gap-6">
          <div className="font-display text-base font-black text-white tracking-wider uppercase">
            HACKATHON &amp; COMPETITIONS <span className="text-[#d9471f">•</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* NODE 1: AEROTHON 2026 */}
            <div className="bg-white/[0.02] border border-[#d9471f]/50 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all bg-[#d9471f]/5">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">🏆</div>
              <div className="font-display text-xs font-black text-white mb-0.5">Aerothon 2026</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">TOP 8 FINALIST</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">HAL × IIT Indore</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2026</div>
            </div>

            {/* NODE 2: HACKDRIVEN 2026 (USER REQUESTED!) */}
            <div className="bg-white/[0.02] border border-[#d9471f]/50 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all bg-[#d9471f]/5">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">⚡</div>
              <div className="font-display text-xs font-black text-white mb-0.5">HackDriven 2026</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">FINALIST</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">National Hackathon</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2026</div>
            </div>

            {/* NODE 3: SMART HORIZON 2026 */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">🏅</div>
              <div className="font-display text-xs font-black text-white mb-0.5">Smart Horizon</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">FINALIST</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">National Hackathon</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2026</div>
            </div>

            {/* NODE 4: CODEATHON 2025 */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">&lt;/&gt;</div>
              <div className="font-display text-xs font-black text-white mb-0.5">Codeathon 2025</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">FINALIST</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">National Hackathon</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2025</div>
            </div>

            {/* NODE 5: CIT SDG HACKATHON */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">🌱</div>
              <div className="font-display text-xs font-black text-white mb-0.5">CIT SDG Hackathon</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">FINALIST</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">National Hackathon</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2025</div>
            </div>

            {/* NODE 6: ABACUS COMPETITION */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4.5 flex flex-col items-center text-center hover:border-[#d9471f] hover:-translate-y-1 transition-all">
              <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-base text-[#d9471f] mb-2.5">🌐</div>
              <div className="font-display text-xs font-black text-white mb-0.5">Abacus Competition</div>
              <div className="text-[0.65rem] font-black text-[#d9471f] tracking-wider uppercase mb-1">QUALIFIER</div>
              <div className="text-[0.68rem] text-slate-400 mb-3">International Qualified</div>
              <div className="font-display text-xs font-black text-[#d9471f] pt-2 border-t border-white/10 w-full">2025</div>
            </div>
          </div>
        </div>

        {/* LOWER CARD: JOURNEY TIMELINE */}
        <div className="bg-[#131317] border border-white/10 rounded-2xl p-7 lg:p-9 flex flex-col gap-6">
          <div className="font-display text-base font-black text-white tracking-wider uppercase">
            JOURNEY TIMELINE <span className="text-[#d9471f">•</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/30 flex items-center justify-center text-xs text-[#d9471f] shrink-0">
                  &lt;/&gt;
                </div>
                <div className="font-display text-xs font-black text-slate-400 uppercase">Mid 2025</div>
              </div>
              <div className="font-display text-xs font-black text-white">Competitive Programming</div>
              <div className="text-[0.74rem] text-slate-400 leading-snug">Building problem solving skills and algorithm foundations.</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/30 flex items-center justify-center text-xs text-[#d9471f] shrink-0">
                  🛡️
                </div>
                <div className="font-display text-xs font-black text-slate-400 uppercase">End 2025</div>
              </div>
              <div className="font-display text-xs font-black text-white">Cybersecurity</div>
              <div className="text-[0.74rem] text-slate-400 leading-snug">Explored security fundamentals, networking and ethical hacking.</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/30 flex items-center justify-center text-xs text-[#d9471f] shrink-0">
                  &lt;/&gt;
                </div>
                <div className="font-display text-xs font-black text-slate-400 uppercase">Early 2026</div>
              </div>
              <div className="font-display text-xs font-black text-white">Full-Stack Development</div>
              <div className="text-[0.74rem] text-slate-400 leading-snug">Started building end-to-end web applications and real-time systems.</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/30 flex items-center justify-center text-xs text-[#d9471f] shrink-0">
                  🧠
                </div>
                <div className="font-display text-xs font-black text-slate-400 uppercase">Mid 2026</div>
              </div>
              <div className="font-display text-xs font-black text-white">AI / Machine Learning</div>
              <div className="text-[0.74rem] text-slate-400 leading-snug">Dived into ML models, LLMs, agents and intelligent systems.</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-full bg-[#d9471f]/10 border border-[#d9471f]/30 flex items-center justify-center text-xs text-[#d9471f] shrink-0">
                  🚀
                </div>
                <div className="font-display text-xs font-black text-slate-400 uppercase">Now</div>
              </div>
              <div className="font-display text-xs font-black text-white">Building Impact</div>
              <div className="text-[0.74rem] text-slate-400 leading-snug">Working on ambitious projects and participating in real-world hackathons.</div>
            </div>
          </div>
        </div>

        {/* BOTTOM QUOTE BANNER */}
        <div className="bg-[#131317] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <span className="font-display text-3xl font-black text-[#d9471f] leading-none shrink-0">“</span>
            <div className="text-sm lg:text-base text-slate-300 leading-relaxed">
              Achievements are not just wins, they are the <strong className="text-[#d9471f] font-extrabold">lessons</strong> that shape what&apos;s next.
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-0.5 shrink-0">
            <div className="font-serif italic font-bold text-2xl text-[#d9471f]">Nithish</div>
            <div className="text-[0.62rem] font-black tracking-widest text-slate-400 uppercase">KEEP LEARNING. KEEP BUILDING. KEEP IMPACTING.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
