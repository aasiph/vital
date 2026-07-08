<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

const currentroute = route().current();
</script>
<template>
    <Head title="Page" />
    <div class="flex h-full w-full items-center justify-center">
        <h2 class="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-400">
            Current route is {{ currentroute }}
        </h2>
    </div>
</template>
