<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import {
    ArrowLeft,
    CornerDownRight,
    FolderTree,
    GitBranch,
    Layers,
    LayoutDashboard,
    Network,
} from '@lucide/vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { dashboard } from '@/routes';

const props = defineProps<{
    level?: string | number;
}>();

const { currentUrl } = useCurrentUrl();
const page = usePage();

const user = computed(() => page.props.auth?.user as { name?: string } | undefined);

// Resolve level from Inertia route prop first, falling back to URL segment
const rawLevel = computed(() => {
    if (props.level !== undefined && props.level !== null && String(props.level).trim() !== '') {
        return String(props.level).trim();
    }
    const lastSegment = currentUrl.value.split('?')[0].split('/').filter(Boolean).pop();
    return lastSegment || '1.1';
});

const parsedLevel = computed(() => {
    const [rawTier, rawSub] = rawLevel.value.split('.');
    const tier = Math.max(1, Number.parseInt(rawTier || '1', 10) || 1);
    const subItem = rawSub ? Number.parseInt(rawSub, 10) || rawSub : null;

    return {
        tier,
        subItem,
        formatted: subItem !== null ? `${tier}.${subItem}` : `${tier}`,
    };
});

// 1.* => Depth 1, 2.* => Depth 2, 3.* => Depth 3, 4.* => Depth 4, etc.
const depthLevel = computed(() => parsedLevel.value.tier);

// Builds the nesting path from Tier 1 down to the current tier (e.g. 1 -> 2 -> 3 -> 4.2)
const hierarchyNodes = computed(() => {
    const { tier, formatted } = parsedLevel.value;

    return Array.from({ length: tier }, (_, index) => {
        const currentTier = index + 1;
        const isCurrent = currentTier === tier;

        return {
            path: isCurrent ? formatted : `${currentTier}.*`,
            role:
                currentTier === 1
                    ? 'Root Level'
                    : `Nested in Level ${currentTier - 1}`,
            isCurrent,
        };
    });
});

const goBack = () => {
    window.history.back();
};
</script>

<template>
    <Head :title="`Menu Level ${rawLevel}`" />

    <div class="relative flex min-h-[calc(100dvh-8rem)] w-full items-center justify-center overflow-hidden p-6">
        <!-- Subtle Blueprint Grid & Glow -->
        <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b826_1px,transparent_1px)] [background-size:20px_20px]"
        />
        <div
            aria-hidden="true"
            class="bg-primary-500/12 pointer-events-none absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse-slow"
        />

        <!-- Main Card -->
        <div
            class="bg-surface-0/95 dark:bg-surface-900/95 border-surface-200 dark:border-surface-800 relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-sm backdrop-blur-xs animate-panel-in"
        >
            <!-- Top Accent Bar -->
            <div class="from-primary-500 via-indigo-500 to-emerald-500 h-1.5 w-full bg-gradient-to-r" />

            <div class="p-7 sm:p-8">
                <!-- Header Metadata -->
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                        <Tag severity="info" rounded>
                            <div class="flex items-center gap-1.5 px-1 text-xs font-semibold">
                                <FolderTree class="h-3.5 w-3.5" />
                                <span>Nested Navigation View</span>
                            </div>
                        </Tag>

                        <span
                            class="bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-xs font-medium"
                        >
                            <Layers class="text-primary-500 h-3 w-3" />
                            Depth {{ depthLevel }}
                        </span>
                    </div>

                    <span class="text-surface-400 dark:text-surface-500 font-mono text-xs">
                        navmenu.show
                    </span>
                </div>

                <!-- Hero Title & Level Pill -->
                <div class="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 class="text-surface-900 dark:text-surface-0 text-2xl sm:text-3xl font-bold tracking-tight">
                            Navigation Level
                            <span class="text-primary-600 dark:text-primary-400 font-mono">{{ parsedLevel.formatted }}</span>
                        </h1>
                        <p class="text-surface-600 dark:text-surface-400 mt-1.5 text-sm leading-relaxed">
                            <template v-if="user?.name">
                                Active route for <strong class="text-surface-800 dark:text-surface-200 font-medium">{{ user.name }}</strong>.
                            </template>
                            Rendered dynamically from your nested sidebar hierarchy.
                        </p>
                    </div>

                    <!-- Floating Level Badge -->
                    <div
                        class="bg-primary-500/10 border-primary-500/20 text-primary-600 dark:text-primary-400 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border font-mono text-lg font-bold shadow-2xs transition-transform duration-300 hover:scale-105"
                    >
                        {{ parsedLevel.formatted }}
                    </div>
                </div>

                <!-- Visual Hierarchy Tree -->
                <div
                    class="bg-surface-50 dark:bg-surface-950 border-surface-200 dark:border-surface-800 mt-6 rounded-xl border p-4 sm:p-5"
                >
                    <div class="text-surface-500 dark:text-surface-400 mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                        <span class="inline-flex items-center gap-1.5">
                            <Network class="text-primary-500 h-3.5 w-3.5" />
                            Active Hierarchy Path
                        </span>
                        <span class="font-mono text-[11px] lowercase">{{ currentUrl }}</span>
                    </div>

                    <div class="space-y-2.5">
                        <div
                            v-for="(node, idx) in hierarchyNodes"
                            :key="node.path"
                            :style="{
                                paddingLeft: `${idx * 1.25}rem`,
                                animationDelay: `${idx * 80}ms`,
                            }"
                            class="flex items-center justify-between gap-2 animate-node-slide"
                        >
                            <div class="flex items-center gap-2">
                                <CornerDownRight
                                    v-if="idx > 0"
                                    class="text-surface-400 h-4 w-4 shrink-0"
                                />
                                <GitBranch
                                    v-else
                                    class="text-primary-500 h-4 w-4 shrink-0"
                                />

                                <span
                                    :class="[
                                        'inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all',
                                        node.isCurrent
                                            ? 'bg-primary-500/10 border-primary-500/30 text-primary-700 dark:text-primary-300 font-semibold shadow-2xs'
                                            : 'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-800 text-surface-700 dark:text-surface-300',
                                    ]"
                                >
                                    <span class="font-mono font-bold">{{ node.path }}</span>
                                    <span class="text-surface-400">·</span>
                                    <span>{{ node.role }}</span>
                                </span>
                            </div>

                            <span
                                v-if="node.isCurrent"
                                class="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400"
                            >
                                <span class="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500" />
                                Active
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Footer Actions -->
                <div class="mt-5 flex flex-wrap items-center pt-5">
                    <div class="flex flex-wrap items-center gap-3">
                        <Link :href="dashboard()" class="inline-flex">
                            <Button severity="primary" size="small" class="font-semibold">
                                <LayoutDashboard class="h-4 w-4" />
                                <span>Dashboard</span>
                            </Button>
                        </Link>

                        <Button
                            type="button"
                            severity="secondary"
                            outlined
                            size="small"
                            @click="goBack"
                        >
                            <ArrowLeft class="h-4 w-4" />
                            <span>Previous Page</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes panelIn {
    from {
        opacity: 0;
        transform: translateY(12px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes nodeSlide {
    from {
        opacity: 0;
        transform: translateX(-8px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulseSlow {
    0%,
    100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        opacity: 0.85;
        transform: translate(-50%, -50%) scale(1.08);
    }
}

.animate-panel-in {
    animation: panelIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-node-slide {
    animation: nodeSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-pulse-slow {
    animation: pulseSlow 6s ease-in-out infinite;
}
</style>
