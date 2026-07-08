<script setup lang="ts">
interface ServiceCardProp {
    image: string;
    title: string;
}

const props = defineProps<ServiceCardProp>();

const getImageSrc = (url: string) => {
    return new URL(url, import.meta.url).href;
};
</script>
<template>
    <Card
        class="landing-service-card"
        v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-500' }">
        <template #header>
            <img :alt="props.title" :src="getImageSrc(props.image)" class="dark:opacity-90" />
        </template>
        <template #title>{{ props.title }}</template>
        <template #content>
            <slot name="card-content"></slot>
        </template>
    </Card>
</template>
