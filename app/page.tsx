'use client';

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const bar = document.getElementById('scroll-bar');
    const handleScroll = () => {
      if (bar) {
        bar.style.width = Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100) + '%';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const btt = document.getElementById('back-top');
    const handleBtt = () => {
      if (btt) btt.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', handleBtt, { passive: true });
    if (btt) {
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href) {
          const t = document.querySelector(href);
          if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    const secs = [...document.querySelectorAll('section[id]')];
    const navAs = document.querySelectorAll('.nav-links a');
    function spy() {
      let cur = secs[0]?.id;
      secs.forEach((s) => {
        if (s.getBoundingClientRect().top <= 100) cur = s.id;
      });
      navAs.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    }
    window.addEventListener('scroll', spy, { passive: true });
    spy();

    const tog = document.getElementById('nav-toggle');
    const mob = document.getElementById('mobile-nav');
    if (tog && mob) {
      tog.addEventListener('click', () => {
        const open = mob.classList.toggle('open');
        tog.setAttribute('aria-expanded', String(open));
      });
      mob.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => {
          mob.classList.remove('open');
          tog.setAttribute('aria-expanded', 'false');
        })
      );
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.fu').forEach((el) => io.observe(el));

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          if (!target) return;
          let start: number | null = null;
          const dur = 1800;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = Math.floor(eased * target) + (p >= 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-target]').forEach((el) => cio.observe(el));

    const typedEl = document.getElementById('typed');
    const words = ['intelligent', 'secure', 'real-time', 'scalable', 'AI-powered', 'resilient'];
    let wi = 0, ci = 0, del = false;
    function typeLoop() {
      if (!typedEl) return;
      const w = words[wi];
      if (!del) {
        typedEl.textContent = w.slice(0, ++ci);
        if (ci === w.length) {
          del = true;
          setTimeout(typeLoop, 1900);
          return;
        }
      } else {
        typedEl.textContent = w.slice(0, --ci);
        if (ci === 0) {
          del = false;
          wi = (wi + 1) % words.length;
        }
      }
      setTimeout(typeLoop, del ? 52 : 88);
    }
    const timer = setTimeout(typeLoop, 1000);

    const ftabs = document.querySelectorAll('.ftab');
    const pcards = document.querySelectorAll('#proj-grid .proj-card');
    ftabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        ftabs.forEach((b) => b.classList.remove('on'));
        btn.classList.add('on');
        const f = (btn as HTMLElement).dataset.f;
        pcards.forEach((card) => {
          const cEl = card as HTMLElement;
          const cats = (cEl.dataset.cat || '').split(' ');
          const show = f === 'all' || cats.includes(f || '');
          cEl.style.display = show ? '' : 'none';
          if (show) {
            cEl.style.opacity = '0';
            cEl.style.transform = 'translateY(14px)';
            requestAnimationFrame(() => {
              cEl.style.transition = 'opacity 0.32s ease, transform 0.32s ease';
              cEl.style.opacity = '1';
              cEl.style.transform = 'none';
            });
          }
        });
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBtt);
      window.removeEventListener('scroll', spy);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{
--accent:#c8421a;--accent-light:#e05225;
--dark:#0d0d0d;--dark-2:#111111;--dark-3:#161616;--dark-4:#1e1e1e;
--light:#f5f5f3;--white:#ffffff;
--text-on-dark:rgba(255,255,255,0.82);--text-muted:rgba(255,255,255,0.42);
--text-dark:#0f172a;--text-dark-2:#334155;--text-dark-3:#64748b;
--border-d:rgba(255,255,255,0.07);
--radius-sm:8px;--radius:12px;--radius-lg:18px;
--font:'Inter',system-ui,sans-serif;
--font-display:'Space Grotesk','Inter',system-ui,sans-serif;
--ease:cubic-bezier(0.4,0,0.2,1);--t:0.28s
}
body{font-family:var(--font);background:var(--dark);color:var(--text-on-dark);overflow-x:hidden;line-height:1.6}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}

/* SCROLL BAR */
#scroll-bar{position:fixed;top:0;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--accent),#f97316);z-index:9999;transition:width 0.08s linear;pointer-events:none}

/* SKIP LINK */
#skip-link{position:fixed;top:-100px;left:12px;z-index:99999;padding:8px 18px;background:var(--accent);color:#fff;font-weight:700;font-size:0.85rem;border-radius:5px;transition:top 0.2s}
#skip-link:focus{top:12px}

/* BACK TO TOP */
#back-top{position:fixed;bottom:28px;right:28px;z-index:900;width:42px;height:42px;border-radius:50%;background:var(--dark-4);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-size:1rem;cursor:pointer;opacity:0;transform:translateY(12px);transition:all var(--t) var(--ease)}
#back-top.show{opacity:1;transform:translateY(0)}
#back-top:hover{background:var(--accent);border-color:var(--accent);color:#fff;transform:translateY(-3px)}

/* MOBILE CTA */
.mob-cta{display:none;position:fixed;bottom:0;left:0;right:0;z-index:800;padding:12px 18px;gap:10px;background:rgba(13,13,13,0.97);backdrop-filter:blur(16px);border-top:1px solid var(--border-d)}
@media(max-width:600px){.mob-cta{display:flex}body{padding-bottom:70px}}

