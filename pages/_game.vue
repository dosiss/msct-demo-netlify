<template>
  <div :class="`game_${currentGame.slug}`">
    <MainHeader />
    <header v-if="$device.isMobile" class="header-area">
      <div class="top-img" :style="{ backgroundImage: `url(/images/${currentGame.heroUrl})` }"></div>
      <div class="game-title__wrap container">
        <div class="game-title__left">
          <h1 class="game-title">{{ currentGame.name }}</h1>
        </div>
        <div class="game-title__right">
          <div class="game-title__right-content">
            <div class="button-wrap">
              <a :href="`https://${currentGame.linkToDemo}`" class="buttn buttn-colored buttn-xl">{{$t('Play demo')}}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header v-else class="header-area">
      <div v-if="currentGame.videoUrl !== null && currentGame.videoEnabled">
        <div class="video-wrapper">
            <div class="video-background">
              <div class="vid">
                <video id="bgvideo" playsinline autoplay muted loop :poster="`/images/${currentGame.heroUrl}`"  width="1920" height="1080">
                  <source id="video-src" :src="`/videos/${currentGame.videoUrl}`"  type="video/mp4">
                </video>
              </div>
              <div class="game-title__wrap container">
                <div class="game-title__left">
                  <h1 class="game-title">{{ currentGame.name }}</h1>
                </div>
                <div class="game-title__right">
                  <div class="game-title__right-content">
                    <div class="button-wrap">
                      <a :href="`${demoUrl}${locPath}/${currentGame.slug}`" :class="{ 'buttn-blue': currentGame.blueButtn == true }" class="buttn buttn-colored buttn-xl">{{$t('Play demo')}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
      <div v-else >
        <div class="top-img" :style="{ backgroundImage: `url(/images/${currentGame.heroUrl})` }">
          <div class="game-title__wrap container">
            <div class="game-title__left">
              <h1 class="game-title">{{ currentGame.name }}</h1>
            </div>
            <div class="game-title__right">
              <div class="game-title__right-content">
                <div class="button-wrap">
                  <a  :href="`${demoUrl}${locPath}/${currentGame.slug}`" :class="{ 'buttn-blue': currentGame.blueButtn == true }" class="buttn buttn-colored buttn-xl">{{$t('Play demo')}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="screenshots-carousel__wrap">

        <div v-swiper:mySwiper3="swiperOption">
          <div id="lightgallery" class="swiper-wrapper">
            <div v-if="currentGame.features[0].imgUrl !== null" class="swiper-slide game-thumbnail slide-static" :data-src="`/images/${currentGame.features[0].imgUrl}`" :data-sub-html="`${currentGame.features[0].name}`">
              <nuxt-img :src="`/images/${currentGame.features[0].imgUrl}`" :alt="`${currentGame.features[0].name}`" sizes="sm:350px lg:440px" />
              <svg width="81" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".906" width="80" height="80" rx="40" fill="#FFCF24"/><path d="M40.823 56.583c9.205 0 16.667-7.462 16.667-16.666 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.204 7.462 16.666 16.667 16.666ZM61.656 60.75l-9.062-9.063M40.822 33.666v12.5M34.572 39.916h12.5" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <div class="game-content__wrap" >
              </div>
            </div>

              <div id="galleryVideo" style="display:none;" >
                  <video v-if="currentGame.videoUrl !== null" class="lg-video-object lg-html5" controls preload="none">
                      <source :src="`/videos/${currentGame.videoUrl}`" type="video/mp4">
                       Your browser does not support HTML5 video.
                  </video>
              </div>
              <div  v-if="currentGame.videoUrl !== null" class="swiper-slide game-thumbnail slide-video" :data-poster="`/images/${currentGame.placeholderUrl}`" data-sub-html="" data-html="#galleryVideo" >
                  <nuxt-img :src="`/images/${currentGame.placeholderUrl}`" alt="" sizes="sm:350px lg:440px" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 81 80"><rect width="80" height="80" x=".906" fill="#FFCF24" rx="40"/><path fill="#1F1F1F" d="M54.914 36.672 36.125 24.146c-2.658-1.772-6.219.133-6.219 3.328v25.052c0 3.195 3.56 5.1 6.219 3.328l18.789-12.526c2.375-1.583 2.375-5.073 0-6.656Z"/></svg>
              </div>

            <div v-for="(feature, idx) in currentGame.features.slice(1)" :key="idx" class="swiper-slide game-thumbnail slide-static" :data-src="`/images/${feature.imgUrl}`" :data-sub-html="`${feature.name}`" >
                <nuxt-img :src="`/images/${feature.imgUrl}`" :alt="`${feature.name}`" sizes="sm:350px lg:440px" />
                <svg width="81" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".906" width="80" height="80" rx="40" fill="#FFCF24"/><path d="M40.823 56.583c9.205 0 16.667-7.462 16.667-16.666 0-9.205-7.462-16.667-16.667-16.667-9.205 0-16.667 7.462-16.667 16.667 0 9.204 7.462 16.666 16.667 16.666ZM61.656 60.75l-9.062-9.063M40.822 33.666v12.5M34.572 39.916h12.5" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div class="game-content__wrap" >
                </div>
            </div>
          </div>
        </div>
        <div slot="button-prev" class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 23 1 12 12 1"/></svg></div>
        <div slot="button-next" class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 11 11L1 23"/></svg></div>
      </div>




      <div class="game-meta__outer container">
        <div class="game-meta__wrap">
          <div class="hairline"></div>
          <div class="icons__outer">
            <div class="icons__wrap">
            <!-- <div v-if="currentGame.stats.rtp !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.5 50.928c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm-7-11h14"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.5 24.928 2 10h14l2-10-5 5-4-7-4 7-5-5Z"/></svg>
                <span>{{currentGame.stats.rtp}}</span>
              </div>
              <div class="slider-footer__icons-itemname">RTP</div>
            </div>
            <div v-if="currentGame.stats.hitrate !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><path stroke="#fff" stroke-width="2" d="M32.836 11.767c-1.538.128-2.942 1.484-3.452 2.147-.51-.663-1.915-2.02-3.452-2.147-1.922-.159-5.453 1.074-5.296 5.089.126 3.212 5.884 8.971 8.748 11.45 2.864-2.479 8.622-8.238 8.748-11.45.157-4.015-3.374-5.248-5.296-5.089Z"/><path stroke="#fff" stroke-width="2" d="M45.924 31.757c-.127-1.537-1.484-2.942-2.147-3.452.663-.51 2.02-1.914 2.147-3.452.16-1.922-1.073-5.453-5.088-5.296-3.213.126-8.972 5.885-11.45 8.748 2.478 2.864 8.237 8.623 11.45 8.748 4.015.157 5.247-3.373 5.088-5.296Z"/><path stroke="#fff" stroke-width="2" d="M32.836 44.843c-1.538-.127-2.942-1.484-3.452-2.147-.51.663-1.915 2.02-3.452 2.147-1.922.16-5.453-1.073-5.296-5.089.126-3.212 5.884-8.97 8.748-11.449 2.864 2.478 8.622 8.237 8.748 11.45.157 4.015-3.374 5.247-5.296 5.088Z"/><path stroke="#fff" stroke-width="2" d="M12.847 31.757c.128-1.537 1.485-2.942 2.147-3.452-.662-.51-2.02-1.914-2.147-3.452-.159-1.922 1.074-5.453 5.089-5.296 3.212.126 8.971 5.885 11.45 8.748-2.479 2.864-8.238 8.623-11.45 8.748-4.015.157-5.248-3.373-5.089-5.296Z"/><path stroke="#fff" stroke-width="3" d="m29.465 28.066 8.355 8.515c3.064 2.652 8.658 9.174 6.525 14.044"/></svg>
                  <span>{{currentGame.stats.hitrate}}%</span>
                </div>
                <div class="slider-footer__icons-itemname">Hit Rate</div>
            </div> -->
            <div v-if="currentGame.stats.reels !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><defs><mask id="f" fill="#fff"><rect width="12" height="12" x="6.166" y="24.928" rx="1"/></mask></defs><mask id="a" fill="#fff"><rect width="8" height="36" x="8.168" y="12.928" rx="1"/></mask><rect width="8" height="36" x="8.168" y="12.928" stroke="#fff" stroke-width="4" mask="url(#a)" rx="1" transform="translate(.559 .699)"/><mask id="b" fill="#fff"><rect width="12" height="12" x="6.166" y="24.928" rx="1"/></mask><rect width="12" height="12" x="6.166" y="24.928" fill="#FFCF24" stroke="#fff" stroke-width="4" mask="url(#b)" rx="1"/><mask id="c" fill="#fff"><rect width="8" height="36" x="26.189" y="12.928" rx="1"/></mask><rect width="8" height="36" x="26.189" y="12.928" stroke="#fff" stroke-width="4" mask="url(#c)" rx="1"/><mask id="d" fill="#fff"><rect width="13" height="13" rx="1" transform="rotate(44.966 -11.31 47.647)"/></mask><rect width="13" height="13" fill="#FFCF24" stroke="#fff" stroke-width="4" mask="url(#d)" rx="1" transform="rotate(44.966 -11.31 47.647)"/><mask id="e" fill="#fff"><rect width="8" height="36" x="44.211" y="12.928" rx="1"/></mask><rect width="8" height="36" x="44.211" y="12.928" stroke="#fff" stroke-width="4" mask="url(#e)" rx="1"/><rect width="12" height="12" x="42.166" y="24.928" fill="#FFCF24" stroke="#fff" stroke-width="2" rx="6"/><rect width="12" height="12" x="6.166" y="24.928" fill="#ffcf24" stroke="#fff" stroke-width="4" mask="url(#f)" rx="1" transform="rotate(45.077 21.88 52.582)"/></svg>
                  <span>{{currentGame.stats.reels}}</span>
                </div>
              <div class="slider-footer__icons-itemname">{{$t('Reels')}}</div>
            </div>
            <div v-if="currentGame.stats.rows !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61">
                      <rect width="6" height="34" x="47.5" y="12.928" stroke="#fff" stroke-width="2" rx="1" transform="rotate(90 47.5 12.928)"/>
                      <rect width="8" height="34" x="47.5" y="26.928" fill="#FFCF24" stroke="#fff" stroke-width="2" rx="1" transform="rotate(90 47.5 26.928)"/>
                      <rect width="6" height="34" x="47.5" y="42.928" stroke="#fff" stroke-width="2" rx="1" transform="rotate(90 47.5 42.928)"/>
                    </svg>
                    <span>{{currentGame.stats.rows}}</span>
                  </div>
                  <div class="slider-footer__icons-itemname">{{$t('Rows')}}</div>
                </div>
                  <div v-if="currentGame.stats.volatility !== null" class="slider-footer__icons-item">
                    <div class="icon-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><rect width="8" height="20" x="12.334" y="28.928" fill="#fff" rx="1"/><rect width="8" height="36" x="26.334" y="12.928" fill="#fff" rx="1"/><rect width="8" height="26" x="40.334" y="22.928" fill="#fff" rx="1"/></svg>
                      <span>{{currentGame.stats.volatility}}</span>
                    </div>
                  <div class="slider-footer__icons-itemname">{{$t('Volatility')}}</div>
                </div>
            <div v-if="currentGame.stats.paylines !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><path stroke="#fff" stroke-width="4" d="M3.666 12.928h14.858l12.605 33.95a1 1 0 0 0 1.814.133l10.96-19.96h13.763"/></svg>
                <span>{{currentGame.stats.paylines}}</span>
              </div>
              <div class="slider-footer__icons-itemname">{{$t('Pay lines')}}</div>
            </div>
            <div v-if="currentGame.stats.payways !== null" class="slider-footer__icons-item">
              <div class="icon-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 61"><path stroke="#fff" stroke-width="4" d="M3.666 12.928h14.858l12.605 33.95a1 1 0 0 0 1.814.133l10.96-19.96h13.763"/></svg>
                <span class="payways-value">{{currentGame.stats.payways}}</span>
              </div>
              <div class="slider-footer__icons-itemname">{{$t('Pay ways')}}</div>
            </div>
            <div v-if="currentGame.stats.html5 === true" class="slider-footer__icons-item">
              <div class="icon-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 61"><path fill="#fff" fill-rule="evenodd" d="M16.997 45.742 14 11.928h32.914l-3.002 33.817L30.457 49.5l-13.46-3.758Zm13.46-22.756h9.956l.367-4.145H20.131l1.115 12.542h14.287l-.48 5.38-4.596 1.247-.005.002-4.591-1.247-.308-3.456h-4.138l.59 6.662 8.445 2.357.007-.002 8.45-2.355 1.13-12.737H25.014l-.376-4.248h5.819Z" clip-rule="evenodd"/></svg>
              </div>
              <div class="slider-footer__icons-itemname">HTML</div>
            </div>
          </div>
        </div>
        </div>
        <div v-if="currentGame.mgacertified !== null" class="cert-info__wrap">
          <img src="/images/img_mga-logo.png" srcset="/images/img_mga-logo@2x.png 2x" alt="mga logo" />
          <span v-if="currentGame.mgacertified">{{$t('Certified in the')}} <strong>{{$t('UK')}}</strong> {{$t('and by the')}} <strong>MGA</strong></span>
          <span v-else>{{$t('Will soon be licensed by the')}} <strong>MGA</strong></span>
        </div>
      </div>
      <PlayWithPartners />
      <div class="features__outer container">
        <div class="features__wrap">
          <h2 class="features__head game-subtitle">{{$t('Game Features')}}</h2>
          <div class="features__content-wrap">
            <div class="features__content">
              <div v-for="(feature, idx) in currentGame.features" :key="idx" class="features-card">
                <h3 :class="`features-title lang-${$i18n.locale}`">{{feature.name}}</h3>
                <p class="features-description">{{feature.descr}}</p>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="game-details__wrap container">
        <div class="game-details">
          <h2 class="game-details__head">{{$t('Game details')}}</h2>
          <div class="game-details__content">
            <div class="game-details__content-inner">
              <ul class="details-list column-1">
                <li v-if="currentGame.stats.rows && currentGame.stats.rows !== null" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6.928v18"/><path fill="#000" stroke="#fff" stroke-linejoin="round" stroke-width="2" d="m9.121 12.514 3.536 3.535-3.536 3.536-3.536-3.536z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6.928v18m6-18v18"/><rect width="5" height="5" x="21.121" y="12.514" fill="#000" stroke="#fff" stroke-linejoin="round" stroke-width="2" rx="2.5" transform="rotate(45 21.121 12.514)"/></svg>
                  <span class="details-name">{{$t('Reels')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.reels}}<span>*</span>{{currentGame.stats.rows}}</div>
                </li>
                <li v-if="currentGame.stats.paylines && currentGame.stats.paylines !== null" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 15.928h-4l-3 9-6-18H6"/></svg>
                  <span class="details-name">{{$t('Pay lines')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.paylines}}</div>
                </li>
                <li v-if="currentGame.stats.payways && currentGame.stats.payways !== null" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 15.928h-4l-3 9-6-18H6"/></svg>
                  <span class="details-name">{{$t('Pay ways')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.payways}}</div>
                </li>
                <li v-if="currentGame.stats.volatility && currentGame.stats.volatility !== null" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6.928v18h18m-3-4v-8m-5 8v-12m-5 12v-3"/></svg>
                  <span class="details-name">{{$t('Volatility')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.volatility}}</div>
                </li>
                <!-- <li v-if="currentGame.type && currentGame.type !== null" class="details-item item-no-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path /></svg>
                  <span class="details-name">{{$t('Game Type')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.type}} game</div>
                </li> -->
              </ul>
              <ul class="details-list column-2">
                <!-- <li v-if="currentGame.stats.rtp && currentGame.stats.rtp" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17.928a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm10.09-3.63a6.001 6.001 0 1 1-7.75 7.63"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9.928h1v4m8.71 3.88.7.71-2.82 2.82"/></svg>
                  <span class="details-name">RTP</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.rtp}}</div>
                </li>
                <li v-if="currentGame.stats.hitrate && currentGame.stats.hitrate" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 7.728a2.7 2.7 0 0 1 3.81 0l.4.38.4-.4a2.7 2.7 0 0 1 3.82 0c1.04 1.07 1.1 2.86-.23 4.22l-4 4-4-4c-1.33-1.36-1.27-3.15-.2-4.2Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.012 11.928c1.36-1.33 3.15-1.27 4.2-.2a2.7 2.7 0 0 1 0 3.81l-.38.4.4.4a2.7 2.7 0 0 1 0 3.82c-1.07 1.04-2.86 1.1-4.22-.23m-8 0c-1.36 1.33-3.15 1.27-4.2.2a2.7 2.7 0 0 1 0-3.81l.38-.4-.4-.4a2.7 2.7 0 0 1 0-3.82c1.07-1.04 2.86-1.1 4.22.23"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.211 24.128a2.7 2.7 0 0 1-3.81 0l-.4-.38-.4.4a2.702 2.702 0 0 1-3.82 0c-1.06-1.06-1.12-2.85.21-4.21l4-4 4 4c1.33 1.36 1.27 3.15.2 4.2l.02-.01Zm.801-3.2 5 5"/></svg>
                  <span class="details-name">HIT%</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{currentGame.stats.hitrate}}</div>
                </li> -->
                <li v-if="currentGame.releaseDate && currentGame.releaseDate" class="details-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 17.928v-8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m3-20v4m-8-4v4m-5 4h18m-5 10 2 2 4-4"/></svg>
                  <span class="details-name">{{$t('Release Date')}}</span>
                  <span class="lead-line"></span>
                  <div class="details-value">{{formatDate(currentGame.releaseDate)}}</div>
                </li>

              </ul>
              <ul class="details-list"></ul>
            </div>
            <nuxt-img :src="`images/${currentGame.detailsImgUrl}`" alt="" />
          </div>
        </div>
      </div>

      <SupportedLanguages />

      <h2 v-if="currentGame.articles" class="related-posts__head container">{{$t('Media')}}</h2>
      <div class="related-posts container">
          <!-- <div v-if="relatedArticles.length" class="related-posts__group">
            <div v-for="article in relatedArticles" :key="article.slug" class="related-post__item">
              <div class="related-post__item-inner">
                <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })">
                  <div class="related-post__content">
                    <div class="content-head">{{ article.heading }}</div>
                    <div class="content-img" :style="{ backgroundImage: `url(/images/${article.img})` }"></div>
                  </div>
                  <h3>{{ article.heading}}</h3>
                </NuxtLink>
              </div>
            </div>
          </div> -->
          <div v-if="currentGame.articles" class="related-posts__wrap">
              <div v-for="(extarticle, idx) in currentGame.articles" :key="idx" class="related-post__item">
                <div class="related-post__item-inner">
                  <a :href="`${extarticle.link}`" target="_blank" rel="dofollow">
                    <div class="related-post__content">
                      <div class="content-head">{{ extarticle.title }}</div>
                      <div class="content-img" :style="{ backgroundImage: `url(/images/${extarticle.image})` }"></div>
                    </div>
                    <h3>{{ extarticle.title}}</h3>
                  </a>
                </div>
              </div>
          </div>

    </div>

    </div>
    <SharingButtons />
  <MainFooter />
  </div>
