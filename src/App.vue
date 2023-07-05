<script setup lang="ts">

import NavBar from './components/TheNavBar.vue';
import Home from './views/Home.vue';
</script>

<template>
  <NavBar/>
  <Home/>
  <div class="lolis">

  </div>

</template>

<style lang="scss" scoped>
@import "./style.scss";

.lolis {
  background-color: pink;
  width: 100%;
  height: 100vh;
}


</style>
