<template lang="pug">
footer(:class="ui.wrapper" v-bind="attrs")

  div(v-if="$slots.top" :class="ui.top.wrapper")
    UContainer(:class="ui.top.container")
      slot(name="top")

  div(:class="ui.bottom.wrapper")
    UContainer(:class="ui.bottom.container")
      div(:class="ui.bottom.right")
        slot(name="right")
      div(:class="ui.bottom.center")
        slot(name="center")
          UFooterLinks(:links="links" class="")
      div(:class="ui.bottom.left")
        slot(name="left")
</template>

<script setup>
// slots = top, left, right, center


const config = {
  wrapper: 'relative',
  top: {
    wrapper: '', //border',
    container: 'py-0 lg:py-2'
  },
  bottom: {
    wrapper: '',
    container: 'py-2 md:py-1 md:flex md:items-center md:justify-between md:gap-x-3',
    left: 'flex items-center justify-center md:justify-start md:flex-1 gap-x-1.5 mt-3 md:mt-0 md:order-1',
    center: 'mt-3 md:mt-0 md:order-2 flex items-center justify-center',
    right: 'md:flex-1 flex items-center justify-center md:justify-end gap-x-1.5 md:order-3'
  }
}

const props = defineProps({
  links: {
    type: Array,
    default: ()=>[],
  },
  class: {
    type: [String, Object, Array],
    default: undefined,
  },
  ui: {
    type: Object,
    default: ()=>({}),
  },
})

const {ui, attrs} = useUI('footer',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true,
)

defineOptions({ inheritAttrs: false})
</script>
