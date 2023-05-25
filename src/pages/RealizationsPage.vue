<template>
  <section class="realization-wrapper">
    <div id="realization-page"></div>
    <div class="realization-container">
      <p class="realization-container__title">Realizacje</p>
      <RealizationsImages></RealizationsImages>
    </div>
  </section>
</template>


<script>
import RealizationsImages from "@/components/RealizationsPage/RealizationsImages";
export default {
  components: {RealizationsImages}
};
</script>


<style lang="scss" scoped>
.realization-wrapper {
  position: relative;
  height: auto;
  padding: 32px 32px;
  width: 100%;
  background-color: white;
  @media(max-width: 768px) {
    padding: 32px 16px;
  }
  #realization-page {
    position: absolute;
    top: -70px;
  }
  .realization-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__title {
      color: black;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>