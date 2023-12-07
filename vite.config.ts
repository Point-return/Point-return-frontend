import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/point-return-frontend/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
