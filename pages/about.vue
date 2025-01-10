<template>
  <div>
    <MainHeader />
    <div id="about">
      <div class="about__top-img"></div>
      <div class="container container">
        <h1>{{$t('About Us')}}</h1>
        <article>
          <p>{{$t('Mascot Gaming is more than just a casino software developer; it is a team of passionate professionals dedicated to delivering an exceptional gambling experience to clients.')}}</p>
          <p>{{$t('Since 2015, Mascot Gaming has focused on perfecting the gaming experience. Every spin is designed to captivate, as your enjoyment is our priority. We take a thoughtful and conservative approach to launching new projects, prioritizing the quality of our well-received games over pursuing numerous business ventures. For us, maintaining the integrity of our games and standing out among other iGaming companies is more valuable than expanding into multiple opportunities.')}}</p>
          <AboutSlider />
          <p>{{$t('The essence of Mascot Gaming`s development strategy is to deliver a perfect blend of mathematical models and the latest gaming features, spiced up by rich graphics and sound design and enrolled with exciting game themes! Professional players demand nothing less!')}}</p>
          <AboutTimeline :blocks="blocks" />
        </article>
      </div>
    </div>

    <SharingButtons />
    <AdBannerIce />
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
        { month: this.$t('October'), year: '2024', title: this.$t('Game of the Month'), description: this.$t('Fruit Vegas Extreme x125 named Game of the Month by <a href="https://mascot.games/blog/fruit-vegas-extreme-x125-game-of-the-month" target="_blank">NonStopBonus.com</a>'), image: 'img_about-item32.png', backImage: 'img_about-back7.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2024', title: this.$t('Global Lab Georgia'), description: this.$t('Games certified by Global Lab for the Georgian market.'), image: 'img_about-item30.png', backImage: '', decorImage: 'img_about-apples.png', soonTag: false, posTop: 'unset', posBottom: '-25px', posRight: '-12px', posLeft: 'unset'},
        { month: this.$t('July'), year: '2024', title: this.$t('Global Lab Portugal'), description: this.$t('Games certified for the Portuguese market by Global Lab, allowing entry into another key European market.'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2024', title: this.$t('3 Unique Games a Month'), description: this.$t('Release schedule expands to 3 games per month.'), image: 'img_about-item34.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('May'), year: '2024', title: this.$t('Silver Award in Game Debut'), description: this.$t('Crash Hamster Crash wins the Silver award in the Game Debut category at the Casino Beats Developer Awards 2024.'), image: 'img_about-item33.png', backImage: 'img_about-back1.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('May'), year: '2024', title: this.$t('Global Lab Peru and Argentina'), description: this.$t('Games certified for the Peruvian and Argentinian markets, continuing LATAM expansion.'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('April'), year: '2024', title: this.$t('Casino Beats Developer Awards 2024'), description: this.$t('<span>Shortlisted in four categories at the Casino Beats Developer Awards 2024:</span><ul><li>Riot – Slot Legacy Title</li><li>Dreamshock Jackpot X – Game Music/Soundtrack</li><li>Hook Up Fishing Wars – Game to Watch</li><li>Crash Hamster Crash – Game to Debut</li></ul>'), image: 'img_about-item31.png', backImage: '', decorImage: 'img_about-papaya.png', soonTag: false, posTop: 'unset', posBottom: '-19px', posRight: 'unset', posLeft: '-10px'  },
        { month: this.$t('April'), year: '2024', title: this.$t('Global Lab Spain and Columbia'), description: this.$t('Games certified for the Spanish and Colombian markets by Global Lab.'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('March'), year: '2024', title: this.$t('MGA License'), description: this.$t('The Malta Gaming Authority (MGA) License obtained.'), image: 'img_about-item38.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('March'), year: '2024', title: this.$t('Slot of the Month'), description: this.$t('Dreamshock: Jackpot X named the Editor`s Choice for March 2024 by <a href="https://www.casinofreak.com" target="_blank">casinofreak.com</a>'), image: 'img_about-item39.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('February'), year: '2024', title: this.$t('Sigma Eurasia 2024'), description: this.$t('Shortlisted for Best Game Provider at SiGMA Eurasia 2024.'), image: 'img_about-item29.png', backImage: 'img_about-back2.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('January'), year: '2024', title: this.$t('Global lab Latvia'), description: this.$t('Games certified in the Latvian jurisdiction by Global Lab.'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('January'), year: '2024', title: this.$t('Slot of the Month'), description: this.$t('Wild Wild Bet named Best Game of the Month by chipy.com.'), image: 'img_about-item27.png', backImage: 'img_about-back3.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('October'), year: '2023', title: this.$t('Certification for Bulgaria'), description: this.$t('Games certified for the Bulgarian market, expanding into Eastern Europe.'), image: 'img_about-item30.png', backImage: '', decorImage: 'img_about-pear.png', soonTag: false, posTop: '-44px', posBottom: 'unset', posRight: '-28px', posLeft: 'unset'  },
        { month: this.$t('November'), year: '2023', title: this.$t('Football Team Sponsorship'), description: this.$t('Official sponsor of the Murcielagos CF football team.'), image: 'img_about-item25.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('September'), year: '2023', title: this.$t('First Crash Game'), description: this.$t('Paper Lantern’s Crash Game, the first crash game, released.'), image: 'img_about-item35.png', backImage: 'img_about-back1.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('August'), year: '2023', title: this.$t('Sigma Balkans Recognition'), description: this.$t('Shortlisted for Best Slot Provider at the SiGMA Balkans & CIS Awards 2023.'), image: 'img_about-item23.png', backImage: 'img_about-back5.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2023', title: this.$t('New Risk & Buy'), description: this.$t('Updated version of the popular Risk & Buy feature released, first introduced in Wild Phoenix Rises.'), image: 'img_about-item22.png', backImage: 'img_about-back6.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('July'), year: '2023', title: this.$t('Slot Game of the Month'), description: this.$t('Ben Gunn Robinson named the Editor`s Pick for July 2023 by <a href="https://chipy.com" target="_blank">chipy.com</a>'), image: 'img_about-item21.png', backImage: '', decorImage: 'img_about-kite.png', soonTag: false, posTop: '-42px', posBottom: 'unset', posRight: 'unset', posLeft: '-34px'  },
        { month: this.$t('June'), year: '2023', title: this.$t('LATAM Market Expansion'), description: this.$t('Expansion into Latin America begins with participation at SiGMA Brazil 2023.'), image: 'img_about-item22.png', backImage: 'img_about-back8.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('June'), year: '2023', title: this.$t('Shooting Game'), description: this.$t('First shooting game released  – Hook Up! Fishing Wars.'), image: 'img_about-item19.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('May'), year: '2023', title: this.$t('ONJN'), description: this.$t('Romanian License (ONJN) obtained.'), image: 'img_about-item18.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('May'), year: '2023', title: this.$t('Sigma Americas Recognition'), description: this.$t('Shortlisted as slot gaming provider of the year by Sigma Americas Awards 2023'), image: 'img_about-item17.png', backImage: 'img_about-back9.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('October'), year: '2022', title: this.$t('First Branded Game'), description: this.$t('Launch of the first branded game for 1X – 1X Fruit.'), image: 'img_about-item16.png', backImage: '', decorImage: 'img_about-1x.png', soonTag: false, posTop: '-10px', posBottom: 'unset', posRight: '-12px', posLeft: 'unset'  },
        { month: this.$t('August'), year: '2022', title: this.$t('Sigma Balkans 2022'), description: this.$t('Shortlisted as best slot provider by Sigma Balkans & CIS Awards 2022'), image: 'img_about-item15.png', backImage: 'img_about-back10.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('June'), year: '2022', title: this.$t('Certification for Malta'), description: this.$t('Portfolio certified for the Maltese jurisdiction, opening opportunities in one of Europe’s key iGaming markets.'), image: 'img_about-item30.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('November'), year: '2021', title: this.$t('Rockways Mechanics Debut'), description: this.$t('Introduction of the Rockways feature with Primal Bet Rockways.'), image: 'img_about-item13.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('September'), year: '2021', title: this.$t('RNG Certification for Italy'), description: this.$t('RNG certification received from GLI for the Italian market, allowing operations within Italy’s regulated market.'), image: 'img_about-item12.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('August'), year: '2021', title: this.$t('Certification in Belarus'), description: this.$t('Certification obtained for the Belarus market, ensuring compliance with local regulations.'), image: 'img_about-item11.png', backImage: '', decorImage: 'img_about-gun.png', soonTag: false, posTop: '-46px', posBottom: 'unset', posRight: 'unset', posLeft: '-19px'  },
        { month: this.$t('August'), year: '2021', title: this.$t('Partnership with EveryMatrix'), description: this.$t('Significant partnership formed with EveryMatrix.'), image: 'img_about-item10.png', backImage: 'img_about-back11.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('June'), year: '2021', title: this.$t('Slot of the Month Award'), description: this.$t('Bastet and Cats earns Slot of the Month by SlotsMate.'), image: 'img_about-item27.png', backImage: 'img_about-back12.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('February'), year: '2021', title: this.$t('New Partnerships'), description: this.$t('Partnering with SoftGamings and BetConstruct.'), image: 'img_about-item8.png', backImage: '', decorImage: 'img_about-crown.png', soonTag: false, posTop: '-25px', posBottom: 'unset', posRight: '-12px', posLeft: 'unset'  },
        { month: this.$t('February'), year: '2021', title: this.$t('Slot of the Month Award'), description: this.$t('Merry Scary Christmas named Slot of the Month by SlotsMate.'), image: 'img_about-item27.png', backImage: 'img_about-back13.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('December'), year: '2020', title: this.$t('First 3D Graphics Game'), description: this.$t('Release of Merry Scary Christmas, the first game featuring 3D graphics.'), image: 'img_about-item6.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t(''), year: '2020', title: this.$t('Key Partnerships'), description: this.$t('Major partnerships with platforms like 1XBET, SoftSwiss, and PinUp Casino.'), image: 'img_about-item5.png', backImage: 'img_about-back14.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('February'), year: '2020', title: this.$t('Riot Game Release'), description: this.$t('Flagship slot game Riot, featuring the innovative Risk & Buy mechanic, released and showcased at ICE London 2020.'), image: 'img_about-item4.png', backImage: 'img_about-back15.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('December'), year: '2019', title: this.$t('Debutant of the Year Award'), description: this.$t('Recognized as "Debutant of the Year" at the Login Casino Awards 2019.'), image: 'img_about-item3.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('October'), year: '2019', title: this.$t('RNG Certification'), description: this.$t('RNG certification received from Gaming Laboratories International (GLI), ensuring the highest standards of fairness.'), image: 'img_about-item12.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('February'), year: '2019', title: this.$t('ICE London'), description: this.$t('Global debut at ICE London, one of the industry`s leading events.'), image: 'img_about-item1.png', backImage: 'img_about-back16.jpg', decorImage: '', soonTag: false  },
        { month: this.$t('September'), year: '2018', title: this.$t('First Game Set'), description: this.$t('First game set released, marking the official entry to the iGaming market.'), image: 'img_about-item00.png', backImage: '', decorImage: '', soonTag: false  },
        { month: this.$t('September'), year: '2015', title: this.$t('Company Foundation'), description: this.$t('The journey begins on September 2, 2015.'), image: 'img_about-item0.png', backImage: '', decorImage: '', soonTag: false  }
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
      this.title = this.$t('About Mascot Gaming')
      this.description = this.$t('Mascot Gaming is among top creative gambling software developers, delivers innovative, engaging games with stunning visuals and exciting features worldwide.')
    }
  }
</script>
<style lang="scss" scoped>
  #about {
    padding-top: 60px;
    padding-bottom: 0;
    .about__top-img {
      background: url('/images/img_about-top-desktop.jpg') no-repeat;
      background-size: cover;
      height: 264px;
      margin-bottom: 60px;
      @media (max-width: 650px) {
        background: url('/images/img_about-top-mobile.jpg') no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 350px
      }
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
