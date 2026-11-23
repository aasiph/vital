<script setup lang="ts">
import { Plus, Trash, Ellipsis, DollarSign, BanknoteArrowDown, CircleQuestionMark, ArrowUp, Heart } from '@lucide/vue';
import Menu from 'primevue/menu';
import { h, ref, useTemplateRef } from 'vue';

const menuRef = useTemplateRef<InstanceType<typeof Menu>>('n_menu');

const items = ref([
    { label: 'Add New', icon: () => h(Plus) },
    { label: 'Remove', icon: () => h(Trash) },
]);
</script>

<template>
    <div class="card">
        <div class="mb-6 flex items-center justify-between">
            <div class="text-xl font-semibold">Notifications</div>
            <div>
                <Button variant="text" @click="menuRef?.toggle($event)" rounded>
                    <Ellipsis />
                </Button>
                <Menu ref="n_menu" popup :model="items" class="!min-w-40"></Menu>
            </div>
        </div>

        <span class="text-muted-color mb-4 block font-medium">TODAY</span>
        <ul class="mx-0 mt-0 mb-6 list-none p-0">
            <li class="border-surface flex items-center border-b py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-400/10">
                    <DollarSign :size="25" class="text-blue-500" />
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">
                    Richard Jones
                    <span class="text-surface-700 dark:text-surface-100">
                        has purchased a blue t-shirt for
                        <span class="text-primary font-bold">$79.00</span>
                    </span>
                </span>
            </li>
            <li class="flex items-center py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-400/10">
                    <BanknoteArrowDown :size="25" class="text-orange-500" />
                </div>
                <span class="text-surface-700 dark:text-surface-100 leading-normal">
                    Your request for withdrawal of
                    <span class="text-primary font-bold">$2500.00</span>
                    has been initiated.
                </span>
            </li>
        </ul>

        <span class="text-muted-color mb-4 block font-medium">YESTERDAY</span>
        <ul class="m-0 mb-6 list-none p-0">
            <li class="border-surface flex items-center border-b py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-400/10">
                    <DollarSign :size="25" class="text-blue-500" />
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">
                    Keyser Wick
                    <span class="text-surface-700 dark:text-surface-100">
                        has purchased a black jacket for
                        <span class="text-primary font-bold">$59.00</span>
                    </span>
                </span>
            </li>
            <li class="border-surface flex items-center border-b py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-400/10">
                    <CircleQuestionMark :size="25" class="text-pink-500" />
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">
                    Jane Davis
                    <span class="text-surface-700 dark:text-surface-100">
                        has posted a new questions about your product.
                    </span>
                </span>
            </li>
        </ul>
        <span class="text-muted-color mb-4 block font-medium">LAST WEEK</span>
        <ul class="m-0 list-none p-0">
            <li class="border-surface flex items-center border-b py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-400/10">
                    <ArrowUp :size="25" class="text-green-500" />
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">
                    Your revenue has increased by
                    <span class="text-primary font-bold">%25</span>
                    .
                </span>
            </li>
            <li class="border-surface flex items-center border-b py-2">
                <div
                    class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-pink-400/10">
                    <Heart :size="25" class="text-pink-500" />
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">
                    <span class="text-primary font-bold">12</span>
                    users have added your products to their wishlist.
                </span>
            </li>
        </ul>
    </div>
</template>
