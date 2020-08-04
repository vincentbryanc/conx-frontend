<template>
    <div>
        <h3><b>List of Requested Employees</b></h3>
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
                    <a-button>Remove <a-icon type="close"></a-icon></a-button>
                </span>
            </a-table>
        </div>
        <a-row>
            <a-form>
                <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                    <p><b> Contact Name: </b><span>Danny Sullivan</span></p>
                    <p><b> Contact Person: </b><span>(724) 824-1233</span></p>
                    <p><b> Contact Address: </b><span>5804 Forbes Ave, Pittsburgh, PA 15217</span></p>
                </a-col>
                <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                    <a-form-model-item label="Note">
                        <a-input type="textarea" rows="5" />
                    </a-form-model-item>
                </a-col>
                <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }" class="text-right">
                    <nuxt-link to="/company/borrow/search">
                        <a-button type="primary">Cancel <a-icon type="close"></a-icon></a-button>
                    </nuxt-link>
                    <nuxt-link to="/company/borrow/pending-requests">
                        <a-button type="success">Submit Request <a-icon type="check"></a-icon></a-button>
                    </nuxt-link>
                </a-col>
            </a-form>
        </a-row>
    </div>
</template>

<script>
import moment from 'moment';
const data = [
    {
        key: '1',
        durationofrequest: 'July 20, 2020 - July 24, 2020',
        employeeid: 'AOV000001',
        zipcode: '95035',
        levelofexperience: 'Master',
        areaofwork: 'Commercial',
        hourlyrate: '$85',
    },
    {
        key: '2',
        durationofrequest: 'July 20, 2020 - July 24, 2020',
        employeeid: 'AOV000002',
        zipcode: '95035',
        levelofexperience: 'Industrial, Fire Alarm, Security',
        areaofwork: 'Industrial, Fire Alarm, Security',
        hourlyrate: '$60',
    },
];
export default {
    name: "BorrowCart",
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
    computed: {
        columns() {
            const columns = [
                {
                    title: 'Duration of Request',
                    dataIndex: 'durationofrequest',
                    key: 'durationofrequest',
                    sorter: (a, b) => { return a.durationofrequest.localeCompare(b.durationofrequest)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.durationofrequest
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
        moment,
        range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledDate(current) {
            return current < moment().subtract(1, "day");;
        },
    },
}
</script>

<style>
/* .ant-pagination-item {
    display: none!important;
} */
</style>