<script setup lang="ts">
import { toRefs } from "vue";
import photo from "../assets/images/hero/photograph.jpg";
import { selectLanguages } from "../store";


const { hero } = toRefs(selectLanguages());


</script>

<template>
    <section class="background">
        <div class="split">

            <div class="grid-container">
                <div class="left-container">
                    <h1>{{ hero.title }}</h1>
                    <h3>{{ hero.subtitle }}</h3>
                </div>

                <div class="right-container">
                    <img :src="photo" alt="" id="photo" />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.split {
    display: block;
    padding: 90px 0;
    width: 100%;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 60px;
    gap: 10px;
}

.left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: white;
}


.left-container h1 {
    text-align: left;
    font-size: clamp(2rem, 2rem + 4vw, 8rem);
    width: 20%;
    margin: 0;
}

.left-container h3 {
    font-family: "Montserrat-semiBold";
    font-size: clamp(1rem, 1rem + 2vw, 3rem);
    // width: clamp()
    width: 30rem;
}

.right-container {
    width: 100%;
}

#photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    transform: scale(.85);
}

@media (max-width: 1000px) {

    .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding: 0;
        margin: 0;
        padding: 0 20px;
    }

    .left-container {
        align-items: center;
        grid-row: 2;
    }

    .left-container h1,
    h3 {
        width: fit-content;
        text-align: center;
    }

    .left-container h3 {
        width: fit-content;
    }
    .right-container {
        display: flex;
        justify-content: center;
    }
    #photo {
        // max-width: 200px;
        // width: 500px;
        width: clamp(200px, 300px + 20vw, 500px);
    }
}
</style>