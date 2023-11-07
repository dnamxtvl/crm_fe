export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      title: 'IPCC CRM',
      meta: [{ name: 'description', content: 'SALES CRM' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' },
      ],
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'assets/styles/core.scss',
    'assets/styles/application.scss',
    'assets/fonts/fontawesome.css',
    'assets/fonts/tabler-icons.css',
    'assets/fonts/flag-icons.css'
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
          additionalData: `@use "/assets/styles/element/index.scss" as element;`,
        },
      },
    }
  },
  typescript: {
    strict: true,
    shim: false,
  },
})
