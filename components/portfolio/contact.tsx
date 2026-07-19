'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile, socials } from '@/lib/portfolio-data';
import { Icon, type IconName } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  SectionShell,
  SectionHeading,
  Reveal,
} from '@/components/motion/primitives';

type Status = 'idle' | 'success';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = React.useState<FormState>(initial);
  const [status, setStatus] = React.useState<Status>('idle');
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  const blur = (key: keyof FormState) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  const errors = {
    name: form.name.trim().length < 2 ? 'Please enter your name' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? 'Enter a valid email'
      : '',
    subject: form.subject.trim().length < 2 ? 'Add a subject' : '',
    message: form.message.trim().length < 10 ? 'Message is too short' : '',
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasErrors) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      return;
    }
    const subject = encodeURIComponent(
      `[Portfolio] ${form.subject} — from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(initial);
    setTouched({});
  };

  const contactItems = [
    { icon: 'mail' as IconName, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone' as IconName, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'location' as IconName, label: 'Location', value: profile.location, href: undefined },
  ];

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have an internship, project, or idea in mind? Send a message and I'll get back to you."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* Contact details */}
        <Reveal>
          <div className="flex h-full flex-col gap-6">
            <div className="space-y-3">
              {contactItems.map((item) => {
                const inner = (
                  <div className="group flex items-center gap-4 rounded-xl border border-border/70 bg-card/40 p-4 transition-colors hover:border-brand-500/40">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background text-brand-500">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="truncate text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            <div className="rounded-xl border border-border/70 bg-card/40 p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Find me online
              </p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-colors hover:border-brand-500/40 hover:text-brand-500"
                  >
                    <Icon name={s.icon as IconName} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto hidden rounded-xl border border-dashed border-border bg-secondary/30 p-4 text-xs text-muted-foreground lg:block">
              Currently open to internship opportunities in AI, cybersecurity, and
              full-stack development.
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                error={touched.name ? errors.name : ''}
              >
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update('name')}
                  onBlur={blur('name')}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(touched.name && errors.name)}
                />
              </Field>
              <Field
                id="email"
                label="Email"
                error={touched.email ? errors.email : ''}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  onBlur={blur('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(touched.email && errors.email)}
                />
              </Field>
            </div>

            <Field
              id="subject"
              label="Subject"
              error={touched.subject ? errors.subject : ''}
            >
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update('subject')}
                onBlur={blur('subject')}
                placeholder="What's this about?"
                aria-invalid={Boolean(touched.subject && errors.subject)}
              />
            </Field>

            <Field
              id="message"
              label="Message"
              error={touched.message ? errors.message : ''}
            >
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={update('message')}
                onBlur={blur('message')}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                aria-invalid={Boolean(touched.message && errors.message)}
              />
            </Field>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Opens your email client via mailto.
              </p>
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.01 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="h-11 gap-2 rounded-lg bg-foreground px-6 text-background hover:bg-foreground/90"
                >
                  <Icon name="send" className="h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                role="status"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Your email client should now be open. If not, email{' '}
                {profile.email} directly.
              </motion.div>
            )}
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
