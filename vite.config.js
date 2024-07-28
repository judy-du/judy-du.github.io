import { defineConfig } from 'vite';
import postcss from './postcss.config'; // Make sure this import is correct

export default defineConfig({
  css: {
    postcss,
    preprocessorOptions: {
      // Typically, you configure specific preprocessor options here for SASS/SCSS if needed
      // Example for SCSS:
      // scss: {
      //   additionalData: `$injectedColor: orange;`
      // }
    }
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: './index.html',
        style: './src/style.css'
      }
    }
  }
});
