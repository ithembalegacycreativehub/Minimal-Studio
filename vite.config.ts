import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages note:
  // Use '/' for a user/organization site, or '/repository-name/' for a project site.
  // Example: base: '/minimal-living-studio/'
  base: '/Minimal-Studio/',
  build: {
    sourcemap: true,
  },
});
