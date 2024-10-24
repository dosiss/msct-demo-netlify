<template>
  <div class="slider-outer">
    <swiper ref="mySwiperAbout" :options="swiperOptions">
      <swiper-slide v-for="(person, idx) in aboutSlider" :key="idx" class="about-slide">
        <div class="about-slide__outer">
          <div class="about-slide__inner" :style="{ backgroundImage: `url(/images/${person.backImage})` }">
            <div class="about-slide__content">
              <div class="about-slide__content-title">
                <nuxt-img :src="`/images/${person.avatar}`" alt="" />
                <div class="about-name__group">
                  <div class="about-name__group-name">{{person.name}}</div>
                  <div class="about-name__group-position">{{person.position}}</div>
                </div>
              </div>
              <div class="about-slide__content-text">{{person.content}}</div>
            </div>
          </div>
        </div>
        <nuxt-img :src="`/images/${person.decorImage}`" class="about-slide__decor" alt="" />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        aboutSlider: [
        {
          name: 'Margarita',
          position: this.$t('Lead of Marketing Mascot'),
          avatar: 'img_about-char1.png',
          content: 'dummy text',
          backImage: 'img_about-back-1.jpg',
          decorImage: 'img_about-owl.png'
        },
        {
          name: 'Dmitry',
          position: this.$t('CEO'),
          avatar: 'img_about-char2.png',
          content: 'dummy text',
          backImage: 'img_about-back-2.jpg',
          decorImage: 'img_about-cat.png'
        },
        {
          name: 'Natalia',
          position: this.$t('Executive Assistant'),
          avatar: 'img_about-char3.png',
          content: 'dummy text',
          backImage: 'img_about-back-3.jpg',
          decorImage: 'img_about-rabbit.png'
        },
        {
          name: 'Natalia',
          position: this.$t('Human Resource Manager'),
          avatar: 'img_about-char4.png',
          content: 'dummy text',
          backImage: 'img_about-back-4.jpg',
          decorImage: 'img_about-parrot.png'
        },
      ],
        swiperOptions: {
          spaceBetween: 20,
          slidesPerView: 1,
          grabCursor: true,
          breakpoints: {
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '768': {
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '1024': {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
            },
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperAbout.$swiper
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="scss" scoped>
  .slider-outer {
    position: relative;
    margin: 30px 0;
    .swiper-button-next {
      right: -70px
    }
    .swiper-button-prev {
      left: -70px
    }
    .about-slide {
      .about-slide__outer {
        margin: 40px 140px 40px 0;
        .about-slide__inner {
          padding: 40px 100px 40px 40px;
          background-size: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-repeat: no-repeat;
          border-radius: 18px;
          .about-slide__content {
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
            font-size: 1.2rem;
            .about-slide__content-title {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              img {
                width: 86px;
                height: 86px;
                margin-right: 20px;
                border-radius: 20rem;
              }
              .about-name__group-name {
                font-size: 2rem;
                text-transform: uppercase;
                font-weight: 700;
              }
            }
            .about-slide__content-text {
              height: 130px
            }
          }
        }
      }
    }
  }
  .about-slide {
    background: #000;
    position: relative;
    height: 400px;
    .about-slide__decor {
      position: absolute;
      right: 0;
      top: 0;
      max-height: 400px;
      width: auto
    }
  }
</style>
