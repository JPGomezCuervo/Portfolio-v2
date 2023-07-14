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
            <div class="right">
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

.right p {
    font-family: "Montserrat-Medium";
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    width: 28rem;
    line-height: clamp(1.8rem, 2.5vw, 2.5rem);
    margin: 0;
}

@media (max-width: 1000px) {

    .container {
        height: 420px;
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image-frame {
        height: 60%;
        width: 100%;
    }
    .image-frame img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .right {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .right p {
        font-family: "Montserrat-Medium";
        text-align: center;
        font-size: clamp(1.2rem, 1rem + 3vw, 1.6rem);
        margin: 0;
    }
}

@media (max-width: 500px) {

    .right p {
        font-size: 1.2rem;
    }
}
</style>
