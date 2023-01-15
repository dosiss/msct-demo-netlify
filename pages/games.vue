<template>

  <div>
    <MainHeader />
    <div>
      <div class="container-outer">
        <div class="container container-custom container-filter">
          <div class="games-filter__outer">
            <div class="games-filter__wrap">
              <button :class="{ active: gameFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'all'">All</button>
              <button :class="{ active: gameFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'top'">Тор Games</button>
              <button :class="{ active: gameFilterKey == 'traffic' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'traffic'">Traffic Games</button>
              <button :class="{ active: gameFilterKey == 'profit' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'profit'">Profit Games</button>
              <button :class="{ active: gameFilterKey == 'videoslots' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'videoslots'">Video Slots</button>
              <button :class="{ active: gameFilterKey == 'lotteries' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'lotteries'">Lotteries</button>
              <button :class="{ active: gameFilterKey == 'risknbuy' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'risknbuy'">Risk&amp;Buy</button>
              <button :class="{ active: gameFilterKey == 'branded' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'branded'">Branded</button>
            </div>
          </div>
        </div>
        <!-- <div class="container">

            <div class="top-games__head">
              <h1 class="top-games__head-title">Top games</h1>
            </div>
        </div>
        <div class="container container-custom">
          <div class="top-games__list-outer">
            <div class="top-games__list">
              <div v-for="(game, idx) in topGames" :key="idx" class="game-thumbnail">

                  <div class="game-thumbnail__outer">
                    <div class="game-thumbnail__inner">
                    <img :src="`images/${game.thumbUrl}`" >
                    <div class="game-content__wrap">
                      <div class="game-content__buttns">
                        <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? "More" : "Learn more" }}</NuxtLink>
                        <a v-if="$device.isMobile" :href="`https://${game.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                          Play demo
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                        <a v-else :href="`https://keen-sherbet-cd2c63.netlify.app/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                          Play demo
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
        </div> -->
      </div>
      <div class="all-games">
          <div class="all-games__content">
            <TransitionGroup name="fade" tag="div">
            <div v-for="(game, idx) in gamesFilter" :key="idx" class="game-thumbnail">
                <div class="game-thumbnail__outer">
                  <div class="game-thumbnail__inner">
                  <v-lazy-image :src="`images/${game.thumbUrl}`" :src-placeholder="`images/lowres/${game.thumbUrl}`" :alt="`${game.name}`" class="game-thumbnail__img" loading="lazy" />
                  <div class="game-content__wrap">
                    <div class="game-content__buttns">
                      <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? "More" : "Learn more" }}</NuxtLink>
                      <a v-if="$device.isMobile" :href="`https://${game.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                        Play demo
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                      <a v-else :href="`https://keen-sherbet-cd2c63.netlify.app/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                        Play demo
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
          </div>
      </div>

    </div>
      <SharingButtons />
      <AdBanner />
      <MainFooter />
  </div>

</template>

<script>
import VLazyImage from "v-lazy-image/v2";

import allGames from '../static/data/games-webp.json'

