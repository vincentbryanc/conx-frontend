<template>
    <div>
        <a-table :data-source="data" :columns="columns">
            <div
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                style="padding: 8px">
                <a-input
                    v-ant-ref="c => (searchInput = c)"
                    :placeholder="`Search ${column.title}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block;"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)" />
                <a-button
                    type="primary"
                    icon="search"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)" >
                    Search
                </a-button>
                <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
                    Reset
                </a-button>
            </div>
            <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }" />
            <template slot="customRender" slot-scope="text, record, index, column">
                <span v-if="searchText && searchedColumn === column.dataIndex">
                    <template
                        v-for="(fragment, i) in text
                            .toString()
                            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
                        <mark
                            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                            :key="i"
                            class="highlight">{{ fragment }}</mark>
                        <template v-else>{{ fragment }}</template>
                    </template>
                </span>
                <template v-else>
                    {{ text }}
                </template>
            </template>
            <span slot="action">
                <a-button @click="showModal">View</a-button>
            </span>
        </a-table>
        <a-modal v-model="visible" title="Invoice Details" on-ok="handleOk" :width="700">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">Close</a-button>
            </template>
            <div>
                <a-row>
                    <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <a-row>
                            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                                <div class="text-right">
                                    <a-button>Print <a-icon type="printer"></a-icon></a-button>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                                <div>
                                    <b>Invoice No: </b> <br /> 
                                    IVN-07152020-0001 <br /><br />
                                </div>
                                <div>
                                    <b>Billed to </b> <br />
                                    Agents of Value <br />
                                    200 Park Avenue <br />
                                    New York, USA <br /><br />
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                <div>
                                    <b>Issued Date: </b> <br /> 
                                    July 15, 2020<br /><br />
                                </div>
                                <div>
                                    <b>Conx Technologies </b> <br />
                                    123 Street <br />
                                    564-456-1111 <br />
                                    conxtech@conx.com <br /><br />
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                                <a-table :columns="columnsbillingitemdata" :data-source="billingitemdata" :pagination="false">
                                </a-table><br />
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <h2><b>Total</b></h2>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <h2><b>$50.00</b></h2>
                                </div>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        invoicenumber: 'IVN-07152020-0001',
        transactiondate: 'July 15, 2020',
        description: 'Subscription Payment (Full Access)',
        amount: '$50.00',
    },
];

const billingitemdata = [
    {
        key: '1',
        description: 'Subscription Payment (Full Access)',
        amount: '$50.00',
    },
];

export default {
    name: "BillingHistory",
    data() {
        return {
            visible: false,
            data,
            billingitemdata,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
        };
    },
    computed: {
        columns() {
            const columns = [
                {
                    title: 'Invoice Number',
                    dataIndex: 'invoicenumber',
                    key: 'invoicenumber',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.invoicenumber
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                    
                },
                {
                    title: 'Transaction Date',
                    dataIndex: 'transactiondate',
                    key: 'transactiondate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.transactiondate
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Descripion',
                    dataIndex: 'description',
                    key: 'description',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.description
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.amount
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                            setTimeout(() => {
                                this.searchInput.focus();
                            });
                        }
                    },
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ];
            return columns;
        },
        columnsbillingitemdata() {
            const columns = [
                {
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount',
                },
            ];
            return columns;
        },
    },
    methods: {
        handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            this.searchText = selectedKeys[0];
            this.searchedColumn = dataIndex;
        },
        handleReset(clearFilters) {
            clearFilters();
            this.searchText = '';
        },
        showModal() {
            this.visible = true;
        },
        handleCancel(e) {
            this.visible = false;
        },
    },
}
</script>

<style>
</style>