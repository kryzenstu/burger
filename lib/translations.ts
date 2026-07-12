export type Lang = 'hu' | 'en' | 'de' | 'nl';

export const translations = {
  hu: {
    loading: 'BETÖLTÉS...',
    hero: {
      tagline: 'Kézműves hamburgerek, füstölt ízek, amerikai lélek.',
      discover: 'FEDEZD FEL ↓',
      scroll: 'Görgess lefelé',
    },
    story: {
      label: 'A SZTORI',
      title: ['Ahol a tűz', 'találkozik', 'a hússal'],
      body: '2024-ben nyitottuk meg kapuinkat Budapest szívében. A burger nálunk nem gyorsételkultúra — hanem mesterség. Friss, 80/20 arányú magyar marha, kézi smash technika, 12 óra hickory füst.',
      stats: [
        { num: '12',   label: 'óra füstölés' },
        { num: '100%', label: 'magyar marha' },
        { num: '0',    label: 'kompromisszum' },
      ],
    },
    roster: {
      label: 'VÁLASZD KI A TIÉD',
      title: 'A mi burgereink',
      cta: 'Ezt kérem',
      statLabels: ['Húsosság', 'Sajtosság', 'Csípősség', 'Népszerűség'],
    },
    process: {
      label: 'A FOLYAMAT',
      title: 'Így kerül a tányérra',
      steps: [
        { num: '01', title: 'Friss alapanyag', body: 'Minden reggel helyi farmokról érkező friss marha. 80/20 arány, soha fagyasztott.' },
        { num: '02', title: 'Smash & Sear',    body: '230°C-os öntöttvas lap, Maillard-reakció, tökéletes kéreg minden falatban.' },
        { num: '03', title: 'Réteg rétegre',   body: 'Házi szószok, friss zöldség, olvasztott sajt — az elrendelt sorrendben, azonnal tálalva.' },
      ],
    },
    quote: {
      text: ['Nem csak hamburgert csinálunk.', 'Élményt adunk minden egyes falattal.'],
      author: 'KOVÁCS PÉTER — ALAPÍTÓ',
    },
    cta: {
      label: 'LÁTOGASS EL',
      title: ['Gyere,', 'kóstold meg!'],
      address: 'Budapest, VII. ker., Dohány u. 42.',
      hours: 'Kedd–Vasárnap · 11:00–22:00',
      phone: '+36 1 234 5678',
      booking: 'ASZTALFOGLALÁS',
      menu: 'TELJES MENÜ',
    },
  },

  en: {
    loading: 'LOADING...',
    hero: {
      tagline: 'Craft burgers, smoky flavours, American soul.',
      discover: 'DISCOVER ↓',
      scroll: 'Scroll down',
    },
    story: {
      label: 'THE STORY',
      title: ['Where fire', 'meets', 'the meat'],
      body: 'We opened our doors in the heart of Budapest in 2024. For us, burgers are not fast food — they\'re a craft. Fresh 80/20 Hungarian beef, hand smash technique, 12 hours of hickory smoke.',
      stats: [
        { num: '12',   label: 'hours smoked' },
        { num: '100%', label: 'Hungarian beef' },
        { num: '0',    label: 'compromises' },
      ],
    },
    roster: {
      label: 'CHOOSE YOURS',
      title: 'Our burgers',
      cta: 'I want this',
      statLabels: ['Meatiness', 'Cheesiness', 'Spiciness', 'Popularity'],
    },
    process: {
      label: 'THE PROCESS',
      title: 'From grill to plate',
      steps: [
        { num: '01', title: 'Fresh Ingredients', body: 'Fresh beef from local farms every morning. 80/20 ratio, never frozen.' },
        { num: '02', title: 'Smash & Sear',      body: '230°C cast iron, Maillard reaction, perfect crust in every bite.' },
        { num: '03', title: 'Layer by Layer',    body: 'House sauces, fresh vegetables, melted cheese — in order, served immediately.' },
      ],
    },
    quote: {
      text: ['We don\'t just make burgers.', 'We create an experience with every bite.'],
      author: 'PÉTER KOVÁCS — FOUNDER',
    },
    cta: {
      label: 'VISIT US',
      title: ['Come,', 'taste it!'],
      address: 'Budapest, District VII, Dohány St. 42.',
      hours: 'Tue–Sun · 11:00–22:00',
      phone: '+36 1 234 5678',
      booking: 'BOOK A TABLE',
      menu: 'FULL MENU',
    },
  },

  de: {
    loading: 'LADEN...',
    hero: {
      tagline: 'Handgemachte Burger, rauchige Aromen, amerikanische Seele.',
      discover: 'ENTDECKEN ↓',
      scroll: 'Nach unten scrollen',
    },
    story: {
      label: 'DIE GESCHICHTE',
      title: ['Wo das Feuer', 'auf das', 'Fleisch trifft'],
      body: '2024 haben wir unsere Türen im Herzen von Budapest geöffnet. Burger sind für uns kein Fast Food — sondern ein Handwerk. Frisches 80/20 ungarisches Rindfleisch, Smash-Technik von Hand, 12 Stunden Hickory-Rauch.',
      stats: [
        { num: '12',   label: 'Std. geräuchert' },
        { num: '100%', label: 'ungar. Rindfleisch' },
        { num: '0',    label: 'Kompromisse' },
      ],
    },
    roster: {
      label: 'WÄHLE DEINEN',
      title: 'Unsere Burger',
      cta: 'Das nehme ich',
      statLabels: ['Fleischigkeit', 'Käsigkeit', 'Schärfe', 'Beliebtheit'],
    },
    process: {
      label: 'DER PROZESS',
      title: 'Vom Grill zum Teller',
      steps: [
        { num: '01', title: 'Frische Zutaten', body: 'Täglich frisches Rindfleisch von lokalen Höfen. 80/20 Verhältnis, niemals eingefroren.' },
        { num: '02', title: 'Smash & Sear',    body: '230°C Gusseisen, Maillard-Reaktion, perfekte Kruste in jedem Bissen.' },
        { num: '03', title: 'Schicht für Schicht', body: 'Hausgemachte Saucen, frisches Gemüse, geschmolzener Käse — sofort serviert.' },
      ],
    },
    quote: {
      text: ['Wir machen nicht nur Burger.', 'Wir schaffen ein Erlebnis mit jedem Bissen.'],
      author: 'PÉTER KOVÁCS — GRÜNDER',
    },
    cta: {
      label: 'BESUCHE UNS',
      title: ['Komm,', 'probiere es!'],
      address: 'Budapest, Bezirk VII, Dohány Str. 42.',
      hours: 'Di–So · 11:00–22:00',
      phone: '+36 1 234 5678',
      booking: 'TISCH RESERVIEREN',
      menu: 'SPEISEKARTE',
    },
  },

  nl: {
    loading: 'LADEN...',
    hero: {
      tagline: 'Ambachtelijke burgers, rokerige smaken, Amerikaanse ziel.',
      discover: 'ONTDEKKEN ↓',
      scroll: 'Scroll naar beneden',
    },
    story: {
      label: 'HET VERHAAL',
      title: ['Waar vuur', 'het vlees', 'ontmoet'],
      body: 'In 2024 openden we onze deuren in het hart van Boedapest. Voor ons zijn burgers geen fastfood — het is een ambacht. Vers 80/20 Hongaars rundvlees, smash-techniek met de hand, 12 uur hickoryrook.',
      stats: [
        { num: '12',   label: 'uur gerookt' },
        { num: '100%', label: 'Hongaars rund' },
        { num: '0',    label: 'compromissen' },
      ],
    },
    roster: {
      label: 'KIES DE JOUWE',
      title: 'Onze burgers',
      cta: 'Dit wil ik',
      statLabels: ['Vleesigheid', 'Kaasigheid', 'Pittigheid', 'Populariteit'],
    },
    process: {
      label: 'HET PROCES',
      title: 'Van grill naar bord',
      steps: [
        { num: '01', title: 'Verse ingrediënten', body: 'Elke ochtend vers rundvlees van lokale boerderijen. 80/20 verhouding, nooit ingevroren.' },
        { num: '02', title: 'Smash & Sear',       body: '230°C gietijzer, Maillard-reactie, perfecte korst in elke hap.' },
        { num: '03', title: 'Laag voor laag',     body: 'Huisgemaakte sauzen, verse groenten, gesmolten kaas — direct geserveerd.' },
      ],
    },
    quote: {
      text: ['Wij maken niet alleen burgers.', 'Wij creëren een beleving met elke hap.'],
      author: 'PÉTER KOVÁCS — OPRICHTER',
    },
    cta: {
      label: 'BEZOEK ONS',
      title: ['Kom,', 'proef het!'],
      address: 'Boedapest, District VII, Dohány St. 42.',
      hours: 'Di–Zo · 11:00–22:00',
      phone: '+36 1 234 5678',
      booking: 'TAFEL RESERVEREN',
      menu: 'VOLLEDIG MENU',
    },
  },
} satisfies Record<Lang, unknown>;
