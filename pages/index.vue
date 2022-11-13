<template>

  <div>
    <MainHeader />
    <!-- <HeroVideo /> -->
    <HeroStatic />
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
    <SharingButtons />
    <AdBanner />
    <MainFooter />
  </div>

</template>

<script>
export default {

  name: 'IndexPage',

  methods: {
        setWindowSize() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
          this.windowSize = "mobile";
        } else if (windowWidth < 1205) {
          this.windowSize = "tablet";
        } else {
          this.windowSize = "desktop";
        }
      },
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
  @media (min-width: 1980px) {
    margin-top: 80px
  }
}
</style>
