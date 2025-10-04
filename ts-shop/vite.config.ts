import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// We reference assets from the parent directory (../images, ../css, ../style.css)
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['..']
    }
  }
})
