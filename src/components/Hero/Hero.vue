<script setup lang="ts">
import { toRefs } from "vue";
import photo from "../../assets/images/hero/photograph.jpg";
import store from "../../store";

const {  languages } = store.value;
const { hero } = toRefs(languages);

</script>

<template>
    <section class="background">

        <div class="left-container">
            <h1>{{ hero.title }}</h1>
            <h3>{{ hero.subtitle }}</h3>
        </div>

        <img :src="photo" alt="" id="photo"/>

    </section>

</template>

<style lang="scss" scoped>
@import "../../style.scss";

.background {
    display: flex;
    flex-wrap: wrap-reverse;
    padding-top: 8.5%;
    padding-left: 2%;
    padding-right: 2%;
    height: 80vh;
    width: 96%;
    justify-content: center;
    align-items: center;
}

.left-container {
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
}
.left-container h1 {
    font-size: 5.5rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: left;
    color: white; 
}

.left-container h3 {
    font-family: "Montserrat-semiBold";
    font-size: 2.2rem;
    font-weight: 200;
    width: 70%;
    text-align: left;
    color: white;
}

#photo {
    height: 24rem;
    border-radius: 50rem;
}



</style>