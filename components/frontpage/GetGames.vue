<template>
  <div>
    <div class="getgames__wrap">
          <div class="container">
            <div class="getgames-stats__wrap">
              <div class="getgames-stats__item">
                <div class="getgames-stats__item-numbers">
                  <img src="/images/icon-crown.png" srcset="/images/icon-crown@2x.png 2x" alt="" /><span>12</span>
                </div>
                <div class="getgames-stats__item-descr">Games<br />Per Year</div>
              </div>
              <div class="getgames-stats__item">
                <div class="getgames-stats__item-numbers">
                  <img src="/images/icon-bolt.png" srcset="/images/icon-bolt@2x.png 2x" alt="" /><span>4</span>
                </div>
                <div class="getgames-stats__item-descr">Prototypes in Production<br />at the Same Time</div>
              </div>
              <div class="getgames-stats__item">
                <div class="getgames-stats__item-numbers">
                  <img src="/images/icon-diamond.png" srcset="/images/icon-diamond@2x.png 2x" alt="" /><span>30</span>
                </div>
                <div class="getgames-stats__item-descr">Concepts Awaiting<br />Their Turn</div>
              </div>
            </div>

            <div class="getgames-title">
              <h2 class="section-title">Get our games</h2>
              <p class="section-description">We ensure not only the perfect gaming set, but the full promotional strategy that helps to attract new players and hold the existing ones.</p>
            </div>
            <div class="getgames-buttn">
                <button class="buttn buttn-primary buttn-m" @click="showModal = true">Get in touch</button>
            </div>
          </div>
          <nuxt-picture src="/images/img-getgames.png" :img-attrs="{class:'getgames-decor'}" sizes="sm:100vw" />
  </div>
  <div class="game-types__wrap">
    <div class="container-wide">
      <div class="game-types__inner">
        <div class="game-types__item">
          <div class="game-types__item-content">
            <h3 class="item-title">Profit games</h3>
            <p class="section-description">Get the maximum profit from the player!</p>
            <nuxt-link to="/games?type=profitgames" class="inner-link link-blue">
              <span>See all profit games</span>
              <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
              </svg>
            </nuxt-link>
            <p class="section-bodytext">Plots that have been known for many years and have been used by masters of game development more than once let the player relax and find themselves in a well&ndash;known setting. An understandable and familiar game mechanic lets the player see a potentially big win.</p>
          </div>
          <div class="section-img">
            <nuxt-picture src="/images/img-profitgame.png" :img-attrs="{class: 'gametypes-decor', style:'border-bottom-right-radius:9px;border-bottom-left-radius: 9px'}" />
          </div>
        </div>
        <div class="game-types__item">
          <div class="game-types__item-content">
            <h3 class="item-title">Traffic games</h3>
            <p class="section-description">Attract new players to your online casino!</p>
            <nuxt-link to="/games?type=trafficgames" class="inner-link link-blue">
              <span>See all traffic games</span>
              <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
              </svg>
            </nuxt-link>
            <p class="section-bodytext">An unusual, provocative storyline, eye&ndash;catching graphics, exclusive music, lot of features and their frequent appearance as well as a high hit rate.</p>
          </div>
          <div class="section-img">
            <nuxt-picture src="/images/img-trafficgame.png" :img-attrs="{class: 'gametypes-decor', style:'border-bottom-right-radius:9px;border-bottom-left-radius: 9px'}" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partners__wrap desktop">
    <div class="partners__content">
      <div class="partners__content-img">
        <div class="partners-content-img-inner">
          <nuxt-img src="/images/img-partners.jpg"  />
        </div>
      </div>
      <div class="partners__content-data">
        <div class="partners-number">500+</div>
        <div class="partners-descr">Partners &amp; Media</div>
        <nuxt-link to="partners" class="inner-link link-yellow">
          <span>See all partners &amp; media</span>
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="partners__wrap mobile">
    <div class="partners__content">
      <div class="partners__content-data">
        <div class="partners-number">500+</div>
        <div class="partners-descr">Partners &amp; Media</div>
      </div>
      <div class="partners__content-img">
        <div class="partners-content-img-inner">
          <nuxt-img src="/images/img-partners-mob.jpg"  />
        </div>
      </div>
      <nuxt-link to="partners" class="inner-link link-yellow">
        <span>See all partners &amp; media</span>
        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
        </svg>
      </nuxt-link>
    </div>
  </div>
  <div class="container-wide">
    <div class="hairline"></div>
  </div>
  <ContactModal v-show="showModal" @close-modal="showModal = false"/>

  </div>
</template>

<script>

import ContactModal from '~/components/frontpage/ContactModal'

export default {

  components: {
    ContactModal
  },
  data() {
    return {
      showModal: false
    }
  },


}
</script>

