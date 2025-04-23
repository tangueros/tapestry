<template lang="pug">
UApp
  slot(name="top")
    div: i Header

  main
    slot(name="default")
      div: i Content

  slot(name="bottom")
    div: i Footer

  //ClientOnly put search functions
  //ClientOnly
    LazyUContentSearch(:files="files"
      shortcut="meta_k" :links="links"
      :navigation="navigation"
      :fuse="{ resultLimit: 42 }")
</template>


<script setup>
const {chrome} = useAppConfig()

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

