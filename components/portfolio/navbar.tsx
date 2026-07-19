'use client';

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navItems, profile, socials } from '@/lib/portfolio-data';
import { Icon } from '@/components/ui/icon';

function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection() {
  const [active, setActive] = React.useState<string>('#home');
  React.useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const scrolled = useScrollState();
  const active = useActiveSection();
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300',
          scrolled
            ? 'glass border-b border-border/60'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-18 lg:px-8"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
              <span className="text-[13px] font-bold">N</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-background" />
            </span>
            <span className="hidden sm:inline">
              Nithish<span className="text-brand-500">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center gap-1 sm:flex">
              {socials.slice(0, 2).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Icon name={s.icon as never} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-all hover:opacity-90 sm:inline-flex"
            >
              <Icon name="download" className="h-4 w-4" />
              Resume
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="flex h-full flex-col bg-background">
              <div className="flex h-16 items-center justify-between px-6">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>
              <motion.ul
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                }}
              >
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-border/60 py-4 text-2xl font-semibold tracking-tight text-foreground/90 transition-colors hover:text-brand-500"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="flex flex-col gap-3 px-6 pb-8">
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  <Icon name="download" className="h-4 w-4" />
                  Download Resume
                </a>
                <div className="flex items-center justify-center gap-4 pt-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon name={s.icon as never} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
