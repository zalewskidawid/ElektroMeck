<template>
<div class="contact-form-wrapper">
  <p class="contact-form-wrapper__title">Formularz kontaktowy</p>
  <div class="contact-form-container">
    <form class="form-control" @submit.prevent="sendEmail">
      <input name="name" type="text" class="feedback-input" placeholder="Imię" v-model="name"  :class="{'error-input': nameValidation === false}"/>
      <p class="form-error-text" v-if="nameValidation === false">Pole imię powinno zawierać min 2 znaki i nie powinno zawierać liczb.</p>
      <input  name="email" type="text" class="feedback-input" placeholder="Email" v-model="email" :class="{'error-input': emailValidation === false}" />
      <p class="form-error-text" v-if="emailValidation === false">Pole email powinno zawierać poprawny email.</p>
      <textarea  name="text" class="feedback-input" placeholder="Wiadomość" v-model="message" :class="{'error-input': messageValidation === false}"></textarea>
      <p class="form-error-text" v-if="messageValidation === false">Pole wiadomość powinno zawierać min 10 znaków.</p>
      <button type="submit">WYŚLIJ</button>
    </form>
  </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      name: '',
      nameValidation: true,
      email: '',
      emailValidation: true,
      message: '',
      messageValidation: true,
      formValidation: true,
    }
  },
  methods: {
    sendEmail() {
      this.validateForm();
      if(this.formValidation) {
        try {
          emailjs.send("service_doid5p7","template_fk462ao",{
            email: this.email,
            name:  this.name,
            message: this.message
          }, 'JXuzMaEfczMsgD9K8');
        } catch(error) {
          console.log({error})
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
      }
    },
    validateForm() {
      if(this.name.length < 2 || /\d/.test(this.name)) {
        this.nameValidation = false;
        this.formValidation = false;
      } else {
        this.nameValidation = true;
        this.formValidation = true;
      }
      if(/^[^@]+@\w+(\.\w+)+\w$/.test(this.email) == false) {
        this.emailValidation = false;
        this.formValidation = false;
      } else {
        this.emailValidation = true;
        this.formValidation = true;
      }
      if(this.message.length < 10) {
        this.messageValidation = false;
        this.formValidation = false;
      } else {
        this.messageValidation = true;
        this.formValidation = true;
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/styles/style";

.contact-form-wrapper {
  width: 50%;
  margin-right: 32px;
  @media(max-width: 768px) {
    padding-bottom: 32px;
    margin-right: 0;
    width: 100%;
  }
  &__title {
    color: white;
    font-size: 24px;
    text-align: center;
    padding-bottom: 24px;
  }
  .contact-form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .form-control {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: clamp(250px, 100%, 400px);
      .feedback-input {
        color:white;
        font-weight:500;
        font-size: 18px;
        border-radius: 5px;
        line-height: 22px;
        background-color: black;
        border:2px solid $primaryColor;
        transition: all 0.3s;
        padding: 13px;
        margin-bottom: 15px;
        width: 100%;
        box-sizing: border-box;
        outline:0;
      }

      .feedback-input:focus { border:2px solid #846700; }

      textarea {
        height: 150px;
        line-height: 150%;
        resize:vertical;
      }

      [type="submit"] {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        width: 100%;
        background:$primaryColor;
        border-radius:5px;
        border:0;
        cursor:pointer;
        color:white;
        font-size:24px;
        padding-top:10px;
        padding-bottom:10px;
        transition: all 0.3s;
        margin-top:-4px;
        font-weight:700;
        text-shadow: 1px 1px black;
      }
      [type="submit"]:hover { background:#846700; }
      .error-input {
        border-color: red;
        &:focus {
          border-color: red;
        }
      }
      .form-error-text {
        color: red;
        margin-bottom: 16px;
      }
    }

  }
}
</style>