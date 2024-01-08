// uno.config.js
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno() // 添加 UnoCSS 的默认样式预设
  ],
  rules: [
    [/^p-([\\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })]
  ]
})
