<template>
  <div class="static-wrapper">
      <div class="static-background">
          <div class="container">
              <div class="top-header__wrap">
                    <h1 class="top-header__title">Feel the<br>Gaming Thrill</h1>
                    <a class="buttn buttn-primary buttn-xl" href="https://keen-sherbet-cd2c63.netlify.app">Play our games</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.static-background {
  position: relative;
  background: url('@/static/images/img-hero-static_desktop.jpg') center top no-repeat;
  background-size: cover;
  @media (max-width: 850px) {
    background-position-x: 35%
  }
  /* @media (max-width: 1200px) {
    background: url('@/static/images/img-hero-static_pad.jpg') center top no-repeat;
  } */
  @media (max-width: 650px) {
    background: url('@/static/images/img-hero-static_mobile.jpg') center top no-repeat;
    background-size: cover
  }
  &:before {
    content: none;
    @media (max-width: 850px) {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 116px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
  }
}
.top-header__wrap {
  padding: 280px 0 300px;
  position: relative;
  @media (max-width: 850px) {
    padding: 470px 0 140px
  }
  @media (max-width: 650px) {
    padding: 335px 0 50px;
  }

  h1 {
    font-size: 4.6rem;
    margin-bottom: 70px;
    line-height: 1.5;
    @media (max-width: 850px) {
      font-size: 3.75rem;
      margin-bottom: 40px
    }
    @media (max-width: 650px) {
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-bottom: 10px
    }
  }
  .buttn {
    @media (max-width: 650px) {
    width: 100%;
    text-align: center;
      }

  }
}
</style>
