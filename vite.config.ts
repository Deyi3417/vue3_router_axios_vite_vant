import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 这个配置会将所有以 /api 开头的请求转发到 http://localhost:3001，并将请求路径中的 /api 前缀删除。在实际开发中，你可以根据自己的需要进行相应的修改。
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:9080',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/,'')
  //     }
  //   }
  // }
})
