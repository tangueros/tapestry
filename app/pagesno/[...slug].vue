<template lang="pug">
UContainer.border.border-gray-200
  UBreadcrumb(:links="links")
  USeparator
  .prose
    ContentRenderer(v-if="page" :value="page")
</template>"

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData(
  'page-' + route.path,
  () => {
    return queryCollection('content').path(route.path).first()
  }
)

if (0 && !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const links = [{
  label: 'ContentDoc',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: route.fullPath,
  icon: 'i-heroicons-link',
}]

</script>
