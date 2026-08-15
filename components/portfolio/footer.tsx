'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 px-6 lg:px-20 py-6 text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded bg-[#c8421a] flex items-center justify-center font-bold text-[0.7rem] text-white">
          NB
        </div>
        <span className="font-bold text-white/70 uppercase tracking-wider text-[0.72rem]">
          Nithish Bharathwaj N
        </span>
      </div>

      <div className="text-white/30 text-[0.72rem]">
        Cybersecurity · AI · Full-Stack · Real-Time Systems
      </div>

      <div className="text-white/25 text-[0.72rem]">
        © 2026 Nithish Bharathwaj N. Designed &amp; engineered by me.
      </div>
    </footer>
  );
}
