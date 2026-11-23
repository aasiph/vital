<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3';
import { User, LogOut, LogIn, LayoutDashboard } from '@lucide/vue';
import { ref } from 'vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { MD5 } from '@/helpers';
import { login, logout, dashboard } from '@/routes';
import { edit } from '@/routes/profile';

const page = usePage();
const menu = ref();
const { isCurrentUrl } = useCurrentUrl();
const items = ref([
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        command: () => {
            router.get(dashboard().url);
        },
    },
    {
        label: 'Profile',
        icon: User,
        command: () => {
            router.get(edit().url);
        },
    },
    { separator: true },
    {
        label: 'Log Out',
        icon: LogOut,
        command: () => {
            router.post(logout().url);
        },
    },
]);

const toggle = (event: any) => {
    menu.value.toggle(event);
};

function gravatar_url() {
    const fallbackUrl = `https://ui-avatars.com/api/${encodeURIComponent(page.props.auth.user.name)}/32/848884/ffffff`;

    return `https://www.gravatar.com/avatar/${MD5(page.props.auth.user.email)}?s=32&d=${encodeURIComponent(fallbackUrl)}`;
}
</script>

<template>
    <div v-if="page.props.auth.user" class="flex">
        <Button
            type="button"
            severity="secondary"
            @click="toggle"
            size="small"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            class="!border-surface-200 dark:!border-surface-700 hover:!border-surface-400 hover:dark:!border-surface-500 h-8 w-8 rounded-md !p-0">
            <img
                :alt="page.props.auth.user.name"
                :src="gravatar_url()"
                class="h-full w-full rounded-md object-contain" />
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
    <div v-else>
        <Link v-if="!isCurrentUrl(login().url)" :href="login().url">
            <Button
                severity="secondary"
                size="small"
                class="!border-surface-200 dark:!border-surface-700 hover:!border-surface-400 hover:dark:!border-surface-500 h-8 w-8">
                <LogIn />
            </Button>
        </Link>
    </div>
</template>
