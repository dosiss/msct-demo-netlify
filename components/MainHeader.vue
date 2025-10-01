<template>
  <div>
  <transition name="slide">
  <div v-if="showNav" id="main-header" :class="{'background-black': backgroundBlack == true}">
    <div class="container-wide header-container">
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
          <nav :class="`lang_${$i18n.locale}`" class="main-menu__pages">
            <ul class="main-menu__pages-top">
              <li><NuxtLink :to="localePath('/games')" class="main-menu__item">{{ $t('Games') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/tic-tac-toe-games')" class="main-menu__item">{{ $t('TTT games') }}</NuxtLink></li>
              <!-- <li><NuxtLink :to="localePath('/blog')">Blog</NuxtLink></li>
              <li><NuxtLink :to="localePath('/contacts')">{{ $t('Contacts') }}</NuxtLink></li> -->
              <!-- <li><NuxtLink :to="localePath('/about')">{{ $t('About Us') }}</NuxtLink></li> -->
              <li
                class="dropdown-menu"
                @mouseenter="showItemDropdown('promo')"
                @mouseleave="hideItemDropdown('promo')"
              >
                <NuxtLink :to="localePath('/marketing-tools')" class="dropdown-toggle main-menu__item">
                  {{ $t('Promo') }}
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </NuxtLink>

                <!-- Dropdown Submenu -->
                <ul
                  v-show="activeDropdown === 'promo'"
                  class="dropdown-submenu"
                  @mouseenter="showItemDropdown('promo')"
                  @mouseleave="hideItemDropdown('promo')"
                >
                  <li><NuxtLink :to="localePath('/marketing-tools#freeRounds')">{{ $t('Free Rounds') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#preReleases')">{{ $t('Pre-Releases') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#seasonalEvents')">{{ $t('Seasonal Events') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#brandedGames')">{{ $t('Branded Games') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#trafficBasedCampaigns')">{{ $t('Traffic-based Campaigns') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#networkingTournaments')" class="highlight">{{ $t('Networking Tournaments') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#retentionTools')">{{ $t('Retention Tools') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#marketingSupport')">{{ $t('Marketing Support') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/marketing-tools#bigWinCampaigns')">{{ $t('Big Win Campaigns') }}</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink :to="localePath('/partners')" class="main-menu__item">{{ $t('Partners') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/games-for-regulated-markets')" class="main-menu__item">{{ $t('Markets') }}</NuxtLink></li>
              <li
                class="dropdown-menu"
                @mouseenter="showItemDropdown('info')"
                @mouseleave="hideItemDropdown('info')"
              >
                <div class="dropdown-toggle menu-no-link">
                  {{ $t('Info') }}
                  <span class="dropdown-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                  </span>
                </div>

                <!-- Dropdown Submenu -->
                <ul
                  v-show="activeDropdown === 'info'"
                  class="dropdown-submenu dropdown-narrow"
                  @mouseenter="showItemDropdown('info')"
                  @mouseleave="hideItemDropdown('info')"
                >
                  <li><NuxtLink :to="localePath('/about')">{{ $t('About Us') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/contacts')">{{ $t('Contacts') }}</NuxtLink></li>
                  <li><NuxtLink :to="localePath('/blog')">{{ $t('Blog') }}</NuxtLink></li>
                </ul>
              </li>
              <li ref="testMenuItem" class="test-menu-item">
                <!-- Variant A -->
                <nuxt-link
                  v-if="currentVariant === 'variantA'"
                  to="/bonuses"
                  class="menu-link variant-a"
                  @click.native.capture="handleTestMenuClick"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24"><path stroke="#DB001D" stroke-linejoin="round" stroke-width="2" d="M12.386 9V6a3 3 0 1 0-3 3h3Zm0 0V7a2 2 0 1 1 2 2h-2Zm-7 4v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7m-7-3v11m8-8v-3a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v3h16Z"/></svg>
                  <span>Casino Bonuses</span>
                </nuxt-link>

                <!-- Variant B -->
                <nuxt-link
                  v-else-if="currentVariant === 'variantB'"
                  to="/bonuses"
                  class="menu-link variant-b"
                  @click.native.capture="handleTestMenuClick"
                >
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 32"><path fill="#DB001D" fill-rule="evenodd" d="M15.583 11.333h-8.5c-1.336 0-2.003 0-2.418.415-.415.416-.415 1.083-.415 2.419v1.416c0 1.336 0 2.004.415 2.419.415.415 1.082.415 2.418.415h8.5v-7.084ZM8.5 21.25v5.667c0 1.336 0 2.003.415 2.418.415.415 1.082.415 2.418.415h4.25v-8.5H8.5Zm9.917 8.5h4.25c1.336 0 2.003 0 2.418-.415.415-.415.415-1.082.415-2.418V21.25h-7.083v8.5ZM25.5 18.417h1.417c1.336 0 2.003 0 2.418-.415.415-.415.415-1.083.415-2.419v-1.416c0-1.336 0-2.003-.415-2.419-.415-.415-1.082-.415-2.418-.415h-8.5v7.084H25.5Z" clip-rule="evenodd"/><path fill="#DB001D" d="M26.917 6.562v-.258a2.501 2.501 0 0 0-3.294-2.373 13.742 13.742 0 0 0-5.376 3.322L17 8.5v1.417h5.206c.305 0 .608-.05.897-.146l1.976-.659a2.692 2.692 0 0 0 1.838-2.55Zm-19.834 0v-.258a2.502 2.502 0 0 1 3.294-2.373 13.742 13.742 0 0 1 5.377 3.322L17 8.5v1.417h-5.206c-.305 0-.608-.05-.897-.146l-1.976-.659a2.692 2.692 0 0 1-1.837-2.55Z"/></svg> -->
                <span>Casino Bonuses</span>
                </nuxt-link>
              </li>
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
            <!-- <div class="main-menu__locales">
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)">{{ locale.name }}
              </NuxtLink>
            </div> -->
            <div
              class="main-menu__lang dropdown-menu"
              @mouseenter="showItemDropdown('lang')"
              @mouseleave="hideItemDropdown('lang')"
            >
              <div class="dropdown-toggle menu-no-link">
                {{ $i18n.locale }}
                <span class="dropdown-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 8 5"><path fill="#fff" fill-rule="evenodd" d="M4.708 4.536a1 1 0 0 1-1.414 0L.464 1.707A1 1 0 0 1 1.174 0h5.656a1 1 0 0 1 .708 1.707l-2.83 2.829Z" clip-rule="evenodd"/></svg>
                </span>
              </div>

              <!-- Dropdown Submenu -->
              <ul
                v-show="activeDropdown === 'lang'"
                class="dropdown-submenu"
                @mouseenter="showItemDropdown('lang')"
                @mouseleave="hideItemDropdown('lang')"
              >
                <li
                  v-for="locale in availableLocales"
                  :key="locale.code">
                  <NuxtLink
                    :to="switchLocalePath(locale.code)">{{ locale.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="main-menu__clientarea">
              <a href="https://client.mascot.games" target="_blank" class="buttn buttn-primary buttn-clientarea">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 13">
                  <path fill="#fff" d="M14.1529 11.1507C13.8777 10.8797 10.543 9.58985 9.93794 9.34653C9.33603 9.10747 9.0959 8.445 9.0959 8.445C9.0959 8.445 8.82497 8.59481 8.82497 8.17407C8.82497 7.75278 9.0959 8.445 9.36684 6.82044C9.36684 6.82044 10.1186 6.60953 9.96928 4.86544H9.78866C9.78866 4.86544 10.2402 3.00075 9.78866 2.36963C9.3355 1.7385 9.15806 1.31775 8.16303 1.016C7.16959 0.714784 7.53084 0.774816 6.8094 0.805628C6.0869 0.835909 5.48553 1.22691 5.48553 1.43675C5.48553 1.43675 5.03397 1.46703 4.8544 1.64766C4.67378 1.82828 4.37309 2.66978 4.37309 2.88016C4.37309 3.09053 4.52344 4.50578 4.67378 4.80541L4.49475 4.86385C4.3444 6.60847 5.09612 6.81991 5.09612 6.81991C5.36706 8.44447 5.638 7.75225 5.638 8.17353C5.638 8.59428 5.36706 8.44447 5.36706 8.44447C5.36706 8.44447 5.1264 9.10641 4.52503 9.346C3.92365 9.58666 0.585279 10.8797 0.313811 11.1501C0.042873 11.4264 0.0731542 12.6886 0.0731542 12.6886H6.46728L6.93372 10.8505L6.51934 10.4361L7.23281 9.7216L7.94628 10.4356L7.5319 10.85L7.99834 12.6881H14.3925C14.3925 12.6881 14.4259 11.4248 14.1518 11.1491L14.1529 11.1507Z"/>
                </svg>

                <span>{{$t('Client Area')}}</span>
              </a>
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
                  <li class="mobile-menu__item menu-decor" @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/games')">{{ $t('Games') }}</NuxtLink></li>
                  <li class="mobile-menu__item" @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/tic-tac-toe-games')">{{ $t('TTT games') }}</NuxtLink></li>
                  <li class="mobile-submenu-item">
                    <div class="mobile-menu-toggle" @click="toggleMobileSubmenu('promo')">
                      <NuxtLink :to="localePath('/marketing-tools')" @click.stop="navigateAndClose('/marketing-tools')">{{ $t('Promo') }}</NuxtLink>
                      <button class="mobile-submenu-arrow" :class="{ 'active': activeMobileSubmenu === 'promo' }">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <ul v-show="activeMobileSubmenu === 'promo'" class="mobile-submenu">
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#freeRounds')">{{ $t('Free Rounds') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#preReleases')">{{ $t('Pre-Releases') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#seasonalEvents')">{{ $t('Seasonal Events') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#brandedGames')">{{ $t('Branded Games') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#trafficBasedCampaigns')">{{ $t('Traffic-based Campaigns') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#networkingTournaments')" class="highlight">{{ $t('Networking Tournaments') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#retentionTools')">{{ $t('Retention Tools') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#marketingSupport')">{{ $t('Marketing Support') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/marketing-tools#bigWinCampaigns')">{{ $t('Big Win Campaigns') }}</NuxtLink></li>
                    </ul>
                  </li>
                  <li class="mobile-menu__item" @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/partners')">{{ $t('Partners') }}</NuxtLink></li>
                  <li class="mobile-menu__item" @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/games-for-regulated-markets')">{{ $t('Markets') }}</NuxtLink></li>
                  <li class="mobile-submenu-item">
                    <div class="mobile-menu-toggle" @click="toggleMobileSubmenu('info')">
                      <div class="menu-no-link">{{ $t('Info') }}</div>
                      <button class="mobile-submenu-arrow" :class="{ 'active': activeMobileSubmenu === 'info' }">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <ul v-show="activeMobileSubmenu === 'info'" class="mobile-submenu">
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/about')">{{ $t('About Us') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/contacts')">{{ $t('Contacts') }}</NuxtLink></li>
                      <li @click.capture="hideMobileMenu"><NuxtLink :to="localePath('/blog')">Blog</NuxtLink></li>

                    </ul>
                  </li>
                  <!-- A/B Tested Menu Item -->
                  <li ref="testMenuItem" class="test-menu-item mobile-menu__item">
                    <!-- Variant A -->
                    <nuxt-link
                      v-if="currentVariant === 'variantA'"
                      to="/bonuses"
                      class="menu-link variant-a"
                      @click.native.capture="handleTestMenuClick"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24"><path stroke="#DB001D" stroke-linejoin="round" stroke-width="2" d="M12.386 9V6a3 3 0 1 0-3 3h3Zm0 0V7a2 2 0 1 1 2 2h-2Zm-7 4v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7m-7-3v11m8-8v-3a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v3h16Z"/></svg>                      <span>Casino Bonuses</span>
                    </nuxt-link>

                    <!-- Variant B -->
                    <nuxt-link
                      v-else-if="currentVariant === 'variantB'"
                      to="/bonuses"
                      class="menu-link variant-b"
                      @click.native.capture="handleTestMenuClick"
                    >
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 32"><path fill="#DB001D" fill-rule="evenodd" d="M15.583 11.333h-8.5c-1.336 0-2.003 0-2.418.415-.415.416-.415 1.083-.415 2.419v1.416c0 1.336 0 2.004.415 2.419.415.415 1.082.415 2.418.415h8.5v-7.084ZM8.5 21.25v5.667c0 1.336 0 2.003.415 2.418.415.415 1.082.415 2.418.415h4.25v-8.5H8.5Zm9.917 8.5h4.25c1.336 0 2.003 0 2.418-.415.415-.415.415-1.082.415-2.418V21.25h-7.083v8.5ZM25.5 18.417h1.417c1.336 0 2.003 0 2.418-.415.415-.415.415-1.083.415-2.419v-1.416c0-1.336 0-2.003-.415-2.419-.415-.415-1.082-.415-2.418-.415h-8.5v7.084H25.5Z" clip-rule="evenodd"/><path fill="#DB001D" d="M26.917 6.562v-.258a2.501 2.501 0 0 0-3.294-2.373 13.742 13.742 0 0 0-5.376 3.322L17 8.5v1.417h5.206c.305 0 .608-.05.897-.146l1.976-.659a2.692 2.692 0 0 0 1.838-2.55Zm-19.834 0v-.258a2.502 2.502 0 0 1 3.294-2.373 13.742 13.742 0 0 1 5.377 3.322L17 8.5v1.417h-5.206c-.305 0-.608-.05-.897-.146l-1.976-.659a2.692 2.692 0 0 1-1.837-2.55Z"/></svg> -->
                    <span>Casino Bonuses</span>
                    </nuxt-link>
                  </li>
                  <li class="mobile-menu__item" @click.capture="hideMobileMenu"><a href="https://client.mascot.games" target="_blank">{{ $t('Client Area') }}</a></li>
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
        showModal: false,
        currentVariant: 'variantA',
        testName: 'menu_item_test_2025',
        testInitialized: false,
        activeDropdown: null,
        dropdownTimeout: null,
        activeMobileSubmenu: null
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
      window.removeEventListener('scroll', this.handleScroll);
      if (this.dropdownTimeout) {
        clearTimeout(this.dropdownTimeout)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initializeTest()

        // Debug dataLayer
        // console.log('DataLayer at mount:', window.dataLayer)
        if (!window.dataLayer) {
          // console.error('❌ DataLayer not initialized!')
        }
      })
    },

    methods: {
      showItemDropdown(menuKey) {
        // Clear any existing timeout
        if (this.dropdownTimeout) {
          clearTimeout(this.dropdownTimeout)
          this.dropdownTimeout = null
        }

        // Set the active dropdown
        this.activeDropdown = menuKey
      },

      hideItemDropdown(menuKey) {
        // Only hide if this is the currently active dropdown
        if (this.activeDropdown === menuKey) {
          // Add small delay to prevent flickering when moving between menu and submenu
          this.dropdownTimeout = setTimeout(() => {
            this.activeDropdown = null
          }, 100)
        }
      },

      closeAllDropdowns() {
        // Utility method to close all dropdowns
        this.activeDropdown = null
        if (this.dropdownTimeout) {
          clearTimeout(this.dropdownTimeout)
          this.dropdownTimeout = null
        }
      },

      // handleScroll () {
      //
      //   const windowY = window.scrollY;
      //
      //   if (windowY > 100) {
      //     if (windowY < this.startY) {
      //       this.showNav = true
      //     } else {
      //       this.showNav = false
      //     }
      //
      // this.startY = windowY;
      //   }
      // },

      handleScroll() {
        const isMarketingToolsPage = this.$route.path.includes('marketing-tools');
        // Always show nav on marketing-tools pages
        if (isMarketingToolsPage) {
          this.showNav = true;
          return;
        }
        const windowY = window.scrollY;
        const isMobile = window.innerWidth <= 1480;

        if (windowY > 100) {
          if (windowY < this.startY) {
            this.showNav = true;
          } else if (!isMobile) {
            // Only hide nav on larger screens, keep it visible on mobile
            this.showNav = false;
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
        this.activeMobileSubmenu = null; // Reset submenu state
        document.body.classList.remove("modal-open");
      },

      toggleMobileSubmenu(submenuKey) {
        // Toggle the submenu - close if already open, open if closed
        this.activeMobileSubmenu = this.activeMobileSubmenu === submenuKey ? null : submenuKey;
      },
      navigateAndClose(path) {
        // Navigate to main menu item and close mobile menu
        this.$router.push(this.localePath(path));
        this.hideMobileMenu();
      },

      showContactModal() {
        this.showModal = true
        document.body.classList.add("modal-open");
      },

      hideContactModal() {
        this.showModal = false;
        document.body.classList.remove("modal-open");
      },

      initializeTest() {
        if (!this.$abTest || this.testInitialized) return

        const variants = {
          variantA: 'variantA',
          variantB: 'variantB'
        }

        // Only get variant assignment - no tracking
        this.currentVariant = this.$abTest.runTest(this.testName, variants)
        this.testInitialized = true

        // console.log('Test initialized with variant:', this.currentVariant)
      },

      handleTestMenuClick(event) {
        // console.log('🔥 Click handler fired!') // Add this line
        // console.log('Current variant:', this.currentVariant) // Add this line
        // console.log('Test name:', this.testName) // Add this line
        // console.log('$abTest available:', !!this.$abTest) // Add this line

        this.$abTest.trackClick(this.testName, {
          menu_text: this.$refs.testMenuItem?.textContent?.trim(),
          variant: this.currentVariant,
          page_url: this.$route.path,
          destination_url: '/bonuses',
          click_coordinates: {
            x: event.clientX,
            y: event.clientY
          }
        })
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
      @media (min-width: 1480px) {
        display: flex
      }
      .main-menu__pages {
        position: relative;
        .main-menu__pages-top {
          display: flex;
          list-style: none;
          align-items: center;
          li {
            .main-menu__item {
              padding: 5px 10px;
              @media (max-width: 1480px) {
                padding: 0 5px
              }
            }
            .menu-no-link {
              padding: 5px 10px;
              @media (max-width: 1480px) {
                padding: 0 5px
              }
            }
          }
          .test-menu-item {
            padding: 0 10px;
            margin-left: 20px;
            .menu-link {
              display: flex;
              align-items: center;
              svg {
                width: 22px;
                height: auto
              }
              span {
                margin-left: 5px;
              }
              &.variant-b {
                border: 1px solid #DB001D;
                border-radius: 8px;
                span {
                  margin-left: 0
                }
              }
            }
          }
        }
        &.lang_es {
          ul {
            li {
              a {
                padding: 5px
              }
            }
          }
        }
        &.lang_pt {
          ul {
            li {
              a{
                padding: 5px
              }
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
      .main-menu__lang {
        margin-left: 20px;
        text-transform: uppercase;
        .dropdown-submenu {
          min-width: 50px;
          left: -10px;
          a {
            text-align: center;
          }
          li {
            &:hover > a {
                color: #bfbfbf
            }
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
      .main-menu__clientarea {
        margin-left: 20px;
        .buttn-clientarea {
          padding: 7px 12px;
          border-radius: 8px;
          svg {
            height: 13px;
            width: auto
          }
          span {
            white-space: nowrap;
          }
        }
      }
      .dropdown-menu {
        position: relative;
        display: inline-block;
      }

      .dropdown-toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }

      .dropdown-arrow {
        font-size: 0.8em;
        transition: transform 0.3s ease;

      }

      .dropdown-menu {
        &:hover {
          .dropdown-toggle {
            color: #DB001D
          }
          .dropdown-arrow {
            transform: rotate(180deg) translateY(-2px);
            svg {
              path {
                fill: #DB001D
              }
            }
          }
        }
      }

      .dropdown-submenu {
        position: absolute;
        top: 100%;
        left: 0;
        // background: #000;
        border-radius: 8px;
        min-width: 200px;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        transform: translateY(-3px);
        list-style: none;
        padding: 0;
        margin: 0;
        &.dropdown-narrow {
          min-width: 100px
        }
        .highlight {
          background: linear-gradient(180deg, rgba(23, 35, 104, 0.8) 2.88%, rgba(226, 73, 175, 0.8) 100%), #000000;
        }
        li {
          &:hover > a {
              color: #bfbfbf
          }
        }
      }

      .dropdown-menu:hover .dropdown-submenu,
      .dropdown-submenu:hover {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .dropdown-submenu a {
        border: 1px solid #1f1f1f;
        border-radius: 8px;
        display: block;
        background-color: #000;
        padding: 12px 16px;
        text-decoration: none;
        color: #FFF;
        transition: background-color 0.2s ease;
        white-space: nowrap;
      }

      // .dropdown-submenu a:hover {
      //   background: linear-gradient(180deg, rgba(23, 35, 104, 0.8) 2.88%, rgba(226, 73, 175, 0.8) 100%), #000000;
      // }

      .dropdown-submenu a.nuxt-link-active {
        background-color: #000000;

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
          height: calc(100vh - 150px);
          overflow-y: scroll;
          .mobile-menu__item {
            margin-bottom: 15px;
            &.menu-decor {
              background: url('../assets/img/mobile-menu-decor.png') no-repeat;
              background-size: contain;
              padding: 26px 0 46px;
              margin-bottom: 25px;
              @media (max-width: 850px) {
                background: url('../assets/img/tablet-menu-decor.png') no-repeat;
                background-size: 100%;
                margin-bottom: 0;
              }
              @media (max-width: 650px) {
                background: url('../assets/img/mobile-menu-decor.png') no-repeat;
                background-size: contain;
              }
            }
            > a {
              font-size: 1.4rem;
              font-weight: 700;
              padding: 0 12px;
              text-transform: uppercase;
              &.menu-link {
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: fit-content;
                margin: 0 auto;
                svg {
                  width: 31px;
                  height: auto
                }
                &.variant-b {
                  border: 1px solid #DB001D;
                  border-radius: 8px;
                  span {
                    text-transform: uppercase;
                  }
                }
              }
            }
            .menu-no-link{
              font-size: 1.4rem;
              font-weight: 700;
              padding: 0 12px;
              text-transform: uppercase;
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
        @media (min-width: 1480px) {
          display: none
        }
      }
    }

    .mobile-menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      cursor: pointer;
      margin-bottom: 15px
    }

    .mobile-menu-toggle a {
      font-size: 1.4rem;
      font-weight: 700;
      padding: 0 12px;
      text-transform: uppercase;
    }

    .mobile-menu-toggle > div {
      font-size: 1.4rem;
      font-weight: 700;
      padding: 0 12px;
      text-transform: uppercase;
    }

    .mobile-submenu-arrow {
      background: none;
      border: none;
      color: inherit;
      padding: 15px 10px;
      cursor: pointer;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-submenu-arrow.active {
      transform: rotate(180deg);
    }

    .mobile-submenu-arrow svg {
      width: 12px;
      height: 8px;
    }

    .mobile-submenu {
      background: rgba(0, 0, 0, 0.1);
      margin: 0;
      padding: 0;
      list-style: none;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      animation: slideDown 0.3s ease-out;
      margin-bottom: 15px
    }

    .mobile-submenu li {
      background: #3d3d3d;
    }

    .mobile-submenu li:last-child {
      border-bottom: none;
    }

    .mobile-submenu a {
      display: block;
      padding: 12px 20px;
      padding-left: 30px; /* Indent submenu items */
      text-decoration: none;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9em;
      transition: all 0.2s ease;
    }

    .mobile-submenu a:hover,
    .mobile-submenu a:focus {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .mobile-submenu a.nuxt-link-active {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      font-weight: 500;
    }

    /* Slide down animation */
    @keyframes slideDown {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 300px;
      }
    }

    /* Ensure smooth transitions */
    .mobile-submenu {
      overflow: hidden;
      transition: all 0.3s ease;
    }
  }
}

</style>
