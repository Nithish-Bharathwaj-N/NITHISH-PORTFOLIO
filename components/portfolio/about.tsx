'use client';

import React from 'react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-[#fbfaf7] py-20 px-6 lg:px-12 border-t border-black/5 text-[#0f172a] relative">
      <div className="max-w-[1400px] mx-auto">
        {/* TOP GRID: LEFT CARD & RIGHT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start mb-12">
          {/* LEFT SIDE CARD */}
          <div className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm flex flex-col gap-4.5">
            <div className="relative rounded-xl overflow-hidden bg-black before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:bottom-4 before:bg-[#d9471f] before:rounded-r before:z-10">
              <Image
                src="/images/nithish-about.jpg"
                alt="Nithish Bharathwaj N Portrait"
                width={360}
                height={360}
                className="w-full aspect-square object-cover block"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 py-1 px-1">
              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">👤</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900 leading-snug">Nithish Bharathwaj N</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Cybersecurity • AI • Full-Stack Engineer</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">🎓</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900 leading-snug">BE Cybersecurity – Second Year</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Chennai Institute of Technology</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">📍</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900 leading-snug">Chennai, Tamil Nadu, India</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">✉️</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-900 leading-snug">nithishbharathwajn@gmail.com</strong>
                </div>
              </div>
            </div>

            <div className="bg-[#fdf8f6] border border-[#d9471f]/15 rounded-xl p-4.5 flex items-start gap-3.5">
              <span className="font-display text-4xl font-black text-[#d9471f] leading-none shrink-0">“</span>
              <div className="text-xs font-semibold italic text-slate-700 leading-relaxed">
                Curious by nature.<br />
                Driven by purpose.<br />
                Focused on impact.
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-[#d9471f] mb-3 before:content-[''] before:inline-block before:w-6 before:h-0.5 before:bg-[#d9471f]">
              ABOUT ME
            </div>
            <h2 id="about-title" className="font-display text-4xl lg:text-6xl font-black text-slate-900 leading-none tracking-tight mb-6">
              THE PERSON BEHIND<br />THE <span className="text-[#d9471f]">SYSTEMS.</span>
            </h2>
            <div className="w-9 h-0.5 bg-[#d9471f] mb-6"></div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700">
              <p>
                I&apos;m a second-year BE Cybersecurity student at <strong className="text-slate-900 font-extrabold">Chennai Institute of Technology</strong>, driven by curiosity and a passion for solving real-world problems through technology.
              </p>
              <p>
                I enjoy building <strong className="text-slate-900 font-extrabold">secure, intelligent</strong> and <strong className="text-slate-900 font-extrabold">real-time systems</strong> at the intersection of cybersecurity, AI and full-stack development.
              </p>
              <p>
                <strong className="text-slate-900 font-extrabold">I learn by doing</strong> — from competitive programming and security research to AI experiments and engineering impactful applications.
              </p>
            </div>

            {/* 3 CARDS BELOW PARAGRAPHS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-9">
              {/* CARD 01 */}
              <div className="bg-white border border-black/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/30 hover:-translate-y-1 transition-all shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-lg text-[#d9471f] shrink-0">
                    🧠
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[0.7rem] font-black text-[#d9471f] tracking-widest">01</span>
                    <span className="font-display text-xs font-black text-slate-900 tracking-wider uppercase">HOW I THINK</span>
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
                <ul className="space-y-2 text-xs font-semibold text-slate-600">
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Curiosity</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Explore</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Build</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Break</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Learn</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Improve</li>
                </ul>
              </div>

              {/* CARD 02 */}
              <div className="bg-white border border-black/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/30 hover:-translate-y-1 transition-all shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-lg text-[#d9471f] shrink-0">
                    &lt;/&gt;
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[0.7rem] font-black text-[#d9471f] tracking-widest">02</span>
                    <span className="font-display text-xs font-black text-slate-900 tracking-wider uppercase">WHAT I BUILD</span>
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
                <ul className="space-y-2 text-xs font-semibold text-slate-600">
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Secure Systems</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> AI-Powered Apps</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Real-time Platforms</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Engineering Interfaces</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Automation Tools</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Impactful Solutions</li>
                </ul>
              </div>

              {/* CARD 03 */}
              <div className="bg-white border border-black/10 rounded-2xl p-5 flex flex-col hover:border-[#d9471f]/30 hover:-translate-y-1 transition-all shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#d9471f]/10 flex items-center justify-center text-lg text-[#d9471f] shrink-0">
                    🎯
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[0.7rem] font-black text-[#d9471f] tracking-widest">03</span>
                    <span className="font-display text-xs font-black text-slate-900 tracking-wider uppercase">WHAT DRIVES ME</span>
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-[#d9471f] mb-3.5"></div>
                <ul className="space-y-2 text-xs font-semibold text-slate-600">
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Difficult Problems</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Continuous Learning</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Building in Public</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Research &amp; Curiosity</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Discipline &amp; Consistency</li>
                  <li className="flex items-center gap-1.5"><span className="text-[#d9471f] font-black">•</span> Creating Real Impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM WIDE QUOTE BANNER */}
        <div className="bg-[#fdfbf7] border border-[#d9471f]/20 rounded-2xl p-7 lg:p-9 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="font-display text-4xl font-black text-[#d9471f] leading-none shrink-0">“</span>
            <div className="text-sm lg:text-base text-slate-700 font-medium leading-relaxed">
              I believe in learning deeply, building consistently,<br className="hidden sm:inline" />
              and creating solutions that make a <strong className="text-[#d9471f] font-extrabold">real difference.</strong>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
            <div className="font-serif italic font-bold text-3xl text-[#d9471f]">Nithish</div>
            <div className="text-[0.65rem] font-black tracking-widest text-slate-400 uppercase">KEEP LEARNING. KEEP BUILDING.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
