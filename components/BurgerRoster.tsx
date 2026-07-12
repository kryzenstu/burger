'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useLang } from '@/components/LangContext';

type Burger = {
  id: string;
  name: string;
  sub: string;
  tag: string;
  accent: string;
  price: number;
  img: string;
  stats: { label: string; value: number }[];
};

const BURGERS: Burger[] = [
  {
    id: 'classic',
    name: 'The Classic',
    sub: 'Az eredeti',
    tag: 'Marhahús, cheddar, savanyú uborka, hagyma, házi szósz.',
    accent: '#e8b84b',
    price: 2600,
    img: '/burgers/classic.webp',
    stats: [
      { label: 'Húsosság', value: 70 },
      { label: 'Sajtosság', value: 60 },
      { label: 'Csípősség', value: 10 },
      { label: 'Népszerűség', value: 95 },
    ],
  },
  {
    id: 'smash',
    name: 'Double Smash',
    sub: 'A dupla',
    tag: 'Két smash-pogácsa, dupla cheddar, karamellizált hagyma.',
    accent: '#ff7a1f',
    price: 3200,
    img: '/burgers/smash.webp',
    stats: [
      { label: 'Húsosság', value: 100 },
      { label: 'Sajtosság', value: 85 },
      { label: 'Csípősség', value: 15 },
      { label: 'Népszerűség', value: 85 },
    ],
  },
  {
    id: 'inferno',
    name: 'Inferno',
    sub: 'A tüzes',
    tag: 'Jalapeño, chipotle majonéz, pepper jack sajt, ropogós hagyma.',
    accent: '#ff3b2f',
    price: 3400,
    img: '/burgers/inferno.webp',
    stats: [
      { label: 'Húsosság', value: 75 },
      { label: 'Sajtosság', value: 65 },
      { label: 'Csípősség', value: 95 },
      { label: 'Népszerűség', value: 70 },
    ],
  },
];

// 74 % of viewport per slide → 13 % peek on each side
const SLIDE_VW = 74;
const PEEK_VW  = (100 - SLIDE_VW) / 2; // 13

