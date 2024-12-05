<template>
  <div>
    <MainHeader />
    <div id="ttt-games">
      <div class="ttt-games__top">
        <div class="container">
          <h1 class="ttt-games__top-title">{{$t('Tic Tac Toe Games')}}</h1>
          <div class="ttt-games__top-description">
            <p>{{$t('Fast, stylish, and endlessly engaging — TTT Games by Mascot Gaming redefines iGaming for the modern player.')}}</p>
            <p>{{$t('Crafted for high-energy sessions, our games combine refined design with social features that connect players like never before. From timeless classics to bold new creations, each game captivates and entertains, striking the perfect balance of style and speed.')}}</p>
          </div>
          <div class="ttt-games__top-buttn">
            <nuxt-link :to="localePath('/games?type=all')" class="buttn buttn-blue buttn-m">{{$t('Play our games')}}</nuxt-link>
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
      <TicTacToeFeatured />
      <div class="ttt-games__features">
        <div class="container">
          <h2 class="ttt-games__features-title">{{$t('Features')}}</h2>
          <ul class="ttt-games__features-content">
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.33203 18.9997C7.33203 12.5564 12.5554 7.33301 18.9987 7.33301M26.4985 11.4997L18.9985 18.9997M35.6654 18.9997C35.6654 28.2044 28.2034 35.6663 18.9987 35.6663C9.79395 35.6663 2.33203 28.2044 2.33203 18.9997C2.33203 9.79493 9.79395 2.33301 18.9987 2.33301C28.2034 2.33301 35.6654 9.79493 35.6654 18.9997ZM20.6654 18.9997C20.6654 19.9201 19.9192 20.6663 18.9987 20.6663C18.0782 20.6663 17.332 19.9201 17.332 18.9997C17.332 18.0792 18.0782 17.333 18.9987 17.333C19.9192 17.333 20.6654 18.0792 20.6654 18.9997Z"/></svg>
              <span>{{$t('High Replayability')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 30"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M29.618 28.3337C31.7213 28.3337 33.428 26.6287 33.428 24.5237V16.9053L35.333 15.0003L33.428 13.0953V5.47699C33.428 3.37199 31.723 1.66699 29.618 1.66699M7.715 1.66699C5.61 1.66699 3.905 3.37199 3.905 5.47699V13.0953L2 15.0003L3.905 16.9053V24.5237C3.905 26.6287 5.61 28.3337 7.715 28.3337M11.1667 15.0003L15.2239 19.0575C15.5539 19.3875 15.7189 19.5525 15.9092 19.6144C16.0765 19.6687 16.2568 19.6687 16.4242 19.6144C16.6145 19.5525 16.7795 19.3875 17.1095 19.0575L26.1667 10.0003"/></svg>
              <span>{{$t('Fast &amp; Smooth')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M24.4154 9.91667H24.4237M17.332 16.5833H17.3404M10.2487 24.0833H10.257M10.332 32H24.332C27.1323 32 28.5324 32 29.602 31.455C30.5428 30.9757 31.3077 30.2108 31.7871 29.27C32.332 28.2004 32.332 26.8003 32.332 24V10C32.332 7.19974 32.332 5.79961 31.7871 4.73005C31.3077 3.78924 30.5428 3.02433 29.602 2.54497C28.5324 2 27.1323 2 24.332 2H10.332C7.53177 2 6.13164 2 5.06208 2.54497C4.12127 3.02433 3.35637 3.78924 2.877 4.73005C2.33203 5.79961 2.33203 7.19974 2.33203 10V24C2.33203 26.8003 2.33203 28.2004 2.877 29.27C3.35637 30.2108 4.12127 30.9757 5.06208 31.455C6.13164 32 7.53177 32 10.332 32ZM24.832 9.91667C24.832 10.1468 24.6455 10.3333 24.4154 10.3333C24.1852 10.3333 23.9987 10.1468 23.9987 9.91667C23.9987 9.68655 24.1852 9.5 24.4154 9.5C24.6455 9.5 24.832 9.68655 24.832 9.91667ZM17.7487 16.5833C17.7487 16.8135 17.5621 17 17.332 17C17.1019 17 16.9154 16.8135 16.9154 16.5833C16.9154 16.3532 17.1019 16.1667 17.332 16.1667C17.5621 16.1667 17.7487 16.3532 17.7487 16.5833ZM10.6654 24.0833C10.6654 24.3135 10.4788 24.5 10.2487 24.5C10.0186 24.5 9.83203 24.3135 9.83203 24.0833C9.83203 23.8532 10.0186 23.6667 10.2487 23.6667C10.4788 23.6667 10.6654 23.8532 10.6654 24.0833Z"/></svg>
              <span>{{$t('Ranks &amp; Customization')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5.4987 34.6663V26.333M5.4987 9.66634V1.33301M1.33203 5.49967H9.66536M1.33203 30.4997H9.66536M19.6654 2.99967L16.7751 10.5144C16.305 11.7365 16.07 12.3475 15.7046 12.8615C15.3807 13.317 14.9827 13.715 14.5272 14.0389C14.0132 14.4043 13.4022 14.6394 12.1801 15.1094L4.66536 17.9997L12.1801 20.89C13.4022 21.36 14.0132 21.595 14.5272 21.9605C14.9827 22.2844 15.3807 22.6823 15.7046 23.1379C16.07 23.6518 16.305 24.2629 16.7751 25.4849L19.6654 32.9997L22.5557 25.4849C23.0257 24.2629 23.2607 23.6518 23.6261 23.1379C23.95 22.6823 24.348 22.2844 24.8036 21.9605C25.3175 21.595 25.9285 21.36 27.1506 20.89L34.6654 17.9997L27.1506 15.1094C25.9285 14.6394 25.3175 14.4043 24.8036 14.0389C24.348 13.715 23.95 13.317 23.6261 12.8615C23.2607 12.3475 23.0257 11.7365 22.5557 10.5144L19.6654 2.99967Z"/></svg>
              <span>{{$t('Intuitive Design')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 34"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M13.6667 26.1667H4.5M9.5 17H2M13.6667 7.83333H5.33333M27 2L16.0059 17.3917C15.5193 18.0729 15.276 18.4136 15.2866 18.6975C15.2957 18.9448 15.4143 19.1752 15.6102 19.3264C15.8351 19.5 16.2537 19.5 17.0909 19.5H25.3333L23.6667 32L34.6607 16.6083C35.1473 15.9271 35.3906 15.5864 35.3801 15.3025C35.3709 15.0552 35.2524 14.8248 35.0565 14.6736C34.8315 14.5 34.4129 14.5 33.5757 14.5H25.3333L27 2Z"/></svg>
              <span>{{$t('High-Speed Rounds')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 32"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M24.9974 2.7796C27.4669 4.00685 29.1641 6.55523 29.1641 9.5C29.1641 12.4448 27.4669 14.9931 24.9974 16.2204M28.3307 24.944C30.8498 26.0839 33.1183 27.9416 34.9974 30.3333M1.66406 30.3333C4.90821 26.2043 9.31269 23.6667 14.1641 23.6667C19.0154 23.6667 23.4199 26.2043 26.6641 30.3333M21.6641 9.5C21.6641 13.6421 18.3062 17 14.1641 17C10.0219 17 6.66406 13.6421 6.66406 9.5C6.66406 5.35786 10.0219 2 14.1641 2C18.3062 2 21.6641 5.35786 21.6641 9.5Z"/></svg>
              <span>{{$t('Social Features')}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script>
  import TicTacToeFeatured from '~/components/TicTacToeFeatured.vue'
  export default {
    components: { TicTacToeFeatured },
    data() {
      return {
        title: '',
        description: '',

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
      this.title = this.$t('Mascot Gaming - casino games provider')
      this.description = this.$t('We are a team of like-minded people who worked in gambling sphere for many years. We love our work and respect your business. Explore our history!')
    }
  }
</script>
<style lang="scss" scoped>
  #ttt-games {
    .ttt-games__top {
      padding: 160px 0 100px;
      background: url('/images/img_ttt-games-top.jpg') no-repeat;
      background-size: cover;
      background-position: top center;
      @media (max-width: 650px) {
        padding: 100px 0 60px
      }
      .ttt-games__top-title {
        font-size: 4.5rem;
        margin-bottom: 0;
        line-height: 1;
        @media (max-width: 650px) {
          font-size: 2rem
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
              opacity: 0.4;
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
              opacity: 0.4;
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
              opacity: 0.4;
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
              opacity: 0.4;
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
              opacity: 0.4;
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
          padding: 20px;
          background: #A0ABC01F;
          display: flex;
          align-items: center;
          border-radius: 12px;
          svg {
            height: 40px;
            width: auto
          }
          span {
            font-size: 1.25rem;
            margin-left: 15px
          }
        }
      }
    }
  }
</style>
