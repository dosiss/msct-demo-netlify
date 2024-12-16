<template>
  <div>
    <MainHeader />
    <div id="ttt-games">
      <div class="ttt-games__top">
        <div class="container">
          <h1 class="ttt-games__top-title">{{$t('Tic Tac Toe Games')}}</h1>
          <div class="ttt-games__top-description">
            <p>{{$t('Fast, stylish, and endlessly engaging — TTT Games by Mascot Gaming redefines iGaming for the modern player.')}}</p>
          </div>
          <div class="ttt-games__top-buttn">
            <nuxt-link :to="localePath('/tic-tac-toe-games')" class="buttn buttn-blue buttn-m">{{$t('Learn more')}}</nuxt-link>
          </div>
          <div class="ttt-games__top-features">
            <div class="feature-item">Crash games</div>
            <div class="feature-item">Mines</div>
            <div class="feature-item">Plinco</div>
            <div class="feature-item">Double</div>
            <div class="feature-item">Dice</div>
            <div class="feature-item">and more</div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
  #ttt-games {
    .ttt-games__top {
      padding: 120px 0 100px;
      background: url('/images/img_ttt-games-top.jpg') no-repeat;
      background-size: cover;
      background-position: top center;
      @media (max-width: 650px) {
        padding: 60px 0 60px
      }
      .ttt-games__top-title {
        font-size: 4.5rem;
        margin-bottom: 0;
        line-height: 1;
        @media (max-width: 650px) {
          font-size: 2rem;
          text-align: center;
        }
      }
      .ttt-games__top-description {
        max-width: 700px;
        padding: 30px 0 20px;
        font-size: 1.12rem;
        color: #BDC7DB;
        p {
          margin-bottom: 15px;
        }
      }
      .ttt-games__top-features {
        max-width: 700px;
        margin-top: 70px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        @media (max-width: 650px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          margin-top: 50px;
        }
        .feature-item {
          padding: 20px 15px;
          border-radius: 12px;
          position: relative;
          &:nth-child(1) {

            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background:  url('/images/img_ttt-games-feat1.png') no-repeat;
              background-size: contain;
              mix-blend-mode: luminosity;
              opacity: 0.7;
            }
          }
          &:nth-child(2) {

            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background:  url('/images/img_ttt-games-feat2.png') no-repeat;
              background-position-x: right;
              background-size: contain;
              mix-blend-mode: luminosity;
              opacity: 0.7;
            }
          }
          &:nth-child(3) {

            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background:  url('/images/img_ttt-games-feat3.png') no-repeat;
              background-position-x: right;
              background-size: contain;
              mix-blend-mode: luminosity;
              opacity: 0.7;
            }
          }
          &:nth-child(4) {

            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background:  url('/images/img_ttt-games-feat4.png') no-repeat;
              background-position-x: right;
              background-size: contain;
              mix-blend-mode: luminosity;
              opacity: 0.7;
            }
          }
          &:nth-child(5) {

            &:after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background:  url('/images/img_ttt-games-feat5.png') no-repeat;
              background-position-x: right;
              background-size: contain;
              mix-blend-mode: luminosity;
              opacity: 0.7;
            }
          }
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 12px;
            background: rgba(156, 171, 201, 0.13);
            // backdrop-filter: blur(12.15px);
          }
        }
      }
    }
    .ttt-games__features {
      padding: 100px 0;
      border-bottom: 1px solid #ffffff40;
      @media (max-width: 650px) {
        padding: 50px 0;
      }
      .ttt-games__features-title {
        text-align: center;
        font-size: 2rem;
        @media (max-width: 650px) {
          font-size: 1.5rem;
          text-align: left;
        }
      }
      .ttt-games__features-content {
        margin-top: 30px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        @media (max-width: 850px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
        }
        @media (max-width: 650px) {
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(6, 1fr);
        }
        .feature-content__item {
          padding: 25px 20px;
          background: #A0ABC01F;
          display: flex;
          align-items: center;
          border-radius: 12px;
          svg {
            height: 40px;
            width: auto
          }
          span {
            font-size: 1.13rem;
            margin-left: 15px
          }
        }
      }
    }
  }
</style>
