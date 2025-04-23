
<template lang="pug">
ChromeHeader()
  p Wanna Dance?

  template(#title)
    NuxtLink(to="/siteindex")
      span {{ chrome.foot.sitename }}

  template(#left)
  template(#right)

  template(#center)
    div(v-for="i in chrome.nav.items")
      NuxtLink(:to="i.path") {{i.title}}

  template(#top)

  template(#bottom)
  //
    .flex.flex-row.justify-between.gap-3
      div(v-for="j in menus")
        .flex.gap-3.flex-col.m-0(class="text-xs/4")
          div(v-for="i in j")
            NuxtLink(:to="i.dest") {{i.title}}

</template>"

<script setup>
const { chrome } = useAppConfig()

const menus = chrome.sitemap

</script>
