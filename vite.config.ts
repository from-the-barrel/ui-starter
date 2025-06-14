import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lit-distro/',  // Set the base path for GitHub Pages or your subdirectory
  plugins: [react()]
})