/* NAV */
nav#navbar{position:fixed;top:0;left:0;right:0;z-index:1000;height:62px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(13,13,13,0.9);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid var(--border-d)}
.nav-brand{display:flex;align-items:center;gap:12px}
.nav-mono{width:34px;height:34px;border-radius:7px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:0.8rem;font-weight:800;color:#fff;letter-spacing:-0.02em;flex-shrink:0}
.nav-name-text{font-size:0.78rem;font-weight:700;color:rgba(255,255,255,0.75);text-transform:uppercase;letter-spacing:0.1em}
.nav-links{display:flex;align-items:center;gap:2px;list-style:none}
.nav-links a{padding:6px 15px;border-radius:6px;font-size:0.8rem;font-weight:500;color:rgba(255,255,255,0.5);transition:color var(--t) var(--ease),background var(--t) var(--ease)}
.nav-links a:hover,.nav-links a.active{color:#fff;background:rgba(255,255,255,0.07)}
.nav-right{display:flex;align-items:center;gap:14px}
.nav-badge{display:flex;align-items:center;gap:7px;font-size:0.74rem;font-weight:700;color:#4ade80;letter-spacing:0.03em;padding:5px 13px;border-radius:9999px;background:rgba(74,222,128,0.09);border:1px solid rgba(74,222,128,0.2)}
.nav-badge .pulse{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.65)}}
.nav-toggle{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.nav-toggle span{display:block;width:22px;height:2px;background:rgba(255,255,255,0.7);border-radius:2px;transition:all var(--t) var(--ease)}
@media(max-width:860px){.nav-links,.nav-badge{display:none}.nav-toggle{display:flex}nav#navbar{padding:0 24px}}
#mobile-nav{display:none;position:fixed;top:62px;left:0;right:0;z-index:999;background:rgba(13,13,13,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-d);padding:16px 24px 20px}
#mobile-nav.open{display:block}
#mobile-nav a{display:block;padding:13px 0;font-size:0.95rem;font-weight:600;color:rgba(255,255,255,0.65);border-bottom:1px solid var(--border-d);transition:color var(--t)}
#mobile-nav a:last-child{border-bottom:none}
#mobile-nav a:hover{color:#fff}

/* SHARED */
.sec-label{display:inline-flex;align-items:center;gap:10px;font-size:0.7rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-muted);margin-bottom:16px}
.sec-label::after{content:'';display:inline-block;width:28px;height:1px;background:var(--text-muted)}
.sec-label.dark-lbl{color:#94a3b8}.sec-label.dark-lbl::after{background:#94a3b8}
.sec-title{font-family:var(--font-display);font-size:clamp(2.4rem,4.5vw,3.6rem);font-weight:800;letter-spacing:-0.035em;line-height:1.08}
.fu{opacity:0;transform:translateY(28px);transition:opacity 0.6s var(--ease),transform 0.6s var(--ease)}
.fu.in{opacity:1;transform:none}
.fu:nth-child(1){transition-delay:0.00s}.fu:nth-child(2){transition-delay:0.07s}.fu:nth-child(3){transition-delay:0.14s}.fu:nth-child(4){transition-delay:0.21s}.fu:nth-child(5){transition-delay:0.28s}
.btn-fill{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:var(--accent);color:#fff;font-size:0.82rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;border-radius:var(--radius-sm);border:2px solid var(--accent);cursor:pointer;transition:all var(--t) var(--ease)}
.btn-fill:hover{background:var(--accent-light);border-color:var(--accent-light);transform:translateY(-2px)}
.btn-ghost{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;background:transparent;color:rgba(255,255,255,0.8);font-size:0.82rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;border-radius:var(--radius-sm);border:2px solid rgba(255,255,255,0.18);cursor:pointer;transition:all var(--t) var(--ease)}
.btn-ghost:hover{border-color:rgba(255,255,255,0.6);color:#fff;transform:translateY(-2px)}

/* HERO */
#intro{min-height:100vh;padding-top:62px;display:grid;grid-template-columns:1fr 1fr;background:var(--dark)}
.hero-copy{display:flex;flex-direction:column;justify-content:center;padding:80px 60px 80px 80px}
.hero-pretitle{font-size:0.74rem;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);margin-bottom:26px}
.hero-h1{font-family:var(--font-display);font-size:clamp(2.8rem,4.5vw,4.2rem);font-weight:800;line-height:1.06;letter-spacing:-0.035em;color:#fff;margin-bottom:22px}
.hero-h1 .highlight{color:var(--accent)}
.hero-h1 .typed-word{color:var(--accent);border-right:3px solid var(--accent);animation:caret 0.72s step-end infinite}
@keyframes caret{0%,100%{border-color:var(--accent)}50%{border-color:transparent}}
.hero-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.hero-pill{font-size:0.76rem;font-weight:600;color:rgba(255,255,255,0.65);padding:4px 14px;border-radius:9999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.09)}
.hero-desc{font-size:0.93rem;line-height:1.78;color:rgba(255,255,255,0.55);max-width:460px;margin-bottom:34px}
.hero-btns{display:flex;flex-wrap:wrap;gap:13px;margin-bottom:38px}
.hero-social{display:flex;gap:22px}
.hero-social a{display:flex;align-items:center;gap:7px;font-size:0.77rem;font-weight:500;color:rgba(255,255,255,0.38);transition:color var(--t)}
.hero-social a:hover{color:rgba(255,255,255,0.8)}
.hero-social svg{flex-shrink:0}
.hero-photo-panel{position:relative;overflow:hidden;background:linear-gradient(150deg,#111 0%,#1a1a1a 100%)}
.hero-photo-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 65%,rgba(200,66,26,0.14) 0%,transparent 65%);z-index:1}
.hero-photo-panel .overlay{position:absolute;inset:0;z-index:2;background:linear-gradient(to right,var(--dark) 0%,transparent 22%),linear-gradient(to top,var(--dark) 0%,transparent 18%)}
.hero-photo-panel img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;filter:brightness(0.88) contrast(1.06)}
@media(max-width:860px){#intro{grid-template-columns:1fr}.hero-copy{padding:56px 24px 40px}.hero-photo-panel{min-height:48vh}}

/* ABOUT */
#about{background:var(--light);padding:100px 80px}
.about-wrap{max-width:1240px;margin:0 auto}
.about-grid{display:grid;grid-template-columns:320px 1fr;gap:60px;margin-top:50px;align-items:start}
.about-photo-wrap{position:relative}
.about-photo-wrap::after{content:'';position:absolute;top:14px;left:14px;right:-14px;bottom:-14px;border:1.5px solid rgba(200,66,26,0.28);border-radius:var(--radius-lg);z-index:0}
.about-photo-wrap img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:var(--radius-lg);position:relative;z-index:1}
.about-desc{font-size:0.97rem;line-height:1.82;color:var(--text-dark-2);margin-bottom:34px}
.stat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:44px}
.stat-card{background:var(--dark);border:1px solid rgba(255,255,255,0.06);border-radius:var(--radius);padding:20px 14px;text-align:center;cursor:default;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease),box-shadow var(--t) var(--ease)}
.stat-card:hover{transform:translateY(-5px);border-color:rgba(200,66,26,0.45);box-shadow:0 14px 32px rgba(0,0,0,0.5)}
.stat-card:hover .stat-num{color:var(--accent)}
.stat-icon{font-size:1.45rem;margin-bottom:8px}
.stat-num{font-family:var(--font-display);font-size:1.85rem;font-weight:800;color:#fff;line-height:1;letter-spacing:-0.03em;margin-bottom:5px;transition:color var(--t)}
.stat-lbl{font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.42);text-transform:uppercase;letter-spacing:0.07em;line-height:1.35}
.about-info{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.info-col-title{font-size:0.68rem;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:#94a3b8;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.info-col-title::after{content:'';flex:1;height:1px;background:#e2e8f0}
.info-item{margin-bottom:12px}
.info-item strong{display:block;font-size:0.85rem;font-weight:700;color:#1e293b;margin-bottom:2px}
.info-item span{font-size:0.78rem;color:var(--text-dark-3);line-height:1.45}
.certs-row{margin-top:38px;padding-top:32px;border-top:1px solid #e2e8f0}
.certs-title{font-size:0.68rem;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:#94a3b8;margin-bottom:16px}
.cert-cards{display:flex;flex-wrap:wrap;gap:10px}
.cert-card{display:inline-flex;align-items:center;gap:9px;padding:9px 16px;border-radius:var(--radius-sm);background:#fff;border:1px solid rgba(0,0,0,0.08);font-size:0.78rem;font-weight:600;color:#1e293b;transition:all var(--t) var(--ease)}
.cert-card:hover{border-color:rgba(200,66,26,0.3);transform:translateY(-2px);box-shadow:0 6px 18px rgba(0,0,0,0.07)}
.cert-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0}
@media(max-width:960px){#about{padding:80px 24px}.about-grid{grid-template-columns:1fr}.stat-row{grid-template-columns:repeat(2,1fr)}.about-info{grid-template-columns:1fr 1fr}}

/* SKILLS */
#skills{background:var(--dark-2);padding:100px 80px}
.skills-wrap{max-width:1240px;margin:0 auto}
.skills-hdr{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px}
.skills-note{font-size:0.82rem;color:var(--text-muted);max-width:260px;text-align:right;line-height:1.6}
.skill-cats{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:56px}
.skill-cat{background:var(--dark-3);border:1px solid var(--border-d);border-radius:var(--radius-lg);padding:26px 20px;transition:all var(--t) var(--ease)}
.skill-cat:hover{border-color:rgba(200,66,26,0.38);background:rgba(200,66,26,0.04);transform:translateY(-4px);box-shadow:0 16px 36px rgba(0,0,0,0.5)}
.sc-icon{width:42px;height:42px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;margin-bottom:14px}
.sc-title{font-family:var(--font-display);font-size:0.87rem;font-weight:700;color:#fff;margin-bottom:14px;line-height:1.35}
.sc-list{list-style:none}
.sc-list li{font-size:0.78rem;color:rgba(255,255,255,0.48);padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.05);line-height:1.4}
.sc-list li:last-child{border-bottom:none}
@media(max-width:1100px){.skill-cats{grid-template-columns:repeat(3,1fr)}}
@media(max-width:680px){#skills{padding:80px 24px}.skill-cats{grid-template-columns:repeat(2,1fr)}.skills-hdr{flex-direction:column;align-items:flex-start;gap:10px}.skills-note{text-align:left}}
.marquee{overflow:hidden;mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent)}
.marquee-inner{display:flex;gap:12px;width:max-content;animation:mq 38s linear infinite}
.marquee-inner:hover{animation-play-state:paused}
@keyframes mq{to{transform:translateX(-50%)}}
.tech-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 17px;border-radius:9999px;background:var(--dark-3);border:1px solid var(--border-d);font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.62);white-space:nowrap;transition:all var(--t) var(--ease)}
.tech-pill:hover{border-color:var(--accent);color:#fff}

/* WORKS */
#works{background:var(--light);padding:100px 80px}
.works-wrap{max-width:1240px;margin:0 auto}
.works-subdesc{font-size:0.9rem;color:var(--text-dark-3);max-width:480px;line-height:1.7;margin:12px 0 26px}
.filter-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:36px}
.ftab{padding:8px 18px;border-radius:6px;border:1px solid rgba(0,0,0,0.1);background:#fff;font-size:0.78rem;font-weight:700;color:#64748b;cursor:pointer;transition:all var(--t) var(--ease)}
.ftab.on,.ftab:hover{background:var(--dark);color:#fff;border-color:var(--dark)}
.proj-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
@media(max-width:1100px){.proj-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.proj-grid{grid-template-columns:1fr}}
.proj-card{background:#fff;border:1px solid rgba(0,0,0,0.07);border-radius:var(--radius-lg);overflow:hidden;display:flex;flex-direction:column;transition:all var(--t) var(--ease)}
.proj-card:hover{transform:translateY(-6px);box-shadow:0 22px 52px rgba(0,0,0,0.11);border-color:rgba(200,66,26,0.18)}
.proj-thumb{position:relative;height:178px;overflow:hidden;background:#f0f4f8}
.proj-thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s var(--ease)}
.proj-card:hover .proj-thumb img{transform:scale(1.06)}
.proj-badge{position:absolute;top:11px;left:11px;background:rgba(13,13,13,0.85);backdrop-filter:blur(6px);color:rgba(255,255,255,0.82);font-size:0.65rem;font-weight:800;padding:4px 9px;border-radius:4px;text-transform:uppercase;letter-spacing:0.06em}
.proj-featured{position:absolute;top:11px;right:11px;background:var(--accent);color:#fff;font-size:0.62rem;font-weight:800;padding:3px 8px;border-radius:4px;text-transform:uppercase;letter-spacing:0.05em}
.proj-body{padding:19px;flex:1;display:flex;flex-direction:column}
.proj-name{font-family:var(--font-display);font-size:1.02rem;font-weight:700;color:var(--text-dark);margin-bottom:5px}
.proj-sub{font-size:0.76rem;font-weight:700;color:var(--accent);margin-bottom:9px;line-height:1.4}
.proj-desc{font-size:0.78rem;line-height:1.62;color:var(--text-dark-3);flex:1;margin-bottom:13px}
.proj-tech{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:15px}
.proj-tech span{font-size:0.68rem;font-weight:700;color:#475569;background:#f1f5f9;border:1px solid #e2e8f0;padding:3px 8px;border-radius:4px}
.proj-actions{display:flex;gap:7px}
.proj-btn{flex:1;text-align:center;padding:8px 10px;border-radius:6px;font-size:0.72rem;font-weight:800;transition:all var(--t) var(--ease)}
.proj-btn-case{border:1.5px solid rgba(0,0,0,0.12);color:#334155}
.proj-btn-case:hover{background:var(--dark);color:#fff;border-color:var(--dark)}
.proj-btn-live{border:1.5px solid var(--accent);color:var(--accent)}
.proj-btn-live:hover{background:var(--accent);color:#fff}
.works-more{text-align:center;margin-top:36px}
.works-more a{font-size:0.85rem;font-weight:700;color:var(--accent)}
.works-more a:hover{opacity:0.72}
@media(max-width:860px){#works{padding:80px 24px}}

/* ACHIEVEMENTS */
#achievements{background:var(--dark);padding:100px 80px}
.ach-wrap{max-width:1240px;margin:0 auto}
.ach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin:48px 0}
.ach-card{background:var(--dark-2);border:1px solid var(--border-d);border-radius:var(--radius-lg);padding:30px 22px;transition:all var(--t) var(--ease)}
.ach-card:hover{border-color:rgba(200,66,26,0.35);transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.5)}
.ach-icon{font-size:1.9rem;margin-bottom:18px;display:block}
.ach-num{font-family:var(--font-display);font-size:2.7rem;font-weight:800;color:#fff;letter-spacing:-0.04em;line-height:1;margin-bottom:9px}
.ach-title{font-size:0.85rem;font-weight:700;color:rgba(255,255,255,0.65);margin-bottom:8px}
.ach-desc{font-size:0.76rem;color:rgba(255,255,255,0.35);line-height:1.6}
.ach-cta{text-align:center}
.btn-outline-light{display:inline-flex;align-items:center;gap:8px;padding:12px 30px;font-size:0.82rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;border:1.5px solid rgba(255,255,255,0.18);border-radius:var(--radius-sm);color:rgba(255,255,255,0.75);transition:all var(--t) var(--ease)}
.btn-outline-light:hover{border-color:rgba(255,255,255,0.6);color:#fff}
@media(max-width:860px){#achievements{padding:80px 24px}.ach-grid{grid-template-columns:repeat(2,1fr)}}

/* CONTACT */
#contact{background:var(--light);padding:100px 80px 60px}
.contact-wrap{max-width:1240px;margin:0 auto}
.contact-subdesc{font-size:0.93rem;color:var(--text-dark-3);max-width:400px;line-height:1.72;margin:12px 0 48px}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.contact-links{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.c-link{display:flex;align-items:center;gap:13px;padding:15px 16px;border-radius:var(--radius);background:#fff;border:1px solid rgba(0,0,0,0.07);transition:all var(--t) var(--ease)}
.c-link:hover{border-color:rgba(200,66,26,0.28);transform:translateY(-2px);box-shadow:0 8px 22px rgba(0,0,0,0.07)}
.c-icon{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.c-lbl{font-size:0.66rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;margin-bottom:2px}
.c-val{font-size:0.8rem;font-weight:700;color:#1e293b}
.contact-form{background:#fff;border:1px solid rgba(0,0,0,0.07);border-radius:var(--radius-lg);padding:34px}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.fgroup{margin-bottom:14px}
.fgroup label{display:block;font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;margin-bottom:6px}
.fgroup input,.fgroup textarea{width:100%;padding:11px 13px;font-size:0.87rem;font-family:var(--font);color:#1e293b;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;outline:none;transition:all var(--t) var(--ease);box-sizing:border-box}
.fgroup input:focus,.fgroup textarea:focus{border-color:var(--accent);background:#fff;box-shadow:0 0 0 3px rgba(200,66,26,0.08)}
.fgroup textarea{resize:vertical;min-height:116px}
.fgroup.err input,.fgroup.err textarea{border-color:#ef4444;background:rgba(239,68,68,0.03)}
.fgroup.ok input,.fgroup.ok textarea{border-color:#22c55e}
.field-err{font-size:0.72rem;color:#ef4444;margin-top:4px;display:none}
.fgroup.err .field-err{display:block}
.form-btn{width:100%;margin-top:10px;padding:13px;border:none;border-radius:8px;background:var(--dark);color:#fff;font-size:0.8rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:all var(--t) var(--ease)}
.form-btn:hover{background:var(--accent);transform:translateY(-2px)}
.form-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none}
.form-ok{display:none;margin-top:12px;padding:12px 16px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.25);border-radius:8px;color:#16a34a;font-size:0.84rem;font-weight:700;text-align:center}
@media(max-width:860px){#contact{padding:80px 24px 40px}.contact-grid{grid-template-columns:1fr}.frow{grid-template-columns:1fr}}

/* FOOTER */
.footer-bar{background:var(--dark);padding:22px 80px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border-d)}
.footer-bar-left{display:flex;align-items:center;gap:12px}
.footer-name{font-size:0.76rem;font-weight:700;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.1em}
.footer-tags{font-size:0.73rem;color:rgba(255,255,255,0.28)}
.footer-copy{font-size:0.72rem;color:rgba(255,255,255,0.22)}
@media(max-width:680px){.footer-bar{flex-direction:column;gap:10px;padding:22px 24px;text-align:center}}
` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<a id="skip-link" href="#intro">Skip to content</a>
<div id="scroll-bar"></div>
<button type="button" id="back-top" aria-label="Back to top">↑</button>
<div class="mob-cta">
  <a href="#works" class="btn-fill" style="flex:1;justify-content:center;font-size:0.78rem;padding:11px 12px;">View Work →</a>
  <a href="#contact" class="btn-ghost" style="flex:1;justify-content:center;font-size:0.78rem;padding:11px 12px;">Contact Me</a>
</div>

<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-brand">
    <div class="nav-mono" aria-hidden="true">NB</div>
    <span class="nav-name-text">Nithish Bharathwaj N</span>
  </div>
  <ul class="nav-links" role="list">
    <li><a href="#intro">Intro</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Expertise</a></li>
    <li><a href="#works">Work</a></li>
    <li><a href="#achievements">Achievements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-right">
    <span class="nav-badge"><span class="pulse"></span>Available for Work</span>
    <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span></button>
  </div>
</nav>
<div id="mobile-nav" role="dialog" aria-label="Mobile navigation">
  <a href="#intro">Intro</a><a href="#about">About</a><a href="#skills">Expertise</a>
  <a href="#works">Work</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a>
</div>

<section id="intro" aria-label="Introduction">
  <div class="hero-copy">
    <p class="hero-pretitle">Hello, I'm Nithish</p>
    <h1 class="hero-h1">I build <span id="typed" class="typed-word">intelligent</span><br><span class="highlight">software</span> systems.</h1>
    <div class="hero-pills">
      <span class="hero-pill">Cybersecurity</span>
      <span class="hero-pill">AI</span>
      <span class="hero-pill">Full-Stack</span>
      <span class="hero-pill">Real-Time Systems</span>
    </div>
    <p class="hero-desc">Cybersecurity-focused engineer building AI-powered, real-time and 3D digital twin systems that solve complex real-world problems.</p>
    <div class="hero-btns">
      <a href="#works" class="btn-fill">View Selected Work →</a>
      <a href="resume.pdf" download="Nithish_Bharathwaj_N_Resume.pdf" target="_blank" rel="noopener" class="btn-ghost">Download CV ↓</a>
    </div>
    <nav class="hero-social" aria-label="Social links">
      <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>GitHub</a>
      <a href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
      <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>LeetCode</a>
      <a href="mailto:nithishbharathwajn@gmail.com" aria-label="Email"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>Email</a>
    </nav>
  </div>
  <div class="hero-photo-panel" aria-hidden="true">
    <div class="overlay"></div>
    <img src="images/nithish-photo.jpg" alt="Nithish Bharathwaj N" fetchpriority="high">
  </div>
</section>

<section id="about" aria-labelledby="about-title">
  <div class="about-wrap">
    <div class="sec-label dark-lbl">01</div>
    <h2 id="about-title" class="sec-title" style="color:var(--text-dark)">About Me.</h2>
    <div class="about-grid">
      <div class="about-photo-wrap fu">
        <img src="images/about-photo.jpg" alt="Portrait of Nithish Bharathwaj N" loading="lazy" width="320" height="427">
      </div>
      <div class="about-body">
        <p class="about-desc">I'm a <strong>Computer Science &amp; Engineering (Cyber Security)</strong> scholar at <strong>Chennai Institute of Technology</strong>. I specialise in engineering high-performance AI-driven systems, interactive 3D WebGL Digital Twin platforms, and secure full-stack software architectures.<br><br>Recognised as a <strong style="color:var(--accent)">Top 8 Finalist nationwide in Aerothon 2026</strong> hosted by HAL (Hindustan Aeronautics Limited) and IIT Indore for building the real-time SubAERO submarine telemetry twin platform. Passionate about solving complex algorithmic challenges with <strong>500+ LeetCode solutions</strong>, a <strong>1771 Contest Rating</strong>, and an active <strong>118-day continuous coding streak</strong>.<br><br>Driven by a commitment to zero-trust cybersecurity principles, modern cloud infrastructure (AWS/Docker), real-time WebSocket communication, and immersive web experiences powered by Three.js and React 19.</p>
        <div class="stat-row">
          <div class="stat-card fu"><div class="stat-icon">💻</div><div class="stat-num" data-target="500" data-suffix="+">0</div><div class="stat-lbl">LeetCode Solved</div></div>
          <div class="stat-card fu"><div class="stat-icon">📈</div><div class="stat-num" data-target="1771" data-suffix="">0</div><div class="stat-lbl">Contest Rating</div></div>
          <div class="stat-card fu"><div class="stat-icon">🏆</div><div class="stat-num">Top 8</div><div class="stat-lbl">Aerothon 2026</div></div>
          <div class="stat-card fu"><div class="stat-icon">🚀</div><div class="stat-num" data-target="5" data-suffix="+">0</div><div class="stat-lbl">Hackathon Finalist</div></div>
        </div>
        <div class="about-info">
          <div class="fu">
            <div class="info-col-title">Experience</div>
            <div class="info-item"><strong>Generative AI Virtual Intern</strong><span>AWS Academy × AICTE × EduSkills</span></div>
            <div class="info-item"><strong>SubAERO Digital Twin Lead</strong><span>HAL &amp; IIT Indore — Aerothon 2026</span></div>
            <div class="info-item"><strong>Full-Stack AI Developer</strong><span>Open Source &amp; Personal Projects</span></div>
          </div>
          <div class="fu">
            <div class="info-col-title">Education</div>
            <div class="info-item"><strong>B.E. CSE (Cyber Security)</strong><span>Chennai Institute of Technology<br>2025 – Present</span></div>
            <div class="info-item"><strong>Class XII — 88.4%</strong><span>SSBM</span></div>
          </div>
          <div class="fu">
            <div class="info-col-title">Interests</div>
            <div class="info-item"><strong>Cybersecurity, AI, Real-Time Systems</strong><span>3D Graphics, Problem Solving</span></div>
            <div class="info-item"><strong>Competitive Programming</strong><span>118-day continuous streak</span></div>
            <div class="info-item"><strong>Sports</strong><span>District Throwball, Zonal Carrom,<br>CM Trophy Athletics &amp; Cricket</span></div>
          </div>
        </div>
        <div class="certs-row fu">
          <div class="certs-title">Certifications &amp; Honors</div>
          <div class="cert-cards">
            <span class="cert-card"><span class="cert-dot"></span>AWS Generative AI Internship</span>
            <span class="cert-card"><span class="cert-dot"></span>Top 8 — HAL Aerothon 2026</span>
            <span class="cert-card"><span class="cert-dot"></span>National Hackathon Finalist (5+)</span>
            <span class="cert-card"><span class="cert-dot"></span>LeetCode Rating 1771</span>
            <span class="cert-card"><span class="cert-dot"></span>District Throwball Champion</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="skills" aria-labelledby="skills-title">
  <div class="skills-wrap">
    <div class="skills-hdr">
      <div><div class="sec-label">02</div><h2 id="skills-title" class="sec-title" style="color:#fff">Expertise &amp; Technology.</h2></div>
      <p class="skills-note">Technologies and domains I work with across systems, AI &amp; security.</p>
    </div>
    <div class="skill-cats">
      <div class="skill-cat fu"><div class="sc-icon" style="background:rgba(34,197,94,0.1)">🔒</div><div class="sc-title">Cybersecurity &amp; Security</div><ul class="sc-list"><li>Linux Security</li><li>Web Security (OWASP)</li><li>OAuth 2.0 / Auth</li><li>Secure API Design</li><li>Threat Modeling</li><li>Security Automation</li></ul></div>
      <div class="skill-cat fu"><div class="sc-icon" style="background:rgba(99,102,241,0.1)">⚡</div><div class="sc-title">Full-Stack Engineering</div><ul class="sc-list"><li>Python 3.12</li><li>React 19 / Next.js</li><li>Node.js / Express</li><li>FastAPI</li><li>PostgreSQL / MySQL</li><li>TypeScript</li></ul></div>
      <div class="skill-cat fu"><div class="sc-icon" style="background:rgba(245,158,11,0.1)">🧠</div><div class="sc-title">AI &amp; Machine Learning</div><ul class="sc-list"><li>LLM APIs (Gemini, OpenAI)</li><li>Scikit-Learn</li><li>PyTorch</li><li>AI Agents &amp; RAG</li><li>Predictive Analytics</li></ul></div>
      <div class="skill-cat fu"><div class="sc-icon" style="background:rgba(14,165,233,0.1)">☁️</div><div class="sc-title">Cloud &amp; DevOps</div><ul class="sc-list"><li>AWS Cloud</li><li>Docker</li><li>GitHub Actions</li><li>Linux Administration</li><li>CI/CD Basics</li></ul></div>
      <div class="skill-cat fu"><div class="sc-icon" style="background:rgba(200,66,26,0.1)">🌐</div><div class="sc-title">Real-Time &amp; 3D Systems</div><ul class="sc-list"><li>Three.js / WebGL</li><li>WebSockets</li><li>Blender 3D</li><li>Digital Twins</li><li>Telemetry Systems</li></ul></div>
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-inner">
        <span class="tech-pill">Python</span><span class="tech-pill">React 19</span><span class="tech-pill">Next.js</span><span class="tech-pill">TypeScript</span><span class="tech-pill">Three.js</span><span class="tech-pill">FastAPI</span><span class="tech-pill">Node.js</span><span class="tech-pill">Docker</span><span class="tech-pill">AWS Cloud</span><span class="tech-pill">Linux Security</span><span class="tech-pill">PyTorch</span><span class="tech-pill">PostgreSQL</span><span class="tech-pill">WebSockets</span><span class="tech-pill">Git / GitHub</span><span class="tech-pill">C++</span><span class="tech-pill">HTML5 / CSS3</span><span class="tech-pill">Scikit-Learn</span><span class="tech-pill">Tailwind CSS</span><span class="tech-pill">Express.js</span><span class="tech-pill">Blender 3D</span>
        <span class="tech-pill">Python</span><span class="tech-pill">React 19</span><span class="tech-pill">Next.js</span><span class="tech-pill">TypeScript</span><span class="tech-pill">Three.js</span><span class="tech-pill">FastAPI</span><span class="tech-pill">Node.js</span><span class="tech-pill">Docker</span><span class="tech-pill">AWS Cloud</span><span class="tech-pill">Linux Security</span><span class="tech-pill">PyTorch</span><span class="tech-pill">PostgreSQL</span><span class="tech-pill">WebSockets</span><span class="tech-pill">Git / GitHub</span><span class="tech-pill">C++</span><span class="tech-pill">HTML5 / CSS3</span><span class="tech-pill">Scikit-Learn</span><span class="tech-pill">Tailwind CSS</span><span class="tech-pill">Express.js</span><span class="tech-pill">Blender 3D</span>
      </div>
    </div>
  </div>
</section>

<section id="works" aria-labelledby="works-title">
  <div class="works-wrap">
    <div class="sec-label dark-lbl">03</div>
    <h2 id="works-title" class="sec-title" style="color:var(--text-dark)">Selected Works.</h2>
    <p class="works-subdesc">Engineering solutions at the intersection of AI, cybersecurity, and real-time systems.</p>
    <div class="filter-tabs" role="group" aria-label="Filter projects">
      <button type="button" class="ftab on" data-f="all">All Systems</button>
      <button type="button" class="ftab" data-f="3d-webgl">3D WebGL &amp; Twins</button>
      <button type="button" class="ftab" data-f="ai-ml">AI &amp; Full-Stack</button>
      <button type="button" class="ftab" data-f="cybersecurity">Cybersecurity</button>
    </div>
    <div class="proj-grid" id="proj-grid">
      <article class="proj-card fu" data-cat="3d-webgl ai-ml">
        <div class="proj-thumb"><span class="proj-badge">3D Full-Stack</span><span class="proj-featured">Flagship</span><img src="images/subaero-preview.jpg" alt="SubAERO Aerospace Digital Twin Platform" loading="lazy"></div>
        <div class="proj-body"><div class="proj-name">SubAERO</div><div class="proj-sub">Aerospace Digital Twin Platform</div><p class="proj-desc">Real-time aero engine health monitoring platform for HAL using 3D digital twins and predictive analytics.</p><div class="proj-tech"><span>React 19</span><span>Three.js</span><span>FastAPI</span><span>WebSockets</span></div><div class="proj-actions"><a href="https://github.com/Nithish-Bharathwaj-N/SubAERO" target="_blank" rel="noopener" class="proj-btn proj-btn-case">Case Study →</a><a href="https://null-pointers-aerothon-2026.vercel.app/" target="_blank" rel="noopener" class="proj-btn proj-btn-live">Live Demo ↗</a></div></div>
      </article>
      <article class="proj-card fu" data-cat="ai-ml">
        <div class="proj-thumb"><span class="proj-badge">AI Full-Stack</span><img src="images/voyage-preview.jpg" alt="VoyageAI Smart Travel Planning Platform" loading="lazy"></div>
        <div class="proj-body"><div class="proj-name">VoyageAI</div><div class="proj-sub">Smart Travel Planning Platform</div><p class="proj-desc">AI-powered travel itinerary generator with budget optimization, real-time maps and smart recommendations.</p><div class="proj-tech"><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span><span>Gemini API</span></div><div class="proj-actions"><a href="https://github.com/Nithish-Bharathwaj-N/Voyage-AI" target="_blank" rel="noopener" class="proj-btn proj-btn-case">Case Study →</a><a href="https://voyage-ai-nithish.vercel.app" target="_blank" rel="noopener" class="proj-btn proj-btn-live">Live Demo ↗</a></div></div>
      </article>
      <article class="proj-card fu" data-cat="ai-ml">
        <div class="proj-thumb"><span class="proj-badge">AI &amp; Healthcare</span><img src="images/queuecure-preview.jpg" alt="Queue Cure AI Healthcare Queue Optimization" loading="lazy"></div>
        <div class="proj-body"><div class="proj-name">Queue Cure AI</div><div class="proj-sub">Smart Queue Optimization System</div><p class="proj-desc">Healthcare queue management with AI-driven wait-time prediction and OPD workflow automation.</p><div class="proj-tech"><span>Python</span><span>Flask</span><span>Scikit-Learn</span><span>MySQL</span></div><div class="proj-actions"><a href="https://github.com/Nithish-Bharathwaj-N/QUEUE-CURE---AI" target="_blank" rel="noopener" class="proj-btn proj-btn-case">Case Study →</a></div></div>
      </article>
    </div>
    <div class="works-more"><a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener">View More Projects on GitHub ↗</a></div>
  </div>
</section>

<section id="achievements" aria-labelledby="ach-title">
  <div class="ach-wrap">
    <div class="sec-label">04</div>
    <h2 id="ach-title" class="sec-title" style="color:#fff">Key Achievements.</h2>
    <div class="ach-grid">
      <div class="ach-card fu"><span class="ach-icon">💻</span><div class="ach-num" data-target="500" data-suffix="+">0</div><div class="ach-title">LeetCode Problems Solved</div><div class="ach-desc">Strong foundation in DSA, algorithms and problem solving.</div></div>
      <div class="ach-card fu"><span class="ach-icon">📊</span><div class="ach-num" data-target="1771" data-suffix="">0</div><div class="ach-title">Peak Contest Rating</div><div class="ach-desc">Achieved a peak rating of 1771 with 118-day coding streak.</div></div>
      <div class="ach-card fu"><span class="ach-icon">🏆</span><div class="ach-num">Top 8</div><div class="ach-title">Aerothon 2026 Finalist</div><div class="ach-desc">Ranked Top 8 nationwide in HAL &amp; IIT Indore Aerothon 2026.</div></div>
      <div class="ach-card fu"><span class="ach-icon">🚀</span><div class="ach-num" data-target="5" data-suffix="+">0</div><div class="ach-title">National Hackathon Finalist</div><div class="ach-desc">Finalist in 5+ national-level hackathons across domains.</div></div>
    </div>
    <div class="ach-cta"><a href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379" target="_blank" rel="noopener" class="btn-outline-light">View All Achievements ↗</a></div>
  </div>
</section>

<section id="contact" aria-labelledby="contact-title">
  <div class="contact-wrap">
    <div class="sec-label dark-lbl">05</div>
    <h2 id="contact-title" class="sec-title" style="color:var(--text-dark)">Get In Touch.</h2>
    <p class="contact-subdesc">I'm open to full-stack, AI &amp; cybersecurity roles, internships and exciting engineering collaborations.</p>
    <div class="contact-grid">
      <div>
        <div class="contact-links">
          <a href="mailto:nithishbharathwajn@gmail.com" class="c-link"><div class="c-icon" style="background:rgba(200,66,26,0.09)"><svg width="18" height="18" viewBox="0 0 24 24" fill="#c8421a" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div><div><div class="c-lbl">Email</div><div class="c-val">nithishbharathwajn@gmail.com</div></div></a>
          <a href="https://github.com/Nithish-Bharathwaj-N" target="_blank" rel="noopener" class="c-link"><div class="c-icon" style="background:rgba(0,0,0,0.06)"><svg width="18" height="18" viewBox="0 0 24 24" fill="#1e293b" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div><div><div class="c-lbl">GitHub</div><div class="c-val">Nithish-Bharathwaj-N</div></div></a>
          <a href="https://www.linkedin.com/in/nithish-bharathwaj-n-847a00379" target="_blank" rel="noopener" class="c-link"><div class="c-icon" style="background:rgba(10,102,194,0.09)"><svg width="18" height="18" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div><div><div class="c-lbl">LinkedIn</div><div class="c-val">Nithish Bharathwaj N</div></div></a>
          <a href="https://leetcode.com/u/nithish_cit/" target="_blank" rel="noopener" class="c-link"><div class="c-icon" style="background:rgba(245,158,11,0.09)"><svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></div><div><div class="c-lbl">LeetCode</div><div class="c-val">nithish_cit</div></div></a>
        </div>
      </div>
      <div class="contact-form" role="form" aria-label="Contact form">
        <div class="frow">
          <div class="fgroup" id="fg-name"><label for="f-name">Your Name</label><input type="text" id="f-name" name="name" autocomplete="name" placeholder="John Doe" required><span class="field-err" role="alert">Please enter your full name.</span></div>
          <div class="fgroup" id="fg-email"><label for="f-email">Your Email</label><input type="email" id="f-email" name="email" autocomplete="email" placeholder="you@example.com" required><span class="field-err" role="alert">Please enter a valid email address.</span></div>
        </div>
        <div class="fgroup" id="fg-subject"><label for="f-subject">Subject</label><input type="text" id="f-subject" name="subject" placeholder="Collaboration, Opportunity, etc."></div>
        <div class="fgroup" id="fg-msg"><label for="f-msg">Your Message</label><textarea id="f-msg" name="message" placeholder="Tell me about your project or opportunity..."></textarea><span class="field-err" role="alert">Message must be at least 10 characters.</span></div>
        <button type="button" class="form-btn" id="form-btn" onclick="submitForm(event)">Send Message →</button>
        <div class="form-ok" id="form-ok" role="status">✓ Message sent! I'll get back to you soon.</div>
      </div>
    </div>
  </div>
  <footer class="footer-bar" style="margin-top:60px">
    <div class="footer-bar-left"><div class="nav-mono" style="width:30px;height:30px;font-size:0.72rem">NB</div><span class="footer-name">Nithish Bharathwaj N</span></div>
    <span class="footer-tags">Cybersecurity · AI · Full-Stack · Real-Time Systems</span>
    <span class="footer-copy">© 2026 Nithish Bharathwaj N. Designed &amp; engineered by me.</span>
  </footer>
</section>


` }} />
    </>
  );
}
