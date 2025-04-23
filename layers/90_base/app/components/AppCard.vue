<template lang="pug">
UContainer
  UBadge {{ label }}

  div(class="border")
    slot(name="top")

  div(class="bg-white p-2 mt-0 border " )
    slot(name="default")
      USkeleton(class="h-4 w-[200px]")

  slot(name="bottom")
</template>"

<script setup>
defineProps([
  'label'
])
</script>
