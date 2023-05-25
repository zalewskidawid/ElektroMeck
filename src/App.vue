
<template>
  <div class="#app">
    <Navigation></Navigation>
    <HomePage></HomePage>
    <AboutMe></AboutMe>
    <RealizationsPage></RealizationsPage>
    <RevievsPage></RevievsPage>
    <ConactPage></ConactPage>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup>
import Navigation from "@/layouts/TheNavigation.vue";
import HomePage from "@/pages/HomePage.vue";
import AboutMe from "@/pages/AboutMe.vue";
import TheFooter from "@/layouts/TheFooter";
import RevievsPage from "@/pages/RevievsPage";
import ConactPage from "@/pages/ConactPage";
import RealizationsPage from "@/pages/RealizationsPage";
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
  overflow-x: hidden;
}
</style>
