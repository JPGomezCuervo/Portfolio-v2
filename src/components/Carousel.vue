<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
</script>

<template>
    <section class="carousel" id="carousel">

    </section>
    <div class="navigation">

        <img :src="arrow" class="left-arrow arrow"/>
        <div class="romboids"></div>
        <div class="romboids"></div>
        <div class="romboids"></div>
        <img :src="arrow" class="right-arrow arrow"/>

    </div>

</template>

<style lang="scss" scoped>
@import "../style.scss";

.carousel {
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: pink;
}

.navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1%;
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