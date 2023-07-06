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
    // height: clamp(10rem, 30vh, 18rem);
    width: 30rem;
    margin-bottom: 2%;
}

p {
    font-family: "Montserrat-Medium";
    font-size: 1.6rem;
    width: 25rem;
    line-height: 2.5rem;
    margin: 0;
}

@media (max-width: 1000px) {
    p {
        text-align: center;
    }

    .image-frame img {
        border-radius: 200%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    }

    .subtitle {
        text-align: center;
    }
}



</style>
