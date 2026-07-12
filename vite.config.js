import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress the false positive warning about unresolved imports
        if (warning.code === 'UNRESOLVED_IMPORT') return
        if (warning.message && warning.message.includes('failed to resolve import')) return
        warn(warning)
      }
    }
  }
})
