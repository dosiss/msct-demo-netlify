<template>
  <div class="modal-overlay">
    <div class="age-check-modal">
      <div class="age-check__img">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80"><path fill="#DB001D" stroke="#fff" stroke-width="2" d="M1.009 23.577 23.855 1l32.311.009L79 23.598l-.009 31.926L56.145 78.1l-32.311-.009L1 55.503l.009-31.926Z"/><path fill="#fff" d="M24.221 53.287h-6.173V33.769l-4.851 3.829L10 33.13l8.562-6.418h5.66v26.574Zm22.581-7.582c0 2.653-.943 4.704-2.83 6.156-1.886 1.426-4.2 2.139-6.945 2.139-2.768 0-5.095-.713-6.982-2.14-1.862-1.426-2.793-3.465-2.793-6.117 0-1.552.441-2.89 1.323-4.017A6.736 6.736 0 0 1 31.92 39.4v-.076a6.36 6.36 0 0 1-2.866-2.139c-.735-1-1.102-2.202-1.102-3.603 0-2.352.87-4.204 2.609-5.555C32.324 26.676 34.48 26 37.027 26c2.548 0 4.692.663 6.431 1.99 1.764 1.3 2.646 3.127 2.646 5.48 0 1.425-.367 2.651-1.102 3.678a5.517 5.517 0 0 1-2.867 2.139v.113c1.348.375 2.462 1.138 3.344 2.289.882 1.151 1.323 2.49 1.323 4.016Zm-7.57-9.571c.613-.626.919-1.364.919-2.214 0-.851-.306-1.564-.919-2.14-.612-.6-1.347-.9-2.205-.9-.906 0-1.653.287-2.241.863-.564.575-.846 1.3-.846 2.177 0 .875.282 1.626.846 2.252.563.6 1.31.9 2.241.9.882 0 1.617-.312 2.205-.938Zm1.397 9.346c0-1.026-.343-1.877-1.03-2.552-.685-.701-1.543-1.051-2.572-1.051-1.053 0-1.923.35-2.609 1.05-.686.676-1.029 1.527-1.029 2.553 0 1.05.331 1.902.992 2.552.687.65 1.568.976 2.646.976 1.078 0 1.948-.313 2.61-.938.66-.65.992-1.514.992-2.59ZM71 44.279h-7.79v7.844h-4.778V44.28h-7.827v-4.73h7.79v-7.844h4.778v7.845H71v4.729Z"/></svg>
      </div>
      <div class="age-check-modal__title">{{$t('Age Restriction')}}</div>
      <p v-if="checkText">{{$t('Please confirm that you are over the age of 18')}}</p>
      <p v-else class="text-warning">{{$t('Sorry, you’re below the required age limit to visit this website')}}</p>
      <div class="button-group">
        <button class="buttn buttn-m buttn-grey" @click="checkText = false">{{$t('I am under the age of 18')}}</button>
        <button class="buttn buttn-primary buttn-m" @click="$emit('age-verified')">{{$t('I am over the age of 18')}}</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {


    data() {
      return {
        checkText: true,
      };
    },

//   mounted () {
//      document.body.classList.add("modal-open")
//    },

//  destroyed() {
//      document.body.classList.remove("modal-open")

//    },

    methods: {

    }
  }
</script>

<style lang="scss">


.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(255,255,255,.01);
  backdrop-filter: blur(25px);
  z-index: 4
}

.age-check-modal {
  text-align: center;
  background-color: #000;
  width: 600px;
  height: fit-content;
  margin-top: 10vh;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #DB001D;
  position: relative;
  @media (max-width: 650px) {
    width: 90%;
    padding: 20px
  }
  .age-check__img {
    svg {
      width: 80px;
      height: auto
    }
  }
  .age-check-modal__title {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 15px;
    margin-top: 30px;
    @media (max-width: 650px) {
      font-size: 1.75rem
    }
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
    &.text-warning {
      color: red
    }
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    .buttn {
      width: 250px;
      font-size: 1.25rem;
      text-transform: uppercase;
      padding-left: 10px;
      padding-right: 10px;
      @media (max-width: 650px) {
        width: 45%
      }
      &.buttn-grey {
        background: #5f5f5f;
        font-weight: 700;
        border-radius: 12px;
        cursor: pointer;
        &:hover {
          background: #525252
        }
      }
    }
  }
}

</style>
