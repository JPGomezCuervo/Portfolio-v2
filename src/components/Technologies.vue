<script setup lang="ts">
import image from "../assets/images/whoIAm/secondView/crayon-studying-books-and-getting-ideas.png";
import { selectLanguages } from "../store";
import GlobalTags from "./GlobalTags.vue";
const { technologies } = selectLanguages();


</script>

<template>
    <h2 class="subtitle"> {{ technologies.title }}</h2>
    <div class="container">
        <div class="content">
            <div class="image-frame">
                <img :src="image" alt="" />
            </div>
            <div class="tags">
                <GlobalTags />
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
}


.image-frame {
    width: 50%;
}

.image-frame img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.tags {
    display: flex;
    justify-content: center;
    align-content: center;
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
</style>
