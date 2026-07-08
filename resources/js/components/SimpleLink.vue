<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    url: {
        type: String,
    },
});
</script>
<template>
    <Link
        :href="props.url"
        class="text-primary-700 dark:text-primary-200 hover:text-primary rounded-md text-xs underline">
        <slot />
    </Link>
</template>
