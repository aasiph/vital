<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { CircleQuestionMark } from '@lucide/vue';
import { nextTick, ref } from 'vue';
import { destroy } from '@/routes/profile'

const confirmingUserDeletion = ref(false);
const passwordInput = ref();

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
    nextTick(() => passwordInput.value?.$el.focus());
};

const deleteUser = () => {
    form.delete(destroy().url, {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.$el.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.reset();
};
</script>
<style lang="postcss"></style>
<template>
    <section class="space-y-4">
        <header>
            <h2 class="text-lg font-medium">Delete Account</h2>
            <p class="mt-1 text-xs text-gray-500">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </p>
        </header>
        <Dialog
            v-model:visible="confirmingUserDeletion"
            modal
            :pt="{ mask: { style: 'backdrop-filter: blur(2px)' } }"
            class="max-w-[90%] lg:max-w-[60%]"
            @after-hide="
                form.reset();
                form.clearErrors();
            ">
            <template #container="{ closeCallback }">
                <div class="bg-surface-100 dark:bg-surface-800 flex flex-col items-center rounded-md p-5">
                    <div
                        class="bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 -mt-[4rem] inline-flex h-[6rem] w-[6rem] items-center justify-center rounded-full">
                        <CircleQuestionMark :size="60" />
                    </div>
                    <span class="mt-4 mb-2 block text-2xl font-bold">
                        Are you sure you want to delete your account?
                    </span>
                    <p class="mb-0">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>
                    <div class="flex flex-col gap-1">
                        <label class="label-class" for="password">Password</label>
                        <InputText
                            id="password"
                            ref="passwordInput"
                            type="password"
                            v-model="form.password"
                            :class="form.errors.password ? '!border-red-300' : ''" />
                        <FormError :message="form.errors.password" />
                    </div>
                    <div class="mt-4 flex items-center gap-2">
                        <Button label="Cancel" @click="closeCallback"></Button>
                        <Button label="Delete Account" severity="danger" @click="deleteUser"></Button>
                    </div>
                </div>
            </template>
        </Dialog>
        <Button label="Delete Account" severity="danger" @click="confirmUserDeletion"></Button>
    </section>
</template>
