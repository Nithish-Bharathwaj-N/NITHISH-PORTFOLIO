'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { skillGroups } from '@/lib/portfolio-data';
import { Icon, type IconName } from '@/components/ui/icon';
import {
  SectionShell,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/primitives';

export function Skills() {
  const reduce = useReducedMotion();
  return (
    <SectionShell id="skills" className="py-24 sm:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Tools, languages, and domains I work with"
        description="From low-level systems to polished frontends — the stack I use to ship."
      />

      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <motion.article
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full overflow-hidden rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-brand-500/40"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />

              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background text-brand-500 transition-colors group-hover:border-brand-500/40 group-hover:bg-brand-500/10">
                  <Icon
                    name={group.icon as IconName}
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">
                  {group.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
