'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  profile,
  socials,
} from '@/lib/portfolio-data';
import { Icon, type IconName } from '@/components/ui/icon';
import { HeroVisual, FloatingCards } from './hero-visual';

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const pretitleV: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const titleV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const paraV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const btnV: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Hudson-style Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_30%,transparent_80%)] opacity-50" />
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      {/* Social list sidebar (Hudson theme style) */}
      <div className="hidden lg:fixed lg:bottom-12 lg:left-8 lg:z-30 lg:flex lg:flex-col lg:items-center lg:gap-5">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="transition-transform hover:-translate-y-1 hover:text-brand-500"
            >
              <Icon name={s.icon as IconName} className="h-5 w-5" />
            </a>
          ))}
        </div>
        <div className="h-16 w-px bg-border" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        <motion.div
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          {/* Hudson Pretitle & Status Badge */}
          <motion.div variants={pretitleV} className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
              Hello
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Top 8 Aerothon 2026 Finalist (HAL & IIT Indore)
            </span>
          </motion.div>

          {/* Hudson Big Bold Typography Headline */}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[clamp(2.8rem,5vw,4.5rem)]">
            <motion.span variants={titleV} className="block text-foreground">
              I'm {profile.name}
            </motion.span>
            <motion.span variants={titleV} className="block text-muted-foreground">
              Full-Stack & AI Engineer
            </motion.span>
            <motion.span variants={titleV} className="block text-foreground">
              based in{' '}
              <span className="relative inline-block text-brand-500">
                Chennai, India.
                <svg
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-brand-500/40"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 7 Q 50 1 100 5 T 198 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          {/* Supporting Bio Paragraph */}
          <motion.p
            variants={paraV}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Designing & engineering high-precision software combining **AI**, **3D WebGL Digital Twins** (*SubAERO*), and **Cybersecurity**. Solved **500+ LeetCode problems** (Rating: **1771**).
          </motion.p>

          {/* Hudson Action Buttons */}
          <motion.div
            variants={btnV}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              More About Me
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:border-brand-500 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Get In Touch
              <Icon name="send" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-md border border-border/70 bg-secondary/40 px-5 py-3.5 text-sm font-medium transition-all hover:border-foreground/30 hover:bg-secondary"
            >
              <Icon name="download" className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Visual & Floating Highlights */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className={cn(
            'relative mx-auto flex w-full max-w-[520px] items-center justify-center'
          )}
        >
          <HeroVisual />
          <FloatingCards />
        </motion.div>
      </div>

      {/* Hudson Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand-500 sm:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon name="arrowDown" className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
