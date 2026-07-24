<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { useWindowScroll } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { isDev } from '@/helpers';
import Logo from '@/icons/Logo.vue';
import DarkmodeSwitch from '@/layouts/partials/DarkmodeSwitch.vue';
import ThemeSwitcher from '@/layouts/partials/ThemeSwitcher.vue';
import { home } from "@/routes";
import { about, services } from '@/routes/pages';
import DropdownUser from './DropdownUser.vue';

const { y } = useWindowScroll();

const app_name = ref(usePage().props.app_name);
const { isCurrentUrl } = useCurrentUrl();

const get_header_class = computed(() => {
    return y.value > 25
        ? '!h-[4rem] bg-surface-50/70 shadow-sm backdrop-blur-sm dark:bg-surface-900/70 dark:shadow-surface-800'
        : '';
});

const navlinks = computed(() => {
    return [
        { title: 'Home', href: '/', isActive: isCurrentUrl(home().url) },
        { title: 'Services', href: '/#services', isActive: isCurrentUrl(services().url) },
        { title: 'Technology', href: '/#technology', isActive: false },
        { title: 'About', href: '/pages/about', isActive: isCurrentUrl(about().url) },
    ];
});
</script>

<template>
    <header
        class="fixed top-0 right-0 left-0 z-99 flex h-[7rem] w-full transition-all duration-200 ease-in-out"
        :class="get_header_class">
        <nav class="container mx-auto flex items-center justify-between px-4 py-4">
            <div class="flex items-center gap-2">
                <Link :href="home().url" class="inline-flex">
                    <Logo class="h-8 w-8 fill-primary-600 dark:fill-primary-400" />
                    <span class="ml-2 text-2xl text-primary-600 dark:text-primary-400">
                        {{ app_name }}
                    </span>
                </Link>
            </div>
            <div class="flex grow items-center justify-center">
                <div class="hidden sm:ml-6 sm:flex">
                    <ul
                        class="guest-nav flex items-center space-x-4 text-lg font-semibold text-primary-600 uppercase lg:space-x-8 dark:text-primary-400">
                        <li v-for="link in navlinks" :key="link.href" class="hover-animation" :class="{ 'active-nav': link.isActive }">
                            <span v-if="link.isActive" class="cursor-pointer">{{ link.title }}</span>
                            <a v-else :href="link.href">{{ link.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex items-center gap-1">
                <DarkmodeSwitch icon-mode v-if="isDev()" />
                <ThemeSwitcher :enable-menu-mode-switch="false" />
                <DropdownUser />
            </div>
        </nav>
    </header>
</template>