export default {

  components: {
    VLazyImage,
  },

  data() {


    return {
      title: 'Exciting games for online casino. Feel the gaming thrill',
      description: 'Meet our diverse set of video slots for online casino. We develop a variety of unique games with different features and bonuses. Check it out.',

      gamesList: allGames,
      gameFilterKey: 'all',


    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { property: 'og:title', hid: "og:title", content: this.title },
        { property: 'og:description', hid: 'og:description', content: this.description },
        { property: 'og:url', hid:'og:url', content: `https://mascot.games/games` },
        { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', hid:'twitter:title', content: this.title },
        { name: 'twitter:description', hid:'twitter:description', content: this.description },
        { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/img_share_bg.jpg` },

      ]
    }
  },

  computed: {
      topGames() {
        return allGames.filter(val => (val.topGame !== false)).slice(0,3)
      },
      gamesFilter() {
    	  return this[this.gameFilterKey]
     },
      all() {
        return allGames
      },
      top() {
        return allGames.filter((game) => game.topGame === true)
      },
      videoslots() {
        return allGames.filter((game) => game.theme === "video slot")
      },
      lotteries() {
        return allGames.filter((game) => game.theme === "lottery game")
      },
      profit() {
        return allGames.filter((game) => game.type === "profit")
      },
      traffic() {
        return allGames.filter((game) => game.type === "traffic")
      },
      risknbuy() {
        return allGames.filter((game) => game.risknbuy === true)
      },
      branded() {
        return allGames.filter((game) => game.branded === true)
      },
  },

  mounted() {
        if(this.$route.query.type === "trafficgames") {
          this.gameFilterKey = "traffic"
        };
        if(this.$route.query.type === "profitgames") {
          this.gameFilterKey = "profit"
        };
  },
}

</script>

<style lang="scss" scoped>
.fade-enter {
	transform: scale(0.5) translateY(-80px);
	opacity:0;
}

.fade-leave-to{
	transform: translateY(30px);
	opacity:0;
}

.fade-leave-active {

    transition: all 100ms ease-in;

	position: absolute;
	z-index:-1;
}

  .fade-enter-active {
    transition: all 400ms ease-out 600ms;
  }


.container-outer {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  @media (max-width: 850px) {
    margin-top: 100px;
  }
  @media (max-width: 650px) {
    margin-top: 80px;
  }
}
.container {
  &.container-custom {
    @media (max-width: 1200px) {
      padding: 0;
    }
  }
  &.container-filter {
    @media (max-width: 650px) {
      order: 2
    }
  }
  .games-filter__outer {
    @media (max-width: 1200px) {
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }
}
.games-filter__outer::-webkit-scrollbar {
  display: none
}
  .games-filter__wrap {
    display: flex;
    margin-bottom: 0;
    justify-content: space-between;
    @media (min-width: 1980px) {
      width: 1490px
    }
    @media (max-width: 1200px) {
      padding-left: 35px;
      justify-content: flex-start;
      width: 165%;
    }
    @media (max-width: 650px) {
      width: 300%;
      margin-bottom: 10px;
      margin-top: 20px
    }

    .buttn {
      width: 90px;
      &:not(:first-child) {
        width: 130px
      }
      @media (max-width: 1200px) {
        margin-right: 20px
      }
    }
  }
  .top-games__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (min-width: 1980px) {
      width: 1490px
    }
    .top-games__head-title {
      font-size: 3.75rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem
      }
    }
  }
  .top-games__list-outer {
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .top-games__list-outer::-webkit-scrollbar {
    display: none
  }
  .top-games__list {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,.25);
    @media (max-width: 1200px) {
      width: 165%;
      justify-content: center;
    }
    @media (max-width: 850px) {
      padding-bottom: 0;
      border: none
    }
    @media (max-width: 650px) {
      width: 230%
    }
    .game-thumbnail {
      border-radius: 12px;
      flex: 0 1 32%;
      &:first-child {
        .game-thumbnail__outer {
          padding-left: 20px
        }
      }
      &:nth-child(2) {
        .game-thumbnail__outer {
          padding-right: 10px;
          padding-left: 10px
        }
      }
      &:last-child {
        .game-thumbnail__outer {
          padding-right: 20px
        }
      }
      .game-thumbnail__outer {
        padding: 20px 0;
        @media (max-width: 1200px) {
          margin-right: 20px
        }
        .game-thumbnail__inner {
          position: relative;
          img {
            border-radius: 12px
          }
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
  }
  .all-games {
    padding: 60px 0 0;
    max-width: 1690px;
    margin: 0 auto;
    @media (max-width: 850px) {
      padding-top: 10px;

    }
    .all-games__content > div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .game-thumbnail {

        transition: all .5s ease-in-out;

        border-radius: 12px;
        flex: 0 1 24%;
        @media (max-width: 1200px) {
          flex-basis: 32%
        }
        @media (max-width: 850px) {
          flex-basis: 49%
        }
        @media (max-width: 650px) {
          flex-basis: 90%
        }
        .game-thumbnail__outer {
          padding: 10px;
          .game-thumbnail__inner {
            position: relative;
            .game-thumbnail__img {
              border-radius: 12px;
              -webkit-mask-image: -webkit-radial-gradient(white, black);

              img {
                border-radius: 12px;
                -webkit-mask-image: -webkit-radial-gradient(white, black);
              }
              &.v-lazy-image {
                filter: blur(10px);
                transition: filter 0.5s;
              }
              &.v-lazy-image-loaded {
                filter: blur(0);
              }
            }
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
            z-index: 1
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
              transition: opacity .2s ease-in-out;
            }
          }
        }
      }
    }
  }
</style>
