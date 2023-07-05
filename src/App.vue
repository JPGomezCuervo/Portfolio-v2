<script setup lang="ts">

import NavBar from './components/Nav-Bar/NavBar.vue';
import Hero from './components/Hero/Hero.vue';

</script>

<template>
  <NavBar/>
  <Hero/>
  <div class="lolis">

  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";

.lolis {
  height: 290vh;
  width: 100%;
  background-color: red;
}

</style>
