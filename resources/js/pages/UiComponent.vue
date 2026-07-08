<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { useUrlSearchParams } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';
import ComponentError from './ComponentError.vue';

const params = useUrlSearchParams('history');
const { uic } = params;

const asyncComponent = defineAsyncComponent({
    loader: () => import('../components/ui/' + `${uic}.vue`),
    errorComponent: ComponentError,
});
</script>
<template>
    <Head title="Page" />
    <div class="flex h-full w-full flex-col p-4">
        <component :is="asyncComponent"></component>
    </div>
</template>
