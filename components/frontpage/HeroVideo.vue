<template>
  <div>
    <div v-if="$device.isMobile" class="static-wrapper">
      <!-- <div class="vote-badge-mob">
        <div class="vote-badge-mob__inner">
          <img src="/images/casino-beats-mob.png" class="img-prize-mob" alt="" />
          <a href="https://ats15wy1hex.typeform.com/to/eNfnFvh4?typeform-source=sbcevents.com" class="btn-vote" target="_blank">VOTE FOR MASCOT GAMING</a>
        </div>
      </div> -->
        <div class="static-background">
            <div class="container">
                <div class="top-header__wrap">
                      <h1 class="top-header__title">{{ $t('Feel the') }}<br />{{ $t('Gaming Thrill') }}</h1>
                      <a :href="`${demoUrl}${locPath}`" class="buttn buttn-primary buttn-xl hero-buttn">{{ $t('Play our games') }}</a>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="video-wrapper">
       <!-- <div class="vote-badge-mob">
         <div class="vote-badge-mob__inner">
          <img src="/images/casino-beats-mob.png" class="img-prize-mob" alt="" />
          <div class="vote-badge__title">
            <p>We Are Nominated</p>
            <p class="text-gold"><strong>Slot Legacy Title, Slot to Debut,<br />Game Soundtrack, Slot to Watch</strong></p>
            <p>May 21st - 23rd, Malta</p>
          </div>
          <a href="https://ats15wy1hex.typeform.com/to/eNfnFvh4?typeform-source=sbcevents.com" class="btn-vote" target="_blank">VOTE FOR MASCOT GAMING</a>
        </div>
      </div> -->
        <div class="video-background">
          <div class="vid">
            <video id="bgvideo" playsinline autoplay muted loop poster="/images/head_mix5_video.jpg"  width="1920" height="1080">
              <source id="video-src" src="https://minio-api.mascot.games/mascot-videos/headvideo_mix5_2.mp4"  type="video/mp4">

              <!-- <source id="video-src" src="https://s03.devdog.space/headvideo_mix5_2.mp4"  type="video/mp4"> -->
            </video>
          </div>
          <div class="container">
              <div class="top-header__wrap">
                <div class="top-header__left">
                    <h1 class="top-header__title">{{ $t('Feel the') }}<br />{{ $t('Gaming Thrill') }}</h1>
                    <a :href="`${demoUrl}${locPath}`" class="buttn buttn-primary buttn-xl hero-buttn">{{ $t('Play our games') }}</a>
                </div>
                <!-- <div class="top-header__right">
                   <div class="vote-badge">
                    <img src="/images/casino-beats-dsktop.png" class="sigma-eu-logo" alt="" />
                    <img src="/images/prize.png" class="img-prize" alt="" />
                    <p><strong>We Are Nominated</strong></p>
                    <p class="text-gold"><strong>Slot Legacy Title, Slot to Debut,<br />Game Soundtrack, Slot to Watch</strong></p>
                    <p>May 21st - 23rd, Malta</p>
                    <a href="https://ats15wy1hex.typeform.com/to/eNfnFvh4?typeform-source=sbcevents.com" class="btn-vote" target="_blank">VOTE FOR MASCOT GAMING</a>
                  </div>
                </div> -->
              </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {

      demoUrl: '',

      locPath: ''

    }
  },

  async mounted() {
    try {
      await  this.$axios.get("/config.json")
        .then(response => {this.demoUrl = response.data.demoURL})
    } catch(ex) {
      this.demoUrl = this.$config.demositeURL
    }

    switch (this.$i18n.locale) {
      case "es":
        this.locPath = '/es';
        break;
      case "pt":
        this.locPath = '/pt';
        break;
      default:
      this.locPath = '';
    }

    await this.animateElements();

  },

  methods: {
    animateElements() {
      if (process.client && window.innerWidth >= 1024) {
        this.$gsap.set('.top-header__title', { opacity: 0, x: '-100%' });
        this.$gsap.set('.hero-buttn', { opacity: 0, y: '100%' });

        this.$gsap.to('.top-header__title', {
          duration: 1.5,
          delay: 1,
          x: '0%',
          opacity: 1,
          ease: 'elastic.out(1, 0.5)'
        });

        this.$gsap.to('.hero-buttn', {
          duration: 1.5,
          delay: 1,
          y: '0%',
          opacity: 1,
          ease: 'elastic.out(1, 0.5)'
        });
      }
    }
  }


}
</script>

<style scoped lang="scss">
html:lang(es){
  .top-header__wrap {
    padding: 150px 0 250px
  }
}
html:lang(pt){
  .top-header__wrap {
    padding: 150px 0 250px
  }
}
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
    background: url('@/static/images/img-hero-static5_1_mobile.jpg') center top no-repeat;
    background-size: cover;
    background-position-y: 50px
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
.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  #bgvideo {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: 100vw;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background-color: #000;
    @media (max-width: 1500px) {
      width: 1500px
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    z-index: -1
  }
}
.top-header__wrap {
  padding: 280px 0 200px;
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
    position: relative;
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
    position: relative;
    @media (max-width: 650px) {
    width: 100%;
    text-align: center;
      }

  }
}
/* Prize badge styles */
.top-header__wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  .top-header__left {
    flex: 0 1 60%;
  }
  .top-header__right {
    padding: 30px 30px 30px;
    width: 345px;
    border: 1px solid #03C000;
    border-radius: 8px;
    background: #000;
    position: relative;
    text-align: center;
    margin: 20px 20px 0 20px;
    .vote-badge {
      .img-prize {
        position: absolute;
        top: -70px;
        right: -2px;
        width: 113px;
      }
      .sigma-eu-logo {
        margin-bottom: 10px;
      }
      .vote-badge__title {
        font-size: 1.3rem;
        margin: 5px 0 5px;
        font-weight: 700;
      }
      .vote-badge__subtitle {
        font-size: 1.2rem;
      }
      .text-gold {
        color: #FFE298;
        line-height: 1.5;
        margin: 5px 0;
      }
      p {
        strong {
          font-weight: 700
        }
      }

      .btn-vote {
        font-size: 1.05rem;
        font-weight: 700;
        padding: 21px 20px;
        margin-top: 20px;
        background: #03C000;
        border-radius: 12px;
        display: block;
        cursor: pointer;
      }
    }
    @media (max-width: 980px) {
      display: none
    }
  }
}
.vote-badge-mob {
  display: none;
  position: absolute;
  top: 62px;
  left: 0;
  width: 100%;
  background: #000;
  padding: 15px 30px;
  border: 1px solid #03C000;
  border-radius: 8px;
  z-index: 99;
  .vote-badge-mob__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img-prize-mob {
      width: 160px;
      height: auto;
      @media (max-width: 540px) {
        width: 100px
      }
    }
    .text-gold {
      color: #FFE298;
    }
    .vote-badge__title {
      padding: 0 20px;
      text-align: center;
      @media (max-width: 740px) {
        display: none
      }
      p {
        strong {
          font-weight: 700
        }
      }
    }
    .btn-vote {
      font-weight: 700;
      padding: 15px 30px;
      background: #03C000;
      border-radius: 12px;
      cursor: pointer;
      white-space: nowrap;
      @media (max-width: 540px) {
        font-size: .8rem;
        padding: 10px 20px;

      }
    }
  }
  @media (max-width: 980px) {
    display: block;
  }
  @media (max-width: 540px) {
    padding: 7px 15px
  }
}
</style>
