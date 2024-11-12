import gamesData from './static/data/games-all.json'
import marketsData from './static/data/regulated-markets.json'

let dynamicRoutesFromGames = () => {
  return new Promise(resolve => {
    resolve(gamesData.map(el => `/${el.slug}`))
  })
}

let dynamicRoutesFromMarkets = () => {
  return new Promise(resolve => {
    resolve(marketsData.map(el => `/games-for-regulated-markets/${el.slug}`))
  })
}
// import data from './static/data/games-all.json'
// let dynamicRoutes = () => {
//   return new Promise(resolve => {
//     resolve(data.map(el => `/${el.slug}`))
//   })
// }

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
  router: {
    middleware: ['validateUrl']
  },
  axios: {
    baseURL: '/'
  },

  publicRuntimeConfig: {
    // demoUrl: process.env.DEMO_URL,

     currURL: 'https://mascot.games',
     demositeURL: 'https://play.mascot.games',

    // currURL: 'https://mascot.test.c27.games',
    // demositeURL: 'https://mascot-demo.test.c27.games'
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
//              { src: '~/plugins/gsap.js', mode: 'client' }



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
    'nuxt-gsap-module'
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
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],
  // routeRules: {
  //   "/": { redirect: "/en" },
  // },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      motionPath: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'EN' },
      { code: 'es', iso: 'es-419', file: 'es-419.js', name: 'ES' },
      { code: 'pt', iso: 'pt-BR', file: 'pt-BR.js', name: 'PT' },
    ],
    langDir: 'lang/',
    defaultLocale: 'en',
    lazy: true,
    silentTranslationWarn: true
  },

   sitemap: {
    hostname: 'https://mascot.games',
      exclude: [
        '/articles'
      ],
//      routes: dynamicRoutes,
routes: async () => {
  const routesFromGames = await dynamicRoutesFromGames()
  const routesFromMarkets = await dynamicRoutesFromMarkets()
  return [...routesFromGames, ...routesFromMarkets]
},
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
//    transpile: ['gsap'],
    extractCSS: true
  },

  image: {
    provider: 'static',
    dir: 'static'
  },

//   generate: {
//   routes: dynamicRoutes,
//
// //  fallback: true
//   },

  generate: {
    routes: async () => {
      const routesFromGames = await dynamicRoutesFromGames()
      const routesFromMarkets = await dynamicRoutesFromMarkets()
      return [...routesFromGames, ...routesFromMarkets]
    }
  }

}
