'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutParagraph, aboutStats, profile } from '@/lib/portfolio-data';
import { SectionShell, SectionHeading, Reveal } from '@/components/motion/primitives';

function CountUp({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const numeric = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  React.useEffect(() => {
    if (reduce || numeric === 0) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(numeric * eased));
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = String(numeric);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numeric, reduce]);

  return (
    <span className={className}>
      <span ref={ref}>{reduce ? numeric : 0}</span>
      <span>{suffix}</span>
    </span>
  );
}

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Turning curiosity into software people use"
        description="A snapshot of who I am, what drives me, and the numbers behind the work."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Portrait */}
        <Reveal>
          <div className="relative flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-[340px]">
              {/* Rotating accent ring */}
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500/20 via-transparent to-brand-500/10 blur-xl"
                aria-hidden
              />
              <div className="absolute -inset-2 rounded-full border border-dashed border-border/70" aria-hidden />
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-border bg-secondary shadow-lg">
                <Image
                  src="/images/nithish-photo.jpg"
                  alt={`${profile.name} — portrait`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Status badge */}
              <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-border/70 bg-background/90 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
            </div>
            <div className="mt-6 text-center">
              <p className="text-base font-semibold tracking-tight">{profile.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Computer Science (Cyber Security)
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
                CSE • AI • Sec
              </span>
            </div>
          </div>
        </Reveal>

        {/* Text + stats */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.05}>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {aboutParagraph}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-border/70 bg-card/40 p-4 transition-colors hover:border-brand-500/40"
                >
                  <CountUp
                    value={stat.value}
                    className="block text-2xl font-semibold tracking-tight sm:text-3xl"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {['Problem Solver', 'Hackathon Finalist', 'AI Builder', 'Security Mindset'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
