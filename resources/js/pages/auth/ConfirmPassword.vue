<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import Logo from '@/icons/Logo.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { confirm } from "@/routes/password";

defineOptions({
    layout: AuthLayout,
});

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(confirm().url, {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <Head title="Confirm Password" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 w-full rounded-lg border px-6 py-4 shadow-md md:max-w-md">
        <div class="mb-4 flex flex-col items-center">
            <Logo class="dark:fill-surface-100 h-10 w-auto" />
            <h2 class="text-primary mt-6 text-2xl/9 font-bold tracking-tight">Confirm Password</h2>
        </div>
        <div class="mb-4 text-xs">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form @submit.prevent="submit" class="mt-1 space-y-4">
            <div class="flex flex-col gap-1">
                <label class="label-class" for="password">Password</label>
                <InputText
                    id="password"
                    type="password"
                    v-model="form.password"
                    :class="form.errors.password ? '!border-red-300' : ''" />
                <FormError :message="form.errors.password" />
            </div>
            <div class="mt-4 flex justify-end">
                <Button
                    class="w-full"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    size="small"
                    type="submit">
                    Confirm
                </Button>
            </div>
        </form>
    </div>
</template>
