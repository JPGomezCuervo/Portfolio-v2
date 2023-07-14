<script setup lang="ts">
import image from "../assets/images/whoIAm/firstView/crayon-online-conversation.png";
import { selectLanguages } from "../store";

const { whoIAm } = selectLanguages();

</script>

<template>
    <div class="container">
        <div class="content">
            <div class="image-frame">
                <img :src="image" alt="" />
            </div>
            <div class="left">
                <p> {{ whoIAm.description }}</p>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";


.container {
    height: 420px;

}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
}

.image-frame {
    display: flex;
    justify-content: center;
    height: 90%;
    width: 100%;
}

.image-frame img {
    height: 100%;
    width: 90%;
    object-fit: contain;
}

.left p {
    font-family: "Montserrat-Medium";
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    width: 28rem;
    line-height: clamp(1.8rem, 2.5vw, 2.5rem);
    margin: 0;
}
</style>
