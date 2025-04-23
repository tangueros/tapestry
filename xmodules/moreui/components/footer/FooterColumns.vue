<template lang="pug">
div(:class="ui.wrapper" v-bind="attrs")
  div(v-if="$slots.left" :class="ui.left")
    slot(name="left")
  div(:class="ui.center")
    div(v-for="(link, index) in links" :key="index")
      h3(:class="ui.label") {{ link.label }}
      ul(role="list" :class="ui.list")
        li(v-for="(subLink, subIndex) of link.children" :key="subIndex")
          ULink(:class="ui.base" :active-class="ui.active"
          :inactive-class="ui.inactive"
          @click="subLink.click"
          v-bind="getULinkProps(subLink)"
        )
          | {{ subLink.label }}
          UIcon(v-if="subLink.target === '_blank'"
            :name="ui.externalIcon.name"
            :class="ui.externalIcon.base"
          )
  div(v-if="$slots.right" :class="ui.right")
    slot(name="right")
</template>
import { getULinkProps } from '#ui/utils'
const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'xl:grid xl:grid-cols-3 xl:gap-8',
  left: 'mb-10 xl:mb-0',
  center: 'flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2',
  right: 'mt-10 xl:mt-0',
  label: 'text-sm/6 font-semibold text-gray-900 dark:text-white',
  list: 'mt-6 space-y-4',
  base: 'text-sm relative',
  active: 'text-gray-900 dark:text-white font-medium',
  inactive: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
})

defineOptions({ inheritAttrs: false})
<script setup>
</script>
