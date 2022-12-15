<template>

  <div>
    <MainHeader />
    <div id="privacy">
      <div class="container container-narrow">
        <h1>Terms of use</h1>
        <div class="heading-subtitle">Legal information</div>
        <article>
                  <div class="content-inner-block">

                    <p>S.C. MNG Production S.R.L. reserves all rights to all the materials provided at the website. None of the materials or their parts provided may be reproduced in any form or by any means, without prior written permission from S.C. MNG Production S.R.L.</p>

                  </div>
                  <div class="content-inner-block">
                              <p class="heading"><strong>Rules and Regulations</strong></p>
                              <p>The following rules and regulations apply to all visitors of this website. By accessing this website, visitor acknowledges acceptance of these terms and conditions. S.C. MNG Production S.R.L. reserves the right to change these rules and regulations from time to time at its sole discretion. In the case of any violation of these rules and regulations, S.C. MNG Production S.R.L. reserves the right to seek all remedies available by law and in equity for such violations. These rules and regulations apply to all visits to the MASCOT GAMING website, both now and in the future.</p>
                              <p class="heading"><strong>Limited License</strong></p>
                              <p>S.C. MNG Production S.R.L. hereby authorizes you to copy materials published by S.C. MNG Production S.R.L. on this website solely for non-commercial use within your organization in support of S.C. MNG Production S.R.L. products. No other use of the information is authorized. In consideration of this authorization, you agree that any copy of these materials which you make shall retain all copyright and other proprietary notices in the same form and manner as on the original. Except as specified above, nothing contained herein shall be construed as conferring by implication, estoppel or otherwise any license or right under any patent, trademark or copyright of S.C. MNG Production S.R.L.</p>
                              <p>All contents on this website are protected by copyright. Except as specifically permitted herein, no portion of the information on this website may be reproduced in any form or by any means without prior written permission from S.C. MNG Production S.R.L. Visitors are not permitted to modify, distribute, publish, transmit or create derivative works of any material found on this website for any public or commercial purposes.</p>
                              <p class="heading"><strong>Trademarks</strong></p>
                              <p>The trademarks, logos and service marks displayed on this website are the property of S.C. MNG Production S.R.L. Visitors are not permitted to use these marks without the prior written consent of S.C. MNG Production S.R.L.</p>
                              <p class="heading"><strong>Products and Services Availability</strong></p>
                              <p>Because international information is provided at this website, not all products or programs mentioned will be available in your country. Please contact us for information as to products and services available in your country.</p>
                              <p class="heading"><strong>Disclaimer</strong></p>
                              <p>Although S.C. MNG Production S.R.L. has attempted to provide accurate information on the website, S.C. MNG Production S.R.L. assumes no responsibility for the accuracy of the information. S.C. MNG Production S.R.L. may change the programs or products mentioned at any time without notice.</p>
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
        title: 'Mascot Gaming Terms of Use'
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
