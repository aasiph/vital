<template>
    <footer class="flex justify-center gap-2 py-1 text-sm text-gray-400">
        <span>Copyrights - {{ new Date().getFullYear() }}</span>
        <span class="text-primary">{{ usePage().props.app_name }}</span>
    </footer>
</template>
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
</script>
