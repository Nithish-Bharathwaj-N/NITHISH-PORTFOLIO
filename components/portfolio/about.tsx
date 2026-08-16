'use client';

import React from 'react';
import Image from 'next/image';

export function About() {
  return (
    <>
      <section id="about" className="bg-[#f7f6f2] py-20 px-6 lg:px-12 border-t border-black/5 relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start">
          {/* LEFT COLUMN - PROFILE PHOTO & CARDS */}
          <div className="flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-white before:content-[''] before:absolute before:top-6 before:left-0 before:w-1.5 before:bottom-6 before:bg-[#d9471f] before:rounded-r before:z-10">
              <Image
                src="/images/nithish-about.jpg"
                alt="Nithish Bharathwaj N Formal Suit Portrait"
                width={360}
                height={360}
                className="w-full aspect-square object-cover block"
                priority
              />
            </div>

            <div className="flex flex-col gap-3.5 py-2 px-1">
              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">👤</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800 leading-snug">Nithish Bharathwaj N</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Cybersecurity • AI/ML • Full-Stack Engineer</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">🎓</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800 leading-snug">BE Cybersecurity – Second Year</strong>
                  <span className="text-xs text-slate-500 block mt-0.5">Chennai Institute of Technology</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">📍</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800 leading-snug">Chennai, Tamil Nadu, India</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#d9471f] shrink-0 mt-0.5">✉️</span>
                <div>
                  <strong className="block text-sm font-extrabold text-slate-800 leading-snug">nithishbharathwajn@gmail.com</strong>
                </div>
              </div>
            </div>

            <div className="bg-black/[0.03] border border-black/[0.06] rounded-xl p-5 flex items-start gap-3.5 mt-2">
              <span className="font-display text-4xl font-black text-[#d9471f] leading-none shrink-0">“</span>
              <div className="text-xs font-semibold text-slate-700 leading-relaxed">
                Curious by nature.<br />
                Driven by purpose.<br />
                Focused on impact.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT & STATS */}
          <div className="flex flex-col">
            <h2 id="about-title" className="font-display text-5xl lg:text-7xl font-black text-slate-800 leading-none tracking-tight mb-4">
              About<br /><span className="text-[#d9471f]">Me.</span>
            </h2>
            <div className="flex items-center gap-3.5 text-xs font-extrabold tracking-widest text-slate-500 uppercase mb-8 before:content-[''] before:inline-block before:w-9 before:h-0.5 before:bg-[#d9471f]">
              LEARNER. BUILDER. PROBLEM SOLVER.
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700 mb-8">
              <p>
                I&apos;m a second-year BE Cybersecurity student at <strong className="text-slate-900 font-extrabold">Chennai Institute of Technology</strong>, driven by curiosity and a passion for solving real-world problems through technology.
              </p>
              <p>
                I enjoy building secure, intelligent and real-time systems at the intersection of cybersecurity, AI and full-stack development.
              </p>
              <p>
                I learn by doing — from competitive programming and security research to AI experiments and engineering impactful applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-black/10 mb-7">
              <div className="flex flex-col pr-4 border-r border-black/10">
                <span className="text-xl text-[#d9471f] mb-2">&lt;/&gt;</span>
                <div className="font-display text-3xl font-black text-slate-900 leading-none mb-1">500+</div>
                <div className="text-[0.75rem] font-bold text-slate-500 uppercase leading-snug">LeetCode<br />Problems Solved</div>
              </div>

              <div className="flex flex-col pr-4 border-r border-black/10">
                <span className="text-xl text-[#d9471f] mb-2">🏆</span>
                <div className="font-display text-3xl font-black text-slate-900 leading-none mb-1">5+</div>
                <div className="text-[0.75rem] font-bold text-slate-500 uppercase leading-snug">Hackathon<br />Finalist</div>
              </div>

              <div className="flex flex-col pr-4 border-r border-black/10">
                <span className="text-xl text-[#d9471f] mb-2">🚀</span>
                <div className="font-display text-3xl font-black text-slate-900 leading-none mb-1">3+</div>
                <div className="text-[0.75rem] font-bold text-slate-500 uppercase leading-snug">Major<br />Projects</div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl text-[#d9471f] mb-2">🕒</span>
                <div className="font-display text-3xl font-black text-slate-900 leading-none mb-1">5–6 Hrs</div>
                <div className="text-[0.75rem] font-bold text-slate-500 uppercase leading-snug">Daily<br />Learning</div>
              </div>
            </div>

            <div>
              <a href="#journey" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#d9471f] hover:translate-x-1 transition-transform">
                More about my journey &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION STRIP BELOW ABOUT */}
      <div className="bg-[#0f0f11] py-11 px-6 lg:px-12 border-t border-white/10 text-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-center">
          <div className="flex flex-col">
            <h3 className="font-display text-3xl font-black text-white">
              What Drives <span className="text-[#d9471f]">Me.</span>
            </h3>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="font-display text-4xl font-black text-[#d9471f] leading-none shrink-0">“</span>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              I believe in continuous learning, building with purpose, and creating solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
