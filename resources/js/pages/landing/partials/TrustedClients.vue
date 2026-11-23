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
    { name: 'Github', component: siGithub },
    { name: 'Firefox', component: siFirefoxbrowser },
    { name: 'Opera', component: siOpera },
    { name: 'Laravel', component: siLaravel },
    { name: 'Vue.js', component: siVuedotjs },
    { name: 'Inertia', component: siInertia },
    { name: 'Primevue', component: siPrimevue },
    { name: 'Tailwind', component: siTailwindcss },
    { name: 'VueUse', component: siVueuse },
    { name: 'Swiper', component: siSwiper },
    { name: 'npm', component: siNpm },
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
                class="group swiper-slide flex! max-w-max flex-col items-center gap-1">
                <div
                    v-html="icon.component.svg"
                    class="size-[100px] fill-surface-600 transition-colors duration-200 group-hover:fill-(--brand)"
                    :style="{ '--brand': `#${icon.component.hex}` }"></div>
                <span class="text-muted uppercase">{{ icon.name }}</span>
            </div>
        </div>
    </div>
</template>
