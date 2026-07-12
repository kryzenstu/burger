'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/components/LangContext';

export default function LoadingScreen() {
  const { t } = useLang();
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#E5DDD0',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 24,
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: fading ? 'none' : 'auto',
    }}>
      <img
        src="/burgers/classic.webp"
        alt=""
        style={{
          width: 140, height: 140,
          objectFit: 'contain',
          animation: 'burgerSpin 1.2s linear infinite',
        }}
      />
      <p style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 18,
        letterSpacing: 6,
        color: '#7A6A58',
        margin: 0,
      }}>
        {t.loading}
      </p>

      <style>{`
        @keyframes burgerSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
