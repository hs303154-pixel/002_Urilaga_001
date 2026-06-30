import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:\\Users\\user\\.gemini',
        'd:\\15_program development\\002_u-aga'
      ]
    }
  }
})
