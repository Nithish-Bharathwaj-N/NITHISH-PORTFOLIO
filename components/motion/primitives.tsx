'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

const baseEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: baseEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: baseEase } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: baseEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className,
  fast = false,
}: {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fast ? staggerFast : staggerContainer}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : variants}
    >
      {children}
    </motion.div>
  );
}

export const easeOutCubic = baseEase;

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4 sm:mb-16',
        align === 'center' && 'items-center text-center'
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-brand-500">
            <span className="h-px w-6 bg-brand-500/60" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
