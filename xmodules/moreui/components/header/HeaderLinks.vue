<template lang="pug">
ul(v-if="links?.length"
  :class="ui.wrapper" v-bind="attrs")
  li(v-for="(link, index) of links"
    :key="index" class="relative")

    UButton(:class="ui.base"
      @click="link.to"
      v-bind="link"
    )
</template>

<script setup>
/*
    // use Pop if has childre
    UPopover(v-if="link.children?.length"
      v-bind="ui.default.popover")
      template(#default="{ open }")
        ULink(@click="link.click"
          :class="ui.base"
          :active-class="ui.active"
          :inactive-class="ui.inactive"
          v-bind="getULinkProps(link)")
          slot(name="label" :link="link") {{ link.label }}
          UIcon(:name="ui.trailingIcon.name"
            :class="[ui.trailingIcon.base, open ? ui.trailingIcon.active : ui.trailingIcon.inactive]")
      template(#panel="{ close }")
        slot(name="panel"
          :link="link" :close="close")
          UHeaderPopoverLinks(@click="close"
            :links="link.children")

    // use Link if no children
    ULink(v-else
      :class="ui.base"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="link.click"
      v-bind="getULinkProps(link)"
    )
      slot(name="label" :link="link")
        | {{ link.label }}
      UIcon(v-if="link.target === '_blank'"
        :name="ui.externalIcon.name"
        :class="ui.externalIcon.base")

*/
const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'flex items-center gap-x-8',
  base: 'text-sm/6 font-semibold flex items-center gap-1',
  active: 'text-primary',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: appConfig.ui.icons.chevron,
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  default: {
    popover: {
      mode: 'hover' as const,
      openDelay: 0,
      ui: {
        width: 'max-w-[16rem]'
      }
    }
  }
}))

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const { ui, attrs } = useUI(
  'header.links',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

defineOptions({ inheritAttrs: false })
</script>
