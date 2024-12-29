<template>
  <div>
    <div id="getgamesCombined">
      <div class="getgames__wrap">
            <div class="container">
              <div class="getgames-title">
                <h2 class="section-title">{{$t('Get our games')}}</h2>
                <p class="section-description">{{$t('Multiple solutions for the online casino development. Affordable, high-quality, fast.')}}</p>
              </div>
              <div class="getgames-buttn">
                  <button class="buttn buttn-primary buttn-m" @click="showModal = true">{{$t('Get in touch')}}</button>
              </div>
            </div>
            <nuxt-picture src="/images/img-getgames2.webp" :img-attrs="{class:'getgames-decor'}" />
    </div>
    <div class="features-tools__wrap">
      <div class="container-wide">
        <div class="features-tools__outer">
          <div class="features-tools">
            <div class="features-tools__item">
              <div class="features-tools__item-inner">
                <div class="features-tools__item-content">
                  <div class="features-tools__item-group">
                    <div class="features-tools__item-title">{{$t('Mascot Gaming`s Power&nbsp;Up')}}</div>
                    <ul class="features-tools__item-text">
                      <li>{{$t('Free Rounds')}}</li>
                      <li>{{$t('Branded Games')}}</li>
                      <li>{{$t('Pre-Releases')}}</li>
                      <li>{{$t('Tournaments prize pool')}}</li>
                      <li>{{$t('Tailored promotions')}}</li>
                      <li>{{$t('B2C promotion')}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="features-tools__item">
              <div class="features-tools__item-inner">
                <div class="features-tools__item-content">
                  <div class="features-tools__item-title">{{$t('Signature Gaming Experience')}}</div>
                  <ul class="features-tools__item-text">
                    <li><span class="contains-bold">{{$t('100% in-house')}} {{$t('cycle of production')}}</span></li>
                    <li>{{$t('Captivating music')}}</li>
                    <li><span class="contains-bold">{{$t('Exceptional player experience')}}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="features-tools__item">
              <div class="features-tools__item-inner">
                <div class="features-tools__item-content">
                  <div class="features-tools__item-title">{{$t('Positive impact')}}</div>
                  <ul class="features-tools__item-text">
                    <li>{{$t('Charity')}}</li>
                    <li>{{$t('Sports Sponsorship')}}</li>
                    <li>{{$t('Assistance to Animal Shelters')}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link :to="localePath('/features-and-tools')" class="buttn buttn-white buttn-m">{{$t('Learn more')}}</nuxt-link>
        </div>
      </div>
      <div class="container-wide"><div class="hairline"></div></div>
    </div>
  </div>
  <div class="features-more-0__wrap">
    <div class="container-wide">
      <div class="features-more-0">
        <div class="features-more-0__item item-1">
          <div class="features-more-0__item-title">{{$t('Supported languages')}}</div>
          <div class="languages__content">
            <div v-for="country in countriesList" :key="country" class="languages-item">
              <img :src="`/images/flag_${country}.png`" :alt="`${country}`" :title="`${country}`" />
            </div>
          </div>
        </div>
        <div class="features-more-0__item item-2">
          <nuxt-img src="/images/img_crown.png" alt="" />
          <div class="features-more-0__item-title">{{$t('Top 10 provider by crypto payments')}}</div>
        </div>
        <div class="features-more-0__item item-3">
          <div class="features-more-0__item-title">{{$t('100+ Games')}}</div>
          <p class="features-more-1__item-subtitle">{{$t('Up to 3 games per month')}}</p>
        </div>
        <div class="features-more-0__item item-4">
          <div class="features-more-0__item-title">{{$t('All devices support')}}</div>

        </div>
        <div class="features-more-0__item item-5">
          <h3 class="features-more-0__item-title">{{$t('5M+ players worldwide')}}</h3>
          <div class="section-subtext"><span>{{$t('Europe')}} - 59%</span><span>{{$t('Latam')}} - 32%</span><span>{{$t('Asia')}} - 9%</span></div>
        </div>
        <div class="features-more-0__item item-6">
          <h3 class="features-more-0__item-title">{{$t('Licenses')}}<br>{{$t('for regulated markets')}}</h3>
          <div class="features-license__group">
            <div class="features-license__item-img">
              <nuxt-img src="/images/img_front-globallab2.png" alt="" />
            </div>
            <div class="features-license__item-img">
              <nuxt-img src="/images/img_front-onjn2.png" alt="" />
            </div>
            <div class="features-license__item-img">
              <nuxt-img src="/images/img_front-mga.png" alt="" />
            </div>
          </div>
          <div class="features-license__button">
            <nuxt-link :to="localePath('/games-for-regulated-markets')" class="buttn buttn-primary buttn-m">{{$t('Learn more')}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="getofferCombined">
    <div class="get-offer__wrap">
      <div class="get-offer__inner">
        <div class="container">
          <div class="get-offer">
            <div class="getgames-title">
              <h2 class="section-title">{{$t('Get an offer')}}</h2>
              <p class="section-description">{{$t('Providing affordable and fast software solutions for high-quality online casino development.')}}</p>
            </div>
          </div>
          <div class="get-offer__button">
            <button class="buttn buttn-orange buttn-m" @click="showModalOffer = true">{{$t('Get an offer now')}}</button>
          </div>
          <div class="get-offer__decor">
            <nuxt-img id="dec1" src="/images/img_front-rabbit2.png" alt="" />
            <nuxt-img id="dec2" src="/images/img_front-bowl2.png"  alt="" />
            <nuxt-img id="dec3" src="/images/img_front-pumpkin2.png"  alt="" />
            <nuxt-img id="dec4" src="/images/img_front-sack2.png"  alt="" />
            <nuxt-img id="dec5" src="/images/img_front-coin-add.png"  alt="" />
          </div>
        </div>
      </div>
      <div class="get-offer__decor-mob">
        <nuxt-img src="/images/img_front-bowl-mob.png" alt="" />
        <nuxt-img src="/images/img_front-pumpkin-mob.png" alt="" />
      </div>
    </div>
    <div class="profit-traffc__wrap">
      <div class="profit-traffic__inner">
        <div class="container-wide">
          <div class="profit-traffic">
            <div class="profit-traffic__item profit-item">
              <div class="profit-traffic__item-content">
                <div class="item-content-group">
                  <h3 class="item-title">{{$t('Profit games')}}</h3>
                  <p class="section-description">{{$t('Get the maximum profit from the player!')}}</p>
                  <p class="section-bodytext">{{$t('Plots that have been known for many years and have been used by masters of slot game development more than once let the player relax and find themselves in a well–known setting. An understandable and familiar game mechanic lets the player see a potentially big win.')}}</p>
                </div>
                <nuxt-link :to="localePath('/games?type=profit')" class="inner-link link-yellow">
                  <span>{{ $device.isMobile ? $t('See all') : $t('See all profit games') }}</span>
                  <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </nuxt-link>
              </div>
              <div class="profit-decor">
                <nuxt-img src="/images/img_front-profit.png" alt="" />
                <nuxt-img src="/images/img_front-profit-back.png" alt="" />
                <nuxt-img src="/images/img_buttn-cherry.png" alt="" />
              </div>
            </div>
            <div class="profit-traffic__item traffic-item">
              <div class="profit-traffic__item-content">
                <div class="item-content-group">
                  <h3 class="item-title">{{$t('Traffic games')}}</h3>
                  <p class="section-description">{{$t('Cost-optimised way to attract new players to your online casino!')}}</p>
                  <p class="section-bodytext">{{$t('An unusual, provocative storyline, eye–catching graphics, exclusive music, lots of features, including the famous Risk & Buy, and their frequent appearance as well as a high hit rate.')}}</p>
                </div>
                <nuxt-link :to="localePath('/games?type=traffic')" class="inner-link link-yellow">
                  <span>{{ $device.isMobile ? $t('See all') : $t('See all traffic games') }}</span>
                  <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </nuxt-link>
              </div>
              <div class="traffic-decor">
                <nuxt-img src="/images/img_front-traffic.png" alt="" />
                <nuxt-img src="/images/img_front-traffic-back-1.png" alt="" />
                <nuxt-img src="/images/img_front-traffic-back-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partnership__wrap">
    <div class="container-wide">
      <div class="partnership">
        <div class="partnership-title">
          <div class="partners-number">500+</div>
          <div class="partners-descr">{{$t('Partners & Media')}}</div>
          <nuxt-link :to="localePath('partners')" class="inner-link link-yellow">
            <span>{{ $device.isMobile ? $t('See all') : $t('See all partners & media') }}</span>
            <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L9.5 9.5L2 17"  stroke-width="3" stroke-linecap="round"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="partnership-img__outer"><div class="partnership-img"><div class="partnership-img__content"></div></div></div>
    <div class="container-wide">
      <div class="hairline"></div>
    </div>
  </div>

  <div class="container-wide">
    <div class="hairline"></div>
  </div>
  <ContactModal v-show="showModal" @close-modal="showModal = false"/>
  <ContactModalOffer v-show="showModalOffer" @close-modal="showModalOffer = false"/>


  </div>
</template>

<script>

import ContactModal from '~/components/frontpage/ContactModal'
import ContactModalOffer from '~/components/frontpage/ContactModalOffer'


export default {

  components: {
    ContactModal,
    ContactModalOffer
  },
  data() {
    return {
      showModal: false,
      showModalOffer: false,

      countriesList: ['ro', 'mt', 'ru', 'gb', 'es', 'tr', 'jp', 'im', 'cn', 'de', 'fr', 'it', 'ua', 'ge', 'bg', 'cw', 'pt'],

    }
  },

  mounted() {
    this.animateOnScrollGetGames()
    this.animateOnScrollFeatures()
    this.animateOnScrollGetOffer()
//    this.animateOnScrollProfitTraffic()
    this.animateOnScrollPartners()
  },
  methods: {
    // animateOnScrollGetGames() {
    //   if (process.client && window.innerWidth >= 1024) {
    //     // Initially hide elements
    //     this.$gsap.set('.getgames__wrap .container', { opacity: 0, x: '-100%', y: '100%' })
    //     this.$gsap.set('.getgames-decor', { opacity: 0, y: '100%' })
    //
    //     // Create scroll-triggered animation
    //     this.$ScrollTrigger.create({
    //       trigger: '.getgames__wrap',
    //       start: 'top-=600 top', // Start 300px above the trigger element
    //       onEnter: () => {
    //         this.$gsap.to('.getgames__wrap .container', {
    //           duration: .75,
    //           x: '0%',
    //           y: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 1)'
    //         })
    //         this.$gsap.to('.getgames-decor', {
    //           duration: 0.5,
    //           y: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(0.5, 1)'
    //         })
    //       }
    //     })
    //   }
    // },



    // animateOnScrollGetGames() {
    //   if (process.client && window.innerWidth >= 1024) {
    //     // Initially hide elements
    //     this.$gsap.set('.getgames__wrap .container', { opacity: 0, x: '-100%', y: '100%' })
    //     this.$gsap.set('.getgames-decor', { opacity: 0, y: '100%' })
    //     this.$gsap.set('.features-tools__wrap', { opacity: 0, y: '100%' })
    //
    //     const block = document.querySelector('#getgames')
    //     this.$ScrollTrigger.create({
    //       markers: true,
    //       trigger: block,
    //       start: 'top+=300 bottom',
    //       onEnter: self => {
    //         this.$gsap.to(window, {
    //           scrollTo: {
    //             y: block,
    //             offsetY: 0,
    //             autoKill: false, // Ensure the scrollTo animation doesn't get interrupted
    //           },
    //           duration: .75,
    //           ease: 'power2.inOut',
    //           onComplete: () => {
    //             self.disable()
    //             this.$gsap.delayedCall(1, () => {
    //               this.$gsap.to('.getgames__wrap .container', {
    //                 duration: 0.75,
    //                 x: '0%',
    //                 y: '0%',
    //                 opacity: 1,
    //                 ease: 'elastic.out(1, 1)'
    //               })
    //               this.$gsap.to('.getgames-decor', {
    //                 duration: 0.5,
    //                 y: '0%',
    //                 opacity: 1,
    //                 ease: 'elastic.out(0.5, 1)'
    //               })
    //               this.$gsap.to('.features-tools__wrap', {
    //                 duration: 0.5,
    //                 y: '0%',
    //                 opacity: 1,
    //                 ease: 'elastic.out(0.5, 1)'
    //               })
    //             })
    //           }
    //         })
    //       },
    //       onLeave: () => {
    //          console.log('onLeave triggered');
    //         // Hide elements when the block leaves the viewport
    //         this.$gsap.set('.getgames__wrap .container', { opacity: 0, x: '-100%', y: '100%' })
    //         this.$gsap.set('.getgames-decor', { opacity: 0, y: '100%' })
    //         this.$gsap.set('.features-tools__wrap', { opacity: 0, y: '100%' })
    //       },
    //       onEnterBack: self => {
    //          console.log('onEnterBack triggered');
    //         // Scroll the block to the top of the viewport when scrolling up
    //         this.$gsap.to(window, {
    //           scrollTo: {
    //             y: block,
    //             offsetY: 0,
    //             autoKill: false, // Ensure the scrollTo animation doesn't get interrupted
    //           },
    //           duration: 1,
    //           ease: 'power2.inOut',
    //           onComplete: () => {
    //             // Disable ScrollTrigger after scrolling to allow normal scrolling
    //             self.disable()
    //
                // this.$gsap.to('.getgames__wrap .container', {
                //   duration: 0.75,
                //   x: '0%',
                //   y: '0%',
                //   opacity: 1,
                //   ease: 'elastic.out(1, 1)'
                // })
                // this.$gsap.to('.getgames-decor', {
                //   duration: 0.5,
                //   y: '0%',
                //   opacity: 1,
                //   ease: 'elastic.out(0.5, 1)'
                // })
                // this.$gsap.to('.features-tools__wrap', {
                //   duration: 0.5,
                //   y: '0%',
                //   opacity: 1,
                //   ease: 'elastic.out(0.5, 1)'
                // })
    //           }
    //         })
    //       },
    //       onLeaveBack: () => {
    //          console.log('onLeaveBack triggered');
    //         // Hide elements when the block leaves the viewport while scrolling up
    //         this.$gsap.set('.getgames__wrap .container', { opacity: 0, x: '-100%', y: '100%' })
    //         this.$gsap.set('.getgames-decor', { opacity: 0, y: '100%' })
    //         this.$gsap.set('.features-tools__wrap', { opacity: 0, y: '100%' })
    //       }
    //     })
    //   }
    // },
    animateOnScrollGetGames() {
  if (process.client && window.innerWidth >= 1024) {
    // Initially hide elements
         this.$gsap.set('.getgames__wrap .container', { opacity: 0, x: '-100%', y: '100%' })
         this.$gsap.set('.getgames-decor', { opacity: 0, y: '100%' })
         this.$gsap.set('.features-tools__wrap', { opacity: 0, y: '100%' })

    const block = document.querySelector('#getgamesCombined');

    this.$ScrollTrigger.create({
//      markers: true, // Enable markers for debugging
      trigger: block,
      start: 'top-=300 top',
      onEnter: () => {
              this.$gsap.to('.getgames__wrap .container', {
                duration: 0.75,
                x: '0%',
                y: '0%',
                opacity: 1,
                ease: 'elastic.out(1, 1)'
              })
              this.$gsap.to('.getgames-decor', {
                duration: 0.5,
                y: '0%',
                opacity: 1,
                ease: 'elastic.out(0.5, 1)'
              })
              this.$gsap.to('.features-tools__wrap', {
                duration: 0.5,
                y: '0%',
                opacity: 1,
                ease: 'elastic.out(0.5, 1)'
              })
      },
    });
  }
},

    // animateOnScrollFeatures() {
    //   if (process.client && window.innerWidth >= 1024) {
    //     // Initially hide elements
    //     this.$gsap.set('.features-more-0__item.item-1', { opacity: 0, x: '-100%' })
    //     this.$gsap.set('.features-more-0__item.item-2', { opacity: 0, x: '100%' })
    //     this.$gsap.set('.features-more-0__item.item-3', { opacity: 0, x: '100%' })
    //     this.$gsap.set('.features-more-0__item.item-4', { opacity: 0, x: '-100%' })
    //     this.$gsap.set('.features-more-0__item.item-5', { opacity: 0, x: '100%' })
    //     this.$gsap.set('.features-more-0__item.item-6', { opacity: 0, y: '100%' })
    //
    //     // Create scroll-triggered animation
    //     this.$ScrollTrigger.create({
    //       trigger: '.features-more-0',
    //       start: 'top-=400 top', // Start 300px above the trigger element
    //       onEnter: () => {
    //         this.$gsap.to('.features-more-0__item.item-1', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)'
    //         })
    //         this.$gsap.to('.features-more-0__item.item-2', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //           delay: 0.1 // Staggering the animations slightly
    //         })
    //         this.$gsap.to('.features-more-0__item.item-3', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //           delay: 0.2 // Staggering the animations slightly
    //         })
    //         this.$gsap.to('.features-more-0__item.item-4', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //         })
    //         this.$gsap.to('.features-more-0__item.item-5', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //           delay: 0.3 // Staggering the animations slightly
    //         })
    //         this.$gsap.to('.features-more-0__item.item-6', {
    //           duration: 1.5,
    //           y: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //           delay: 0.5 // Staggering the animations slightly
    //         })
    //       }
    //     })
    //   }
    // },

    animateOnScrollFeatures() {
      if (process.client && window.innerWidth >= 1024) {
        // Initially hide elements
            this.$gsap.set('.features-more-0__item.item-1', { opacity: 0, x: '-100%' })
            this.$gsap.set('.features-more-0__item.item-2', { opacity: 0, x: '100%' })
            this.$gsap.set('.features-more-0__item.item-3', { opacity: 0, x: '100%' })
            this.$gsap.set('.features-more-0__item.item-4', { opacity: 0, x: '-100%' })
            this.$gsap.set('.features-more-0__item.item-5', { opacity: 0, x: '100%' })
            this.$gsap.set('.features-more-0__item.item-6', { opacity: 0, y: '100%' })

        const block = document.querySelector('.features-more-0__wrap')
        this.$ScrollTrigger.create({
  //       markers: true,
          trigger: block,
          start: 'top-=400 top',
          onEnter: () => {
                          this.$gsap.to('.features-more-0__item.item-1', {
                            duration: 1.5,
                            x: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)'
                          })
                          this.$gsap.to('.features-more-0__item.item-2', {
                            duration: 1.5,
                            x: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)',
                            delay: 0.1 // Staggering the animations slightly
                          })
                          this.$gsap.to('.features-more-0__item.item-3', {
                            duration: 1.5,
                            x: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)',
                            delay: 0.2 // Staggering the animations slightly
                          })
                          this.$gsap.to('.features-more-0__item.item-4', {
                            duration: 1.5,
                            x: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)',
                          })
                          this.$gsap.to('.features-more-0__item.item-5', {
                            duration: 1.5,
                            x: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)',
                            delay: 0.3 // Staggering the animations slightly
                          })
                          this.$gsap.to('.features-more-0__item.item-6', {
                            duration: 1.5,
                            y: '0%',
                            opacity: 1,
                            ease: 'elastic.out(1, 0.5)',
                            delay: 0.5 // Staggering the animations slightly
                          })
          },
        })
      }
    },
