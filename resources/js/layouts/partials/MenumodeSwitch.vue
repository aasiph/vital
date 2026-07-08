<script setup lang="ts">
import { ref } from 'vue';
import { useAppearance } from '@/composables/useAppearance';

const { layoutConfig } = useAppearance();

const menuMode = ref(layoutConfig.menuMode);
const menuModeOptions = ref([
    { label: 'Static', value: 'static' },
    { label: 'Overlay', value: 'overlay' },
]);

function onMenuModeChange() {
    layoutConfig.menuMode = menuMode.value;
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <span class="text-xs font-medium">Menu Mode</span>
        <SelectButton
            v-model="menuMode"
            @change="onMenuModeChange"
            :options="menuModeOptions"
            :allowEmpty="false"
            optionLabel="label"
            optionValue="value" />
    </div>
</template>
