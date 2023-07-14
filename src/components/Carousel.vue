<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
import WhoIAm from "./WhoIAm.vue";
import Technologies from "./Technologies.vue";
import Experience from "./Experience.vue";
import { selectLanguages } from "../store";
import { ref, watchEffect } from "vue";

const { technologies, whoIAm, experience  } = selectLanguages();

const slices = [{component: WhoIAm, title: whoIAm.value.title}, { component:Technologies, title: technologies.value.title}, {component: Experience, title: experience.value.title}];
const index = ref(0);
const component = ref( slices[index.value]);
const title = ref(component.value.title);

watchEffect(()=> {
    component.value = slices[index.value];
    title.value = component.value.title;
});

const handleForward = () => {
    console.log(index.value)
    if ( index.value + 1 > 2 ) return ;
    index.value = index.value + 1;
};

const handleBackward = () => {
    if ( index.value - 1 < 0 ) return ;
    index.value = index.value - 1;
};

</script>

<template>
    <section class="carousel" id="carousel">

        <div class="title">
            <h2 class="subtitle"> {{ title }}</h2>
        </div>

        <div class="display">
            <component :is="component.component"></component>

        </div>

        <div class="navigation">

            <img :src="arrow" class="left-arrow arrow" @click="handleBackward" />
            <div class="romboids"></div>
            <div class="romboids"></div>
            <div class="romboids"></div>
            <img :src="arrow" class="right-arrow arrow" @click="handleForward" />

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