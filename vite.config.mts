import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vitePluginEslint from 'vite-plugin-eslint'

const HOST = "0.0.0.0"
const REPLACEMENT = `${resolve(__dirname, './src')}/`
export default ({ mode }) => {
  const isProduction = mode === 'production'
  defineConfig({
    base: "./",
    server: {
      host: HOST,
      port: 10001,
    },
    plugins: [
      vue(),
      UnoCSS(),
      !isProduction && vitePluginEslint()
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
}