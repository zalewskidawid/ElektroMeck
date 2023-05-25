<template>
  <div class="review-card-container">
    <div class="review-avatar-and-content-container">
      <div class="review-card-avatar-container">
        <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
      </div>
      <div class="review-card-text-container">
        <p class="review-card-text-container__text">
          <slot></slot>
        </p>
        <p class="review-card-text-container__name">
          <slot name="advise-name"></slot>
        </p>
      </div>
    </div>
    <div class="review-stars-container">
      <p class="review-stars-container__title">Ocena:</p>
      <div class="review-stars-bolt-container">
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-bolt"></font-awesome-icon>
      </div>
      <p class="review-stars-container__review-amount">
        <slot name="review-amount"></slot>
      </p>
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

.review-4-5 {
  .review-stars-container {
    .review-stars-bolt-container {
      svg:nth-child(5n) {
        color: transparent !important;
        stroke-width: 10px;
        stroke: white;
      }
    }
  }
}

.review-card-container {
  position: relative;
  padding: 16px;
  border: 2px solid $primaryColor;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 350px;
  width: 350px;
  height: 322px;
  padding: 16px;
  flex-wrap: wrap;
  background-color: black;
  margin: 0 16px 16px 16px;
  transform: translateY(100px);
  opacity: 0;
  @media(max-width: 1059px) {
    margin: 0 16px 56px 16px;
  }
  @media(max-width: 768px) {
    max-width: 280px;
    width: 280px;
    height: 390px;
  }
.review-avatar-and-content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
  .review-card-avatar-container {
    //padding: 16px;
    //border: 1px solid white;
    //background: black;
    //border-radius: 50%;
    //position: absolute;
    //top: -36px;
    svg {
      font-size: 36px;
      color: white;
    }
  }

  .review-card-text-container {
    color: white;
    text-align: center;
    padding-top: 16px;

    &__text {
      padding-bottom: 16px;
      font-weight: 500;
    }

    &__name {
      text-align: end;
      font-weight: bold;
    }
  }

  .review-stars-container {
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
    width: 100%;

    &__title {
      color: white;
      padding-right: 5px;
    }

    &__review-amount {
      color: white;
      padding-left: 6px;
    }

    .review-stars-bolt-container {
      svg {
        color: $primaryColor;
        //color: transparent;
        //stroke: white;
        //stroke-width: 10px;
      }
    }
  }
}
</style>