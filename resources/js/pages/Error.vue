<script setup lang="ts">
import { computed } from 'vue';
import Error400 from '@/assets/errors/400.svg';
import Error403 from '@/assets/errors/403.svg';
import Error404 from '@/assets/errors/404.svg';
import Error500 from '@/assets/errors/500.svg';
import ErrorCommon from '@/assets/errors/error.svg';
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';

defineOptions({ layout: '' as any });

const props = withDefaults(defineProps<{
    status?: number;
}>(), {
    status: 0,
});

interface ErrorConfig {
    title: string;
    description: string;
    gradient: string;
    text: string;
    button: string;
    image: string;
}

const themes = {
    blue: {
        gradient: 'from-blue-400',
        text: 'text-blue-400',
        button: 'bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500',
    },
    green: {
        gradient: 'from-green-400',
        text: 'text-green-400',
        button: 'bg-green-400 hover:bg-green-500 focus:bg-green-500 active:bg-green-500',
    },
    red: {
        gradient: 'from-red-400',
        text: 'text-red-400',
        button: 'bg-red-400 hover:bg-red-500 focus:bg-red-500 active:bg-red-500',
    },
    amber: {
        gradient: 'from-amber-400',
        text: 'text-amber-400',
        button: 'bg-amber-400 hover:bg-amber-500 focus:bg-amber-500 active:bg-amber-500',
    },
};

const defaultConfig: ErrorConfig = {
    title: 'Error',
    description: 'Whoops, something went wrong with the request.',
    ...themes.red,
    image: ErrorCommon,
};

const errorMap: Record<number, ErrorConfig> = {
    400: {
        title: 'Bad Request',
        description: '44Oops, server cannot understand the request sent by your browser or client.',
        ...themes.blue,
        image: Error400,
    },
    403: {
        title: 'Forbidden',
        description: 'Sorry, you are forbidden from accessing this page.',
        ...themes.green,
        image: Error403,
    },
    404: {
        title: 'Page Not Found',
        description: 'Sorry, the page you are looking for could not be found.',
        ...themes.red,
        image: Error404,
    },
    419: {
        title: 'Page Expired',
        description: 'Your session has expired, please try again.',
        ...themes.amber,
        image: ErrorCommon,
    },
    500: {
        title: 'Server Error',
        description: 'Whoops, something went wrong on our servers.',
        ...themes.amber,
        image: Error500,
    },
    503: {
        title: 'Service Unavailable',
        description: 'Sorry, we are doing some maintenance. Please check back soon.',
        ...themes.amber,
        image: ErrorCommon,
    },
};

const current = computed(() => errorMap[props.status] ?? defaultConfig);

const goback = () => {
    window.history.back();
};
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-100 dark:bg-surface-950 flex min-h-dvh flex-col items-center justify-center p-8">
        <div
            :class="current.gradient"
            class="bg-linear-to-b from-10% to-(--p-primary-contrast-color) to-30% rounded-[56px] p-[0.3rem]"
        >
            <div class="bg-surface-0 dark:bg-surface-900 flex w-full flex-col items-center gap-4 rounded-[53px] px-8 py-10 sm:px-20">
                <span v-if="props.status > 0" :class="current.text" class="text-3xl font-bold">
                    {{ props.status }}
                </span>
                <h1 class="text-surface-900 dark:text-surface-0 text-3xl font-bold lg:text-5xl">
                    {{ current.title }}
                </h1>
                <div class="text-surface-600 dark:text-surface-200 mb-4">
                    {{ current.description }}
                </div>
                <div class="flex w-full items-center">
                    <img :src="current.image" :alt="current.title" />
                </div>
                <button
                    :class="current.button"
                    class="rounded-md border border-transparent px-4 py-2 text-center text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg focus:shadow-none"
                    type="button"
                    @click="goback"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
</template>
