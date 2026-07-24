<script setup lang="ts">
import {
    Code,
    Smartphone,
    Palette,
    Server,
    BarChart3,
    Shield,
    Briefcase,
    Cog,
    Sparkles,
    ArrowRight,
    CheckCircle,
} from '@lucide/vue';
import { ref } from 'vue';
import GuestLayout from '@/layouts/GuestLayout.vue';


defineOptions({ layout: GuestLayout });

const services = ref([
    {
        title: 'Custom Web Applications',
        description:
            'Tailor-made cloud architectures and frontend experiences engineered for high conversion rates, extreme reliability, and fast loading speeds.',
        category: 'Development',
        icon: Code,
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        features: [
            'Vue / Nuxt ecosystem',
            'Serverless integration',
            'API-first architecture',
            'Core Web Vitals tuning',
            'WCAG 2.1 accessibility',
        ],
    },
    {
        title: 'Mobile App Engineering',
        description:
            'Native and cross-platform mobile solutions built to capture users on iOS and Android with sleek animations and fluid performance.',
        category: 'Mobile',
        icon: Smartphone,
        image:
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        features: [
            'Cross-platform reach',
            'Offline-first systems',
            'Biometric security integration',
            'Push notification orchestration',
            'App store optimization',
        ],
    },
    {
        title: 'UI/UX Product Design',
        description:
            'Transforming complex operations into clean user workflows. We create intuitive design systems that match your brand identity.',
        category: 'Design',
        icon: Palette,
        image:
            'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80',
        features: [
            'High-fidelity interactive prototyping',
            'Comprehensive user testing',
            'Figma design tokens',
            'Scalable design systems',
            'Conversion-focused UX patterns',
        ],
    },
    {
        title: 'Cloud Infrastructure & DevOps',
        description:
            'Automating your deployment cycles and optimizing resource allocation. Secure, auto-scaling environments designed to cut cloud costs.',
        category: 'Infrastructure',
        icon: Server,
        image:
            'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80',
        features: [
            'CI/CD automated pipelines',
            'Kubernetes clustering',
            'Zero-downtime migrations',
            'Multi-region failover',
            'Real-time cost monitoring',
        ],
    },
    {
        title: 'AI & Data Intelligence',
        description:
            'Unlock insights hidden inside your application data stack. We build secure predictive pipelines and custom LLM integrations.',
        category: 'Data Science',
        icon: BarChart3,
        image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        features: [
            'Predictive machine learning models',
            'Real-time pipeline analytics',
            'Natural Language Processing',
            'Custom LLM integrations',
            'MLOps & model governance',
        ],
    },
    {
        title: 'Cybersecurity Operations',
        description:
            'Continuous monitoring, threat isolation, and rigorous compliance implementation to shield your enterprise architecture from data breaches.',
        category: 'Security',
        icon: Shield,
        image:
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        features: [
            'Penetration vulnerability testing',
            'SOC2 / GDPR compliance mapping',
            'IAM access governance',
            '24/7 threat monitoring',
            'Incident response playbooks',
        ],
    },
    {
        title: 'Product Strategy & Consulting',
        description:
            'Bridging business goals with technical execution. We help you prioritize, roadmap, and launch products that users actually need.',
        category: 'Strategy',
        icon: Briefcase,
        image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        features: [
            'Product roadmapping',
            'Market-fit analysis',
            'Technical due diligence',
            'Digital transformation planning',
            'Stakeholder alignment workshops',
        ],
    },
    {
        title: 'Quality Assurance & Automation',
        description:
            'Ship with confidence. We embed automated testing, regression suites, and performance benchmarking into your delivery pipeline.',
        category: 'QA',
        icon: Cog,
        image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        features: [
            'Automated test suites',
            'CI-integrated regression testing',
            'Cross-browser / device labs',
            'Load & performance testing',
            'Defect tracking & reporting',
        ],
    },
]);

function setFallback(event: any, title: any) {
    event.target.src = `https://picsum.photos/seed/${title
        .toLowerCase()
        .replace(/\s+/g, '-')}/800/600`;
}
</script>

<style scoped>
.service-enter-active,
.service-leave-active {
    transition: all 0.35s ease;
}

.service-enter-from,
.service-leave-to {
    opacity: 0;
    transform: translateY(16px);
}
</style>
<template>
    <section id="services" class="relative overflow-hidden bg-surface-50 dark:bg-surface-900 py-20 lg:py-28">
        <!-- Decorative blobs using PrimeVue primary color -->
        <div class="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary opacity-10 blur-3xl" />
        <div class="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-primary opacity-10 blur-3xl" />

        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section header -->
            <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full bg-surface-100 dark:bg-surface-800 px-4 py-1.5 text-sm font-semibold text-surface-600 dark:text-surface-300">
          <Sparkles class="h-4 w-4" />
          What we do
        </span>
                <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white md:text-5xl">
                    Solutions built to
                    <span class="text-amber-500">accelerate</span>
                    growth
                </h2>
                <p class="mt-4 text-lg text-surface-600 dark:text-surface-300">
                    From pixel-perfect interfaces to enterprise-grade infrastructure, we deliver end-to-end
                    digital products that scale with your business.
                </p>
            </div>

            <!-- Services grid -->
            <TransitionGroup
                name="service"
                tag="div"
                class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
                <div
                    v-for="service in services"
                    :key="service.title"
                    class="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 shadow-sm dark:shadow-surface-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <!-- Image -->
                    <div class="relative aspect-video overflow-hidden">
                        <img
                            :src="service.image"
                            :alt="service.title"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            @error="(e) => setFallback(e, service.title)"
                        />
                        <div
                            class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <Tag
                            :value="service.category"
                            severity="contrast"
                            class="absolute left-4 top-4 z-10 !rounded-full !px-3 !py-1 text-xs font-semibold uppercase tracking-wider"
                        />
                    </div>

                    <!-- Body -->
                    <div class="flex flex-1 flex-col p-6">
                        <div class="mb-4 flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-400 dark:bg-surface-700 text-white"
                            >
                                <component
                                    :is="service.icon"
                                    class="h-5 w-5"
                                />
                            </div>
                            <h3 class="text-xl font-bold leading-tight text-surface-900 dark:text-white">
                                {{ service.title }}
                            </h3>
                        </div>

                        <p class="mb-5 text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                            {{ service.description }}
                        </p>

                        <ul class="mb-6 space-y-2">
                            <li
                                v-for="feature in service.features"
                                :key="feature"
                                class="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-300"
                            >
                                <CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                                <span>{{ feature }}</span>
                            </li>
                        </ul>

                        <div class="mt-auto border-t border-surface-100 dark:border-surface-700 pt-5">
                            <Button
                                severity="primary"
                                outlined
                                class="w-full"
                            >
                                <span>Learn more</span>
                                <ArrowRight class="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </section>
</template>
