<script setup>
const uistyle = {
  background: 'bg-gray-50 dark:bg-gray-800/50',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
  header: { base: 'font-bold' },
}
</script>

<template lang="pug">
UContainer(class=" flex items-center m-4")
  UCard(class="flex-1" :ui="uistyle")

    template(#header)
      | Welcome to the playground!

    i Placeholder(class="h-32")

    template(#footer)
      p(class="text-gray-500 dark:text-gray-400")
        | Try your components here!
</template>

