import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel serves from the root; GitHub Pages serves from /task-tracker/
  base: process.env.VERCEL ? '/' : '/task-tracker/',
})
