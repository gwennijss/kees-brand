# Kees · Design system voor developers

Versie 1.0 · oktober 2026

Alles wat je nodig hebt om Kees te bouwen zoals het bedoeld is: kleuren, fonts, logo, componenten en beweging. Alle waarden komen rechtstreeks uit de code van de marketingsite (`src/styles/global.css` en `src/components/`). Bij twijfel is de code leidend.

**In deze map**

| Bestand | Wat |
| --- | --- |
| `DESIGN.md` | Dit document |
| `tokens.css` | Alle tokens als CSS-variabelen, direct te importeren |
| `tokens.json` | Dezelfde tokens als JSON (voor apps, e-mail of Figma Tokens) |
| `logo/` | Logo, bloem en sticker als SVG (letters omgezet naar paden) |
| `logo/png/` | PNG-exports: logo's, app-icoon, WhatsApp-avatar, favicon |
| `voorbeelden/` | Screenshots van de componenten zoals ze live staan |
| `tone-of-voice.md` | Hoe Kees schrijft en praat |

Live referentie: de pagina `/huisstijl` van de site.

---

## 1. Basisprincipes

1. **Rustig en vrolijk.** Een neutrale basis met bordeaux tekst. Kleur zit in afgebakende vlakken, nooit overal tegelijk.
2. **Eén fel vlak per element.** Wat erin staat is wit of een zachte tint.
3. **Koppen in één stijl.** Geen cursief, geen serif-accenten, geen markeerstift en geen gekleurde woorden.
4. **Rond.** Alles heeft afgeronde hoeken. Knoppen, chips en navigatie zijn pillen.
5. **Zachte beweging.** Lang uitlopend, nooit schokkerig. `prefers-reduced-motion` wordt altijd gerespecteerd.

---

## 2. Kleur

### Palet

| Naam | Token | HEX | RGB | Rol | Tekst erop |
| --- | --- | --- | --- | --- | --- |
| Bordeaux | `--bordeaux` | `#67000A` | 103 0 10 | Tekst, logo, koppen | Wit |
| Tomaat | `--tomaat` | `#F4532C` | 244 83 44 | Kees-sticker, primaire knop | Wit |
| Indigo | `--indigo` | `#4F4FC1` | 79 79 193 | Vertrouwen, voortgang, avond | Wit |
| Hemel | `--hemel` | `#ABC9FB` | 171 201 251 | Zachte vlakken, Kees-bloem | Bordeaux |
| Lime | `--lime` | `#C4E252` | 196 226 82 | Vrolijk accent | Bordeaux |
| Lila | `--lila` | `#DAA3E0` | 218 163 224 | Speels accent | Bordeaux |
| Boter | `--boter` | `#FDF8A7` | 253 248 167 | Warm accent, highlights | Bordeaux |

### Neutraal

| Naam | Token | HEX | Gebruik |
| --- | --- | --- | --- |
| Achtergrond | `--achtergrond` | `#F6F5F2` | Pagina-achtergrond, invoervelden |
| Wit | `--wit` | `#FFFFFF` | Kaarten |
| Licht-diep | `--licht-diep` | `#EBE9E4` | Lege voortgangsbalk, scheidingen |

### Tekst

| Token | Waarde | Gebruik |
| --- | --- | --- |
| `--ink` | `#67000A` | Koppen en standaardtekst |
| `--ink-zacht` | `#924A50` | Lopende tekst, leads |
| `--ink-stil` | `#B17F83` | Labels, metadata, tijdstempels |
| `--lijn` | `rgba(103, 0, 10, 0.11)` | Randen en scheidingslijnen |

### Zachte tinten

Voor achtergronden binnen kaarten en voor hover-states. Nooit als hoofdvlak.

`--hemel-zacht #DBE7FD` · `--hemel-licht #EEF3FE` · `--tomaat-zacht #FDE3DB` · `--lila-zacht #F3E1F5` · `--boter-zacht #FEFCD8` · `--lime-zacht #ECF5C4` · `--indigo-zacht #E4E4F7` · `--indigo-diep #2B2B6E`

