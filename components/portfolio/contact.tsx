'use client';

import React, { useState } from 'react';

export function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState('Full-Time Role');
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = ['💼 Full-Time Role', '🚀 Freelance Project', '🏆 Hackathon / AI', '✉️ General Inquiry'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#f5f5f3] py-20 lg:py-28 px-6 lg:px-20 text-[#0f172a] border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
          05 <span className="w-7 h-[1px] bg-slate-400 inline-block" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-extrabold mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Freelance, Full-Time Roles &amp; Open Source
        </div>

        <h2 id="contact-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-2">
          Let's Build Something <span className="text-[#c8421a]">Exceptional.</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed mb-10">
          Have a project, role, or collaboration in mind? Reach out via email, social channels, or the direct form below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          {/* LEFT COLUMN: CHANNELS & TERMINAL */}
          <div className="space-y-4">
            <a
              href="mailto:nithishbharathwajn@gmail.com"
              className="bg-white border border-black/10 rounded-2xl p-5 flex items-center gap-4 hover:border-[#c8421a]/50 transition-all hover:translate-x-1.5 no-underline group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c8421a]/10 border border-[#c8421a]/25 flex items-center justify-center text-xl text-[#c8421a] shrink-0">
                ✉️
              </div>
              <div className="flex-1">
                <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">DIRECT EMAIL</div>
                <div className="font-display text-base font-extrabold text-[#0f172a]">nithishbharathwajn@gmail.com</div>
              </div>
              <span className="text-sm font-bold text-[#c8421a] group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-black/10 rounded-2xl p-5 flex items-center gap-4 hover:border-[#c8421a]/50 transition-all hover:translate-x-1.5 no-underline group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c8421a]/10 border border-[#c8421a]/25 flex items-center justify-center text-xl text-[#c8421a] shrink-0">
                💼
              </div>
              <div className="flex-1">
                <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">LINKEDIN PROFILE</div>
                <div className="font-display text-base font-extrabold text-[#0f172a]">Nithish Bharathwaj N</div>
              </div>
              <span className="text-sm font-bold text-[#c8421a] group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href="https://github.com/Nithish-Bharathwaj-N"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-black/10 rounded-2xl p-5 flex items-center gap-4 hover:border-[#c8421a]/50 transition-all hover:translate-x-1.5 no-underline group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c8421a]/10 border border-[#c8421a]/25 flex items-center justify-center text-xl text-[#c8421a] shrink-0">
                🐙
              </div>
              <div className="flex-1">
                <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">GITHUB REPOSITORIES</div>
                <div className="font-display text-base font-extrabold text-[#0f172a]">@Nithish-Bharathwaj-N</div>
              </div>
              <span className="text-sm font-bold text-[#c8421a] group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white border border-black/10 rounded-xl p-3.5 shadow-sm">
                <div className="text-[0.62rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1">LOCATION</div>
                <div className="text-xs font-extrabold text-[#0f172a]">📍 Chennai, India (UTC+5:30)</div>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-3.5 shadow-sm">
                <div className="text-[0.62rem] font-extrabold uppercase tracking-wider text-slate-400 mb-1">RESPONSE TIME</div>
                <div className="text-xs font-extrabold text-[#0f172a]">⚡ Within 2-4 Hours</div>
              </div>
            </div>

            {/* TERMINAL WIDGET */}
            <div className="bg-[#090d16] border border-black/10 rounded-2xl overflow-hidden font-mono text-xs shadow-md text-white">
              <div className="bg-white/5 px-4 py-2.5 flex items-center gap-1.5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[0.65rem] text-white/40 ml-auto">nithish@system:~</span>
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-[#c8421a] font-bold">&gt; engineer@portfolio:~$ ping nithish-bharathwaj.dev</div>
                <div className="text-white/60">PING status: ONLINE • Latency: 12ms</div>
                <div className="text-emerald-400">✓ Channel encryption: TLS 1.3 Active</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LIGHT INTERACTIVE FORM */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[#c8421a] mb-3">SELECT INQUIRY TYPE</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {inquiryTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedInquiry(type)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                    selectedInquiry === type
                      ? 'bg-[#c8421a] text-white shadow-sm'
                      : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-[#0f172a]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0f172a] placeholder-slate-400 outline-none focus:border-[#c8421a] focus:ring-1 focus:ring-[#c8421a] transition-all"
                />
              </div>

              <div>
                <label className="block text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0f172a] placeholder-slate-400 outline-none focus:border-[#c8421a] focus:ring-1 focus:ring-[#c8421a] transition-all"
                />
              </div>

              <div>
                <label className="block text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 mb-2">YOUR MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or position..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0f172a] placeholder-slate-400 outline-none focus:border-[#c8421a] focus:ring-1 focus:ring-[#c8421a] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#c8421a] hover:bg-[#e05225] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_16px_rgba(200,66,26,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                SEND MESSAGE 🚀
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-bold text-center">
                  ✓ Message sent successfully! I will respond shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
