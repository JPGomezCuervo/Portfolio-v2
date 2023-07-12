<script setup lang="ts">
const props = defineProps<{
    tags?: string[];
    kind: "back" | "front";
}>();

const type = (props.kind === "back") ? "back" : "front";


</script>

<template>
    <div>
        <span v-for="tag in props.tags" :class="`${type} tag-container`">{{ tag }}</span>
    </div>

</template>

<style>
    
    .tag-container {
        margin: 0 .3rem;
        padding: .3rem;

    }
    
    .front  {
        background-color: #6F4AE7;
        font-family: "Montserrat-Medium";
        color: white;
    }
    
    .back  {
        background-color: #FD6439;
        padding: 5px;
        font-family: "Montserrat-Medium";
        color: white;
    }
</style>