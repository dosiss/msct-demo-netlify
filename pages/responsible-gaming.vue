<template>

  <div>
    <MainHeader />
    <div id="responsible">
      <div class="container container-narrow">
        <h1>Responsible gaming</h1>
        <article>
                  <div class="content-inner-block">

                    <p>The key priority for our Mascot company is 100% satisfaction of our customers. At Mascot, we take responsible gaming seriously and offer top iGaming solutions for gamblers over the legal age only. Our goal is to create a safe, secure, and fair environment where every player has an equal opportunity. We understand that only responsible gambling can become a true driving force and guarantee sustainable business development.&nbsp;</p>
                    <p>Mascot is a licensed software provider that creates <NuxtLink to="/blog/mascot-gaming-rolls-out-major-updates">innovative slots </NuxtLink>that are available worldwide. It means that we provide our clients with games that are designed to the highest standards and do not violate the rules and norms set by regulatory authorities. We are focusing on working with the best casinos around the world and define "best" also as "responsible to players&rdquo;.</p>
                    <p>It is important that being a B2B company, we do not interact with players directly. At the same time, we are convinced that our customers should have access to all the tools and support they need when it comes to responsible gaming.</p>
                    <p class="heading"><strong>How Do We Provide a Secure and Fair Environment for Our Players?</strong></p>
                    <p>All iGaming solutions created by the Mascot Gaming provider are based on the operation of a random number generator (RNG). With its help, 100% of the results are completely random and cannot be changed using external influences in any way. We provide a top-notch level of service, so we regularly involve independent accredited testing centers to check our RNG.&nbsp;</p>
                    <p>These independent laboratories test the quality of our products from a technical point of view in detail and give a conclusion as to whether our games comply with all standards (gamer protection, fair play, security of personal and financial data players, and so on).</p>
                    <p>Here at the bottom of our official website, you can find information and relevant links to the following resources:</p>
                    <ul>
                    <li>Gaming Laboratory Internations;</li>
                    <li>GlobalLab.</li>
                    </ul>
                    <p>Both companies are reputable and offer third-party testing, auditing, certification services, and more.</p>
                    <p class="heading"><strong>Mascot Tools for Players' Protection</strong></p>
                    <p>In addition to creating high-quality gaming content, we make sure that players have a safe and comfortable gaming environment. Understanding the seriousness of gambling addiction and the consequences it can lead to, we provide a number of effective tools that you can check in detail below.</p>
                    <p class="sub-heading"><strong>Self-exclusion</strong></p>
                    <p>We understand that among the users of our games, there are players who suspect or know for sure that they have a gambling addiction, problems with time or money spending, and so on. We strongly recommend such users contact the support service of the online casino where they registered. There they can provide a minimum of information about themselves and request a temporary or permanent block on their account.&nbsp;</p>
                    <p>It is important that all authentication and authorization is directly regulated by the specific online casino operator, which can prevent a self-excluded player from accessing Mascot games in time. In addition, Mascot allows online casinos to block a specific user's access to games for a certain time via an API option.</p>
                    <p>Every player should be aware that gaming platforms are extremely responsible for all self-exclusion conditions, including the financial side of the issue. As a rule, any funds that remain in a player's account after self-exclusion can be withdrawn to the selected payment method upon request.&nbsp;</p>
                    <p class="sub-heading"><strong>Reality check</strong></p>
                    <p>The casino that offers iGaming solutions by Mascot software may additionally take steps to regularly remind users of the time spent playing the game, the amounts won and lost, and so on. The reality check option is active for those users who play for real money and sends them in-game messages. As soon as the message arrives, a special flag appears, and the game is paused. In order to continue playing, you need to confirm the message.</p>
                    <p class="sub-heading"><strong>Game restrictions</strong></p>
                    <p>Our company offers API functions that can be used to restrict players from various game options. In this case, the player receives special in-game messages when the limits are reached. If it is necessary to apply this option to all the iGaming solutions that the gambler plays, then the casino should set limits to cover not only Mascot digital products but also other titles. Among the most widespread limits are the following: the total loss and stake limit (for a different period of time), the upper limit of the bet, the duration of the gaming session, and the bet limit (including the maximum single bet in the game).</p>
                    <p class="sub-heading"><strong>Game speed</strong></p>
                    <p>The speed of the gameplay directly affects safety. Therefore, our company offers solutions that can adjust the delay time between game rounds.</p>
                    <p class="sub-heading"><strong>Visible clock</strong></p>
                    <p>Games from our company support the time display option. It helps the players to always understand what stage they are in and experience better time management.</p>
                    <p class="heading"><strong>Participation in Studies on the Treatment and Prevention of Gambling Addiction</strong></p>
                    <p>The more knowledge we have about the prevention and treatment of gambling addiction, the more effectively we will be able to deal with this problem. Our company does not stand aside and takes an active part in donations to research in the field of prevention and treatment of people who face this problem. We also support various programs which are aimed at informing the players' community about the potential risks associated with becoming addicted to iGaming solutions. One of our main tasks in this regard is the development of a culture of safe gambling.</p>

                  </div>
              </article>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  export default {
    // page component definitions
    data() {
      return {
        title: 'Responsible gaming'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  #responsible {
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
      margin-bottom: 80px;
      @media (max-width: 650px) {
      margin-top: 30px;
      margin-bottom: 30px
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
        &:not(.heading) {
          margin-bottom: 40px;
          @media (max-width: 650px) {
            margin-bottom: 30px
          }
        }
        &.heading {
          font-size: 1.6rem;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 10px;
          @media (max-width: 650px) {
            font-size: 1.3rem
          }
        }
        &.sub-heading {
          font-size: 1.4rem;
          font-weight: 700;
          @media (max-width: 650px) {
            font-size: 1.1rem
          }
        }
      }
      ul {
        padding-left: 15px;
        list-style: disc;
        margin-bottom: 15px;
        li {
          margin-bottom: 10px;
          font-size: 1.25rem;
          line-height: 1.5
        }
      }
      a {
        color: #219CF6;
        border-bottom: 1px solid #219CF6;
        white-space: nowrap;
      }
    }
  }
  #footer {
    border-top: 1px solid rgba(255,255,255,.25)
  }
</style>
