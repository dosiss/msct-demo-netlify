<template>

  <div>
    <MainHeader />
    <div :class="`lang-${$i18n.locale}`">
      <div class="container-outer">
        <div class="container-wide container-custom container-filter">
          <div class="games-filter__outer">
            <div class="games-filter__wrap">
              <button :class="{ active: gameFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('all')">{{$t('All games')}} - {{gamesList.length}}</button>
              <button :class="{ active: gameFilterKey == 'search' }" class="buttn buttn-rounded buttn-sm buttn-search" @click="showSearchPanel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.875 14.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm7.5 1.5-3.263-3.263"/></svg>
                <span>{{$t('Search')}}</span>
              </button>
              <button :class="{ active: gameFilterKey == 'comingsoon' }" class="buttn buttn-rounded buttn-sm buttn-comingsoon" @click="handleFilterChange('comingsoon')"><span>{{$t('Coming Soon')}}</span></button>
              <button :class="{ active: gameFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('top')">{{$t('Тор games')}} - {{gamesCountItem("topGame")}}</button>
              <button :class="{ active: gameFilterKey == 'traffic' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('traffic')">{{$t('Traffic-generating games')}} - {{gamesCountType("traffic")}}</button>
              <button :class="{ active: gameFilterKey == 'profit' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('profit')">{{$t('Profit-making games')}} - {{gamesCountType("profit")}}</button>
              <button :class="{ active: gameFilterKey == 'videoslots' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('videoslots')">{{$t('Video slots')}} - {{gamesCountTheme("video slot")}}</button>
              <button :class="{ active: gameFilterKey == 'lotteries' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('lotteries')">{{$t('Lottery games')}} - {{gamesCountTheme("lottery game")}}</button>
              <button :class="{ active: gameFilterKey == 'tablegames' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('tablegames')">{{$t('Table games')}} - {{gamesCountTheme("table/cards")}}</button>
              <button :class="{ active: gameFilterKey == 'shooting' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('shooting')">{{$t('Shooters')}} - {{gamesCountTheme("shooting")}}</button>
              <button :class="{ active: gameFilterKey == 'crashgames' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('crashgames')">{{$t('Crash games')}} - {{gamesCountTheme("crash")}}</button>
              <button :class="{ active: gameFilterKey == 'risknbuy' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('risknbuy')">{{$t('Risk&Buy games')}} - {{gamesCountItem("risknbuy")}}</button>
              <button :class="{ active: gameFilterKey == 'rockways' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('rockways')">{{$t('Rockways games')}} - {{gamesCountItem("rockways")}}</button>
              <button :class="{ active: gameFilterKey == 'branded' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('branded')">{{$t('Branded games')}} - {{gamesCountItem("branded")}}</button>
              <button :class="{ active: gameFilterKey == 'custom' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('custom')">{{$t('Custom games')}} - {{gamesCountItem("custom")}}</button>
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
                  <v-lazy-image :src="`/images/${game.thumbUrl}`" :src-placeholder="`/images/lowres/${game.thumbUrl}`" :alt="`${game.name}`" class="game-thumbnail__img" loading="lazy" />
                  <div class="game-content__wrap">
                    <div class="game-content__buttns">
                      <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? $t('More') : $t('Learn more') }}</NuxtLink>
                      <div v-if="game.comingSoon === true" class="buttn buttn-secondary buttn-disabled buttn-sm">{{ $t('Coming soon') }}</div>
                      <div v-else>
                        <a v-if="$device.isMobile" :href="`https://${game.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                          {{$t('Play demo')}}
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                        <a v-else :href="`${demoUrl}${locPath}/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                          {{$t('Play demo')}}
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div v-if="game.comingSoon === true" class="coming-soon-badge">Coming soon</div>
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
                  <v-lazy-image :src="`/images/${game.thumbUrl}`" :src-placeholder="`/images/lowres/${game.thumbUrl}`" :alt="`${game.name}`" class="game-thumbnail__img" loading="lazy" />
                  <div class="game-content__wrap">
                    <div class="game-content__buttns">
                      <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? $t('More') : $t('Learn more') }}</NuxtLink>
                      <div v-if="game.comingSoon === true" class="buttn buttn-secondary buttn-disabled buttn-sm">{{ $t('Coming soon') }}</div>
                      <div v-else>
                        <a v-if="$device.isMobile" :href="`https://${game.linkToDemo}`" class="buttn buttn-colored buttn-m buttn-icon">
                          {{$t('Play demo')}}
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                        <a v-else :href="`${demoUrl}${locPath}/${game.slug}`" class="buttn buttn-colored buttn-m buttn-icon">
                          {{$t('Play demo')}}
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div v-if="game.comingSoon === true" class="coming-soon-badge">Coming soon</div>
                </div>
              </div>
            </div>
          </TransitionGroup>
          </div>
      </div>
    </div>
    <div class="games-descr-text container">Experience the thrill of our incredible games – play demo now and bring them to your casino!</div>

      <SharingButtons />
      <vue-lazy-load><AdBannerSigmaEurope /></vue-lazy-load>
      <MainFooter />
  </div>

</template>

<script>
import VLazyImage from "v-lazy-image/v2";

import VueLazyLoad from '@voorhoede/vue-lazy-load';

import allGames from '../static/data/games-all.json'

