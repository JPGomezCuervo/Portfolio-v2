<script setup lang="ts">
import { TextArea } from '../store/index.types';

const props = defineProps<TextArea>();

</script>

<template>
    <div v-bind:class="props.class">
        <label 
            v-bind:for="props.name">
            {{ props.label }}
        </label>

        <textarea 
            v-bind="$attrs"
            :name="props.name"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            :id="props.name"
            :aria-describedby=" error ? `${props.name}-error` : undefined"
            aria-live="assertive"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            >
        </textarea>
        <p v-if="props.error" :id="`${props.name}-error`">
            {{ props.error }}
        </p>

    </div>

</template>