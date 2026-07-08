<script setup lang="ts">
import { Photo, PhotoService } from '@/service/PhotoService.js';
import { InventoryStatus, Product, ProductService } from '@/service/ProductService';
import { onMounted, ref } from 'vue';
import { Heart, ShoppingCart } from '@lucide/vue';

const products = ref<Product[]>([]);
const images = ref<Photo[]>([]);
const galleriaResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5,
    },
    {
        breakpoint: '960px',
        numVisible: 4,
    },
    {
        breakpoint: '768px',
        numVisible: 3,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
    },
]);
const carouselResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
    },
]);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    PhotoService.getImages().then((data) => (images.value = data));
});

function getSeverity(status: InventoryStatus) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return 'contrast';
    }
}
</script>

<template>
    <div class="flex w-full flex-col">
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Carousel</div>
            <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="carouselResponsiveOptions">
                <template #item="{ data }: { data: Product }">
                    <div class="border-surface-200 dark:border-surface-700 m-2 rounded border p-4">
                        <div class="mb-4">
                            <div class="relative mx-auto">
                                <img
                                    :src="'https://primefaces.org/cdn/primevue/images/product/' + data.image"
                                    :alt="data.name"
                                    class="w-full rounded" />
                                <div class="dark:bg-surface-900 rounded-border absolute" style="left: 5px; top: 5px">
                                    <Tag :value="data.inventoryStatus" :severity="getSeverity(data.inventoryStatus)" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 font-medium">{{ data.name }}</div>
                        <div class="flex items-center justify-between">
                            <div class="mt-0 text-xl font-semibold">${{ data.price }}</div>
                            <span>
                                <Button severity="secondary" variant="outlined">
                                    <Heart />
                                </Button>
                                <Button class="ml-2">
                                    <ShoppingCart />
                                </Button>
                            </span>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Image</div>
            <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" />
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Galleria</div>
            <Galleria
                :value="images"
                :responsiveOptions="galleriaResponsiveOptions"
                :numVisible="5"
                containerStyle="max-width: 640px">
                <template #item="{ item }: { item: Photo }">
                    <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%" />
                </template>
                <template #thumbnail="{ item }: { item: Photo }">
                    <img :src="item.thumbnailImageSrc" :alt="item.alt" />
                </template>
            </Galleria>
        </div>
    </div>
</template>
