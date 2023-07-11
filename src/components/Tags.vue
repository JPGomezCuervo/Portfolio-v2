<script setup lang="ts">
import { ProjectsName } from '../store/index.types';
const props = defineProps<{
    tags?: string[];
    style:ProjectsName;
}>();

const type = (props.style === "back") ? "back" : "front";

</script>

<template>
    <div v-for="tag in props.tags" :class="type">
        <span>{{ tag }}</span>

    </div>

</template>

<style>

    .front {
        display: flex;
        flex-wrap: wrap;
    }

    .front div {
        background-color: #6F4AE7;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: .3rem;

    }

    .front span {
        font-family: "Montserrat-Medium";
        color: white;
    }

    .back {
        display: flex;
        flex-wrap: wrap;
    }
    .back div {
        background-color: #FD6439;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: .3rem;

    }


    .back span {
        font-family: "Montserrat-Medium";
        color: white;
    }
</style>