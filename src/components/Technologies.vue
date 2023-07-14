<script setup lang="ts">
import image from "../assets/images/whoIAm/secondView/crayon-studying-books-and-getting-ideas.png";
import GlobalTags from "./GlobalTags.vue";

</script>

<template>
    <div class="container">
        <div class="content">

            <div class="left">
                <img :src="image" alt="" />
            </div>

            <div class="right">
                <GlobalTags />
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.container {
    display: flex;
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
    width: 55%;
}

.right {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 50%;
}

@media (max-width: 1000px) {

    .content {
        display: flex;
        flex-direction: column;
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

@media (max-width: 1000px) {

    .container {
        height: 420px;
        justify-content: center;
        align-items: center;
    }
    .left {
        display: none;
    }

    .right {
        width: 100%;
    }
}

@media (max-width: 550px) {
    .container {
        transform: scale(0.8);
    }
}

</style>
