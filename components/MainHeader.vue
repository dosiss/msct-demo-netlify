<template>
  <div>
  <transition name="slide">
  <div v-if="showNav" id="main-header" :class="{'background-black': backgroundBlack == true}">
    <div class="container">
      <div class="header__wrap">
        <NuxtLink :to="localePath('/')" class="logo-link">
          <svg id="mascot-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 30">
            <path fill="#fff" d="M13.188 10.053c.002.622.098 1.24.284 1.833a6.923 6.923 0 0 1 1.61-1.833 4.238 4.238 0 0 1 2.745-3.968 1.49 1.49 0 0 0 1.787.784c.51-.157.897-.58 1.009-1.104a1.494 1.494 0 0 0 .972-1.87 1.483 1.483 0 0 0-1.86-.977 1.431 1.431 0 0 0-1.453-.32 1.5 1.5 0 0 0-1.02 1.672 6.13 6.13 0 0 0-4.075 5.783Z"/>
            <path fill="#fff" d="M1.894 10.053V1.888h21.598v8.165a4.24 4.24 0 0 1-2.466 3.857 4.2 4.2 0 0 1-4.515-.653 3.653 3.653 0 0 0-.725 1.832 6.066 6.066 0 0 0 6.3.406 6.128 6.128 0 0 0 3.277-5.424V0H0v10.053c.004.622.1 1.24.283 1.833a6.945 6.945 0 0 1 1.61-1.833Z"/>
            <path fill="#fff" d="M18.268 22.9c.506.173 1.065.05 1.453-.319a1.483 1.483 0 0 0 1.86-.977 1.494 1.494 0 0 0-.972-1.87 1.473 1.473 0 0 0-1.015-1.103 1.488 1.488 0 0 0-1.788.782 4.232 4.232 0 0 1-2.735-3.766 4.238 4.238 0 0 1 2.369-4.01 4.196 4.196 0 0 1 4.6.61 3.652 3.652 0 0 0 .726-1.833 6.066 6.066 0 0 0-6.302-.408 6.128 6.128 0 0 0-3.276 5.426 6.195 6.195 0 0 0 4.054 5.8 1.5 1.5 0 0 0 1.026 1.668Zm-6.072-7.473a6.176 6.176 0 0 0-.283-1.832 6.898 6.898 0 0 1-1.61 1.832 4.237 4.237 0 0 1-2.745 3.965 1.487 1.487 0 0 0-1.787-.782 1.477 1.477 0 0 0-1.015 1.102 1.494 1.494 0 0 0-.973 1.87 1.483 1.483 0 0 0 1.861.978c.387.37.947.494 1.452.32a1.5 1.5 0 0 0 1.027-1.67 6.146 6.146 0 0 0 4.073-5.783ZM8.123 4.27a1.48 1.48 0 0 0-1.027-1.673 1.517 1.517 0 0 0-1.452.32 1.479 1.479 0 0 0-1.448.326 1.497 1.497 0 0 0 .56 2.522 1.487 1.487 0 0 0 2.792.32 4.234 4.234 0 0 1 2.737 3.767 4.239 4.239 0 0 1-2.367 4.011 4.197 4.197 0 0 1-4.6-.606 3.35 3.35 0 0 0-.726 1.832 6.078 6.078 0 0 0 6.558.258 6.144 6.144 0 0 0 3-5.868 6.13 6.13 0 0 0-4.027-5.21Z"/>
            <path fill="#fff" fill-rule="evenodd" d="M25.102 13.612a6.94 6.94 0 0 1-1.61 1.832v8.165H1.894v-8.165a4.24 4.24 0 0 1 2.466-3.857 4.2 4.2 0 0 1 4.515.655A3.652 3.652 0 0 0 9.6 10.41a6.066 6.066 0 0 0-6.306-.412 6.128 6.128 0 0 0-3.277 5.43V30h25.367V15.444a6.307 6.307 0 0 0-.283-1.832ZM4.638 28.381l-.018-1.834-.973 1.852h-.195l-.99-1.834-.02 1.816h-.548l.089-3.221h.253l1.318 2.33 1.292-2.33H5.1l.088 3.22h-.55Zm3.894 0h.548l.002-1.834c0-.978-.514-1.423-1.328-1.423-.833 0-1.31.445-1.31 1.423v1.834h.565v-.766h1.523v.766Zm2.62.053a2.044 2.044 0 0 1-1.045-.303l.195-.51c.257.174.558.27.868.279.372 0 .55-.178.55-.392 0-.214-.128-.338-.691-.551-.62-.231-.833-.535-.833-.908 0-.48.39-.925 1.063-.925a1.81 1.81 0 0 1 .888.214l-.178.498a1.517 1.517 0 0 0-.708-.213c-.336 0-.495.177-.495.409 0 .213.177.338.62.498.708.284.92.552.92.978-.003.57-.428.926-1.153.926h-.001Zm2.035-1.658c0 .947.708 1.658 1.788 1.658h.002a2.07 2.07 0 0 0 1.067-.27l-.178-.48c-.289.14-.606.212-.927.21a1.105 1.105 0 0 1-.813-.314 1.116 1.116 0 0 1-.336-.808c0-.658.459-1.12 1.203-1.12.289.015.572.087.832.213l.195-.481a2.25 2.25 0 0 0-1.116-.267c-.938 0-1.717.734-1.717 1.659Zm5.31 1.658c-.974 0-1.698-.712-1.698-1.658 0-.449.18-.878.5-1.19.32-.313.752-.482 1.198-.469.993 0 1.7.694 1.7 1.659 0 .964-.724 1.658-1.699 1.658h-.001Zm3.949-2.74h1.044v-.517h-2.674v.517h1.063v2.687h.567v-2.687Z" clip-rule="evenodd"/>
            <path fill="#fff" d="M7.754 25.659c-.443-.018-.762.248-.762.893v.622h1.523v-.604c-.001-.68-.32-.911-.761-.911Zm10.744-.036c-.299.005-.583.13-.79.347a1.124 1.124 0 0 0-.307.809c-.014.403.192.781.538.987.345.205.774.205 1.119 0 .345-.206.551-.584.538-.987 0-.658-.46-1.156-1.098-1.156Z"/>
          </svg>
          <span class="site-name">Mascot Gaming</span>
        </NuxtLink>
        <div class="main-menu">
          <nav class="main-menu__pages">
            <ul>
              <li><NuxtLink :to="localePath('/games')">{{ $t('Games') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/blog')">Blog</NuxtLink></li>
              <li><NuxtLink :to="localePath('/contacts')">{{ $t('Contacts') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/about')">{{ $t('About Us') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/partners')">{{ $t('Partners') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/games-for-regulated-markets')">{{ $t('Markets') }}</NuxtLink></li>
            </ul>
          </nav>
          <div class="main-menu__right">
            <div class="main-menu__contact">
              <button @click="showContactModal">
                <svg id="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 14">
                  <path fill="#fff" d="m2.415.97-.53-.53L.825 1.5l.53.53L2.414.97Zm-.03.78h14V.25h-14v1.5Zm14.25.25v10h1.5V2h-1.5Zm-.25 10.25h-14v1.5h14v-1.5ZM2.135 12V2h-1.5v10h1.5Zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.783 1.75 1.75 1.75v-1.5Zm14.25-.25a.25.25 0 0 1-.25.25v1.5a1.75 1.75 0 0 0 1.75-1.75h-1.5Zm-.25-10.25a.25.25 0 0 1 .25.25h1.5a1.75 1.75 0 0 0-1.75-1.75v1.5Zm-14-1.5A1.75 1.75 0 0 0 .635 2h1.5a.25.25 0 0 1 .25-.25V.25ZM8.5 7.055 2.415.97l-1.06 1.06L7.44 8.116l1.06-1.06ZM16.354.97 10.27 7.055l1.06 1.061 6.086-6.086-1.06-1.06ZM7.44 8.116a2.75 2.75 0 0 0 3.89 0l-1.061-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Zm-5.575 4.96 6-5-.96-1.152-6 5 .96 1.152Zm16-1.152-6-5-.96 1.152 6 5 .96-1.152Z"/>
                </svg>
                <span>{{ $t('Contact') }}</span>
              </button>
            </div>
            <div class="main-menu__locales">
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)">{{ locale.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mobile-menu">
          <button @click="showMobileMenu">
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="2.86957" fill="white"/>
              <rect y="9.56543" width="30" height="2.86957" fill="white"/>
              <rect y="19.1304" width="30" height="2.86957" fill="white"/>
            </svg>
          </button>
          <div v-show="showDropdown" class="mobile-menu__dropdown">
            <div class="mobile-menu__dropdown-header">
              <div class="dropdown-logo">
                <svg id="mascot-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 30">
                  <path fill="#fff" d="M13.188 10.053c.002.622.098 1.24.284 1.833a6.923 6.923 0 0 1 1.61-1.833 4.238 4.238 0 0 1 2.745-3.968 1.49 1.49 0 0 0 1.787.784c.51-.157.897-.58 1.009-1.104a1.494 1.494 0 0 0 .972-1.87 1.483 1.483 0 0 0-1.86-.977 1.431 1.431 0 0 0-1.453-.32 1.5 1.5 0 0 0-1.02 1.672 6.13 6.13 0 0 0-4.075 5.783Z"/>
                  <path fill="#fff" d="M1.894 10.053V1.888h21.598v8.165a4.24 4.24 0 0 1-2.466 3.857 4.2 4.2 0 0 1-4.515-.653 3.653 3.653 0 0 0-.725 1.832 6.066 6.066 0 0 0 6.3.406 6.128 6.128 0 0 0 3.277-5.424V0H0v10.053c.004.622.1 1.24.283 1.833a6.945 6.945 0 0 1 1.61-1.833Z"/>
                  <path fill="#fff" d="M18.268 22.9c.506.173 1.065.05 1.453-.319a1.483 1.483 0 0 0 1.86-.977 1.494 1.494 0 0 0-.972-1.87 1.473 1.473 0 0 0-1.015-1.103 1.488 1.488 0 0 0-1.788.782 4.232 4.232 0 0 1-2.735-3.766 4.238 4.238 0 0 1 2.369-4.01 4.196 4.196 0 0 1 4.6.61 3.652 3.652 0 0 0 .726-1.833 6.066 6.066 0 0 0-6.302-.408 6.128 6.128 0 0 0-3.276 5.426 6.195 6.195 0 0 0 4.054 5.8 1.5 1.5 0 0 0 1.026 1.668Zm-6.072-7.473a6.176 6.176 0 0 0-.283-1.832 6.898 6.898 0 0 1-1.61 1.832 4.237 4.237 0 0 1-2.745 3.965 1.487 1.487 0 0 0-1.787-.782 1.477 1.477 0 0 0-1.015 1.102 1.494 1.494 0 0 0-.973 1.87 1.483 1.483 0 0 0 1.861.978c.387.37.947.494 1.452.32a1.5 1.5 0 0 0 1.027-1.67 6.146 6.146 0 0 0 4.073-5.783ZM8.123 4.27a1.48 1.48 0 0 0-1.027-1.673 1.517 1.517 0 0 0-1.452.32 1.479 1.479 0 0 0-1.448.326 1.497 1.497 0 0 0 .56 2.522 1.487 1.487 0 0 0 2.792.32 4.234 4.234 0 0 1 2.737 3.767 4.239 4.239 0 0 1-2.367 4.011 4.197 4.197 0 0 1-4.6-.606 3.35 3.35 0 0 0-.726 1.832 6.078 6.078 0 0 0 6.558.258 6.144 6.144 0 0 0 3-5.868 6.13 6.13 0 0 0-4.027-5.21Z"/>
                  <path fill="#fff" fill-rule="evenodd" d="M25.102 13.612a6.94 6.94 0 0 1-1.61 1.832v8.165H1.894v-8.165a4.24 4.24 0 0 1 2.466-3.857 4.2 4.2 0 0 1 4.515.655A3.652 3.652 0 0 0 9.6 10.41a6.066 6.066 0 0 0-6.306-.412 6.128 6.128 0 0 0-3.277 5.43V30h25.367V15.444a6.307 6.307 0 0 0-.283-1.832ZM4.638 28.381l-.018-1.834-.973 1.852h-.195l-.99-1.834-.02 1.816h-.548l.089-3.221h.253l1.318 2.33 1.292-2.33H5.1l.088 3.22h-.55Zm3.894 0h.548l.002-1.834c0-.978-.514-1.423-1.328-1.423-.833 0-1.31.445-1.31 1.423v1.834h.565v-.766h1.523v.766Zm2.62.053a2.044 2.044 0 0 1-1.045-.303l.195-.51c.257.174.558.27.868.279.372 0 .55-.178.55-.392 0-.214-.128-.338-.691-.551-.62-.231-.833-.535-.833-.908 0-.48.39-.925 1.063-.925a1.81 1.81 0 0 1 .888.214l-.178.498a1.517 1.517 0 0 0-.708-.213c-.336 0-.495.177-.495.409 0 .213.177.338.62.498.708.284.92.552.92.978-.003.57-.428.926-1.153.926h-.001Zm2.035-1.658c0 .947.708 1.658 1.788 1.658h.002a2.07 2.07 0 0 0 1.067-.27l-.178-.48c-.289.14-.606.212-.927.21a1.105 1.105 0 0 1-.813-.314 1.116 1.116 0 0 1-.336-.808c0-.658.459-1.12 1.203-1.12.289.015.572.087.832.213l.195-.481a2.25 2.25 0 0 0-1.116-.267c-.938 0-1.717.734-1.717 1.659Zm5.31 1.658c-.974 0-1.698-.712-1.698-1.658 0-.449.18-.878.5-1.19.32-.313.752-.482 1.198-.469.993 0 1.7.694 1.7 1.659 0 .964-.724 1.658-1.699 1.658h-.001Zm3.949-2.74h1.044v-.517h-2.674v.517h1.063v2.687h.567v-2.687Z" clip-rule="evenodd"/>
                  <path fill="#fff" d="M7.754 25.659c-.443-.018-.762.248-.762.893v.622h1.523v-.604c-.001-.68-.32-.911-.761-.911Zm10.744-.036c-.299.005-.583.13-.79.347a1.124 1.124 0 0 0-.307.809c-.014.403.192.781.538.987.345.205.774.205 1.119 0 .345-.206.551-.584.538-.987 0-.658-.46-1.156-1.098-1.156Z"/>
                </svg>
                <span class="site-name">Mascot Gaming</span>
              </div>
              <button class="dropdown-close" @click="hideMobileMenu">
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.384766" y="23.5234" width="33.2678" height="3.50188" transform="rotate(-45 0.384766 23.5234)" fill="white"/>
                  <rect width="33.2678" height="3.50188" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 26.3848 23.5234)" fill="white"/>
                </svg>
              </button>
            </div>
            <div class="mobile-menu__dropdown-main">
              <div class="main-menu__locales">
                <NuxtLink
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)">{{ locale.name }}
                </NuxtLink>
              </div>
              <nav class="mobile-menu__pages">
                <ul>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/games')">{{ $t('Games') }}</NuxtLink></li>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/blog')">Blog</NuxtLink></li>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/contacts')">{{ $t('Contacts') }}</NuxtLink></li>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/about')">{{ $t('About Us') }}</NuxtLink></li>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/partners')">{{ $t('Partners') }}</NuxtLink></li>
                  <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/games-for-regulated-markets')">{{ $t('Markets') }}</NuxtLink></li>
                </ul>
              </nav>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</transition>
  <ContactModal v-show="showModal" :modal-white = "modalWhite"  @close-modal="hideContactModal"/>
