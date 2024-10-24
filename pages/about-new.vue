<template>
  <div>
    <MainHeader />
    <div id="about">
      <div class="about__top-img"></div>
      <div class="container container">
        <h1>{{$t('About Us')}}</h1>
        <article>
          <p>{{$t('Mascot Gaming is more than just a casino software developer; it`s a team of enthusiastic professionals that strive to deliver customers an outstanding gambling experience.')}}</p>
          <p>{{$t('Since 2015, Mascot Gaming has been dedicated to developing the perfect gaming experience. Feel the thrill of every spin - your entertainment is our passion! With new and future projects, we aim to have a more conservative approach. It’s more beneficial for us to improve our most popular and well-known games than it is to pursue multiple business opportunities at once. Although we introduce new game mechanisms and features frequently, we do so carefully and carry out thorough tests beforehand. We see ourselves becoming a future market leader and a gambling industry headliner.')}}</p>
          <AboutSlider />
          <p>{{$t('The essence of Mascot Gaming`s development strategy is to deliver a perfect blend of mathematical models and the latest gaming features, spiced up by rich graphics and sound design and enrolled with exciting game themes! Professional players demand nothing less!')}}</p>
          <AboutTimeline :blocks="blocks" />
        </article>
      </div>
    </div>

    <SharingButtons />
    <AdBannerSigmaEurope />
    <MainFooter />
  </div>
</template>

<script>
  import AboutTimeline from '~/components/AboutTimeline.vue'
  export default {
    components: { AboutTimeline },
    data() {
      return {
        title: '',
        description: '',
        blocks: [
        { month: this.$t('July'), year: '2024', title: this.$t('Global Lab Portugal'), description: this.$t('Certification by Global Lab for Portugal jurisdiction'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: true  },
        { month: this.$t('July'), year: '2024', title: this.$t('Global Lab Georgia'), description: this.$t('Certification by Global Lab for Georgia jurisdiction'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: true  },
        { month: this.$t('July'), year: '2024', title: this.$t('GlobalLab Portugal'), description: this.$t('Certification by Global Lab for Portugal jurisdiction'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2024', title: this.$t('GlobalLab Portugal'), description: this.$t('Certification by Global Lab for Portugal jurisdiction'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2024', title: this.$t('GlobalLab Portugal'), description: this.$t('Certification by Global Lab for Portugal jurisdiction'), image: 'img_about-item27.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2024', title: this.$t('GlobalLab Portugal'), description: this.$t('Certification by Global Lab for Portugal jurisdiction'), image: 'img_about-item27.png', backImage: '', decorImage: '', soonTag: false  },
        // ...
        ]
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
  #about {
    padding-top: 60px;
    padding-bottom: 0;
    @media (max-width: 650px) {
      padding-top: 80px

    }
    .about__top-img {
      background: url('/images/img_about-top-desktop.jpg') no-repeat;
      background-size: cover;
      height: 264px;
      margin-bottom: 60px
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
      img {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        @media (max-width: 650px) {
        margin-bottom: 30px
        }
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
        margin-bottom: 20px;
        &.emphasis {
          font-weight: 700;
          background: #1f1f1f;
          padding: 20px 30px;
          border-left: 3px solid #fff;
        }
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
