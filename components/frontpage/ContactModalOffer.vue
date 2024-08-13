<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="contact-modal" :class="{'modal-white': modalWhite == true}" @click.stop>
      <div class="contact-modal__title">{{$t('Get an offer')}}</div>
      <div class="contact-modal__content">
        <div v-if="success">{{$t('Your message has been sent. We`ll soon be in touch!')}}</div>
        <form v-else id="contactForm" class="contact-form" @submit.prevent="sendMessage" >

          <div class="form-group">
            <div class="form-item" :class="{ 'focused': focusedName }">
              <label for="user-name">{{$t('Your Name*')}}</label>
              <input id="user-name" v-model="name"  required name="name" type="text" class="form-item__field" @focus="focusedName = true" @blur="focusedName = false" />
             </div>
             <div class="form-item" :class="{ 'focused': focusedPhone }">
               <label for="user-phone">{{$t('Phone number*')}}</label>
               <input id="user-phone" v-model="phone"  required name="phone" type="text" class="form-item__field" @focus="focusedPhone = true" @blur="focusedPhone = false" />
              </div>
          </div>
          <div class="form-item" :class="{ 'focused': focusedEmail }">
            <label for="user-email">{{$t('Email address')}}</label>
            <input id="user-email" v-model="email" name="email" type="email" class="form-item__field" @focus="focusedEmail = true" @blur="focusedEmail = false" />
           </div>
           <div class="form-item" :class="{ 'focused': focusedMsg }">
             <label for="user-message">{{$t('Message')}}</label>
             <textarea id="user-message" v-model="message" name="message"  class="form-item__field" rows="3" @focus="focusedMsg = true" @blur="focusedMsg = false"></textarea>
            </div>
            <div class="form-captcha__canvas">
              <div>
                <canvas :ref="`captcha_${_uid}`" width="150" height="50"></canvas>
              </div>
              <button type="button" @click="generateCaptcha">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-icon" overflow="hidden" style="width:30px;height:30px;vertical-align:middle" viewBox="0 0 1024 1024"><path d="M512 768c-47.392 0-91.664-13.184-129.776-35.712l-46.608 46.608A318.448 318.448 0 0 0 512 832c176.736 0 320-143.264 320-320h-64c0 141.152-114.848 256-256 256zM512 192c-176.736 0-320 143.264-320 320h64c0-141.152 114.848-256 256-256 47.392 0 91.664 13.184 129.776 35.712l46.608-46.608A318.448 318.448 0 0 0 512 192zM704 512h192l-96-128zM320 512H128l96 128z"/></svg>
                <span>refresh</span>
              </button>
            </div>
            <div class="form-captcha__input">
              <input v-model="captchaInput" type="text" placeholder="Enter CAPTCHA" required />
            </div>
            <button
            type="submit"
            class="buttn buttn-colored buttn-submit buttn-l">
            {{ loading ? $t('Sending Message...') : $t('Get an offer') }}
          </button>
          <div v-if="errored" class="error-msg">
            {{$t('Something went wrong. Please try again later.')}}
          </div>
        </form>
      </div>
      <div class="contact-modal__close" @click="$emit('close-modal')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 3 12 12m0-12L3 15"/></svg>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      modalWhite: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        focusedName: false,
        focusedPhone: false,
        focusedEmail: false,
        focusedMsg: false,
        loading: false,
        success: false,
        errored: false,
        name: "",
        email: "",
        phone: "",
        message: "",
        ClientId: "GP6i6Jhflgf3CbuPYk2AcDssrN4W3h",
        captchacode: '',
        captchaInput: ''
      };
    },

    mounted() {
      this.generateCaptcha();
    },



    methods: {
    // sendMessage() {
    //   let jsonrpcId = 0;
    //   this.loading = true;
    //   this.$axios
    //     .post("https://eform.casinomodule.org/handler", {
    //       id: jsonrpcId++,
    //       jsonrpc: "2.0",
    //       method: "Email.Send",
    //       params: {
    //         Clientid: this.ClientId,
    //         name: this.name,
    //         email: this.email,
    //         phone: this.phone,
    //         message: this.message
    //       }
    //     }, {
    //       headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //   })
    //   .then(response => {
    //       this.success = true
    //       this.errored =false
    //     })
    //     .catch(() => {
    //       this.errored = true
    //     })
    //     .finally(() => {
    //       this.loading = false
    //     });
    //   },

      generateCaptcha() {
        const canvas = this.$refs[`captcha_${this._uid}`];
        const ctx = canvas.getContext('2d');
// console.log('canvas ID= '+canvas);
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a new image object for the background
        const backgroundImage = new Image();
        backgroundImage.src = '/images/img_captcha-2.jpg';

        backgroundImage.onload = () => {
          // Draw the background image on the canvas
          ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

          // Generate a random alphanumeric code
          const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
          let code = '';
          for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
          }
          this.captchaCode = code;

          // Draw the CAPTCHA code on the canvas
          ctx.font = '30px Arial';
          ctx.fillStyle = '#000';
          ctx.fillText(code, 20, 35);
        };
      },

      sendMessage() {
      if (this.captchaInput === this.captchaCode) {
        this.loading = true;
        const bodyFormData = new FormData();
        bodyFormData.append('name', this.name);
        bodyFormData.append('email', this.email);
        bodyFormData.append('phone', this.phone);
        bodyFormData.append('message', this.message);

        bodyFormData.append('template_id', 'template_t3rkppg');

        bodyFormData.append('service_id', 'service_tr5r6fw');
        bodyFormData.append('user_id', 'eE5PNrtIqLmZkFQ2r');
           this.$axios
             .post("https://api.emailjs.com/api/v1.0/email/send-form",
             bodyFormData
             , {
               headers: {
               "Content-Type": "multipart/form-data"
             },
           })
           .then(response => {
               this.success = true
               this.errored =false
             })
             .catch(() => {
               this.errored = true
             })
             .finally(() => {
               this.loading = false
             });

           } else {
              alert('CAPTCHA is incorrect, please try again.');
           }

        },
    }
  }
