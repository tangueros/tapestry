<template lang="pug">
.prose
  ContentRenderer(v-if="page" :value="page")

UBadge pages fetched {{route.path}}

</template>"

<script setup>
const route = useRoute()
const key =  route.path
  // '/'+route.params.slug

const { data: page } = await useAsyncData(
  'page-' + route.path, () => {
    return queryCollection('landings')
    .path(key).first()
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
*/
</script>
