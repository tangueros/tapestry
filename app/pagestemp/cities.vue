<template lang="pug">
.prose
  h1 Cities Index
  div.flex.gap-3
    div(v-for="i in dest" :key="i.id")
      NuxtLink(:to="'/go' + i.meta.path") {{ i.meta.city }}
  hr
  //pre {{ zone }}
  div.flex.gap-3.flex-wrap
    div(v-for="i in zone" :key="i.id")
      NuxtLink(:to="'/go' + i.path") {{ i.title }}

</template>"

<script setup>
//definePageMeta({
//  layout: 'docs',
//})

const { data: dest } = await useAsyncData(
  'cities', () =>
  queryCollection('cities').all()
)

const { data: zone } = await useAsyncData(
  'geo', () =>
  queryCollection('geo')
  //.where("region", '=', 'ocn')
  .all()
)

</script>
