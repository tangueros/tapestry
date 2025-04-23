<template lang="pug">
main(:class="ui.wrapper" v-bind="attrs")
  slot
</template>

<script setup>
const config = {
  wrapper: 'min-h[calc(100vh-var(--header-height))]'
}

const props = defineProps({
  class: {
    type: [String, Object, Array],
    default: undefined,
  },
  ui: {
    type: Object,
    default: () => ({}),
  },
})

const attrs={}

/*
const {ui, attrs} = useUI('main',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

defineOptions({inheritAttrs: false})
*/

</script>