<style scoped lang="scss">
.desktop {
  display: block
}
.mobile {
  display: none;
}
@media (max-width:1200px) {
  .desktop {
    display: none
  }
  .mobile {
    display: block;
  }
}
.getgames__wrap {
  padding-bottom: 70px;
  position: relative;
  @media (max-width: 650px) {
    padding-bottom: 0;
    margin-bottom: 50px;
  }
  .getgames-stats__wrap {
    display: flex;
    @media (max-width: 850px) {
      display: none;
    }
    .getgames-stats__item {
      margin-right: 55px;
      .getgames-stats__item-numbers {
        display: flex;
        align-items: center;
        margin-bottom: 18px;
        img {
          height: 68px;
          width: auto;
        }
        span {
          font-size: 2.6rem;
          font-weight: 700;
          margin-left: 8px;
        }
      }
      .getgames-stats__item-descr {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
  .getgames-title {
    margin-top: 50px;
    margin-bottom: 40px;
    @media (max-width: 650px) {
      margin-bottom: 300px
    }
    .section-title {
      font-size: 3.75rem;
      @media (max-width: 850px) {
        text-align: center;
      }
      @media (max-width: 650px) {
        font-size: 1.75rem;
        text-transform: uppercase;
      }
    }
    .section-description {
      font-size: 1.25rem;
      max-width: 380px;
      line-height: 1.5;
      margin-top: 32px;
      @media (max-width: 650px) {
        text-align: center;
      }
    }
  }
  .getgames-buttn {
    .buttn {
      @media (max-width: 650px) {
        width: 100%
      }
    }
  }
  picture {
    position: absolute;
    bottom: -5px;
    right: 0;
    z-index: -1;
    max-width: 40%;

    @media (max-width: 1300px) {
      max-width: 50%;
    }
    @media (max-width: 650px) {
      max-width: 100%;
      bottom: 35px;
    }
  }
}
.game-types__wrap {
  .game-types__inner {
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255,255,255, .25);
    @media (max-width: 850px) {
      flex-direction: column;
    }
    @media (max-width: 650px) {
      padding-bottom: 20px;
    }
    .game-types__item {
      background: #0f0f0f;
      border-radius: 9px;
      text-align: center;
      flex: 0 1 48%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 850px) {
        margin-bottom: 40px;
      }
      &:first-child {
        .game-types__item-content {
          margin-bottom: 50px;
          @media (max-width: 650px) {
            margin-bottom: 20px;
          }
        }
      }
      .game-types__item-content {
        margin: 90px 100px 0;
        @media (max-width: 650px) {
          margin: 20px;
        }
        .item-title {
          font-size: 2.12rem;
          text-transform: uppercase;
          @media (max-width: 650px) {
            font-size: 1.75rem;
          }
        }
        .section-description {
          font-size: 1.25rem;
          line-height: 1.5;
          margin: 20px 0 40px
        }
        .inner-link {
          justify-content: center;
        }
        .section-bodytext {
          font-size: .93rem;
          line-height: 1.5;
          margin: 40px 0 20px

        }
      }
      .section-img {
        @media (max-width: 650px) {
          display: none;
        }
        picture {
          .gametypes-decor {
            border-bottom-right-radius: 9px;
            border-bottom-left-radius: 9px;

          }
        }

      }
    }


  }
}
.partners__wrap {
  padding: 120px 0;
  .partners__content-img {
    display: inline-block;
    width: 55%;
    position: relative;
    vertical-align: top;
    .partners-content-img-inner {
      position: absolute;
      right: 0;
      img  {
        width: 1187px;
        max-width: 1187px
      }
    }
  }
  .partners__content-data {
    display: inline-block;
    vertical-align: top;
    padding: 70px 0 20px 115px;
    .partners-number {
      font-size: 4.6rem;
      font-weight: 700;

    }
    .partners-descr {
      font-size: 2.12rem;
      font-weight: 700;
      text-transform: uppercase;
      margin: 20px 0 60px;
    }
  }
  &.mobile {
    padding: 80px 0;
    @media (max-width: 650px) {
      padding: 50px 0;
    }
    .partners__content-img {
      display: block;
      width: 100%;
      .partners-content-img-inner {
        position: relative;
        right: 0;
        img  {
          width: 100%;
          max-width: 100%
        }
      }
    }
    .partners__content-data {
      display: block;
      padding: 0;
      text-align: center;
      .partners-number {
        font-size: 4.6rem;
        font-weight: 700;
        @media (max-width: 650px) {
          font-size: 2.25rem
        }
      }
      .partners-descr {
        font-size: 2.12rem;
        font-weight: 700;
        text-transform: uppercase;
        margin: 20px 0 60px;
        @media (max-width: 650px) {
          font-size: 1.31rem;
          margin: 10px 0 10px
        }
      }
    }
    .inner-link {
      margin-top: 50px;
      justify-content: center;
    }
  }
}
.hairline {
  border-bottom: 1px solid rgba(255,255,255, .25);
}
</style>
