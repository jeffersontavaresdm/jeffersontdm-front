import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import process from 'process';

config();

process.env.NODE_ENV === 'production'
  ? console.log("produção!")
  : console.log("desenvolvimento!")

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.NODE_ENV === 'production'
      ? parseInt(process.env.PRD_PORT || '80')
      : parseInt(process.env.DEV_PORT || '3000'),
  },
});