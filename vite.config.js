import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		quasar({
			sassVariables: 'src/assets/scss/quasar-variables.sass',
		}),
    VitePluginFonts({
      google: {
        families: ['Courier Prime', 'JetBrains Mono'],
      },
    }),
	],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },  
})
