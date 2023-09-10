<template>

  <div>
    <MainHeader />
    <div>
      <div class="container-outer">
        <div class="container-wide container-custom container-filter">
          <div class="games-filter__outer">
            <div class="games-filter__wrap">
              <button :class="{ active: gameFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'all'">All - {{gamesList.length}}</button>
              <button :class="{ active: gameFilterKey == 'search' }" class="buttn buttn-rounded buttn-sm buttn-search" @click="showSearchPanel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.875 14.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm7.5 1.5-3.263-3.263"/></svg>
                <span>Search</span>
              </button>
              <button :class="{ active: gameFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'top'">Тор Games - {{gamesCountItem("topGame")}}</button>
              <button :class="{ active: gameFilterKey == 'traffic' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'traffic'">Traffic Games - {{gamesCountType("traffic")}}</button>
              <button :class="{ active: gameFilterKey == 'profit' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'profit'">Profit Games - {{gamesCountType("profit")}}</button>
              <button :class="{ active: gameFilterKey == 'videoslots' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'videoslots'">Video Slots - {{gamesCountTheme("video slot")}}</button>
              <button :class="{ active: gameFilterKey == 'lotteries' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'lotteries'">Lotteries - {{gamesCountTheme("lottery game")}}</button>
              <button :class="{ active: gameFilterKey == 'tablegames' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'tablegames'">Table games - {{gamesCountTheme("table/cards")}}</button>
              <button :class="{ active: gameFilterKey == 'shooting' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'shooting'">Shooting - {{gamesCountTheme("shooting")}}</button>
              <button :class="{ active: gameFilterKey == 'crashgames' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'crashgames'">Crash games - {{gamesCountTheme("crash")}}</button>
              <button :class="{ active: gameFilterKey == 'risknbuy' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'risknbuy'">Risk&amp;Buy - {{gamesCountItem("risknbuy")}}</button>
              <button :class="{ active: gameFilterKey == 'rockways' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'rockways'">Rockways - {{gamesCountItem("rockways")}}</button>
              <button :class="{ active: gameFilterKey == 'branded' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'branded'">Branded - {{gamesCountItem("branded")}}</button>
              <button :class="{ active: gameFilterKey == 'custom' }" class="buttn buttn-rounded buttn-sm" @click="gameFilterKey = 'custom'">Custom - {{gamesCountItem("custom")}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="all-games">
        <div v-if="gameFilterKey == 'search'">
          <div class="search__wrap">
            <div class="search-field-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="#DADADA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 14.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm7.5 1.5-3.263-3.263"/></svg>
            </div>
            <input ref="searchField" v-model="input" type="text" />
            <button class="search-field-buttn" @click="input = ''"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7.5" fill="#DADADA"/><path stroke="#121212" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12 6 6m0 6 6-6"/></svg>
            </button>
          </div>
          <div class="all-games__content">
            <div>
              <div v-for="(game, idx) in searchList" :key="idx" class="game-thumbnail">
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
                      <a v-else :href="`${demoUrl}/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
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
        <div v-if="input && !searchList.length" class="search-error">
            <p>No results found for <span>&ldquo;{{input}}&rdquo;</span></p>
          </div>
        </div>
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
                      <a v-else :href="`${demoUrl}/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
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
      <vue-lazy-load><AdBannerSBCsummit /></vue-lazy-load>
      <MainFooter />
  </div>

</template>

<script>
import VLazyImage from "v-lazy-image/v2";

import VueLazyLoad from '@voorhoede/vue-lazy-load';

import allGames from '../static/data/games.json'

export default {

  components: {
    VLazyImage,
    VueLazyLoad
  },

  data() {
    return {
      title: 'Exciting games for online casino. Feel the gaming thrill',
      description: 'Meet our diverse set of video slots for online casino. We develop a variety of unique games with different features and bonuses. Check it out.',

      gamesList: allGames,
      gameFilterKey: 'all',

      searchPanel: false,
      input: '',

      demoUrl: '',
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
      tablegames() {
        return allGames.filter((game) => game.theme === "table/cards")
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
      rockways() {
        return allGames.filter((game) => game.rockways === true)
      },
      shooting() {
        return allGames.filter((game) => game.theme === "shooting")
      },
      crashgames() {
        return allGames.filter((game) => game.theme === "crash")
      },
      branded() {
        return allGames.filter((game) => game.branded === true)
      },
      custom() {
        return allGames.filter((game) => game.custom === true)
      },
      searchList() {
        return allGames.filter((game) => {
          return game.name.toLowerCase().includes(this.input.toLowerCase())
        })
      }

  },

  async mounted() {

        try {
          await  this.$axios.get("/config.json")
            .then(response => {this.demoUrl = response.data.demoURL})
        } catch(ex) {
          this.demoUrl = this.$config.demositeURL
        }

        if(this.$route.query.type === "trafficgames") {
          this.gameFilterKey = "traffic"
        };
        if(this.$route.query.type === "profitgames") {
          this.gameFilterKey = "profit"
        };
        if(this.$route.query.type === "top") {
          this.gameFilterKey = "top"
        };
        if(this.$route.query.type === "videoslots") {
          this.gameFilterKey = "videoslots"
        };
        if(this.$route.query.type === "lotteries") {
          this.gameFilterKey = "lotteries"
        };
        if(this.$route.query.type === "tablegames") {
          this.gameFilterKey = "tablegames"
        };
        if(this.$route.query.type === "shooting") {
          this.gameFilterKey = "shooting"
        };
        if(this.$route.query.type === "risknbuy") {
          this.gameFilterKey = "risknbuy"
        };
        if(this.$route.query.type === "crashgames") {
          this.gameFilterKey = "crashgames"
        };
        if(this.$route.query.type === "rockways") {
          this.gameFilterKey = "rockways"
        };
        if(this.$route.query.type === "branded") {
          this.gameFilterKey = "branded"
        };
        if(this.$route.query.type === "custom") {
          this.gameFilterKey = "custom"
        };
  },
  methods: {
    showSearchPanel() {
      this.gameFilterKey = "search"
      this.searchPanel = true;
    },
    gamesCountTheme(item) {
      return allGames.filter((game) => game.theme === item).length
    },
    gamesCountType(item) {
      return allGames.filter((game) => game.type === item).length
    },
    gamesCountItem(item) {
      return allGames.filter((game) => game[item] === true).length
    }
  }
}

</script>

<style lang="scss" scoped>
/*
.fade-enter {
	transform: scale(0.5) translateY(-80px);
	opacity:0;
}

.fade-leave-to{
	transform: translateY(30px);
	opacity:0;
}

.fade-leave-active {

    transition: all 400ms ease-in 200ms; /* all 100ms ease-in

	position: absolute;
	z-index:-1;
}

  .fade-enter-active {
    transition: all 400ms ease-out 600ms;
  }
*/

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
.container-wide {
  &.container-custom {
    @media (max-width: 1200px) {
      padding: 0;
    }
  }
  &.container-filter {
    @media (max-width: 2150px) {
      padding: 0 35px
    }
    @media (max-width: 1770px) {
      padding: 0 35px
    }
    @media (max-width: 650px) {
      order: 2;
      padding: 0 20px
    }
  }
  .games-filter__outer {
    @media (max-width: 1700px) {
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
      width: 1660px
    }
    @media (max-width: 1700px) {
      padding-left: 35px;
      justify-content: flex-start;
      width: 1660px;
    }
    @media (max-width: 850px) {
      padding-left: 0
    }
    @media (max-width: 650px) {
      width: 1660px;
      margin-bottom: 10px;
      margin-top: 20px
    }

    .buttn {
      width: 90px;
      margin-right: 10px;
      &:not(:first-child) {
        width: fit-content
      }
      &:last-child {
        margin-right: 0
      }
      &.buttn-rounded {
        &.buttn-sm {
          font-size: .75rem;
          padding: 11px 12px
        }
      }
      &.buttn-search {
        display: flex;
        justify-content: center;
        svg {
          height: 18px;
          width: auto
        }
        span {
          margin-left: 5px;
          line-height: 1.5
        }
        &:hover {
          svg {
            path {
              stroke: #5f5f5f;
              transition: 0.2s ease-in;
            }
          }
        }
        &.active {
          svg {
            path {
              stroke: #000
            }
          }
        }
      }
    }
  }
  .search__wrap {
    margin-bottom: 30px;
    margin-left: 45px;
    @media (max-width: 850px) {
      margin: 20px 15px
    }
    input {
      border: 1px solid #5f5f5f;
      border-radius: 6px;
      background: #121212;
      padding: 8px 8px 8px 35px;
      width: 580px;
      @media (max-width: 850px) {
        width: 100%
      }
    }
    .search-field-icon {
      svg {
        width: 18px;
        height: auto;
        position: absolute;
        margin: 10px;
      }
    }
    .search-field-buttn {
      position: relative;
      cursor: pointer;
      @media (max-width: 850px) {
        width: 100%
      }
      svg {
        width: 18px;
        height: auto;
        position: absolute;
        right: 16px;
        bottom: -3px;
        @media (max-width: 850px) {
          bottom: 25px
        }
      }
    }
  }
  .search-error {
    margin-top: 20px;
    margin-left: 45px;
    @media (max-width: 850px) {
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: 650px) {
      margin: 0 40px;
    }
    p {
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.2rem;
        text-transform: inherit;
      }
      span {
        color: #FFCF24
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
          margin: 0 40px 40px; /* 0 10px 10px buttons v1 */
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
    padding: 30px 0 0;
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
            margin: 0 40px 40px /* 0 10px 10px buttons v1 */;
            @media (max-width: 650px) {
            margin: 0 10px 10px
            }
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
