<template lang="pug">
header(:class="uslots.root")
  div(:class="uslots.container")

    div(:class="uslots.left")
      span(:class="uslots.title")
        slot(name="title")
          span: i Title
      slot(name="left")
        span: i Left

    div(:class="uslots.center")
      slot(name="center")
        span: i Center


    div(:class="uslots.right")
      slot(name="right")
        span: i Right
      span(:class="uslots.toggle")
        slot(name="toggle")
          span: i Toggle


  div(class="hidden")
    slot(name="default")
      span: i Default
    div(:class="uslots.top")
      slot(name="top")
        span: i Top
    div
      slot(name="body")

      slot(name="overlay")
      slot(name="content")


  UContainer(:class="uslots.bottom")
    slot(name="bottom")
        span: i Bottom

</template>

<script setup>
//pass in a set of UI

const ui = {
  header: {
    slots: {
      _root: 'border sticky top-0 z-50 h-(--ui-header-height)',

      root: 'z-50 px-4',
      header: '',
      container: 'border flex items-center justify-between gap-3 h-full overflow-hidden',
      center: 'hidden sm:flex gap-3',
      left: '',
      right: '',
      top: '',
      bottom: 'border flex gap-3 ',
      title: 'font-bold text-xl',
      body: 'p-4 sm:p-6 overflow-y-auto',
      toggle: 'sm:hidden',
      overlay: 'sm:hidden',
      content: 'sm:hidden',
    },
  },
}

const uslots = ui.header.slots

defineProps([
  //'label'
])

</script>
