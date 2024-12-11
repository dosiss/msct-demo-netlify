<template>
<section id="ad-banner">
  <div class="ad-banner__wrap">
    <a href="https://www.icegaming.com/" target="_blank" title="https://www.icegaming.com/">
      <div class="ad-banner__inner">
        <nuxt-img src="images/ice-logo2.jpg" sizes="sm:100px md:120px lg:220px" class="ad-banner__logo-new"  alt="ICE Barcelona" />
        <div class="ad-banner__text">
          <div class="ad-banner__text-left">
            <div class="ad-banner__company">Mascot Gaming</div>
            <div class="ad-banner__stand">Booth 2L10</div>
          </div>
          <div class="ad-banner__text-right">
            <div class="ad-banner__date">20 – 22 January 2025</div>
            <div class="ad-banner__place">Fira Barcelona Gran Via</div>
          </div>
        </div>
        <nuxt-img src="images/img-adbanner-decor13-dsktop.png" sizes="sm:200px md:320px lg:450px" class="ad-banner__decor decor-african decor-mobile"  alt="" />
        <nuxt-img src="images/img-adbanner-decor13-dsktop.png" sizes="sm:200px md:520px lg:450px" class="ad-banner__decor decor-african decor-dsktop"  alt="" />
      </div>
  </a>
  </div>
</section>

</template>

<script>
export default {

  mounted() {
    this.animateOnScrollBanner()

  },

  methods: {
    animateOnScrollBanner() {
      if (process.client && window.innerWidth >= 1024) {
        // Initially hide elements
        this.$gsap.set('.ad-banner__text', { opacity: 0 })
        this.$gsap.set('.ad-banner__logo-new', { opacity: 0, xPercent: -100, yPercent: 100 })
        this.$gsap.set('.ad-banner__decor', { opacity: 0, yPercent: 100 })

        // Create scroll-triggered animation
        this.$ScrollTrigger.create({
          trigger: '.ad-banner__wrap',
          start: 'top-=600 top', // Start 300px above the trigger element
          onEnter: () => {
            this.$gsap.to('.ad-banner__text', {
              duration: 1,
              opacity: 1,
              ease: 'power1.out'
            })
            this.$gsap.to('.ad-banner__logo-new', {
              duration: 1,
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
              ease: 'elastic.out(1, 0.5)',
              delay: 0.4 // Slightly stagger the animations
            })
            this.$gsap.to('.ad-banner__decor', {
              duration: 0.75,
              yPercent: 0,
              opacity: 1,
              ease: 'power1.inOut',
              delay: 0.5 // Slightly stagger the animations
            })
          }
        })
      }
    },

  }
}
</script>

<style lang="scss">
#ad-banner::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
  }
  #ad-banner {
    position: relative;
    overflow-x: hidden;
    background: none !important;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    .ad-banner__wrap {
      background: linear-gradient(180deg, #331729 0%, #3C3252 100%);
      margin-top: 45px;
      a {
        display: block;

        .ad-banner__inner {
          padding: 70px 0;
          @media (max-width: 850px) {
            padding-top: 150px;
            padding-bottom: 25px;
          }
          @media (max-width: 650px) {
            padding: 20px 0 150px
          }
          .ad-banner__logo-new {
            position: absolute;
            top: 65px;
            left: 150px;
            max-width: 300px;
            @media (max-width: 1200px) {
              left: 35px
            }
            @media (max-width: 950px) {
              max-width: 150px;
            }
            @media (max-width: 850px) {
              max-width: 100px;
              top: 20px
            }
            @media (max-width: 650px) {
              top: unset;
              bottom: 30px
            }
          }
          .ad-banner__decor {
            position: absolute;
            right: 0;
            bottom: 0;
            @media (max-width: 1200px) {
              right: 0
            }
            @media (max-width: 650px) {
              max-height: 200px
            }
            &.decor-african {
              &.decor-dsktop {
                max-width: 450px;

                @media (max-width: 1840px) {
                  /* right: calc(50% - 834px); */
                  right: calc(50% - 745px);
                }
                @media (max-width: 850px) {
                  display: none
                }
              }
              &.decor-mobile {
                display: none;
                @media (max-width: 850px) {
                  display: block;
                  max-width: 400px;
                  bottom:0
                }
                @media (max-width: 650px) {
                  bottom: 0;
                  max-height: fit-content;
                  max-width: 200px
                }
              }
            }
          }
          .ad-banner__text {
            text-align: center;
            font-weight: 700;
            max-width: fit-content;
            text-transform: uppercase;
            margin: 0 auto;
            z-index: 2;
            position: relative;
            @media (max-width: 850px) {
              margin-left: 35px;
              text-align: left;
            }
            .ad-banner__text-left {
              padding-bottom: 20px;
              border-bottom: 1px solid #fff;
              .ad-banner__company {
                font-size: 1.25rem;
                margin-bottom: 15px;
              }
              .ad-banner__stand {
                font-size: 2.21rem;
                @media (max-width: 650px) {
                  font-size: 1.75rem
                }
              }
            }
            .ad-banner__text-right {
                padding-top: 20px;
                .ad-banner__date {
                  font-size: 2.25rem;
                  margin-bottom: 15px;
                  @media (max-width: 650px) {
                    font-size: 1.75rem
                  }
                }
                .ad-banner__place {
                  font-size: 1.63rem;
                  @media (max-width: 650px) {
                    font-size: 1.31rem;
                    max-width: 60%
                  }
                }

            }
          }
        }

      }

    }
  }
</style>
