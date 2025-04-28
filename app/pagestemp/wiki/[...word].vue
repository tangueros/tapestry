<template lang="pug">
//pre {{  route.params.word }}

AppCard(:label="'docs fetched '+key")
  ContentRenderer(v-if="data" :value="data")
  p(v-else)
    i Not found "{{ key }}"

  template(#top)
  // UBreadcrumb(:items="crumbs")

  template(#bottom)
    div: i Wiki Definition
</template>"

<script setup>
definePageMeta({
  layout: 'docs',
  //title: ?
  //   => route.meta.title
  //alias
  //keepalive
  //key
  //middleware
  //name
  //path
  //
})

const route = useRoute()
const key =  route.params.word[0]

const { data } = await useAsyncData(
  'doc-'+ key, () => {
    return queryCollection('docs').path("/"+key).first()
  }
)

/*
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const crumbs = [{
  id: 1,
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  id: 2,
  label: 'Wiki',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  id: 3,
  label: page.title,
  icon: 'i-heroicons-link'
}]

*/

</script>
