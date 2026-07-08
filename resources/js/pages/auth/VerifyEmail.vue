<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
import SimpleLink from '@/components/SimpleLink.vue';
import Logo from '@/icons/Logo.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { logout } from "@/routes";
import { send } from "@/routes/verification";

defineOptions({
    layout: AuthLayout,
});

const props = defineProps<{
    status?: string;
}>();

const form = useForm({});

const submit = () => {
    form.post(send().url);
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <Head title="Email Verification" />
    <div
        class="bg-surface-50 dark:bg-surface-900 dark:border-surface-800 w-full rounded-lg border px-6 py-4 shadow-md md:max-w-md">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo class="dark:fill-surface-100 mx-auto h-10 w-auto" />
            <h2 class="text-primary my-6 text-center text-2xl/9 font-bold tracking-tight">Email verification</h2>
        </div>
        <div class="mb-4 text-xs">
            Thanks for signing up! Before getting started, could you verify your email address by clicking on the link
            we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>

        <div class="mb-4 text-xs font-medium text-green-600" v-if="verificationLinkSent">
            A new verification link has been sent to the email address you provided during registration.
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Resend Verification Email"
                    size="small"
                    type="submit" />
                <SimpleLink :url="logout().url" as="button" method="post">Log Out</SimpleLink>
            </div>
        </form>
    </div>
</template>
