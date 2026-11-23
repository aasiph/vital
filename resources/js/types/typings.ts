import type { LucideIcon } from '@lucide/vue';

export enum Version {
    MAJOR = 1.0,
}

export type AppSettings = {
    version: Version.MAJOR;
};

export interface MenuItem {
    title: string;
    icon?: LucideIcon;
    path: string;
    external?: boolean;
    children?: MenuItem[];
    expanded?: boolean;
    header?: boolean;
}

export enum UiComponents {
    Form = 'FormLayout',
    Input = 'UiInput',
    Button = 'UiButton',
    Table = 'UiTable',
    List = 'UiList',
    Tree = 'UiTree',
    Panel = 'UiPanels',
    Overlay = 'UiOverlay',
    Media = 'UiMedia',
    Menu = 'UiMenu',
    Message = 'UiMessages',
    File = 'UiFile',
    Chart = 'UiChart',
    Timeline = 'UiTimeline',
    Misc = 'UiMisc',
}
