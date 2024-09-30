<template>
  <div>
  <MainHeader />

  <div :id="`game_${currentMarket.link}`" class="market-page">
    <div class="container">
      <div class="market__wrap">
        <div class="market-flag"><img :src="`/images/flag_${currentMarket.link}.png`" alt="" /></div>
        <div class="market-content">
          <h1 class="market-content__title">{{currentMarket.title}}</h1>
          <p class="">{{$t(`${currentMarket.bodytext}`)}}</p>
          <!-- <p class="">Mascot Gaming is officially represented in Romanian GEO complying with a local regulation! Our Business Development experts in Romanian GEO regulatory are waiting to boost your iGaming business with Mascot Gaming slots, crashes and more! You can check our slots demos and other types of games listed on a games demo page. You will get it through a quick and easy API or any major iGaming platform in the market. Get in touch and we’ll make it happen in a blink of an eye!</p> -->
          <div class="market-content__footer">
            <nuxt-link :to="localePath('/games-for-regulated-markets')" class="inner-link link-yellow link-desktop">
              <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
              </svg>
              <span>{{$t('Go back')}}</span>
            </nuxt-link>
            <div class="buttns-group">
              <button class="buttn buttn-primary buttn-sm" @click="showModal = true">{{$t('Get in touch')}}</button>
              <a :href="`${demoUrl}${locPath}`" class="buttn buttn-primary buttn-colored buttn-sm">{{$t('Try demo')}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-title">{{$t(`${currentMarket.sliderTitle}`)}}:</div>
    </div>
  </div>
  <SliderMarket :id="id" />
  <div class=" all-games-link container">
    <nuxt-link :to="localePath('/games')" class="inner-link link-yellow link-desktop">
      <span>{{$t('See all games')}}</span>
      <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
      </svg>
    </nuxt-link>
  </div>
  <MainFooter />
  <ContactModal v-show="showModal" @close-modal="showModal = false"/>
  </div>
</template>

<script>

  import regulatedMarketsList from '../../static/data/regulated-markets.json'
  import regulatedMarketsListES from '../../static/data/regulated-markets_es.json'
  import regulatedMarketsListPT from '../../static/data/regulated-markets_pt-br.json'

  import ContactModal from '~/components/frontpage/ContactModal'


  export default {

//    nuxtI18n: false,

    components: {
      ContactModal
    },


    data() {
      return {
        id: this.$route.params.market,
        regulatedMarkets: regulatedMarketsList,
        demoUrl: '',
        locPath: '',
        showModal: false,

      }

    },

    head() {
      return {
        title: this.currentMarket.meta.title,
        htmlAttrs: {
            lang: this.$i18n.locale
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.currentMarket.meta.descr
          },
          { property: 'og:title', hid: "og:title", content: this.currentMarket.meta.title },
          { property: 'og:description', hid: 'og:description', content: this.currentMarket.meta.descr },
          { property: 'og:url', hid:'og:url', content: `https://mascot.games/${this.currentMarket.link}` },
          { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

          { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', hid:'twitter:title', content: this.currentMarket.meta.title },
          { name: 'twitter:description', hid:'twitter:description', content: this.currentMarket.meta.descr },
          { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        ]
      }
   },

    computed: {
      currentMarket() {
        return this.regulatedMarkets.slice().find((element) => element.link === this.id);

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
          this.regulatedMarkets = regulatedMarketsListES;
          this.locPath = '/es';
          break;
        case "pt":
          this.regulatedMarkets = regulatedMarketsListPT;
          this.locPath = '/pt';
          break;
        default:
        this.regulatedMarkets = regulatedMarketsList;
        this.locPath = '';
      }
    },







}
</script>

<style lang="scss">
.market-page {
  padding-top: 180px;
  @media (max-width: 850px) {
    padding-top: 100px;
  }
  .market__wrap {
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px) {
      flex-direction: column;
    }
    .market-flag {
      margin: 0 45px 30px;
      @media (max-width: 850px) {
        margin: 0 auto 30px;
      }
      img {
        max-width: 247px;
        height: auto
      }
    }
    .market-content {
      .market-content__title {
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 30px;
        @media (max-width: 850px) {
          text-align: center;
        }
      }
      p {
        font-size: 1.25rem;
        line-height: 1.5;
        margin-bottom: 15px
      }
      .market-content__footer {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 650px) {
          flex-direction: column;
          justify-content: center;
        }
        .inner-link {
          @media (max-width: 650px) {
            justify-content: center;
            margin-bottom: 20px;
          }
        }
        svg {
          transform: rotate(180deg);
          margin-left: 0;
          margin-right: 15px
        }
        .buttns-group {
          display: flex;
          @media (max-width: 650px) {
            flex-direction: column;
          }
          .buttn {
            text-transform: uppercase;
            margin-left: 10px;
            &.buttn-colored {
              &:hover {
                color: #000;
              }
            }
            @media (max-width: 650px) {
              width: 100%;
              margin: 10px 0;
              text-align: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
  .slider-title {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 40px 0;
  }
}
.all-games-link {
  padding-top: 30px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
</style>
