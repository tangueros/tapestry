<template lang="pug">
AppLayout
  AppCard(label="docs layout")
    slot

    template(#top)
      UBreadcrumb(:items="links")

    template(#bottom)
      div: i Share Subscribe Like Comment
</template>"

<script setup>
const route = useRoute()

const links = ([{
  label: 'Wiki',
  icon: 'i-heroicons-home',
  to: '/wiki',
}, {
  label: computed( () => route.fullPath),
  icon: 'i-heroicons-link',
}])

//import type { ContentNavigationItem } from '@nuxt/content'
//const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
/*
        template(#left)
          UPageAside
            template(#top)
              UContentSearchButton(
                label="Search..."
                variant="outline"
                class="w-full")
                template(#trailing)
                  div(class="flex items-center gap-0.5 ms-auto")
                    UKbd(value="meta")
                    UKbd(value="k")
            UContentNavigation(
              :navigation="navigation"
              highlight)

*/
</script>
