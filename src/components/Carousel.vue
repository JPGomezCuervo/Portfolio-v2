<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
import WhoIAm from "./WhoIAm.vue";
import Technologies from "./Technologies.vue";
import { selectLanguages } from "../store";

const { technologies } = selectLanguages();
</script>

<template>
    <section class="carousel" id="carousel">

        <div class="title">
            <h2 class="subtitle"> {{ technologies.title }}</h2>
        </div>

        <div class="display">
            <!-- <WhoIAm/> -->
            <Technologies/>
        </div>

        <div class="navigation">

            <img :src="arrow" class="left-arrow arrow" />
            <div class="romboids"></div>
            <div class="romboids"></div>
            <div class="romboids"></div>
            <img :src="arrow" class="right-arrow arrow" />

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.carousel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 60px;
}

.title {
    display: flex;
    width: 100%;
    grid-column: 1 / 3;
    margin-top: 2%;
}

.title h2 {
    margin: auto 0;
}

.display {
    width: 100%;
    grid-column: 1 / 3;
}

.navigation {
    width: 100%;
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1%;
    margin-bottom: clamp(1rem, 2vh, 2rem);

}

.romboids {
    width: .6rem;
    height: .6rem;
    background-color: transparent;
    transform: rotate(45deg);
    margin-left: .5%;
    margin-right: .5%;
    border: 2px solid black;
    cursor: pointer;
}

.arrow {
    height: 2rem;
    cursor: pointer;
}

.left-arrow {
    transform: rotate(-180deg);
}
</style>