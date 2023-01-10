<template>
  <div>
  <MainHeader :background-black = "true" :modal-white = "true" />
  <main class="blog-main">
    <div class="container container-narrow">
      <h1>Mascot Blog</h1>
      <ul>
        <li v-for="article of visibleArticles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div v-if="$device.isMobile" class="article-date date-mobile">{{ formatDate(article.archiveDate) }}</div>
            <div class="article-img">
              <nuxt-img :src="`../../images/${article.img}`" :alt="`${article.heading}`" sizes="sm:400px lg:450px" placeholder="../../images/img_blog_placeholder.jpg" />
            </div>
            <div class="article-content">
              <div v-if="$device.isMobile == false" class="article-date">{{ formatDate(article.archiveDate) }}</div>
              <h2>{{ article.heading }}</h2>
              <div v-if="$device.isDesktop" class="article-excerpt">{{ truncateStr(article.shortDescr) }}</div>
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

    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['slug', 'img', 'archiveDate', 'heading', 'shortDescr'])
        .sortBy('archiveDate', 'desc')
        .fetch()

      return {
        articles,
        articlesVisible: 5,
        step: 5,
      }
    },

    computed: {
       visibleArticles() {
         return this.articles.slice(0, this.articlesVisible)
       }
     },

     mounted() {
  //     console.log(JSON.parse(JSON.stringify(this.articles)))
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
      margin-bottom: 40px;
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
          margin-left: 10px;
          @media (max-width: 650px) {
            margin-left: 0
          }
          .article-date {
            font-size: .9rem;
            color: #818181;
          }
          h2 {
            font-size: 1.62rem;
            text-transform: uppercase;
            margin: 5px 0;
            @media (max-width: 650px) {
              font-size: 1.3rem;
              text-transform: capitalize;
            }
          }
          .article-excerpt {
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
