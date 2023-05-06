<template>
  <section class="about-me-wrapper" id="aboutme">
    <div class="about-me-container">
      <p class="about-me-container__title">O <span>MNIE</span></p>
      <p class="about-me-container__description">Na wstępnie chciałbym powiedzieć coś o sobie. Mam na imię Piotrek i dzięki szkole oraz własnemu zainteresowaniu zdobyłem wymaganą wiedzę do wykonywania usług elektrycznych na solidnym poziomie. Odbyłem naukę praktyczną jako elektryk przez 3 lata. Warto również wspomnieć, iż posiadam uprawnienia SEP do 1kV. Nie spocząłem na laurach i nadal się uczę, ponieważ nie zamierzam stać w miejscu i chcę wciąż się rozwijać.</p>
      <AboutMeSlider></AboutMeSlider>
    </div>
  </section>
</template>

<script>
import AboutMeSlider from "@/components/AboutMe/AboutMeSlider.vue";
export default {
  components: {AboutMeSlider}
};

</script>


<style scoped lang="scss">
@import "./src/assets/styles/style";
.about-me-wrapper {
  height: auto;
  width: 100%;
  background-color: white;
  .about-me-container {
    height: 100%;
    width: 100%;
    padding: 32px 32px;
    @media(max-width: 768px) {
      padding: 32px 16px;
    }
    &__title {
      font-size: 32px;
      color: black;
      text-align: center;
      font-weight: bold;
      span {
        color: $primaryColor;
      }
    }
    &__description {
      font-size: 18px;
      padding: 32px 0;
      text-align: center;
    }
  }
}
</style>