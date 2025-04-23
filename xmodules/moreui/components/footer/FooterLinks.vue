<template lang="pug">

ul(v-if="links" :class="ui.wrapper" v-bind="attrs")
  li(v-for="(link, index) of links" :key="index" class="relative")
    ULink(:class="ui.base" :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="link.click"
      v-bind="getULinkProps(link)"
    )
      | {{ link.label }}
      UIcon(v-if="link.target === '_blank'"
        :name="ui.externalIcon.name" :class="ui.externalIcon.base"
      )
</template>

<script setup>
import { getULinkProps } from '#ui/utils'

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

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6',
  base: 'text-sm',
  active: 'text-gray-900 dark:text-white font-medium',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300',
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500',
  },
}))

const {ui, attrs } = useUI('footer.links',
//  toRef(props, 'ui'),
//  config,
//  toRef(props, 'class'),
//  true,
)


/*
const {ui, attrs } = useUI('footer.links',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true,
)
*/

defineOptions({ inheritAttrs: false })
</script>
