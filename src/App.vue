<script setup lang="ts">
import NavBar from "./components/TheNavBar.vue";
import Footer from "./components/TheFooter.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <NavBar/>
  <RouterView/>
  <Footer/>
</template>

<style lang="scss" scoped>
@import "./style.scss";



</style>
