'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { projects, type Project } from '@/lib/portfolio-data';
import { Icon } from '@/components/ui/icon';
import {
  SectionShell,
  SectionHeading,
  Reveal,
} from '@/components/motion/primitives';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-colors hover:border-brand-500/40"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-border/60 bg-background/70 text-brand-500">
                  <Icon name="layout" className="h-5 w-5" />
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  Screenshot Placeholder
                </p>
              </div>
            </div>
          </>
        )}
        {/* Browser chrome */}
        <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-background/60 px-3 py-2 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
          <span className="ml-2 hidden flex-1 truncate rounded-md bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground sm:block">
            {project.slug}.app
          </span>
        </div>
        {project.featured && (
          <span className="absolute right-3 top-12 rounded-full border border-brand-500/30 bg-background/80 px-2.5 py-1 text-[10px] font-medium text-brand-500 backdrop-blur">
            Featured
          </span>
        )}
        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-brand-500">
            {project.tagline}
          </p>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background/60 px-3.5 py-2 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-secondary"
          >
            <Icon name="github" className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#projects"
            aria-disabled="true"
            className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/40 px-3.5 py-2 text-sm font-medium text-muted-foreground"
            title="Live demo coming soon"
          >
            <Icon name="external" className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="AI-driven applications, full-stack systems, and tools I've designed and built."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="https://github.com/Nithish-Bharathwaj-N"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-secondary"
          >
            <Icon name="github" className="h-4 w-4" />
            See all repositories
            <Icon
              name="arrowUpRight"
              className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Reveal>
    </SectionShell>
  );
}
