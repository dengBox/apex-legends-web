import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
const HOST = "0.0.0.0"
const REPLACEMENT = `${resolve(__dirname, './src')}/`
export default defineConfig({
  base: "./",
  server: {
    host: HOST,
    port: 3000,
  },
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: REPLACEMENT,
      }
    ],
  }
})
