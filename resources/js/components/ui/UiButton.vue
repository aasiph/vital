<script setup>
import { h, ref } from 'vue';
import { RefreshCw, Trash, Home, Check, X, User, Search, Bookmark, Bell, Heart, Star, LoaderCircle } from '@lucide/vue';

const items = ref([
    {
        label: 'Update',
        icon: () => h(RefreshCw),
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

const loading = ref(false);
const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
</script>

<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Default</div>
            <div class="flex flex-wrap gap-2">
                <Button>Submit</Button>
                <Button :disabled="true">Disabled</Button>
                <Button variant="link">Link</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Sizes</div>
            <div class="space-x-2">
                <Button size="small">
                    <Check />
                    Small
                </Button>
                <Button>
                    <Check />
                    Normal
                </Button>
                <Button size="large">
                    <Check />
                    Large
                </Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Severities</div>
            <div class="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button severity="secondary">Secondary</Button>
                <Button severity="success">Success</Button>
                <Button severity="info">Info</Button>
                <Button severity="warn">Warn</Button>
                <Button severity="help">Help</Button>
                <Button severity="danger">Danger</Button>
                <Button severity="contrast">Contrast</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Text</div>
            <div class="flex flex-wrap gap-2">
                <Button variant="text">Primary</Button>
                <Button severity="secondary" variant="text">Secondary</Button>
                <Button severity="success" variant="text">Success</Button>
                <Button severity="info" variant="text">Info</Button>
                <Button severity="warn" variant="text">Warn</Button>
                <Button severity="help" variant="text">Help</Button>
                <Button severity="danger" variant="text">Danger</Button>
                <Button severity="contrast" variant="text">Contrast</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Outlined</div>
            <div class="flex flex-wrap gap-2">
                <Button variant="outlined">Primary</Button>
                <Button severity="secondary" variant="outlined">Secondary</Button>
                <Button severity="success" variant="outlined">Success</Button>
                <Button severity="info" variant="outlined">Info</Button>
                <Button severity="warn" variant="outlined">Warn</Button>
                <Button severity="help" variant="outlined">Help</Button>
                <Button severity="danger" variant="outlined">Danger</Button>
                <Button severity="contrast" variant="outlined">Contrast</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Group</div>
            <div class="flex flex-wrap gap-2">
                <ButtonGroup>
                    <Button>
                        <Check />
                        Save
                    </Button>
                    <Button>
                        <Trash />
                        Delete
                    </Button>
                    <Button>
                        <X />
                        Cancel
                    </Button>
                </ButtonGroup>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">SplitButton</div>
            <div class="flex flex-wrap gap-2">
                <SplitButton label="Primary" :model="items"></SplitButton>
                <SplitButton label="Secondary" :model="items" severity="secondary"></SplitButton>
                <SplitButton label="Success" :model="items" severity="success"></SplitButton>
                <SplitButton label="Info" :model="items" severity="info"></SplitButton>
                <SplitButton label="Warn" :model="items" severity="warn"></SplitButton>
                <SplitButton label="Help" :model="items" severity="help"></SplitButton>
                <SplitButton label="Danger" :model="items" severity="danger"></SplitButton>
                <SplitButton label="Contrast" :model="items" severity="contrast"></SplitButton>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Icons</div>
            <div class="flex flex-col gap-2">
                <div class="flex flex-wrap gap-2">
                    <Button aria-label="Save">
                        <Home />
                    </Button>
                    <Button>
                        <User />
                        Profile
                    </Button>
                    <Button>
                        Save
                        <Check />
                    </Button>
                </div>
                <div class="flex flex-wrap gap-2">
                    <Button class="flex-col">
                        <Search />
                        Search
                    </Button>
                    <Button class="flex-col">
                        Update
                        <RefreshCw />
                    </Button>
                </div>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Raised</div>
            <div class="flex flex-wrap gap-2">
                <Button raised>Primary</Button>
                <Button severity="secondary" raised>Secondary</Button>
                <Button severity="success" raised>Success</Button>
                <Button severity="info" raised>Info</Button>
                <Button severity="warn" raised>Warn</Button>
                <Button severity="help" raised>Help</Button>
                <Button severity="danger" raised>Danger</Button>
                <Button severity="contrast" raised>Contrast</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Rounded</div>
            <div class="flex flex-wrap gap-2">
                <Button rounded>Primary</Button>
                <Button severity="secondary" rounded>Secondary</Button>
                <Button severity="success" rounded>Success</Button>
                <Button severity="info" rounded>Info</Button>
                <Button severity="warn" rounded>Warn</Button>
                <Button severity="help" rounded>Help</Button>
                <Button severity="danger" rounded>Danger</Button>
                <Button severity="contrast" rounded>Contrast</Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Rounded Icons</div>
            <div class="flex flex-wrap gap-2">
                <Button iconOnly rounded aria-label="Filter"><Check /></Button>
                <Button iconOnly rounded severity="secondary" aria-label="Bookmark"><Bookmark /></Button>
                <Button iconOnly rounded severity="success" aria-label="Search"><Search /></Button>
                <Button iconOnly rounded severity="info" aria-label="User"><User /></Button>
                <Button iconOnly rounded severity="warn" aria-label="Notification"><Bell /></Button>
                <Button iconOnly rounded severity="help" aria-label="Favorite"><Heart /></Button>
                <Button iconOnly rounded severity="danger" aria-label="Cancel"><X /></Button>
                <Button iconOnly rounded severity="contrast" aria-label="Star"><Star /></Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Rounded Text</div>
            <div class="flex flex-wrap gap-2">
                <Button iconOnly rounded variant="text" aria-label="Filter"><Check /></Button>
                <Button iconOnly rounded variant="text" severity="secondary" aria-label="Bookmark"><Bookmark /></Button>
                <Button iconOnly rounded variant="text" severity="success" aria-label="Search"><Search /></Button>
                <Button iconOnly rounded variant="text" severity="info" aria-label="User"><User /></Button>
                <Button iconOnly rounded variant="text" severity="warn" aria-label="Notification"><Bell /></Button>
                <Button iconOnly rounded variant="text" severity="help" aria-label="Favorite"><Heart /></Button>
                <Button iconOnly rounded variant="text" severity="danger" aria-label="Cancel"><X /></Button>
                <Button iconOnly rounded variant="text" severity="contrast" aria-label="Star"><Star /></Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Rounded Outlined</div>
            <div class="flex flex-wrap gap-2">
                <Button iconOnly rounded variant="outlined" aria-label="Filter"><Check /></Button>
                <Button iconOnly rounded variant="outlined" severity="secondary" aria-label="Bookmark"><Bookmark /></Button>
                <Button iconOnly rounded variant="outlined" severity="success" aria-label="Search"><Search /></Button>
                <Button iconOnly rounded variant="outlined" severity="info" aria-label="User"><User /></Button>
                <Button iconOnly rounded variant="outlined" severity="warn" aria-label="Notification"><Bell /></Button>
                <Button iconOnly rounded variant="outlined" severity="help" aria-label="Favorite"><Heart /></Button>
                <Button iconOnly rounded variant="outlined" severity="danger" aria-label="Cancel"><X /></Button>
                <Button iconOnly rounded variant="outlined" severity="contrast" aria-label="Star"><Star /></Button>
            </div>
        </div>
        <div class="card flex flex-col gap-4">
            <div class="text-xl font-semibold">Loading</div>
            <div class="flex flex-wrap gap-2">
                <Button type="button" :disabled="loading" @click="load">
                    <LoaderCircle v-if="loading" class="animate-spin" />
                    <Check v-else />
                    {{ loading ? 'Loading...' : 'Search' }}
                </Button>
                <Button type="button" iconOnly :disabled="loading" @click="load">
                    <LoaderCircle v-if="loading" class="animate-spin" />
                    <Check v-else />
                </Button>
            </div>
        </div>
    </div>
</template>
