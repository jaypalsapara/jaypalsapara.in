import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
    },
  },
  /**
   * Custom build with chunks
   */
  build: {
    rollupOptions: {
      output: {
        /**
         * Manual chunks
         *
         * @param id
         * @returns
         */
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            // Other vendors
            return 'vendor';
          }

          // Page chunks
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/src/pages/')[1]?.split('/')[0] || id.split('/pages/')[1]?.split('/')[0];
            return `page-${pageName}`;
          }

          // Component chunks (if you want separate component chunks)
          if (id.includes('/src/components/')) {
            return 'components';
          }

          // App layout and other core files
          if (id.includes('app-layout')) {
            return 'app-layout';
          }
        },

        /**
         * Optional: Custom chunk file naming
         *
         * @param chunkInfo
         * @returns
         */
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name.startsWith('page-')) {
            return 'pages/[name]-[hash].js';
          }
          if (chunkInfo.name.endsWith('-vendor')) {
            return 'vendors/[name]-[hash].js';
          }
          return 'chunks/[name]-[hash].js';
        },

        // Optional: Custom entry file naming
        entryFileNames: 'entries/[name]-[hash].js',

        /**
         * Optional: Custom asset file naming
         *
         * @param assetInfo
         * @returns
         */
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0].endsWith('.css')) {
            return 'styles/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
    // Optional: Adjust chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
});