</template>

<script>

import allGames from '../static/data/games.json'
import allGamesES from '../static/data/games_es.json'
import allGamesPT from '../static/data/games_pt-br.json'


export default {

    data() {
      return {
        id: this.$route.params.game,
        demoUrl: '',
        locPath: '',

        gamesList: allGames,

        articles: [],

        swiperOption: {
          mousewheel: true,
          preventClicks: false,
          // touchMoveStopPropagation: true,
          followFinger: false,
          preventClicksPropagation: false,
          spaceBetween: 10,
          slidesPerView: 1.2,
          a11y: false,
          breakpoints: {
            '640': {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 2.5,
              spaceBetween: 17,
            },
            '1024': {
              slidesPerView: 3.5,
              spaceBetween: 17,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
            },
          }
        }
      };
    },

    async fetch() {
       this.articles = await this.$content('articles')
         .only(['slug', 'img', 'archiveDate', 'heading'])
         .where( {slug  : {$contains: this.id}} )
         .sortBy('archiveDate', 'desc')
       .fetch()
     },

    head() {
      return {
        title: this.currentGame.meta.title,
        htmlAttrs: {
            lang: this.$i18n.locale
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.currentGame.meta.descr
          },
          { property: 'og:title', hid: "og:title", content: this.currentGame.meta.title },
          { property: 'og:description', hid: 'og:description', content: this.currentGame.meta.descr },
          { property: 'og:url', hid:'og:url', content: `https://mascot.games/${this.currentGame.slug}` },
          { property: 'og:image', hid:'og:image', content: `https://mascot.games/images/${this.currentGame.thumbUrl}` },

          { name: 'twitter:card', hid: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', hid:'twitter:title', content: this.currentGame.meta.title },
          { name: 'twitter:description', hid:'twitter:description', content: this.currentGame.meta.descr },
          { name: 'twitter:image', hid:'twitter:image', content: `https://mascot.games/images/${this.currentGame.thumbUrl}` },

        ]
      }
   },



 computed: {
   currentGame() {
     return this.gamesList.slice().find((element) => element.slug === this.id);

  },

  relatedArticles() {
    return this.articles.slice(0, 2)
  }

 },

 created() {
//   const test = 'funct called';
//       console.log (test);
//    return test;
// console.log("i18n: "+this.$t('Play demo'))

 },

 async mounted() {

   try {
     await  this.$axios.get("/config.json")
       .then(response => {this.demoUrl = response.data.demoURL})
   } catch(ex) {
     this.demoUrl = this.$config.demositeURL
   }

   switch (this.$i18n.locale) {
     case "es":
       this.gamesList = allGamesES;
       this.locPath = '/es';
       break;
     case "pt":
       this.gamesList = allGamesPT;
       this.locPath = '/pt';
       break;
     default:
     this.gamesList = allGames;
     this.locPath = '';
   }

   const el = document.getElementById('lightgallery')
   window.lightGallery(el, {
    selector: '.game-thumbnail',
    download: false,
//    plugins: [lgVideo],
  });
  //   console.log('output:', test)
   // this.mySwiper.slideTo(3, 1000, false)
 },

 methods: {

  formatDate(date) {
    if (date !== 'coming soon') {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
        return new Date(date).toLocaleDateString('ro-RO', options)
    } else {
      return 'coming soon'
    }
  }
},

//  currentGame() {
//  return this.gamesList
//    .slice()
//    .find((el) => el.slug === this.$route.params.el);
// },

}


