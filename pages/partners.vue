<template>

  <div>
    <MainHeader />
    <div>

      <div class="container-outer">
        <div class="container container-narrow">
            <div class="partners__head">
              <h1 class="partners__head-title">{{title}}</h1>
            </div>
        </div>
        <div class="container container-filter container-narrow">
          <div class="partners-filter__outer">
            <div class="partners-filter__wrap">
              <button :class="{ active: partnerFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'all'">All</button>
              <button :class="{ active: partnerFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'top'">Тор</button>
              <button :class="{ active: partnerFilterKey == 'media' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'media'">Media</button>
              <button :class="{ active: partnerFilterKey == 'casino' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'casino'">Casino</button>
              <button :class="{ active: partnerFilterKey == 'platform' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'platform'">Platform</button>
              <button :class="{ active: partnerFilterKey == 'promo' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'promo'">Promo</button>
            </div>
          </div>
        </div>


      </div>
      <div class="container ">
        <div class="all-partners">
            <div class="all-partners__content">
              <div v-for="(partner, idx) in partnersFilter" :key="idx" :class="{ promopartner: partnerFilterKey == 'promo' }" class="partner__wrap">
                <a v-if="partnerFilterKey !== 'promo'" :href="`${partner.url}`" target="_blank" rel="nofollow noreferrer">
                    <img :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" >
                </a>
                <div v-else class="partners-card">
                  <div class="partner-logo"><img :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" /></div>
                  <div class="partner-offer">{{partner.promoText}}</div>
                  <a :href="`${partner.url}`" class="buttn buttn-primary buttn-sm">Claim Bonus</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <SharingButtons />
    <AdBanner />
    <MainFooter />
  </div>

</template>

<script>
import allPartners from '../static/data/partners_full.json'

export default {


  data() {


    return {
      title: 'Partners',
      partnersList: allPartners,
      partnerFilterKey: 'all',


    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },

  computed: {

      partnersFilter() {
    	  return this[this.partnerFilterKey]
     },
      all() {
        return allPartners.filter((partner) => partner.promo === false)
      },
      top() {
        return allPartners.filter((partner) => partner.top === true)
      },
      media() {
        return allPartners.filter((partner) => partner.type === "media")
      },
      casino() {
        return allPartners.filter((partner) => partner.casino === true)
      },
      platform() {
        return allPartners.filter((partner) => partner.platform === true)
      },
      promo() {
        return allPartners.filter((partner) => partner.promo === true)
      },
  },

  mounted() {
        if(this.$route.query.type === "trafficgames") {
          this.partnerFilterKey = "traffic"
        };
        if(this.$route.query.type === "profitgames") {
          this.partnerFilterKey = "profit"
        };
        if(this.$route.query.type === "promo") {
          this.partnerFilterKey = "promo"
        };
  },
}

</script>

<style lang="scss" scoped>
.container-outer {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  @media (max-width: 650px) {
    margin-top: 90px
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
  .partners-filter__outer {
    @media (max-width: 1200px) {
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }
}
.partners-filter__outer::-webkit-scrollbar {
  display: none
}
  .partners-filter__wrap {
    display: flex;
    margin-bottom: 60px;
    justify-content: space-between;
    @media (min-width: 1980px) {
      width: 1490px
    }
    @media (max-width: 980px) {
      justify-content: flex-start;
      width: 125%;
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
  .partners__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (min-width: 1980px) {
      width: 1490px
    }
    @media (max-width: 650px) {
      margin-bottom: 0
    }
    .partners__head-title {
      font-size: 3.75rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem
      }
    }
  }
  .partners__list-outer {
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .partners__list-outer::-webkit-scrollbar {
    display: none
  }
  .all-partners {
    padding: 0;
    max-width: 1690px;
    margin: 0 auto;
    @media (max-width: 850px) {
      padding-top: 10px;

    }
    .all-partners__content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .partner__wrap {
        width: 27%;
        margin: 15px 20px;
        text-align: center;
        @media (min-width: 1700px) {
          width: 21%
        }
        @media (max-width: 650px) {
          width: 40%;
          margin: 5px 15px;
        }
        a {
          display: block;
          img {
            border-radius: 6px
          }
        }
        &.promopartner {
          margin: 10px;
          width: 23%;
          @media (max-width: 850px) {
            width: 45%
          }
          @media (max-width: 650px) {
            width: 100%
          }
          .partners-card {

            background: #fff;
            border-radius: 7px;
            text-align: center;
            padding: 15px 15px 25px;
            @media (max-width: 550px) {
              justify-self: stretch;
            }
            .partner-logo {
              height: 120px;
              display: flex;
              align-items: center;
              img {
                width: 100%;
              }
            }
            .partner-offer {
              font-size: 1.12rem;
              line-height: 25px;
              margin-top: 40px;
              margin-bottom: 20px;
              color: #000
            }
            .buttn-sm {
              padding: 15px;
              max-width: 200px;
              font-size: 1.05rem;
              margin: 0 auto
            }
          }
        }
      }
    }
  }
</style>
