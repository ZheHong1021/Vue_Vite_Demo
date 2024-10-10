import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      // 添加 @ 别名(指向 src 目錄)
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      // 添加 @images 别名(指向 src/assets/images 目錄)
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url))

    }
  },

  // 設定 proxy 代理
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }

    }
  }
})