</script>

<style lang="scss" scoped>
  @mixin feature-new {
    .features-card {
      &:nth-child(1) {
        .features-title {
          &:before {
            content: 'New ';
            color: red;
          }
          &.lang-es {
            &:before {
              content: 'Nueva ';
              color: red;
            }
          }
          &.lang-pt {
            &:before {
              content: 'Novo ';
              color: red;
            }
          }
        }
      }
      &:nth-child(2) {
        .features-title {
          &:before {
            content: 'New ';
            color: red;
          }
          &.lang-es {
            &:before {
              content: 'Nueva ';
              color: red;
            }
          }
          &.lang-pt {
            &:before {
              content: 'Novo ';
              color: red;
            }
          }
        }
      }
    }
  }
  @mixin no-meta {
    .game-meta__wrap {
      display: none
    }
    .details-list {
      &.column-1 {
        display: none
      }
    }
    .game-details {
      .game-details__content {
        img {
          bottom: -140px
        }
      }
    }
  }
  .game_wild-phoenix-rises {
    @include feature-new
  }
  .game_the-pendragon-legend {
    @include feature-new
  }
  .game_minotaurs-wilds {
    @include feature-new
  }
  .game_zeus-the-thunderer-deluxe {
    @include feature-new
  }
  .game_book-of-anksunamun-rockways {
    @include feature-new
  }
  .game_hello-win {
    @include feature-new
  }
  .game_reveal-the-kraken {
    @include feature-new
  }
  .game_re-kill-ultimate {
    @include feature-new
  }
  .game_hook-up-fishing-wars {
    @include no-meta
  }
  .game_paper-lanterns-crash-game {
    @include no-meta
  }
  .top-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 900px;
    position: relative;
    @media (max-width: 650px) {
      height: 320px;
      margin-top: 60px
    }
    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
    &:after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(0, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
  }
  .game-title__wrap {
    height: 900px;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 1;
    justify-content: space-between;
    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
    @media (max-width: 650px) {
      height: unset
    }
    .game-title__left {
      flex: 0 1 51%;
      @media (max-width: 850px) {
        flex-basis: auto;
        margin-bottom: 30px
      }
      @media (max-width: 650px) {
        margin-bottom: 0
      }

    }
    .game-title__right {
      @media (max-width: 650px) {
        width: 100%
      }
      .buttn {

      }
    }
  }
  .game-title {
    font-size: 3.75rem;
    text-transform: uppercase;
    @media (max-width: 650px) {
      font-size: 1.75rem;
      margin-bottom: 20px
    }
  }
  .game-title__right {
    .buttn {
      @media (max-width: 650px) {
        justify-content: center;
        width: 100%
      }
    }
  }
  .header-area {
    padding-bottom: 90px;
    @media (max-width: 650px) {
      padding-bottom: 40px
    }
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    #bgvideo {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      transform: translateX(-50%) translateY(-50%);
      background-color: #000;
    }
    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
    &:after {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(0, #000000 0%, rgba(0, 0, 0, 0) 100%);
      @media (max-width: 650px) {
        height: 61px;
      }
    }
  }
  .screenshots-carousel__wrap {
    position: relative;
    .swiper-button-prev {
      width: 60px;
      height: 60px;
      left: 60px;
      top: unset;
      bottom: 41%;
      /* background: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(5px); */
      background: #1f1f1f;
      border-radius: 20rem;
      @media (max-width: 850px) {
        display: none
      }
      &:after {
        content: '';
      }
      svg {
        width: 11px;
        height: 60px;
        @media (max-width: 850px) {

        }
      }
      &.swiper-button-disabled {
        opacity: 0;
        cursor: none
      }
    }
    .swiper-button-next {
      width: 60px;
      height: 60px;
      right: 60px;
      top: unset;
      bottom: 41%;
      /* background: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(5px); */
      background: #1f1f1f;
      border-radius: 20rem;
      @media (max-width: 850px) {
        display: none
      }
      &:after {
        content: '';
      }
      svg {
        width: 11px;
        height: 60px;
        @media (max-width: 850px) {

        }
      }
      &.swiper-button-disabled {
        opacity: 0;
        cursor: none
      }
    }
  }
  .swiper-container {
    padding-left: 245px;
    @media (max-width: 1200px) {
      padding-left: 35px
    }
    @media (max-width: 650px) {
      padding-left: 25px
    }
    .slide-video {
      svg {
        height: 80px;
        width: auto;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(20px, -40px);
        cursor: pointer;
      }
    }
    .slide-static {
      svg {
        opacity: 0;
        height: 80px;
        width: auto;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(20px, -40px);
        cursor: pointer;
      }
      &:hover {
        svg {
          opacity: 1;
          transition: .2s ease-in .2s
        }
      }
    }
    .game-thumbnail {
      img {
        border-radius: 12px;
        cursor: pointer;
      }
    }
  }
  .game-meta__outer {
    .cert-info__wrap {
      margin: 35px 0;
      padding: 25px 20px;
      border-radius: 12px;
      background: #121212;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 56px;
        width: auto;
        @media (max-width: 650px) {
          height: 45px
        }
      }
      span {
        font-size: 2rem;
        font-weight: 500;
        /* text-transform: uppercase; */
        margin-left: 15px;
        letter-spacing: .1px;
        font-variant: all-small-caps;
        @media (max-width: 650px) {
          margin-left: 0;
          text-align: center;
          font-size: 1.6rem;
        }
        strong {
          font-weight: 600
        }
      }
      @media (max-width: 650px) {
        flex-direction: column;
      }
    }
  }
  .game-meta__wrap {
    padding-top: 90px;
    @media (max-width: 650px) {
      padding-top: 60px
    }
    .icons__outer {
      @media (max-width: 850px) {
        overflow-x: scroll;
        overflow-y: hidden;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    }
    .icons__outer::-webkit-scrollbar {
      display: none
    }
    .icons__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      padding-bottom: 45px;
      @media (max-width: 850px) {
      /*  width: 150% */
        width: 129%
      }
      @media (max-width: 650px) {
        /* width: 270% */
        width: 189%
      }
      .slider-footer__icons-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon-inner {
          display: flex;
          align-items: center;
          span {
            font-size: 1.75rem;
            font-weight: 700;
            margin-left: 4px;
          }
          .payways-value {
            max-width: 140px
          }
          svg {
            height: 60px;
            width: auto;
          }
        }
        .slider-footer__icons-itemname {
          font-size: .94rem;
          margin-top: 10px
        }
      }

    }
  }
  .features__wrap {
    padding-top: 100px;
    .features__head {
      font-size: 2.12rem;
      text-transform: uppercase;
      @media (max-width: 850px) {
      text-align: center;
      }
      @media (max-width: 650px) {
        font-size: 1.75rem
      }
    }
    .features__content-wrap {
      margin-top: 40px;
      .features__content {
        display: grid;
        justify-items: start;
        grid-template-columns: repeat(3,32%);
        gap: 20px;
        @media (max-width: 850px) {
              grid-template-columns: repeat(2, 49%);
        }
        @media (max-width: 550px) {
          grid-template-columns: 1fr;
        }
        .features-card {
          padding: 30px 35px 50px;
          background: #121212;
          border-radius: 12px;
          min-width: 100%;
          @media (max-width: 550px) {
            justify-self: stretch;
          }
          .features-title {
            font-size: 1.75rem;
            margin-bottom: 12px
          }
          .features-description {
            font-size: 1.25rem;
            line-height: 1.5
          }
        }
      }
    }
  }
  .game-details {
    padding-top: 100px;
    @media (max-width: 650px) {
      padding-top: 60px;
    }
    .game-details__head {
      font-size: 2.12rem;
      text-transform: uppercase;
      @media (max-width: 850px) {
        text-align: center;
      }
      @media (max-width: 650px) {
        font-size: 1.75rem
      }
    }
    .game-details__content {
      background: #121212;
      padding: 30px 35px;
      border-radius: 12px;
      position: relative;
      margin-top: 40px;
      @media (max-width: 650px) {
        background: transparent;
        padding: 0
      }
      .game-details__content-inner {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        @media (max-width: 850px) {
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 650px) {
          flex-direction: column;
        }
        .details-list {
          list-style: none;
          flex: 0 1 31%;
          .details-item {
            display: flex;
            align-items: flex-end;
            font-size: 1.25rem;
            margin-bottom: 12px;
            padding-right: 25px;
            @media (max-width: 650px) {
              padding-right: 10px
            }
            .details-name {
              margin-left: 10px;
              flex: 0 1;
              white-space: nowrap;
            }
            .lead-line {
              flex: 1 0 auto;
              border-bottom: 1px solid rgba(255,255,255,.5);
              margin: 0 10px;

            }
            svg {
              width: 30px;
              height: auto;
            }
            .details-value {

            }
            &.item-no-icon {
              .details-name {
                margin-left: 0;
              }
              svg {
                height: 30px;
                width: 0
              }
            }
          }
        }
      }
      img {
        max-width: 27%; /* 390px */
        position: absolute;
        bottom: 0;
        right: 0;
        @media (max-width: 1200px) {
          right: -35px
        }
        @media (max-width: 850px) {
          display: none
        }
      }
    }
  }
  .related-posts__head {
    padding-top: 100px;
    font-size: 2.12rem;
    text-transform: uppercase;
    @media (max-width: 850px) {
      text-align: center;
    }
    @media (max-width: 650px) {
      font-size: 1.75rem
    }
  }
  .related-posts {

    padding-bottom: 100px;
    @media (max-width: 650px) {
      padding-top: 60px;
      padding-bottom: 0;
    }
    .related-posts__wrap {
      display: flex;
      margin-top: 40px;
      @media (max-width: 850px) {
        justify-content: space-between;
      }
      @media (max-width: 650px) {
        flex-direction: column;
      }
      .related-posts__group {
        display: flex;
        flex: 0 1 auto;
        flex-wrap: wrap;
      }
      .related-post__item {
        flex: 0 1 450px;
        height: 300px;
        margin-right: 40px;
        @media (max-width: 850px) {
          flex-basis: 46%;
          margin-right: 0
        }
        @media (max-width: 650px) {
          flex-basis: 100%;
          margin-bottom: 20px
        }
        .related-post__content {
          position: relative;
          background: #fff;
          padding: 20px 20px 0;
          margin-bottom: 20px;
          border-radius: 12px;
          .content-head {
            color: #000;
            margin-bottom: 15px;
            font-weight: 700;
          }
          .content-img {
            height: 250px;
            background-size: cover;
            background-position: top center;
          }
          &:before {
            position: absolute;
            content: '';
            top: 0;
            right: -1px;
            height: 101%;
            width: 102%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
          }
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 400
        }
      }
    }
  }
footer {
  border-top: 1px solid rgba(255,255,255,.25)
}
</style>
