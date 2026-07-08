<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import SimpleLink from '@/components/SimpleLink.vue';
import ForgotSvg from '@/icons/ForgotSvg.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { login } from "@/routes";
import { email } from "@/routes/password";

defineOptions({
    layout: AuthLayout,
});

defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(email().url);
};
</script>
<style lang="postcss"></style>
<template>
    <Head title="Forgot Password" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 w-full space-y-4 rounded-lg border px-6 py-4 shadow-md md:max-w-md">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <ForgotSvg class="fill-primary mx-auto w-[250px]" />
            <h2 class="text-primary mb-6 text-center text-2xl/9 font-bold tracking-tight">Forgot password?</h2>
        </div>
        <div class="mb-4 text-xs text-gray-500">
            No problem. Just let us know your email address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>
        <div v-if="status" class="mb-4 text-xs font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="mt-1 space-y-4">
            <div class="flex flex-col gap-1">
                <label class="label-class" for="email">Email</label>
                <InputText
                    id="email"
                    type="email"
                    autofocus
                    v-model="form.email"
                    :class="form.errors.email ? '!border-red-300' : ''" />
                <FormError :message="form.errors.email" />
            </div>
            <div class="flex items-center justify-end">
                <Button
                    class="w-full"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Email Password Reset Link"
                    size="small"
                    type="submit" />
            </div>
        </form>
        <div class="flex gap-2">
            <p class="text-sm text-gray-500">Remember your password?</p>
            <SimpleLink :url="login().url">Login Here</SimpleLink>
        </div>
    </div>
</template>
