<template lang="pug">
main
  AppHeader

  UMain
    //UAlert(title="AppMain")
    slot
    .bg-gray-100.p-2
      UBadge layout: {{label}}

  AppFooter

</template>

<script setup>

defineProps([
  'label'
])

</script>

