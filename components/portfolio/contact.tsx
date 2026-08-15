'use client';

import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || formData.message.length < 10) return;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:nithishbharathwajn@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="bg-[#f5f5f3] py-20 lg:py-28 px-6 lg:px-20 text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
          05 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Get In Touch.
        </h2>
        <p className="text-sm text-slate-500 max-w-sm mb-12">
          I&apos;m open to full-stack, AI &amp; cybersecurity roles, internships and exciting engineering collaborations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { label: 'Email', val: 'nithishbharathwajn@gmail.com', href: 'mailto:nithishbharathwajn@gmail.com' },
              { label: 'GitHub', val: 'Nithish-Bharathwaj-N', href: 'https://github.com/Nithish-Bharathwaj-N' },
              { label: 'LinkedIn', val: 'Nithish Bharathwaj N', href: 'https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379' },
              { label: 'LeetCode', val: 'nithish_cit', href: 'https://leetcode.com/u/nithish_cit/' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-black/10 transition-all hover:border-[#c8421a]/30 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="text-[0.66rem] font-extrabold uppercase tracking-wider text-slate-400">
                    {link.label}
                  </div>
                  <div className="text-xs font-bold text-slate-800 truncate max-w-[150px]">
                    {link.val}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-2xl p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#c8421a]"
                />
              </div>
              <div>
                <label className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#c8421a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Opportunity, Collaboration, etc."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#c8421a]"
              />
            </div>

            <div>
              <label className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#c8421a] resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#0d0d0d] hover:bg-[#c8421a] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Send Message →
            </button>

            {sent && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-600 text-xs font-bold text-center">
                ✓ Opening mail client...
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
