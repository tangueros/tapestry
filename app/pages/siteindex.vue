<template lang="pug">
h1 Site Index

.flex.flex-wrap
  div(v-for="(j,idx) in menus"
    class="basis-1/3 border p-1 text-xs/4 overflow-hidden"
  )
    div(v-for="i in j"
      :class=" i?.color ? 'bg-green-200' : '' "
    )
      div(v-if="i.heading")
        h2.text-xl {{ i.heading }}
        i {{ i?.notes }}
      div(v-else)
        NuxtLink(:to="i.dest" class="") {{i.title}}
        template(v-if="i.children")
          | :&nbsp;
          span(v-for="k in i.children")
            NuxtLink(:to="k.dest") {{k.title}}
            | &nbsp;
</template>

<script setup>
definePageMeta({
  layout: 'plain',
  //title: ?
  //   => route.meta.title
  //alias
  //keepalive
  //key
  //middleware
  //name
  //path
  //
  //path: '/:postId(\\d+)-:postSlug'
  //pages/[postId]-[postSlug].vue
})

const { chrome } = useAppConfig()
const menus = chrome.sitemap
/*
.flex.flex-col.justify-between.gap-3
  div(v-for="j in menus")
    .flex.gap-3.flex-row.m-0(class="text-xs/4")
      div(v-for="i in j")
        NuxtLink(:to="i.dest") {{i.title}}
const specials=[
  1,4,5,6,7,8,9,11
]
    :xclass="specials.includes(idx) ? 'bg-red-100' : ''"
*/
</script>
