<template>
  <p class="slider-title">Świadczę usługi w zakresie prac elektrycznych, takich jak:</p>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
        <p class="swiper-slide-container__text">INSTALACJE ELEKTRYCZNE</p>
      </div>
    </swiper-slide>
    <swiper-slide>
    <div class="swiper-slide-container">
      <font-awesome-icon icon="fa-solid fa-lightbulb"></font-awesome-icon>
      <p class="swiper-slide-container__text">MONTAŻ OGÓLNEGO OSPRZĘTU</p>
    </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-charging-station"></font-awesome-icon>
        <p class="swiper-slide-container__text">MONTAŻ ROZDZIELNI ORAZ JEJ PODŁĄCZENIE</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-plug"></font-awesome-icon>
        <p class="swiper-slide-container__text">MODERNIZACJA GNIAZDEK</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-lightbulb"></font-awesome-icon>
        <p class="swiper-slide-container__text">MODERNIZACJA I MONTAŻ OŚWIETLENIA</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-car-battery"></font-awesome-icon>
        <p class="swiper-slide-container__text">WYMIANA BEZPIECZNIKÓW</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
      <font-awesome-icon icon="fa-solid fa-plug-circle-check"></font-awesome-icon>
      <p class="swiper-slide-container__text">MONTAŻ INSTALACJI NATYNKOWYCH W RURKACH BĄDŹ KORYTKACH</p>
    </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide-container">
        <font-awesome-icon icon="fa-solid fa-plug-circle-xmark"></font-awesome-icon>
        <p class="swiper-slide-container__text">USUWANIE USTEREK ELEKTRYCZNYCH</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination} from "swiper";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/styles/style";
.slider-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-coverflow {
  .swiper-slide {
    width: 250px;
    height: 250px;
  }
  .swiper-slide-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px;
    border: 3px solid black;
    border-radius: 10%;
    width: fit-content;
    width: 250px;
    height: 250px;
    svg {
      font-size: 48px;
      color: $primaryColor;
    }
    &__text {
      font-weight: bold;
      text-align: center;
      padding-top: 16px;
    }
  }
}
</style>