<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import Logo from '@/icons/Logo.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { update } from '@/routes/password';

defineOptions({
    layout: AuthLayout,
});

const props = defineProps<{
    email: string;
    token: string;
}>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(update().url, {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <Head title="Reset Password" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 w-full rounded-lg border px-6 py-4 shadow-md md:max-w-md">
        <div class="mb-4 flex flex-col items-center">
            <Logo class="dark:fill-surface-100 h-10 w-auto" />
            <h2 class="text-primary mt-6 text-2xl/9 font-bold tracking-tight">Reset Password</h2>
            <span class="text-sm text-gray-500">Enter your new password.</span>
        </div>
        <form @submit.prevent="submit" class="mt-1 space-y-4">
            <div class="flex flex-col gap-1">
                <label class="label-class" for="email">Email</label>
                <InputText
                    id="email"
                    type="email"
                    v-model="form.email"
                    :class="form.errors.email ? '!border-red-300' : ''" />
                <FormError :message="form.errors.email" />
            </div>
            <div class="flex flex-col gap-1">
                <label class="label-class" for="password">Password</label>
                <InputText
                    id="password"
                    type="password"
                    v-model="form.password"
                    :class="form.errors.password ? '!border-red-300' : ''" />
                <FormError :message="form.errors.password" />
            </div>
            <div class="flex flex-col gap-1">
                <label class="label-class" for="password_confirmation">Confirm Password</label>
                <InputText
                    id="password_confirmation"
                    type="password"
                    v-model="form.password_confirmation"
                    :class="form.errors.password_confirmation ? '!border-red-300' : ''" />
                <FormError :message="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-end">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Reset Password"
                    size="small"
                    type="submit" />
            </div>
        </form>
    </div>
</template>
