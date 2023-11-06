import { fileURLToPath } from 'node:url'
// import '@core/scss/template/index.scss'
// import '@styles/styles.scss'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      title: 'IPCC CRM',
      meta: [{ name: 'description', content: 'SALES CRM' }]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'assets/styles.scss',
    'assets/index.scss'
  ],
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt'
  ],
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/assets/scss/element/index.scss" as element;`,
        },
      },
    },
    resolve: {
      alias: {
        '@configured-variables': fileURLToPath(new URL('./@styles/variables/_template.scss', import.meta.url)),
      },
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
})
