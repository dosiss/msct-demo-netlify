<template>

  <div>
    <MainHeader />
    <div id="about">
      <div class="container container-narrow">
        <h1>{{$t('About Us')}}</h1>
        <article>
          <nuxt-img src="/images/img_team2.jpg" sizes="sm:480px md:998px" alt="" />
          <p>{{$t('Mascot Gaming is more than just a casino software developer; it`s a team of enthusiastic professionals that strive to deliver customers an outstanding gambling experience.')}}</p>
          <p>{{$t('Since 2018, Mascot Gaming has been dedicated to developing the perfect gaming experience. Feel the thrill of every spin - your entertainment is our passion! With new and future projects, we aim to have a more conservative approach. It’s more beneficial for us to improve our most popular and well-known games than it is to pursue multiple business opportunities at once. Although we introduce new game mechanisms and features frequently, we do so carefully and carry out thorough tests beforehand. We see ourselves becoming a future market leader and a gambling industry headliner.')}}</p>
          <p>{{$t('Just like all software, iGaming constantly grows and evolves. At Mascot, we’re strong believers of getting the important things right. For us, that means maximising players’ involvement and building strong relationships with our partners. We’re currently focusing on improving visuals, developing new game mechanics and looking into the social aspects of gaming.')}}</p>
          <p class="emphasis">{{$t('The crux of Mascot Gaming` development strategy is delivering games with the latest features, rich graphics, smooth audio and exciting themes! After all, professional players only deserve the very best!')}}</p>
          <p>{{$t('We`re a cutting-edge company that`s dedicated to delivering quality services and expanding our portfolio with unique projects rather than overwhelming our customers with options. You can currently find our games at over 1000 online casinos worldwide. We release 2-3 new and improved games every month.')}}</p>
          <p>{{$t('Mascot Gaming was the first developer to introduce the concept of traffic-generating and profit-making games, which made it easier to accurately categorize games. Mascot Gaming’s slots include games with Rockfall and Rockways mechanics and a unique Risk&Buy feature, providing customers with an even more exciting gaming experience. We spice up gameplay without changing it completely, which helps retain an element of familiarity in the new slots.')}}</p>
          <p>{{$t('At Mascot Gaming, we know how important each game`s theme and feel is to players. Therefore, we bring something new to the industry by creating stunning visuals for the release of new games and providing a new twist on classic themes like the fruit series and ancient Egypt. Moreover, we’re very proud of our audio work. We come up with awesome soundtracks for each and every slot that help make the games come to life! All in all, Mascot Gaming’s three casino game must-haves are thrilling action, beautiful graphics and great music.')}}</p>
        </article>
      </div>
    </div>
    <SharingButtons />
    <AdBannerCBeatsNew />
    <MainFooter />
  </div>
</template>

<script>
  export default {
    // page component definitions
    data() {
      return {
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
