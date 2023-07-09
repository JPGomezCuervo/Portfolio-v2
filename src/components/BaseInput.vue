<script setup lang="ts">
import { BaseInput } from '../store/index.types';

const props = defineProps<BaseInput>();


</script>

<template>
    <div v-bind:class="props.class">
        <label v-bind:for="props.name">{{ props.label }}</label>

        <input 
            v-bind="$attrs" 
            :placeholder="props.placeholder" 
            :type="props.type" 
            :name="props.name"
            :value="props.modelValue" 
            :id="props.name"
            :aria-describedby=" error ? `${props.name}-error` : undefined"
            aria-live="assertive"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />

        <p v-if="props.error" :id="`${props.name}-error`">
            {{ props.error }}
        </p>
    </div>
</template>