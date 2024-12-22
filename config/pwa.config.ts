import type { ModuleOptions } from '@vite-pwa/nuxt';

const config: Partial<ModuleOptions> = {
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,svg}'],
  },
  manifest: {
    name: 'Local Ledger',
    short_name: 'Ledger',
    start_url: '/groups',
    description: 'A minimal offline expense tracker mobile app with filters, graph, import and export options',
    theme_color: '#000',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
};

export default config;
