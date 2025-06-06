import {fileURLToPath} from 'url'
import {dirname, join} from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
//import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4, },
  compatibilityDate: '2025-02-20',

  devtools: {enabled: true },

  devServer: {
    host: '0.0.0.0',
    port: 3000,

  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  app: {
    //NUXT_APP_BASE_URL
    //baseURL: "/tapestry/",
  },
  routeRules: {
    //? '/**': { isr: true },
    //? '/': { prerender: cdtrue },
  },
  nitro: {
    //doc in https://nitro.build/config
    prerender: {
      // Workaround for "Error: [404] Page not found: /manifest.json"
      //autoSubfolderIndex: false, //true,
      //concurrency: 1,
      //interval: 0,
      failOnError: false,
      crawlLinks: false, //true,
      //ignore: [],
      routes: ['/'],
      retry: 3,
      retryDelay: 500,
    },
    logLevel: 4,

  },


  modules: [
    '@nuxt/content',

    //'@nuxtjs/seo',

    '@nuxt/ui',
    // v3.0.0-beta.2
    // = @nuxt/icon
    // = @nuxtjs/tailwindcss
    // = @nuxtjs/color-mode
    // ='@nuxt/fonts',
    //'@nuxt/image',

  ],

  css: [join(currentDir, './app/assets/css/tailwind.css')],

/*
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ogImage: {
    enabled: false
  },
  sitemap: {
    enabled: false
  },
  robots: {
    enabled: false
  },
  seo: { // seo utils
    enabled: false
  },
  schemaOrg: {
    enabled: false
  },
  linkChecker: {
    enabled: false
  },
*/

})
