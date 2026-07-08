<script setup lang="ts">
import { setLucideProps } from '@lucide/vue';
import AppFooter from '@/layouts/partials/AppFooter.vue';
import GuestHeader from '@/layouts/partials/GuestHeader.vue';
// This safely registers defaults for all nested child components
setLucideProps({
    size: 16,
});
</script>
<template>
    <div class="bg-surface-100 dark:bg-surface-950 flex min-h-dvh flex-col">
        <Toast />
        <GuestHeader />
        <main class="flex flex-1 items-center justify-center p-4 pt-[6rem] pb-[2rem]">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
