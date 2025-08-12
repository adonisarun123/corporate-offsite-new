import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Corporate Offsite Experts - Premium Team Building & Retreat Solutions',
          description: 'Plan unforgettable corporate offsites with expert guidance. Premium venues, team building activities, and seamless event management across India & Southeast Asia.',
          keywords: 'corporate offsite, team building, corporate retreat, venue booking, event planning, team activities, leadership training, corporate events, India, Southeast Asia',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop',
          url: 'https://corporate-offsite-experts.com'
        }
      }
    }),
    // Bundle analyzer - generates dist/stats.html
    visualizer({
      filename: 'dist/stats.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  ssr: {
    // Add externalizations if needed; Vike handles SSR entry/manifest
    noExternal: [],
  }
})
