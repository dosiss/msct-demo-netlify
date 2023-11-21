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
      <vue-lazy-load><AdBannerSEurope /></vue-lazy-load>
      <LazyMainFooter />
  </div>

</template>

<script>

import VueLazyLoad from '@voorhoede/vue-lazy-load'

export default {

  components: {
    VueLazyLoad
  },

  data() {
    return {
      title: '',
      description: '',

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
        },
        { property: 'og:title', hid: "og:title", content: this.title },
        { property: 'og:description', hid: 'og:description', content: this.description },
        { property: 'og:url', hid:'og:url', content: `https://mascot.games` },
        { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/img_share_bg.jpg` },

        { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', hid:'twitter:title', content: this.title },
        { name: 'twitter:description', hid:'twitter:description', content: this.description },
        { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/img_share_bg.jpg` },

      ]
    }
  },

  mounted() {
    this.title = this.$t('Explore the new world of exciting casino games!')
    this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')
  },

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
