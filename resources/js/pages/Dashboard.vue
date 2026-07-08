<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
</script>

<template>
    <Head title="Dashboard" />
    <div class="grid grid-cols-12 gap-4 p-4">
        <StatsWidget />

        <div class="col-span-12 xl:col-span-6 space-y-4">
            <RecentSalesWidget />
            <BestSellingWidget />
        </div>
        <div class="col-span-12 xl:col-span-6 space-y-4">
            <RevenueStreamWidget />
            <NotificationsWidget />
        </div>
    </div>
</template>
