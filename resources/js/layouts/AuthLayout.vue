<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { setLucideProps } from '@lucide/vue';
import Logo from '@/icons/Logo.vue';
import AppFooter from '@/layouts/partials/AppFooter.vue';
import ThemeSwitcher from '@/layouts/partials/ThemeSwitcher.vue';
import { home } from '@/routes';

// This safely registers defaults for all nested child components
setLucideProps({
    size: 16,
});
</script>
<template>
    <div class="bg-surface-100 dark:bg-surface-950 flex min-h-dvh flex-col">
        <Toast />
        <header class="flex h-[4rem] w-full">
            <nav class="container mx-auto flex items-center justify-between px-4 py-4">
                <div class="flex items-center gap-2">
                    <Link :href="home().url" class="inline-flex">
                        <Logo class="fill-primary-600 dark:fill-primary-400 h-8 w-8" />
                        <span class="text-primary-600 dark:text-primary-400 ml-2 text-2xl">
                            {{ usePage().props.app_name }}
                        </span>
                    </Link>
                </div>
                <div class="flex grow items-center justify-center"></div>
                <div class="flex items-center gap-1">
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
        <main class="flex flex-1 items-center justify-center p-4 pb-[2rem]">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
