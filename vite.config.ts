import { foldkit } from '@foldkit/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcss(), tsconfigPaths(), foldkit({ devToolsMcpPort: 9988 })],
  optimizeDeps: {
    entries: ['src/main.ts'],
  },
});
