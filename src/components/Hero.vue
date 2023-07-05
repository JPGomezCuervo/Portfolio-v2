<script setup lang="ts">
import { toRefs } from "vue";
import photo from "../assets/images/hero/photograph.jpg";
import store from "../store";

const {  languages } = store.value;
const { hero } = toRefs(languages);

</script>

<template>
    <section class="background">

        <div class="container">
            <div class="left-container">
                <h1>{{ hero.title }}</h1>
                <h3>{{ hero.subtitle }}</h3>
            </div>
    
            <div class="right-container">
                <img :src="photo" alt="" id="photo"/>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@import "../style.scss";

.background {
    display: flex;
    flex-wrap: wrap-reverse;
    height: fit-content;
    padding-top: clamp(8rem, 18vh + 1rem, 30rem);
    padding-bottom: clamp(2rem,5vh + 1rem, 30rem);
    padding-left: 2%;
    padding-right: 2%;
    width: 96%;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    width: clamp(30rem, 90%, 80rem);
    gap: 2%;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center;
}

.left-container {
    display: flex;
    flex-direction: column;
    width: clamp(350px, 20vw, 400px);
    align-items: center;
    justify-self: left;
    // margin-right: 0%;
}
.left-container h1 {
    font-size: clamp(2rem, 2.3rem + 4vw, 8rem);
    width: fit-content;
    margin-top: 0rem;
    margin-bottom: clamp(1rem, 1rem + 1vw, 3rem);
    line-height: 110%;
    text-align: left;
    color: white; 
}

.left-container h3 {
    font-family: "Montserrat-semiBold";
    font-size: 2rem;
    font-weight: 200;
    width: 110%;
    text-align: start;
    color: white;
    margin: 0;
}


.right-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#photo {
    // height: 24rem;
    height: clamp(14rem, 2rem + 35vw, 22rem);
    border-radius: 50rem;
    margin-bottom: 2%;
}




@media (max-width: 1000px){

    .container {
        gap: 0;
    }
    .left-container h1 {
        text-align: center;
    }

    .left-container h3 {
        text-align: center;
        width: 90%;
    }

    .right-container {
        margin-left: 0rem;
    }
}

@media  (max-width: 575px) {

    .left-container h3 {
        font-size: 1.3rem;
    }
    
}


</style>