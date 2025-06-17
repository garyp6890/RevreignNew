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
      output: {
        assetFileNames: (assetInfo) => {
          // Keep JSON files in their original structure
          if (assetInfo.name && assetInfo.name.endsWith('.json')) {
            return 'src/data/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  // Ensure the admin folder is copied to dist during build
  publicDir: 'public',
  // Add assetsInclude to handle JSON files properly
  assetsInclude: ['**/*.json']
});