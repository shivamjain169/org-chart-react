import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/org-chart-react/',  // 👈 MUST match GitHub repo name
  plugins: [react()],
});
