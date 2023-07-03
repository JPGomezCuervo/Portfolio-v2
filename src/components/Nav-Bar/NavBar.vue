<script setup lang="ts">
import { computed, toRefs } from "vue";
import store from "../../store/index.ts";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import url from "../../helpers/constants.json";

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
    <div class="links-container">
                    <a :href="url.github" target="_blank" rel="noreferrer">
                        <img :src="githubIcon" alt=""/>
                    </a>
                    <a :href="url.linkedin" target="_blank" rel="noreferrer">
                        <img :src="linkedinIcon" alt=""/>
                    </a>
                    <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                        <img :src="gmailIcon" alt=""/>
                    </a>
                </div>
    <button @click="toggleLanguage">{{ languageName }}</button>
  </nav>
</template>

<style lang="scss" scoped>
@import "./../../style.scss";
</style>
