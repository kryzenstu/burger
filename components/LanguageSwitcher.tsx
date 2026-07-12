'use client';

import { useLang } from '@/components/LangContext';
import type { Lang } from '@/lib/translations';

const LANGS: Lang[] = ['hu', 'en', 'de', 'nl'];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div style={{
      position: 'fixed', top: 20, right: 20, zIndex: 1000,
      display: 'flex', gap: 2,
      background: 'rgba(0,0,0,0.35)',
      backdropFilter: 'blur(8px)',
      borderRadius: 4,
      padding: '4px 6px',
    }}>
      {LANGS.map((l, i) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 13,
            letterSpacing: 2,
            color: lang === l ? '#E5DDD0' : 'rgba(255,255,255,0.35)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px 6px',
            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            transition: 'color 0.2s',
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
