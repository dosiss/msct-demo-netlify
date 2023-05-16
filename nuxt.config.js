import data from './static/data/games.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `/${el.slug}`))
  })
}

// const createSitemapRoutes = async () => {
//   let routes = [];
//   const { $content } = require('@nuxt/content')
//   if (posts === null || posts.length === 0)
//     posts = await $content('articles').fetch();
//   for (const post of posts) {
//     routes.push(`blog/${post.slug}`);
//   }
//   return routes;
// }

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

//   googleAnalytics: {
//      id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
//
//     debug: {
//       enabled: false,
// //      sendHitTask: true
//     },
//     // Dev setting:
//     // dev: true
//     //Prod setting:
//      dev: false
//   },
  publicRuntimeConfig: {
     demoUrl: process.env.DEMO_URL,

    // googleAnalytics: {
    //    id: process.env.GOOGLE_ANALYTICS_ID,
    //
    // }
  },

  loading: {
    color: 'red',
    height: '5px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Explore the new world of exciting casino games!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
  {
    id: 'hs-script-loader',
    async: true,
    defer: true,
    src: '//js-eu1.hs-scripts.com/26083518.js',
  },
  {
    hid: 'gtm-script',
    innerHTML: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57S7B6N');
    `,
    type: 'text/javascript',
    charset: 'utf-8'
  }
    ]
      },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ { src: '~/plugins/swiper', mode: 'client' },
              { src: '~/plugins/lightgallery', mode: 'client' },
              { src: '~/plugins/lgvideo', mode: 'client' },
              { src: '~/plugins/vue-cookies-consent.js', mode:'client'},




  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/google-analytics',
  ],
  device: {
    refreshOnResize: true,
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
  },
  styleResources: {
    scss: [
      '~assets/scss/_variables.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

   sitemap: {
    hostname: 'https://mascot.games',
      exclude: [
        '/articles'
      ],
      routes: dynamicRoutes,
      defaults: {
        changefreq: 'monthly',
        priority: 1,
        lastmod: new Date()
      }

   },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  image: {
    provider: 'static',
    dir: 'static'
  },

  generate: {
  routes: dynamicRoutes,
//  fallback: true
  },

}
