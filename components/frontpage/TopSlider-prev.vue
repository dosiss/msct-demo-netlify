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
      <div v-for="(data, idx) in $options.gamesList" :key="idx" class="swiper-slide game-thumbnail">
        <div class="game-thumbnail__outer">
          <div class="game-thumbnail__inner">
          <img :src="`images/${data.thumbUrl}`" >
          <div class="game-content__wrap">
            <div class="game-content__buttns">
              <NuxtLink :to="data.slug" class="buttn buttn-secondary buttn-sm">Learn more</NuxtLink>
              <a v-if="$device.isMobile" :href="`https://${data.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                Play for free
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a v-else :href="`https://keen-sherbet-cd2c63.netlify.app/${data.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                Play for free
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
  </div>
</div>
</template>

<script>
import allGames from '../../static/data/games.json'
  export default {

    gamesList: allGames,

    data () {
      return {

        // banners: [ 'images/game_deepsea.jpg', 'images/game_deepsea2.jpg', 'images/game_deepsea3.jpg', 'images/game_deepsea4.jpg' ],
        swiperOption: {
          preventClicks: false,
          preventClicksPropagation: false,
          spaceBetween: 10,
          slidesPerView: 1.2,
          a11y: false,
          breakpoints: {
            '640': {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }
        }
      }
    },
    mounted() {

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
  }
  .swiper-slide {
    &.game-thumbnail {
      .game-thumbnail__outer {
        padding: 20px 0;
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
          margin: 0 10px 10px
        }
      }
      &:hover {
        .game-thumbnail__inner {
          transform: scale(1.1);
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
      }
  }

</style>
