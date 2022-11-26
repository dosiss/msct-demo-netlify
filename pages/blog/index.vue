<template>
  <div>
  <MainHeader :background-black = "true"/>
  <main class="blog-main">
    <div class="container container-narrow">
      <h1>Mascot Blog</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="article-img"><img :src="`../../images/${article.img}`" alt="" /></div>
            <div class="article-content">
              <div class="article-date">{{ formatDate(article.archiveDate) }}</div>
              <h2>{{ article.heading }}</h2>
              <div class="article-excerpt">{{ truncateStr(article.shortDescr) }}</div>

            </div>
          </NuxtLink>
        </li>
      </ul>
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
        articles
      }
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
  padding-bottom: 40px;
  h1 {
    font-size: 3.75rem;
    margin-bottom: 40px
  }
  ul {
    li {
      margin-bottom: 40px;
      a {
        display: flex;
        .article-img {
            flex: 1 0  450px;
            img {
              border-radius: 12px
            }
        }
        .article-content {
          margin-left: 10px;
          .article-date {
            font-size: .9rem;
            color: #818181
          }
          h2 {
            font-size: 1.62rem;
            text-transform: uppercase;
            margin: 5px 0
          }
          .article-excerpt {
            font-size: 1.25rem
          }
        }
      }
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
