<template lang="pug">
//AppCard(label="docs index")
.prose
  h1 Wiki Index
  div.flex.gap-3
    div(v-for="i in posts" :key="i.id")
      NuxtLink(:to="'/wiki'+i.path") {{ i.title }}
      | - {{ i.path }}
</template>

<script setup>
//definePageMeta({
//  layout: 'docs',
//})

const { data: posts } = await useAsyncData(
  'docs', () =>
  queryCollection('docs').all()
)

</script>
