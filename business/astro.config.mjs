import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Business Kees: een tweede site in dezelfde repo. Fonts, tokens en de Kees-bloem
// komen uit de Kees-site (../src), zodat beide sites hetzelfde merk blijven.
export default defineConfig({
  site: 'https://business-kees.vercel.app',
  server: { port: 4322 },
  devToolbar: { enabled: false },
  vite: {
    server: {
      fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] },
    },
  },
});
