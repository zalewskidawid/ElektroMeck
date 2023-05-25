<template>
  <div class="realizations-image-container">
    <div class="realizations-images-container electricity-container" >
      <font-awesome-icon icon="fa-solid fa-plug"></font-awesome-icon>
      <p class="realizations-images-container__title">Instalacje elektryczne</p>
      <div class="realizations-images-container__btn" @click="showMultiple(electricalInstallations)">Zobacz zdjęcia
      </div>
    </div>
    <div class=" realizations-images-container industrial-container" >
      <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
      <p class="realizations-images-container__title">Instalacje przemysłowe</p>
      <div class="realizations-images-container__btn" @click="showMultiple(industrialInstallations)">Zobacz zdjęcia
      </div>
    </div>
    <div class=" realizations-images-container assembly-container" >
      <font-awesome-icon icon="fa-solid fa-lightbulb"></font-awesome-icon>
      <p class="realizations-images-container__title">Biały montaż</p>
      <div class="realizations-images-container__btn" @click="showMultiple(whiteAssembly)">Zobacz zdjęcia
      </div>
    </div>
    <div class=" realizations-images-container monitoring-container">
      <font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon>
      <p class="realizations-images-container__title">Monitoring</p>
      <div class="realizations-images-container__btn" @click="showMultiple(monitoring)">Zobacz zdjęcia
      </div>
    </div>
    <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>


<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import gsap from "gsap";
import ScrollTrigger from  "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    FontAwesomeIcon,
    VueEasyLightbox
  },
  data() {
    return {
      imgs: '',
      visible: false,
      index: 0,
      electricalInstallations: [
        require("@/assets/images/realizations_instalacje_elektryczne/instalacje_elektryczne_1.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_2.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_3.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_4.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_5.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_6.jpg"),
        require("@/assets/images/realizations_instalacje_elektryczne/Instalacje_elektryczne_7.jpg")
      ],
      industrialInstallations: [
        require("@/assets/images/realizations_instalacje_przeemyslowe/przemyslowe_1.jpg"),
        require("@/assets/images/realizations_instalacje_przeemyslowe/przemyslowe_2.jpg"),
        require("@/assets/images/realizations_instalacje_przeemyslowe/przemyslowe_3.jpg"),
        require("@/assets/images/realizations_instalacje_przeemyslowe/przemyslowe_4.jpg"),
        require("@/assets/images/realizations_instalacje_przeemyslowe/przemyslowe_5.jpg"),
      ],
      whiteAssembly: [
        require("@/assets/images/realizations_bialy_montaz/bialy_1.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_2.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_3.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_4.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_5.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_6.jpg"),
        require("@/assets/images/realizations_bialy_montaz/bialy_7.jpg"),
      ],
      monitoring: [
        require("@/assets/images/realizations_monitoring/monitoring_1.jpg"),
        require("@/assets/images/realizations_monitoring/monitoring_2.jpg"),
        require("@/assets/images/realizations_monitoring/monitoring_3.jpg"),
        require("@/assets/images/realizations_monitoring/monitoring_4.jpg"),
      ]
    }
  },
  methods: {
    showMultiple(imgArray) {
      this.imgs = imgArray
      this.index = 0
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    displayAboutCardOnScroll(cardId) {
      gsap.to(cardId, {
        scrollTrigger: {
          trigger: cardId,
          toggleActions: "play none none none",
          start: "20px 80%",
        },
        y: 0,
        duration: 1,
        opacity: 1,
      });
    }
  },
  mounted(){
    this.displayAboutCardOnScroll('.electricity-container');
    this.displayAboutCardOnScroll('.industrial-container');
    this.displayAboutCardOnScroll('.assembly-container');
    this.displayAboutCardOnScroll('.monitoring-container');
  }
};
</script>


<style lang="scss" scoped>
@import "./src/assets/styles/style";

.realizations-image-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;

  .realizations-images-container {
    background-color: black;
    border: 2px solid $primaryColor;
    border-radius: 20px;
    padding: 32px 32px;
    min-height: 200px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 16px;
    transform: translateY(100px);
    opacity: 0;
    @media(max-width: 768px) {
      margin: 8px;
      width: 270px;
    }

    &__title {
      color: $primaryColor;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      text-shadow: 1px 1px black;
    }

    &__btn {
      margin-top: 32px;
      color: black;
      border: 2px solid $primaryColor;
      padding: 16px 16px;
      font-size: 16px;
      font-weight: bold;
      background-color: white;
      transition: all .3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: black;
        border-color: #846700;
        color: white;
      }
    }
    svg {
      color: white;
      font-size: 48px;
      margin-bottom: 16px;
    }
  }
}
</style>