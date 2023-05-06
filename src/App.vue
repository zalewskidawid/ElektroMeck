
<template>
  <div class="#app">
    <Navigation></Navigation>
    <HomePage></HomePage>
    <AboutMe></AboutMe>
  </div>
</template>

<script setup>
import Navigation from "@/components/TheNavigation.vue";
import HomePage from "@/pages/HomePage.vue";
import AboutMe from "@/pages/AboutMe.vue";
</script>

<style lang="scss">
@import "./src/assets/styles/style";
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}
body {
  background-color: black;
}
</style>
