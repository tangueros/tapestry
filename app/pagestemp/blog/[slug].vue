<template lang="pug">
h1 {{title}}
h2 {{description}}
</template>

<script setup>
//import { kebabCase } from 'scule'
definePageMeta({})

const route = useRoute()
// useClipboard

const mypath = route.path
const {data: article} = await useAsyncData(
  mypath, () => queryCollection('blog')
  .path(mypath).first()
)
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article Not found',
    fatal: true,
  })
}

const title = article.value.seo?.title || article.value.title
const description = article.value.seo?.description || article.value.description

//useSeoMeta
//defineOgImage
//
</script>
