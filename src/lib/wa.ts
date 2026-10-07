// Bouwt WhatsApp-berichten als HTML, voor de iPhone-mockup (Telefoon.astro).
// Wordt zowel tijdens de build als in de browser gebruikt.

const VINKJES =
  '<svg class="wa-vinkjes" viewBox="0 0 16 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l3 3 6-7"/><path d="M6.5 8.5l.5.5 6-7"/></svg>';

const ANTWOORD =
  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3L2 7l4 4"/><path d="M2 7h7a5 5 0 0 1 5 5v1"/></svg>';

export type BerichtOpties = {
  van: 'in' | 'uit';
  html: string;
  tijd: string;
  staart?: boolean;
  verborgen?: boolean;
  attrs?: string;
};

function rij(binnen: string, klassen: string[], attrs = '') {
  return `<div class="${['wa-rij', ...klassen].join(' ')}" ${attrs}><div class="wa-rij__binnen">${binnen}</div></div>`;
}

export function bericht({ van, html, tijd, staart = false, verborgen = false, attrs = '' }: BerichtOpties) {
  const bubbelKlassen = ['wa-bubbel', van === 'uit' ? 'wa-bubbel--uit' : '', staart ? 'wa-bubbel--staart' : '']
    .filter(Boolean)
    .join(' ');
  const meta = `<span class="wa-meta">${tijd}${van === 'uit' ? VINKJES : ''}</span>`;
  return rij(
    `<div class="${bubbelKlassen}">${html}${meta}</div>`,
    [staart ? 'wa-rij--nieuw-afzender' : '', verborgen ? 'is-verborgen' : ''].filter(Boolean),
    attrs,
  );
}

export function knoppen(labels: string[], { verborgen = false, attrs = '', hint = false } = {}) {
  const html = labels
    .map(
      (l, i) =>
        `<button class="wa-knop${i === 0 ? ' wa-knop--ja' : ''}${i === 0 && hint ? ' wa-knop--hint' : ''}" type="button" tabindex="-1">${ANTWOORD}${l}</button>`,
    )
    .join('');
  return rij(`<div class="wa-knoppen">${html}</div>`, verborgen ? ['is-verborgen'] : [], attrs);
}

export function typen({ verborgen = true, attrs = '' } = {}) {
  return rij(
    '<div class="wa-bubbel wa-bubbel--staart wa-typen"><i></i><i></i><i></i></div>',
    ['wa-rij--nieuw-afzender', verborgen ? 'is-verborgen' : ''].filter(Boolean),
    attrs,
  );
}
