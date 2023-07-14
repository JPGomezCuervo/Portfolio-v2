<script setup lang="ts">
import { selectLanguages } from "../store";
import image from "../assets/images/whoIAm/thirdView/crayon-page-under-construction-1.png";

const { experience } = selectLanguages();


</script>

<template>
    <div class="container">
        <div class="content">

            <div class="left">
                <img :src="image" alt="" />
            </div>

            <div class="right">
                <p>{{ experience.description }}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.container {
    height: 420px;
}

.content {
    display: flex;
    align-content: center;
    justify-content: center;
}

.left {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 50%;
}

.left img {
    object-fit: scale-down;
    width: 65%;
}

.right {
    display: flex;
    width: 50%;
}

.right p {
    font-family: "Montserrat-Medium";
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    line-height: clamp(1.8rem, 2.5vw, 2.5rem);
    margin: auto 0;
    height: fit-content;
}
</style>