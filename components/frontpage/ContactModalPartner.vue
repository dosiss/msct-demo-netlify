<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="contact-modal" :class="{'modal-white': modalWhite == true}" @click.stop>
      <div class="contact-modal__title">Get in touch</div>
      <div class="contact-modal__content">
        <div v-if="success">Your message has been successfully sent. We'll contact you soon</div>
        <form v-else id="contactForm" class="contact-form" @submit.prevent="sendMessage" >
          <div class="form-subtitle-big">I am:</div>
          <div class="form-group-radio">
            <div class="form-item">
              <input id="user-type-1" v-model="usertype" name="usertype" value="Online Casino" type="radio" class="form-item__field" />
              <label for="user-type-1">Online casino</label>
            </div>
            <div class="form-item">
              <input id="user-type-2" v-model="usertype" checked="checked" name="usertype" value="Platform" type="radio" class="form-item__field" />
              <label for="user-type-2">Platform</label>
            </div>
            <div class="form-item">
              <input id="user-type-3" v-model="usertype" name="usertype" value="Media" type="radio" class="form-item__field" />
              <label for="user-type-3">Media</label>
            </div>
            <div class="form-item">
              <input id="user-type-4" v-model="usertype" name="usertype" value="Streamer" type="radio" class="form-item__field" />
              <label for="user-type-4">Streamer</label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-item" :class="{ 'focused': focusedName }">
              <label for="user-name">Your Name*</label>
              <input id="user-name" v-model="name"  required name="name" type="text" class="form-item__field" @focus="focusedName = true" @blur="focusedName = false" />
             </div>
             <div class="form-item" :class="{ 'focused': focusedPhone }">
               <label for="user-phone">Phone*</label>
               <input id="user-phone" v-model="phone"  required name="phone" type="text" class="form-item__field" @focus="focusedPhone = true" @blur="focusedPhone = false" />
              </div>
          </div>
          <div class="form-item" :class="{ 'focused': focusedEmail }">
            <label for="user-email">Email</label>
            <input id="user-email" v-model="email" name="email" type="email" class="form-item__field" @focus="focusedEmail = true" @blur="focusedEmail = false" />
           </div>
           <div class="form-item" :class="{ 'focused': focusedMsg }">
             <label for="user-message">Message</label>
             <textarea id="user-message" v-model="message" name="message"  class="form-item__field" rows="4" @focus="focusedMsg = true" @blur="focusedMsg = false"></textarea>
            </div>
            <div class="form-subtitle">Preferred method of contact</div>
            <div class="form-group-radio">
              <div class="form-item">
                <input id="contact-type-1" v-model="contacttype" name="contacttype" value="E-mail" type="radio" class="form-item__field" />
                <label for="user-type-1">E-mail</label>
              </div>
              <div class="form-item">
                <input id="contact-type-2" v-model="contacttype" checked="checked" name="contacttype" value="Phone Call" type="radio" class="form-item__field" />
                <label for="user-type-2">Phone Call</label>
              </div>
              <div class="form-item">
                <input id="contact-type-3" v-model="contacttype" name="contacttype" value="Telegram" type="radio" class="form-item__field" />
                <label for="user-type-3">Telegram</label>
              </div>
              <div class="form-item">
                <input id="contact-type-4" v-model="contacttype" name="contacttype" value="Whatsapp" type="radio" class="form-item__field" />
                <label for="user-type-4">Whatsapp</label>
              </div>
            </div>
            <button
            type="submit"
            class="buttn buttn-colored buttn-submit buttn-l">
            {{ loading ? "Sending Message..." : "Get in touch" }}
          </button>
          <div v-if="errored" class="error-msg">
            Something went wrong. Please try again later.
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
        usertype: "Platform",
        contacttype: "Phone Call",
        ClientId: "GP6i6Jhflgf3CbuPYk2AcDssrN4W3h"
      };
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
      sendMessage() {
        this.loading = true;
        const bodyFormData = new FormData();
        bodyFormData.append('name', this.name);
        bodyFormData.append('email', this.email);
        bodyFormData.append('phone', this.phone);
        bodyFormData.append('message', this.message);
        bodyFormData.append('usertype', this.usertype);
        bodyFormData.append('contacttype', this.contacttype);
        if (this.usertype === 'Online Casino' || this.usertype === 'Platform') {
          bodyFormData.append('template_id', 'template_j7x74aq');
        } else if (this.usertype === 'Media') {
          bodyFormData.append('template_id', 'template_qybwdwa');
        } else if (this.usertype ==='Streamer') {
          bodyFormData.append('template_id', 'template_p5745og');
        } else {
          bodyFormData.append('template_id', 'template_t3rkppg');
        }

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
  margin-top: 10vh;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #00F0FF;
  position: relative;
  max-height: 85vh;
  overflow-y: scroll;
  @media (max-width: 650px) {
    width: 90%;
    padding: 20px;
    overflow-y: scroll;
    max-height: 70vh;
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
      color: #fff
    }
    .contact-modal__close {
      svg {
        path {
          stroke: #000
        }
      }
    }
  }
  .form-subtitle-big {
    text-align: left;
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 700;
    @media (max-width: 650px) {
      font-size: 1.3rem
    }
  }
  .form-subtitle {
    text-align: left;
    margin-bottom: 15px;
    margin-top: 30px;

  }
}

</style>
