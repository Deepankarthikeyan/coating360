import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';

interface AtRule {
  name: string;
  remove: () => void;
}

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          carousel: ['react-slick', 'slick-carousel'],
          animation: ['wow.js', 'react-countup', 'react-intersection-observer'],
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        {
          postcssPlugin: 'strip-charset',
          AtRule: {
            charset: (atRule: AtRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  server: {
    open: false,
    host: true,
    allowedHosts: ['.trycloudflare.com'],
  },
});
