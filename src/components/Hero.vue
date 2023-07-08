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
                            <!-- <img :src="photo" alt="" id="photo"/> -->
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
    grid-template-rows: 1fr;
    padding: 0 10%;
}

.left-container {
    height: 10rem;
    width: 100%;
    background-color: red;
    color: white;
}

.right-container {
    background-color: blue;
    height: 100%;
    width: 100%;
}
</style>