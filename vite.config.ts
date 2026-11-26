import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base is '/' by default, which is correct for a <user>.github.io repo
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
