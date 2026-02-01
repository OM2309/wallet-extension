import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      include: ['path', 'buffer', 'crypto', 'stream', 'util', 'process'],
      globals: {
        Buffer: true,     
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      buffer: 'buffer',
      crypto: 'crypto-browserify',
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
})