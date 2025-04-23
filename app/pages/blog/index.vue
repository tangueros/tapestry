<template lang="pug">
//div(v-if="!page")
  p No Blog


div
  h1 Blog List of posts
  //p Title: {{page.title}}
  //p Description: {{page.description}}
  hr
  ul
    li(v-for="(article, index) in articles"
      :key="article.path"
    )
      p {{article.title}}
      p {{article.description}}
  pre {{articles}}

</template>

<script setup>
/*
const {data:page} = await useAsyncData(
  'blog-landing', () => queryCollection('landing')
  .path('/blog').first()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog Page not found',
    fatal: true,
  })
}
*/

//definePageMeta({})
const {articles, fetchList} = useBlog()
//useHead
//useSeoMeta

await fetchList()
</script>
