<script setup lang="ts">
import type { InertiaForm} from '@inertiajs/vue3';
import { ref } from 'vue';
import passwordRoute from "@/routes/user-password";

type PasswordForm = {
    current_password: string;
    password:  string;
    password_confirmation:  string;
}

const model = defineModel<InertiaForm<PasswordForm>>({
    required: true
})

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const updatePassword = () => {
    model.value.put(passwordRoute.update().url, {
        preserveScroll: true,
        onSuccess: () => {
            model.value.reset();
        },
        onError: () => {
            if (model.value.errors.password) {
                model.value.reset('password', 'password_confirmation');
                passwordInput.value?.focus();
            }

            if (model.value.errors.current_password) {
                model.value.reset('current_password');
                currentPasswordInput.value?.focus();
            }
        },
    });
};
</script>
<style lang="postcss"></style>
<template>
    <section>
        <header>
            <h2 class="text-lg font-medium">Update Password</h2>
            <p class="mt-1 text-xs text-gray-500">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form @submit.prevent="updatePassword" class="mt-1 space-y-4">
            <div class="flex flex-col gap-1">
                <label class="label-class" for="current_password">Current Password</label>
                <InputText
                    id="current_password"
                    type="password"
                    v-model="model.current_password"
                    :class="model.errors.current_password ? '!border-red-300' : ''" />
                <FormError :message="model.errors.current_password" />
            </div>
            <div class="flex flex-col gap-1">
                <label class="label-class" for="password">New Password</label>
                <InputText
                    id="password"
                    type="password"
                    v-model="model.password"
                    :class="model.errors.password ? '!border-red-300' : ''" />
                <FormError :message="model.errors.password" />
            </div>
            <div class="flex flex-col gap-1">
                <label class="label-class" for="password_confirmation">Confirm Password</label>
                <InputText
                    id="password_confirmation"
                    type="password"
                    v-model="model.password_confirmation"
                    :class="model.errors.password_confirmation ? '!border-red-300' : ''" />
                <FormError :message="model.errors.password_confirmation" />
            </div>
            <div class="flex items-center gap-2">
                <Button
                    label="Save"
                    type="submit"
                    :class="{ 'opacity-25': model.processing }"
                    :disabled="model.processing || !model.isDirty" />
                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0">
                    <p v-if="model.recentlySuccessful" class="text-xs text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
