import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    include: ['src\/**\/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: ['./vitest-setup.ts'],
    server: {
      deps: {
        inline: ['foldkit'],
      },
    },
  },
});
