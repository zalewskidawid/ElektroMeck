<template>
  <Particles
      id="tsparticles"
      :options="options"
      :particlesInit="particlesInit"
  />
</template>


<script>
import {loadFull} from "tsparticles";

export default {
  data() {
    return {
      options: {
        fullScreen: {
          enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
          zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
        },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 100,
          },
          line_linked: {
            distance: 150,
            enable: true,
            opacity: 0.3,
            color: "#ffca09"
          },
          move: {
            enable: true,
          },
          size: {
            value: 0.4,
          },
          shape: {
            type: "square",
          },
        },
      }
    }
    },
  methods: {
      async particlesInit(engine) {
        await loadFull(engine);
      }
    }
  }
</script>
<style></style>