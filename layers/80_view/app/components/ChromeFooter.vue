<template lang="pug">
footer(:class="uslots.root")
  slot(name="default")
    span: i Default

  div(:class="uslots.top")
    slot(name="top")
      span: i Top

  div(:class="uslots.left")
    slot(name="left")
      span: i Left

  div(:class="uslots.right")
    slot(name="right")
      span: i Right

  div(:class="uslots.bottom")
    slot(name="bottom")
      span: i Bottom
</template>

<script setup>
//pass in a set of UI

const ui = {
  footer: {
    slots: {
      root: 'border p-4 flex flex-wrap',
      top: 'border basis-full',
      left: 'border basis-1/2 sm:basis-1/4',
      right: 'border basis-1/2 sm:basis-3/4',
      bottom: 'border basis-full flex gap-2',
    },
  },
}

const uslots = ui.footer.slots

defineProps([
  //'label'
])

</script>
