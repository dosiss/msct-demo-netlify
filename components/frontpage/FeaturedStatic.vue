<template>
  <div>
  <div v-if="$device.isMobile" class="featured-static__wrap mobile">

          <div class="slider-outer">
          <div v-swiper:mySwiper4="swiperOptionMobile">
            <div class="swiper-wrapper">
              <div v-for="(game, idx) in gamesFeatured" :key="idx"  :class="{ 'selected': idx === 0 }" class="swiper-slide game-hero" :data-name="`${game.slug}`" @click="toggleGame" >
                <div class="game-hero__outer" :style="{ backgroundImage: `url(/images/${game.heroUrl})` }">
                  <div class="game-hero__inner">
                    <NuxtLink :to="`${game.slug}`">
                      <img :src="`/images/${game.logoUrl}`" class="game-logo" :alt="`${game.name}`" />
                    </NuxtLink>
                    <a :href="`https://${game.linkToDemo}`" class="buttn buttn-primary buttn-m">Play demo</a>
                </div>
              </div>
              </div>
            </div>
            <div slot="pagination" class="swiper-pagination"></div>

          </div>
        </div>
      </div>

  <div v-else class="featured-static__wrap">

    <div v-if="backgroundGameData.videoUrl !== null && backgroundGameData.videoEnabled && $device.isDesktop">
      <div class="video-wrapper">
          <div class="video-background">
            <div class="vid">
              <video id="bgvideo" playsinline autoplay muted loop :poster="`/images/${backgroundGameData.backgroundUrl}`"  width="1920" height="1080">
                <source id="video-src" :src="`/videos/${backgroundGameData.videoUrl}`"  type="video/mp4">
              </video>
            </div>
            <div class="container">
                <div class="featured-header__wrap">
                  <div class="featured-header__content">
                    <NuxtLink :to="`${backgroundGameData.slug}`">
                      <img :src="`/images/${backgroundGameData.logoUrl}`" class="game-logo" :alt="`${backgroundGameData.name}`" />
                      <p class="game-description">{{ backgroundGameData.descr }}</p>
                    </NuxtLink>
                  </div>
                  <div class="featured-header__buttn">
                      <a v-if="$device.isMobile" :href="`https://${backgroundGameData.linkToDemo}`" class="buttn buttn-primary buttn-m">Play demo</a>
                      <a v-else :href="`${demoUrl}/${backgroundGameData.slug}`" class="buttn buttn-primary buttn-m">Play demo</a>
                  </div>
                </div>
            </div>
            <div class="slider-outer">
            <div v-swiper:mySwiper2="swiperOption">
              <div class="swiper-wrapper">
                <div v-for="(game, idx) in gamesFeatured" :key="idx"  :class="{ 'selected': idx === 0 }" class="swiper-slide game-thumbnail" :data-name="`${game.slug}`" @click="toggleGame" >
                  <div class="game-thumbnail__outer">
                    <div class="game-thumbnail__inner">
                    <img :src="`images/${game.thumbUrl}`" :alt="`${game.name}`" />
                    <div class="game-content__wrap" >

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

        </div>
      </div>

    </div>

      <div v-else class="featured-static__background" :style="{ backgroundImage: `url(/images/${backgroundGameData.backgroundUrl})` }"> <!-- :style="{ backgroundImage: `url(${backgroundUrl})` }" -->
          <div class="container">
              <div class="featured-header__wrap">
                <div class="featured-header__content">
                  <NuxtLink :to="`${backgroundGameData.slug}`">
                    <img :src="`/images/${backgroundGameData.logoUrl}`" class="game-logo" :alt="`${backgroundGameData.name}`" />
                    <p class="game-description">{{ backgroundGameData.descr }}</p>
                  </NuxtLink>
                </div>
                <div class="featured-header__buttn">
                    <a v-if="$device.isMobile" :href="`https://${backgroundGameData.linkToDemo}`" class="buttn buttn-primary buttn-m link-mobil">Play demo</a>
                    <a v-else :href="`${demoUrl}/${backgroundGameData.slug}`" class="buttn buttn-primary buttn-m link-dsktop">Play demo</a>
                </div>
              </div>
          </div>

          <div class="slider-outer">
          <div v-swiper:mySwiper2="swiperOption">
            <div class="swiper-wrapper">
              <div v-for="(game, idx) in gamesFeatured" :key="idx"  :class="{ 'selected': idx === 0 }" class="swiper-slide game-thumbnail" :data-name="`${game.slug}`" @click="toggleGame" >
                <div class="game-thumbnail__outer">
                  <div class="game-thumbnail__inner">
                  <img :src="`images/${game.thumbUrl}`" :alt="`${game.name}`" />
                  <div class="game-content__wrap" >

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
      </div>

  </div>
</div>
</template>