### Regels

- Tekst is bordeaux, of wit op indigo, tomaat en bordeaux.
- Oranje en lime niet direct naast elkaar als grote vlakken.
- Geen kleuren toevoegen buiten dit palet.
- Verhouding op een pagina: ongeveer 45% achtergrond, 12% bordeaux, en de rest verdeeld over de accentkleuren.

---

## 3. Typografie

| Rol | Font | Bron |
| --- | --- | --- |
| Koppen en logo | **Bricolage Grotesque** (variabel: `wght` 200–800, `opsz` 12–96) | [Google Fonts](https://fonts.google.com/specimen/Bricolage+Grotesque) · `npm i @fontsource-variable/bricolage-grotesque` |
| Lopende tekst en UI | **Figtree** (variabel: `wght` 300–900) | [Google Fonts](https://fonts.google.com/specimen/Figtree) · `npm i @fontsource-variable/figtree` |

Op de site zijn de fonts zelf gehost via Fontsource, zodat er geen bezoekersgegevens naar Google gaan. Doe dat bij voorkeur ook in andere producten.

```css
@import '@fontsource-variable/bricolage-grotesque/opsz.css'; /* bevat wght + opsz */
@import '@fontsource-variable/figtree/wght.css';
```

### Schaal

| Stijl | Font | Grootte (mobiel → desktop) | Gewicht | Regelhoogte | Spatiëring |
| --- | --- | --- | --- | --- | --- |
| Hero | Bricolage | `clamp(3rem, 7vw, 6.75rem)` · 48 → 108 px | 700 | 0.94 | −0.055em |
| XL | Bricolage | `clamp(2.6rem, 4.9vw, 4.4rem)` · 42 → 70 px | 650 | 0.98 | −0.05em |
| L (sectiekop) | Bricolage | `clamp(2rem, 3.6vw, 3.25rem)` · 32 → 52 px | 650 | 1.02 | −0.04em |
| M (kaartkop) | Bricolage | `clamp(1.2rem, 1.6vw, 1.4rem)` · 19 → 22 px | 650 | 1.15 | −0.02em |
| Lead | Figtree | `clamp(1.075rem, 1.3vw, 1.2rem)` · 17 → 19 px | 400 | 1.6 | 0 |
| Body | Figtree | 17 px | 400 | 1.6 | 0 |
| Knop | Figtree | 16 px | 700 | 1 | 0 |
| Label | Figtree | 12 px, HOOFDLETTERS | 750 | 1.3 | +0.09em |

- Koppen krijgen `text-wrap: balance`, lopende tekst `text-wrap: pretty`.
- Maximale regellengte voor lopende tekst: ongeveer 32em.
- `font-optical-sizing: auto` laten staan: Bricolage past zijn vorm dan zelf aan de grootte aan.

---

## 4. Logo

Het woordmerk is **kees.** in kleine letters, in Bricolage Grotesque 800 met −0.055em spatiëring. Achter het woord staat een Kees-bloempje als punt (10 golven).

### Bestanden (`logo/`)

| Bestand | Gebruik |
| --- | --- |
| `kees-logo.svg` | Primair: bordeaux woord, tomaat punt. Op wit, achtergrond, hemel, lime, boter en lila. |
| `kees-logo-wit.svg` | Wit woord, tomaat punt. Op bordeaux en donkere foto's. |
| `kees-logo-wit-op-tomaat.svg` | Wit woord, bordeaux punt. Op tomaat. |
| `kees-logo-wit-op-indigo.svg` | Wit woord, lime punt. Op indigo. |
| `kees-logo-bordeaux-mono.svg` | Alles bordeaux. Voor eenkleurig drukwerk. |
| `kees-bloem.svg` / `kees-bloem-hemel.svg` | Losse bloem (de punt) en de grote achtergrondbloem |
| `kees-sticker.svg` | Sticker met "kees" |
| `kees-sticker-k.svg` | Sticker met "k": avatar en favicon |
| `kees-app-icoon.svg` | App-icoon: sticker op hemelsblauw vierkant |

In `logo/png/` staan dezelfde bestanden als PNG, plus `kees-whatsapp-avatar-640.png`, `apple-touch-icon-180.png` en `favicon-32.png`.

> De letters in de SVG's zijn omgezet naar paden en exact gemeten tegen de webversie. Het font hoeft dus niet geïnstalleerd te zijn. Gebruik op het web bij voorkeur de SVG.

### Regels

- **Vrije ruimte:** rondom minimaal de hoogte van de "k".
- **Minimale grootte:** 24 px breed op scherm, 15 mm in print.
- **Niet doen:** uitrekken, een andere kleur, een schaduw, draaien, transparant of te licht maken, of een vinkje of ander element toevoegen.

### In de code

De site gebruikt een component in plaats van een afbeelding (`src/components/Logo.astro`). Het bloempje draait bij hover een kwartslag en schaalt naar 1.25 (`0.6s` met `--veer`).

---

## 5. Vorm: de Kees-bloem en de sticker

De bloem is een cirkel met zachte golven. De vorm wordt berekend in `src/lib/flower.ts`:

```ts
flowerPath(lobes = 12, amp = 0.085, radius = 42) // viewBox 0 0 100 100
```

| Variant | Golven | Amplitude | Gebruik |
| --- | --- | --- | --- |
| Logo-punt | 10 | 0.11 | Punt achter "kees" |
| Sticker | 14 | 0.085 | "Klaar is Kees!", app-icoon, avatar |
| Achtergrondbloem | 12 | 0.07 | Grote hemelsblauwe vorm achter de telefoon (draait 90 s per rondje) |

**Sticker:** tomaat met witte tekst, of boter of hemel met bordeaux tekst. Tekst in Bricolage 650, −0.04em, regelhoogte 0.95. Plaats hem licht gedraaid (−8° tot −14°), maximaal één sticker per scherm. Hij landt met een veer: van `scale(1.6) rotate(-30deg)` naar `scale(1) rotate(-10deg)`, `0.9s` met `--veer`.

---

## 6. Componenten

Screenshots staan in `voorbeelden/`.

### Knoppen · `voorbeelden/knoppen.png`

Pillen met een **harde schaduw** eronder, het herkenningspunt van Kees.

| | Primair (`.knop`) | Licht (`.knop--licht`) |
| --- | --- | --- |
| Achtergrond | `--tomaat` | `--wit` |
| Tekst | `--wit` | `--bordeaux` |
| Rand | geen | `inset 0 0 0 1.5px --bordeaux` |
| Schaduw | `0 4px 0 --bordeaux` | idem, plus de rand |

| Maat | Hoogte | Padding | Font |
| --- | --- | --- | --- |
| Normaal | min. 52 px | `0.7em 1.45em` | Figtree 700, 16 px |
| Klein (`.knop--klein`) | min. 42 px | `0.55em 1.05em` | Figtree 700, 15 px |

| Status | Gedrag |
| --- | --- |
| Hover | `translateY(-2px)` en schaduw `0 6px 0`, pijl-icoon schuift `3px` naar rechts (`0.5s`, `--uit`) |
| Active | `translateY(3px)` en schaduw `0 1px 0` (`0.12s`) |
| Focus | `outline: 2px solid --indigo; outline-offset: 3px` |

```css
.knop {
  display: inline-flex; align-items: center; gap: .55em;
  min-height: 52px; padding: .7em 1.45em;
  border: 0; border-radius: 999px;
  background: var(--tomaat); color: #fff;
  font: 700 1rem/1 var(--font-tekst);
  box-shadow: 0 4px 0 var(--bordeaux);
  transition: transform .5s var(--uit), box-shadow .5s var(--uit);
}
.knop:hover  { transform: translateY(-2px); box-shadow: 0 6px 0 var(--bordeaux); }
.knop:active { transform: translateY(3px);  box-shadow: 0 1px 0 var(--bordeaux); transition-duration: .12s; }
```

Op een gekleurd vlak mag de knop omdraaien naar wit met bordeaux tekst (bijvoorbeeld in de tomaatkleurige footer).

### Navigatie · `voorbeelden/navigatie.png`

- Een zwevende witte pil, vast bovenaan (`position: fixed`), 14 px van de bovenrand en gecentreerd.
- **Pil:** `padding: 7px 7px 7px 20px`, schaduw `--schaduw-nav`.
- **Links:** 40 px hoog en pilvormig, in Figtree 750 op 12 px, in hoofdletters met +0.09em spatiëring. Bij hover krijgen ze een bordeaux achtergrond met witte tekst, en rolt de tekst omhoog (`0.45s`, `--uit`).
- **CTA "Aanmelden":** een tomaat pil.
- **"Functies":** opent een mega-menu (een witte kaart met radius 28 px) en dimt de pagina.
- **Mobiel (< 860 px):** alleen het logo en de CTA.

### Kaarten

| Type | Radius | Achtergrond | Schaduw |
| --- | --- | --- | --- |
| Inhoudskaart (formulier, functie) | 32 px | wit | `0 0 0 1px --lijn, 0 40px 80px -40px rgb(60 20 10 / .3)` |
| Zwevende kaart (Vandaag, melding) | 20 px | wit | `--schaduw-zweef` |
| Tegel (bento) | 26 px | één paletkleur | `--schaduw-kaart` |
| Notitiekaart ("in je hoofd") | 22 px | één paletkleur | `0 28px 40px -24px rgb(30 30 90 / .5)` |
| Sectievlak | 40 px | hemel, boter, indigo of lila | geen |

Zie `voorbeelden/tegels.png`, `kaarten-hoofd.png`, `kaart-zwevend.png` en `functies.png`.

### Formulieren · `voorbeelden/formulier.png`

| Element | Specificatie |
| --- | --- |
| Label | Figtree 750, 15 px, bordeaux, 6 px boven het veld |
| Invoerveld | min. 46 px hoog, padding `0 16px`, radius 14 px, achtergrond `--achtergrond`, rand `inset 0 0 0 2px --lijn` |
| Veld met focus | rand `inset 0 0 0 2.5px --indigo` |
| Placeholder | bordeaux op 40% |
| Keuzechip | 38 px hoog, pilvorm, `--achtergrond`, rand `inset 0 0 0 1.5px --lijn`, Figtree 700, 14 px |
| Chip bij hover | rand 2 px bordeaux |
| Gekozen chip | bordeaux achtergrond, witte tekst, ✓ ervoor, `rotate(-2deg) scale(1.04)` met `--veer` |
| Foutmelding | kader met boter-achtergrond, radius 14 px, Figtree 700 |
| Voortgangsbalk | 16 px hoog, pilvorm, spoor in wit op 55%, vulling in indigo |

### Instellingen en schakelaars · `voorbeelden/instellingen-kaart.png`

- Een iOS-achtige lijst in een witte kaart met radius 28 px.
- **Schakelaar:** 51 × 31 px met een knop van 27 px. Aan is iOS-groen `#34C759` (voor vaste instellingen) of indigo (voor de pauzeknop). Hij schakelt in `0.45s` met `--veer`.

### FAQ · `voorbeelden/faq.png`

- **Item:** wit, radius 20 px, rand `inset 0 0 0 2px --lijn`. Open krijgt het een `--boter-zacht` achtergrond zonder rand.
- **Plusknop:** een indigo cirkel van 30 px. Open draait hij 135° en wordt hij bordeaux.

### iPhone met WhatsApp · `voorbeelden/iphone-hero.png`

Kees praat altijd in WhatsApp. Laat het product dus zien in een realistische iPhone met een getrouwe WhatsApp-weergave (`src/components/Telefoon.astro` en `src/lib/wa.ts`).

| Element | Waarde |
| --- | --- |
| Toestel | Verhouding 418 : 877, titanium rand (verloop `#E9E5DF → #8F8A82`), Dynamic Island |
| Chat-achtergrond | `#EFEAE2` met doodle-patroon op 3,2% dekking |
| Bericht van Kees | `#FFFFFF`, radius 8 pt, met een staartje op het eerste bericht van een reeks |
| Bericht van gebruiker | `#D9FDD3` |
| Tijd en metadata | `#667781`, 11 pt · gelezen-vinkjes `#53BDEB` |
| Antwoordknop | wit, tekst `#027EB5`, 38 pt hoog |
| Lettertype | `-apple-system, SF Pro Text` |

Nieuwe berichten schuiven open van hoogte 0 (`grid-template-rows: 0fr → 1fr`, `0.7s`, `--uit`) en duwen de oudere berichten vloeiend omhoog.

---

## 7. Ruimte en layout

| Token | Waarde | Gebruik |
| --- | --- | --- |
| `--container` | 1180 px | Maximale inhoudsbreedte |
| `--gutter` | `clamp(20px, 4vw, 48px)` | Zijmarge |
| `--sectie-ruimte` | `clamp(88px, 10vw, 144px)` | Boven en onder elke sectie |
| Afstand kop → inhoud | 32–48 px | |
| Raster-gap | 12–24 px | Tegels en kaarten |

Elke sectie heeft één idee en past op desktop binnen één schermhoogte. Breekpunten: 960, 860, 640 en 480 px.

### Radius

`--radius-s 12px` · `--radius-m 20px` · `--radius-l 32px` · sectievlakken `40px` · pillen `999px`

---

## 8. Beweging

| Token | Curve | Gebruik |
| --- | --- | --- |
| `--uit` | `cubic-bezier(0.16, 1, 0.3, 1)` | Standaard voor bijna alles: lang uitlopend |
| `--in-uit` | `cubic-bezier(0.65, 0, 0.35, 1)` | Loops (zweven) en heen-en-weer |
| `--veer` | `cubic-bezier(0.34, 1.25, 0.64, 1)` | Alleen voor kleine, speelse dingen: stickers, vinkjes, chips |

**Duur:** 250 ms voor kleur en hover, 600 ms voor UI-overgangen, 1.1–1.4 s voor binnenkomende elementen.

**Scroll-reveal:** elementen met `data-reveal` komen binnen met een overgang van `opacity 0, translateY(32px), blur(8px)` naar de normale staat (`1.1–1.4s`, `--uit`), 110 ms na elkaar.

**Smooth scroll:** met [Lenis](https://github.com/darkroomengineering/lenis) (`lerp: 0.09`). Ankerlinks scrollen in 1.4 s.

**Regels**
- Geen doorschietende of stuiterende animaties op grote elementen.
- Continue beweging (zwevende telefoon, draaiende bloem) is traag: 8–90 s per cyclus.
- `prefers-reduced-motion: reduce` zet alle animaties uit.
- Er is een klasse `html.alles-stil` die alle animaties pauzeert. Die wordt gebruikt door de pauzeschakelaar.

---

## 9. Toegankelijkheid

- Contrast: bordeaux op achtergrond, wit, hemel, lime, lila en boter haalt AA. Wit op tomaat haalt AA alleen voor grote of vette tekst (≥ 18,5 px bold).
- Focusstijl: `outline: 2px solid var(--indigo); outline-offset: 3px`.
- Decoratieve elementen (bloemen, stickers, mockups) krijgen `aria-hidden="true"`.
- Interactieve demo's moeten ook met het toetsenbord bedienbaar zijn.

---

## 10. Tekst

Zie `tone-of-voice.md`. De belangrijkste regels:

- We zeggen nooit "AI". Kees is een gezinsassistent.
- We schrijven altijd "Kees", nooit "hij" of "zij".
- Geen sloganzinnen met een komma en een tegenstelling.
- "Klaar is Kees." hooguit één keer per tekst, als afsluiter.
