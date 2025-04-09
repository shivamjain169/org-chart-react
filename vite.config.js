// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // or index.ts if using TS
      name: 'OrgChartReact',
      fileName: (format) => `org-chart-react.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
});
