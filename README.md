# kees-brand

Marketingwebsite en huisstijl voor **Kees**, je gezinsassistent in WhatsApp. Klaar is Kees.

Gebouwd met [Astro](https://astro.build): statisch, zonder framework-JS, met zelf gehoste fonts (Bricolage Grotesque + Figtree).

## Ontwerpkeuzes-paneel

Links onderin zit een paneel om de hoofdkleur (tomaat, indigo, bordeaux, olijf) en het koppenfont (Bricolage, Plus Jakarta Sans, Fraunces) live te wisselen. Het paneel is zichtbaar op localhost, of op een andere URL als je `?ontwerp` toevoegt (daarna onthoudt de browser het). Is de keuze definitief, zet die dan als standaard in `src/styles/global.css` en haal `<Ontwerpkeuzes />` uit `src/layouts/Base.astro`.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/
```

## Pagina's

- `/`: de landingspagina
- `/huisstijl`: logo, kleur, typografie, vorm, tone of voice en componenten

## Business Kees

Een tweede site in `business/`, voor kantoren en office managers. Gebruikt dezelfde fonts, tokens en componenten als Kees (via `../src`), met een eigen laag in `business/src/styles/business.css`.

```bash
npm run dev:business     # http://localhost:4322
npm run build:business   # bouwt naar business/dist/
```

- `/logo`: de logo-varianten voor Business Kees
- De sites linken naar elkaar via `src/lib/sites.ts`. Zet daar de echte domeinen.
- Live op https://business-kees.vercel.app (Vercel-project `business-kees`, gebouwd vanuit de hoofdmap met Build Command `npm run build:business` en Output Directory `business/dist`).

## Deploy naar Vercel

Live op https://kees.vercel.app (Vercel-project `kees`).


Push naar GitHub en importeer de repo in Vercel. Astro wordt automatisch herkend, configuratie is niet nodig.
Of via de CLI: `npx vercel`.

## Nog te doen

- **Foto's**: de founder-sectie gebruikt een tijdelijke Unsplash-foto (`src/assets/gezin-keuken.jpg`). Vervang die door een eigen foto.
- **Wachtlijst**: het formulier is een mock. Koppel het in `src/components/Wachtlijst.astro`, bij de comment "Mock".
- **Teller**: een vast getal in `src/lib/data.ts`.
- **Privacyverklaring en contact-e-mail**: de links in het formulier en de footer zijn nog placeholders.
- **Quote van Lenneke**: dit is een voorlopige tekst, laat haar die checken.
