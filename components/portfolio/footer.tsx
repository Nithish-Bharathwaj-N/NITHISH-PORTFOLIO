'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { navItems, profile, socials } from '@/lib/portfolio-data';
import { Icon, type IconName } from '@/components/ui/icon';

export function Footer() {
  const reduce = useReducedMotion();
  return (
    <footer className="relative mt-10 border-t border-border/60">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              className="flex items-center gap-2.5 text-sm font-semibold"
              aria-label={`${profile.name} — home`}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
                <span className="text-[13px] font-bold">N</span>
              </span>
              Nithish Bharathwaj N
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI, cybersecurity, and full-stack development — building secure,
              intelligent software.
            </p>
            <div className="flex gap-2 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border/60 bg-background text-muted-foreground transition-colors hover:border-brand-500/40 hover:text-brand-500"
                >
                  <Icon name={s.icon as IconName} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Get in touch
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Nithish Bharathwaj N.
          </p>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {profile.tagline}
          </motion.p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <Icon
              name="arrowUpRight"
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
