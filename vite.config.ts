import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  css: {
    lightningcss: {
      errorRecovery: true
    }
  },
  plugins: [react(), tailwindcss()],
})
