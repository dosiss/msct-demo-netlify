<template>
  <div>
    <MainHeader />
    <div id="ttt-games">
      <div class="ttt-games__top">
        <div class="container">
          <h1 class="ttt-games__top-title">{{$t('Tic Tac Toe Games')}}</h1>
          <div class="ttt-games__top-description">
            <p>{{$t('Fast, stylish, and social iGaming built for today’s player')}}</p>
          </div>
          <div class="ttt-games__top-buttn">
            <a class="buttn buttn-blue buttn-m" @click="showModal = true">{{$t('add to your casino')}}</a>
            <nuxt-link :to="localePath('/games?type=tictactoe')" class="buttn buttn-white buttn-m">{{$t('Play demo')}}</nuxt-link>
          </div>
          <!-- <div class="ttt-games__top-features">
            <div class="feature-item">{{$t('Crash games')}}</div>
            <div class="feature-item">Mines</div>
            <div class="feature-item">Plinko</div>
            <div class="feature-item">Double</div>
            <div class="feature-item">Dice</div>
            <div class="feature-item">{{$t('and more')}}</div>
          </div> -->
          <div class="ttt-games__key-features">
            <div class="key-feature__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path stroke="#9EF29E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 23.333H4.667m4-7.333h-6M12 8.667H5.333M22.667 4 13.87 16.313c-.389.545-.584.818-.575 1.045a.666.666 0 0 0 .259.503c.18.139.514.139 1.184.139h6.594L20 28l8.795-12.313c.39-.545.584-.818.576-1.045a.667.667 0 0 0-.26-.503C28.932 14 28.598 14 27.928 14h-6.594l1.334-10Z"/></svg>
              <span>{{$t('Fast integration')}}</span>
            </div>
            <div class="key-feature__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path stroke="#84BEFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M8 14.667h5.334M10.668 12v5.333M20 16h.013m3.987-2.667h.013M13.933 6.667h4.136c3.5 0 5.25 0 6.623.663a6.666 6.666 0 0 1 2.883 2.684c.76 1.323.884 3.069 1.134 6.56l.328 4.592a3.89 3.89 0 0 1-6.87 2.768l-.5-.6c-.457-.55-.686-.824-.946-1.046a4 4 0 0 0-1.914-.896c-.337-.059-.695-.059-1.41-.059h-2.793c-.714 0-1.072 0-1.409.059a4 4 0 0 0-1.914.896c-.26.222-.49.496-.947 1.045l-.5.6a3.89 3.89 0 0 1-6.869-2.767l.328-4.593c.25-3.49.374-5.236 1.134-6.559A6.667 6.667 0 0 1 7.309 7.33c1.374-.663 3.124-.663 6.624-.663Z"/></svg>
              <span>{{$t('Unique mechanics')}}</span>
            </div>
            <div class="key-feature__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 32"><path stroke="#FFAE51" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M14.227 22.914h.013m-4.79 5.658h9.554c1.409 0 2.113 0 2.65-.274a2.514 2.514 0 0 0 1.1-1.1c.273-.537.273-1.241.273-2.65V7.453c0-1.409 0-2.113-.274-2.65a2.514 2.514 0 0 0-1.099-1.1c-.537-.273-1.241-.273-2.65-.273H9.45c-1.408 0-2.112 0-2.65.274a2.514 2.514 0 0 0-1.099 1.099c-.274.537-.274 1.241-.274 2.65v17.097c0 1.408 0 2.112.274 2.65.241.473.626.857 1.1 1.098.537.275 1.241.275 2.65.275Zm5.406-5.658a.629.629 0 1 1-1.257 0 .629.629 0 0 1 1.257 0Z"/></svg>
              <span>{{$t('Mobile optimized')}}</span>
            </div>
          </div>
        </div>
      </div>
      <TicTacToeFeatured />
      <div class="ttt-games__features">
        <div class="container">
          <h2 class="ttt-games__features-title">{{$t('What Sets Us Apart')}}</h2>
          <ul class="ttt-games__features-content">
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#9EF29E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M34.046 36.667a4.191 4.191 0 0 0 4.191-4.191v-8.38L40.333 22l-2.096-2.096v-8.38a4.19 4.19 0 0 0-4.19-4.19m-24.094 0a4.19 4.19 0 0 0-4.191 4.19v8.38L3.667 22l2.095 2.095v8.38a4.19 4.19 0 0 0 4.191 4.192M13.75 22l4.463 4.463c.363.363.544.544.754.612.184.06.382.06.566 0 .21-.068.39-.25.754-.612L30.25 16.5"/></svg>
              <div class="feature-content__item-title">{{$t('Seamless Integration')}}</div>
              <div class="feature-content__item-descr">{{$t('A straightforward API/SDK approach for')}} <NuxtLink to="/blog/casino-game-integration"> {{$t('casino game integration')}}</NuxtLink> {{$t('to fit common wallet, account, and bonus systems with minimal engineering lift.')}}</div>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#84BEFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M29.792 14.208h.009M22 21.542h.01m-7.802 8.25h.01M14.3 38.5h15.4c3.08 0 4.62 0 5.797-.6a5.5 5.5 0 0 0 2.404-2.403c.599-1.177.599-2.717.599-5.797V14.3c0-3.08 0-4.62-.6-5.797A5.5 5.5 0 0 0 35.498 6.1C34.32 5.5 32.78 5.5 29.7 5.5H14.3c-3.08 0-4.62 0-5.797.6A5.5 5.5 0 0 0 6.1 8.502C5.5 9.68 5.5 11.22 5.5 14.3v15.4c0 3.08 0 4.62.6 5.797A5.5 5.5 0 0 0 8.502 37.9c1.177.599 2.717.599 5.797.599Zm15.95-24.292a.458.458 0 1 1-.917 0 .458.458 0 0 1 .917 0Zm-7.792 7.334a.458.458 0 1 1-.916 0 .458.458 0 0 1 .916 0Zm-7.791 8.25a.458.458 0 1 1-.917 0 .458.458 0 0 1 .917 0Z"/></svg>
              <div class="feature-content__item-title">{{$t('Innovative Gameplay Mechanics')}}</div>
              <div class="feature-content__item-descr">{{$t('We push beyond standard formats and')}} <a href="https://mascot.games"> {{$t('iGaming solutions')}}</a> {{$t('with original twists like step-by-step crash, customizable Plinko boards, and physics-driven arenas.')}}</div>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#FFC380" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M9.166 22c0-7.088 5.746-12.833 12.834-12.833m8.25 4.583L22 22m18.333 0c0 10.125-8.208 18.333-18.333 18.333-10.125 0-18.334-8.208-18.334-18.333C3.666 11.875 11.875 3.667 22 3.667S40.333 11.875 40.333 22Zm-16.5 0a1.833 1.833 0 1 1-3.666 0 1.833 1.833 0 0 1 3.666 0Z"/></svg>              <div class="feature-content__item-title">{{$t('LiveOps & Promotions')}}</div>
              <div class="feature-content__item-descr">{{$t('Built-in hooks for events, leaderboards, time-limited modes, and seasonal content to drive recurring spikes and re-engagement.')}}</div>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#E680FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M8.25 40.333v-9.166m0-18.334V3.667M3.667 8.25h9.166m-9.167 27.5h9.167m11-30.25-3.18 8.266c-.516 1.345-.775 2.017-1.177 2.582a5.501 5.501 0 0 1-1.295 1.295c-.565.402-1.237.66-2.582 1.178L7.333 22l8.266 3.18c1.345.516 2.017.775 2.582 1.177.501.356.939.794 1.295 1.295.402.565.66 1.238 1.178 2.582l3.18 8.266 3.178-8.266c.517-1.345.776-2.017 1.178-2.582a5.5 5.5 0 0 1 1.295-1.295c.566-.402 1.238-.66 2.582-1.178L40.333 22l-8.266-3.18c-1.344-.516-2.017-.775-2.582-1.177a5.501 5.501 0 0 1-1.295-1.295c-.402-.565-.66-1.237-1.178-2.582L23.834 5.5Z"/></svg>
              <div class="feature-content__item-title">{{$t('Custom Theming & White-Label')}}</div>
              <div class="feature-content__item-descr">{{$t('Flexible UI skins, brand colors, and layout variants so the experience matches your product ecosystem.')}}</div>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#FA9FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M29.333 6.358a8.25 8.25 0 0 1 4.584 7.392 8.25 8.25 0 0 1-4.584 7.392M33 30.738c2.77 1.254 5.266 3.298 7.333 5.929m-36.666 0c3.568-4.542 8.413-7.334 13.75-7.334 5.336 0 10.18 2.792 13.75 7.334m-5.5-22.917a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z"/></svg>
              <div class="feature-content__item-title">{{$t('High Player Engagement')}}</div>
              <div class="feature-content__item-descr">{{$t('Replayability is maximized through ranks, leaderboards, and social features that connect players in dynamic competitions.')}}</div>
            </li>
            <li class="feature-content__item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44"><path stroke="#9EF29E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.444" d="M16.5 32.083H6.416M11.916 22h-8.25M16.5 11.917H7.333M31.167 5.5 19.072 22.43c-.535.75-.803 1.125-.791 1.437.01.272.14.526.356.692.247.191.708.191 1.628.191h9.067L27.5 38.5l12.093-16.93c.536-.75.803-1.125.792-1.437a.917.917 0 0 0-.356-.692c-.248-.191-.708-.191-1.63-.191h-9.066L31.167 5.5Z"/></svg>
              <div class="feature-content__item-title">{{$t('Lightweight Client, Instant Start')}}</div>
              <div class="feature-content__item-descr">{{$t('Optimized assets and rendering for fast loads, low bandwidth usage, and stable frame times across mid-range and legacy devices.')}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <MainFooter />

    <ContactModal v-show="showModal" @close-modal="showModal = false"/>

  </div>
</template>

<script>
  import TicTacToeFeatured from '~/components/TicTacToeFeatured.vue'
  import ContactModal from '~/components/frontpage/ContactModal'

  export default {
    components: {
      TicTacToeFeatured,
      ContactModal
     },
    data() {
      return {
        title: '',
        description: '',
        showModal: false,

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
      background: url('/images/img_ttt-games-top3.jpg') no-repeat;
      background-size: cover;
      background-position: top center;
      @media (max-width: 650px) {
        padding: 100px 0 60px;
        background: url('/images/img_ttt-games-top3-mob.jpg') no-repeat;
        background-size: 100%;
        background-position-y: bottom;
      }
      .ttt-games__top-buttn {
        display: flex;
        align-items: center;
        @media (max-width: 650px) {
          flex-direction: column;
          gap: 15px
        }
        .buttn-blue {
          width: 285px;
          margin-right: 15px;
          font-size: 1.13rem;
          background: radial-gradient(18.6% 42.59% at 8.95% 23.21%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), #38A5EE;
          @media (max-width: 650px) {
            width: 100%;
            margin-right: 0;
            font-size: .9rem
          }
          &.buttn-m {
            @media (max-width: 650px) {
              padding-top: 19px;
              padding-bottom: 19px;
            }
          }
          &:hover {
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), radial-gradient(18.6% 42.59% at 8.95% 23.21%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), #38A5EE;
          }
          &:active {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09)), radial-gradient(18.6% 42.59% at 8.95% 23.21%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%), #38A5EE;
          }
        }
        .buttn-white {
          width: 188px;
          font-size: 1.13rem;
          background: rgba(184, 201, 251, 0.25);
          color: #fff;
          @media (max-width: 650px) {
            width: 100%;
            font-size: .9rem
          }
          &.buttn-m {
            @media (max-width: 650px) {
              padding-top: 19px;
              padding-bottom: 19px;
            }
          }
          &:hover {
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), rgba(184, 201, 251, 0.25);
          }
          &:active {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09)), rgba(184, 201, 251, 0.25);
          }
        }
      }
      .ttt-games__top-title {
        font-size: 4.5rem;
        margin-bottom: 0;
        line-height: 1;
        @media (max-width: 650px) {
          font-size: 2.3rem
        }
      }
      .ttt-games__top-description {
        max-width: 700px;
        padding: 30px 0 30px;
        @media (max-width: 650px) {
          padding-bottom: 60px
        }
        p {
          margin-bottom: 15px;
          font-size: 1.25rem;
          color: #fff;
          opacity: .8;
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
      .ttt-games__key-features {
        display: flex;
        padding: 90px 0 0 0;
        @media (max-width: 650px) {
          flex-direction: column;
          align-items: center;
        }
        .key-feature__item {
          display: flex;
          align-items: center;
          column-gap: 10px;
          margin-right: 24px;
          @media (max-width: 650px) {
            margin-bottom: 20px;
            margin-right: 0
          }
          svg {
            width: auto;
            height: 32px;
          }
          span {
            font-size: 1.1rem;
            color: #E7EDFE
          }
          &:nth-child(2) {
           padding:  0 20px;
           margin-right: 16px;
           border-right: 1px solid #B8C9FB40;
           border-left: 1px solid #B8C9FB40;
           @media (max-width: 650px) {
             border-right: none;
             border-left: none;
             margin-right: 0
           }
          }
        }
      }
    }
    .ttt-games__features {
      overflow-x: hidden;
      position: relative;
      z-index: 0;
      padding: 80px 0;
      border-bottom: 1px solid #ffffff40;
      background: #151826;
      @media (max-width: 650px) {
        padding: 50px 0;
        text-align: center;
      }
      .ttt-games__features-title {
        text-align: center;
        font-size: 2rem;
        @media (max-width: 650px) {
          font-size: 1.5rem;
        }
      }
      .ttt-games__features-content {
        position: relative;
        z-index: 2;
        margin-top: 35px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 12px;
        grid-row-gap: 18px;
        @media (max-width: 850px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
        }
        @media (max-width: 650px) {
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(6, 1fr);
        }
        .feature-content__item {
          padding: 25px 25px;
          background: #A0ABC01F;
          border-radius: 12px;
          backdrop-filter: blur(50px);
          svg {
            height: 44px;
            width: auto
          }
          .feature-content__item-title {
            font-size: 1.38rem;
            font-weight: 700;
            margin: 10px 0;
            @media (max-width: 650px) {
              font-size: .95rem
            }
          }
          .feature-content__item-descr {
            font-size: 1rem;
            color: #E7EDFEE5;
            @media (max-width: 650px) {
              display: none
            }
          }
          &:nth-child(1) {
            background: linear-gradient(0deg, rgba(158, 242, 158, 0.05), rgba(158, 242, 158, 0.05)), rgba(160, 171, 192, 0.12);
          }
          &:nth-child(2) {
            background: linear-gradient(0deg, rgba(132, 190, 255, 0.05), rgba(132, 190, 255, 0.05)), rgba(160, 171, 192, 0.12);
          }
          &:nth-child(3) {
            background: linear-gradient(0deg, rgba(255, 195, 128, 0.05), rgba(255, 195, 128, 0.05)), rgba(160, 171, 192, 0.12);
          }
          &:nth-child(4) {
            background: linear-gradient(0deg, rgba(230, 128, 255, 0.05), rgba(230, 128, 255, 0.05)), rgba(160, 171, 192, 0.12);
          }
          &:nth-child(5) {
            background: linear-gradient(0deg, rgba(250, 159, 255, 0.05), rgba(250, 159, 255, 0.05)), rgba(160, 171, 192, 0.12);

          }
          &:nth-child(6) {
            background: linear-gradient(0deg, rgba(158, 242, 158, 0.05), rgba(158, 242, 158, 0.05)), rgba(160, 171, 192, 0.12);
          }
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 647px;
        height: 647px;
        background: url('/images/img_ttt-games-decor1.png') no-repeat;
        background-size: contain;
        top: -55px;
        left: -90px;
        opacity: .15;
        transform: rotate(26deg);
      }
      &:after {
        content: '';
        position: absolute;
        width: 570px;
        height: 570px;
        background: url('/images/img_ttt-games-decor2.png') no-repeat;
        background-size: contain;
        top: -55px;
        right: -90px;
        opacity: .2;
        transform: matrix(0.31, -0.95, -0.95, -0.31, 0, 0);
        z-index: 1
      }
    }
  }
</style>
