'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { achievements } from '@/lib/portfolio-data';
import { Icon, type IconName } from '@/components/ui/icon';
import {
  SectionShell,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/primitives';

export function Achievements() {
  const reduce = useReducedMotion();
  return (
    <SectionShell id="achievements" className="pt-0">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & recognition"
        description="Competitive programming, hackathons, CTFs, and beyond-the-screen pursuits."
      />

      <StaggerGroup
        fast
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {achievements.map((a) => (
          <StaggerItem key={a.title}>
            <motion.article
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full items-center gap-3.5 overflow-hidden rounded-xl border border-border/70 bg-card/40 p-4 transition-colors hover:border-brand-500/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/60 bg-background text-brand-500 transition-colors group-hover:bg-brand-500/10">
                <Icon
                  name={a.icon as IconName}
                  className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium tracking-tight">
                  {a.title}
                </p>
                {a.detail && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {a.detail}
                  </p>
                )}
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-brand-500" />
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
