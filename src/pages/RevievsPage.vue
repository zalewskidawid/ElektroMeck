<template>
  <section class="reviews-wrapper"
           :style="{ backgroundImage: 'url(' + require('@/assets/images/reviews-image.jpg') + ')' }">
    <div id="reviewsPage"></div>
    <div class="reviews-container">
      <p class="reviews-container__title">Opinie</p>
      <div class="reviews-card-container">
        <ReviewCard class="first-review">
          <template #advise-name>
            Paweł W.
          </template>
          <template #review-amount>5 / 5</template>
          <template #default>"Wszystko przebiegło bardzo sprawnie i profesjonalnie. Elektryk z tej
            firmy okazał się bardzo kompetentny i dokładny w swojej pracy. Zawsze był na czas i starał się jak najlepiej
            wykonać swoje zadanie. Polecam tę firmę z czystym sumieniem!"
          </template>
        </ReviewCard>
        <ReviewCard class="second-review">
          <template #advise-name>
            Michał M.
          </template>
          <template #review-amount>5 / 5</template>
          <template #default>"Nie mogę wystarczająco polecić tej firmy i tego pracownika! Pracował bardzo dokładnie i
            skrupulatnie, zawsze kładąc nacisk na najdrobniejsze szczegóły. Był bardzo uprzejmy i pomocny, odpowiadając
            na wszystkie nasze pytania i wyjaśniając każdy krok, który podejmował. Zdecydowanie będziemy korzystać z
            usług tej firmy w przyszłości!"
          </template>
        </ReviewCard>
        <ReviewCard class="review-4-5 third-review">
          <template #advise-name>
            Tomasz K.
          </template>
          <template #review-amount>4 / 5</template>
          <template #default>"Pracownik był bardzo kompetentny i dokładny w swojej pracy, wykonując ją z dużą precyzją i
            starannością. Jedynym małym minusem było to, że termin wykonania prac trochę się opóźnił, ale było to raczej
            z powodu złożoności zadania, niż z winy pracownika. Mimo to, ogólnie rzecz biorąc, polecam tę firmę z
            czystym sumieniem."
          </template>
        </ReviewCard>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewCard from "@/components/RevievsPage/ReviewCard";
import gsap from "gsap";
import ScrollTrigger from  "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {ReviewCard},
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
    this.displayAboutCardOnScroll('.first-review');
    this.displayAboutCardOnScroll('.second-review');
    this.displayAboutCardOnScroll('.third-review');
  }
};
</script>

<style scoped lang="scss">
.reviews-wrapper {
  position: relative;
  height: auto;
  padding: 32px 32px;
  @media(max-width: 768px) {
    padding: 32px 16px;
  }
  width: 100%;
  background-position-x: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 1;
  #reviewsPage {
    position: absolute;
    top: -70px;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.8);
    z-index: -1;
  }

  .reviews-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    p {
      color: white;
      font-size: 32px;
      font-weight: bold;
    }
    .reviews-card-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 64px;
    }
  }
}
</style>