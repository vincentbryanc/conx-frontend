<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Employees</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '77vh' }">
                    <div>
                        <h1>Employees</h1>
                    </div>
                    <div>
                        <a-tabs default-active-key="1">
                            <a-tab-pane key="1" tab="Reserved">
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
                                    <span slot="actions" slot-scope="text, record">
                                        <a-button>View</a-button>
                                        <a-button>Edit</a-button>
                                        <a-button>For Lease</a-button>
                                        <a-button>Release</a-button>
                                    </span>
                                </a-table>
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="For Lease" force-render>
                                Content of Tab Pane 2
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/company/AppHeader';
import AppSider from '../../../components/company/AppSider';
import AppFooter from '../../../components/AppFooter';

const data = [
    {
        key: '1',
        name: 'John Brown',
        employeeid: 'AOV000003',
        levelofexperience: 'Journeyman',
        areaofwork: 'Journeyman',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '2',
        name: 'Joe Black',
        levelofexperience: 'Journeyman',
        areaofwork: 'Journeyman',
        zipcode: '95035',
        hourlyrate: '$100',
    },
];

export default {
    head() {
        return {
            title: 'Company Employees',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ]
        }
    },
    components: {
        AppHeader,
        AppSider,
        AppFooter,
    },
    data() {
        return {
            data,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.name
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase()),
                    onFilterDropdownVisibleChange: visible => {
                        if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus();
                        }, 0);
                        }
                    },
                },
                {
                    title: 'Employee ID',
                    dataIndex: 'employeeid',
                    key: 'employeeid',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.employeeid
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
                    title: 'Level Of Experience',
                    dataIndex: 'levelofexperience',
                    key: 'levelofexperience',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.levelofexperience
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
                    title: 'Area of Work',
                    dataIndex: 'areaofwork',
                    key: 'areaofwork',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.areaofwork
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
                    title: 'Zip Code',
                    dataIndex: 'zipcode',
                    key: 'zipcode',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.zipcode
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
                    title: 'Hourly Rate ($/hr)',
                    dataIndex: 'hourlyrate',
                    key: 'hourlyrate',
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.hourlyrate
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
                    title: 'Actions',
                    key: 'actions',
                    scopedSlots: { customRender: 'actions' },
                },
            ],
        };
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