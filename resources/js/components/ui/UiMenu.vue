<script setup>
import { h, ref } from 'vue';
import {
    Cable,
    CircleCheckBig, Cog,
    Compass, Container,
    Copy, Home, LogOut, MapPinned, Pencil,
    Plus, ReceiptText, RefreshCcw, Search, Shirt, ShoppingCart, Sofa, SportShoe, SquareChartGantt, SquareArrowDown,
    TableProperties, Trash, User, UserCog, UserPen,
    UserPlus
} from '@lucide/vue';


const menu = ref(null);
const contextMenu = ref(null);

const nestedMenuitems = ref([
    {
        label: 'Customers',
        icon: () => h(TableProperties),
        items: [
            {
                label: 'New',
                icon: () => h(UserPlus),
                items: [
                    {
                        label: 'Customer',
                        icon: () => h(Plus),
                    },
                    {
                        label: 'Duplicate',
                        icon: () => h(Copy),
                    },
                ],
            },
            {
                label: 'Edit',
                icon: () => h(UserPen),
            },
        ],
    },
    {
        label: 'Orders',
        icon: () => h(ShoppingCart),
        items: [
            {
                label: 'View',
                icon: () => h(SquareChartGantt),
            },
            {
                label: 'Search',
                icon: () => h(Search),
            },
        ],
    },
    {
        label: 'Shipments',
        icon: () => h(Container),
        items: [
            {
                label: 'Tracker',
                icon: () => h(Compass),
            },
            {
                label: 'Map',
                icon: () => h(MapPinned),
            },
            {
                label: 'Manage',
                icon: () => h(Pencil),
            },
        ],
    },
    {
        label: 'Profile',
        icon: () => h(User),
        items: [
            {
                label: 'Settings',
                icon: () => h(UserCog),
            },
            {
                label: 'Billing',
                icon: () => h(ReceiptText),
            },
        ],
    },
    {
        label: 'Quit',
        icon: () => h(LogOut),
    },
]);
const breadcrumbHome = ref({ icon: () => h(Home), to: '/' });
const breadcrumbItems = ref([
    { label: 'Computer' },
    { label: 'Notebook' },
    { label: 'Accessories' },
    { label: 'Backpacks' },
    { label: 'Item' },
]);
const tieredMenuItems = ref([
    {
        label: 'Customers',
        icon: () => h(TableProperties),
        items: [
            {
                label: 'New',
                icon: () => h(UserPlus),
                items: [
                    {
                        label: 'Customer',
                        icon: () => h(UserPlus),
                    },
                    {
                        label: 'Duplicate',
                        icon: () => h(UserPlus),
                    },
                ],
            },
            {
                label: 'Edit',
                icon: () => h(UserPlus),
            },
        ],
    },
    {
        label: 'Orders',
        icon: () => h(ShoppingCart),
        items: [
            {
                label: 'View',
                icon: () => h(SquareChartGantt),
            },
            {
                label: 'Search',
                icon: () => h(Search),
            },
        ],
    },
    {
        label: 'Shipments',
        icon: () => h(Container),
        items: [
            {
                label: 'Tracker',
                icon: () => h(Compass),
            },
            {
                label: 'Map',
                icon: () => h(MapPinned),
            },
            {
                label: 'Manage',
                icon: () => h(Pencil),
            },
        ],
    },
    {
        label: 'Profile',
        icon: () => h(User),
        items: [
            {
                label: 'Settings',
                icon: () => h(UserCog),
            },
            {
                label: 'Billing',
                icon: () => h(ReceiptText),
            },
        ],
    },
    {
        separator: true,
    },
    {
        label: 'Quit',
        icon: () => h(LogOut),
    },
]);
const overlayMenuItems = ref([
    {
        label: 'Save',
        icon: () => h(CircleCheckBig),
    },
    {
        label: 'Update',
        icon: () => h(RefreshCcw),
    },
    {
        label: 'Delete',
        icon: () => h(Trash),
    },
    {
        separator: true,
    },
    {
        label: 'Home',
        icon: () => h(Home),
    },
]);
const menuitems = ref([
    {
        label: 'Customers',
        items: [
            {
                label: 'New',
                icon: () => h(Plus),
            },
            {
                label: 'Edit',
                icon: () => h(UserPen),
            },
        ],
    },
    {
        label: 'Orders',
        items: [
            {
                label: 'View',
                icon: () => h(TableProperties),
            },
            {
                label: 'Search',
                icon: () => h(Search),
            },
        ],
    },
]);
const contextMenuItems = ref([
    {
        label: 'Save',
        icon: () => h(CircleCheckBig),
    },
    {
        label: 'Update',
        icon: () => h(RefreshCcw),
    },
    {
        label: 'Delete',
        icon: () => h(Trash),
    },
    {
        separator: true,
    },
    {
        label: 'Options',
        icon: () => h(Cog),
    },
]);
const megamenuItems = ref([
    {
        label: 'Fashion',
        icon: () => h(Shirt),
        items: [
            [
                {
                    label: 'Woman',
                    items: [{ label: 'Woman Item' }, { label: 'Woman Item' }, { label: 'Woman Item' }],
                },
                {
                    label: 'Men',
                    items: [{ label: 'Men Item' }, { label: 'Men Item' }, { label: 'Men Item' }],
                },
            ],
            [
                {
                    label: 'Kids',
                    items: [{ label: 'Kids Item' }, { label: 'Kids Item' }],
                },
                {
                    label: 'Luggage',
                    items: [{ label: 'Luggage Item' }, { label: 'Luggage Item' }, { label: 'Luggage Item' }],
                },
            ],
        ],
    },
    {
        label: 'Electronics',
        icon: () => h(Cable),
        items: [
            [
                {
                    label: 'Computer',
                    items: [{ label: 'Computer Item' }, { label: 'Computer Item' }],
                },
                {
                    label: 'Camcorder',
                    items: [{ label: 'Camcorder Item' }, { label: 'Camcorder Item' }, { label: 'Camcorder Item' }],
                },
            ],
            [
                {
                    label: 'TV',
                    items: [{ label: 'TV Item' }, { label: 'TV Item' }],
                },
                {
                    label: 'Audio',
                    items: [{ label: 'Audio Item' }, { label: 'Audio Item' }, { label: 'Audio Item' }],
                },
            ],
            [
                {
                    label: 'Sports.7',
                    items: [{ label: 'Sports.7.1' }, { label: 'Sports.7.2' }],
                },
            ],
        ],
    },
    {
        label: 'Furniture',
        icon: () => h(Sofa),
        items: [
            [
                {
                    label: 'Living Room',
                    items: [{ label: 'Living Room Item' }, { label: 'Living Room Item' }],
                },
                {
                    label: 'Kitchen',
                    items: [{ label: 'Kitchen Item' }, { label: 'Kitchen Item' }, { label: 'Kitchen Item' }],
                },
            ],
            [
                {
                    label: 'Bedroom',
                    items: [{ label: 'Bedroom Item' }, { label: 'Bedroom Item' }],
                },
                {
                    label: 'Outdoor',
                    items: [{ label: 'Outdoor Item' }, { label: 'Outdoor Item' }, { label: 'Outdoor Item' }],
                },
            ],
        ],
    },
    {
        label: 'Sports',
        icon: () => h(SportShoe),
        items: [
            [
                {
                    label: 'Basketball',
                    items: [{ label: 'Basketball Item' }, { label: 'Basketball Item' }],
                },
                {
                    label: 'Football',
                    items: [{ label: 'Football Item' }, { label: 'Football Item' }, { label: 'Football Item' }],
                },
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Tennis Item' }, { label: 'Tennis Item' }],
                },
            ],
        ],
    },
]);
const panelMenuitems = ref([
    {
        label: 'Customers',
        icon: () => h(TableProperties),
        items: [
            {
                label: 'New',
                icon: () => h(UserPlus),
                items: [
                    {
                        label: 'Customer',
                        icon: () => h(Plus),
                    },
                    {
                        label: 'Duplicate',
                        icon: () => h(Copy),
                    },
                ],
            },
            {
                label: 'Edit',
                icon: () => h(UserPen),
            },
        ],
    },
    {
        label: 'Orders',
        icon: () => h(ShoppingCart),
        items: [
            {
                label: 'View',
                icon: () => h(SquareChartGantt),
            },
            {
                label: 'Search',
                icon: () => h(Search),
            },
        ],
    },
    {
        label: 'Shipments',
        icon: () => h(Container),
        items: [
            {
                label: 'Tracker',
                icon: () => h(Compass),
            },
            {
                label: 'Map',
                icon: () => h(MapPinned),
            },
            {
                label: 'Manage',
                icon: () => h(Pencil),
            },
        ],
    },
    {
        label: 'Profile',
        icon: () => h(User),
        items: [
            {
                label: 'Settings',
                icon: () => h(UserCog),
            },
            {
                label: 'Billing',
                icon: () => h(ReceiptText),
            },
        ],
    },
]);

