<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
import WhoIAm from "./WhoIAm.vue";
</script>

<template>
    <section class="carousel" id="carousel">

        <div class="display">
            <WhoIAm/>
        </div>

        <div class="navigation">
    
            <img :src="arrow" class="left-arrow arrow"/>
            <div class="romboids"></div>
            <div class="romboids"></div>
            <div class="romboids"></div>
            <img :src="arrow" class="right-arrow arrow"/>
    
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import "../style.scss";

.carousel {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    align-items: center;
    justify-content: center;
    
}

.display {
    width: clamp(30rem, 90%, 80rem);
}

.navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1%;
    margin-bottom: 2%;
}

.romboids {
    display: block;
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