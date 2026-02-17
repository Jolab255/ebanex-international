import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE:
// This config intentionally avoids exposing any secrets to the client bundle.
// If you need to work with private API keys (e.g. GEMINI_API_KEY),
// they must live in a backend / serverless function, not in this Vite config.

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
