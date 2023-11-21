<template>

  <div>
    <MainHeader />
    <div id="responsible">
      <div class="container container-narrow">
        <h1>{{$t('RESPONSIBLE GAMING')}}</h1>
        <article>
                  <div class="content-inner-block">

                    <p>{{$t('Our biggest priority is the satisfaction of our customers. At Mascot, we take responsible gaming seriously and only offer top iGaming services to customers who are of age. Our goal is to create a safe, secure, and fair environment with equal opportunities for all customers. We`re strong believers of the fact that only responsible gambling can be the true driving force of and contributor to sustainable business development.')}}&nbsp;</p>
                    <p>{{$t('Mascot is a licensed software provider that develops innovative slots which are available worldwide. This means we provide our customers with games of the highest standards and don`t violate the rules and norms set by regulatory authorities. We focus on working with the best casinos around the world (i.e. those that are also responsible).')}}</p>
                    <p>{{$t('Although we don`t directly interact with customers as a B2B company, we want our customers to have asses to all the tools and support they need when it comes to responsible gaming.')}}</p>
                    <p class="heading"><strong>{{$t('HOW DO WE CREATE A SECURE AND FAIR ENVIRONMENT FOR OUR PLAYERS?')}}</strong></p>
                    <p>{{$t('All of Mascot Gaming’s iGaming solutions use a random number generator (RNG). This means that 100% of results are randomized and cannot be affected by any external influences in any way. We check the effectiveness of our RNG by frequently collaborating with independent, accredited testing centres. This enables us to provide customers with first-class service.')}}&nbsp;</p>
                    <p>{{$t('The independent testing centres thoroughly review the quality of our products from a technical point of view and conclude whether our games comply with all standards (customer protection, fair play, security of customers’ personal and financial details, etc.)')}}</p>
                    <p>{{$t('You can find more information and relevant links to the following resources at the bottom of our official website:')}}</p>
                    <ul>
                    <li>{{$t('Gaming Laboratory Internations;')}}</li>
                    <li>{{$t('GlobalLab.')}}</li>
                    </ul>
                    <p>{{$t('Both are reputable companies and offer third-party testing, auditing, certifications services, etc.')}}</p>
                    <p class="heading"><strong>{{$t('MASCOT’S PLAYER PROTECTION TOOLS')}}</strong></p>
                    <p>{{$t('In addition to providing high-quality gaming content, we create a safe and comfortable gaming environment for our players. We take gambling addiction and its consequences very seriously. As a result, we’ve got a range of effective tools to combat it available below.')}}</p>
                    <p class="sub-heading"><strong>{{$t('Self-exclusion')}}</strong></p>
                    <p>{{$t('We`re aware of the fact that among our players, there are individuals who suspect or know they have an addiction to gambling, issues with money or time management, etc. We strongly recommend that such users contact the customer support team of the online casino that they registered with. There they’ll be able to request a temporary or permanent block on their account whilst providing minimal personal information to the casino.')}}&nbsp;</p>
                    <p>{{$t('It`s important that all authentication and verification procedures are directly regulated by each specific online casino operator, as they’ll be able to prevent a self-excluded player from accessing Mascot games. In addition, Mascot allows online casinos to block a specific user from accessing games for a certain time using an API.')}}</p>
                    <p>{{$t('Every player should be aware of the fact that gaming platforms are fully responsible for all self-exclusion terms, including the financial aspect. As a rule, any funds that remain in a player`s account following self-exclusion can be withdrawn upon request to a selected payment method.')}}&nbsp;</p>
                    <p class="sub-heading"><strong>{{$t('Reality check')}}</strong></p>
                    <p>{{$t('The casino that offers iGaming solutions using Mascot software may take additional steps to regularly remind users of the time they spent playing a game, the amount they have won and lost, etc. This reality check option is enabled for those users who play using real money and sends them in-game messages. As soon as the user receives the message, a special flag icon appears and the game is paused. In order to keep playing, the user needs to confirm that they have read the message.')}}</p>
                    <p class="sub-heading"><strong>{{$t('Game restrictions')}}</strong></p>
                    <p>{{$t('Our company offers API functions that can be used to restrict players from various gaming options. In this case, the user receives special in-game messages when certain limits are exceeded. If it’s necessary to apply the API option for all iGaming solutions that a certain user accesses, the casino should enforce limits not just on Mascot digital products, but on all other products. The most popular limits include: the total loss and stake limit (over a particular period of time), the duration of a gaming session, and the maximum bet amount (e.g. the maximum single bet amount in a game).')}}</p>
                    <p class="sub-heading"><strong>{{$t('Game speed')}}</strong></p>
                    <p>{{$t('The speed of a game directly impacts a customer’s safety. Therefore, our company offers solutions to adjust delay time between different game rounds.')}}</p>
                    <p class="sub-heading"><strong>{{$t('Visible clock')}}</strong></p>
                    <p>{{$t('Mascot games have a time display option. This helps customers keep track of how long they’ve been playing and improve their time management skills.')}}</p>
                    <p class="heading"><strong>{{$t('PARTICIPATION IN STUDIES ON THE TREATMENT AND PREVENTION OF GAMBLING ADDICTION')}}</strong></p>
                    <p>{{$t('The more we know about the prevention and treatment of gambling addiction, the better we’ll be able to help manage it. Our company actively participates in donating to research on the prevention and treatment of gambling addiction. We also support various programs which are aimed at keeping the gaming community informed of the potential risks associated with developing a gambling addiction. Hence, one of our key priorities is developing a safe gambling culture.')}}</p>

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
      this.title = this.$t('Responsible gaming')
      this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')
    },

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
