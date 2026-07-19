'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon, type IconName } from '@/components/ui/icon';

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  label?: string;
  icon?: IconName;
  accent?: boolean;
};

type Edge = { from: string; to: string };

const nodes: Node[] = [
  { id: 'core', x: 50, y: 50, r: 7, accent: true, icon: 'cpu' },
  { id: 'ai', x: 22, y: 26, r: 5, label: 'AI', icon: 'sparkles' },
  { id: 'sec', x: 78, y: 24, r: 5, label: 'Sec', icon: 'shield' },
  { id: 'fs', x: 18, y: 72, r: 5, label: 'Full', icon: 'layers' },
  { id: 'data', x: 80, y: 74, r: 5, label: 'Data', icon: 'database' },
  { id: 'a1', x: 50, y: 12, r: 3 },
  { id: 'a2', x: 50, y: 88, r: 3 },
  { id: 'a3', x: 8, y: 50, r: 3 },
  { id: 'a4', x: 92, y: 50, r: 3 },
  { id: 'b1', x: 35, y: 38, r: 2.5 },
  { id: 'b2', x: 65, y: 38, r: 2.5 },
  { id: 'b3', x: 35, y: 62, r: 2.5 },
  { id: 'b4', x: 65, y: 62, r: 2.5 },
];

const edges: Edge[] = [
  { from: 'core', to: 'ai' },
  { from: 'core', to: 'sec' },
  { from: 'core', to: 'fs' },
  { from: 'core', to: 'data' },
  { from: 'ai', to: 'a1' },
  { from: 'sec', to: 'a1' },
  { from: 'fs', to: 'a2' },
  { from: 'data', to: 'a2' },
  { from: 'ai', to: 'a3' },
  { from: 'fs', to: 'a3' },
  { from: 'sec', to: 'a4' },
  { from: 'data', to: 'a4' },
  { from: 'core', to: 'b1' },
  { from: 'core', to: 'b2' },
  { from: 'core', to: 'b3' },
  { from: 'core', to: 'b4' },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const layerX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const layerY = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative aspect-square w-full max-w-[520px] [perspective:1200px]"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-brand-500/15 blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ rotateX: reduce ? 0 : tiltX, rotateY: reduce ? 0 : tiltY }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-[12%] rounded-full border border-border/70"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-500" />
          <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground/40" />
        </motion.div>
        <motion.div
          className="absolute inset-[22%] rounded-full border border-dashed border-border/50"
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />

        {/* Node graph SVG */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          style={{ x: reduce ? 0 : layerX, y: reduce ? 0 : layerY }}
          aria-hidden
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="22" fill="url(#coreGlow)" />
          {edges.map((edge, i) => {
            const a = getNode(edge.from);
            const b = getNode(edge.to);
            return (
              <motion.line
                key={`${edge.from}-${edge.to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#edgeGrad)"
                strokeWidth={0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.04, ease: 'easeOut' }}
              />
            );
          })}
          {nodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {node.accent && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r + 2.5}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.3"
                  strokeOpacity="0.5"
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={node.accent ? '#3B82F6' : 'hsl(var(--foreground))'}
                fillOpacity={node.accent ? 1 : 0.85}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="none"
                stroke="hsl(var(--background))"
                strokeWidth="0.5"
              />
            </motion.g>
          ))}
        </motion.svg>

        {/* Node labels (HTML for crisp icon + text) */}
        <motion.div
          className="absolute inset-0"
          style={{ x: reduce ? 0 : layerX, y: reduce ? 0 : layerY }}
        >
          {nodes
            .filter((n) => n.label || n.icon)
            .map((node, i) => (
              <motion.div
                key={`label-${node.id}`}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-1 text-[10px] font-medium backdrop-blur"
                style={{ left: `${node.x}%`, top: `${node.y + 9}%` }}
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              >
                {node.icon && (
                  <Icon name={node.icon} className="h-3 w-3 text-brand-500" />
                )}
                {node.label && <span>{node.label}</span>}
              </motion.div>
            ))}
        </motion.div>

        {/* Core pulse */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500"
          animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />
      </motion.div>
    </div>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

type FloatCard = {
  title: string;
  subtitle: string;
  icon: IconName;
  className: string;
  float: 'float' | 'float-slow';
  delay: number;
};

const floatCards: FloatCard[] = [
  {
    title: 'AI',
    subtitle: 'Generative models',
    icon: 'sparkles',
    className:
      'left-[2%] top-[14%] sm:left-[-4%] sm:top-[10%]',
    float: 'float',
    delay: 0,
  },
  {
    title: 'Cybersecurity',
    subtitle: 'CTF • Linux',
    icon: 'shield',
    className: 'right-[0%] top-[4%] sm:right-[-2%] sm:top-[-2%]',
    float: 'float-slow',
    delay: 1.2,
  },
  {
    title: 'Full Stack',
    subtitle: 'React • Node',
    icon: 'layers',
    className: 'left-[4%] bottom-[16%] sm:left-[-2%] sm:bottom-[14%]',
    float: 'float-slow',
    delay: 0.6,
  },
  {
    title: '513+',
    subtitle: 'LeetCode Problems',
    icon: 'code',
    className: 'right-[2%] bottom-[10%] sm:right-[-4%] sm:bottom-[8%]',
    float: 'float',
    delay: 1.8,
  },
  {
    title: '5+',
    subtitle: 'Hackathon Finalist',
    icon: 'trophy',
    className: 'left-1/2 top-[-4%] -translate-x-1/2 sm:left-[46%] sm:top-[-6%]',
    float: 'float',
    delay: 2.4,
  },
];

export function FloatingCards() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0">
      {floatCards.map((card, i) => (
        <motion.div
          key={card.title}
          custom={i}
          variants={cardVariants}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className={cn('absolute', card.className)}
        >
          <div
            className={cn(
              'flex items-center gap-3 rounded-xl border border-border/70 bg-background/85 px-3.5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-md',
              !reduce && card.float
            )}
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
              <Icon name={card.icon} className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-[11px] text-muted-foreground">{card.subtitle}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
