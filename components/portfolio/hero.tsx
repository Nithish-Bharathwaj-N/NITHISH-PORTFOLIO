'use client';

import React, { useState, useEffect } from 'react';

export function Hero() {
  const words = ['intelligent', 'secure', 'real-time', 'scalable', 'AI-powered', 'resilient'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(words[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCharIndex((prev) => prev + 1);
          if (charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setCharIndex((prev) => prev - 1);
          if (charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 85
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="intro" className="min-h-screen pt-[62px] grid grid-cols-1 lg:grid-cols-2 bg-[#0d0d0d]">
      <div className="flex flex-col justify-center px-6 lg:px-20 py-16 lg:py-20">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c8421a] mb-6">
          Hello, I&apos;m Nithish
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          I build{' '}
          <span className="text-[#c8421a] border-r-4 border-[#c8421a] animate-pulse pr-1">
            {words[wordIndex].slice(0, charIndex)}
          </span>
          <br />
          <span className="text-[#c8421a]">software</span> systems.
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {['Cybersecurity', 'AI', 'Full-Stack', 'Real-Time Systems'].map((pill) => (
            <span
              key={pill}
              className="text-xs font-semibold text-white/70 px-3.5 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {pill}
            </span>
          ))}
        </div>

        <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-md mb-8">
          Cybersecurity-focused engineer building AI-powered, real-time and 3D digital twin systems that solve complex real-world problems.
        </p>

        <div className="flex flex-wrap gap-3.5 mb-10">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8421a] hover:bg-[#e05225] text-white font-bold text-xs uppercase tracking-wider rounded-md border-2 border-[#c8421a] transition-all transform hover:-translate-y-0.5"
          >
            View Selected Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:border-white/60 text-white/80 hover:text-white font-bold text-xs uppercase tracking-wider rounded-md border-2 border-white/20 transition-all transform hover:-translate-y-0.5"
          >
            Download CV ↓
          </a>
        </div>

        <nav className="flex gap-6 text-xs text-white/40 font-medium">
          <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LeetCode
          </a>
          <a href="mailto:nithishbharathwajn@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </nav>
      </div>

      <div className="relative overflow-hidden min-h-[40vh] lg:min-h-full bg-gradient-to-br from-[#111] to-[#1a1a1a]">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
        <img
          src="/images/nithish-photo.jpg"
          alt="Nithish Bharathwaj N"
          className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.88] contrast-[1.06]"
        />
      </div>
    </section>
  );
}
