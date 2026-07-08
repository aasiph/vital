<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
    error: Object,
});
onMounted(() => {
    // Do something with the error?
    console.error(props.error);
});
</script>
<template>
    <div class="flex w-full flex-col items-center justify-center">
        <Card class="max-w-[500px]">
            <template #title>We tried to load the component but something went wrong!</template>
            <template #content>
                <Message severity="error">Error: {{ props.error?.message }}</Message>
                <p class="text-surface-500 mt-5">
                    Please retry again. Make sure you use the navigation menu to load any ui component.
                </p>
            </template>
        </Card>
    </div>
</template>
