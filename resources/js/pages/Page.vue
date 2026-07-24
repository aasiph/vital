<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
const { currentUrl } = useCurrentUrl();
</script>
<template>
    <Head title="Page" />
    <div class="flex h-full w-full items-center justify-center p-4">
        <h2 class="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-400">
            Current route is {{ currentUrl }}
        </h2>
    </div>
</template>
