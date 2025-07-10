import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/**
 * @see https://vite.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  base: '/rankaholic/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
