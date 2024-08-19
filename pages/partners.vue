<template>

  <div>
    <MainHeader />
    <div>

      <div class="container-outer">
        <div class="container container-narrow">
            <div class="partners__head">
              <h1 class="partners__head-title">{{$t('Partners')}}</h1>
              <a class="buttn buttn-primary buttn-m" @click="showModal = true">{{$t('Become a partner')}}</a>
            </div>
        </div>
        <div class="container container-filter container-narrow">
          <div class="partners-filter__outer">
            <div class="partners-filter__wrap">
              <button :class="{ active: partnerFilterKey == 'all' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'all'">{{$t('All')}}</button>
              <button :class="{ active: partnerFilterKey == 'top' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'top'">{{$t('Top')}}</button>
              <button :class="{ active: partnerFilterKey == 'media' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'media'">{{$t('Media')}}</button>
              <button :class="{ active: partnerFilterKey == 'casino' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'casino'">{{$t('Casinos')}}</button>
              <button :class="{ active: partnerFilterKey == 'platform' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'platform'">{{$t('Platforms')}}</button>
              <button :class="{ active: partnerFilterKey == 'streamers' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'streamers'">{{$t('Streamers')}}</button>
              <button :class="{ active: partnerFilterKey == 'promo' }" class="buttn buttn-rounded buttn-sm" @click="partnerFilterKey = 'promo'">{{$t('Promotions')}}</button>
            </div>
          </div>
        </div>


      </div>
      <div class="container ">
        <div class="all-partners">
            <div class="all-partners__content">
              <div v-for="(partner, idx) in partnersFilter" :key="idx" :class="{ promopartner: partnerFilterKey == 'promo' }" class="partner__wrap">
                <a v-if="partnerFilterKey !== 'promo'" :href="`${partner.url}`" target="_blank" :rel="(`${partner.type}` == 'media') ? 'dofollow' : 'nofollow noreferrer'">
                    <v-lazy-image :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" loading="lazy" />
                </a>
                <div v-else class="partners-card">
                  <div class="partner-logo"><img :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" loading="lazy" /></div>
                  <div class="partner-offer">{{partner.promoText}}</div>
                  <a :href="`${partner.url}`" class="buttn buttn-primary buttn-sm" target="_blank">{{ `${partner.name}` == 'Gama' ? "Claim bonus" : $t('More info') }}</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <SharingButtons />
    <AdBannerSigmaEurope />
    <MainFooter />
    <ContactModalPartner v-show="showModal" @close-modal="showModal = false"/>

  </div>

</template>

<script>
import VLazyImage from "v-lazy-image/v2";

import allPartners from '../static/data/partners.json';
import ContactModalPartner from '~/components/frontpage/ContactModalPartner'



export default {

  components: {
    VLazyImage,
    ContactModalPartner
  },

  data() {


    return {
      title: '',
      description: '',
      partnersList: allPartners,
      partnerFilterKey: 'all',
      showModal: false


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

  computed: {

      partnersFilter() {
    	  return this[this.partnerFilterKey]
     },
      all() {
        return allPartners.filter((partner) => partner.promo === false && partner.type !== "promopartner")
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
      streamers() {
        return allPartners.filter((partner) => partner.type === "streamers")
      },
      promo() {
        return allPartners.filter((partner) => partner.promo === true && partner.type === "promopartner")
      },
  },

  mounted() {
    this.title = this.$t('Partners')
    this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')

        if(this.$route.query.type === "trafficgames") {
          this.partnerFilterKey = "traffic"
        };
        if(this.$route.query.type === "profitgames") {
          this.partnerFilterKey = "profit"
        };
        if(this.$route.query.type === "promo") {
          this.partnerFilterKey = "promo"
        };
        if(this.$route.query.type === "top") {
          this.partnerFilterKey = "top"
        };
        if(this.$route.query.type === "media") {
          this.partnerFilterKey = "media"
        };
        if(this.$route.query.type === "casino") {
          this.partnerFilterKey = "casino"
        };
        if(this.$route.query.type === "platform") {
          this.partnerFilterKey = "platform"
        };
        if(this.$route.query.type === "streamers") {
          this.partnerFilterKey = "streamers"
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
    @media (min-width: 1980px) {
      width: 1490px
    }
    @media (max-width: 980px) {
      justify-content: flex-start;
      width: 125%;
    }
    @media (max-width: 650px) {
      width: 285%;
      margin-bottom: 10px;
      margin-top: 20px
    }

    .buttn {
      width: 90px;
      margin-right: 20px;
      &:not(:first-child) {
        width: 130px;
        @media (max-width: 1650px) {
          width: 110px
        }
        @media (max-width: 1500px) {
          width: 100px
        }
        @media (max-width: 650px) {
          width: 120px
        }
      }
    }
  }
  .partners__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    align-items: center;
    @media (min-width: 1980px) {
      width: 1490px
    }
    @media (max-width: 650px) {
      margin-bottom: 0;
      flex-direction: column;
    }
    .partners__head-title {
      font-size: 3.75rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem
      }
    }
    .buttn {
      &.buttn-primary {
        &.buttn-m {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.3;
          padding: 14px 15px;
          width: 230px;
          @media (max-width: 650px) {
            padding: 11px 0;
            margin-top: 23px;
            margin-bottom: 20px;
            width: 100%;
            font-size: 15px;
          }
        }
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
            border-radius: 6px;
            &.v-lazy-image {
              filter: blur(10px);
              transition: filter 0.5s;
            }
            &.v-lazy-image-loaded {
              filter: blur(0);
            }
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
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 550px) {
              justify-self: stretch;
            }
            .partner-logo {
              height: 120px;
              display: flex;
              align-items: center;
              img {
                width: 100%;
                border-radius: 8px
              }
            }
            .partner-offer {
              font-size: 1.12rem;
              line-height: 25px;
              margin-top: 40px;
              margin-bottom: 20px;
              color: #000;
              white-space: pre-wrap
            }
            .buttn-sm {
              padding: 15px;
              max-width: 200px;
              font-size: 1.05rem;
              margin: 0 auto;
              width: 200px
            }
          }
        }
      }
    }
  }
</style>
