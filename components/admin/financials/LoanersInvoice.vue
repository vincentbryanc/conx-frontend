<template>
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
                <nuxt-link to="/admin/financials/loaners-invoice-details"><a-button>View <a-icon type="eye" /></a-button></nuxt-link>
            </span>
        </a-table>
    </div>
</template>

<script>
const data = [
    {
        key: '2',
        invoicenumber: 'IVN-07242020-002',
        employeename: 'Rylan Bain',
        loaningcompany: 'Agents of Value',
        borrowingcompany: 'Stark Industries',
        servicecharge: '$400.00',
        duedate: 'July 27, 2020',
        status: 'Partial Payment',
        totaltransactioncost: '$4,840.00',
    },
    {
        key: '3',
        invoicenumber: 'IVN-07242020-001',
        employeename: 'Gail Vo',
        loaningcompany: 'Agents of Value',
        borrowingcompany: 'Stark Industries',
        servicecharge: '$400.00',
        duedate: 'July 27, 2020',
        status: 'Full Payment',
        totaltransactioncost: '$4,840.00',
    },
];

export default {
    name: "LoanersInvoice",
    data() {
        return {
            loading: false,
            data,
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
                    title: 'Loaning Company',
                    dataIndex: 'loaningcompany',
                    key: 'loaningcompany',
                    sorter: (a, b) => { return a.loaningcompany.localeCompare(b.loaningcompany)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.loaningcompany
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
                    title: 'Borrowing Company',
                    dataIndex: 'borrowingcompany',
                    key: 'borrowingcompany',
                    sorter: (a, b) => { return a.borrowingcompany.localeCompare(b.borrowingcompany)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.borrowingcompany
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
                    title: 'Service Charge',
                    dataIndex: 'servicecharge',
                    key: 'servicecharge',
                    sorter: (a, b) => { return a.servicecharge.localeCompare(b.servicecharge)},
                },
                {
                    title: 'Due Date',
                    dataIndex: 'duedate',
                    key: 'duedate',
                    sorter: (a, b) => { return a.duedate.localeCompare(b.duedate)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.duedate
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
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    sorter: (a, b) => { return a.status.localeCompare(b.status)},
                    filters: [
                        {
                            text: 'Partial Payment',
                            value: 'Partial Payment',
                        },
                        {
                            text: 'Full Payment',
                            value: 'Full Payment',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.status.indexOf(value) === 0,
                },
                {
                    title: 'Total Transaction Cose',
                    dataIndex: 'totaltransactioncost',
                    key: 'totaltransactioncost',
                    sorter: (a, b) => { return a.totaltransactioncost.localeCompare(b.totaltransactioncost)},
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
    },
}
</script>

<style>

</style>