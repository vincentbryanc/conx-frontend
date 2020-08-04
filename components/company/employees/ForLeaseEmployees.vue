<template>
    <div>
        <div class="text-right">
            <a-button type="link" v-on:click="isAdvancedSearchHidden = !isAdvancedSearchHidden">Advance Search</a-button>
            <div v-if="!isAdvancedSearchHidden">
                <a-form layout="inline">
                    <a-form-item label="Status">
                        <a-radio-group>
                            <a-radio value="loaned">
                                Loaned
                            </a-radio>
                            <a-radio value="available">
                                Available
                            </a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="Date">
                        <a-date-picker class="date-picker" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="default">Search <a-icon type="search"></a-icon></a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
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
                    <nuxt-link to="/company/employees/view"><a-button>View <a-icon type="eye" /></a-button></nuxt-link>
                    <nuxt-link to="/company/employees/edit"><a-button>Edit <a-icon type="edit" /></a-button></nuxt-link>
                    <a-button type="primary">Reserve <a-icon type="interaction" /></a-button>
                    <a-button type="danger">Release <a-icon type="close" /></a-button>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        name: 'Kim Tan',
        employeeid: 'AOV000001',
        expertise: 'Electrical',
        levelofexperience: 'Master',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$85',
    },
    {
        key: '2',
        name: 'Thor Odinson',
        employeeid: 'AOV000002',
        expertise: 'Electrical',
        levelofexperience: 'Master',
        areaofwork: 'Industrial, Fire Alarm, Security',
        zipcode: '95035',
        hourlyrate: '$60',
    },
    {
        key: '3',
        name: 'Luke Charles',
        employeeid: 'AOV000004',
        expertise: 'Electrical',
        levelofexperience: '2nd Year',
        areaofwork: 'Industrial, Fire Alarm, Security',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '4',
        name: 'Rylan Bain',
        employeeid: 'AOV000005',
        expertise: 'Electrical',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '5',
        name: 'Gail Vo',
        employeeid: 'AOV000006',
        expertise: 'Electrical',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '6',
        name: 'Leo Mosley',
        employeeid: 'AOV000007',
        expertise: 'Electrical',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
    {
        key: '7',
        name: 'Rory Tierney',
        employeeid: 'AOV000008',
        expertise: 'Electrical',
        levelofexperience: 'Journeyman',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$100',
    },
];
export default {
    name: "ReservedEmployees",
    data() {
        return {
            isAdvancedSearchHidden: true,
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
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: (a, b) => { return a.name.localeCompare(b.name)},
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
                    sorter: (a, b) => { return a.employeeid.localeCompare(b.employeeid)},
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
                    title: 'Expertise',
                    dataIndex: 'expertise',
                    key: 'expertise',
                    sorter: (a, b) => { return a.expertise.localeCompare(b.expertise)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.expertise
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
                    sorter: (a, b) => { return a.levelofexperience.localeCompare(b.levelofexperience)},
                    filters: [
                        {
                            text: 'Master',
                            value: 'Master',
                        },
                        {
                            text: 'Journeyman',
                            value: 'Journeyman',
                        },
                        {
                            text: '1st Year',
                            value: '1st Year',
                        },
                        {
                            text: '2nd Year',
                            value: '2nd Year',
                        },
                        {
                            text: '3rd Year',
                            value: '3rd Year',
                        },
                        {
                            text: '4th Year',
                            value: '4th Year',
                        },
                    ],
                    filterMultiple: true,
                    onFilter: (value, record) => record.levelofexperience.indexOf(value) === 0,
                },
                {
                    title: 'Area of Work',
                    dataIndex: 'areaofwork',
                    key: 'areaofwork',
                    sorter: (a, b) => { return a.areaofwork.localeCompare(b.areaofwork)},
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
                    sorter: (a, b) => { return a.zipcode.localeCompare(b.zipcode)},
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
                    sorter: (a, b) => { return a.hourlyrate.localeCompare(b.hourlyrate)},
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
/* .ant-pagination-item {
    display: none!important;
} */
</style>