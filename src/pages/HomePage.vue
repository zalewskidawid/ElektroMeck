<template>
  <section class="homepage-wrapper" id="homepage"
           :style="{ backgroundImage: 'url(' + require('@/assets/images/home-background.jpeg') + ')' }">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div class="homepage-container">
        <p class="homepage-typewritter-text">ELEKTRO<img :src="require('@/assets/images/justIconLogo.png')"><span class="yellow">MECK</span> to <span class="typed-text">{{typeValue}}</span>
        <span class="cursor" :class="{'typing':typeStatus }">&nbsp;</span></p>
        <h1 class="homepage-subtitle">Jakość to <span>podstawa</span></h1>
        <div class="scroll-to-next-sections-container">
          <font-awesome-icon @click="scrollToSection('aboutme')" :icon="['fas', 'arrow-down']" class="fa-beat"/>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import gsap from 'gsap';
import { scrollIntoView } from "seamless-scroll-polyfill";
export default {
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['instalacje elektryczne', 'instalacje przemysłowe', 'monitoring', 'alarmy', 'instalacje mieszkaniowe', 'usuwanie awarii'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    scrollToSection(sectionId) {
      scrollIntoView(document.getElementById(sectionId), {behavior: 'smooth'});
    },
    beforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-200px)';
    },
    enter(el) {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1
      })
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  }
</script>

<style scoped lang="scss">
@import "./src/assets/styles/style";

.homepage-wrapper {
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-x: center;
  z-index: 1;
  @media(max-width: 768px) {
    //background-image: url("@/assets/images/home-mobile.jpg") !important;
    max-height: 650px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: -1;
  }

  .homepage-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding-left: 32px;
    padding-right: 32px;
    position: relative;
    @media(max-width: 768px) {
      padding-left: 16px;
      max-height: 650px;
    }
  img {
    width: 50px;
    margin-bottom: -12px;
    @media(max-width: 768px) {
      width: 25px;
    }
  }
    h1 {
      color: white;
      font-size: 48px;
      padding-bottom: 16px;
      margin-top: 128px;
      span {
        color: $primaryColor;
        text-decoration: underline;
        text-underline-offset: 18px;
      }
      @media(max-width: 768px) {
        font-size: 24px;
        span {
          text-underline-offset: 8px;
        }
      }
    }

    .scroll-to-next-sections-container {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);

      svg {
        font-size: 36px;
        color: white;
        transition: .5s ease all;

        &:hover {
          color: $primaryColor;
          cursor: pointer;
        }
      }
    }
    .homepage-typewritter-text {
      font-size: 56px;
      font-weight: bold;
      color: white;
      padding-bottom: 24px;
      position: absolute;
      top: 39%;
      padding-right: 16px;
      padding-left: 16px;
      @media(min-width: 769px) {
        top: 35%;
        padding-right: 32px;
        padding-left: 32px;
      }
      .yellow {
        color: $primaryColor;
      }
      .typed-text {
        color: $primaryColor;
      }
      .cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background: white;
        animation: cursorBlink 1s infinite;
      }
      .typing {
        animation: none;
      }
      @media(max-width: 768px) {
        font-size: 26px;
      }
    }
  }
}

@keyframes cursorBlink {
  49% {background-color: white;}
  50% {background-color: transparent;}
  99% {background-color: transparent;}
}
</style>