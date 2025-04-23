<template lang="pug">
ClientOnly
  UButton(
    aria-label="theme"
    color="neutral" variant="ghost"
    :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
    @click="isDark = !isDark"
  )
  template(#fallback)
    div.size-8
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference =
      (colorMode.value === 'dark')
      ? 'light'
      : 'dark'
  },
})
</script>
