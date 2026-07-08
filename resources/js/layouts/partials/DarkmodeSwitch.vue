<script setup lang="ts">
import { Sun, Moon, Monitor } from '@lucide/vue';
import { useAppearance } from '@/composables/useAppearance';

const props = withDefaults(
    defineProps<{
        iconMode?: boolean;
    }>(),
    {
        iconMode: false,
    }
);
const { updateAppearance, appearance } = useAppearance();

function getLabel(item: string): string {
    if (!props.iconMode) {
        switch (item) {
            case 'L':
                return 'Light';
            case 'D':
                return 'Dark';
            case 'S':
                return 'System';
        }
    }

    return '';
}
</script>

<template>
    <div class="inline-flex flex-col items-start justify-start gap-2 pr-4">
        <span class="text-xs font-medium" v-if="!iconMode">Appearance</span>
        <div class="flex gap-0.5">
            <Button
                :severity="appearance == 'light' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('light')"
                :pt:root="'!px-2'">
                <Sun />
                {{ getLabel('L') }}
            </Button>
            <Button
                :severity="appearance == 'dark' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('dark')"
                :pt:root="'!px-2'">
                <Moon />
                {{ getLabel('D') }}
            </Button>
            <Button
                :severity="appearance == 'system' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('system')"
                :pt:root="'!px-2'">
                <Monitor />
                {{ getLabel('S') }}
            </Button>
        </div>
    </div>
</template>
