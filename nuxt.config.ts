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
    'assets/scss/application.scss'
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
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
})