</div>
</template>
<script>

  import ContactModal from '~/components/frontpage/ContactModal'

  export default {

    components: {
      ContactModal
    },
    props: {
      backgroundBlack: {
        type: Boolean,
        default: false
      },
      modalWhite: {
        type: Boolean,
        default: false
      },
    },

    data() {
      return {
        showNav: true,
        animateNav: false,
        startY: 0,
        showDropdown: false,
        showModal: false
      }
    },

    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    },


    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {

        const windowY = window.scrollY;

        if (windowY > 100) {
          if (windowY < this.startY) {
            this.showNav = true
          } else {
            this.showNav = false
          }

      this.startY = windowY;
        }
      },

      showMobileMenu() {
        this.showDropdown = true
        document.body.classList.add("modal-open");
      },

      hideMobileMenu() {
        this.showDropdown = false;
        document.body.classList.remove("modal-open");
      },

      showContactModal() {
        this.showModal = true
        document.body.classList.add("modal-open");
      },

      hideContactModal() {
        this.showModal = false;
        document.body.classList.remove("modal-open");
      }

    },

  }
</script>
<style lang="scss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: .5s;
}
.slide-enter {
  transform: translate3d(0, -100%, 0);
}
.slide-leave-to {
  transform: translate3d(0, -100%, 0);
}
#main-header {
  height: 61px;
  background: rgba(0, 0, 0, 0.6);