</script>

<style scoped lang="scss">
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

.contact-modal {
  text-align: center;
  background-color: #000;
  width: 600px;
  height: fit-content;
  margin-top: 6vh;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #00F0FF;
  position: relative;
  max-height: 85vh;
  overflow-y: scroll;
  @media (max-width: 650px) {
    width: 90%;
    padding: 20px;
    max-height: 70vh;
    overflow-y: scroll;
  }
  .contact-modal__title {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 35px;
    @media (max-width: 650px) {
      font-size: 1.75rem
    }
  }
  .form-item {
    &.focused {
      label {
        color: #00F0FF
      }
      input {
        border-color: #00F0FF;
        color: #00F0FF
      }
      textarea {
        border-color: #00F0FF;
        color: #00F0FF
      }
    }
  }
  .contact-modal__close {
    position: absolute;
    top: 45px;
    cursor: pointer;
    right: 45px;
    @media (max-width: 650px) {
      top: 20px;
      right: 20px
    }
    svg {
      width: 18px;
      height: auto;
    }
  }
  &.modal-white {
    background-color: #fff;
    .contact-modal__title {
      color: #000
    }
    label {
      color: #000
    }
    input {
      background: #fff;
      &[type="radio"] {
        border-color: #000;
        &:checked {
          background-color: #000;
          border-color: #FFCF24
        }
      }
    }
    textarea {
      background: #fff
    }
    .form-item {
      &.focused {
        label {
          color: #00F0FF
        }
        input {
          border-color: #5f5f5f;
          color: #5f5f5f
        }
        textarea {
          border-color: #5f5f5f;
          color: #5f5f5f
        }
      }
    }
    .buttn-submit {
      background: #DB001D;
      color: #fff;
      margin-top: 20px
    }
    .contact-modal__close {
      svg {
        path {
          stroke: #000
        }
      }
    }
  }
  .form-captcha__canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    canvas {
      border-radius: 8px;
    }
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 20px;
      cursor: pointer;
      svg {
        width: 30px;
        height: auto;
        path {
          fill:#219CF6
        }
      }
      span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: .8rem;
        margin-top: 3px;
        color: #219CF6;
      }
    }
  }
  .form-captcha__input {
    input {
      width: 100%
    }
  }
}

</style>
