<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import SimpleLink from '@/components/SimpleLink.vue';
import AuthRegisterLogo from '@/icons/AuthRegisterLogo.vue';
import Logo from '@/icons/Logo.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { login, register } from "@/routes";

defineOptions({
    layout: AuthLayout,
});

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(register().url, {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>
<style lang="postcss"></style>
<template>
    <Head title="Register" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 flex w-full flex-col rounded-lg border shadow-md sm:w-auto sm:flex-row">
        <div class="w-full px-6 py-4 md:max-w-md">
            <div class="mb-4 flex flex-col items-center">
                <Logo class="dark:fill-surface-100 h-10 w-auto" />
                <h2 class="text-primary mt-6 text-2xl/9 font-bold tracking-tight">Create an Account</h2>
                <span class="text-sm text-gray-500">Fill in your details to create account.</span>
            </div>
            <form @submit.prevent="submit" class="mt-1 space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="label-class" for="name">Name</label>
                    <InputText
                        id="name"
                        type="text"
                        autofocus
                        v-model="form.name"
                        :class="form.errors.name ? '!border-red-300' : ''" />
                    <FormError :message="form.errors.name" />
                </div>
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
                <div class="flex items-center justify-between gap-2">
                    <div class="flex gap-2">
                        <p class="text-sm text-gray-500">Already registered?</p>
                        <SimpleLink :url="login().url">Login Here</SimpleLink>
                    </div>
                    <Button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        label="Register"
                        size="small"
                        type="submit" />
                </div>
            </form>
        </div>
        <div class="bg-surface-100 dark:bg-surface-800 hidden w-[400px] items-end sm:flex">
            <AuthRegisterLogo class="-ml-6 h-full w-full" />
        </div>
    </div>
</template>
