<template>

  <div>
    <MainHeader />
    <HeroVideo />
    <!-- <HeroStatic /> -->
    <section id="top-slider">
      <div class="top-slider__wrap">
        <TopSlider />
      </div>
    </section>
    <section id="featured">
      <FeaturedStatic />
    </section>
    <section id="getgames">
      <GetGames />
    </section>
      <BlogArticles />
      <LazySharingButtons />
      <vue-lazy-load><AdBanner /></vue-lazy-load>
      <LazyMainFooter />
  </div>

</template>

<script>

import VueLazyLoad from '@voorhoede/vue-lazy-load'

export default {

  name: 'IndexPage',

  components: {
    VueLazyLoad
  }

}
</script>

<style scoped lang="scss">

#top-slider {
  margin-top: -100px;
  @media (max-width: 650px) {
    margin-top: -20px
  }
  .top-slider__wrap {
    &:before {
      content: '';
      position: absolute;
      height: 122px;
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 75.74%);
    }
  }
}
#featured {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: 0;
    width: 100%;
    height: 240px;
    background: linear-gradient(0, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 1
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 240px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 1
  }

}
#getgames {
  @media (min-width: 1680px) {
    margin-top: 80px
  }
}
</style>
