<template>
  <div>
  <MainHeader :background-black = "true" :modal-white = "true" />
  <main class="blog-article">
    <div class="container container-narrow">
      <article>
         <img :src="`../../images/${article.img}`" alt="" />
         <h1>{{ article.heading }}</h1>
    <!--    <div v-if="article.archiveDate === null " class="created-date">{{ formatDate(article.createdAt) }}</div>
        <div v-else class="created-date">{{ formatDate(article.archiveDate) }}</div> -->
        <div class="created-date">{{ formatDate(actualDate) }}</div>
        <nuxt-content :document="article" />

        <SharingButtons :white-page = "true" />

        <PrevNext v-if="$device.isMobile == false" :prev="prev" :next="next" />
      </article>
    </div>
  </main>

  <MainFooter />
  </div>
</template>

<script>

import PrevNext from '~/components/PrevNext'

  export default {

    components: {
      PrevNext
    },

//    async asyncData({ $content, params }) {
//      const article = await $content('articles', params.slug).fetch()
//
//      return { article }
//    },

    async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'img', 'archiveDate'])
      .sortBy('archiveDate', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
      }
    },

    data() {
      return {

        actualDate: ''

      }

    },

    head() {
      return {
        title: this.article.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          },
          { property: 'og:title', hid: "og:title", content: this.article.title },
          { property: 'og:description', hid: 'og:description', content: this.article.description },
          { property: 'og:url', hid:'og:url', content: `https://mascot.games/blog/${this.article.slug}` },
          { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/${this.article.img}` },

          { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', hid:'twitter:title', content: this.article.title },
          { name: 'twitter:description', hid:'twitter:description', content: this.article.description },
          { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/${this.article.img}` },

        ]
      }
   },

   created() {

     if (this.article.archiveDate !== null) {
       this.actualDate = this.article.archiveDate
     } else {
       this.actualDate = this.article.createdAt
     }
   },

   methods: {

    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

  }


}
</script>

<style lang="scss">
.blog-article {
  background: #fff;
  color: #000;
  padding-top: 120px;
  padding-bottom: 100px;
  @media (max-width: 650px) {
    padding-top: 80px;
    padding-bottom: 20px
  }
  img {
    border-radius: 12px
  }
  h1 {
    font-size: 2.13rem;
    margin-top: 40px;
    margin-bottom: 30px;
    text-transform: uppercase;
    @media (max-width: 650px) {
      font-size: 1.3rem;
      margin-bottom: 20px;
      margin-top: 20px
    }
  }
  .created-date {
    margin-bottom: 30px;
    @media (max-width: 650px) {
      margin-bottom:20px
    }
  }
}
.nuxt-content {

  p, ul, ol {
    font-family: 'Lora', serif;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 30px
  }
  ul, ol {
    list-style: unset;
    padding-left: 40px;
    li {
      margin-bottom: 10px

    }
  }
  strong {
    font-weight: 700
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
