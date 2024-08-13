<template>

  <div>
    <MainHeader />
    <div id="featuresTools">

        <h1>{{$t('Features and tools')}}</h1>
        <article>
          <div class="features-tools__wrap">
            <div class="container">
              <div class="features-tools__outer">
                <div class="features-tools">
                  <div class="features-tools__item">
                    <div class="features-tools__item-inner">
                      <div class="features-tools__item-content">
                        <div class="features-tools__item-group">
                          <div class="features-tools__item-title">{{$t('Mascot Gaming`s Power&nbsp;Up')}}</div>
                          <ul class="features-tools__item-text">
                            <li>{{$t('Free Rounds')}}:<div class="features-tools__item-descr">{{$t('API-enabled Free Rounds for all games serve as a powerful means for partner casinos to retain, reactivate players, and showcase new slots.')}}</div></li>
                            <li>{{$t('Branded Games')}}:<div class="features-tools__item-descr">{{$t('Customize games to mirror your brand, boosting player loyalty and creating a unique casino identity.')}}</div></li>
                            <li>{{$t('Pre-Releases')}}:<div class="features-tools__item-descr">{{$t('With our Pre - Releases, you`re always one step ahead, launching the latest games before anyone else.')}}</div></li>
                            <li>{{$t('Reverse integration')}}:<div class="features-tools__item-descr">{{$t('Allowing for swift and seamless setup through our expertise in handling API-based integrations on our end.')}}</div></li>
                            <li>{{$t('Boost Local Tournaments')}}:<div class="features-tools__item-descr">{{$t('Enhance player activity with our sponsored tournaments.')}}</div></li>
                            <li>{{$t('Customized Promotion')}}:<div class="features-tools__item-descr">{{$t('Receive an offer tailored just for you.')}}</div></li>
                            <li>{{$t('Strong B2C')}}:<div class="features-tools__item-descr">{{$t('Promo for players through streams and social networks.')}}</div></li>
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
                          <li>{{$t('Crafted In-House')}}:<div class="features-tools__item-descr">{{$t('From concept to launch, our games are homegrown, ensuring quality and consistency.')}}</div></li>
                          <li>{{$t('Eye-catching Graphics')}}:<div class="features-tools__item-descr">{{$t('Every slot offers a distinct journey, complete with its own captivating atmosphere of different worlds.')}}</div></li>
                          <li>{{$t('Sound That Stirs')}}:<div class="features-tools__item-descr">{{$t('Our games aren`t just seen; they`re heard. Exceptional sound design with attention to details for complete immersion.')}}</div></li>
                          <li>{{$t('Captivating Gaming')}}:<div class="features-tools__item-descr">{{$t('This is where unparalleled creativity meets meticulous soundscapes creating not just an immersive play, but a loyal player base enchanted by our outstanding gaming narratives.')}}</div></li>
                          <li>{{$t('Innovative Gaming')}}:<div class="features-tools__item-descr">{{$t('Dive into unique, player-focused games that stand out.')}}</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="features-tools__item">
                    <div class="features-tools__item-inner">
                      <div class="features-tools__item-content">
                        <div class="features-tools__item-title">{{$t('Positive impact')}}</div>
                        <ul class="features-tools__item-text">
                          <li>{{$t('Philanthropic Support')}}:<div class="features-tools__item-descr">{{$t('Our company backs meaningful efforts to make a difference with responsible gaming and community support.')}}</div></li>
                          <li>{{$t('Sports Sponsorships')}}:<div class="features-tools__item-descr">{{$t('We are the official sponsor of Murcielagos CF.')}}</div></li>
                          <li>{{$t('Animal Shelter Aid')}}:<div class="features-tools__item-descr">{{$t('Our initiatives extend a helping hand to animal shelters, ensuring care and protection for animals in need all around the world.')}}</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <nuxt-img src="/images/img_features-cherry.png" alt="" />
              </div>
              <div class="getgames-buttn">
                  <button class="buttn buttn-primary buttn-m" @click="showModal = true">{{$t('Get an offer')}}</button>
              </div>
            </div>
          </div>
        </article>

    </div>

    <MainFooter />
    <ContactModalOffer v-show="showModal" @close-modal="showModal = false"/>

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
        showModal: false,
        title: '',
        description: ''
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
  #featuresTools {
    padding-top: 120px;
    padding-bottom: 180px;
    border-bottom: 1px solid rgba(255,255,255, .25);

    @media (max-width: 850px) {
      padding-top: 80px;
      padding-bottom: 90px

    }
    h1 {
      font-size: 3.75rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 80px;
      @media (max-width: 650px) {
      font-size: 2rem;
      margin-bottom: 30px;
      }
    }
    .heading-subtitle {
      font-size: 2.12rem;
      text-transform: uppercase;
      font-weight: 700;
      @media (max-width: 650px) {
      font-size: 1.3rem;
      }
    }
    .features-tools__wrap {
      padding:0;
      .features-tools__outer {
        background: linear-gradient(83.48deg, #4838B0 1.1%, #36245C 10.38%, #4B2C73 84.1%, #6B2C7B 98.7%);
        box-shadow: 0px 19px 58.5px 13px rgba(104, 35, 250, 0.32), inset 0px 1px 3.2px #B487F3;
        border-radius: 18px;
        padding: 45px 55px;
        position: relative;
        margin-bottom: 60px;
        @media (max-width: 650px) {
          padding: 35px 25px
        }
        img {
          position: absolute;
          bottom: -49px;
          max-height: 370px;
          right: -3px;
          @media (max-width: 850px) {
            max-height: 170px
          }
          @media (max-width: 650px) {
            max-height: 120px;
            bottom: -30px
          }
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
              @media (max-width: 1750px) {
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
                margin-bottom: 30px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                font-weight: 700;
                &:before {
                  content: "";
                  background: url("/images/img_star.png") no-repeat;
                  width: 20px;
                  background-size: contain;
                  height: 19px;
                  background-position-y: 2px;
                  margin-right: 5px;
                }
                strong {
                  font-weight: 700;
                  margin-right: 5px
                }
                .features-tools__item-descr {
                  flex: 1 0 100%;
                  font-weight: 450;
                  margin-top: 7px;
                  text-align: left
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
      }
    }
    }
</style>
