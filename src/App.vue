<script setup lang="ts">
import NavBar from "./components/TheNavBar.vue";
import Footer from "./components/TheFooter.vue";
import { RouterView } from "vue-router";
import { selectReferences } from "./store";


const handleClick = (name:string) => {

  switch (name) {
    case "form": 
      const form = selectReferences().form;
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "carousel":
      const carousel = selectReferences().carousel;
      if (carousel) {
        carousel.scrollIntoView({ behavior: "smooth" });
      }
      break;

    case "projects":
      const projects = selectReferences().projects;
      if (projects) {
        projects.scrollIntoView({ behavior: "smooth" });
      }
      break;
    
    default:
      return;
  }
  
};

</script>

<template>
  <NavBar @clicked="handleClick"/>
  <RouterView/>
  <Footer/>
</template>

<style lang="scss" scoped>
@import "./style.scss";



</style>
