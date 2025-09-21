<template>
  <div v-if="hasPromoPartners" class="playpartners__wrap container">
    <div class="partners__head">
      <h2 class="partners__head-title game-subtitle">{{$t('Check out our Partners` offers')}}</h2>
      <nuxt-link :to="localePath('/bonuses')" class="inner-link link-yellow link-desktop">
        <span>{{$t('Other casino bonuses')}}</span>
        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
        </svg>
      </nuxt-link>
    </div>
    <div class="partners__content-wrap">
      <div class="partners__content">
        <div v-for="(partner, idx) in promoPartners" :key="idx" class="partner__wrap promopartner">
          <div class="partners-card">
            <div class="partner-content">
              <div class="partner-logo"><img :src="`/images/${partner.logoUrl}`" :alt="`${partner.name}`" /></div>
              <div class="partner-offer">{{partner.promoText}}</div>
            </div>
            <a :href="`${partner.url}`" class="buttn buttn-primary buttn-sm" target="_blank">{{ `${partner.name}` == 'Gama' ? "Claim bonus" : $t('Claim Bonus!') }}</a>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link :to="localePath('/bonuses')" class="inner-link link-yellow link-mobile">
      <span>{{ $device.isMobile ? $t('Other casino bonuses') : $t('Other casino bonuses') }}</span>
      <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
 import allPartners from '../static/data/partners.json'

 export default {

   data() {
     return {
     hasPromoPartners: false,
      partnersList: allPartners,
      promoPartners: []
     }

   },

   mounted() {
     const promoPartners = allPartners.filter(val => (val.promo !== false)).slice(0,8);

     if( promoPartners.length ) {
       this.hasPromoPartners = true;
       this.promoPartners = promoPartners

     }
   },


   // computed: {
   //     promoPartners() {
   //     return allPartners.filter(val => (val.promo !== false)).slice(0,4)
   //   }
   // },

}
</script>

<style lang="scss">
.playpartners__wrap {
  padding-top: 0;
  @media (max-width: 650px) {
    padding-top: 0
  }
  .inner-link {
    &.link-desktop {
      display: flex;
      flex: 0 1 335px;
      justify-content: flex-end;
      @media (max-width: 850px) {
        display: none
      }
      span {
        text-align: right
      }
    }
    &.link-mobile {
      display: none;
      @media (max-width: 850px) {
        display: flex;
        margin-top: 30px;
        justify-content: center;
      }
    }
  }
  .partner__wrap {
    &.promopartner {
      width: 100%;
      min-height: 321px
    }
  }
  .partners__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 850px) {
      justify-content: center;
    }

    .partners__head-title {
      font-size: 2.12rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem;
        text-align: center;
      }
    }

  }
  .partners__content {
    display: grid;
    justify-items: start;
    grid-template-columns: repeat(3, 32.5%);
    grid-gap: 20px;
    gap: 20px;
    justify-content: center;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 33%);
    }
    @media (max-width: 850px) {
      grid-template-columns: repeat(2, 48%);
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      justify-items: center
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



</style>
