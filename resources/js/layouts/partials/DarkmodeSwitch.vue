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
const { updateAppearance, appearance, toggleDark, isDarkMode } = useAppearance();

</script>

<template>
    <div v-if="!props.iconMode" class="flex flex-col w-full gap-2">
        <span class="text-xs font-medium">Appearance</span>
        <div class="space-x-1">
            <Button
                :severity="appearance == 'light' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('light')"
                :pt:root="'!px-2'">
                <Sun :size="16" />
                Light
            </Button>
            <Button
                :severity="appearance == 'dark' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('dark')"
                :pt:root="'!px-2'">
                <Moon fill="#ffffff" :size="16" />
                Dark
            </Button>
            <Button
                :severity="appearance == 'system' ? 'primary' : 'secondary'"
                size="small"
                @click="updateAppearance('system')"
                :pt:root="'!px-2'">
                <Monitor :size="16" />
                System
            </Button>
        </div>
    </div>
    <div v-else>
        <Button :severity="!isDarkMode ? 'secondary' : 'secondary'"
                @click="toggleDark" size="small" :pt:root="'!p-0'" variant="outlined"
                class="h-8 w-8">
            <Moon v-if="isDarkMode" fill="#ffffff" :size="18" />
            <Sun v-else :size="18" />
        </Button>
    </div>
</template>
