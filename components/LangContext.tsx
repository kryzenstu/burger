'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type Lang, translations } from '@/lib/translations';

type LangCtx = { lang: Lang; t: typeof translations['hu']; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({
  lang: 'hu',
  t: translations['hu'],
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('hu');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && saved in translations) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
