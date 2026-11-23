<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Mail, MapPin } from '@lucide/vue';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { Autoplay, EffectCube } from 'swiper/modules';
import { onMounted } from 'vue';
import FooterOne from '@/pages/landing/footers/FooterOne.vue';
import HeaderOne from '@/pages/landing/headers/HeaderOne.vue';
import ServiceCard from '@/pages/landing/partials/ServiceCard.vue';
import TrustedClients from '@/pages/landing/partials/TrustedClients.vue';

defineOptions({
    layout: '' as any,
});

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});

const frameworks = [
    {
        name: 'VueJS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        link: 'https://vuejs.org',
    },
    {
        name: 'PrimeVue',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/primeng/primeng-original.svg',
        link: 'https://primevue.org',
    },
    {
        name: 'Inertia',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inertiajs/inertiajs-original.svg',
        link: 'https://inertiajs.com',
    },
    {
        name: 'Tailwind',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        link: 'https://tailwindcss.com',
    },
    {
        name: 'Laravel',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        link: 'https://laravel.com',
    },
    {
        name: 'Node.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        link: 'https://nodejs.org',
    },
];

onMounted(() => {
    const sections = document.querySelectorAll<HTMLElement>('#welcome-page > section');
    const navLi = document.querySelectorAll('ul.landing-nav li');
    window.onscroll = () => {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id')!;
            }
        });
        navLi.forEach((li) => {
            li.classList.remove('active-nav');
            li.classList.add('hover-animation');

            if (li.classList.contains(current)) {
                li.classList.replace('hover-animation', 'active-nav');
            }
        });
    };
    window.scrollTo(0, 1);

    new Swiper('.techSwiper', {
        modules: [Autoplay, EffectCube],
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        effect: 'cube',
        cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
    });
});
</script>
<style>
.bg-lights {
    background-image: url('../../assets/pbg.jpg');
}

