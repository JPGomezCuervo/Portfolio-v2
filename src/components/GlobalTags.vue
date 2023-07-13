<script setup lang="ts">
import tags from "../helpers/constants.json";

const backTags = tags.tags.backEnd;
const frontTags = tags.tags.frontEnd;

</script>

<template>
    <ul class="grid">
        <li v-for="(tag, index) in frontTags" :key="index" class="front">{{ tag }}</li>
    <!-- </ul>

    <ul class="back"> -->
        <li v-for="(tag, index) in backTags" :key="index" class="back">{{ tag }}</li>
    </ul>
</template>

<style scoped>

ul {
    margin: 0;
    padding: 0;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    gap: 20%;    
    font-family: "Montserrat-Medium";
    font-size: 1.5rem;
    color: white;
    text-align: center;
}

.front {
    background-color: #FD6439;
}
.back {
    background-color: #6F4AE7;
}

</style>

