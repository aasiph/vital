import { useDark } from '@vueuse/core';
import { App } from 'vue';

export default {
    install: (app: App) => {
        app.config.globalProperties.isDark = useDark();
    },
};
