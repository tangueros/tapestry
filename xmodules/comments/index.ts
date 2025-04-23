import {
  createResolver, defineNuxtModule,
  addComponentsDir,
  addImportsDir,
} from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'contentcomments'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.alias['#contentcomments'] = resolve('.')

    addComponentsDir({
      path: resolve('./components'),
      prefix: options.prefix,
      pathPrefix: false,
    })

    addImportsDir(resolve('./composables'))

    console.log('ContentComments Module processed!')
  }
})
