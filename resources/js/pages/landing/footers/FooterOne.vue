<script setup lang="ts">
import FacebookLogo from '@/icons/FacebookLogo.vue';
import InstagramLogo from '@/icons/InstagramLogo.vue';
import LinkedInLogo from '@/icons/LinkedInLogo.vue';
import Logo from '@/icons/Logo.vue';
import TwitterLogo from '@/icons/TwitterLogo.vue';
import { usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const app_name = ref(usePage().props.app_name);
</script>
<template>
    <footer class="bg-surface-50 dark:bg-surface-900 py-6">
        <div class="container mx-auto px-4">
            <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <!-- Company Info -->
                <div class="space-y-4">
                    <div class="flex items-center">
                        <Logo class="fill-primary h-10 w-auto" />
                        <span class="ml-2 text-xl font-bold">{{ app_name }}</span>
                    </div>
                    <p class="text-surface-500 dark:text-surface-400">
                        Building innovative solutions for the modern world.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://facebook.com" target="_blank">
                            <FacebookLogo
                                class="fill-surface-500 h-6 w-auto transition hover:scale-125 hover:fill-[#1877F2]" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <TwitterLogo
                                class="fill-surface-500 h-6 w-auto transition hover:scale-125 hover:fill-[#1DA1F2]" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <InstagramLogo
                                class="fill-surface-500 h-6 w-auto transition hover:scale-125 hover:fill-[#E4405F]" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <LinkedInLogo
                                class="fill-surface-500 h-6 w-auto transition hover:scale-125 hover:fill-[#0A66C2]" />
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="foot-links">Home</a></li>
                        <li><a href="#" class="foot-links">About Us</a></li>
                        <li><a href="#" class="foot-links">Services</a></li>
                        <li><a href="#" class="foot-links">Pricing</a></li>
                        <li><a href="#" class="foot-links">Blog</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold">Services</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="foot-links">Web Development</a></li>
                        <li><a href="#" class="foot-links">Mobile Apps</a></li>
                        <li><a href="#" class="foot-links">UI/UX Design</a></li>
                        <li><a href="#" class="foot-links">Digital Marketing</a></li>
                        <li><a href="#" class="foot-links">Cloud Solutions</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold">Contact Us</h3>
                    <address class="text-surface-500 dark:text-surface-400 not-italic">
                        <p>123 Business Ave</p>
                        <p>San Francisco, CA 94107</p>
                        <p class="mt-2">
                            Email:
                            <a href="mailto:info@company.com" class="foot-links">info@company.com</a>
                        </p>
                        <p>
                            Phone:
                            <a href="tel:+11234567890" class="foot-links">+1 (123) 456-7890</a>
                        </p>
                    </address>
                </div>
            </div>

            <div
                class="border-surface-800 flex flex-col items-center justify-between border-t pt-6 text-sm md:flex-row md:text-lg">
                <p class="text-surface-500 dark:text-surface-400 mb-4 md:mb-0">
                    ©
                    {{ new Date().getFullYear() }}
                    <span class="text-primary">{{ app_name }}</span>
                    . All rights reserved.
                </p>
                <div class="flex space-x-6">
                    <a href="#" class="foot-links">Privacy Policy</a>
                    <a href="#" class="foot-links">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>
