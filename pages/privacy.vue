<template>

  <div>
    <MainHeader />
    <div id="privacy">
      <div class="container container-narrow">
        <h1>Privacy policy</h1>
        <div class="heading-subtitle">Legal information</div>
        <article>
                  <div class="content-inner-block">

                      <p>Security is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
                      <p>Security may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>

                  </div>
                  <div class="content-inner-block">
                      <p class="heading"><strong>What we collect</strong></p>
                      <p>We may collect the following information:<br />
                      Name, contact information including email address other information relevant to customer surveys and/or offers.</p>
                      <p class="heading"><strong>What we do with the information we gather</strong></p>
                      <p> We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                     <p class="heading"><strong>Internal record keeping</strong></p>
                      <p> We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email. We may use the information to customise the website according to your interests.</p>
                      <p class="heading"><strong>Security</strong></p>
                      <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                      <p><strong>Links to other websites</strong></p>
                      <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                     <p class="heading"><strong>Personal information</strong></p>
                      <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</p>
                      <p>If information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the following address <a href="mailto:contact@mascot.games" style="text-transform:none;color:red">contact@mascot.games</a>. We will promptly correct any information found to be incorrect.</p>
                      <p class="heading"><strong>How we use cookies</strong></p>
                      <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.  We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
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
        title: 'Mascot Gaming Privacy Policy'
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
