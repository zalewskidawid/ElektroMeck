<template>
  <section class="about-me-wrapper">
    <div id="aboutme"></div>
    <div class="about-me-container">
      <TheParticles></TheParticles>
      <AboutMeInfoContainer style="transform: translateY(-100px); opacity: 0" class="first-card-about">
        <template #text>
          Jesteśmy firmą jednoosobową specjalizującą się w świadczeniu usług z zakresu instalacji mieszkaniowych, instalacji przemysłowych, monitoringu, alarmów, pomiarów instalacji elektrycznych oraz usuwania awarii. Mamy doświadczenie i wiedzę niezbędną do zapewnienia naszym klientom profesjonalnych rozwiązań w dziedzinie instalacji elektrycznych.
        </template>
        <template #title>
          KIM <span>JESTEŚMY?</span>
        </template>
      </AboutMeInfoContainer>
      <AboutMeInfoContainer style="transform: translateY(-100px); opacity: 0" text-position="reverse" class="second-card-about">
        <template #text>
          Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych zarówno dla klientów indywidualnych, jak i firm. Realizujemy projekty instalacji elektrycznych w nowo budowanych domach, mieszkaniach, a także w obiektach przemysłowych. Nasze usługi obejmują również instalację systemów monitoringu i alarmowych, które zapewniają bezpieczeństwo i ochronę mienia.
          <br>
          Ponadto, przeprowadzamy pomiary instalacji elektrycznych, co pozwala nam sprawdzić ich stan techniczny i zapewnić klientom bezpieczne użytkowanie. Nasza firma zajmuje się także usuwaniem awarii, oferując szybką i skuteczną reakcję na wszelkie problemy związane z instalacjami elektrycznymi.
        </template>
        <template #title>
          CO <span>ROBIMY?</span>
        </template>
      </AboutMeInfoContainer>
      <AboutMeInfoContainer style="transform: translateY(-100px); opacity: 0" class="third-card-about">
        <template #text>
          Nasz sposób pracy opiera się na indywidualnym podejściu do każdego klienta i jego potrzeb. Przede wszystkim, dokładnie analizujemy wymagania i oczekiwania klienta, aby zaproponować najodpowiedniejsze rozwiązania. Nasza wiedza i doświadczenie pozwalają nam tworzyć efektywne projekty instalacji elektrycznych, uwzględniając najnowsze standardy i przepisy.<br>Realizując nasze usługi, stosujemy wysokiej jakości materiały i nowoczesne technologie. Dbałość o szczegóły oraz terminowość są dla nas priorytetem. Dbamy również o zapewnienie bezpieczeństwa podczas prac, stosując odpowiednie procedury i zabezpieczenia.
        </template>
        <template #title>
          JAK <span>ROBIMY?</span>
        </template>
      </AboutMeInfoContainer>
<!--      <AboutMeSlider></AboutMeSlider>-->
    </div>
  </section>
</template>

<script>
// import AboutMeSlider from "@/components/AboutMe/AboutMeSlider.vue";
import AboutMeInfoContainer from "@/components/AboutMe/AboutMeInfoContainer";
import TheParticles from "@/components/TheParticles";
import gsap from "gsap";
import ScrollTrigger from  "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {AboutMeInfoContainer, TheParticles},
  // components: {AboutMeSlider}
  methods: {
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
  mounted() {
    this.displayAboutCardOnScroll('.first-card-about');
    this.displayAboutCardOnScroll('.second-card-about');
    this.displayAboutCardOnScroll('.third-card-about');
  }
};

</script>


<style scoped lang="scss">
@import "./src/assets/styles/style";
.about-me-wrapper {
  position: relative;
  height: auto;
  width: 100%;
  background-color: transparent;
  #aboutme {
    position: absolute;
    top: -70px;
  }
  .about-me-container {
    height: 100%;
    width: 100%;
    padding: 32px 32px;
    @media(max-width: 768px) {
      padding: 32px 16px;
    }
  }
}
</style>