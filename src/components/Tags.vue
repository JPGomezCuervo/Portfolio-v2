<script setup lang="ts">
const props = defineProps<{
    tags?: string[];
    kind: "back" | "front";
}>();

const type = (props.kind === "back") ? "back" : "front";


</script>

<template>
    <div class="lolis">
        <span v-for="(tag, index) in props.tags" :key="index" :class="`${type} tag-container`">{{ tag }}</span>
    </div>

</template>

<style scoped>
    .lolis {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
    }
    .tag-container {
        margin: 0 .3rem;
        padding: .3rem;

    }
    
    .front  {
        background-color: #6F4AE7;
        font-family: "Montserrat-Medium";
        color: white;
        margin-bottom: 1%;
    }
    
    .back  {
        margin-bottom: 2%;
        background-color: #FD6439;
        padding: 5px;
        font-family: "Montserrat-Medium";
        color: white;
    }
</style>