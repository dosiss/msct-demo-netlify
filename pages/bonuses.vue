<template>
  <div>
    <MainHeader />
    <div>

      <div class="container-outer">
        <div class="container-wide">
            <div class="partners__head">
              <h1 class="partners__head-title">{{ pageTitle }}</h1>
            </div>
        </div>
      </div>
      <div class="container-wide">
        <div class="all-partners">
            <div class="all-partners__content">
              <div v-for="(partner, idx) in promo" :key="idx" class="promopartner partner__wrap">
                <div class="partners-card">
                  <div class="partner-content">
                    <div class="partner-logo"><img :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" loading="lazy" /></div>
                    <div class="partner-offer">{{partner.promoText}}</div>
                  </div>
                  <a :href="`${partner.url}`" class="buttn buttn-primary buttn-sm" target="_blank">{{ `${partner.name}` == 'Gama' ? "Claim bonus" : $t('Claim Bonus!') }}</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <SharingButtons />
    <AdBanner />
    <MainFooter />
    <ContactModalPartner v-show="showModal" @close-modal="showModal = false"/>

  </div>

</template>

<script>


import allPartners from '../static/data/partners.json';
import ContactModalPartner from '~/components/frontpage/ContactModalPartner'



export default {

  components: {
    ContactModalPartner
  },

  data() {


    return {
      // title: '',
      // description: '',
      showModal: false,
      pageTitle: ' '


    }
  },
  head() {
    return {
      title: this.$t('Bonuses'),
      htmlAttrs: {
          lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')
        }
      ]
    }
  },

  computed: {
      promo() {
        return allPartners.filter((partner) => partner.promo === true && partner.type === "promopartner")
      },
  },
  mounted() {
    // this.title = this.$t('Bonuses')
    // this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')

    const menuVariant = sessionStorage.getItem('ab_test_menu_item_test_2025_variant');
    // console.log('selected variant:', menuVariant);
    if (menuVariant && menuVariant === 'variantA') {
      this.pageTitle = this.$t('Casino Bonuses');
    } else {
      this.pageTitle = this.$t('Casino Bonuses');
    }

  },
  methods: {

  }

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
          width: 30%;
          @media (max-width: 850px) {
            width: 45%
          }
          @media (max-width: 650px) {
            width: 100%
          }
          .partners-card {
            background: #fff;
            padding: 12px 12px 20px;
            border: 1px solid #db001d;
            border-radius: 5px;
            text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 550px) {
              justify-self: stretch;
            }
            .partner-logo {
              // max-height: 230px;
              height: 182px;
              background: url('/images/img_bonuses-back.png'), #000;
              background-repeat: no-repeat;
              background-size: cover;
              display: flex;
              align-items: center;
              border: 1px solid #DB001D;
              border-radius: 5px;
              img {
                // width: 100%;
                border-radius: 5px;
                display: block;
                max-height: 178px;
                margin: 2px auto;
              }
            }
            .partner-offer {
              // font-size: 1.12rem;
              // line-height: 25px;
              // margin-top: 40px;
              // margin-bottom: 20px;
              // color: #000;
              font-size: .88rem;
              line-height: 1.4;
              color: #121212;
              margin: 25px 0 15px;
              padding: 0;
              white-space: pre-wrap
            }
            .buttn-sm {
              padding: 15px;
              // max-width: 200px;
              width: 152px;
              font-size: .88rem;
              margin: 0 auto;
              // width: 200px
            }
          }
        }
      }
    }
  }
</style>
