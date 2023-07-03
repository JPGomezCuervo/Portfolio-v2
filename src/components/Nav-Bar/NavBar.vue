<script setup lang="ts">
import { computed, toRefs } from "vue";
import store from "../../store/index.ts";

const { activeLanguage, languages, toggleLanguage } = store.value;

const { navBar } = toRefs(languages);

const languageName = computed(() => {
  return activeLanguage === "en" ? "EN/ES" : "ES/EN";
});

</script>

<template>
  <nav class="header">
    <div class="logo">
      <p>https://Juan Gómez</p>
    </div>
    <ul class="options-container">
      <li>{{ navBar.whoIAm}}</li>
      <li>{{ navBar.projects }}</li>
      <li>{{ navBar.contactMe }}</li>
    </ul>
    <button @click="toggleLanguage">{{ languageName }}</button>
  </nav>
</template>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
