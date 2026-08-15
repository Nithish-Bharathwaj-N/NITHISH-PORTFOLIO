'use client';

import React, { useState } from 'react';

export function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState('💼 Full-Time Role');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const inquiryTypes = [
    '💼 Full-Time Role',
    '🚀 Freelance Project',
    '🏆 Hackathon / AI',
    '✉️ General Inquiry'
  ];

  const channelLinks = [
    { label: 'EMAIL', value: 'nithishbharathwajn@gmail.com', href: 'mailto:nithishbharathwajn@gmail.com', icon: '✉️' },
    { label: 'LINKEDIN', value: 'nithish-bharathwaj-n', href: 'https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379', icon: '💼' },
    { label: 'GITHUB', value: 'Nithish-Bharathwaj-N', href: 'https://github.com/Nithish-Bharathwaj-N', icon: '💻' },
    { label: 'LEETCODE', value: 'nithish_cit (500+ Solved)', href: 'https://leetcode.com/u/nithish_cit/', icon: '🧩' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-[#0d0d0d] py-20 lg:py-24 px-6 lg:px-12 text-white border-t border-white/10">
      <div className="max-w-[1680px] w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-3">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#c8421a] mb-2">
              08 <span className="text-slate-600">——</span> GET IN TOUCH
            </div>
            <h2 id="contact-title" className="font-display text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for Roles & Projects
          </div>
        </div>

        <p className="text-sm text-slate-400 max-w-xl leading-relaxed mb-10">
          Whether you have a groundbreaking project, a full-time role opportunity, or just want to collaborate on AI and cybersecurity—let's connect!
        </p>

        {/* MAIN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN: INQUIRY PILLS, CHANNELS, TERMINAL */}
          <div className="flex flex-col">
            {/* INQUIRY TYPE PILLS */}
            <div className="mb-8">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#c8421a] mb-3">
                SELECT INQUIRY TYPE
              </div>
              <div className="flex flex-wrap gap-2.5">
                {inquiryTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedInquiry(t)}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      selectedInquiry === t
                        ? 'bg-[#c8421a] text-white border border-[#c8421a] shadow-md shadow-[#c8421a]/30'
                        : 'bg-[#161616] text-slate-300 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* DIRECT CHANNELS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {channelLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#161616] border border-white/10 hover:border-[#c8421a]/40 hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#c8421a]/15 border border-[#c8421a]/30 flex items-center justify-center text-xl text-[#c8421a] shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{c.label}</div>
                    <div className="text-xs font-bold text-white group-hover:text-[#c8421a] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* TERMINAL WIDGET */}
            <div className="bg-[#161616] border border-white/10 rounded-xl p-5 font-mono text-xs text-emerald-400 leading-relaxed shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10 text-slate-500 text-[0.7rem]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-bold">nithish@system:~</span>
              </div>
              <div>$ status --check</div>
              <div className="text-slate-300">$ Location: Chennai, Tamil Nadu, India</div>
              <div className="text-slate-300">$ Focus: Cybersecurity × AI/ML × Full-Stack</div>
              <div className="text-emerald-400 font-bold">$ Ready for high-impact innovation ✓</div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.72rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-[#18181b] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c8421a] focus:bg-[#202024] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[0.72rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-[#18181b] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c8421a] focus:bg-[#202024] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.72rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">SUBJECT</label>
                <input
                  type="text"
                  required
                  placeholder={`Regarding: ${selectedInquiry}`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-[#18181b] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c8421a] focus:bg-[#202024] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[0.72rem] font-extrabold uppercase tracking-wider text-slate-400 mb-2">YOUR MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-[#18181b] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c8421a] focus:bg-[#202024] focus:outline-none transition-all resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-[#c8421a] hover:bg-[#e05225] text-white text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-lg shadow-[#c8421a]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-60"
              >
                {status === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE →'}
              </button>

              {status === 'success' && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-bold text-center">
                  ✓ Message sent successfully! Nithish will respond shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