<script>
import allGames from '../../static/data/games.json'

  export default {

    data () {
      return {

        gamesList: allGames,

        demoUrl: this.$config.demoUrl,

        backgroundGameData: {
          name: '',
          slug: '',
          backgroundUrl: '',
          logoUrl: '',
          descr: '',
          linkToDemo: '',
          videoUrl: '',
          videoEnabled: ''
          // isSelected: false
        },

        swiperOption: {
          mousewheel: true,
          preventClicks: false,
          // touchMoveStopPropagation: true,
          followFinger: false,
          preventClicksPropagation: false,
          spaceBetween: 10,
          slidesPerView: 1.2,
          a11y: false,
          breakpoints: {

            '650': {
              slidesPerView: 2.5,
              spaceBetween: 17,
              a11y: false,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '1024': {
              slidesPerView: 4.2,
              spaceBetween: 17,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
            },
          }
        },
        swiperOptionMobile: {
          preventClicks: false,
          // touchMoveStopPropagation: true,
          followFinger: false,
          preventClicksPropagation: false,
          slidesPerView: 1,
          a11y: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }

      }
    },

    computed: {
        gamesFeatured() {
        return allGames.filter(val => (val.featured !== false))
      }



    },
    mounted() {

      const firstGame = allGames.filter(val => (val.featured !== false))[0];

    //  firstGame.classList.add('selected');

      this.backgroundGameData.name = firstGame.name;
      this.backgroundGameData.slug = firstGame.slug;
      this.backgroundGameData.backgroundUrl = firstGame.heroUrl;
      this.backgroundGameData.logoUrl = firstGame.logoUrl;
      this.backgroundGameData.descr = firstGame.descr;
      this.backgroundGameData.linkToDemo = firstGame.linkToDemo;
      this.backgroundGameData.videoUrl = firstGame.videoUrl;
      this.backgroundGameData.videoEnabled = firstGame.videoEnabled;

      // this.backgroundGameData.isSelected = true;

    // console.log('Current Swiper instance object', this.mySwiper2)
      // this.mySwiper.slideTo(3, 1000, false)
    },
    methods: {


      toggleGame(event) {
  // this.isSelected = true;
  const selected = document.querySelectorAll('.selected');
  selected.forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

    const backgroundGame = event.currentTarget.getAttribute('data-name');
    const selectedGame = this.gamesList.slice().find((element) => element.slug === backgroundGame);

  //   console.log('slug:'+selectedGame.slug);
   this.backgroundGameData.name = selectedGame.name;
   this.backgroundGameData.slug = selectedGame.slug;
   this.backgroundGameData.backgroundUrl = selectedGame.heroUrl;
   this.backgroundGameData.logoUrl = selectedGame.logoUrl;
   this.backgroundGameData.descr = selectedGame.descr;
   this.backgroundGameData.linkToDemo = selectedGame.linkToDemo;
   this.backgroundGameData.videoUrl = selectedGame.videoUrl;
   this.backgroundGameData.videoEnabled = selectedGame.videoEnabled;
   // this.backgroundGameData.isSelected = true;

      }

    },


  }
</script>

<style scoped lang="scss">

/*.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}*/

.static-background {
  background: url('@/static/images/img-hero-static_desktop.jpg') center top no-repeat;
  background-size: cover;
/*  @media (max-width: 1200px) {
    background: url('@/static/images/img-hero-static_pad.jpg') center top no-repeat;
  } */
  @media (max-width: 650px) {
    background: url('@/static/images/img-hero-static_mobile.jpg') center top no-repeat;

  }
}

.featured-static__wrap {
  .featured-static__background {
    transition: all .5s;
    background-repeat: no-repeat;
    padding-top: 170px;
    height: 950px;
    background-size: cover;
    background-position: center;
    @media (max-width: 850px) {
      height: 760px;
      padding-top: 60px;
      background-position: center;
    }
  }
  .featured-header__wrap {
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 50px;
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      height: 420px;
      position: relative;
      z-index: 1
    }
    .featured-header__content {
      a {
        display: block;
        width: fit-content;
        cursor: pointer;
        @media (max-width: 850px) {
          text-align: center;
        }
        img {
          max-width: 390px;
          @media (max-width: 850px) {
            max-height: 200px;
          }
        }
        p {
          margin-top: 40px;
          max-width: 480px;
          font-size: 1.25rem;
          line-height: 1.5;
          font-weight: 400;
        }
      }
    }
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    height: 950px;
    padding-top: 170px;
    overflow: hidden;
    #bgvideo {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      transform: translateX(-50%) translateY(-50%);
      background-color: #000;
    }
    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
    &:after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(0, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
  }
}

.slider-outer {
  padding-bottom: 160px;
  position: relative;
  @media (max-width: 650px) {
    padding-bottom: 0
  }
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    left: 60px;
    top: unset;
    bottom: 63%;
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
    bottom: 63%;
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
    padding-bottom: 0;
    @media (max-width: 1024px) {
      padding-bottom: 20px
    }
  }
  .swiper-pagination {
    @media (min-width: 1024px) {
      display: none;
    }
  }
}
.swiper-slide {
  &.game-thumbnail {
    .game-thumbnail__outer {
      padding: 8px 0;
      .game-thumbnail__inner {
        position: relative;
        cursor: pointer;
      }
    }

    &:not(.selected) {
      .game-content__wrap {
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.5);
            border-radius: 12px
          }


      }
    }
  }
    img {
      border-radius: 10px;
    }
}
.swiper-slide {
  &.game-hero {
    .game-hero__outer {
      background-size: cover;
      background-repeat: no-repeat;
      height: 500px;
      background-position: center;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      &:before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        width: 100%;
        height: 75px;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      }
      &:after {
        position: absolute;
        content: '';
        bottom: 0;
        right: 0;
        width: 100%;
        height: 75px;
        background: linear-gradient(0, #000000 0%, rgba(0, 0, 0, 0) 100%);

      }
      .game-hero__inner {
        text-align: center;
        position: relative;
        z-index: 2;
        @media (max-width: 650px) {
          width: 100%;
          margin: 0 25px;
        }
        a {
          display: block;
          margin-bottom: 30px;
          @media (max-width: 850px) {
            margin-bottom: 20px;
          }
          @media (max-width: 650px) {
            width: 100%;
          }
          img {
            max-width: 200px
          }
        }
      }
    }
  }
}


</style>
