<template lang="pug">
header

  UNavigationMenu(:items="chrome.megamenus"
    zclass="w-full justify-center"
    highlight
    highlight-color="primary"
    orientation="horizontal"
    class="data-[orientation=horizontal]:border-b border-(--ui-border) data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
  )
</template>

<script setup>
/*

//  Site header
// header.cd7c9.ce83r.crb4e.c3yre
  .cwq08.cui38.cc4l3.cxnjg
    .c3as5.cpccj.cewtd.cmxqt.cdiok

      //  Site branding
      .c3r53.cb6q3
        //  Logo
        a.block.ckuoi.cgylk.czxk3.cebnw(href="index.html", aria-label="Cruip")
          svg.c6urr.cive7.cxllq(viewBox="0 0 32 32", xmlns="http://www.w3.org/2000/svg")
            path(d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2")

      //  Desktop navigation
      nav.csvbf.cm9ae.cv4f1
        //  Desktop menu links
        ul.co3jc.cpccj.cc7kb.cmxqt.cymr7
          li
            a.c8byp.cjtfg.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="pricing.html") Pricing
          li
            a.c8byp.cjtfg.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="about.html") About
          li
            a.c8byp.cjtfg.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="blog.html") Blog
          li
            a.c8byp.cjtfg.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="wall-of-love.html") Wall of Love
          //  1st level: hover
          li.ctd17(x-data="{ open: false }", @mouseenter="open = true", @mouseleave="open = false")
            a.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="#0", aria-haspopup="true", :aria-expanded="open", @focus="open = true", @focusout="open = false", @click.prevent)
              | Resources
              |
              svg.cnygm.c4sqn.c20g7.c6urr.c3r53.coc2c.cy8g3.cg1yg(viewBox="0 0 12 12", xmlns="http://www.w3.org/2000/svg")
                path(d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z")
            //  2nd level: hover
            ul.cnf9a.ciufj.cd7c9.cciiv.cj439.csdza.ct7bo.ccpoi.ct7tf.cpet4(x-show="open", x-transition:enter="cebnw ch6f7 cc4ps cuxdo", x-transition:enter-start="cyixi c7pni", x-transition:enter-end="c03gd cid49", x-transition:leave="cebnw ch6f7 cc4ps", x-transition:leave-start="c03gd", x-transition:leave-end="cyixi", x-cloak)
              li
                a.cjtfg.ch02g.confi.cy5nw.c35dk.cmxqt.cxnjg.cpet4(href="404.html", @focus="open = true", @focusout="open = false") 404
              li
                a.cjtfg.ch02g.confi.cy5nw.c35dk.cmxqt.cxnjg.cpet4(href="support.html", @focus="open = true", @focusout="open = false") Support

        //  Desktop sign in links
        ul.cpccj.cc6z4.cc7kb.cmxqt.cymr7
          li
            a.c8byp.cjtfg.ceywl.cpn01.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cmxqt.cuy8x.cpet4(href="signin.html") Sign in
          li
            a.c8q3m.cmbhb.ckuoi.cpccj.cgylk.cy5nw.czxk3.cebnw.c9oso.cuuxz.cmxqt.cuy8x.cpet4(href="request-demo.html")
              | Request Demo
              span.co5k7.cgu87.cs01c.ckuoi.cgylk.czxk3.coc2c ->

      //  Mobile menu
      .ca6e5.cmxqt(x-data="{ expanded: false }")
        //  Hamburger button
        button.cddv9(:class="{ \'active\': expanded }", @click.stop="expanded = !expanded", aria-controls="mobile-nav", :aria-expanded="expanded")
          span.ctg7a Menu
          svg.cwtrp.c9p59.c6urr.cmo7l.cssmu(viewBox="0 0 24 24", xmlns="http://www.w3.org/2000/svg")
            rect(y="4", width="24", height="2")
            rect(y="11", width="24", height="2")
            rect(y="18", width="24", height="2")
        //  Mobile navigation
        nav#mobile-nav.cefnj.cmyiy.cd7c9.cciiv.cdiod.cj439.cgvj7.ce83r.cei4k.co8ir(@click.away="expanded = false", @keydown.escape.window="expanded = false", x-show="expanded", x-transition:enter="cebnw ch6f7 cc4ps cuxdo", x-transition:enter-start="cyixi c7pni", x-transition:enter-end="c03gd cid49", x-transition:leave="cebnw ch6f7 cc4ps", x-transition:leave-start="c03gd", x-transition:leave-end="cyixi", x-cloak)
          ul.cxnjg.cpet4
            li
              a.cjtfg.cpn01.cy5nw.cmxqt.cpet4(href="pricing.html") Pricing
            li
              a.cjtfg.cpn01.cy5nw.cmxqt.cpet4(href="about.html") About
            li
              a.cjtfg.cpn01.cy5nw.cmxqt.cpet4(href="blog.html") Blog
            li
              a.cjtfg.cpn01.cy5nw.cmxqt.cpet4(href="wall-of-love.html") Wall of Love
            li.c3elr.cv2nt.cfqxn.c3bxe.cpet4
              span.cjtfg.cpn01.cy5nw.cmxqt.cpet4 Resources
              ul.cozz0
                li
                  a.cjtfg.ch02g.cy5nw.c35dk.cmxqt.cpet4(href="404.html") 404
                li
                  a.cjtfg.ch02g.cy5nw.c35dk.cmxqt.cpet4(href="support.html") Support
            li
              a.cjtfg.cpn01.cy5nw.ce83r.cmxqt.cpet4(href="signin.html") Sign in
            li
              a.ckuoi.cy5nw.cuuxz.cmxqt.cpet4(href="request-demo.html")
                | Request Demo
                span.co5k7.cgu87.cs01c.ckuoi.cgylk.czxk3.coc2c ->


header(:ui="uiheader")
  template(#logo)
    | {{ header.title }}
  template(#center) ???
  //  | More Center
  template(#right) !!!
  //  | More Right
  template(#bottom)
    UContainer
      ul(class="flex text-xs")
        li(v-for="(item,index) in header.links"
          :key="index"
          class="flex px-2 border")
          NuxtLink(:to="item.to") {{ item.label }}
  template(#top)
    p HEADER!
*/

const open = ref(false)
const expanded = ref(false)

const uiheader = {
  wrapper: 'bg-teal-400',
}

//const { impressum } = useAppConfig()
//const header = impressum.header

//const navigation = inject('navigation', [])
/*
header(class="bg-black text-white")
  nav.flex
    .title.flex.px-4
      b HEADER
    ul(class="flex text-xs")
      li(v-for="item in toplinks"
        class="flex px-2 border")
        NuxtLink(:to="item.link") {{ item.name }}

  nav.flex
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      )

UHeader
  //-template(#logo)
    template(v-if="header?.logo?.dark || header?.logo?.light")
      //-UColorModeImage(v-bind="{ class: 'h-6 w-auto', ...header?.logo }" )
    template(v-else)
      | Impressum
    //-UContentSearchButton(class="hidden lg:flex")

  template(#right)
    //-UContentSearchButton(v-if="header?.search"
    //-  :label="null" class="lg:hidden")
    //-UColorModeButton(v-if="header?.colorMode")
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      )

  template(#panel)
    //-UNavigationTree(:links="mapContentNavigation(navigation)")

  template(#right)
    span Links:
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }")

*/

const {chrome} = useAppConfig()

</script>

