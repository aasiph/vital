<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Mail, Lightbulb, FileBadge, Handshake } from '@lucide/vue';
import GuestLayout from '@/layouts/GuestLayout.vue';

defineOptions({ layout: GuestLayout });
const skills = [
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    {
        name: 'JavaScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'VueJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    {
        name: 'TailwindCSS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];
</script>
<template>
    <Head title="Page" />

    <!-- Main Content -->
    <main class="container flex flex-col gap-12 lg:gap-20">
        <!-- Hero Section -->
        <section
            class="from-primary-700 via-primary-600 to-primary-700 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b py-20 text-center text-white">
            <h1 class="mb-6 text-4xl font-bold md:text-6xl">About VITAL</h1>
            <p class="mx-auto max-w-3xl text-xl opacity-90 md:text-2xl">
                Full featured website using creative technologies Laravel, Inertia.js,Vue.js with Primevue and Tailwind.
            </p>
        </section>

        <!-- Our Story -->
        <section class="flex flex-col items-center gap-12 md:flex-row">
            <div class="md:w-1/2">
                <h2 class="text-primary-500 text-3xl font-bold">Our Story</h2>
                <p class="text-surface-500 dark:text-surface-400 my-4">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought
                    to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    It usually begins with:
                </p>
                <blockquote
                    class="text-surface-500 dark:text-surface-400 border-primary-500 my-4 border-l-4 pl-2 italic">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.”
                </blockquote>
                <p class="text-surface-500 dark:text-surface-400">
                    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page,
                    etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages
                    with meaningless filler text can be very useful when the focus is meant to be on design, not
                    content.
                </p>
            </div>
            <div class="md:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="AI Neural Network Visualization"
                    class="h-auto w-full rounded-lg shadow-xl" />
            </div>
        </section>

        <!-- Our Mission -->
        <section class="bg-surface-50 dark:bg-surface-900/60 rounded-xl p-8 text-center">
            <h2 class="text-primary-500 mb-6 text-3xl font-bold">Our Mission & Values</h2>
            <p class="text-surface-500 mb-8 text-xl">
                "To design, build, and maintain website templates, ensuring they are functional, user friendly, and
                visually appealing."
            </p>
            <div class="flex flex-wrap justify-center gap-8">
                <Card
                    class="group w-full sm:w-64"
                    v-animateonscroll.once="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-500',
                    }">
                    <template #header>
                        <div
                            class="group-hover:text-primary mt-4 group-hover:scale-110">
                            <Lightbulb :size="64" class="mx-auto" />
                        </div>
                    </template>
                    <template #content>
                        <h3 class="text-dark mb-2 font-bold">Innovation</h3>
                        <p class="text-surface-500">Always thriving on new ideas and technologies.</p>
                    </template>
                </Card>
                <Card
                    class="group w-full sm:w-64"
                    v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 animate-duration-500' }">
                    <template #header>
                        <div
                            class="group-hover:text-primary mt-4 group-hover:scale-110">
                            <FileBadge :size="64" class="mx-auto" />
                        </div>
                    </template>
                    <template #content>
                        <h3 class="text-dark mb-2 font-bold">Integrity</h3>
                        <p class="text-surface-500">
                            Every system undergoes rigorous ethical review before deployment.
                        </p>
                    </template>
                </Card>
                <Card
                    class="group w-full sm:w-64"
                    v-animateonscroll.once="{
                        enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-500',
                    }">
                    <template #header>
                        <div
                            class="group-hover:text-primary mt-4 group-hover:scale-110">
                            <Handshake :size="64" class="mx-auto" />
                        </div>
                    </template>
                    <template #content>
                        <h3 class="text-dark mb-2 font-bold">Teamwork</h3>
                        <p class="text-surface-500">
                            Strong teamwork ensures smooth workflows and successful outcomes.
                        </p>
                    </template>
                </Card>
            </div>
        </section>

        <!-- Our Team -->
        <section>
            <h2 class="text-primary-500 mb-12 text-center text-3xl font-bold">Our Team</h2>
            <div class="mx-auto grid max-w-max grid-cols-1 gap-8 md:grid-cols-3">
                <Card
                    v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-500' }">
                    <template #header>
                        <div class="flex items-end justify-center rounded-t-xl border-b bg-white px-4 pt-4">
                            <img
                                alt="User"
                                class="max-h-80 w-full object-contain"
                                src="../assets/about/silhouette-male-2.svg" />
                        </div>
                    </template>
                    <template #title>Dr. John Doe</template>
                    <template #subtitle>CEO & Co-Founder</template>
                </Card>
                <Card
                    v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">
                    <template #header>
                        <div class="flex items-end justify-center rounded-t-xl border-b bg-white px-4 pt-4">
                            <img
                                alt="User"
                                class="max-h-80 w-full object-contain"
                                src="../assets/about/silhouette-female-1.svg" />
                        </div>
                    </template>
                    <template #title>Jenny Doe</template>
                    <template #subtitle>Chief Technology Officer</template>
                </Card>
                <Card
                    v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-500' }">
                    <template #header>
                        <div class="flex items-end justify-center rounded-t-xl border-b bg-white px-4 pt-4">
                            <img
                                alt="User"
                                class="max-h-80 w-full object-contain"
                                src="../assets/about/silhouette-female-2.svg" />
                        </div>
                    </template>
                    <template #title>Dr. Kwame Nkosi</template>
                    <template #subtitle>Sales & Marketing</template>
                </Card>
            </div>
        </section>

        <!-- Skills -->
        <section class="flex w-full flex-col items-center">
            <h2 class="text-primary-500 mb-6 text-3xl font-bold">Our Skills</h2>
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="bg-surface-100 dark:bg-surface-900 flex transform flex-col items-center rounded-xl p-4 shadow-lg transition hover:scale-120"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-b-20 animate-duration-200',
                    }">
                    <img :src="skill.image" :alt="skill.name" class="mb-2 h-12 w-12" />
                    <span class="text-surface-500">{{ skill.name }}</span>
                </div>
            </div>
        </section>

        <!-- News Letter -->
        <section
            class="bg-surface-50 dark:bg-surface-900/60 mx-auto flex flex-col rounded-md p-2 shadow-md md:max-w-6xl md:flex-row lg:p-6">
            <div class="w-full p-5 md:w-2/6">
                <img src="../assets/about/newsletter.svg" alt="Newsletter" class="h-full w-full" />
            </div>
            <div class="flex w-full flex-col items-center justify-center gap-6 p-5 md:w-4/6">
                <h2 class="text-primary text-3xl font-bold uppercase lg:text-5xl">Latest News</h2>
                <p class="text-muted max-w-2xl text-xl">Subscribe with your email to get the latest updates.</p>
                <div
                    class="bg-surface-100 dark:bg-surface-900 flex max-w-max flex-col gap-2 rounded-md p-4 md:flex-row">
                    <IconField>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputText class="w-[250px]" />
                    </IconField>
                    <Button class="font-bold">Subscribe</Button>
                </div>
            </div>
        </section>
    </main>
</template>
