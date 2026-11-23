<script setup>
import { h, ref } from 'vue';
import { CreditCard, Truck, ShoppingCart, PackageCheck } from '@lucide/vue';

const events = ref([
    {
        status: 'Order Placed',
        date: 'Oct 15, 2026',
        time: '10:30 AM',
        icon: () => h(ShoppingCart),
        color: 'bg-blue-500',
        user: 'JD',
        description: 'Your order #12345 has been confirmed and is being prepared for processing.',
        details: ['2x Wireless Headphones', '1x Phone Case', '1x USB-C Cable']
    },
    {
        status: 'Payment Confirmed',
        date: 'Oct 15, 2026',
        time: '10:32 AM',
        icon: () => h(CreditCard),
        color: 'bg-green-500',
        user: 'SY',
        description: 'Payment of $149.99 was successfully processed via Credit Card ending in 4242.'
    },
    {
        status: 'Shipped',
        date: 'Oct 16, 2026',
        time: '02:15 PM',
        icon: () => h(Truck),
        color: 'bg-orange-500',
        user: 'MK',
        description: 'Package has been handed to the carrier and is on its way.',
        tracking: 'TRK-892374651'
    },
    {
        status: 'Delivered',
        date: 'Oct 18, 2026',
        time: '11:20 AM',
        icon: () => h(PackageCheck),
        color: 'bg-lime-500',
        user: 'JD',
        description: 'Package was delivered and signed for at the front door.'
    }
]);


const horizontalEvents = ref(['2020', '2021', '2022', '2023']);
</script>

<template>
    <div class="grid w-full grid-cols-12 gap-4">
        <div class="col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Left Align</div>
                <Timeline :value="events">
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Right Align</div>
                <Timeline :value="events" align="right">
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Alternate Align</div>
                <Timeline :value="events" align="alternate">
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
            </div>
        </div>
        <div class="col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Opposite Content</div>
                <Timeline :value="events">
                    <template #opposite="slotProps">
                        <small class="text-muted-color">{{ slotProps.item.date }}</small>
                    </template>
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
            </div>
        </div>
        <div class="col-span-full">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Templating</div>
                <Timeline :value="events" align="alternate" class="w-full @container" :pt="{ event: { class: '@max-[480px]:flex-row!' }, eventOpposite: { class: '@max-[480px]:hidden' }, eventContent: { class: '@max-[480px]:text-left!' }, eventConnector: { class: 'mb-4' } }">
                    <template #opposite="slotProps">
                        <div class="font-medium text-surface-700 dark:text-surface-200">{{ slotProps.item.date }}</div>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ slotProps.item.time }}</div>
                    </template>
                    <template #marker="slotProps">
            <span :class="'flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ' + slotProps.item.color">
                <component :is="slotProps.icon" class="w-4.5! h-4.5!" />
            </span>
                    </template>
                    <template #content="slotProps">
                        <div class="p-5 rounded-xl bg-surface-0 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm mb-4 text-left">
                            <div class="hidden @max-[480px]:block mb-2 text-sm text-surface-500 dark:text-surface-400">{{ slotProps.item.date }} · {{ slotProps.item.time }}</div>
                            <div class="flex items-center gap-3 mb-3">
                                <Avatar :label="slotProps.item.user" shape="circle" class="bg-primary/10! text-primary! font-semibold!" />
                                <span class="font-bold text-surface-900 dark:text-surface-0">{{ slotProps.item.status }}</span>
                            </div>
                            <span class="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">{{ slotProps.item.description }}</span>
                            <ul v-if="slotProps.item.details" class="mt-3 space-y-1">
                                <li v-for="detail in slotProps.item.details" :key="detail" class="text-sm text-surface-500 dark:text-surface-400 flex items-center gap-2">
                                    <Box :size="12" />
                                    {{ detail }}
                                </li>
                            </ul>
                            <div v-if="slotProps.item.tracking" class="mt-4 p-3 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center justify-between">
                    <span class="text-sm text-surface-600 dark:text-surface-300 flex items-center">
                        <MapMarker class="mr-2 shrink-0" />
                        Tracking: {{ slotProps.item.tracking }}
                    </span>
                                <Button variant="text" size="small">Track</Button>
                            </div>
                        </div>
                    </template>
                </Timeline>
            </div>
        </div>
        <div class="col-span-full">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Horizontal</div>
                <div class="mb-2 font-semibold">Top Align</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="top">
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline>

                <div class="mt-4 mb-2 font-semibold">Bottom Align</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="bottom">
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline>

                <div class="mt-4 mb-2 font-semibold">Alternate Align</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="alternate">
                    <template #opposite>&nbsp;</template>
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>
