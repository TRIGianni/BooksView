import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouter } from "@react-router/dev/vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlifyPlugin(), reactRouter()],
  test: {
    environment: "jsdom",
    setupFiles: './src/test/setup.js',
  }
})
