import { router } from '@inertiajs/vue3';
import ToastEventBus from 'primevue/toasteventbus';
import type { FlashToast } from '@/types/ui';

export function initializeFlashToast(): void {
    router.on('flash', (event) => {
        const flash = (event as CustomEvent).detail?.flash;
        const data = flash?.toast as FlashToast | undefined;

        if (!data) {
            return;
        }

        ToastEventBus.emit('add', {
            severity: data.type,
            summary: data.type.toUpperCase(),
            detail: data.message,
            life: 3000
        });
    });
}
