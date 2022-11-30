<template>

  <div>
    <MainHeader />
    <div id="about">
      <div class="container container-narrow">
        <h1>About us</h1>
        <div class="heading-subtitle">Explore our story</div>
        <article>
          <p>Mascot Gaming is more than just a casino software developer, it is a team of enthusiastic professionals that strive to deliver an outstanding gambling experience to the clients. Creation of platforms for online casinos, bookmaker products and software for live broadcasts has set the beginning of Mascot work in the industry. Working on its own game server, the latest version of which serves as a platform for its releases now, the developer was able to treat the market with their first slots in September 2015. There was no option but further improvement from then on, which is why Mascot Gaming showcased its debut gaming set at ICE London 2019.</p>
          <p>As a progressive company Mascot Gaming focuses on delivering quality, expanding its portfolio with unique releases, instead of overwhelming clients with quantity. As of now, you can play its products in over 500 online casinos from all around the world. How does Mascot manage to release 1-2 games every month only raising the standards every time? Firstly, it diversifies the portfolio by developing a wide range of slots, card games and lotteries. Secondly, Mascot understands the importance of gameplay features and innovative factors. It was the first developer to introduce <a href="https://www.casinobeats.com/2019/11/28/mascot-gaming-traffic-versus-profit-why-both-types-of-slot-are-important/">the concept of Traffic and Profit games</a>, which made more precise classification of games possible. The lineup of Mascot Gaming slots includes releases with unique Risk&amp;Buy feature, Rockfall and Rockways mechanics that make gambling experience even more exciting. Spicing up the gameplay, they don&rsquo;t change it drastically, which is why you can easily get into new slots. Lastly, Mascot believes that the theme and atmosphere of every game has a special value for the player. Creating stunning visuals for the releases the developer explores classic themes like fruit series, ancient Egypt and adventures, rethinking them from its own perspective as well as create something completely new to the industry. As for the sound design, it is Mascot&rsquo;s pride, as it provides unique awesome soundtracks for every slot to match its atmosphere and bring release to perfection. Thrilling action, beautiful graphics and excellent music are the must-haves for opening up the potential of unique themes of the games the developer creates.</p>
          <p>Mascot never duplicates its products, which is why every slot differs even in terms of technical aspects. The portfolio includes slots of high volatility like <a href="https://play.mascot.games/the-book-of-amaterasu">Book of Amaterasu</a> or <a href="https://play.mascot.games/lionspride">Lion&rsquo;s Pride</a> as well as releases of low volatility like <a href="https://play.mascot.games/queen-of-spades">Queen of Spades</a>. Adorable design, smart math and unique sophisticated gameplay mechanics combined with favorable pricing models distinguish Mascot Gaming products from anything the market can offer as an alternative. <a href="https://play.mascot.games/riot">Riot</a>, <a href="https://play.mascot.games/zeus-the-thunderer">Zeus the Thunderer</a>, <a href="https://play.mascot.games/bastet">Bastet and Cats</a> and <a href="https://play.mascot.games/the-myth.">The Myth</a> are the most popular slots from Mascot&rsquo;s portfolio that prove that gamblers do prefer quality.</p>
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
        margin-bottom: 20px;
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
