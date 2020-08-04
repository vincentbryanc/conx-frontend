<template>
    <div>
        <div class="table-responsive">
            <a-table :data-source="data" :columns="columns" :loading="loading">
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
                    <a-button @click="showModal">View <a-icon type="eye" /></a-button>
                </span>
            </a-table>
        </div>
        <a-modal v-model="visible" title="Invoice Details" on-ok="handleOk" :width="750">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Close
                </a-button>
            </template>
            <div>
                <a-row>
                    <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                        <a-row>
                            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                                <div class="text-right">
                                    <a-button>Print <a-icon type="printer"></a-icon></a-button>
                                    <a-button>Download <a-icon type="download"></a-icon></a-button>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                                <div>
                                    <b>Invoice No: </b> <br /> 
                                    IVN-07242020-003 <br /><br />
                                </div>
                                <div>
                                    <b>Billed to </b> <br />
                                    Stark Industries <br />
                                    200 Park Avenue <br />
                                    New York, USA <br /><br />
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                                <div>
                                    <b>Issued Date: </b> <br /> 
                                    July 24, 2020<br /><br />
                                </div>
                                <div>
                                    <b>Conx Technologies </b> <br />
                                    123 Street <br />
                                    564-456-1111 <br />
                                    conxtech@conx.com <br /><br />
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                                <b>Employee ID: AOV000001</b><br /><br />
                            </a-col>
                            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                                <div class="table-responsive">
                                    <a-table :columns="columnsworkeddata" :data-source="workeddata" :pagination="false">
                                    </a-table><br />
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <b>Subtotal</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <b>$4,000.00</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <b>Service Charge (10%)</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <b>$400.00</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <b>Other Expenses</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <b>$0.00</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <b>Tax</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <b>$440.00</b>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                                <div class="text-right">
                                    <h2><b>Invoice Total</b></h2>
                                </div>
                            </a-col>
                            <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                <div class="text-right">
                                    <h2><b>$4,840.00</b></h2>
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
        transactiondate: 'July 27, 2020',
        invoicenumber: 'IVN-07172020-0002',
        companyname: 'Stark Industries',
        amount: '$400.00',
        eaningtype: 'Service Fee',
    },
    {
        key: '2',
        transactiondate: 'July 27, 2020',
        invoicenumber: 'IVN-07172020-0001',
        companyname: 'Stark Industries',
        amount: '$400.00',
        eaningtype: 'Service Fee',
    },
    {
        key: '3',
        transactiondate: 'July 15, 2020',
        invoicenumber: 'IVN-15072020-0002',
        companyname: 'Stark Industries',
        amount: '$50.00',
        eaningtype: 'Subscription',
    },
    {
        key: '4',
        transactiondate: 'July 15, 2020',
        invoicenumber: 'IVN-07152020-0001',
        companyname: 'Stark Industries',
        amount: '$50.00',
        eaningtype: 'Subscription',
    },
];

const workeddata = [
    {
        key: '1',
        date: 'July 20, 2020',
        hourlyrate: '$100.00',
        noofhours: '8',
        amount: '$800.00',
    },
    {
        key: '2',
        date: 'July 21, 2020',
        hourlyrate: '$100.00',
        noofhours: '8',
        amount: '$800.00',
    },
    {
        key: '3',
        date: 'July 22, 2020',
        hourlyrate: '$100.00',
        noofhours: '8',
        amount: '$800.00',
    },
    {
        key: '4',
        date: 'July 23, 2020',
        hourlyrate: '$100.00',
        noofhours: '8',
        amount: '$800.00',
    },
    {
        key: '5',
        date: 'July 24, 2020',
        hourlyrate: '$100.00',
        noofhours: '8',
        amount: '$800.00',
    },
];

export default {
    name: "Earnings",
    data() {
        return {
            loading: false,
            visible: false,
            data,
            workeddata,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
        };
    },
    computed: {
        columns() {
            const columns = [
                {
                    title: 'Transaction Date',
                    dataIndex: 'transactiondate',
                    key: 'transactiondate',
                    sorter: (a, b) => { return a.transactiondate.localeCompare(b.transactiondate)},
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
                    title: 'Invoice Number',
                    dataIndex: 'invoicenumber',
                    key: 'invoicenumber',
                    sorter: (a, b) => { return a.invoicenumber.localeCompare(b.invoicenumber)},
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
                    title: 'Company Name',
                    dataIndex: 'companyname',
                    key: 'companyname',
                    sorter: (a, b) => { return a.companyname.localeCompare(b.companyname)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.companyname
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
                    sorter: (a, b) => { return a.amount.localeCompare(b.amount)},
                },
                {
                    title: 'Earning Type',
                    dataIndex: 'eaningtype',
                    key: 'eaningtype',
                    sorter: (a, b) => { return a.eaningtype.localeCompare(b.eaningtype)},
                    filters: [
                        {
                            text: 'Service Fee',
                            value: 'Service Fee',
                        },
                        {
                            text: 'Subscription',
                            value: 'Subscription',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.eaningtype.indexOf(value) === 0,
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
                },
            ];
            return columns;
        },
        columnsworkeddata() {
            const columns = [
                {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: 'Hourly Rate',
                    dataIndex: 'hourlyrate',
                    key: 'hourlyrate',
                },
                {
                    title: 'No. of Hours',
                    dataIndex: 'noofhours',
                    key: 'noofhours',
                },
                {
                    title: 'Amount',
                    dataIndex: 'amount',
                    key: 'amount',
                    align: 'right',
                }
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