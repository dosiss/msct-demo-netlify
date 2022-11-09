<template>
  <div class="video-wrapper">
      <div class="video-background">
        <div class="vid">
          <video id="bgvideo" playsinline autoplay muted loop poster="images/head_bastet_video.jpg"  width="1920" height="1080">
            <source id="video-src" src="~/assets/img/frontpage/headvideo-bastet.mp4"  type="video/mp4">
          </video>
        </div>
          <div class="container">
              <div class="top-header__wrap">
                    <h1 class="top-header__title">Feel the<br>Gaming Thrill</h1>
                    <button class="buttn buttn-primary buttn-xl" href="//play.mascot.games">Play our games</button>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
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
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .75;
    z-index: -1
  }
}
.top-header__wrap {
  padding: 280px 0 300px;
  h1 {
    font-size: 4.6rem;
    margin-bottom: 70px;
    line-height: 1.5
  }
}
</style>
