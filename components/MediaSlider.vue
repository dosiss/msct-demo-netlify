<template>
  <div class="slider-outer">
  <div v-swiper:mySwiper6="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(extarticle, idx) in currentGame.articles" :key="idx" class="related-post__item swiper-slide game-thumbnail">
        <div class="realted-post-thumbnail__outer">
          <div class="realted-post-thumbnail__inner">
          <div class="realted-post-content__wrap">
            <a :href="`${extarticle.link}`" target="_blank" rel="dofollow">
              <div class="related-post__content">
                <div class="content-head">{{ extarticle.title }}</div>
                <div class="content-img" :style="{ backgroundImage: `url(/images/${extarticle.image})` }"></div>
              </div>
              <h3>{{ extarticle.title}}</h3>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
  <div slot="button-prev" class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 23 1 12 12 1"/></svg></div>
  <div slot="button-next" class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 11 11L1 23"/></svg></div>

</div>
</template>

<script>

  import allGames from '../static/data/games-all.json'

  export default {


    components: {
    },

    data () {
      return {
        id: this.$route.params.game,

        gamesList: allGames,

        articles: [],

        demoUrl: '',

        locPath: '',

        swiperOption: {
          mousewheel: true,
          preventClicks: false,
          preventClicksPropagation: false,
          spaceBetween: 10,
          slidesPerView: 1.2,
          a11y: false,
          breakpoints: {
            '320': {
              spaceBetween: 10,
              slidesPerView: 1.2,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '640': {
              slidesPerView: 1.7,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '1024': {
              slidesPerView: 3.2,
              spaceBetween: 30,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
            },
          }
        }
      }
    },

    computed: {
//        gamesTop() {
//        return allGames.filter(val => (val.topGame !== false))
//        return allGames.silce(0,5)

//      }
    currentGame() {
      return this.gamesList.slice().find((element) => element.slug === this.id);

    },
      relatedArticles() {
        return this.articles
      }

    },

    async mounted() {

      try {
        await  this.$axios.get("/config.json")
          .then(response => {this.demoUrl = response.data.demoURL})
      } catch(ex) {
        this.demoUrl = this.$config.demositeURL
      }

      switch (this.$i18n.locale) {
        case "es":
          this.locPath = '/es';
          break;
        case "pt":
          this.locPath = '/pt';
          break;
        default:
        this.locPath = '';
      }
      // console.log('Current Swiper instance object', this.mySwiper)
      // this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-container {
    padding-left: 245px;
    @media (max-width: 1200px) {
      padding-left: 35px
    }
    @media (max-width: 1024px) {
      padding-bottom: 30px
    }
    @media (max-width: 650px) {
      padding-left: 25px
    }
    .swiper-wrapper {
      @media (max-width: 1024px) {
        margin-bottom: 20px
      }
    }
  }
  .swiper-slide {
    &.game-thumbnail {
      .game-thumbnail__outer {
        padding: 8px 0;
        .game-thumbnail__inner {
          position: relative;
          .coming-soon-badge {
            position: absolute;
            width: 100%;
            background: #000000d6;
            text-align: center;
            text-transform: uppercase;
            padding: 7px;
            bottom: 0
          }
        }
      }
    }
      img {
        border-radius: 12px;
        width: 100%
      }
  }
  .slider-outer {
    position: relative;
    .swiper-button-prev {
      width: 60px;
      height: 60px;
      left: 60px;
      top: unset;
      bottom: 41%;
      /* background: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(5px); */
      background: #1f1f1f;
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
      /* background: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(5px); */
      background: #1f1f1f;
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
    .swiper-pagination {
      @media (min-width: 1024px) {
        display: none
      }
    }
  }
  .related-post__item {
    .related-post__content {
      background: #fff;
      color: #000;
      padding: 15px 15px 0;
      border-radius: 10px;
      .content-head {
        font-weight: 700;
        margin-bottom: 15px;
        min-height: 40px;
        font-size: .9rem
      }
      .content-img {
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    h3 {
      margin-top: 20px;
      font-weight: 500;
      padding-right: 15px;
      font-size: 1.1rem
    }
  }

</style>
