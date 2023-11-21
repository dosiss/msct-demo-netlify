<template>

  <div>
    <MainHeader />
    <div id="privacy">
      <div class="container container-narrow">
        <h1>{{$t('TERMS AND CONDITIONS')}}</h1>
        <div class="heading-subtitle">{{$t('LEGAL INFORMATION')}}</div>
        <article>
                  <div class="content-inner-block">

                    <p>{{$t('S.C. MNG Entertainment S.R.L. reserves the right to all website materials. None of the materials or content may be reproduced in any shape, form or by any means without the prior written consent of S.C. MNG Entertainment S.R.L.')}}</p>

                  </div>
                  <div class="content-inner-block">
                              <p class="heading"><strong>{{$t('TERMS AND CONDITIONS')}}</strong></p>
                              <p>{{$t('All website visitors are subject to the following terms and conditions. By accessing this website, visitors accept these terms and conditions. S.C. MNG Entertainment S.R.L. reserves the right to change these terms and conditions at any time at its sole discretion. In the case of any violation of these terms and conditions, S.C. MNG Entertainment S.R.L. reserves the right to seek all remedies and equities available to it by law for such violations. These terms and conditions apply to all visits to the MASCOT GAMING website, including current and future ones.')}}</p>
                              <p class="heading"><strong>{{$t('LIMITED LICENSE')}}</strong></p>
                              <p>{{$t('S.C. MNG Entertainment S.R.L. hereby authorizes you to copy the materials published by S.C. MNG Entertainment S.R.L. on this website, solely for non-commercial use within your organization and in support of S.C. MNG Entertainment S.R.L. products. You are not authorized to utilize the information in any other shape or form. In consideration of this authorization, you agree that any copies of these materials that you make shall retain all copyright and other proprietary notices in the same format as the original. Except as specified above, nothing contained herein should be construed as conferring by implication, estoppel or otherwise any licence or right to use any patent, trademark or copyright of S.C. MNG Entertainment S.R.L.')}}</p>
                              <p>{{$t('All of the content on this website is protected by copyright. Except as specifically permitted herein, no part of the information on this website may be reproduced in any form or by any means without the prior written permission of S.C. MNG Entertainment S.R.L. Visitors are not permitted to modify, distribute, publish, transmit or create derivative works of any of the materials found on this website for any public or commercial purposes.')}}</p>
                              <p class="heading"><strong>{{$t('TRADEMARKS')}}</strong></p>
                              <p>{{$t('The trademarks, logos and service marks displayed on this website are the property of S.C. MNG Entertainment S.R.L. Visitors are not permitted to use these marks without the prior written consent of S.C. MNG Entertainment S.R.L.')}}</p>
                              <p class="heading"><strong>{{$t('AVAILABILITY OF PRODUCTS AND SERVICES')}}</strong></p>
                              <p>{{$t('The website only includes standarized information about the products and services we provide. Not all of the products or programs mentioned may be available in your country. Please contact us if you require additional information about the products and services available in your country.')}}</p>
                              <p class="heading"><strong>{{$t('DISCLAIMER')}}</strong></p>
                              <p>{{$t('Although S.C. MNG Entertainment S.R.L. has attempted to provide accurate information on the website, S.C. MNG Entertainment S.R.L. assumes no responsibility for the accuracy of the information. S.C. MNG Entertainment S.R.L. may change the programs or products mentioned at any time and without notice.')}}</p>
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
      this.title = this.$t('Mascot Gaming Terms of Use')
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
