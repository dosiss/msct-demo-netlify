<template>

  <div>
    <MainHeader />
    <div id="about">
      <div class="container container-narrow">
        <h1>About us</h1>
        <div class="heading-subtitle">Explore our story</div>
        <article>
          <h2>The point is Math</h2>
          <p>It's all began 7 years ago, when two coders decided to create their own online-casino. Platform, games, operating, communication with players, promotion - everything did from scratch on their own.<br />Learning all things thoroughly has required two years, dozen computers, limitless enthusiasm and desire for being the best. It was really complicated but the results improved in geometric progression.<br />Time passed, our team grew up, multiplied by new units, always adding new ones to our team of like-minded associates. We earned respect and trust of market, we are known as reliable developer of high quality soft, but we think that our task isn't solved. We are perfectionists, that's why our equation is infinite and achieved results are always considered not as the set limits, but as a basis for further improvement and enhancement.</p>

          <p class="article-conclusion">Let's strive together for better solution</p>
        </article>
      </div>
    </div>
    <SharingButtons />
    <AdBanner />
    <MainFooter />
  </div>
</template>

<script>
  export default {
    // page component definitions
    data() {
      return {
        title: 'About us'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'aubout us description'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  #about {
    padding-top: 120px;
    padding-bottom: 0;
    @media (max-width: 650px) {
      padding-top: 80px

    }
    h1 {
      font-size: 3.75rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
      font-size: 1.75rem;
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
    article {
      margin-top: 50px;
      @media (max-width: 650px) {
      margin-top: 30px
      }

      h2 {
        font-size: 1.63rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        @media (max-width: 650px) {
        font-size: 1.3rem;
        }
      }
      p {
        font-size: 1.25rem;
        line-height: 1.5;
        &.article-conclusion {
          font-size: 1.63rem;
          margin-top: 40px;
          text-transform: uppercase;
          font-weight: 700;
          @media (max-width: 650px) {
          font-size: 1.3rem;
          }
        }
      }
    }
  }
</style>
