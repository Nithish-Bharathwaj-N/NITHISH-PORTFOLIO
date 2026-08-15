'use client';

import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('intro');

  useEffect(() => {
    const secs = Array.from(document.querySelectorAll('section[id]'));
    const handleScroll = () => {
      let cur = secs[0]?.id || 'intro';
      secs.forEach((s) => {
        if (s.getBoundingClientRect().top <= 100) cur = s.id;
      });
      setActiveSec(cur);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-[1000] h-[62px] flex items-center justify-between px-6 md:px-12 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-[7px] bg-[#c8421a] flex items-center justify-center font-bold text-xs text-white tracking-tight shrink-0">
            NB
          </div>
          <span className="text-xs font-bold text-white/75 uppercase tracking-wider">
            Nithish Bharathwaj N
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {[
            { id: 'intro', label: 'Intro' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Expertise' },
            { id: 'works', label: 'Work' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeSec === item.id ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3.5">
          <span className="hidden md:inline-flex items-center gap-2 text-[0.74rem] font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Work
          </span>
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-1 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <span className="w-5 h-0.5 bg-white/70 rounded-full" />
            <span className="w-5 h-0.5 bg-white/70 rounded-full" />
            <span className="w-5 h-0.5 bg-white/70 rounded-full" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed top-[62px] left-0 right-0 z-[999] bg-[#0d0d0d]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-4">
          {[
            { id: 'intro', label: 'Intro' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Expertise' },
            { id: 'works', label: 'Work' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-semibold text-white/70 border-b border-white/5 last:border-b-0 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
