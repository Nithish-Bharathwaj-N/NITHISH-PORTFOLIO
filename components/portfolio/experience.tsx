'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { experiences, education } from '@/lib/portfolio-data';
import { Icon } from '@/components/ui/icon';
import {
  SectionShell,
  SectionHeading,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/primitives';

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been building"
        description="Internships, programs, and academic milestones along the way."
      />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Experience column */}
        <div>
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Experience
          </h3>
          <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.05}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-brand-500">
                    <Icon name="cpu" className="h-4 w-4" />
                  </span>
                  <motion.article
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-brand-500/40"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold tracking-tight">
                        {exp.role}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-500">
                      {exp.org}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education column */}
        <div>
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Education
          </h3>
          <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.05}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-brand-500">
                    <Icon name="graduation" className="h-4 w-4" />
                  </span>
                  <motion.article
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-brand-500/40"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold tracking-tight">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-500">
                      {edu.field}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {edu.school}
                    </p>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function Certifications() {
  return (
    <SectionShell id="education" className="pt-0">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & coursework"
        description="Verified certifications across Python, cybersecurity, AI, and systems."
      />
      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert, i) => (
          <StaggerItem key={cert.title}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full items-start gap-4 overflow-hidden rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-brand-500/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border/60 bg-background text-brand-500 transition-colors group-hover:bg-brand-500/10">
                <Icon
                  name="shield"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold leading-snug tracking-tight">
                  {cert.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-xs font-medium text-brand-500">
                  {cert.date}
                </p>
              </div>
              <Icon
                name="arrowUpRight"
                className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-brand-500"
              />
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

const certs = [
  { title: 'Python Essentials 1', issuer: 'Cisco Networking Academy', date: '2024' },
  { title: 'Python Essentials 2', issuer: 'Cisco Networking Academy', date: '2024' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', date: '2024' },
  { title: 'Introduction to Modern AI', issuer: 'Cisco', date: '2024' },
  { title: 'Operating Systems Basics', issuer: 'Cisco', date: '2024' },
  { title: 'GEN-AI Virtual Internship', issuer: 'AICTE × AWS Academy', date: 'Dec 2025' },
];
