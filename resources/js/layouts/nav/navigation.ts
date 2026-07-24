import {
    AppWindow, ChartArea, CircleEllipsis,
    File,
    FolderTree,
    Grid3x2,
    Home, Images,
    Info, Layers2,
    LayoutDashboard,
    Logs,
    Menu, MessageSquareText,
    PanelsTopLeft,
    Route,
    ShieldX,
    Square,
    SquarePen,
    StickyNote,
    StickyNoteX,
    TableProperties, Waypoints
} from '@lucide/vue';
import { home, dashboard } from "@/routes";
import * as pages from "@/routes/pages";
import * as ui from "@/routes/ui/index";
import { UiComponents } from '@/types/typings';
import type { MenuItem} from '@/types/typings';

export const NavigationLinks: MenuItem[] = [
    {
        title: 'Home',
        icon: Home,
        path: home().url,
    },
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: dashboard().url,
    },
    {
        title: 'Pages',
        path: '',
        header: true,
        children: [
            {
                title: 'About',
                icon: Info,
                path: pages.about().url,
            },
            {
                title: 'Routing',
                icon: Route,
                path: 'pages',
                expanded: false,
                children: [
                    {
                        title: 'Route Page 1',
                        icon: StickyNote,
                        path: pages.pageone().url,
                    },
                    {
                        title: 'Route Page 2',
                        icon: StickyNote,
                        path: pages.pagetwo().url,
                    },
                ],
            },
            {
                title: 'Error',
                icon: ShieldX,
                path: 'error',
                expanded: false,
                children: [
                    {
                        title: 'Common',
                        icon: StickyNoteX,
                        path: pages.error().url,
                    },
                    {
                        title: '400',
                        icon: StickyNoteX,
                        path: pages.error400().url,
                    },
                    {
                        title: '403',
                        icon: StickyNoteX,
                        path: pages.error403().url,
                    },
                    {
                        title: '404',
                        icon: StickyNoteX,
                        path: pages.error404().url,
                    },
                    {
                        title: '500',
                        icon: StickyNoteX,
                        path: pages.error500().url,
                    },
                ],
            },
        ],
    },
    {
        title: 'UI Components',
        path: '',
        header: true,
        children: [
            {
                title: 'Form Layout',
                icon: PanelsTopLeft,
                path: ui.component({ query: { uic: UiComponents.Form } }).url,
            },
            {
                title: 'Input',
                icon: SquarePen,
                path: ui.component({ query: { uic: UiComponents.Input } }).url,
            },
            {
                title: 'Button',
                icon: Square,
                path: ui.component({ query: { uic: UiComponents.Button } }).url,
            },
            {
                title: 'Table',
                icon: Grid3x2,
                path: ui.component({ query: { uic: UiComponents.Table } }).url,
            },
            {
                title: 'List',
                icon: TableProperties,
                path: ui.component({ query: { uic: UiComponents.List } }).url,
            },
            {
                title: 'Tree',
                icon: FolderTree,
                path: ui.component({ query: { uic: UiComponents.Tree } }).url,
            },
            {
                title: 'Panel',
                icon: AppWindow,
                path: ui.component({ query: { uic: UiComponents.Panel } }).url,
            },
            {
                title: 'Overlay',
                icon: Layers2,
                path: ui.component({ query: { uic: UiComponents.Overlay } }).url,
            },
            {
                title: 'Media',
                icon: Images,
                path: ui.component({ query: { uic: UiComponents.Media } }).url,
            },
            {
                title: 'Menu',
                icon: Menu,
                path: ui.component({ query: { uic: UiComponents.Menu } }).url,
            },
            {
                title: 'Message',
                icon: MessageSquareText,
                path: ui.component({ query: { uic: UiComponents.Message } }).url,
            },
            {
                title: 'File',
                icon: File,
                path: ui.component({ query: { uic: UiComponents.File } }).url,
            },
            {
                title: 'Chart',
                icon: ChartArea,
                path: ui.component({ query: { uic: UiComponents.Chart } }).url,
            },
            {
                title: 'Timeline',
                icon: Waypoints,
                path: ui.component({ query: { uic: UiComponents.Timeline } }).url,
            },
            {
                title: 'Misc',
                icon: CircleEllipsis,
                path: ui.component({ query: { uic: UiComponents.Misc } }).url,
            },
        ],
    },
    {
        title: 'Nested Menu',
        icon: Logs,
        path: 'nested',
        expanded: false,
        children: [
            {
                title: 'Level 101',
                path: '',
                expanded: false,
                children: [
                    {
                        title: 'Level 201',
                        path: '',
                    },
                    {
                        title: 'Level 202',
                        path: '',
                        expanded: false,
                        children: [
                            {
                                title: 'Level 301',
                                path: '',
                                expanded: false,
                                children: [
                                    {
                                        title: 'Level 401',
                                        path: '',
                                    },

                                    {
                                        title: 'Level 402',
                                        path: '',
                                    },
                                ],
                            },
                            {
                                title: 'Level 302',
                                path: '',
                            },
                        ],
                    },
                    {
                        title: 'Level 203',
                        path: '',
                    },
                ],
            },
            {
                title: 'Level 102',
                path: '',
            },
        ],
    },
];
