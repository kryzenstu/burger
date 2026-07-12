'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

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

export default function BurgerRoster() {
  const [active, setActive] = useState(0);
  const prev = useRef(0);
  const b = BURGERS[active];

  const imgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const dir = active >= prev.current ? 1 : -1;
    prev.current = active;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imgRef.current,
        {
          x: dir * 260,
          y: -40,
          rotate: dir * 18,
          scale: 0.8,
          opacity: 0,
          transformOrigin: '50% -60%',
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: 'elastic.out(1, 0.55)',
        },
        0,
      );

      tl.fromTo(glowRef.current, { opacity: 0 }, { opacity: 0.6, duration: 0.5 }, 0.1);
      tl.fromTo(
        nameRef.current,
        { opacity: 0, x: dir * 30 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out' },
        0.05,
      );

      barsRef.current.forEach((el, i) => {
        if (!el) return;
        tl.fromTo(
          el,
          { width: '0%' },
          { width: `${b.stats[i].value}%`, duration: 0.6, ease: 'power3.out' },
          0.15 + i * 0.07,
        );
      });

      const counter = { v: 0 };
      tl.to(
        counter,
        {
          v: b.price,
          duration: 0.5,
          onUpdate: () => {
            if (priceRef.current)
              priceRef.current.textContent = Math.round(counter.v).toLocaleString('hu-HU');
          },
        },
        0.1,
      );
    });
    return () => ctx.revert();
  }, [active, b]);

  return (
    <section className="relative overflow-hidden bg-[#0d0b0a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-2 text-center text-xs font-semibold tracking-[0.35em] transition-colors duration-500"
          style={{ color: b.accent }}
        >
          VÁLASZD KI A TIÉD
        </p>
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          A mi burgereink
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div
              ref={glowRef}
              className="pointer-events-none absolute h-[360px] w-[360px] rounded-full"
              style={{
                background: `radial-gradient(circle, ${b.accent}55 0%, transparent 65%)`,
                filter: 'blur(30px)',
              }}
            />
            <div ref={imgRef} className="relative">
              <img
                src={b.img}
                alt={b.name}
                className="h-[340px] w-[340px] object-contain md:h-[420px] md:w-[420px]"
              />
            </div>
          </div>

          <div>
            <div ref={nameRef}>
              <p className="text-sm italic tracking-wide" style={{ color: b.accent }}>
                {b.sub}
              </p>
              <h3 className="mt-1 text-4xl font-bold text-white md:text-5xl">{b.name}</h3>
              <p className="mt-4 max-w-md text-white/55">{b.tag}</p>
            </div>

            <div className="mt-8 space-y-4">
              {b.stats.map((s, i) => (
                <div key={s.label}>
                  <div className="mb-1 flex justify-between text-xs font-medium uppercase tracking-wider text-white/60">
                    <span>{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      ref={(el) => {
                        barsRef.current[i] = el;
                      }}
                      className="h-full rounded-full"
                      style={{ width: 0, backgroundColor: b.accent }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5">
              <div className="text-3xl font-bold text-white">
                <span ref={priceRef}>{b.price.toLocaleString('hu-HU')}</span> Ft
              </div>
              <button
                className="rounded-full px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
                style={{ backgroundColor: b.accent }}
              >
                Ezt kérem
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-4">
          {BURGERS.map((bg, i) => {
            const on = i === active;
            return (
              <button
                key={bg.id}
                onClick={() => setActive(i)}
                className="flex shrink-0 flex-col items-center gap-2 outline-none"
              >
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-2xl border transition-all duration-300"
                  style={{
                    borderColor: on ? bg.accent : 'rgba(255,255,255,0.08)',
                    backgroundColor: on ? `${bg.accent}18` : 'rgba(255,255,255,0.03)',
                    boxShadow: on ? `0 0 24px ${bg.accent}40` : 'none',
                  }}
                >
                  <img
                    src={bg.img}
                    alt={bg.name}
                    className="h-16 w-16 object-contain transition-all duration-300"
                    style={{ filter: on ? 'none' : 'grayscale(0.7)', opacity: on ? 1 : 0.5 }}
                  />
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ color: on ? '#fff' : 'rgba(255,255,255,0.4)' }}
                >
                  {bg.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
