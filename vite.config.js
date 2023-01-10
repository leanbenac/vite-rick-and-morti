import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://leanbenac.github.io/vite-rick-and-morti/",
  plugins: [react()]
})
