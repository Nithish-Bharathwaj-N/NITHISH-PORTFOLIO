'use client';

import React from 'react';

export function HackathonMemories() {
  const allMemories = Array.from({ length: 14 }, (_, i) => `images/memories/memory_${i + 1}.jpg`);

  return (
    <section id="memories" className="bg-[#161616] py-16 lg:py-20 px-6 lg:px-12 text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#c8421a] bg-[#c8421a]/10 border border-[#c8421a]/25 px-3.5 py-1.5 rounded-full mb-3">
              🏆 HACKATHON & EVENT VAULT
            </div>
            <h2 id="memories-title" className="font-display text-4xl lg:text-5xl font-black text-white leading-none tracking-tight">
              HACKATHON <span className="text-[#c8421a]">MEMORIES.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            A visual timeline of late-night coding sessions, intense build marathons, pitch stages, team victories, and memorable hardware hackathons.
          </p>
        </div>

        {/* INFINITE MOVING FILMSTRIP MARQUEE */}
        <div className="overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="flex gap-4 w-max animate-[memMarquee_26s_linear_infinite] hover:[animation-play-state:paused]">
            {[...allMemories, ...allMemories].map((src, i) => (
              <div key={i} className="w-[220px] h-[145px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-xl hover:scale-105 hover:border-[#c8421a] transition-all duration-300">
                <img src={src} alt={`Memory ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
