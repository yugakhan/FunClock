import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
const { plugin: mdPlugin, Mode } = require('vite-plugin-markdown');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react(), mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    outDir: './docs',
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
