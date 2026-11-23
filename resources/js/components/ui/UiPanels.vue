<script setup>
import { h, ref } from 'vue';
import { RefreshCw, Trash, Home, Check, User, UserPlus, Search, Printer, Plus, Upload } from '@lucide/vue';

const items = ref([
    {
        label: 'Save',
        icon: () => h(Check),
    },
    {
        label: 'Update',
        icon: () => h(Upload),
    },
    {
        label: 'Delete',
        icon: () => h(Trash),
    },
    {
        label: 'Home Page',
        icon: () => h(Home),
    },
]);
const cardMenu = ref([
    { label: 'Save', icon: () => h(Check) },
    { label: 'Update', icon: () => h(RefreshCw) },
    { label: 'Delete', icon: () => h(Trash) },
]);
const menuRef = ref(null);

function toggle() {
    menuRef.value.toggle(event);
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Toolbar</div>
            <Toolbar>
                <template #start>
                    <Button class="mr-2" severity="secondary" variant="text">
                        <Plus />
                    </Button>
                    <Button class="mr-2" severity="secondary" variant="text">
                        <Printer />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload />
                    </Button>
                </template>

                <template #center>
                    <IconField>
                        <InputIcon>
                            <Search size="14" />
                        </InputIcon>
                        <InputText placeholder="Search" />
                    </IconField>
                </template>

                <template #end><SplitButton label="Save" :model="items"></SplitButton></template>
            </Toolbar>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Accordion</div>
                <Accordion value="0">
                    <AccordionPanel value="0">
                        <AccordionHeader>Header I</AccordionHeader>
                        <AccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1">
                        <AccordionHeader>Header II</AccordionHeader>
                        <AccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                                velit, sed quia non numquam eius modi.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="2">
                        <AccordionHeader>Header III</AccordionHeader>
                        <AccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Tabs</div>
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">Header I</Tab>
                        <Tab value="1">Header II</Tab>
                        <Tab value="2">Header III</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </TabPanel>
                        <TabPanel value="1">
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                                velit, sed quia non numquam eius modi.
                            </p>
                        </TabPanel>
                        <TabPanel value="2">
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Panel</div>
                <Panel header="Header" :toggleable="true">
                    <p class="m-0 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
            </div>
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Fieldset</div>
                <Fieldset legend="Legend" :toggleable="true">
                    <p class="m-0 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset>
            </div>

            <Card>
                <template v-slot:title>
                    <div class="mb-0 flex items-center justify-between">
                        <div class="mb-4 text-xl font-semibold">Card</div>
                        <Button @click="toggle" variant="text">
                            <Plus />
                        </Button>
                    </div>
                    <Menu id="config_menu" ref="menuRef" :model="cardMenu" :popup="true" />
                </template>

                <template v-slot:content>
                    <p class="m-0 leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </template>
            </Card>
        </div>
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Divider</div>
            <div class="flex flex-col md:flex-row">
                <div class="flex w-full flex-col items-center justify-center gap-3 py-5 md:w-5/12">
                    <div class="flex flex-col gap-2">
                        <label for="username">Username</label>
                        <InputText id="username" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password">Password</label>
                        <InputText id="password" type="password" />
                    </div>
                    <div class="flex">
                        <Button class="mx-auto w-full max-w-[17.35rem]">
                            <User />
                            Login
                        </Button>
                    </div>
                </div>
                <div class="w-full md:w-2/12">
                    <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
                    <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
                </div>
                <div class="flex w-full items-center justify-center py-5 md:w-5/12">
                    <Button
                        severity="success"
                        class="mx-auto w-full max-w-[17.35rem]">
                        <UserPlus />
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Splitter</div>
            <Splitter style="height: 300px" class="mb-8">
                <SplitterPanel :size="30" :minSize="10">
                    <div class="h-full flex items-center justify-center">Panel 1</div>
                </SplitterPanel>
                <SplitterPanel :size="70">
                    <Splitter layout="vertical">
                        <SplitterPanel :size="15">
                            <div class="h-full flex items-center justify-center">Panel 2</div>
                        </SplitterPanel>
                        <SplitterPanel :size="50">
                            <div class="h-full flex items-center justify-center">Panel 3</div>
                        </SplitterPanel>
                    </Splitter>
                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>
