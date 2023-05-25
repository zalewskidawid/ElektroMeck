<template>
  <section class="contact-me-wrapper" id="contactPage">
    <p class="contact-me-wrapper__title">Kontakt</p>
    <div class="contact-subsection-container">
    <ContactForm></ContactForm>
  <ContactInfo></ContactInfo>
    </div>
  </section>
</template>

<script>

import ContactInfo from "@/components/ConactPage/ContactInfo";
import ContactForm from "@/components/ConactPage/ContactForm";
export default {
  components: {ContactForm, ContactInfo}
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/style";

.contact-me-wrapper {
  width: 100%;
  height: auto;
  padding: 32px 32px;
  position: relative;
  background: black;
  @media(max-width: 768px) {
    padding: 16px 16px;
    height: auto;
  }
  &:after {
    content: '';
    width: 2px;
    height: 50%;
    position: absolute;
    top: 25%;
    background-color: $primaryColor;
    left: 50%;
    z-index: 0;
    @media(max-width: 768px) {
      display: none;
    }
  }
  &__title {
    color: white;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
  .contact-subsection-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media(max-width: 768px) {
      flex-direction: column;
      padding-top: 32px;
    }
  }
}

</style>