export default defineNuxtConfig({
  devtools: {enabled: false },
  compatibilityDate: '2025-02-20',
  future: {
    compatibilityVersion: 4,
  },

  app: {
    //NUXT_APP_BASE_URL
    baseURL: "/tapestry/",
  },
})
