<template>
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
                    <a  :href="`https://${game.linkToDemo}`" class="buttn buttn-primary buttn-m">Play demo</a>
                </div>
              </div>
              </div>
            </div>
            <div slot="pagination" class="swiper-pagination"></div>

          </div>
        </div>
      </div>

  </div>
  <div v-else class="featured-static__wrap">

      <div class="featured-static__background" :style="{ backgroundImage: `url(/images/${backgroundGameData.backgroundUrl})` }"> <!-- :style="{ backgroundImage: `url(${backgroundUrl})` }" -->
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
                    <a v-else :href="`https://play.mascot.games/${backgroundGameData.slug}`" class="buttn buttn-primary buttn-m">Play demo</a>
                </div>
              </div>
          </div>

          <div class="slider-outer">
          <div v-swiper:mySwiper2="swiperOption">
            <div class="swiper-wrapper">
              <div v-for="(game, idx) in gamesFeatured" :key="idx"  :class="{ 'selected': idx === 0 }" class="swiper-slide game-thumbnail" :data-name="`${game.slug}`" @click="toggleGame" >
                <div class="game-thumbnail__outer">
                  <div class="game-thumbnail__inner">
                  <img :src="`images/${game.thumbUrl}`" >
                  <div class="game-content__wrap" >

                  </div>
                </div>
              </div>
              </div>
            </div>
            <div slot="pagination" class="swiper-pagination"></div>

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


        backgroundGameData: {
          name: '',
          slug: '',
          backgroundUrl: '',
          logoUrl: '',
          descr: '',
          linkToDemo: '',
          // isSelected: false
        },

        swiperOption: {
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
              slidesPerView: 4,
              spaceBetween: 17,
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
    align-items: flex-end;
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

}

.slider-outer {
  padding-bottom: 160px;
  @media (max-width: 650px) {
    padding-bottom: 0
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
    padding-bottom: 20px
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
        a {
          display: block;
          margin-bottom: 30px;
          img {
            max-width: 200px
          }
        }
      }
    }
  }
}


</style>
