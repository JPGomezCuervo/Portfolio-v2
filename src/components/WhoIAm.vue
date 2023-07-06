<script setup lang="ts">
import image from "../assets/images/whoIAm/firstView/crayon-online-conversation.png";
import { toRefs } from "vue";
import { selectLanguages } from "../store";

const { whoIAm }= toRefs(selectLanguages());

</script>

<template>
    <div class="container">
        <h2 class="subtitle"> {{ whoIAm.title }}</h2>
        <div class="content">
            <div class="image-frame">
                <img :src="image" alt=""/>
            </div>
            <p> {{ whoIAm.description }}</p>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import "../style.scss";

.container {
    background-color: white;
    width: 100%
}

.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4%;

}

.image-frame img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.image-frame {
    height: clamp(20rem, 38vh, 40rem);
    width: clamp(20rem, 38vh, 40rem);   
    margin-bottom: 2%;
}

p {
    font-family: "Montserrat-Medium";
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    width: 28rem;
    line-height: clamp(1.8rem, 2.5vw, 2.5rem);
    margin: 0;
}

@media (max-width: 1000px) {

    .content {
        display: flex;
        flex-direction: column;
    }
    p {
        text-align: center;
        margin-top: clamp(1rem, 1vh, 2rem);
        margin-bottom: 5%;
        font-size: clamp(1rem, 1rem + 1vw, 1.6rem);
        line-height: clamp(1.5rem, 3vw, 2.5rem);
        // width: 20rem;
        // width: clamp(15rem, 75vw, 35rem);
        width: 100%;
    }

    .image-frame {
        height: clamp(6rem, 18vh, 40rem);
        width: clamp(6rem, 18vh, 40rem);   
    }
    .image-frame img {
        border-radius: 200%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    }

    .subtitle {
        text-align: center;
    }
}



</style>
