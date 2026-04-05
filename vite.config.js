import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'the-stay': resolve(__dirname, 'the-stay.html'),
        dining: resolve(__dirname, 'dining.html'),
        wellness: resolve(__dirname, 'wellness.html'),
        experiences: resolve(__dirname, 'experiences.html'),
        'book-now': resolve(__dirname, 'book-now.html'),
      },
    },
  },
})
