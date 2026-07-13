'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/LangContext';

const TOTAL = 240;
const frameUrl = (i: number) =>
  `/frames/frame_${String(i).padStart(4, '0')}.jpg`;

export default function VideoHero() {
  const { t } = useLang();
  const h = t.hero;

  const sectionRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const imgs        = useRef<HTMLImageElement[]>([]);
  const lastIdx     = useRef(-1);
  const rafPending  = useRef(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [inHero, setInHero]           = useState(true);

  useEffect(() => {
    // Reveal observer for content sections below
    const revealObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in-view');
            revealObs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const canvas = canvasRef.current;
    if (!canvas) return () => revealObs.disconnect();

    // Draw one frame — cover crop, centered, clean before each frame
    function draw(idx: number) {
      if (!canvas) return;
      const cw = canvas.width, ch = canvas.height;
      if (!cw || !ch) return;
      const img = imgs.current[idx];
      if (!img?.complete || !img.naturalWidth) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const s  = Math.max(cw / iw, ch / ih);
      const dw = Math.round(iw * s);
      const dh = Math.round(ih * s);
      const dx = Math.round((cw - dw) / 2);
      const dy = Math.round((ch - dh) / 2);
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
      lastIdx.current = idx;
    }

    // Resize: use offsetWidth/Height after layout — RAF ensures DOM is ready
    function resize() {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width  = w;
      canvas.height = h;
      if (lastIdx.current >= 0) draw(lastIdx.current);
    }
    // Wait one frame so the canvas has been laid out before reading its size
    requestAnimationFrame(() => {
      resize();
      window.addEventListener('resize', resize);
    });

    // Preload all frames
    imgs.current = Array.from({ length: TOTAL }, (_, i) => {
      const img = new Image();
      img.src = frameUrl(i + 1);
      if (i === 0) img.onload = () => { resize(); draw(0); };
      return img;
    });

    // Scroll → RAF → draw
    // Use getBoundingClientRect so iOS sticky positioning is handled correctly
    function tick() {
      rafPending.current = false;
      const section = sectionRef.current;
      if (!section) return;
      const spacerH = section.offsetHeight - window.innerHeight;
      if (spacerH <= 0) return;
      const top      = section.getBoundingClientRect().top;
      const progress = Math.min(Math.max(-top / spacerH, 0), 1);
      const idx = Math.round(progress * (TOTAL - 1));

      const bar  = document.getElementById('videoProgress');
      const hint = document.getElementById('scrollHint');
      if (bar)  bar.style.width    = progress * 100 + '%';
      if (hint) hint.style.opacity = progress > 0.03 ? '0' : '1';

      setHeroVisible(progress >= 0.85);
      setInHero(progress < 1);
      if (idx !== lastIdx.current) draw(idx);
    }

    function onScroll() {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(tick);
    }

    window.addEventListener('scroll',   onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    // iOS Safari fires scroll on touchmove during momentum — catch it too
    window.addEventListener('touchmove', onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener('scroll',    onScroll);
      document.removeEventListener('scroll',  onScroll);
      window.removeEventListener('touchmove', onScroll);
      window.removeEventListener('resize',    resize); // safe even if not added yet
      revealObs.disconnect();
    };
  }, []);

  function scrollToBurgers() {
    const el = document.getElementById('burger-roster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('scrollContainer')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
    {/* Fix gomb — csak hero scroll közben látható */}
    <button
      onClick={scrollToBurgers}
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: `translateX(-50%) translateY(${inHero ? '0' : '80px'})`,
        zIndex: 500,
        opacity: inHero ? 1 : 0,
        pointerEvents: inHero ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 16,
        letterSpacing: 5,
        color: '#fff',
        background: '#C8410A',
        border: 'none',
        padding: '14px 40px',
        cursor: 'pointer',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {h.order}
    </button>

    <div ref={sectionRef} id="videoSection">
      <div id="stickyFrame">
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
        <div id="gradientOverlay" />
        <div id="heroOverlay" className={heroVisible ? 'visible' : ''}>
          <div style={{ marginBottom: 24 }}>
            <div id="heroBadge" style={{
              display: 'inline-block',
              border: '2px solid rgba(255,200,60,.75)',
              padding: '8px 28px',
              letterSpacing: 6,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 16,
              color: 'rgba(255,200,60,.95)',
              textTransform: 'uppercase',
            }}>
              Est. 2024 • Budapest
            </div>
          </div>
          <h1 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(64px,12vw,160px)',
            color: '#fff',
            margin: 0,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: -2,
            textShadow: '0 4px 40px rgba(0,0,0,.8)',
          }}>
            Smoke<br />&amp; Grill
          </h1>
          <div style={{ width: 80, height: 3, background: '#FF4500', margin: '28px auto' }} />
          <p style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(15px,2vw,22px)',
            color: 'rgba(255,255,255,.9)',
            maxWidth: 500,
            margin: '0 auto 36px',
            lineHeight: 1.6,
            fontStyle: 'italic',
            textShadow: '0 2px 12px rgba(0,0,0,.6)',
          }}>
            {h.tagline}
          </p>
          <a href="#scrollContainer" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 18,
            letterSpacing: 4,
            color: '#fff',
            background: '#FF4500',
            padding: '16px 44px',
            textDecoration: 'none',
          }}>
            {h.discover}
          </a>
        </div>
        <div id="scrollHint">
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 14,
            color: 'rgba(255,255,255,.65)',
            letterSpacing: 4,
          }}>{h.scroll}</div>
          <div style={{
            color: 'rgba(255,255,255,.45)',
            fontSize: 24,
            marginTop: 8,
            animation: 'pulseGlow 2s ease-in-out infinite',
          }}>↓</div>
        </div>
        <div id="videoProgress" />
      </div>
      <div id="videoSpacer" />
    </div>
    </>
  );
}
