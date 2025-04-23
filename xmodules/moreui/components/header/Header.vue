<template lang="pug">
header(:class="ui.wrapper" v-bind="attrs")
  slot(name="top")
    //-for notifications
  slot(name="bottom")
    //-for breadcrumb?. section?
</template>

<script setup>
/*
header(:class="ui.wrapper" v-bind="attrs")
  slot(name="top")
    //-for notices?

  UContainer(:class="ui.container")
    div(:class="ui.left")
      slot(name="left")
        NuxtLink(:to="to"  :class="ui.logo")
          slot(name="logo")
            | {{ title || 'Logo Slot' }}

    slot(name="center")
      p Center Slot
      //-UHeaderLinks(:links="links" :class="ui.center")

    div(:class="ui.right")
      slot(name="right")
        p Right Slot

  slot(name="bottom")
    //-for breadcrumb?. section?

----
header(:class="ui.wrapper" v-bind="attrs")
  slot(name="top")

  UContainer(:class="ui.container")
    div(:class="ui.left")
      slot(name="left")
        NuxtLink(:to="to" :aria-label="ariaLabel" :class="ui.logo")
          slot(name="logo")
            | {{ title || 'Nuxt UI Pro' }}

    slot(name="center")
      UHeaderLinks(:links="links" :class="ui.center")

    div(:class="ui.right")
      slot(name="right")

      slot(name="panel-button" :open="isHeaderDialogOpen")
        UButton(
          v-if="links.length || $slots.panel"
          :class="ui.button.base"
          v-bind="($ui?.button?.secondary as any)"
          :aria-label="`${isHeaderDialogOpen ? 'Close' : 'Open'} Menu`"
          :icon="isHeaderDialogOpen ? ui.button.icon.close : ui.button.icon.open"
          @click="isHeaderDialogOpen = !isHeaderDialogOpen"
        )

  slot(name="bottom")

  TransitionRoot(:show="isHeaderDialogOpen" as="template")
    Dialog(as="div" @close="isHeaderDialogOpen = false")
      DialogPanel(:class="ui.panel.wrapper")
        div(:class="[ui.panel.header, ui.wrapper]")

          div(:class="ui.container")

            div(:class="ui.left")
              slot(name="left")
                NuxtLink(:to="to" :aria-label="ariaLabel" :class="ui.logo")
                  slot(name="logo")
                    | {{ title || 'Nuxt UI Pro' }}

            slot(name="center")

            div(:class="ui.right")
              slot(name="right")

              slot(name="panel-button" :open="isHeaderDialogOpen")
                UButton(
                  :class="ui.button.base"
                  v-bind="($ui?.button?.secondary as any)"
                  :aria-label="`${isHeaderDialogOpen ? 'Close' : 'Open'} Menu`"
                  :icon="isHeaderDialogOpen ? ui.button.icon.close : ui.button.icon.open"
                  @click="isHeaderDialogOpen = !isHeaderDialogOpen"
                )
        div(:class="ui.panel.body")
          slot(name="panel")
            UAsideLinks(:links="links")
============================

//import type { PropType } from 'vue'
import { Dialog, DialogPanel, TransitionRoot, provideUseId } from '@headlessui/vue'
//import { getSlotChildrenText } from '../../lib/slots'
//import type { HeaderLink } from '#ui-pro/types'
//import { useId } from '#imports'

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[--header-height]',
  left: 'lg:flex-1 flex items-center gap-1.5',
  center: 'hidden lg:flex',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5',
  panel: {
    wrapper: 'fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden',
    header: 'px-4 sm:px-6',
    body: 'px-4 sm:px-6 pt-3 pb-6'
  },
  button: {
    base: 'lg:hidden',
    icon: {
      open: appConfig.ui.icons.menu,
      close: appConfig.ui.icons.close
    }
  }
}))

defineOptions({
  inheritAttrs: false
})


const route = useRoute()
const slots = useSlots()

const { isHeaderDialogOpen } = useUIState()

const { ui, attrs } = useUI(
  'header',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

const ariaLabel = computed(() => (props.title || (slots.logo && getSlotChildrenText(slots.logo())) || 'Logo').trim())

watchEffects(
  () => route.fullPath,
  () => {
    isHeaderDialogOpen.value = false
  }
)

provideUseId(() => useId())
*/


const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[--header-height]',
  left: 'lg:flex-1 flex items-center gap-1.5',
  center: 'hidden lg:flex',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5',
  panel: {
    wrapper: 'fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden',
    header: 'px-4 sm:px-6',
    body: 'px-4 sm:px-6 pt-3 pb-6'
  },
  button: {
    base: 'lg:hidden',
    icon: {
      open: appConfig.ui.icons.menu,
      close: appConfig.ui.icons.close
    }
  },
}))

const route = useRoute()

const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: undefined
  },
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
  'header',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
)

watchEffect(
  () => route.fullPath,
  // watch multiple conditions
)

defineOptions({ inheritAttrs: false })
</script>
