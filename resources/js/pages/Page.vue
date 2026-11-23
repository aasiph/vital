<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import Button from 'primevue/button';
import {
    Activity,
    ArrowLeft,
    Check,
    Compass,
    Copy,
    LayoutDashboard,
    ShieldCheck,
    Sparkles,
    Terminal,
    Zap,
} from '@lucide/vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { dashboard } from '@/routes'; // Adjust if your main Wayfinder route has a different name

type StageKey = 'scaffold' | 'specs' | 'prototype';

interface ModuleStage {
    key: StageKey;
    label: string;
    badge: string;
    summary: string;
    latencyMs: number;
}

const { currentUrl } = useCurrentUrl();
const page = usePage();

// Pulls the authenticated user shared by Laravel's HandleInertiaRequests middleware
const user = computed(() => page.props.auth?.user as { name?: string; email?: string } | undefined);

// Converts a URL like "/settings/billing" into "Billing" for the page title
const pageTitle = computed(() => {
    const segment = currentUrl.value.split('/').filter(Boolean).pop();
    return segment
        ? segment.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        : 'Workspace';
});

const stages: ModuleStage[] = [
    {
        key: 'scaffold',
        label: 'Scaffolded',
        badge: 'In Development',
        summary: 'Inertia page, Wayfinder route, and auth middleware wired up.',
        latencyMs: 14,
    },
    {
        key: 'specs',
        label: 'Drafting',
        badge: 'UI & Schema',
        summary: 'Ready for PrimeVue 5 data tables, forms, and Laravel controllers.',
        latencyMs: 22,
    },
    {
        key: 'prototype',
        label: 'Playground',
        badge: 'Interactive',
        summary: 'Testing state transitions and user flows before shipping.',
        latencyMs: 9,
    },
];

const activeStageKey = ref<StageKey>('scaffold');
const copied = ref(false);
const isPinging = ref(false);
const pulseCount = ref(0);
const lastPingMs = ref<number | null>(null);

const activeStage = computed(
    () => stages.find((s) => s.key === activeStageKey.value) ?? stages[0],
);

const copyEndpoint = async () => {
    try {
        await navigator.clipboard.writeText(currentUrl.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 1800);
    } catch {
        copied.value = false;
    }
};

const triggerPulse = () => {
    if (isPinging.value) return;
    isPinging.value = true;
    pulseCount.value += 1;

    const jitter = Math.floor(Math.random() * 9) - 3;
    lastPingMs.value = Math.max(4, activeStage.value.latencyMs + jitter);

    setTimeout(() => {
        isPinging.value = false;
    }, 650);
};

const goBack = () => {
    window.history.back();
};
</script>

