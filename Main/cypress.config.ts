import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

reporter: 'junit',
reporterOptions: {
  mochaFile: 'cypress/results/results-[hash].xml',
  toConsole: true,
},

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