export default function BurgerRoster() {
  const { t } = useLang();
  const r = t.roster;
  const [active, setActive] = useState(0);
  const b = BURGERS[active];

  const trackRef  = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);
  const priceRef  = useRef<HTMLSpanElement>(null);

  // Navigate by setting scrollLeft to i × slideWidth
  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const sw = window.innerWidth * (SLIDE_VW / 100);
    track.scrollTo({ left: i * sw, behavior: 'smooth' });
  }, []);

  // Detect active slide from scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const sw = window.innerWidth * (SLIDE_VW / 100);
        const idx = Math.round(track.scrollLeft / sw);
        setActive(Math.max(0, Math.min(BURGERS.length - 1, idx)));
      }, 60); // debounce — fires after scrolling settles
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => { track.removeEventListener('scroll', onScroll); clearTimeout(timer); };
  }, []);

  // GSAP: segments + price counter on active change
  useEffect(() => {
    if (!statsRef.current) return;
    const container = statsRef.current;
    const ctx = gsap.context(() => {
      b.stats.forEach((s, i) => {
        const segs = container.querySelectorAll<HTMLElement>(`[data-row="${i}"] [data-seg]`);
        const filled = Math.round(s.value / 10);
        gsap.set(segs, { opacity: 0, scaleY: 0, transformOrigin: 'bottom' });
        gsap.to(Array.from(segs).slice(0, filled), {
          opacity: 1, scaleY: 1, duration: 0.18, stagger: 0.055,
          delay: 0.28 + i * 0.12, ease: 'back.out(1.4)',
        });
        gsap.to(Array.from(segs).slice(filled), {
          opacity: 1, scaleY: 1, duration: 0.1, delay: 0.28 + i * 0.12,
        });
      });
      const counter = { v: 0 };
      gsap.to(counter, {
        v: b.price, duration: 0.45, delay: 0.25,
        onUpdate: () => {
          if (priceRef.current)
            priceRef.current.textContent = Math.round(counter.v).toLocaleString('hu-HU');
        },
      });
    }, container);
    return () => ctx.revert();
  }, [active, b]);

  return (
    <section className="relative py-24" style={{ background: '#E5DDD0' }}>
      {/* Header */}
      <div className="px-6 text-center">
        <p
          className="mb-2 text-xs font-semibold tracking-[0.35em] transition-colors duration-500"
          style={{ color: b.accent }}
        >
          {r.label}
        </p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: '#1C1410' }}>
          {r.title}
        </h2>
      </div>

      {/* ── Carousel track ──
          overflow-x: scroll handles its OWN overflow so parent
          overflow-x: hidden can't clip the peeking adjacent slides.
          padding creates the 13 vw peek space on each side.
          scroll-snap snaps to each slide start.                    */}
      <div
        ref={trackRef}
        className="burger-track flex"
        style={{
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',        // Firefox
          WebkitOverflowScrolling: 'touch',
          paddingLeft:  `${PEEK_VW}vw`,
          paddingRight: `${PEEK_VW}vw`,
          scrollPaddingInlineStart: `${PEEK_VW}vw`,
        }}
      >
        {BURGERS.map((bg, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={bg.id}
              style={{
                flex: `0 0 ${SLIDE_VW}vw`,
                width: `${SLIDE_VW}vw`,
                scrollSnapAlign: 'start',
                opacity: isActive ? 1 : 0.4,
                transform: isActive ? 'scale(1)' : 'scale(0.9)',
                transformOrigin: 'top center',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                cursor: isActive ? 'default' : 'pointer',
              }}
              className="flex flex-col items-center pb-4 text-center"
              onClick={() => { if (!isActive) goTo(idx); }}
            >
              {/* Name + subtitle */}
              <p className="text-sm italic tracking-wide" style={{ color: bg.accent }}>
                {bg.sub}
              </p>
              <h3 className="mt-1 text-3xl font-bold md:text-4xl" style={{ color: '#1C1410' }}>{bg.name}</h3>
              <p className="mt-2 max-w-sm text-sm" style={{ color: '#7A6A58' }}>{bg.tag}</p>

              {/* Large burger image */}
              <div className="relative mt-5 flex items-center justify-center">
                {/* fekete alap glow */}
                <div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: 270, height: 270,
                    background: 'radial-gradient(circle, rgba(180,130,0,0.92) 0%, rgba(120,85,0,0.5) 45%, transparent 70%)',
                    filter: 'blur(12px)',
                  }}
                />
                {/* accent szín glow felette */}
                <div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: 190, height: 190,
                    background: `radial-gradient(circle, ${bg.accent}45 0%, transparent 70%)`,
                    filter: 'blur(10px)',
                  }}
                />
                <img
                  src={bg.img}
                  alt={bg.name}
                  className="relative object-contain"
                  style={{ width: 'clamp(200px, 30vw, 360px)', height: 'clamp(200px, 30vw, 360px)' }}
                />
              </div>

              {/* Compact 2×2 stat grid */}
              <div
                ref={isActive ? statsRef : undefined}
                className="mt-7 grid w-full max-w-sm grid-cols-2 gap-x-5 gap-y-4"
              >
                {bg.stats.map((s, i) => {
                  const filledCount = Math.round(s.value / 10);
                  return (
                    <div key={s.label} data-row={i} className="text-left">
                      <div className="mb-1.5 flex items-baseline justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: '#7A6A58' }}>
                          {r.statLabels[i] ?? s.label}
                        </span>
                        <span className="text-[10px] font-bold tabular-nums" style={{ color: bg.accent }}>
                          {s.value}
                        </span>
                      </div>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 10 }, (_, j) => {
                          const on = j < filledCount;
                          return (
                            <div
                              key={j}
                              data-seg={j}
                              style={{
                                flex: 1,
                                height: j % 2 === 0 ? 10 : 7,
                                borderRadius: 2,
                                backgroundColor: on ? bg.accent : 'rgba(0,0,0,0.08)',
                                boxShadow: on ? `0 0 6px ${bg.accent}60` : 'none',
                                opacity: 0,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price + CTA */}
              <div className="mt-7 flex items-center gap-5">
                <div className="text-3xl font-bold" style={{ color: '#1C1410' }}>
                  {isActive
                    ? <><span ref={priceRef}>{bg.price.toLocaleString('hu-HU')}</span> Ft</>
                    : <>{bg.price.toLocaleString('hu-HU')} Ft</>
                  }
                </div>
                <button
                  className="rounded-full px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
                  style={{ backgroundColor: bg.accent }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {r.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full transition disabled:opacity-20"
          style={{ border: '1px solid rgba(0,0,0,0.15)', background: 'rgba(0,0,0,0.05)', color: '#1C1410' }}
        >←</button>
        <button
          onClick={() => goTo(active + 1)}
          disabled={active === BURGERS.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full transition disabled:opacity-20"
          style={{ border: '1px solid rgba(0,0,0,0.15)', background: 'rgba(0,0,0,0.05)', color: '#1C1410' }}
        >→</button>
      </div>

      {/* Dot indicators */}
      <div className="mt-5 flex justify-center gap-3">
        {BURGERS.map((bg, i) => (
          <button
            key={bg.id}
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 28 : 8,
              backgroundColor: i === active ? b.accent : 'rgba(0,0,0,0.15)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
