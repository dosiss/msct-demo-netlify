<template>
<section id="ad-banner">
  <div class="ad-banner__wrap">
    <a href="https://sbcevents.com/sbc-summit-barcelona/" target="_blank" title="https://sbcevents.com/sbc-summit-barcelona/">
      <div class="ad-banner__inner">
        <nuxt-img src="/images/SBC-logo.svg" class="ad-banner__logo"  alt="SBC Summit" />
        <div class="ad-banner__text">
          <div class="ad-banner__text-left">
            <div class="ad-banner__company">Mascot Gaming</div>
            <div class="ad-banner__stand">BOOTH CG914</div>
          </div>
          <div class="ad-banner__text-right">
            <div class="ad-banner__date">19 – 21 Septmber, 2023</div>
            <div class="ad-banner__place">Barcelona, Spain</div>
          </div>
        </div>
        <nuxt-img src="/images/img-adbanner-decor4.png" class="ad-banner__decor"  alt="" />
      </div>
  </a>
  </div>
</section>

</template>

<style lang="scss">
  #ad-banner {
    background: linear-gradient(180deg, #331729 0%, #3C3252 100%);
    .ad-banner__wrap {
      a {
        display: block;
        position: relative;
        .ad-banner__inner {
          padding: 70px 0;
          @media (max-width: 850px) {
            padding-top: 150px
          }
          @media (max-width: 650px) {
            padding: 20px 0 150px
          }
          .ad-banner__logo {
            position: absolute;
            top: 125px;
            left: 150px;
            max-width: 280px;
            height: auto;
            @media (max-width: 1200px) {
              left: 35px
            }
            @media (max-width: 850px) {

              top: 20px
            }
            @media (max-width: 650px) {
              top: unset;
              bottom: 30px;
              max-width: 185px;
              z-index: 2
            }
          }
          .ad-banner__decor {
            position: absolute;
            right: 0;
            bottom: 0;
            @media (max-width: 650px) {
              max-height: 200px
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
