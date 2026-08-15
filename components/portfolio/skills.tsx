'use client';

import React from 'react';

export function Skills() {
  const categories = [
    {
      icon: '🔒',
      title: 'Cybersecurity & Security',
      items: ['Linux Security', 'Web Security (OWASP)', 'OAuth 2.0 / Auth', 'Secure API Design', 'Threat Modeling', 'Security Automation'],
      bg: 'rgba(34,197,94,0.1)',
    },
    {
      icon: '⚡',
      title: 'Full-Stack Engineering',
      items: ['Python 3.12', 'React 19 / Next.js', 'Node.js / Express', 'FastAPI', 'PostgreSQL / MySQL', 'TypeScript'],
      bg: 'rgba(99,102,241,0.1)',
    },
    {
      icon: '🧠',
      title: 'AI & Machine Learning',
      items: ['LLM APIs (Gemini, OpenAI)', 'Scikit-Learn', 'PyTorch', 'AI Agents & RAG', 'Predictive Analytics'],
      bg: 'rgba(245,158,11,0.1)',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      items: ['AWS Cloud', 'Docker', 'GitHub Actions', 'Linux Administration', 'CI/CD Basics'],
      bg: 'rgba(14,165,233,0.1)',
    },
    {
      icon: '🌐',
      title: 'Real-Time & 3D Systems',
      items: ['Three.js / WebGL', 'WebSockets', 'Blender 3D', 'Digital Twins', 'Telemetry Systems'],
      bg: 'rgba(200,66,26,0.1)',
    },
  ];

  const techStack = [
    'Python', 'React 19', 'Next.js', 'TypeScript', 'Three.js', 'FastAPI', 'Node.js',
    'Docker', 'AWS Cloud', 'Linux Security', 'PyTorch', 'PostgreSQL', 'WebSockets',
    'Git / GitHub', 'C++', 'HTML5 / CSS3', 'Scikit-Learn', 'Tailwind CSS', 'Express.js', 'Blender 3D'
  ];

  return (
    <section id="skills" className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-white/40 mb-4">
              02 <span className="w-7 h-[1px] bg-white/40 inline-block" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Expertise &amp; Technology.
            </h2>
          </div>
          <p className="text-xs text-white/40 max-w-[260px] leading-relaxed sm:text-right">
            Technologies and domains I work with across systems, AI &amp; security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {categories.map((c) => (
            <div
              key={c.title}
              className="bg-[#161616] border border-white/10 rounded-2xl p-6 transition-all hover:border-[#c8421a]/40 hover:bg-[#c8421a]/5 hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                style={{ background: c.bg }}
              >
                {c.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-white mb-3.5 leading-snug">
                {c.title}
              </h3>
              <ul className="space-y-1.5 list-none p-0 m-0">
                {c.items.map((item) => (
                  <li key={item} className="text-xs text-white/50 py-1 border-b border-white/5 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="overflow-hidden mask-gradient">
          <div className="flex gap-3 w-max animate-marquee">
            {[...techStack, ...techStack].map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#161616] border border-white/10 text-xs font-semibold text-white/60 hover:border-[#c8421a] hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
