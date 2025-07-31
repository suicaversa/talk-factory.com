import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: '検定ビルダー | あなたのオリジナル検定を簡単に作成・公開',
          description: '専門知識を検定にして共有しましょう。あなたのコンテンツを収益化する新しい方法。'
        }
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    },
    minify: 'terser'
  },
  server: {
    port: 3000,
    open: true
  }
}) 