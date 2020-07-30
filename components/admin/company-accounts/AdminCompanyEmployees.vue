<template>
    <div>
        <div>
            <p><b>No. of Employees: </b> <span>8</span></p>
            <p><b>No. of Loaned Employees: </b> <span>3</span></p>
            <p><b>No. of Borrowed Employees: </b> <span>3</span></p>
        </div>
        <div class="table-responsive">
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
                    <nuxt-link to="/admin/company-accounts/employee-information"><a-button>View <a-icon type="eye" /></a-button></nuxt-link>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        name: 'Steve Rogers',
        employeeid: 'AOV000001',
        levelofexperience: 'Master',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$85',
    },
    {
        key: '2',
        name: 'Thor Odinson',
        employeeid: 'AOV000002',
        levelofexperience: 'Master',
        areaofwork: 'Industrial, Fire Alarm, Security',
        zipcode: '95035',
        hourlyrate: '$60',
    },
    {
        key: '3',
        name: 'Kim Tan',
        employeeid: 'AOV000003',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '4',
        name: 'Luke Charles',
        employeeid: 'AOV000004',
        levelofexperience: '2nd Year',
        areaofwork: 'Industrial, Fire Alarm, Security',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '5',
        name: 'Rylan Bain',
        employeeid: 'AOV000005',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '6',
        name: 'Gail Vo',
        employeeid: 'AOV000006',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '7',
        name: 'Leo Mosley',
        employeeid: 'AOV000007',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '8',
        name: 'Rory Tierney',
        employeeid: 'AOV000008',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
];

export default {
    name: "CompanyEmployees",
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
                            });
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