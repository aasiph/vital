<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import DeleteUserForm from './partials/DeleteUserForm.vue';
import UpdatePasswordForm from './partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './partials/UpdateProfileInformationForm.vue';

defineProps<{
    mustVerifyEmail?: boolean;
    status?: string;
}>();

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});
</script>

<template>
    <Head title="Profile" />
    <div class="bg-surface-50 dark:bg-surface-800 dark:border-surface-700 space-y-4 rounded-lg border m-4 p-4 shadow-md">
        <div class="bg-surface-100 dark:bg-surface-900 p-4 shadow sm:rounded-lg sm:p-8">
            <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" class="max-w-xl" />
        </div>
        <div class="bg-surface-100 dark:bg-surface-900 p-4 shadow sm:rounded-lg sm:p-8">
            <UpdatePasswordForm class="max-w-xl" v-model="form" />
        </div>
        <div class="bg-surface-100 dark:bg-surface-900 p-4 shadow sm:rounded-lg sm:p-8">
            <DeleteUserForm class="max-w-xl" />
        </div>
    </div>
</template>
