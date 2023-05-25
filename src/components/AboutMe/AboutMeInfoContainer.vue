<template>
  <div class="aboutme-info-container-card" :class="this.textPosition" >
    <div class="about-me-info-card-content">
      <p class="about-me-info-card-content__text"><slot name="text"></slot></p>
    </div>
    <div class="about-me-info-card-title">
      <p class="about-me-info-card-title__title"><slot name="title"></slot></p>
    </div>
  </div>
</template>


<script>
export default {
  props: ['textPosition'],
}
</script>

<style lang="scss">
@import "./src/assets/styles/style";

.aboutme-info-container-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  margin: 64px 0;
  &:nth-child(3n) {
    margin: 256px 0;
  }
  @media(max-width: 1200px) {
    &:nth-child(3n) {
      margin: 136px 0;
    }
  }
  @media(max-width:768px) {
    flex-direction: column-reverse !important;
    padding: 0 16px;
    &:nth-child(3n) {
      margin: 100px 0;
    }
  }
  .about-me-info-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    &__text {
      font-weight: lighter;
      font-size: 16px;
      text-align: left;
      color: white;
    }
    @media(max-width: 768px) {
      width: 100%;
      &__text {
        text-align: center;
      }
    }
  }
  .about-me-info-card-title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    &__title {
      font-size: 64px;
      font-weight: bold;
      color: white;
      text-align: right;
      padding-left: 16px;
      span {
        color: $primaryColor;
      }
      @media(max-width: 1024px) {
        font-size: 48px;
      }
    }
    @media(max-width: 768px) {
      width: 100%;
      justify-content: center !important;
      &__title {
        font-size: 32px;
        padding-bottom: 16px;
      }
    }
  }
}
.aboutme-info-container-card.reverse {
  flex-direction: row-reverse;
  .about-me-info-card-content {
    justify-content: end;
  }
  .about-me-info-card-title {
    justify-content: flex-start;
    &__title {
      padding-right: 16px;
    }
  }
}
</style>