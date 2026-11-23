<script setup lang="ts">
import type { SimpleIcon } from 'simple-icons';

withDefaults(
    defineProps<{
        icon: SimpleIcon;
        size?: string;
        brand?: boolean;
    }>(),
    { size: '24px', brand: false }
);
</script>

<template>
    <span
        v-html="icon.svg"
        class="inline-block transition-colors duration-200"
        :class="brand ? 'fill-(--icon-brand)' : 'fill-current'"
        :style="{
            width: size,
            height: size,
            '--icon-brand': `#${icon.hex}`,
        }"></span>
</template>

<style scoped>
:deep(svg) {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
