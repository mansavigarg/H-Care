import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths based on your project structure
  ],
  plugins: [
    react(),
    tailwindcss(),
  ],
})