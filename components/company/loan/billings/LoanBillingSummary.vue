<template>
    <div class="table-responsive">
        <br />
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
                <a-button @click="showClientInvoice">View <a-icon type="eye"></a-icon></a-button>
            </span>
        </a-table>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        clientname: 'Stark Industries',
        loandedworkercount: '3',
        pendinginvoice: '1',
        inprogressinvoice: '1',
        requestformodification: '1',
    },
];
export default {
    name: "LoanBillingSummary",
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
                    title: 'Client Name',
                    dataIndex: 'clientname',
                    key: 'clientname',
                    sorter: (a, b) => { return a.clientname.localeCompare(b.clientname)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.clientname
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
                    title: 'Loanded Worker Count',
                    dataIndex: 'loandedworkercount',
                    key: 'loandedworkercount',
                    sorter: (a, b) => { return a.loandedworkercount.localeCompare(b.loandedworkercount)},
                },
                {
                    title: 'Pending Invoice',
                    dataIndex: 'pendinginvoice',
                    key: 'pendinginvoice',
                    sorter: (a, b) => { return a.pendinginvoice.localeCompare(b.pendinginvoice)},
                },
                {
                    title: 'In Progress Invoice',
                    dataIndex: 'inprogressinvoice',
                    key: 'inprogressinvoice',
                    sorter: (a, b) => { return a.inprogressinvoice.localeCompare(b.inprogressinvoice)},
                },
                {
                    title: 'Request For Modification',
                    dataIndex: 'requestformodification',
                    key: 'requestformodification',
                    sorter: (a, b) => { return a.requestformodification.localeCompare(b.requestformodification)},
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
        showClientInvoice() {
            this.$router.push('/company/loan/billing-invoice');
        },
    },
}
</script>

<style>
/* .ant-pagination-item {
    display: none!important;
} */
</style>