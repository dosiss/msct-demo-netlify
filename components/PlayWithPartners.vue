<template>
  <div class="playpartners__wrap container">
    <div class="partners__head">
      <h2 class="partners__head-title game-subtitle">Play with our Partners</h2>
      <nuxt-link to="#" class="inner-link link-yellow link-desktop">
        <span>More selected casino offerings</span>
        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
        </svg>
      </nuxt-link>
    </div>
    <div class="partners__content-wrap">
      <div class="partners__content">
      <div class="partners-card">
        <div class="partner-logo"><nuxt-img src="images/partner_logo_favb.png" alt="Favbet" /></div>
        <div class="partner-offer">Deposit with $100 and Play with $200 + Free Spins</div>
        <a href="#" class="buttn buttn-primary buttn-sm">Claim Bonus</a>
      </div>
      <div class="partners-card">
        <div class="partner-logo"><nuxt-img src="images/partner_logo_parimatch.png"  alt="PariMatch" /></div>
        <div class="partner-offer">Deposit with $100 and Play with $200 + Free Spins</div>
        <a href="#" class="buttn buttn-primary buttn-sm">Claim Bonus</a>
      </div>
      <div class="partners-card">
        <div class="partner-logo"><nuxt-img src="images/partner_logo_pinup.jpg" alt="PinUp Casino" /></div>
        <div class="partner-offer">Deposit with $100 and Play with $200 + Free Spins</div>
        <a href="#" class="buttn buttn-primary buttn-sm">Claim Bonus</a>
      </div>
      <div class="partners-card">
        <div class="partner-logo"><nuxt-img src="images/partner_logo_softswiss.png" alt="Softswiss" /></div>
        <div class="partner-offer">Deposit with $100 and Play with $200 + Free Spins</div>
        <a href="#" class="buttn buttn-primary buttn-sm">Claim Bonus</a>
      </div>
    </div>
    </div>
    <nuxt-link to="#" class="inner-link link-yellow link-mobile">
      <span>{{ $device.isMobile ? "More offerings" : "More selected casino offerings" }}</span>
      <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
 export default {

}
</script>

<style lang="scss">
.playpartners__wrap {
  padding-top: 100px;
  @media (max-width: 650px) {
    padding-top: 60px
  }
  .inner-link {
    &.link-desktop {
      display: flex;
      @media (max-width: 850px) {
        display: none
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
    grid-template-columns: repeat(4, 23.5%);
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



</style>
