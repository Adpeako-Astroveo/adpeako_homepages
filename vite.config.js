import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

// Function to get all domain HTML files
function getDomainHtmlFiles() {
  const domainHtmlDir = resolve(__dirname, 'domain-html')
  if (!fs.existsSync(domainHtmlDir)) {
    return []
  }
  return fs.readdirSync(domainHtmlDir)
    .filter(file => file.endsWith('.html'))
    .map(file => file.replace('.html', ''))
}

// Get list of all domains
const domains = getDomainHtmlFiles()

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})