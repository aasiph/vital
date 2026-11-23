import { createInertiaApp } from '@inertiajs/vue3';
import { definePreset } from '@primeuix/themes';
import Theme from '@primeuix/themes/aura';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import AnimateOnScroll from 'primevue/animateonscroll';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import FormError from '@/components/FormError.vue';
import { initializeTheme } from '@/composables/useAppearance';
import AppLayout from '@/layouts/AppLayout.vue';
import { initializeFlashToast } from '@/lib/flashToast';
import AppState from "@/plugins/appState";
import {
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    DoughnutController,
    Filler,
    LineController,
    LineElement,
    LinearScale,
    PieController,
    PointElement,
    PolarAreaController,
    RadarController,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Covers every chart type used in the app (Bar, Line, Pie, Doughnut, PolarArea, Radar)
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarController,
    LineController,
    PieController,
    DoughnutController,
    PolarAreaController,
    RadarController
);

const MyPreset = definePreset(Theme, {
    semantic: {
        /*colorScheme: {
            light: {
                primary: {
                    50: '{yellow.50}',
                    100: '{yellow.100}',
                    200: '{yellow.200}',
                    300: '{yellow.300}',
                    400: '{yellow.400}',
                    500: '{yellow.500}',
                    600: '{yellow.600}',
                    700: '{yellow.700}',
                    800: '{yellow.800}',
                    900: '{yellow.900}',
                    950: '{yellow.950}',
                }
            },
            dark: {
                primary: {
                    50: '{yellow.50}',
                    100: '{yellow.100}',
                    200: '{yellow.200}',
                    300: '{yellow.300}',
                    400: '{yellow.400}',
                    500: '{yellow.500}',
                    600: '{yellow.600}',
                    700: '{yellow.700}',
                    800: '{yellow.800}',
                    900: '{yellow.900}',
                    950: '{yellow.950}',
                }
            }
        },*/
        formField: {
            paddingX: '0.5rem',
            paddingY: '0.5rem',
        },
    },
});
const appName = import.meta.env.VITE_APP_NAME || 'Vital';
const primeui_license = import.meta.env.VITE_PRIMEUI_LICENSE || '';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name: string) => {
        const page = await resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./pages/**/*.vue")
        );
        page.default.layout ??= AppLayout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            // .component('VueDatePicker', VueDatePicker)
            .component('FormError', FormError)
            .directive("animateonscroll", AnimateOnScroll)
            .directive("ripple", Ripple)
            .directive("styleclass", StyleClass)
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: MyPreset,
                    options: {
                        /*cssLayer: {
                            name: 'primevue',
                            order: 'theme, base, primevue',
                        },*/
                        darkModeSelector: ".dark"
                    }
                },
                ripple: true,
                license: primeui_license
            })
            .use(AppState)
            .use(ToastService)
            .use(ConfirmationService)
            .use(DialogService)
            .mount(el);

        // This will set light / dark mode on page load...
        initializeTheme();

        // This will listen for flash toast data from the server...
        initializeFlashToast();
    },
    progress: {
        color: '#4B5563',
    },
});
