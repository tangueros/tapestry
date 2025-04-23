<template lang="pug">
AppLayout
  AppCard(label="default layout")
    slot

    template(#top)
      UBreadcrumb(:items="links")

    template(#bottom)
      div: i Share Subscribe Like Comment
</template>"

<script setup>
const route = useRoute()

const links = ([{
  label: 'ContentDoc',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: computed( () => route.fullPath),
  icon: 'i-heroicons-link',
}])
</script>
