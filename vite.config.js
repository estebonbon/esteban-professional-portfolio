import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures routing works for SPAs
  },
  /* base: '/esteban-professional-portfolio/', // Replace with your GitHub repository name */
});

