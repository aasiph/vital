<script setup lang="ts">
import { Customer, CustomerService } from '@/service/CustomerService';
import { Order, Product, ProductService, ProductWithOrders } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { DataTableFilterMeta, DataTableFilterMetaData } from 'primevue';
import { onBeforeMount, reactive, ref } from 'vue';
import { FilterX, Search, X, Check, LockKeyhole, LockKeyholeOpen, Plus, Minus, CircleCheck, CircleX } from '@lucide/vue';

/*interface MyDataTableFilterMeta {
    global: DataTableFilterMetaData,
    name: DataTableOperatorFilterMetaData,
    "country.name": DataTableOperatorFilterMetaData,
    representative: DataTableFilterMetaData,
    date: DataTableOperatorFilterMetaData,
    balance: DataTableOperatorFilterMetaData,
    status: DataTableOperatorFilterMetaData,
    activity: DataTableFilterMetaData,
    verified: DataTableFilterMetaData
}*/
type MyDataTableFilterMeta =
    | ({
          global: DataTableFilterMetaData;
      } & DataTableFilterMeta)
    | null;

const customers1 = ref<Customer[]>([]);
const customers2 = ref<Customer[]>([]);
const customers3 = ref<Customer[]>([]);
const filters1 = ref<MyDataTableFilterMeta>(null);
const loading1 = ref(true);
const balanceFrozen = ref(false);
const products = ref<Product[]>([]);
const expandedRows = ref<{} | null>(null);
const statuses = reactive(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const representatives = reactive([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' },
]);

function getOrderSeverity(order: Order) {
    switch (order.status) {
        case 'DELIVERED':
            return 'success';
        case 'CANCELLED':
            return 'danger';
        case 'PENDING':
            return 'warn';
        case 'RETURNED':
            return 'info';
        default:
            return '';
    }
}

function getSeverity(status: string) {
    switch (status) {
        case 'unqualified':
            return 'danger';
        case 'qualified':
            return 'success';
        case 'new':
            return 'info';
        case 'negotiation':
            return 'warn';
        case 'renewal':
            return '';
    }
}

function getStockSeverity(product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return '';
    }
}

onBeforeMount(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => (products.value = data));
    CustomerService.getCustomersLarge().then((data) => {
        customers1.value = data;
        loading1.value = false;
    });
    CustomerService.getCustomersLarge().then((data) => (customers2.value = data));
    CustomerService.getCustomersMedium().then((data) => (customers3.value = data));

    initFilters1();
});

function initFilters1() {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
        },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    };
}

const clearFilter = () => {
    initFilters1();
};

function expandAll() {
    expandedRows.value = products.value.reduce(
        (
            acc: {
                [key: string]: boolean;
            },
            p: Product
        ) => (acc[p.id] = true) && acc,
        {}
    );
}

function collapseAll() {
    expandedRows.value = null;
}

function formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function formatDate(value: string) {
    const date = new Date(value);
    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

function calculateCustomerTotal(name: string) {
    let total = 0;
    if (customers3.value) {
        for (let customer of customers3.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
}
</script>

<template>
    <div class="flex w-full flex-col gap-4">
        <div class="card">
            <div class="mb-4 text-xl font-semibold">Filtering</div>
            <DataTable
                :value="customers1"
                v-model:filters="filters1!"
                :paginator="true"
                :rows="10"
                dataKey="id"
                :rowHover="true"
                filterDisplay="menu"
                :loading="loading1"
                :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
                showGridlines>
                <template #header>
                    <div class="flex justify-between">
                        <Button type="button" variant="outlined" @click="clearFilter()">
                            <FilterX />
                            Clear
                        </Button>
                        <IconField>
                            <InputIcon>
                                <Search :size="14" />
                            </InputIcon>
                            <InputText v-model="filters1!['global'].value" placeholder="Keyword Search" />
                        </IconField>
                    </div>
                </template>
                <template #empty>No customers found.</template>
                <template #loading>Loading customers data. Please wait.</template>
                <Column field="name" header="Name" style="min-width: 12rem">
                    <template #body="{ data }: { data: Customer }">
                        {{ data.name }}
                    </template>
                    <template #filter="{ filterModel }">
                        <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
                    </template>
                </Column>
                <Column header="Country" filterField="country.name" style="min-width: 12rem">
                    <template #body="{ data }: { data: Customer }">
                        <div class="flex items-center gap-2">
                            <img
                                alt="flag"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`flag flag-${data.country.code}`"
                                style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel }">
                        <InputText v-model="filterModel.value" type="text" placeholder="Search by country" />
                    </template>
                    <template #filterclear="{ filterCallback }">
                        <Button
                            type="button"
                            @click="filterCallback()"
                            severity="secondary">
                            <X />
                        </Button>
                    </template>
                    <template #filterapply="{ filterCallback }">
                        <Button type="button" @click="filterCallback()" severity="success">
                            <Check />
                        </Button>
                    </template>
                </Column>
                <Column
                    header="Agent"
                    filterField="representative"
                    :showFilterMatchModes="false"
                    :filterMenuStyle="{ width: '14rem' }"
                    style="min-width: 14rem">
                    <template #body="{ data }: { data: Customer }">
                        <div class="flex items-center gap-2">
                            <img
                                :alt="data.representative.name"
                                :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                                style="width: 32px" />
                            <span>{{ data.representative.name }}</span>
                        </div>
                    </template>
                    <template #filter="{ filterModel }">
                        <MultiSelect
                            v-model="filterModel.value"
                            :options="representatives"
                            optionLabel="name"
                            placeholder="Any">
                            <template #option="slotProps">
                                <div class="flex items-center gap-2">
                                    <img
                                        :alt="slotProps.option.name"
                                        :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                                        style="width: 32px" />
                                    <span>{{ slotProps.option.name }}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                    <template #body="{ data }: { data: Customer }">
                        {{ formatDate(data.date) }}
                    </template>
                    <template #filter="{ filterModel }">
                        <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                    </template>
                </Column>
                <Column header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
                    <template #body="{ data }: { data: Customer }">
                        {{ formatCurrency(data.balance) }}
                    </template>
                    <template #filter="{ filterModel }">
                        <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                    </template>
                </Column>
                <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                    <template #body="{ data }: { data: Customer }">
                        <Tag :value="data.status" :severity="getSeverity(data.status)" />
                    </template>
                    <template #filter="{ filterModel }">
                        <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
                            <template #option="slotProps">
                                <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                            </template>
                        </Select>
                    </template>
                </Column>
                <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
                    <template #body="{ data }: { data: Customer }">
                        <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                    </template>
                    <template #filter="{ filterModel }">
                        <Slider v-model="filterModel.value" range class="m-4"></Slider>
                        <div class="flex items-center justify-between px-2">
                            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                        </div>
                    </template>
                </Column>
                <Column
                    field="verified"
                    header="Verified"
                    dataType="boolean"
                    style="min-width: 8rem">
                    <template #body="{ data }: { data: Customer }">
                        <div class="w-full flex justify-center">
                            <CircleCheck v-if="data.verified" class="text-green-500" />
                            <CircleX v-else class="text-red-500" />
                        </div>
                    </template>
                    <template #filter="{ filterModel }">
                        <label for="verified-filter" class="font-bold">Verified</label>
                        <Checkbox
                            v-model="filterModel.value"
                            :indeterminate="filterModel.value === null"
                            binary
                            inputId="verified-filter" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Frozen Columns</div>
            <ToggleButton
                v-model="balanceFrozen"
                onLabel="Balance"
                offLabel="Balance">
                <template #icon="{ value }">
                    <LockKeyhole v-if="value" />
                    <LockKeyholeOpen v-else />
                </template>
            </ToggleButton>

            <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
                <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
                <Column field="id" header="Id" style="min-width: 100px"></Column>
                <Column field="name" header="Name" style="min-width: 200px"></Column>
                <Column field="country.name" header="Country" style="min-width: 200px"></Column>
                <Column field="date" header="Date" style="min-width: 200px"></Column>
                <Column field="company" header="Company" style="min-width: 200px"></Column>
                <Column field="status" header="Status" style="min-width: 200px"></Column>
                <Column field="activity" header="Activity" style="min-width: 200px"></Column>
                <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
                <Column
                    field="balance"
                    header="Balance"
                    style="min-width: 200px"
                    alignFrozen="right"
                    :frozen="balanceFrozen">
                    <template #body="{ data }: { data: Customer }">
                        <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Row Expansion</div>
            <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id" tableStyle="min-width: 60rem">
                <template #header>
                    <div class="flex flex-wrap justify-end gap-2">
                        <Button variant="text" @click="expandAll">
                            <Plus />
                            Expand All
                        </Button>
                        <Button variant="text" @click="collapseAll">
                            <Minus />
                            Collapse All
                        </Button>
                    </div>
                </template>
                <Column expander style="width: 5rem" />
                <Column field="name" header="Name"></Column>
                <Column header="Image">
                    <template #body="{ data }: { data: Product }">
                        <img
                            :src="`https://primefaces.org/cdn/primevue/images/product/${data.image}`"
                            :alt="data.image"
                            class="shadow-lg"
                            width="64" />
                    </template>
                </Column>
                <Column field="price" header="Price">
                    <template #body="{ data }: { data: Product }">
                        {{ formatCurrency(data.price) }}
                    </template>
                </Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews">
                    <template #body="{ data }: { data: Product }">
                        <Rating :modelValue="data.rating" readonly />
                    </template>
                </Column>
                <Column header="Status">
                    <template #body="{ data }: { data: Product }">
                        <Tag :value="data.inventoryStatus" :severity="getStockSeverity(data)" />
                    </template>
                </Column>
                <template #expansion="{ data }: { data: ProductWithOrders }">
                    <div class="p-4">
                        <h5>Orders for {{ data.name }}</h5>
                        <DataTable :value="data.orders">
                            <Column field="id" header="Id" sortable></Column>
                            <Column field="customer" header="Customer" sortable></Column>
                            <Column field="date" header="Date" sortable></Column>
                            <Column field="amount" header="Amount" sortable>
                                <template #body="{ data }: { data: Order }">
                                    {{ formatCurrency(data.amount) }}
                                </template>
                            </Column>
                            <Column field="status" header="Status" sortable>
                                <template #body="{ data }: { data: Order }">
                                    <Tag :value="data.status.toLowerCase()" :severity="getOrderSeverity(data)" />
                                </template>
                            </Column>
                            <Column headerStyle="width:4rem">
                                <template #body>
                                    <Button>
                                        <Search />
                                    </Button>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </template>
            </DataTable>
        </div>

        <div class="card">
            <div class="mb-4 text-xl font-semibold">Grouping</div>
            <DataTable
                :value="customers3"
                rowGroupMode="subheader"
                groupRowsBy="representative.name"
                sortMode="single"
                sortField="representative.name"
                :sortOrder="1"
                scrollable
                scrollHeight="400px"
                tableStyle="min-width: 50rem">
                <template #groupheader="{ data }: { data: Customer }">
                    <div class="flex items-center gap-2">
                        <img
                            :alt="data.representative.name"
                            :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                            width="32"
                            style="vertical-align: middle" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="name" header="Name" style="min-width: 200px"></Column>
                <Column field="country" header="Country" style="min-width: 200px">
                    <template #body="{ data }: { data: Customer }">
                        <div class="flex items-center gap-2">
                            <img
                                alt="flag"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`flag flag-${data.country.code}`"
                                style="width: 24px" />
                            <span>{{ data.country.name }}</span>
                        </div>
                    </template>
                </Column>
                <Column field="company" header="Company" style="min-width: 200px"></Column>
                <Column field="status" header="Status" style="min-width: 200px">
                    <template #body="{ data }: { data: Customer }">
                        <Tag :value="data.status" :severity="getSeverity(data.status)" />
                    </template>
                </Column>
                <Column field="date" header="Date" style="min-width: 200px"></Column>
                <template #groupfooter="{ data }: { data: Customer }">
                    <div class="flex w-full justify-end font-bold">
                        Total Customers:
                        {{ calculateCustomerTotal(data.representative.name) }}
                    </div>
                </template>
            </DataTable>
        </div>
    </div>
</template>

<style scoped lang="postcss">
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
