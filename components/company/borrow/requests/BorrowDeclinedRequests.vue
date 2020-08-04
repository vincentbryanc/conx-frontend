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
                    <a-button @click="showModal">View <a-icon type="eye"></a-icon></a-button>
                </span>
            </a-table>
        </div>
        <a-modal v-model="visible" title="Request Details" on-ok="handleOk" :width="550">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Close
                </a-button>
            </template>
            <div>
                <p><b>Employee ID: </b> AOV000001</p>
                <p><b>Hourly Rate ($/hr): </b> $85</p>
                <p><b>Duration of Request: </b> July 20, 2020 - July 24, 2020</p>
                <p><b>Requested By: </b> Danny Sullivan</p>
                <p><b>Contact Number: </b> (724) 824-1233</p>
                <p><b>Address: </b> 5804 Forbes Avenue, Pittsburgh, PA 15217</p>
                <p><b>Requester Note: </b> Requesting this employees</p>
                <p><b>Declined Date: </b> July 15, 2020</p>
                <p><b>Declined By: </b> Natasha Romanoff (Owner)</p>
                <p><b>Approver Note: </b> Declined!</p>
            </div>
        </a-modal>
    </div>
</template>

<script>
const data = [
    {
        key: '1',
        declineddate: 'July 15, 2020',
        employeeid: 'AOV00001',
        levelofexperience: 'Master',
        areaofwork: 'Commercial, Industrial, Residential',
        zipcode: '95035',
        hourlyrate: '$85',
    },
];
export default {
    name: "BorrowDeclinedRequests",
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
                    title: 'Declined Date',
                    dataIndex: 'declineddate',
                    key: 'declineddate',
                    sorter: (a, b) => { return a.declineddate.localeCompare(b.declineddate)},
                    scopedSlots: {
                        filterDropdown: 'filterDropdown',
                        filterIcon: 'filterIcon',
                        customRender: 'customRender',
                    },
                    onFilter: (value, record) =>
                        record.declineddate
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
                    title: 'Level of Experience',
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