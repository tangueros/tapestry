export default defineAppConfig({
  chrome: {
    socialcard: 'https://tangueros.org/social-card.png',
    cover: '/cover.jpg',
    socials: {
      facebook: 'tangueros',
      twitter: 'tangueros',
      github: 'tangueros/portal',
    },

    nav: {

      // Nav items
      items: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Dummy', path: '/dummy' },
        { title: 'Siteindex', path: '/siteindex' },
      ],

      // CTA button
      cta: {
        title: 'Get started',
      },
    },

    //////////////////////////////////////////////////
    sitemap: [
      [
        {heading: 'DEV BREWING'},
        {dest: '/tx/al', title: 'TX/AL$'},
        {dest: '/ti/ad', title: 'TI/AD$'},
        {dest: '/tn/ab', title: 'TN/AB'},
      ],
      [
        {heading: '@TO SYMPOSIUM', notes: 'reformation,',},
        {dest: '/to', title: 'TO'},
        {dest: '/to/ae', title: 'TO/AE$'},
        {dest: '/to/conf', title: 'TO/(conf)'},
      ],
      [
        {heading: '@TP PEDIA'},
        {dest: '/tp', title: 'TP'},
        {dest: '/ti/az', title: 'TI/AZ'},
        {dest: '/wiki', title: '(wiki)',
          children: [
            {dest: '/wiki/step1', title: '(1)'},
            {dest: '/wiki/step2', title: '(2)'},
            {dest: '/wiki/step3', title: '(3)'},
          ],
        },
      ],
///
      [
        {heading: '@TI STARS', notes: '50k x $10, ticketing', color:true,},
        {dest: '/ti', title: 'TI$'},
        {dest: '/to/debut', title: 'TO/(debut)'},
        {dest: '/to/jam', title: 'TO/(jam)'},
      ],
      [
        {heading: '@TL SHOPS', notes: '10k x $50, merch', color:true,},
        {dest: '/tl', title: 'TL$'},
        {dest: '/tl/as', title: 'TL/AS$'},
      ],
      [
        {heading: '@TF TRAVEL', notes: '2500 x $200, services', color: true,},
        {dest: '/tf', title: 'TF$'},
        {dest: '/cities', title: '(cities)',
          children: [
            {dest: '/go/sin', title: '(sin)'},
            {dest: '/go/hkg', title: '(hkg)'},
            {dest: '/go/seo', title: '(seo)'},
            {dest: '/go/eze', title: '(eze)'},
          ],
        },
        {dest: '/ac/at', title: 'AC/AT$'},
      ],
///
      [
        {heading: '@TN BROADCAST', notes: '1M x 50c, ad-spaces', color: true,},
        {dest: '/tn', title: 'TN$'},
        {dest: '/tn/ar', title: 'TN/AR'},
        {dest: '/tp/am', title: 'TP/AM'},
      ],
      [
        {heading: '@TX SERVER', notes: 'devops,',},
        {dest: '/tx', title: 'TX'},
        {dest: '#', title: '(uptime)'},
      ],
      [
        {heading: '@TD ACTIVITIES', notes: '500 x $1k, entrada', color: true,},
        {dest: '/td', title: 'TD$'},
        {dest: '/td/aj', title: 'TD/AJ$'},
      ],
///
      [
        {heading: 'LOCAL MKT', notes: '$0.5M, grants, automation', color: true,},
        {dest: '#', title: '(sponsors)$'},
        {dest: '/tf/local', title: 'TF/(local)'},
        {dest: '/tf/pocket', title: 'TF/(pocket)'},
        {dest: '/tp/feel', title: 'TP/(feel)'},
      ],
      [
        {heading: '@AC MEMBERS', notes: '250k x $2, freemium', color: true,},
        {dest: '/ac', title: 'AC$'},
        {dest: '/to/aa', title: 'TO/AA$'},
        {dest: '/td/aw', title: 'TD/AW'},
      ],
      [
        {heading: 'AC/TD PLACES', notes: '50w x 3e x $4k, auditorium ', color: true,},
        {dest: '/ac/ax', title: 'AC/AX$'},
      ],
///

///
      [
        {heading: 'SOCIAL SEO'},
        {dest: '/contact', title: 'contact',
          children: [
            {dest: 'https://facebook.com/tangoeast', title: 'fb'},
            {dest: 'https://instagram.com/tangoeast', title: 'ig'},
          ],
        },
        {dest: 'https://google.com/tangoeast', title: 'g-biz'},
      ],
      [
        {heading: 'TEAMWORK', notes: 'project mgt, video conf, CRM,'},
        {dest: '/te/cowork', title: 'TE/(cowork)'},
        {dest: '/te/team', title: 'team'},
        {dest: '/blog', title: 'blog',
          children: [
          {dest: '/blog/post1', title: 'p1'},
          {dest: '/blog/post2', title: 'p2'},
          ],
        }
      ],
      [
        {heading: '@TE CORPORATE', notes: 'accounting, ERP, backup,'},
        {dest: '/te', title: 'TE'},
        {dest: '/siteindex', title: 'siteindex'},
        {dest: '/about', title: 'about',
          children: [
            {dest: '/te/terms', title: 'terms'},
            {dest: '/te/privacy', title: 'privacy'},
          ],
        },
      ],

///
    ],

    //////////////////////////////////////////////////

    megamenus: [
      {
        label: 'Guide',
        icon: 'i-lucide-book-open',
        to: '/getting-started',
        children: [
          {
            label: 'Introduction',
            description: 'Fully styled and customizable components for Nuxt.',
            icon: 'i-lucide-house'
          },
          {
            label: 'Installation',
            description: 'Learn how to install and configure Nuxt UI in your application.',
            icon: 'i-lucide-cloud-download'
          },
          {
            label: 'Icons',
            icon: 'i-lucide-smile',
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          },
          {
            label: 'Colors',
            icon: 'i-lucide-swatch-book',
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          },
          {
            label: 'Theme',
            icon: 'i-lucide-cog',
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
          }
        ]
      },
      {
        label: 'Composables',
        icon: 'i-lucide-database',
        to: '/composables',
        children: [
          {
            label: 'defineShortcuts',
            icon: 'i-lucide-file-text',
            description: 'Define shortcuts for your application.',
            to: '/composables/define-shortcuts'
          },
          {
            label: 'useOverlay',
            icon: 'i-lucide-file-text',
            description: 'Display a modal/slideover within your application.',
            to: '/composables/use-overlay'
          },
          {
            label: 'useToast',
            icon: 'i-lucide-file-text',
            description: 'Display a toast within your application.',
            to: '/composables/use-toast'
          }
        ]
      },
      {
        label: 'Components',
        icon: 'i-lucide-box',
        to: '/components',
        active: true,
        children: [
          {
            label: 'Link',
            icon: 'i-lucide-file-text',
            description: 'Use NuxtLink with superpowers.',
            to: '/components/link'
          },
          {
            label: 'Modal',
            icon: 'i-lucide-file-text',
            description: 'Display a modal within your application.',
            to: '/components/modal'
          },
          {
            label: 'NavigationMenu',
            icon: 'i-lucide-file-text',
            description: 'Display a list of links.',
            to: '/components/navigation-menu'
          },
          {
            label: 'Pagination',
            icon: 'i-lucide-file-text',
            description: 'Display a list of pages.',
            to: '/components/pagination'
          },
          {
            label: 'Popover',
            icon: 'i-lucide-file-text',
            description: 'Display a non-modal dialog that floats around a trigger element.',
            to: '/components/popover'
          },
          {
            label: 'Progress',
            icon: 'i-lucide-file-text',
            description: 'Show a horizontal bar to indicate task progression.',
            to: '/components/progress'
          }
        ]
      },
      {
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        badge: '3.8k',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      },
      {
        label: 'Help',
        icon: 'i-lucide-circle-help',
        disabled: true
      }
    ],


    //////////////////////////////////////////////////

    foot: {
      sitename: "Tangueros",
      sitelogo: '/chefs-kitchen-nextjs-free/images/logo/Logo.svg',
      siteslogan: 'Learn to Dance, Learn to Live longer.',
      sitenote: `@2025 - Tangueros.`,
    /*  Distributed By
      \<a target="_blank"
        href="https://themewagon.com/"\>ThemeWagon\</a\>
      and Developed by
      \<a
        href="https://getnextjstemplates.com/"\>GetNextjsTemplates\</a\>
      `,
    */

      skirt: {
        links: [
            {label: 'Privacy', dest: '#',},
            {label: 'Terms', dest: '#',}
        ],
      },

      menus: [
        {
          label: 'Company',
          children: [
            {label: 'About', dest: '/about',},
            {label: 'Careers', dest: '#',},
            {label: 'Mobile', dest: '#',},
            {label: 'Blog', dest: '#',},
            {label: 'Features', dest: '#',},
          ],
        }, {
          label: 'Information',
          children: [
            {label: 'FAQ', dest: '#',},
            {label: 'Press', dest: '#',},
            {label: 'Affiliatese', dest: '#',},
            {label: 'Partners', dest: '#',},
            {label: 'Sponsors', dest: '#',},
          ],
        }, {
          label: 'More',
          children: [
            {label: 'Gallery', dest: '#',},
            {label: 'Recipe', dest: '#',},
            {label: 'Venues', dest: '#',},
            {label: 'History', dest: '#',},
            {label: 'Schedule', dest: '#',},
          ],
        },
      ],

      socials: [
        {icon: 'fa6-brands:instagram', dest: 'https://instagram.com/',},
        {icon: 'fa6-brands:x-twitter', //'jam:twitter',
         dest: 'https://x.com/',},
        {icon: 'fa6-brands:youtube', dest: 'https://youtube.com/',},
        {icon: 'jam:facebook', dest: 'https://facebook.com/',},
      ],
    },
  },

})
