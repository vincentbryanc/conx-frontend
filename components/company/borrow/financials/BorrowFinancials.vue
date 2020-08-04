<template>
    <div>
        <br />
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
                    <a-button @click="showModal">View <a-icon type="eye"></a-icon></a-button>
                </span>
            </a-table>
        </div>
        <a-modal v-model="visible" title="Invoice" :width="750" :style="{ maxHeight: 100 }" :footer="null">
            <div>
                <BorrowFinancialInvoiceDetails />
            </div>
        </a-modal>
    </div>
</template>

<script>
import BorrowFinancialInvoiceDetails from './BorrowFinancialInvoiceDetails';
const data = [
    {
        key: '1',
        transactiondate: 'July 24, 2020 10:00AM',
        invoicenumber: 'IVN-07242020-003',
        employeename: 'Steve Rogers',
        noofhoursworked: '40',
        billingrate: '$85',
        totalcost: '$4,114.00',
        status: 'Waiting for Payment',
    },
    {
        key: '2',
        transactiondate: 'July 20, 2020 01:00PM',
        invoicenumber: 'IVN-07242020-002',
        employeename: 'Rylan Bain',
        noofhoursworked: '40',
        billingrate: '$100',
        totalcost: '$4,840.00',
        status: 'Payment Received',
    },
    // {
    //     key: '3',
    //     transactiondate: 'July 20, 2020 02:00PM',
    //     invoicenumber: 'IVN-07242020-001',
    //     employeename: 'Gail Vo',
    //     noofhoursworked: '40',
    //     billingrate: '$100',
    //     totalcost: '$4,840.00',
    //     status: 'Disbursed',
    // },
];
export default {
    name: "BorrowFinancials",
    data() {
        return {
            visible: false,
            loading: false,
            data,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
        };
    },
    components: {
        BorrowFinancialInvoiceDetails,
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
                    title: 'Employee Name',
                    dataIndex: 'employeename',
                    key: 'employeename',
                    sorter: (a, b) => { return a.employeename.localeCompare(b.employeename)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.employeename
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
                    title: 'No of Hours Worked',
                    dataIndex: 'noofhoursworked',
                    key: 'noofhoursworked',
                    sorter: (a, b) => { return a.noofhoursworked.localeCompare(b.noofhoursworked)},
                },
                {
                    title: 'Billing rate',
                    dataIndex: 'billingrate',
                    key: 'billingrate',
                    sorter: (a, b) => { return a.billingrate.localeCompare(b.billingrate)},
                },
                {
                    title: 'Total Cost',
                    dataIndex: 'totalcost',
                    key: 'totalcost',
                    sorter: (a, b) => { return a.totalcost.localeCompare(b.totalcost)},
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    sorter: (a, b) => { return a.status.localeCompare(b.status)},
                    filters: [
                        {
                            text: 'Waiting for Payment',
                            value: 'Waiting for Payment',
                        },
                        {
                            text: 'Payment Received',
                            value: 'Payment Received',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.status.indexOf(value) === 0,
                },
                {
                    title: 'Action',
                    key: 'action',
                    scopedSlots: { customRender: 'action' },
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
/* .ant-pagination-item {
    display: none!important;
} */
</style>