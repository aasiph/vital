<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { setLucideProps } from '@lucide/vue';
import { CircleQuestionMark } from '@lucide/vue';
import { computed, ref, watch } from 'vue';
import { useAppearance } from '@/composables/useAppearance.js';
import AppFooter from '@/layouts/partials/AppFooter.vue';
import type { ConfirmContainerSlotProps } from '@/types';
import AppHeader from './partials/AppHeader.vue';
import AppSidebar from './partials/AppSidebar.vue';

// This safely registers defaults for all nested child components
setLucideProps({
    size: 16,
});

const { layoutConfig, layoutState, isSidebarActive } = useAppearance();
const outsideClickListener = ref();

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const page = usePage();

const containerClass = computed(() => {
    return {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
    };
});

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event: MouseEvent) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive = false;
                layoutState.staticMenuMobileActive = false;
                layoutState.menuHoverActive = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event: MouseEvent) {
    const sidebarEl = document.querySelector('.layout-sidebar')!;
    const topbarEl = document.querySelector('#toggleMenuButton')!;

    const node = event.target as HTMLElement;

    return !(
        sidebarEl.isSameNode(node) ||
        sidebarEl.contains(node) ||
        topbarEl.isSameNode(node) ||
        topbarEl.contains(node)
    );
}
</script>
<template>
    <div class="layout-wrapper min-h-dvh bg-surface-100 dark:bg-surface-950" :class="containerClass">
        <AppHeader />
        <AppSidebar :key="page.url" />
        <div
            class="layout-main-container flex flex-col justify-between min-h-dvh pt-[4rem] transition-all duration-200 ease-in-out">
            <main class="layout-main flex-auto pb-[2rem]">
                <slot />
            </main>
            <div class="layout-mask animate-fadein"></div>
            <Toast />
            <Toast group="runx">
                <template #container="{ message, closeCallback }">
                    <div class="flex flex-col p-2 bg-primary-200 text-primary-950 rounded-lg border border-primary-400">
                        <div class="font-bold text-lg mb-2">{{ message.summary }}</div>
                        <p>{{ message.detail }}</p>
                        <div class="flex gap-2 mt-4">
                            <Button label="Dismiss" size="small" @click="closeCallback" />
                        </div>
                    </div>
                </template>
            </Toast>
            <DynamicDialog />
            <ConfirmDialog group="headless" class="z-9999 max-w-[90%]">
                <template #container="{ message, acceptCallback, rejectCallback }: ConfirmContainerSlotProps">
                    <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md">
                        <div
                            class="rounded-full bg-primary-500 text-surface-0 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[4rem]">
                            <CircleQuestionMark :size="40" />
                        </div>
                        <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
                        <p class="mb-0">{{ message.message }}</p>
                        <div class="flex items-center gap-2 mt-4">
                            <Button label="Yes" @click="acceptCallback"></Button>
                            <Button label="No" outlined @click="rejectCallback"></Button>
                        </div>
                    </div>
                </template>
            </ConfirmDialog>
            <AppFooter />
        </div>
    </div>
</template>
