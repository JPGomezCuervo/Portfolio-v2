<script setup lang="ts">
import { TextArea } from '../store/index.types';

const props = defineProps<TextArea>();

</script>

<template>
    <div :class="props.class">
        <label 
            v-bind:for="props.name">
            {{ props.label }}
        </label>

        <textarea 
            v-bind="$attrs"
            :name="props.name"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            >
            

        </textarea>

    </div>

</template>