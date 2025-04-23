import { defineContentConfig, defineCollection,
  defineCollectionSource, z }
  from '@nuxt/content'

import path from 'node:path'



//==========================
//CONTENT

/////////////////////
// landing pages sourced as markdown
const landings = defineCollection({
  type: 'page',
  source: {
    include: 'pages/**/*.md',
    exclude: ['**/.*'],
    prefix: '/',
  },
})

/////////////////////
// documentation pages sourced as markdown
const docs= defineCollection({
  type: 'page',
  source: {
    include: 'docs/**/*.md',
    exclude: ['**/.*'],
    prefix: '/',
  },
  //repository: github
  //ignore: 'pages/**/.*',
  //prefix: '/',
  //authToken
  //source: include, exclude, prefix
})

/////////////////////
// blog pages
//
const Author = z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  //avatar: Image.optional()
})

const blog = defineCollection({
  type: 'page',
  source: 'blog/*',
  schema: z.object({
    image: z.string().editor({ input: 'media' }),
    authors: z.array(Author),
    date: z.string().date(),
    draft: z.boolean().optional(),
    category: z.enum([
      'General', 'Announcement', 'Article'
    ]),
    tags: z.array(z.string()),
  })
})


//==========================
//XCONTENT

/////////////////////
// Cities repo has
// destination yaml data
// geo wiki md data
const cities = defineCollection({
  type: 'data',
  source: {
    cwd: path.resolve('xcontent/cities/dest'),
    //cwd: path.resolve('xcontent/stuffs')
    include: '**/*.yaml',
    exclude: ['**/.*'],
    prefix: '/',
  },
  schema: z.object({})
})

const geo = defineCollection({
  type: 'page',
  source: {
    cwd: path.resolve('xcontent/cities/geo'),
    include: '**/*.md',
    exclude: ['**/.*'],
    prefix: '/',
  },
  schema: z.object({
    region: z.string(),
  }),
})


//==========================
//EXTERNAL GITHUB
const docsource = {
  cwd: process.env.NUXT_PATH ?? undefined,
  repository: !process.env.NUXT_PATH ? 'https://github.com/nuxt/nuxt/tree/3.x' : undefined,
  include: 'docs/**/*',
  prefix: '/docs/4.docs',
}
//?? doc : defineCollection: source: [docsource, examplesource],


//==========================
//API
const hn = "https://hacker-news.firebaseio.com/v0"
const hackernews = defineCollection({
  type: 'data',
  source: defineCollectionSource({
    getKeys: async () => {
      const keys = await fetch(`${hn}/topstories.json`)
        .then(res => res.json())
      return keys.map((key: string) => `${key}.json`)
    },
    getItem: async (key:string) => {
      const id = key.split('.')[0]
      return await fetch(`${hn}/item/${id}.json`)
        .then(res => res.json())
    },
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string(),
    score: z.number(),
    url: z.string(),
    by: z.string(),
  }),
})



///////////////////////////////////////
///////////////////////////////////////

const collections = {
  //content
  landings,
  docs,
  blog,
  //xcontent
  cities,
  geo,
  //api
  hackernews,
}

export default defineContentConfig({
  collections
})
