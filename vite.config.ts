/// <reference types="vitest/config" />
import path from 'node:path'

import { fileURLToPath, URL } from 'node:url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/App/config/i18n/locales'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
