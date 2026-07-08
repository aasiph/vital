<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Menu } from '@lucide/vue';
import { ref } from 'vue';
import { useAppearance } from '@/composables/useAppearance';
import Logo from '@/icons/Logo.vue';
import ThemeSwitcher from '@/layouts/partials/ThemeSwitcher.vue';
import { home } from '@/routes';
import DropdownUser from './DropdownUser.vue';
// import DarkmodeSwitch from "@/layouts/partials/DarkmodeSwitch.vue";

const { toggleMenu } = useAppearance();
const app_name = ref(usePage().props.app_name);
</script>

<template>
    <header
        class="bg-surface-50/70 dark:bg-surface-900/70 dark:shadow-surface-800 fixed top-0 right-0 left-0 z-99 flex h-[4rem] w-full shadow-sm backdrop-blur-sm transition-all duration-200 ease-in-out">
        <div class="flex flex-grow items-center justify-between px-4 py-4">
            <div class="flex items-center gap-2">
                <Button id="toggleMenuButton" @click="toggleMenu" variant="text">
                    <Menu />
                </Button>
                <Link :href="home().url" class="inline-flex">
                    <Logo class="dark:fill-surface-100 h-8 w-8" />
                    <span class="ml-2 text-2xl">{{ app_name }}</span>
                </Link>
            </div>
            <div class="grow"></div>
            <div class="flex items-center gap-1">
                <!--                <DarkmodeSwitch icon-mode />-->
                <ThemeSwitcher />
                <DropdownUser />
            </div>
        </div>
    </header>
</template>
