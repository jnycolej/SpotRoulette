import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // any request the browser makes to /places
      // is transparently forwarded to http://localhost:3001/places
      "/api": "http://localhost:3001"
    }
  }
});
