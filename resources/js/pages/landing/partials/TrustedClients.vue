<script setup lang="ts">
import {
    siFirefoxbrowser,
    siGithub,
    siInertia,
    siLaravel,
    siNpm,
    siOpera,
    siPrimevue,
    siSwiper,
    siTailwindcss,
    siVuedotjs,
    siVueuse,
} from 'simple-icons';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { onMounted, shallowRef } from 'vue';

// Define the array of icons as shallowRefs to optimize performance with dynamic components
const iconsList = shallowRef([
    { name: 'Github', component: siGithub, color: 'fill-amber-700' },
    { name: 'Firefox', component: siFirefoxbrowser, color: 'fill-amber-600' },
    { name: 'Opera', component: siOpera, color: 'fill-surface-800' },
    { name: 'Laravel', component: siLaravel, color: 'fill-amber-600' },
    { name: 'Vue.js', component: siVuedotjs, color: 'fill-amber-600' },
    { name: 'Inertia', component: siInertia, color: 'fill-amber-600' },
    { name: 'Primevue', component: siPrimevue, color: 'fill-amber-600' },
    { name: 'Tailwind', component: siTailwindcss, color: 'fill-amber-600' },
    { name: 'VueUse', component: siVueuse, color: 'fill-amber-600' },
    { name: 'Swiper', component: siSwiper, color: 'fill-amber-600' },
    { name: 'npm', component: siNpm, color: 'fill-amber-600' },
]);

onMounted(() => {
    const brandSwiper = new Swiper('.brandSwiper', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 50,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });
});
</script>
<style scoped>
.swiper.brandSwiper {
    mask-image: linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%);
}

.swiper-wrapper.marquee-swiper {
    transition-timing-function: linear;
}
</style>
<template>
    <div class="swiper brandSwiper mx-10! my-2 w-full">
        <div class="swiper-wrapper marquee-swiper">
            <div
                v-for="icon in iconsList"
                :key="icon.name"
                class="swiper-slide flex! max-w-max flex-col items-center gap-1">
                <div v-html="icon.component.svg" class="size-[100px] fill-surface-600"></div>
                <span class="text-muted uppercase">{{ icon.name }}</span>
            </div>
        </div>
    </div>
</template>