<template>
    <Head :title="pageTitle" />

    <div class="relative flex min-h-[calc(100dvh-8rem)] w-full items-center justify-center overflow-hidden p-6">
        <!-- Ambient Animated Background Glows -->
        <div
            aria-hidden="true"
            class="bg-primary-500/15 dark:bg-primary-400/10 pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl animate-float-slow"
        />
        <div
            aria-hidden="true"
            class="pointer-events-none absolute right-10 bottom-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl animate-float-delayed"
        />

        <!-- Main Card -->
        <div
            class="bg-surface-0/95 dark:bg-surface-900/95 border-surface-200 dark:border-surface-800 relative z-10 w-full max-w-xl rounded-2xl border p-7 sm:p-8 shadow-sm backdrop-blur-xs transition-all duration-300 animate-card-enter"
        >
            <!-- Top Status Pill -->
            <div class="mb-6 flex flex-wrap items-center justify-between gap-2">
                <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                >
                    <span class="relative flex h-2 w-2">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                        />
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <ShieldCheck class="h-3.5 w-3.5" />
                    Verified Session
                </span>

                <span
                    class="bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200"
                >
                    <Sparkles class="text-primary-500 h-3.5 w-3.5" />
                    {{ activeStage.badge }}
                </span>
            </div>

            <!-- Heading & Context -->
            <div class="flex items-start justify-between gap-4">
                <div>
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl sm:text-3xl font-bold tracking-tight">
                        Page {{ pageTitle }}
                    </h1>
                    <p class="text-surface-600 dark:text-surface-400 mt-2 text-sm leading-relaxed">
                        <template v-if="user?.name">
                            Welcome back,
                            <span class="text-surface-900 dark:text-surface-100 font-semibold">{{ user.name }}</span>.
                        </template>
                        {{ activeStage.summary }}
                    </p>
                </div>

                <div
                    class="bg-primary-500/10 text-primary-600 dark:text-primary-400 hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:rotate-6"
                >
                    <Compass class="h-5 w-5" />
                </div>
            </div>

            <!-- Interactive Stage Switcher -->
            <div class="mt-6">
                <div class="text-surface-500 dark:text-surface-400 mb-2 flex items-center justify-between text-xs font-medium">
                    <span>Module Mode</span>
                    <span class="font-mono text-[11px]">Laravel 13 · Inertia · PrimeVue 5</span>
                </div>

                <div class="bg-surface-100 dark:bg-surface-950 border-surface-200 dark:border-surface-800 grid grid-cols-3 gap-1.5 rounded-xl border p-1">
                    <button
                        v-for="stage in stages"
                        :key="stage.key"
                        type="button"
                        :class="[
                            'flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer',
                            activeStageKey === stage.key
                                ? 'bg-surface-0 dark:bg-surface-800 text-surface-900 dark:text-surface-0 shadow-xs scale-[1.01]'
                                : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-200',
                        ]"
                        @click="activeStageKey = stage.key"
                    >
                        <Zap
                            class="h-3.5 w-3.5 transition-transform duration-200"
                            :class="activeStageKey === stage.key ? 'text-primary-500 scale-110' : 'opacity-60'"
                        />
                        {{ stage.label }}
                    </button>
                </div>
            </div>

            <!-- Route Inspector Box -->
            <div
                class="bg-surface-50 dark:bg-surface-950 border-surface-200 dark:border-surface-800 mt-5 rounded-xl border p-4 transition-colors"
            >
                <div class="mb-2">
                    <span class="text-surface-500 dark:text-surface-400 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider">
                        <Terminal class="text-primary-500 h-3.5 w-3.5" />
                        Active Route Endpoint
                    </span>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2">
                    <code class="text-primary-600 dark:text-primary-400 truncate font-mono text-sm font-semibold">
                        {{ currentUrl }}
                    </code>
                    <span
                        class="bg-surface-200/70 dark:bg-surface-800 text-surface-600 dark:text-surface-300 shrink-0 rounded px-2 py-0.5 font-mono text-[11px]"
                    >
                        auth · verified
                    </span>
                </div>

                <!-- Fun Interactive Route Pulse Bar -->
                <div class="border-surface-200/80 dark:border-surface-800/80 mt-3 flex items-center justify-between gap-3 border-t pt-3">
                    <div class="text-surface-500 dark:text-surface-400 flex items-center gap-2 text-xs">
                        <Activity
                            class="h-3.5 w-3.5 text-emerald-500 transition-transform duration-300"
                            :class="isPinging ? 'scale-125 text-primary-500' : ''"
                        />
                        <span v-if="lastPingMs !== null">
                            Last check: <strong class="text-surface-800 dark:text-surface-200 font-mono">{{ lastPingMs }}ms</strong>
                            ({{ pulseCount }}×)
                        </span>
                        <span v-else>Ready for a quick route pulse</span>
                    </div>

                    <button
                        type="button"
                        class="bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                        @click="triggerPulse"
                    >
                        <Sparkles class="h-3 w-3" :class="isPinging ? 'animate-spin' : ''" />
                        {{ isPinging ? 'Checking...' : 'Pulse Route' }}
                    </button>
                </div>
            </div>

            <!-- Navigation Actions (PrimeVue 5 + Inertia Link) -->
            <div class="mt-7 flex flex-wrap items-center gap-3">
                <Link :href="dashboard()" class="inline-flex">
                    <Button severity="primary" size="small" class="font-semibold">
                        <LayoutDashboard class="h-4 w-4" />
                        <span>Back to Dashboard</span>
                    </Button>
                </Link>

                <Button
                    type="button"
                    severity="secondary"
                    outlined
                    size="small"
                    class="font-medium"
                    @click="goBack"
                >
                    <ArrowLeft class="h-4 w-4" />
                    <span>Go Back</span>
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes cardEnter {
    from {
        opacity: 0;
        transform: translateY(10px) scale(0.99);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes floatSlow {
    0%,
    100% {
        transform: translate(-50%, 0px);
    }
    50% {
        transform: translate(-50%, 14px);
    }
}

@keyframes floatDelayed {
    0%,
    100% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(-10px, -12px);
    }
}

.animate-card-enter {
    animation: cardEnter 0.42s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-float-slow {
    animation: floatSlow 7s ease-in-out infinite;
}

.animate-float-delayed {
    animation: floatDelayed 8.5s ease-in-out infinite;
}
</style>
