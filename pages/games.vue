<template>
  <div>
    <MainHeader />
    <div :class="`lang-${$i18n.locale}`">
      <div class="container-outer">
        <div class="container-wide container-custom container-filter">
          <div class="games-filter__outer">
            <div class="games-filter__wrap">
              <button :class="{ active: gameFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('all')">{{$t('All games')}} - {{gamesCountAll()}}</button>
              <button :class="{ active: gameFilterKey == 'search' }" class="buttn buttn-rounded buttn-sm buttn-search" @click="showSearchPanel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.875 14.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm7.5 1.5-3.263-3.263"/></svg>
                <span>{{$t('Search')}}</span>
              </button>
              <button :class="{ active: gameFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('top')">{{$t('Monthly Top')}}</button>
              <button :class="{ active: gameFilterKey == 'tictactoe' }" class="buttn buttn-rounded buttn-sm buttn-tictactoe" @click="handleFilterChange('tictactoe')"><span>{{$t('TTT games')}}</span></button>
              <button :class="{ active: gameFilterKey == 'comingsoon' }" class="buttn buttn-rounded buttn-sm buttn-comingsoon" @click="handleFilterChange('comingsoon')"><span>{{$t('Coming Soon')}}</span></button>
              <div class="dropdown-filter" :class="{ 'is-open': isTestDropdownOpen }" @mouseenter="$device.isMobile ? null : isTestDropdownOpen = true" @mouseleave="$device.isMobile ? null : isTestDropdownOpen = false">
                <button class="buttn buttn-rounded buttn-sm dropdown-trigger buttn-features" @click="isTestDropdownOpen = !isTestDropdownOpen"><span class="buttn-features-title">{{$t('Commercial Features')}}</span>
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </button>
                <div v-show="isTestDropdownOpen" class="dropdown-menu">
                  <button :class="{ active: gameFilterKey == 'riskandbuy' }" class="dropdown-item buttn-feature-risknbuy" @click="handleFilterChange('riskandbuy')">{{$t('Risk and Buy')}}</button>
                  <button :class="{ active: gameFilterKey == 'holdnwin' }" class="dropdown-item buttn-feature-holdnwin" @click="handleFilterChange('holdnwin')">{{$t('Hold and Win')}}</button>
                  <button :class="{ active: gameFilterKey == 'jackpot' }" class="dropdown-item buttn-feature-jackpot" @click="handleFilterChange('jackpot')">{{$t('Jackpot')}}</button>
                  <button :class="{ active: gameFilterKey == 'rockways' }" class="dropdown-item buttn-feature-rockways" @click="handleFilterChange('rockways')">{{$t('Rockways')}}</button>                  
                  <button :class="{ active: gameFilterKey == 'rockfall' }" class="dropdown-item buttn-feature-rockfall" @click="handleFilterChange('rockfall')">{{$t('Rockfall')}}</button>
                  <button :class="{ active: gameFilterKey == 'boost' }" class="dropdown-item buttn-feature-boost" @click="handleFilterChange('boost')">{{$t('Boost')}}</button>
                  <button :class="{ active: gameFilterKey == 'nudge' }" class="dropdown-item buttn-feature-nudge" @click="handleFilterChange('nudge')">{{$t('Nudge')}}</button>
                  <button :class="{ active: gameFilterKey == 'buyfreerounds' }" class="dropdown-item buttn-feature-buyfreerounds" @click="handleFilterChange('buyfreerounds')">{{$t('Buy Free Rounds')}}</button>                
                </div>
              </div>
              <div class="dropdown-filter" :class="{ 'is-open': isTypeDropdownOpen }" @mouseenter="$device.isMobile ? null : isTypeDropdownOpen = true" @mouseleave="$device.isMobile ? null : isTypeDropdownOpen = false">
                <button class="buttn buttn-rounded buttn-sm dropdown-trigger buttn-gametype" @click="isTypeDropdownOpen = !isTypeDropdownOpen"><span class="buttn-gametype-title">{{$t('Game Types')}}</span>
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </button>
                <div v-show="isTypeDropdownOpen" class="dropdown-menu">
                  <button :class="{ active: gameFilterKey == 'videoslots' }" class="dropdown-item buttn-gametype-videoslots" @click="handleFilterChange('videoslots')">{{$t('Slots')}}</button>
                  <button :class="{ active: gameFilterKey == 'crashgames' }" class="dropdown-item buttn-gametype-crashgames" @click="handleFilterChange('crashgames')">{{$t('Crash')}}</button>
                  <button :class="{ active: gameFilterKey == 'shooting' }" class="dropdown-item buttn-gametype-shooting" @click="handleFilterChange('shooting')">{{$t('Shooters')}}</button>                  
                  <button :class="{ active: gameFilterKey == 'lotteries' }" class="dropdown-item buttn-gametype-lotteries" @click="handleFilterChange('lotteries')">{{$t('Lottery')}}</button>
                  <button :class="{ active: gameFilterKey == 'tablegames' }" class="dropdown-item buttn-gametype-tablegames" @click="handleFilterChange('tablegames')">{{$t('Table')}}</button>
                </div>
              </div> 
              <div class="dropdown-filter" :class="{ 'is-open': isCatDropdownOpen }" @mouseenter="$device.isMobile ? null : isCatDropdownOpen = true" @mouseleave="$device.isMobile ? null : isCatDropdownOpen = false">
                <button class="buttn buttn-rounded buttn-sm dropdown-trigger buttn-category" @click="isCatDropdownOpen = !isCatDropdownOpen"><span class="buttn-category-title">{{$t('Category')}}</span>
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </button>
                <div v-show="isCatDropdownOpen" class="dropdown-menu">
                  <button :class="{ active: gameFilterKey == 'fruits' }" class="dropdown-item buttn-fruits" @click="handleFilterChange('fruits')"><span>{{$t('Fruits')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'egypt' }" class="dropdown-item buttn-egypt" @click="handleFilterChange('egypt')"><span>{{$t('Egypt')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'adventures' }" class="dropdown-item buttn-adventures" @click="handleFilterChange('adventures')"><span>{{$t('Adventures')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'fantasy' }" class="dropdown-item buttn-fantasy" @click="handleFilterChange('fantasy')"><span>{{$t('Fantasy')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'asia' }" class="dropdown-item buttn-asia" @click="handleFilterChange('asia')"><span>{{$t('Asia')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'girls' }" class="dropdown-item buttn-girls" @click="handleFilterChange('girls')"><span>{{$t('Girls')}}</span></button>
                  <!-- <button :class="{ active: gameFilterKey == 'mythology' }" class="dropdown-item buttn-mythology" @click="handleFilterChange('mythology')"><span>{{$t('Mythology')}}</span></button> -->
                  <button :class="{ active: gameFilterKey == 'christmas' }" class="dropdown-item buttn-christmas" @click="handleFilterChange('christmas')"><span>{{$t('Christmas')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'easter' }" class="dropdown-item buttn-easter" @click="handleFilterChange('easter')"><span>{{$t('Easter')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'halloween' }" class="dropdown-item buttn-halloween" @click="handleFilterChange('halloween')"><span>{{$t('Halloween')}}</span></button>
                  <!-- <button :class="{ active: gameFilterKey == 'postap' }" class="dropdown-item buttn-postap" @click="handleFilterChange('postap')"><span>{{$t('Post Apocalyptic')}}</span></button> -->
                  <button :class="{ active: gameFilterKey == 'space' }" class="dropdown-item buttn-space" @click="handleFilterChange('space')"><span>{{$t('Space')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'jewels' }" class="dropdown-item buttn-jewels" @click="handleFilterChange('jewels')"><span>{{$t('Jewels')}}</span></button>
                </div>
              </div>
              <div class="dropdown-filter" :class="{ 'is-open': isUniverseDropdownOpen }" @mouseenter="$device.isMobile ? null : isUniverseDropdownOpen = true" @mouseleave="$device.isMobile ? null : isUniverseDropdownOpen = false">
                <button class="buttn buttn-rounded buttn-sm dropdown-trigger buttn-universe" @click="isUniverseDropdownOpen = !isUniverseDropdownOpen"><span class="buttn-universe-title">{{$t('Game Universe')}}</span>
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </button>
                <div v-show="isUniverseDropdownOpen" class="dropdown-menu">
                  <button :class="{ active: gameFilterKey == 'riot' }" class="dropdown-item buttn-universe-riot" @click="handleFilterChange('riot')"><span>{{$t('Riot')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'zeus' }" class="dropdown-item buttn-universe-zeus" @click="handleFilterChange('zeus')"><span>{{$t('Zeus')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'tessahunt' }" class="dropdown-item buttn-universe-tessahunt" @click="handleFilterChange('tessahunt')"><span>{{$t('Tessa Hunt')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'huntress' }" class="dropdown-item buttn-universe-huntress" @click="handleFilterChange('huntress')"><span>{{$t('Huntress')}}</span></button>
                  <button :class="{ active: gameFilterKey == 'fortherealm' }" class="dropdown-item buttn-universe-fortherealm" @click="handleFilterChange('fortherealm')"><span>{{$t('For the Realm')}}</span></button>
                  <!-- <button :class="{ active: gameFilterKey == 'joker' }" class="dropdown-item buttn-universe-joker" @click="handleFilterChange('joker')"><span>{{$t('Joker')}}</span></button> -->
                </div>
              </div>                                        
              <!-- <button :class="{ active: gameFilterKey == 'traffic' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('traffic')">{{$t('Traffic-generating games')}} - {{gamesCountType("traffic")}}</button>
              <button :class="{ active: gameFilterKey == 'profit' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('profit')">{{$t('Profit-making games')}} - {{gamesCountType("profit")}}</button>
              <button :class="{ active: gameFilterKey == 'risknbuy' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('risknbuy')">{{$t('Risk&Buy games')}} - {{gamesCountItem("risknbuy")}}</button> -->
              <!-- <button :class="{ active: gameFilterKey == 'rockways' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('rockways')">{{$t('Rockways games')}} - {{gamesCountItem("rockways")}}</button> -->
              <!-- <button :class="{ active: gameFilterKey == 'branded' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('branded')">{{$t('Branded games')}} - {{gamesCountItem("branded")}}</button> -->
              <button :class="{ active: gameFilterKey == 'custom' }" class="buttn buttn-rounded buttn-sm" @click="handleFilterChange('custom')">{{$t('Custom games')}}</button>
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
                  <v-lazy-image :src="`/images/${game.thumbUrl}`" :src-placeholder="`/images/lowres/${game.thumbUrl.substring(0, game.thumbUrl.lastIndexOf('.'))}.jpeg`" :alt="`${game.name}`" class="game-thumbnail__img" loading="lazy" />
                  <div class="game-content__wrap">
                    <div class="game-content__buttns aa">
                      <nuxt-link :to="localePath( {path: `/${game.slug}`} )" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? $t('More') : $t('Learn more') }}</nuxt-link>
                      <!-- <NuxtLink :to="game.slug" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? $t('More') : $t('Learn more') }}</NuxtLink> -->
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
                  <v-lazy-image :src="`/images/${game.thumbUrl}`" :src-placeholder="`/images/lowres/${game.thumbUrl.substring(0, game.thumbUrl.lastIndexOf('.'))}.jpeg`" :alt="`${game.name}`" class="game-thumbnail__img" loading="lazy" />
                  <div class="game-content__wrap">
                    <div class="game-content__buttns bb">
                      <nuxt-link :to="localePath( {path: `/${game.slug}`} )" class="buttn buttn-secondary buttn-sm">{{ $device.isMobile ? $t('More') : $t('Learn more') }}</nuxt-link>
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
      <!-- <vue-lazy-load><AdBanner /></vue-lazy-load> -->
      <MainFooter />
  </div>

</template>

<script>
import VLazyImage from "v-lazy-image/v2";

// import VueLazyLoad from '@voorhoede/vue-lazy-load';

import allGames from '../static/data/games-all.json'

export default {

  components: {
    VLazyImage,
//    VueLazyLoad
  },

  data() {
    return {
      // title: '',
      // description: '',

      gamesList: allGames,
      gameFilterKey: 'all',
      isTestDropdownOpen: false,
      isTypeDropdownOpen: false,
      isCatDropdownOpen: false,
      isUniverseDropdownOpen: false,

      searchPanel: false,
      input: '',
      currUrl: 'https://mascot.games',
      demoUrl: 'https://play.mascot.games',

      locPath: ''
    }
  },
  head() {
    return {
      title: this.$t('Exciting games for online casino. Feel the gaming thrill'),
      htmlAttrs: {
          lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('Explore a wide selection of our casino games. Play Demo Now!')
        },
        { property: 'og:title', hid: "og:title", content: this.$t('Exciting games for online casino. Feel the gaming thrill') },
        { property: 'og:description', hid: 'og:description', content: this.$t('Explore a wide selection of our casino games. Play Demo Now!') },
        { property: 'og:url', hid:'og:url', content: `https://mascot.games/games` },
        { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', hid:'twitter:title', content: this.$t('Exciting games for online casino. Feel the gaming thrill') },
        { name: 'twitter:description', hid:'twitter:description', content: this.$t('Explore a wide selection of our casino games. Play Demo Now!') },
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
      tictactoe() {
        return allGames.filter((game) => game.theme === "tictactoe")
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
      shooting() {
        return allGames.filter((game) => game.theme === "shooting")
      },
      crashgames() {
        return allGames.filter((game) => game.theme === "crash")
      },
      // branded() {
      //   return allGames.filter((game) => game.branded === true)
      // },
      custom() {
        return allGames.filter((game) => game.custom === true)
      },
      adventures() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("adventure")
        )
      },
      christmas() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("christmas")
        )
      },
      easter() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("easter")
        )
      },
      fantasy() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("fantasy")
        )
      },
      halloween() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("halloween")
        )
      },
      // mythology() {
      //   return this.gamesList.filter((game) =>
      //     Array.isArray(game.category) && game.category.includes("mythology")
      //   )
      // },
      // postap() {
      //   return this.gamesList.filter((game) =>
      //     Array.isArray(game.category) && game.category.includes("postap")
      //   )
      // },
      space() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("space")
        )
      },
      jewels() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("jewels")
        )
      },      
      egypt() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("egypt")
        )
      },
      fruits() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("fruits")
        )
      },
      asia() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("asia")
        )
      },
      girls() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("girls")
        )
      },
      riot() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("riot")
        )
      },
      zeus() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("zeus")
        )
      },
      tessahunt() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("tessahunt")
        )
      },
      huntress() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("huntress")
        )
      },
      fortherealm() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("fortherealm")
        )
      },      
      joker() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("joker")
        )
      },    
      riskandbuy() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("risknbuy")
        )
      },
      holdnwin() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("holdnwin")
        )
      },
      jackpot() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("jackpot")
        )
      },
      rockways() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("rockways")
        )
      },
      rockfall() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("rockfall")
        )
      },
      boost() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("boost")
        )
      },
      nudge() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("nudge")
        )
      },    
      buyfreerounds() {
        return this.gamesList.filter((game) =>
          Array.isArray(game.category) && game.category.includes("buyfreerounds")
        )
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
  mounted() {
    // Only scroll if coming from external (check if this is initial page load)
    // console.log('🎮 Games page mounted')
    // console.log('📍 Initial scroll position:', window.scrollY)
    // console.log('🔍 Navigation context:', {
    //   from: this.$nuxt.context.from,
    //   fromName: this.$nuxt.context.from?.name
    // })

    // Only scroll if coming from external
    if (!this.$nuxt.context.from || !this.$nuxt.context.from.name) {
      // console.log('✅ External navigation detected in component - forcing scroll')

      window.scrollTo(0, 0)
      // console.log('📍 After first scrollTo:', window.scrollY)

      this.$nextTick(() => {
        window.scrollTo(0, 0)
        // console.log('📍 After nextTick scrollTo:', window.scrollY)
      })

      setTimeout(() => {
        window.scrollTo(0, 0)
        // console.log('📍 After 200ms scrollTo:', window.scrollY)
      }, 200)
    } else {
      // console.log('ℹ️ Internal navigation - skipping scroll intervention')
    }
  // async mounted() {
  //
  //       try {
  //         await this.$axios.get("/config.json")
  //           .then(response => {this.demoUrl = response.data.demoURL})
  //       } catch(ex) {
  //         this.demoUrl = this.$config.demositeURL
  //       }

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

        // this.title = this.$t('Exciting games for online casino. Feel the gaming thrill')
        // this.description = this.$t('Explore a wide selection of our casino games. Play Demo Now!')

  },

  methods: {
    handleFilterChange(filterKey) {
      this.isTestDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isCatDropdownOpen = false;
      this.isUniverseDropdownOpen = false;

      const allowedFilters = ['all', 'comingsoon', 'top', 'tictactoe', 'traffic', 'profit', 'videoslots', 'lotteries', 'tablegames', 'shooting', 'crashgames', 'risknbuy', 'branded', 'custom', 'adventures', 'christmas', 'easter', 'fantasy', 'halloween', 'space', 'jewels', 'egypt', 'fruits', 'asia', 'girls', 'riot', 'zeus', 'tessahunt', 'huntress', 'fortherealm', 'joker', 'riskandbuy', 'holdnwin', 'jackpot', 'rockways', 'rockfall', 'boost', 'nudge', 'buyfreerounds'];

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
      this.isTestDropdownOpen = false;
      this.isTypeDropdownOpen = false;
      this.isCatDropdownOpen = false;
      this.isUniverseDropdownOpen = false;

      this.gameFilterKey = "search"
      this.searchPanel = true;
      this.$nextTick(() => {
        this.$refs.searchField.focus()
      })
    },
    gamesCountAll() {
      return allGames.filter((game) => game.comingSoon !== true).length
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
  // overflow-x: scroll;
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
  &.container-filter-category {
    margin-top: 20px;
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
    .games-filter__wrap {
      @media (max-width: 1979px) {
        width: 1500px
      }
      @media (max-width: 650px) {
        margin-top: 0
      }
    }
    .filter-category__title {
      align-self: center;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 10px;
      @media (max-width: 650px) {
        display: none
      }
    }
    .buttn {
      position: relative;
      border-color: #333333;
      &.buttn-rounded {
        font-weight: 500;
        @media (hover: hover) {
          &:hover {
            border-color: #000;
            color: #5f5f5f;
          }
        }
      }
      &:before {
        content: "";
        position: absolute;
        height: 38px;
        width: 38px;
        top: 0;
        right: 0;
        z-index: 1
      }
      &:after {
        content: "";
        position: absolute;
        height: 16px;
        width: 26px;
        top: 9px;
        right: 7px;
      }
      span {
        padding-right: 35px
      }
    }
  }
  .games-filter__outer {
    padding-bottom: 500px;
    @media (max-width: 3000px) {
      overflow-x: scroll;
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
      width: 1690px
    }
    @media (max-width: 1979px) {
      padding-left: 35px;
      justify-content: flex-start;
      width: 1500px;
    }
    @media (max-width: 850px) {
      padding-left: 0
    }
    @media (max-width: 650px) {
      width: 1500px;
      margin-bottom: 10px;
      margin-top: 20px
    }

    .buttn {
      width: max-content;
      white-space: nowrap;
      margin-right: 10px;
      // margin-top: 5px;
      // margin-bottom: 5px;
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
        @media (hover: hover) {
          &:hover {
            svg {
              path {
                stroke: #5f5f5f;
                transition: 0.2s ease-in;
              }
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
        // border: none;
         position: relative;
        // background: #fff;
        // padding: 5px !important;
          span {
        //   background: rgb(56,121,225);
        //   background: linear-gradient(0deg, rgba(56,121,225,1) 0%, rgba(134,239,196,1) 100%);
        //   text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        //   border-width: 0;
        //   border-radius: 20rem;
           padding: 11px 35px 11px 12px !important;

         }
        &:before {
          content: '';
          position: absolute;
          height: 41px;
          width: 42px;
          top: 0;
          right: -2px;
          background: url('/images/img_filter-clock.png')no-repeat;
          background-size: contain;
        }
        // &:hover {
        //   background: rgb(56,121,225);
        //   background: linear-gradient(0deg, rgba(56,121,225,1) 0%, rgba(134,239,196,1) 100%);
        //   color: #fff;
        //   transition: background-color 0.2s ease-in;
        // }
        // &.active {
        //   background: rgb(226,126,66);
        //   background: linear-gradient(90deg, rgba(226,126,66,1) 0%, rgba(246,199,69,1) 100%);
        //   span {
        //     background: rgb(226,126,66);
        //     background: linear-gradient(90deg, rgba(226,126,66,1) 0%, rgba(246,199,69,1) 100%);
        //     color:#fff
        //   }
        // }
      }
      &.buttn-tictactoe {
        // border: none;
        position: relative;
        // background: #fff;
        // padding: 5px !important;
         span {
          // background: #FF5151;
          // background: linear-gradient(0deg, #FF5151 0%, #FFA63E 100%);
          // text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
          // border-width: 0;
          // border-radius: 20rem;
          padding: 11px 35px 11px 12px !important;

        }
        &:before {
          content: '';
          position: absolute;
          height: 41px;
          width: 60px;
          top: 0;
          right: -10px;
          background: url('/images/img_filter-rocket.png')no-repeat;
          background-size: contain;
        }
        // &:hover {
        //   background: #FF5151;
        //   background: linear-gradient(0deg, #FF5151 0%, #FFA63E 100%);
        //   color: #fff;
        //   transition: background-color 0.2s ease-in;
        // }
        // &.active {
        //   background: rgb(226,126,66);
        //   background: linear-gradient(90deg, #FF6C1A 0%, #FFE604 100%);
        //   span {
        //     background: rgb(226,126,66);
        //     background: linear-gradient(90deg, #FF6C1A 0%, #FFE604 100%);
        //     color:#fff
        //   }
        // }
      }
      &.buttn-features {
        &:before {
          content: '';
          position: absolute;
          height: 40px;
          width: 60px;
          top: 3px;
          right: 20px;
          background: url('/images/img_filter-features.png')no-repeat;
          background-size: contain;
        }
        .buttn-features-title {
          padding-right: 55px;
        }
      }
      &.buttn-gametype {
        .buttn-gametype-title {
          padding-right: 10px;
        }
      }
      &.buttn-category {
          .buttn-category-title {
            padding-right: 35px;
          }
      }
      &.buttn-universe {
        &:before {
          content: '';
          position: absolute;
          height: 35px;
          width: 60px;
          top: 5px;
          right: 20px;
          background: url('/images/img_filter-swords.png')no-repeat;
          background-size: contain;
        }
        .buttn-features-title {
          padding-right: 55px;
        }
        .buttn-universe-title {
          padding-right: 55px;
        }
      }      
    }
    .buttn {
      .lang-es & {
        width: auto;
        &:not(:first-child) {
          width: fit-content
        }
      }
    }
    .lang-es & {
      width: 1600px
    }
    .buttn {
      .lang-pt & {
        width: auto;
        &:not(:first-child) {
          width: fit-content
        }
      }
    }
    .lang-pt & {
      width: 1600px
    }
  }
  .dropdown-filter {
    position: relative;
    &.is-open {
      .dropdown-trigger {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-color: #5f5f5f;
      }
      .dropdown-arrow {
            transform: rotate(180deg) translateY(-2px);
            svg {
              path {
                fill: #DB001D
              }
            }
      }
    }
    .dropdown-trigger {
      height: 100%
      // height: stretch;
      // &:hover {
      //     border-bottom-left-radius: 0;
      //     border-bottom-right-radius: 0;
      //     border-top-left-radius: 20px;
      //     border-top-right-radius: 20px;
      //   }
    }
    .dropdown-arrow {
      display: inline-block;
      font-size: 0.8em;
      transition: transform 0.3s ease;
    }
    .dropdown-menu {
      position: absolute;
      bottom: auto;
      top: 44px;
      left: 0;
      background: #000;
      border: 1px solid #5f5f5f;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      width: calc(100% - 10px);
      .dropdown-item {
        position: relative;
        background: transparent;
        border-bottom: 1px solid #5f5f5f;
        color: #fff;
        padding: 11px 12px 11px 40px;
        text-align: left;
        cursor: pointer;
        font-size: 0.8rem;
        &:before {
            content: '';
            position: absolute;
            height: 24px;
            width: 24px;
            left: 9px;
            bottom: 7px;
        }
        &:last-child {
          border-bottom: none;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        @media (hover: hover) {
          &:hover {
            font-weight: 600;
          }
        }
        &.active {
          background: #FFCF24;
          color: #000;
          font-weight: 600;
        }
        &.buttn-feature-risknbuy {
          &:before {
            background: url('/images/img_filter-risknbuy.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-risknbuy-black.png')no-repeat;
              background-size: contain;
            }
          }
        }
        &.buttn-feature-holdnwin {
          &:before {
            background: url('/images/img_filter-holdnwin.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-holdnwin-black.png')no-repeat;
              background-size: contain;
            }
          }          
        }
        &.buttn-feature-jackpot {
          &:before {
            background: url('/images/img_filter-jackpot.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-jackpot-black.png')no-repeat;
              background-size: contain;
            }
          }          
        }
        &.buttn-feature-rockways {
          &:before {
            background: url('/images/img_filter-rockways.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-rockways-black.png')no-repeat;
              background-size: contain;
            }
          }          
        }
        &.buttn-feature-rockfall {
          &:before {
            background: url('/images/img_filter-rockfall.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-rockfall-black.png')no-repeat;
              background-size: contain;
            }
          }          
        } 
        &.buttn-feature-boost {
          &:before {
            background: url('/images/img_filter-boost.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-boost-black.png')no-repeat;
              background-size: contain;
            }
          }          
        } 
        &.buttn-feature-nudge {
          &:before {
            background: url('/images/img_filter-nudge.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-nudge-black.png')no-repeat;
              background-size: contain;
            }
          }          
        }
        &.buttn-feature-buyfreerounds {
          &:before {
            background: url('/images/img_filter-buyfreerounds.png')no-repeat;
            background-size: contain;
          }
          &.active {
            &:before {
              background: url('/images/img_filter-buyfreerounds-black.png')no-repeat;
              background-size: contain;
            }
          }          
        }
        &[class*="buttn-gametype-"] {
          padding-left: 12px;
        }
        &.buttn-adventures:before {
          background: url("/images/img_filter-adventures.png") no-repeat;
          background-size: contain;
        }
        &.buttn-adventures:after {
          opacity: 0;
          background: #33F0B0;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-christmas:before {
          background: url("/images/img_filter-christmas.png") no-repeat;
          background-size: contain;
        }
        &.buttn-christmas:after {
          opacity: 0;
          background: #ffffff;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-easter:before {
          background: url("/images/img_filter-easter.png") no-repeat;
          background-size: contain;
        }
        &.buttn-easter:after {
          opacity: 0;
          background: #FFF648;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-fantasy:before {
          background: url("/images/img_filter-fantasy.png") no-repeat;
          background-size: contain;
        }
        &.buttn-fantasy:after {
          opacity: 0;
          background: #C400FF;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-halloween:before {
          background: url("/images/img_filter-halloween.png") no-repeat;
          background-size: contain;
        }
        &.buttn-halloween:after {
          opacity: 0;
          background: #FFC800;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-mythology:before {
          background: url("/images/img_filter-mythology.png") no-repeat;
          background-size: contain;
        }
        &.buttn-mythology:after {
          opacity: 0;
          background: #0085FF;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-postap:before {
          background: url("/images/img_filter-postap.png") no-repeat;
          background-size: contain;
        }
        &.buttn-postap:after {
          opacity: 0;
          background: #FF0004;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-space:before {
          background: url("/images/img_filter-space.png") no-repeat;
          background-size: contain;
        }
        &.buttn-space:after {
          opacity: 0;
          background: #00F0FF;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-egypt:before {
          background: url("/images/img_filter-egypt.png") no-repeat;
          background-size: contain;
        }
        &.buttn-egypt:after {
          opacity: 0;
          background: #FF43CB;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-fruits:before {
          background: url("/images/img_filter-fruits.png") no-repeat;
          background-size: contain;
        }
        &.buttn-fruits:after {
          opacity: 0;
          background: #27FF04;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-asia:before {
          background: url("/images/img_filter-asia.png") no-repeat;
          background-size: contain;
        }
        &.buttn-asia:after {
          opacity: 0;
          background: #FFD230;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-girls:before {
          background: url("/images/img_filter-girls.png") no-repeat;
          background-size: contain;
        }
        &.buttn-girls:after {
          opacity: 0;
          background: #F98DC7;
          mix-blend-mode: screen;
          filter: blur(6px);
          background-size: contain;
        }
        &.buttn-jewels:before {
          background: url("/images/img_filter-jewels.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-riot:before {
          background: url("/images/img_filter-riot.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-zeus:before {
          background: url("/images/img_filter-zeus.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-tessahunt:before {
          background: url("/images/img_filter-tessahunt.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-huntress:before {
          background: url("/images/img_filter-huntress.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-fortherealm:before {
          background: url("/images/img_filter-fortherealm.png") no-repeat;
          background-size: contain;
        }
        &.buttn-universe-joker:before {
          background: url("/images/img_filter-joker.png") no-repeat;
          background-size: contain;
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
    margin: -480px auto 0;
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
              mask-image: radial-gradient(white, black);

              img {
                border-radius: 12px;
                -webkit-mask-image: -webkit-radial-gradient(white, black);
                mask-image: radial-gradient(white, black);
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
