<template lang="pug">
.prose
  h1 Tango Project in Nuxt
  hr
  h2 List of Landing Pages
  //
    img(class="w-32"
      src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA")
    p: i Goodbye

    UTable(:data="rows")

  div
    div(v-for="i in posts" :key="i.id")
      NuxtLink(:to="i.path") {{ i.title }}
      |  - {{ i.path }}
</template>"

<script setup>
const rows = [{
  id: 1,
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  id: 2,
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  id: 3,
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]


const { data: posts } = await useAsyncData(
  'landings', () =>
  queryCollection('landings')
  .order('title','ASC').all()
)

</script>
