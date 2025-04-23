<template lang="pug">
div
  h1 Dummy API results
  hr
  div(v-if="status === 'pending'")
    p Loading ...
  div(v-else)
    h2 {{data.title}}
    p {{data.body}}
    .flex.gap-3
      UBadge(v-for="i in data.tags") {{ i }}
    div
      | {{data.reactions.likes}} Likes
      | /
      | {{data.reactions.dislikes}} Dislikes
    hr
    pre {{ data }}



</template>"

<script setup>
const dummy = "dummyjson.com"

const fetchline = "https://" +
dummy + "/posts/19"

const { data, status, refresh } = await useFetch(fetchline,
{ lazy: true }
)

</script>
