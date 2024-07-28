import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        import: true
      }
    }
  },
  build: {
    outDir: 'docs', // Correct placement of the outDir option
    rollupOptions: {
      input: {
        main: './index.html',
        style: './src/style.css' // Make sure Vite knows to bundle this file
      }
    }
  }
});
