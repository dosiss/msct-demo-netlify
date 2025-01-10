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
              <div class="about-slide__content-text" v-html="person.content"></div>
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
            name: 'Dmitry Malyshev',
            position: this.$t('Chief Technology Officer'),
            avatar: 'img_about-char2.png',
            content: this.$t('<span>&ldquo;It all started as an ambitious idea and a dream to create a high-quality product developed in-house and demanded around the world.</span><br><br><span>Years after we find ourselves at the stage we dreamt to be and I’m proud of our results. Everyday we contribute to our mutual success and I appreciate how the team upskill each other. Our work is never a routine, but always a challenge and a way to grow.&rdquo;</span>'),
            backImage: 'img_about-back-22.jpg',
            decorImage: 'img_about-robot.png'
          },
        {
          name: 'Margarita Malysheva',
          position: this.$t('Lead of Marketing'),
          avatar: 'img_about-char1.png',
          content: '<span>&ldquo;I’m proud to be a part of Mascot Gaming from the very beginning. Mascot Gaming is not just a job for me, but the baby, for who I’m doing my best to raise him as a really successful one.</span><br><br><span>This path is not easy, but it makes me feel like I must evolve constantly, hand in hand with my team. Isn’t it a formula for a happy professional life? I’m glad to declare that Mascot Gaming is my family and I love it very very much.&rdquo;</span>',
          backImage: 'img_about-back-1.jpg',
          decorImage: 'img_about-owl2.png'
        },
        {
          name: 'Victoria Malysheva',
          position: this.$t('Game Designer'),
          avatar: 'img_about-char5.png',
          content: '<span>&ldquo;Being part of Mascot Gaming is about more than just working on great games—it’s about being in a community that encourages personal growth and creative freedom.</span><br><br><span>The support and collaboration within the team make every project rewarding, and I’m thrilled to be a part of that journey.&rdquo;</span>',
          backImage: 'img_about-back-5.jpg',
          decorImage: 'img_about-ouija.png'
        },
        {
          name: 'Angela Kasyanova',
          position: this.$t('Head of Art Department'),
          avatar: 'img_about-char6.png',
          content: '<span>&ldquo;At Mascot Gaming, visual excellence isn`t just a goal—it`s who we are!</span><br><span>Every little element, every tiny detail in our games is crafted with care and passion. We want you to dive into worlds so immersive and unique that you forget it`s a game—more like a purrfect journey.</span><br><br><span>We`re not just making games; we`re creating furtastic experiences that leave a mark.&rdquo;</span>',
          backImage: 'img_about-back-6.jpg',
          decorImage: 'img_about-cat.png'
        },
        {
          name: 'Max Shulgin',
          position: this.$t('Composer'),
          avatar: 'img_about-char7.png',
          content: '<span>&ldquo;It feels great to see myself as an important part of the living organism called Mascot. Its departments seem like organs to me, performing various functions but united by a common goal—growth. Speaking of the organ that produces music and soundscapes, it’s impossible not to note that it is an integral part of successfully immersing users into the gaming world. Looking back, I recall the numerous stages of growth, the formation of our unique style, and the distinctive signature of the company’s products.&rdquo;</span>',
          backImage: 'img_about-back-7.jpg',
          decorImage: 'img_about-ninja.png'
        },
        {
          name: 'Anton Syzranov',
          position: this.$t('Chief Information Officer'),
          avatar: 'img_about-char8.png',
          content: '<span>&ldquo;I’m incredibly proud to be part of this company from day one. Watching us grow and expand to international markets has been inspiring. We strive to deliver the best products for our amazing clients, pouring our passion and dedication into every step. I believe our hard work will pay off, making a real mark in the casino industry and earning the appreciation of our partners. It’s fulfilling to be on this journey with such a committed team, and I can’t wait to see what the future holds for us!&rdquo;</span>',
          backImage: 'img_about-back-3.jpg',
          decorImage: 'img_about-rabbit.png'
        },
        {
          name: 'Dmitry Selikhov',
          position: this.$t('Graphic Designer'),
          avatar: 'img_about-char9.png',
          content: '<span>&ldquo;Being a designer at Mascot Gaming is more than just a job; it’s a journey fueled by passion, growth, and collaboration. I feel fortunate to be part of a company that not only values creativity but also inspires me to continuously improve.  I feel like I’m investing in something personal, contributing to something meaningful we’re building together. My team is a group of talented, dedicated professionals who make every challenge an opportunity for growth and every success a shared celebration.&rdquo;</span>',
          backImage: 'img_about-back-9.jpg',
          decorImage: 'img_about-rabbit2.png'
        },
      ],
        swiperOptions: {
          spaceBetween: 20,
          slidesPerView: 1,
          grabCursor: true,
          breakpoints: {
            '320': {
              spaceBetween: 10,
              slidesPerView: 1,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            '1200': {
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
<style lang="scss">
  .slider-outer {
    position: relative;
    margin: 30px 0;
    .swiper-button-next {
      right: -70px;
      @media (max-width: 1200px) {
        display: none
      }
    }
    .swiper-button-prev {
      left: -70px;
      @media (max-width: 1200px) {
        display: none
      }
    }
    .about-slide {
      .about-slide__outer {
        margin: 40px 200px 40px 0;

        .about-slide__inner {
          padding: 40px 120px 40px 40px;
          background-size: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-repeat: no-repeat;
          border-radius: 18px;
          background-position-x: center;
          @media (max-width: 1200px) {
            height: 100%
          }
          @media (max-width: 650px) {
            padding: 20px
          }
          .about-slide__content {
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
            font-size: 1.2rem;
            @media (max-width: 650px) {
              font-size: 1rem
            }
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
                @media (max-width: 650px) {
                  font-size: 1.3rem
                }
              }
            }
            .about-slide__content-text {
              height: 190px;
              font-size: 1.4rem;
              line-height: 1.5;
              span {
                margin-bottom: 10px;
              }
              @media (max-width: 1760px) {
                height: 300px
              }
              @media (max-width: 1200px) {
                height: auto
              }
              @media (max-width: 850px) {
                font-size: 1.2rem;
                height: 240px
              }
              @media (max-width: 650px) {
                height: 490px
              }
            }
          }
        }
        @media (max-width: 1200px) {
          margin-right: 0
        }
      }
    }
  }
  .about-slide {
    background: #000;
    position: relative;
    height: 450px;
    @media (max-width: 1760px) {
      height: 570px
    }
    @media (max-width: 1200px) {
      height: 500px;
    }
    @media (max-width: 850px) {
      height: 550px;
    }
    @media (max-width: 650px) {
      height: 740px;
    }
    .about-slide__decor {
      position: absolute;
      right: 0;
      top: 0;
      max-height: 430px;
      width: auto;
      @media (max-width: 1760px) {
        max-height: 25vw;
        top: unset;
        bottom: 0;
      }
      @media(max-width: 1200px) {
        top: 0;
        bottom: unset;
        right: 40px;
        max-height: 190px
      }
      @media (max-width: 650px) {
        display: none
      }
    }
  }

</style>
