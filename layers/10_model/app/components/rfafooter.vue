<template lang="pug">
footer(class="c-stack b-rfa-singlecolumn-about__footer" data-style-direction="vertical" data-style-justification="start" data-style-alignment="unset" data-style-inline="false" data-style-wrap="nowrap")
  div(class="c-stack b-footer rfa-footer" data-style-direction="vertical" data-style-justification="start" data-style-alignment="unset" data-style-inline="false" data-style-wrap="nowrap")
    section(class="b-footer__top-container")

    div(class="flex gap-4 b-footer__links")
      div(v-for="j in menus"
        class="w-full flex-auto   b-footer__links-group")
        h2(class="text-blue-400 c-heading") {{j.label}}
        ul(class="b-footer__links-group-list")
          li(v-for="i in j.children"
            class="b-footer__links-group-list-item")
            a(class="c-link" :href="i.dest") {{i.label}}
            // rel="noreferrer" if i.ext
            // target="_blank" if i.ext
            // span(class="visually-hidden") Opens in new window

    p(class="c-paragraph") © 2025 Radio Free Asia
</template>


<script setup>
const menus = [
//topics
{label: "Topics",
children: [
  {dest: "/english/cambodia/", label: "Cambodia"},
  {dest: "/english/china/", label: "China"},
  {dest: "/english/laos/", label: "Laos"},
  {dest: "/english/myanmar/", label: "Myanmar"},
  {dest: "/english/korea/", label: "North Korea"},
  {dest: "/english/tibet/", label: "Tibet"},
  {dest: "/english/uyghur/", label: "Uyghur"},
  {dest: "/english/vietnam/", label: "Vietnam"},
  {dest: "/english/pacific/", label: "Pacific"},
  {dest: "/english/south-china-sea/", label: "South China Sea"},
  {dest: "/english/environment", label: "Environment"},
  {dest: "/english/factcheck", label: "Asia Fact Check Lab"},
]},

//langages
{label: "Languages",
children: [
  {dest: "https://www.rfa.org/mandarin", label: "普通话", ext: true},
  {dest: "https://www.rfa.org/cantonese", label: "粤语", ext: true},
  {dest: "https://www.rfa.org/burmese", label: "မြန်မာ", ext: true},
  {dest: "https://www.rfa.org/korean", label: "한국어", ext: true},
  {dest: "https://www.rfa.org/lao", label: "ລາວ", ext: true},
  {dest: "https://www.rfa.org/khmer", label: "ខ្មែរ", ext: true},
  {dest: "https://www.rfa.org/tibetan", label: "བོད་སྐད", ext: true},
  {dest: "https://www.rfa.org/uyghur", label: " ئۇيغۇر", ext: true},
  {dest: "https://www.rfa.org/vietnamese", label: "Tiếng Việt", ext: true},
  {dest: "https://www.rfa.org/english", label: "English", ext: true},
]},

//more
{label: "More",
children: [
  {dest: "/english/cartoon/", label: "Cartoon"},
  {dest: "/english/opinion/", label: "Opinion"},
  {dest: "/english/special-reports/", label: "Special report"},
  {dest: "/english/bookshelf/", label: "E-books"},
  {dest: "/english/story_archive/", label: "Archives"},
]},

//listen
{label: "Listen",
children: [
  {dest: "/english/about/schedule/", label: "Schedule"},
  {dest: "/english/about/frequencies/", label: "Frequencies"},
  {dest: "/english/insider/", label: "Podcast"},
]},

//watch
{label: "Watch",
children: [
  {dest: "/english/video", label: "Video"},
  {dest: "/english/gallery/", label: "Photo galleries"},
]},

//subscribe
{label: "Subscribe",
children: [
  {dest: "/arc/outboundfeeds/english/rss/", label: "RSS"},
  {dest: "/english/subscribe/email-alerts/", label: "Email Alerts"},
]},

//find us
{label: "Find Us",
children: [
  {dest: "https://www.youtube.com/RFAVideo", label:"YouTube", ext: true},
  {dest: "https://www.facebook.com/RFAEnglish", label: "Facebook", ext: true},
  {dest: "https://twitter.com/RadioFreeAsia", label: "Twitter", ext: true},
  {dest: "/english/about/web_access/", label: "Bypass Censorship"},
  {dest: "/arc/outboundfeeds/english/sitemap-news/", label: "Sitemap"},
  {dest: "/english/send_news_form/", label: "Send Us Your News"},
]},

//about rfa
{label: "About RFA",
children: [
  {dest: "/english/about/", label: "About Us"},
  {dest: "/english/about/mission/", label: "Our Mission"},
  {dest: "/english/about/terms-of-use/", label: "Terms of Use"},
  {dest: "/english/about/privacy-policy/", label: "Privacy Policy"},
  {dest: "/english/about/cookie-policy/", label: "Cookie Policy"},
  {dest: "/english/about/codeofethics/", label: "Code of Ethics"},
  {dest: "https://careers-rfacareers.icims.com/jobs/", label: "Careers", ext: true},
  {dest: "/english/about/contact-us/", label: "Contact Us"},
]},

]





</script>
