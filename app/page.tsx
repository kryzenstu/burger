import VideoHero from '@/components/VideoHero';
import BurgerRoster from '@/components/BurgerRoster';

export default function Home() {
  return (
    <>
      <VideoHero />

      <div id="scrollContainer">

        {/* SZTORI */}
        <div className="story-grid reveal">
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh' }}>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=85&fit=crop"
              alt="Klasszikus smash burger"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent 60%,#0a0a0a 100%)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px,6vw,100px) clamp(40px,6vw,80px)' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: '#FF4500', letterSpacing: 6, marginBottom: 20 }}>A SZTORI</div>
            <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,5vw,68px)', color: '#fff', margin: '0 0 28px', lineHeight: 1, textTransform: 'uppercase' }}>
              Ahol a tűz<br />találkozik<br />a hússal
            </h2>
            <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(14px,1.4vw,17px)', color: 'rgba(255,255,255,.7)', lineHeight: 1.9, margin: '0 0 16px', maxWidth: 420 }}>
              2024-ben nyitottuk meg kapuinkat Budapest szívében azzal a céllal, hogy megmutassuk: a burger nem gyorsételkultúra — hanem mesterség.
            </p>
            <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(14px,1.4vw,17px)', color: 'rgba(255,255,255,.7)', lineHeight: 1.9, margin: 0, maxWidth: 420 }}>
              Minden pattyünket friss, 80/20 arányú magyar marhából készítjük, kézi smash technikával. A brisket 12 órán át füstölődik hickory fán — nem egy perccel kevesebbet.
            </p>
            <div className="story-stats" style={{ display: 'flex', gap: 48, marginTop: 48, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <div>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 52, color: '#FF4500', lineHeight: 1 }}>12</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.45)', letterSpacing: 2, marginTop: 4 }}>ÓRA FÜSTÖLÉS</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 52, color: '#FF4500', lineHeight: 1 }}>100%</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.45)', letterSpacing: 2, marginTop: 4 }}>MAGYAR MARHA</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 52, color: '#FF4500', lineHeight: 1 }}>0</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.45)', letterSpacing: 2, marginTop: 4 }}>KOMPROMISSZUM</div>
              </div>
            </div>
          </div>
        </div>

        {/* BURGER ROSTER */}
        <div className="reveal">
          <BurgerRoster />
        </div>

        {/* GALÉRIA */}
        <div className="gallery-grid reveal">
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&q=85&fit=crop" alt="BBQ grill"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.6)', letterSpacing: 3 }}>A GRILL</div>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=85&fit=crop" alt="Sült krumpli"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.6)', letterSpacing: 3 }}>KÖRET</div>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&fit=crop" alt="Étterem hangulat"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.6)', letterSpacing: 3 }}>HANGULAT</div>
          </div>
        </div>

        {/* FOLYAMAT */}
        <div className="reveal" style={{ padding: 'clamp(60px,8vw,120px) clamp(24px,5vw,80px)', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: '#FF4500', letterSpacing: 6, marginBottom: 16 }}>A FOLYAMAT</div>
          <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,6vw,70px)', color: '#fff', margin: '0 0 64px', textTransform: 'uppercase' }}>Így kerül a tányérra</h2>
          <div className="process-grid">
            <div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 72, color: 'rgba(255,69,0,.15)', lineHeight: 1, marginBottom: 8 }}>01</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 22, color: '#fff', textTransform: 'uppercase', marginBottom: 14 }}>Friss alapanyag</div>
              <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, margin: 0 }}>Minden reggel friss, helyi farmokról érkező marhahúst bontunk. Csak 80/20 arányú, soha fagyasztott alapanyagot használunk.</p>
            </div>
            <div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 72, color: 'rgba(255,69,0,.15)', lineHeight: 1, marginBottom: 8 }}>02</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 22, color: '#fff', textTransform: 'uppercase', marginBottom: 14 }}>Smash &amp; Sear</div>
              <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, margin: 0 }}>A húsgolyót 230°C-os öntvényvas lapon lapítjuk, hogy a Maillard-reakció maximális kérget és mélységet adjon minden falatnak.</p>
            </div>
            <div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 72, color: 'rgba(255,69,0,.15)', lineHeight: 1, marginBottom: 8 }}>03</div>
              <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 22, color: '#fff', textTransform: 'uppercase', marginBottom: 14 }}>Réteg rétegre</div>
              <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, color: 'rgba(255,255,255,.55)', lineHeight: 1.8, margin: 0 }}>Házi szószok, friss zöldségek, olvasztott sajt — minden burger pontosan az elrendelt sorrendben épül fel, azonnal tálalva.</p>
            </div>
          </div>
        </div>

        {/* IDÉZET */}
        <div className="reveal" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&q=80&fit=crop" alt="Étterem este"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
            <div style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(80px,15vw,180px)', color: 'rgba(255,69,0,.2)', lineHeight: 0.8, marginBottom: -20 }}>&ldquo;</div>
            <p style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(20px,3vw,32px)', color: 'rgba(255,255,255,.95)', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
              Nem csak hamburgert csinálunk.<br />Élményt adunk minden egyes falattal.
            </p>
            <div style={{ width: 50, height: 2, background: '#FF4500', margin: '32px auto' }} />
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, color: 'rgba(255,200,60,.7)', letterSpacing: 4 }}>KOVÁCS PÉTER — ALAPÍTÓ</div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-grid reveal">
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 400 }}>
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=85&fit=crop" alt="Burger tálalás"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left,#0a0a0a 0%,transparent 60%)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px,6vw,100px) clamp(40px,6vw,80px)' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: '#FF4500', letterSpacing: 6, marginBottom: 20 }}>LÁTOGASS EL</div>
            <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,6vw,80px)', color: '#fff', margin: '0 0 32px', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Gyere,<br />kóstold meg!
            </h2>
            <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, color: 'rgba(255,255,255,.6)', lineHeight: 2, marginBottom: 40 }}>
              <div>📍 Budapest, VII. kerület, Dohány u. 42.</div>
              <div>🕐 Kedd–Vasárnap: 11:00–22:00</div>
              <div>📞 +36 1 234 5678</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 300 }}>
              <a href="#" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 4, color: '#fff', background: '#FF4500', padding: '16px 36px', textDecoration: 'none', textAlign: 'center' }}>ASZTALFOGLALÁS</a>
              <a href="#" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, color: 'rgba(255,255,255,.6)', border: '1px solid rgba(255,255,255,.2)', padding: '14px 36px', textDecoration: 'none', textAlign: 'center' }}>TELJES MENÜ</a>
            </div>
            <div style={{ marginTop: 56, display: 'flex', gap: 28 }}>
              <a href="#" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.35)', textDecoration: 'none', letterSpacing: 3 }}>Instagram</a>
              <a href="#" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.35)', textDecoration: 'none', letterSpacing: 3 }}>Facebook</a>
              <a href="#" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 13, color: 'rgba(255,255,255,.35)', textDecoration: 'none', letterSpacing: 3 }}>TikTok</a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, color: 'rgba(255,255,255,.2)', letterSpacing: 3 }}>SMOKE &amp; GRILL</div>
          <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 12, color: 'rgba(255,255,255,.18)' }}>© 2024 Smoke &amp; Grill. Minden jog fenntartva.</div>
        </div>

      </div>
    </>
  );
}
