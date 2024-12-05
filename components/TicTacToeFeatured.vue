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
                    <a :href="`https://${game.linkToDemo}`" class="buttn buttn-blue buttn-wide buttn-m">{{ $t('Play demo') }}</a>
                </div>
              </div>
              </div>
            </div>
            <div slot="pagination" class="swiper-pagination"></div>

          </div>
        </div>
      </div>

  <div v-else class="featured-static__wrap">

      <div class="featured-static__background" :style="{ backgroundImage: `url(/images/${backgroundGameData.backgroundUrl})` }"> <!-- :style="{ backgroundImage: `url(${backgroundUrl})` }" -->
          <div class="container">
              <div class="featured-header__wrap" :class="`game_${backgroundGameData.slug}`">
                <div class="featured-header__content">
                  <NuxtLink :to="`${backgroundGameData.slug}`">
                    <img :src="`/images/${backgroundGameData.logoUrl}`" class="game-logo" :alt="`${backgroundGameData.name}`" />
                    <p class="game-description">{{ backgroundGameData.descr }}</p>
                  </NuxtLink>
                </div>
                <div class="featured-header__buttn">
                    <a v-if="$device.isMobile" :href="`https://${backgroundGameData.linkToDemo}`" class="buttn buttn-blue buttn-wide buttn-m link-mobil">{{ $t('Play demo') }}</a>
                    <a v-else :href="`${demoUrl}${locPath}/${backgroundGameData.slug}`" class="buttn buttn-blue buttn-wide buttn-m link-dsktop">{{ $t('Play demo') }}</a>
                </div>
              </div>
          </div>

          <div class="slider-outer">
          <div v-swiper:mySwiper2="swiperOption">
            <div class="swiper-wrapper">
              <div v-for="(game, idx) in gamesFeatured" :key="idx"  :class="{ 'selected': idx === 0 }" class="swiper-slide game-thumbnail" :data-name="`${game.slug}`" @click="toggleGame" >
                <div class="game-thumbnail__outer">
                  <div class="game-thumbnail__inner">
                  <img :src="`/images/${game.thumbUrl}`" :alt="`${game.name}`" />
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
        <div class="buttn-custom__wrap container">
          <NuxtLink :to="`${backgroundGameData.slug}`" class="buttn buttn-custom buttn-transparent">{{$t('More games')}}</NuxtLink>
        </div>
      </div>

  </div>
</div>
</template>

<script>
import allGames from '../static/data/games-ttt.json'
import allGamesES from '../static/data/games_es-ttt.json'
import allGamesPT from '../static/data/games_pt-br-ttt.json'


  export default {

    data () {
      return {

        gamesList: allGames,

        demoUrl: '',

        locPath: '',

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
        return this.gamesList.filter(val => (val.featured !== false))
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
          this.gamesList = allGamesES;
          this.locPath = '/es';
          break;
        case "pt":
          this.gamesList = allGamesPT;
          this.locPath = '/pt';
          break;
        default:
        this.gamesList = allGames;
        this.locPath = '';
      }


      const firstGame = this.gamesList.filter(val => (val.featured !== false))[0];

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
    /* padding-top: 170px; Non-christmas theme */
    padding-top: 100px;
    height: 820px;
    background-size: cover;
    background-position: top center;
    @media (max-width: 850px) {
      height: 700px;
      padding-top: 100px;
      background-position: center;
    }
    .buttn-custom {
      padding: 10px 12px;
      border: 1px solid #4382FF;
      max-width: fit-content;
      margin: 0 auto;
      color: #4382FF;
      border-radius: 8px;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      font-size: .92rem;
    }
  }
  .featured-header__wrap {
    height: 270px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    /* margin-bottom: 50px; Non-christmas theme */
    margin-bottom: 100px;
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      height: 270px;
      position: relative;
      z-index: 1;
      /* only christmas theme: */
      margin-bottom: 50px;
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
          max-height: 220px;
          max-width: 600px;
          position: relative;
          z-index: 2;
          height: 72px;
          width: auto;
          @media (max-width: 850px) {
            max-height: 72px;
          }
        }
        p {
          margin-top: 20px;
          max-width: 515px;
          font-size: 1.25rem;
          line-height: 1.5;
          font-weight: 400;
          white-space: pre-line;
          margin-bottom: 40px;
        }
      }
    }
        &.game_christmas-infinite-gifts {
      .featured-header__content-inner {
        img {
          max-height: 250px
        }
        p {
          margin-top: 25px
        }
      }
    }
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    height: 820px;
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
  // padding-bottom: 160px;
  padding-bottom: 0;
  position: relative;
  @media (max-width: 650px) {
    padding-bottom: 0
  }
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    left: 60px;
    top: unset;
    bottom: 38%;
    /* background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(5px); */
    background: #47467e;;
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
    bottom: 38%;
    /* background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(5px); */
    background: #47467e;;
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
      background-position: top center;
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
      @media (max-width: 650px) {
        background-position-x: right
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
            margin-bottom: 35px;
          }
          @media (max-width: 650px) {
            width: 100%;
          }
          img {
            max-width: 250px;

          }
        }
      }
    }
  }
}


</style>
