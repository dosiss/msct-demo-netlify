<template>

  <div>
    <MainHeader />
    <div id="regMarkets">
      <div class="container">
        <h1>{{$t('Casino games for regulated markets')}}</h1>
        <p class="heading-subtitle">{{$t('According to our plan to win the love of every player around the world, here’s a list of our casino game offerings for online casinos in regulated markets. If you`re looking for high-performing slots with easy API integration, you’ve just found the solution!')}}</p>
        <div class="regmarkets__wrap">
            <div v-for="(market, idx) in regulatedMarkets" :key="idx" class="regmarkets-item">
              <div class="regmarkets-item-inner" :style="{ backgroundImage: `url(/images/img_min_${market.name}.png)` }">
                <nuxt-link :to="`${locPath}/games-for-regulated-markets/${market.link}`">
                  <h2 class="regmarkets-item__title">{{$t(`${market.title}`)}}</h2>
                </nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>
    <SharingButtons />
    <AdBannerSigmaEurope />
    <MainFooter />
  </div>
</template>

<script>

import regulatedMarketsList from '../../static/data/regulated-markets.json'
import regulatedMarketsListES from '../../static/data/regulated-markets_es.json'
import regulatedMarketsListPT from '../../static/data/regulated-markets_pt-br.json'


  export default {
    // page component definitions
    data() {
      return {
        title: '',
        description: '',
        regulatedMarkets: regulatedMarketsList,
        locPath: '',
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
          }
        ]
      }
    },
    mounted() {
      this.title = this.$t('Mascot Gaming Offerings for Regulated Markets')
      this.description = this.$t('Discover high-performing slots with easy API integration for online casinos in regulated markets.')

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
    }
  }
</script>
<style lang="scss" scoped>
  #regMarkets {
    padding-top: 120px;
    padding-bottom: 0;
    @media (max-width: 650px) {
      padding-top: 80px

    }
    h1 {
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;

    }
    .heading-subtitle {
      font-size: 1.25rem;
      line-height: 1.5;
      text-align: center;
      max-width: 900px;
      margin: 30px auto
    }
    .regmarkets__wrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-top: 60px;
      @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .regmarkets-item {

        .regmarkets-item-inner {
          background-size: cover;
          background-repeat: no-repeat;
          height: 370px;
          text-align: center;
          border-radius: 30px;
          background-position-y: -50px;
          a {
            display: block;
            height: 100%;
            .regmarkets-item__title {
              padding: 30px 25px;
              text-transform: uppercase;
              font-size: 1.3rem;
            }
          }
          @media (max-width: 1800px) {
            background-position-y: 0;
          }
        }
      }
    }
  }
</style>
