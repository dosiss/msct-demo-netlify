<template>

  <div>
    <MainHeader />
    <div id="about">
      <div class="container container-narrow">
        <h1>Игровой провайдер Mascot&nbsp;Gaming</h1>
        <article>
          <nuxt-img src="/images/img_about-ru.jpg" sizes="sm:480px md:990px" alt="" />
          <p>Mascot Gaming &mdash; это больше, чем просто разработчик онлайн-слотов: это команда трудолюбивых профессионалов, увлеченных и преданных делу создания игр. Начав свой путь в сентябре 2015 года, Mascot Gaming последовательно создавал мощный бренд и укреплял репутацию своих продуктов. Четыре года спустя разработчик представил дебютный игровой набор на ICE&nbsp;London, одном из главных событий игровой индустрии.</p>
          <p>Сегодня Mascot Gaming &mdash; прогрессивная компания с офисами в России, Испании, Риге и Дубае, предлагающая игрокам неординарный игровой опыт в более чем 500 онлайн-казино по всему миру. Четко понимая особенности игрового процесса и важность инноваций, разработчик создает разнообразное портфолио слотов, карточных игр и лотерей для самых разных игроков. Mascot Gaming не перегружает клиентов количеством игр, а стремится к уникальным релизам.</p>
          <p>Компания Mascot Gaming, известная своей флагманской функцией покупки бонусов Risk&amp;Buy, позволяющей игрокам самим влиять на ход игры, также представляет механики Rockfall и Rockways, которые делают игровой процесс еще более захватывающим. Команда понимает формулу создания хорошей игры: пикантный микс популярных фич с невероятной атмосферой, продуманным дизайном, красивой графикой и мелодичным саундтреком. Mascot Gaming обладает узнаваемым творческим подходом и никогда не повторяет собственные игры. Каждый слот компании отличается даже с точки зрения технических аспектов.</p>
          <p>В игровой набор Mascot Gaming входят слоты с высокой волатильностью, такие как Book of Amaterasu, Prince of Persia и Princess &amp; Dwarfs, а также игры с низкой волатильностью, такие как CanCan Saloon, Riot, Zeus the Thunderer, Bastet and Cats и The Myth. Cамые популярные слоты из портфолио Mascot доказывают, что игроки предпочитают качество.</p>
          <p>Продвинутые игровые фичи в сочетании с творческим подходом отличают продукты Mascot Gaming от всего, что рынок может предложить в качестве альтернативы.</p>
        </article>
      </div>
    </div>
    <SharingButtons />
    <AdBannerCBeats />
    <MainFooter />
  </div>
</template>

<script>
  export default {

    data() {
      return {
        title: 'О компании Mascot Gaming'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Игровой провайдер Mascot Gaming о компании.'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  #about {
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
      @media (max-width: 650px) {
      margin-top: 30px
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        @media (max-width: 650px) {
        margin-bottom: 30px
        }
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
        margin-bottom: 20px;
        &.emphasis {
          font-weight: 700;
          background: #1f1f1f;
          padding: 20px 30px;
          border-left: 3px solid #fff;
        }
        &.article-conclusion {
          font-size: 1.63rem;
          margin-top: 40px;
          text-transform: uppercase;
          font-weight: 700;
          @media (max-width: 650px) {
          font-size: 1.3rem;
          }
        }
      }
    }
  }
</style>
