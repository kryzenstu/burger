'use client';

import { useEffect } from 'react';
import { useLang } from '@/components/LangContext';

export default function VideoHero() {
  const { t } = useLang();
  const h = t.hero;

  useEffect(() => {
    const video = document.getElementById('scrollVideo') as HTMLVideoElement | null;
    const section = document.getElementById('videoSection');
    const bar = document.getElementById('videoProgress');
    const hint = document.getElementById('scrollHint');
    const heroOverlay = document.getElementById('heroOverlay');
    if (!video || !section) return;

    const LERP_FACTOR = 0.1;
    let targetTime = 0;
    let displayedTime = 0;
    let rafId: number;

    function getScrollTop() {
      return window.scrollY || window.pageYOffset
        || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    function readScroll() {
      const scrollTop = getScrollTop();
      const sectionTop = section!.offsetTop;
      const spacerH = section!.offsetHeight - window.innerHeight;
      if (spacerH <= 0) return;
      const frac = Math.min(Math.max((scrollTop - sectionTop) / spacerH, 0), 1);
      targetTime = frac * (video!.duration || 0);
      if (bar) bar.style.width = (frac * 100) + '%';
      if (hint) hint.style.opacity = frac > 0.03 ? '0' : '1';
      if (heroOverlay) {
        const op = frac >= 0.85 ? Math.min(1, (frac - 0.85) / 0.15) : 0;
        if (op > 0.5) heroOverlay.classList.add('visible');
        else heroOverlay.classList.remove('visible');
      }
    }

    function rafLoop() {
      displayedTime += (targetTime - displayedTime) * LERP_FACTOR;
      if (video!.readyState >= 2 && Math.abs(video!.currentTime - displayedTime) > 0.008) {
        video!.currentTime = displayedTime;
      }
      rafId = requestAnimationFrame(rafLoop);
    }

    function initVideo() {
      video!.pause();
      readScroll();
      window.addEventListener('scroll', readScroll, { passive: true });
      document.body.addEventListener('scroll', readScroll, { passive: true });
      rafId = requestAnimationFrame(rafLoop);
    }

    let iosWarmedUp = false;
    function warmup() {
      if (!iosWarmedUp) { iosWarmedUp = true; video!.load(); }
    }
    document.addEventListener('touchstart', warmup, { passive: true, once: true });

    if (video.readyState >= 1) {
      initVideo();
    } else {
      video.addEventListener('loadedmetadata', initVideo, { once: true });
      video.load();
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('in-view');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', readScroll);
      document.body.removeEventListener('scroll', readScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="videoSection">
        <div id="stickyFrame">
          <img
            id="heroPoster"
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=85&fit=crop"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 0 }}
          />
          <video id="scrollVideo" muted playsInline preload="auto"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 1 }}>
            <source src="/Hambi.mp4" type="video/mp4" />
          </video>
          <div id="gradientOverlay" />
          <div id="heroOverlay">
            <div style={{ marginBottom: 24 }}>
              <div id="heroBadge" style={{ display: 'inline-block', border: '2px solid rgba(255,200,60,.75)', padding: '8px 28px', letterSpacing: 6, fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: 'rgba(255,200,60,.95)', textTransform: 'uppercase' }}>
                Est. 2024 • Budapest
              </div>
            </div>
            <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(64px,12vw,160px)', color: '#fff', margin: 0, lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: -2, textShadow: '0 4px 40px rgba(0,0,0,.8)' }}>
              Smoke<br />&amp; Grill
            </h1>
            <div style={{ width: 80, height: 3, background: '#FF4500', margin: '28px auto' }} />
            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(15px,2vw,22px)', color: 'rgba(255,255,255,.9)', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.6, fontStyle: 'italic', textShadow: '0 2px 12px rgba(0,0,0,.6)' }}>
              {h.tagline}
            </p>
            <a href="#scrollContainer" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 4, color: '#fff', background: '#FF4500', padding: '16px 44px', textDecoration: 'none' }}>
              {h.discover}
            </a>
          </div>
          <div id="scrollHint">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, color: 'rgba(255,255,255,.65)', letterSpacing: 4 }}>{h.scroll}</div>
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 24, marginTop: 8, animation: 'pulseGlow 2s ease-in-out infinite' }}>↓</div>
          </div>
          <div id="videoProgress" />
        </div>
        <div id="videoSpacer" />
      </div>
    </>
  );
}
