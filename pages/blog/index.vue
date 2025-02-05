<template>
  <div>
  <MainHeader :background-black = "true" :modal-white = "true" />
  <main class="blog-main">
    <div class="container container-narrow">
      <h1>Mascot Blog</h1>
      <ul>
        <li v-for="article of visibleArticles" :key="article.slug">
          <NuxtLink :to="`/blog/${article.slug}`">
            <!-- <div v-if="$device.isMobile" class="article-date date-mobile">{{ formatDate(article.archiveDate) }}</div> -->
            <div class="article-img">
              <nuxt-img :src="`../../images/${article.img}`" :alt="`${article.heading}`" sizes="sm:400px lg:450px" placeholder="../../images/img_blog_placeholder.jpg" />
            </div>
            <div class="article-content">
              <!-- <div v-if="$device.isMobile == false" class="article-date">{{ formatDate(article.archiveDate) }}</div> -->
              <div class="article-content__main">
                <h2>{{ article.heading }}</h2>
                <div v-if="$device.isDesktop" class="article-excerpt">{{ truncateStr(article.shortDescr) }}</div>
              </div>
              <div class="article-date">{{ formatDate(article.archiveDate) }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <div class="show-more-button"><button v-if="articlesVisible < articles.length" @click="articlesVisible += step" >Show more</button></div>
    </div>
  </main>
  <SharingButtons :white-page = "true" />

  <MainFooter />
  </div>
</template>

<script>

  export default {

  //   nuxtI18n: false,

    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .where({
          // Exclude Spanish and Portuguese paths
          slug: { $not: /^(es|pt)\// },
          hidden: { $ne: true }
        })
        .only(['slug', 'img', 'archiveDate', 'heading', 'shortDescr'])
        .sortBy('archiveDate', 'desc')
        .fetch()

      return {
        articles,
        articlesVisible: 5,
        step: 5,
      }
    },

    data() {
      return {
        title: '',
        description: ''
      }
    },

    head() {
      return {
        title: this.title,
        htmlAttrs: {
            lang: this.$i18n.locale
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          { property: 'og:title', hid: "og:title", content: this.title },
          { property: 'og:description', hid: 'og:description', content: this.description },
          { property: 'og:url', hid:'og:url', content: `https://mascot.games` },
          { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

          { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', hid:'twitter:title', content: this.title },
          { name: 'twitter:description', hid:'twitter:description', content: this.description },
          { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        ]
      }
    },

    computed: {
       visibleArticles() {
         return this.articles.slice(0, this.articlesVisible)
       }
     },

     mounted() {
       this.title = this.$t('Mascot Gaming Blog')
       this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')
    },

    methods: {

     formatDate(date) {
       const options = { year: 'numeric', month: 'short', day: 'numeric' }
       return new Date(date).toLocaleDateString('en', options)
     },

     truncateStr(str) {
       if (str.length <= 220) return str;
        return str.substr(0, str.lastIndexOf(' ', 220)) + '…';
      }

   }



  }
</script>



<style lang="scss" >
.blog-main {
  background: #fff;
  color: #000;
  padding-top: 120px;
  padding-bottom: 60px;
  @media (max-width: 650px) {
    padding-top: 80px
  }
  h1 {
    font-size: 3.75rem;
    margin-bottom: 40px;
    @media (max-width: 850px) {
      text-align: center;
    }
    @media (max-width: 650px) {
      font-size: 1.75rem;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  ul {
    li {
      padding-bottom: 25px;
      margin-top: 25px;
      &:not(:last-child) {
        border-bottom: 1px solid #b6b6b7
      }
      a {
        display: flex;
        @media (max-width: 650px) {
          flex-direction: column;
        }
        .article-img {
            flex: 1 0  450px;
            @media (max-width: 850px) {
              flex-basis: 340px
            }
            @media (max-width: 650px) {
              flex-basis: unset
            }
            img {
              border-radius: 12px
            }
        }
        .article-date {
          &.date-mobile {
            @media (max-width: 650px) {
              margin-bottom: 5px
            }
          }
        }
        .article-content {
          margin-left: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          @media (max-width: 650px) {
            margin-left: 0
          }
          .article-date {
            font-size: .9rem;
            color: #818181;
            margin-top: 15px
          }
          h2 {
            font-size: 1.62rem;
            text-transform: uppercase;
            margin-bottom: 7px;
            @media (max-width: 650px) {
              font-size: 1.3rem;
              text-transform: capitalize;
            }
          }
          .article-excerpt {
            font-family: 'Lora', sans-serif;
            font-weight: 400;
            font-size: 1.25rem
          }
        }
      }
    }
  }
  .show-more-button {
    text-align: center;
    margin-top: 30px;
    button {
      font-size: 1.12rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
.share__wrap {
  &.white-page {
    background: #fff;
    padding: 0 0 40px;
    color: #000;
    svg {
      circle {
        fill: #5f5f5f
      }
    }
  }

}

</style>