//     animateOnScrollGetOffer() {
//       if (process.client && window.innerWidth >= 1024) {
//         // Initially hide elements
//         this.$gsap.set(['.get-offer', '.get-offer__button', '#dec1', '#dec2', '#dec3', '#dec4', '#dec5'], { opacity: 0 })
//         this.$gsap.set('#dec3', { xPercent: -100, yPercent: 100 })
//         this.$gsap.set('#dec4', { xPercent: 100, yPercent: 100 })
//         this.$gsap.set('#dec5', { xPercent: 100, yPercent: -100 })
//
//
//         // Create scroll-triggered animation
//         this.$ScrollTrigger.create({
//           trigger: '.get-offer__wrap',
//           start: 'top-=500 top', // Start 300px above the trigger element
// //          markers: true,
//           onEnter: () => {
//             this.$gsap.to('.get-offer', {
//               duration: 1.5,
//               opacity: 1,
//               ease: 'power1.out'
//             })
//             this.$gsap.to('.get-offer__button', {
//               duration: 1.5,
//               opacity: 1,
//               ease: 'power1.out',
//               delay: 0.1 // Slightly stagger the animations
//             })
//             this.$gsap.to('#dec1', {
//               duration: 1.5,
//               opacity: 1,
//               ease: 'power1.out',
//               delay: 0.2 // Slightly stagger the animations
//             })
//             this.$gsap.to('#dec2', {
//               duration: 1.5,
//               opacity: 1,
//               ease: 'power1.out',
//               delay: 0.3 // Slightly stagger the animations
//             })
//             this.$gsap.to('#dec3', {
//               duration: 1.5,
//               xPercent: 0,
//               yPercent: 0,
//               opacity: 1,
//               ease: 'elastic.out(1, 0.5)',
//               delay: 0.4 // Slightly stagger the animations
//             })
//             this.$gsap.to('#dec4', {
//               duration: 1.5,
//               opacity: 1,
//               xPercent: 0,
//               yPercent: 0,
//               // motionPath: {
//               //   path: [{ x: 0, y: 0 }, { x: -50, y: -25 }, { x: -100, y: 0 }],
//               //   type: 'cubic'
//               // },
//               ease: 'elastic.out(1, 0.5)',
//               delay: 0.5 // Slightly stagger the animations
//             })
//             this.$gsap.to('#dec5', {
//               duration: 1.5,
//               xPercent: 0,
//               yPercent: 0,
//               opacity: 1,
//               ease: 'elastic.out(1, 0.5)',
//               delay: 0.4 // Slightly stagger the animations
//             })
//           }
//         })
//       }
//     },

    animateOnScrollGetOffer() {
      if (process.client && window.innerWidth >= 1024) {
        this.$gsap.set([ '#dec1', '#dec2', '#dec3', '#dec4', '#dec5'], { opacity: 0 })
        this.$gsap.set('#dec3', { xPercent: -100, yPercent: 100 })
        this.$gsap.set('#dec4', { xPercent: 100, yPercent: 100 })
        this.$gsap.set('#dec5', { xPercent: 100, yPercent: -100 })
        this.$gsap.set('.profit-item', { opacity: 0, x: '-100%' })
        this.$gsap.set('.traffic-item', { opacity: 0, x: '100%' })


        const block = document.querySelector('#getofferCombined')
        this.$ScrollTrigger.create({
//          markers: true,
          trigger: block,
          start: 'top-=500 top',
          onEnter: () => {
                  this.$gsap.to('#dec1', {
                    duration:.5,
                    opacity: 1,
                    ease: 'power1.out',
                    delay: 0.2 // Slightly stagger the animations
                  })
                  this.$gsap.to('#dec2', {
                    duration: 1.5,
                    opacity: 1,
                    ease: 'power1.out',
                    delay: 0.4 // Slightly stagger the animations
                  })
                  this.$gsap.to('#dec3', {
                    duration: 1.5,
                    xPercent: 0,
                    yPercent: 0,
                    opacity: 1,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.5 // Slightly stagger the animations
                  })
                  this.$gsap.to('#dec4', {
                    duration: 1.5,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    // motionPath: {
                    //   path: [{ x: 0, y: 0 }, { x: -50, y: -25 }, { x: -100, y: 0 }],
                    //   type: 'cubic'
                    // },
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.6 // Slightly stagger the animations
                  })
                  this.$gsap.to('#dec5', {
                    duration: 1.5,
                    xPercent: 0,
                    yPercent: 0,
                    opacity: 1,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.5 // Slightly stagger the animations
                  })
                  this.$gsap.to('.profit-item', {
                    duration: 1.5,
                    x: '0%',
                    opacity: 1,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 1
                  })
                  this.$gsap.to('.traffic-item', {
                    duration: 1.5,
                    x: '0%',
                    opacity: 1,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 1.1 // Staggering the animations slightly
                  })
          },
        })
      }
    },

    // animateOnScrollProfitTraffic() {
    //   if (process.client && window.innerWidth >= 1024) {
    //     // Initially hide elements
    //     this.$gsap.set('.profit-item', { opacity: 0, x: '-100%' })
    //     this.$gsap.set('.traffic-item', { opacity: 0, x: '100%' })
    //
    //     // Create scroll-triggered animation
    //     this.$ScrollTrigger.create({
    //       trigger: '.profit-traffic',
    //       start: 'top-=500 top', // Start 300px above the trigger element
    //       onEnter: () => {
    //         this.$gsap.to('.profit-item', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)'
    //         })
    //         this.$gsap.to('.traffic-item', {
    //           duration: 1.5,
    //           x: '0%',
    //           opacity: 1,
    //           ease: 'elastic.out(1, 0.5)',
    //           delay: 0.1 // Staggering the animations slightly
    //         })
    //       }
    //     })
    //   }
    // },
    // animateOnScrollPartners() {
    //   if (process.client && window.innerWidth >= 1024) {
    //     const timeline = this.$gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '.partnership__wrap',
    //         start: 'top-=300 top', // Start 300px above the trigger element
    //         onEnter: () => {
    //           timeline
    //             .to('.partnership-img__content', {
    //               x: -1600,
    //               duration: 1.5,
    //               ease: 'power1.out'
    //             })
    //             .to('.partnership-img__content', {
    //               x: -3200,
    //               duration: 1.5,
    //               ease: 'power1.out',
    //               delay: 3
    //             })
    //             .to('.partnership-img__content', {
    //               x: -4800,
    //               duration: 1.5,
    //               ease: 'power1.out',
    //               delay: 3
    //             })
    //             .to('.partnership-img__content', {
    //               x: -5400,
    //               duration: 1.5,
    //               ease: 'power1.out',
    //               delay: 3
    //             })
    //             .to('.partnership-img__content', {
    //               x: 0,
    //               duration: 1.5,
    //               ease: 'power1.out',
    //               delay: 5
    //             })
    //         }
    //       }
    //     })
    //   }
    // },

    animateOnScrollPartners() {
      if (process.client && window.innerWidth >= 1024) {
        this.$gsap.timeline({
          scrollTrigger: {
            trigger: '.partnership__wrap',
            start: 'top bottom',
            end: 'bottom top', // Start 300px above the trigger element
            onEnter: () => {
              // const scrollAnimation = this.$gsap.to('.partnership-img__content', {
              //   x: -5200,
              //   duration:60,
              //  ease: 'power1.out',
              //   paused: true,
              //   repeat: -1, // Repeat indefinitely
              //   yoyo: true,
              //   // onComplete: () => {
              //   //   // Scroll back after 3 seconds
              //   //   this.$gsap.delayedCall(3, () => {
              //   //     this.$gsap.to('.partnership-img__content', {
              //   //       x: 0,
              //   //       duration: 1.5,
              //   //       ease: 'power1.out'
              //   //     });
              //   //   });
              //   // }
              // });
              const scrollAnimation = this.$gsap.timeline({ repeat: -1 })
                .to('.partnership-img__content', {
                  x: -5200,
                  duration: 60,
                  ease: 'none',
                })
                .to('.partnership-img__content', {
                  x: 0,
                  duration: 0.5,
                  ease: 'none',
                })
                .to({}, { duration: 1 }); // Optional pause before starting over


  //            scrollAnimation.play();

              // Mouse events to pause/resume animation
              const contentElement = document.querySelector('.partnership-img__content');
              contentElement.addEventListener('mouseenter', () => {
                scrollAnimation.pause();
              });
              contentElement.addEventListener('mouseleave', () => {
                scrollAnimation.resume();
              });
            }
          }
        });
      }
    },


  }
}
</script>