/*.swiper {
    width: 300px;
    height: 50px;
}*/
</style>
<template>
    <Head title="Welcome" />
    <div class="flex min-h-dvh flex-col items-center">
        <HeaderOne />
        <main id="welcome-page" class="flex w-full flex-col gap-10">
            <!-- Hero  -->
            <section
                id="hero"
                class="relative flex w-full flex-col bg-surface-50 p-4 pt-[6rem] xl:min-h-dvh dark:bg-surface-900">
                <div
                    class="relative flex min-h-160 flex-col bg-surface-50 lg:container lg:mx-auto lg:min-h-0 dark:bg-surface-900">
                    <div class="flex h-full flex-1 flex-col justify-center md:justify-normal lg:flex-row">
                        <div class="relative z-20 flex flex-1 items-center justify-center">
                            <div class="flex h-full flex-col items-center justify-center">
                                <div class="w-full max-w-2xl p-4 text-center lg:text-left xl:p-0">
                                    <h1
                                        class="text-4xl leading-tight! font-bold text-surface-0 lg:text-surface-900 xl:text-5xl dark:text-surface-0">
                                        <span class="block">Accelerate web development</span>
                                        <span class="block text-primary">with leading technologies.</span>
                                    </h1>
                                    <div class="swiper techSwiper my-4 h-14 max-w-max text-center">
                                        <div class="swiper-wrapper text-3xl font-bold text-white">
                                            <div
                                                class="swiper-slide rounded-lg border-2 border-emerald-500 p-2 text-emerald-500">
                                                Vue.js(Primevue)
                                            </div>
                                            <div
                                                class="swiper-slide rounded-lg border-2 border-indigo-500 p-2 text-indigo-500">
                                                Inertia
                                            </div>
                                            <div
                                                class="swiper-slide rounded-lg border-2 border-cyan-500 p-2 text-cyan-500">
                                                Tailwind
                                            </div>
                                            <div
                                                class="swiper-slide rounded-lg border-2 border-red-500 p-2 text-red-500">
                                                Laravel
                                            </div>
                                        </div>
                                    </div>

                                    <p
                                        class="mb-4 max-w-xl text-xl leading-normal text-surface-0/90 lg:max-w-none lg:text-surface-700 dark:text-surface-200">
                                        VITAL is available free on github. Click on the below button to visit the
                                        repository.
                                    </p>

                                    <div class="flex items-center justify-center gap-4 lg:justify-start">
                                        <Button label="Download for free" type="button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-0 flex-1 lg:relative lg:inset-auto">
                            <div class="absolute inset-0 z-10 bg-surface-900/60 lg:hidden dark:bg-surface-900/80" />
                            <img
                                src="@/assets/hero.jpg"
                                alt="hero-1"
                                class="h-full w-full object-cover xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="mx-auto flex w-full max-w-[1070px] flex-col items-center px-2 md:px-10">
                <div class="z-9 mb-10 text-center text-3xl text-surface-400 dark:text-surface-600">
                    Trusted by many clients across the world
                </div>
                <TrustedClients />
            </section>

            <!-- Services  -->
            <section
                id="services"
                class="bg-radial from-primary-100 to-transparent to-50% xl:min-h-dvh dark:from-surface-700">
                <div class="container mx-auto px-4">
                    <h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Our Services</h2>
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 xl:grid-cols-3">
                        <ServiceCard image="../../../assets/services/webdev.jpg" title="Website Development">
                            <template #card-content>
                                <p class="m-0">
                                    Building websites from scratch, including front-end (what users see) and back-end
                                    (server-side) development.
                                </p>
                            </template>
                        </ServiceCard>
                        <ServiceCard image="../../../assets/services/ecom.jpg" title="E-commerce Solutions">
                            <template #card-content>
                                <p class="m-0">
                                    Developing online stores with features like shopping carts, payment gateways, and
                                    product catalogs.
                                </p>
                            </template>
                        </ServiceCard>
                        <ServiceCard image="../../../assets/services/cms.jpg" title="Content Management Systems">
                            <template #card-content>
                                <p class="m-0">
                                    Building tailored systems for managing website content, allowing for easy updates
                                    and modifications.
                                </p>
                            </template>
                        </ServiceCard>
                        <ServiceCard image="../../../assets/services/mobileapp.jpg" title="Mobile App Development">
                            <template #card-content>
                                <p class="m-0">
                                    Designing and developing mobile applications that can be accessed through
                                    smartphones and tablets.
                                </p>
                            </template>
                        </ServiceCard>
                        <ServiceCard image="../../../assets/services/uiux.jpg" title="UX/UI Design">
                            <template #card-content>
                                <p class="m-0">
                                    Creating user-friendly interfaces that enhance the overall user experience.
                                </p>
                            </template>
                        </ServiceCard>
                        <ServiceCard image="../../../assets/services/mainsupport.jpg" title="Maintenance Support">
                            <template #card-content>
                                <p class="m-0">
                                    Providing ongoing support and updates to ensure websites remain functional and
                                    secure.
                                </p>
                            </template>
                        </ServiceCard>
                    </div>
                    <div class="mt-4 lg:mt-8 text-center">
                        <Button
                            as="a"
                            href="/pages/services"
                            label="More About Services"
                            type="button" />
                    </div>
                </div>
            </section>

            <!-- Technology Parallax  -->
            <section
                id="technology"
                class="align-center bg-lights bg-fill relative flex w-full justify-center bg-fixed bg-center bg-no-repeat p-5 md:bg-cover md:p-10 xl:min-h-dvh">
                <div class="absolute inset-0 h-full w-full bg-gray-900/70"></div>
                <div class="align-center relative mx-auto flex flex-col justify-center text-white md:p-18 xl:container">
                    <div class="mb-[3rem] flex w-full flex-col items-center gap-4">
                        <span class="text-5xl uppercase md:text-7xl">Technology</span>
                        <span class="text-3xl md:text-4xl">Frameworks, Libraries & Tools Used</span>
                    </div>
                    <div class="flex flex-wrap justify-center gap-6">
                        <div v-for="framework of frameworks" :key="framework.name"
                            class="w-[210px] rounded-lg border border-surface-500 bg-surface-500/40 p-2 sm:w-[250px] sm:p-5">
                            <div class="flex items-center gap-1 sm:gap-3">
                                <div
                                    class="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/90 p-2 sm:!size-12">
                                    <img :src="framework.image" :alt="framework.name" class="size-full" />
                                </div>
                                <div>
                                    <h1 class="text-2xl uppercase sm:text-4xl">
                                        {{ framework.name }}
                                    </h1>
                                    <Button
                                        link
                                        as="a"
                                        :label="framework.link"
                                        :href="framework.link"
                                        target="_blank"
                                        rel="noopener"
                                        class="!p-0.5 !text-primary-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- about us  -->
            <section id="about" class="">
                <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:py-16">
                    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div class="max-w-lg">
                            <h2 class="text-center text-3xl font-bold xl:text-5xl">About Us</h2>
                            <p class="mt-4 text-lg text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat
                                hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris
                                eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet
                                nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
                            </p>
                            <div class="mt-8 text-center">
                                <Button
                                    as="a"
                                    href="/pages/about"
                                    label="Know more
                                    About Us"
                                    type="button" />
                                <!--                                <SimpleLink url="/pages/about" class="!text-lg">Know more-->
                                <!--                                    About Us-->
                                <!--                                </SimpleLink>-->
                            </div>
                        </div>
                        <div class="mt-0">
                            <img
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us"
                                class="rounded-2xl object-cover shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- why us -->
            <section class="">
                <div class="flex justify-center text-center text-3xl font-bold">Why Us?</div>
                <div class="container mx-auto p-5">
                    <div class="flex flex-wrap justify-center gap-x-20 gap-y-5 text-center lg:gap-x-40">
                        <div class="flex transform flex-col items-center transition duration-200 hover:scale-110">
                            <img src="../../assets/welcome/Tech.svg" alt="Tech" class="mb-3 size-32" />
                            <h2 class="title-font font-regular text-muted text-2xl">Latest Technology</h2>
                        </div>
                        <div class="flex transform flex-col items-center transition duration-200 hover:scale-110">
                            <img src="../../assets/welcome/reasonable.svg" alt="Reasonable" class="mb-3 size-32" />
                            <h2 class="title-font font-regular text-muted text-2xl">Reasonable Rates</h2>
                        </div>
                        <div class="flex transform flex-col items-center transition duration-200 hover:scale-110">
                            <img src="../../assets/welcome/fastservice.svg" alt="Fast Service" class="mb-3 size-32" />
                            <h2 class="title-font font-regular text-muted text-2xl">Fast Service</h2>
                        </div>
                        <div class="flex transform flex-col items-center transition duration-200 hover:scale-110">
                            <img src="../../assets/welcome/expert.svg" alt="Expert" class="mb-3 size-32" />
                            <h2 class="title-font font-regular text-muted text-2xl">Industry Expert</h2>
                        </div>
                    </div>
                </div>
            </section>

            <!-- contact us -->
            <section id="contact" class="relative py-20 md:py-[120px]">
                <div class="absolute top-0 left-0 -z-1 h-full w-full dark:bg-surface-800"></div>
                <div
                    class="absolute top-0 left-0 -z-1 h-1/2 w-full bg-primary-100 lg:h-[45%] xl:h-1/2 dark:bg-surface-700"></div>
                <div class="container mx-auto px-4">
                    <div class="-mx-4 flex flex-wrap items-center">
                        <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
                            <div>
                                <div class="mb-12 lg:mb-[150px]">
                                    <h2 class="text-5xl font-semibold">CONTACT US</h2>
                                    <span class="mb-6 block text-base font-medium">Let's talk about your problem.</span>
                                </div>
                                <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
                                    <div class="mb-8 flex w-[330px] max-w-full">
                                        <div class="mr-6 text-primary">
                                            <MapPin :size="40" absoluteStrokeWidth />
                                        </div>
                                        <div>
                                            <h5 class="mb-[18px] text-2xl font-semibold">Our Location</h5>
                                            <p class="text-lg">
                                                123 Business Ave,
                                                <br />
                                                San Francisco, CA 94107
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-8 flex w-[330px] max-w-full">
                                        <div class="mr-6 text-primary">
                                            <Mail :size="40" absoluteStrokeWidth />
                                        </div>
                                        <div>
                                            <h5 class="mb-[18px] text-2xl font-semibold">How Can We Help?</h5>
                                            <p class="text-lg">info@yourdomain.com</p>
                                            <p class="mt-1 text-lg">contact@yourdomain.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
                            <div
                                class="rounded-lg bg-white px-8 py-10 shadow sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px] dark:bg-surface-900">
                                <h3 class="mb-8 text-2xl font-semibold md:text-[28px] md:leading-[1.42]">
                                    Send us a Message
                                </h3>
                                <form>
                                    <div class="mb-[22px]">
                                        <label for="fullName" class="mb-4 block text-sm">Full Name*</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="John Doe"
                                            class="w-full border-0 border-b bg-transparent pb-3 focus:border-primary focus:outline-hidden dark:border-surface-800" />
                                    </div>
                                    <div class="mb-[22px]">
                                        <label for="email" class="mb-4 block text-sm">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="example@yourmail.com"
                                            class="w-full border-0 border-b bg-transparent pb-3 focus:border-primary focus:outline-hidden dark:border-surface-800" />
                                    </div>
                                    <div class="mb-[22px]">
                                        <label for="phone" class="mb-4 block text-sm">Phone*</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="+885 1254 5211 552"
                                            class="w-full border-0 border-b bg-transparent pb-3 focus:border-primary focus:outline-hidden dark:border-surface-800" />
                                    </div>
                                    <div class="mb-[30px]">
                                        <label for="message" class="mb-4 block text-sm">Message*</label>
                                        <textarea
                                            name="message"
                                            rows="1"
                                            placeholder="type your message here"
                                            class="w-full resize-none border-0 border-b bg-transparent pb-3 focus:border-primary focus:outline-hidden dark:border-surface-800"></textarea>
                                    </div>
                                    <div class="mb-0">
                                        <Button label="Send" class="px-10!" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <FooterOne class="w-full" />
    </div>
</template>