export default {

  components: {
    VLazyImage,
    VueLazyLoad
  },

  data() {
    return {
      title: '',
      description: '',

      gamesList: allGames,
      gameFilterKey: 'all',

      searchPanel: false,
      input: '',

      demoUrl: '',

      locPath: ''
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
          lang: this.$i18n.locale
      },
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
//        return allGames
        return allGames.filter(val => (val.comingSoon !== true))
      },
      top() {
        return allGames.filter((game) => game.topGame === true)
      },
      comingsoon() {
        return allGames.filter((game) => game.comingSoon === true)
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

  watch: {
    '$route.query': {
      immediate: true,
      handler(newQuery) {
        this.initializeFilterFromQuery();
      },
      deep: true
    }
  },

  created() {
    this.initializeFilterFromQuery();
  },

  async mounted() {

        try {
          await this.$axios.get("/config.json")
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

        this.title = this.$t('Exciting games for online casino. Feel the gaming thrill')
        this.description = this.$t('Meet our diverse set of video slots for online casino. We develop a variety of unique games with different features and bonuses. Check it out.')

  },

  methods: {
    handleFilterChange(filterKey) {
      const allowedFilters = ['all', 'comingsoon', 'top', 'traffic', 'profit', 'videoslots', 'lotteries', 'tablegames', 'shooting', 'crashgames', 'risknbuy', 'rockways', 'branded', 'custom'];

      if (!allowedFilters.includes(filterKey)) {
  //      console.warn('Invalid filter key:', filterKey);
        return;
      }

      const sanitizedFilterKey = encodeURIComponent(filterKey);

      this.gameFilterKey = sanitizedFilterKey;

      this.$nextTick(async () => {
        try {
          if (sanitizedFilterKey === 'all') {
            await this.$router.push({ query: {} });
          } else {
            await this.$router.push({ query: { type: sanitizedFilterKey } });
          }
        } catch (error) {
  //        console.error('Error while updating the router:', error);
        }
      });
    },
    initializeFilterFromQuery() {
      const queryType = this.$route.query.type;
      if (queryType && queryType !== 'all') {
        this.gameFilterKey = queryType;
      } else {
        this.gameFilterKey = 'all';
      }
    },

    showSearchPanel() {
      this.gameFilterKey = "search"
      this.searchPanel = true;
      this.$nextTick(() => {
        this.$refs.searchField.focus()
      })
    },
    gamesCountTheme(item) {
      return allGames.filter((game) => game.theme === item).length
    },
    gamesCountType(item) {
      return allGames.filter((game) => game.type === item).length
    },
    gamesCountItem(item) {
      return allGames.filter((game) => game[item] === true).length
    },

  },

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
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
    @media (max-width: 3000px) {
      padding: 0 35px;
      max-width: 2500px
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

    @media (max-width: 3000px) {
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
      width: 2340px
    }
    @media (max-width: 1979px) {
      padding-left: 35px;
      justify-content: flex-start;
      width: 2200px;
    }
    @media (max-width: 850px) {
      padding-left: 0
    }
    @media (max-width: 650px) {
      width: 2200px;
      margin-bottom: 10px;
      margin-top: 20px
    }

    .buttn {
      width: max-content;
      white-space: nowrap;
      margin-right: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
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
      &.buttn-search {
        padding-top: 14px !important
      }
      &.buttn-comingsoon {
        border: none;
        position: relative;
        background: #fff;
        padding: 5px !important;
         span {
          background: rgb(56,121,225);
          background: linear-gradient(0deg, rgba(56,121,225,1) 0%, rgba(134,239,196,1) 100%);
          text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
          border-width: 0;
          border-radius: 20rem;
          padding: 11px 35px 11px 12px !important;

        }
        &:before {
          content: '';
          position: absolute;
          height: 57px;
          width: 42px;
          top: -6px;
          right: -6px;
          background: url('/images/img_filter-clock.png')no-repeat;
          background-size: contain;
        }
        &:hover {
          background: rgb(56,121,225);
          background: linear-gradient(0deg, rgba(56,121,225,1) 0%, rgba(134,239,196,1) 100%);
          color: #fff;
          transition: background-color 0.2s ease-in;
        }
        &.active {
          background: rgb(226,126,66);
          background: linear-gradient(90deg, rgba(226,126,66,1) 0%, rgba(246,199,69,1) 100%);
          span {
            background: rgb(226,126,66);
            background: linear-gradient(90deg, rgba(226,126,66,1) 0%, rgba(246,199,69,1) 100%);
            color:#fff
          }
        }
      }
    }
    .buttn {
      .lang-es & {
        width: 170px;
        &:not(:first-child) {
          width: fit-content
        }
      }
    }
    .lang-es & {
      width: 2470px
    }
    .buttn {
      .lang-pt & {
        width: 152px;
        &:not(:first-child) {
          width: fit-content
        }
      }
    }
    .lang-pt & {
      width: 2340px
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
          .coming-soon-badge {
            position: absolute;
            width: 100%;
            background: #000000d6;
            text-align: center;
            text-transform: uppercase;
            padding: 7px;
            bottom: 0;
            z-index: 2
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
            .coming-soon-badge {
              position: absolute;
              width: 100%;
              background: #000000d6;
              text-align: center;
              text-transform: uppercase;
              padding: 7px;
              bottom: 0;
              z-index: 2
            }
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
            margin: 0 10px 40px
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
  .games-descr-text {
    padding: 0 35px;
    font-size: 2rem;
    max-width: 1000px;
    margin: 60px auto 0;
    text-align: center;
    @media (max-width: 850px) {
    font-size: 1.5rem
    }
    @media (max-width: 650px) {
    font-size: 1rem;
    margin-top: 30px
    }
  }
</style>
