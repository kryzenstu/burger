import VideoHero from '@/components/VideoHero';
import BurgerRoster from '@/components/BurgerRoster';

const FONT = {
  title: { fontFamily: "'Anton',sans-serif" },
  label: { fontFamily: "'Bebas Neue',sans-serif" },
  body:  { fontFamily: "'Libre Baskerville',serif" },
};

const C = {
  bg1:    '#EDE7DB',   // egységes cream
  bg2:    '#EDE7DB',   // egységes cream
  bg3:    '#1C1410',   // sötét footer/CTA
  text:   '#1C1410',   // majdnem fekete
  muted:  '#7A6A58',   // közepes barna
  accent: '#C8410A',   // terrakotta narancs
  accentLight: '#F0621A',
};

function Section({ children, bg = C.bg1, maxW = '42rem' }: {
  children: React.ReactNode;
  bg?: string;
  maxW?: string;
}) {
  return (
    <section className="reveal w-full" style={{ background: bg, padding: '80px 0' }}>
      <div style={{ maxWidth: maxW, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {children}
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...FONT.label, fontSize: 12, color: C.accent, letterSpacing: 6, margin: '0 0 12px' }}>
      {children}
    </p>
  );
}

function Title({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 style={{ ...FONT.title, fontSize: 'clamp(36px,6vw,60px)', color: dark ? C.text : '#fff', margin: '0 0 24px', lineHeight: 1, textTransform: 'uppercase' }}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <VideoHero />

      <div id="scrollContainer">

        {/* ── SZTORI ── */}
        <section className="reveal" style={{ background: C.bg1 }}>
          {/* Szöveg blokk — bal igazított */}
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '80px 32px 56px' }}>
            <p style={{ ...FONT.label, fontSize: 12, color: C.accent, letterSpacing: 6, margin: '0 0 16px' }}>A SZTORI</p>
            <div className="sztori-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <h2 style={{ ...FONT.title, fontSize: 'clamp(42px,5.5vw,72px)', color: C.text, margin: 0, lineHeight: 1.15, textTransform: 'uppercase' }}>
                Ahol a tűz<br />találkozik<br />a hússal
              </h2>
              <p style={{ ...FONT.body, fontSize: 16, color: C.muted, lineHeight: 1.9, margin: 0 }}>
                2024-ben nyitottuk meg kapuinkat Budapest szívében. A burger nálunk nem gyorsételkultúra — hanem mesterség. Friss, 80/20 arányú magyar marha, kézi smash technika, 12 óra hickory füst.
              </p>
            </div>
          </div>

          {/* Stat sáv — sötét, teljes szélesség */}
          <div style={{ background: C.bg3, display: 'flex' }}>
            {([['12', 'óra füstölés'], ['100%', 'magyar marha'], ['0', 'kompromisszum']] as const).map(([num, label], i) => (
              <div key={label} style={{
                flex: 1, padding: '36px 0', textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,.08)' : 'none',
              }}>
                <div style={{ ...FONT.title, fontSize: 'clamp(36px,4vw,52px)', color: C.accent, lineHeight: 1 }}>{num}</div>
                <div style={{ ...FONT.label, fontSize: 11, color: 'rgba(255,255,255,.4)', letterSpacing: 3, marginTop: 8 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BURGER ROSTER ── */}
        <div className="reveal">
          <BurgerRoster />
        </div>

        {/* ── FOLYAMAT ── */}
        <Section bg={C.bg2} maxW="56rem">
          <Label>A FOLYAMAT</Label>
          <Title>Így kerül a tányérra</Title>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 40, marginTop: 48, textAlign: 'left' }}>
            {([
              ['01', 'Friss alapanyag', 'Minden reggel helyi farmokról érkező friss marha. 80/20 arány, soha fagyasztott.'],
              ['02', 'Smash & Sear',    '230°C-os öntöttvas lap, Maillard-reakció, tökéletes kéreg minden falatban.'],
              ['03', 'Réteg rétegre',   'Házi szószok, friss zöldség, olvasztott sajt — az elrendelt sorrendben, azonnal tálalva.'],
            ] as const).map(([num, title, text]) => (
              <div key={num} style={{ borderTop: `2px solid ${C.accent}`, paddingTop: 20 }}>
                <div style={{ ...FONT.title, fontSize: 44, color: `${C.accent}22`, lineHeight: 1, marginBottom: 4 }}>{num}</div>
                <div style={{ ...FONT.label, fontSize: 18, color: C.text, textTransform: 'uppercase', marginBottom: 10 }}>{title}</div>
                <p style={{ ...FONT.body, fontSize: 14, color: C.muted, lineHeight: 1.85, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── IDÉZET ── */}
        <Section bg={C.bg3}>
          <div style={{ ...FONT.title, fontSize: 'clamp(64px,10vw,96px)', color: `${C.accentLight}30`, lineHeight: 0.75, marginBottom: -4 }}>&ldquo;</div>
          <p style={{ ...FONT.body, fontSize: 'clamp(19px,2.5vw,26px)', color: 'rgba(255,255,255,.9)', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
            Nem csak hamburgert csinálunk.<br />Élményt adunk minden egyes falattal.
          </p>
          <div style={{ width: 40, height: 2, background: C.accentLight, margin: '28px auto 16px' }} />
          <div style={{ ...FONT.label, fontSize: 13, color: 'rgba(255,200,120,.65)', letterSpacing: 4 }}>KOVÁCS PÉTER — ALAPÍTÓ</div>
        </Section>

        {/* ── CTA ── */}
        <Section bg={C.bg1} maxW="32rem">
          <Label>LÁTOGASS EL</Label>
          <Title>Gyere,<br />kóstold meg!</Title>
          <div style={{ ...FONT.body, fontSize: 16, color: C.muted, lineHeight: 2.4, marginBottom: 40 }}>
            <div>Budapest, VII. ker., Dohány u. 42.</div>
            <div>Kedd–Vasárnap · 11:00–22:00</div>
            <div>+36 1 234 5678</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
            <a href="#" style={{ ...FONT.label, fontSize: 16, letterSpacing: 5, color: '#fff', background: C.accent, padding: '16px 52px', textDecoration: 'none', display: 'inline-block' }}>
              ASZTALFOGLALÁS
            </a>
            <a href="#" style={{ ...FONT.label, fontSize: 13, letterSpacing: 3, color: C.muted, textDecoration: 'none', borderBottom: `1px solid ${C.muted}50`, paddingBottom: 2 }}>
              TELJES MENÜ
            </a>
          </div>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 36 }}>
            {['Instagram', 'Facebook', 'TikTok'].map(s => (
              <a key={s} href="#" style={{ ...FONT.label, fontSize: 12, color: C.muted, textDecoration: 'none', letterSpacing: 3 }}>{s}</a>
            ))}
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid rgba(0,0,0,.08)`, background: C.bg2, padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ ...FONT.label, fontSize: 15, color: C.muted, letterSpacing: 4 }}>SMOKE &amp; GRILL</div>
          <div style={{ ...FONT.body, fontSize: 11, color: `${C.muted}99` }}>© 2024 Smoke &amp; Grill</div>
        </footer>

      </div>
    </>
  );
}
