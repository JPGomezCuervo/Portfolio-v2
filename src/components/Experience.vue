<script setup lang="ts">
import { selectLanguages } from "../store";
import image from "../assets/images/whoIAm/thirdView/crayon-page-under-construction-1.png";
import { computed, watchEffect, ref, onUnmounted } from "vue";

const { experience } = selectLanguages();
const highlightedWords = ["Henry's", "(+800", "hours).", "historian"];

const separateByWord = computed(() => {
    const words = experience.value.description.split(" ");
    return words;
});

const compose = computed(() => {
    let result: string[] = [];
    separateByWord.value.forEach((word) => {
        if (highlightedWords.includes(word)) {
            return result.push(`<mark class="highlighted">${word}</mark>`);
        } else {
            return result.push(`<span>${word}</span>`);
        }
    });
    return result;
});

const windowWidth = ref(window.innerWidth);

const mobile = computed(() => windowWidth.value <= 600); 

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

watchEffect(() => {

    window.addEventListener("resize", handleResize);

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    })
})

</script>

<template>
    <div class="container">
        <div class="content">

            <div class="left">
                <img :src="image" alt="" />
            </div>

            <div class="right">
                <p v-html="compose.join(' ')" v-if="mobile"></p>
                <p v-else> {{ experience.description }}</p>
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
    width: 65%;
}

.right {
    display: flex;
    width: 50%;
}

.right p {
    font-family: "Montserrat-Medium";
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    line-height: clamp(1.8rem, 2.5vw, 2.5rem);
    margin: auto 0;
    height: fit-content;
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

    .left {
        position: relative;
        height: 60%;
        width: 100%;
        top: -5%;
    }

    .left img {
        height: 310px;
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
        font-size: clamp(1.2rem, 1rem + 3vw, 1.4rem);
        margin: 0;
    }
}

@media (max-width: 600px) {
    

    .left {
        display: none;
    }

    .right {
        height: 100%;
    }

    .right p {
        // text-align: justify;
        padding: 0 25px;
        height: fit-content;
        font-size: 1.5rem;
        line-height: 2rem;
    }

}

@media (max-width: 360px) {
    .right p {
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
}

</style>