<script setup lang="ts">
import tags from "../helpers/constants.json";

const backTags = tags.tags.backEnd;
const frontTags = tags.tags.frontEnd;

</script>

<template>
    <ul class="grid">
        <li v-for="(tag, index) in frontTags" :key="index" class="front">{{ tag }}</li>
        <li v-for="(tag, index) in backTags" :key="index" class="back">{{ tag }}</li>
    </ul>
</template>

<style scoped>

ul {
    padding: 0;
    margin: 0;
}

li {
    cursor: auto;
    margin: 0;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: clamp(10px, 5vw, 60px);
    font-family: "Montserrat-Medium";
    font-size: 1.5rem;
    color: white;
    text-align: center;
    height: clamp(200px, 40vh, 260px);
    align-self: center;
}

.grid li {
    height: fit-content;
    padding: 5px 45px 5px 45px;
}

.front {
    background-color: #FD6439;
}
.back {
    background-color: #6F4AE7;
}

@media (max-width: 550px) {
    .grid li {
        padding: 5px 20px 5px 20px;
    }
}


</style>

