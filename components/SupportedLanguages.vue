<template>
  <div class="languages__wrap container">
    <div class="languages__head">
      <h2 class="languages__head-title game-subtitle">Supported languages</h2>
    </div>
    <div class="languages__content">
      <div v-for="country in countriesList" :key="country" class="languages-item">
        <img :src="`/images/flag_${country}.png`" :alt="`${country}`" :title="`${country}`" />
      </div>
    </div>

  </div>
</template>

<script>



 export default {

   data() {
     return {

       countriesList: ['cn', 'fr', 'de', 'it', 'pt', 'es', 'tr', 'jp', 'ro', 'mt', 'ru', 'gb', 'ua'],

     }
   },

}
</script>

<style lang="scss">
.languages__wrap {
  padding-top: 100px;
  @media (max-width: 650px) {
    padding-top: 60px
  }
  .languages__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 850px) {
      justify-content: center;
    }

    .languages__head-title {
      font-size: 2.12rem;
      text-transform: uppercase;
      @media (max-width: 650px) {
        font-size: 1.75rem;
        text-align: center;
      }
    }

  }
  .languages__content {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    @media (max-width: 850px) {
      max-width: 100%;
    }
    .languages-item {
      margin-right: 15px;
      width: 50px;
      height: auto;
      @media (max-width: 850px) {
        width: 40px;

      }
    }
  }
}



</style>
