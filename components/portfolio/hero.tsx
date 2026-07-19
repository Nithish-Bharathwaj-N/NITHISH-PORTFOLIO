'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  heroBadge,
  heroHeadline,
  heroSupporting,
  profile,
} from '@/lib/portfolio-data';
import { Icon } from '@/components/ui/icon';
import { HeroVisual, FloatingCards } from './hero-visual';

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const badgeV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const lineV: Variants = {
  hidden: { opacity: 0, y: 28 },
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

function splitHeadline(text: string) {
  const words = text.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function Hero() {
  const reduce = useReducedMotion();
  const [lineA, lineB] = React.useMemo(() => splitHeadline(heroHeadline), []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_75%)] opacity-60" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <motion.div
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={badgeV}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {heroBadge}
            </span>
          </motion.div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[clamp(2.75rem,5.2vw,4.6rem)]">
            <motion.span variants={lineV} className="block">
              {lineA}
            </motion.span>
            <motion.span variants={lineV} className="block">
              {lineB}{' '}
              <span className="relative whitespace-nowrap text-brand-500">
                solutions
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
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          <motion.p
            variants={paraV}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {heroSupporting}
          </motion.p>

          <motion.div
            variants={btnV}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Projects
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur transition-all hover:border-foreground/30 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon name="download" className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={btnV}
            className="flex items-center gap-6 pt-2 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for internships
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden sm:inline">Based in Chennai, India</span>
          </motion.div>
        </motion.div>

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

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
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
