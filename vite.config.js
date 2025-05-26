import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

// Function to get all domain HTML files
export default defineConfig({
  base: '/', // 🟢 ADD THIS LINE
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...Object.fromEntries(
          domains.map(domain => [
            domain, 
            resolve(__dirname, 'domain-html', `${domain}.html`)
          ])
        )
      }
    }
  },
  server: {
    open: true
  }
})
