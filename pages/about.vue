<template>

  <div>
    <MainHeader />
    <div id="about">
      <div class="container container-narrow">
        <h1>About us</h1>
        <article>
          <nuxt-img src="/images/img_team.jpg" sizes="sm:480px md:998px" alt="" />
          <p>Mascot Gaming is more than just a casino software developer, it is a team of enthusiastic professionals that strive to deliver an outstanding gambling experience to the clients.</p>
          <p>Since 2015 Mascot Gaming has been devoted to the perfection of playing experience. Every spin makes you feel - your pleasure is our passion. Down the road we stick to a rather conservative approach in introduction of new projects. Not to dilute the qualities of our famous and well received games is more beneficial for us than pursuing multiple business opportunities. We introduce carefully but steadily new nevertheless well-tested mechanisms and features. In the future, we see ourselves as the market leaders in segment and the industry headliners.</p>
          <p>iGaming evolves and transforms continuously as all other software branches. We at Mascot strongly believe in getting the overall best at what matters most. And that is players’ involvement and viability of the business for our partners. Our efforts are heading into the polishing visual appearance, exploring new gaming mechanics and social aspects of gaming.</p>
          <p class="emphasis">The essence of Mascot Gaming's development strategy is to deliver a perfect blend of mathematical models and the latest gaming features, spiced up by rich graphics and sound design and enrolled with exciting game themes! Professional players demand nothing less!</p>
          <p>As a progressive company we focus on delivering quality, expanding our portfolio with unique releases, instead of overwhelming clients with quantity. As of now, you can play our games in over 500 online casinos from all around the world. We manage to release 1-2 games every month and raise the development standards every time.</p>
          <p>Mascot Gaming was the first developer to introduce the concept of Traffic and Profit games, which made more precise classification of games possible. The lineup of Mascot Gaming slots includes releases with unique Risk&amp;Buy feature, Rockfall and Rockways mechanics that make gambling experience even more exciting. Spicing up the gameplay, we don’t change it drastically, which is why our players can easily get into new slots.</p>
          <p>We at Mascot Gaming believe that the theme and atmosphere of every game has a special value for the player. Creating stunning visuals for the releases we explore classic themes like fruit series, ancient Egypt and adventures, rethinking them from its own perspective as well as create something completely new to the industry. As for the sound design, it is our pride, as we provide unique awesome soundtracks for every slot to match its atmosphere and bring release to perfection. Thrilling action, beautiful graphics and excellent music are the must-haves for opening up the potential of unique themes of the online casino games Mascot Gaming creates.</p>
        </article>
      </div>
    </div>
    <SharingButtons />
    <AdBannerSAmericas />
    <MainFooter />
  </div>
</template>

<script>
  export default {
    // page component definitions
    data() {
      return {
        title: 'Mascot Gaming - casino games provider'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'We are a team of like-minded people who worked in gambling sphere for many years. We love our work and respect your business. Explore our history!'
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
