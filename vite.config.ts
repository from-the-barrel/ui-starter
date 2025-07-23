import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Set the base path for GitHub Pages or your subdirectory
  plugins: [react()]
})
