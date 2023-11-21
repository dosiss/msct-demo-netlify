<template>

  <div>
    <MainHeader />
    <div id="privacy">
      <div class="container container-narrow">
        <h1>{{$t('PRIVACY POLICY')}}</h1>
        <div class="heading-subtitle">{{$t('LEGAL INFORMATION')}}</div>
        <article>
                  <div class="content-inner-block">

                      <p>{{$t('Our security team is committed to protecting your privacy. Should we ask you to provide information by which you can be identified when using this website, you can rest assured that it will only be used in accordance with this privacy statement.')}}</p>
                      <p>{{$t('Our security team may amend this policy from time to time by updating this page. You should check this page frequently to make sure you’re happy with any changes.')}}</p>

                  </div>
                  <div class="content-inner-block">
                      <p class="heading"><strong>{{$t('THE INFORMATION WE COLLECT')}}</strong></p>
                      <p>{{$t('We may collect the following information:')}}<br />
                      {{$t('Name, contact details including your email address, and any other information relevant to customer surveys and/or offers.')}}</p>
                      <p class="heading"><strong>{{$t('WHAT WE DO WITH THE INFORMATION WE GATHER')}}</strong></p>
                      <p>{{$t('We require this information to understand your needs better and to provide you with better services, especially for the following reasons:')}}</p>
                     <p class="heading"><strong>{{$t('INTERNAL RECORD KEEPING')}}</strong></p>
                      <p>{{$t('We may use the information we collect to improve our products and services. We may periodically send you promotional emails about new products, special offers or other information which we think you may find interesting to the email address which you have provided us. Sometimes, we might use your information to contact you for market research purposes. We may contact you by email. We may use the information we gather to customize the website according to your interests.')}}</p>
                      <p class="heading"><strong>{{$t('SECURITY')}}</strong></p>
                      <p>{{$t('We are committed to keeping your information safe. In order to prevent unauthorised access or disclosure of information, we’ve put relevant physical, electronic and managerial procedures in place to safeguard and protect the information we collect online.')}}</p>
                      <p><strong>{{$t('Links to other websites')}}</strong></p>
                      <p>{{$t('Our website may contain links to other websites of interest. However, if you click on these links and leave our website, please note that we have no control over the content of these websites. Therefore, we cannot be responsible for the protection and/or privacy of any of the information you provide whilst visiting these websites. These websites are not governed by this privacy statement. You should exercise caution and familiarize yourself with the privacy statement applicable to the website in question.')}}</p>
                     <p class="heading"><strong>{{$t('PERSONAL INFORMATION')}}</strong></p>
                      <p>{{$t('We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. With your consent, we may use your personal information to send you promotional information about third parties which we think you could be interested in.')}}</p>
                      <p>{{$t('If the information we have about you is incorrect or incomplete, please write to or email us as soon as possible at')}} <a href="mailto:contact@mascot.games" style="text-transform:none;color:red">contact@mascot.games</a>. {{$t('We will correct any inaccurate infromation as soon as we can.')}}</p>
                      <p class="heading"><strong>{{$t('HOW WE USE COOKIES')}}</strong></p>
                      <p>{{$t('A cookie is a small file which requires your permission to be stored on your computer`s hard drive. Once you grant permission, the file will be added and can help analyze web traffic or notify you when you visit a certain website. Cookies enable web applications to personalize your user experience. For example, the web application will be able to tailor its operations to your needs, likes and dislikes by gathering and storing information about your personal preferences. We use traffic log cookies to identify what pages are being accessed. This helps us analyze webpage traffic data and improve our website by tailoring it to our customers’ needs. We only use this information for statistical analysis purposes, after which the data is deleted from the system. In conclusion, cookies help us keep track of which pages you find the most useful, and utilize that information to provide you with a better website. Cookies don’t give us access to your computer or any personal information apart from the data you choose to share with us.')}}</p>
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
      this.title = this.$t('Mascot Gaming Privacy Policy')
      this.description = this.$t('Mascot Gaming is a provider of online casino games and services. Professional casino software. Feel the gaming thrill!')
    },

  }
</script>
<style lang="scss" scoped>
  #privacy {
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
      }
    }
  }
  #footer {
    border-top: 1px solid rgba(255,255,255,.25)
  }
</style>
