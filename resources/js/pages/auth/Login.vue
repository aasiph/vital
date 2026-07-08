<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import SimpleLink from '@/components/SimpleLink.vue';
import AuthLogo from '@/icons/AuthLogo.vue';
import Logo from '@/icons/Logo.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { login, register } from "@/routes";
import { request } from "@/routes/password";

defineOptions({
    layout: AuthLayout,
});

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: 'test@example.com',
    password: '12345678',
    remember: true,
});

const submit = () => {
    form.post(login().url, {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>
<template>
    <Head title="Log in" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 flex w-full flex-col rounded-lg border shadow-md sm:w-auto sm:flex-row">
        <div class="bg-surface-100 dark:bg-surface-800 p-6">
            <AuthLogo class="fill-primary h-[100px] w-full sm:h-full" />
        </div>
        <div class="w-full px-6 py-4 md:max-w-md">
            <Logo class="dark:fill-surface-100 mx-auto hidden h-10 w-auto sm:block" />
            <h2 class="text-primary my-6 text-center text-2xl/9 font-bold tracking-tight">Sign in to your account</h2>

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
                <div class="flex flex-col gap-1">
                    <label class="label-class" for="password">Password</label>
                    <Password
                        inputId="password"
                        v-model="form.password"
                        :feedback="false"
                        toggleMask
                        :class="{ invalid: form.errors.password }"
                        :pt="{ pcInputText: { root: 'w-full' } }" />
                    <FormError :message="form.errors.password" />
                </div>
                <div class="flex items-center justify-between gap-2">
                    <div class="block">
                        <Checkbox v-model="form.remember" inputId="remember" name="remember" :binary="true" />
                        <label for="remember" class="ml-2">Remember</label>
                    </div>
                    <SimpleLink v-if="canResetPassword" :url="request().url">
                        Forgot your password?
                    </SimpleLink>
                </div>
                <Button
                    fluid
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Log in"
                    size="small"
                    type="submit" />
                <div class="flex gap-2">
                    <p class="text-sm text-gray-500">Don't have an account?</p>
                    <SimpleLink :url="register().url">Signup Here</SimpleLink>
                </div>
            </form>
        </div>
    </div>
</template>
