<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { useWindowScroll } from '@vueuse/core';
import Logo from '@/icons/Logo.vue';
import DropdownUser from '@/layouts/partials/DropdownUser.vue';
import ThemeSwitcher from '@/layouts/partials/ThemeSwitcher.vue';
import { home } from "@/routes";

const { y } = useWindowScroll();
</script>

<template>
    <header
        class="fixed top-0 right-0 left-0 z-99 flex h-[7rem] w-full transition-all duration-200 ease-in-out"
        :class="
            y > 25
                ? 'bg-surface-50/70 dark:bg-surface-900/70 dark:shadow-surface-800 !h-[4rem] shadow-sm backdrop-blur-sm'
                : ''
        ">
        <nav class="container mx-auto flex items-center justify-between px-4 py-4">
            <div class="flex items-center gap-2">
                <Link :href="home().url" class="inline-flex">
                    <Logo class="fill-primary-600 dark:fill-primary-400 h-8 w-8" />
                    <span class="text-primary-600 dark:text-primary-400 ml-2 text-2xl">
                        {{ usePage().props.app_name }}
                    </span>
                </Link>
            </div>
            <div class="flex grow items-center justify-center">
                <div class="hidden sm:ml-6 sm:flex">
                    <ul
                        class="landing-nav text-primary-600 dark:text-primary-400 flex items-center space-x-4 text-lg font-semibold uppercase lg:space-x-8">
                        <li class="hero active-nav"><a href="#hero">Home</a></li>
                        <li class="services"><a href="#services">Services</a></li>
                        <li class="technology"><a href="#technology">Technology</a></li>
                        <li class="about"><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex items-center gap-1">
                <ThemeSwitcher :enable-menu-mode-switch="false" />
                <DropdownUser />
            </div>
        </nav>
    </header>
</template>