function toggleMenu(event) {
    menu.value.toggle(event);
}

function onContextRightClick(event) {
    contextMenu.value.show(event);
}
</script>

<template>
    <div class="flex w-full flex-col gap-4">
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Menubar</div>
            <Menubar :model="nestedMenuitems">
                <template #end>
                    <IconField>
                        <InputIcon>
                            <Search />
                        </InputIcon>
                        <InputText type="text" placeholder="Search" />
                    </IconField>
                </template>
            </Menubar>
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Breadcrumb</div>
            <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-8 md:flex-row">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">Steps</div>
                    <Stepper value="1">
                        <StepList>
                            <Step value="1">Header I</Step>
                            <Step value="2">Header II</Step>
                            <Step value="3">Header III</Step>
                        </StepList>
                    </Stepper>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">TabMenu</div>
                    <Tabs value="0">
                        <TabList>
                            <Tab value="0">Header I</Tab>
                            <Tab value="1">Header II</Tab>
                            <Tab value="2">Header III</Tab>
                        </TabList>
                    </Tabs>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4 md:flex-row">
            <div class="md:w-1/3">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">Tiered Menu</div>
                    <TieredMenu :model="tieredMenuItems" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">Plain Menu</div>
                    <Menu :model="menuitems" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">Overlay Menu</div>
                    <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
                    <Button
                        type="button"
                        @click="toggleMenu"
                        style="width: auto">
                        Options
                        <SquareArrowDown />
                    </Button>
                </div>

                <div class="card" @contextmenu="onContextRightClick">
                    <div class="mb-4 text-xl font-semibold">Context Menu</div>
                    Right click to display.
                    <ContextMenu ref="contextMenu" :model="contextMenuItems" />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4 md:flex-row">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">MegaMenu | Horizontal</div>
                    <MegaMenu :model="megamenuItems" />

                    <div class="mt-8 mb-4 text-xl font-semibold">MegaMenu | Vertical</div>
                    <MegaMenu :model="megamenuItems" orientation="vertical" />
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="mb-4 text-xl font-semibold">PanelMenu</div>
                    <PanelMenu :model="panelMenuitems" />
                </div>
            </div>
        </div>
    </div>
</template>
