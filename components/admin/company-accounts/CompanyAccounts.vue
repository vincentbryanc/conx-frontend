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
                <nuxt-link to="/admin/company-accounts/company-information"><a-button>View <a-icon type="eye" /></a-button></nuxt-link>
                <a-button type="danger">Ban <a-icon type="close" /></a-button>
            </span>
        </a-table>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        companyname: 'Agents of Value ',
        subscriptionexpiration: 'August 15, 2020',
        signupstatus: 'Direct',
        noofemployees: '8',
        noofloanedemployees: '3',
        noofborrowedemployees: '3',
        accountstatus: 'Active',
    },
    {
        key: '2',
        companyname: 'Stark Industries',
        subscriptionexpiration: 'August 30, 2020',
        signupstatus: 'Direct',
        noofemployees: '5',
        noofloanedemployees: '3',
        noofborrowedemployees: '3',
        accountstatus: 'Active',
    },
];

export default {
    name: "CompanyAccounts",
    data() {
        return {
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
                    title: 'Company Name',
                    dataIndex: 'companyname',
                    key: 'companyname',
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
                    title: 'Subscription Expiration',
                    dataIndex: 'subscriptionexpiration',
                    key: 'subscriptionexpiration',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.subscriptionexpiration
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
                    title: 'Signup Status',
                    dataIndex: 'signupstatus',
                    key: 'signupstatus',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.signupstatus
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
                    title: 'No. of Employees',
                    dataIndex: 'noofemployees',
                    key: 'noofemployees',
                },
                {
                    title: 'No. of Loaned Employees',
                    dataIndex: 'noofloanedemployees',
                    key: 'noofloanedemployees',
                },
                {
                    title: 'No. of Borrowed Employees',
                    dataIndex: 'noofborrowedemployees',
                    key: 'noofborrowedemployees',
                },
                {
                    title: 'Account Status',
                    dataIndex: 'accountstatus',
                    key: 'accountstatus',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.accountstatus
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