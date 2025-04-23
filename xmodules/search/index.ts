import {
  createResolver, defineNuxtModule,
  addComponentsDir,
  addImportsDir,
} from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'contentsearch'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.alias['#contentsearch'] = resolve('.')

    addComponentsDir({
      path: resolve('./components'),
      prefix: options.prefix,
      pathPrefix: false,
    })

    addImportsDir(resolve('./composables'))

    console.log('ContentSearch Module processed!')
  }
})
