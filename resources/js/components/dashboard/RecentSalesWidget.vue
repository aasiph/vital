<script setup lang="ts">
import { Search } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import type { Product } from '@/service/ProductService';
import { ProductService } from '@/service/ProductService';

const products = ref<Product[]>([]);

function formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
</script>

<template>
    <div class="card">
        <div class="mb-4 text-xl font-semibold">Recent Sales</div>
        <DataTable :value="products" :rows="5" :paginator="true" responsiveLayout="scroll">
            <Column style="width: 15%" header="Image">
                <template #body="{ data }: { data: Product }">
                    <img
                        :src="`https://primefaces.org/cdn/primevue/images/product/${data.image}`"
                        :alt="data.image"
                        width="50"
                        class="shadow" />
                </template>
            </Column>
            <Column field="name" header="Name" :sortable="true" style="width: 35%"></Column>
            <Column field="price" header="Price" :sortable="true" style="width: 35%">
                <template #body="{ data }: { data: Product }">
                    {{ formatCurrency(data.price) }}
                </template>
            </Column>
            <Column style="width: 15%" header="View">
                <template #body>
                    <Button type="button" variant="text">
                        <Search :size="18" />
                    </Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
