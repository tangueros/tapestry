<template lang="pug">
div(:class="ui.wrapper" v-bind="attrs")

  div(:class="ui.left" v-if="$slots.left")
    slot(name="left")

  div(:class="centerClass")
    slot

  div(:class="ui.right" v-if="$slots.right")
    slot(name="right")
</template>

<script setup>
// slots = default, left, right

const props = defineProps({
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const config = {
  wrapper: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-8',
  left: 'lg:col-span-2',
  center: {
    narrow: 'lg:col-span-6',
    base: 'lg:col-span-8',
    full: 'lg:col-span-10',
  },
  right: 'lg:col-span-2 order-first lg:order-last',
}

defineOptions({ inheritAttrs: false })

const { ui, attrs } = useUI(
  'page',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

const slots = useSlots()
const centerClass = computed(() => {
  if (slots.left && slots.right) {
    return ui.value.center.narrow
  } else
  if (slots.left || slots.right) {
    return ui.value.center.base
  }
  return ui.value.center.full
})
</script>