/*  opacity: .8; */
  backdrop-filter: blur(11px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
/*  transition: visibility 1s ease-in-out 2s; */
  &.background-black {
    background: #000
  }
  .header__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;

    .logo-link {
      display: flex;
      align-items: center;
    }
    #mascot-logo {
      height: 30px;
      width: auto;
    }
    .site-name {
      font-size: 1.12rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 25px;
    }
    .main-menu {
      margin: 0 30px;
      display: none;
      justify-content: space-between;
      align-items: center;
      flex: 1 0;
      @media (min-width: 1200px) {
        display: flex
      }
      .main-menu__pages {

        ul {
          display: flex;
          list-style: none;
          li {
            padding: 0 20px;
            @media (max-width: 1575px) {
              padding: 0 10px
            }
          }
        }
      }
      .main-menu__contact {
        button {
          padding: 5px 12px;
          border: 1px solid #fff;
          border-radius: 8px;
          cursor: pointer;
          #contact-icon {
            width: 16px;
            height: auto;
          }
          span {
            font-weight: 700
          }
          &:hover {
            background: rgba(255, 255, 255, 0.15);
            transition: .2s ease-in
          }
        }
      }
      .main-menu__right {
        display: flex;
        align-items: center;
      }
      .main-menu__locales {
        margin-left: 15px;
        a {
          opacity: .7;
            margin-left: 10px
        }
      }
    }
    .mobile-menu {
      .mobile-menu__dropdown {
        position: absolute;
        width: 450px;
        right: 0;
        top: 0;
        background: #000;
         opacity: .8;
        @media (max-width: 850px) {
          height: auto;
          width: 100%;
          opacity: 1;
        }
        @media (max-width: 650px) {
          height: 100vh;
          width: 100%;
           opacity: 1;
        }
        .mobile-menu__dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 13px 25px;
          @media (max-width: 850px) {
            padding: 13px 35px
          }
          @media (max-width: 650px) {
            padding: 13px 25px
          }
          .dropdown-logo {
            display: flex;
            align-items: center;
          }
        }
        .mobile-menu__dropdown-main {
          text-align: center;
          margin: 40px 0 50px; /* 80px 0 50px */
          li {
            margin-bottom: 40px;
            &:first-child {
              background: url('../assets/img/mobile-menu-decor.png') no-repeat;
              background-size: contain;
              padding: 26px 0 46px;
              margin-bottom: 25px;
              @media (max-width: 850px) {
                background: url('../assets/img/tablet-menu-decor.png') no-repeat;
                background-size: 100%;
                margin-bottom: 10px;
              }
              @media (max-width: 650px) {
                background: url('../assets/img/mobile-menu-decor.png') no-repeat;
                background-size: contain;
              }
            }
            a {
              font-size: 1.4rem;
              font-weight: 700;
            }
          }
          .main-menu__locales {
            margin-bottom: 40px;
            a {
              &:last-child {
                margin-left: 30px
              }
            }
          }
        }
      }
      button {
        cursor: pointer;
        @media (min-width: 1200px) {
          display: none
        }
      }
    }
  }
}

</style>
