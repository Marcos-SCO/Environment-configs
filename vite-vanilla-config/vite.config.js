// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        // assetFileNames: `assets/[name].[ext]`,

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/img/[name].[ext]';
          }
          
          if (/\.(ttf|otf)$/.test(name ?? '')){
              return 'assets/fonts/[name].[ext]';
          }
          
          // if (/\.css$/.test(name ?? '')) {
          //     return 'assets/css/[name]-[hash][extname]';   
          // }
    
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name].[ext]';
        },
      }
    },

  }
});