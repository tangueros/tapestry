<template lang="pug">
SiteLayout
  slot

  template(#top)
    SiteHeader

  template(#bottom)
    SiteFooter
</template>

<script setup>
/*
adapt from nuxt-uipro-saas template
*/
const {chrome} = useAppConfig()
const socialcard = chrome.socialcard

const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {lang: 'en'},
})

useSeoMeta({
  titleTemplate: '%s - Tangueros',
  ogImage: socialcard,
  twitterImage: socialcard,
  twitterCard: 'summary_large_image',
})


/*
const { data: navigation } =
  await useAsyncData('navigation', () =>
    queryCollectionNavigation('docs'), {
    transform: data => data.find(item => item.path === '/docs')?.children || []
    }
  )

const { data: files } =
  useLazyAsyncData('search', () =>
    queryCollectionSearchSections('docs'), {server: false}
  )

const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Pricing',
  icon: 'i-lucide-credit-card',
  to: '/pricing'
}, {
  label: 'Blog',
  icon: 'i-lucide-pencil',
  to: '/blog'
}]

provide('navigation', navigation)
*/

</script>



