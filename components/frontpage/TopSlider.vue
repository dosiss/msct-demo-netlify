<template>
  <!-- <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="banner in banners" :key="banner" class="swiper-slide">
        <img :src="banner">

      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->
  <div class="slider-outer">
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(game, idx) in gamesTopSlider.slice(0,7)" :key="idx" class="swiper-slide game-thumbnail">
        <div class="game-thumbnail__outer">
          <div class="game-thumbnail__inner">
          <v-lazy-image :src="`/images/${game.thumbUrl}`" :src-placeholder="`images/lowres/${game.thumbUrl}`" :alt="`${game.name}`" />
          <div class="game-content__wrap">
            <div class="game-content__buttns">
              <!-- <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $t('Learn more') }}</NuxtLink> -->
              <NuxtLink :to="localeLocation( {path: `/${game.slug}`} )" class="buttn buttn-secondary buttn-sm">{{ $t('Learn more') }}</NuxtLink>
              <a v-if="$device.isMobile" :href="`https://${game.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                {{ $t('Play demo') }}
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a v-else :href="`${demoUrl}${locPath}/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                {{ $t('Play demo') }}
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
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
import VLazyImage from "v-lazy-image/v2";

import allGames from '../../static/data/games.json'
  export default {


    components: {
      VLazyImage
    },

    data () {
      return {

        gamesList: allGames,

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
    gamesTopSlider() {
      return allGames.filter(val => (val.custom !== true && val.branded !== true))
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
  }
  .swiper-slide {
    &.game-thumbnail {
      .game-thumbnail__outer {
        padding: 8px 0;
        .game-thumbnail__inner {
          position: relative;
        }
      }
      .game-content__wrap {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        opacity: 0;
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 116px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        }
        .game-content__buttns {
          display: flex;
          justify-content: space-between;
          width: 100%;
          z-index: 1;
          margin: 0 40px 40px /* 0 10px 10px buttons v1 */;
          @media (max-width: 1480px) {
            margin: 25px 30px
          }
          @media (max-width: 650px) {
            margin: 0 10px 10px
          }
        }
      }
      &:hover {
        .game-thumbnail__inner {
          transform: scale(1.05);
          z-index: 1;
          transition: all .2s ease-in-out;
          .game-content__wrap {
            opacity: 1;
            transition: .5s ease;
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


</style>
