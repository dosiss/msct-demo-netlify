<template>
  <section id="blog-articles">
    <div class="blog-articles__wrap">
      <div class="blog-articles__head container">
        <h2 class="blog-articles__head-title game-subtitle">Mascot blog</h2>
      </div>
      <div class="blog-articles__content-wrap">
        <div v-if="$device.isMobile || $device.isTablet" class="blog-articles__content container">
          <div v-for="article in topArticlesMobile" :key="article.slug" class="swiper-slide game-thumbnail">
            <div class="article-slide">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div v-if="$device.isMobile" class="article-date">{{ formatDate(article.archiveDate) }}</div>
                <div class="article-img" :style="{ backgroundImage: `url(/images/${article.img})` }"></div>
                <div class="article-content">
                  <div class="article-content__inner">
                    <div v-if="$device.isTablet" class="article-date">{{ formatDate(article.archiveDate) }}</div>
                    <h3>{{ article.heading }}</h3>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-else class="blog-articles__content">
          <div v-swiper:mySwiper5="swiperOptionArticles">
            <div class="swiper-wrapper">
              <div v-for="article in topArticles" :key="article.slug" class="swiper-slide game-thumbnail">
                <div class="article-slide">
                  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <div class="article-img" :style="{ backgroundImage: `url(/images/${article.img})` }"></div>
                    <div class="article-content">
                      <div class="article-content__inner">
                        <div class="article-date">{{ formatDate(article.archiveDate) }}</div>
                        <h3>{{ article.heading }}</h3>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div slot="button-prev" class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 23 1 12 12 1"/></svg></div>
          <div slot="button-next" class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 11 11L1 23"/></svg></div>
        </div>
      </div>
      <div class="blog-articles__more-button container">
        <nuxt-link to="blog" class="inner-link link-yellow">
          <span>Read all blog</span>
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

 export default {

//   async asyncData({ $content, params }) {
//     const articles = await $content('articles')
//       .only(['slug', 'img', 'archiveDate', 'heading'])
//       .sortBy('archiveDate', 'desc')
//       .fetch()

//     return {
//       articles,

//     }
//   },

   data() {
     return {

       articles: [],

       swiperOptionArticles: {
         mousewheel: true,
         preventClicks: false,
         preventClicksPropagation: false,
         followFinger: false,
         spaceBetween: 10,
         slidesPerView: 2.5,
         a11y: false,
         breakpoints: {
           '640': {
             slidesPerView: 1.7,
             spaceBetween: 20,
           },
           '1024': {
             slidesPerView: 2.2,
             spaceBetween: 30,
             navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
             },
           }
         }
       }
     }
   },

   async fetch() {
      this.articles = await this.$content('articles')
        .only(['slug', 'img', 'archiveDate', 'heading'])
        .sortBy('archiveDate', 'desc')
      .fetch()
    },

    computed: {

       topArticles() {
         return this.articles.slice(0, 5)
       },

       topArticlesMobile() {
         return this.articles.slice(0, 2)
       }
     },

   created() {
//      console.log(articles);
    },

   methods: {
     formatDate(date) {
       const options = { year: 'numeric', month: 'short', day: 'numeric' }
       return new Date(date).toLocaleDateString('en', options)
     }
   },



}
</script>

<style lang="scss" scoped>
.blog-articles__wrap {
  padding-top: 120px;
  @media (max-width: 650px) {
    padding-top: 60px
  }
  .inner-link {
    &.link-desktop {
      display: flex;
      @media (max-width: 850px) {
        display: none
      }
    }
    &.link-mobile {
      display: none;
      @media (max-width: 850px) {
        display: flex;
        margin-top: 30px;
        justify-content: center;
      }
    }
  }
  .blog-articles__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 850px) {
      justify-content: center;
    }

    .blog-articles__head-title {
      font-size: 3.75rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem;
        text-align: center;
      }
    }

  }
  .blog-articles__more-button {
    margin-top: 50px;
    .inner-link {
      justify-content: flex-start;
      @media (max-width: 850px) {
        justify-content: center;
      }
    }
  }
}
.swiper-container {
  padding-left: 245px;
  z-index: 3;
  @media (max-width: 1200px) {
    padding-left: 35px
  }
  @media (max-width: 650px) {
    padding-left: 0
  }
  .swiper-wrapper {
    padding-bottom: 20px;

  }
}
.blog-articles__content {
  position: relative;
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    left: 60px;
    top: unset;
    bottom: 41%;
    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(5px);
    border-radius: 20rem;
    @media (max-width: 850px) {
      display: none
    }
    &:after {
      content: '';
    }
    svg {
      width: 11px;
      height: 60px;
      @media (max-width: 850px) {

      }
    }
    &.swiper-button-disabled {
      opacity: 0;
      cursor: none
    }
  }
  .swiper-button-next {
    width: 60px;
    height: 60px;
    right: 60px;
    top: unset;
    bottom: 41%;
    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(5px);
    border-radius: 20rem;
    @media (max-width: 850px) {
      display: none
    }
    &:after {
      content: '';
    }
    svg {
      width: 11px;
      height: 60px;
      @media (max-width: 850px) {

      }
    }
    &.swiper-button-disabled {
      opacity: 0;
      cursor: none
    }
  }
}
.swiper-slide {
  .article-slide {
    @media (max-width: 850px) {
      margin-bottom: 25px
    }
    @media (max-width: 650px) {
      margin-bottom: 20px
    }
    .article-date {
      font-size: .94rem;
      margin-bottom: 10px;
      @media (max-width: 650px) {
        margin-bottom: 5px
      }
    }
    .article-img {
      position: relative;
      height: 335px;
      background-size: cover;
      border-radius: 16px;
      background-position: center left;
      @media (max-width: 650px) {
        height: 165px;
      }
    }
  }

  .article-content {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:before {
      content: '';
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.87) 100%);
      height: 100%;
      width: 100%;
      bottom: 0;
      position: absolute;
    }
    @media (max-width: 650px) {
      position: relative;
    }
    .article-content__inner {
      padding: 0 25px 25px;
      position: relative;
      @media (max-width: 650px) {
        padding: 0
      }

      h3 {
        font-size: 1.6rem;
        text-transform: uppercase;
        @media (max-width: 650px) {
          font-size: 1.3rem;
          text-transform: none;
          margin-top: 5px

        }
      }
    }
  }
}



</style>
