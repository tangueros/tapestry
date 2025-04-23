import {
  createResolver, defineNuxtModule,
  addComponentsDir,
  addImportsDir,
} from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'moreui'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.alias['#moreui'] = resolver.resolve('.')

    addComponentsDir({
      path: resolver.resolve('./components'),
      prefix: 'U',
      pathPrefix: false,
    })

    addImportsDir(resolver.resolve('./composables'))

    nuxt.hook('modules:done', () => {
      console.log('Moreui Module processed!')
    })

  }
})
