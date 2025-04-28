<template lang="pug">
ChromeFooter()
  p Here You GO


  template(#top)
    span {{ foot.sitename }}
    span |
    span {{ foot.siteslogan }}
    br
    span {{ foot.sitenote }}

  template(#left)
  template(#right)
    DarkPref

  template(#bottom)
      div(v-for="i in foot.socials")
        a(:href="i.dest")
          UIcon(:name="i.icon")

</template>"

<script setup>
const { chrome } = useAppConfig()
const foot = chrome.foot

</script>
