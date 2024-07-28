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
    rollupOptions: {
      outDir: 'docs', // Set the output directory to 'docs'
      input: {
        main: './index.html',
        style: './src/style.css' // Make sure Vite knows to bundle this file
      }
    }
  }
});
