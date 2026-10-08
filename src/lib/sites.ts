// Kees en Business Kees zijn twee losse sites die naar elkaar linken.
// Lokaal draait Kees op :4321 en Business Kees op :4322.
// Zet de echte domeinen hier zodra ze er zijn.
export const KEES_URL = import.meta.env.DEV ? 'http://localhost:4321' : 'https://kees.vercel.app';
export const BUSINESS_URL = import.meta.env.DEV ? 'http://localhost:4322' : 'https://business-kees.vercel.app';

// Welke Business Kees-logovariant op de Kees-site staat (zie /logo op de Business-site).
export const BUSINESS_LOGO = 'regel' as const;
