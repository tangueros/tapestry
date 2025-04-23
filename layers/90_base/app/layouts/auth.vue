<template lang="pug">
div(class="h-screen flex items-center justify-center overlay")
  UButton(to="/"
    icon="i-lucide-chevron-left" size="xl"
    color="neutral" variant="subtle"
    class="absolute left-8 top-8 rounded-full")
  div
  // UPageCard(
    variant="subtle"
    class="max-w-sm w-full")
    slot
</template>
