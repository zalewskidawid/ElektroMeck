<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav>
      <div class="branding">
        <img :src="require('@/assets/images/Logo.png')" alt="logo" class="header-logo">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><button @click="scrollToSection('homepage')">Strona główna</button></li>
        <li><button @click="scrollToSection('aboutme')">O mnie</button></li>
        <li><button>Realizacje</button></li>
        <li><button>Kontakt</button></li>
      </ul>
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'bars']" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}"></font-awesome-icon>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><button>Strona główna</button></li>
          <li><button>O mnie</button></li>
          <li><button>Realizacje</button></li>
          <li><button>Kontakt</button></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: 'TheNavigation',
  components: {FontAwesomeIcon},
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    scrollToSection(sectionId) {
      const scrollToElement = document.getElementById(sectionId);
      scrollToElement.scrollIntoView({behavior: 'smooth'})
    },
  }
};

</script>

<style lang="scss" scoped>
@import "./src/assets/styles/style";
.header-logo {
  max-width: 150px;
}
header {
  background-color: rgba(white, 1);
  z-index: 99;
  width: 100%;
  border-bottom: 2px solid $primaryColor;
  padding: 16px 32px;
  position: fixed;
  transition: .5s ease all;
  color: black;
  @media(max-width: 768px) {
    padding: 16px 16px;
  }
}
nav {
  display: flex;
  flex-direction: row;
  transition: .5s ease all;
  width: 100%;
  position: relative;

  ul{
    font-weight: 500;
    color: black;
    list-style: none;
    text-decoration: none;
  }
  li {
    margin-left: 16px;
    button {
      font-size: 14px;
      background: transparent;
      padding-bottom: 4px;
      border: 0;
      border-bottom: 1px solid transparent;
      transition: .5s ease all;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      &:hover {
        color: $primaryColor;
        border-color: $primaryColor;
      }
    }
    .branding {
      display: flex;
      align-items: center;
      img {
        transition: .5s ease all;
      }
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .icon {
    display: flex;
    position: absolute;
    top: 0;
    align-items: center;
    right: 0;
    height: 100%;
    svg {
      color: black;
      cursor: pointer;
      font-size: 24px;
      transition: .8s ease all;
    }
  }
  .icon-active {
    transform: rotate(180deg);
  }
  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    padding: 32px 16px;
    li {
      margin-left: 0;
      button {
        color: black;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid transparent;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 600;
        &:hover {
          border-color: $primaryColor;
          color: $primaryColor
        }
      }
    }
  }
  .mobile-nav-enter-active,.mobile-nav-leave-active {
    transition: 1s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to,.mobile-nav-leave-from {
    transform: translateX(0);
  }
}
.scrolled-nav {
  background-color: rgba(white, 0.9);
  box-shadow:0 4px 6px -1px rgba(255,255,255, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  nav {
    padding: 8px 0;
  }
}
</style>