<style scoped lang="scss">
html:lang(pt) {
 .item-title {
   white-space: normal !important;
 }
}
html:lang(es) {
 .item-title {
   white-space: normal !important;
 }
}
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
  padding-top: 25px;
  position: relative;
  @media (max-width: 650px) {
    padding-bottom: 275px;
    margin-bottom: 0;
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
    margin-top: 18%;
    margin-bottom: 40px;
    @media (max-width: 1300px) {
      margin-top: 10%
    }
    @media (max-width: 650px) {
      margin-bottom: 20px
    }
    .section-title {
      font-size: 3.75rem;
      text-transform: uppercase;
      max-width: 60%;
      @media (max-width: 1024px) {
        max-width: 100%
      }
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
      max-width: 400px;
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
    max-width: 54%;
    @media (min-width: 1750px) {
      max-width: 900px
    }
    @media (max-width: 1300px) {
      max-width: 50%;
    }
    @media (max-width: 650px) {
      max-width: 100%;
      bottom: -5px;
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
          .item-title {
            @media (max-width: 1760px) {
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
            }
            &.no-margins {
              max-width: 100%
            }
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
          @media (max-width: 1870px) and (min-width: 1399px) {
            min-height: 83px
          }
          @media (max-width: 1400px) and (min-width: 650px) {
            min-height: 125px
          }
          @media (max-width: 650px) {
            font-size: 1.75rem;
          }
          &.no-height {
            min-height: auto;
          }
        }
        .section-subtext {
          margin-top: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          span {
            padding: 0 10px 10px
          }
        }
        .section-description {
          font-size: 1.25rem;
          line-height: 1.5;
          margin: 20px 0 40px;
          min-height: 60px
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
      .section-img-mob {
        display: none
      }
      .section-img-mob {
        @media (max-width: 650px) {
          display: block;
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
  &.padding-top {
    padding: 60px 0 0
  }
}
.partners__wrap {
  padding: 120px 0;
  .partners__content-img {
    position: relative;
    vertical-align: top;
    .partners-content-img-inner {
      img  {
        max-width: 100%
      }
    }
  }
  .partners__content-data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .partners-heading {
      display: flex;
      align-items: center;
    }
    .partners-number {
      font-size: 4.6rem;
      font-weight: 700;
    }
    .partners-descr {
      font-size: 2.12rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 30px
    }
  }
  &.mobile {
    padding: 80px 0;
    @media (max-width: 650px) {
      padding: 50px 0;
    }
    .partners__content {
      overflow: hidden;
    }
    .partners__content-img {
      display: block;
      width: 120%;
      .partners-content-img-inner {
        position: relative;
        right: 0;
        img  {
          left: -70px;
          position: relative;
        }
      }
    }
    .partners__content-data {
      display: block;
      text-align: center;
      margin-bottom: 40px;
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
        margin: 20px 0 60px;

        text-transform: uppercase;
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
.features-tools__wrap {
  padding:0;
  .features-tools__outer {
    background: linear-gradient(83.48deg, #4838B0 1.1%, #36245C 10.38%, #4B2C73 84.1%, #6B2C7B 98.7%);
    box-shadow: 0px 19px 58.5px 13px rgba(104, 35, 250, 0.32), inset 0px 1px 3.2px #B487F3;
    border-radius: 18px;
    padding: 45px 55px;
    @media (max-width: 650px) {
      padding: 35px 25px
    }
  }
  .features-tools {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    @media (max-width: 1100px) {
      flex-wrap: wrap;
    }
    @media (max-width: 850px) {
      flex-direction: column
    }
    .features-tools__item {
      width: 30%;
      border-radius: 19px;
      @media (max-width: 850px) {
        width: 100%;
        margin-bottom: 30px
      }
      @media (max-width: 650px) {
        margin-bottom: 5px
      }
      .features-tools__item-inner {

        .features-tools__item-title {
          font-size: 2.1rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.35;
          margin-bottom: 25px;
          min-height: 91px;
          @media (max-width: 1550px) {
            min-height: 136px
          }
          @media (max-width: 850px) {
              min-height: fit-content;
          }
          @media (max-width: 650px) {
            font-size: 1.6rem;
            margin-bottom: 10px
          }
        }
        .features-tools__item-text {
          border-top: 0.5px solid #B2B2B2;
          list-style: none;
          font-size: 1.2rem;
          color: #fff;
          padding-top: 25px;
          line-height: 1.5;
          margin-bottom: 25px;
          @media (max-width: 650px) {
            font-size: .9rem;
          }
          li {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            &:before {
              content: "";
              background: url("/images/img_star.png") no-repeat;
              width: 33px;
              background-size: contain;
              height: 32px;
              background-position-y: 2px;
              margin-right: 10px;
              flex: 0 1 33px
            }
            span {
              flex: 1 0;
              text-align: left;
            }
            strong {
              font-weight: 700;
              margin-right: 5px
            }
          }
          @media (max-width: 650px) {
          list-style: none;
          text-align: center;
          }
        }

      }

    }
  }
  .buttn {
    margin: 0 auto;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: -40px;
      top: -21px;
      width: 108px;
      height: 108px;
      background: url("/images/img_buttn-cherry.png") no-repeat;
      background-size: contain;
      @media (max-width: 650px) {
        right: -2px;
        top: -32px;
        width: 85px;
        height: 85px;
      }
    }
  }
}
.features-more-0__wrap::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
  }
.features-more-0__wrap {
  padding-top: 20px;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  .features-more-0 {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr 1fr;
    grid-template-rows: repeat(2, 1fr) .8fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr auto auto auto auto;
    }
    .features-more-0__item {
      background: #212121;
      border-radius: 18px;
      .features-more-0__item-title {
        font-weight: 700;
        line-height: 1.3;
        text-align: center;
        letter-spacing: 0.1px;
        text-transform: uppercase;

      }
      &.item-1 {
        grid-area: 1 / 1 / 2 / 2;
        padding: 25px 25px 25px 45px;
        .features-more-0__item-title {
          font-size: 1.7rem;
          background: linear-gradient(88.27deg, #00C2FF 3.61%, #27FF04 98.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 650px) {
            font-size: 1.25rem
          }
        }
        .languages__content {
          display: flex;
          flex-wrap: wrap;
          margin-top: 25px;
          .languages-item {
            width: 50px;
            height: auto;
            margin-right: 20px;
            @media (max-width: 650px) {
              width: 25px;
              margin-right: 10px
            }
          }
        }
        @media (max-width: 1000px) {
          grid-area: 1 / 1 / 2 / 3;
        }
        @media (max-width: 650px) {
          grid-area: 1 / 1 / 2 / 3;
          padding: 25px
        }
      }
      &.item-2 {
        grid-area: 1 / 2 / 2 / 3;
        padding: 25px 45px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .features-more-0__item-title {
          margin: 25px auto 0;
          max-width: 250px;
          font-weight: 700;
          font-size: 1.8rem;
          line-height: 1.3;
          letter-spacing: 0.1px;
          text-transform: uppercase;
          background: linear-gradient(88.27deg, #FF6C1A 3.61%, #FFE604 98.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 650px) {
            font-size: 1.25rem;
            text-transform: none;
            margin-top: 15px
          }
        }
        img {
          max-width: 90px;
          height: auto;
          @media (max-width: 650px) {
            max-width: 50px
          }
        }
        @media (max-width: 1000px) {
          grid-area: 2 / 1 / 3 / 2;
        }
        @media (max-width: 650px) {
          grid-area: 2 / 1 / 3 / 2;
          padding: 25px 20px
        }
      }
      &.item-3 {
        grid-area: 1 / 3 / 2 / 4;
        text-align: center;
        padding: 25px 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .features-more-0__item-title {
          font-weight: 700;
          font-size: 4rem;
          line-height: 1.2;
          text-align: center;
          letter-spacing: 0.1px;
          text-transform: uppercase;
          background: linear-gradient(88.27deg, #FFF61A 3.61%, #FF444F 98.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 650px) {
            font-size: 1.25rem
          }
        }
        p {
          font-size: 1.3rem;
          margin-top: 25px;
          @media (max-width: 650px) {
            font-size: 1rem
          }
        }
        @media (max-width: 1000px) {
          grid-area: 2 / 2 / 3 / 3;
        }
        @media (max-width: 650px) {
          grid-area: 2 / 2 / 3 / 3;
          padding: 25px 20px
        }
      }
      &.item-4 {
        grid-area: 2 / 1 / 3 / 3;
        background: url('/images/img_device-support.webp') no-repeat;
        background-size: cover;
        position: relative;
        padding: 25px 45px;
        .features-more-0__item-title {
          position: absolute;
          top: 45px;
          left: 215px;
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 1.3;
          text-align: center;
          letter-spacing: 0.1px;
          text-transform: uppercase;
          background: linear-gradient(88.27deg, #7FAAFF 3.61%, #ADFF99 98.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 850px) {
            left: 90px
          }
          @media (max-width: 650px) {
            font-size: 1.25rem;
            position: relative;
            top: unset;
            left: unset
          }
        }
        @media (max-width: 1000px) {
          grid-area: 3 / 1 / 4 / 2;
        }
        @media (max-width: 650px) {
          grid-area: 3 / 1 / 4 / 3;
          padding: 25px 20px;
          background: url('/images/img_device-support-mob.webp') no-repeat;
          height: 215px;
          background-position-y: bottom;
          background-size: cover

        }
      }
      &.item-5 {
        grid-area: 2 / 3 / 3 / 4;
        background: url('/images/img_world-map.webp') no-repeat;
        background-size: cover;
        padding: 25px 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .features-more-0__item-title {
          font-weight: 700;
          font-size: 1.8rem;
          line-height: 1.3;
          text-align: center;
          letter-spacing: 0.1px;
          text-transform: uppercase;
          background: linear-gradient(88.27deg, #00A3FF 3.61%, #04FFF0 98.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 650px) {
            font-size: 1.25rem
          }
        }
        .section-subtext {
          font-size: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 25px;
          @media (max-width: 650px) {
            font-size: 1rem;
            flex-direction: row;
            flex-wrap: wrap;
          }
          span {
            margin-bottom: 10px;
            @media (max-width: 650px) {
              margin-right: 10px;
              margin-left: 10px;
              white-space: nowrap;
            }
          }
        }
        @media (max-width: 1000px) {
          grid-area: 3 / 2 / 4 / 3;
        }
        @media (max-width: 650px) {
          grid-area: 4 / 1 / 5 / 3;
          padding: 25px 20px
        }
      }
      &.item-6 {
        grid-area: 3 / 1 / 4 / 4;
        padding: 25px 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .features-more-0__item-title {
          text-align: left;
          max-width: 300px;
          font-weight: 750;
          font-size: 2.1rem;
          line-height: 1.3;
          letter-spacing: 0.1px;
          text-transform: uppercase;
          background: linear-gradient(269.79deg, #FFF61A 3.89%, #FF444F 116.55%), #FFFFFF;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          @media (max-width: 850px) {
            flex: 0 1;
            margin-bottom: 10px;
          }
          @media (max-width: 650px) {
            font-size: 1.25rem;
          }
        }
        .features-license__group {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
          .features-license__item-img {
            max-width: 100px;
            margin: 0 10px;
            @media (max-width: 850px) {
              max-width: 70px
            }
            @media (max-width: 650px) {
              max-width: 45px
            }
            &:nth-child(3) {
              max-width: 230px;
              @media (max-width: 850px) {
                max-width: 155px
              }
              @media (max-width: 650px) {
                max-width: 120px
              }
            }
            @media (max-width: 1000px) {
              margin-bottom: 15px
            }
          }
          @media (max-width: 1000px) {
            flex-wrap: wrap;
            flex: 0 1 50%;
          }
          @media (max-width: 850px) {
            flex-basis: 36%
          }
          @media (max-width: 850px) {
            flex-basis: 50%
          }
        }
        .features-license__button {
          @media (max-width: 1000px) {
            flex: 1 0 100%
          }
          @media (max-width: 650px) {
            flex: 0 1 auto;
            margin: 0 auto;
          }
        }
        @media (max-width: 1000px) {
          grid-area: 4 / 1 / 5 / 3;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        @media (max-width: 650px) {
          grid-area: 5 / 1 / 6 / 3;
          padding: 25px 20px
        }
      }

    }
  }
}
.features-more-1__wrap {
  padding-top: 60px;
  .features-more-1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    @media (max-width: 990px) {
      flex-wrap: wrap
    }
    .features-more-1__item {
      width: 290px;
      background: #0f0f0f;
      border-radius: 9px;
      padding: 40px 20px;
      .features-more-1__item-title {
        font-size: 2.12rem;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3
      }
      .languages__content {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        .languages-item {
            margin-right: 14px;
          img {
            width: 50px;
            height: auto;
          }
          &:nth-child(4n) {
            margin-right: 0;
            @media (max-width: 990px) {
              margin-right: 14px
            }
          }
        }

      }
      &:first-child {
        @media (max-width: 990px) {
          flex: 0 1 45%;
          text-align: center;
          margin-bottom: 25px;
        }
        @media (max-width: 650px) {
          flex-basis: 100%
        }
      }
      &:nth-child(2) {
        .features-more-1__item-title {
          margin-top: 25px
        }
        img {

          @media (max-width: 990px) {
            max-width: 250px;
          }
        }
        @media (max-width: 990px) {
          flex: 0 1 45%;
          text-align: center;
          margin-bottom: 25px
        }
        @media (max-width: 650px) {
          flex-basis: 100%
        }
      }
      &:nth-child(3) {
        .features-more-1__item-title {
          margin-bottom: 25px
        }
        img {
          @media (max-width: 990px) {
            max-width: 350px;
          }
          @media (max-width: 650px) {
            max-width: 100%;
          }
        }
        @media (max-width: 990px) {
          flex: 1 0 auto;
          text-align: center
        }
      }
    }
  }
}
.features-license__wrap {
  padding: 160px 0 0;
  background: url('/images/back_license.jpg') center no-repeat;
  background-size: cover;
  @media (max-width: 650px) {
    padding-top: 30px;
  }
  h3 {
    font-size: 2.12rem;
    text-transform: uppercase;
    text-align: center;
  }
  .features-license {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 100px 0 80px;
    @media (max-width: 650px) {
      flex-direction: column;
      margin: 30px 0 30px
    }
    .features-license__item {
      @media (max-width: 650px) {
        margin-bottom: 30px;
      }
      .features-license__item-title {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        @media (max-width: 650px) {
          font-size: 1.1rem;
        }
      }
      .features-license__item-img {

      }
      &:nth-child(2) {
        margin: 0 30px;
        @media (max-width: 650px) {
          margin: 0 0 30px;
        }
      }
    }
  }
  .features-license__button {
    margin-bottom: 80px;
    @media (max-width: 650px) {
      margin-bottom: 40px;
    }
    .buttn {
      margin: 0 auto;
    }
  }
}
.get-offer__wrap::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
  }
.get-offer__wrap {
  padding-top: 120px;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  .get-offer__inner {
    position: relative;
    background: linear-gradient(87.43deg, #7C3D20 -0.63%, #492C1F 27.54%, #212121 100%);
    padding: 45px 0 55px;
    margin-bottom: 80px;
    .getgames-title {
        text-align: center;
        @media (max-width: 650px) {
          padding-left: 0;
          padding-top: 0;
        }
        h2 {
          font-size: 3.75rem;
          text-transform: uppercase;
          margin-bottom: 30px;
          position: relative;
          z-index: 3;
          @media (max-width: 650px) {
            font-size: 1.6rem
          }
        }
        .section-description {
          font-size: 1.25rem;
          line-height: 1.5;
          margin: 0 auto 35px;
          max-width: 450px;
          font-weight: 600;
          color: #FFDFDF;
          @media (max-width: 650px) {
            font-size: 1.1rem;
            color: #fff;
            font-weight: 500
          }
        }
    }
    @media (max-width: 650px) {
      padding-bottom: 182px;
      overflow: hidden;
    }
  }
  .get-offer__button {
    @media(max-width: 850px) {
      padding-left: 0;
      position: relative;
      z-index: 3
    }
    @media (max-width: 650px) {
      padding-left: 0;
    }
    button {
      display: block;
      margin: 0 auto;
      position: relative;
      z-index: 2
    }
  }
  .get-offer__decor {
    img {
      position: absolute;
      &:first-child {
        position: absolute;
        max-height: 471px;
        bottom: -51px;
        right: 50%;
        z-index: 2;
        transform: translate(-315px);
          @media (max-width: 850px) {
            transform: translate(428px) scaleX(-1);
          }
          @media (max-width: 650px) {
            bottom: -50px;
            top: unset;
            right: 0;
            left: unset;
            transform: scaleX(-1);
            max-height: 314px
          }
      }
      &:nth-child(2) {
        bottom: -32px;
        max-height: 257px;
        right: 50%;
        transform: translate(-460px);
          @media (max-width: 850px) {
            transform: translate(-220px);
          }
          @media (max-width: 650px) {
            display: none;
          }
      }
      &:nth-child(3) {
        bottom: -56px;
        max-height: 172px;
        right: 50%;
        transform: translate(-635px);
          @media (max-width: 850px) {
            transform: translate(-96px);
            top: unset;
            bottom: 0;
        }
        @media (max-width: 650px) {
          display: none;
        }
      }
      &:nth-child(4) {
        position: absolute;
        max-height: 383px;
        bottom: -77px;
        right: 50%;
        transform: translate(700px);

          @media (max-width: 1024px) {
            display: none
          }
      }
      &:nth-child(5) {
        position: absolute;
        right: 50%;
        transform: translate(503px, -345px);
        max-height: 78px;

          @media (max-width: 1024px) {
            display: none
          }
      }
    }
  }
  .get-offer__decor-mob {
    display: none;
    @media (max-width: 650px) {
      display: block
    }
    img {
      &:nth-child(1) {
        position: absolute;
        bottom: 50px;
        max-height: 220px;
        left: 0;
        z-index: 2;
      }
      &:nth-child(2) {
        position: absolute;
        z-index: 3;
        bottom: 14px;
        max-height: 178px;
        left: 50px;
      }
    }

  }
}
.profit-traffc__wrap {
  padding: 70px 0 0;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    padding: 0
  }
  .profit-traffic__inner {

    .profit-traffic {
      display: flex;
      justify-content: space-between;
      padding-bottom: 100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      @media (max-width: 1024px) {
        flex-direction: column;
      }
      .profit-traffic__item {
        position: relative;
        background: #0f0f0f;
        border-radius: 9px;
        flex: 0 1 48%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &.profit-item {
          padding: 45px 60px 55px 220px;
          @media (max-width: 1420px) {
            margin-right: 5px
          }
          @media (max-width: 1024px) {
            padding-left: 50%;
            margin-bottom: 60px
          }
          @media (max-width: 650px) {
            padding: 20px 15px;
            margin-bottom: 20px;
            overflow: hidden;
          }
          .item-content-group {
            max-width: 380px;
            @media (max-width: 650px) {
              margin-bottom: 25px;

            }
          }
          a {
            justify-content: flex-end;
            white-space: nowrap;
            @media (max-width: 1420px) {
              justify-content: flex-start;
            }
          }
        }
        &.traffic-item {
          padding: 45px 250px 55px 80px;
          @media (max-width: 1420px) {
            margin-left: 5px
          }
          @media (max-width: 1024px) {
            padding-right: 50%;
          }
          @media (max-width: 650px) {
            padding: 20px 15px;
          }
          .item-content-group {
            max-width: 305px;
            @media (max-width: 650px) {
              margin-bottom: 25px;
            }
          }
        }
        .profit-traffic__item-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          @media (max-width: 1420px) {
            min-height: 370px
          }
          @media (max-width: 1024px) {
            min-height: unset
          }
          .item-content-group {
            @media (min-width: 1650px) {
              min-height: 270px
            }
            @media (min-width: 1300px) {
              min-height: 295px
            }
          }
          .item-title {
            white-space: nowrap;
            font-weight: 700;
            font-size: 2.1rem;
            line-height: 1.3;
            text-transform: uppercase;
            background: linear-gradient(88.27deg, #FF6C1A 3.61%, #FFE604 98.53%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            @media (max-width: 650px) {
              font-size: 1.5rem
            }
          }
          .section-description {
            font-size: 1.3rem;
            line-height: 1.3;
            letter-spacing: 0.1px;
            margin: 25px 0 15px;
            @media (max-width: 650px) {
              font-size: .8rem
            }
          }
          .section-bodytext {
            font-size: .9rem;
            line-height: 1.3;
            letter-spacing: 0.1px;
            color: #B6B6B7;
            margin-bottom: 25px;
            position: relative;
            z-index: 3;
            @media (max-width: 650px) {
              font-size: .8rem;
              max-width: 200px;
            }
          }
        }
      }
    }
    .profit-decor {
      img {
        position: absolute;
        &:first-child {
          bottom: 0;
          left: -27px;
          max-height: 450px;
          z-index: 3;
          @media (max-width: 1024px) {
            left: 50%;
            transform: translate(-357px);
            max-height: 378px
          }
          @media (max-width: 650px) {
            max-height: 358px;
            transform: translate(-68px) scaleX(-1);
            bottom: -186px;
          }
        }
        &:nth-child(2) {
          bottom: 0;
          left: -27px;
          max-height: 300px;
          z-index: 2;
          @media (max-width: 1024px) {
            left: 50%;
            transform: translate(-357px);
          }
          @media (max-width: 650px) {
            max-height: 172px;
            transform: translate(-66px);
            bottom: -40px;
          }
        }
        &:nth-child(3) {
          top: -28px;
          left: 112px;
          max-height: 119px;
          z-index: 2;
          @media (max-width: 1024px) {
            left: 50%;
            transform: translate(-199px);
            top: 46px;
          }
          @media (max-width: 650px) {
            max-height: 61px;
            transform: translate(98px);
            top: 129px;
          }
        }
      }
    }
    .traffic-decor {
      img {
        position: absolute;
        &:first-child {
          bottom: -24px;
          right: -27px;
          max-height: 250px;
          z-index: 3;
          @media (max-width: 1024px) {
            right: 50%;
            transform: translate(300px);
            max-height: 307px;
            bottom: 9px;
          }
          @media (max-width: 650px) {
            max-height: 165px;
            transform: translate(175px);
            bottom: -47px;
          }
        }
        &:nth-child(2) {
          top: 17px;
          right: 48px;
          max-height: 195px;
          z-index: 2;
          @media (max-width: 650px) {
            max-height: 89px;
            top: 186px;
            right: 43px;
          }
        }
        &:nth-child(3) {
          bottom: 0;
          right: 0;
          max-height: 319px;
          z-index: 2;
          @media (max-width: 650px) {
            max-height: 201px;
          }
        }
      }
    }
  }
}
.partnership__wrap {
  padding-top: 80px;
  @media (max-width: 650px) {
    padding-top: 60px
  }
  .partnership {

    .partnership-title {
      display: flex;
      align-items: center;
      @media (max-width: 1024px) {
        flex-wrap: wrap;
      }
      a {
        flex: 1 0 auto;
        justify-content: flex-end;
      }
      .partners-number {
        margin-right: 10px;
        font-weight: 700;
        font-size: 3.75rem;
        line-height: 1.3;
        letter-spacing: 0.1px;
        text-transform: uppercase;
        background: linear-gradient(88.27deg, #FF6C1A 3.61%, #FFE604 98.53%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        @media (max-width: 650px) {
          font-size: 1.6rem
        }
      }
      .partners-descr {
        color: #fff;
        font-weight: 700;
        font-size: 3.75rem;
        line-height: 1.3;
        text-transform: uppercase;
        @media (max-width: 1024px) {
          order: 3;
        }
        @media (max-width: 650px) {
          font-size: 1.25rem;
          flex: 1 0 100%
        }
      }
    }
  }

  .partnership-img {
    margin: 35px 0;
    overflow-x: scroll;
    position: relative;

    @media (max-width: 650px) {
      background-position-x: -100px;
      margin: 0
    }
    .partnership-img__content {
      width: 6760px;
      background: url("/images/img_front-partners2.webp") no-repeat;
      background-size: contain;
      background-position: center;
      height: 100px;
      margin-bottom: 20px;
    }

    @media (max-width: 1680px) {
    }
  }
  .partnership-img {
      overflow-y: scroll;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  .partnership-img::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
  }
  .partnership-img__outer {
    position:relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 400px;
      background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      z-index: 2;
      @media (max-width: 650px) {
        width: 100px
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 400px;
      background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      transform: matrix(-1, 0, 0, 1, 0, 0);
      @media (max-width: 650px) {
        width: 100px
      }
    }
  }
  .hairline {
    margin-top: 90px;
    @media (max-width: 650px) {
      margin-top: 60px
    }
  }
}
</style>
