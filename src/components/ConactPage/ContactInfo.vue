<template>
  <div class="contact-info-container">
    <p class="contact-info-container__title">Informacje</p>
    <div class="contact-info-content-container">
      <div class="contact-info-content">
        <p class="contact-info-content__title">Nazwa firmy:</p>
        <p class="contact-info-content__subtitle">ELEKTROMECK</p>
      </div>
      <div class="contact-info-content">
        <p class="contact-info-content__title">E-mail:</p>
        <p class="contact-info-content__subtitle">elektromeck.instalacje@gmail.com</p>
      </div>
      <div class="contact-info-content">
        <p class="contact-info-content__title">Nr:</p>
        <p class="contact-info-content__subtitle">+48 887 100 208</p>
      </div>
      <div class="contact-info-content">
        <p class="contact-info-content__title">NIP:</p>
        <p class="contact-info-content__subtitle">5751902415</p>
      </div>
      <div class="contact-info-content">
        <a href="https://www.facebook.com/profile.php?id=100063848838353" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook"></font-awesome-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  components: {FontAwesomeIcon}
};
</script>

<style scoped lang="scss">
@import "./src/assets/styles/style";

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  position: relative;
  @media(max-width: 768px) {
    width: 100%;
    padding-top: 32px;
    &:after {
      content: '';
      width: calc(100% + 32px);
      height: 1px;
      background-color: $primaryColor;
      position: absolute;
      top: 0;
    }
    &:before {
      content: '';
      width: 32px;
      height: 52px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background: url("/src/assets/images/justIconLogo.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  &__title {
    color: white;
    font-weight: bold;
    font-size: 24px;
  }
  .contact-info-content-container {
    margin-top: 16px;
    .contact-info-content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 16px;
      &__title {
        font-size: 16px;
        color: white;
        padding-right: 16px;
      }
      &__subtitle {
        font-size: 16px;
        color: white;
        font-weight: bold;
        overflow-wrap: anywhere;
      }
      svg {
        color: white;
        font-size: 24px;
        cursor: pointer;
        transition: .3s all ease-in;
        &:hover {
          color: #4267B2;
        }
      }
    }
  }
}
</style>