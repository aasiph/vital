<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { ChevronRight, Diamond, Folders, ChevronLeft } from '@lucide/vue'
import { Button } from 'primevue';
import Ripple from "primevue/ripple";
import type { VNode} from "vue";
import { computed, h, reactive, ref, withDirectives, Transition } from "vue";
import { useAppearance } from "@/composables/useAppearance";
import Logo from '@/icons/Logo.vue';
import { NavigationLinks } from "@/layouts/nav/navigation";
import { home } from '@/routes';
import type { MenuItem } from "@/types";

const { toggleMenu, layoutState } = useAppearance();
const navLinks: MenuItem[] = reactive(NavigationLinks);

const sidebar = ref(null);
const page = usePage();

function menuToggle(): void {
    if (layoutState.staticMenuMobileActive || layoutState.overlayMenuActive) {
        toggleMenu();
    }
}

function toggleChevron(e: Event) {
    const el: HTMLElement = e.currentTarget as HTMLElement;

    if(el.children[2].classList.contains('rotateChevDown')) {
        el.children[2].classList.remove('rotateChevDown');
        el.children[2].classList.add('rotateChevRight');
    } else {
        el.children[2].classList.remove('rotateChevRight');
        el.children[2].classList.add('rotateChevDown');
    }
}

function makeMenu(menu: MenuItem[], level: number): VNode {
    const subMenuClass = level > 0 ? 'pl-3' : '';

    return h(
        'ul',
        {
            class: ['list-none', subMenuClass],
        },
        menu.map((item: MenuItem) => makeMenuItem(item, item.path, level))
    );
}

function checkActiveRoute(path: string): boolean {
    const { uic } = Object.fromEntries(new URLSearchParams(page.url.split('?')[1]))

    if (path.includes(uic)) {
        return true;
    }
    // console.log("path", path);

    return page.url === path;
}

function makeMenuItem(menu: MenuItem, path: string, level: number) {
    if (menu.header) {
        return h('li', [
            h('span', {
                class: 'block uppercase ml-2 py-3 pl-1 font-mono dark:text-surface-300 text-surface-700 text-sm font-semibold leading-tight tracking-widest',
                innerHTML: menu.title,
            }),
            makeMenu(menu.children!, level + 1),
        ]);
    }

    const menuitemClass: string =
        'flex gap-1 items-center cursor-pointer p-2 dark:text-surface-300 text-surface-700 hover:bg-surface-200 dark:hover:bg-surface-800';

    const activeMenu = path ? ref(checkActiveRoute(path)) : ref(false);
    const active_menu = computed(() => ({
        'bg-surface-200 dark:bg-surface-700 border-y border-primary/50': activeMenu.value,
    }));

    const elprops = {
        href: path,
        class: [menuitemClass, active_menu.value],
    };

    if (menu.external === true) {
        Object.assign(elprops, {
            target: '_blank',
        });
    }

    const child: VNode[] = [];

    if (menu.icon) {
        child.push(h(menu.icon, { size: 20, 'stroke-width': 1 }))
    } else {
        const mIcon = menu.children ? Folders : Diamond;
        child.push(h(mIcon, { size: 20, 'stroke-width': 1 }));
    }

    child.push(h('span', { class: '', innerHTML: menu.title }));

    if (menu.children) {
        const itemlink = () =>
            withDirectives(
                h(
                    'a',
                    {
                        class: [menuitemClass, active_menu.value],
                        onClick: (e) => {
                            menu.expanded = !menu.expanded;
                            toggleChevron(e);
                        },
                    },
                    [
                        ...child,
                        h(ChevronRight, { class: ["ml-auto", menu.expanded ? "rotateChevDown" : "rotateChevRight"], size: 20, 'stroke-width': 1 })
                    ]
                ),
                [[Ripple]]
            );
        const transitionMenu = h(Transition, { name: 'submenu' }, () =>
            menu.expanded ? makeMenu(menu.children!, level + 1) : null
        );

        return h('li', [h(itemlink), transitionMenu]);
    } else {
        const itemlink = () =>
            withDirectives(
                h(Link, elprops, () => child),
                [[Ripple]]
            );

        return h('li', { onClick: () => menuToggle() }, h(itemlink));
    }
}
const toggleButtonNode = h(Button, {
        class: 'lg:invisible',
        severity: 'secondary',
        rounded: true,
        iconOnly: true,
        onClick() {
            menuToggle();
        },
    },
    () => h(ChevronLeft)
);
const appLogo = h(Logo, { class: 'w-full h-8 w-8 dark:fill-surface-100' });
const appName = h('span', { class: 'font-bold text-xl'}, page.props.name);
const homeRouteNode = h(Link, { href: home().url, class: 'flex items-center gap-2' }, () => [appLogo, appName]);
const toggleMenuNode = h(
    'div',
    {
        class: 'flex items-center justify-between h-[4rem] px-4 py-4 shrink-0 lg:hidden shadow-xs dark:shadow-surface-700',
    },
    [homeRouteNode, toggleButtonNode]
);
const menuWrapperNode = h(
    'div',
    {
        class: 'flex flex-col h-full',
    },
    [toggleMenuNode, makeMenu(navLinks, 0)]
);

const sbroot = () =>
    h(
        'aside',
        {
            ref: sidebar,
            class: [
                'layout-sidebar fixed flex flex-col left-0 top-[4rem] z-999 w-[20rem] h-[calc(100dvh-4rem)] overflow-y-auto border-r dark:border-r-surface-800 border-t dark:border-t-surface-800 bg-surface-50 dark:bg-surface-900 transition-all duration-200 ease-in-out',
            ],
        },
        menuWrapperNode
    );
</script>
<style lang="postcss">
@keyframes slidedown {
    0% {
        max-height: 0;
    }
    100% {
        max-height: max-content;
    }
}

@keyframes slideup {
    0% {
        max-height: 1000px;
    }
    100% {
        max-height: 0;
    }
}

.rotateChevRight {
    transform: rotate(0deg);
    transition: all ease-in 200ms;
}

.rotateChevDown {
    transform: rotate(90deg);
    transition: all ease-in 200ms;
}

.slidedown {
    animation: slidedown 0.2s ease-in-out;
}

.slideup {
    animation: slideup 0.2s cubic-bezier(0, 1, 0, 1);
}

.layout-ripple-disabled [data-pc-name='ripple'] {
    display: none !important;
}

.layout-ripple-disabled [data-pc-name='ripple'] {
    display: none !important;
}

.submenu-enter-from,
.submenu-leave-to {
    max-height: 0;
}

.submenu-enter-to,
.submenu-leave-from {
    max-height: 1000px;
}

.submenu-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.submenu-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
</style>
<template>
    <sbroot />
</template>
