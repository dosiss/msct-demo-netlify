<template>
  <div>
    <MainHeader />
    <div id="promo">
      <div class="promo__top">
        <div class="container">
          <div class="promo__top-hero">
            <div class="promo__top-content">
              <h1 class="promo__top-title">{{$t('Marketing tools')}}</h1>
              <div class="promo__top-description">
                <p>{{$t('To help operators boost engagement and drive revenue, we offer a full spectrum of')}}
                   <nuxt-link :to="localePath('/')" target="_blank">{{$t('iGaming solutions')}}</nuxt-link>
                   {{$t(' and promo tools — from branded campaigns and creative assets to advanced bonus mechanics and exclusive deals. Every promo is tailored to your goals, market, and platform to deliver maximum impact.')}}
                </p>
              </div>
              <div class="promo__top-buttn">
                <a class="buttn buttn-yellow buttn-m" @click="showModalOffer = true">{{$t('Get Promo Offer')}}</a>
              </div>
            </div>
            <div class="promo__top-image">
              <nuxt-img id="promoHero" src="/images/img_promo_hero2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="promo__top-features">
        <div class="container">
          <div class="top-features__wrap">
            <div class="feature-item">
              <div class="feature-item__img"><nuxt-img  src="/images/img_promo_feat-1.png" alt="" /></div>
              <div class="feature-item__title">{{$t('Wide Range of Promo Tools')}}</div>
              <div class="feature-item__text">{{$t('From ready-to-launch kits to fully customizable campaigns.')}}</div>
            </div>
            <div class="feature-item">
              <div class="feature-item__img"><nuxt-img  src="/images/img_promo_feat-2.png" alt="" /></div>
              <div class="feature-item__title">{{$t('Discount on Key Games')}}</div>
              <div class="feature-item__text">{{$t('Stand out with unbeatable launch offers that drive instant results.')}}</div>
            </div>
            <div class="feature-item">
              <div class="feature-item__img"><nuxt-img  src="/images/img_promo_feat-3.png" alt="" /></div>
              <div class="feature-item__title">{{$t('No GGR Charges on Free Rounds')}}</div>
              <div class="feature-item__text">{{$t('Maximize promo impact without extra costs.')}}</div>
            </div>
            <div class="feature-item">
              <div class="feature-item__img"><nuxt-img  src="/images/img_promo_feat-4.png" alt="" /></div>
              <div class="feature-item__title">{{$t('Tailored Market Approach')}}</div>
              <div class="feature-item__text">{{$t('Promotions built around your audience, platform, and goals.')}}</div>
            </div>
          </div>
        </div>
      </div>
      <section id="freeRounds" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_rounds2.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Free Rounds')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="freeRounds"
                :title="$t('Free Rounds')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('Free Rounds are available across the entire Mascot Gaming slot game portfolio and built for easy, controlled use.')}} <br>{{$t('Our games feature an obvious separation of real and bonus balances — making it simple to manage for operators.')}}</p>
                <ul>
                  <li>{{$t('Easy integration with all Mascot slot games')}}</li>
                  <li>{{$t('Support for all currencies')}}</li>
                  <li>{{$t('No restrictions')}}</li>
                  <li>{{$t(' Custom settings per campaign')}}</li>
                  <li>{{$t('No bonus GGR charges')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="preReleases" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_prereleases.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Pre-Releases')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="preReleases"
                :title="$t('Pre-Releases')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('Pre-releases give operators early access to upcoming Mascot Gaming titles — under exclusive commercial terms.')}} <br>{{$t('This is a positioning tool, giving operators content that players won’t find elsewhere yet.')}}</p>
                <ul>
                  <li>{{$t('Offered across our full release pipeline')}}</li>
                  <li>{{$t('Delivered with complete promo materials')}}</li>
                  <li>{{$t('Available on negotiated basis before general launch')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="seasonalEvents" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo-events.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Seasonal events')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="seasonalEvents"
                :title="$t('Seasonal events')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('We develop seasonal event concepts as complete offers — with storyline, player’s journey, and curated game selection.')}} <br>{{$t('These campaigns are ready to launch or scale, depending on the operator’s needs.')}}</p>
                <ul>
                  <li>{{$t('Thematic concepts tailored to calendar or market')}}</li>
                  <li>{{$t('Hand-picked games based on event logic and theme')}}</li>
                  <li>{{$t('Reward structure aligned with the operator’s strategy')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="brandedGames" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_branded.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Branded games')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="brandedGames"
                :title="$t('Branded games')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('We create slot games fully aligned with your brand’s identity — from concept to final release — turning them into powerful tools for recognition and loyalty.')}}</p>
                <ul>
                  <li>{{$t('Unique visual design to match your brand style')}}</li>
                  <li>{{$t('Optional custom game mechanics')}}</li>
                  <li>{{$t('Seamless integration with your platform')}}</li>
                  <li>{{$t('Exclusive commercial terms for branded titles')}}</li>
                  <li>{{$t('Delivered with complete promotional assets')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="meetOurGames" class="promo__games-slider">
        <div class="container">
          <h2 class="promo__games-slider-title">{{$t('Meet our games')}}</h2>
          <p>{{$t('Discover our game collection and pick the titles that will power your next promo')}}</p>
        </div>
        <TopSlider />
        <div class="container">
          <div class="promo__top-buttn">
            <a class="buttn buttn-primary buttn-m" @click="showModalOffer = true">{{$t('Get Promo Offer')}}</a>
          </div>
        </div>
      </section>
      <section id="trafficBasedCampaigns" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_campaigns2.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Traffic-based campaigns')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="trafficBasedCampaigns"
                :title="$t('Traffic-based campaigns')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('Mascot Gaming reduces your cost of player acquisition by covering an agreed part of your media buying or affiliate traffic expenses. Together, we attract new players to Mascot slots and optimize performance for mutual GGR growth.')}}</p>
                <ul>
                  <li>{{$t('Additional budget for media buying or partial CPA cost compensation')}}</li>
                  <li>{{$t('Landing pages for registration, deposit, and redirection to Mascot slots')}}</li>
                  <li>{{$t('All necessary graphics and mock-up designs provided')}}</li>
                  <li>{{$t('Performance tracking and optimisation for at least 2 months')}}</li>
                  <li>{{$t('Traffic driven by your media buying team or affiliates')}}</li>
                  <li>{{$t('Flexible settlement: invoice payment or deduction during regular settlements')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="networkingTournaments" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="inner-custom">
              <div class="feature__img">
                <nuxt-img  src="/images/img_promo_tournaments2.png" alt="" />
              </div>
              <div class="feature__text">
                <div class="coming-soon-badge">{{$t('Coming soon')}}</div>
                <!-- <h2 class="feature__text-title">{{$t('Networking Tournaments')}}</h2> -->
                <CopyableHeader
                  class="feature__text-title"
                  unique-id="networkingTournaments"
                  :title="$t('Networking Tournaments')"
                  @copy-success="onCopySuccess"
                />
                <div class="feature__text-content">
                  <p>{{$t('Multi-operator tournaments designed to connect players across different casinos, increase engagement, and boost game visibility. Operators benefit from shared prize pools, cross-promotion, and heightened competition that drives activity.')}}</p>
                  <ul>
                    <li>{{$t('Offered across our full release pipeline')}}</li>
                    <li>{{$t('Delivered with complete promo materials')}}</li>
                    <li>{{$t('Available on negotiated basis before general launch')}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="retentionTools" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_retention.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Retention Tools')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="retentionTools"
                :title="$t('Retention Tools')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('We develop seasonal event concepts as complete offers — with storyline, player’s journey, and curated game selection. These campaigns are ready to launch or scale, depending on the operator’s needs.')}}</p>
                <ul>
                  <li>{{$t('Thematic concepts tailored to calendar or market')}}</li>
                  <li>{{$t('Hand-picked games based on event logic and theme')}}</li>
                  <li>{{$t('Reward structure aligned with the operator’s strategy')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="marketingSupport" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_support4.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Marketing Support')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="marketingSupport"
                :title="$t('Marketing Support')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('Our creative team produces high-impact visuals and animations at record speed — from eye-catching banners to big win videos — so your campaigns stand out from day one.')}}</p>
                <ul>
                  <li>{{$t('Static and animated banners for web and mobile')}}</li>
                  <li>{{$t('Video promos and big win videos')}}</li>
                  <li>{{$t('Branded mock-ups for campaigns and landings')}}</li>
                  <li>{{$t('Full localization for specific markets')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bigWinCampaigns" class="promo__feature">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__img">
              <nuxt-img  src="/images/img_promo_bigwin2.png" alt="" />
            </div>
            <div class="feature__text">
              <!-- <h2 class="feature__text-title">{{$t('Marketing Support')}}</h2> -->
              <CopyableHeader
                class="feature__text-title"
                unique-id="bigWinCampaigns"
                :title="$t('Big Win Campaigns')"
                @copy-success="onCopySuccess"
              />
              <div class="feature__text-content">
                <p>{{$t('Recorded Big Wins from Mascot Gaming slots have already proven their efficiency among our partners. It`s an engaging content in email or social media, which works as a strong renetion tool.')}}</p>
                <ul>
                  <li>{{$t('Integration into an HTML email reflecting casino lobby elements')}}</li>
                  <li>{{$t('Adaptation to target currency and game language')}}</li>
                  <li>{{$t('Additionally, Big Wins replay could be posted on casino’s social media channels as a standalone video')}}</li>
                  <li>{{$t('Complete HTML email layout developed by Mascot Gaming with two promo codes:')}}
                    <br>{{$t('- One no-deposit free spins promo code;')}}
                    <br>{{$t('– One deposit-match bonus promo code (optionally with additional free spins)')}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gamesInAction" class="promo__action">
        <div class="container">
          <div class="promo__feature-inner">
            <div class="feature__text">
              <h2 class="feature__text-title">{{$t('See our games in action')}}</h2>
              <div class="feature__text-content">
                <p>{{$t('Would you like to start conversation with Mascot Gaming in any field? Drop us a line!')}}</p>
                <p>{{$t('Mascot Gaming offers')}}
                  <nuxt-link :to="localePath('/')" target="_blank">{{$t('iGaming Solutions')}}</nuxt-link>
                  {{$t(' tailored for operators worldwide.')}}
                </p>
                <div class="feature__img">
                  <nuxt-img src="/images/img_promo_joker.png" alt="" />
                </div>
                <div class="promo__top-buttn">
                  <a class="buttn buttn-yellow buttn-m" @click="showModalOffer = true">{{$t('Get Promo Offer')}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Toast notification -->
      <div v-if="showToast" class="toast">
        {{ toastMessage }}
      </div>
    </div>

    <MainFooter />

    <ContactModalOffer v-show="showModalOffer" @close-modal="showModalOffer = false"/>

  </div>
</template>

<script>
import ContactModalOffer from '~/components/frontpage/ContactModalOffer'

  export default {
    components: {
      ContactModalOffer
     },
    data() {
      return {
        // title: '',
        // description: '',
        showModalOffer: false,
        showToast: false,
        toastMessage: ''
      }
    },
    head() {
      return {
        title: this.$t('Mascot Gaming - Marketing Tools'),
        htmlAttrs: {
            lang: this.$i18n.locale
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('To help operators boost engagement and drive revenue, we offer a full spectrum of flexible promo tools — from branded campaigns and creative assets to advanced bonus mechanics and exclusive deals.')
          },
          { property: 'og:title', hid: "og:title", content: this.$t('Mascot Gaming - Marketing Tools') },
          { property: 'og:description', hid: 'og:description', content: this.$t('To help operators boost engagement and drive revenue, we offer a full spectrum of flexible promo tools — from branded campaigns and creative assets to advanced bonus mechanics and exclusive deals.') },
          { property: 'og:url', hid:'og:url', content: `https://mascot.games` },
          { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

          { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', hid:'twitter:title', content:this.$t('Mascot Gaming - Marketing Tools') },
          { name: 'twitter:description', hid:'twitter:description', content: this.$t('To help operators boost engagement and drive revenue, we offer a full spectrum of flexible promo tools — from branded campaigns and creative assets to advanced bonus mechanics and exclusive deals.') },
          { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        ]
      }
    },
    mounted() {
      // this.title = this.$t('Mascot Gaming - Marketing Tools')
      // this.description = this.$t('To help operators boost engagement and drive revenue, we offer a full spectrum of flexible promo tools — from branded campaigns and creative assets to advanced bonus mechanics and exclusive deals.')

      // Force enable scroll every 100ms
      const interval = setInterval(() => {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
        document.body.style.height = 'auto';

        // Remove any transforms that might block scroll
        document.documentElement.style.transform = 'none';
        document.body.style.transform = 'none';

        // Reset touch-action
        document.documentElement.style.touchAction = 'auto';
        document.body.style.touchAction = 'auto';
      }, 100);

      this.$once('hook:beforeDestroy', () => {
        clearInterval(interval);
      });
    },
    methods: {
      onCopySuccess(url) {
        // this.toastMessage = `Copied to clipboard: ${url}`;
        this.toastMessage = "Link copied to clipboard";
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 5000);
      }
    }
  }
</script>
<style lang="scss" scoped>
  html {
    // scroll-snap-type: y mandatory;
  }
  #promo {
//    overflow-x: hidden;
    .promo__top {
      position: relative;
      padding: 80px 0 0;
      background: url('/images/img_promo_back.avif') no-repeat;
      background-size: cover;
      background-position: top center;
      @media (max-width: 650px) {
        padding: 100px 0 0
      }
      .promo__top-hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 850px) {
          flex-direction: column;
        }
        .promo__top-content {
          flex: 1 0 auto;
        }
      }
      .promo__top-title {
        font-size: 3.75rem;
        margin-bottom: 0;
        line-height: 1;
        text-transform: uppercase;
        @media (max-width: 650px) {
          font-size: 2rem
        }
      }
      .promo__top-description {
        max-width: 590px;
        padding: 30px 0 20px;
        p {
          margin-bottom: 15px;
          font-size: 1.25rem;
          line-height: 1.5;
          @media (max-width: 650px) {
            font-size: 1.13rem
          }
        }
      }
      .promo__top-buttn {
        position: relative;
        @media (max-width: 850px) {
          margin-top: 100px;
          margin-bottom: 60px
        }
        @media (max-width: 650px) {
          margin-top: 200px;
          margin-bottom: 20px;
          z-index: 2
        }
      }
      .promo__top-image {
        @media (max-width: 850px) {
          position: absolute;
          right: 0;
          bottom: 0;
          max-width: 300px;
        }
        @media (max-width: 650px) {
          right: calc(50% - 125px);
          bottom: 41px;
          max-width: 254px;
        }
      }
      &:before {
        content: '';
        position: absolute;
        height: 162px;
        bottom: 0;
        right: 0;
        width: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0, #000000 92.06%);
        @media (max-width: 850px) {
          height: 60px;
          z-index: 2
        }
        @media (max-width: 650px) {
          height: 120px
        }
      }
    }
    .promo__top-features {
      padding-top: 40px;
      @media (max-width: 850px) {
        padding-top: 0
      }
      .top-features__wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        @media (max-width: 850px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 30px;
          grid-row-gap: 30px;
          margin-top: 50px;
        }
        @media (max-width: 650px) {
          display: block;
          margin-top: 50px;
        }
        .feature-item {
          text-align: center;
          background: #212121;
          border-radius: 18px;
          padding: 15px 15px 30px 15px;
          @media (max-width: 650px) {
            margin-bottom: 15px;
          }
          .feature-item__img {
            height: 117px;
            position: relative;
            img {
              max-height: 100%
            }
          }
          .feature-item__title {
            font-size: 1.6rem;
            line-height: 1.3;
            font-weight: 700;
            margin-bottom: 17px;
            margin-top: 10px;
            text-transform: uppercase;
            background: linear-gradient(88.27deg, #FF6C1A 3.61%, #FFE604 98.53%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          &:nth-child(3) {
            .feature-item__img {
              img {
                position: absolute;
                left: calc(50% - 40px);
                max-height: 130%;
                bottom: 0;
              }
            }
          }
        }
      }
    }
    #freeRounds {
      padding-top: 80px;
      @media (max-width: 650px) {
        padding-top: 30px
      }
      .feature__text {
        order: -1;
        @media (max-width: 650px) {
          order: unset
        }
      }
    }
    #preReleases {
      .feature__text {
        @media (max-width: 650px) {
          margin-top: 25px
        }
      }
      .feature__img {
        img {
          max-width: 85%
        }
      }
    }
    #seasonalEvents {
      .feature__text {
        order: -1;
        @media (max-width: 650px) {
          order: unset;
        }
        .feature__text-title {
          @media (max-width: 1750px) {
            max-width: 500px
          }
          @media (max-width: 850px) {
            max-width: 300px;
          }
        }
      }
    }
    #brandedGames {
      padding-top: 0;
      .feature__text-title {
        @media (max-width: 1750px) {
          max-width: 480px
        }
        @media (max-width: 850px) {
          max-width: 300px;
        }
      }
      @media (max-width: 850px) {
        padding-top: 40px
      }
      @media (max-width: 650px) {
        padding-top: 0
      }
    }
    #trafficBasedCampaigns {
      padding-top: 80px;
      // padding-bottom: 30px;
      @media (max-width: 650px) {
        padding-top: 20px
      }
      .feature__text {
        order: -1;
        @media (max-width: 650px) {
          order: unset;
        }
      }
    }
    #networkingTournaments {
      padding-top: 60px;
      .inner-custom {
        background: linear-gradient(135deg, #172368 2.88%, #E249AF 100%), linear-gradient(225.4deg, #FEDC2A 0%, #DD5789 48.12%, #7A2C9E 93.59%), linear-gradient(132.33deg, #D24074 -0.67%, #6518B4 102.54%), linear-gradient(135deg, #B65FC4 2.88%, #DB6E4E 100%), linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%), linear-gradient(228.26deg, #7E35B2 6.93%, #36174C 87.48%), #FFFFFF;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 850px) {
          background: none;
          border-radius: 0;
          padding: 0 0 30px 0;
        }
        @media (max-width: 650px) {
          flex-direction: column;
        }
        .feature__text {
          .feature__text-title {
            &:after {
              content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggc3Ryb2tlPSIjMTJGRkU5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iNCIgZD0ibTI1LjYyNSAzNy40NDEtMy43MzIgMy43MzNBOC43OTggOC43OTggMCAwIDEgOS40NSAyOC43MzJsNy40NjUtNy40NjRhOC43OTkgOC43OTkgMCAwIDEgMTIuNDQxIDAiLz48cGF0aCBzdHJva2U9IiMxMkZGRTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0IiBkPSJtMjUuNjIzIDEyLjU1OSAzLjczMi0zLjczM2E4Ljc5OSA4Ljc5OSAwIDAgMSAxNS4wMTggNi4yMmMwIDIuMzM0LS45MjcgNC41NzItMi41NzYgNi4yMjJsLTcuNDY1IDcuNDY0YTguNzk5IDguNzk5IDAgMCAxLTEyLjQ0MSAwIi8+PC9zdmc+')
            }
          }
        }
      }
      @media (max-width: 850px) {
        margin-top: 30px;
        padding-top: 30px;
        background: linear-gradient(135deg, #172368 2.88%, #E249AF 100%), linear-gradient(225.4deg, #FEDC2A 0%, #DD5789 48.12%, #7A2C9E 93.59%), linear-gradient(132.33deg, #D24074 -0.67%, #6518B4 102.54%), linear-gradient(135deg, #B65FC4 2.88%, #DB6E4E 100%), linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%), linear-gradient(228.26deg, #7E35B2 6.93%, #36174C 87.48%), #FFFFFF;
      }
      @media (max-width: 650px) {
        padding-top: 0
      }
    }
    #retentionTools {
      padding-top: 40px;
      .feature__text {
        order: -1;
        @media (max-width: 650px) {
          order: unset;
        }
        .feature__text-title {
          max-width: 275px
        }
      }
    }
    #marketingSupport {
      padding-top: 30px;
      @media (max-width: 850px) {
        padding-top: 30px
      }
      @media (max-width: 650px) {
        padding-top: 0
      }
      .feature__text-title {
        @media (max-width: 1800px) {
          max-width: 400px
        }
      }
    }
    #bigWinCampaigns {
      padding-top: 80px;
      @media (max-width: 650px) {
        padding-top: 50px
      }
      .feature__text {
        order: -1;
        @media (max-width: 650px) {
          order: unset;
        }
        .feature__text-title {
          @media (max-width: 1800px) {
            max-width: 420px
          }

        }
      }
    }

    .promo__feature {
      // min-height: 100vh;
      // scroll-snap-align: start;
      // scroll-snap-stop: always;
      // padding-top: 60px;
      @media (max-width: 650px) {
        padding-top: 20px
      }
      .promo__feature-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // min-height: 100vh;
        @media (max-width: 650px) {
          flex-direction: column;
        }
        .feature__text {
          flex: 0 1 50%;
          .feature__text-title {
            font-size: 3.4rem;
            line-height: 1;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
            &:after {
              content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0NyA0NyI+PHBhdGggc3Ryb2tlPSIjNUY1RjVGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iNCIgZD0ibTI0LjA4NiAzNS4xOTUtMy41MDggMy41MDhBOC4yNyA4LjI3IDAgMCAxIDguODgzIDI3LjAwOGw3LjAxNy03LjAxNmE4LjI3IDguMjcgMCAwIDEgMTEuNjk0IDAiLz48cGF0aCBzdHJva2U9IiM1RjVGNUYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0IiBkPSJtMjQuMDg3IDExLjgwNSAzLjUwOC0zLjUwOEE4LjI3IDguMjcgMCAwIDEgMzkuMjkgMTkuOTlsLTcuMDE3IDcuMDE4YTguMjcgOC4yNyAwIDAgMS0xMS42OTUgMCIvPjwvc3ZnPg==');
              display: inline-block;
              width: 35px;
              height: 35px;
              margin-left: 10px;
              cursor: pointer;
              @media (max-width: 1200px) {
                width: 30px;
                height: 30px
              }
              @media (max-width: 650px) {
                width: 20px;
                height: 20px
              }
            }
            @media (max-width: 1200px) {
              font-size: 2.5rem
            }
            @media (max-width: 650px) {
              font-size: 1.6rem
            }
          }
          p {
            font-size: 1.25rem;
            line-height: 1.5;
            margin-bottom: 20px;
            @media (max-width: 1200px) {
              font-size: 1.13rem
            }
          }
          ul {
            li {
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 15px;
              background: url('/images/bullet-blue.svg') no-repeat;
              padding-left: 35px;
            }
          }
          .coming-soon-badge {
            background: linear-gradient(88.27deg, #00A3FF 3.61%, #04FFF0 98.53%), linear-gradient(88.27deg, #FFF61A 3.61%, #FF444F 98.53%), linear-gradient(88.27deg, #00C2FF 3.61%, #27FF04 98.53%), #F58200;
            border-radius: 5px;
            font-size: 1.25rem;
            font-weight: 700;
            padding: 7px 25px;
            text-transform: uppercase;
            max-width: fit-content;
            text-shadow: 0px 2px 1px rgba(0, 94, 145, 0.5);
            margin-bottom: 15px;
            @media (max-width: 1200px) {
              font-size: 1.13rem
            }
            @media (max-width: 650px) {
            font-size: .8rem;
            padding: 5px 10px
            }
          }
        }
        .feature__img {
          flex: 0 1 50%
        }
      }
    }
    .promo__action {
      padding: 60px 0 0;
      margin-top: 80px;
      background: linear-gradient(228.26deg, #7E35B2 6.93%, #36174C 87.48%);
      @media (max-width: 650px) {
        padding-top: 35px;
      }
      .promo__feature-inner {
        position: relative;
        .feature__text {
          max-width: 500px;
          @media (max-width: 850px) {
            max-width: 370px
          }
          .feature__text-title {
            font-size: 3.75rem;
            font-weight: 700;
            line-height: 1.4;
            text-transform: uppercase;
            margin-bottom: 15px;
            position: relative;
            z-index: 2;
            @media (max-width: 1200px) {
              font-size: 2.5rem
            }
            @media (max-width: 650px) {
              font-size: 2rem;
              text-align: center;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto
            }
          }
          .feature__text-content {
            padding-bottom: 100px;
            @media (max-width: 650px) {
              padding-bottom: 30px
            }
            p {
              font-size: 1.25rem;
              line-height: 1.5;
              margin-bottom: 35px;
              position: relative;
              z-index: 2;
              @media (max-width: 1200px) {
                font-size: 1.13rem
              }
              @media (max-width: 650px) {
                margin-bottom: 0
              }
            }
            .feature__img {
              position: absolute;
              bottom: -4px;
              right: 0;
              max-width: 580px;
              @media (max-width: 1200px) {
                max-width: 500px;
                right: -150px
              }
              @media (max-width: 650px) {
                position: relative;
                max-width: 330px;
                right: calc(50% - 165px);
              }
            }
          }
        }
      }


    }
    .promo__games-slider {
      .promo__top-buttn {
        @media (max-width: 650px) {
          margin-top: 20px;
        }
        .buttn {
          @media (max-width: 650px) {
            width: 100%;
          }
        }
      }
      .promo__games-slider-title {
        font-size: 3.75rem;
        line-height: 1;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
          font-size: 2.5rem
        }
        @media (max-width: 650px) {
          font-size: 1.6rem
        }
      }
      p {
        font-size: 1.25rem;
        line-height: 1.5;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
          font-size: 1.13rem
        }
      }
      @media (max-width: 850px) {
        padding-top: 40px
      }
    }
    p {
      a {
        text-decoration: underline;
      }
    }
  }
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
