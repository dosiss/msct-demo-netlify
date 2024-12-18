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
            <nuxt-link :to="localePath('/games?type=tictactoe')" class="buttn buttn-blue buttn-m">{{$t('Play our games')}}</nuxt-link>
          </div>
          <div class="ttt-games__top-features">
            <div class="feature-item">Crash games</div>
            <div class="feature-item">Mines</div>
            <div class="feature-item">Plinko</div>
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8.33203 19.9997C8.33203 13.5564 13.5554 8.33301 19.9987 8.33301M27.4985 12.4997L19.9985 19.9997M36.6654 19.9997C36.6654 29.2044 29.2034 36.6663 19.9987 36.6663C10.794 36.6663 3.33203 29.2044 3.33203 19.9997C3.33203 10.7949 10.794 3.33301 19.9987 3.33301C29.2034 3.33301 36.6654 10.7949 36.6654 19.9997ZM21.6654 19.9997C21.6654 20.9201 20.9192 21.6663 19.9987 21.6663C19.0782 21.6663 18.332 20.9201 18.332 19.9997C18.332 19.0792 19.0782 18.333 19.9987 18.333C20.9192 18.333 21.6654 19.0792 21.6654 19.9997Z"/></svg>
              <span>{{$t('High Replayability')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M31.618 33.3337C33.7213 33.3337 35.428 31.6287 35.428 29.5237V21.9053L37.333 20.0003L35.428 18.0953V10.477C35.428 8.37199 33.723 6.66699 31.618 6.66699M9.715 6.66699C7.61 6.66699 5.905 8.37199 5.905 10.477V18.0953L4 20.0003L5.905 21.9053V29.5237C5.905 31.6287 7.61 33.3337 9.715 33.3337M13.1667 20.0003L17.2239 24.0575C17.5539 24.3875 17.7189 24.5525 17.9092 24.6144C18.0765 24.6687 18.2568 24.6687 18.4242 24.6144C18.6145 24.5525 18.7795 24.3875 19.1095 24.0575L28.1667 15.0003"/></svg>
              <span>{{$t('Fast &amp; Smooth')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M27.4154 12.9167H27.4237M20.332 19.5833H20.3404M13.2487 27.0833H13.257M13.332 35H27.332C30.1323 35 31.5324 35 32.602 34.455C33.5428 33.9757 34.3077 33.2108 34.7871 32.27C35.332 31.2004 35.332 29.8003 35.332 27V13C35.332 10.1997 35.332 8.79961 34.7871 7.73005C34.3077 6.78924 33.5428 6.02433 32.602 5.54497C31.5324 5 30.1323 5 27.332 5H13.332C10.5318 5 9.13164 5 8.06208 5.54497C7.12127 6.02433 6.35637 6.78924 5.877 7.73005C5.33203 8.79961 5.33203 10.1997 5.33203 13V27C5.33203 29.8003 5.33203 31.2004 5.877 32.27C6.35637 33.2108 7.12127 33.9757 8.06208 34.455C9.13164 35 10.5318 35 13.332 35ZM27.832 12.9167C27.832 13.1468 27.6455 13.3333 27.4154 13.3333C27.1852 13.3333 26.9987 13.1468 26.9987 12.9167C26.9987 12.6865 27.1852 12.5 27.4154 12.5C27.6455 12.5 27.832 12.6865 27.832 12.9167ZM20.7487 19.5833C20.7487 19.8135 20.5621 20 20.332 20C20.1019 20 19.9154 19.8135 19.9154 19.5833C19.9154 19.3532 20.1019 19.1667 20.332 19.1667C20.5621 19.1667 20.7487 19.3532 20.7487 19.5833ZM13.6654 27.0833C13.6654 27.3135 13.4788 27.5 13.2487 27.5C13.0186 27.5 12.832 27.3135 12.832 27.0833C12.832 26.8532 13.0186 26.6667 13.2487 26.6667C13.4788 26.6667 13.6654 26.8532 13.6654 27.0833Z"/></svg>
              <span>{{$t('Ranks &amp; Customization')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M7.4987 36.6663V28.333M7.4987 11.6663V3.33301M3.33203 7.49967H11.6654M3.33203 32.4997H11.6654M21.6654 4.99967L18.7751 12.5144C18.305 13.7365 18.07 14.3475 17.7046 14.8615C17.3807 15.317 16.9827 15.715 16.5272 16.0389C16.0132 16.4043 15.4022 16.6394 14.1801 17.1094L6.66536 19.9997L14.1801 22.89C15.4022 23.36 16.0132 23.595 16.5272 23.9605C16.9827 24.2844 17.3807 24.6823 17.7046 25.1379C18.07 25.6518 18.305 26.2629 18.7751 27.4849L21.6654 34.9997L24.5557 27.4849C25.0257 26.2629 25.2607 25.6518 25.6261 25.1379C25.95 24.6823 26.348 24.2844 26.8036 23.9605C27.3175 23.595 27.9285 23.36 29.1506 22.89L36.6654 19.9997L29.1506 17.1094C27.9285 16.6394 27.3175 16.4043 26.8036 16.0389C26.348 15.715 25.95 15.317 25.6261 14.8615C25.2607 14.3475 25.0257 13.7365 24.5557 12.5144L21.6654 4.99967Z"/></svg>
              <span>{{$t('Intuitive Design')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15.6667 29.1667H6.5M11.5 20H4M15.6667 10.8333H7.33333M29 5L18.0059 20.3917C17.5193 21.0729 17.276 21.4136 17.2866 21.6975C17.2957 21.9448 17.4143 22.1752 17.6102 22.3264C17.8351 22.5 18.2537 22.5 19.0909 22.5H27.3333L25.6667 35L36.6607 19.6083C37.1473 18.9271 37.3906 18.5864 37.3801 18.3025C37.3709 18.0552 37.2524 17.8248 37.0565 17.6736C36.8315 17.5 36.4129 17.5 35.5757 17.5H27.3333L29 5Z"/></svg>
              <span>{{$t('High-Speed Rounds')}}</span>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 40"><path stroke="#4382FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M26.9974 5.7796C29.4669 7.00685 31.1641 9.55523 31.1641 12.5C31.1641 15.4448 29.4669 17.9931 26.9974 19.2204M30.3307 27.944C32.8498 29.0839 35.1183 30.9416 36.9974 33.3333M3.66406 33.3333C6.90821 29.2043 11.3127 26.6667 16.1641 26.6667C21.0154 26.6667 25.4199 29.2043 28.6641 33.3333M23.6641 12.5C23.6641 16.6421 20.3062 20 16.1641 20C12.0219 20 8.66406 16.6421 8.66406 12.5C8.66406 8.35786 12.0219 5 16.1641 5C20.3062 5 23.6641 8.35786 23.6641 12.5Z"/></svg>
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
      this.title = this.$t('Mascot Gaming - Tic Tac Toe games')
      this.description = this.$t('Fast, stylish, and endlessly engaging — TTT Games by Mascot Gaming redefines iGaming for the modern player')
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
