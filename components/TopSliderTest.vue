<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
  export default {

    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          spaceBetween: 20,
          slidesPerView: 1.2,
          grabCursor: true,
          breakpoints: {
            '640': {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="scss" scoped>
  .swiper-container {
    padding-left: 245px;

  }
  .swiper-slide {
    background: lightgray;
    width: 1561px;
    height: 300px;
  }
</style>
