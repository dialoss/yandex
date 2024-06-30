import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader'
import * as path from "node:path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src/"),
    }
  },

  plugins: [react(), svgLoader()],
})
