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
    <nav class="navbar">
        <div class="logo">
            <p>https://Juan Gómez</p>
        </div>
        <ul class="options-container">

            <li>
                <a href=""> {{ navBar.whoIAm }} </a>
            </li>

            <li>
                <a href="">{{ navBar.projects }}</a>
            </li>

            <li>
                <a href="">{{ navBar.contactMe }}</a>
            </li>

        </ul>
        <button class= "principal-button-shape" @click="toggleLanguage">{{ languageName }}</button>
        <div class="links-container">
            <a :href="url.github" target="_blank" rel="noreferrer">
                <img :src="githubIcon" alt="" />
            </a>
            <a :href="url.linkedin" target="_blank" rel="noreferrer">
                <img :src="linkedinIcon" alt="" />
            </a>
            <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                <img :src="gmailIcon" alt="" />
            </a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "./../../style.scss";

.navbar {
    background-color: white;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 96%;
    align-items: center;
    min-height: 12vh;
    padding: 0 2% 0 2%;
    box-shadow: 0 .4rem 0.4rem rgba(99, 99, 99, 0.6);
}
.navbar li, a {
  list-style: none;
  text-decoration: none;
  color: inherit;
  font-family: "Montserrat-Bold";
  font-size: 1rem;
}

.logo {
    display: flex;
    align-items: center;
    background-color: black;
    cursor: pointer;
    min-width: fit-content;
    min-height: fit-content;
    height: 40px;
    padding: 0 10px 0 10px;
    margin-right: clamp(20px, 2vw, 100px);
}

.logo p {
    color: white;
    font-family: "Montserrat-ExtraBold";
    font-size: 1.3rem;
    white-space: nowrap;
}

.options-container {
    display: flex;
    gap: clamp( 30px, 2vw, 100px);
    text-align: center;
    margin-right: auto;
}

.links-container {
    display: flex;
    gap: .5vw;
    margin-left: clamp(25px, 2vw, 100px)
}

.links-container img {
    height: 48px;
}

</style>
