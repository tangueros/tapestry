<template lang="pug">
div

  //pre {{ data }}

  p(v-if="iscountry")
    | You're looking for a Country {{ place }}
  p(v-else)
    | You're looking for a City {{ place }}


  div(v-if="data")

    h1.text-xl GO: {{data.meta.country}} | {{ data.meta.city }}
    UTabs(class="w-full gap-4" :items="tabs" variant="link")
      template(#cal)
        b Calendar of this month's events
        p next 5 weeks
      template(#map)
        b Map of the city's tango Venues
        p and detailed address and direction
      template(#yp)
        b Yellow Pages here
        p Links to each organiser, teacher, shop, artiste
      template(#info)
        div
          b Airport:&nbsp;
          i {{ data.meta.airportcode }}
        div
          b City Code:&nbsp;
          i {{ data.meta.citycode }}
        div
          b Country:&nbsp;
          i {{ data.meta.country }}
          i &nbsp;({{ data.meta.countrycode }})

  div(v-else)

    div.prose.text-sm(v-if="page")
      ContentRenderer( :value="page")

    p(v-else)
      i The database does not have "{{ place }}"


UBadge data fetched {{place}}
div: i City Definition
  div
    NuxtLink(to="/go/hkg") HKG
    span |
    NuxtLink(to="/go/sin") SIN
    span |
    NuxtLink(to="/go/seo") SEO
    span |
    NuxtLink(to="/go/eze") EZE
    span |
    NuxtLink(to="/cities") All Cities

//
  template(#top)
    div(v-if="data")
      h1.text-xl GO: {{data.meta.country}} | {{ data.meta.city }}
    div(v-else)
      p Not Found
  // UBreadcrumb(:items="crumbs")

  template(#bottom)
    div: i City Definition
    div
      NuxtLink(to="/go/hkg") HKG
      span |
      NuxtLink(to="/go/sin") SIN
      span |
      NuxtLink(to="/go/seo") SEO
      span |
      NuxtLink(to="/go/eze") EZE
      span |
      NuxtLink(to="/cities") All Cities



</template>"

<script setup>
definePageMeta({
  layout: 'docs',
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

const route = useRoute()
//const place = route.params.place[0]

const place = route.params.place
const iscountry = (place.length==2)

// if path is 1 = go/sg
// if path is 2 = go/sg/sin

const { data } = await useAsyncData(
  'place-'+place, () => {
  return queryCollection('cities')
    .where('stem','=', place)
    .first()
  }
)

const { data: page } = await useAsyncData(
  'geo-'+place, () => {
  return queryCollection('geo')
  .path('/'+place).first()
  }
)


/*
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const crumbs = [{
  id: 1,
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  id: 2,
  label: 'Cities',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  id: 3,
  label: data.meta.city,
  icon: 'i-heroicons-link'
}]

*/

const tabs=ref([
  {
    label: 'Latest',
    slot: 'cal',
  }, {
    label: 'Venues',
    slot: 'map',
  }, {
    label: 'Directory',
    slot: 'yp',
  }, {
    label: 'Visitor Info',
    slot: 'info',
  },
])

//label, icon, avatar, content, value, disabled, slot
</script>
