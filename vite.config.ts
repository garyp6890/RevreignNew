import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        // Include JSON files as assets
        'src/data/home': './src/data/home.json',
        'src/data/links': './src/data/links.json',
        'src/data/social': './src/data/social.json',
        'src/data/amazon': './src/data/amazon.json',
        'src/data/walmart': './src/data/walmart.json',
        'src/data/partnerships': './src/data/partnerships.json',
        'src/data/settings': './src/data/settings.json',
        'src/data/templates/starter': './src/data/templates/starter.json',
        'src/data/templates/templates': './src/data/templates/templates.json'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.startsWith('src/data/')) {
            return '[name].json';
          }
          return 'assets/[name]-[hash].js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.json')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  publicDir: 'public',
  assetsInclude: ['**/*.json']
});